import { L } from '../lib/i18n.mjs';
import { site } from './site.mjs';

const mail = `<a href="mailto:${site.email}">${site.email}</a>`;

export const privacy = {
  title: L('Privacy policy', 'Privatlivspolitik'),
  lede: L(
    'Transaction is where you keep your own payments. Everything it stores about you is there for one reason: so you can see, search and add up your own payments, and share the ones you choose. There are no ads, no tracking and no sale of data. Your payments are stored in the EU; the sign-in service is hosted in the USA, as described below.',
    'Transaction er der, hvor du gemmer dine egne betalinger. Alt, hvad den gemmer om dig, er der af én grund: så du kan se, søge i og lægge dine egne betalinger sammen, og dele dem, du vælger. Der er ingen annoncer, ingen sporing og intet salg af data. Dine betalinger ligger i EU; adgangstjenesten er hostet i USA, som beskrevet nedenfor.'
  ),
  body: L(
    `<h2>Who is responsible</h2>
<p>Transaction is run by a private individual in Denmark. Contact: ${mail}.</p>

<h2>What is stored, and why</h2>
<p>Everything below is linked to your account, used only to make the app work, and <b>none of it is used for tracking or advertising</b>.</p>
<table>
<thead><tr><th>Data</th><th>Why</th></tr></thead>
<tbody>
<tr><td><b>Email address</b></td><td>Signing in. If you use Sign in with Apple and “Hide My Email”, only Apple’s relay address is stored.</td></tr>
<tr><td><b>Name</b> (optional)</td><td>Shown on your profile, and to the people in a shared space you join.</td></tr>
<tr><td><b>User ID and Sharing ID</b></td><td>The key to your account. Your Sharing ID lets someone invite you to a shared space. The only people who get it are those you give it to and the other members of your spaces. You can get a new one at any time.</td></tr>
<tr><td><b>Your payments</b></td><td>Transactions, shared expenses and incoming payments with what you add to them: amounts, currencies, dates and times, titles, merchants, the names of payers and of people you paid for, notes, categories, tags, groups, accounts, payment methods, tips, receipt lines, exchange rates and fee rules. Also your templates. Your prefilled titles, merchants and payers stay on your phone.</td></tr>
<tr><td><b>Precise location</b></td><td>The place of a payment, so you can see and search where you paid. Only when you allow location access while using the app, when your own Shortcuts automation adds your current location, or when you pick the location stored in a photo. A photo you attach also keeps the location stored in it, if it has one. <b>Optional</b>: say no, and payments are saved without a place.</td></tr>
<tr><td><b>Photos</b></td><td>Photos you attach to a payment, such as receipts, are uploaded and stored with it, along with the details in the photo file: when and where it was taken, and the camera. Reading the text on a receipt or a Wallet screenshot happens on your phone.</td></tr>
<tr><td><b>Imported details</b></td><td>When an automation or import creates a payment (Apple Wallet through Shortcuts, a payment notification, a Wallet screenshot or a MobilePay receipt), the text it received is stored with the payment, so you can always see where it came from.</td></tr>
<tr><td><b>Payment notifications</b></td><td>On Android, if you give the app notification access, notifications are read on the phone, and only the payments are saved. On iPhone, the app only receives the notifications your own Shortcuts automation hands to it.</td></tr>
<tr><td><b>Diagnostics</b></td><td>When something goes wrong: a crash or error report with your user ID and email address, the device model, operating system, app version, IP address and what the app was doing. For a small share of sessions, and for sessions with an error, a screen recording with all text and images masked. When a Shortcuts automation delivers a payment, a short trail of its steps goes with these reports: the currency and the rough size of the amount, never the exact amount, the merchant, the card or the place. The full Shortcut diagnostics are only sent when you tap “Send diagnostics to Sentry”. The server keeps its own diagnostics for up to 90 days: the requests it handled and any errors.</td></tr>
</tbody>
</table>
<p>Transaction does <b>not</b> connect to your bank, and never sees your card numbers or your bank sign-in details. It does not collect contacts, health data or advertising identifiers.</p>

<h2>Shared spaces</h2>
<p>When you share a payment in a shared space, or link a group to one, the members see a copy: always the amount, currency, date, title, category and account, plus the fields you choose (note, tip, payment method, location, my share, photos). Location starts ticked, so untick it if the place should stay private. Removing it from the space removes the copy. When you delete the original, the app asks whether the shared copy should go too.</p>

<h2>Who processes data for us</h2>
<table>
<thead><tr><th>Provider</th><th>Role</th><th>Where</th></tr></thead>
<tbody>
<tr><td><b>Clerk</b></td><td>Sign-in and account management: email, name, user ID.</td><td><b>USA</b></td></tr>
<tr><td><b>Microsoft Azure</b></td><td>Server, database, photo storage and server diagnostics: your payments, photos and places.</td><td><b>EU</b> (North Europe)</td></tr>
<tr><td><b>Sentry</b></td><td>Crash and error reports, and masked screen recordings.</td><td><b>EU</b> (Germany)</td></tr>
<tr><td><b>Apple</b></td><td>Sign in with Apple. On iPhone: maps, and turning a position into an address.</td><td>USA</td></tr>
<tr><td><b>Google</b></td><td>Sign in with Google. On Android: maps, and turning a position into an address.</td><td>USA</td></tr>
<tr><td><b>Meta</b></td><td>Only if you choose to sign in with Facebook.</td><td>USA</td></tr>
</tbody>
</table>
<p>Exchange rates are downloaded by our server from public sources. Nothing about you is sent with that request.</p>

<h2>Transfer to the USA</h2>
<p><b>The sign-in service is hosted in the USA.</b> Your email address, name and user ID are stored by Clerk on servers in the USA, under the safeguards in our data processing agreement (the European Commission’s standard contractual clauses). If you sign in with Apple, Google or Facebook, they also process your sign-in under their own terms.</p>
<p><b>Your payments are not.</b> Payments, photos and places live in a database in North Europe. To show an address, a position is looked up by your phone’s map service: Apple on iPhone, Google on Android.</p>

<h2>How long it is kept</h2>
<p>For as long as you have an account. A photo you remove, or one on a payment you delete, is deleted 30 days later. When your account is deleted, your data is deleted within 30 days - except posts and comments you shared in a shared space, which stay for its members under your name. Database backups expire automatically after 14 days, and deleted photo files after 7.</p>

<h2>Deleting your account</h2>
<p>You can ask for your account and all your data to be deleted at any time. See <a href="/delete-account/">Delete your account</a>. Before you do, you can export your payments as CSV files under Settings → Export data. Photos, tags and receipt lines are not included.</p>

<h2>Your rights</h2>
<p>Under the GDPR you have the right of access, rectification, erasure, restriction, objection and data portability. Export is self-service in the app; for everything else, write to ${mail}. You can complain to the data protection authority where you live, or in Denmark to <a href="https://www.datatilsynet.dk">Datatilsynet</a>, the Danish Data Protection Agency.</p>

<h2>Children</h2>
<p>Transaction is not directed at children under 13, and does not knowingly collect data about them.</p>

<h2>This website</h2>
<p>This website uses no cookies and no analytics. Your language choice is remembered in your own browser. Fonts and video are served from this site, not from other services. The site is hosted on GitHub Pages, which may record IP addresses for security.</p>

<h2>Changes</h2>
<p>If this policy changes, the date at the top changes too.</p>`,
    `<h2>Hvem er ansvarlig</h2>
<p>Transaction drives af en privatperson i Danmark. Kontakt: ${mail}.</p>

<h2>Hvad der gemmes, og hvorfor</h2>
<p>Alt herunder er knyttet til din konto, bruges kun til at få appen til at virke, og <b>intet af det bruges til sporing eller annoncer</b>.</p>
<table>
<thead><tr><th>Data</th><th>Hvorfor</th></tr></thead>
<tbody>
<tr><td><b>E-mailadresse</b></td><td>Til at komme ind i appen. Kommer du ind med din Apple-konto og “Skjul min e-mail”, gemmes kun Apples videresendelsesadresse.</td></tr>
<tr><td><b>Navn</b> (valgfrit)</td><td>Vises på din profil og for dem i et delt rum, du er med i.</td></tr>
<tr><td><b>Bruger-id og Delings-ID</b></td><td>Nøglen til din konto. Dit Delings-ID lader andre invitere dig til et delt rum. Kun dem, du giver det til, og de andre medlemmer af dine rum får det. Du kan få et nyt når som helst.</td></tr>
<tr><td><b>Dine betalinger</b></td><td>Transaktioner, fælles udgifter og indgående betalinger med det, du tilføjer: beløb, valutaer, datoer og tidspunkter, titler, butikker, navne på betalere og på dem, du har betalt for, noter, kategorier, tags, grupper, konti, betalingsmetoder, drikkepenge, kvitteringslinjer, valutakurser og gebyrregler. Også dine skabeloner. Dine forudfyldte titler, butikker og betalere bliver på din telefon.</td></tr>
<tr><td><b>Præcis placering</b></td><td>Stedet for en betaling, så du kan se og søge på, hvor du betalte. Kun når du giver adgang til placering, mens du bruger appen, når din egen Genveje-automatisering tilføjer din aktuelle placering, eller når du vælger placeringen fra et billede. Et billede, du knytter til, beholder også den placering, der er gemt i det, hvis det har en. <b>Frivilligt</b>: siger du nej, gemmes betalinger uden sted.</td></tr>
<tr><td><b>Billeder</b></td><td>Billeder, du knytter til en betaling, fx kvitteringer, uploades og gemmes med den, sammen med oplysningerne i billedfilen: hvornår og hvor det er taget, og kameraet. Teksten på en kvittering eller et Wallet-screenshot læses på din telefon.</td></tr>
<tr><td><b>Importerede oplysninger</b></td><td>Når en automatisering eller import opretter en betaling (Apple Wallet via Genveje, en betalingsnotifikation, et Wallet-screenshot eller en MobilePay-kvittering), gemmes den tekst, den modtog, med betalingen, så du altid kan se, hvor den kom fra.</td></tr>
<tr><td><b>Betalingsnotifikationer</b></td><td>På Android læses notifikationer på telefonen, hvis du giver appen notifikationsadgang, og kun betalingerne gemmes. På iPhone modtager appen kun de notifikationer, din egen Genveje-automatisering giver den.</td></tr>
<tr><td><b>Diagnostik</b></td><td>Når noget går galt: en nedbruds- eller fejlrapport med dit bruger-id og din e-mailadresse, enhedsmodel, styresystem, appversion, IP-adresse og hvad appen var i gang med. For en lille andel af sessionerne, og for sessioner med en fejl, en skærmoptagelse, hvor al tekst og alle billeder er skjult. Når en Genveje-automatisering afleverer en betaling, følger et kort spor af dens trin med disse rapporter: valutaen og beløbets omtrentlige størrelse, aldrig det præcise beløb, butikken, kortet eller stedet. Den fulde Genvejs-diagnostik sendes kun, når du trykker “Send diagnostik til Sentry”. Serveren gemmer sin egen diagnostik i op til 90 dage: de forespørgsler, den har behandlet, og eventuelle fejl.</td></tr>
</tbody>
</table>
<p>Transaction forbinder <b>ikke</b> til din bank og ser aldrig dine kortnumre eller dine adgangsoplysninger til banken. Den indsamler ikke kontakter, helbredsdata eller reklame-id’er.</p>

<h2>Delte rum</h2>
<p>Når du deler en betaling i et delt rum eller forbinder en gruppe med et, ser medlemmerne en kopi: altid beløb, valuta, dato, titel, kategori og konto, plus de felter, du vælger (note, drikkepenge, betalingsmetode, placering, min andel, billeder). Placering er afkrydset fra start, så fjern krydset, hvis stedet skal være privat. Fjerner du den fra rummet, fjernes kopien. Sletter du originalen, spørger appen, om den delte kopi også skal væk.</p>

<h2>Hvem behandler data for os</h2>
<table>
<thead><tr><th>Leverandør</th><th>Rolle</th><th>Hvor</th></tr></thead>
<tbody>
<tr><td><b>Clerk</b></td><td>Adgang og kontostyring: e-mail, navn, bruger-id.</td><td><b>USA</b></td></tr>
<tr><td><b>Microsoft Azure</b></td><td>Server, database, lager til billeder og serverdiagnostik: dine betalinger, billeder og placeringer.</td><td><b>EU</b> (Nordeuropa)</td></tr>
<tr><td><b>Sentry</b></td><td>Nedbruds- og fejlrapporter og skjulte skærmoptagelser.</td><td><b>EU</b> (Tyskland)</td></tr>
<tr><td><b>Apple</b></td><td>Adgang med din Apple-konto. På iPhone: kort og omsætning af en position til en adresse.</td><td>USA</td></tr>
<tr><td><b>Google</b></td><td>Adgang med din Google-konto. På Android: kort og omsætning af en position til en adresse.</td><td>USA</td></tr>
<tr><td><b>Meta</b></td><td>Kun hvis du vælger at komme ind med din Facebook-konto.</td><td>USA</td></tr>
</tbody>
</table>
<p>Valutakurser hentes af vores server fra offentlige kilder. Der sendes intet om dig med.</p>

<h2>Overførsel til USA</h2>
<p><b>Adgangstjenesten er hostet i USA.</b> Din e-mailadresse, dit navn og dit bruger-id opbevares af Clerk på servere i USA, på grundlag af garantierne i vores databehandleraftale (EU-Kommissionens standardkontraktbestemmelser). Kommer du ind med din Apple-, Google- eller Facebook-konto, behandler de også din adgang efter deres egne vilkår.</p>
<p><b>Dine betalinger gør ikke.</b> Betalinger, billeder og placeringer ligger i en database i Nordeuropa. For at vise en adresse slås en position op af din telefons korttjeneste: Apple på iPhone, Google på Android.</p>

<h2>Hvor længe det gemmes</h2>
<p>Så længe du har en konto. Et billede, du fjerner, eller et på en betaling, du sletter, slettes 30 dage senere. Når din konto slettes, slettes dine data inden for 30 dage - undtagen opslag og kommentarer, du har delt i et delt rum, som bliver stående for medlemmerne under dit navn. Sikkerhedskopier af databasen udløber automatisk efter 14 dage, og slettede billedfiler efter 7.</p>

<h2>Sletning af din konto</h2>
<p>Du kan til enhver tid bede om at få din konto og alle dine data slettet. Se <a href="/delete-account/">Slet din konto</a>. Inden da kan du eksportere dine betalinger som CSV-filer under Indstillinger → Eksportér data. Billeder, tags og kvitteringslinjer er ikke med.</p>

<h2>Dine rettigheder</h2>
<p>Efter GDPR har du ret til indsigt, berigtigelse, sletning, begrænsning, indsigelse og dataportabilitet. Eksport klarer du selv i appen; alt andet sker ved at skrive til ${mail}. Du kan klage til databeskyttelsesmyndigheden, hvor du bor, eller i Danmark til <a href="https://www.datatilsynet.dk">Datatilsynet</a>.</p>

<h2>Børn</h2>
<p>Transaction er ikke rettet mod børn under 13 år og indsamler ikke bevidst data om dem.</p>

<h2>Denne hjemmeside</h2>
<p>Denne hjemmeside bruger ingen cookies og ingen analyseværktøjer. Dit valg af sprog huskes i din egen browser. Skrifttyper og video leveres fra denne side, ikke fra andre tjenester. Siden hostes på GitHub Pages, som kan registrere IP-adresser af sikkerhedshensyn.</p>

<h2>Ændringer</h2>
<p>Ændres denne politik, ændres datoen øverst også.</p>`
  ),
};

