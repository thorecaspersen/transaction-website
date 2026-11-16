import { doc, href, languageByCode, storeLinks, film, mail } from '../../lib/html.mjs';
import { t, tb, ta, tr, currentLang } from '../../lib/i18n.mjs';
import { site, nav } from '../../content/site.mjs';
import * as H from '../../content/home.mjs';
import * as P from '../../content/pages.mjs';
import { bodies, footerLinks, languageList, languageGrid, currencyTable, currencyList, sampleNumber } from '../../lib/sections.mjs';
import { phone, device, shot, templateColors, values } from '../../shared/phone.mjs';
import { watch } from '../../shared/watch.mjs';
import { C } from './copy.mjs';

const map = (x, fn) => fn(tr(x));
const unjoined = /^[\p{Script=Latin}\p{Script=Greek}\p{Script=Cyrillic}\p{Script=Armenian}\p{Script=Georgian}\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Hangul}\p{P}\p{N}\p{S}]+$/u;
const letters = (w) => (unjoined.test(w) ? [...new Intl.Segmenter().segment(w)].map((s) => s.segment) : [w]);
const brk = (x) => map(x, (s) => s.replace(/([.!?])\s+([^.!?]+[.!?])$/, '$1<br>$2'));
const emFirst = (x) => map(x, (s) => s.replace(/^(.+?[.!?:])(?=\s|$)/, '<strong>$1</strong>'));
const emLast = (x) => map(x, (s) => s.replace(/([.!?])\s+([^.!?]+[.!?])$/, '$1 <strong>$2</strong>'));
const dot = (x) => map(x, (s) => (/[.!?]$/.test(s) ? s : `${s}.`));
const shortTitle = (x) => map(x, (s) => s.replace(/\s\|\s.*$/, ''));
const linkLabel = (id) => nav.footer.flatMap((g) => g.links).find((l) => l.id === id).label;
const nativeLang = (c) => (c === 'en' ? 'en-US' : c === 'da' ? 'da-DK' : c);
const pw = (name, opts = {}) => phone(name, { width: 'var(--pw, 300px)', ...opts });
const watchRow = (keys) => `<div class="wt-row">${keys.map((k) => watch(k, { width: 'var(--ww, 200px)' })).join('')}</div>`;
const zoom = (inner) => `<button class="zoom" type="button" ${ta('aria-label', C.enlarge)}>${inner}</button>`;
const paper = (key) => `<img class="paper" src="/shots/${key}.webp" ${ta('alt', C.paper.alt)} width="${C.paper.w}" height="${C.paper.h}" loading="lazy" decoding="async">`;
const typed = (lines) => {
  let n = 0;
  return `<p class="kinds-lines">${lines
    .map(tr)
    .map((s) => `<span class="kl"><span class="visually-hidden">${s}</span><span aria-hidden="true">${s.split(' ').map((w) => `<span class="w">${letters(w).map((c) => `<span class="c" style="--i:${n++}">${c}</span>`).join('')}</span>`).join(' ')}</span></span>`)
    .join('')}</p>`;
};

const chev = '<svg class="chev" viewBox="0 0 8 14" aria-hidden="true"><path d="M1.5 1.5 6.5 7l-5 5.5"/></svg>';
const chevDown = '<svg viewBox="0 0 16 10" aria-hidden="true"><path d="M1.5 1.75 8 8.25l6.5-6.5"/></svg>';
const more = (id, text, hash = '') => `<a class="more" href="${href(id, hash)}">${t(text)}${chev}</a>`;
const svg = (body, cls = 'glyph', box = 24) => `<svg class="${cls}" viewBox="0 0 ${box} ${box}" aria-hidden="true">${body}</svg>`;

const kindGlyph = {
  transactions: svg('<circle cx="20" cy="20" r="18"/><path d="M14 26 26 14M17 14h9v9"/>', 'kglyph', 40),
  'shared-expenses': svg('<circle cx="15.5" cy="20" r="10.5"/><circle cx="24.5" cy="20" r="10.5"/>', 'kglyph', 40),
  'incoming-payments': svg('<circle cx="20" cy="20" r="18"/><path d="M26 14 14 26M23 26h-9v-9"/>', 'kglyph', 40),
};

const toolIcon = {
  receipt: svg('<path d="M6 3.5h12v17l-2-1.3-2 1.3-2-1.3-2 1.3-2-1.3-2 1.3z"/><path d="M9 8.5h6M9 12h6M9 15.5h3.5"/>'),
  offline: svg('<path d="M7.2 18.5h9.6a3.9 3.9 0 0 0 .6-7.75A5.6 5.6 0 0 0 6.6 9.4a4.6 4.6 0 0 0 .6 9.1z"/><path d="M4 4l16 16"/>'),
  search: svg('<circle cx="10.8" cy="10.8" r="6.3"/><path d="M20 20l-4.6-4.6"/>'),
  export: svg('<path d="M13.5 3.5H7A1.5 1.5 0 0 0 5.5 5v14A1.5 1.5 0 0 0 7 20.5h10a1.5 1.5 0 0 0 1.5-1.5V8.5z"/><path d="M13.5 3.5v5h5M12 11.5v6M9.5 15l2.5 2.5 2.5-2.5"/>'),
  space: svg('<path d="M4 15.5v-9A2 2 0 0 1 6 4.5h8a2 2 0 0 1 2 2v4.5a2 2 0 0 1-2 2H7z"/><path d="M19 8.8a1.6 1.6 0 0 1 1 1.5V19l-2.6-2.4H11a2 2 0 0 1-2-2v-.6"/>'),
  split: svg('<path d="M12 21v-8M12 13 6.5 7.5M12 13l5.5-5.5"/><path d="M6 11.5v-4.5h4.5M18 11.5v-4.5h-4.5"/>'),
  tag: svg('<path d="M3.5 12.2V5A1.5 1.5 0 0 1 5 3.5h7.2l8.3 8.3-8.7 8.7z"/><circle cx="8.2" cy="8.2" r="1.4"/>'),
  photo: svg('<rect x="3.5" y="5" width="17" height="14" rx="2.5"/><circle cx="9" cy="10" r="1.7"/><path d="M4.5 17.5 9 13l3.5 3.5L15 14l4.5 4.5"/>'),
  tip: svg('<rect x="5.5" y="3" width="13" height="18" rx="2.5"/><path d="M8.5 7h7M9 11h.01M12 11h.01M15 11h.01M9 14.5h.01M12 14.5h.01M15 14.5h.01M9 18h.01M12 18h.01M15 18h.01"/>'),
  bulk: svg('<rect x="7.5" y="7.5" width="13" height="13" rx="2"/><path d="M4 16.5V5.5A1.5 1.5 0 0 1 5.5 4h11M10.8 14l2.2 2.2 4.2-4.4"/>'),
  dark: svg('<circle cx="12" cy="12" r="8.5"/><path d="M12 3.5a8.5 8.5 0 0 1 0 17z" class="fill"/>'),
};

const modeGlyph = [
  svg('<rect x="6" y="3.5" width="12" height="17" rx="2.5"/><path d="M9 8h6M9 11.5h6M9 15h3"/>'),
  svg('<rect x="6" y="3.5" width="12" height="17" rx="2.5"/><path d="M9.2 12.2l2 2 3.8-4"/>'),
  svg('<rect x="5.5" y="10.5" width="13" height="10" rx="2"/><path d="M8.5 10.5V7.8a3.5 3.5 0 0 1 7 0v2.7"/>'),
];

