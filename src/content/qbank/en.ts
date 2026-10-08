// qbank — English translation of pt.ts
import type { QbankText } from './pt';

const t: Record<string, QbankText> = {
  // 0 · reading trick
  'trick-sold-but-6': { prompt: 'A shop had 20 light bulbs. It sold all but 6. How many light bulbs were left in the shop?' },
  'trick-apples-take': { prompt: 'There are 3 apples on a table and you take 2 of them. How many apples do you have?' },
  'trick-fingers-hands': { prompt: 'There are 10 fingers on 2 hands. How many fingers are there on 10 hands?' },
  'trick-family-brother': { prompt: 'A family has 4 daughters, and each of them has 1 brother. How many children does the family have in total?' },

  // 1 · position trick
  'order-race-pass-third': {
    prompt: 'In a race, you pass the person in 3rd place, and right after that another runner passes you. What place are you in now?',
    options: ['2nd', '3rd', '4th', '5th', 'It depends'],
  },
  'order-queue-ahead-behind': { prompt: 'In a line, there are 5 people ahead of you and 3 people behind you. How many people are in the line?' },
  'order-queue-both-ends': { prompt: 'In a line, one person is 4th from the front and also 4th from the back. How many people are in the line?' },
  'order-fence-posts': { prompt: 'A straight fence is 100 meters long, with a post every 10 meters, including one at each end. How many posts does the fence have?' },

  // 2 · spatial counting
  'space-pyramid-edges': { prompt: 'How many edges does a pyramid with a square base have?' },
  'space-die-visible-faces': { prompt: 'Looking at a die from a single point of view, what is the largest number of faces you can see at the same time?' },
  'space-cube-27': { prompt: 'A solid cube is built from identical small cubes, 3 along each edge. How many small cubes are used?' },
  'space-cube-cut-faces': { prompt: 'A solid cube-shaped block is cut in half with a single straight cut, parallel to one of its faces. How many faces does each half have?' },

  // 28 · syllogism with made-up words
  'syl-none': {
    prompt: 'All Vruks are Plents. No Plent is a Snib. Which statement is necessarily true?',
    options: ['No Vruk is a Snib', 'Some Vruks are Snibs', 'All Plents are Vruks', 'Some Plents are not Vruks', 'All Snibs are Plents'],
  },
  'syl-some': {
    prompt: 'All Krels are Bofs. Some Wems are Krels. Which statement is necessarily true?',
    options: ['All Wems are Bofs', 'Some Wems are Bofs', 'All Bofs are Krels', 'No Wem is a Bof', 'Some Krels are not Wems'],
  },
  'syl-shared-middle': {
    prompt: 'All Glorps are Nemps. All Tafs are Nemps. Which statement is necessarily true?',
    options: ['All Glorps are Tafs', 'Some Glorps are Tafs', 'All Nemps are Glorps', 'No Glorp is a Taf', 'Every Taf is a Nemp'],
  },
  'syl-chain': {
    prompt: 'All Pids are Zungs. All Zungs are Hovs. Which statement is necessarily true?',
    options: ['All Hovs are Pids', 'All Zungs are Pids', 'All Pids are Hovs', 'Some Hovs are not Zungs', 'No Hov is a Pid'],
  },

  // 29 · verbal analogy
  'analogy-scissors-pen': { prompt: 'Scissors are to cut as pen is to…', options: ['Paper', 'Read', 'Ink', 'Write', 'Pencil'] },
  'analogy-eye-ear': { prompt: 'Eye is to see as ear is to…', options: ['Sound', 'Speak', 'Hear', 'Music', 'Nose'] },
  'analogy-bird-bee': { prompt: 'Bird is to nest as bee is to…', options: ['Hive', 'Honey', 'Flower', 'Wing', 'Insect'] },
  'analogy-petal-page': { prompt: 'Petal is to flower as page is to…', options: ['Read', 'Paper', 'Letter', 'Word', 'Book'] },

  // 31 · ordering
  'rank-boxes-heaviest': {
    prompt: 'The blue box is heavier than the green box. The red box is lighter than the green one. Which box is the heaviest?',
    options: ['Green', 'Blue', 'Red', 'Blue and red', 'There’s no way to tell'],
  },
  'rank-trains-unknown': {
    prompt: 'Train A is faster than train B. Train C is faster than train B. Which train is the fastest?',
    options: ['Train A', 'Train B', 'Train C', 'A and C are tied', 'There’s no way to tell'],
  },
  'rank-cars-first': {
    prompt: 'In a race with three cars, the black car finished after the blue one, and the blue one finished after the white one. Which car finished first?',
    options: ['Blue', 'Black', 'Blue and white', 'White', 'There’s no way to tell'],
  },
  'rank-books-thinnest': {
    prompt: 'The green book is thicker than the blue one. The blue book is thinner than the red one. Which book is the thinnest?',
    options: ['Blue', 'Green', 'Red', 'Green and red', 'There’s no way to tell'],
  },

  // 32 · percentage
  'pct-15-of-60': { prompt: 'What is 15% of 60?' },
  'pct-35-of-40': { prompt: 'What is 35% of 40?' },
  'pct-30-of-70': { prompt: 'What is 30% of 70?' },
  'pct-15-of-40': { prompt: 'What is 15% of 40?' },

  // 33 · odd one out
  'odd-eagle': { prompt: 'Which of these words doesn’t belong in the group?', options: ['Dog', 'Cat', 'Horse', 'Eagle', 'Cow'] },
  'odd-fork': { prompt: 'Which of these words doesn’t belong in the group?', options: ['Table', 'Fork', 'Chair', 'Sofa', 'Bed'] },
  'odd-hammer': { prompt: 'Which of these words doesn’t belong in the group?', options: ['Hammer', 'Piano', 'Drum', 'Guitar', 'Flute'] },
  'odd-circle': { prompt: 'Which of these words doesn’t belong in the group?', options: ['Cube', 'Sphere', 'Pyramid', 'Cylinder', 'Circle'] },

  // 36 · cognitive reflection: sum and difference
  'crt-bike-helmet': {
    prompt: 'A bike and a helmet cost $120.00 together. The bike costs $100.00 more than the helmet. How much does the helmet cost?',
    options: ['$20.00', '$15.00', '$10.00', '$5.00', '$12.00'],
  },
  'crt-backpack-case': {
    prompt: 'A backpack and a pencil case cost $70.00 together. The backpack costs $60.00 more than the pencil case. How much does the pencil case cost?',
    options: ['$5.00', '$10.00', '$6.00', '$7.00', '$1.00'],
  },
  'crt-bucket-water': {
    prompt: 'A bucket full of water weighs 13 kg. The water weighs 12 kg more than the empty bucket. How much does the empty bucket weigh?',
    options: ['1 kg', '2 kg', '250 g', '500 g', '100 g'],
  },
  'crt-mother-son': {
    prompt: 'The ages of a mother and her son add up to 36 years. The mother is 30 years older than her son. How old is the son?',
    options: ['6 years', '5 years', '4 years', '2 years', '3 years'],
  },

  // 38 · cognitive reflection: misleading proportion
  'crt-robots-toys': {
    prompt: 'If 3 robots assemble 3 toys in 3 minutes, how long do 60 robots take to assemble 60 toys?',
    options: ['1 minute', '2 minutes', '3 minutes', '20 minutes', '60 minutes'],
  },
  'crt-algae-lake': {
    prompt: 'The algae in a lake double in area every day. In 30 days, they cover the whole lake. In how many days do they cover half of the lake?',
    options: ['10 days', '15 days', '20 days', '29 days', '30 days'],
  },
  'crt-log-cuts': {
    prompt: 'Cutting a log into 3 pieces takes 10 minutes. If each cut always takes the same amount of time, how long does it take to cut an identical log into 6 pieces?',
    options: ['12 minutes', '15 minutes', '18 minutes', '20 minutes', '25 minutes'],
  },
  'crt-snail-well': {
    prompt: 'A snail is at the bottom of a 10-meter well. During the day it climbs 3 meters, and during the night it slides back 2 meters. In how many days does it reach the top of the well?',
    options: ['8 days', '5 days', '7 days', '9 days', '10 days'],
  },
};

export default t;
