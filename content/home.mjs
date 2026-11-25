import { L } from '../lib/i18n.mjs';

export const hero = {
  title: L('You pay. The payment is already saved.', 'Du betaler. Den er allerede gemt.'),
  lede: L(
    'Pay with Apple Wallet, and the transaction writes itself, with the exact time, the place, the card and the account. Start right away, no sign-up needed. More than your bank will ever show you.',
    'Betal med din mobil, så skriver transaktionen sig selv, med præcist tidspunkt, placering, betalingskort og konto. Kom i gang med det samme, uden tilmelding. Mere end din bank nogensinde viser dig.'
  ),
  note: L(
    'Set up once in Apple’s Shortcuts app. Payment notifications from your bank app work too.',
    'Sættes op én gang i Apples Genveje-app. Betalings&shy;notifikationer fra din bankapp virker også.'
  ),
  more: L('See how it works', 'Se hvordan det virker'),
};

export const bankVsApp = {
  title: L('Your bank keeps one line. You keep the story.', 'Banken gemmer én linje. Du gemmer historien.'),
  bankLabel: L('Your bank statement', 'Dit kontoudtog'),
  bankLine: '11/03   CAFE LUA NEW YORK NY     -4.80',
  bankNote: L('The date can be days off.', 'Datoen kan være flere dage forkert.'),
  appLabel: L('The same payment in the Yenzo app, created automatically', 'Den samme betaling i Yenzo app, lavet automatisk'),
  fields: [
    { label: L('Time', 'Tidspunkt'), value: '2026-11-01 08:42' },
    { label: L('Place', 'Placering'), value: 'Charles St 82, New York' },
    { label: L('Merchant', 'Butik'), value: 'Café Lua' },
    { label: L('Amount', 'Beløb'), value: L('4.80 USD', '4,80 USD') },
    { label: L('Account', 'Konto'), value: L('Main', 'Lønkonto') },
    { label: L('Payment method', 'Betalingsmetode'), value: 'Apple Pay' },
    { label: L('Currency', 'Valuta'), value: 'USD' },
  ],
  caption: L('Same payment. Only with more information does a payment make sense a year from now.', 'Samme betaling. Kun med mere information giver en betaling mening om et år.'),
};

export const items = {
  title: L('Three categories you can save.', 'Tre kategorier, du kan gemme.'),
  lines: [L('What you pay.', 'Det, du betaler.'), L('What others pay.', 'Det andre betaler.'), L('What is sent to you.', 'Det der bliver sendt til dig.')],
  list: [
    {
      id: 'transactions',
      name: L('Transaction', 'Transaktion'),
      line: L('Money you paid: from your own accounts, or accounts you share.', 'Penge, du har betalt: fra dine egne konti eller konti, du deler.'),
      example: L('Lunch at Corner Deli · 12.50 USD · Work account · Work card · 12:04', 'Frokost på Corner Deli · 12,50 USD · Work-konto · Work card · 12:04'),
    },
    {
      id: 'shared-expenses',
      name: L('Shared expense', 'Fælles udgift'),
      line: L('Something someone else paid, that you were part of.', 'Noget, en anden betalte, som du var en del af.'),
      example: L('Maria paid dinner for four · about 120 EUR · your share about 30', 'Maria betalte middag for fire · ca. 120 EUR · din andel ca. 30'),
    },
    {
      id: 'incoming-payments',
      name: L('Incoming payment', 'Indgående betaling'),
      line: L('Money that came in to you, or to an account you share.', 'Penge, der kom ind til dig, eller på en konto, du deler.'),
      example: L('Sofie paid you back for Thursday’s dinner · 24 EUR · cash', 'Sofie betalte dig tilbage for torsdagens middag · 24 EUR · kontant'),
    },
  ],
  more: L('Read more', 'Læs mere'),
};