const entry = (example, cls = 'entry') => {
  const [title, amount, ...rest] = tr(example).split(' · ');
  return `<div class="${cls}"><p class="entry-amt">${amount}</p><p class="entry-title">${title}</p>${rest.length ? `<p class="entry-meta">${rest.join(' · ')}</p>` : ''}</div>`;
};

const kinds = ['transactions', 'shared-expenses', 'incoming-payments'];
const navItem = (l, current, cls) => `<a class="${cls}" href="${href(l.id)}"${l.id === current ? ' aria-current="page"' : ''}>${t(l.label)}</a>`;
const barNav = (current) =>
  nav.main
    .filter((l) => !kinds.includes(l.id) || l.id === kinds[0])
    .map((l) =>
      l.id === kinds[0]
        ? `<details class="bar-sub"><summary class="bar-link${kinds.includes(current) ? ' is-current' : ''}">${t(C.saved)}${chevDown}</summary><div class="bar-fly">${nav.main
            .filter((k) => kinds.includes(k.id))
            .map(
              (k) =>
                `<a class="bar-kind" href="${href(k.id)}"${k.id === current ? ' aria-current="page"' : ''}>${kindGlyph[k.id]}<span><span class="bar-kind-name">${t(k.label)}</span>${tb('span', H.items.list.find((x) => x.id === k.id).line, 'class="bar-kind-line"')}</span></a>`
            )
            .join('')}</div></details>`
        : navItem(l, current, 'bar-link')
    )
    .join('');
const dropNav = (current) =>
  nav.main
    .map((l) => (kinds.includes(l.id) ? `${l.id === kinds[0] ? `<p class="bar-dhead">${t(C.saved)}</p>` : ''}${navItem(l, current, 'bar-dlink is-sub')}` : navItem(l, current, 'bar-dlink')))
    .join('');

const globe = svg('<circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="3.8" ry="9"/><path d="M3 12h18"/>', 'bar-lang-globe');
const cross = '<svg viewBox="0 0 14 14" aria-hidden="true"><path d="M2 2l10 10M12 2 2 12"/></svg>';
const langButton = () => {
  const code = currentLang();
  return `<button class="bar-lang" type="button" aria-haspopup="dialog" aria-controls="lang-picker" aria-labelledby="lang-open lang-now"><span class="visually-hidden" id="lang-open">${t(C.language.open)}</span>${globe}<span class="bar-lang-name" id="lang-now">${languageByCode.get(code).native}</span><span class="bar-lang-code" aria-hidden="true">${code.split('-')[0].toUpperCase()}</span>${chevDown}</button>`;
};
const langDialog = () => `<dialog class="lp" id="lang-picker" aria-labelledby="lp-title"><div class="lp-in">
<div class="lp-head">${tb('h2', C.language.title, 'class="lp-title" id="lp-title"')}<button class="lp-x" type="button" ${ta('aria-label', C.close)}>${cross}</button></div>
<div class="lp-search">${toolIcon.search}<input type="search" ${ta('placeholder', C.language.search)} ${ta('aria-label', C.language.search)} autocomplete="off" autocapitalize="off" spellcheck="false" enterkeyhint="go"><button class="lp-clear" type="button" ${ta('aria-label', C.language.clear)} hidden>${cross}</button></div>
<div class="lp-list"><ul class="lp-pin"></ul>${tb('h3', C.language.all, 'class="lp-h"')}<ul class="lp-all"></ul>${tb('p', C.language.none, 'class="lp-none" hidden')}</div>
</div></dialog>`;

const header = (page) => `<a class="skip" href="#main">${t(C.skip)}</a>
<header class="bar"><div class="bar-in">
<a class="bar-brand" href="/"${page.id === 'home' ? ' aria-current="page"' : ''}><img src="/assets/icon-64.png" alt="" width="64" height="64"><span>Transaction</span></a>
<nav class="bar-nav" ${ta('aria-label', C.pages)}>${barNav(page.id)}</nav>
<details class="bar-menu"><summary ${ta('aria-label', C.menu)}>${chevDown}</summary><nav class="bar-drop" ${ta('aria-label', C.pages)}>${dropNav(page.id)}${navItem({ id: 'download', label: C.getApp }, page.id, 'bar-dlink is-get')}</nav></details>
${navItem({ id: 'download', label: C.getApp }, page.id, 'bar-cta')}
${langButton()}
</div></header>
${langDialog()}`;

const footer = (page) => `<footer class="ft"><div class="wrap">
<nav class="ft-crumb" ${ta('aria-label', C.crumb)}><a href="/"><img src="/assets/icon-64.png" alt="" width="64" height="64" loading="lazy"><span>Transaction</span></a>${page.id === 'home' ? '' : `${chev}<span>${t(shortTitle(page.title))}</span>`}</nav>
<div class="ft-cols">${footerLinks()}</div>
${page.id === 'download' ? '' : `<div class="ft-get">${storeLinks('stores')}<p>${t(site.requirements)}</p></div>`}
<div class="ft-base"><p>${t(dot(site.tagline))}</p><p>${t(C.contact)}: ${mail()}</p></div>
</div></footer>`;

const subHero = ({ acc, h1, lede, after = '', media = '' }) => `<section class="ch ch--black sub-hero${media ? '' : ' is-center'}" data-acc="${acc}"><div class="wrap sub-hero-grid">
<div class="sub-hero-copy">${tb('h1', h1, 'class="h-hero"')}${lede ? tb('p', lede, 'class="t-intro"') : ''}${after}</div>
${media ? `<div class="sub-hero-media">${media}</div>` : ''}
</div></section>`;

const homeHero = () => `<section class="ch ch--black hero" data-acc="green"><div class="wrap hero-grid">
<div class="hero-copy">
${tb('h1', brk(H.hero.title), 'class="h-hero hero-title"')}
<p class="hero-brand">${t(dot(site.tagline))}</p>
${tb('p', emLast(H.hero.lede), 'class="t-intro hero-lede"')}
${storeLinks('stores')}
${tb('p', H.hero.note, 'class="t-small hero-note"')}
<a class="more hero-more" href="#how">${t(H.hero.more)}${chev}</a>
</div>
<div class="hero-stage"><div class="hero-phone">${phone('list-full', { width: 'var(--hero-w, 300px)', eager: true })}</div><div class="hero-floor" aria-hidden="true"></div></div>
</div></section>`;

const homeMoment = () => `<section class="ch ch--black moment" id="how" data-acc="green"><div class="wrap moment-in">
<h2 class="moment-t">${tb('span', C.moment.date, 'class="moment-date"')}<span class="moment-time">${C.moment.time}</span>${tb('span', C.moment.line, 'class="moment-line"')}</h2>
</div></section>`;

const homeBank = () => {
  const b = H.bankVsApp;
  return `<section class="ch ch--grey bank" data-acc="blue"><div class="wrap">
<header class="ch-head">${tb('h2', brk(b.title), 'class="h-xl"')}</header>
<div class="bank-statement"><p class="bank-label">${t(b.bankLabel)}</p><div class="bank-strip"><samp class="bank-line">${b.bankLine}</samp></div><div class="bank-aside" style="--n:${b.bankLine.length}">${tb('p', b.bankNote, 'class="bank-note"')}</div></div>
<div class="bank-app"><p class="bank-label">${t(b.appLabel)}</p><dl class="ten">${b.fields.map((f) => `<div>${tb('dt', f.label)}<dd>${t(f.value)}</dd></div>`).join('')}</dl></div>
${tb('p', emLast(b.caption), 'class="t-intro bank-caption"')}
</div></section>`;
};