export const translationNotice = L(
  'This page is a translation, provided for your convenience. If it differs from the English version, the English version applies.',
  'Denne side er en oversættelse for din bekvemmeligheds skyld. Afviger den fra den engelske version, er det den engelske version, der gælder.'
);

export const tos = {
  title: L('Terms of use', 'Vilkår for brug'),
  lede: L(
    'Transaction is an app for saving your own payments, made by a private individual in Denmark. These terms apply to everyone who uses it, wherever in the world they live, and are also the end-user licence agreement (EULA) for the app.',
    'Transaction er en app til at gemme dine egne betalinger, lavet af en privatperson i Danmark. Vilkårene gælder for alle, der bruger appen, uanset hvor i verden de bor, og de er også slutbrugerlicensaftalen (EULA) for appen.'
  ),
  body: L(
    `<h2>1. Acceptance</h2>
<p>By downloading or using Transaction you accept these terms. If you do not agree, do not use the app.</p>

<h2>2. Licence</h2>
<p>You get a personal, non-exclusive, non-transferable licence to use Transaction on devices you own or control, in line with the rules of the App Store or Google Play you got it from. The licence gives you no ownership of the app. You may not resell, rent, decompile or try to derive the source code, except where mandatory law allows it.</p>

<h2>3. Your account</h2>
<p>You can use the app without an account. Until you create one, what you save stays only on your phone, and is lost if the app is deleted. If you create an account, you are responsible for access to the email address or sign-in method you choose. You can have your account deleted at any time. See <a href="/delete-account/">Delete your account</a>.</p>

<h2>4. Your content</h2>
<p>What you save is yours. You grant only the permission needed to store it, sync it between your devices, and show it to the members of any shared space you choose to share it with.</p>

<h2>5. A record of payments, not a bank</h2>
<p>Transaction records what you and your automations tell it. Exchange rates, fees, totals and “who owes whom” are estimates for your own overview, not financial, tax or legal advice, and not a statement from your bank. Automations can miss a payment or catch one twice. Check anything important against your bank.</p>

<h2>6. How the app may not be used</h2>
<p>Do not use Transaction for unlawful content, to harass others, or to try to reach other people’s data or spaces. An account that does may be closed.</p>

<h2>7. Availability</h2>
<p>Transaction is run as a private project. There is no guaranteed uptime, no support deadline and no service-level agreement. The app works offline and keeps payments on your phone until they sync, but do not rely on it as the only place something important is kept. You can export your data at any time.</p>

<h2>8. No warranty</h2>
<p>Transaction is provided “as is”, without warranties of any kind, to the extent the law allows. Your mandatory rights as a consumer in the country where you live are not affected.</p>

<h2>9. Limitation of liability</h2>
<p>To the extent the law allows, the developer is not liable for indirect loss, consequential loss or lost data arising from the use of Transaction.</p>

<h2>10. Ending</h2>
<p>You can stop using the app and have your account deleted at any time. The licence can be ended if these terms are seriously breached.</p>

<h2>11. Apple</h2>
<p>If you got the app from the App Store: these terms are between you and the developer, not Apple. Apple is not responsible for Transaction or its content, and has no obligation to provide support. Apple and its subsidiaries are third-party beneficiaries of these terms and may enforce them against you. The developer, not Apple, is responsible for any product liability claim, any failure to conform to legal requirements, and any claim under consumer protection or data protection law.</p>

<h2>12. Google Play</h2>
<p>If you got the app from Google Play: these terms are between you and the developer, not Google, and Google is not responsible for the app.</p>

<h2>13. Other companies’ services</h2>
<p>Transaction can work with Apple Wallet, Apple’s Shortcuts app, your bank’s notifications and MobilePay receipts, but is not made by, endorsed by or connected to Apple, Google, your bank or MobilePay. Their names belong to their owners.</p>

<h2>14. Governing law</h2>
<p>Danish law applies, and disputes are settled in Denmark, where the developer lives. If you live in another country, its mandatory consumer rules still protect you, including where they let you use the courts of your own country.</p>

<h2>15. Changes</h2>
<p>These terms may be updated. The date at the top changes. Using the app after a change means you accept it.</p>

<h2>16. Contact</h2>
<p>${mail}</p>`,
    `<h2>1. Accept</h2>
<p>Ved at downloade eller bruge Transaction accepterer du disse vilkår. Er du ikke enig, så lad være med at bruge appen.</p>

<h2>2. Licens</h2>
<p>Du får en personlig, ikke-eksklusiv, ikke-overdragelig licens til at bruge Transaction på enheder, du ejer eller kontrollerer, i overensstemmelse med reglerne i den App Store eller Google Play, du har hentet den fra. Licensen giver dig ikke ejerskab over appen. Du må ikke videresælge, udleje, dekompilere eller forsøge at udlede kildekoden, bortset fra hvad ufravigelig lovgivning tillader.</p>

<h2>3. Din konto</h2>
<p>Du kan bruge appen uden en konto. Indtil du opretter en, bliver det, du gemmer, kun på din telefon, og det går tabt, hvis appen slettes. Opretter du en konto, er du ansvarlig for adgangen til den e-mailadresse eller adgangsmetode, du vælger. Du kan til enhver tid få din konto slettet. Se <a href="/delete-account/">Slet din konto</a>.</p>

<h2>4. Dit indhold</h2>
<p>Det, du gemmer, er dit. Du giver kun den tilladelse, der er nødvendig for at gemme det, synkronisere det mellem dine enheder og vise det til medlemmerne af de delte rum, du vælger at dele det i.</p>

<h2>5. En oversigt over betalinger, ikke en bank</h2>
<p>Transaction registrerer det, du og dine automatiseringer fortæller den. Valutakurser, gebyrer, totaler og “hvem skylder hvem” er skøn til dit eget overblik, ikke økonomisk, skattemæssig eller juridisk rådgivning, og ikke en opgørelse fra din bank. Automatiseringer kan overse en betaling eller fange den to gange. Tjek alt vigtigt mod din bank.</p>

<h2>6. Sådan må appen ikke bruges</h2>
<p>Brug ikke Transaction til ulovligt indhold, til at chikanere andre eller til at forsøge at få adgang til andres data eller rum. En konto, der gør det, kan blive lukket.</p>

<h2>7. Tilgængelighed</h2>
<p>Transaction drives som et privat projekt. Der er ingen garanteret oppetid, ingen supportfrist og ingen aftale om serviceniveau. Appen virker offline og gemmer betalinger på din telefon, indtil de synkroniseres, men brug den ikke som eneste sted, hvor noget vigtigt opbevares. Du kan eksportere dine data når som helst.</p>

<h2>8. Ingen garanti</h2>
<p>Transaction leveres “som den er”, uden garantier af nogen art, i det omfang loven tillader det. Dine ufravigelige rettigheder som forbruger i det land, du bor i, berøres ikke.</p>

<h2>9. Ansvarsbegrænsning</h2>
<p>I det omfang loven tillader det, er udvikleren ikke ansvarlig for indirekte tab, følgeskader eller tabte data som følge af brugen af Transaction.</p>

<h2>10. Ophør</h2>
<p>Du kan til enhver tid stoppe med at bruge appen og få din konto slettet. Licensen kan bringes til ophør, hvis vilkårene overtrædes væsentligt.</p>

<h2>11. Apple</h2>
<p>Har du hentet appen i App Store: disse vilkår er indgået mellem dig og udvikleren, ikke Apple. Apple er ikke ansvarlig for Transaction eller dens indhold og har ingen pligt til at yde support. Apple og Apples datterselskaber er tredjemandsberettigede under disse vilkår og kan håndhæve dem over for dig. Ved krav om produktansvar, manglende overholdelse af lovkrav eller krav efter forbruger- eller databeskyttelseslovgivning er det udvikleren, ikke Apple, der er ansvarlig.</p>

<h2>12. Google Play</h2>
<p>Har du hentet appen i Google Play: disse vilkår er indgået mellem dig og udvikleren, ikke Google, og Google er ikke ansvarlig for appen.</p>

<h2>13. Andre virksomheders tjenester</h2>
<p>Transaction kan arbejde sammen med Apple Wallet, Apples Genveje-app, din banks notifikationer og MobilePay-kvitteringer, men er ikke lavet af, godkendt af eller forbundet med Apple, Google, din bank eller MobilePay. Navnene tilhører deres ejere.</p>

<h2>14. Lovvalg</h2>
<p>Dansk ret gælder, og tvister afgøres i Danmark, hvor udvikleren bor. Bor du i et andet land, beskytter landets ufravigelige forbrugerregler dig stadig, også hvor de giver dig ret til at bruge domstolene i dit eget land.</p>

<h2>15. Ændringer</h2>
<p>Vilkårene kan blive opdateret. Datoen øverst ændres. Bruger du appen efter en ændring, accepterer du den.</p>

<h2>16. Kontakt</h2>
<p>${mail}</p>`
  ),
};