export const powerUser = {
  title: L('Yes, that’s a lot of fields.', 'Ja, der er mange felter.'),
  only: L('But only the amount has to be set. You decide whether to set the rest.', 'Men det er kun beløbet der skal sættes. Resten vælger du selv om du vil sætte.'),
  body: L(
    'Yenzo is not made for beginners. It opens straight on the create screen, and that screen shows every field at once: account, payment method, title, merchant, place, photos, groups, category, amount, currency, tip, notes, tags, who you pay for and much more.',
    'Yenzo er ikke lavet til begyndere. Den åbner direkte på opret-skærmen, og den viser alle felter på én gang: konto, betalingsmetode, titel, butik, placering, billeder, grupper, kategori, beløb, valuta, drikkepenge, noter, tags, hvem du betaler for og meget andet.'
  ),
  punch: L('Fill in two. Or fill in twenty. Either way, it’s a few taps.', 'Udfyld to. Eller udfyld tyve. Uanset hvad er det få tryk.'),
  points: [
    L('Opens on the create screen', 'Åbner på opret-skærmen'),
    L('Every field on one screen', 'Alle felter på én skærm'),
    L('Most of them filled for you', 'De fleste udfyldt for dig'),
  ],
};

export const find = {
  title: L('Zoom in on the map. There are your payments.', 'Zoom ind på kortet. Dér er dine betalinger.'),
  body: L(
    'Move the map to any place in the world, zoom in, and tap “Use this area”. The list shows exactly what you paid inside what you can see on the map. The week in Lissabon. Your own street. The airport.',
    'Flyt kortet hen til et hvilket som helst sted i verden, zoom ind, og tryk “Brug dette område”. Listen viser præcis det, du har betalt inden for det, du kan se på kortet. Ugen i Lissabon. Din egen gade. Lufthavnen.'
  ),
  map: L('Zoom to any area.', 'Zoom ind på et område.'),
  results: L('Everything you paid there.', 'Alt, du har betalt dér.'),
  use: 'Use this area',
  moreTitle: L('And every other way to find it.', 'Og alle de andre måder at finde den på.'),
  moreBody: L(
    'Search title, note, amount and place. Then narrow it down with as many filters as you like, on all three lists.',
    'Søg i titel, note, beløb og sted. Indsnævr så med så mange filtre, du vil, på alle tre lister.'
  ),
  filters: [
    { name: L('Time of day', 'Tidspunkt'), text: L('Morning, lunch, afternoon, evening, night, or your own from and to. 20:00 to 24:00 finds most restaurant visits.', 'Morgen, frokost, eftermiddag, aften, nat, eller dit eget fra og til. 20:00 til 24:00 finder de fleste restaurantbesøg.') },
    { name: L('Near you', 'Nær dig'), text: L('Within 100 m to 5 km of where you are standing.', 'Inden for 100 m til 5 km fra der, hvor du står.') },
    { name: L('Amount', 'Beløb'), text: L('Min and max, in the payment’s own currency.', 'Min og maks, i betalingens egen valuta.') },
    { name: L('Date range', 'Periode'), text: L('From one day to another.', 'Fra én dag til en anden.') },
    { name: L('Categories, groups and tags', 'Kategorier, grupper og tags'), text: L('Pick as many as you like.', 'Vælg så mange, du vil.') },
    { name: L('Accounts and payment methods', 'Konti og betalingsmetoder'), text: L('The salary account, the travel card, the cash.', 'Lønkontoen, rejsekortet, kontanterne.') },
    { name: L('Currency', 'Valuta'), text: L('Everything you paid in euro, or in yen.', 'Alt, du har betalt i euro, eller i yen.') },
    { name: L('Photo, receipt, settled', 'Billede, kvittering, afregnet'), text: L('Has a photo, has receipt lines, is settled or not.', 'Har et billede, har kvitteringslinjer, er afregnet eller ej.') },
  ],
};