const homeKinds = () => `<section class="ch ch--black kinds" data-acc="purple"><div class="wrap">
<header class="ch-head">${tb('h2', H.items.title, 'class="h-xl"')}${typed(H.items.lines)}</header>
<div class="kinds-grid">${H.items.list
  .map(
    (it) => `<article class="kind">
${tb('h3', it.name, 'class="h-m"')}${tb('p', it.line, 'class="kind-line"')}
<div class="kind-entry">${kindGlyph[it.id]}${entry(it.example)}</div>
<a class="more" href="${href(it.id)}">${t(H.items.more)}<span class="visually-hidden">: ${t(it.name)}</span>${chev}</a>
</article>`
  )
  .join('')}</div>
</div></section>`;

const homeTour = () => {
  const p = H.powerUser;
  const steps = C.tour;
  return `<section class="ch ch--white tour" data-acc="green"><div class="wrap">
<header class="ch-head">${tb('h2', p.title, 'class="h-xl"')}${tb('p', p.only, 'class="tour-only"')}${tb('p', emFirst(p.body), 'class="t-intro"')}</header>
</div>
<div class="tour-track" style="--n:${steps.length}"><div class="tour-stick"><div class="tour-stage">
<ol class="tour-caps">${steps
    .map(
      (x, i) =>
        `<li class="tcap${i ? '' : ' is-on'}" data-f="${x.f.join(' ')}"><div class="tcap-copy"><p class="tcap-n">${i + 1} / ${steps.length}</p>${tb('h3', x.h, 'class="tcap-h"')}${tb('p', x.p, 'class="tcap-p"')}</div>${x.shot || x.shots ? `<div class="tcap-shot">${x.paper ? zoom(paper(x.paper)) : ''}${[].concat(x.shots || x.shot).map((k) => zoom(phone(k, { width: 'var(--tw, 150px)' }))).join('')}</div>` : ''}</li>`
    )
    .join('')}</ol>
<div class="tour-view"><div class="tour-phone">${phone('create-long', { width: 'var(--tour-w, 300px)' })}</div></div>
</div></div></div>
<dialog class="lb"><button class="lb-x" type="button" ${ta('aria-label', C.close)}><svg viewBox="0 0 14 14" aria-hidden="true"><path d="M2 2l10 10M12 2 2 12"/></svg></button><div class="lb-in"></div></dialog>
</section>`;
};

const homeBento = () => {
  const b = C.bento;
  const w = P.transactions.ways;
  const codes = currencyList.slice(0, 36).map((c) => c.code).join(' ');
  const nums = ['en', 'da', 'uk'].map((code) => sampleNumber(languageList.find((l) => l.code === code))).join(' · ');
  const big = (n, unit) => `<p class="bt-num"><span class="bt-big">${n}</span>${unit ? `<span class="bt-unit">${t(unit)}</span>` : ''}</p>`;
  return `<section class="ch ch--grey bento" data-acc="green"><div class="wrap">
<header class="ch-head">${tb('h2', brk(H.powerUser.punch), 'class="h-xl"')}</header>
<div class="bento-grid">
<article class="bt bt-zero is-dark" data-acc="green">${big('0', b.zero.unit)}${tb('p', w[0].text, 'class="bt-text"')}<div class="bt-flow" aria-hidden="true"><div class="bt-banner"><span>${t(values.auto.banner)}</span><b>${t(C.edit)}</b></div></div>${more('automation', linkLabel('automation'))}</article>
<article class="bt bt-one" data-acc="blue">${big('1', b.one.unit)}${tb('p', w[1].text, 'class="bt-text"')}<div class="bt-squares" aria-hidden="true">${['green', 'blue', 'orange']
    .map((c) => `<span style="--c:${templateColors[c]}"></span>`)
    .join('')}</div>${more('templates', b.one.more)}</article>
<article class="bt bt-two" data-acc="purple">${big('2', b.two.unit)}${tb('p', b.two.text, 'class="bt-text"')}${more('prefilled', b.two.more)}</article>
<article class="bt bt-cur" data-acc="orange">${big('149', b.cur.unit)}${tb('p', b.cur.text, 'class="bt-text"')}<p class="bt-codes" aria-hidden="true">${codes}</p>${more('currencies', linkLabel('currencies'))}</article>
<article class="bt bt-lang is-dark" data-acc="purple">${big('248', b.lang.unit)}${tb('p', b.lang.text, 'class="bt-text"')}<p class="bt-nums" aria-hidden="true">${nums}</p>${more('languages', linkLabel('languages'))}</article>
<article class="bt bt-off" data-acc="teal"><p class="bt-num"><span class="bt-big bt-word">${t(b.offline.big)}</span></p>${tb('p', b.offline.text, 'class="bt-text"')}${more('offline', b.offline.more)}</article>
<article class="bt bt-csv" data-acc="pink"><p class="bt-num"><span class="bt-big bt-word">CSV</span></p>${tb('p', b.csv.text, 'class="bt-text"')}${more('export', b.csv.more)}</article>
</div>
<p class="bento-more">${more('features', linkLabel('features'))}</p>
</div></section>`;
};

const homeWatch = () => {
  const x = H.watch;
  return `<section class="ch ch--black wrist" data-acc="blue"><div class="wrap">
<header class="ch-head">${tb('h2', brk(x.title), 'class="h-xl"')}${tb('p', x.body, 'class="t-intro"')}</header>
<div class="wrist-stage">${[['watch-keypad', 'watch-keypad-scrolled'], ['wear-keypad', 'wear-keypad-scrolled']]
    .map((keys, i) => `<figure class="wrist-dev"><figcaption>${x.devices[i]}</figcaption>${keys.map((k) => watch(k, { width: 'var(--ww, 200px)' })).join(`<span class="wrist-scroll" aria-hidden="true">${t(x.scroll)}${chevDown}</span>`)}</figure>`)
    .join('')}</div>
<ol class="wrist-steps">${x.steps.map((s) => `<li>${tb('h3', s.name, 'class="h-s"')}${tb('p', s.text, 'class="t-body"')}</li>`).join('')}</ol>
<p class="wrist-more">${more('watch', x.more)}</p>
</div></section>`;
};

const homeFind = () => {
  const x = H.find;
  return `<section class="ch ch--white find" data-acc="blue"><div class="wrap">
<header class="ch-head">${tb('h2', brk(x.title), 'class="h-xl"')}${tb('p', x.body, 'class="t-intro"')}</header>
<div class="find-duo">
<figure class="find-step">${pw('find-map')}<figcaption>${tb('h3', x.map, 'class="h-s"')}</figcaption></figure>
<p class="find-use" aria-hidden="true"><span>${x.use}</span><i class="find-arrow"></i></p>
<figure class="find-step">${pw('find-results')}<figcaption>${tb('h3', x.results, 'class="h-s"')}</figcaption></figure>
</div>
<div class="find-more">
<div class="find-phones">${pw('find-search')}${pw('find-filter')}</div>
<div class="find-copy">${tb('h3', x.moreTitle, 'class="h-l"')}${tb('p', x.moreBody, 'class="t-body"')}
<dl class="find-list">${x.filters.map((f) => `<div>${tb('dt', f.name)}${tb('dd', f.text)}</div>`).join('')}</dl></div>
</div>
</div></section>`;
};

