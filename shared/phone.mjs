import { t, ta, L } from '../lib/i18n.mjs';

const P = {
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  user: '<circle cx="12" cy="12" r="9.2"/><circle cx="12" cy="10" r="3.2"/><path d="M6.2 18.4c1.4-2.1 3.4-3.1 5.8-3.1s4.4 1 5.8 3.1"/>',
  back: '<path d="M15 5l-7 7 7 7"/>',
  chevron: '<path d="M7 10l5 5 5-5"/>',
  right: '<path d="M10 6l6 6-6 6"/>',
  calendar: '<rect x="4" y="5.5" width="16" height="14.5" rx="2.5"/><path d="M4 10h16M8.5 3.5v4M15.5 3.5v4"/><path d="M8 13.5h.01M12 13.5h.01M16 13.5h.01M8 16.8h.01M12 16.8h.01"/>',
  pin: '<path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.4"/>',
  nav: '<path d="M20 4L4 11l7 2 2 7 7-16z"/>',
  map: '<path d="M9 4L3.5 6v14L9 18l6 2 5.5-2V4L15 6 9 4z"/><path d="M9 4v14M15 6v14"/>',
  camera: '<path d="M4 8.5h3l1.6-2.5h6.8L17 8.5h3v10.5H4z"/><circle cx="12" cy="13.5" r="3.4"/>',
  image: '<rect x="4" y="5" width="16" height="14" rx="2.5"/><circle cx="9" cy="10" r="1.6"/><path d="M5 17.5l4.5-4.5 3.5 3.5 2.5-2.5 3.5 3.5"/>',
  calc: '<rect x="5.5" y="3.5" width="13" height="17" rx="2.5"/><path d="M8.5 7.5h7M9 12h.01M12 12h.01M15 12h.01M9 15.5h.01M12 15.5h.01M15 15.5h.01"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  plusCircle: '<circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  checkCircle: '<circle cx="12" cy="12" r="9"/><path d="M8 12.5l3 3 5-6"/>',
  star: '<path d="M12 4l2.5 5.2 5.7.8-4.1 4 1 5.6L12 17l-5.1 2.6 1-5.6-4.1-4 5.7-.8z"/>',
  store: '<path d="M4 9.5l1.5-5h13L20 9.5M4 9.5c0 1.5 1.2 2.5 2.7 2.5S9.3 11 9.3 9.5c0 1.5 1.2 2.5 2.7 2.5s2.7-1 2.7-2.5c0 1.5 1.1 2.5 2.6 2.5S20 11 20 9.5M5.5 12v8h13v-8M10 20v-4.5h4V20"/>',
  title: '<path d="M5 7V5h14v2M12 5v14M9 19h6"/>',
  link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
  updown: '<path d="M8 4v16M4.5 7.5L8 4l3.5 3.5M16 20V4M12.5 16.5L16 20l3.5-3.5"/>',
  search: '<circle cx="11" cy="11" r="6"/><path d="M20 20l-4.5-4.5"/>',
  filter: '<path d="M4 6h16M7 12h10M10 18h4"/>',
  download: '<path d="M12 4v11M7.5 10.5L12 15l4.5-4.5M5 19.5h14"/>',
  wallet: '<rect x="3.5" y="6" width="17" height="13" rx="2.5"/><path d="M3.5 10h17M15.5 14.5h2"/>',
  card: '<rect x="3" y="6" width="18" height="12.5" rx="2.4"/><path d="M3 10.2h18M6.5 15h4"/>',
  bank: '<path d="M4 10h16L12 4.5 4 10zM6 10v7M10 10v7M14 10v7M18 10v7M4 19.5h16"/>',
  people: '<circle cx="9" cy="9" r="3"/><path d="M3.5 19c.8-3 2.9-4.6 5.5-4.6s4.7 1.6 5.5 4.6"/><circle cx="16.5" cy="8" r="2.5"/><path d="M16 13.3c2.4 0 4 1.4 4.7 4.2"/>',
  tag: '<path d="M4 12.2V5.5A1.5 1.5 0 0 1 5.5 4h6.7L20 11.8 11.8 20z"/><circle cx="8.3" cy="8.3" r="1.3"/>',
  globe: '<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.4 2.4 3.4 5.2 3.4 8.5s-1 6.1-3.4 8.5M12 3.5C9.6 5.9 8.6 8.7 8.6 12s1 6.1 3.4 8.5"/>',
  share: '<path d="M12 15V4M8 7.5L12 3.5l4 4M6 11v8.5h12V11"/>',
  chat: '<path d="M5 18.5l1.2-3.4A7 7 0 1 1 9 18.1z"/>',
  x: '<path d="M6 6l12 12M18 6L6 18"/>',
  doc: '<path d="M7 3.5h7l4 4v13H7z"/><path d="M14 3.5v4h4M9.5 12h6M9.5 15.5h6"/>',
  stack: '<path d="M12 4l8.5 4.5L12 13 3.5 8.5z"/><path d="M3.5 12.5L12 17l8.5-4.5M3.5 16.5L12 21l8.5-4.5"/>',
};

