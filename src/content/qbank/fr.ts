// qbank — French translation of pt.ts
import type { QbankText } from './pt';

const t: Record<string, QbankText> = {
  // 0 · piège de lecture
  'trick-sold-but-6': { prompt: 'Un magasin avait 20 ampoules. Il les a toutes vendues, sauf 6. Combien d’ampoules reste-t-il dans le magasin ?' },
  'trick-apples-take': { prompt: 'Il y a 3 pommes sur une table et vous en prenez 2. Combien de pommes avez-vous ?' },
  'trick-fingers-hands': { prompt: 'Sur 2 mains, il y a 10 doigts. Combien de doigts y a-t-il sur 10 mains ?' },
  'trick-family-brother': { prompt: 'Une famille a 4 filles, et chacune d’elles a 1 frère. Combien d’enfants cette famille a-t-elle au total ?' },

  // 1 · piège de position
  'order-race-pass-third': {
    prompt: 'Dans une course, vous dépassez la personne en 3e position et, juste après, un autre coureur vous dépasse. À quelle place êtes-vous maintenant ?',
    options: ['2e', '3e', '4e', '5e', 'Ça dépend'],
  },
  'order-queue-ahead-behind': { prompt: 'Dans une file d’attente, il y a 5 personnes devant vous et 3 personnes derrière vous. Combien de personnes y a-t-il dans la file ?' },
  'order-queue-both-ends': { prompt: 'Dans une file d’attente, une personne est la 4e en comptant depuis l’avant et aussi la 4e en comptant depuis l’arrière. Combien de personnes y a-t-il dans la file ?' },
  'order-fence-posts': { prompt: 'Une clôture droite mesure 100 mètres, avec un poteau tous les 10 mètres, y compris un à chaque extrémité. Combien de poteaux compte la clôture ?' },

  // 2 · comptage dans l’espace
  'space-pyramid-edges': { prompt: 'Combien d’arêtes une pyramide à base carrée possède-t-elle ?' },
  'space-die-visible-faces': { prompt: 'En regardant un dé depuis un seul point de vue, quel est le plus grand nombre de faces que vous pouvez voir en même temps ?' },
  'space-cube-27': { prompt: 'Un cube plein est assemblé avec des petits cubes identiques, 3 sur chaque arête. Combien de petits cubes sont utilisés ?' },
  'space-cube-cut-faces': { prompt: 'Un bloc plein en forme de cube est coupé en deux par une seule coupe droite, parallèle à l’une de ses faces. Combien de faces possède chaque moitié ?' },

  // 28 · syllogisme avec des mots inventés
  'syl-none': {
    prompt: 'Tous les Vruks sont des Plents. Aucun Plent n’est un Snib. Quelle affirmation est forcément vraie ?',
    options: ['Aucun Vruk n’est un Snib', 'Certains Vruks sont des Snibs', 'Tous les Plents sont des Vruks', 'Certains Plents ne sont pas des Vruks', 'Tous les Snibs sont des Plents'],
  },
  'syl-some': {
    prompt: 'Tous les Krels sont des Bofs. Certains Wems sont des Krels. Quelle affirmation est forcément vraie ?',
    options: ['Tous les Wems sont des Bofs', 'Certains Wems sont des Bofs', 'Tous les Bofs sont des Krels', 'Aucun Wem n’est un Bof', 'Certains Krels ne sont pas des Wems'],
  },
  'syl-shared-middle': {
    prompt: 'Tous les Glorps sont des Nemps. Tous les Tafs sont des Nemps. Quelle affirmation est forcément vraie ?',
    options: ['Tous les Glorps sont des Tafs', 'Certains Glorps sont des Tafs', 'Tous les Nemps sont des Glorps', 'Aucun Glorp n’est un Taf', 'Tout Taf est un Nemp'],
  },
  'syl-chain': {
    prompt: 'Tous les Pids sont des Zungs. Tous les Zungs sont des Hovs. Quelle affirmation est forcément vraie ?',
    options: ['Tous les Hovs sont des Pids', 'Tous les Zungs sont des Pids', 'Tous les Pids sont des Hovs', 'Certains Hovs ne sont pas des Zungs', 'Aucun Hov n’est un Pid'],
  },

  // 29 · analogie verbale
  'analogy-scissors-pen': { prompt: 'Les ciseaux sont à couper ce que le stylo est à…', options: ['Papier', 'Lire', 'Encre', 'Écrire', 'Crayon'] },
  'analogy-eye-ear': { prompt: 'L’œil est à voir ce que l’oreille est à…', options: ['Son', 'Parler', 'Entendre', 'Musique', 'Nez'] },
  'analogy-bird-bee': { prompt: 'L’oiseau est au nid ce que l’abeille est à…', options: ['Ruche', 'Miel', 'Fleur', 'Aile', 'Insecte'] },
  'analogy-petal-page': { prompt: 'Le pétale est à la fleur ce que la page est à…', options: ['Lire', 'Papier', 'Lettre', 'Mot', 'Livre'] },

  // 31 · classement
  'rank-boxes-heaviest': {
    prompt: 'La boîte bleue est plus lourde que la boîte verte. La boîte rouge est plus légère que la verte. Quelle boîte est la plus lourde ?',
    options: ['La verte', 'La bleue', 'La rouge', 'La bleue et la rouge', 'Impossible de savoir'],
  },
  'rank-trains-unknown': {
    prompt: 'Le train A est plus rapide que le train B. Le train C est plus rapide que le train B. Quel train est le plus rapide ?',
    options: ['Le train A', 'Le train B', 'Le train C', 'A et C à égalité', 'Impossible de savoir'],
  },
  'rank-cars-first': {
    prompt: 'Dans une course à trois voitures, la voiture noire est arrivée après la bleue, et la bleue est arrivée après la blanche. Quelle voiture est arrivée en premier ?',
    options: ['La bleue', 'La noire', 'La bleue et la blanche', 'La blanche', 'Impossible de savoir'],
  },
  'rank-books-thinnest': {
    prompt: 'Le livre vert est plus épais que le bleu. Le livre bleu est plus fin que le rouge. Quel livre est le plus fin ?',
    options: ['Le bleu', 'Le vert', 'Le rouge', 'Le vert et le rouge', 'Impossible de savoir'],
  },

  // 32 · pourcentage
  'pct-15-of-60': { prompt: 'Combien font 15 % de 60 ?' },
  'pct-35-of-40': { prompt: 'Combien font 35 % de 40 ?' },
  'pct-30-of-70': { prompt: 'Combien font 30 % de 70 ?' },
  'pct-15-of-40': { prompt: 'Combien font 15 % de 40 ?' },

  // 33 · l’intrus
  'odd-eagle': { prompt: 'Quel mot n’appartient pas au groupe ?', options: ['Chien', 'Chat', 'Cheval', 'Aigle', 'Vache'] },
  'odd-fork': { prompt: 'Quel mot n’appartient pas au groupe ?', options: ['Table', 'Fourchette', 'Chaise', 'Canapé', 'Lit'] },
  'odd-hammer': { prompt: 'Quel mot n’appartient pas au groupe ?', options: ['Marteau', 'Piano', 'Tambour', 'Guitare', 'Flûte'] },
  'odd-circle': { prompt: 'Quel mot n’appartient pas au groupe ?', options: ['Cube', 'Sphère', 'Pyramide', 'Cylindre', 'Cercle'] },

  // 36 · réflexion cognitive : somme et différence
  'crt-bike-helmet': {
    prompt: 'Un vélo et un casque coûtent 120,00 € au total. Le vélo coûte 100,00 € de plus que le casque. Combien coûte le casque ?',
    options: ['20,00 €', '15,00 €', '10,00 €', '5,00 €', '12,00 €'],
  },
  'crt-backpack-case': {
    prompt: 'Un sac à dos et une trousse coûtent 70,00 € au total. Le sac à dos coûte 60,00 € de plus que la trousse. Combien coûte la trousse ?',
    options: ['5,00 €', '10,00 €', '6,00 €', '7,00 €', '1,00 €'],
  },
  'crt-bucket-water': {
    prompt: 'Un seau rempli d’eau pèse 13 kg. L’eau pèse 12 kg de plus que le seau vide. Combien pèse le seau vide ?',
    options: ['1 kg', '2 kg', '250 g', '500 g', '100 g'],
  },
  'crt-mother-son': {
    prompt: 'La somme des âges d’une mère et de son fils est de 36 ans. La mère a 30 ans de plus que son fils. Quel âge a le fils ?',
    options: ['6 ans', '5 ans', '4 ans', '2 ans', '3 ans'],
  },

  // 38 · réflexion cognitive : proportion trompeuse
  'crt-robots-toys': {
    prompt: 'Si 3 robots assemblent 3 jouets en 3 minutes, combien de temps faut-il à 60 robots pour assembler 60 jouets ?',
    options: ['1 minute', '2 minutes', '3 minutes', '20 minutes', '60 minutes'],
  },
  'crt-algae-lake': {
    prompt: 'Les algues d’un lac doublent de surface chaque jour. En 30 jours, elles couvrent tout le lac. En combien de jours couvrent-elles la moitié du lac ?',
    options: ['10 jours', '15 jours', '20 jours', '29 jours', '30 jours'],
  },
  'crt-log-cuts': {
    prompt: 'Couper un tronc en 3 morceaux prend 10 minutes. Si chaque coupe prend toujours le même temps, combien de temps faut-il pour couper un tronc identique en 6 morceaux ?',
    options: ['12 minutes', '15 minutes', '18 minutes', '20 minutes', '25 minutes'],
  },
  'crt-snail-well': {
    prompt: 'Un escargot se trouve au fond d’un puits de 10 mètres. Le jour, il monte de 3 mètres et, la nuit, il glisse de 2 mètres vers le bas. En combien de jours atteint-il le haut du puits ?',
    options: ['8 jours', '5 jours', '7 jours', '9 jours', '10 jours'],
  },
};

export default t;