const homeAccounts = () => {
  const a = H.accounts;
  return `<section class="ch ch--black accounts" data-acc="teal"><div class="wrap">
<header class="ch-head">${tb('h2', brk(a.title), 'class="h-xl"')}${tb('p', a.body, 'class="t-intro"')}</header>
<div class="acc-stage">
<ul class="links">${a.examples
    .map(
      (e) =>
        `<li class="link-row"><div class="link-head">${tb('p', e.situation, 'class="link-sit"')}${tb('p', a.method, 'class="link-pm"')}</div><div class="link-line"><span class="chip chip--acc">${t(e.account)}</span><span class="wire"><span class="wire-l" aria-hidden="true"></span><em>${t(a.arrow)}</em></span><span class="chip chip--pm">${t(e.method)}</span></div></li>`
    )
    .join('')}</ul>
<div class="acc-phone">${pw('accounts')}</div>
</div>
${tb('p', a.note, 'class="t-body acc-note"')}
</div></section>`;
};

const homeTaps = () => {
  const x = H.twoTaps;
  return `<section class="ch ch--grey taps" data-acc="blue"><div class="wrap">
<header class="ch-head">${tb('h2', brk(x.title), 'class="h-xl"')}</header>
<div class="taps-grid">
<figure class="tap-col tap-pick">${pw('title-picker')}<figcaption>${tb('h3', C.prefilledName, 'class="h-s"')}${tb('p', x.prefilled, 'class="t-body"')}</figcaption></figure>
<figure class="tap-col tap-def">${pw('create-empty')}<figcaption>${tb('h3', C.defaultsName, 'class="h-s"')}${tb('p', x.defaults, 'class="t-body"')}</figcaption></figure>
</div>
${tb('p', emFirst(x.travel), 'class="t-intro taps-travel"')}
</div></section>`;
};

const homeTemplates = () => {
  const x = H.templates;
  const sq = (s, hero = false) =>
    `<li class="tsq-item${hero ? ' is-hero' : ''}"><span class="tsq" style="--c:${templateColors[s.color]}"></span>${tb('span', s.name, 'class="tsq-name"')}</li>`;
  return `<section class="ch ch--white tpl" data-acc="yellow"><div class="wrap">
<header class="ch-head">${tb('h2', brk(x.title), 'class="h-xl"')}${tb('p', x.body, 'class="t-intro"')}</header>
<div class="tpl-stage" data-loop>
<ul class="tsq-row">${[sq(x.ideas[0]), sq(x.example, true), sq(x.ideas[1]), sq(x.ideas[2])].join('')}</ul>
${tb('p', x.free, 'class="t-small tpl-free"')}
<div class="tpl-detail">
<div class="tpl-phone">${pw('create-templates')}</div>
<div class="tpl-spec">${tb('p', x.exampleTag, 'class="tpl-tag"')}<h3 class="h-m tpl-name"><span class="tsq tsq--mini" style="--c:${templateColors[x.example.color]}"></span>${t(x.example.name)}</h3>
<ul class="spec">${x.example.fields.map((f, i, all) => `<li${i === all.length - 1 ? ' class="is-switch"' : ''}>${t(f)}</li>`).join('')}</ul>
${tb('p', x.example.story, 'class="t-intro tpl-story"')}</div>
</div>
</div>
${tb('p', x.detail, 'class="t-body tpl-note"')}
<p class="tpl-more">${more('templates', x.more)}</p>
</div></section>`;
};

const homeTravel = () => {
  const x = H.travel;
  return `<section class="ch ch--white travel" data-acc="pink"><div class="wrap">
<header class="ch-head">${tb('h2', brk(x.title), 'class="h-xl"')}</header>
<div class="travel-grid">
<div class="travel-copy">${tb('p', x.body, 'class="t-intro"')}
<ol class="days">${x.days.map((d, i) => `<li class="day${i === 3 ? ' is-turn' : ''}">${tb('span', d.day, 'class="day-d"')}<span class="day-who">${t(d.who)}</span>${tb('span', d.what, 'class="day-what"')}</li>`).join('')}</ol>
${tb('p', emFirst(x.punch), 'class="t-intro travel-punch"')}
</div>
<div class="travel-phone">${pw('group-owes')}</div>
</div>
<div class="travel-foot">${tb('p', emFirst(x.honest), 'class="t-body travel-honest"')}${more('travel', x.more)}</div>
</div></section>`;
};

const equation = (calc) =>
  `<div class="eq">${['amount', 'rate', 'fee', 'result']
    .map((k) => {
      const s = tr(calc[k]);
      const m = s.match(/^([×+=])?\s?([\d.,]+(?:\s%|\s[A-Z]{3})?)\s*(.*)$/);
      const [, op = '', num = s, cap = ''] = m || [];
      return `<div class="eq-t eq-${k}"><span class="eq-n">${op ? `<span class="eq-op">${op}</span>` : ''}${num}</span>${cap ? `<span class="eq-c">${cap}</span>` : ''}</div>`;
    })
    .join('')}</div>`;

const homeMoney = () => {
  const x = H.money;
  return `<section class="ch ch--black money" data-acc="orange"><div class="wrap">
<header class="ch-head">${tb('h2', brk(x.title), 'class="h-xl"')}${tb('p', x.body, 'class="t-intro"')}</header>
${equation(x.calc)}
<div class="money-grid">
<div class="money-copy">${tb('p', emFirst(x.fees), 'class="t-intro"')}${tb('p', x.xy, 'class="t-body"')}${tb('p', x.source, 'class="t-body"')}${tb('p', x.cardRate, 'class="t-body"')}${more('currencies', x.more)}</div>
<div class="money-phone">${pw('fees')}</div>
</div>
</div></section>`;
};

const marquee = (rows = 3) => {
  const per = Math.ceil(languageList.length / rows);
  return `<div class="mq" aria-hidden="true" data-loop>${Array.from({ length: rows }, (_, r) => {
    const items = languageList
      .slice(r * per, (r + 1) * per)
      .map((l) => `<span class="mq-i"><span class="mq-n" lang="${nativeLang(l.code)}"${l.rtl ? ' dir="rtl"' : ''}>${l.native}</span><span class="mq-x">${sampleNumber(l)}</span></span>`)
      .join('');
    return `<div class="mq-row"><div class="mq-track">${items}${items}</div></div>`;
  }).join('')}</div>`;
};

const homeLangs = () => {
  const x = H.languages;
  return `<section class="ch ch--grey langs" data-acc="purple"><div class="wrap">
<header class="ch-head">${tb('h2', x.title, 'class="h-xl"')}${tb('p', x.body, 'class="t-intro"')}</header></div>
<div class="langs-stage">${marquee(3)}<div class="langs-phone">${pw('languages')}</div></div>
<div class="wrap langs-more">${more('languages', x.more)}</div>
</section>`;
};

const homeToolbox = () => `<section class="ch ch--white toolbox" data-acc="teal"><div class="wrap">
<header class="ch-head ch-head--left">${tb('h2', H.toolbox.title, 'class="h-xl"')}</header>
<ul class="tools">${H.toolbox.list.map((x) => `<li class="tool">${toolIcon[x.icon]}${tb('p', emFirst(x.text))}</li>`).join('')}</ul>
<p class="tools-more">${more('features', H.toolbox.more)}</p>
</div></section>`;

const filmBox = () =>
  `<div class="film-box"><svg class="film-play" viewBox="0 0 80 80" aria-hidden="true"><circle cx="40" cy="40" r="38.5"/><path d="M33 27.5 54 40 33 52.5z"/></svg>${film({ cls: 'film', controls: true })}</div>`;