export const support = {
  title: L('Support', 'Support'),
  lede: L(
    `Write to ${mail}. Tell us your phone model, its iOS or Android version, the app version (Settings → About App), and what you did just before the problem appeared.`,
    `Skriv til ${mail}. Fortæl os din telefonmodel, dens iOS- eller Android-version, appens version (Indstillinger → Om App), og hvad du gjorde lige før problemet opstod.`
  ),
  quickTitle: L('Quick answers', 'Hurtige svar'),
  quick: [
    {
      q: L('The Wallet automation does nothing', 'Wallet-automatiseringen gør ingenting'),
      a: L(
        'Check that the card you paid with is ticked in the automation, and that it is set to run immediately. Wallet automations only fire on Apple Pay taps. Test with a small, real payment, then look at Settings → Apple Pay Shortcut → Shortcut diagnostics.',
        'Tjek, at det kort, du betalte med, er valgt i automatiseringen, og at den er sat til at køre med det samme. Wallet-automatiseringer kører kun ved Apple Pay-betalinger. Test med en lille, rigtig betaling, og kig så i Indstillinger → Apple Pay-genvej → Genvejs-diagnostik.'
      ),
    },
    {
      q: L('Nothing appears when I pay with my Apple Watch', 'Der sker ingenting, når jeg betaler med mit Apple Watch'),
      a: L(
        'Switch to “Auto-save in background”. The other two modes need the iPhone unlocked and the app already open in the background, so a locked phone stops them.',
        'Skift til “Gem automatisk i baggrunden”. De to andre tilstande kræver, at iPhonen er låst op, og at appen allerede er åben i baggrunden, så en låst telefon stopper dem.'
      ),
    },
    {
      q: L('A payment shows up twice', 'En betaling vises to gange'),
      a: L(
        'Two automations caught it. Keep one automation per payment, and delete the extra payment. The app marks it as possibly the same payment twice.',
        'To automatiseringer fangede den. Hav én automatisering pr. betaling, og slet den ekstra betaling. Appen markerer den som måske den samme betaling to gange.'
      ),
    },
    {
      q: L('My payments are not on my other phone yet', 'Mine betalinger er ikke på min anden telefon endnu'),
      a: L(
        'Payments made offline are kept on the phone and sync when it is online again. Open the list and tap sync if you are in a hurry.',
        'Betalinger, der er lavet offline, gemmes på telefonen og synkroniseres, når den er online igen. Åbn listen, og tryk synkronisér, hvis du har travlt.'
      ),
    },
    {
      q: L('I want my account deleted', 'Jeg vil have min konto slettet'),
      a: L('Follow the steps on the delete page.', 'Følg trinnene på slettesiden.'),
      link: 'delete-account',
    },
  ],
  moreTitle: L('Looking for something else?', 'Leder du efter noget andet?'),
};

