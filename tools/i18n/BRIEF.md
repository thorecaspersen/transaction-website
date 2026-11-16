# Translating the Transaction website

Run every command from the repository root.

You translate the public website of **Transaction**, a personal-finance app for iPhone, Android and watches
(website: transaction.thore.me). The English text is the source. The site is read by ordinary people deciding
whether to download the app, and by users following setup guides. Tools: `node` is available.


## Steps (your task names your language `<code>` and your chunk numbers, e.g. 1 2 3 4)
1. Read `tools/i18n/work/glossary/<code>.json` (it may be missing or empty for some languages): the app's own translations
   of its UI labels. When the English mentions one of these labels (a setting, a button, a screen, a mode name,
   an account name in running text), use the app's wording exactly, so the site matches the app.
2. For each of your chunks, in order: read `tools/i18n/work/todo/<code>/<n>.json`, then write `tools/i18n/work/out/<code>/<n>.json`
   as one JSON object with **every id** of that chunk: `{ "1": "<translation>", "2": "…", … }`. Each input entry
   has `page` (which page it is on), `en` (translate this) and sometimes `da` (the Danish version, written by the
   owner — use it only as a guide for which iOS labels stay in English, see below). Write each output file with a
   single Write call. Do not run prep.mjs.
3. Run `node tools/i18n/check.mjs <code> <your chunk numbers>` (e.g. `node tools/i18n/check.mjs fi 1 2 3 4`). It merges the files
   into the site and lists rejected or missing entries as "<n>.json id <id>". Fix each one by rewriting that
   output file, and run the check again until it reports `0 missing, 0 rejected`. Then reply with only that line.

## How to translate
- Write natural, fluent, idiomatic text as a native copywriter would for a well-made consumer app: clear,
  warm, concise, confident. Not word-for-word. Keep headlines short and punchy; keep the meaning exact.
- Use the register of Apple's own website in your language (e.g. German "du", French "vous", Japanese
  です/ます): polite but friendly, never stiff.
- Same meaning, same facts, same order of ideas. Never add claims, never drop details, never add explanations.
- Legal pages (`page` = privacy, tos, delete-account) must be translated precisely and completely; no rewording
  that changes legal meaning.

## Never translate
- The app name **Transaction** (it is a name, even where it looks like the English word). Keep it as is.
- Brand and product names: Apple, iPhone, Apple Watch, Apple Pay, Apple Wallet (use Apple's official name for
  the Wallet app in your language if Apple localises it, otherwise "Wallet"), App Store, Google Play, Google Pay,
  Android, Wear OS, Nordea, Nordea Mobile, MobilePay, Microsoft Azure, Sentry, Facebook, Excel, CSV, GDPR.
- Apple's **Shortcuts** app: use Apple's official name for it in your language when you are sure of it
  (e.g. Danish "Genveje"), else keep "Shortcuts".
- Example people, shops and places: Maria, Jonas, Sofie, Café Lua, Corner Deli, Taberna Rosa, Tasca Azul,
  Cervejaria Azul, Lissabon/Lisbon (use your language's name for the city), etc.
- Currency codes (USD, EUR, DKK), e-mail addresses, URLs.

## iOS labels in the setup guide
The setup-guide screenshots show iOS in English, so labels the user must find or type there stay in English,
exactly as the Danish version keeps them: e.g. Account, Any Card, Source, Main, Shared, Add Transaction,
Get Current Location, Run Immediately, General (English only), General (all languages), Notification, Done.
When an entry has `da`, compare: whatever Danish leaves in English, you leave in English too.

## Numbers, dates, punctuation
- Format numbers the way your language does (decimal and thousands separators are given in your task), keep
  currency codes, e.g. "4.80 USD" → "4,80 USD" where the decimal mark is a comma. Keep percentages as numbers.
- Localise dates and weekdays ("Sunday 1 November"). Use your language's quotation marks and punctuation.

## Markup tokens (strict)
The English contains numbered tokens instead of HTML: `<1>…</1>` wraps words (bold, links), `<2/>` stands alone
(an icon, a line break). Your translation must contain **exactly the same tokens**, each the same number of
times; you may move them to where the wrapped words fall in your sentence. Never add HTML tags or new tokens.
Keep `&amp;`-style entities if present. Output must be valid JSON: escape `"` and `\` inside strings.

## Do not
- Do not edit any file other than your own output files in `tools/i18n/work/out/<code>/` (only your chunk numbers).
- Do not run `node build.mjs` or touch the website repo directly; `check.mjs` does the merging.