export const icon = (name) => `<svg viewBox="0 0 24 24" aria-hidden="true">${P[name]}</svg>`;

export const templateColors = { green: '#34d399', blue: '#60a5fa', purple: '#a78bfa', red: '#f87171', orange: '#fb923c', yellow: '#facc15', pink: '#f472b6', teal: '#2dd4bf', gray: '#9ca3af' };

export const values = {
  auto: {
    banner: '4.80 USD · Café Lua',
    date: '2026-11-01 08:42',
    account: 'Main',
    method: 'Apple Pay',
    title: 'Coffee',
    merchant: 'Café Lua',
    place: 'Charles St 82, New York',
    category: 'Treats & Beverages',
    amount: '4.80',
    currency: 'USD',
  },
  lunch: {
    date: '2026-11-02 12:04',
    account: 'Work',
    method: 'Work card',
    title: 'Lunch',
    merchant: 'Corner Deli',
    place: 'W 42nd St 50, New York',
    category: 'Dining',
    amount: '12.50',
    currency: 'USD',
  },
  trip: {
    date: '2026-10-01 20:47',
    account: 'Main',
    method: 'Visa card',
    title: 'Dinner',
    merchant: 'Taberna Rosa',
    place: 'Travessa dos Inglesinhos 3, Lisboa',
    groups: 'Lissabon',
    category: 'Dining',
    amount: '96.00',
    currency: 'EUR',
  },
};

