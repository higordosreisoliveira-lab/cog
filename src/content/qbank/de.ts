// qbank — German translation of pt.ts
import type { QbankText } from './pt';

const t: Record<string, QbankText> = {
  // 0 · Lesefalle
  'trick-sold-but-6': { prompt: 'Ein Laden hatte 20 Glühbirnen. Er hat alle bis auf 6 verkauft. Wie viele Glühbirnen sind noch im Laden?' },
  'trick-apples-take': { prompt: 'Auf einem Tisch liegen 3 Äpfel, und du nimmst 2 davon. Wie viele Äpfel hast du?' },
  'trick-fingers-hands': { prompt: 'An 2 Händen sind 10 Finger. Wie viele Finger sind an 10 Händen?' },
  'trick-family-brother': { prompt: 'Eine Familie hat 4 Töchter, und jede von ihnen hat 1 Bruder. Wie viele Kinder hat die Familie insgesamt?' },

  // 1 · Positionsfalle
  'order-race-pass-third': {
    prompt: 'Bei einem Rennen überholst du die Person auf dem 3. Platz, und gleich danach überholt dich jemand anderes. Auf welchem Platz bist du jetzt?',
    options: ['2. Platz', '3. Platz', '4. Platz', '5. Platz', 'Kommt darauf an'],
  },
  'order-queue-ahead-behind': { prompt: 'In einer Schlange stehen 5 Personen vor dir und 3 Personen hinter dir. Wie viele Personen stehen in der Schlange?' },
  'order-queue-both-ends': { prompt: 'In einer Schlange steht eine Person von vorne gezählt an 4. Stelle und von hinten gezählt ebenfalls an 4. Stelle. Wie viele Personen stehen in der Schlange?' },
  'order-fence-posts': { prompt: 'Ein gerader Zaun ist 100 Meter lang und hat alle 10 Meter einen Pfosten, auch an beiden Enden. Wie viele Pfosten hat der Zaun?' },

  // 2 · räumliches Zählen
  'space-pyramid-edges': { prompt: 'Wie viele Kanten hat eine Pyramide mit quadratischer Grundfläche?' },
  'space-die-visible-faces': { prompt: 'Wenn du einen Spielwürfel von einem einzigen Standpunkt aus betrachtest: Wie viele Seiten kannst du höchstens gleichzeitig sehen?' },
  'space-cube-27': { prompt: 'Ein massiver Würfel wird aus gleich großen kleinen Würfeln gebaut, 3 entlang jeder Kante. Wie viele kleine Würfel werden verwendet?' },
  'space-cube-cut-faces': { prompt: 'Ein massiver, würfelförmiger Block wird mit einem einzigen geraden Schnitt parallel zu einer Seitenfläche halbiert. Wie viele Flächen hat jede Hälfte?' },

  // 28 · Syllogismus mit erfundenen Wörtern
  'syl-none': {
    prompt: 'Alle Vruks sind Plents. Kein Plent ist ein Snib. Welche Aussage ist zwingend wahr?',
    options: ['Kein Vruk ist ein Snib', 'Einige Vruks sind Snibs', 'Alle Plents sind Vruks', 'Einige Plents sind keine Vruks', 'Alle Snibs sind Plents'],
  },
  'syl-some': {
    prompt: 'Alle Krels sind Bofs. Einige Wems sind Krels. Welche Aussage ist zwingend wahr?',
    options: ['Alle Wems sind Bofs', 'Einige Wems sind Bofs', 'Alle Bofs sind Krels', 'Kein Wem ist ein Bof', 'Einige Krels sind keine Wems'],
  },
  'syl-shared-middle': {
    prompt: 'Alle Glorps sind Nemps. Alle Tafs sind Nemps. Welche Aussage ist zwingend wahr?',
    options: ['Alle Glorps sind Tafs', 'Einige Glorps sind Tafs', 'Alle Nemps sind Glorps', 'Kein Glorp ist ein Taf', 'Jeder Taf ist ein Nemp'],
  },
  'syl-chain': {
    prompt: 'Alle Pids sind Zungs. Alle Zungs sind Hovs. Welche Aussage ist zwingend wahr?',
    options: ['Alle Hovs sind Pids', 'Alle Zungs sind Pids', 'Alle Pids sind Hovs', 'Einige Hovs sind keine Zungs', 'Kein Hov ist ein Pid'],
  },

  // 29 · verbale Analogie
  'analogy-scissors-pen': { prompt: 'Schere verhält sich zu Schneiden wie Kugelschreiber zu …', options: ['Papier', 'Lesen', 'Tinte', 'Schreiben', 'Bleistift'] },
  'analogy-eye-ear': { prompt: 'Auge verhält sich zu Sehen wie Ohr zu …', options: ['Klang', 'Sprechen', 'Hören', 'Musik', 'Nase'] },
  'analogy-bird-bee': { prompt: 'Vogel verhält sich zu Nest wie Biene zu …', options: ['Bienenstock', 'Honig', 'Blume', 'Flügel', 'Insekt'] },
  'analogy-petal-page': { prompt: 'Blütenblatt verhält sich zu Blume wie Seite zu …', options: ['Lesen', 'Papier', 'Buchstabe', 'Wort', 'Buch'] },

  // 31 · Reihenfolge
  'rank-boxes-heaviest': {
    prompt: 'Die blaue Kiste ist schwerer als die grüne Kiste. Die rote Kiste ist leichter als die grüne. Welche Kiste ist am schwersten?',
    options: ['Die grüne', 'Die blaue', 'Die rote', 'Die blaue und die rote', 'Lässt sich nicht sagen'],
  },
  'rank-trains-unknown': {
    prompt: 'Zug A ist schneller als Zug B. Zug C ist schneller als Zug B. Welcher Zug ist am schnellsten?',
    options: ['Zug A', 'Zug B', 'Zug C', 'A und C gleich schnell', 'Lässt sich nicht sagen'],
  },
  'rank-cars-first': {
    prompt: 'Bei einem Rennen mit drei Autos kam das schwarze Auto nach dem blauen ins Ziel, und das blaue kam nach dem weißen ins Ziel. Welches Auto kam als Erstes ins Ziel?',
    options: ['Das blaue', 'Das schwarze', 'Das blaue und das weiße', 'Das weiße', 'Lässt sich nicht sagen'],
  },
  'rank-books-thinnest': {
    prompt: 'Das grüne Buch ist dicker als das blaue. Das blaue Buch ist dünner als das rote. Welches Buch ist am dünnsten?',
    options: ['Das blaue', 'Das grüne', 'Das rote', 'Das grüne und das rote', 'Lässt sich nicht sagen'],
  },

  // 32 · Prozentrechnung
  'pct-15-of-60': { prompt: 'Wie viel sind 15% von 60?' },
  'pct-35-of-40': { prompt: 'Wie viel sind 35% von 40?' },
  'pct-30-of-70': { prompt: 'Wie viel sind 30% von 70?' },
  'pct-15-of-40': { prompt: 'Wie viel sind 15% von 40?' },

  // 33 · Was passt nicht?
  'odd-eagle': { prompt: 'Welches Wort passt nicht zu den anderen?', options: ['Hund', 'Katze', 'Pferd', 'Adler', 'Kuh'] },
  'odd-fork': { prompt: 'Welches Wort passt nicht zu den anderen?', options: ['Tisch', 'Gabel', 'Stuhl', 'Sofa', 'Bett'] },
  'odd-hammer': { prompt: 'Welches Wort passt nicht zu den anderen?', options: ['Hammer', 'Klavier', 'Trommel', 'Gitarre', 'Flöte'] },
  'odd-circle': { prompt: 'Welches Wort passt nicht zu den anderen?', options: ['Würfel', 'Kugel', 'Pyramide', 'Zylinder', 'Kreis'] },

  // 36 · kognitive Reflexion: Summe und Differenz
  'crt-bike-helmet': {
    prompt: 'Ein Fahrrad und ein Helm kosten zusammen 120,00 €. Das Fahrrad kostet 100,00 € mehr als der Helm. Wie viel kostet der Helm?',
    options: ['20,00 €', '15,00 €', '10,00 €', '5,00 €', '12,00 €'],
  },
  'crt-backpack-case': {
    prompt: 'Ein Rucksack und ein Federmäppchen kosten zusammen 70,00 €. Der Rucksack kostet 60,00 € mehr als das Federmäppchen. Wie viel kostet das Federmäppchen?',
    options: ['5,00 €', '10,00 €', '6,00 €', '7,00 €', '1,00 €'],
  },
  'crt-bucket-water': {
    prompt: 'Ein mit Wasser gefüllter Eimer wiegt 13 kg. Das Wasser wiegt 12 kg mehr als der leere Eimer. Wie viel wiegt der leere Eimer?',
    options: ['1 kg', '2 kg', '250 g', '500 g', '100 g'],
  },
  'crt-mother-son': {
    prompt: 'Eine Mutter und ihr Sohn sind zusammen 36 Jahre alt. Die Mutter ist 30 Jahre älter als der Sohn. Wie alt ist der Sohn?',
    options: ['6 Jahre', '5 Jahre', '4 Jahre', '2 Jahre', '3 Jahre'],
  },

  // 38 · kognitive Reflexion: trügerische Proportion
  'crt-robots-toys': {
    prompt: 'Wenn 3 Roboter in 3 Minuten 3 Spielzeuge zusammenbauen, wie lange brauchen 60 Roboter für 60 Spielzeuge?',
    options: ['1 Minute', '2 Minuten', '3 Minuten', '20 Minuten', '60 Minuten'],
  },
  'crt-algae-lake': {
    prompt: 'Die Algen in einem See verdoppeln jeden Tag ihre Fläche. In 30 Tagen bedecken sie den ganzen See. In wie vielen Tagen bedecken sie die Hälfte des Sees?',
    options: ['10 Tage', '15 Tage', '20 Tage', '29 Tage', '30 Tage'],
  },
  'crt-log-cuts': {
    prompt: 'Einen Baumstamm in 3 Stücke zu sägen dauert 10 Minuten. Wenn jeder Schnitt immer gleich lange dauert, wie lange dauert es dann, einen gleichen Stamm in 6 Stücke zu sägen?',
    options: ['12 Minuten', '15 Minuten', '18 Minuten', '20 Minuten', '25 Minuten'],
  },
  'crt-snail-well': {
    prompt: 'Eine Schnecke sitzt am Boden eines 10 Meter tiefen Brunnens. Tagsüber klettert sie 3 Meter nach oben, nachts rutscht sie 2 Meter zurück. In wie vielen Tagen erreicht sie den oberen Rand des Brunnens?',
    options: ['8 Tage', '5 Tage', '7 Tage', '9 Tage', '10 Tage'],
  },
};

export default t;
