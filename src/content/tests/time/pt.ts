// Texto-fonte (português do Brasil). `items` segue a MESMA ordem de ./structure.ts e as chaves de `dims` não mudam.
// Itens originais. Itens 6, 9, 12 e 15 são invertidos (concordar diminui a dimensão).

import type { TestText } from '../../schema';

const t: TestText = {
  title: 'Gestão do tempo',
  desc: 'Veja como você define prioridades, planeja, protege seu foco e equilibra trabalho e descanso.',
  intro:
    'Este questionário avalia quatro hábitos ligados à gestão do tempo: definir prioridades, planejar, manter o foco e respeitar limites e momentos de descanso. São 16 frases. Para cada uma, indique o quanto ela descreve a sua rotina atual, seja no trabalho, nos estudos ou em casa. Não há respostas certas: o objetivo é encontrar os pontos que mais podem melhorar o seu dia a dia.',
  scale: ['Discordo totalmente', 'Discordo', 'Neutro', 'Concordo', 'Concordo totalmente'],
  items: [
    'Sei quais são as tarefas mais importantes da minha semana.',
    'Reservo alguns minutos para planejar meu dia ou minha semana.',
    'Consigo trabalhar em uma tarefa por um bom tempo sem me interromper.',
    'Consigo recusar pedidos quando eles atrapalham o que já assumi.',
    'Diferencio o que é urgente do que é realmente importante.',
    'Muitas vezes descubro só no último momento que tenho algo importante para entregar.',
    'Silencio as notificações quando preciso me concentrar.',
    'Faço pausas ao longo do dia para descansar, mesmo quando há muito trabalho.',
    'Passo boa parte do dia resolvendo pequenas demandas e deixo de lado o que mais importa.',
    'Anoto prazos e compromissos assim que fico sabendo deles.',
    'Faço uma coisa de cada vez, em vez de tentar fazer várias ao mesmo tempo.',
    'Respondo mensagens de trabalho ou de estudo à noite, nos fins de semana ou nas férias.',
    'Antes de aceitar uma nova tarefa, penso se ela é mais importante do que o que já estou fazendo.',
    'Quando faço planos, deixo uma margem de tempo para imprevistos.',
    'Paro o que estou fazendo toda vez que chega uma mensagem ou um pedido.',
    'Tenho um horário para encerrar o trabalho e costumo respeitá-lo.',
  ],
  dims: {
    priorities: {
      label: 'Prioridades',
      desc: 'Saber o que é mais importante e dedicar seu tempo a isso antes do que é apenas urgente ou fácil.',
      high: 'Você costuma saber o que realmente importa e dedica seu melhor tempo a essas tarefas. Isso faz com que seu esforço gere resultados que fazem diferença. O ponto de atenção é a rigidez: às vezes um pedido inesperado merece atenção, mesmo fora do plano.',
      low: 'Você tende a responder ao que aparece primeiro e se mostra disponível para diferentes demandas. Isso traz flexibilidade e faz de você alguém com quem os outros podem contar. O ponto de atenção é chegar ao fim do dia com muito trabalho feito e pouco avanço no que mais importa.',
      tips: [
        'No início de cada dia, escolha as três tarefas mais importantes e comece por uma delas.',
        'Antes de aceitar uma nova demanda, pergunte-se se ela é mais importante do que o que você já está fazendo.',
        'Reserve o horário em que você tem mais energia para a tarefa mais importante do dia.',
      ],
    },
    planning: {
      label: 'Planejamento',
      desc: 'Organizar o dia e a semana com antecedência, acompanhar prazos e prever o tempo de cada tarefa.',
      high: 'Você costuma planejar com antecedência, registrar compromissos e prever quanto tempo as coisas vão levar. Isso reduz imprevistos e traz tranquilidade. O ponto de atenção é gastar tempo demais planejando ou se frustrar quando o dia não sai como o previsto.',
      low: 'Você tende a decidir o que fazer conforme o dia acontece, o que traz espontaneidade e capacidade de improviso. O ponto de atenção são as surpresas: prazos descobertos tarde e tarefas que levam mais tempo do que você imaginava.',
      tips: [
        'Reserve dez minutos no início de cada semana para planejar os próximos dias.',
        'Anote todo prazo ou compromisso na agenda no mesmo momento em que ficar sabendo dele.',
        'Ao planejar o dia, deixe cerca de um terço do tempo livre para imprevistos.',
      ],
    },
    focus: {
      label: 'Foco',
      desc: 'Manter a concentração em uma tarefa por vez e proteger seu tempo de interrupções.',
      high: 'Você consegue se concentrar em uma tarefa por bastante tempo e protege seu trabalho de interrupções. Isso aumenta a qualidade e a rapidez do que você faz. O ponto de atenção é ficar sem responder por tempo demais e atrasar quem depende de um retorno seu.',
      low: 'Você responde rápido a mensagens e pedidos e acompanha várias coisas ao mesmo tempo. Isso faz de você uma pessoa acessível e ágil. O ponto de atenção é que as trocas constantes de tarefa cansam e fazem cada uma levar mais tempo do que levaria com atenção total.',
      tips: [
        'Bloqueie na agenda períodos de 60 a 90 minutos para trabalho concentrado.',
        'Silencie as notificações e defina dois ou três horários do dia para ver mensagens.',
        'Termine uma tarefa, ou uma parte bem definida dela, antes de começar outra.',
      ],
    },
    boundaries: {
      label: 'Limites e descanso',
      desc: 'Dizer não quando necessário, fazer pausas e separar o tempo de trabalho do tempo de descanso.',
      high: 'Você consegue recusar pedidos que comprometem suas prioridades e protege seus momentos de pausa. Isso preserva sua energia e sua saúde a longo prazo. O ponto de atenção é parecer pouco disponível em momentos em que o grupo realmente precisa de um esforço extra.',
      low: 'Você costuma estar disponível e dificilmente diz não, o que faz com que as pessoas confiem muito em você. O ponto de atenção é o cansaço acumulado: sem pausas e limites, a energia e a qualidade do trabalho diminuem com o tempo.',
      tips: [
        'Defina um horário para encerrar o trabalho e desative as notificações depois dele.',
        'Faça uma pausa curta a cada uma ou duas horas para levantar, beber água e descansar os olhos.',
        'Para recusar um pedido, use uma frase simples, como "Agora não consigo, mas posso ajudar na quinta-feira".',
      ],
    },
  },
  resultTitle: 'Seu perfil de gestão do tempo',
  resultIntro:
    'Veja como você pontuou em cada hábito. Pontuações mais altas indicam práticas mais consolidadas, mas mesmo elas têm pontos de atenção. Escolha um ou dois hábitos para trabalhar de cada vez.',
  note: 'Este resultado é uma ferramenta de autoconhecimento baseada nas suas próprias respostas e não é uma avaliação profissional. Se o cansaço ou a sobrecarga forem frequentes, vale conversar com sua liderança ou com um profissional de saúde.',
};

export default t;