const shots = {
  'create-hero': { label: L('The New Transaction screen, filled in: coffee at Café Lua, 4.80 USD', 'Skærmen Ny Transaktion, udfyldt: kaffe på Café Lua, 4,80 USD'), f: { date: [5.0, 13.3, 90.0, 4.8], account: [5.0, 22.1, 43.5, 4.6], method: [51.5, 22.1, 43.5, 4.6], title: [16.9, 28.5, 78.1, 4.6], merchant: [26.1, 34.9, 68.9, 4.6], place: [5.0, 41.3, 90.0, 4.8], media: [13.9, 47.9, 37.3, 5.1], category: [51.5, 57.1, 43.5, 4.7], groups: [5.0, 57.2, 43.5, 4.6], amount: [5.0, 68.2, 58.0, 5.6], currency: [65.9, 68.2, 28.9, 5.5], split: [19.4, 76.5, 61.2, 5.1], notes: [5.0, 84.8, 90.0, 6.9], add: [5.0, 92.8, 90.0, 5.5] } },
  'create-empty': { label: L('The New Transaction screen before anything is typed', 'Skærmen Ny Transaktion, før der er skrevet noget'), f: { date: [5.0, 13.3, 90.0, 4.8], account: [5.0, 22.1, 43.5, 4.6], method: [51.5, 22.1, 43.5, 4.6], title: [16.9, 28.5, 78.1, 4.6], merchant: [26.1, 34.9, 68.9, 4.6], place: [5.0, 41.3, 90.0, 4.8], media: [13.9, 47.9, 37.3, 5.1], category: [51.5, 57.1, 43.5, 4.6], groups: [5.0, 57.1, 43.5, 4.6], amount: [5.0, 68.1, 58.0, 5.7], currency: [65.9, 68.1, 28.9, 5.5], split: [19.4, 76.5, 61.2, 5.1], notes: [5.0, 84.8, 90.0, 6.9], add: [5.0, 92.8, 90.0, 5.5] } },
  'create-templates': { label: L('Three template buttons above the date, and a lunch filled in by one of them', 'Tre skabelonknapper over datoen og en frokost udfyldt af den ene'), f: { tpl0: [5.0, 13.3, 11.9, 5.5], tpl1: [19.4, 13.3, 11.9, 5.5], tpl2: [33.8, 13.3, 11.9, 5.5], date: [5.0, 19.9, 90.0, 4.8], account: [5.0, 28.7, 43.5, 4.6], method: [51.5, 28.7, 43.5, 4.6], title: [16.9, 35.1, 78.1, 4.6], merchant: [26.1, 41.5, 68.9, 4.6], place: [5.0, 47.9, 90.0, 4.8], category: [51.5, 63.7, 43.5, 4.7], amount: [5.0, 74.8, 58.0, 5.6], add: [5.0, 92.8, 90.0, 5.5] } },
  'create-banner': { label: L('The green banner after a payment was added automatically', 'Det grønne banner, efter en betaling blev tilføjet automatisk'), f: { date: [5.0, 18.8, 90.0, 4.8], account: [5.0, 27.6, 43.5, 4.6], method: [51.5, 27.6, 43.5, 4.6], place: [5.0, 46.8, 90.0, 4.8], add: [5.0, 92.8, 90.0, 5.5], banner: [5.0, 12.1, 90.0, 4.2] } },
  'create-trip': { label: L('A dinner paid for three friends, 24 EUR each', 'En middag betalt for tre venner, 24 EUR hver') },
  'shared-expense': { label: L('A shared expense Maria paid, with your share', 'En fælles udgift, som Maria betalte, med din andel') },
  incoming: { label: L('An incoming payment: Sofie paid you back 24 EUR in cash', 'En indgående betaling: Sofie betalte dig 24 EUR tilbage kontant') },
  'title-picker': { label: L('Prefilled titles, one tap each', 'Forudfyldte titler, ét tryk hver'), f: { input: [5.0, 15.5, 90.0, 5.8], picks: [5.0, 26.3, 90.0, 30.2] } },
  accounts: { label: L('Accounts, each linked to a payment method', 'Konti, hver forbundet med en betalingsmetode') },
  'group-owes': { label: L('A trip group showing who owes whom', 'En rejsegruppe, der viser hvem der skylder hvem') },
  'group-info': { label: L('A trip group with its dates, total and your share', 'En rejsegruppe med datoer, total og din andel') },
  list: { label: L('The list of transactions, euros converted to dollars', 'Listen over transaktioner, euro omregnet til dollar') },
  'list-full': { label: L('The list of transactions, every payment saved', 'Listen over transaktioner, hver betaling gemt') },
  fees: { label: L('A bank fee rule', 'En regel for bankgebyrer') },
  languages: { label: L('The language picker', 'Sprogvælgeren') },
  'shortcut-guide': { label: L('The Apple Pay Shortcut settings, set to Auto-save (app opens)', 'Indstillingerne for Apple Pay-genvejen, sat til Auto-save (app opens)') },
  export: { label: L('Export data as CSV', 'Eksportér data som CSV') },
  'create-long': { h: 2916, label: L('The whole create screen, every field from date to Add', 'Hele opret-skærmen, alle felter fra dato til Tilføj'), f: { date: [5.0, 8.0, 90.0, 2.9], account: [5.0, 13.2, 43.5, 2.7], method: [51.5, 13.2, 43.5, 2.7], title: [5.0, 17.1, 90.0, 2.7], merchant: [5.0, 20.9, 90.0, 2.7], place: [5.0, 24.8, 90.0, 2.9], media: [13.9, 28.7, 72.1, 3.1], groups: [5.0, 34.3, 43.5, 2.7], category: [51.5, 34.2, 43.5, 2.8], tip: [20.9, 38.6, 42.0, 1.8], amount: [5.0, 40.9, 58.0, 3.4], currency: [65.9, 40.9, 28.9, 3.3], split: [19.4, 45.9, 61.2, 3.1], notes: [5.0, 50.8, 90.0, 4.1], tags: [4.5, 56.2, 30.3, 4.0], paid: [5.0, 61.4, 90.0, 7.3], wallet: [5.0, 69.6, 43.6, 6.9], receipt: [51.4, 69.6, 43.6, 6.9], items: [5.0, 79.2, 90.0, 7.4], add: [5.0, 95.7, 90.0, 3.3] } },
  'sheet-date': { label: L('Set Date & Time: 08:42, yesterday', 'Dato og tid: 08:42, i går') },
  'sheet-tip': { label: L('The tip calculator: 4.80 in total, 0.80 tip, 4 without tip', 'Drikkepengeberegneren: 4,80 i alt, 0,80 i drikkepenge, 4 uden') },
  'sheet-category': { label: L('The list of categories', 'Listen over kategorier') },
  'sheet-groups': { label: L('Picking a group: Lissabon', 'Valg af gruppe: Lissabon') },
  'sheet-currency': { label: L('Picking a currency, with search', 'Valg af valuta, med søgning') },
  'sheet-split': { label: L('A part paid another way: a 1.00 USD cash tip', 'En del betalt på en anden måde: 1,00 USD i kontante drikkepenge') },
  'place-pick': { label: L('Select Location: tap the map to pick a point', 'Select Location: tryk på kortet for at vælge et punkt') },
  'wallet-example': { label: L('A payment in Wallet: $4.80 at Café Lua, New York, approved with Apple Pay', 'En betaling i Wallet: 4,80 $ hos Café Lua, New York, godkendt med Apple Pay') },
  'media-selected': { label: L('Selected Media: three photos attached, each with Scan for items and Remove', 'Selected Media: tre billeder vedhæftet, hver med Scan for items og Remove') },
  'place-photo': { label: L('Select Location when editing: use the location of an attached photo', 'Select Location ved redigering: brug placeringen fra et vedhæftet billede') },
  'find-map': { label: L('The map filter: zoom to any area, then tap Use this area', 'Kortfilteret: zoom ind på et område, og tryk Use this area') },
  'find-results': { label: L('The list, showing only what was paid inside the area', 'Listen, med kun det, der er betalt inden for området') },
  'find-filter': { label: L('The filter: time of day, location, amount, date range and more', 'Filteret: tidspunkt, placering, beløb, periode og mere') },
  'find-search': { label: L('Search: coffee, and the payment it finds', 'Søgning: coffee, og den betaling, den finder') },
  'receipt-items': { label: L('Receipt items: Flat white 3.60 and Cookie 1.20, items total 4.80 USD', 'Kvitteringslinjer: Flat white 3.60 og Cookie 1.20, i alt 4.80 USD') },
  'create-tools': { label: L('Paid for others, Wallet screenshots and receipt items on the New Transaction screen', 'Betalt for andre, Wallet-skærmbilleder og kvitteringslinjer på skærmen Ny Transaktion') },
};

