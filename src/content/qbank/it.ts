// qbank — Italian translation of pt.ts
import type { QbankText } from './pt';

const t: Record<string, QbankText> = {
  // 0 · trappola di lettura
  'trick-sold-but-6': { prompt: 'Un negozio aveva 20 lampadine. Le ha vendute tutte tranne 6. Quante lampadine sono rimaste nel negozio?' },
  'trick-apples-take': { prompt: 'Su un tavolo ci sono 3 mele e tu ne prendi 2. Quante mele hai?' },
  'trick-fingers-hands': { prompt: 'In 2 mani ci sono 10 dita. Quante dita ci sono in 10 mani?' },
  'trick-family-brother': { prompt: 'Una famiglia ha 4 figlie, e ognuna di loro ha 1 fratello. Quanti figli ha in tutto questa famiglia?' },

  // 1 · trappola di posizione
  'order-race-pass-third': {
    prompt: 'In una gara superi chi è al 3° posto e, subito dopo, un altro corridore supera te. In che posizione ti trovi?',
    options: ['2°', '3°', '4°', '5°', 'Dipende'],
  },
  'order-queue-ahead-behind': { prompt: 'In una fila ci sono 5 persone davanti a te e 3 persone dietro di te. Quante persone ci sono nella fila?' },
  'order-queue-both-ends': { prompt: 'In una fila, una persona è la 4ª contando dall’inizio e anche la 4ª contando dalla fine. Quante persone ci sono nella fila?' },
  'order-fence-posts': { prompt: 'Una recinzione dritta è lunga 100 metri, con un palo ogni 10 metri, compreso uno a ciascuna estremità. Quanti pali ha la recinzione?' },

  // 2 · conteggio spaziale
  'space-pyramid-edges': { prompt: 'Quanti spigoli ha una piramide a base quadrata?' },
  'space-die-visible-faces': { prompt: 'Guardando un dado da un unico punto di vista, qual è il numero massimo di facce che riesci a vedere contemporaneamente?' },
  'space-cube-27': { prompt: 'Un cubo pieno è formato da cubetti uguali, 3 su ogni spigolo. Quanti cubetti vengono usati?' },
  'space-cube-cut-faces': { prompt: 'Un blocco pieno a forma di cubo viene tagliato a metà con un unico taglio dritto, parallelo a una delle sue facce. Quante facce ha ciascuna metà?' },

  // 28 · sillogismo con parole inventate
  'syl-none': {
    prompt: 'Tutti i Vruk sono Plent. Nessun Plent è uno Snib. Quale affermazione è necessariamente vera?',
    options: ['Nessun Vruk è uno Snib', 'Alcuni Vruk sono Snib', 'Tutti i Plent sono Vruk', 'Alcuni Plent non sono Vruk', 'Tutti gli Snib sono Plent'],
  },
  'syl-some': {
    prompt: 'Tutti i Krel sono Bof. Alcuni Wem sono Krel. Quale affermazione è necessariamente vera?',
    options: ['Tutti i Wem sono Bof', 'Alcuni Wem sono Bof', 'Tutti i Bof sono Krel', 'Nessun Wem è un Bof', 'Alcuni Krel non sono Wem'],
  },
  'syl-shared-middle': {
    prompt: 'Tutti i Glorp sono Nemp. Tutti i Taf sono Nemp. Quale affermazione è necessariamente vera?',
    options: ['Tutti i Glorp sono Taf', 'Alcuni Glorp sono Taf', 'Tutti i Nemp sono Glorp', 'Nessun Glorp è un Taf', 'Ogni Taf è un Nemp'],
  },
  'syl-chain': {
    prompt: 'Tutti i Pid sono Zung. Tutti gli Zung sono Hov. Quale affermazione è necessariamente vera?',
    options: ['Tutti gli Hov sono Pid', 'Tutti gli Zung sono Pid', 'Tutti i Pid sono Hov', 'Alcuni Hov non sono Zung', 'Nessun Hov è un Pid'],
  },

  // 29 · analogia verbale
  'analogy-scissors-pen': { prompt: 'Forbici stanno a tagliare come penna sta a…', options: ['Carta', 'Leggere', 'Inchiostro', 'Scrivere', 'Matita'] },
  'analogy-eye-ear': { prompt: 'Occhio sta a vedere come orecchio sta a…', options: ['Suono', 'Parlare', 'Sentire', 'Musica', 'Naso'] },
  'analogy-bird-bee': { prompt: 'Uccello sta a nido come ape sta a…', options: ['Alveare', 'Miele', 'Fiore', 'Ala', 'Insetto'] },
  'analogy-petal-page': { prompt: 'Petalo sta a fiore come pagina sta a…', options: ['Leggere', 'Carta', 'Lettera', 'Parola', 'Libro'] },

  // 31 · ordinamento
  'rank-boxes-heaviest': {
    prompt: 'La scatola blu è più pesante della scatola verde. La scatola rossa è più leggera di quella verde. Qual è la scatola più pesante?',
    options: ['Verde', 'Blu', 'Rossa', 'Blu e rossa', 'Non si può sapere'],
  },
  'rank-trains-unknown': {
    prompt: 'Il treno A è più veloce del treno B. Il treno C è più veloce del treno B. Qual è il treno più veloce?',
    options: ['Treno A', 'Treno B', 'Treno C', 'A e C a pari merito', 'Non si può sapere'],
  },
  'rank-cars-first': {
    prompt: 'In una gara con tre auto, l’auto nera è arrivata dopo quella blu, e quella blu è arrivata dopo quella bianca. Quale auto è arrivata per prima?',
    options: ['Blu', 'Nera', 'Blu e bianca', 'Bianca', 'Non si può sapere'],
  },
  'rank-books-thinnest': {
    prompt: 'Il libro verde è più spesso di quello blu. Il libro blu è più sottile di quello rosso. Qual è il libro più sottile?',
    options: ['Blu', 'Verde', 'Rosso', 'Verde e rosso', 'Non si può sapere'],
  },

  // 32 · percentuale
  'pct-15-of-60': { prompt: 'Quanto fa il 15% di 60?' },
  'pct-35-of-40': { prompt: 'Quanto fa il 35% di 40?' },
  'pct-30-of-70': { prompt: 'Quanto fa il 30% di 70?' },
  'pct-15-of-40': { prompt: 'Quanto fa il 15% di 40?' },

  // 33 · l’intruso
  'odd-eagle': { prompt: 'Quale di queste parole non appartiene al gruppo?', options: ['Cane', 'Gatto', 'Cavallo', 'Aquila', 'Mucca'] },
  'odd-fork': { prompt: 'Quale di queste parole non appartiene al gruppo?', options: ['Tavolo', 'Forchetta', 'Sedia', 'Divano', 'Letto'] },
  'odd-hammer': { prompt: 'Quale di queste parole non appartiene al gruppo?', options: ['Martello', 'Pianoforte', 'Tamburo', 'Chitarra', 'Flauto'] },
  'odd-circle': { prompt: 'Quale di queste parole non appartiene al gruppo?', options: ['Cubo', 'Sfera', 'Piramide', 'Cilindro', 'Cerchio'] },

  // 36 · riflessione cognitiva: somma e differenza
  'crt-bike-helmet': {
    prompt: 'Una bicicletta e un casco costano insieme 120,00 €. La bicicletta costa 100,00 € più del casco. Quanto costa il casco?',
    options: ['20,00 €', '15,00 €', '10,00 €', '5,00 €', '12,00 €'],
  },
  'crt-backpack-case': {
    prompt: 'Uno zaino e un astuccio costano insieme 70,00 €. Lo zaino costa 60,00 € più dell’astuccio. Quanto costa l’astuccio?',
    options: ['5,00 €', '10,00 €', '6,00 €', '7,00 €', '1,00 €'],
  },
  'crt-bucket-water': {
    prompt: 'Un secchio pieno d’acqua pesa 13 kg. L’acqua pesa 12 kg più del secchio vuoto. Quanto pesa il secchio vuoto?',
    options: ['1 kg', '2 kg', '250 g', '500 g', '100 g'],
  },
  'crt-mother-son': {
    prompt: 'La somma delle età di una madre e di suo figlio è 36 anni. La madre ha 30 anni più del figlio. Quanti anni ha il figlio?',
    options: ['6 anni', '5 anni', '4 anni', '2 anni', '3 anni'],
  },

  // 38 · riflessione cognitiva: proporzione ingannevole
  'crt-robots-toys': {
    prompt: 'Se 3 robot montano 3 giocattoli in 3 minuti, quanto tempo impiegano 60 robot per montare 60 giocattoli?',
    options: ['1 minuto', '2 minuti', '3 minuti', '20 minuti', '60 minuti'],
  },
  'crt-algae-lake': {
    prompt: 'Le alghe di un lago raddoppiano la loro superficie ogni giorno. In 30 giorni coprono tutto il lago. In quanti giorni ne coprono metà?',
    options: ['10 giorni', '15 giorni', '20 giorni', '29 giorni', '30 giorni'],
  },
  'crt-log-cuts': {
    prompt: 'Tagliare un tronco in 3 pezzi richiede 10 minuti. Se ogni taglio richiede sempre lo stesso tempo, quanto tempo serve per tagliare un tronco uguale in 6 pezzi?',
    options: ['12 minuti', '15 minuti', '18 minuti', '20 minuti', '25 minuti'],
  },
  'crt-snail-well': {
    prompt: 'Una lumaca si trova sul fondo di un pozzo profondo 10 metri. Di giorno sale di 3 metri e di notte scivola giù di 2 metri. In quanti giorni arriva in cima al pozzo?',
    options: ['8 giorni', '5 giorni', '7 giorni', '9 giorni', '10 giorni'],
  },
};

export default t;
