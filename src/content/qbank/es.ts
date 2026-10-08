// qbank — Spanish translation of pt.ts
import type { QbankText } from './pt';

const t: Record<string, QbankText> = {
  // 0 · trampa de lectura
  'trick-sold-but-6': { prompt: 'Una tienda tenía 20 bombillas. Las vendió todas, menos 6. ¿Cuántas bombillas quedaron en la tienda?' },
  'trick-apples-take': { prompt: 'Hay 3 manzanas sobre una mesa y tomas 2 de ellas. ¿Cuántas manzanas tienes?' },
  'trick-fingers-hands': { prompt: 'En 2 manos hay 10 dedos. ¿Cuántos dedos hay en 10 manos?' },
  'trick-family-brother': { prompt: 'Una familia tiene 4 hijas, y cada una de ellas tiene 1 hermano. ¿Cuántos hijos tiene esa familia en total?' },

  // 1 · trampa de posición
  'order-race-pass-third': {
    prompt: 'En una carrera, superas a quien va en 3.er lugar y, justo después, otro corredor te supera a ti. ¿En qué lugar quedas?',
    options: ['2.º', '3.º', '4.º', '5.º', 'Depende'],
  },
  'order-queue-ahead-behind': { prompt: 'En una fila hay 5 personas delante de ti y 3 personas detrás de ti. ¿Cuántas personas hay en la fila?' },
  'order-queue-both-ends': { prompt: 'En una fila, una persona es la 4.ª contando desde adelante y también la 4.ª contando desde atrás. ¿Cuántas personas hay en la fila?' },
  'order-fence-posts': { prompt: 'Una cerca recta mide 100 metros y tiene un poste cada 10 metros, incluido uno en cada extremo. ¿Cuántos postes tiene la cerca?' },

  // 2 · conteo espacial
  'space-pyramid-edges': { prompt: '¿Cuántas aristas tiene una pirámide de base cuadrada?' },
  'space-die-visible-faces': { prompt: 'Mirando un dado desde un único punto de vista, ¿cuál es el mayor número de caras que puedes ver a la vez?' },
  'space-cube-27': { prompt: 'Un cubo macizo se arma con cubitos iguales, 3 en cada arista. ¿Cuántos cubitos se usan?' },
  'space-cube-cut-faces': { prompt: 'Un bloque macizo en forma de cubo se corta por la mitad con un único corte recto, paralelo a una de sus caras. ¿Cuántas caras tiene cada mitad?' },

  // 28 · silogismo con palabras inventadas
  'syl-none': {
    prompt: 'Todos los Vruks son Plents. Ningún Plent es un Snib. ¿Qué afirmación es necesariamente verdadera?',
    options: ['Ningún Vruk es un Snib', 'Algunos Vruks son Snibs', 'Todos los Plents son Vruks', 'Algunos Plents no son Vruks', 'Todos los Snibs son Plents'],
  },
  'syl-some': {
    prompt: 'Todos los Krels son Bofs. Algunos Wems son Krels. ¿Qué afirmación es necesariamente verdadera?',
    options: ['Todos los Wems son Bofs', 'Algunos Wems son Bofs', 'Todos los Bofs son Krels', 'Ningún Wem es un Bof', 'Algunos Krels no son Wems'],
  },
  'syl-shared-middle': {
    prompt: 'Todos los Glorps son Nemps. Todos los Tafs son Nemps. ¿Qué afirmación es necesariamente verdadera?',
    options: ['Todos los Glorps son Tafs', 'Algunos Glorps son Tafs', 'Todos los Nemps son Glorps', 'Ningún Glorp es un Taf', 'Todo Taf es un Nemp'],
  },
  'syl-chain': {
    prompt: 'Todos los Pids son Zungs. Todos los Zungs son Hovs. ¿Qué afirmación es necesariamente verdadera?',
    options: ['Todos los Hovs son Pids', 'Todos los Zungs son Pids', 'Todos los Pids son Hovs', 'Algunos Hovs no son Zungs', 'Ningún Hov es un Pid'],
  },

  // 29 · analogía verbal
  'analogy-scissors-pen': { prompt: 'Tijera es a cortar como bolígrafo es a…', options: ['Papel', 'Leer', 'Tinta', 'Escribir', 'Lápiz'] },
  'analogy-eye-ear': { prompt: 'Ojo es a ver como oído es a…', options: ['Sonido', 'Hablar', 'Oír', 'Música', 'Nariz'] },
  'analogy-bird-bee': { prompt: 'Pájaro es a nido como abeja es a…', options: ['Colmena', 'Miel', 'Flor', 'Ala', 'Insecto'] },
  'analogy-petal-page': { prompt: 'Pétalo es a flor como página es a…', options: ['Leer', 'Papel', 'Letra', 'Palabra', 'Libro'] },

  // 31 · ordenación
  'rank-boxes-heaviest': {
    prompt: 'La caja azul pesa más que la caja verde. La caja roja pesa menos que la verde. ¿Qué caja es la más pesada?',
    options: ['Verde', 'Azul', 'Roja', 'Azul y roja', 'No se puede saber'],
  },
  'rank-trains-unknown': {
    prompt: 'El tren A es más rápido que el tren B. El tren C es más rápido que el tren B. ¿Qué tren es el más rápido?',
    options: ['Tren A', 'Tren B', 'Tren C', 'A y C empatados', 'No se puede saber'],
  },
  'rank-cars-first': {
    prompt: 'En una carrera de tres autos, el auto negro llegó después del azul, y el azul llegó después del blanco. ¿Qué auto llegó primero?',
    options: ['Azul', 'Negro', 'Azul y blanco', 'Blanco', 'No se puede saber'],
  },
  'rank-books-thinnest': {
    prompt: 'El libro verde es más grueso que el azul. El libro azul es más delgado que el rojo. ¿Qué libro es el más delgado?',
    options: ['Azul', 'Verde', 'Rojo', 'Verde y rojo', 'No se puede saber'],
  },

  // 32 · porcentaje
  'pct-15-of-60': { prompt: '¿Cuánto es el 15% de 60?' },
  'pct-35-of-40': { prompt: '¿Cuánto es el 35% de 40?' },
  'pct-30-of-70': { prompt: '¿Cuánto es el 30% de 70?' },
  'pct-15-of-40': { prompt: '¿Cuánto es el 15% de 40?' },

  // 33 · el intruso del grupo
  'odd-eagle': { prompt: '¿Cuál de estas palabras no pertenece al grupo?', options: ['Perro', 'Gato', 'Caballo', 'Águila', 'Vaca'] },
  'odd-fork': { prompt: '¿Cuál de estas palabras no pertenece al grupo?', options: ['Mesa', 'Tenedor', 'Silla', 'Sofá', 'Cama'] },
  'odd-hammer': { prompt: '¿Cuál de estas palabras no pertenece al grupo?', options: ['Martillo', 'Piano', 'Tambor', 'Guitarra', 'Flauta'] },
  'odd-circle': { prompt: '¿Cuál de estas palabras no pertenece al grupo?', options: ['Cubo', 'Esfera', 'Pirámide', 'Cilindro', 'Círculo'] },

  // 36 · reflexión cognitiva: suma y diferencia
  'crt-bike-helmet': {
    prompt: 'Una bicicleta y un casco cuestan 120,00 US$ en total. La bicicleta cuesta 100,00 US$ más que el casco. ¿Cuánto cuesta el casco?',
    options: ['20,00 US$', '15,00 US$', '10,00 US$', '5,00 US$', '12,00 US$'],
  },
  'crt-backpack-case': {
    prompt: 'Una mochila y un estuche cuestan 70,00 US$ en total. La mochila cuesta 60,00 US$ más que el estuche. ¿Cuánto cuesta el estuche?',
    options: ['5,00 US$', '10,00 US$', '6,00 US$', '7,00 US$', '1,00 US$'],
  },
  'crt-bucket-water': {
    prompt: 'Un balde lleno de agua pesa 13 kg. El agua pesa 12 kg más que el balde vacío. ¿Cuánto pesa el balde vacío?',
    options: ['1 kg', '2 kg', '250 g', '500 g', '100 g'],
  },
  'crt-mother-son': {
    prompt: 'La suma de las edades de una madre y su hijo es 36 años. La madre tiene 30 años más que el hijo. ¿Cuántos años tiene el hijo?',
    options: ['6 años', '5 años', '4 años', '2 años', '3 años'],
  },

  // 38 · reflexión cognitiva: proporción engañosa
  'crt-robots-toys': {
    prompt: 'Si 3 robots arman 3 juguetes en 3 minutos, ¿cuánto tardan 60 robots en armar 60 juguetes?',
    options: ['1 minuto', '2 minutos', '3 minutos', '20 minutos', '60 minutos'],
  },
  'crt-algae-lake': {
    prompt: 'Las algas de un lago duplican su superficie cada día. En 30 días cubren todo el lago. ¿En cuántos días cubren la mitad del lago?',
    options: ['10 días', '15 días', '20 días', '29 días', '30 días'],
  },
  'crt-log-cuts': {
    prompt: 'Cortar un tronco en 3 trozos lleva 10 minutos. Si cada corte lleva siempre el mismo tiempo, ¿cuánto se tarda en cortar un tronco igual en 6 trozos?',
    options: ['12 minutos', '15 minutos', '18 minutos', '20 minutos', '25 minutos'],
  },
  'crt-snail-well': {
    prompt: 'Un caracol está en el fondo de un pozo de 10 metros. Durante el día sube 3 metros y, durante la noche, resbala 2 metros. ¿En cuántos días llega a lo alto del pozo?',
    options: ['8 días', '5 días', '7 días', '9 días', '10 días'],
  },
};

export default t;
