// Textos dos jogos em português: nome, descrição e regras (a página do jogo mostra isso),
// mais os textos internos de cada jogo (`ui`), em ./ui-pt.

import { game2048Pt, mathSprintPt, memoryPt, schultePt, sequencePt, sudokuPt } from './ui-pt';

export const gamesPt = {
  sudoku: {
    name: 'Sudoku',
    desc: 'Complete a grade 9×9 sem repetir números. Treina lógica e paciência.',
    how: [
      'Cada linha, cada coluna e cada bloco 3×3 deve ter os números de 1 a 9, sem repetir.',
      'Toque numa célula vazia e escolha um número. Números em vermelho estão em conflito.',
      'Seu resultado é o tempo para completar a grade: quanto menor, melhor.',
    ],
    ui: sudokuPt,
  },
  g2048: {
    name: '2048',
    desc: 'Deslize as peças e junte números iguais até chegar a 2048. Treina planejamento.',
    how: [
      'Deslize para cima, baixo, esquerda ou direita (ou use as setas do teclado).',
      'Peças com o mesmo número se juntam e somam. A cada jogada, surge uma nova peça.',
      'A partida acaba quando não há mais movimentos. Sua pontuação é a soma das junções.',
    ],
    ui: game2048Pt,
  },
  memory: {
    name: 'Jogo da memória',
    desc: 'Encontre os pares escondidos com o menor número de jogadas. Treina memória visual.',
    how: [
      'Vire duas cartas por vez. Se forem iguais, ficam abertas.',
      'Se forem diferentes, voltam a ficar viradas: lembre onde estava cada figura.',
      'Seu resultado é o número de jogadas: quanto menor, melhor.',
    ],
    ui: memoryPt,
  },
  sequence: {
    name: 'Sequência',
    desc: 'Repita a sequência de cores, que cresce a cada rodada. Treina memória de trabalho.',
    how: [
      'Observe as cores que acendem, na ordem.',
      'Depois, toque nas mesmas cores na mesma ordem.',
      'A cada acerto, a sequência ganha mais uma cor. Seu resultado é a maior sequência que você repetiu sem errar.',
    ],
    ui: sequencePt,
  },
  schulte: {
    name: 'Tabela de Schulte',
    desc: 'Encontre os números de 1 a 25 em ordem, o mais rápido possível. Treina atenção.',
    how: [
      'Os números de 1 a 25 estão embaralhados numa grade 5×5.',
      'Toque neles em ordem crescente: 1, 2, 3… até 25.',
      'Tente manter os olhos no centro da grade e usar a visão periférica. Menos tempo é melhor.',
    ],
    ui: schultePt,
  },
  math: {
    name: 'Cálculo rápido',
    desc: 'Resolva o máximo de contas em 60 segundos. Treina cálculo mental e velocidade.',
    how: [
      'As contas começam fáceis e ficam mais difíceis aos poucos.',
      'Digite a resposta e confirme. Errou? Siga para a próxima.',
      'Seu resultado é o número de acertos em 60 segundos.',
    ],
    ui: mathSprintPt,
  },
};
