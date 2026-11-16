import { L } from '../lib/i18n.mjs';

export const transactions = {
  name: L('Transaction', 'Transaktion'),
  title: L('Transactions', 'Transaktioner'),
  line: L('Money you paid: from your own accounts, or accounts you share.', 'Penge, du har betalt: fra dine egne konti eller konti, du deler.'),
  example: L('Lunch at Corner Deli · 12.50 USD · Work account · Work card · 12:04', 'Frokost på Corner Deli · 12,50 USD · Work-konto · Work card · 12:04'),
  intro: L(
    'It is easy to forget what your money went on, and card and phone payments rarely leave a useful trail. A transaction is the payment plus everything you will want to know later: what, where, when, how and with whom. That is why the app opens straight on the form for a new one.',
    'Det er let at glemme, hvad pengene gik til, og kort- og mobilbetalinger efterlader sjældent et brugbart spor. En transaktion er betalingen plus alt det, du vil vide senere: hvad, hvor, hvornår, hvordan og med hvem. Derfor åbner appen direkte på formularen til en ny.'
  ),
  rule: L(
    'A transaction is always something you paid yourself, or something paid from an account you are part of, like the joint account you share with your partner.',
    'En transaktion er altid noget, du selv har betalt, eller noget, der er betalt fra en konto, du er en del af, som fælleskontoen med din partner.'
  ),
  fieldsTitle: L('Every field, one screen', 'Alle felter, én skærm'),
  fields: [
    { name: L('Date & time', 'Dato & tid'), text: L('Set to now. Today or yesterday is one tap; type the time on the number pad.', 'Sat til nu. I dag eller i går er ét tryk; tidspunktet skrives på taltastaturet.') },
    { name: L('Account', 'Konto'), text: L('Your own accounts, in your own words. An account can set the payment method for you.', 'Dine egne konti, med dine egne ord. En konto kan sætte betalingsmetoden for dig.') },
    { name: L('Payment method', 'Betalingsmetode'), text: L('Apple Pay, Google Pay, card, cash, bank transfer, or any you add yourself.', 'Apple Pay, Google Pay, kort, kontant, bankoverførsel, eller dem, du selv tilføjer.') },
    { name: L('Title and merchant', 'Titel og butik'), text: L('With your prefilled titles and shops one tap away.', 'Med dine forudfyldte titler og butikker ét tryk væk.') },
    { name: L('Location', 'Placering'), text: L('Where you are, a spot on the map, or the location stored in a photo.', 'Der hvor du er, et sted på kortet eller placeringen fra et billede.') },
    { name: L('Photos', 'Billeder'), text: L('From the camera or the photo library. Pinch to zoom in on the bill.', 'Fra kameraet eller fotobiblioteket. Knib for at zoome ind på regningen.') },
    { name: L('Groups and category', 'Grupper og kategori'), text: L('Any number of groups, and one of ten categories.', 'Lige så mange grupper du vil, og én af ti kategorier.') },
    { name: L('Amount and currency', 'Beløb og valuta'), text: L('In any of 149 currencies, converted at the rate from the day you paid.', 'I en hvilken som helst af 149 valutaer, omregnet med kursen fra den dag, du betalte.') },
    { name: L('Tip', 'Drikkepenge'), text: L('Fill in two of total, tip and amount without tip: the calculator finds the third. Or give the tip as a percent.', 'Udfyld to af total, drikkepenge og beløb uden drikkepenge: beregneren finder det tredje. Eller angiv drikkepengene i procent.') },
    { name: L('My share', 'Min andel'), text: L('Paid the whole bill for four? Your own part goes here.', 'Betalte du hele regningen for fire? Din egen del står her.') },
    { name: L('Notes', 'Noter'), text: L('Up to 500 characters of whatever you will want to remember.', 'Op til 500 tegn med det, du vil huske.') },
    { name: L('Tags', 'Tags'), text: L('Your own labels. Filter by them, and see what each one cost in a group.', 'Dine egne mærker. Filtrér på dem, og se hvad hvert af dem kostede i en gruppe.') },
    { name: L('Paid for others', 'Betalt for andre'), text: L('Who you paid for, with names and amounts, or split evenly in one tap.', 'Hvem du betalte for, med navne og beløb, eller fordel ligeligt med ét tryk.') },
    { name: L('Receipt lines', 'Kvitteringslinjer'), text: L('Read from a photo of the receipt and checked against the total.', 'Læst fra et billede af kvitteringen og tjekket mod totalen.') },
    { name: L('Parts paid another way', 'Dele betalt på en anden måde'), text: L('The cash tip next to the card payment, linked to the same bill.', 'Kontant-drikkepengene ved siden af kortbetalingen, knyttet til den samme regning.') },
    { name: L('Card exchange rate', 'Kort-valutakurs'), text: L('The rate from your bank statement, when you want it exact.', 'Kursen fra dit kontoudtog, når du vil have det præcist.') },
    { name: L('Imported details', 'Importerede oplysninger'), text: L('An extra text box with everything an automation sent, word for word. Your own notes stay separate.', 'Et ekstra tekstfelt med alt, hvad en automatisering sendte, ord for ord. Dine egne noter holdes adskilt.') },
  ],
  waysTitle: L('Six ways to make one', 'Seks måder at lave en på'),
  ways: [
    { name: L('By itself', 'Af sig selv'), text: L('An Apple Wallet payment or a payment notification becomes a transaction without you touching the phone.', 'En Apple Wallet-betaling eller en betalingsnotifikation bliver til en transaktion, uden at du rører telefonen.') },
    { name: L('One tap', 'Ét tryk'), text: L('A template fills the form or creates the transaction outright.', 'En skabelon udfylder formularen eller opretter transaktionen med det samme.') },
    { name: L('A few taps', 'Få tryk'), text: L('Default values and prefilled titles, merchants and payers do most of the typing.', 'Standardværdier og forudfyldte titler, butikker og betalere klarer det meste af skrivningen.') },
    { name: L('From a Wallet screenshot', 'Fra et Wallet-screenshot'), text: L('On iPhone: take a screenshot of the payment in Wallet, or pick one from your library, and the fields fill in.', 'På iPhone: tag et screenshot af betalingen i Wallet, eller vælg et i dit bibliotek, så udfyldes felterne.') },
    { name: L('From a MobilePay receipt', 'Fra en MobilePay-kvittering'), text: L('On iPhone: share the receipt from MobilePay to Transaction, and the payment is filled in.', 'På iPhone: del kvitteringen fra MobilePay til Transaction, så udfyldes betalingen.') },
    { name: L('From a receipt photo', 'Fra et kvitteringsfoto'), text: L('The receipt lines and the total are read on the phone.', 'Kvitteringslinjerne og totalen læses på telefonen.') },
  ],
  casesTitle: L('Tricky ones, solved', 'Svære tilfælde, løst'),
  cases: [
    {
      q: L('You paid the restaurant bill by card, a friend left the tip in cash', 'Du betalte regningen på restauranten med kort, en ven lagde drikkepenge i kontanter'),
      a: L(
        'Add the card payment, open it and tap “Add a part paid another way”. Choose who paid the tip: your cash, the shared cash, another account, or someone else. Pick your friend, and the tip becomes a <strong>shared expense</strong> with them as the payer, linked to your card payment. The parts show up together as one split payment.',
        'Gem kortbetalingen, åbn den, og tryk “Tilføj en del betalt på en anden måde”. Vælg, hvem der betalte drikkepengene: dine kontanter, de fælles kontanter, en anden konto eller en anden person. Vælger du din ven, bliver drikkepengene en <strong>fælles udgift</strong> med vennen som betaler, forbundet med din kortbetaling. Så vises delene samlet som én delt betaling.'
      ),
    },
    {
      q: L('You bought six beers for yourself, then shared them', 'Du købte seks øl til dig selv og delte dem senere'),
      a: L(
        'Keep it as one transaction, turn on “Paid for others” and add who drank them, with or without an amount. They show up in the group’s “Who owes whom”, and those with an amount count towards it.',
        'Behold den som én transaktion, slå “Betalt for andre” til, og tilføj hvem der drak dem, med eller uden beløb. De dukker op under gruppens “Hvem skylder hvem”, og dem med et beløb tæller med.'
      ),
    },
  ],
};

export const sharedExpenses = {
  name: L('Shared expense', 'Fælles udgift'),
  title: L('Shared expenses', 'Fælles udgifter'),
  line: L('Something someone else paid, that you were part of.', 'Noget, en anden betalte, som du var en del af.'),
  example: L('Maria paid dinner for four · about 120 EUR · your share about 30', 'Maria betalte middag for fire · ca. 120 EUR · din andel ca. 30'),
  intro: L(
    'Friends pick up the restaurant bill. Your partner pays for the groceries from their own account. It is still money spent on you, and a shared expense remembers it, so you remember to give back.',
    'Vennerne tager restaurantregningen. Din partner betaler indkøbene fra sin egen konto. Det er stadig penge brugt på dig, og en fælles udgift husker det, så du husker at give igen.'
  ),
  rule: L('The payer is always someone else. If you paid, it is a transaction.', 'Betaleren er altid en anden. Har du selv betalt, er det en transaktion.'),
  partner: L(
    'Paid from the joint account you share with your partner? That is a transaction. Your partner paid from their own account for something you both use? That is a shared expense.',
    'Betalt fra fælleskontoen med din partner? Så er det en transaktion. Har din partner betalt fra sin egen konto for noget, I begge bruger? Så er det en fælles udgift.'
  ),
  fieldsTitle: L('Made for “roughly”', 'Lavet til “cirka”'),
  fields: [
    { name: L('Amount, if you know it', 'Beløb, hvis du kender det'), text: L('Leave it empty when you have no idea. The payment still counts.', 'Lad det stå tomt, når du ikke aner det. Posten tæller stadig.') },
    { name: L('Exact or approximate', 'Præcist eller cirka'), text: L('Say whether the amount is exact, or just about right.', 'Angiv, om beløbet er præcist eller bare cirka.') },
    { name: L('Your share', 'Din andel'), text: L('Also allowed to be a rough number.', 'Må også gerne være et cirka-tal.') },
    { name: L('Finalized', 'Afsluttet'), text: L('Mark it when you owe nothing more, and add a note if they said it was on them.', 'Markér den, når du ikke skylder mere, og skriv en note, hvis de sagde, at det var deres gave.') },
    { name: L('Payer', 'Betaler'), text: L('Pick from your saved payers with one tap, or type a new name.', 'Vælg blandt dine gemte betalere med ét tryk, eller skriv et nyt navn.') },
  ],
  looseTitle: L('Loose on purpose', 'Løst med vilje'),
  loose: L(
    'On a family holiday, one person buys dinner one evening and someone else the next. It does not need to be exact, just about right, a format a cent-exact settle-up app would never accept. Shared expenses keep the overview, and the group shows who owes whom.',
    'På familieferien giver én middagen den ene aften og en anden den næste. Det behøver ikke at være præcist, bare cirka, et format, som en app til præcis afregning aldrig ville acceptere. Fælles udgifter holder overblikket, og gruppen viser, hvem der skylder hvem.'
  ),
  notFor: L(
    'Need everyone to pay exactly the same, settled to the cent? MobilePay groups or a similar app is better for that.',
    'Skal alle betale præcis det samme, gjort op til øren? Så er MobilePay-grupper eller en lignende app bedre til det.'
  ),
};

export const incomingPayments = {
  name: L('Incoming payment', 'Indgående betaling'),
  title: L('Incoming payments', 'Indgående betalinger'),
  line: L('Money that came in to you, or to an account you share.', 'Penge, der kom ind til dig, eller på en konto, du deler.'),
  example: L('Sofie paid you back for Thursday’s dinner · 24 EUR · cash', 'Sofie betalte dig tilbage for torsdagens middag · 24 EUR · kontant'),
  intro: L(
    'Transactions follow the money going out. Incoming payments follow the money coming in: a friend paying you back, a transfer to an account you own, your partner’s salary landing in the household account.',
    'Transaktioner følger pengene, der går ud. Indgående betalinger følger pengene, der kommer ind: en ven, der betaler dig tilbage, en overførsel til en konto, du ejer, din partners løn, der lander på husholdningskontoen.'
  ),
  rule: L('The payer is always someone else, never yourself.', 'Betaleren er altid en anden, aldrig dig selv.'),
  fieldsTitle: L('What you note down', 'Det, du skriver ned'),
  fields: [
    { name: L('Payer', 'Betaler'), text: L('Who sent the money.', 'Hvem der sendte pengene.') },
    { name: L('Account', 'Konto'), text: L('Where it landed: your own account or a shared one.', 'Hvor de landede: din egen konto eller en fælles.') },
    { name: L('Amount and currency', 'Beløb og valuta'), text: L('Any of 149 currencies.', 'En hvilken som helst af 149 valutaer.') },
    { name: L('Payment method', 'Betalingsmetode'), text: L('Bank transfer, cash, or your own.', 'Bankoverførsel, kontant eller din egen.') },
    { name: L('Groups, tags, photos, place', 'Grupper, tags, billeder, placering'), text: L('The same tools as everywhere else.', 'De samme værktøjer som alle andre steder.') },
  ],
  loopTitle: L('It closes the loop', 'Den lukker cirklen'),
  loop: L(
    'You paid for dinner with friends: a transaction. Later a friend sends you their share: an incoming payment. In the group, “Who owes whom” counts it as “Transferred to you”, and the two of you are all square.',
    'Du betalte middagen med vennerne: en transaktion. Senere sender en ven dig sin andel: en indgående betaling. I gruppen tæller “Hvem skylder hvem” den som “Har overført til dig”, og I to går lige op.'
  ),
};