const homeFilm = () => `<section class="ch ch--black filmch" data-acc="green"><div class="wrap">
<header class="ch-head">${tb('h2', H.film.title, 'class="h-xl"')}</header>
${filmBox()}
</div></section>`;

const homeFinale = () => `<section class="ch ch--black finale" data-acc="green"><div class="wrap finale-in">
<img class="finale-icon" src="/assets/icon-180.png" alt="" width="180" height="180" loading="lazy">
${tb('h2', brk(H.finale.title), 'class="h-hero"')}
<p class="finale-brand">${t(dot(site.tagline))}</p>
${storeLinks('stores')}
<p class="t-small finale-req">${t(site.requirements)}</p>
</div></section>`;

const home = () =>
  [homeHero(), homeMoment(), homeBank(), homeTour(), homeKinds(), homeTravel(), homeBento(), homeWatch(), homeFind(), homeAccounts(), homeTaps(), homeTemplates(), homeMoney(), homeLangs(), homeToolbox(), homeFilm(), homeFinale()].join('\n');

const crossNav = (current) => `<section class="ch ch--grey xnav" data-acc="purple"><div class="wrap">
<header class="ch-head">${tb('h2', brk(H.items.title), 'class="h-l"')}</header>
<div class="xnav-grid">${H.items.list
  .map(
    (it) =>
      `<a class="xk" href="${href(it.id)}"${it.id === current ? ' aria-current="page"' : ''}>${kindGlyph[it.id]}${tb('span', it.name, 'class="xk-name"')}${tb('span', it.line, 'class="xk-line"')}</a>`
  )
  .join('')}</div>
</div></section>`;

const items = {
  transactions: { c: P.transactions, acc: 'blue', media: () => pw('create-hero') },
  'shared-expenses': { c: P.sharedExpenses, acc: 'pink', media: () => pw('shared-expense') },
  'incoming-payments': { c: P.incomingPayments, acc: 'teal', media: () => pw('incoming') },
};

const itemPage = (id) => {
  const { c, acc, media } = items[id];
  const tall = c.fields.length > 8;
  return [
    subHero({ acc, h1: c.title, lede: c.line, after: `<div class="entry-hero">${kindGlyph[id]}${entry(c.example)}</div>`, media: media() }),
    `<section class="ch ch--grey item-intro" data-acc="${acc}"><div class="wrap narrow">${tb('p', emFirst(c.intro), 'class="t-lead"')}${tb('p', c.rule, 'class="item-rule"')}${c.partner ? tb('p', c.partner, 'class="t-intro item-partner"') : ''}</div></section>`,
    `<section class="ch ch--white item-fields${tall ? ' is-tall' : ''}" data-acc="${acc}"><div class="wrap">
<header class="ch-head ch-head--left">${tb('h2', c.fieldsTitle, 'class="h-xl"')}</header>
<div class="fields-wrap">${tall ? `<div class="fields-phone flip">${pw('create-tools')}${pw('create-empty')}</div>` : ''}<dl class="spec-grid">${c.fields.map((f) => `<div>${tb('dt', f.name)}${tb('dd', f.text)}</div>`).join('')}</dl></div>
</div></section>`,
    c.ways
      ? `<section class="ch ch--black item-ways" data-acc="green"><div class="wrap">
<header class="ch-head">${tb('h2', c.waysTitle, 'class="h-xl"')}</header>
<ol class="ways">${c.ways.map((w) => `<li>${tb('h3', w.name, 'class="h-s"')}${tb('p', w.text)}</li>`).join('')}</ol>
<p class="ways-more">${more('automation', linkLabel('automation'))}</p>
</div></section>`
      : '',
    c.cases
      ? `<section class="ch ch--grey item-cases" data-acc="${acc}"><div class="wrap narrow">
<header class="ch-head ch-head--left">${tb('h2', c.casesTitle, 'class="h-xl"')}</header>
${c.cases.map((x) => `<div class="case">${tb('h3', x.q, 'class="h-m"')}${tb('p', x.a, 'class="t-intro"')}</div>`).join('')}
</div></section>`
      : '',
    c.loose
      ? `<section class="ch ch--black item-loose" data-acc="${acc}"><div class="wrap narrow center">
${tb('h2', c.looseTitle, 'class="h-xl"')}${tb('p', c.loose, 'class="t-intro"')}${tb('p', emFirst(c.notFor), 'class="t-body item-honest"')}
</div></section>`
      : '',
    c.loop
      ? `<section class="ch ch--black item-loop" data-acc="${acc}"><div class="wrap split">
<div class="split-copy">${tb('h2', c.loopTitle, 'class="h-xl"')}${tb('p', c.loop, 'class="t-intro"')}${more('travel', H.travel.more)}</div>
<div class="split-media">${pw('group-owes')}</div>
</div></section>`
      : '',
    crossNav(id),
  ].join('\n');
};

const automation = () => {
  const a = P.automation;
  const modeArt = [
    `<span class="mode-btn">${t(C.add)}</span>`,
    `<span class="mode-banner"><span>${t(values.auto.banner)}</span><b>${t(C.edit)}</b></span>`,
    `<span class="mode-lock">${modeGlyph[2]}</span>`,
  ];
  return [
    subHero({
      acc: 'green',
      h1: a.title,
      lede: a.intro,
      after: storeLinks('stores'),
      media: `<div class="duo">${pw('shortcut-guide')}${pw('create-banner')}</div>`,
    }),
    `<section class="ch ch--grey auto-get" data-acc="green"><div class="wrap">
<header class="ch-head">${tb('h2', a.getTitle, 'class="h-xl"')}</header>
<dl class="gets">${a.get.map((g) => `<div>${tb('dt', g.name, 'class="h-m"')}${tb('dd', g.text, 'class="t-intro"')}</div>`).join('')}</dl>
</div></section>`,
    `<section class="ch ch--black auto-wallet" data-acc="green"><div class="wrap">
<header class="ch-head">${tb('h2', a.walletTitle, 'class="h-xl"')}${tb('p', a.wallet, 'class="t-intro"')}</header>
<ol class="modes">${a.modes
      .map((m, i) => {
        const keep = [3, 2, 0][i];
        const meter = [0, 1, 2].map((n) => `<i${n <= i ? ' class="on"' : ''}></i>`).join('');
        const needs = a.modesNeeds.map((x, n) => (n < keep ? `<li>${t(x)}</li>` :`<li class="off"><s>${t(x)}</s></li>`)).join('');
        return `<li class="mode"><div class="mode-art" aria-hidden="true">${modeArt[i]}</div><p class="mode-lvl"><span class="mode-meter" aria-hidden="true">${meter}</span>${t(m.level)}</p>${tb('h3', m.name, 'class="h-m"')}${tb('p', m.text)}<div class="mode-need">${tb('p', a.modesNeed, 'class="mode-need-h"')}<ul>${needs}</ul></div></li>`;
      })
      .join('')}</ol>
<p class="modes-more"><a class="more" href="#set-up">${t(a.modesMore)}<svg class="chev chev--down" viewBox="0 0 14 8" aria-hidden="true"><path d="M1.5 1.5 7 6.5l5.5-5"/></svg></a></p>
</div></section>`,
    `<section class="ch ch--white auto-steps" id="set-up" data-acc="blue"><div class="wrap split">
<div class="split-copy">${tb('h2', a.stepsTitle, 'class="h-xl"')}<ol class="steps">${a.steps.map((s) => tb('li', s)).join('')}</ol>${tb('p', a.perCard, 'class="t-intro steps-note"')}${more('shortcut-guide', a.guideLink)}</div>
<div class="split-media">${pw('shortcut-guide')}</div>
</div></section>`,
    `<section class="ch ch--black auto-notif" data-acc="orange"><div class="wrap narrow">
${tb('h2', a.notifTitle, 'class="h-xl"')}${tb('p', a.notifAndroid, 'class="t-intro"')}${tb('p', a.notifIphone, 'class="t-body"')}
</div></section>`,
    `<section class="ch ch--grey auto-safety" data-acc="green"><div class="wrap narrow">
${tb('h2', a.safetyTitle, 'class="h-l"')}<ul class="checks">${a.safety.map((s) => tb('li', s)).join('')}</ul>
</div></section>`,
    `<section class="ch ch--white auto-other" data-acc="purple"><div class="wrap split">
<div class="split-copy">${tb('h2', a.otherTitle, 'class="h-xl"')}<ul class="flist">${a.other.map((s) => tb('li', s)).join('')}</ul></div>
<div class="split-media">${pw('create-tools')}</div>
</div></section>`,
  ].join('\n');
};

