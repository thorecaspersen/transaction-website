import { L } from '../lib/i18n.mjs';

export const site = {
  name: 'Yenzo',
  domain: 'transaction.thore.me',
  url: 'https://transaction.thore.me',
  email: 'transaction@thore.me',
  appStore: 'https://apps.apple.com/app/transaction/id0000000000',
  googlePlay: 'https://play.google.com/store/apps/details?id=com.transaction.mobileapp',
  updated: L('5 November 2026', '5. november 2026'),
  tagline: L('Your payments, with extra detail', 'Dine betalinger med ekstra detaljer'),
  requirements: L('iPhone with iOS 17 or newer · Android 8.0 or newer', 'iPhone med iOS 17 eller nyere · Android 8.0 eller nyere'),
};

export const pages = [
  {
    id: 'home',
    path: '/',
    title: L('Yenzo | your payments, with extra detail', 'Yenzo | dine betalinger med ekstra detaljer'),
    description: L(
      'Pay with Apple Wallet, and the transaction writes itself, with the exact time, the place, the card and the account. Every field on one screen, two taps away.',
      'Betal med Apple Wallet, så skriver transaktionen sig selv, med præcist tidspunkt, placering, betalingskort og konto. Alle felter på én skærm, to tryk væk.'
    ),
  },
  {
    id: 'download',
    path: '/download/',
    title: L('Get the app | Yenzo', 'Hent appen | Yenzo'),
    description: L('Download Yenzo from the App Store or Google Play.', 'Hent Yenzo i App Store eller Google Play.'),
  },
  {
    id: 'transactions',
    path: '/transactions/',
    title: L('Transactions | Yenzo', 'Transaktioner | Yenzo'),
    description: L('Money you paid, with every detail your bank leaves out.', 'Penge, du har betalt, med alle de detaljer, banken udelader.'),
  },
  {
    id: 'shared-expenses',
    path: '/shared-expenses/',
    title: L('Shared expenses | Yenzo', 'Fælles udgifter | Yenzo'),
    description: L('Something someone else paid, that you were part of.', 'Noget, en anden betalte, som du var en del af.'),
  },
  {
    id: 'incoming-payments',
    path: '/incoming-payments/',
    title: L('Incoming payments | Yenzo', 'Indgående betalinger | Yenzo'),
    description: L('Money that came in to you, or to an account you share.', 'Penge, der kom ind til dig eller på en konto, du deler.'),
  },
  {
    id: 'automation',
    path: '/automation/',
    title: L('Payments that save themselves | Yenzo', 'Betalinger, der gemmes automatisk i Yenzo app | Yenzo'),
    description: L(
      'Apple Wallet payments and payment notifications become transactions by themselves, with the place and the exact time.',
      'Apple Wallet-betalinger og betalingsnotifikationer bliver selv til transaktioner, med sted og præcist tidspunkt.'
    ),
  },
  {
    id: 'shortcut-guide',
    path: '/shortcut-guide/',
    title: L('Shortcuts setup, step by step | Yenzo', 'Genveje-opsætning, trin for trin | Yenzo'),
    description: L(
      'Connect Yenzo to Apple Wallet and Nordea notifications through Shortcuts, with a screenshot of every step.',
      'Forbind Yenzo med Apple Wallet og Nordea-notifikationer via Genveje, med et skærmbillede af hvert trin.'
    ),
  },
  {
    id: 'travel',
    path: '/travel/',
    title: L('Travelling together | Yenzo', 'På tur sammen | Yenzo'),
    description: L(
      'You buy dinner tonight, someone else tomorrow. Keep the overview without turning the holiday into an accounting sheet.',
      'Du giver middag i aften, en anden i morgen. Bevar overblikket uden at gøre ferien til et regneark.'
    ),
  },
  {
    id: 'features',
    path: '/features/',
    title: L('Features | Yenzo', 'Funktioner | Yenzo'),
    description: L('Everything Yenzo can do, on one page.', 'Alt, hvad Yenzo kan, på én side.'),
  },
  {
    id: 'templates',
    path: '/templates/',
    title: L('Templates | Yenzo', 'Skabeloner | Yenzo'),
    description: L('Coloured squares that fill in a whole payment, or create it, in one tap.', 'Farvede firkanter, der udfylder en hel betaling, eller opretter den, med ét tryk.'),
  },
  {
    id: 'custom-fields',
    path: '/custom-fields/',
    title: L('Custom fields | Yenzo', 'Egne felter | Yenzo'),
    description: L(
      'Your own fields on every kind of payment, the create screen in your own order, and nothing ever deleted. Step by step, with screenshots.',
      'Dine egne felter på alle slags betalinger, opret-skærmen i din egen rækkefølge, og intet bliver nogensinde slettet. Trin for trin, med skærmbilleder.'
    ),
  },
  {
    id: 'prefilled',
    path: '/prefilled/',
    title: L('Prefilled values | Yenzo', 'Forudfyldte værdier | Yenzo'),
    description: L('Your own titles, merchants and payers, and the values every new payment starts with.', 'Dine egne titler, butikker og betalere, og de værdier, hver ny betaling starter med.'),
  },
  {
    id: 'offline',
    path: '/offline/',
    title: L('Offline | Yenzo', 'Offline | Yenzo'),
    description: L('Create and edit without internet. Saved on the phone first, synced when you are back.', 'Opret og redigér uden internet. Gemt på telefonen først, synkroniseret når du er tilbage.'),
  },
  {
    id: 'export',
    path: '/export/',
    title: L('Export | Yenzo', 'Eksport | Yenzo'),
    description: L('Your data as CSV files, as often as you like.', 'Dine data som CSV-filer, så tit du vil.'),
  },
  {
    id: 'watch',
    path: '/watch/',
    title: L('On your watch | Yenzo', 'På dit ur | Yenzo'),
    description: L('Type the amount on your Apple Watch or Wear OS watch, and your phone books the payment.', 'Skriv beløbet på dit Apple Watch eller Wear OS-ur, så opretter telefonen betalingen.'),
  },
  {
    id: 'currencies',
    path: '/currencies/',
    title: L('Currencies and exchange rates | Yenzo', 'Valutaer og kurser | Yenzo'),
    description: L(
      '149 currencies, the official rate from the day you paid, and your bank’s fees on top.',
      '149 valutaer, den officielle kurs fra den dag, du betalte, og bankens gebyrer oveni.'
    ),
  },
  {
    id: 'languages',
    path: '/languages/',
    title: L('248 languages | Yenzo', '248 sprog | Yenzo'),
    description: L('The app speaks 248 languages, each with its own number format.', 'Appen taler 248 sprog, hver med sit eget talformat.'),
  },
  {
    id: 'faq',
    path: '/faq/',
    title: L('Questions and answers | Yenzo', 'Spørgsmål og svar | Yenzo'),
    description: L('How to add the tricky ones: group dinners, cash tips, reimbursements and more.', 'Sådan tilføjer du de svære: gruppemiddage, drikkepenge i kontanter, tilbagebetalinger og mere.'),
  },
  {
    id: 'support',
    path: '/support/',
    title: L('Support | Yenzo', 'Support | Yenzo'),
    description: L('Help with Yenzo: contact, setup guides and quick answers.', 'Hjælp til Yenzo: kontakt, opsætning og hurtige svar.'),
  },
  {
    id: 'privacy',
    path: '/privacy/',
    title: L('Privacy policy | Yenzo', 'Privatlivspolitik | Yenzo'),
    description: L('What Yenzo stores, why, where, and how to get it deleted.', 'Hvad Yenzo gemmer, hvorfor, hvor, og hvordan du får det slettet.'),
  },
  {
    id: 'tos',
    path: '/tos/',
    title: L('Terms of use | Yenzo', 'Vilkår for brug | Yenzo'),
    description: L('Terms of use for Yenzo, including the end-user licence agreement.', 'Vilkår for brug af Yenzo, inklusive slutbrugerlicensaftalen.'),
  },
  {
    id: 'delete-account',
    path: '/delete-account/',
    title: L('Delete your account | Yenzo', 'Slet din konto | Yenzo'),
    description: L('How to delete your Yenzo account and all your data.', 'Sådan sletter du din Yenzo-konto og alle dine data.'),
  },
  {
    id: 'not-found',
    path: '/404.html',
    file: '404.html',
    title: L('Page not found | Yenzo', 'Siden findes ikke | Yenzo'),
    description: L('This page does not exist.', 'Siden findes ikke.'),
  },
];