export const automation = {
  title: L('Payments that save themselves.', 'Betalinger, der gemmes automatisk i Transaction app.'),
  intro: L(
    'The best transaction is the one you never had to type. Set it up once, and every Apple Wallet payment (and payment notifications from your bank) turns into a transaction with more detail than your bank will ever show.',
    'Den bedste transaktion er den, du aldrig skulle skrive. Sæt det op én gang, så bliver hver Apple Wallet-betaling (og betalingsnotifikationer fra din bank) til en transaktion med flere detaljer, end din bank nogensinde viser.'
  ),
  getTitle: L('What you get that your bank leaves out', 'Det, du får, som banken udelader'),
  get: [
    { name: L('The time', 'Tidspunktet'), text: L('To the minute, not the day it was booked.', 'På minuttet, ikke den dag, den blev bogført.') },
    { name: L('The place', 'Stedet'), text: L('Where you stood when you paid, with the address.', 'Hvor du stod, da du betalte, med adressen.') },
    { name: L('The card and the account', 'Kortet og kontoen'), text: L('Which card you tapped, filed under the right account.', 'Hvilket kort du brugte, sorteret under den rigtige konto.') },
    { name: L('The merchant', 'Butikken'), text: L('As the title and the merchant, ready for your own note.', 'Som titel og butik, klar til din egen note.') },
  ],
  walletTitle: L('Apple Wallet, through Shortcuts', 'Apple Wallet, via Genveje'),
  wallet: L(
    'A Shortcuts automation runs on every Apple Pay tap and hands the payment to the app. In the app’s Settings, you choose one of three modes. Each one does more for you than the one before.',
    'En Genveje-automatisering kører ved hver Apple Pay-betaling og giver betalingen videre til appen. I appens indstillinger vælger du en af tre tilstande. Hver af dem gør mere for dig end den forrige.'
  ),
  modesNeed: L('What it takes', 'Det kræver'),
  modesNeeds: [L('Phone unlocked', 'Telefonen låst op'), L('App open in the background', 'Appen åben i baggrunden'), L('You tap Add', 'Du trykker Tilføj')],
  modes: [
    { level: L('Semi-automatic', 'Halvautomatisk'), name: L('Fill the form only (app opens)', 'Udfyld kun formularen (appen åbner)'), text: L('The payment is filled into the form, and you check it and tap Add. The app does not open by itself: keep it open in the background, among the apps you see when you swipe up.', 'Betalingen fyldes ind i formularen, og du tjekker den og trykker Tilføj. Appen åbner ikke af sig selv: Hold den åben i baggrunden, blandt de apps, du ser, når du stryger op.') },
    { level: L('Almost automatic', 'Næsten automatisk'), name: L('Auto-save (app opens)', 'Gem automatisk (appen åbner)'), text: L('The payment is saved at once, and a green banner shows “4.80 USD · Café Lua”. Here too, the app does not open by itself: keep it open in the background.', 'Betalingen gemmes med det samme, og et grønt banner viser “4.80 USD · Café Lua”. Heller ikke her åbner appen af sig selv: Hold den åben i baggrunden.') },
    { level: L('Fully automatic', 'Helt automatisk'), name: L('Auto-save in background', 'Gem automatisk i baggrunden'), text: L('Saved on the phone, even when it is locked and when you pay with Apple Watch. Open the app later, and the green banner shows what came in.', 'Gemmes på telefonen, også når den er låst, og når du betaler med Apple Watch. Åbn appen senere, så viser det grønne banner, hvad der er kommet ind.') },
  ],
  modesMore: L('Learn more and set it up below', 'Læs mere, og sæt det op herunder'),
  stepsTitle: L('Set it up on <svg class="apple-logo" viewBox="0 0 24 24" width="0.82em" height="0.82em" fill="currentColor" role="img" aria-label="iPhone" style="vertical-align:-0.04em"><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/></svg>', 'Sæt det op på <svg class="apple-logo" viewBox="0 0 24 24" width="0.82em" height="0.82em" fill="currentColor" role="img" aria-label="iPhone" style="vertical-align:-0.04em"><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/></svg>'),
  steps: [
    L('Open the Shortcuts app → Automation → + and pick the Wallet trigger.', 'Åbn Genveje-appen → Automatisering → + og vælg Wallet som udløser.'),
    L('Select your cards, keep every category, and choose “Run Immediately”.', 'Vælg dine kort, behold alle kategorier, og vælg “Start med det samme”.'),
    L('Create a new, empty shortcut and add “Get Current Location”, then the app’s “Add Transaction”.', 'Opret en ny, tom genvej, og tilføj “Hent aktuel lokalitet” og derefter appens “Add Transaction”.'),
    L('Give it Amount, Merchant and Card from the Shortcut Input, and Latitude and Longitude from the location. Done.', 'Giv den Beløb, Butik og Kort fra genvejens input, og Breddegrad og Længdegrad fra lokaliteten. Færdig.'),
    L('In the app, set Settings → Auto-add from Shortcuts to “Auto-save in background”.', 'Sæt Indstillinger → Tilføj automatisk fra Genveje til “Gem automatisk i baggrunden” i appen.'),
    L('Pay with a small, real payment to test it. Wallet automations cannot be run by hand.', 'Test med en lille, rigtig betaling. Wallet-automatiseringer kan ikke køres manuelt.'),
  ],
  perCard: L(
    'These steps set up the background mode. The steps for the other two are in the app, under Settings → Apple Pay Shortcut. One automation per card puts each card’s payments on the right account.',
    'Disse trin sætter baggrundstilstanden op. Trinene til de to andre står i appen under Indstillinger → Apple Pay-genvej. Én automatisering pr. kort lægger hvert korts betalinger på den rigtige konto.'
  ),
  guideLink: L('See every step, with screenshots', 'Se alle trin med skærmbilleder'),
  notifTitle: L('Payment notifications', 'Betalingsnotifikationer'),
  notifIphone: L(
    'On iPhone, a transaction can also be created from your bank app’s notifications, once you have set up an automation in the Shortcuts app. The steps are in the app’s Settings.',
    'På iPhone kan en transaktion også oprettes fra din bankapps notifikationer, når du har sat en automatisering op i Genveje-appen. Trinene står i appens indstillinger.'
  ),
  notifAndroid: L(
    'Your bank and wallet apps already tell you about every payment. On Android, give Transaction notification access once, and choose in Settings what happens with each payment it catches: wait for the import button, fill in the form, or save it straight away. Pay with your card or Google Pay, open the app, and the transaction is there. The app does not even need to be open when you pay.',
    'Din bank- og wallet-app fortæller dig allerede om hver betaling. På Android giver du Transaction notifikationsadgang én gang og vælger i indstillingerne, hvad der sker med hver betaling, den fanger: vent på import-knappen, udfyld formularen, eller gem den med det samme. Betal med dit kort eller Google Pay, åbn appen, så er transaktionen der. Appen behøver ikke engang at være åben, når du betaler.'
  ),
  safetyTitle: L('Built not to lose a payment', 'Bygget til ikke at miste en betaling'),
  safety: [
    L('A transaction made by an automation gets an extra text box, “Imported details”. It holds everything the automation sent that has no field of its own, word for word, so you can always see exactly what came in. It stays apart from your own notes.', 'En transaktion, som en automatisering har lavet, får et ekstra tekstfelt, “Importerede oplysninger”. Det rummer alt, hvad automatiseringen sendte, som ikke har sit eget felt, ord for ord, så du altid kan se præcis, hvad der kom ind. Det holdes adskilt fra dine egne noter.'),
    L('Two automations caught the same payment? The app marks it “Possibly the same payment twice”.', 'Har to automatiseringer fanget den samme betaling? Appen markerer den som “Måske den samme betaling to gange”.'),
    L('A “Just added” list shows what came in since you last looked.', 'En liste over “Lige tilføjet” viser, hvad der er kommet ind, siden du sidst kiggede.'),
    L('Notifications are read on the phone. Only the payments are saved.', 'Notifikationer læses på telefonen. Kun betalingerne gemmes.'),
  ],
  otherTitle: L('No automation? Still quick.', 'Ingen automatisering? Stadig hurtigt.'),
  other: [
    L('Import from a Wallet screenshot, or pick one from your library (iPhone).', 'Importér fra et Wallet-screenshot, eller vælg et i dit bibliotek (iPhone).'),
    L('Share a MobilePay receipt to the app (iPhone).', 'Del en MobilePay-kvittering til appen (iPhone).'),
    L('Scan a receipt from your latest photo.', 'Skan en kvittering fra dit seneste billede.'),
  ],
};

export const travelPage = {
  title: L('Travelling together, keeping it loose.', 'På tur sammen, og hold det løst.'),
  intro: L(
    'Four friends, two days in Lissabon. Nobody wants to split every receipt. Here is how the trip looks in Transaction.',
    'Fire venner, to dage i Lissabon. Ingen gider dele hver eneste kvittering. Sådan ser turen ud i Transaction.'
  ),
  private: L(
    'It can also be your own private accounting. Nobody else has to see what you fill in, or even have the app. It is just for you: a quiet reminder of when you are behind, so you know the next dinner is on you.',
    'Det kan også være dit helt eget, private regnskab. Ingen andre behøver at se, hvad du udfylder, eller overhovedet have appen. Det er kun til dig: en stille påmindelse om, hvornår du er bagud, så du ved, at næste middag er på dig.'
  ),
  steps: [
    {
      when: L('Before you go', 'Før I tager af sted'),
      text: L(
        'Create the group “Lissabon” and give it euro as its currency. Set your default currency to EUR and your default group to the trip, and save Maria, Jonas and Sofie as payers.',
        'Opret gruppen “Lissabon”, og giv den euro som valuta. Sæt din standardvaluta til EUR og din standardgruppe til turen, og gem Maria, Jonas og Sofie som betalere.'
      ),
    },
    {
      when: L('Thursday 16:05: you take the tram', 'Torsdag kl. 16.05: du tager sporvognen'),
      text: L('You pay 3 euros in cash for Tram 28.', 'Du betaler 3 euro kontant for sporvogn 28.'),
    },
    {
      when: L('Thursday 20:47: you pay for dinner', 'Torsdag kl. 20.47: du giver middag'),
      text: L(
        'You buy dinner for four at Taberna Rosa: 96 euros with your Travel Card. The Wallet automation saves it with the place and the time. Turn on “Paid for others” and tap “Split evenly”: Maria, Jonas and Sofie, 24 each.',
        'Du giver middag for fire på Taberna Rosa: 96 euro med dit Travel Card. Wallet-automatiseringen gemmer det med sted og tidspunkt. Slå “Betalt for andre” til, og tryk “Fordel ligeligt”: Maria, Jonas og Sofie, 24 hver.'
      ),
    },
    {
      when: L('Friday 09:31: Sofie pays you back', 'Fredag kl. 9.31: Sofie betaler tilbage'),
      text: L('Sofie pays you back 24 euros in cash: an incoming payment. You two are all square.', 'Sofie betaler dig 24 euro tilbage i kontanter: en indgående betaling. I to går lige op.'),
    },
    {
      when: L('Friday 13:10: Jonas pays', 'Fredag kl. 13.10: Jonas betaler'),
      text: L('Lunch at Tasca Azul is on Jonas: about 40 euros, your share about 10.', 'Frokosten på Tasca Azul er på Jonas: cirka 40 euro, din andel cirka 10.'),
    },
    {
      when: L('Friday 21:15: Maria pays', 'Fredag kl. 21.15: Maria betaler'),
      text: L(
        'Maria buys dinner at Cervejaria Azul. Add a shared expense: payer Maria, about 120 euros, not exact, your share about 30.',
        'Maria giver middag på Cervejaria Azul. Tilføj en fælles udgift: betaler Maria, cirka 120 euro, ikke præcist, din andel cirka 30.'
      ),
    },
    {
      when: L('On the way home', 'På vej hjem'),
      text: L(
        'Open the group. Jonas owes you 14, you owe Maria 6, and Sofie is all square. The next dinner is on Jonas, and nobody had to send a spreadsheet.',
        'Åbn gruppen. Jonas skylder dig 14, du skylder Maria 6, og Sofie går lige op. Næste middag er på Jonas, og ingen skulle sende et regneark.'
      ),
    },
  ],
  groupTitle: L('What the group does for you', 'Det, gruppen gør for dig'),
  group: [
    L('One total for the trip, in the group’s own currency, even for the parts paid in dollars.', 'Én total for turen, i gruppens egen valuta, også for de dele, der er betalt i dollar.'),
    L('Account splitting: spending on a joint account counts as half, unless you set your share.', 'Kontodeling: forbrug på en fælleskonto tæller som det halve, medmindre du angiver din andel.'),
    L('Statistics: first and latest payment, days, average per day, and a chart per tag per day with the lowest and highest day.', 'Statistik: første og seneste betaling, antal dage, gennemsnit pr. dag og et diagram pr. tag pr. dag med den laveste og højeste dag.'),
    L('Who owes whom, from the names you added: what you paid for them, what they paid for you, and what they transferred to you.', 'Hvem skylder hvem, ud fra de navne, du har tilføjet: hvad du har lagt ud for dem, hvad de har lagt ud for dig, og hvad de har overført til dig.'),
    L('Archive it when you are home. It stays readable, but out of the way.', 'Arkivér den, når I er hjemme. Den kan stadig læses, men er af vejen.'),
  ],
  spaceTitle: L('Want the others to see it?', 'Skal de andre kunne se det?'),
  space: L(
    'Create a shared space for the trip and link your group. Everything you add to it is posted there by itself, with the fields you choose; the place is on unless you turn it off. The group itself stays private. Totals show in one currency for everyone, and anyone can comment.',
    'Opret et delt rum til turen, og forbind din gruppe. Alt, du tilføjer til den, slås op der af sig selv, med de felter, du vælger; stedet er med, medmindre du slår det fra. Selve gruppen forbliver privat. Totalerne vises i én valuta for alle, og alle kan kommentere.'
  ),
  honestTitle: L('When to use something else', 'Hvornår du skal bruge noget andet'),
  honest: L(
    'If your group wants every share exact to the cent and a clean settle-up at the end, use MobilePay groups or a similar app. Transaction is for groups who take turns and keep it roughly even.',
    'Hvis gruppen vil have hver andel præcis på øren og en ren afregning til sidst, så brug MobilePay-grupper eller en lignende app. Transaction er til grupper, der skiftes og holder det cirka lige.'
  ),
};

const F = (en, da, moreEn, moreDa, link) => ({ en, da, more: L(moreEn, moreDa), link });

