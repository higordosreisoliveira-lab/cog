// Texto-fonte (português do Brasil). `items` segue a MESMA ordem de ./structure.ts e as chaves de `dims` não mudam.
// Itens originais. Pontuação alta em uma dimensão = aquele motivo contribui mais para os adiamentos.

import type { TestText } from '../../schema';

const t: TestText = {
  title: 'Procrastinação',
  desc: 'Descubra o que costuma levar você a adiar tarefas e conheça estratégias práticas para cada motivo.',
  intro:
    'Quase todo mundo adia tarefas de vez em quando, mas os motivos variam de pessoa para pessoa. Este questionário avalia quatro motivos comuns: evitar desconforto, medo de não fazer perfeito, distração e falta de clareza no planejamento. São 16 frases. Pense nas últimas semanas e indique com que frequência cada situação acontece com você. Não há respostas certas: o objetivo é entender o que pesa mais no seu caso para escolher as estratégias certas.',
  scale: ['Nunca', 'Raramente', 'Às vezes', 'Com frequência', 'Sempre'],
  items: [
    'Adio tarefas que me causam ansiedade, mesmo sabendo que são importantes.',
    'Demoro a começar porque sinto que tudo precisa sair perfeito desde o início.',
    'Pego o celular para ver algo rápido e acabo passando muito mais tempo do que pretendia.',
    'Adio uma tarefa porque não sei exatamente por onde começar.',
    'Deixo para depois ligações, mensagens ou conversas que podem ser difíceis.',
    'Fico revisando e ajustando um trabalho por tanto tempo que acabo atrasando a entrega.',
    'No meio de uma tarefa, mudo para outra coisa assim que algo mais interessante aparece.',
    'Tenho tantas coisas para fazer que não sei qual delas fazer primeiro.',
    'Evito abrir e-mails, contas ou mensagens por receio do que posso encontrar.',
    'Prefiro não começar a correr o risco de fazer algo abaixo do que espero de mim.',
    'Notificações, conversas ou barulhos ao redor me tiram facilmente do que estou fazendo.',
    'Calculo mal quanto tempo uma tarefa vai levar e acabo com menos tempo do que precisava.',
    'Quando uma tarefa me parece chata ou desagradável, procuro outra coisa mais agradável para fazer.',
    'Espero o momento ideal, com bastante tempo e energia, para começar tarefas importantes.',
    'Faço o que tenho vontade na hora, mesmo sabendo que deveria estar fazendo outra coisa.',
    'Quando uma tarefa é grande ou vaga, tenho dificuldade de transformá-la em passos concretos.',
  ],
  dims: {
    avoidance: {
      label: 'Evitar desconforto',
      desc: 'Adiar tarefas porque elas trazem tédio, ansiedade, medo ou outras sensações desagradáveis.',
      high: 'Boa parte dos seus adiamentos parece vir da vontade de fugir de sensações desagradáveis, como ansiedade, tédio ou medo de uma resposta ruim. Isso indica que você sente as emoções com intensidade, o que também ajuda a perceber o que importa. O ponto de atenção é que o alívio de adiar dura pouco, e a tarefa costuma ficar ainda mais pesada depois.',
      low: 'O desconforto de uma tarefa raramente impede você de começá-la. Essa capacidade de encarar o que é chato ou difícil é uma grande vantagem. O ponto de atenção é se forçar a continuar mesmo quando o cansaço ou a sobrecarga pedem uma pausa.',
      tips: [
        'Comece com apenas dois minutos: abra o arquivo ou escreva a primeira frase. Depois disso, você pode parar, se quiser. Começar costuma ser a parte mais difícil.',
        'Dê nome ao que está sentindo, como "tenho medo de receber uma crítica". Reconhecer a emoção costuma diminuir a força dela.',
        'Faça a tarefa mais desagradável logo no início do dia, antes de abrir e-mails ou redes sociais.',
      ],
    },
    perfectionism: {
      label: 'Perfeccionismo',
      desc: 'Adiar tarefas por medo de não fazê-las bem o suficiente ou por esperar o momento ideal para começar.',
      high: 'Você parece adiar coisas porque quer que elas fiquem perfeitas ou porque espera ter tempo e energia ideais para começar. Esse cuidado mostra que você leva o trabalho a sério e tem padrões altos. O ponto de atenção é que o momento ideal raramente chega, e o medo de errar pode atrasar ou impedir entregas importantes.',
      low: 'Você costuma começar mesmo sem ter tudo perfeito e aceita fazer ajustes ao longo do caminho. Isso traz agilidade e ajuda a aprender com a prática. O ponto de atenção é entregar algo com menos cuidado do que a situação pedia, especialmente em tarefas importantes.',
      tips: [
        'Antes de começar, escreva o que é "bom o suficiente" para aquela tarefa.',
        'Faça uma primeira versão rápida, sabendo que ela será melhorada depois.',
        'Defina um limite de tempo para as revisões e entregue quando ele terminar.',
      ],
    },
    distraction: {
      label: 'Distração e impulso',
      desc: 'Adiar tarefas porque a atenção é atraída por estímulos mais imediatos, como o celular, conversas ou atividades mais agradáveis.',
      high: 'Sua atenção parece ser atraída com facilidade por notificações, conversas ou atividades mais interessantes do que a tarefa do momento. Essa sensibilidade a estímulos novos também pode trazer agilidade e criatividade. O ponto de atenção é que pequenas interrupções, somadas, consomem horas do seu dia sem que você perceba.',
      low: 'Você consegue manter o foco mesmo com estímulos ao redor e resiste bem à vontade de trocar uma tarefa por algo mais agradável. Isso é uma grande vantagem em trabalhos que exigem concentração. O ponto de atenção é se fechar demais na tarefa e não perceber pedidos ou mudanças importantes ao redor.',
      tips: [
        'Deixe o celular em outro cômodo ou em modo silencioso enquanto trabalha em algo importante.',
        'Trabalhe em blocos de 25 minutos, com pausas de 5 minutos entre eles.',
        'Anote as ideias e vontades que surgirem durante a tarefa para resolvê-las depois, em vez de interromper o que está fazendo.',
      ],
    },
    planning: {
      label: 'Falta de clareza e planejamento',
      desc: 'Adiar tarefas porque não está claro por onde começar, o que fazer primeiro ou quanto tempo cada coisa vai levar.',
      high: 'Muitas vezes você adia não por falta de vontade, mas porque a tarefa parece grande, vaga ou confusa. Isso mostra que você percebe a complexidade das coisas. O ponto de atenção é que, sem passos concretos, até tarefas simples parecem difíceis e acabam ficando para depois.',
      low: 'Você costuma saber por onde começar e consegue transformar tarefas grandes em passos práticos. Isso facilita manter o ritmo e cumprir prazos. O ponto de atenção é planejar com tanta precisão que fica difícil se adaptar quando algo muda.',
      tips: [
        'Divida cada tarefa grande em passos de no máximo 30 minutos e escreva qual é o primeiro.',
        'Decida antes quando e onde vai fazer a tarefa, por exemplo: "Na terça, às 9h, na minha mesa, vou escrever a introdução do relatório".',
        'Estime quanto tempo cada tarefa vai levar e acrescente uma margem de pelo menos 50%.',
      ],
    },
  },
  resultTitle: 'Por que você adia as coisas',
  resultIntro:
    'Cada barra mostra o quanto um motivo aparece nas suas respostas. Quanto mais alta a pontuação, mais esse fator contribui para seus adiamentos. Comece pelas estratégias do motivo com a pontuação mais alta.',
  note: 'Este questionário é uma ferramenta de autoconhecimento e não um diagnóstico. Se a dificuldade para começar ou terminar tarefas for constante e estiver atrapalhando seus estudos, seu trabalho ou sua vida pessoal, vale conversar com um profissional de saúde, pois ela pode estar ligada a questões como ansiedade, depressão ou TDAH.',
};

export default t;
