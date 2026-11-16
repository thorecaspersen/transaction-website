import { readdir, mkdir, writeFile, readFile, cp, rm, stat } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { pages, redirects, site } from './content/site.mjs';
import { redirectPage, builtLangs, languageByCode, langBase, localizeLinks } from './lib/html.mjs';
import { setLang, startRecording, recordPage, stopRecording, tokenize } from './lib/i18n.mjs';

const exists = async (p) => stat(p).then(() => true, () => false);

const args = process.argv.slice(2);
const requested = args.filter((a) => !a.startsWith('--'));
const all = (await readdir('designs', { withFileTypes: true })).filter((d) => d.isDirectory()).map((d) => d.name);
const designs = requested.length ? requested : all;

// English and Danish are written in content/; every other language is a content/i18n/<code>.json,
// published once at least 90 % of the site's strings are translated.
const order = [...languageByCode.keys()];
const sourceKeys = await readFile('content/i18n/source.json', 'utf8').then((s) => Object.keys(JSON.parse(s)), () => []);
const coverage = async (c) => {
  const dict = JSON.parse(await readFile(`content/i18n/${c}.json`, 'utf8'));
  return sourceKeys.filter((k) => dict[k] != null).length / (sourceKeys.length || 1);
};
const translated = [];
for (const c of (await readdir('content/i18n').catch(() => [])).map((f) => f.replace(/\.json$/, ''))) {
  if (c === 'en' || c === 'da' || !languageByCode.has(c)) continue;
  if ((await coverage(c)) >= 0.9) translated.push(c);
}
translated.sort((a, b) => order.indexOf(a) - order.indexOf(b));
builtLangs.push('en', 'da', ...translated);

const paths = new Set([...pages.filter((p) => !p.file).map((p) => p.path), ...Object.keys(redirects)]);

// `node build.mjs --extract` writes every English string a page shows to content/i18n/source.json,
// the input for translating the site.
if (args.includes('--extract')) {
  const design = (await import(`./designs/${designs[0]}/design.mjs`)).default;
  setLang('en');
  startRecording();
  for (const page of pages) {
    recordPage(page.id);
    await design.render(page);
  }
  const source = {};
  for (const [key, { en, da, page }] of stopRecording()) {
    source[key] = { page, en: tokenize(en).text };
    if (da) source[key].da = da.replace(/<svg\b[\s\S]*?<\/svg>/g, '').replace(/<[^>]+>/g, '');
  }
  await mkdir('content/i18n', { recursive: true });
  await writeFile('content/i18n/source.json', `${JSON.stringify(source, null, 1)}\n`);
  console.log(`extracted ${Object.keys(source).length} strings -> content/i18n/source.json`);
  process.exit(0);
}

for (const name of designs) {
  const mod = await import(`./designs/${name}/design.mjs?v=${Date.now()}`);
  const design = mod.default;
  const out = join('dist', name);
  await rm(out, { recursive: true, force: true });
  await cp('shared/static', out, { recursive: true });
  if (await exists(`designs/${name}/static`)) await cp(`designs/${name}/static`, out, { recursive: true });
  const list = builtLangs.map((c) => ({ c, n: languageByCode.get(c).native, e: languageByCode.get(c).english }));
  await writeFile(join(out, 'langs.json'), JSON.stringify(list));
  for (const code of builtLangs) {
    setLang(code, translated.includes(code) ? JSON.parse(await readFile(`content/i18n/${code}.json`, 'utf8')) : {});
    const dir = join(out, langBase(code));
    for (const page of pages) {
      if (page.file && code !== 'en') continue;
      const file = page.file ? join(dir, page.file) : join(dir, page.path, 'index.html');
      await mkdir(dirname(file), { recursive: true });
      await writeFile(file, localizeLinks(await design.render(page), paths));
    }
    for (const [from, to] of Object.entries(redirects)) {
      const file = join(dir, from, 'index.html');
      await mkdir(dirname(file), { recursive: true });
      await writeFile(file, redirectPage(langBase(code) + to));
    }
  }
  setLang('en');
  await writeFile(join(out, 'CNAME'), `${site.domain}\n`);
  console.log(`built ${name} -> ${out} (${pages.length} pages, ${builtLangs.length} languages)`);
}
