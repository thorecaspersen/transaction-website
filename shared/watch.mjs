import { ta, L } from '../lib/i18n.mjs';

const shots = {
  'watch-keypad': { label: L('Apple Watch: USD 6.50 typed on the keypad, the green Create button below', 'Apple Watch: USD 6.50 skrevet på tastaturet, den grønne Create-knap nedenunder') },
  'watch-keypad-scrolled': { label: L('Apple Watch: the keypad scrolled down, the green Create button and Recent below the keys', 'Apple Watch: tastaturet rullet ned, den grønne Create-knap og Recent under tasterne') },
  'watch-keypad-empty': { label: L('Apple Watch: the keypad asking Enter amount', 'Apple Watch: tastaturet, der beder om Enter amount') },
  'watch-created': { label: L('Apple Watch: Transaction created, USD 6.50, with undo and a button back to the keypad', 'Apple Watch: Transaction created, USD 6.50, med fortryd og en knap tilbage til tastaturet') },
  'watch-recent': { label: L('Apple Watch: the Recent list, one row in each kind’s colour', 'Apple Watch: listen Recent, én række i hver types farve') },
  'watch-detail': { label: L('Apple Watch: a coffee at Café Lua, USD 4.80, with every field listed', 'Apple Watch: en kaffe på Café Lua, USD 4.80, med alle felter listet') },
  'watch-kinds': { label: L('Apple Watch: what the watch creates, Transaction, Shared expense or Incoming payment', 'Apple Watch: hvad uret opretter, Transaction, Shared expense eller Incoming payment') },
  'watch-keypad-shared': { label: L('Apple Watch: the keypad in orange, creating a shared expense', 'Apple Watch: tastaturet i orange, der opretter en fælles udgift') },
  'wear-keypad': { label: L('Wear OS: USD 6.50 typed on the keypad, the green Create button below', 'Wear OS: USD 6.50 skrevet på tastaturet, den grønne Create-knap nedenunder') },
  'wear-keypad-scrolled': { label: L('Wear OS: the keypad scrolled down, the green Create button, Recent and Settings below the keys', 'Wear OS: tastaturet rullet ned, den grønne Create-knap, Recent og Settings under tasterne') },
  'wear-created': { label: L('Wear OS: Transaction created, USD 6.50, with undo and a button back to the keypad', 'Wear OS: Transaction created, USD 6.50, med fortryd og en knap tilbage til tastaturet') },
  'wear-keypad-shared': { label: L('Wear OS: the keypad in orange, creating a shared expense', 'Wear OS: tastaturet i orange, der opretter en fælles udgift') },
};

export const watch = (key, { width, eager = false } = {}) => {
  const round = key.startsWith('wear-');
  const [w, h] = round ? [384, 384] : [416, 496];
  return `<div class="wt ${round ? 'wt--round' : 'wt--apple'}"${width ? ` style="--wt-w:${width}"` : ''} role="img" ${ta('aria-label', shots[key].label)}><div class="wt-case"><div class="wt-screen"><img class="wt-shot" src="/shots/${key}.webp" alt="" width="${w}" height="${h}" decoding="async"${eager ? ' fetchpriority="high"' : ' loading="lazy"'}></div></div></div>`;
};
