// node prep.mjs <code>  ->  writes work/todo/<code>/<n>.json with every string still missing for <code>.
import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync } from 'node:fs';
const W = new URL('./work/', import.meta.url).pathname;
const SITE = new URL('../../content/i18n', import.meta.url).pathname;
const code = process.argv[2];
const skip = existsSync(new URL('./skip.json', import.meta.url)) ? JSON.parse(readFileSync(new URL('./skip.json', import.meta.url), 'utf8')) : {};
if (skip[code]) {
  rmSync(`${W}todo/${code}`, { recursive: true, force: true });
  mkdirSync(`${W}todo/${code}`, { recursive: true });
  console.log(`skipped ${code}: ${skip[code]}`);
  process.exit(0);
}
const source = JSON.parse(readFileSync(`${SITE}/source.json`, 'utf8'));
const done = existsSync(`${SITE}/${code}.json`) ? JSON.parse(readFileSync(`${SITE}/${code}.json`, 'utf8')) : {};
const withDa = new Set(['shortcut-guide', 'automation']);
const chunks = [];
let cur = {}, size = 0;
for (const [k, v] of Object.entries(source)) {
  if (done[k] != null) continue;
  if (size > 13000) { chunks.push(cur); cur = {}; size = 0; }
  cur[k] = withDa.has(v.page) && v.da ? { page: v.page, en: v.en, da: v.da } : { page: v.page, en: v.en };
  size += v.en.length;
}
if (Object.keys(cur).length) chunks.push(cur);
rmSync(`${W}todo/${code}`, { recursive: true, force: true });
mkdirSync(`${W}todo/${code}`, { recursive: true });
mkdirSync(`${W}out/${code}`, { recursive: true });
chunks.forEach((c, i) => {
  const keys = Object.keys(c);
  writeFileSync(`${W}todo/${code}/${i + 1}.keys`, keys.join('\n'));
  writeFileSync(`${W}todo/${code}/${i + 1}.json`, JSON.stringify(Object.fromEntries(keys.map((k, j) => [j + 1, c[k]])), null, 1));
});
console.log(chunks.length ? `${chunks.length} chunk(s) to translate for ${code}:` : `nothing missing for ${code}`);
chunks.forEach((c, i) => console.log(`  ${W}todo/${code}/${i + 1}.json  (${Object.keys(c).length} strings)  ->  write ${W}out/${code}/${i + 1}.json`));
