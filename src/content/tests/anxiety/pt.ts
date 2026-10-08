// Texto-fonte (português do Brasil) do teste "Nível de ansiedade". Itens originais.
// `items` segue a MESMA ordem de ./structure.ts (worry e tension intercalados).

import type { TestText } from '../../schema';

const t: TestText = {
  title: 'Nível de ansiedade',
  desc: 'Veja com que frequência a preocupação e a tensão no corpo apareceram na sua rotina nas últimas duas semanas.',
  intro:
    'Este questionário olha para dois lados da ansiedade: a preocupação, que ocupa os pensamentos, e a tensão, que aparece no corpo e no comportamento. São 10 frases sobre as últimas duas semanas. Para cada uma, indique com que frequência ela aconteceu com você nesse período, e não como você costuma ser em geral. Não há respostas certas ou erradas. É uma autoavaliação baseada nas suas respostas: ela ajuda a perceber como você está, mas não é um diagnóstico.',
  scale: ['Nunca', 'Alguns dias', 'Mais da metade dos dias', 'Quase todos os dias'],
  items: [
    'Passei boa parte do dia com a cabeça ocupada por preocupações, uma puxando a outra.',
    'Senti o corpo tenso, principalmente nos ombros, no pescoço ou na mandíbula.',
    'Tentei pensar em outra coisa, mas os mesmos pensamentos preocupantes voltavam.',
    'Percebi o coração disparado ou a respiração curta sem ter feito nenhum esforço físico.',
    'Na hora de dormir, minha cabeça ficou repassando problemas e pendências.',
    'Tive dificuldade de ficar sem me mexer, balançando as pernas, mexendo nas mãos ou andando de um lado para o outro.',
    'Diante de algo simples, como uma mensagem sem resposta, logo pensei no pior.',
    'Pequenos imprevistos, como um barulho ou um atraso, me tiraram do sério mais do que o normal.',
    'Adiei decisões ou evitei situações por medo de que algo desse errado.',
    'Mesmo nos momentos de folga, meu corpo continuou em alerta e não consegui desacelerar.',
  ],
  dims: {
    worry: {
      label: 'Preocupação',
      desc: 'Mede o quanto pensamentos preocupantes ocuparam sua cabeça, voltaram mesmo quando você tentou se distrair e influenciaram suas decisões.',
      high: 'Nas últimas semanas, a preocupação ocupou bastante espaço nos seus pensamentos, muitas vezes antecipando problemas que ainda não aconteceram. Isso cansa e tira o foco do que está ao seu alcance agora. Vale aprender formas de colocar um limite nesses pensamentos e buscar apoio se eles estiverem atrapalhando sua rotina.',
      low: 'A preocupação apareceu pouco ou de forma passageira nas últimas semanas. Você parece conseguir pensar nos problemas sem que eles tomem conta do seu dia. Continue cuidando dos hábitos que ajudam você a manter esse equilíbrio.',
      tips: [
        'Reserve 15 minutos por dia para anotar suas preocupações e, ao lado de cada uma, escreva um próximo passo possível ou se ela está fora do seu controle.',
        'Quando perceber que está imaginando o pior, pergunte a si: o que é mais provável que aconteça de verdade?',
        'Diminua o tempo com notícias e redes sociais, principalmente antes de dormir.',
      ],
    },
    tension: {
      label: 'Tensão no corpo e inquietação',
      desc: 'Mede sinais físicos e de comportamento ligados à ansiedade, como músculos tensos, coração acelerado, inquietação e irritação com pequenas coisas.',
      high: 'Seu corpo deu muitos sinais de alerta nas últimas semanas, como tensão, inquietação ou reações fortes a pequenos imprevistos. Essa é a forma como o corpo responde à pressão, mas, quando dura muito, cansa e atrapalha o descanso. Práticas que acalmam o corpo costumam ajudar, e vale conversar com um profissional se os sinais forem intensos ou frequentes.',
      low: 'Seu corpo mostrou poucos sinais de tensão nas últimas semanas, e você conseguiu desacelerar nos momentos de descanso. Isso indica que a pressão do dia a dia não está se acumulando no corpo.',
      tips: [
        'Experimente respirar devagar por alguns minutos, soltando o ar por mais tempo do que leva para puxá-lo.',
        'Movimente o corpo com regularidade: uma caminhada de 20 a 30 minutos já ajuda a descarregar a tensão.',
        'Se sentir o coração disparado, falta de ar ou dor no peito com frequência, procure um médico ou uma médica para avaliar outras possíveis causas.',
      ],
    },
  },
  bands: {
    minimal: {
      label: 'Ansiedade mínima',
      text: 'Suas respostas indicam poucos sinais de ansiedade nas últimas duas semanas. Preocupações e momentos de tensão fazem parte da vida e, no seu caso, não parecem estar pesando na rotina. Continue cuidando do sono, do movimento e das suas relações.',
    },
    mild: {
      label: 'Ansiedade leve',
      text: 'Suas respostas indicam alguns sinais de ansiedade, presentes em parte dos dias. Isso é comum em fases mais corridas ou de mudança. Vale observar o que tem gerado preocupação e experimentar as sugestões abaixo; se os sinais aumentarem ou durarem muito, converse com um profissional.',
    },
    moderate: {
      label: 'Ansiedade moderada',
      text: 'Suas respostas indicam que a preocupação e a tensão estiveram presentes em boa parte dos dias. Isso pode cansar e afetar o sono, a concentração e as relações. Conversar com um profissional, como psicólogo(a) ou médico(a), pode ajudar você a entender o que está acontecendo e a encontrar formas de lidar com isso.',
    },
    high: {
      label: 'Ansiedade alta',
      text: 'Suas respostas indicam sinais intensos de ansiedade em quase todos os dias das últimas duas semanas. Isso não define quem você é, mas mostra que você está carregando um peso grande, e existem formas eficazes de cuidar disso. Procure um profissional, como psicólogo(a) ou médico(a), para uma avaliação e para pensar juntos nos próximos passos.',
    },
  },
  resultTitle: 'Seu nível de ansiedade',
  resultIntro: 'O resultado considera a soma das suas respostas sobre as últimas duas semanas. Abaixo, você vê a faixa em que ficou e como pontuou em preocupação e em tensão no corpo.',
  note: 'Este questionário é uma ferramenta de autoconhecimento e triagem, baseada nas suas próprias respostas. Ele não é um diagnóstico: só um profissional qualificado, como psicólogo(a) ou médico(a), pode avaliar a ansiedade de forma completa. Alguns sinais físicos, como palpitações e falta de ar, também podem ter outras causas.',
  help: 'Se a ansiedade estiver atrapalhando sua rotina, procure psicólogo(a) ou médico(a) de família. No Brasil, as Unidades Básicas de Saúde (UBS) oferecem atendimento gratuito e podem encaminhar você para um Centro de Atenção Psicossocial (CAPS) quando necessário. Se estiver em sofrimento intenso, o CVV oferece apoio emocional gratuito e sigiloso pelo telefone 188, 24 horas por dia, ou por chat em cvv.org.br. Em uma emergência, ligue 192 (SAMU). Fora do Brasil, procure os serviços de saúde, uma linha de apoio emocional ou o número de emergência do seu país.',
};

export default t;