const guideShot = (s, label) => device(shot(`guide-${s}`), { width: 'var(--gw, 270px)', label });

const guideSteps = (steps, numbered = true) =>
  `<ol class="gsteps${numbered ? '' : ' is-plain'}">${steps.map((x) => `<li class="gstep">${tb('p', x.t)}${guideShot(x.s, x.t)}</li>`).join('')}</ol>`;

const warnGlyph = svg('<path d="M12 3.5 21.5 20h-19z"/><path d="M12 10v4.5M12 17.4v.1"/>', 'warn-glyph');
const guideWarn = (w) => `<aside class="warn">
<div class="warn-copy">${warnGlyph}${tb('h2', w.title, 'class="h-l"')}${tb('p', w.text, 'class="warn-text"')}
<ul class="warn-list">${w.points.map((x) => tb('li', x)).join('')}</ul>${tb('p', w.way, 'class="warn-way"')}</div>
<figure class="warn-shot">${guideShot('fail', w.fail)}${tb('figcaption', w.fail)}</figure>
</aside>`;

const guidePart = (title, steps, note, numbered, tip) =>
  `<div class="gpart">${tb('h3', title, 'class="h-l"')}${note && !steps ? tb('p', note, 'class="t-intro gnote"') : ''}${steps ? guideSteps(steps, numbered) : ''}${tip ? tb('p', emFirst(tip), 'class="t-body gnote"') : ''}${note && steps ? tb('p', note, 'class="t-body gnote"') : ''}</div>`;

const shortcutGuide = () => {
  const g = P.shortcutGuidePage;
  return [
    subHero({
      acc: 'green',
      h1: g.title,
      lede: g.intro,
      after: `${tb('p', g.note, 'class="t-body"')}<nav class="jump" ${ta('aria-label', C.onPage)}>${g.sections.map((s) => `<a href="#${s.id}">${t(s.nav)}</a>`).join('')}</nav>`,
    }),
    `<section class="ch ch--white guide-alert"><div class="wrap guide-alert-row">${warnGlyph}<div>${tb('p', emFirst(g.alert.text), 'class="t-body"')}<a class="more" href="#if-it-fails">${t(g.alert.link)}${chev}</a></div></div></section>`,
    ...g.sections.map(
      (s) => `<section class="ch ch--${s.tone} guide" id="${s.id}" data-acc="${s.acc}"><div class="wrap">
<header class="ch-head ch-head--left">${tb('h2', s.title, 'class="h-xl"')}${tb('p', s.intro, 'class="t-intro"')}${s.general ? tb('p', g.general, 'class="t-body"') : ''}</header>
${guidePart(g.parts.app, s.app, s.appNote)}
${guidePart(g.parts.shortcuts, s.shortcuts, s.shortcutsNote, true, g.account)}
${guidePart(g.parts.works, s.works, s.worksNote, false)}
</div></section>`
    ),
    `<section class="ch ch--white" id="if-it-fails"><div class="wrap">${guideWarn(g.warn)}</div></section>`,
  ].join('\n');
};

const travel = () => {
  const p = P.travelPage;
  const media = {
    2: () => pw('create-trip'),
    3: () => pw('incoming'),
    5: () => pw('shared-expense'),
    6: () => pw('group-owes'),
  };
  return [
    subHero({ acc: 'pink', h1: p.title, lede: p.intro, after: tb('p', p.private, 'class="t-body"'), media: pw('list') }),
    `<section class="ch ch--white trip" data-acc="pink"><div class="wrap">
<ol class="trip-steps">${p.steps
      .map(
        (s, i) =>
          `<li class="tstep${media[i] ? ' has-media' : ''}"><div class="tstep-copy">${tb('h2', s.when, 'class="h-l"')}${tb('p', s.text, 'class="t-intro"')}</div>${media[i] ? `<div class="tstep-media">${media[i]()}</div>` : ''}</li>`
      )
      .join('')}</ol>
</div></section>`,
    `<section class="ch ch--grey trip-group" data-acc="pink"><div class="wrap split">
<div class="split-copy">${tb('h2', p.groupTitle, 'class="h-xl"')}<ul class="checks">${p.group.map((s) => tb('li', s)).join('')}</ul></div>
<div class="split-media">${pw('group-info')}</div>
</div></section>`,
    `<section class="ch ch--black trip-space" data-acc="blue"><div class="wrap narrow center">${tb('h2', p.spaceTitle, 'class="h-xl"')}${tb('p', p.space, 'class="t-intro"')}</div></section>`,
    `<section class="ch ch--white trip-honest" data-acc="pink"><div class="wrap narrow center">${tb('h2', p.honestTitle, 'class="h-l"')}${tb('p', emFirst(p.honest), 'class="t-intro"')}</div></section>`,
  ].join('\n');
};

const featureMedia = [
  () => pw('shortcut-guide'),
  () => pw('title-picker'),
  () => watchRow(['watch-keypad', 'wear-keypad']),
  () => pw('create-hero'),
  () => pw('receipt-items'),
  () => pw('accounts'),
  () => pw('group-owes'),
  () => pw('fees'),
  () => pw('list'),
  () => pw('find-filter'),
  () => pw('export'),
];
const featureAcc = ['green', 'blue', 'teal', 'orange', 'yellow', 'teal', 'pink', 'yellow', 'purple', 'blue', 'green'];