export const redirects = { '/terms/': '/tos/', '/eula/': '/tos/' };

export const pageById = Object.fromEntries(pages.map((p) => [p.id, p]));

export const nav = {
  main: [
    { id: 'automation', label: L('Automatic', 'Automatisk') },
    { id: 'transactions', label: L('Transactions', 'Transaktioner') },
    { id: 'shared-expenses', label: L('Shared expenses', 'Fælles udgifter') },
    { id: 'incoming-payments', label: L('Incoming payments', 'Indgående betalinger') },
    { id: 'travel', label: L('Travelling together', 'På tur sammen') },
    { id: 'features', label: L('Features', 'Funktioner') },
  ],
  footer: [
    {
      heading: L('The app', 'Appen'),
      links: [
        { id: 'automation', label: L('Payments that save themselves', 'Betalinger, der gemmes automatisk i Yenzo app') },
        { id: 'transactions', label: L('Transactions', 'Transaktioner') },
        { id: 'shared-expenses', label: L('Shared expenses', 'Fælles udgifter') },
        { id: 'incoming-payments', label: L('Incoming payments', 'Indgående betalinger') },
        { id: 'travel', label: L('Travelling together', 'På tur sammen') },
        { id: 'features', label: L('Features', 'Funktioner') },
      ],
    },
    {
      heading: L('Reference', 'Opslag'),
      links: [
        { id: 'currencies', label: L('149 currencies', '149 valutaer') },
        { id: 'languages', label: L('248 languages', '248 sprog') },
        { id: 'faq', label: L('Questions and answers', 'Spørgsmål og svar') },
        { id: 'support', label: L('Support', 'Support') },
      ],
    },
    {
      heading: L('Legal', 'Jura'),
      links: [
        { id: 'privacy', label: L('Privacy policy', 'Privatlivspolitik') },
        { id: 'tos', label: L('Terms of use', 'Vilkår for brug') },
        { id: 'delete-account', label: L('Delete your account', 'Slet din konto') },
      ],
    },
  ],
};