export const features = {
  title: L('Everything it does', 'Alt, hvad den kan'),
  intro: L('Every feature in the app, sorted by what you are trying to do.', 'Alle funktioner i appen, sorteret efter hvad du vil.'),
  links: {
    automation: L('Read more about automatic payments', 'Læs mere om automatiske betalinger'),
    'shortcut-guide': L('See the setup guide, step by step', 'Se opsætningsguiden, trin for trin'),
    transactions: L('Read more about transactions', 'Læs mere om transaktioner'),
    'shared-expenses': L('Read more about shared expenses', 'Læs mere om fælles udgifter'),
    travel: L('Read more about travelling together', 'Læs mere om at være på tur sammen'),
    currencies: L('Read more about currencies', 'Læs mere om valutaer'),
    languages: L('Read more about languages', 'Læs mere om sprog'),
    templates: L('Read more about templates', 'Læs mere om skabeloner'),
    prefilled: L('Read more about prefilled values', 'Læs mere om forudfyldte værdier'),
    offline: L('Read more about working offline', 'Læs mere om at bruge appen offline'),
    export: L('Read more about export', 'Læs mere om eksport'),
    watch: L('Read more about the watch app', 'Læs mere om ur-appen'),
  },
  groups: [
    {
      name: L('Payments without typing', 'Betalinger uden at skrive'),
      items: [
        F(
          'Apple Wallet payments become transactions through a Shortcuts automation: fill the form, save with the app open, or save in the background.',
          'Apple Wallet-betalinger bliver til transaktioner via en Genveje-automatisering: udfyld formularen, gem med appen åben, eller gem i baggrunden.',
          'Set up one automation in Apple’s Shortcuts app, and every time you tap to pay, the amount, the shop and the card go straight to Transaction. You choose what happens next: the form is filled in for you to check, the payment is saved at once, or it is saved quietly in the background. The first two need the app already open in the background, since it does not open by itself. A coffee at Café Lua is in the app before the cup is on the table.',
          'Sæt én automatisering op i Apples Genveje-app, så går beløb, butik og kort direkte til Transaction, hver gang du betaler med et tryk. Du vælger selv, hvad der sker bagefter: formularen udfyldes, så du kan tjekke den, betalingen gemmes med det samme, eller den gemmes stille i baggrunden. De to første kræver, at appen allerede er åben i baggrunden, for den åbner ikke af sig selv. En kaffe på Café Lua er i appen, før koppen står på bordet.',
          'automation'
        ),
        F(
          'The background mode works with the phone locked and for Apple Watch payments, and records where you paid.',
          'Baggrundstilstanden virker med låst telefon og ved Apple Watch-betalinger, og registrerer, hvor du betalte.',
          'In the background mode nothing opens on screen, so it works with the phone locked in your pocket, and when you paid with your watch. Add “Get Current Location” to the shortcut, and the place is saved too. The payments wait safely on the phone and become transactions the next time you open the app, however many there are.',
          'I baggrundstilstanden åbner intet på skærmen, så det virker med telefonen låst i lommen, og når du betalte med uret. Tilføj “Hent aktuel lokalitet” i genvejen, så gemmes stedet også. Betalingerne venter sikkert på telefonen og bliver til transaktioner, næste gang du åbner appen, uanset hvor mange der er.',
          'automation'
        ),
        F(
          'One automation per card puts each card’s payments on the right account.',
          'Én automatisering pr. kort lægger hvert korts betalinger på den rigtige konto.',
          'Give each card its own automation with the name of an account. Pay with the work card, and the payment lands on Work; pay with the travel card, and it lands on Travel. Upper and lower case do not matter, and an unknown name never loses a payment: it goes to your default account, with the name kept in the imported details.',
          'Giv hvert kort sin egen automatisering med navnet på en konto. Betal med firmakortet, så lander betalingen på Arbejdet; betal med rejsekortet, så lander den på Rejsekonto. Store og små bogstaver er lige meget, og et ukendt navn mister aldrig en betaling: den går til din standardkonto, og navnet gemmes i de importerede oplysninger.',
          'shortcut-guide'
        ),
        F(
          'Payment notifications on iPhone: one bank app read reliably, plus two general readers for any other app.',
          'Betalingsnotifikationer på iPhone: én bankapp læst sikkert plus to generelle læsere til alle andre apps.',
          'Many banks send a notification for every card payment. An automation in the Shortcuts app hands each one to Transaction, which picks out the amount, the currency and the shop. One bank app is read reliably, including the rate the bank used abroad. For every other app, two general readers do their best, one for English and one for all languages. A notification that is not a payment is simply skipped, and the steps are in the app’s Settings.',
          'Mange banker sender en notifikation for hver kortbetaling. En automatisering i Genveje-appen giver hver af dem videre til Transaction, som finder beløbet, valutaen og butikken. Én bankapp læses sikkert, også med den kurs, banken brugte i udlandet. Til alle andre apps gør to generelle læsere deres bedste, én til engelsk og én til alle sprog. En notifikation, der ikke er en betaling, springes bare over, og trinene står i appens indstillinger.',
          'shortcut-guide'
        ),
        F(
          'Payment notifications on Android, with three modes: import button only, fill the form, or fill and save.',
          'Betalingsnotifikationer på Android med tre tilstande: kun import-knap, udfyld formularen eller udfyld og gem.',
          'Give Transaction notification access once, and payment notifications from your bank and wallet apps are caught in the background, even with the app closed. Choose what happens with them: wait for the import button, fill in the form, or save straight away. Only clear payment notifications are used automatically; anything uncertain waits for you. Nothing is linked to your bank.',
          'Giv Transaction notifikationsadgang én gang, så fanges betalingsnotifikationer fra dine bank- og wallet-apps i baggrunden, også når appen er lukket. Vælg, hvad der sker med dem: vent på import-knappen, udfyld formularen, eller gem med det samme. Kun tydelige betalingsnotifikationer bruges automatisk; alt usikkert venter på dig. Intet bliver koblet til din bank.',
          'automation'
        ),
        F(
          'Import from a Wallet screenshot, or pick the screenshot from your library (iPhone).',
          'Importér fra et Wallet-screenshot, eller vælg screenshottet i dit bibliotek (iPhone).',
          'Paid online, where no tap fires the automation? Take a screenshot of the payment in Wallet and tap Import. The amount, currency, date, shop and Apple Pay are read on the phone and filled in, and the screenshot is attached as proof. Not your newest photo? Pick it from the library instead. A screenshot of a payment notification works too.',
          'Betalt online, hvor intet tryk starter automatiseringen? Tag et screenshot af betalingen i Wallet, og tryk Import. Beløb, valuta, dato, butik og Apple Pay læses på telefonen og udfyldes, og screenshottet vedhæftes som dokumentation. Er det ikke dit nyeste billede? Så vælg det i biblioteket i stedet. Et screenshot af en betalingsnotifikation virker også.',
          'transactions'
        ),
        F(
          'Share a receipt from a supported payment app to Transaction from the share sheet: money you sent becomes a transaction, money you received an incoming payment, with the receipt attached (iPhone).',
          'Del en kvittering fra MobilePay til Transaction fra delingsarket: penge, du har sendt, bliver til en transaktion, og penge, du har modtaget, til en indgående betaling, med kvitteringen vedhæftet (iPhone).',
          'Open a receipt in the payment app, tap share and pick Transaction. The amount, the date, the other person and the receipt image are filled in for you, and fees and reference numbers go into the imported details instead of your notes. It follows the same save setting as the Apple Pay automation, so it can fill the form or save at once.',
          'Åbn en kvittering i MobilePay, tryk del, og vælg Transaction. Beløb, dato, den anden person og kvitteringsbilledet udfyldes for dig, og gebyr og referencenumre lægges i de importerede oplysninger i stedet for i dine noter. Det følger den samme gem-indstilling som Apple Pay-automatiseringen, så det kan udfylde formularen eller gemme med det samme.',
          'transactions'
        ),
        F(
          'A green banner with Edit after every automatic save.',
          'Et grønt banner med et tryk til at rette efter hver automatisk gemning.',
          'Whenever a payment is saved without the form, by an automation, a share, a notification or a template, a green banner shows what was saved, like “4.80 USD · Café Lua”. Tap Edit to add a photo or fix the category while you still remember. When several come in at once, the banner counts them, and one tap lists just those.',
          'Hver gang en betaling gemmes uden formularen, af en automatisering, en deling, en notifikation eller en skabelon, viser et grønt banner, hvad der blev gemt, fx “4,80 USD · Café Lua”. Tryk på det for at tilføje et billede eller rette kategorien, mens du stadig kan huske det. Kommer flere ind på én gang, tæller banneret dem, og ét tryk viser lige præcis dem.',
          'automation'
        ),
        F(
          'Imported details: an extra text box with everything an automation sent, which you can read but not change, kept apart from your notes.',
          'Importerede oplysninger: et ekstra tekstfelt med alt, hvad en automatisering sendte, som du kan læse, men ikke ændre, holdt adskilt fra dine noter.',
          'Anything an automation sends that has no field of its own lands in an extra text box under the notes, word for word: the card, the account name, a reference number. You can read it and copy it, but not change it, so it always shows exactly what came in. It stays apart from your own notes, and search finds it too.',
          'Alt, hvad en automatisering sender, som ikke har sit eget felt, lander i et ekstra tekstfelt under noterne, ord for ord: kortet, kontonavnet, et referencenummer. Du kan læse det og kopiere det, men ikke ændre det, så det altid viser præcis, hvad der kom ind. Det holdes adskilt fra dine egne noter, og søgningen finder det også.',
          'automation'
        ),
        F(
          'A warning when two automations may have caught the same payment, and a “Just added” list.',
          'En advarsel, når to automatiseringer måske har fanget den samme betaling, og en liste over “Lige tilføjet”.',
          'If two automations catch the same payment, say the Apple Pay automation and a bank notification, the app marks the pair as possibly the same payment twice. Nothing is deleted or merged; you decide which one to keep. The “Just added” list shows everything that came in since you last looked.',
          'Fanger to automatiseringer den samme betaling, fx Apple Pay-automatiseringen og en banknotifikation, markerer appen parret som måske den samme betaling to gange. Intet slettes eller lægges sammen; du bestemmer, hvilken du beholder. Listen over “Lige tilføjet” viser alt, hvad der er kommet ind, siden du sidst kiggede.',
          'automation'
        ),
        F(
          'In the background mode, refunds and unreadable amounts are never saved by mistake.',
          'I baggrundstilstanden gemmes refusioner og ulæselige beløb aldrig ved en fejl.',
          'If the background mode is handed an amount the app cannot read, it says so instead of saving a wrong number, and the shortcut shows that it failed. A refund or an amount of zero is put aside for you to look at, rather than saved as a payment.',
          'Får baggrundstilstanden et beløb, som appen ikke kan læse, siger den det i stedet for at gemme et forkert tal, og genvejen viser, at den fejlede. En refusion eller et beløb på nul lægges til side, så du kan se på det, i stedet for at blive gemt som en betaling.'
        ),
        F(
          'Step-by-step setup guides in the app, for the Apple Pay automation, bank notifications and Android.',
          'Trin-for-trin-vejledninger i appen til Apple Pay-automatiseringen, banknotifikationer og Android.',
          'Every automation comes with a complete guide in the app: each step with the names your phone uses, advice on location permission, one automation per card, and what to do if a payment does not show up. On Android, a button opens the notification access screen for you.',
          'Hver automatisering har en komplet vejledning i appen: hvert trin med de navne, din telefon bruger, råd om adgang til placering, én automatisering pr. kort, og hvad du gør, hvis en betaling ikke dukker op. På Android åbner en knap skærmen for notifikationsadgang for dig.',
          'shortcut-guide'
        ),
        F(
          'Shortcut diagnostics that show exactly where a test payment stopped.',
          'Genvejs-diagnostik, der viser præcis, hvor en testbetaling stoppede.',
          'Wallet automations cannot be run by hand, so the first real payment is the test. Afterwards, the diagnostics page under Settings → Apple Pay Shortcut shows a timeline for each captured payment, how many are waiting or being processed, and anything put aside, so you can see exactly where it stopped.',
          'Wallet-automatiseringer kan ikke køres manuelt, så den første rigtige betaling er testen. Bagefter viser diagnosesiden under Indstillinger → Apple Pay-genvej en tidslinje for hver fanget betaling, hvor mange der venter eller behandles, og hvad der er lagt til side, så du kan se præcis, hvor det stoppede.'
        ),
      ],
    },
    {
      name: L('Payments in a few taps', 'Betalinger med få tryk'),
      items: [
        F(
          'Opens straight on the create screen.',
          'Åbner direkte på opret-skærmen.',
          'There is no home screen to get past. Open the app, and the form for a new transaction is ready, with the date, the time and your default account filled in, and your location too if you like. Type the amount, tap Add, and you are done.',
          'Der er ingen forside at komme forbi. Åbn appen, så står formularen til en ny transaktion klar, med dato, tidspunkt og din standardkonto udfyldt, og din placering også, hvis du vil. Skriv beløbet, tryk Tilføj, og du er færdig.',
          'transactions'
        ),
        F(
          'Only the amount is required.',
          'Kun beløbet er påkrævet.',
          'Every other field is optional. Save a bare amount now, and add the title, the photo or the category later, when you have a minute. Nothing nags you about the rest.',
          'Alle andre felter er valgfrie. Gem et rent beløb nu, og tilføj titel, billede eller kategori senere, når du har et øjeblik. Intet maser på for at få resten.'
        ),
        F(
          'Saved in about a second, with or without a signal.',
          'Gemt på omkring et sekund, med eller uden signal.',
          'Tap Add, and the payment is saved on the phone first. The app gives the server one quick try, and if the connection is slow, it tells you the payment is safe on the phone and finishes in the background, without ever making a duplicate.',
          'Tryk Tilføj, så gemmes betalingen først på telefonen. Appen giver serveren ét hurtigt forsøg, og er forbindelsen langsom, fortæller den, at betalingen er sikker på telefonen, og gør resten færdigt i baggrunden, uden nogensinde at lave en dublet.',
          'offline'
        ),
        F(
          'Templates: coloured one-tap buttons with a fixed time of day or place, receipt items, and “Create immediately”. Long-press to edit.',
          'Skabeloner: farvede knapper med ét tryk, med fast tidspunkt eller sted, kvitteringslinjer og “Opret med det samme”. Hold fingeren på en for at redigere.',
          'Make a coloured square for the payments you repeat: the morning coffee, the work lunch, the train ticket. A square can fill in most fields, with a fixed time of day or a fixed place if you like. Choose whether a tap fills in the form for you to check, or creates the payment at once. The squares are only examples of what you can make; how many and what they hold is up to you.',
          'Lav en farvet firkant til de betalinger, du gentager: morgenkaffen, frokosten på arbejdet, togbilletten. En firkant kan udfylde de fleste felter, med et fast tidspunkt eller et fast sted, hvis du vil. Vælg, om et tryk udfylder formularen, så du kan tjekke den, eller opretter betalingen med det samme. Hvor mange firkanter du laver, og hvad de indeholder, bestemmer du selv.',
          'templates'
        ),
        F(
          'A template asks before it replaces what you typed.',
          'En skabelon spørger, før den erstatter det, du har skrevet.',
          'Started typing and then tapped a square? The app asks first, so nothing you typed disappears by accident. The squares also work offline.',
          'Begyndte du at skrive og trykkede så på en firkant? Appen spørger først, så intet, du har skrevet, forsvinder ved et uheld. Firkanterne virker også offline.',
          'templates'
        ),
        F(
          'Prefilled titles, merchants and payers, in your own order, with a star for the one that is filled in by default.',
          'Forudfyldte titler, butikker og betalere i din egen rækkefølge, med en stjerne på den, der udfyldes som standard.',
          'Keep a list of the titles, shops and people you use most, in your own order. They sit right under the field, so “Coffee” or “Corner Deli” is one tap away. Star one, and it is filled in by itself on every new payment until you change it.',
          'Hav en liste over de titler, butikker og personer, du bruger mest, i din egen rækkefølge. De ligger lige under feltet, så “Coffee” eller “Corner Deli” er ét tryk væk. Stjernemarkér én, så udfyldes den af sig selv på hver ny betaling, indtil du ændrer den.',
          'prefilled'
        ),
        F(
          'The shop’s name fills in an empty title.',
          'Butikkens navn udfylder en tom titel.',
          'Type or pick the shop, and an empty title follows along, so you never write the same thing twice. Imported payments do the same: the shop goes into the shop field and names the payment.',
          'Skriv eller vælg butikken, så følger en tom titel med, og du skriver aldrig det samme to gange. Importerede betalinger gør det samme: butikken lander i butiksfeltet og giver betalingen navn.'
        ),
        F(
          'Default values for account, payment method, groups and currency.',
          'Standardværdier for konto, betalingsmetode, grupper og valuta.',
          'Set the account, payment method, groups and currency every new payment starts with. On a trip, switch the default currency to EUR and the default group to the trip, and every coffee lands in the right place without a single extra tap.',
          'Vælg den konto, betalingsmetode, de grupper og den valuta, hver ny betaling starter med. På en rejse skifter du standardvalutaen til EUR og standardgruppen til turen, så lander hver kaffe det rigtige sted uden et eneste ekstra tryk.',
          'prefilled'
        ),
        F(
          'Location set automatically when you open the create screen.',
          'Placering sat automatisk, når du åbner opret-skærmen.',
          'Turn on Auto-set Location, and the place is filled in as a street address the moment the create screen opens. It is off until you turn it on, and you can always change or clear the place.',
          'Slå Auto-sæt Placering til, så udfyldes stedet som en adresse, i det øjeblik opret-skærmen åbner. Det er slået fra, indtil du slår det til, og du kan altid ændre eller rydde stedet.',
          'prefilled'
        ),
        F(
          'Today or yesterday in one tap; the time on the number pad.',
          'I dag eller i går med ét tryk; tidspunktet på taltastaturet.',
          'The date and time are set to now. Forgot yesterday’s dinner? Tap Yesterday, type the time on the number pad, 935 for 09:35, and it lands in the right place in your history.',
          'Dato og tid er sat til nu. Glemte du gårsdagens middag? Tryk på I går, skriv tidspunktet på taltastaturet, 935 for 09.35, så lander den det rigtige sted i din historik.',
          'transactions'
        ),
        F(
          'Amounts are formatted as you type, with a comma or a dot.',
          'Beløb formateres, mens du skriver, med komma eller punktum.',
          'Thousands separators appear while you type, the way your language writes them, and both the comma and the dot work as the decimal key. The app knows how many decimals each currency has, so yen get none.',
          'Tusindtalsseparatorer dukker op, mens du skriver, sådan som dit sprog skriver dem, og både komma og punktum virker som decimaltast. Appen ved, hvor mange decimaler hver valuta har, så yen får ingen.',
          'languages'
        ),
        F(
          'Tip calculator: fill in two of three fields, or use a percent.',
          'Drikkepengeberegner: udfyld to af tre felter, eller brug procent.',
          'Fill in two of total, tip and amount without tip, and the third is worked out for you. Or type the tip as a percent: 15 % of a 40 euro dinner is 6 euros, without reaching for another app.',
          'Udfyld to af total, drikkepenge og beløb uden drikkepenge, så regnes det tredje ud for dig. Eller skriv drikkepengene som procent: 15 % af en middag til 40 euro er 6 euro, uden at du skal finde en anden app frem.',
          'transactions'
        ),
        F(
          'Bulk edit: change many payments at once; only the fields you touch change.',
          'Masseredigering: ændre mange betalinger på én gang; kun de felter, du rører, ændres.',
          'Select several payments in a list and change them in one go: put a whole week into the trip group, or move a batch to another account. Every field starts as unchanged, so only what you touch changes: add or remove tags, or give every payment the same tip or a percent. A summary shows what was saved, and it works offline too, except adding payments to a group.',
          'Vælg flere betalinger i en liste, og ændre dem på én gang: læg en hel uge i turens gruppe, eller flyt en stak til en anden konto. Alle felter starter som uændrede, så kun det, du rører, ændres: tilføj eller fjern tags, eller giv hver betaling de samme drikkepenge eller en procent. En oversigt viser, hvad der blev gemt, og det virker også offline, undtagen at lægge betalinger i en gruppe.'
        ),
        F(
          'Every payment can be edited and deleted, with a warning before you lose changes.',
          'Hver betaling kan redigeres og slettes, med en advarsel, før du mister ændringer.',
          'Open any payment to see and change every field. Leave with unsaved changes, and the app asks first. Deleting asks too, and group totals update by themselves.',
          'Åbn en hvilken som helst betaling for at se og ændre alle felter. Går du med ændringer, der ikke er gemt, spørger appen først. Sletning spørger også, og gruppernes totaler opdateres af sig selv.'
        ),
      ],
    },
    {
      name: L('On your watch', 'På dit ur'),
      items: [
        F(
          'A keypad on Apple Watch and Wear OS: type the amount, tap Create.',
          'Et tastatur på Apple Watch og Wear OS: skriv beløbet, tryk “Opret”.',
          'The watch opens on a keypad like the one on your lock screen, with a decimal key when your currency has decimals. Type 6.50, tap the green Create button, and your phone books it with the values every new payment starts with. On Apple Watch, you also feel a tap on your wrist. Made for the amount you would otherwise have forgotten by lunch.',
          'Uret åbner på et tastatur som det på din låseskærm, med en decimaltast, når din valuta har decimaler. Skriv 6,50, tryk på den grønne Opret-knap, og telefonen opretter betalingen med de værdier, hver ny betaling starter med. På Apple Watch mærker du også et tryk på håndleddet. Lavet til det beløb, du ellers havde glemt inden frokost.',
          'watch'
        ),
        F(
          'Transactions, shared expenses or incoming payments, each in its own colour.',
          'Transaktioner, fælles udgifter eller indgående betalinger, hver i sin egen farve.',
          'Pick in the watch’s settings what it creates: blue for a transaction, orange for a shared expense, pink for an incoming payment. The thin frame around the keypad takes the colour, so you always know what you are about to create.',
          'Vælg i urets indstillinger, hvad det opretter: blå til en transaktion, orange til en fælles udgift, pink til en indgående betaling. Den tynde ramme om tastaturet får farven, så du altid ved, hvad du er ved at oprette.',
          'watch'
        ),
        F(
          'Undo puts the amount back on the keypad.',
          'Fortryd lægger beløbet tilbage på tastaturet.',
          'Typed 65 instead of 6.50? Tap undo on the confirmation screen, and the payment is taken back with the amount still typed, one key from fixed.',
          'Skrev du 65 i stedet for 6,50? Tryk fortryd på bekræftelsesskærmen, så tages betalingen tilbage med beløbet stadig skrevet, én tast fra rettet.',
          'watch'
        ),
        F(
          'Your recent payments, with every field, on the watch.',
          'Dine seneste betalinger, med alle felter, på uret.',
          'Recent lists the newest payments from your phone, all three kinds, each with a stripe in its colour, plus what the watch created that the phone has not booked yet. Tap one to see every field, filled in or not.',
          'Seneste viser de nyeste betalinger fra telefonen, alle tre slags, hver med en stribe i sin farve, plus det, uret har oprettet, som telefonen ikke har oprettet endnu. Tryk på en for at se alle felter, udfyldt eller ej.',
          'watch'
        ),
        F(
          'Today’s spend on your watch face.',
          'Dagens forbrug på din urskive.',
          'Put Transaction on your watch face to see what you have spent today in your main currency, the watch’s own new payments included. It starts over at zero at midnight, and a tap opens the keypad.',
          'Sæt Transaction på din urskive for at se, hvad du har brugt i dag i din hovedvaluta, inklusive urets egne nye betalinger. Den starter forfra på nul ved midnat, og et tryk åbner tastaturet.',
          'watch'
        ),
        F(
          'Works with the phone out of reach.',
          'Virker, selv når telefonen er uden for rækkevidde.',
          'The watch keeps each amount until it can reach your phone, and shows “Waiting for phone” until then. The payment is created the next time you open the app on your phone, never twice.',
          'Uret gemmer hvert beløb, indtil det kan nå telefonen, og viser “Venter på telefonen” imens. Betalingen oprettes, næste gang du åbner appen på telefonen, og aldrig to gange.',
          'watch'
        ),
        F(
          'Where you paid, from the watch.',
          'Hvor du betalte, fra uret.',
          'With Auto-set Location turned on in the app, the watch adds its own position to each amount, so the place is saved even with the phone in your bag.',
          'Med Auto-sæt Placering slået til i appen tilføjer uret sin egen position til hvert beløb, så stedet gemmes, selv når telefonen ligger i tasken.',
          'watch'
        ),
        F(
          'In the app’s language.',
          'På appens sprog.',
          'The watch speaks the same language as the app on your phone, and writes amounts and dates the way your language does.',
          'Uret taler det samme sprog som appen på din telefon og skriver beløb og datoer, sådan som dit sprog gør.',
          'watch'
        ),
      ],
    },
    {
      name: L('Every detail', 'Alle detaljer'),
      items: [
        F(
          'Three kinds of payments: transactions, shared expenses and incoming payments.',
          'Tre slags betalinger: transaktioner, fælles udgifter og indgående betalinger.',
          'A transaction is what you paid. A shared expense is what someone else paid that you were part of, like the dinner Maria bought. An incoming payment is money paid to you, like Sofie paying you back. Together they show the whole picture.',
          'En transaktion er det, du betalte. En fælles udgift er det, en anden betalte, som du var en del af, som middagen, Maria gav. En indgående betaling er penge, der er betalt til dig, som da Sofie betalte dig tilbage. Tilsammen viser de hele billedet.',
          'transactions'
        ),
        F(
          'Date and time, account, payment method, title, merchant, category, amount, currency, tip, my share, notes and tags.',
          'Dato og tid, konto, betalingsmetode, titel, butik, kategori, beløb, valuta, drikkepenge, min andel, noter og tags.',
          'Every field sits on one screen, built to fit even a small phone. Fill in two, or fill in twenty; only the amount is required.',
          'Alle felter ligger på én skærm, bygget til at passe selv på en lille telefon. Udfyld to, eller udfyld tyve; kun beløbet er påkrævet.',
          'transactions'
        ),
        F(
          'Location from where you are, from the map, or from a photo.',
          'Placering fra der hvor du er, fra kortet eller fra et billede.',
          'Use where you are, drop a pin anywhere on the map, or, when you edit the payment, use the location stored in an attached photo. The place is saved as an address, and the spot that was first saved is always kept, so you can go back to it.',
          'Brug der, hvor du er, sæt en nål hvor som helst på kortet, eller brug, når du redigerer betalingen, placeringen fra et vedhæftet billede. Stedet gemmes som en adresse, og det sted, der først blev gemt, beholdes altid, så du kan gå tilbage til det.',
          'transactions'
        ),
        F(
          'Paid for others: names and amounts, or split evenly.',
          'Betalt for andre: navne og beløb, eller fordel ligeligt.',
          'Paid the whole dinner for four? Turn on “Paid for others”, add Maria, Jonas and Sofie, and tap “Split evenly”: 24 each. Add up to 50 people, and the group works out who owes whom from the amounts. A name without an amount is only listed.',
          'Gav du hele middagen for fire? Slå “Betalt for andre” til, tilføj Maria, Jonas og Sofie, og tryk “Fordel ligeligt”: 24 hver. Tilføj op til 50 personer, så regner gruppen ud, hvem der skylder hvem, ud fra beløbene. Et navn uden beløb bliver kun listet.',
          'transactions'
        ),
        F(
          'Split payments: one bill paid with any mix of accounts and payment methods, shown together.',
          'Delte betalinger: én regning betalt med en hvilken som helst blanding af konti og betalingsmetoder, vist samlet.',
          'The bill on the card and the tip in cash is just one example. From the bill, tap “Add a part paid another way” and add each part, from another of your accounts, or as a linked shared expense when a friend paid. Give a part as an amount or as a percent of the bill, like a 10 % tip. A part copies the bill’s title, shop, date and place, the parts show up together without changing any totals, and deleting the bill asks whether the parts go too.',
          'Regningen på Dankortet og drikkepengene kontant er bare ét eksempel. Fra regningen trykker du “Tilføj en del betalt på en anden måde” og tilføjer hver del, fra en anden af dine konti eller som en forbundet fælles udgift, når en ven betalte. Angiv en del som et beløb eller som en procent af regningen, fx 10 % i drikkepenge. En del kopierer regningens titel, butik, dato og sted, delene vises samlet uden at ændre nogen totaler, og sletter du regningen, spørger appen, om delene skal med.',
          'transactions'
        ),
        F(
          'Our share: the combined share of you and your partner, or of your whole group.',
          'Vores andel: din og din partners samlede andel, eller hele jeres gruppes.',
          'On a shared expense you can set your own share and, next to it, our share: what you and your partner, or your whole group, owe together. Who owes whom uses both, side by side.',
          'På en fælles udgift kan du angive din egen andel og ved siden af vores andel: det, du og din partner, eller hele jeres gruppe, skylder sammen. Hvem skylder hvem bruger begge, side om side.'
        ),
        F(
          'Shared expenses with approximate amounts, approximate shares, and a finalized flag with notes.',
          'Fælles udgifter med cirka-beløb, cirka-andele og et afsluttet-flag med noter.',
          'Not sure of the exact amount? Mark it as approximate, and the same for your share: about 120 euros, your share about 30. When it is settled, mark it finalized and note how; finalized expenses drop out of who owes whom.',
          'Er du ikke sikker på det præcise beløb? Markér det som cirka, og det samme for din andel: cirka 120 euro, din andel cirka 30. Når det er gjort op, markerer du den som afsluttet og noterer hvordan; afsluttede udgifter tæller ikke med i hvem skylder hvem.',
          'shared-expenses'
        ),
        F(
          'Notes in a full-screen editor.',
          'Noter i en editor i fuld skærm.',
          'Notes open full screen, with a character counter kept above the keyboard, so even a long note is easy to write and read.',
          'Noter åbner i fuld skærm, med en tegntæller holdt over tastaturet, så selv en lang note er nem at skrive og læse.'
        ),
        F(
          'Technical information on every payment, for the curious.',
          'Teknisk information på hver betaling, for de nysgerrige.',
          'Tap the (i) on any payment to see its id and the technical details behind it, handy for the curious and for support.',
          'Tryk på (i) på en hvilken som helst betaling for at se dens id og de tekniske detaljer bag den, praktisk for de nysgerrige og til support.'
        ),
      ],
    },
    {
      name: L('Photos and receipts', 'Billeder og kvitteringer'),
      items: [
        F(
          'Photos from the camera or library, with pinch and zoom.',
          'Billeder fra kamera eller bibliotek, med knib og zoom.',
          'Attach photos to any payment, from the camera or the library: the receipt, the dish, the price tag. Pinch to zoom in on the small print.',
          'Vedhæft billeder til en hvilken som helst betaling, fra kameraet eller biblioteket: kvitteringen, retten, prisskiltet. Knib for at zoome ind på det med småt.'
        ),
        F(
          'Photos taken in the app remember where they were taken.',
          'Billeder taget i appen husker, hvor de blev taget.',
          'A photo you take in the app gets your position written into it, so later, when you edit the payment, the photo can give it its place.',
          'Et billede, du tager i appen, får din position skrevet ind, så billedet senere, når du redigerer betalingen, kan give den sit sted.'
        ),
        F(
          'Photos are uploaded in the background and never lost.',
          'Billeder uploades i baggrunden og går aldrig tabt.',
          'The payment is saved first, and the photos follow. The phone keeps each photo until the server has it, and tries again at the next sync, so a weak connection never costs you a receipt.',
          'Betalingen gemmes først, og billederne følger efter. Telefonen beholder hvert billede, indtil serveren har det, og prøver igen ved næste synkronisering, så en svag forbindelse aldrig koster dig en kvittering.',
          'offline'
        ),
        F(
          'Save the photos you take to your photo library as a backup.',
          'Gem de billeder, du tager, i dit fotobibliotek som backup.',
          'Turn it on, and every photo you take in the app is also saved to your phone’s photo library.',
          'Slå det til, så gemmes hvert billede, du tager i appen, også i telefonens fotobibliotek.'
        ),
        F(
          'Scan a receipt into item lines, read on the phone.',
          'Skan en kvittering til varelinjer, læst på telefonen.',
          'Scan your newest photo, pick a receipt photo from the library, or scan one you already attached. The text is read on the phone itself: it costs nothing and works offline. The photo is attached to the payment and uploaded like any other photo.',
          'Skan dit nyeste billede, vælg et kvitteringsbillede i biblioteket, eller skan et, du allerede har vedhæftet. Teksten læses på selve telefonen: det koster ingenting og virker offline. Billedet vedhæftes betalingen og uploades som ethvert andet billede.',
          'transactions'
        ),
        F(
          'The scan understands discounts, totals, the date and the shop.',
          'Skanningen forstår rabatter, totaler, datoen og butikken.',
          'It pairs each name with its price, handles discounts, cancelled lines and repeated items, and skips footers and opening hours. It also picks up the receipt’s total, its date and time, a tip line, and the shop’s name for the shop field. It works best on Danish and English receipts.',
          'Den parrer hvert navn med sin pris, håndterer rabatter, annullerede linjer og gentagne varer og springer bundtekster og åbningstider over. Den finder også kvitteringens total, dato og tidspunkt, en drikkepengelinje og butikkens navn til butiksfeltet. Den virker bedst på danske og engelske kvitteringer.',
          'transactions'
        ),
        F(
          'Receipt lines with a quantity, a total per line and the price of each.',
          'Kvitteringslinjer med antal, total pr. linje og stykpris.',
          'Each line has a name, a quantity, decimals allowed, and a line total, and the app shows the price of each: three flat whites for 10.80 is 3.60 each. Add or change lines by hand too.',
          'Hver linje har et navn, et antal, gerne med decimaler, og en linjetotal, og appen viser stykprisen: tre flat whites til 10,80 er 3,60 stykket. Du kan også tilføje eller rette linjer i hånden.',
          'transactions'
        ),
        F(
          'A green check when the lines add up to the receipt’s total.',
          'Et grønt flueben, når linjerne går op med kvitteringens total.',
          'The lines are added up as you go and compared with the printed total: green when they match, amber with both sums when they do not, so a missed line is easy to spot.',
          'Linjerne lægges sammen undervejs og sammenlignes med den trykte total: grøn, når de passer, gul med begge summer, når de ikke gør, så en manglende linje er let at få øje på.',
          'transactions'
        ),
        F(
          'Scan again without losing what you typed.',
          'Skan igen uden at miste det, du har skrevet.',
          'Scanning a receipt that already has lines asks whether to add the new ones, without the overlap, or to replace them all. A long receipt can be photographed in two overlapping shots, and the lines are stitched together.',
          'Skanner du en kvittering, der allerede har linjer, spørger appen, om de nye skal tilføjes, uden overlap, eller om de alle skal erstattes. En lang kvittering kan fotograferes i to overlappende billeder, og linjerne sys sammen.'
        ),
        F(
          'The receipt’s total fills in an empty amount.',
          'Kvitteringens total udfylder et tomt beløb.',
          'If the amount is empty, the receipt’s total fills it in. If you typed a different amount, the app asks which one is right and keeps a note of the receipt’s total.',
          'Er beløbet tomt, udfylder kvitteringens total det. Har du skrevet et andet beløb, spørger appen, hvilket der er rigtigt, og gemmer en note om kvitteringens total.'
        ),
        F(
          'On a shared expense, tick the receipt lines that were yours, and they add up.',
          'På en fælles udgift kan du sætte flueben ved de kvitteringslinjer, der var dine, og de lægges sammen.',
          'Maria paid the whole bill? Tick the lines that were yours, and the app adds them up as you go: a quick calculator for your share.',
          'Betalte Maria hele regningen? Sæt flueben ved de linjer, der var dine, så lægger appen dem sammen undervejs: en hurtig lommeregner til din andel.'
        ),
      ],
    },
    {
      name: L('Your own structure', 'Din egen struktur'),
      items: [
        F(
          'Accounts and payment methods in your own words: rename, reorder, archive, add your own.',
          'Konti og betalingsmetoder med dine egne ord: omdøb, sortér, arkivér, tilføj dine egne.',
          'Start with a sensible set, then make it yours: add the festival wristband as an account, rename an account to what you call it, put them in your own order, and archive the ones you no longer use. A rename shows on every old payment too, everywhere in the app and in the export.',
          'Start med et fornuftigt sæt, og gør det så til dit eget: tilføj festivalarmbåndet som en konto, omdøb en konto til det, du kalder den, sæt dem i din egen rækkefølge, og arkivér dem, du ikke bruger mere. Et nyt navn vises også på alle gamle betalinger, overalt i appen og i eksporten.'
        ),
        F(
          'Link an account to a payment method, so picking the account sets it. You can still pick any other payment method.',
          'Forbind en konto med en betalingsmetode, så valget af kontoen sætter den. Du kan stadig vælge en hvilken som helst anden betalingsmetode.',
          'Link each account to the payment method you mostly use with it, and picking the account sets it for you: Main sets Apple Pay. It only saves a tap; the account is not tied to that method.',
          'Forbind hver konto med den betalingsmetode, du oftest bruger med den, så sætter valget af kontoen den for dig: Lønkonto sætter Apple Pay. Det sparer bare et tryk; kontoen er ikke låst til den metode.'
        ),
        F(
          'Cash as its own account and payment method, private or shared.',
          'Kontanter som sin egen konto og betalingsmetode, privat eller fælles.',
          'Cash is an account and a payment method of its own, so the money in your wallet adds up too. Paid a market stall in cash? Pick your cash account, and Cash is set for you. Shared cash, like a pot for the trip, works the same way.',
          'Kontanter er sin egen konto og betalingsmetode, så pengene i pungen også tæller med. Betalt ved en markedsbod med kontanter? Vælg din kontantkonto, så er Kontant sat for dig. Fælles kontanter, som en pulje til turen, fungerer på samme måde.'
        ),
        F(
          'Nothing in use can be deleted by accident.',
          'Intet, der er i brug, kan slettes ved et uheld.',
          'Deleting an account or payment method that payments still use is refused, and the app tells you what uses it. Archive it instead: it leaves the pickers, while every old payment and total stays as it was. Main and Cash can be renamed, but never deleted.',
          'Sletning af en konto eller betalingsmetode, som betalinger stadig bruger, afvises, og appen fortæller dig, hvad der bruger den. Arkivér den i stedet: den forsvinder fra valglisterne, mens alle gamle betalinger og totaler forbliver, som de var. Primær og Kontant kan omdøbes, men aldrig slettes.'
        ),
        F(
          'The built-in names follow your language.',
          'De indbyggede navne følger dit sprog.',
          'Until you rename them, the starting accounts and payment methods are shown in the app’s language, so a Danish user sees “Primær” where an English user sees “Main”. Pick a name of your own, and that is what you see everywhere.',
          'Indtil du omdøber dem, vises de første konti og betalingsmetoder på appens sprog, så en dansk bruger ser “Primær”, hvor en engelsk bruger ser “Main”. Vælger du dit eget navn, er det det, du ser overalt.'
        ),
        F(
          'Tags: your own labels on every kind of payment.',
          'Tags: dine egne mærkater på alle slags betalinger.',
          'Make your own labels, like “Birthday” or “Work trip”, and put them on any payment of any kind. Rename them, give them a description, filter by them, and see a total per tag inside a group. Pick them offline, and create a new one right from the picker. Tags stay private and are never shared.',
          'Lav dine egne mærkater, som “Fødselsdag” eller “Arbejdsrejse”, og sæt dem på en hvilken som helst betaling af enhver slags. Omdøb dem, giv dem en beskrivelse, filtrér på dem, og se en total pr. tag i en gruppe. Vælg dem offline, og opret et nyt direkte fra listen. Tags forbliver private og deles aldrig.'
        ),
        F(
          'Ten categories, from dining to health and wellness.',
          'Ti kategorier, fra måltider til sundhed og velvære.',
          'Dining, Treats & Beverages, Grocery, Experiences, Transport, Accommodation, Shopping, Gifts & Souvenirs, Health & Wellness and Other, each with a short description. Incoming payments have categories too.',
          'Måltider, Søde sager & Drikkevarer, Dagligvarer, Oplevelser, Transport, Overnatning, Shopping, Gaver & Souvenirs, Sundhed & Velvære og Andet, hver med en kort beskrivelse. Indgående betalinger har også kategorier.'
        ),
      ],
    },
    {
      name: L('Groups and trips', 'Grupper og ture'),
      items: [
        F(
          'Groups for trips, projects and households, with totals.',
          'Grupper til ture, projekter og husholdninger, med totaler.',
          'Put any payment in one or more groups, like “Lissabon”. The group adds up the total, the tips and your own share in its own currency, and lists the exchange rates it used. Make as many groups as you like, each with its own name and description.',
          'Læg en hvilken som helst betaling i en eller flere grupper, som “Lissabon”. Gruppen lægger totalen, drikkepengene og din egen andel sammen i sin egen valuta og viser de kurser, den brugte. Lav så mange grupper, du vil, hver med sit eget navn og sin egen beskrivelse.',
          'travel'
        ),
        F(
          'Account splitting in groups, a group currency, recalculation, and archiving.',
          'Kontodeling i grupper, en gruppevaluta, genberegning og arkivering.',
          'Spending on a joint account can count as half, since half of that money is someone else’s: choose which accounts are split. Give the group its own currency, so a trip through Switzerland and Italy adds up in euros, even the coffee paid in francs. Change it, and the totals are worked out again.',
          'Forbrug på en fælleskonto kan tælle som det halve, fordi halvdelen af de penge er en andens: vælg, hvilke konti der deles. Giv gruppen sin egen valuta, så en tur gennem Schweiz og Italien lægges sammen i euro, også kaffen betalt i franc. Skift den, så regnes totalerne ud igen.',
          'travel'
        ),
        F(
          'Statistics: days, average per day, and a chart per tag per day.',
          'Statistik: dage, gennemsnit pr. dag og et diagram pr. tag pr. dag.',
          'The group’s info shows the first and the latest payment, the number of days and the average per day. Statistics draws a chart per tag per day, and marks the cheapest and the dearest day.',
          'Gruppens info viser den første og den seneste betaling, antal dage og gennemsnittet pr. dag. Statistikken tegner et diagram pr. tag pr. dag og markerer den billigste og den dyreste dag.',
          'travel'
        ),
        F(
          'Who owes whom, worked out from what everyone paid.',
          'Hvem skylder hvem, regnet ud fra det, alle har betalt.',
          'From the people you paid for, the shared expenses others paid and what they paid you back, the group shows who owes whom: Jonas owes you 14, you owe Maria 6, and Sofie is all square. Each payment counts at its own exchange rate.',
          'Ud fra de personer, du har betalt for, de fælles udgifter, andre har betalt, og det, de har betalt dig tilbage, viser gruppen, hvem der skylder hvem: Jonas skylder dig 14, du skylder Maria 6, og Sofie går lige op. Hver betaling tæller med sin egen kurs.',
          'travel'
        ),
        F(
          'Tap a person to see every payment behind their balance.',
          'Tryk på en person for at se alle betalinger bag deres saldo.',
          'Each person shows what you paid for them, what they paid for you and what they transferred to you, with the payments behind it. “Who paid what” shows each person’s part of the trip as bars.',
          'Hver person viser, hvad du har lagt ud for dem, hvad de har lagt ud for dig, og hvad de har overført til dig, med betalingerne bag. “Hvem betalte hvad” viser hver persons del af turen som søjler.'
        ),
        F(
          'A group summary with totals per account, per payer and for incoming payments, and one combined total.',
          'En gruppeoversigt med totaler pr. konto, pr. betaler og for indgående betalinger, og én samlet total.',
          'See what you paid per account and per category, what others paid per payer, and what came in, plus one total for all of it.',
          'Se, hvad du har betalt pr. konto og pr. kategori, hvad andre har betalt pr. betaler, og hvad der er kommet ind, plus én total for det hele.'
        ),
        F(
          'Group lists show who you paid for and your share on each row.',
          'Gruppens lister viser på hver række, hvem du betalte for, og din andel.',
          'Inside a group, each row shows the details that matter there: the people you paid for and their amounts, your share and our share, and on an incoming payment whether the money was for you or for both of you.',
          'Inde i en gruppe viser hver række de detaljer, der betyder noget dér: de personer, du betalte for, og deres beløb, din andel og vores andel, og på en indgående betaling, om pengene var til dig eller til jer begge.'
        ),
        F(
          'Names you used before are suggested when you add who you paid for.',
          'Navne, du har brugt før, bliver foreslået, når du tilføjer, hvem du betalte for.',
          'Every name you typed before is offered when you add a person, so “Maria” is one tap away. Upper and lower case and accents are ignored when the group adds up, so “maria” and “Maria” count as the same person, and “Simon og Karen” is the same pair as “Karen & Simon”.',
          'Hvert navn, du har skrevet før, bliver tilbudt, når du tilføjer en person, så “Maria” er ét tryk væk. Store og små bogstaver og accenter ignoreres, når gruppen regner sammen, så “maria” og “Maria” tæller som den samme person, og “Simon og Karen” er det samme par som “Karen & Simon”.'
        ),
        F(
          'Archived groups keep their own list, ready to bring back.',
          'Arkiverede grupper har deres egen liste, klar til at blive hentet frem igen.',
          'When the trip is over, archive the group. It moves to its own list and stops showing up when you add new payments, but stays readable, and you can restore it any time. A group that still holds payments cannot be deleted.',
          'Når turen er slut, arkiverer du gruppen. Den flytter til sin egen liste og dukker ikke længere op, når du tilføjer nye betalinger, men kan stadig læses, og du kan gendanne den når som helst. En gruppe, der stadig har betalinger, kan ikke slettes.',
          'travel'
        ),
      ],
    },
    {
      name: L('Money across borders', 'Penge på tværs af grænser'),
      items: [
        F(
          '149 currencies, each with its own number of decimals.',
          '149 valutaer, hver med sit eget antal decimaler.',
          'Pick any of 149 currencies on any payment. Each one is written the way it should be: yen without decimals, Kuwaiti dinars with three.',
          'Vælg en af 149 valutaer på en hvilken som helst betaling. Hver af dem skrives, som den skal: yen uden decimaler, kuwaitiske dinarer med tre.',
          'currencies'
        ),
        F(
          'Find a currency by its name, its country or its symbol, in your language.',
          'Find en valuta på dens navn, dens land eller dens symbol, på dit sprog.',
          'Search by code, name, country, a unit like “dollar” or a symbol like “€”. It works in your own language too, so typing a country’s name the way you write it finds its currency.',
          'Søg på kode, navn, land, en enhed som “dollar” eller et symbol som “€”. Det virker også på dit eget sprog, så et lands navn, skrevet som du skriver det, finder dets valuta.',
          'currencies'
        ),
        F(
          'A main currency, with conversion at the official rate from the payment date.',
          'En hovedvaluta, med omregning til den officielle kurs fra betalingsdatoen.',
          'Everything is converted to your main currency at the official rate from the day you paid, so a summer trip still counts at summer’s rates in December. The rates are fetched for you and kept, so an old payment never changes. Your main currency is picked from your phone’s region when you sign up, and you can change it.',
          'Alt omregnes til din hovedvaluta med den officielle kurs fra den dag, du betalte, så sommerferien stadig tælles med sommerens kurser i december. Kurserne hentes for dig og gemmes, så en gammel betaling aldrig ændrer sig. Din hovedvaluta vælges ud fra telefonens region, når du opretter dig, og du kan ændre den.',
          'currencies'
        ),
        F(
          'A default currency for trips, separate from your main currency.',
          'En standardvaluta til rejser, adskilt fra din hovedvaluta.',
          'The default currency is just the one new payments start with. On a trip, set it to EUR, while your totals stay in your main currency.',
          'Standardvalutaen er bare den, nye betalinger starter med. På en rejse sætter du den til EUR, mens dine totaler bliver i din hovedvaluta.',
          'prefilled'
        ),
        F(
          'Bank and card fee rules: percent, fixed amount, percent with minimum, or a fixed exchange rate, per currency, payment method, kind of payment and period.',
          'Regler for bank- og kortgebyrer: procent, fast beløb, procent med minimum eller en fast kurs, pr. valuta, betalingsmetode, slags betaling og periode.',
          'Tell the app how your bank charges: 1.75 % on every other currency, a fixed fee per payment, a percent with a minimum, or the fixed rate you got at the airport. Limit a rule to some currencies, payment methods, kinds of payment and dates, and every matching payment is converted with it, old ones included.',
          'Fortæl appen, hvordan din bank tager betaling: 1,75 % på alle andre valutaer, et fast gebyr pr. betaling, en procent med minimum eller den faste kurs, du fik i lufthavnen. Begræns en regel til nogle valutaer, betalingsmetoder, slags betalinger og datoer, så omregnes alle matchende betalinger med den, også de gamle.',
          'currencies'
        ),
        F(
          'A card exchange rate per transaction, for when you want it exact.',
          'En kort-valutakurs pr. transaktion, når du vil have det præcist.',
          'Know the exact rate from your bank statement? Type it on the transaction, and it wins over the official rate and any fee rule.',
          'Kender du den præcise kurs fra kontoudtoget? Skriv den på transaktionen, så vinder den over den officielle kurs og alle gebyrregler.'
        ),
        F(
          'Group and space currencies, so a trip adds up in the currency you spent.',
          'Gruppe- og rumvalutaer, så en tur lægges sammen i den valuta, I brugte.',
          'A group or a shared space can add up in its own currency, so the trip shows in euros for everyone, while your own totals stay in your main currency.',
          'En gruppe eller et delt rum kan lægges sammen i sin egen valuta, så turen vises i euro for alle, mens dine egne totaler bliver i din hovedvaluta.',
          'currencies'
        ),
      ],
    },
    {
      name: L('Together', 'Sammen'),
      items: [
        F(
          'Shared spaces: a chat for two, or a group for a trip or a household.',
          'Delte rum: en chat for to, eller en gruppe til en tur eller en husholdning.',
          'Make a space for two, like a chat with your partner, or a group space for a trip or a household, with totals. Each space has its own name and currency.',
          'Lav et rum for to, som en chat med din partner, eller et grupperum til en tur eller en husholdning, med totaler. Hvert rum har sit eget navn og sin egen valuta.',
          'travel'
        ),
        F(
          'Invite with a Sharing ID; get a new one any time.',
          'Invitér med et delings-id; få et nyt når som helst.',
          'Invite someone with their five-character Sharing ID. Nobody is added without accepting, and you can get a new ID whenever you like.',
          'Invitér nogen med deres delings-id på fem tegn. Ingen bliver tilføjet uden at sige ja, og du kan få et nyt id, når du vil.'
        ),
        F(
          'Choose what to share: amount, currency, date, title, category and account always, plus note, tip, payment method, location, my share or photos if you like.',
          'Vælg, hvad du deler: beløb, valuta, dato, titel, kategori og konto altid, plus note, drikkepenge, betalingsmetode, placering, min andel eller billeder, hvis du vil.',
          'Share a payment as a post, and tick the fields that go with it. Fields you leave out are never stored in the space, so what stays private stays private.',
          'Del en betaling som et opslag, og sæt flueben ved de felter, der skal med. Felter, du lader være, gemmes aldrig i rummet, så det private forbliver privat.',
          'travel'
        ),
        F(
          'Link a group to post everything you add to it automatically.',
          'Forbind en gruppe for automatisk at slå alt op, du tilføjer til den.',
          'Link a group to a space, and every payment you add to the group is posted there by itself. Pause it or unlink it any time; photos are never shared automatically.',
          'Forbind en gruppe med et rum, så bliver hver betaling, du tilføjer til gruppen, slået op dér af sig selv. Sæt det på pause, eller fjern forbindelsen når som helst; billeder deles aldrig automatisk.',
          'travel'
        ),
        F(
          'Comments, totals in one currency, and split by account.',
          'Kommentarer, totaler i én valuta og deling pr. konto.',
          'Everyone in a space can comment on a post. A group space shows a total and a total per member, in the space’s currency, and can split shared accounts.',
          'Alle i et rum kan kommentere et opslag. Et grupperum viser en total og en total pr. medlem, i rummets valuta, og kan dele fælles konti.',
          'travel'
        ),
        F(
          'Change a payment, and the app asks before updating the shared copy.',
          'Ændre en betaling, så spørger appen, før den opdaterer den delte kopi.',
          'Edit the original, and you are asked whether the post in the space should be updated too. Delete it, and the post stays, unless you choose to remove it there as well.',
          'Retter du originalen, bliver du spurgt, om opslaget i rummet også skal opdateres. Sletter du den, bliver opslaget, medmindre du vælger også at fjerne det dér.'
        ),
        F(
          'Members can leave a space any time; the owner manages the members.',
          'Medlemmer kan forlade et rum når som helst; ejeren styrer medlemmerne.',
          'Any member can leave a space, and their posts stay, marked as from a former member. The owner cannot leave, but can remove members, archive the space or delete it.',
          'Ethvert medlem kan forlade et rum, og deres opslag bliver, markeret som fra et tidligere medlem. Ejeren kan ikke forlade det, men kan fjerne medlemmer, arkivere rummet eller slette det.'
        ),
        F(
          'Tags, imported details, split links and the people you paid for are never shared.',
          'Tags, importerede oplysninger, delte betalinger og de personer, du betalte for, deles aldrig.',
          'Some things are yours alone, whatever you share: your tags, the imported details, how a bill was split, and the names of the people you paid for never reach a space. Even your names for your accounts stay yours: each member sees their own.',
          'Nogle ting er kun dine, uanset hvad du deler: dine tags, de importerede oplysninger, hvordan en regning blev delt, og navnene på de personer, du betalte for, når aldrig et rum. Selv dine navne på dine konti forbliver dine: hvert medlem ser sine egne.'
        ),
      ],
    },
    {
      name: L('Finding things again', 'At finde ting igen'),
      items: [
        F(
          'Three lists, newest first, ready the moment the app opens.',
          'Tre lister, nyeste først, klar i det øjeblik, appen åbner.',
          'Your transactions, shared expenses and incoming payments, each in its own list, newest first. The saved copy shows at once, even before the server answers; pull down or tap Sync to refresh.',
          'Dine transaktioner, fælles udgifter og indgående betalinger, hver i sin egen liste, nyeste først. Den gemte kopi vises med det samme, også før serveren svarer; træk ned eller tryk Sync for at opdatere.'
        ),
        F(
          'The converted amount right under every foreign payment.',
          'Det omregnede beløb lige under hver betaling i fremmed valuta.',
          'A payment in another currency shows its converted amount right under it, like EUR 96 = USD 108.73, so you never have to do the maths in your head.',
          'En betaling i en anden valuta viser det omregnede beløb lige under sig, fx EUR 96 = USD 108,73, så du aldrig skal regne i hovedet.'
        ),
        F(
          'Badges show at a glance what a payment holds.',
          'Mærker viser med ét blik, hvad en betaling indeholder.',
          'Small badges show when a payment is in a group, paid for others, part of a split payment, has tags or has photos, without opening it.',
          'Små mærker viser, når en betaling er i en gruppe, betalt for andre, en del af en delt betaling, har tags eller har billeder, uden at du skal åbne den.'
        ),
        F(
          'Search title, note, amount and place.',
          'Søg i titel, note, beløb og sted.',
          'Results come as you type, from the title, the shop, the note, the imported details, the payer, the address, the group, the receipt lines, or an exact amount like 4.80. Upper and lower case and accents are ignored, so “cafe” finds “Café Lua”.',
          'Resultaterne kommer, mens du skriver, fra titlen, butikken, noten, de importerede oplysninger, betaleren, adressen, gruppen, kvitteringslinjerne eller et præcist beløb som 4,80. Store og små bogstaver og accenter ignoreres, så “cafe” finder “Café Lua”.'
        ),
        F(
          'Filter by time of day, date range, distance from where you are, an area on the map, amount, category, group, account, payment method, currency, tags, photos, receipt lines and settled.',
          'Filtrér på tidspunkt, datoer, afstand fra hvor du er, et område på kortet, beløb, kategori, gruppe, konto, betalingsmetode, valuta, tags, billeder, kvitteringslinjer og afregnet.',
          'Combine as many filters as you like and see the count before you look: “Show results (7)”. Time of day finds the late snacks between 20:00 and 24:00, distance finds what you paid within 500 m of where you stand, and the map finds everything inside any area you zoom to.',
          'Kombinér så mange filtre, du vil, og se antallet, før du kigger: “Vis resultater (7)”. Tidspunkt finder de sene snacks mellem 20 og 24, afstand finder det, du har betalt inden for 500 m fra der, hvor du står, og kortet finder alt inden for et hvilket som helst område, du zoomer ind på.'
        ),
        F(
          'A strip shows what is filtered, with one tap to clear it all.',
          'En bjælke viser, hvad der er filtreret, med ét tryk til at rydde det hele.',
          'Above the list, a strip shows your search, the number of filters and the number of results, so you never wonder why something is missing. Clear all brings everything back.',
          'Over listen viser en bjælke din søgning, antallet af filtre og antallet af resultater, så du aldrig undrer dig over, hvorfor noget mangler. Ryd alt henter det hele frem igen.'
        ),
        F(
          'Long filter lists get their own search.',
          'Lange filterlister får deres egen søgning.',
          'When a filter has many choices, like dozens of tags or groups, “Show all” opens the full list with a search field.',
          'Når et filter har mange valg, som snesevis af tags eller grupper, kan du åbne hele listen med et søgefelt.'
        ),
        F(
          'Even payments not yet synced are found.',
          'Selv betalinger, der ikke er synkroniseret endnu, bliver fundet.',
          'Search and filters also cover payments that so far only exist on the phone, like the ones you added on the plane.',
          'Søgning og filtre dækker også betalinger, som indtil videre kun findes på telefonen, som dem, du tilføjede i flyet.'
        ),
      ],
    },
    {
      name: L('Yours, everywhere', 'Dine, overalt'),
      items: [
        F(
          'Works offline: create and edit without internet, synced when you are back.',
          'Virker offline: opret og redigér uden internet, synkroniseret når du er tilbage.',
          'Create, edit and delete all three kinds of payments without internet: on a plane, abroad without data, in a basement. Everything is saved on the phone and synced the moment you are back online. Managing groups, accounts, templates and tags needs a connection.',
          'Opret, redigér og slet alle tre slags betalinger uden internet: i flyet, i udlandet uden data, i en kælder. Alt gemmes på telefonen og synkroniseres, så snart du er online igen. Det kræver forbindelse at administrere grupper, konti, skabeloner og tags.',
          'offline'
        ),
        F(
          'Made for a weak signal.',
          'Lavet til et svagt signal.',
          'A slow connection never freezes the app: a request gives up instead of hanging, the app carries on offline, and everything catches up when the signal is back. You stay signed in all the way through.',
          'En langsom forbindelse fryser aldrig appen: en forespørgsel giver op i stedet for at hænge, appen kører videre offline, og alt indhenter sig selv, når signalet er tilbage. Du skal ikke ind igen undervejs.',
          'offline'
        ),
        F(
          'Export to CSV, Excel-friendly if you like, with the original amount, the converted amount, the rate and the fee.',
          'Eksportér til CSV, Excel-venligt hvis du vil, med det oprindelige beløb, det omregnede beløb, kursen og gebyret.',
          'Export transactions, shared expenses or incoming payments for everything, this year, last year or dates you choose, and send the file wherever you like. It opens in any spreadsheet, with an Excel-friendly option for semicolons and decimal commas. Export as often as you like.',
          'Eksportér transaktioner, fælles udgifter eller indgående betalinger for det hele, i år, sidste år eller datoer, du vælger, og send filen, hvorhen du vil. Den åbner i ethvert regneark, med en Excel-venlig mulighed for semikolon og decimalkomma. Eksportér så tit, du vil.',
          'export'
        ),
        F(
          '248 languages, with each language’s own number format, and right-to-left layout where it belongs.',
          '248 sprog, hver med sit eget talformat, og layout fra højre mod venstre, hvor det hører hjemme.',
          'Each language writes numbers and dates its own way, from lakh grouping in India to right-to-left layout for Arabic and Hebrew. You can even type amounts with your own digits, and the app understands them. The app starts in your phone’s language when it has it.',
          'Hvert sprog skriver tal og datoer på sin egen måde, fra lakh-gruppering i Indien til layout fra højre mod venstre på arabisk og hebraisk. Du kan endda skrive beløb med dine egne cifre, og appen forstår dem. Appen starter på telefonens sprog, når den har det.',
          'languages'
        ),
        F(
          'Find your language by its own name or in English.',
          'Find dit sprog på dets eget navn eller på engelsk.',
          'The language list shows each language in its own name, its English name and its main country, and you can search all three.',
          'Sproglisten viser hvert sprog med dets eget navn, dets engelske navn og dets vigtigste land, og du kan søge i alle tre.',
          'languages'
        ),
        F(
          'Your data follows you to a new phone.',
          'Dine data følger med til en ny telefon.',
          'Sign in on another phone, and your payments, groups, accounts, tags and templates are there. Settings like your default values stay on each phone, so two people sharing one phone each keep their own.',
          'Kom ind på en anden telefon, så er dine betalinger, grupper, konti, tags og skabeloner der. Indstillinger som dine standardværdier bliver på hver telefon, så to personer, der deler én telefon, beholder hver deres egne.'
        ),
        F(
          'Light and dark mode.',
          'Lyst og mørkt tema.',
          'Choose the look you prefer: light, or dark for late evenings.',
          'Vælg det udseende, du foretrækker: lyst, eller mørkt til de sene aftener.'
        ),
        F(
          'A built-in guide: the core ideas and the tricky cases, answered in the app.',
          'En indbygget guide: grundideerne og de svære tilfælde, besvaret i appen.',
          'The app explains its core ideas and the tricky cases, like a group dinner someone else paid or a tip left in cash, right inside the app.',
          'Appen forklarer sine grundideer og de svære tilfælde, som en gruppemiddag, en anden betalte, eller drikkepenge lagt i kontanter, direkte i appen.'
        ),
        F(
          'See and clear what is stored on the phone.',
          'Se og ryd det, der er gemt på telefonen.',
          'See which payments and photos are stored on the phone and whether they are synced yet, and clear them when you need the space.',
          'Se, hvilke betalinger og billeder der er gemt på telefonen, og om de er synkroniseret endnu, og ryd dem, når du har brug for pladsen.',
          'offline'
        ),
        F(
          'Secure sign-in: email and password, a code by email, or your Apple, Google or Facebook account.',
          'Sikker adgang: e-mail og adgangskode, en kode på e-mail eller din Apple-, Google- eller Facebook-konto.',
          'Sign in with your email and a password, with a one-time code sent by email, or with your Apple, Google or Facebook account. Once in, you stay signed in, even with a weak signal or none at all; signing out warns you first if anything has not been synced yet.',
          'Kom ind med din e-mail og en adgangskode, med en engangskode sendt på e-mail eller med din Apple-, Google- eller Facebook-konto. Når du er inde, forbliver du det, også med svagt signal eller slet intet; går du ud, advarer appen først, hvis noget ikke er synkroniseret endnu.'
        ),
        F(
          'Your payments are yours alone.',
          'Dine betalinger er kun dine.',
          'Every payment, photo, group, tag and account belongs to you, and nobody else can see it unless you share it in a space. No ads, and no tracking.',
          'Hver betaling, hvert billede, hver gruppe, hvert tag og hver konto tilhører dig, og ingen andre kan se det, medmindre du deler det i et rum. Ingen reklamer og ingen sporing.'
        ),
      ],
    },
  ],
};

