// Contrato dos jogos da área do cliente.
//
// Cada jogo fica em src/games/<Nome>.tsx e exporta:
//   - `export interface <Nome>Strings { ... }`  textos próprios do jogo (rótulos, mensagens)
//   - `export const <nome>Pt: <Nome>Strings`     os textos em português (fonte das traduções)
//   - `export default function <Nome>(props: GameProps<<Nome>Strings>)`
//
// O jogo renderiza só a área de jogo. Título, instruções, recorde, tela de resultado e o botão
// "jogar de novo" ficam com a página que envolve o jogo (src/pages/app/GamePage.tsx), que
// remonta o componente a cada partida. O jogo chama `onFinish` UMA vez quando a partida termina.

export interface GameCommonStrings {
  start: string; // "Começar"
  giveUp: string; // "Encerrar partida"
  score: string; // "Pontuação"
  best: string; // "Recorde"
  time: string; // "Tempo"
  level: string; // "Nível"
  moves: string; // "Jogadas"
  correct: string; // "Acertos"
  wrong: string; // "Erros"
}

export interface GameResult {
  /** Valor principal da partida, na unidade definida no registro do jogo (pontos, segundos, jogadas, nível). */
  score: number;
  /** Se a partida foi concluída (ex.: Sudoku resolvido). Partidas abandonadas não contam recorde. */
  completed: boolean;
}

export interface GameProps<S> {
  s: S;
  c: GameCommonStrings;
  onFinish: (r: GameResult) => void;
}