export const watch = {
  title: L('The amount, before you forget it.', 'Beløbet, før du glemmer det.'),
  body: L(
    'The amount is the first thing you forget about a payment. So type just the amount on your watch and tap Create. You can add the rest on your phone, whenever you have a minute.',
    'Beløbet er det første, man glemmer ved en betaling. Så skriv bare beløbet på dit ur, og tryk “Opret”. Resten kan du tilføje på telefonen, når du har et øjeblik.'
  ),
  devices: ['Apple Watch', 'Wear OS'],
  scroll: L('Scroll down', 'Rul ned'),
  steps: [
    { name: L('Type the amount', 'Skriv beløbet'), text: L('On a keypad like the one on your lock screen.', 'På et tastatur som det på din låseskærm.') },
    { name: L('Tap Create', 'Tryk “Opret”'), text: L('Mistyped? Undo puts the amount back on the keypad.', 'Tastet forkert? Fortryd lægger beløbet tilbage på tastaturet.') },
    { name: L('The rest, later', 'Resten, senere'), text: L('Open the app on your phone, and the payment is there, ready for a title, a photo or a category.', 'Åbn appen på telefonen, så er betalingen der, klar til en titel, et billede eller en kategori.') },
  ],
  more: L('Everything the watch app does', 'Alt, hvad ur-appen kan'),
};

export const accounts = {
  title: L('Your accounts. Your cards. Wired together.', 'Dine konti. Dine kort. Koblet sammen.'),
  body: L(
    'Call your accounts and payment methods whatever you like, then link them. Pick an account, and its payment method is set for you. You can still change it on any payment.',
    'Kald dine konti og betalingsmetoder, hvad du vil, og forbind dem. Vælg en konto, så er betalingsmetoden sat for dig. Du kan stadig skifte den på enhver betaling.'
  ),
  examples: [
    { situation: L('Lunch at work', 'Frokost på arbejdet'), account: L('Work', 'Arbejdet'), method: L('ID card', 'ID-kort') },
    { situation: L('On public transport', 'Med offentlig transport'), account: L('Travel', 'Rejsekonto'), method: L('Travel card', 'Rejsekortet') },
    { situation: L('Paying in notes and coins', 'Betaling med sedler og mønter'), account: L('My cash', 'Mine kontanter'), method: L('Cash', 'Kontant') },
  ],
  arrow: L('sets', 'sætter'),
  method: L('Payment method', 'Betalingsmetode'),
  note: L(
    'Cash is an account and a payment method of its own, so the money in your wallet adds up too. Rename anything, and every old payment shows the new name. Archive instead of delete, and old payments keep it.',
    'Kontanter er sin egen konto og sin egen betalingsmetode, så pengene i pungen også tæller med. Omdøb hvad som helst, og alle gamle betalinger viser det nye navn. Arkivér i stedet for at slette, så beholder de gamle betalinger den.'
  ),
};

export const twoTaps = {
  title: L('Typing is the slow part. So you mostly don’t.', 'Det langsomme er at skrive. Så det gør du for det meste ikke.'),
  prefilled: L(
    'Your prefilled titles, merchants and payers sit right under the field as shortcuts. Tap the field, tap “Lunch”. Two taps.',
    'Dine forudfyldte titler, butikker og betalere ligger lige under feltet som genveje. Tryk på feltet, tryk på “Lunch”. To tryk.'
  ),
  defaults: L(
    'Default values decide what the fields start with: your account, your payment method, your groups, your currency, and your location, set the moment the screen opens.',
    'Standardværdier bestemmer, hvad felterne starter med: din konto, din betalingsmetode, dine grupper, din valuta, og din placering, sat i det øjeblik skærmen åbner.'
  ),
  travel: L('On holiday in Spain? Set the default currency to EUR, and stop picking it.', 'På ferie i Spanien? Sæt standardvalutaen til EUR, og stop med at vælge den.'),
};

