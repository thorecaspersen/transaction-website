// Writes tools/i18n/work/glossary/<code>.json (the app's own words for UI labels the site mentions) and
// work/targets.json (every language the app has a translation file for). Reads the app repo next to this one,
// or the folder in APP_TRANSLATIONS.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import vm from 'node:vm';
const APP = process.env.APP_TRANSLATIONS ?? new URL('../../../Transaction.Live.MobileApp/Transaction.MobileApp/src/translations', import.meta.url).pathname;
const SITE = new URL('../..', import.meta.url).pathname;
const W = new URL('./work/', import.meta.url).pathname;
const load = (f) => {
  const src = readFileSync(`${APP}/${f}.ts`, 'utf8').replace(/^import .*$/gm, '').replace(/export default\s+/, '__out = ');
  const ctx = { defineTranslation: (x) => x, __out: null };
  vm.runInNewContext(src, ctx);
  return ctx.__out.translation ?? ctx.__out;
};
const flat = (o, p = '', out = {}) => { for (const [k, v] of Object.entries(o)) { const q = p ? `${p}.${k}` : k; if (typeof v === 'string') out[q] = v; else if (v && typeof v === 'object') flat(v, q, out); } return out; };
const en = flat(load('en'));
const source = JSON.parse(readFileSync(`${SITE}/content/i18n/source.json`, 'utf8'));
const text = Object.values(source).map((s) => s.en).join('\n');
const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const picked = {};
for (const [path, v] of Object.entries(en)) {
  const s = v.trim();
  if (s.length < 3 || s.length > 48 || /\{\{|<|\n/.test(s) || picked[s]) continue;
  const e = esc(s);
  const ui = new RegExp(`[“"]${e}[”"]|→ ${e}\\b|\\b${e} →`);
  const title = s.split(' ').length >= 2 && /^[A-Z]/.test(s) && new RegExp(`\\b${e}\\b`).test(text);
  if (ui.test(text) || title) picked[s] = path;
}
mkdirSync(`${W}glossary`, { recursive: true });
const langs = JSON.parse(readFileSync(`${SITE}/content/data/languages.json`, 'utf8'));
const targets = [];
for (const l of langs) {
  if (l.code === 'en' || l.code === 'da') continue;
  const file = l.code === 'kk' ? 'kkCyrl' : l.code.replace(/-/g, '');
  if (!existsSync(`${APP}/${file}.ts`)) continue;
  targets.push({ code: l.code, native: l.native, english: l.english, rtl: l.rtl, group: l.group, decimal: l.decimal, app: file });
  let tr; try { tr = flat(load(file)); } catch (err) { console.error('fail', file, err.message); continue; }
  const g = {};
  for (const [s, path] of Object.entries(picked)) if (tr[path] && tr[path] !== s) g[s] = tr[path];
  writeFileSync(`${W}glossary/${l.code}.json`, JSON.stringify(g, null, 1));
}
writeFileSync(`${W}targets.json`, JSON.stringify(targets, null, 1));
console.log('terms', Object.keys(picked).length, 'targets', targets.length);
console.log(Object.keys(picked).slice(0, 80).join(' | '));
