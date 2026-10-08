// qbank — Dutch translation of pt.ts
import type { QbankText } from './pt';

const t: Record<string, QbankText> = {
  // 0 · leesvalkuil
  'trick-sold-but-6': { prompt: 'Een winkel had 20 gloeilampen. Hij verkocht ze allemaal, behalve 6. Hoeveel gloeilampen zijn er nog in de winkel?' },
  'trick-apples-take': { prompt: 'Er liggen 3 appels op een tafel en je pakt er 2. Hoeveel appels heb je?' },
  'trick-fingers-hands': { prompt: 'Aan 2 handen zitten 10 vingers. Hoeveel vingers zitten er aan 10 handen?' },
  'trick-family-brother': { prompt: 'Een gezin heeft 4 dochters, en elk van hen heeft 1 broer. Hoeveel kinderen heeft het gezin in totaal?' },

  // 1 · positievalkuil
  'order-race-pass-third': {
    prompt: 'In een race haal je degene in die op de 3e plaats ligt, en meteen daarna haalt een andere loper jou in. Op welke plaats lig je nu?',
    options: ['2e', '3e', '4e', '5e', 'Hangt ervan af'],
  },
  'order-queue-ahead-behind': { prompt: 'In een rij staan 5 mensen voor je en 3 mensen achter je. Hoeveel mensen staan er in de rij?' },
  'order-queue-both-ends': { prompt: 'In een rij staat iemand van voren geteld op de 4e plek en van achteren geteld ook op de 4e plek. Hoeveel mensen staan er in de rij?' },
  'order-fence-posts': { prompt: 'Een recht hek is 100 meter lang, met om de 10 meter een paal, ook aan beide uiteinden. Hoeveel palen heeft het hek?' },

  // 2 · ruimtelijk tellen
  'space-pyramid-edges': { prompt: 'Hoeveel ribben heeft een piramide met een vierkant grondvlak?' },
  'space-die-visible-faces': { prompt: 'Als je vanuit één standpunt naar een dobbelsteen kijkt, hoeveel vlakken kun je dan maximaal tegelijk zien?' },
  'space-cube-27': { prompt: 'Een massieve kubus wordt gebouwd uit gelijke kleine kubusjes, 3 langs elke ribbe. Hoeveel kubusjes worden er gebruikt?' },
  'space-cube-cut-faces': { prompt: 'Een massief kubusvormig blok wordt met één rechte snede, evenwijdig aan een van de vlakken, doormidden gesneden. Hoeveel vlakken heeft elke helft?' },

  // 28 · syllogisme met verzonnen woorden
  'syl-none': {
    prompt: 'Alle Vruks zijn Plents. Geen enkele Plent is een Snib. Welke bewering is in elk geval waar?',
    options: ['Geen enkele Vruk is een Snib', 'Sommige Vruks zijn Snibs', 'Alle Plents zijn Vruks', 'Sommige Plents zijn geen Vruks', 'Alle Snibs zijn Plents'],
  },
  'syl-some': {
    prompt: 'Alle Krels zijn Bofs. Sommige Wems zijn Krels. Welke bewering is in elk geval waar?',
    options: ['Alle Wems zijn Bofs', 'Sommige Wems zijn Bofs', 'Alle Bofs zijn Krels', 'Geen enkele Wem is een Bof', 'Sommige Krels zijn geen Wems'],
  },
  'syl-shared-middle': {
    prompt: 'Alle Glorps zijn Nemps. Alle Tafs zijn Nemps. Welke bewering is in elk geval waar?',
    options: ['Alle Glorps zijn Tafs', 'Sommige Glorps zijn Tafs', 'Alle Nemps zijn Glorps', 'Geen enkele Glorp is een Taf', 'Elke Taf is een Nemp'],
  },
  'syl-chain': {
    prompt: 'Alle Pids zijn Zungs. Alle Zungs zijn Hovs. Welke bewering is in elk geval waar?',
    options: ['Alle Hovs zijn Pids', 'Alle Zungs zijn Pids', 'Alle Pids zijn Hovs', 'Sommige Hovs zijn geen Zungs', 'Geen enkele Hov is een Pid'],
  },

  // 29 · verbale analogie
  'analogy-scissors-pen': { prompt: 'Schaar staat tot knippen als pen staat tot…', options: ['Papier', 'Lezen', 'Inkt', 'Schrijven', 'Potlood'] },
  'analogy-eye-ear': { prompt: 'Oog staat tot zien als oor staat tot…', options: ['Geluid', 'Praten', 'Horen', 'Muziek', 'Neus'] },
  'analogy-bird-bee': { prompt: 'Vogel staat tot nest als bij staat tot…', options: ['Bijenkorf', 'Honing', 'Bloem', 'Vleugel', 'Insect'] },
  'analogy-petal-page': { prompt: 'Bloemblad staat tot bloem als bladzijde staat tot…', options: ['Lezen', 'Papier', 'Letter', 'Woord', 'Boek'] },

  // 31 · volgorde
  'rank-boxes-heaviest': {
    prompt: 'De blauwe doos is zwaarder dan de groene doos. De rode doos is lichter dan de groene. Welke doos is het zwaarst?',
    options: ['De groene', 'De blauwe', 'De rode', 'De blauwe en de rode', 'Dat valt niet te zeggen'],
  },
  'rank-trains-unknown': {
    prompt: 'Trein A is sneller dan trein B. Trein C is sneller dan trein B. Welke trein is het snelst?',
    options: ['Trein A', 'Trein B', 'Trein C', 'A en C even snel', 'Dat valt niet te zeggen'],
  },
  'rank-cars-first': {
    prompt: 'Bij een race met drie auto’s kwam de zwarte auto na de blauwe over de finish, en de blauwe kwam na de witte over de finish. Welke auto kwam als eerste over de finish?',
    options: ['De blauwe', 'De zwarte', 'De blauwe en de witte', 'De witte', 'Dat valt niet te zeggen'],
  },
  'rank-books-thinnest': {
    prompt: 'Het groene boek is dikker dan het blauwe. Het blauwe boek is dunner dan het rode. Welk boek is het dunst?',
    options: ['Het blauwe', 'Het groene', 'Het rode', 'Het groene en het rode', 'Dat valt niet te zeggen'],
  },

  // 32 · percentage
  'pct-15-of-60': { prompt: 'Hoeveel is 15% van 60?' },
  'pct-35-of-40': { prompt: 'Hoeveel is 35% van 40?' },
  'pct-30-of-70': { prompt: 'Hoeveel is 30% van 70?' },
  'pct-15-of-40': { prompt: 'Hoeveel is 15% van 40?' },

  // 33 · de vreemde eend
  'odd-eagle': { prompt: 'Welk woord hoort niet in het rijtje?', options: ['Hond', 'Kat', 'Paard', 'Adelaar', 'Koe'] },
  'odd-fork': { prompt: 'Welk woord hoort niet in het rijtje?', options: ['Tafel', 'Vork', 'Stoel', 'Sofa', 'Bed'] },
  'odd-hammer': { prompt: 'Welk woord hoort niet in het rijtje?', options: ['Hamer', 'Piano', 'Trommel', 'Gitaar', 'Fluit'] },
  'odd-circle': { prompt: 'Welk woord hoort niet in het rijtje?', options: ['Kubus', 'Bol', 'Piramide', 'Cilinder', 'Cirkel'] },

  // 36 · cognitieve reflectie: som en verschil
  'crt-bike-helmet': {
    prompt: 'Een fiets en een helm kosten samen € 120,00. De fiets kost € 100,00 meer dan de helm. Hoeveel kost de helm?',
    options: ['€ 20,00', '€ 15,00', '€ 10,00', '€ 5,00', '€ 12,00'],
  },
  'crt-backpack-case': {
    prompt: 'Een rugzak en een etui kosten samen € 70,00. De rugzak kost € 60,00 meer dan het etui. Hoeveel kost het etui?',
    options: ['€ 5,00', '€ 10,00', '€ 6,00', '€ 7,00', '€ 1,00'],
  },
  'crt-bucket-water': {
    prompt: 'Een emmer vol water weegt 13 kg. Het water weegt 12 kg meer dan de lege emmer. Hoeveel weegt de lege emmer?',
    options: ['1 kg', '2 kg', '250 g', '500 g', '100 g'],
  },
  'crt-mother-son': {
    prompt: 'Een moeder en haar zoon zijn samen 36 jaar oud. De moeder is 30 jaar ouder dan de zoon. Hoe oud is de zoon?',
    options: ['6 jaar', '5 jaar', '4 jaar', '2 jaar', '3 jaar'],
  },

  // 38 · cognitieve reflectie: misleidende verhouding
  'crt-robots-toys': {
    prompt: 'Als 3 robots in 3 minuten 3 stuks speelgoed in elkaar zetten, hoelang doen 60 robots er dan over om 60 stuks speelgoed in elkaar te zetten?',
    options: ['1 minuut', '2 minuten', '3 minuten', '20 minuten', '60 minuten'],
  },
  'crt-algae-lake': {
    prompt: 'De algen in een meer verdubbelen elke dag in oppervlakte. In 30 dagen bedekken ze het hele meer. In hoeveel dagen bedekken ze de helft van het meer?',
    options: ['10 dagen', '15 dagen', '20 dagen', '29 dagen', '30 dagen'],
  },
  'crt-log-cuts': {
    prompt: 'Een boomstam in 3 stukken zagen duurt 10 minuten. Als elke zaagsnede altijd even lang duurt, hoelang duurt het dan om een gelijke stam in 6 stukken te zagen?',
    options: ['12 minuten', '15 minuten', '18 minuten', '20 minuten', '25 minuten'],
  },
  'crt-snail-well': {
    prompt: 'Een slak zit op de bodem van een put van 10 meter diep. Overdag klimt hij 3 meter omhoog en ’s nachts glijdt hij 2 meter terug. In hoeveel dagen bereikt hij de bovenrand van de put?',
    options: ['8 dagen', '5 dagen', '7 dagen', '9 dagen', '10 dagen'],
  },
};

export default t;