export const story = {
  beta: {
    when: L('October 2025.', 'Oktober 2025.'),
    line: L('Private beta. Tested in real life ever since.', 'Privat beta. Testet i det virkelige liv lige siden.'),
    text: L(
      'Transaction went into private beta in October 2025. Since then it has been tested where it counts: the coffee in the morning, the dinner on holiday, the cash in the pocket and the money that came back. Every feature on this page is here because a real payment needed it.',
      'Transaction gik i privat beta i oktober 2025. Siden da er den testet dér, hvor det tæller: kaffen om morgenen, middagen på ferien, kontanterne i lommen og pengene, der kom tilbage. Hver funktion på denne side er her, fordi en rigtig betaling havde brug for den.'
    ),
  },
  next: {
    eyebrow: L('What comes next', 'Det, der kommer'),
    title: L('The next chapter: the whole picture.', 'Det næste kapitel: hele billedet.'),
    text: L(
      'Later, Transaction gets a website. Sign in, and everything you saved in the app is there, on a big screen. And it does not stop there: you can let it read more sources. The receipts in your email. The statement from your bank. Only the ones you say yes to.',
      'Senere får Transaction en hjemmeside. Når du er inde, ligger alt det, du har gemt i appen, dér, på en stor skærm. Og det stopper ikke dér: Du kan give den lov til at læse flere kilder. Kvitteringerne i din mail. Kontoudtoget fra din bank. Kun dem, du siger ja til.'
    ),
    sources: [L('The app', 'Appen'), L('Email receipts', 'Kvitteringer i mailen'), L('Bank statements', 'Kontoudtog')],
    ideas: [
      {
        k: 'forecast',
        name: L('See the month before it ends.', 'Se måneden, før den slutter.'),
        text: L('It is the 12th. At this pace the month ends 18 % above October, and here are the three things that make the difference.', 'Det er den 12. Med det tempo ender måneden 18 % over oktober, og her er de tre ting, der gør forskellen.'),
      },
      {
        k: 'forgotten',
        name: L('The subscription you forgot.', 'Abonnementet, du glemte.'),
        text: L('The same amount on the same day every month, for something you stopped using in March. Found in the bank statement, flagged before the next charge.', 'Det samme beløb på den samme dag hver måned, for noget, du holdt op med at bruge i marts. Fundet i kontoudtoget, markeret før næste træk.'),
      },
      {
        k: 'twice',
        name: L('Charged twice? Not for long.', 'Trukket to gange? Ikke længe.'),
        text: L('Your payments side by side with the bank statement. The coffee charged twice lights up, and so does the line the bank has and you do not.', 'Dine betalinger side om side med kontoudtoget. Kaffen, der blev trukket to gange, lyser op, og det gør linjen, banken har og du ikke har, også.'),
      },
      {
        k: 'price',
        name: L('Your own inflation.', 'Din egen inflation.'),
        text: L('The coffee cost 3.90 in January and 4.80 now. Receipt lines become one curve for every thing you buy again and again.', 'Kaffen kostede 3,90 i januar og 4,80 nu. Kvitteringslinjer bliver til én kurve for hver ting, du køber igen og igen.'),
      },
      {
        k: 'week',
        name: L('Your week, as heat.', 'Din uge som varme.'),
        text: L('Friday evening costs twice as much as Saturday. Every hour of the week, coloured by what you spend in it.', 'Fredag aften koster dobbelt så meget som lørdag. Hver time i ugen, farvet efter hvad du bruger i den.'),
      },
      {
        k: 'map',
        name: L('Your year, as light.', 'Dit år som lys.'),
        text: L('Every payment a point on the map. Your own streets glow, and the week in Lissabon is a small bright cluster far away.', 'Hver betaling et punkt på kortet. Dine egne gader lyser, og ugen i Lissabon er en lille, klar klynge langt væk.'),
      },
      {
        k: 'trip',
        name: L('The next trip, before you book.', 'Næste rejse, før du booker.'),
        text: L('Your last three trips already know what a week in a new city usually costs you, fees and tips included.', 'Dine sidste tre rejser ved allerede, hvad en uge i en ny by plejer at koste dig, gebyrer og drikkepenge med.'),
      },
      {
        k: 'fees',
        name: L('Where did the fees go?', 'Hvor gik gebyrerne hen?'),
        text: L('Every card fee abroad for a whole year, added up into one number. The number your bank never shows you on one line.', 'Hvert kortgebyr i udlandet for et helt år, lagt sammen til ét tal. Det tal, banken aldrig viser dig på én linje.'),
      },
      {
        k: 'people',
        name: L('Who you share with.', 'Hvem I deler med.'),
        text: L('The friends you split the bill with most, and whether it evens out over a year, or always falls the same way.', 'De venner, du oftest deler regningen med, og om det jævner sig ud over et år, eller altid falder samme vej.'),
      },
      {
        k: 'ask',
        name: L('Ask your data.', 'Spørg dine data.'),
        text: L('Ask in plain words: “What did we spend on coffee in Lissabon?” And get the answer, with the payments behind it.', 'Spørg med almindelige ord: “Hvad brugte vi på kaffe i Lissabon?” Og få svaret, med betalingerne bag det.'),
      },
    ],
    note: L('None of this exists yet. These are ideas for where it can go.', 'Intet af det her findes endnu. Det er idéer til, hvor det kan gå hen.'),
  },
  now: {
    title: L('But first: collect the payments.', 'Men først: saml betalingerne.'),
    text: L(
      'Every idea above needs one thing, and it is the one thing nobody can add afterwards: the data. So right now Transaction does one job as well as it can. Every coffee, every dinner, every tip in cash, with the place and the time. When the data is there, all the rest can come.',
      'Hver idé herover kræver én ting, og det er den eneste ting, ingen kan tilføje bagefter: dataene. Så lige nu gør Transaction ét job, så godt den kan. Hver kaffe, hver middag, alle drikkepengene i kontanter, med sted og tidspunkt. Når dataene er der, kan alt det andet komme.'
    ),
    punch: L('The best day to start collecting was yesterday. The second best is today.', 'Den bedste dag at begynde at samle var i går. Den næstbedste er i dag.'),
  },
};

