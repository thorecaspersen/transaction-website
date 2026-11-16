import { readFileSync } from 'node:fs';
import { t, tb, L, currentLang } from './i18n.mjs';
import { href, mail } from './html.mjs';
import { site, nav } from '../content/site.mjs';
import * as P from '../content/pages.mjs';
import { faq } from '../content/faq.mjs';
import { privacy, tos, support, deletion, notFound, translationNotice } from '../content/legal.mjs';

export const currencyList = JSON.parse(readFileSync(new URL('../content/data/currencies.json', import.meta.url), 'utf8'));
export const languageList = JSON.parse(readFileSync(new URL('../content/data/languages.json', import.meta.url), 'utf8'));

export const footerLinks = () =>
  nav.footer
    .map((g) => `<div class="foot-col">${tb('h2', g.heading)}<ul>${g.links.map((l) => `<li><a href="${href(l.id)}">${t(l.label)}</a></li>`).join('')}</ul></div>`)
    .join('');

const nativeLang = (code) => (code === 'en' ? 'en-US' : code === 'da' ? 'da-DK' : code);

export const sampleNumber = (l) => `1${l.group}234${l.decimal}50`;

const dl = (rows, cls) => `<dl class="${cls}">${rows.map((r) => `<div>${tb('dt', r.name)}${tb('dd', r.text)}</div>`).join('')}</dl>`;

const ul = (rows, cls) => `<ul class="${cls}">${rows.map((r) => tb('li', r)).join('')}</ul>`;

const updated = () => `<p class="doc-date">${t(L('Last updated', 'Senest opdateret'))} ${t(site.updated)}</p>`;

export const itemBody = (c) => `<header class="page-head item-head">${tb('h1', c.title)}${tb('p', c.line, 'class="lede"')}${tb('p', c.example, 'class="item-example"')}</header>
<section class="item-intro">${tb('p', c.intro)}${tb('p', c.rule, 'class="item-rule"')}${c.partner ? tb('p', c.partner) : ''}</section>
<section class="item-fields">${tb('h2', c.fieldsTitle)}${dl(c.fields, 'field-list')}</section>
${c.ways ? `<section class="item-ways">${tb('h2', c.waysTitle)}${dl(c.ways, 'way-list')}</section>` : ''}
${c.cases ? `<section class="item-cases">${tb('h2', c.casesTitle)}${c.cases.map((x) => `<div class="case">${tb('h3', x.q)}${tb('p', x.a)}</div>`).join('')}</section>` : ''}
${c.loose ? `<section class="item-loose">${tb('h2', c.looseTitle)}${tb('p', c.loose)}${tb('p', c.notFor, 'class="item-honest"')}</section>` : ''}
${c.loop ? `<section class="item-loop">${tb('h2', c.loopTitle)}${tb('p', c.loop)}</section>` : ''}`;

export const automationBody = () => {
  const a = P.automation;
  return `<header class="page-head">${tb('h1', a.title)}${tb('p', a.intro, 'class="lede"')}</header>
<section class="auto-get">${tb('h2', a.getTitle)}${dl(a.get, 'get-list')}</section>
<section class="auto-wallet">${tb('h2', a.walletTitle)}${tb('p', a.wallet)}<ol class="mode-list">${a.modes.map((m) => `<li>${tb('h3', m.name)}${tb('p', m.text)}</li>`).join('')}</ol></section>
<section class="auto-steps">${tb('h2', a.stepsTitle)}<ol class="step-list">${a.steps.map((s) => tb('li', s)).join('')}</ol>${tb('p', a.perCard, 'class="note"')}</section>
<section class="auto-notif">${tb('h2', a.notifTitle)}${tb('p', a.notifAndroid)}${tb('p', a.notifIphone)}</section>
<section class="auto-safety">${tb('h2', a.safetyTitle)}${ul(a.safety, 'check-list')}</section>
<section class="auto-other">${tb('h2', a.otherTitle)}${ul(a.other, 'plain-list')}</section>`;
};

export const travelBody = () => {
  const p = P.travelPage;
  return `<header class="page-head">${tb('h1', p.title)}${tb('p', p.intro, 'class="lede"')}</header>
<section class="trip"><ol class="trip-steps">${p.steps.map((s) => `<li>${tb('h2', s.when)}${tb('p', s.text)}</li>`).join('')}</ol></section>
<section class="trip-group">${tb('h2', p.groupTitle)}${ul(p.group, 'check-list')}</section>
<section class="trip-space">${tb('h2', p.spaceTitle)}${tb('p', p.space)}</section>
<section class="trip-honest">${tb('h2', p.honestTitle)}${tb('p', p.honest)}</section>`;
};

export const featuresBody = () => {
  const f = P.features;
  return `<header class="page-head">${tb('h1', f.title)}${tb('p', f.intro, 'class="lede"')}</header>
${f.groups.map((g) => `<section class="feature-group">${tb('h2', g.name)}${ul(g.items, 'feature-list')}</section>`).join('')}`;
};

export const currencyTable = () => {
  const c = P.currencies;
  return `<table class="cur-table"><thead><tr><th>${t(c.columns.code)}</th><th>${t(c.columns.name)}</th><th>${t(c.columns.country)}</th><th>${t(c.columns.decimals)}</th></tr></thead><tbody>${currencyList
    .map((x) => `<tr><td><code>${x.code}</code></td><td>${x.name}</td><td>${x.country}</td><td>${x.decimals}</td></tr>`)
    .join('')}</tbody></table>`;
};

