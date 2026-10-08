// Texto-fonte (português do Brasil) do teste "Nível de estresse". Itens originais.
// `items` segue a MESMA ordem de ./structure.ts (load e coping intercalados).
// Os itens de `coping` são positivos e invertidos: a pontuação dessa dimensão sobe quando
// controle e recuperação aparecem POUCO, por isso os textos de `coping` falam da falta deles.

import type { TestText } from '../../schema';

const t: TestText = {
  title: 'Nível de estresse',
  desc: 'Veja o quanto a sobrecarga pesou no último mês e como anda a sua capacidade de recuperar o fôlego.',
  intro:
    'Este questionário avalia o estresse por dois lados: a sobrecarga e a pressão que você sentiu, e a sensação de controle e de recuperação que ajuda a equilibrar esse peso. São 12 frases sobre o último mês. Para cada uma, indique com que frequência ela aconteceu com você nesse período. Algumas frases descrevem situações positivas: responda a elas da mesma forma, pensando só na frequência. É uma autoavaliação baseada nas suas respostas e não substitui a avaliação de um profissional.',
  scale: ['Nunca', 'Quase nunca', 'Às vezes', 'Com frequência', 'Muito frequentemente'],
  items: [
    'Minhas tarefas e responsabilidades pareceram maiores do que as horas do dia.',
    'Consegui reservar um tempo para descansar, sem culpa.',
    'Cheguei ao fim do dia sentindo que as pendências só aumentavam.',
    'Quando surgiu um problema, consegui parar e pensar com calma no que fazer.',
    'Senti uma cobrança forte, vinda de outras pessoas ou de mim, para dar conta de tudo.',
    'Senti que conseguia organizar o meu dia do jeito que precisava.',
    'Perdi a paciência com coisas que normalmente não me incomodariam.',
    'Depois de um dia difícil, uma boa noite de sono ou um momento de lazer bastou para eu me recuperar.',
    'Continuei pensando nas minhas pendências mesmo nos momentos que deveriam ser de descanso.',
    'Tive com quem contar quando precisei desabafar ou pedir ajuda.',
    'Senti sinais físicos de tensão, como dor de cabeça, mandíbula travada ou um cansaço que não passava.',
    'Consegui dizer não ou adiar pedidos quando já estava com coisas demais.',
  ],
  dims: {
    load: {
      label: 'Sobrecarga e pressão',
      desc: 'Mede o quanto você sentiu excesso de tarefas, cobranças e tensão, e o quanto isso acompanhou você mesmo nas horas de descanso.',
      high: 'No último mês, a sensação de sobrecarga foi frequente: muita coisa para fazer, cobranças e pouca folga para a cabeça. O corpo e a mente aguentam esse ritmo por um tempo, mas ele cobra um preço quando dura muito. Vale olhar para o que pode ser reduzido, dividido ou adiado.',
      low: 'No último mês, a pressão apareceu pouco ou ficou em um nível que você conseguiu administrar. Isso não quer dizer que não houve desafios, mas eles não parecem ter se acumulado. Observe o que tem funcionado para manter esse equilíbrio.',
      tips: [
        'Liste as tarefas da semana e separe o que é realmente urgente, o que pode esperar e o que pode ser dividido com outras pessoas.',
        'Faça pausas curtas ao longo do dia, longe das telas, mesmo que sejam de cinco minutos.',
        'Combine limites claros, como um horário a partir do qual você não responde mais mensagens de trabalho.',
      ],
    },
    coping: {
      label: 'Controle e recuperação em baixa',
      desc: 'Mede a falta dos recursos que equilibram o estresse, como sentir que a rotina está nas suas mãos, descansar, contar com apoio e colocar limites. As frases desta parte são positivas, então a pontuação sobe quando elas aconteceram pouco.',
      high: 'No último mês, momentos de descanso, de apoio e de sensação de controle foram raros. Sem essas pausas, até uma rotina comum pesa mais, porque não sobra espaço para recuperar o fôlego. Fortalecer esses recursos aos poucos é uma das formas mais eficazes de reduzir o estresse.',
      low: 'Você tem conseguido descansar, pedir ajuda e sentir que a rotina está, em boa parte, nas suas mãos. Esses recursos funcionam como um amortecedor: ajudam a atravessar fases difíceis sem se esgotar. Continue protegendo esses momentos, principalmente quando a rotina apertar.',
      tips: [
        'Proteja o sono: tente dormir e acordar em horários parecidos, inclusive nos fins de semana.',
        'Coloque na agenda pelo menos uma atividade por semana que traga prazer ou descanso e trate esse horário como um compromisso.',
        'Conte para alguém de confiança como você está: dividir o peso já ajuda a aliviá-lo.',
      ],
    },
  },
  bands: {
    low: {
      label: 'Estresse baixo',
      text: 'Suas respostas indicam um nível baixo de estresse no último mês. Você parece encontrar um bom equilíbrio entre as demandas da rotina e os momentos de recuperação. Continue cuidando dos hábitos que sustentam esse equilíbrio.',
    },
    moderate: {
      label: 'Estresse moderado',
      text: 'Suas respostas indicam um nível moderado de estresse, algo comum em fases de muitas demandas. O ponto de atenção é quando esse estado vira o normal, sem períodos de alívio. Experimente as sugestões abaixo e, se o estresse começar a afetar seu sono, sua saúde ou suas relações, converse com um profissional.',
    },
    high: {
      label: 'Estresse alto',
      text: 'Suas respostas indicam um nível alto de estresse no último mês, com muita pressão e pouco espaço para se recuperar. Quando essa situação se prolonga, ela pode afetar o sono, o humor e a saúde física. Vale buscar a ajuda de um profissional, como psicólogo(a) ou médico(a), para entender o que está pesando e encontrar formas de aliviar a carga.',
    },
  },
  resultTitle: 'Seu nível de estresse',
  resultIntro: 'O resultado soma suas respostas sobre o último mês. Nas frases sobre controle e recuperação, a contagem é invertida: quanto menos esses recursos apareceram, mais o resultado sobe. Abaixo, você vê a faixa em que ficou e como pontuou em cada parte.',
  note: 'Este questionário é uma ferramenta de autoconhecimento, baseada na sua própria percepção do último mês. Ele não é um diagnóstico e não substitui a avaliação de um profissional qualificado. O nível de estresse também varia bastante de uma fase da vida para outra.',
  help: 'Se o estresse estiver afetando sua saúde, seu sono ou suas relações, procure psicólogo(a) ou médico(a) de família. No Brasil, as Unidades Básicas de Saúde (UBS) oferecem atendimento gratuito e podem encaminhar você para um Centro de Atenção Psicossocial (CAPS) quando necessário. Se estiver em sofrimento intenso, o CVV oferece apoio emocional gratuito e sigiloso pelo telefone 188, 24 horas por dia, ou por chat em cvv.org.br. Em uma emergência, ligue 192 (SAMU). Fora do Brasil, procure os serviços de saúde, uma linha de apoio emocional ou o número de emergência do seu país.',
};

export default t;