export const currencies = {
  title: L('149 currencies, converted honestly.', '149 valutaer, omregnet ærligt.'),
  intro: L(
    'Your main currency should match your bank account. Everything paid in another currency is converted to it at the official rate from the day you paid, so a summer trip is still counted at summer’s rates in December.',
    'Din hovedvaluta bør matche din bankkonto. Alt, der er betalt i en anden valuta, omregnes til den med den officielle kurs fra den dag, du betalte, så sommerferien stadig tælles med sommerens kurser i december.'
  ),
  calcTitle: L('One dinner in euros, worked out', 'Én middag i euro, regnet ud'),
  calc: [
    { label: L('You paid', 'Du betalte'), value: L('24.50 EUR', '24,50 EUR') },
    { label: L('Official rate that day', 'Officiel kurs den dag'), value: L('1.1326 USD', '1,1326 USD') },
    { label: L('Your bank’s fee, “Card abroad”', 'Bankens gebyr, “Card abroad”'), value: L('+ 1.75 %', '+ 1,75 %') },
    { label: L('Counted as', 'Tælles som'), value: L('28.23 USD', '28,23 USD') },
  ],
  sourceTitle: L('Fetched for the day you paid', 'Hentet til den dag, du betalte'),
  source: L(
    'You never look up a rate. When you add or edit a payment in another currency, Transaction fetches the official rate for that exact day. Not an average, and not today’s.',
    'Du slår aldrig en kurs op. Når du tilføjer eller ændrer en betaling i en anden valuta, henter Transaction den officielle kurs for præcis den dag. Ikke et gennemsnit og ikke dagens.'
  ),
  sourcePoints: [
    { name: L('On the spot', 'På stedet'), text: L('The rate for the payment date is fetched when you save the payment, even if the payment is years old.', 'Kursen for betalingsdatoen hentes, når du gemmer betalingen, også hvis betalingen er flere år gammel.') },
    { name: L('One rate per day', 'Én kurs pr. dag'), text: L('Official reference rates are published every business day. A payment on a weekend or a holiday uses the last published rate.', 'De officielle referencekurser udgives hver bankdag. En betaling i weekenden eller på en helligdag bruger den senest udgivne kurs.') },
    { name: L('Kept for good', 'Gemt for altid'), text: L('Every rate is stored once and never changed, so an old payment always converts the same way.', 'Hver kurs gemmes én gang og ændres aldrig, så en gammel betaling altid omregnes på samme måde.') },
    { name: L('Never in your way', 'Aldrig i vejen'), text: L('Saving a payment never waits for a rate. If a rate is a moment late, the payment shows its own amount first, and the converted amount follows.', 'At gemme en betaling venter aldrig på en kurs. Er en kurs et øjeblik forsinket, viser betalingen først sit eget beløb, og det omregnede beløb kommer bagefter.') },
  ],
  sourceNote: L(
    'These are official daily reference rates, not minute-by-minute market prices. Your bank’s own rate can differ a little, and that is what the fee rules and the rate you type on a payment are for.',
    'Det er officielle daglige referencekurser, ikke markedskurser fra minut til minut. Din banks egen kurs kan afvige lidt, og det er dét, gebyrreglerne og den kurs, du skriver på en betaling, er til.'
  ),
  feesTitle: L('Your bank’s fees, as rules', 'Bankens gebyrer, som regler'),
  fees: L(
    'Banks add a little on top of the official rate. Tell the app how your bank does it, and every matching payment is converted with it, old ones included.',
    'Banker lægger lidt oven i den officielle kurs. Fortæl appen, hvordan din bank gør, så omregnes alle matchende betalinger med det, også de gamle.'
  ),
  feeTypes: [
    { name: L('Percent', 'Procent'), text: L('e.g. 1.75 % on all other currencies.', 'fx 1,75 % på alle andre valutaer.') },
    { name: L('Fixed amount', 'Fast beløb'), text: L('A set fee per payment.', 'Et fast gebyr pr. betaling.') },
    { name: L('Percent with minimum', 'Procent med minimum'), text: L('e.g. 2 %, but at least 1.00 USD.', 'fx 2 %, men mindst 1,00 USD.') },
    { name: L('Fixed exchange rate', 'Fast valutakurs'), text: L('The rate you actually got for one currency, like cash from the airport.', 'Den kurs, du faktisk fik for én valuta, som kontanter fra lufthavnen.') },
  ],
  feeRules: [
    L('Each rule can be limited to some currencies, some payment methods and some kinds of payments.', 'Hver regel kan begrænses til nogle valutaer, nogle betalingsmetoder og nogle slags betalinger.'),
    L('Rules have a valid-from and valid-to date. A 2025 trip keeps its 2025 fee, even if the bank changes it later.', 'Regler har en gyldig-fra- og gyldig-til-dato. En rejse i 2025 beholder sit 2025-gebyr, også selvom banken ændrer det senere.'),
    L('A rate typed on a single transaction always wins. Rules for specific currencies beat “all other currencies”. If two still overlap, the oldest wins.', 'En kurs skrevet på en enkelt transaktion vinder altid. Regler for bestemte valutaer slår “alle andre valutaer”. Overlapper to stadig, vinder den ældste.'),
  ],
  xyTitle: L('Any currency to any currency', 'Fra enhver valuta til enhver valuta'),
  xy: L(
    'A group can have its own currency: a trip through Switzerland and Italy adds up in euros, even the coffee paid in francs. A shared space shows its totals in one currency for everyone. Your own summaries stay in your main currency.',
    'En gruppe kan have sin egen valuta: en tur gennem Schweiz og Italien lægges sammen i euro, også kaffen betalt i franc. Et delt rum viser sine totaler i én valuta for alle. Dine egne opsummeringer bliver i din hovedvaluta.'
  ),
  decimalsTitle: L('Decimals done right', 'Decimaler gjort rigtigt'),
  decimals: L(
    'A yen has no cents, so ¥1,280 is written without them. A Kuwaiti dinar has 1,000 fils, so KWD 1.234 keeps all three decimals.',
    'En yen har ingen øre, så ¥1.280 skrives uden. En kuwaitisk dinar har 1.000 fils, så KWD 1,234 beholder alle tre decimaler.'
  ),
  exportNote: L(
    'Exports include both the amount as you entered it and the converted amount, with the rate and any fee.',
    'Eksporter indeholder både beløbet, som du indtastede det, og det omregnede beløb, med kursen og et eventuelt gebyr.'
  ),
  listTitle: L('All 149 currencies', 'Alle 149 valutaer'),
  columns: { code: L('Code', 'Kode'), name: L('Currency', 'Valuta'), country: L('Where', 'Hvor'), decimals: L('Decimals', 'Decimaler') },
};