const aliases = { titlePicker: 'title-picker', groupOwes: 'group-owes', groupStats: 'group-info', sharedExpense: 'shared-expense', exportData: 'export', lock: 'create-banner', shortcut: 'shortcut-guide', space: 'list', receipt: 'create-tools' };

const keyFor = (name, opts) => {
  if (name !== 'create') return aliases[name] || name;
  if (opts.set === 'trip') return 'create-trip';
  if (opts.set === 'lunch' || opts.templates) return 'create-templates';
  if (opts.banner) return 'create-banner';
  return opts.empty && opts.empty.length ? 'create-empty' : 'create-hero';
};

const hot = (f = {}) =>
  Object.entries(f)
    .map(([k, [x, y, w, h]]) => `<span class="ph-hot" data-f="${k}" style="left:${x}%;top:${y}%;width:${w}%;height:${h}%"></span>`)
    .join('');

export const shot = (key, { eager = false } = {}) =>
  `<img class="ph-shot" src="/shots/${key}.webp" alt="" width="804" height="${shots[key]?.h || 1748}" decoding="async"${eager ? ' fetchpriority="high"' : ' loading="lazy"'}>`;

export const device = (inner, { width, cls = '', label, h } = {}) => {
  const style = [width && `--ph-w:${width}`, h && `--ph-ar:804/${h}`].filter(Boolean).join(';');
  return `<div class="ph ${cls}"${style ? ` style="${style}"` : ''} role="img" ${ta('aria-label', label || L('Screenshot of the Yenzo app', 'Skærmbillede af Yenzo-appen'))}><div class="ph-frame"><div class="ph-screen">${inner}<span class="ph-island"></span></div></div></div>`;
};

export const phone = (name, opts = {}) => {
  const key = keyFor(name, opts);
  const s = shots[key];
  return device(`${shot(key, opts)}${hot(s.f)}`, { label: s.label, h: s.h, ...opts });
};
