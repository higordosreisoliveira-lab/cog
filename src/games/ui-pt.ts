// Textos em português de dentro de cada jogo (os outros idiomas ficam em src/i18n/app/<idioma>.ts).
// Ficam aqui, separados dos jogos, para o dicionário não puxar o código de todos os jogos junto.

export interface SudokuStrings {
  hint: string;
  givenLocked: string;
  conflicts: string;
  solved: string;
  erase: string;
  board: string;
  keypad: string;
  key: (n: number) => string;
  left: (n: number) => string;
  cell: (row: number, col: number) => string;
  empty: string;
  given: string;
  conflict: string;
}

export const sudokuPt: SudokuStrings = {
  hint: 'Toque numa célula e escolha um número',
  givenLocked: 'Esse número faz parte do jogo e não pode ser alterado',
  conflicts: 'Há números repetidos na mesma linha, coluna ou bloco',
  solved: 'Sudoku resolvido',
  erase: 'Apagar',
  board: 'Grade do sudoku',
  keypad: 'Números',
  key: (n) => `Colocar ${n}`,
  left: (n) => (n === 1 ? 'falta 1' : `faltam ${n}`),
  cell: (row, col) => `Linha ${row}, coluna ${col}`,
  empty: 'vazia',
  given: 'fixa',
  conflict: 'repetido',
};

export interface Game2048Strings {
  hint: string;
  reached: string;
  over: string;
  board: string;
  empty: string;
}

export const game2048Pt: Game2048Strings = {
  hint: 'Deslize ou use as setas para juntar peças iguais',
  reached: 'Você chegou a 2048. Pode continuar jogando',
  over: 'Fim de jogo: nenhum movimento possível',
  board: 'Tabuleiro 4 por 4',
  empty: 'vazio',
};

export interface MemoryStrings {
  hint: string;
  pairs: string;
  done: string;
  board: string;
  match: string;
  noMatch: string;
  hidden: (n: number) => string;
  shown: (n: number, shape: string) => string;
  found: (n: number, shape: string) => string;
  /** Nomes das 8 figuras, na ordem: círculo, quadrado, triângulo, losango, estrela, hexágono, cruz, anel. */
  shapes: string[];
}

export const memoryPt: MemoryStrings = {
  hint: 'Vire duas cartas por vez e encontre os pares',
  pairs: 'Pares',
  done: 'Todos os pares encontrados',
  board: 'Cartas do jogo da memória',
  match: 'Par encontrado',
  noMatch: 'Não formam par',
  hidden: (n) => `Carta ${n}, escondida`,
  shown: (n, shape) => `Carta ${n}, ${shape}`,
  found: (n, shape) => `Carta ${n}, ${shape}, par encontrado`,
  shapes: ['círculo', 'quadrado', 'triângulo', 'losango', 'estrela', 'hexágono', 'cruz', 'anel'],
};

export interface SequenceStrings {
  /** Antes de começar, acima do botão "Começar". */
  intro: string;
  /** Enquanto o jogo mostra a sequência. */
  watch: string;
  /** Vez do jogador repetir. */
  yourTurn: string;
  /** Rodada repetida corretamente; a próxima vem a seguir. */
  roundDone: string;
  /** O jogador errou; a partida acaba. */
  miss: string;
  /** Dica de teclado (só em telas largas). */
  keysHint: string;
  /** Rótulo da área dos blocos para leitores de tela. */
  boardAria: string;
  /** Rótulo de cada bloco (1 a 4). */
  pad: (n: number) => string;
}

export const sequencePt: SequenceStrings = {
  intro: 'Memorize a ordem das cores',
  watch: 'Observe a sequência',
  yourTurn: 'Sua vez',
  roundDone: 'Certo!',
  miss: 'Sequência errada',
  keysHint: 'No teclado, use as teclas 1 a 4.',
  boardAria: 'Quatro blocos coloridos',
  pad: (n) => `Bloco ${n}`,
};

export interface SchulteStrings {
  /** Número que deve ser tocado agora. */
  next: (n: number) => string;
  /** Tabela completa. */
  done: string;
  /** Explica quando o cronômetro começa; some depois do primeiro acerto. */
  timerHint: string;
  /** Segundos com uma casa decimal, no formato do idioma. */
  seconds: (sec: number) => string;
  /** Rótulo da grade para leitores de tela. */
  boardAria: string;
  /** Rótulo de um número já marcado. */
  doneAria: (n: number) => string;
}

export const schultePt: SchulteStrings = {
  next: (n) => `Próximo: ${n}`,
  done: 'Concluído',
  timerHint: 'O tempo começa quando você toca no 1.',
  seconds: (sec) => `${sec.toFixed(1).replace('.', ',')} s`,
  boardAria: 'Tabela com os números de 1 a 25',
  doneAria: (n) => `${n}, já marcado`,
};

export interface MathSprintStrings {
  /** Texto antes de começar; recebe a duração em segundos. */
  intro: (sec: number) => string;
  /** Mostrado quando o tempo acaba. */
  timeUp: string;
  /** Dica de teclado físico (só em telas largas). */
  keysHint: string;
  /** Rótulo do campo da resposta. */
  answerAria: string;
  /** Rótulo do teclado numérico. */
  keypadAria: string;
  /** Rótulo da tecla de apagar. */
  backspace: string;
  /** Tecla de confirmar. */
  ok: string;
  /** Aviso (leitor de tela) de resposta certa. */
  right: string;
  /** Aviso (leitor de tela) de resposta errada. */
  miss: string;
}

export const mathSprintPt: MathSprintStrings = {
  intro: (sec) => `Você terá ${sec} segundos. Resolva o máximo de contas que conseguir.`,
  timeUp: 'Tempo esgotado',
  keysHint: 'No teclado, digite a resposta e tecle Enter.',
  answerAria: 'Sua resposta',
  keypadAria: 'Teclado numérico',
  backspace: 'Apagar',
  ok: 'OK',
  right: 'Certo',
  miss: 'Errado',
};
