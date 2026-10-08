// Banco de perguntas alternativas: cada sessão pode sortear, para uma mesma posição do teste,
// uma pergunta diferente com a mesma habilidade e a mesma dificuldade.
//
// - A chave é o índice da pergunta em src/lib/questions.ts (QUESTIONS). A pergunta original de
//   cada posição é sempre a variante 'base' e NÃO aparece aqui.
// - text: false → a variante só troca `sequence` e `options` (números ou letras, iguais em todos
//   os idiomas). O enunciado continua sendo o da pergunta original da posição.
// - text: true → o enunciado fica em src/content/qbank/<idioma>.ts, com o mesmo id. Se a variante
//   tiver `options` aqui, as alternativas são essas (neutras); senão, vêm do arquivo de texto.
// - `answer` é o índice (0 a 4) da alternativa correta.

export interface Variant {
  id: string; // único, em kebab-case
  answer: number; // índice (0-4) da alternativa correta
  sequence?: string; // mostrada na caixa grande em fonte mono (neutra)
  options?: string[]; // 5 alternativas neutras; se ausente, vêm do arquivo de texto
  text: boolean; // true = enunciado (e alternativas, se não houver `options`) em src/content/qbank/<idioma>.ts
}

/** Alternativas por posição (índice em src/lib/questions.ts QUESTIONS). A pergunta original de cada
 *  posição é sempre a variante 'base' e NÃO está listada aqui. */
