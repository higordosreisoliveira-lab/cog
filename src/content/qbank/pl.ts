// qbank — Polish translation of pt.ts
import type { QbankText } from './pt';

const t: Record<string, QbankText> = {
  // 0 · pułapka w treści
  'trick-sold-but-6': { prompt: 'Sklep miał 20 żarówek. Sprzedał wszystkie oprócz 6. Ile żarówek zostało w sklepie?' },
  'trick-apples-take': { prompt: 'Na stole leżą 3 jabłka, a ty bierzesz 2 z nich. Ile jabłek masz?' },
  'trick-fingers-hands': { prompt: 'Na 2 rękach jest 10 palców. Ile palców jest na 10 rękach?' },
  'trick-family-brother': { prompt: 'Rodzina ma 4 córki, a każda z nich ma 1 brata. Ile dzieci jest w tej rodzinie w sumie?' },

  // 1 · pułapka z kolejnością
  'order-race-pass-third': {
    prompt: 'W wyścigu wyprzedzasz osobę na 3. miejscu, a zaraz potem inny zawodnik wyprzedza ciebie. Które miejsce teraz zajmujesz?',
    options: ['2.', '3.', '4.', '5.', 'To zależy'],
  },
  'order-queue-ahead-behind': { prompt: 'W kolejce przed tobą stoi 5 osób, a za tobą 3 osoby. Ile osób stoi w kolejce?' },
  'order-queue-both-ends': { prompt: 'W kolejce pewna osoba jest 4. licząc od przodu i zarazem 4. licząc od końca. Ile osób stoi w kolejce?' },
  'order-fence-posts': { prompt: 'Prosty płot ma 100 metrów długości, a słupek stoi co 10 metrów, także na obu końcach. Ile słupków ma płot?' },

  // 2 · liczenie przestrzenne
  'space-pyramid-edges': { prompt: 'Ile krawędzi ma ostrosłup o podstawie kwadratu?' },
  'space-die-visible-faces': { prompt: 'Patrząc na kostkę do gry z jednego miejsca, ile najwięcej jej ścian możesz zobaczyć naraz?' },
  'space-cube-27': { prompt: 'Lity sześcian złożono z jednakowych małych kostek, po 3 na każdej krawędzi. Ile małych kostek użyto?' },
  'space-cube-cut-faces': { prompt: 'Lity klocek w kształcie sześcianu przecięto na pół jednym prostym cięciem, równoległym do jednej ze ścian. Ile ścian ma każda połowa?' },

  // 28 · sylogizm z wymyślonymi słowami
  'syl-none': {
    prompt: 'Wszystkie Vruki są Plentami. Żaden Plent nie jest Snibem. Które zdanie jest na pewno prawdziwe?',
    options: ['Żaden Vruk nie jest Snibem', 'Niektóre Vruki są Snibami', 'Wszystkie Plenty są Vrukami', 'Niektóre Plenty nie są Vrukami', 'Wszystkie Sniby są Plentami'],
  },
  'syl-some': {
    prompt: 'Wszystkie Krele są Bofami. Niektóre Wemy są Krelami. Które zdanie jest na pewno prawdziwe?',
    options: ['Wszystkie Wemy są Bofami', 'Niektóre Wemy są Bofami', 'Wszystkie Bofy są Krelami', 'Żaden Wem nie jest Bofem', 'Niektóre Krele nie są Wemami'],
  },
  'syl-shared-middle': {
    prompt: 'Wszystkie Glorpy są Nempami. Wszystkie Tafy są Nempami. Które zdanie jest na pewno prawdziwe?',
    options: ['Wszystkie Glorpy są Tafami', 'Niektóre Glorpy są Tafami', 'Wszystkie Nempy są Glorpami', 'Żaden Glorp nie jest Tafem', 'Każdy Taf jest Nempem'],
  },
  'syl-chain': {
    prompt: 'Wszystkie Pidy są Zungami. Wszystkie Zungi są Hovami. Które zdanie jest na pewno prawdziwe?',
    options: ['Wszystkie Hovy są Pidami', 'Wszystkie Zungi są Pidami', 'Wszystkie Pidy są Hovami', 'Niektóre Hovy nie są Zungami', 'Żaden Hov nie jest Pidem'],
  },

  // 29 · analogia słowna
  'analogy-scissors-pen': { prompt: 'Nożyczki mają się do cięcia tak, jak długopis do…', options: ['Papieru', 'Czytania', 'Tuszu', 'Pisania', 'Ołówka'] },
  'analogy-eye-ear': { prompt: 'Oko ma się do widzenia tak, jak ucho do…', options: ['Dźwięku', 'Mówienia', 'Słyszenia', 'Muzyki', 'Nosa'] },
  'analogy-bird-bee': { prompt: 'Ptak ma się do gniazda tak, jak pszczoła do…', options: ['Ula', 'Miodu', 'Kwiatu', 'Skrzydła', 'Owada'] },
  'analogy-petal-page': { prompt: 'Płatek ma się do kwiatu tak, jak strona do…', options: ['Czytania', 'Papieru', 'Litery', 'Słowa', 'Książki'] },

  // 31 · porządkowanie
  'rank-boxes-heaviest': {
    prompt: 'Niebieskie pudełko jest cięższe od zielonego. Czerwone pudełko jest lżejsze od zielonego. Które pudełko jest najcięższe?',
    options: ['Zielone', 'Niebieskie', 'Czerwone', 'Niebieskie i czerwone', 'Nie da się tego ustalić'],
  },
  'rank-trains-unknown': {
    prompt: 'Pociąg A jest szybszy od pociągu B. Pociąg C jest szybszy od pociągu B. Który pociąg jest najszybszy?',
    options: ['Pociąg A', 'Pociąg B', 'Pociąg C', 'A i C równie szybkie', 'Nie da się tego ustalić'],
  },
  'rank-cars-first': {
    prompt: 'W wyścigu trzech samochodów czarny samochód dojechał na metę za niebieskim, a niebieski za białym. Który samochód dojechał pierwszy?',
    options: ['Niebieski', 'Czarny', 'Niebieski i biały', 'Biały', 'Nie da się tego ustalić'],
  },
  'rank-books-thinnest': {
    prompt: 'Zielona książka jest grubsza od niebieskiej. Niebieska książka jest cieńsza od czerwonej. Która książka jest najcieńsza?',
    options: ['Niebieska', 'Zielona', 'Czerwona', 'Zielona i czerwona', 'Nie da się tego ustalić'],
  },

  // 32 · procenty
  'pct-15-of-60': { prompt: 'Ile to jest 15% z 60?' },
  'pct-35-of-40': { prompt: 'Ile to jest 35% z 40?' },
  'pct-30-of-70': { prompt: 'Ile to jest 30% z 70?' },
  'pct-15-of-40': { prompt: 'Ile to jest 15% z 40?' },

  // 33 · co nie pasuje
  'odd-eagle': { prompt: 'Które słowo nie pasuje do pozostałych?', options: ['Pies', 'Kot', 'Koń', 'Orzeł', 'Krowa'] },
  'odd-fork': { prompt: 'Które słowo nie pasuje do pozostałych?', options: ['Stół', 'Widelec', 'Krzesło', 'Sofa', 'Łóżko'] },
  'odd-hammer': { prompt: 'Które słowo nie pasuje do pozostałych?', options: ['Młotek', 'Pianino', 'Bęben', 'Gitara', 'Flet'] },
  'odd-circle': { prompt: 'Które słowo nie pasuje do pozostałych?', options: ['Sześcian', 'Kula', 'Ostrosłup', 'Walec', 'Koło'] },

  // 36 · refleksja poznawcza: suma i różnica
  'crt-bike-helmet': {
    prompt: 'Rower i kask kosztują razem 120,00 zł. Rower kosztuje o 100,00 zł więcej niż kask. Ile kosztuje kask?',
    options: ['20,00 zł', '15,00 zł', '10,00 zł', '5,00 zł', '12,00 zł'],
  },
  'crt-backpack-case': {
    prompt: 'Plecak i piórnik kosztują razem 70,00 zł. Plecak kosztuje o 60,00 zł więcej niż piórnik. Ile kosztuje piórnik?',
    options: ['5,00 zł', '10,00 zł', '6,00 zł', '7,00 zł', '1,00 zł'],
  },
  'crt-bucket-water': {
    prompt: 'Wiadro pełne wody waży 13 kg. Woda waży o 12 kg więcej niż puste wiadro. Ile waży puste wiadro?',
    options: ['1 kg', '2 kg', '250 g', '500 g', '100 g'],
  },
  'crt-mother-son': {
    prompt: 'Matka i jej syn mają razem 36 lat. Matka jest o 30 lat starsza od syna. Ile lat ma syn?',
    options: ['6 lat', '5 lat', '4 lata', '2 lata', '3 lata'],
  },

  // 38 · refleksja poznawcza: zwodnicze proporcje
  'crt-robots-toys': {
    prompt: 'Jeśli 3 roboty składają 3 zabawki w 3 minuty, ile czasu zajmie 60 robotom złożenie 60 zabawek?',
    options: ['1 minuta', '2 minuty', '3 minuty', '20 minut', '60 minut'],
  },
  'crt-algae-lake': {
    prompt: 'Glony w jeziorze każdego dnia podwajają zajmowaną powierzchnię. Po 30 dniach pokrywają całe jezioro. Po ilu dniach pokrywają połowę jeziora?',
    options: ['10 dni', '15 dni', '20 dni', '29 dni', '30 dni'],
  },
  'crt-log-cuts': {
    prompt: 'Pocięcie pnia na 3 kawałki zajmuje 10 minut. Jeśli każde cięcie trwa zawsze tyle samo, ile czasu zajmie pocięcie takiego samego pnia na 6 kawałków?',
    options: ['12 minut', '15 minut', '18 minut', '20 minut', '25 minut'],
  },
  'crt-snail-well': {
    prompt: 'Ślimak jest na dnie studni o głębokości 10 metrów. W dzień wspina się o 3 metry, a w nocy zsuwa się o 2 metry. Po ilu dniach dotrze na górę studni?',
    options: ['8 dni', '5 dni', '7 dni', '9 dni', '10 dni'],
  },
};

export default t;
