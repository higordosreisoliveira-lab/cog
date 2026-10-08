// Texto-fonte (português do Brasil) do teste "Sinais de humor deprimido". Itens originais.
// `items` segue a MESMA ordem de ./structure.ts. O último item (índice 9) dispara `alert`
// quando a resposta é qualquer opção acima de "Nunca".

import type { TestText } from '../../schema';

const t: TestText = {
  title: 'Sinais de humor deprimido',
  desc: 'Veja com que frequência sinais como desânimo, perda de interesse e falta de energia apareceram nas últimas duas semanas.',
  intro:
    'Este questionário observa dois grupos de sinais ligados ao humor deprimido: mudanças no humor e no interesse pelas coisas, e mudanças na energia, no sono, no apetite e na concentração. São 10 frases sobre as últimas duas semanas. Para cada uma, indique com que frequência ela aconteceu com você nesse período. Algumas frases tocam em temas delicados: responda no seu tempo e com sinceridade. É uma autoavaliação baseada nas suas respostas, e não um diagnóstico.',
  scale: ['Nunca', 'Alguns dias', 'Mais da metade dos dias', 'Quase todos os dias'],
  items: [
    'Coisas que antes me davam prazer, como um hobby ou encontrar amigos, perderam a graça.',
    'Senti falta de energia até para tarefas simples, como tomar banho ou responder uma mensagem.',
    'Passei boa parte do dia com uma tristeza ou um vazio difícil de explicar.',
    'Meu sono mudou: demorei a pegar no sono, acordei várias vezes durante a noite ou dormi muito mais do que o normal.',
    'Meu apetite mudou: comi bem menos ou bem mais do que costumo.',
    'Olhei para os próximos meses sem esperança de que algo fosse melhorar.',
    'Perdi o fio da meada em conversas ou tarefas simples por não conseguir me concentrar.',
    'Eu me peguei pensando que não tenho valor ou que tudo o que faço dá errado.',
    'Decisões pequenas, como o que comer ou o que vestir, pareceram difíceis demais.',
    'Passaram pela minha cabeça pensamentos de que não vale a pena viver ou de me machucar.',
  ],
  dims: {
    mood: {
      label: 'Humor e interesse',
      desc: 'Mede sinais como tristeza persistente, perda de prazer nas coisas, falta de esperança e pensamentos muito negativos sobre si.',
      high: 'Nas últimas duas semanas, a tristeza, a falta de interesse ou pensamentos duros sobre si apareceram com frequência. Isso não é falta de força de vontade: o humor deprimido muda a forma como enxergamos a nós mesmos e o futuro. Conversar sobre isso com um profissional é um passo importante, e você não precisa esperar piorar para buscar ajuda.',
      low: 'Seu humor e seu interesse pelas coisas parecem ter se mantido estáveis nas últimas duas semanas. Dias tristes acontecem com todo mundo, mas não parecem ter dominado sua rotina. Continue cuidando do que faz bem a você.',
      tips: [
        'Planeje pequenas atividades agradáveis ao longo da semana, mesmo sem vontade: muitas vezes o ânimo vem depois de começar, e não antes.',
        'Mantenha contato com pessoas de confiança, mesmo que seja só uma mensagem ou uma conversa curta.',
        'Se a tristeza ou a falta de interesse durarem mais de duas semanas, procure psicólogo(a) ou médico(a) para conversar sobre isso.',
      ],
    },
    energy: {
      label: 'Energia, sono, apetite e concentração',
      desc: 'Mede mudanças no corpo e no funcionamento do dia a dia que costumam acompanhar o humor deprimido, como cansaço, alterações no sono e no apetite e dificuldade de concentração.',
      high: 'Seu corpo e sua mente deram sinais de desgaste nas últimas duas semanas: menos energia, mudanças no sono ou no apetite e dificuldade para se concentrar. Esses sinais podem acompanhar o humor deprimido, mas também podem ter outras causas, como estresse, noites mal dormidas ou questões de saúde física. Vale conversar com um médico ou uma médica, principalmente se eles continuarem.',
      low: 'Sua energia, seu sono, seu apetite e sua concentração parecem estar funcionando de forma estável. Essa base costuma ajudar muito a atravessar os dias mais difíceis. Continue cuidando dela.',
      tips: [
        'Tente manter horários regulares para dormir, acordar e comer, mesmo nos dias de pouca vontade.',
        'Saia um pouco ao ar livre e movimente o corpo, nem que seja em uma caminhada curta: a luz do dia e o movimento ajudam a regular o sono e a energia.',
        'Divida as tarefas em partes pequenas e reconheça cada uma que concluir, sem se cobrar o ritmo de antes.',
      ],
    },
  },
  bands: {
    minimal: {
      label: 'Poucos sinais',
      text: 'Suas respostas indicam poucos ou nenhum sinal de humor deprimido nas últimas duas semanas. Momentos de tristeza ou cansaço fazem parte da vida e, no seu caso, não parecem estar tomando conta da rotina. Continue cuidando do sono, do movimento e das suas relações.',
    },
    mild: {
      label: 'Sinais leves',
      text: 'Suas respostas indicam alguns sinais de humor deprimido em parte dos dias. Isso pode acontecer em fases de cansaço, perdas ou mudanças. Observe como você se sente nas próximas semanas e, se os sinais continuarem ou aumentarem, converse com um profissional.',
    },
    moderate: {
      label: 'Sinais moderados',
      text: 'Suas respostas indicam sinais de humor deprimido em boa parte dos dias, o que pode estar pesando no seu dia a dia. Isso merece atenção e cuidado, e não é algo que você precisa resolver por conta própria. Procure um profissional, como psicólogo(a) ou médico(a), para conversar sobre o que tem sentido.',
    },
    high: {
      label: 'Sinais intensos',
      text: 'Suas respostas indicam sinais frequentes e intensos de humor deprimido nas últimas duas semanas. Isso pode tornar tudo mais difícil, mas existe tratamento, e as pessoas melhoram com o apoio certo. Procure um profissional, como psicólogo(a) ou médico(a), assim que puder, e conte para alguém de confiança como você está.',
    },
  },
  resultTitle: 'Seus sinais de humor',
  resultIntro: 'O resultado soma suas respostas sobre as últimas duas semanas. Abaixo, você vê a faixa em que ficou e como pontuou em humor e interesse e em energia, sono, apetite e concentração.',
  note: 'Este questionário é uma ferramenta de autoconhecimento e triagem, baseada nas suas próprias respostas. Ele não é um diagnóstico de depressão: só um profissional qualificado, como psicólogo(a) ou médico(a), pode fazer essa avaliação. Cansaço e mudanças no sono e no apetite também podem ter outras causas, inclusive físicas.',
  help: 'Para conversar sobre o que você está sentindo, procure psicólogo(a) ou médico(a) de família. No Brasil, as Unidades Básicas de Saúde (UBS) oferecem atendimento gratuito e podem encaminhar você para um Centro de Atenção Psicossocial (CAPS) quando necessário. Se estiver em sofrimento, o CVV oferece apoio emocional gratuito e sigiloso pelo telefone 188, 24 horas por dia, ou por chat em cvv.org.br. Em uma emergência, ligue 192 (SAMU). Fora do Brasil, procure os serviços de saúde, uma linha de apoio emocional ou o número de emergência do seu país.',
  alert:
    'Você contou que, nas últimas duas semanas, teve pensamentos de que não vale a pena viver ou de se machucar. Que bom que você respondeu com sinceridade. Esses pensamentos merecem cuidado agora, e você não precisa passar por isso sem ninguém ao seu lado. Se estiver em perigo ou sentir que pode se machucar, ligue agora para o SAMU (192) ou para a polícia (190). Para conversar com alguém a qualquer hora, o CVV atende de graça pelo telefone 188, 24 horas por dia, ou pelo chat em cvv.org.br. Fora do Brasil, ligue para o número de emergência local ou procure uma linha de apoio emocional do seu país. Se puder, conte também para alguém de confiança como você está se sentindo.',
};

export default t;
