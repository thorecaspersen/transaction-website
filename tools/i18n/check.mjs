// node check.mjs <code>  ->  merges work/out/<code>/*.json into content/i18n/<code>.json, keeping only valid strings.
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
const W = new URL('./work/', import.meta.url).pathname;
const SITE = new URL('../../content/i18n', import.meta.url).pathname;
const code = process.argv[2];
const only = process.argv.slice(3).map((n) => `${n}.json`);
const source = JSON.parse(readFileSync(`${SITE}/source.json`, 'utf8'));
const target = `${SITE}/${code}.json`;
const merged = existsSync(target) ? JSON.parse(readFileSync(target, 'utf8')) : {};
const bad = [];
const tokens = (s) => (s.match(/<\/?\d+\/?>/g) || []).sort().join();
for (const f of existsSync(`${W}out/${code}`) ? readdirSync(`${W}out/${code}`).filter((f) => f.endsWith('.json')) : []) {
  const mine = !only.length || only.includes(f);
  let part;
  try { part = JSON.parse(readFileSync(`${W}out/${code}/${f}`, 'utf8')); } catch (e) { if (mine) bad.push(`${f}: not valid JSON (${e.message})`); continue; }
  const ids = existsSync(`${W}todo/${code}/${f.replace('.json', '.keys')}`) ? readFileSync(`${W}todo/${code}/${f.replace('.json', '.keys')}`, 'utf8').split('\n') : [];
  for (const [id, v] of Object.entries(part)) {
    const k = ids[id - 1] ?? id;
    const src = source[k];
    if (!src) continue;
    if (typeof v !== 'string' || !v.trim()) { if (mine) bad.push(`${f} id ${id}: empty`); continue; }
    if (tokens(v) !== tokens(src.en)) { if (mine) bad.push(`${f} id ${id}: tags differ, need ${tokens(src.en) || 'none'}, got ${tokens(v) || 'none'}`); continue; }
    if (/<[a-zA-Z]/.test(v)) { if (mine) bad.push(`${f} id ${id}: contains raw HTML, use only the numbered tokens`); continue; }
    merged[k] = v;
  }
}
const out = {};
for (const k of Object.keys(source)) if (merged[k] != null) out[k] = merged[k];
writeFileSync(target, `${JSON.stringify(out, null, 1)}\n`);
const todo = (only.length ? only : existsSync(`${W}todo/${code}`) ? readdirSync(`${W}todo/${code}`).filter((f) => f.endsWith('.json')) : []);
const where = new Map();
for (const f of todo) if (existsSync(`${W}todo/${code}/${f.replace('.json', '.keys')}`)) readFileSync(`${W}todo/${code}/${f.replace('.json', '.keys')}`, 'utf8').split('\n').forEach((k, j) => where.set(k, `${f} id ${j + 1}`));
const scope = only.length ? new Set(where.keys()) : null;
const missing = Object.keys(source).filter((k) => out[k] == null && (!scope || scope.has(k)));
console.log(`${code}: ${Object.keys(out).length}/${Object.keys(source).length} strings valid, ${missing.length} missing, ${bad.length} rejected`);
bad.slice(0, 40).forEach((b) => console.log(`  rejected ${b}`));
if (missing.length) console.log(`  missing: ${missing.slice(0, 40).map((k) => where.get(k) ?? k).join(', ')}${missing.length > 40 ? ' …' : ''}`);
process.exit(missing.length || bad.length ? 1 : 0);