export const QBANK: Record<number, Variant[]> = {
  // 0 · pegadinha de leitura (ovelhas: "todas fogem, menos 9")
  0: [
    { id: 'trick-sold-but-6', answer: 4, options: ['14', '20', '0', '26', '6'], text: true },
    { id: 'trick-apples-take', answer: 1, options: ['1', '2', '3', '5', '0'], text: true },
    { id: 'trick-fingers-hands', answer: 3, options: ['100', '20', '25', '50', '10'], text: true },
    { id: 'trick-family-brother', answer: 0, options: ['5', '8', '4', '9', '6'], text: true },
  ],

  // 1 · pegadinha de posição (ultrapassar o 2º colocado)
  1: [
    { id: 'order-race-pass-third', answer: 2, text: true },
    { id: 'order-queue-ahead-behind', answer: 4, options: ['5', '6', '7', '8', '9'], text: true },
    { id: 'order-queue-both-ends', answer: 0, options: ['7', '8', '9', '12', '16'], text: true },
    { id: 'order-fence-posts', answer: 3, options: ['8', '9', '10', '11', '12'], text: true },
  ],

  // 2 · contagem espacial (arestas do cubo)
  2: [
    { id: 'space-pyramid-edges', answer: 1, options: ['5', '8', '10', '12', '16'], text: true },
    { id: 'space-die-visible-faces', answer: 2, options: ['1', '2', '3', '4', '6'], text: true },
    { id: 'space-cube-27', answer: 4, options: ['9', '12', '18', '24', '27'], text: true },
    { id: 'space-cube-cut-faces', answer: 0, options: ['6', '3', '4', '5', '7'], text: true },
  ],

  // 4 · próximo número, progressão geométrica (3, 6, 12, 24)
  4: [
    { id: 'seq-double-5', answer: 1, sequence: '5, 10, 20, 40, ___', options: ['60', '80', '90', '100', '120'], text: false },
    { id: 'seq-triple-1', answer: 4, sequence: '1, 3, 9, 27, ___', options: ['36', '45', '54', '72', '81'], text: false },
    { id: 'seq-halve-96', answer: 2, sequence: '96, 48, 24, 12, ___', options: ['0', '4', '6', '8', '10'], text: false },
    { id: 'seq-double-7', answer: 0, sequence: '7, 14, 28, 56, ___', options: ['112', '63', '70', '84', '98'], text: false },
  ],

  // 5 · número faltando em progressão aritmética (7, 14, 21, ___, 35, 42)
  5: [
    { id: 'seq-missing-6', answer: 1, sequence: '6, 12, 18, ___, 30, 36', options: ['22', '24', '25', '26', '28'], text: false },
    { id: 'seq-missing-9', answer: 4, sequence: '9, 18, 27, ___, 45, 54', options: ['30', '32', '33', '35', '36'], text: false },
    { id: 'seq-missing-4', answer: 0, sequence: '4, 11, 18, ___, 32, 39', options: ['25', '26', '27', '28', '30'], text: false },
    { id: 'seq-missing-5', answer: 3, sequence: '5, 13, ___, 29, 37, 45', options: ['17', '19', '20', '21', '23'], text: false },
  ],

  // 27 · cada termo é a soma dos dois anteriores (1, 1, 2, 3, 5, 8)
  27: [
    { id: 'seq-fib-2', answer: 3, sequence: '2, 2, 4, 6, 10, 16, ___', options: ['20', '22', '24', '26', '32'], text: false },
    { id: 'seq-fib-1-3', answer: 1, sequence: '1, 3, 4, 7, 11, 18, ___', options: ['25', '29', '30', '32', '36'], text: false },
    { id: 'seq-fib-5', answer: 0, sequence: '5, 5, 10, 15, 25, 40, ___', options: ['65', '55', '60', '70', '80'], text: false },
    { id: 'seq-fib-3-2', answer: 4, sequence: '3, 2, 5, 7, 12, 19, ___', options: ['24', '26', '28', '29', '31'], text: false },
  ],

  // 30 · duas operações alternadas (×3, +1)
  30: [
    { id: 'seq-alt-x2-p3', answer: 1, sequence: '1, 2, 5, 10, 13, 26, ___', options: ['52', '29', '28', '39', '27'], text: false },
    { id: 'seq-alt-p2-x2', answer: 2, sequence: '3, 5, 10, 12, 24, 26, ___', options: ['28', '48', '52', '54', '78'], text: false },
    { id: 'seq-alt-x3-m1', answer: 3, sequence: '1, 3, 2, 6, 5, 15, ___', options: ['45', '16', '13', '14', '30'], text: false },
    { id: 'seq-alt-p4-x2', answer: 4, sequence: '1, 5, 10, 14, 28, 32, ___', options: ['36', '96', '60', '68', '64'], text: false },
  ],

  // 34 · letras com saltos que mudam de forma regular (A, C, F, J)
  34: [
    { id: 'letters-gap-up-1', answer: 3, sequence: 'A, B, D, G, ___', options: ['H', 'I', 'J', 'K', 'L'], text: false },
    { id: 'letters-gap-up-3', answer: 4, sequence: 'A, D, H, M, ___', options: ['O', 'P', 'Q', 'R', 'S'], text: false },
    { id: 'letters-gap-down', answer: 0, sequence: 'P, N, K, G, ___', options: ['B', 'C', 'D', 'E', 'F'], text: false },
    { id: 'letters-gap-shrink', answer: 1, sequence: 'A, F, J, M, O, ___', options: ['O', 'P', 'Q', 'R', 'S'], text: false },
  ],

  // 28 · silogismo com palavras inventadas
  28: [
    { id: 'syl-none', answer: 0, text: true },
    { id: 'syl-some', answer: 1, text: true },
    { id: 'syl-shared-middle', answer: 4, text: true },
    { id: 'syl-chain', answer: 2, text: true },
  ],

  // 29 · analogia verbal
  29: [
    { id: 'analogy-scissors-pen', answer: 3, text: true },
    { id: 'analogy-eye-ear', answer: 2, text: true },
    { id: 'analogy-bird-bee', answer: 0, text: true },
    { id: 'analogy-petal-page', answer: 4, text: true },
  ],

  // 31 · ordenação (transitividade)
  31: [
    { id: 'rank-boxes-heaviest', answer: 1, text: true },
    { id: 'rank-trains-unknown', answer: 4, text: true },
    { id: 'rank-cars-first', answer: 3, text: true },
    { id: 'rank-books-thinnest', answer: 0, text: true },
  ],

  // 32 · porcentagem de cabeça (vem logo depois da tela "memorize este número")
  32: [
    { id: 'pct-15-of-60', answer: 1, options: ['6', '9', '10', '12', '15'], text: true },
    { id: 'pct-35-of-40', answer: 4, options: ['4', '8', '10', '12', '14'], text: true },
    { id: 'pct-30-of-70', answer: 3, options: ['7', '14', '18', '21', '24'], text: true },
    { id: 'pct-15-of-40', answer: 0, options: ['6', '4', '8', '10', '12'], text: true },
  ],

  // 33 · intruso no grupo
  33: [
    { id: 'odd-eagle', answer: 3, text: true },
    { id: 'odd-fork', answer: 1, text: true },
    { id: 'odd-hammer', answer: 0, text: true },
    { id: 'odd-circle', answer: 4, text: true },
  ],

  // 36 · reflexão cognitiva: soma e diferença (caderno e caneta)
  36: [
    { id: 'crt-bike-helmet', answer: 2, text: true },
    { id: 'crt-backpack-case', answer: 0, text: true },
    { id: 'crt-bucket-water', answer: 3, text: true },
    { id: 'crt-mother-son', answer: 4, text: true },
  ],

  // 38 · reflexão cognitiva: proporção enganosa (impressoras e cartazes)
  38: [
    { id: 'crt-robots-toys', answer: 2, text: true },
    { id: 'crt-algae-lake', answer: 3, text: true },
    { id: 'crt-log-cuts', answer: 4, text: true },
    { id: 'crt-snail-well', answer: 0, text: true },
  ],
};