export const languages = {
  title: L('248 languages.', '248 sprog.'),
  intro: L(
    'Pick your language in Settings. Each one is shown in its own words, and writes numbers the way its readers expect: 1,234.50 in English, 1.234,50 in Danish, 1 234,50 in Ukrainian.',
    'Vælg dit sprog under Indstillinger. Hvert sprog vises med sine egne ord og skriver tal, som læserne forventer: 1,234.50 på engelsk, 1.234,50 på dansk, 1 234,50 på ukrainsk.'
  ),
  rtl: L('18 of them are written from right to left, and the whole app turns around with them.', '18 af dem skrives fra højre mod venstre, og hele appen vender med dem.'),
  site: L('This website speaks two of them: English and Danish.', 'Denne hjemmeside taler to af dem: engelsk og dansk.'),
  columns: { native: L('Language', 'Sprog'), english: L('In English', 'På engelsk'), number: L('Number', 'Tal') },
  rtlMark: L('right to left', 'højre mod venstre'),
};

export const templatesPage = {
  title: L('Templates. One tap, one payment.', 'Skabeloner. Ét tryk, én betaling.'),
  intro: L(
    'A template is a coloured square at the top of the create screen. It holds a whole payment: tap it, and the form fills in, or the payment is created right away.',
    'En skabelon er en farvet firkant øverst på opret-skærmen. Den rummer en hel betaling: tryk på den, så udfyldes formularen, eller betalingen oprettes med det samme.'
  ),
  sections: [
    {
      title: L('Two ways to tap', 'To måder at trykke på'),
      cards: [
        {
          name: L('Fill the form', 'Udfyld formularen'),
          text: L(
            'The form fills in from the template, and you check it before you tap Add. If you already typed something yourself, you are asked before it is replaced.',
            'Formularen udfyldes fra skabelonen, og du tjekker den, før du trykker Tilføj. Har du allerede selv skrevet noget, bliver du spurgt, før det erstattes.'
          ),
        },
        {
          name: L('Create right away', 'Opret med det samme'),
          text: L(
            'The payment is saved the moment you tap, and a green banner is the only sign. It needs an amount on a transaction, and a payer on a shared expense or an incoming payment.',
            'Posten gemmes i det øjeblik, du trykker, og et grønt banner er det eneste tegn. Det kræver et beløb på en transaktion og en betaler på en fælles udgift eller en indgående betaling.'
          ),
        },
      ],
    },
    {
      title: L('What a template remembers', 'Hvad en skabelon husker'),
      list: [
        L('Account, payment method, title, merchant, amount, currency, category, groups and receipt lines.', 'Konto, betalingsmetode, titel, butik, beløb, valuta, kategori, grupper og kvitteringslinjer.'),
        L('The time: the moment you tap, or a fixed time on the day you tap, like lunch at 11:30.', 'Tidspunktet: det øjeblik, du trykker, eller et fast klokkeslæt på den dag, du trykker, som frokost kl. 11:30.'),
        L('The place: wherever you are when you tap, or always the same place.', 'Stedet: hvor du er, når du trykker, eller altid det samme sted.'),
        L('A colour of its own, so you find it without reading.', 'Sin egen farve, så du finder den uden at læse.'),
      ],
    },
    {
      title: L('Where they live', 'Hvor de bor'),
      checks: [
        L('Each create screen has its own: transactions, shared expenses and incoming payments.', 'Hver opret-skærm har sine egne: transaktioner, fælles udgifter og indgående betalinger.'),
        L('Press and hold a square to edit its template.', 'Hold fingeren på en firkant for at redigere dens skabelon.'),
        L('Make, reorder and delete them under Settings → Templates.', 'Lav, sortér og slet dem under Indstillinger → Skabeloner.'),
        L('The squares work offline. Making and changing templates needs a connection.', 'Firkanterne virker offline. Det kræver forbindelse at lave og ændre skabeloner.'),
      ],
    },
    {
      title: L('Made for what nothing else catches', 'Lavet til det, intet andet fanger'),
      text: L(
        'Lunch paid with your work ID card is not Apple Pay, so no automation sees it. With a template that creates right away, it is one tap a day.',
        'Frokost betalt med arbejdets ID-kort er ikke Apple Pay, så ingen automatisering ser den. Med en skabelon, der opretter med det samme, er det ét tryk om dagen.'
      ),
    },
  ],
};