export const templates = {
  title: L('One coloured button. One transaction.', 'Én farvet knap. Én transaktion.'),
  body: L(
    'Templates are coloured squares at the top of the create screen. Tap one, and it fills in the form, or creates the payment right away. You decide everything: whether to use them at all, how many squares you want, and which fields each one fills in.',
    'Skabeloner er farvede firkanter øverst på opret-skærmen. Tryk på en, så udfylder den formularen, eller opretter betalingen med det samme. Du bestemmer det hele selv: om du overhovedet vil bruge dem, hvor mange firkanter du vil have, og hvilke felter hver af dem udfylder.'
  ),
  free: L(
    'These are only examples. Your squares can have any name and any colour, and fill in the fields you like.',
    'Det her er bare eksempler. Dine firkanter kan hedde hvad som helst, have hvilken som helst farve og udfylde de felter, du vil.'
  ),
  exampleTag: L('An example', 'Et eksempel'),
  example: {
    name: L('Work lunch', 'Arbejdsfrokost'),
    color: 'blue',
    fields: [
      L('12.50 USD', '12,50 USD'),
      L('Work account', 'Work-konto'),
      'Work card',
      L('Lunch at Corner Deli', 'Frokost på Corner Deli'),
      L('Fixed location', 'Fast placering'),
    ],
    story: L(
      'Tap it in the queue at Corner Deli, and the form fills in: today’s date, the time and the deli’s address. One more tap on Add, and lunch is saved.',
      'Tryk på den i køen på Corner Deli, så udfyldes formularen: dagens dato, tidspunktet og deliens adresse. Ét tryk mere på Tilføj, så er frokosten gemt.'
    ),
  },
  ideas: [
    { color: 'green', name: L('Morning coffee', 'Morgenkaffe') },
    { color: 'orange', name: L('Friday bar', 'Fredagsbar') },
    { color: 'purple', name: L('Train to work', 'Toget på arbejde') },
  ],
  detail: L(
    'A template can also fix the time of day or the place, handy for the train ticket you buy at the same station every morning.',
    'En skabelon kan også låse tidspunktet eller stedet, smart til togbilletten, du køber på den samme station hver morgen.'
  ),
  more: L('Everything templates can do', 'Alt, hvad skabeloner kan'
  ),
};

export const customFields = {
  title: L('Missing a field? Make your own.', 'Mangler du et felt? Lav dit eget.'),
  body: L(
    'Add your own fields to transactions, shared expenses and incoming payments, with a default if you like. Then put the screen in your own order.',
    'Tilføj dine egne felter til transaktioner, fælles udgifter og indgående betalinger, med en standardværdi, hvis du vil. Sæt så skærmen i din egen rækkefølge.'
  ),
  kinds: [
    L('Text', 'Tekst'),
    L('Text area', 'Tekstområde'),
    L('Dropdown list', 'Dropdown'),
    L('On/off switch', 'Til/fra-kontakt'),
    L('Date, with or without the time', 'Dato, med eller uden tid'),
  ],
  fieldName: L('Your field, on every payment', 'Dit felt, på hver betaling'),
  field: L(
    'Doing up the house? A dropdown called Project, with Kitchen, Bathroom and Garden, tells you which job each payment at the hardware store was for. New payments start with the default, also the ones saved automatically.',
    'Skal huset sættes i stand? En dropdown, der hedder Projekt, med Køkken, Badeværelse og Have, fortæller dig, hvilket projekt hver betaling i byggemarkedet hørte til. Nye betalinger starter med standardværdien, også dem, der gemmes automatisk.'
  ),
  orderName: L('In your own order', 'I din egen rækkefølge'),
  order: L(
    'Move your fields and the built-in sections up or down, and hide the ones you never use. The create and the edit screen follow the same order.',
    'Flyt dine felter og de indbyggede sektioner op eller ned, og skjul dem, du aldrig bruger. Opret- og rediger-skærmen følger samme rækkefølge.'
  ),
  keep: L(
    'Nothing you save disappears. Fields and their choices can be archived, but never deleted, and every payment keeps its value.',
    'Intet, du gemmer, forsvinder. Felter og deres valgmuligheder kan arkiveres, men aldrig slettes, og hver betaling beholder sin værdi.'
  ),
  more: L('Set up your first field, step by step', 'Lav dit første felt, trin for trin'),
};