export const deletion = {
  title: L('Delete your account', 'Slet din konto'),
  lede: L(
    'You can have your Transaction account and all your data deleted at any time. It is free. In the app, go to Settings → User Information → Delete account. Your account closes at once, and its data is deleted within a day. You can also ask by email, without the app installed.',
    'Du kan til enhver tid få din Transaction-konto og alle dine data slettet. Det er gratis. I appen går du til Indstillinger → Bruger Information → Slet konto. Din konto lukkes med det samme, og dens data slettes inden for et døgn. Du kan også bede om det på e-mail uden at have appen installeret.'
  ),
  stepsTitle: L('How to ask', 'Sådan beder du om det'),
  steps: [
    L(`Write to ${mail} from the email address you sign in with.`, `Skriv til ${mail} fra den e-mailadresse, du bruger i appen.`),
    L('Use the subject “Delete my account”. You do not need to give a reason.', 'Skriv “Slet min konto” i emnefeltet. Du behøver ikke give en grund.'),
    L('You get a reply when it is done, within 30 days, usually much sooner.', 'Du får svar, når det er gjort, inden for 30 dage, som regel meget hurtigere.'),
  ],
  goneTitle: L('What is deleted', 'Det, der slettes'),
  gone: [
    L('Your account at the sign-in service, your email address and your Sharing ID.', 'Din konto hos adgangstjenesten, din e-mailadresse og dit Delings-ID.'),
    L('All your transactions, shared expenses and incoming payments, with their photos, places, notes, tags, receipt lines and imported details.', 'Alle dine transaktioner, fælles udgifter og indgående betalinger, med deres billeder, placeringer, noter, tags, kvitteringslinjer og importerede oplysninger.'),
    L('Your groups, templates, accounts, payment methods and fee rules.', 'Dine grupper, skabeloner, konti, betalingsmetoder og gebyrregler.'),
  ],
  keptTitle: L('What is not deleted, or not right away', 'Det, der ikke slettes, eller ikke med det samme'),
  kept: [
    L('Posts and comments you shared in a shared space stay there for the other members, under your name. A shared space you own passes to the member who joined it first, or is deleted if nobody else is in it.', 'Opslag og kommentarer, du har delt i et delt rum, bliver stående for de andre medlemmer under dit navn. Et delt rum, du ejer, går videre til det medlem, der kom med først, eller slettes, hvis ingen andre er med.'),
    L('Database backups expire on their own after 14 days, and deleted photo files after 7.', 'Sikkerhedskopier af databasen udløber af sig selv efter 14 dage, og slettede billedfiler efter 7.'),
    L('What is only on your own phone, such as copies of your payments and your prefilled titles, merchants and payers: deleting from the app removes it; otherwise delete the app. Photos you saved to your photo library stay there.', 'Det, der kun ligger på din egen telefon, fx kopier af dine betalinger og dine forudfyldte titler, butikker og betalere: sletter du fra appen, forsvinder det; ellers skal du slette appen. Billeder, du har gemt i dit fotobibliotek, bliver der.'),
    L('Crash reports expire on their own at the error-reporting service.', 'Fejlrapporter udløber af sig selv hos fejlrapporteringstjenesten.'),
  ],
  exportTip: L(
    'Want to keep your history? Export it first under Settings → Export data. You get CSV files you can open in any spreadsheet. Photos are not included, so save the ones you want first.',
    'Vil du beholde din historik? Eksportér den først under Indstillinger → Eksportér data. Du får CSV-filer, som kan åbnes i ethvert regneark. Billeder er ikke med, så gem dem, du vil have, først.'
  ),
};

export const notFound = {
  title: L('This page does not exist.', 'Den side findes ikke.'),
  body: L('Maybe it was never saved. Try the front page.', 'Måske blev den aldrig gemt. Prøv forsiden.'),
  home: L('Go to the front page', 'Gå til forsiden'),
};