export const currenciesBody = () => {
  const c = P.currencies;
  return `<header class="page-head">${tb('h1', c.title)}${tb('p', c.intro, 'class="lede"')}</header>
<section class="cur-calc">${tb('h2', c.calcTitle)}<dl class="calc-list">${c.calc.map((r) => `<div>${tb('dt', r.label)}<dd>${t(r.value)}</dd></div>`).join('')}</dl></section>
<section class="cur-src">${tb('h2', c.sourceTitle)}${tb('p', c.source)}${dl(c.sourcePoints, 'fee-types')}${tb('p', c.sourceNote)}</section>
<section class="cur-fees">${tb('h2', c.feesTitle)}${tb('p', c.fees)}${dl(c.feeTypes, 'fee-types')}${ul(c.feeRules, 'plain-list')}</section>
<section class="cur-xy">${tb('h2', c.xyTitle)}${tb('p', c.xy)}</section>
<section class="cur-dec">${tb('h2', c.decimalsTitle)}${tb('p', c.decimals)}${tb('p', c.exportNote)}</section>
<section class="cur-all">${tb('h2', c.listTitle)}<div class="table-wrap">${currencyTable()}</div></section>`;
};

export const languageGrid = () => {
  const c = P.languages;
  return `<ul class="lang-list">${languageList
    .map(
      (l) =>
        `<li${l.rtl ? ' class="is-rtl"' : ''}><span class="ln-native" lang="${nativeLang(l.code)}"${l.rtl ? ' dir="rtl"' : ''}>${l.native}</span><span class="ln-en">${l.english}</span><span class="ln-num">${sampleNumber(l)}</span>${l.rtl ? `<span class="ln-rtl">${t(c.rtlMark)}</span>` : ''}</li>`
    )
    .join('')}</ul>`;
};

export const languagesBody = () => {
  const c = P.languages;
  return `<header class="page-head">${tb('h1', c.title)}${tb('p', c.intro, 'class="lede"')}${tb('p', c.rtl)}${tb('p', c.site)}</header>
<section class="lang-all">${languageGrid()}</section>`;
};

export const faqBody = () => `<header class="page-head">${tb('h1', faq.title)}${tb('p', faq.intro, 'class="lede"')}</header>
${faq.sections
  .map(
    (s) =>
      `<section class="faq-group">${tb('h2', s.name)}${s.items
        .map((i) => `<details class="faq-item"><summary>${t(i.q)}</summary><div class="faq-a">${tb('p', i.a)}${i.link ? `<p><a href="${href(i.link)}">${t(L('Delete your account', 'Slet din konto'))}</a></p>` : ''}</div></details>`)
        .join('')}</section>`
  )
  .join('')}`;

// Legal pages: in every language but English, say that the English version applies if the two differ.
const legalNote = () => {
  const note = t(translationNotice);
  return currentLang() === 'en' ? '' : `<p class="doc-note">${note}</p>`;
};

export const docBody = (d) => `<article class="doc"><header class="page-head">${tb('h1', d.title)}${updated()}${tb('p', d.lede, 'class="lede"')}${legalNote()}</header>${tb('div', d.body, 'class="doc-body"')}</article>`;

export const supportBody = () => `<header class="page-head">${tb('h1', support.title)}${tb('p', support.lede, 'class="lede"')}</header>
<section class="support-quick">${tb('h2', support.quickTitle)}${support.quick
  .map((i) => `<details class="faq-item"><summary>${t(i.q)}</summary><div class="faq-a">${tb('p', i.a)}${i.link ? `<p><a href="${href(i.link)}">${t(L('Delete your account', 'Slet din konto'))}</a></p>` : ''}</div></details>`)
  .join('')}</section>
<section class="support-more">${tb('h2', support.moreTitle)}<ul class="plain-list"><li><a href="${href('faq')}">${t(L('Questions and answers', 'Spørgsmål og svar'))}</a></li><li><a href="${href('automation')}">${t(L('Setting up payments that save themselves', 'Opsætning af betalinger, der gemmes automatisk'))}</a></li><li><a href="${href('privacy')}">${t(L('Privacy policy', 'Privatlivspolitik'))}</a></li><li><a href="${href('tos')}">${t(L('Terms of use', 'Vilkår for brug'))}</a></li></ul></section>`;

export const deleteBody = () => `<header class="page-head">${tb('h1', deletion.title)}${tb('p', deletion.lede, 'class="lede"')}${legalNote()}</header>
<section class="del-steps">${tb('h2', deletion.stepsTitle)}<ol class="step-list">${deletion.steps.map((s) => tb('li', s)).join('')}</ol></section>
<section class="del-gone">${tb('h2', deletion.goneTitle)}${ul(deletion.gone, 'check-list')}</section>
<section class="del-kept">${tb('h2', deletion.keptTitle)}${ul(deletion.kept, 'plain-list')}</section>
${tb('p', deletion.exportTip, 'class="note"')}`;

export const notFoundBody = () => `<header class="page-head">${tb('h1', notFound.title)}${tb('p', notFound.body, 'class="lede"')}<p><a class="button" href="/">${t(notFound.home)}</a></p></header>`;

export const bodies = {
  transactions: () => itemBody(P.transactions),
  'shared-expenses': () => itemBody(P.sharedExpenses),
  'incoming-payments': () => itemBody(P.incomingPayments),
  automation: automationBody,
  travel: travelBody,
  features: featuresBody,
  currencies: currenciesBody,
  languages: languagesBody,
  faq: faqBody,
  support: supportBody,
  privacy: () => docBody(privacy),
  tos: () => docBody(tos),
  'delete-account': deleteBody,
  'not-found': notFoundBody,
};

export { mail };