export const travel = {
  title: L('On holiday with friends? Keep it loose.', 'På ferie med vennerne? Hold det løst.'),
  body: L(
    'Make a group for the trip. What you pay goes in as transactions. When Maria buys dinner, add it as a shared expense: about 120 euros, your share about 30. No receipts to split. No spreadsheet down to the cent.',
    'Lav en gruppe til turen. Det, du betaler, kommer ind som transaktioner. Når Maria giver middag, tilføjer du det som en fælles udgift: cirka 120 euro, din andel cirka 30. Ingen kvitteringer at dele. Intet regneark på øren.'
  ),
  punch: L(
    'You buy dinner tonight, someone else tomorrow. Yenzo shows who owes whom, so you can see whose turn it is.',
    'Du giver middag i aften, en anden i morgen. Yenzo viser, hvem der skylder hvem, så I kan se, hvis tur det er.'
  ),
  honest: L(
    'Need every person’s share exact to the cent and settled at the end? Then MobilePay groups or similar apps are the better tools. Yenzo is for friends who keep it roughly even.',
    'Skal hver persons andel gå op i øren og gøres op til sidst? Så er MobilePay-grupper eller lignende apps de bedre værktøjer. Yenzo er til venner, der holder det cirka lige.'
  ),
  days: [
    { day: L('Thu', 'Tor'), who: L('You', 'Dig'), what: L('Dinner · 96 EUR', 'Middag · 96 EUR') },
    { day: L('Fri', 'Fre'), who: 'Maria', what: L('Dinner · ~120 EUR', 'Middag · ~120 EUR') },
    { day: L('Fri', 'Fre'), who: 'Jonas', what: L('Lunch · ~40 EUR', 'Frokost · ~40 EUR') },
    { day: L('Next', 'Næste'), who: L('Jonas?', 'Jonas?'), what: L('He owes you 14 EUR', 'Han skylder dig 14 EUR') },
  ],
  more: L('Follow a trip to Lissabon', 'Følg en tur til Lissabon'),
};

export const money = {
  title: L('149 currencies. Your bank’s fees included.', '149 valutaer. Bankens gebyrer medregnet.'),
  body: L(
    'Pay in any of 149 currencies. Each amount is converted to your main currency at the official rate from the day you paid, not today’s.',
    'Betal i en hvilken som helst af 149 valutaer. Hvert beløb omregnes til din hovedvaluta med den officielle kurs fra den dag, du betalte, ikke dagens.'
  ),
  fees: L(
    'Then add what your bank adds, like “Card abroad”, 1.75 % on every other currency, or the fixed rate you got at the airport. Rules carry dates, so last year’s trip keeps last year’s fee.',
    'Læg så det oveni, som banken lægger oveni, som “Card abroad”, 1,75 % på alle andre valutaer, eller den faste kurs fra lufthavnen. Reglerne har datoer, så sidste års rejse beholder sidste års gebyr.'
  ),
  calc: {
    amount: L('24.50 EUR', '24,50 EUR'),
    rate: L('× 1.1326 official rate that day', '× 1,1326 officiel kurs den dag'),
    fee: L('+ 1.75 % “Card abroad”', '+ 1,75 % “Card abroad”'),
    result: L('= 28.23 USD', '= 28,23 USD'),
  },
  xy: L(
    'From any currency to any other: see a trip through Switzerland and Italy in euros, while your own totals stay in dollars.',
    'Fra én valuta til en hvilken som helst anden: se en tur gennem Schweiz og Italien i euro, mens dine egne totaler bliver i dollar.'
  ),
  source: L(
    'You never look up a rate. Yenzo fetches the official rate for the exact day you paid, and keeps it, so an old payment never changes.',
    'Du slår aldrig en kurs op. Yenzo henter den officielle kurs for præcis den dag, du betalte, og gemmer den, så en gammel betaling aldrig ændrer sig.'
  ),
  cardRate: L(
    'Know the exact rate from your bank statement? Type it on the transaction, and it wins.',
    'Kender du den præcise kurs fra kontoudtoget? Skriv den på transaktionen, så vinder den.'
  ),
  more: L('How conversion works, and all 149 currencies', 'Sådan omregnes der, og alle 149 valutaer'),
};