export const prefilledPage = {
  title: L('Prefilled values. Type it once.', 'Forudfyldte værdier. Skriv det én gang.'),
  intro: L(
    'Most payments look like the last one. Transaction keeps your own lists of titles, merchants and payers, and starts every form with your default values.',
    'De fleste betalinger ligner den forrige. Transaction husker dine egne lister med titler, butikker og betalere og starter hver formular med dine standardværdier.'
  ),
  sections: [
    {
      title: L('Two taps instead of typing', 'To tryk i stedet for at skrive'),
      text: L(
        'Your prefilled titles and merchants sit right under the field. Tap the field, tap “Coffee”. Shared expenses and incoming payments get your payers the same way.',
        'Dine forudfyldte titler og butikker ligger lige under feltet. Tryk på feltet, tryk på “Coffee”. Fælles udgifter og indgående betalinger får dine betalere på samme måde.'
      ),
    },
    {
      title: L('A star for the usual one', 'En stjerne til den sædvanlige'),
      text: L(
        'Tap the star on a title, a merchant or a payer, and it is filled in on every new payment. Tap it again to have none.',
        'Tryk på stjernen ved en titel, en butik eller en betaler, så er den udfyldt på hver ny betaling. Tryk igen for ingen.'
      ),
    },
    {
      title: L('Default values', 'Standardværdier'),
      text: L(
        'Choose the account, payment method, groups and currency every new payment starts with. If you nearly always pay from the same account with the same card, only the amount is left to type.',
        'Vælg den konto, betalingsmetode, de grupper og den valuta, hver ny betaling starter med. Betaler du næsten altid fra den samme konto med det samme kort, er der kun beløbet tilbage at skrive.'
      ),
      list: [
        L('On holiday in Spain? Set the default currency to EUR while you are there.', 'På ferie i Spanien? Sæt standardvalutaen til EUR, mens du er der.'),
        L('The place is set from the phone’s location the moment the screen opens.', 'Stedet sættes fra telefonens placering i det øjeblik, skærmen åbner.'),
        L('Default values belong to the phone, so each of your phones can start its own way.', 'Standardværdierne hører til telefonen, så hver af dine telefoner kan starte på sin egen måde.'),
      ],
      media: 'create-empty',
    },
    {
      title: L('Where to set them', 'Hvor du sætter dem'),
      checks: [
        L('Settings → Default values.', 'Indstillinger → Standardværdier.'),
        L('Settings → Prefilled titles and Prefilled merchants.', 'Indstillinger → Forudfyldte titler og Forudfyldte butikker.'),
        L('Payers are kept in Settings too, for shared expenses and incoming payments.', 'Betalere ligger også under Indstillinger, til fælles udgifter og indgående betalinger.'),
      ],
    },
  ],
};

export const watchPage = {
  title: L('The amount, from your wrist.', 'Beløbet, fra dit håndled.'),
  intro: L(
    'A keypad on your Apple Watch or Wear OS watch. Type what you paid, tap Create, and your phone books it. Everything else can wait.',
    'Et tastatur på dit Apple Watch eller Wear OS-ur. Skriv, hvad du betalte, tryk “Opret”, så opretter telefonen betalingen. Alt andet kan vente.'
  ),
  sections: [
    {
      title: L('Numbers are the first thing you forget.', 'Tal er det første, man glemmer.'),
      text: L(
        'The coffee to go, the parking meter, the cash at a market stall. Ten minutes later the amount is gone, while the rest is easy to remember: where you were and what you bought. So the watch asks for the one thing that slips away, and nothing else.',
        'Kaffen to go, parkeringsautomaten, kontanterne ved markedsboden. Ti minutter senere er beløbet væk, mens resten er let at huske: hvor du var, og hvad du købte. Så uret spørger kun om det, der glipper, og intet andet.'
      ),
      watches: ['watch-keypad-empty'],
    },
    {
      title: L('Type, tap, done.', 'Skriv, tryk, færdig.'),
      list: [
        L('Type the amount on a keypad like the one on your lock screen. A decimal key appears when your currency has decimals.', 'Skriv beløbet på et tastatur som det på din låseskærm. En decimaltast dukker op, når din valuta har decimaler.'),
        L('Tap the green Create button. The watch shows the amount and the time, and one tap takes you back to the keypad.', 'Tryk på den grønne Opret-knap. Uret viser beløbet og tidspunktet, og ét tryk bringer dig tilbage til tastaturet.'),
        L('Mistyped? Undo takes the payment back and puts the amount on the keypad again, one key from fixed.', 'Tastet forkert? Fortryd tager betalingen tilbage og lægger beløbet på tastaturet igen, én tast fra rettet.'),
        L('Open the app from the app list or the watch face, and you always land on the keypad.', 'Åbner du appen fra applisten eller urskiven, lander du altid på tastaturet.'),
      ],
      watches: ['watch-created', 'wear-created'],
    },
    {
      title: L('Your phone fills in the rest.', 'Telefonen udfylder resten.'),
      text: L(
        'The watch hands the amount to your phone, and the phone books it exactly as its own form would have, had you only typed the amount there. For a transaction, that means:',
        'Uret giver beløbet videre til telefonen, og telefonen opretter betalingen præcis, som dens egen formular ville have gjort, hvis du kun havde skrevet beløbet dér. For en transaktion betyder det:'
      ),
      cards: [
        { name: L('Date and time', 'Dato og tid'), text: L('The moment you tapped Create.', 'Det øjeblik, du trykkede “Opret”.') },
        { name: L('Account and payment method', 'Konto og betalingsmetode'), text: L('Your default account and default payment method.', 'Din standardkonto og din standardbetalingsmetode.') },
        { name: L('Groups and currency', 'Grupper og valuta'), text: L('Your default groups, in your default currency.', 'Dine standardgrupper, i din standardvaluta.') },
        { name: L('Title and merchant', 'Titel og butik'), text: L('Your starred title and merchant, if you have starred them.', 'Din stjernemarkerede titel og butik, hvis du har markeret dem.') },
        { name: L('Place', 'Sted'), text: L('Where the watch was, when Auto-set Location is on.', 'Hvor uret var, når Auto-sæt Placering er slået til.') },
        { name: L('Everything else', 'Alt andet'), text: L('Empty, until you open the payment on your phone and fill it in.', 'Tomt, indtil du åbner betalingen på telefonen og udfylder det.') },
      ],
    },
    {
      title: L('Three things it can create.', 'Tre ting, det kan oprette.'),
      text: L(
        'Pick in Settings on the watch: Transaction in blue, Shared expense in orange or Incoming payment in pink. The thin frame around the keypad takes the colour, so you always know what you are about to create. Shared expenses and incoming payments need a starred payer in the app first, and the watch tells you if one is missing.',
        'Vælg i Indstillinger på uret: Transaktion i blå, Fælles udgift i orange eller Indgående betaling i pink. Den tynde ramme om tastaturet får farven, så du altid ved, hvad du er ved at oprette. Fælles udgifter og indgående betalinger kræver først en stjernemarkeret betaler i appen, og uret siger til, hvis den mangler.'
      ),
      watches: ['watch-kinds', 'wear-keypad-shared'],
    },
    {
      title: L('See what you saved.', 'Se, hvad du har gemt.'),
      text: L(
        'Recent lists the newest payments from your phone, all three kinds, each with a stripe in its colour, plus what the watch created that the phone has not booked yet. Tap one to see every field, filled in or not.',
        'Seneste viser de nyeste betalinger fra telefonen, alle tre slags, hver med en stribe i sin farve, plus det, uret har oprettet, som telefonen ikke har oprettet endnu. Tryk på en for at se alle felter, udfyldt eller ej.'
      ),
      watches: ['watch-recent', 'watch-detail'],
    },
    {
      title: L('Today’s spend, on your watch face.', 'Dagens forbrug, på din urskive.'),
      text: L(
        'Put Transaction on your watch face, and it shows what you have spent today in your main currency, the watch’s own new payments included. It starts over at zero at midnight, and a tap opens the keypad.',
        'Sæt Transaction på din urskive, så viser den, hvad du har brugt i dag i din hovedvaluta, inklusive urets egne nye betalinger. Den starter forfra på nul ved midnat, og et tryk åbner tastaturet.'
      ),
    },
    {
      title: L('Good to know', 'Godt at vide'),
      checks: [
        L('The watch never talks to the server itself. It hands each payment to your phone, and the phone creates it when you open the app. With the app already open, it takes about a second.', 'Uret taler aldrig selv med serveren. Det giver hver betaling videre til telefonen, og telefonen opretter den, når du åbner appen. Er appen allerede åben, tager det omkring et sekund.'),
        L('Phone out of reach? The watch keeps the payment and shows “Waiting for phone” until the two meet again.', 'Telefonen uden for rækkevidde? Uret gemmer betalingen og viser “Venter på telefonen”, indtil de to mødes igen.'),
        L('The watch speaks the app’s language and writes numbers the way your language does.', 'Uret taler appens sprog og skriver tal, som dit sprog gør.'),
        L('The same app on Apple Watch and on Wear OS.', 'Den samme app på Apple Watch og på Wear OS.'),
      ],
    },
  ],
};

export const offlinePage = {
  title: L('Offline. It still works.', 'Offline. Det virker stadig.'),
  intro: L(
    'No signal in the basement café? Create and edit as usual. Everything is saved on the phone first, and synced when you are back online.',
    'Intet signal i kældercaféen? Opret og redigér som altid. Alt gemmes først på telefonen og synkroniseres, når du er online igen.'
  ),
  sections: [
    {
      title: L('Saved on the phone first', 'Gemt på telefonen først'),
      list: [
        L('Every payment is saved on your phone before it goes to the server, so a weak connection never costs you one.', 'Hver betaling gemmes på telefonen, før den sendes til serveren, så en svag forbindelse aldrig koster dig en.'),
        L('It is synced by itself in the background, or when you tap “Sync data”.', 'Den synkroniseres af sig selv i baggrunden, eller når du trykker på “Sync data”.'),
        L('Photos wait on the phone too, and are uploaded when there is a connection.', 'Billeder venter også på telefonen og uploades, når der er forbindelse.'),
      ],
    },
    {
      title: L('You can see what is where', 'Du kan se, hvad der er hvor'),
      text: L(
        'Offline, the list shows the payments on your phone. Online, they sit in their own sections, marked “Synced”, “Not synced” or “Server”.',
        'Offline viser listen betalingerne på din telefon. Online ligger de i hver sin sektion, markeret “Synced”, “Not synced” eller “Server”.'
      ),
      media: 'list',
    },
    {
      title: L('What needs a connection', 'Hvad der kræver forbindelse'),
      cards: [
        { name: L('Works offline', 'Virker offline'), text: L('Creating and editing payments, template squares, prefilled values and picking tags.', 'Oprette og redigere betalinger, skabelonfirkanter, forudfyldte værdier og at vælge tags.') },
        { name: L('Needs a connection', 'Kræver forbindelse'), text: L('Managing accounts, groups, templates and tags, and exporting.', 'Administrere konti, grupper, skabeloner og tags samt eksportere.') },
      ],
    },
  ],
};

