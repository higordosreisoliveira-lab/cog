// Texto-fonte (português do Brasil) das perguntas alternativas de src/lib/qbank.ts.
// Regras para traduzir:
// - As chaves (ids) não mudam. Só existem aqui as variantes com `text: true`.
// - Quando a variante não tem `options` em qbank.ts, as 5 alternativas ficam aqui, na MESMA ordem
//   (a resposta correta é a posição indicada por `answer` em qbank.ts).
// - Palavras inventadas dos silogismos (Vruks, Plents, Krels...) não se traduzem; ajuste só o plural.
// - Valores em "R$" podem trocar de moeda, mas os números precisam continuar os mesmos.

export interface QbankText { prompt: string; options?: string[] }

const pt: Record<string, QbankText> = {
  // 0 · pegadinha de leitura
  'trick-sold-but-6': { prompt: 'Uma loja tinha 20 lâmpadas. Vendeu todas, menos 6. Quantas lâmpadas sobraram na loja?' },
  'trick-apples-take': { prompt: 'Há 3 maçãs sobre uma mesa e você pega 2 delas. Quantas maçãs você tem?' },
  'trick-fingers-hands': { prompt: 'Em 2 mãos há 10 dedos. Quantos dedos há em 10 mãos?' },
  'trick-family-brother': { prompt: 'Uma família tem 4 filhas, e cada uma delas tem 1 irmão. Quantos filhos essa família tem ao todo?' },

  // 1 · pegadinha de posição
  'order-race-pass-third': {
    prompt: 'Numa corrida, você ultrapassa quem está em 3º lugar e, logo depois, outro corredor ultrapassa você. Em que posição você fica?',
    options: ['2º', '3º', '4º', '5º', 'Depende'],
  },
  'order-queue-ahead-behind': { prompt: 'Numa fila, há 5 pessoas à sua frente e 3 pessoas atrás de você. Quantas pessoas há na fila?' },
  'order-queue-both-ends': { prompt: 'Numa fila, uma pessoa é a 4ª contando da frente e também a 4ª contando de trás. Quantas pessoas há na fila?' },
  'order-fence-posts': { prompt: 'Uma cerca reta tem 100 metros, com um poste a cada 10 metros, incluindo um em cada ponta. Quantos postes tem a cerca?' },

  // 2 · contagem espacial
  'space-pyramid-edges': { prompt: 'Quantas arestas tem uma pirâmide de base quadrada?' },
  'space-die-visible-faces': { prompt: 'Olhando para um dado de um único ponto de vista, qual é o maior número de faces que você consegue ver ao mesmo tempo?' },
  'space-cube-27': { prompt: 'Um cubo maciço é montado com cubinhos iguais, 3 em cada aresta. Quantos cubinhos são usados?' },
  'space-cube-cut-faces': { prompt: 'Um bloco maciço em forma de cubo é cortado ao meio por um único corte reto, paralelo a uma das faces. Quantas faces tem cada metade?' },

  // 28 · silogismo com palavras inventadas
  'syl-none': {
    prompt: 'Todos os Vruks são Plents. Nenhum Plent é Snib. Qual afirmação é necessariamente verdadeira?',
    options: ['Nenhum Vruk é Snib', 'Alguns Vruks são Snibs', 'Todos os Plents são Vruks', 'Alguns Plents não são Vruks', 'Todos os Snibs são Plents'],
  },
  'syl-some': {
    prompt: 'Todos os Krels são Bofs. Alguns Wems são Krels. Qual afirmação é necessariamente verdadeira?',
    options: ['Todos os Wems são Bofs', 'Alguns Wems são Bofs', 'Todos os Bofs são Krels', 'Nenhum Wem é Bof', 'Alguns Krels não são Wems'],
  },
  'syl-shared-middle': {
    prompt: 'Todos os Glorps são Nemps. Todos os Tafs são Nemps. Qual afirmação é necessariamente verdadeira?',
    options: ['Todos os Glorps são Tafs', 'Alguns Glorps são Tafs', 'Todos os Nemps são Glorps', 'Nenhum Glorp é Taf', 'Todo Taf é um Nemp'],
  },
  'syl-chain': {
    prompt: 'Todos os Pids são Zungs. Todos os Zungs são Hovs. Qual afirmação é necessariamente verdadeira?',
    options: ['Todos os Hovs são Pids', 'Todos os Zungs são Pids', 'Todos os Pids são Hovs', 'Alguns Hovs não são Zungs', 'Nenhum Hov é Pid'],
  },

  // 29 · analogia verbal
  'analogy-scissors-pen': { prompt: 'Tesoura está para cortar assim como caneta está para…', options: ['Papel', 'Ler', 'Tinta', 'Escrever', 'Lápis'] },
  'analogy-eye-ear': { prompt: 'Olho está para ver assim como ouvido está para…', options: ['Som', 'Falar', 'Ouvir', 'Música', 'Nariz'] },
  'analogy-bird-bee': { prompt: 'Pássaro está para ninho assim como abelha está para…', options: ['Colmeia', 'Mel', 'Flor', 'Asa', 'Inseto'] },
  'analogy-petal-page': { prompt: 'Pétala está para flor assim como página está para…', options: ['Ler', 'Papel', 'Letra', 'Palavra', 'Livro'] },

  // 31 · ordenação
  'rank-boxes-heaviest': {
    prompt: 'A caixa azul é mais pesada que a caixa verde. A caixa vermelha é mais leve que a verde. Qual caixa é a mais pesada?',
    options: ['Verde', 'Azul', 'Vermelha', 'Azul e vermelha', 'Não dá para saber'],
  },
  'rank-trains-unknown': {
    prompt: 'O trem A é mais rápido que o trem B. O trem C é mais rápido que o trem B. Qual trem é o mais rápido?',
    options: ['Trem A', 'Trem B', 'Trem C', 'A e C empatados', 'Não dá para saber'],
  },
  'rank-cars-first': {
    prompt: 'Numa corrida com três carros, o carro preto chegou depois do azul, e o azul chegou depois do branco. Qual carro chegou em primeiro?',
    options: ['Azul', 'Preto', 'Azul e branco', 'Branco', 'Não dá para saber'],
  },
  'rank-books-thinnest': {
    prompt: 'O livro verde é mais grosso que o azul. O livro azul é mais fino que o vermelho. Qual livro é o mais fino?',
    options: ['Azul', 'Verde', 'Vermelho', 'Verde e vermelho', 'Não dá para saber'],
  },

  // 32 · porcentagem (alternativas numéricas em qbank.ts)
  'pct-15-of-60': { prompt: 'Quanto é 15% de 60?' },
  'pct-35-of-40': { prompt: 'Quanto é 35% de 40?' },
  'pct-30-of-70': { prompt: 'Quanto é 30% de 70?' },
  'pct-15-of-40': { prompt: 'Quanto é 15% de 40?' },

  // 33 · intruso no grupo
  'odd-eagle': { prompt: 'Qual destas palavras não pertence ao grupo?', options: ['Cachorro', 'Gato', 'Cavalo', 'Águia', 'Vaca'] },
  'odd-fork': { prompt: 'Qual destas palavras não pertence ao grupo?', options: ['Mesa', 'Garfo', 'Cadeira', 'Sofá', 'Cama'] },
  'odd-hammer': { prompt: 'Qual destas palavras não pertence ao grupo?', options: ['Martelo', 'Piano', 'Tambor', 'Violão', 'Flauta'] },
  'odd-circle': { prompt: 'Qual destas palavras não pertence ao grupo?', options: ['Cubo', 'Esfera', 'Pirâmide', 'Cilindro', 'Círculo'] },

  // 36 · reflexão cognitiva: soma e diferença
  'crt-bike-helmet': {
    prompt: 'Uma bicicleta e um capacete custam R$ 120,00 juntos. A bicicleta custa R$ 100,00 a mais que o capacete. Quanto custa o capacete?',
    options: ['R$ 20,00', 'R$ 15,00', 'R$ 10,00', 'R$ 5,00', 'R$ 12,00'],
  },
  'crt-backpack-case': {
    prompt: 'Uma mochila e um estojo custam R$ 70,00 juntos. A mochila custa R$ 60,00 a mais que o estojo. Quanto custa o estojo?',
    options: ['R$ 5,00', 'R$ 10,00', 'R$ 6,00', 'R$ 7,00', 'R$ 1,00'],
  },
  'crt-bucket-water': {
    prompt: 'Um balde cheio de água pesa 13 kg. A água pesa 12 kg a mais que o balde vazio. Quanto pesa o balde vazio?',
    options: ['1 kg', '2 kg', '250 g', '500 g', '100 g'],
  },
  'crt-mother-son': {
    prompt: 'A soma das idades de uma mãe e do seu filho é 36 anos. A mãe é 30 anos mais velha que o filho. Quantos anos tem o filho?',
    options: ['6 anos', '5 anos', '4 anos', '2 anos', '3 anos'],
  },

  // 38 · reflexão cognitiva: proporção enganosa
  'crt-robots-toys': {
    prompt: 'Se 3 robôs montam 3 brinquedos em 3 minutos, quanto tempo 60 robôs levam para montar 60 brinquedos?',
    options: ['1 minuto', '2 minutos', '3 minutos', '20 minutos', '60 minutos'],
  },
  'crt-algae-lake': {
    prompt: 'As algas de um lago dobram de área todos os dias. Em 30 dias, elas cobrem o lago inteiro. Em quantos dias elas cobrem metade do lago?',
    options: ['10 dias', '15 dias', '20 dias', '29 dias', '30 dias'],
  },
  'crt-log-cuts': {
    prompt: 'Cortar um tronco em 3 pedaços leva 10 minutos. Se cada corte leva sempre o mesmo tempo, quanto tempo leva para cortar um tronco igual em 6 pedaços?',
    options: ['12 minutos', '15 minutos', '18 minutos', '20 minutos', '25 minutos'],
  },
  'crt-snail-well': {
    prompt: 'Um caracol está no fundo de um poço de 10 metros. Durante o dia, ele sobe 3 metros e, durante a noite, escorrega 2 metros. Em quantos dias ele chega ao topo do poço?',
    options: ['8 dias', '5 dias', '7 dias', '9 dias', '10 dias'],
  },
};

export default pt;
