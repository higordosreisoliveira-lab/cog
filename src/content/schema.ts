// Formato novo do conteúdo da área do cliente: UM arquivo por teste/curso e por idioma,
// carregado só quando a pessoa abre aquele teste ou curso.
//
//   src/content/tests/<id>/structure.ts   estrutura fixa (export default TestStructure)
//   src/content/tests/<id>/<idioma>.ts     textos (export default TestText)
//   src/content/courses/<id>/structure.ts  estrutura fixa (export default CourseStructure)
//   src/content/courses/<id>/<idioma>.ts   textos (export default CourseText)
//
// Os idiomas são: pt (fonte), en, es, fr, de, it, nl, pl, tr, id, ja, ko.

// ---------- testes ----------

export type TestCategory = 'personality' | 'relationships' | 'work' | 'wellbeing' | 'neuro';

export interface TestStructure {
  id: string;
  category: TestCategory;
  icon: 'user' | 'heart' | 'briefcase' | 'smile' | 'diamond' | 'compass' | 'cloud' | 'trend' | 'pulse' | 'link' | 'battery' | 'hourglass' | 'mask' | 'target' | 'timer' | 'brain' | 'puzzle' | 'leaf';
  minutes: [number, number];
  dims: string[]; // chaves das dimensões, na ordem de exibição
  items: { dim: string; reverse?: boolean }[]; // um por pergunta; reverse = concordar diminui a dimensão
  /** Pontos de cada opção de resposta, na ordem exibida (ex.: [1,2,3,4,5] ou PHQ-9 [0,1,2,3]). */
  scale: number[];
  /**
   * Como mostrar o resultado:
   * - 'profile': todas as dimensões, com leitura alta/baixa
   * - 'top': destaca as 3 dimensões mais fortes (ex.: carreira, arquétipos, forças)
   * - 'screen': faixa pelo total bruto (ex.: ansiedade leve/moderada); usa `bands`
   * - 'quadrant': combina duas dimensões em quatro tipos (ex.: estilo de apego); usa `quadrant`
   */
  result: 'profile' | 'top' | 'screen' | 'quadrant';
  /** 'screen': faixas sobre o TOTAL bruto (soma dos pontos, já invertendo itens), em ordem crescente; o último upTo = total máximo. */
  bands?: { upTo: number; key: string }[];
  /** 'quadrant': x e y são dimensões; cada uma é "alta" se a pontuação 0–100 for >= 50. */
  quadrant?: { x: string; y: string; lowLow: string; highLow: string; lowHigh: string; highHigh: string }; // highLow = x alto, y baixo
  /** Pergunta que, se pontuar >= minPoints, mostra o aviso de ajuda urgente (ex.: PHQ-9 item 9). Índice 0-based. */
  alert?: { item: number; minPoints: number };
  /**
   * Formato das respostas: 'list' (opções empilhadas), 'circles' (círculos de concordância,
   * maiores nas pontas), 'slider' (régua de frequência), 'cards' (cartões grandes com barras)
   * ou 'stars' (estrelas de 1 a 5, "quanto combina com você").
   */
  input?: 'list' | 'circles' | 'slider' | 'cards' | 'stars';
  /** Tarefas interativas exibidas no meio do teste: 'gonogo' (atenção) e 'delay' (escolhas de recompensa). */
  tasks?: { kind: 'gonogo' | 'delay'; after: number }[];
}

export interface DimText {
  label: string;
  desc: string; // o que mede (1–2 frases)
  high: string; // leitura para pontuação alta (2–3 frases, segunda pessoa)
  low: string; // leitura para pontuação baixa (2–3 frases)
  tips: string[]; // 2–3 sugestões práticas
  examples?: string[]; // opcional: profissões, situações etc.
}

export interface TestText {
  title: string;
  desc: string; // 1–2 frases para o card
  intro: string; // parágrafo antes de começar (o que mede, período de referência, como responder)
  scale: string[]; // rótulos das opções, mesmo tamanho de structure.scale
  items: string[]; // mesma ordem de structure.items
  dims: Record<string, DimText>;
  /** 'screen' e 'quadrant': um texto por chave de faixa/tipo. */
  bands?: Record<string, { label: string; text: string }>;
  resultTitle: string;
  resultIntro: string;
  note: string; // não é diagnóstico / avaliação profissional
  help?: string; // onde procurar ajuda (testes de saúde)
  alert?: string; // aviso urgente quando structure.alert dispara
}

// ---------- cursos ----------

export type CourseSkill = 'memory' | 'logic' | 'visual' | 'speed' | 'emotional' | 'career' | 'creativity';

export interface CourseStructure {
  id: string;
  skill: CourseSkill;
  lessons: { id: string; minutes: number }[];
}

/**
 * Aula em "markdown leve": parágrafos separados por linha em branco, "## " subtítulo,
 * "- " item de lista, **negrito**. Nada além disso.
 */
export interface LessonText {
  title: string;
  body: string;
  practice: { question: string; answer: string };
}

export interface CourseText {
  title: string;
  desc: string;
  outcome: string; // "Ao final, você vai…"
  lessons: LessonText[];
}
