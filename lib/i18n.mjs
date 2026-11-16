import { createHash } from 'node:crypto';

export const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const L = (en, da) => ({ en, da });

// Translations other than Danish live in content/i18n/<code>.json, keyed by a hash of the English
// text, with HTML tags swapped for numbered tokens: <1>…</1> wraps text, <2/> stands alone.
export const keyOf = (en) => createHash('sha1').update(en).digest('hex').slice(0, 12);

export const tokenize = (s) => {
  const tags = [];
  const open = [];
  const text = s.replace(/<svg\b[\s\S]*?<\/svg>|<\/?[a-zA-Z][^>]*>/g, (m) => {
    if (m[1] === '/' && open.length) {
      const n = open.pop();
      tags[n - 1].push(m);
      return `</${n}>`;
    }
    if (m[1] === '/' || m.startsWith('<svg') || m.endsWith('/>') || /^<(br|img|hr|wbr|input|source)\b/i.test(m)) {
      tags.push(m);
      return `<${tags.length}/>`;
    }
    tags.push([m]);
    open.push(tags.length);
    return `<${tags.length}>`;
  });
  return { text, tags };
};

const tokens = (s) => (s.match(/<\/?\d+\/?>/g) || []).sort().join();

const restore = (en, translated) => {
  const { text, tags } = tokenize(en);
  if (tokens(text) !== tokens(translated) || /<[a-zA-Z]/.test(translated)) return null;
  return translated.replace(/<(\/?)(\d+)(\/?)>/g, (_, close, n, self) => {
    const tag = tags[n - 1];
    return self ? tag : close ? tag[1] : tag[0];
  });
};

let lang = 'en';
let dict = {};
let cache = new Map();
let record = null;
let page = '';

export const setLang = (code, translations = {}) => {
  lang = code;
  dict = translations;
  cache = new Map();
};

export const currentLang = () => lang;

export const startRecording = () => (record = new Map());
export const recordPage = (id) => (page = id);
export const stopRecording = () => {
  const r = record;
  record = null;
  return r;
};

const resolve = (x) => {
  if (record) {
    const k = keyOf(x.en);
    if (!record.has(k)) record.set(k, { en: x.en, da: x.da, page });
  }
  if (lang === 'en') return x.en;
  if (lang === 'da') return x.da ?? null;
  const k = keyOf(x.en);
  if (!cache.has(k)) cache.set(k, dict[k] == null ? null : restore(x.en, dict[k]));
  return cache.get(k);
};

export const tr = (x) => (x == null ? '' : typeof x === 'string' ? x : resolve(x) ?? x.en);

export const t = (x) => {
  if (x == null) return '';
  if (typeof x === 'string') return x;
  const v = resolve(x);
  return v == null ? `<span lang="en">${x.en}</span>` : v;
};

export const tb = (tag, x, attrs = '') => {
  if (x == null) return '';
  const a = attrs ? ` ${attrs}` : '';
  if (typeof x === 'string') return `<${tag}${a}>${x}</${tag}>`;
  const v = resolve(x);
  return v == null ? `<${tag} lang="en"${a}>${x.en}</${tag}>` : `<${tag}${a}>${v}</${tag}>`;
};

export const ta = (name, x) => `${name}="${esc(tr(x))}"`;

export const plain = (x) => tr(x).replace(/<[^>]+>/g, '');