export const languages = {
  title: L('Speaks 248 languages.', 'Taler 248 sprog.'),
  body: L(
    'From Dansk and English to Kalaallisut, Føroyskt, isiXhosa, Runasimi and ᏣᎳᎩ, each with its own way of writing numbers. 18 of them read from right to left.',
    'Fra dansk og engelsk til Kalaallisut, Føroyskt, isiXhosa, Runasimi og ᏣᎳᎩ, hver med sin egen måde at skrive tal på. 18 af dem læses fra højre mod venstre.'
  ),
  more: L('See all 248', 'Se alle 248'),
};

export const toolbox = {
  title: L('And the rest of the toolbox', 'Og resten af værktøjskassen'),
  list: [
    { icon: 'receipt', text: L('Scan a receipt: the lines are read on the phone and checked against the total.', 'Skan en kvittering: linjerne læses på telefonen og tjekkes mod totalen.') },
    { icon: 'offline', text: L('Works offline. Syncs when you are back online.', 'Virker offline. Synkroniserer, når du er online igen.') },
    { icon: 'search', text: L('Search title, note, amount or place. Filter by time of day: 20:00 to 24:00 finds most restaurant visits.', 'Søg i titel, note, beløb eller sted. Filtrér på tidspunkt: 20:00 til 24:00 finder de fleste restaurantbesøg.') },
    { icon: 'export', text: L('Export all your payments as CSV files, as often as you like.', 'Eksportér alle dine betalinger som CSV-filer, så tit du vil.') },
    { icon: 'space', text: L('Shared spaces: share chosen payments with your partner or a trip, with comments.', 'Delte rum: del udvalgte betalinger med din partner eller en rejse, med kommentarer.') },
    { icon: 'split', text: L('One bill paid several ways? Link the parts into one split payment: the bill on the card and the tip in cash, or any mix of accounts and payment methods.', 'Én regning betalt på flere måder? Forbind delene til én delt betaling: regningen på kortet og drikkepengene kontant, eller en hvilken som helst blanding af konti og betalingsmetoder.') },
    { icon: 'tag', text: L('Tags and groups with totals, statistics and a chart per day.', 'Tags og grupper med totaler, statistik og et diagram pr. dag.') },
    { icon: 'photo', text: L('Photos from the camera or library, and a photo’s location as the place.', 'Billeder fra kamera eller bibliotek, og et billedes placering som sted.') },
    { icon: 'tip', text: L('Tip calculator: fill in two of three fields, it works out the third.', 'Drikkepengeberegner: udfyld to af tre felter, så regner den det tredje ud.') },
    { icon: 'bulk', text: L('Edit many payments at once. Only the fields you touch change.', 'Redigér mange betalinger på én gang. Kun de felter, du rører, ændres.') },
    { icon: 'dark', text: L('Light and dark mode.', 'Lys og mørk tilstand.') },
  ],
  more: L('Every feature, on one page', 'Alle funktioner, på én side'),
};

export const film = {
  title: L('Watch it happen.', 'Se det ske.'),
};

export const finale = {
  title: L('Save every payment. Type almost nothing.', 'Gem alt. Skriv næsten intet.'),
};