const rand = (seed) => () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646;
const viz = (body) => `<svg class="idea-viz" viewBox="0 0 240 120" aria-hidden="true">${body}</svg>`;
const ideaViz = {
  forecast: () =>
    viz('<path class="v-grid" d="M0 30H240M0 60H240M0 90H240"/><path class="v-ref" d="M4 46H236"/><path class="v-band" d="M124 60 236 16v44z"/><path class="v-line" d="M4 106l20-6 20-6 20-12 20-4 20-10 20-8"/><path class="v-dash" d="M124 60 236 38"/><circle class="v-dot" cx="124" cy="60" r="4.5"/>'),
  forgotten: () =>
    viz(`<path class="v-grid" d="M0 100H240"/>${Array.from({ length: 12 }, (_, i) => `<rect class="${i > 2 ? 'v-hot' : 'v-bar'}" x="${8 + i * 19.2}" y="58" width="11" height="42" rx="3"/>`).join('')}<path class="v-dash" d="M8 48H236"/>`),
  twice: () => {
    const left = [10, 31, 52, 73, 94];
    const right = [6, 24, 42, 60, 78, 96];
    const pair = [0, 1, 3, 4, 5];
    return viz(
      `${left.map((y) => `<rect class="v-bar" x="14" y="${y}" width="84" height="13" rx="4"/>`).join('')}${right.map((y, i) => `<rect class="${i === 2 ? 'v-hot' : 'v-bar'}" x="142" y="${y}" width="84" height="13" rx="4"/>`).join('')}<path class="v-link" d="${left.map((y, i) => `M98 ${y + 6.5}L142 ${right[pair[i]] + 6.5}`).join('')}"/>`
    );
  },
  price: () =>
    viz('<path class="v-grid" d="M0 30H240M0 60H240M0 90H240"/><path class="v-line" d="M4 92h34v-6h34v-10h34v-4h34v-14h34v-8h34v-12h28"/><circle class="v-dot" cx="236" cy="38" r="4.5"/><circle class="v-ring" cx="4" cy="92" r="4"/>'),
  week: () => {
    const r = rand(7);
    return viz(
      Array.from({ length: 7 * 24 }, (_, i) => {
        const day = Math.floor(i / 24);
        const h = i % 24;
        const v = (h > 7 && h < 23 ? 0.18 : 0.04) + (h === 8 || h === 12 ? 0.3 : 0) + (day === 4 && h > 17 ? 0.6 : 0) + (day > 4 && h > 10 && h < 22 ? 0.25 : 0) + r() * 0.12;
        return `<rect class="v-cell" x="${4 + h * 9.7}" y="${6 + day * 16}" width="8" height="13" rx="2" style="opacity:${Math.min(1, v).toFixed(2)}"/>`;
      }).join('')
    );
  },
  map: () => {
    const r = rand(11);
    const cluster = (cx, cy, n, s) => Array.from({ length: n }, () => `<circle class="v-pt" cx="${(cx + (r() + r() + r() - 1.5) * s).toFixed(1)}" cy="${(cy + (r() + r() + r() - 1.5) * s * 0.7).toFixed(1)}" r="${(1.2 + r() * 1.8).toFixed(1)}"/>`).join('');
    return viz(`<path class="v-coast" d="M0 84c30-6 52 6 80-2s50-24 80-18 52 20 80 12"/>${cluster(72, 48, 70, 40)}${cluster(196, 86, 14, 9)}`);
  },
  trip: () =>
    viz('<rect class="v-bar" x="4" y="10" width="150" height="14" rx="7"/><rect class="v-bar" x="4" y="34" width="184" height="14" rx="7"/><rect class="v-bar" x="4" y="58" width="128" height="14" rx="7"/><rect class="v-band" x="4" y="86" width="200" height="22" rx="11"/><rect class="v-hot" x="4" y="91" width="160" height="12" rx="6"/><path class="v-ref" d="M164 4v112"/>'),
  fees: () => {
    const r = rand(5);
    let sum = 0;
    const fees = Array.from({ length: 30 }, () => 3 + r() * 9);
    const pts = fees.map((f, i) => `${(8 + i * 7.6).toFixed(1)} ${(104 - (sum += f) * 0.5).toFixed(1)}`);
    return viz(`<path class="v-grid" d="M0 110H240"/>${fees.map((f, i) => `<rect class="v-bar" x="${(6 + i * 7.6).toFixed(1)}" y="${(110 - f).toFixed(1)}" width="4" height="${f.toFixed(1)}" rx="1.5"/>`).join('')}<path class="v-line" d="M${pts.join('L')}"/><circle class="v-dot" cx="${pts.at(-1).split(' ')[0]}" cy="${pts.at(-1).split(' ')[1]}" r="5"/>`);
  },
  people: () => {
    const friends = [[44, 30, 9, 5], [74, 96, 6, 2.5], [170, 22, 7, 3.5], [200, 82, 8, 4.5], [124, 108, 5, 1.5]];
    return viz(`${friends.map(([x, y, , w]) => `<path class="v-tie" d="M120 58L${x} ${y}" stroke-width="${w}"/>`).join('')}${friends.map(([x, y, rr]) => `<circle class="v-bar" cx="${x}" cy="${y}" r="${rr}"/>`).join('')}<circle class="v-dot" cx="120" cy="58" r="12"/>`);
  },
  ask: () =>
    viz('<rect class="v-field" x="10" y="8" width="220" height="34" rx="17"/><rect class="v-bar" x="28" y="21" width="34" height="8" rx="4"/><rect class="v-bar" x="68" y="21" width="22" height="8" rx="4"/><rect class="v-bar" x="96" y="21" width="44" height="8" rx="4"/><rect class="v-hot v-caret" x="147" y="17" width="2.5" height="16" rx="1"/><rect class="v-hot" x="10" y="60" width="118" height="18" rx="9"/><rect class="v-bar" x="10" y="88" width="196" height="8" rx="4"/><rect class="v-bar" x="10" y="104" width="150" height="8" rx="4"/>'),
};

const story = () => {
  const s = P.story;
  const ideaAcc = ['green', 'orange', 'pink', 'yellow', 'purple', 'blue', 'teal', 'pink', 'orange', 'green'];
  return `<section class="ch ch--black moment story-beta" data-acc="green"><div class="wrap moment-in">
<h2 class="moment-t">${tb('span', s.beta.when, 'class="moment-time"')}${tb('span', s.beta.line, 'class="moment-line"')}</h2>
${tb('p', s.beta.text, 'class="t-intro story-text"')}
</div></section>
<section class="ch ch--black story-next" data-acc="purple"><div class="wrap">
<header class="ch-head">${tb('p', s.next.eyebrow, 'class="story-eyebrow"')}${tb('h2', s.next.title, 'class="h-xl"')}${tb('p', s.next.text, 'class="t-intro"')}</header>
<ul class="sources">${s.next.sources.map((x) => tb('li', x)).join('')}</ul>
<div class="ideas">${s.next.ideas
    .map((x, i) => `<article class="idea${x.k === 'ask' ? ' is-wide' : ''}" data-acc="${ideaAcc[i]}">${ideaViz[x.k]()}${tb('h3', x.name, 'class="h-m"')}${tb('p', x.text, 'class="idea-text"')}</article>`)
    .join('')}</div>
${tb('p', s.next.note, 'class="t-small story-note"')}
</div></section>
<section class="ch ch--white story-now" data-acc="green"><div class="wrap">
<header class="ch-head">${tb('h2', s.now.title, 'class="h-xl"')}${tb('p', s.now.text, 'class="t-intro"')}</header>
${tb('p', s.now.punch, 'class="story-punch"')}
${storeLinks('stores story-stores')}
</div></section>`;
};

const features = () => {
  const f = P.features;
  return [
    subHero({
      acc: 'green',
      h1: f.title,
      lede: f.intro,
      after: `<nav class="jump" ${ta('aria-label', C.onPage)}>${f.groups.map((g, i) => `<a href="#f${i + 1}">${t(g.name)}</a>`).join('')}</nav>`,
    }),
    ...f.groups.map(
      (g, i) => `<section class="ch ${i % 2 ? 'ch--grey' : 'ch--white'} fgroup" id="f${i + 1}" data-acc="${featureAcc[i]}"><div class="wrap split${i % 2 ? ' is-flip' : ''}">
<div class="split-copy">${tb('h2', g.name, 'class="h-xl"')}<ul class="flist">${g.items.map((x) => (x.more ? `<li class="fx"><details><summary><span class="fx-t">${t(x)}</span><span class="fx-i" aria-hidden="true"></span></summary>${tb('p', x.more, 'class="fx-more"')}${x.link ? `<p class="fx-link">${more(x.link, f.links[x.link])}</p>` : ''}</details></li>` : tb('li', x))).join('')}</ul></div>
<div class="split-media">${featureMedia[i]()}</div>
</div></section>`
    ),
    story(),
  ].join('\n');
};

