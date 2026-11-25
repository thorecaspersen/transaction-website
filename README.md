# transaction.thore.me

The public website for the Transaction app: the landing page, a page per feature, FAQ, support,
privacy policy, terms of use and account deletion. English and Danish.

## Build and preview

| Command | What it does |
|---|---|
| `node build.mjs` | Builds the site into `dist/keynote/`, once per language |
| `node build.mjs --extract` | Writes every English string the pages show to `content/i18n/source.json` |
| `node serve.mjs` | Serves the build on http://localhost:4101 |

No dependencies. Node 20 or newer.

## Languages

The site is built once per language: English at `/`, every other language under its code, e.g. `/da/`,
`/fi/`, `/zh-Hant-TW/`.

| Where | What |
|---|---|
| `content/*.mjs` | English and Danish, side by side as `L(en, da)` |
| `content/i18n/<code>.json` | Every other language, keyed by a hash of the English text; HTML tags appear as numbered tokens such as `<1>…</1>` |
| `content/i18n/source.json` | The English source for translators, made by `node build.mjs --extract` |

Change an English text, and other languages show the new English for that string until it is translated
again. Danish never falls behind, as it sits next to the English. A language is published once at least 90 % of
its strings are translated.

The privacy, terms and delete-account pages carry a notice in every language but English: if the translation differs
from the English version, the English version applies (`translationNotice` in `content/legal.mjs`).

### Translating new or changed text

The tools are in `tools/i18n/`. Their working files go to `tools/i18n/work/`, which git ignores.

| Step | Command |
|---|---|
| 1. Collect the English | `node build.mjs --extract` |
| 2. The app's own words for its labels, per language (needs the app repo next to this one) | `node tools/i18n/glossary.mjs` |
| 3. Split what each language is missing into chunks | `node tools/i18n/prep.mjs <code>` |
| 4. Translate | Have Claude Code agents follow `tools/i18n/BRIEF.md`, one or two per language |
| 5. Check and merge into `content/i18n/<code>.json` | `node tools/i18n/check.mjs <code>` |
| 6. Build | `node build.mjs` |

`tools/i18n/order.json` lists the languages, biggest first.

The header's language button lists every built language, English and Danish first, with a search. On an English
page, a visitor goes to the language they picked before, or else the first browser language the site has;
otherwise they stay in English. A page in any other language stays as it is, so shared links keep their language.

## Layout

| Path | What it is |
|---|---|
| `content/` | All text, in English and Danish, plus the currency and language lists |
| `lib/` | The HTML document, the language switch and the shared page bodies |
| `shared/phone.mjs` | The phone frame around the app screenshots shown on the site |
| `shared/static/` | Fonts, icons, the app screenshots, the film and the scripts every page loads |
| `designs/keynote/` | The site's design: page layouts, styles and scripts |
| `video/` | The product film, made with Remotion (`npm install`, then `npm run render:en`) |

## Pages

| Path | Page |
|---|---|
| `/` | Front page |
| `/download/` | Pick App Store or Google Play; the header's "Get the app" button leads here |
| `/transactions/`, `/shared-expenses/`, `/incoming-payments/` | The three kinds of entries |
| `/automation/`, `/travel/`, `/features/` | Features |
| `/shortcut-guide/` | Shortcuts setup step by step, with screenshots; linked from `/automation/` |
| `/custom-fields/` | Custom fields setup step by step, with screenshots; linked from the front page and `/features/` |
| `/currencies/`, `/languages/`, `/faq/` | Reference |
| `/support/` | Support |
| `/privacy/` | Privacy policy |
| `/tos/` | Terms of use, also the EULA; `/terms/` and `/eula/` redirect here |
| `/delete-account/` | How to delete an account and its data |
