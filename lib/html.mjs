import { existsSync, readFileSync } from 'node:fs';
import { site, pageById } from '../content/site.mjs';
import { esc, t, ta, L, plain, currentLang } from './i18n.mjs';

const languages = JSON.parse(readFileSync(new URL('../content/data/languages.json', import.meta.url), 'utf8'));
export const languageByCode = new Map(languages.map((l) => [l.code, l]));

// Filled by build.mjs with every language that gets its own copy of the site.
export const builtLangs = [];
export const langBase = (code = currentLang()) => (code === 'en' ? '' : `/${code}`);

// Picks the page's language before it paints. English pages move to the visitor's language: the one
// they chose before, else the first browser language the site has. Pages in any other language
// stay put, so a shared link opens in the language it was shared in. Falls back to English.
const boot = (codes) =>
  `(function(){var r=document.documentElement,c=r.lang,p=r.getAttribute('data-path'),L=${JSON.stringify(codes)},A={no:'nb',iw:'he','in':'id',tl:'fil',ji:'yi',mo:'ro'};` +
  `function f(x){x=String(x||'').toLowerCase();for(var i=0;i<L.length;i++)if(L[i].toLowerCase()===x)return L[i];return null}` +
  `function m(t){var s=String(t||'').replace(/_/g,'-').split('-'),b=(A[s[0].toLowerCase()]||s[0]).toLowerCase(),k,x;s[0]=b;` +
  `if(b==='zh'){var h=s.slice(1).join('-').toLowerCase();return /hk|mo/.test(h)?f('zh-Hant-HK')||f('zh-Hant-TW'):/tw|hant/.test(h)?f('zh-Hant-TW')||f('zh-Hant-HK'):f('zh-Hans')}` +
  `for(k=s.length;k>0;k--)if(x=f(s.slice(0,k).join('-')))return x;for(k=0;k<L.length;k++)if(L[k].toLowerCase().split('-')[0]===b)return L[k];return null}` +
  `var w=null,q=null;try{q=f(new URLSearchParams(location.search).get('lang'));if(q)localStorage.setItem('lang',q);w=q||f(localStorage.getItem('lang'))}catch(e){}` +
  `if(!q&&c!=='en')return;if(!w){var n=navigator.languages||[navigator.language];for(var i=0;i<n.length&&!w;i++)w=m(n[i])}` +
  `if(p&&w&&w!==c)location.replace((w==='en'?'':'/'+w)+p+location.hash)})();`;

export const href = (id, hash = '') => `${pageById[id].path}${hash}`;

export const doc = ({ page, body, css = [], js = [], head = '', bodyAttrs = '', themeColor = '#111827' }) => {
  const code = currentLang();
  const real = !page.file;
  const url = `${site.url}${real ? langBase() + page.path : '/'}`;
  return `<!doctype html>
<html lang="${code}"${languageByCode.get(code)?.rtl ? ' dir="rtl"' : ''}${real ? ` data-path="${page.path}"` : ''}>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>${esc(plain(page.title))}</title>
<meta name="description" content="${esc(plain(page.description))}">
<meta name="theme-color" content="${themeColor}">
<link rel="canonical" href="${url}">
${real ? [...builtLangs.map((c) => `<link rel="alternate" hreflang="${c}" href="${site.url}${langBase(c)}${page.path}">`), `<link rel="alternate" hreflang="x-default" href="${site.url}${page.path}">`].join('\n') : ''}
<link rel="icon" href="/assets/icon-64.png" sizes="64x64" type="image/png">
<link rel="apple-touch-icon" href="/assets/icon-180.png">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${site.name}">
<meta property="og:title" content="${esc(plain(page.title))}">
<meta property="og:description" content="${esc(plain(page.description))}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${site.url}/assets/og.png">
<meta name="twitter:card" content="summary_large_image">
<script>${boot(builtLangs)}</script>
<link rel="stylesheet" href="/base.css">
${css.map((c) => `<link rel="stylesheet" href="${c}">`).join('\n')}
${head}
</head>
<body${bodyAttrs ? ` ${bodyAttrs}` : ''}>
${body}
<script src="/lang.js" defer></script>
${js.map((j) => `<script src="${j}" defer></script>`).join('\n')}
</body>
</html>
`;
};

// Page links written as plain paths ("/tos/", "/") point at the current language's copy.
export const localizeLinks = (html, paths) => {
  const base = langBase();
  if (!base) return html;
  return html.replace(/href="(\/[^"#?]*)([^"]*)"/g, (all, path, rest) => (paths.has(path) ? `href="${base}${path}${rest}"` : all));
};

export const redirectPage = (to) => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="refresh" content="0; url=${to}">
<link rel="canonical" href="${site.url}${to}">
<title>${site.name}</title>
</head>
<body><p><a href="${to}">${site.domain}${to}</a></p></body>
</html>
`;

const ownMedia = () => (currentLang() === 'da' ? 'da' : 'en');

const badge = (file, ext, size, alt) => {
  const l = ownMedia();
  return `<img src="/badges/${file}-${l}.${ext}" lang="${l}" ${ta('alt', alt)} width="${size[l][0]}" height="${size[l][1]}" decoding="async">`;
};

export const storeLinks = (cls = 'stores') => `<div class="${cls}">
<a class="store-badge" data-store="apple" href="${site.appStore}" rel="nofollow">${badge('app-store', 'svg', { en: [144, 48], da: [144, 48] }, L('Download on the App Store', 'Hent i App Store'))}</a>
<a class="store-badge" data-store="google" href="${site.googlePlay}" rel="nofollow">${badge('google-play', 'png', { en: [183, 71], da: [160, 62] }, L('Get it on Google Play', 'Hent i Google Play'))}</a>
</div>`;

export const filmReady = existsSync(new URL('../shared/static/media/film-en.mp4', import.meta.url));

export const film = ({ cls = 'film', controls = true, autoplay = false } = {}) => {
  const l = ownMedia();
  return `<video class="${cls}"${l === currentLang() ? '' : ` lang="${l}"`} ${controls ? 'controls ' : ''}${autoplay ? 'autoplay muted loop ' : ''}playsinline preload="${autoplay ? 'auto' : 'none'}" poster="/media/film-${l}.jpg" width="1920" height="1080"${filmReady ? '' : ' data-pending'}><source src="/media/film-${l}.mp4" type="video/mp4"></video>`;
};

export const mail = () => `<a href="mailto:${site.email}">${site.email}</a>`;
