import { L } from '../lib/i18n.mjs';

export const faq = {
  title: L('Questions and answers', 'Spørgsmål og svar'),
  intro: L(
    'Most questions are really “which kind of payment is this?”. Here are the tricky ones, answered the way the app is meant to be used.',
    'De fleste spørgsmål handler i virkeligheden om “hvilken slags betaling er det her?”. Her er de svære, besvaret sådan, som appen er tænkt.'
  ),
  sections: [
    {
      name: L('The app', 'Appen'),
      items: [
        {
          q: L('Who is Transaction for?', 'Hvem er Transaction til?'),
          a: L(
            'For people who want to remember what every payment was: where, when, with whom, from which account. It is built for power users: the create screen shows every field at once. If you only want a total per month, a simpler budget app will feel lighter.',
            'Til dem, der vil kunne huske, hvad hver betaling var: hvor, hvornår, med hvem, fra hvilken konto. Den er bygget til superbrugere: opret-skærmen viser alle felter på én gang. Vil du bare have en total pr. måned, vil en enklere budget-app føles lettere.'
          ),
        },
        {
          q: L('That is a lot of fields. Do I have to fill them all in?', 'Det er mange felter. Skal jeg udfylde dem alle?'),
          a: L(
            'No. Only the amount matters. Automations, templates, default values and prefilled titles fill most of the rest, so a full payment usually takes a few taps, or none.',
            'Nej. Kun beløbet er vigtigt. Automatiseringer, skabeloner, standardværdier og forudfyldte titler udfylder det meste af resten, så en fuld betaling som regel tager få tryk, eller ingen.'
          ),
        },
        {
          q: L('Which phones does it run on?', 'Hvilke telefoner kører den på?'),
          a: L('iPhone with iOS 17 or newer, and Android 8.0 or newer.', 'iPhone med iOS 17 eller nyere og Android 8.0 eller nyere.'),
        },
        {
          q: L('Does it connect to my bank?', 'Forbinder den til min bank?'),
          a: L(
            'No. It never connects to your bank and never sees card numbers. It only knows what you type, and what your own automation hands it: the payment from Apple Wallet, or the text of a payment notification.',
            'Nej. Den forbinder sig aldrig til din bank og ser aldrig kortnumre. Den ved kun det, du skriver, og det, din egen automatisering giver den: betalingen fra Apple Wallet eller teksten i en betalingsnotifikation.'
          ),
        },
        {
          q: L('Does it work offline?', 'Virker den offline?'),
          a: L(
            'Yes. Create and edit payments without a connection; they are saved on the phone and synced when you are back online. Managing groups needs a connection.',
            'Ja. Opret og redigér betalinger uden forbindelse; de gemmes på telefonen og synkroniseres, når du er online igen. Administration af grupper kræver forbindelse.'
          ),
        },
      ],
    },
    {
      name: L('Which kind of payment?', 'Hvilken slags betaling?'),
      items: [
        {
          q: L('Someone else paid for a group dinner. How do I save it as a payment?', 'En anden betalte for en gruppemiddag. Hvordan gemmer jeg den som en betaling?'),
          a: L(
            'As a shared expense, not a transaction: you did not pay. Then either it was on them and you mark it finalized, or you send your share later (a new transaction), or you buy next time (also a new transaction). Adding the dinner as your own transaction as well would count it twice.',
            'Som en fælles udgift, ikke en transaktion: du betalte ikke. Så var det enten deres gave, og du markerer den afsluttet, eller du sender din andel senere (en ny transaktion), eller du giver næste gang (også en ny transaktion). Tilføjer du også middagen som din egen transaktion, tæller den dobbelt.'
          ),
        },
        {
          q: L('A restaurant bill was paid by several people in different ways.', 'En restaurantregning blev betalt af flere personer på forskellige måder.'),
          a: L(
            'Add the card payment for the full card amount. Open it and tap “Add a part paid another way”. Choose who paid the tip: your cash, the shared cash, another of your accounts, or someone else (which becomes a shared expense, linked to the card payment). Then enter the amount or a percent of the bill. The parts are shown together as one split payment.',
            'Gem kortbetalingen med hele kortbeløbet. Åbn den, og tryk “Tilføj en del betalt på en anden måde”. Vælg, hvem der betalte drikkepengene: dine kontanter, de fælles kontanter, en anden af dine konti eller en anden person (så bliver det en fælles udgift, forbundet med kortbetalingen). Skriv derefter beløbet eller en procent af regningen. Delene vises samlet som én delt betaling.'
          ),
        },
        {
          q: L('Should I add transfers to a shared account as payments?', 'Skal jeg tilføje overførsler til en fælleskonto som betalinger?'),
          a: L(
            'No. Moving money between your own accounts is not spending: the money is still yours. Add what is bought from the shared account as payments instead.',
            'Nej. At flytte penge mellem dine egne konti er ikke forbrug: pengene er stadig dine. Tilføj i stedet det, der købes fra fælleskontoen, som betalinger.'
          ),
        },
        {
          q: L('A friend paid back another friend, not me. What then?', 'En ven betalte en anden ven tilbage, ikke mig. Hvad så?'),
          a: L(
            'Maria pays the taxi with the shared card, and Sofie pays Maria back privately. Add the taxi as a normal transaction (it came from an account you are part of) and write the repayment in its note. If money later comes back to one of your accounts, add that as an incoming payment.',
            'Maria betaler taxaen med fælleskortet, og Sofie betaler Maria tilbage privat. Tilføj taxaen som en normal transaktion (den kom fra en konto, du er en del af) og skriv tilbagebetalingen i noten. Kommer der senere penge tilbage på en af dine konti, tilføjer du det som en indgående betaling.'
          ),
        },
        {
          q: L('I paid with the wrong card and fixed it later.', 'Jeg betalte med det forkerte kort og rettede det bagefter.'),
          a: L(
            'Add it on the account you meant to use, if you corrected it in your bank shortly after, and write what happened in the note. The group totals stay right.',
            'Tilføj den på den konto, du ville have brugt, hvis du rettede det i banken kort efter, og skriv i noten, hvad der skete. Så bliver gruppens totaler rigtige.'
          ),
        },
        {
          q: L('I bought something for myself and shared it later.', 'Jeg købte noget til mig selv og delte det senere.'),
          a: L(
            'Keep it as one transaction and turn on “Paid for others”. Add who you shared with, with or without an amount. The payment gets a small “Shared” badge in the list, and in a group the amounts count towards who owes whom; a name without an amount is only listed. Never make a shared expense for something you paid yourself.',
            'Behold den som én transaktion, og slå “Betalt for andre” til. Tilføj, hvem du delte med, med eller uden beløb. Posten får et lille “Delt”-mærke i listen, og i en gruppe tæller beløbene med i, hvem der skylder hvem; et navn uden beløb bliver kun listet. Lav aldrig en fælles udgift for noget, du selv har betalt.'
          ),
        },
        {
          q: L('My partner and I share an account. How does that count?', 'Min partner og jeg deler en konto. Hvordan tæller det?'),
          a: L(
            'Payments from the joint account are transactions. In a group, pick that account under account splitting, and its spending counts as half for your share, unless you set “My share” yourself. If your partner pays from their own account, it is a shared expense.',
            'Betalinger fra fælleskontoen er transaktioner. I en gruppe vælger du kontoen under kontodeling, så tæller forbruget på den som det halve af din andel, medmindre du selv sætter “Min andel”. Betaler din partner fra sin egen konto, er det en fælles udgift.'
          ),
        },
      ],
    },
    {
      name: L('Payments saved automatically', 'Betalinger, der gemmes automatisk'),
      items: [
        {
          q: L('How do Apple Wallet payments become transactions?', 'Hvordan bliver Apple Wallet-betalinger til transaktioner?'),
          a: L(
            'Through an automation in Apple’s Shortcuts app that runs on every Apple Pay payment and hands it to the app. It is a one-time setup: the guide is in the app under Settings, and on the page about payments that save themselves.',
            'Via en automatisering i Apples Genveje-app, der kører ved hver Apple Pay-betaling og giver den videre til appen. Det er en opsætning, der laves én gang: vejledningen ligger i appen under Indstillinger og på siden om betalinger, der gemmes automatisk.'
          ),
        },
        {
          q: L('My Apple Watch payment did not show up.', 'Min betaling med Apple Watch dukkede ikke op.'),
          a: L(
            'The two modes that work through the open app need the iPhone unlocked and the app already open in the background, so they miss a Watch payment while the phone is locked in your pocket. Use “Auto-save in background”: it works with a locked phone and for Watch payments, and the transaction is created the next time you open the app.',
            'De to tilstande, der virker gennem den åbne app, kræver, at iPhonen er låst op, og at appen allerede er åben i baggrunden, så de går glip af en Watch-betaling, mens telefonen ligger låst i lommen. Brug “Gem automatisk i baggrunden”: den virker med låst telefon og ved Watch-betalinger, og transaktionen oprettes, næste gang du åbner appen.'
          ),
        },
        {
          q: L('A payment was created twice.', 'En betaling blev oprettet to gange.'),
          a: L(
            'Two automations caught the same payment, for example the Wallet automation and a notification automation, or one card ticked in two automations. Keep one automation per payment. The app marks suspected doubles so you can delete one.',
            'To automatiseringer fangede den samme betaling, for eksempel Wallet-automatiseringen og en notifikationsautomatisering, eller ét kort valgt i to automatiseringer. Hav én automatisering pr. betaling. Appen markerer mulige dobbelte, så du kan slette den ene.'
          ),
        },
        {
          q: L('Which bank notifications can it read?', 'Hvilke banknotifikationer kan den læse?'),
          a: L(
            'On iPhone, one Danish bank’s app is read reliably: for card payments in a foreign currency, the only payments it sends that notification for. Two general readers try any other app, in English or in any language; they will miss sometimes. On Android, payment notifications from your bank and wallet apps are captured once you grant notification access.',
            'På iPhone læses én dansk banks app sikkert: for kortbetalinger i fremmed valuta, de eneste betalinger, den sender den notifikation for. To generelle læsere prøver alle andre apps, på engelsk eller på alle sprog; de vil ramme ved siden af en gang imellem. På Android fanges betalingsnotifikationer fra dine bank- og wallet-apps, når du har givet notifikationsadgang.'
          ),
        },
        {
          q: L('Can I test the Wallet automation without paying?', 'Kan jeg teste Wallet-automatiseringen uden at betale?'),
          a: L(
            'No. Wallet automations cannot be run by hand. Make a small, real payment. Afterwards, Settings → Apple Pay Shortcut → Shortcut diagnostics shows exactly where the chain stopped.',
            'Nej. Wallet-automatiseringer kan ikke køres manuelt. Lav en lille, rigtig betaling. Bagefter viser Indstillinger → Apple Pay-genvej → Genvejs-diagnostik præcis, hvor kæden stoppede.'
          ),
        },
      ],
    },
    {
      name: L('Money and currencies', 'Penge og valutaer'),
      items: [
        {
          q: L('Which exchange rate is used?', 'Hvilken valutakurs bruges?'),
          a: L(
            'The official rate from the day you paid, plus any bank fee rules you have set up. If you type the card exchange rate from your bank statement on a transaction, that rate wins.',
            'Den officielle kurs fra den dag, du betalte, plus de regler for bankgebyrer, du har sat op. Skriver du kort-valutakursen fra dit kontoudtog på en transaktion, vinder den kurs.'
          ),
        },
        {
          q: L('Will my totals change when the rate changes tomorrow?', 'Ændrer mine totaler sig, når kursen ændrer sig i morgen?'),
          a: L(
            'No. Each payment keeps the rate from its own payment date, and each fee rule applies to the period it was valid in.',
            'Nej. Hver betaling beholder kursen fra sin egen betalingsdato, og hver gebyrregel gælder for den periode, den var gyldig i.'
          ),
        },
        {
          q: L('Can I see a trip in the currency we spent?', 'Kan jeg se en rejse i den valuta, vi brugte?'),
          a: L(
            'Yes. Give the group its own currency, and its total and conversions are shown in it, while your own summaries stay in your main currency.',
            'Ja. Giv gruppen sin egen valuta, så vises dens total og omregninger i den, mens dine egne opsummeringer bliver i din hovedvaluta.'
          ),
        },
        {
          q: L('Is this an accounting tool that settles up to the cent?', 'Er det et regnskabsværktøj, der gør op på øren?'),
          a: L(
            'No, on purpose. Shared expenses can be approximate, and “Who owes whom” is an overview, not an invoice. If your group wants an exact settle-up, MobilePay groups or a similar app is the better tool.',
            'Nej, med vilje. Fælles udgifter kan være cirka, og “Hvem skylder hvem” er et overblik, ikke en faktura. Vil gruppen have en præcis afregning, er MobilePay-grupper eller en lignende app det bedre værktøj.'
          ),
        },
      ],
    },
    {
      name: L('Your data', 'Dine data'),
      items: [
        {
          q: L('Who can see my payments?', 'Hvem kan se mine betalinger?'),
          a: L(
            'Only you, until you share a payment or link a group to a shared space. Then the members of that space see the fields you chose to share.',
            'Kun dig, indtil du deler en betaling eller forbinder en gruppe med et delt rum. Så kan medlemmerne af rummet se de felter, du valgte at dele.'
          ),
        },
        {
          q: L('Can I get my data out?', 'Kan jeg få mine data ud?'),
          a: L(
            'Yes. Settings → Export data gives you CSV files for transactions, shared expenses and incoming payments, as often as you like. Nothing is deleted when you export.',
            'Ja. Indstillinger → Eksportér data giver dig CSV-filer med transaktioner, fælles udgifter og indgående betalinger, så tit du vil. Der slettes intet, når du eksporterer.'
          ),
        },
        {
          q: L('How do I delete my account?', 'Hvordan sletter jeg min konto?'),
          a: L('See the page on deleting your account: it lists exactly what is deleted and when.', 'Se siden om at slette din konto: den viser præcis, hvad der slettes og hvornår.'),
          link: 'delete-account',
        },
      ],
    },
  ],
};
