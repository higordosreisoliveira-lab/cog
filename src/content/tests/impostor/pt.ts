// Texto-fonte (português do Brasil) do teste "impostor".
// Regras para traduzir: `items` segue a MESMA ordem de ./structure.ts (cada frase pertence à
// dimensão do item na mesma posição) e as chaves de `dims` e `bands` não mudam.
// Ordem das dimensões: luck, fear, perfection, repetida 5 vezes. Nenhum item é invertido.
// Itens originais, escritos como cenários concretos de trabalho e estudo.

import type { TestText } from '../../schema';

const t: TestText = {
  title: 'Síndrome do impostor',
  desc: 'Veja com que frequência você duvida das próprias conquistas, teme que percebam suas falhas e se cobra demais no trabalho e nos estudos.',
  intro:
    'A síndrome do impostor é a sensação de que você não merece o que conquistou e de que, cedo ou tarde, alguém vai perceber isso. É uma experiência muito comum, inclusive entre pessoas competentes e bem-sucedidas, e não é um diagnóstico nem um transtorno mental. Este questionário observa três formas como ela costuma aparecer: atribuir o sucesso à sorte, ter medo de ser "descoberto" e se cobrar com perfeccionismo. São 15 situações de trabalho e de estudo. Pense nos últimos meses e indique com que frequência cada uma acontece com você. Se alguma situação não fizer parte da sua rotina, responda pensando em algo parecido que você já viveu. Não existem respostas certas ou erradas.',
  scale: ['Nunca', 'Raramente', 'Às vezes', 'Com frequência', 'Sempre'],
  items: [
    'Quando passo em uma prova difícil, penso que tive sorte e caíram justamente as questões que eu sabia.',
    'Em uma reunião ou aula, deixo de fazer uma pergunta para que ninguém perceba o que eu ainda não sei.',
    'Releio um e-mail simples várias vezes antes de enviar, com medo de deixar passar algum erro.',
    'Quando consigo uma vaga, uma bolsa ou uma promoção, acho que foi porque havia poucos candidatos ou porque alguém me ajudou.',
    'Nas primeiras semanas em um emprego ou curso novo, tenho a sensação de que logo vão perceber que escolheram a pessoa errada.',
    'Depois de uma apresentação que correu bem, passo horas pensando no único trecho em que me enrolei.',
    'Quando um projeto em que trabalhei dá certo, explico o resultado pelo esforço da equipe ou pelo bom momento, e não pelo que eu fiz.',
    'Quando meu chefe ou meu professor pede para conversar em particular, minha primeira ideia é que perceberam que eu não dou conta.',
    'Seguro um trabalho pronto por mais tempo do que precisava, porque sinto que ainda não está bom o suficiente para mostrar.',
    'Quando recebo uma nota alta ou uma boa avaliação de desempenho, penso que quem me avaliou foi generoso comigo naquele dia.',
    'Antes de apresentar um trabalho, imagino alguém fazendo uma pergunta que vai mostrar que eu sei menos do que as pessoas pensam.',
    'Quando tiro uma nota boa, mas não a máxima, fico remoendo os pontos que perdi em vez de comemorar o resultado.',
    'Quando resolvo um problema que estava travando a equipe, acho que acertei por acaso, e não porque sabia o que estava fazendo.',
    'Quando alguém me apresenta como referência em algum assunto, sinto desconforto, como se estivesse enganando as pessoas.',
    'Quando cometo um erro pequeno, como esquecer um anexo ou digitar um número errado, me critico com dureza pelo resto do dia.',
  ],
  dims: {
    luck: {
      label: 'Sucesso atribuído à sorte',
      desc: 'Mede o quanto você explica suas conquistas por fatores externos, como sorte, ajuda de outras pessoas ou circunstâncias favoráveis, em vez de reconhecer seu esforço e sua capacidade.',
      high: 'Quando algo dá certo, você tende a creditar o resultado à sorte, ao momento ou a outras pessoas. Isso pode parecer modéstia, mas, com o tempo, impede que você perceba suas próprias habilidades e faz cada nova conquista parecer um acaso. Reconhecer a sua parte não é arrogância: é uma leitura mais precisa do que aconteceu.',
      low: 'Você costuma reconhecer o papel do seu esforço e da sua capacidade nas conquistas, sem deixar de lado a ajuda que recebeu. Isso ajuda a construir uma confiança baseada em fatos e a encarar novos desafios com mais segurança. Continue prestando atenção ao que funcionou e por quê.',
      tips: [
        'Mantenha um arquivo de conquistas: anote resultados, elogios e problemas que você resolveu, com datas e detalhes, e releia quando a dúvida aparecer.',
        'Depois de um bom resultado, liste o que você fez para chegar lá, como horas de estudo, decisões e habilidades usadas, antes de pensar em sorte.',
        'Quando receber um elogio, experimente apenas agradecer, sem diminuir o que você fez nem desviar o mérito para outra pessoa.',
      ],
    },
    fear: {
      label: 'Medo de ser descoberto',
      desc: 'Mede a preocupação de que as pessoas percebam que você não é tão capaz quanto parece, e o quanto esse medo influencia o que você faz ou deixa de fazer.',
      high: 'Você costuma sentir que está enganando as pessoas e que, a qualquer momento, alguém vai perceber. Esse medo pode levar você a evitar perguntas, recusar oportunidades ou trabalhar além da conta para que ninguém note suas dúvidas. Vale lembrar que ninguém sabe tudo, e que admitir uma dúvida costuma gerar mais confiança do que desconfiança.',
      low: 'Você se sente à vontade no lugar que ocupa e não vive com a sensação de que alguém vai descobrir uma falha escondida. Isso facilita fazer perguntas, pedir ajuda e aceitar novos desafios. Essa segurança também ajuda colegas que estão começando a se sentir mais à vontade.',
      tips: [
        'Converse sobre isso com colegas de confiança: é comum descobrir que muitos deles sentem o mesmo, inclusive pessoas que você admira.',
        'Em reuniões ou aulas, faça pelo menos uma pergunta por semana e observe como as pessoas reagem de verdade.',
        'Quando o medo aparecer, pergunte a si mesmo que provas concretas existem de que você não é capaz, e compare com as provas do contrário.',
      ],
    },
    perfection: {
      label: 'Perfeccionismo e autocrítica',
      desc: 'Mede o quanto você se cobra para não errar, revisa as coisas em excesso e se critica com dureza quando algo não sai perfeito.',
      high: 'Você costuma estabelecer padrões muito altos e se criticar com dureza quando não os alcança, mesmo em detalhes pequenos. Esse cuidado pode gerar trabalhos de qualidade, mas também cansaço, atrasos e a sensação de que nada nunca está bom o suficiente. Ter padrões é saudável; o desafio é separá-los da exigência de perfeição.',
      low: 'Você se importa com a qualidade do que faz, mas aceita que erros e imperfeições fazem parte do processo. Isso ajuda a entregar no prazo, aprender com os tropeços e manter a energia ao longo do tempo. Só fique de olho para que a tranquilidade não vire descuido em tarefas que pedem mais atenção.',
      tips: [
        'Antes de começar uma tarefa, defina o que significa "pronto" para ela e pare de revisar quando chegar lá.',
        'Separe padrões de perfeição: pergunte se o detalhe que incomoda faria diferença real para quem vai receber o trabalho.',
        'Quando errar, fale consigo como falaria com um colega na mesma situação: reconheça o erro, veja o que dá para corrigir e siga em frente.',
      ],
    },
  },
  bands: {
    few: {
      label: 'Poucos sinais',
      text: 'Suas respostas indicam poucos sinais de síndrome do impostor. Você parece reconhecer suas conquistas e lidar com erros sem se cobrar demais. Ainda assim, é normal que essa sensação apareça em momentos de mudança, como um emprego novo, uma promoção ou o início de um curso.',
    },
    some: {
      label: 'Alguns sinais',
      text: 'Suas respostas indicam que a sensação de impostor aparece em algumas situações, o que é muito comum. Ela costuma ganhar força em momentos de exposição ou diante de desafios novos. Observe qual das três áreas teve a pontuação mais alta e comece pelas sugestões dela.',
    },
    strong: {
      label: 'Sinais fortes',
      text: 'Suas respostas indicam que a sensação de impostor está muito presente na sua rotina de trabalho ou de estudo. Duvidar das próprias conquistas, temer que percebam suas falhas e se cobrar o tempo todo é cansativo, e nada disso diz quanto você é capaz de verdade. Experimente as sugestões práticas e, se esse sentimento estiver causando sofrimento, considere conversar com um profissional.',
    },
  },
  resultTitle: 'Como a síndrome do impostor aparece para você',
  resultIntro:
    'O resultado soma as três áreas e mostra o quanto a sensação de impostor está presente hoje no seu trabalho ou nos seus estudos. Ele não mede sua competência: muitas pessoas muito capazes têm pontuações altas. Veja abaixo como cada área apareceu nas suas respostas.',
  note: 'Este teste é uma ferramenta de autoconhecimento baseada nas suas próprias respostas. A síndrome do impostor não é um diagnóstico médico nem um transtorno mental, e este resultado não substitui a avaliação de um psicólogo. A sensação de impostor também muda com o tempo, com o contexto e com a prática.',
  help: 'Se a sensação de impostor causa sofrimento frequente, ansiedade ou esgotamento, ou se está fazendo você recusar oportunidades, evitar desafios ou travar na carreira ou nos estudos, conversar com um(a) psicólogo(a) pode ajudar. A terapia oferece ferramentas para lidar com a autocrítica e construir uma confiança mais realista.',
};

export default t;
