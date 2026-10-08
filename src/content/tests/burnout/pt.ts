// Texto-fonte (português do Brasil) do teste "Nível de burnout". Itens originais.
// `items` segue a MESMA ordem de ./structure.ts (exhaustion, detachment e efficacy intercalados).
// Os itens de `efficacy` são positivos e invertidos: a pontuação dessa dimensão sobe quando a
// sensação de realização aparece POUCO, por isso os textos de `efficacy` falam da falta dela.

import type { TestText } from '../../schema';

const t: TestText = {
  title: 'Nível de burnout',
  desc: 'Veja se o trabalho tem deixado você sem energia, distante do que faz ou com a sensação de que seu esforço não rende.',
  intro:
    'O burnout é um desgaste ligado ao trabalho que costuma aparecer em três frentes: exaustão, distanciamento do trabalho e perda da sensação de realização. São 15 frases sobre os últimos três meses. Para cada uma, indique com que frequência ela aconteceu com você nesse período. Se você não tem um emprego formal, pense na sua atividade principal, como os estudos, um negócio próprio ou o cuidado com alguém. Algumas frases descrevem situações positivas: responda a elas da mesma forma, pensando só na frequência. É uma autoavaliação baseada nas suas respostas, e não um diagnóstico.',
  scale: ['Nunca', 'Raramente', 'Às vezes', 'Com frequência', 'Sempre'],
  items: [
    'Depois do expediente, minha energia só deu para ficar no sofá ou rolando o celular.',
    'Fiz só o mínimo necessário no trabalho, sem me envolver de verdade com as tarefas.',
    'Terminei o dia de trabalho com a sensação de que meu esforço gerou algum resultado.',
    'Na véspera de voltar ao trabalho, senti um peso só de lembrar do que vinha pela frente.',
    'Tratei colegas, clientes ou as pessoas que atendo com mais frieza ou impaciência do que gostaria.',
    'Diante de um problema no trabalho, confiei na minha capacidade de encontrar uma saída.',
    'Mesmo depois de folgas ou férias, o cansaço voltou logo nos primeiros dias de trabalho.',
    'Tive a sensação de que tanto fazia se eu fizesse meu trabalho bem ou mal.',
    'Aprendi algo novo ou melhorei em alguma parte do meu trabalho.',
    'Precisei de um esforço enorme só para conseguir chegar ao fim do dia de trabalho.',
    'Contei as horas para o expediente acabar.',
    'Percebi que meu trabalho ajudou alguém, seja um colega, um cliente ou a equipe.',
    'Deixei de lado amigos, família ou atividades de que gosto porque o trabalho me deixou sem energia.',
    'Evitei mensagens, reuniões ou conversas de trabalho sempre que pude.',
    'Senti orgulho de algo que fiz no trabalho.',
  ],
  dims: {
    exhaustion: {
      label: 'Exaustão',
      desc: 'Mede o cansaço físico e mental ligado ao trabalho, aquele que não passa com uma noite de sono ou um fim de semana de descanso.',
      high: 'O trabalho tem consumido mais energia do que você consegue repor. O cansaço não fica só no expediente: ele acompanha você para casa, para as folgas e para as suas relações. Esse costuma ser o primeiro sinal de que o ritmo atual não é sustentável.',
      low: 'Você tem conseguido recuperar a energia entre um dia de trabalho e outro. O cansaço aparece, como em qualquer rotina, mas não parece se acumular. Continue protegendo seus momentos de descanso.',
      tips: [
        'Defina um horário para encerrar o expediente e crie um pequeno ritual de saída, como fechar o computador e dar uma volta.',
        'Proteja o sono e reserve tempo para se movimentar, mesmo que sejam caminhadas curtas.',
        'Use as folgas para descansar de verdade, sem checar mensagens de trabalho.',
      ],
    },
    detachment: {
      label: 'Distanciamento do trabalho',
      desc: 'Mede o quanto você tem se afastado do trabalho e das pessoas ligadas a ele, com menos envolvimento, mais frieza ou a sensação de que tanto faz.',
      high: 'Você tem sentido vontade de se afastar do trabalho e das pessoas ligadas a ele, fazendo o mínimo e perdendo o interesse pelo que antes importava. Muitas vezes, esse distanciamento é uma forma de se proteger do desgaste, e não falta de caráter ou de compromisso. Vale entender o que levou a isso e o que poderia mudar.',
      low: 'Você continua se envolvendo com o seu trabalho e com as pessoas ligadas a ele. Mesmo nos dias difíceis, ele parece manter algum sentido para você. Esse vínculo ajuda a proteger contra o desgaste.',
      tips: [
        'Lembre-se do que levou você a escolher esse trabalho e procure tarefas que se aproximem disso.',
        'Converse com a liderança ou com colegas sobre o que tem tirado o sentido do trabalho, como metas irreais ou falta de autonomia.',
        'Cultive relações de apoio no trabalho: uma conversa sincera com um colega de confiança pode aliviar bastante.',
      ],
    },
    efficacy: {
      label: 'Baixa realização',
      desc: 'Mede o quanto falta a sensação de que seu trabalho dá resultado, de que você é capaz e de que está crescendo. As frases desta parte são positivas, então a pontuação sobe quando elas aconteceram pouco.',
      high: 'Tem sido raro sentir que seu esforço rende, que você é capaz ou que seu trabalho faz diferença. Essa sensação pode vir do próprio cansaço, que distorce a forma como você enxerga seu desempenho, ou de um ambiente com pouco reconhecimento. Ela não mede o seu valor como profissional.',
      low: 'Você continua percebendo que seu trabalho dá resultado, que é capaz de resolver problemas e que está aprendendo. Essa sensação de realização ajuda a manter a motivação mesmo nas fases mais puxadas.',
      tips: [
        'No fim da semana, anote três coisas que você concluiu ou resolveu, por menores que sejam.',
        'Peça a alguém de confiança um retorno sobre o seu trabalho, para ter uma visão mais equilibrada do seu desempenho.',
        'Busque um pequeno desafio ou aprendizado que traga de volta a sensação de progresso.',
      ],
    },
  },
  bands: {
    low: {
      label: 'Poucos sinais de burnout',
      text: 'Suas respostas indicam poucos sinais de burnout. Você parece manter energia, envolvimento e sensação de realização no trabalho, mesmo com as dificuldades normais da rotina. Continue cuidando dos limites e dos hábitos que ajudam você a manter esse equilíbrio.',
    },
    moderate: {
      label: 'Sinais moderados de burnout',
      text: 'Suas respostas indicam alguns sinais de desgaste ligados ao trabalho. Este é um bom momento para agir, antes que o cansaço se acumule. Observe o que mais tem pesado, experimente as sugestões abaixo e, se possível, converse com a liderança sobre ajustes na rotina.',
    },
    high: {
      label: 'Sinais fortes de burnout',
      text: 'Suas respostas indicam sinais fortes de burnout, como muito cansaço, distanciamento do trabalho e pouca sensação de realização. Esse desgaste costuma pedir mudanças reais na rotina, e não só mais força de vontade. Procure um profissional, como psicólogo(a) ou médico(a), para avaliar como você está e quais caminhos fazem sentido no seu caso.',
    },
  },
  resultTitle: 'Seu nível de burnout',
  resultIntro: 'O resultado soma suas respostas sobre os últimos três meses. Nas frases sobre realização, a contagem é invertida: quanto menos você sentiu realização, mais o resultado sobe. Abaixo, você vê a faixa em que ficou e como pontuou em cada parte.',
  note: 'Este questionário é uma ferramenta de autoconhecimento, baseada na sua própria percepção. O burnout é um desgaste ligado ao trabalho e não é, por si só, um diagnóstico médico. Sinais parecidos também aparecem na depressão, na ansiedade e em problemas de saúde física, e só um profissional qualificado pode fazer essa avaliação.',
  help: 'Se o trabalho estiver afetando sua saúde, procure psicólogo(a) ou médico(a) de família. No Brasil, as Unidades Básicas de Saúde (UBS) oferecem atendimento gratuito e podem encaminhar você para um Centro de Atenção Psicossocial (CAPS) quando necessário. Se a sua empresa tiver serviço de saúde ocupacional ou programa de apoio ao colaborador, ele também pode ajudar. Se estiver em sofrimento intenso, o CVV oferece apoio emocional gratuito e sigiloso pelo telefone 188, 24 horas por dia, ou por chat em cvv.org.br. Em uma emergência, ligue 192 (SAMU). Fora do Brasil, procure os serviços de saúde, uma linha de apoio emocional ou o número de emergência do seu país.',
};

export default t;