export const shortcutGuidePage = {
  title: L('Connect Transaction to Shortcuts, step by step.', 'Forbind Transaction med Genveje, trin for trin.'),
  intro: L(
    'Four automations, with every screen along the way: first what to do in the Transaction app, then exactly how the shortcut should look, and finally the green banner when it works.',
    'Fire automatiseringer, med alle skærmbilleder undervejs: først hvad du gør i Transaction-appen, så præcis hvordan genvejen skal se ud, og til sidst det grønne banner, når det virker.'
  ),
  note: L(
    'The screenshots are from iOS 27, in English. In another language Apple’s buttons have other names, but they sit in the same places. Transaction’s own actions have the same English names on every phone.',
    'Skærmbillederne er fra iOS 27 og på engelsk. På dansk hedder Apples knapper noget andet, men de sidder samme sted. Transactions egne handlinger har de samme engelske navne på alle telefoner.'
  ),
  parts: {
    app: L('In the Transaction app', 'I Transaction-appen'),
    shortcuts: L('In Shortcuts', 'I Genveje'),
    works: L('When it works', 'Når det virker'),
  },
  warn: {
    title: L('If one step fails, nothing is saved.', 'Fejler ét trin, bliver intet gemt.'),
    text: L(
      'Shortcuts stops at the first step that fails. No transaction is made, and there is nothing to recover afterwards. You have to add that payment by hand.',
      'Genveje stopper ved det første trin, der fejler. Der bliver ikke lavet en transaktion, og der er intet at hente bagefter. Den betaling må du selv tilføje.'
    ),
    points: [
      L(
        'Get Current Location is the step to watch. If the automation cannot fetch your location, the whole automation fails.',
        'Get Current Location er det trin, du skal holde øje med. Kan automatiseringen ikke hente din placering, fejler hele automatiseringen.'
      ),
      L('Payments made online, on the web, cannot fetch a location, so they fail at that step.', 'Betalinger online, på nettet, kan ikke hente en placering, så de fejler i det trin.'),
      L('The same goes for every other step. One failure, and you get nothing.', 'Det samme gælder alle de andre trin. Én fejl, og du får ingenting.'),
    ],
    way: L(
      'Would you rather have the payment than the place? Remove Get Current Location and clear Latitude and Longitude. With a bank notification you can have both: keep the automation without the place on too.',
      'Vil du hellere have betalingen end stedet? Fjern Get Current Location, og tøm Latitude og Longitude. Ved en notifikation fra banken kan du få begge dele: Behold også automatiseringen uden stedet slået til.'
    ),
    fail: L(
      'The failure, when you run the shortcut by hand. An automation stops without any message.',
      'Fejlen, når du kører genvejen manuelt. En automatisering stopper uden nogen besked.'
    ),
  },
  alert: {
    text: L(
      'If any step fails, the shortcut stops silently. There is no message, and everything about that transaction is lost.',
      'Fejler et trin, stopper genvejen stille. Der kommer ingen besked, og alt om den transaktion går tabt.'
    ),
    link: L('Read what makes it fail', 'Læs, hvad der får den til at fejle'),
  },
  general: L(
    'Another bank or app? It works the same way with General (English only) or General (all languages): choose your app in the trigger and one of those two under Source. They try to read any app, and they will miss sometimes.',
    'En anden bank eller app? Det virker på samme måde med General (English only) eller General (all languages): Vælg din app i udløseren og en af de to under Source. De prøver at læse alle apps og rammer forbi nogle gange.'
  ),
  account: L(
    'Leave Account empty for your default account, or type the account’s name. For Main and Shared, type the English name, even if your app is in another language. A translated name, such as Primær in Danish, stops matching if you switch the app’s language later: the payment then lands on your default account, with the name under Imported details. An account you made yourself has one name, the one you gave it.',
    'Lad Account stå tom for din standardkonto, eller skriv kontoens navn. For Main og Shared skriver du det engelske navn, også selvom appen er på dansk. Et oversat navn som Primær passer ikke længere, hvis du senere skifter appens sprog: Så lander betalingen på din standardkonto, med navnet under Importerede oplysninger. En konto, du selv har lavet, har ét navn, det du gav den.'
  ),
  sections: [
    {
      id: 'wallet-main',
      nav: L('Wallet, Main', 'Wallet, Main'),
      acc: 'green',
      tone: 'white',
      title: L('Apple Wallet, on your Main account', 'Apple Wallet, på din Hovedkonto'),
      intro: L(
        'You tap to pay, and the transaction is created behind the scenes with the app closed. It is there the next time you open the app.',
        'Du betaler med et tryk, og transaktionen bliver lavet i baggrunden med appen lukket. Den er der, næste gang du åbner appen.'
      ),
      app: [
        { s: 'settings', t: L('Open the menu, tap Settings, then Apple Pay Shortcut.', 'Åbn menuen, tryk på Indstillinger og så på Apple Pay-genvej.') },
        { s: 'mode', t: L('Under Auto-add from Shortcuts, choose Auto-save in background.', 'Under Tilføj automatisk fra Genveje vælger du Gem automatisk i baggrunden.') },
      ],
      shortcuts: [
        { s: 'empty', t: L('Open Shortcuts. Tap Library, then Automation, then the + button.', 'Åbn Genveje. Tryk på Library, så Automation og så på +-knappen.') },
        { s: 'panel', t: L('If it asks you to describe a shortcut, tap Edit at the top. Tap Search, then the blue Automation button.', 'Beder den dig beskrive en genvej, trykker du på Edit øverst. Tryk på Search og så på den blå knap Automation.') },
        { s: 'wallet', t: L('Type Wallet and tap it.', 'Skriv Wallet, og tryk på den.') },
        { s: 'cards', t: L('Tap Any Card and tick the card this automation is for. Your own cards are listed here. This test phone has none.', 'Tryk på Any Card, og sæt flueben ved det kort, automatiseringen er til. Dine egne kort står her. Denne testtelefon har ingen.') },
        { s: 'search-loc', t: L('Tap Search, type Get Current Location and tap it. It has no settings.', 'Tryk på Search, skriv Get Current Location, og tryk på den. Den har ingen indstillinger.') },
        { s: 'search-add', t: L('Search for Add Transaction and tap the first one.', 'Søg efter Add Transaction, og tryk på den øverste.') },
        { s: 'var', t: L('Tap Amount, then Select Variable, then Transaction. Tap the blue word in the row and choose Amount. Do the same for Merchant, and for Card with Card or Pass.', 'Tryk på Amount, så Select Variable og så Transaction. Tryk på det blå ord i rækken, og vælg Amount. Gør det samme for Merchant, og for Card med Card or Pass.') },
        { s: 'var-loc', t: L('Tap Latitude, then Select Variable, then Current Location. Tap the blue word and choose Latitude. Do the same for Longitude.', 'Tryk på Latitude, så Select Variable og så Current Location. Tryk på det blå ord, og vælg Latitude. Gør det samme for Longitude.') },
        { s: 'main-2', t: L('In Account, type Main if you want the payments booked on your Main account.', 'Skriv Main i Account, hvis du vil have betalingerne bogført på din hovedkonto.') },
        { s: 'main-1', t: L('The whole automation, from the top. Leave Any Category and Any Merchant as they are, and keep Automation on. Tap the name to rename it, and the arrow at the top left to save. The new automation appears in the list.', 'Hele automatiseringen, fra toppen. Lad Any Category og Any Merchant være, og behold Automation slået til. Tryk på navnet for at omdøbe den og på pilen øverst til venstre for at gemme. Den nye automatisering står nu i listen.') },
        { s: 'perm', t: L('The first time a shortcut asks for your location, tap Allow While Using App.', 'Første gang en genvej beder om din placering, trykker du på Allow While Using App.') },
        { s: 'perm-set', t: L('You can check it in the iPhone’s Settings: Privacy & Security, Location Services, Shortcuts. Keep Precise Location on, or the place is only approximate.', 'Du kan tjekke det i iPhonens indstillinger: Anonymitet og sikkerhed, Lokalitetstjenester, Genveje. Lad Præcis lokalitet være slået til, ellers er stedet kun omtrentligt.') },
      ],
      works: [{ s: 'banner-main', t: L('Open the app after you have paid. The green banner shows the payment, and Edit opens it.', 'Åbn appen, efter du har betalt. Det grønne banner viser betalingen, og Edit åbner den.') }],
      worksNote: L(
        'A Wallet automation cannot be run by hand, so a small real payment is the test. Turn on Notify while you test: it is the only sign that the automation ran.',
        'En Wallet-automatisering kan ikke køres manuelt, så en lille, rigtig betaling er testen. Slå Notify til, mens du tester: det er det eneste tegn på, at automatiseringen kørte.'
      ),
    },
    {
      id: 'wallet-shared',
      nav: L('Wallet, Shared', 'Wallet, Shared'),
      acc: 'green',
      tone: 'grey',
      title: L('The same, on your Shared account', 'Det samme, på din Fælleskonto'),
      intro: L(
        'Give a card its own automation, and its payments land on the right account. It is the setup above with two changes: only this card is ticked, and Account says Shared.',
        'Giv et kort sin egen automatisering, så lander dets betalinger på den rigtige konto. Det er opsætningen ovenfor med to ændringer: kun dette kort har flueben, og der står Shared i Account.'
      ),
      app: [{ s: 'accounts', t: L('Settings, Accounts & payment methods shows your accounts. The name in the automation has to match one of them.', 'Indstillinger, Konti & betalingsmetoder viser dine konti. Navnet i automatiseringen skal passe med en af dem.') }],
      shortcuts: [
        { s: 'shared', t: L('Build it as above. Under Any Card, tick only the Shared card. In Account, type Shared if you want the payments booked on your Shared account, and tap the arrow at the top left to save.', 'Byg den som ovenfor. Under Any Card sætter du kun flueben ved Shared-kortet. Skriv Shared i Account, hvis du vil have betalingerne bogført på din fælleskonto, og tryk på pilen øverst til venstre for at gemme.') },
        { s: 'list-two', t: L('The new automation appears in the list. Open your first automation and untick this card there: a card ticked in two automations books every payment twice.', 'Den nye automatisering står nu i listen. Åbn din første automatisering, og fjern fluebenet ved dette kort dér: Et kort med flueben i to automatiseringer bogfører hver betaling to gange.') },
      ],
      works: [
        { s: 'banner-shared', t: L('The same green banner.', 'Det samme grønne banner.') },
        { s: 'edit-shared', t: L('Tap Edit to check it: Account says Shared.', 'Tryk på Edit for at tjekke det: Der står Shared i Account.') },
      ],
    },
    {
      id: 'nordea',
      nav: L('Nordea', 'Nordea'),
      acc: 'blue',
      tone: 'white',
      general: true,
      title: L('A notification from Nordea', 'En notifikation fra Nordea'),
      intro: L(
        'Nordea Mobile sends a notification when you pay by card in a foreign currency. The automation hands it to Transaction, which reads the amount, the currency and the shop. There is no location step here, so payments made online work too. The Notification trigger needs iOS 27.',
        'Nordea Mobile sender en notifikation, når du betaler med kort i en fremmed valuta. Automatiseringen giver den videre til Transaction, som læser beløbet, valutaen og butikken. Her er intet placeringstrin, så betalinger online virker også. Notification-udløseren kræver iOS 27.'
      ),
      app: [
        { s: 'sources', t: L('Settings, Create transactions from notifications. There is nothing to switch on: building the automation is all it takes.', 'Indstillinger, Opret transaktioner fra notifikationer. Der er intet at slå til: Det er nok at bygge automatiseringen.') },
        { s: 'nordea', t: L('Tap Nordea to see what it reads. It only works for card payments in a foreign currency.', 'Tryk på Nordea for at se, hvad den læser. Den virker kun for kortbetalinger i en fremmed valuta.') },
      ],
      shortcuts: [
        { s: 'n-search', t: L('Start a new automation as before: Library, Automation, +, Edit, Search, Automation. Type Notification and tap it.', 'Start en ny automatisering som før: Library, Automation, +, Edit, Search, Automation. Skriv Notification, og tryk på den.') },
        { s: 'n-app', t: L('Tap App, search for Nordea Mobile and tap it.', 'Tryk på App, søg efter Nordea Mobile, og tryk på den.') },
        { s: 'n-trigger', t: L('Leave the filter empty, and keep Automation on.', 'Lad filteret være tomt, og behold Automation slået til.') },
        { s: 'n-add', t: L('Search for Add Transaction from Notification and tap the first one.', 'Søg efter Add Transaction from Notification, og tryk på den øverste.') },
        { s: 'n-source', t: L('Tap Source and choose Nordea Mobile.', 'Tryk på Source, og vælg Nordea Mobile.') },
        { s: 'n-var', t: L('Tap Body, then Select Variable, then Notification. Tap the blue word and choose Body. Do the same for Title, Subtitle and App.', 'Tryk på Body, så Select Variable og så Notification. Tryk på det blå ord, og vælg Body. Gør det samme for Title, Subtitle og App.') },
        { s: 'n-1', t: L('The whole automation, from the top.', 'Hele automatiseringen, fra toppen.') },
        { s: 'n-2', t: L('And the action in full. Tap the arrow at the top left to save, and the new automation appears in the list.', 'Og hele handlingen. Tryk på pilen øverst til venstre for at gemme, så står den nye automatisering i listen.') },
      ],
      shortcutsNote: L(
        'Keep it to one automation per payment, apart from the two Nordea automations in the next section. A foreign Apple Pay payment can start both a Wallet and a Nordea automation, and then the transaction is created twice. And if any step fails, Shortcuts stops there and nothing is saved.',
        'Hold dig til én automatisering pr. betaling, bortset fra de to Nordea-automatiseringer i næste afsnit. En Apple Pay-betaling i fremmed valuta kan starte både en Wallet- og en Nordea-automatisering, og så bliver transaktionen lavet to gange. Og fejler et trin, stopper Genveje dér, og intet bliver gemt.'
      ),
      works: [
        { s: 'banner-nordea', t: L('Open the app. The banner shows the amount in the foreign currency.', 'Åbn appen. Banneret viser beløbet i den fremmede valuta.') },
        { s: 'edit-nordea', t: L('The whole notification is kept under Imported details.', 'Hele notifikationen gemmes under Importerede oplysninger.') },
      ],
      worksNote: L(
        'The automation runs for every notification from Nordea Mobile. The ones that are not payments are skipped.',
        'Automatiseringen kører for hver notifikation fra Nordea Mobile. Dem, der ikke er betalinger, springes over.'
      ),
    },
    {
      id: 'nordea-location',
      nav: L('Nordea, with the place', 'Nordea, med stedet'),
      acc: 'blue',
      tone: 'grey',
      general: true,
      title: L('A notification from Nordea, with the place', 'En notifikation fra Nordea, med stedet'),
      intro: L(
        'The same automation, plus where your phone is when the notification arrives. Keep the one above on as well, as a safety net. When the location step works, the app saves the payment once, with the place. When it fails, the one above still saves the payment, without the place.',
        'Den samme automatisering, plus hvor din telefon er, når notifikationen kommer. Behold også den ovenfor slået til, som sikkerhedsnet. Virker placeringstrinnet, gemmer appen betalingen én gang, med stedet. Fejler det, gemmer den ovenfor stadig betalingen, uden stedet.'
      ),
      appNote: L(
        'Nothing new here. The only permission goes to Shortcuts: While Using the App, with Precise Location on, as in the first automation.',
        'Intet nyt her. Den eneste tilladelse går til Genveje: Ved brug af appen, med Præcis lokalitet slået til, som i den første automatisering.'
      ),
      shortcuts: [
        { s: 'l-add', t: L('Build the trigger as above and add Get Current Location. Search for with Location and tap Add Transaction from Notification with Location.', 'Byg udløseren som ovenfor, og tilføj Get Current Location. Søg efter with Location, og tryk på Add Transaction from Notification with Location.') },
        { s: 'l-1', t: L('The whole automation, from the top: the trigger, Get Current Location, then the action.', 'Hele automatiseringen, fra toppen: udløseren, Get Current Location og så handlingen.') },
        { s: 'l-2', t: L('Fill Source, Body, Title, Subtitle and App as above. Latitude and Longitude come from Current Location. Tap the arrow at the top left to save.', 'Udfyld Source, Body, Title, Subtitle og App som ovenfor. Latitude og Longitude kommer fra Current Location. Tryk på pilen øverst til venstre for at gemme.') },
        { s: 'list-four', t: L('The new automation appears in the list, here with all four. Both Nordea automations can stay on.', 'Den nye automatisering står nu i listen, her med alle fire. Begge Nordea-automatiseringer må gerne være slået til.') },
      ],
      shortcutsNote: L(
        'Give both Nordea automations the same Source and the same Account. If they differ, the payment is saved twice, and the app warns you that it may be the same payment. That can also happen if you open the app in the few seconds between the two.',
        'Giv begge Nordea-automatiseringer samme Source og samme Account. Er de forskellige, bliver betalingen gemt to gange, og appen advarer om, at det måske er den samme betaling. Det kan også ske, hvis du åbner appen i de få sekunder mellem de to.'
      ),
      works: [
        { s: 'banner-location', t: L('The banner, as before.', 'Banneret, som før.') },
        { s: 'edit-location', t: L('Tap Edit: Location holds the address.', 'Tryk på Edit: Location viser adressen.') },
      ],
    },
  ],
};

export const exportPage = {
  title: L('Export. Your data, whenever you want it.', 'Eksport. Dine data, når du vil have dem.'),
  intro: L(
    'Pick a period, tap a file, and it lands in the share sheet as a CSV file that Excel, Numbers and Google Sheets can open. As often as you like.',
    'Vælg en periode, tryk på en fil, så lander den i delingsmenuen som en CSV-fil, som Excel, Numbers og Google Sheets kan åbne. Så tit du vil.'
  ),
  sections: [
    {
      title: L('Three files', 'Tre filer'),
      text: L('Each file is named after its period, so you can tell them apart later.', 'Hver fil er navngivet efter sin periode, så du kan kende dem fra hinanden bagefter.'),
      cards: [
        { name: L('Transactions', 'Transaktioner'), text: L('What you paid.', 'Det, du betalte.') },
        { name: L('Shared expenses', 'Fælles udgifter'), text: L('What others paid that you are part of.', 'Det, andre betalte, som du er en del af.') },
        { name: L('Incoming payments', 'Indgående betalinger'), text: L('What you received.', 'Det, du modtog.') },
      ],
    },
    {
      title: L('What is in them', 'Hvad der er i dem'),
      list: [
        L('The amount as you entered it, the converted amount, the rate and the fee, so the totals match what the app showed you.', 'Beløbet, som du indtastede det, det omregnede beløb, kursen og gebyret, så totalerne passer med det, appen viste dig.'),
        L('Account, payment method, category, groups, note and place, by name.', 'Konto, betalingsmetode, kategori, grupper, note og sted, ved navn.'),
        L('An amount that cannot be converted yet is left empty, never written as 0.', 'Et beløb, der ikke kan omregnes endnu, står tomt, aldrig som 0.'),
      ],
    },
    {
      title: L('Period and format', 'Periode og format'),
      checks: [
        L('Everything, this year, last year, or dates you choose.', 'Alt, i år, sidste år eller datoer, du vælger.'),
        L('Excel-friendly: semicolons between the columns and a decimal comma, for spreadsheets that put every row in one column. It starts switched on when the app is in Danish.', 'Excel-venlig: semikolon mellem kolonnerne og decimalkomma, til regneark, der ellers lægger hver række i én kolonne. Den starter slået til, når appen er på dansk.'),
        L('Column headers are in English, whatever the app’s language.', 'Kolonneoverskrifterne er på engelsk, uanset appens sprog.'),
      ],
    },
    {
      title: L('No limit. Nothing removed.', 'Ingen grænse. Intet fjernet.'),
      text: L(
        'Export as often as you like. Nothing is deleted from the app when you do. You find it under Settings → Export data.',
        'Eksportér så tit du vil. Intet slettes fra appen, når du gør det. Du finder det under Indstillinger → Eksportér data.'
      ),
    },
  ],
};
