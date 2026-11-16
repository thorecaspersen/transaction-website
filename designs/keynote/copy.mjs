import { L } from '../../lib/i18n.mjs';

export const C = {
  skip: L('Skip to content', 'Spring til indhold'),
  pages: L('Pages', 'Sider'),
  menu: L('Menu', 'Menu'),
  crumb: L('You are here', 'Du er her'),
  getApp: L('Get the app', 'Hent appen'),
  download: {
    title: L('iPhone or Android?', 'iPhone eller Android?'),
    text: L('Choose the store that matches your phone.', 'Vælg den butik, der passer til din telefon.'),
  },
  contact: L('Contact', 'Kontakt'),
  onPage: L('On this page', 'På denne side'),
  edit: 'Edit',
  enlarge: L('Show larger', 'Vis større'),
  saved: L('What you save', 'Det du gemmer'),
  close: L('Close', 'Luk'),
  language: {
    open: L('Change language', 'Skift sprog'),
    title: L('Language', 'Sprog'),
    search: L('Search languages', 'Søg efter sprog'),
    clear: L('Clear search', 'Ryd søgning'),
    none: L('No language matches your search.', 'Intet sprog passer til din søgning.'),
    all: L('All languages', 'Alle sprog'),
  },
  paper: { w: 600, h: 683, alt: L('A paper receipt from Café Lua: Flat white 3.60, Cookie 1.20, total 4.80 USD', 'En papirkvittering fra Café Lua: Flat white 3.60, Cookie 1.20, i alt 4.80 USD') },
  add: 'Add',
  moment: {
    date: L('Sunday 1 November', 'Søndag 1. november'),
    time: '08:42',
    line: L('You buy a coffee at Café Lua.', 'Du køber en kaffe på Café Lua.'),
  },
  tour: [
    {
      f: ['date'],
      shot: 'sheet-date',
      h: L('The time, to the minute.', 'Tidspunktet, på minuttet.'),
      p: L(
        'Set the moment the screen opens. Tap it to pick yesterday or another day, and type the time on the number pad.',
        'Sat i det øjeblik, skærmen åbner. Tryk på det for at vælge i går eller en anden dag, og skriv klokkeslættet på nummertastaturet.'
      ),
    },
    {
      f: ['account'],
      h: L('An account is much more than a bank account.', 'En konto er meget mere end en bankkonto.'),
      p: L(
        'Your bank probably gives you several already: salary, shared, housing. But the cash in your wallet is an account too, and so, perhaps, are the travel card, the festival wristband and the work ID card you pay lunch with. Think outside the box, and make as many accounts as you need in Settings. The more precise you are, the more your payments tell you later.',
        'Banken giver dig nok allerede flere: løn, fælles, bolig. Men kontanterne i pungen er også en konto, og det er rejsekortet, festivalarmbåndet og arbejdets ID-kort, du betaler frokost med, måske også. Tænk ud af boksen, og lav så mange konti, som du har brug for, i indstillingerne. Jo mere præcist, jo mere fortæller dine betalinger dig senere.'
      ),
    },
    {
      f: ['account', 'method'],
      shot: 'accounts',
      h: L('Pick the account. The card follows.', 'Vælg kontoen. Kortet følger med.'),
      p: L(
        'Link each account to a payment method, and the payment method is chosen for you when you pick the account. Main sets Apple Pay. The account is not tied to it: you can still pick any payment method. The link just saves a tap when most of an account’s payments are made the same way. Add as many payment methods as you like in Settings, just like accounts.',
        'Forbind hver konto med en betalingsmetode, så vælges betalingsmetoden automatisk, når du vælger kontoen. Lønkonto sætter Apple Pay. Kontoen er ikke låst til den: du kan stadig vælge en hvilken som helst betalingsmetode. Forbindelsen sparer bare et tryk, når de fleste betalinger fra en konto foregår på samme måde. Tilføj så mange betalingsmetoder, du vil, i indstillingerne, ligesom konti.'
      ),
    },
    {
      f: ['title', 'merchant'],
      shot: 'title-picker',
      h: L('Title and merchant, in two taps.', 'Titel og butik med to tryk.'),
      p: L('Your prefilled titles and merchants sit right under the field. Tap the field, tap “Coffee”. Add as many as you like in Settings, in your own order.', 'Dine forudfyldte titler og butikker ligger lige under feltet. Tryk på feltet, tryk på “Coffee”. Tilføj så mange, du vil, i indstillingerne, i din egen rækkefølge.'),
    },
    {
      f: ['place'],
      shot: 'place-pick',
      h: L('The place, by itself.', 'Stedet, helt af sig selv.'),
      p: L(
        'Turn on Auto-set Location, and it is taken from where you are when the screen opens, and saved as an address. Or zoom the map, drop a pin and pick any point. Change it, or clear it. When you edit a payment, you can also use the location of an attached photo.',
        'Slå Auto-sæt Placering til, så hentes den fra, hvor du er, når skærmen åbner, og gemmes som en adresse. Eller zoom ind på kortet, sæt en nål og vælg et punkt. Ret den, eller ryd den. Når du redigerer en betaling, kan du også bruge placeringen fra et vedhæftet billede.'
      ),
    },
    {
      f: ['media'],
      shots: ['media-selected', 'place-photo'],
      h: L('Photos, with the place inside.', 'Billeder, med stedet indeni.'),
      p: L(
        'Take a photo or pick one from the library: the receipt, the dish, the price tag. Attach several to one payment, and tap “Scan for items” on a receipt photo to read its lines. If a photo has a location, you can pick it as the place when you edit the payment.',
        'Tag et billede, eller vælg et fra biblioteket: kvitteringen, retten, prisskiltet. Tilføj flere til én betaling, og tryk “Skan for varer” på et kvitteringsbillede for at læse linjerne. Har et billede en placering, kan du vælge den som sted, når du redigerer betalingen.'
      ),
    },
    {
      f: ['groups'],
      shot: 'sheet-groups',
      h: L('Groups for trips and projects.', 'Grupper til rejser og projekter.'),
      p: L('Put a payment in one or more groups, like a trip to Lissabon, and see totals, statistics and a chart per day. Make as many groups as you like, each with its own name and currency.', 'Læg en betaling i en eller flere grupper, som en tur til Lissabon, og se totaler, statistik og et diagram pr. dag. Lav så mange grupper, du vil, hver med sit eget navn og sin egen valuta.'),
    },
    {
      f: ['category'],
      shot: 'sheet-category',
      h: L('A category in one tap.', 'En kategori med ét tryk.'),
      p: L('Dining, groceries, transport, accommodation and more. Coffee goes under Treats & Beverages.', 'Mad ude, dagligvarer, transport, overnatning og mere. Kaffen hører til under Søde sager & Drikkevarer.'),
    },
    {
      f: ['amount', 'tip'],
      shot: 'sheet-tip',
      h: L('The amount, and the tip.', 'Beløbet, og drikkepengene.'),
      p: L(
        'The calculator next to the amount works out the tip: fill in two of total, tip and amount without tip, and it finds the third.',
        'Lommeregneren ved beløbet regner drikkepengene ud: udfyld to af total, drikkepenge og beløb uden drikkepenge, så finder den det tredje.'
      ),
    },
    {
      f: ['currency'],
      shot: 'sheet-currency',
      h: L('Any of 149 currencies.', 'En af 149 valutaer.'),
      p: L('Converted to your main currency at the official rate from the day you paid.', 'Omregnet til din hovedvaluta med den officielle kurs fra den dag, du betalte.'),
    },
    {
      f: ['split'],
      shot: 'sheet-split',
      h: L('Paid more than one way?', 'Betalt på mere end én måde?'),
      p: L(
        'One payment can be split across any mix of accounts and payment methods. The bill on the card and the tip in cash is just one example: add each part as a linked part, and they show up together as one split payment.',
        'Én betaling kan deles mellem en hvilken som helst blanding af konti og betalingsmetoder. Regningen på Dankortet og drikkepengene kontant er bare ét eksempel: tilføj hver del som en forbundet del, så vises de samlet som én delt betaling.'
      ),
    },
    {
      f: ['notes'],
      h: L('Notes, for the rest.', 'Noter til resten.'),
      p: L('Anything you want to remember about it, in your own words.', 'Alt det, du vil huske om den, med dine egne ord.'),
    },
    {
      f: ['tags'],
      h: L('Tags, as many as you like.', 'Tags, så mange du vil.'),
      p: L('Your own labels across accounts and groups, with totals and statistics for each. Create them in Settings, and name them however you like.', 'Dine egne mærkater på tværs af konti og grupper, med totaler og statistik for hver. Opret dem i indstillingerne, og kald dem, hvad du vil.'),
    },
    {
      f: ['paid'],
      shot: 'create-trip',
      h: L('Who you paid for.', 'Hvem du betalte for.'),
      p: L(
        'Paid dinner for friends? Add their names and amounts, or split evenly in one tap. The group shows who owes whom.',
        'Gav du middag til vennerne? Tilføj navne og beløb, eller fordel ligeligt med ét tryk. Gruppen viser, hvem der skylder hvem.'
      ),
    },
    {
      f: ['wallet'],
      shot: 'wallet-example',
      h: L('A Wallet screenshot fills the form.', 'Et Wallet-screenshot udfylder formularen.'),
      p: L(
        'Paid online, where no tap fires the automation? Take a screenshot of the payment in Wallet and tap Import. The amount and the merchant are read on the phone and filled in for you. Even easier: set up an automation in Apple’s Shortcuts app once, and every time you tap to pay with Apple Pay, the transaction creates itself.',
        'Betalt online, hvor intet tryk starter automatiseringen? Tag et screenshot af betalingen i Wallet, og tryk Import. Beløbet og butikken læses på telefonen og udfyldes for dig. Endnu nemmere: sæt en automatisering op i Apples Genveje-app én gang, så opretter transaktionen sig selv, hver gang du betaler med Apple Pay ved kassen.'
      ),
    },
    {
      f: ['receipt', 'items'],
      shot: 'receipt-items',
      paper: 'receipt-paper',
      h: L('Every line on the receipt.', 'Hver linje på kvitteringen.'),
      p: L(
        'Scan the receipt, and each line becomes an item with its own amount. The lines are read on the phone and checked against the receipt total.',
        'Skan kvitteringen, så bliver hver linje til en vare med sit eget beløb. Linjerne læses på telefonen og tjekkes mod kvitteringens total.'
      ),
    },
    {
      f: ['add'],
      h: L('Add. Saved.', 'Tilføj. Gemt.'),
      p: L('One tap, and it is saved, even without internet. It syncs when you are back online.', 'Ét tryk, så er den gemt, også uden internet. Den synkroniseres, når du er online igen.'),
    },
  ],
  prefilledName: L('Prefilled titles, merchants and payers', 'Forudfyldte titler, butikker og betalere'),
  defaultsName: L('Default values', 'Standardværdier'),
  bento: {
    zero: { unit: L('taps', 'tryk') },
    one: { unit: L('tap', 'tryk'), more: L('How templates work', 'Sådan virker skabeloner') },
    two: {
      unit: L('taps', 'tryk'),
      more: L('Prefilled values and defaults', 'Forudfyldte værdier og standardværdier'),
      text: L('Tap the field, tap “Lunch”. Your prefilled titles, merchants and payers sit right under it.', 'Tryk på feltet, tryk på “Frokost”. Dine forudfyldte titler, butikker og betalere ligger lige under det.'),
    },
    cur: {
      unit: L('currencies', 'valutaer'),
      text: L('Every payment converted at the official rate from the day you paid.', 'Hver betaling omregnet med den officielle kurs fra den dag, du betalte.'),
    },
    lang: {
      unit: L('languages', 'sprog'),
      text: L('Each with its own number format. 18 of them read from right to left.', 'Hver med sit eget talformat. 18 af dem læses fra højre mod venstre.'),
    },
    offline: {
      big: L('Offline.', 'Offline.'),
      more: L('How offline works', 'Sådan virker offline'),
      text: L('Create and edit without internet. Synced when you are back.', 'Opret og redigér uden internet. Synkroniseret, når du er tilbage.'),
    },
    csv: {
      more: L('What the export contains', 'Hvad eksporten indeholder'),
      text: L(
        'Export all your payments, as often as you like, with the original amount, the converted amount, the rate and the fee.',
        'Eksportér alle dine betalinger, så tit du vil, med det oprindelige beløb, det omregnede beløb, kursen og gebyret.'
      ),
    },
  },
};