const currencies = () => {
  const c = P.currencies;
  const ops = ['', '×', '', '='];
  return [
    subHero({ acc: 'orange', h1: c.title, lede: c.intro, media: pw('fees') }),
    `<section class="ch ch--grey cur-calc" data-acc="orange"><div class="wrap">
<header class="ch-head">${tb('h2', c.calcTitle, 'class="h-xl"')}</header>
<dl class="calc">${c.calc.map((r, i) => `<div class="calc-t${i === 3 ? ' is-result' : ''}">${tb('dt', r.label)}<dd>${ops[i] ? `<span class="eq-op">${ops[i]}</span>` : ''}${t(r.value)}</dd></div>`).join('')}</dl>
</div></section>`,
    `<section class="ch ch--black cur-src" data-acc="orange"><div class="wrap">
<header class="ch-head ch-head--left">${tb('h2', c.sourceTitle, 'class="h-xl"')}${tb('p', c.source, 'class="t-intro"')}</header>
<dl class="spec-grid is-4">${c.sourcePoints.map((f) => `<div>${tb('dt', f.name)}${tb('dd', f.text)}</div>`).join('')}</dl>
${tb('p', c.sourceNote, 'class="t-body cur-src-note"')}
</div></section>`,
    `<section class="ch ch--white cur-fees" data-acc="orange"><div class="wrap">
<header class="ch-head ch-head--left">${tb('h2', c.feesTitle, 'class="h-xl"')}${tb('p', c.fees, 'class="t-intro"')}</header>
<dl class="spec-grid is-4">${c.feeTypes.map((f) => `<div>${tb('dt', f.name)}${tb('dd', f.text)}</div>`).join('')}</dl>
<ul class="flist cur-rules">${c.feeRules.map((x) => tb('li', x)).join('')}</ul>
</div></section>`,
    `<section class="ch ch--black cur-xy" data-acc="orange"><div class="wrap narrow center">${tb('h2', c.xyTitle, 'class="h-xl"')}${tb('p', c.xy, 'class="t-intro"')}</div></section>`,
    `<section class="ch ch--grey cur-dec" data-acc="orange"><div class="wrap narrow">${tb('h2', c.decimalsTitle, 'class="h-xl"')}${tb('p', c.decimals, 'class="t-lead"')}${tb('p', c.exportNote, 'class="t-intro"')}</div></section>`,
    `<section class="ch ch--white cur-all" data-acc="orange"><div class="wrap">
<header class="ch-head ch-head--left">${tb('h2', c.listTitle, 'class="h-xl"')}</header>
<div class="table-wrap">${currencyTable()}</div>
</div></section>`,
  ].join('\n');
};

const languages = () => {
  const c = P.languages;
  return [
    subHero({ acc: 'purple', h1: c.title, lede: c.intro, after: `${tb('p', c.rtl, 'class="t-body"')}${tb('p', c.site, 'class="t-body"')}`, media: pw('languages') }),
    `<section class="ch ch--black langs-band" data-acc="purple">${marquee(2)}</section>`,
    `<section class="ch ch--white lang-all" data-acc="purple"><div class="wrap">${languageGrid()}</div></section>`,
  ].join('\n');
};

const wrapTables = (html) => html.replace(/<table>/g, '<div class="table-wrap"><table>').replace(/<\/table>/g, '</table></div>');

const reading = (id, cls, acc = 'blue') => `<div class="read ${cls}" data-acc="${acc}"><div class="read-in">${wrapTables(bodies[id]())}</div></div>`;

const notFound = () => `<section class="ch ch--black nf" data-acc="green"><div class="wrap nf-in">${bodies['not-found']()}</div></section>`;

const download = () => `<section class="ch ch--black get" data-acc="green"><div class="wrap get-in">
${tb('h1', C.download.title, 'class="h-hero"')}
${tb('p', C.download.text, 'class="t-intro"')}
${storeLinks('stores')}
<p class="t-small">${t(site.requirements)}</p>
</div></section>`;

const builders = {
  home,
  download,
  transactions: () => itemPage('transactions'),
  'shared-expenses': () => itemPage('shared-expenses'),
  'incoming-payments': () => itemPage('incoming-payments'),
  automation,
  'shortcut-guide': shortcutGuide,
  travel,
  features,
  currencies,
  languages,
  templates: () => deepPage('templates'),
  prefilled: () => deepPage('prefilled'),
  offline: () => deepPage('offline'),
  export: () => deepPage('export'),
  watch: () => deepPage('watch'),
  faq: () => reading('faq', 'is-faq'),
  support: () => reading('support', 'is-support'),
  privacy: () => reading('privacy', 'is-doc'),
  tos: () => reading('tos', 'is-doc'),
  'delete-account': () => reading('delete-account', 'is-delete'),
  'not-found': notFound,
};

const deep = {
  templates: { c: P.templatesPage, acc: 'yellow', media: 'create-templates' },
  prefilled: { c: P.prefilledPage, acc: 'blue', media: 'title-picker' },
  offline: { c: P.offlinePage, acc: 'teal', media: 'list-full' },
  export: { c: P.exportPage, acc: 'pink', media: 'export' },
  watch: { c: P.watchPage, acc: 'blue', watches: ['watch-keypad', 'wear-keypad'] },
};

const deepPage = (id) => {
  const { c, acc, media, watches } = deep[id];
  return [
    subHero({ acc, h1: c.title, lede: c.intro, media: watches ? watchRow(watches) : pw(media) }),
    ...c.sections.map(
      (x, i) => `<section class="ch ${i % 2 ? 'ch--white' : 'ch--grey'} deep" data-acc="${acc}"><div class="wrap ${x.media || x.watches ? `split${i % 4 === 3 ? ' is-flip' : ''}` : 'narrow'}">
<div class="split-copy">${tb('h2', x.title, 'class="h-xl"')}${x.text ? tb('p', x.text, 'class="t-intro"') : ''}${x.list ? `<ul class="flist">${x.list.map((y) => tb('li', y)).join('')}</ul>` : ''}${x.checks ? `<ul class="checks">${x.checks.map((y) => tb('li', y)).join('')}</ul>` : ''}${x.cards ? `<dl class="spec-grid">${x.cards.map((y) => `<div>${tb('dt', y.name)}${tb('dd', y.text)}</div>`).join('')}</dl>` : ''}</div>
${x.media ? `<div class="split-media">${pw(x.media)}</div>` : ''}${x.watches ? `<div class="split-media">${watchRow(x.watches)}</div>` : ''}
</div></section>`
    ),
  ].join('\n');
};

const plainPages = new Set(['download', 'faq','support', 'privacy', 'tos', 'delete-account', 'not-found']);

export default {
  render(page) {
    return doc({
      page,
      body: `${header(page)}\n<main id="main">\n${builders[page.id]()}\n</main>\n${footer(page)}`,
      css: [...(plainPages.has(page.id) ? [] : ['/phone.css', '/watch.css']), '/keynote.css'],
      js: ['/keynote.js'],
      head: '<script>document.documentElement.classList.add("js")</script>',
      themeColor: '#000000',
    });
  },
};
