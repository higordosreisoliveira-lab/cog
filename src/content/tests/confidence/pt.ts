import type { TestText } from '../../schema';

const t: TestText = {
  "title": "Autoconfiança",
  "desc": "Descubra como está sua autoconfiança em quatro áreas: autoestima, confiança nas suas capacidades, recuperação depois de erros e assertividade.",
  "intro": "Este questionário mostra como você costuma se sentir e agir em situações do dia a dia que pedem autoconfiança. São 16 frases que descrevem cenas comuns, como receber um elogio, encarar uma tarefa nova ou dizer não a um pedido. Para cada uma, indique o quanto ela descreve você hoje, pensando nos últimos meses, e não como gostaria de ser. Se nunca viveu exatamente aquela situação, responda pensando em como costuma reagir em casos parecidos. Não existem respostas certas ou erradas.",
  "scale": [
    "Discordo totalmente",
    "Discordo",
    "Neutro",
    "Concordo",
    "Concordo totalmente"
  ],
  "items": [
    "Quando alguém elogia algo que fiz, consigo agradecer sem diminuir o meu mérito.",
    "Quando recebo uma tarefa que nunca fiz antes, acredito que vou conseguir aprender no caminho.",
    "Depois de receber uma crítica dura no trabalho ou nos estudos, volto a me concentrar no que preciso fazer em pouco tempo.",
    "Quando um prato chega errado no restaurante, peço com tranquilidade para trocarem.",
    "Depois de ver as conquistas de conhecidos nas redes sociais, fico com a sensação de que valho menos do que eles.",
    "Diante de um problema prático em casa, como um aparelho que parou de funcionar, confio que consigo descobrir uma solução.",
    "Quando um plano dá errado, como uma entrevista de emprego que não deu certo, consigo tirar uma lição e tentar de novo.",
    "Quando alguém me pede um favor num momento em que estou sem tempo, acabo aceitando mesmo querendo dizer não.",
    "Num dia em que não consegui fazer quase nada do que planejei, ainda me trato com respeito e gentileza.",
    "Antes de uma apresentação ou prova, costumo achar que não vou dar conta, mesmo tendo me preparado.",
    "Quando recebo um não a um pedido importante, como uma proposta ou um convite, consigo me recompor em pouco tempo.",
    "Numa reunião ou conversa em grupo, digo quando discordo, mesmo que a maioria pense diferente.",
    "Quando me olho no espelho de manhã, costumo me aceitar do jeito que sou, com qualidades e defeitos.",
    "Quando preciso tomar uma decisão importante, como mudar de emprego ou de cidade, confio no meu próprio julgamento.",
    "Quando esqueço um compromisso ou decepciono alguém, fico remoendo isso por vários dias.",
    "Se alguém fura a fila na minha frente, aviso a pessoa de forma educada."
  ],
  "dims": {
    "selfWorth": {
      "label": "Autoestima",
      "desc": "Mede o quanto você se valoriza e se respeita, independentemente de resultados, elogios ou comparações com outras pessoas.",
      "high": "Você costuma se tratar com respeito e reconhecer o próprio valor, mesmo em dias ruins ou diante das conquistas dos outros. Isso traz estabilidade e deixa você menos dependente da aprovação alheia. O ponto de atenção é que uma imagem muito positiva de si pode esconder pontos cegos, por isso vale continuar ouvindo com abertura quem convive com você.",
      "low": "Você tende a medir o próprio valor pelos resultados, pela opinião dos outros ou por comparações, e isso pesa mais nos dias difíceis. Esse olhar crítico costuma vir junto com humildade e vontade de melhorar. O ponto de atenção é o desgaste: tratar a si com dureza o tempo todo cansa e faz você deixar de valorizar o que já faz bem.",
      "tips": [
        "No fim do dia, anote uma coisa que você fez bem, por menor que seja.",
        "Quando receber um elogio, responda apenas com um agradecimento, sem se justificar ou diminuir o que fez.",
        "Repare quando você se compara nas redes sociais e lembre que ali aparece só uma parte da vida das pessoas."
      ]
    },
    "capability": {
      "label": "Confiança nas próprias capacidades",
      "desc": "Mede o quanto você acredita que consegue aprender, resolver problemas e dar conta de desafios novos.",
      "high": "Você costuma encarar tarefas novas e decisões difíceis com a sensação de que vai encontrar um caminho. Isso ajuda a tomar iniciativa e a não travar diante do desconhecido. O ponto de atenção é superestimar o que dá para fazer sem apoio ou dentro do prazo, e deixar de pedir ajuda ou de ouvir quem tem mais experiência no assunto.",
      "low": "Você tende a duvidar da sua capacidade, mesmo quando já se preparou ou tem experiência no assunto. Essa cautela pode levar a um preparo cuidadoso e a menos decisões impulsivas. O ponto de atenção é deixar de tentar coisas que você daria conta e perder oportunidades por achar que ainda não é a hora.",
      "tips": [
        "Antes de um desafio, lembre de duas ou três situações parecidas em que você se saiu bem.",
        "Divida uma tarefa nova em passos pequenos e repare em cada um que você concluir.",
        "Peça a opinião de alguém de confiança sobre seus planos: isso ajuda a calibrar tanto o excesso quanto a falta de confiança."
      ]
    },
    "resilience": {
      "label": "Recuperação depois de erros",
      "desc": "Mede a rapidez e a forma como você se recompõe depois de falhas, críticas e recusas.",
      "high": "Você costuma se recompor rápido depois de um erro, uma crítica ou uma recusa, e volta a agir sem se prender ao que passou. Isso permite arriscar mais e aprender com a experiência. O ponto de atenção é virar a página rápido demais, sem parar para entender o que levou ao erro ou como ele afetou outras pessoas.",
      "low": "Erros e críticas costumam ficar com você por bastante tempo, e é comum repassar mentalmente o que deu errado. Isso mostra que você leva as coisas a sério e se importa com as consequências. O ponto de atenção é quando remoer o erro toma o lugar de corrigi-lo e faz você evitar novas tentativas.",
      "tips": [
        "Depois de um erro, escreva em uma frase o que aconteceu e em outra o que faria diferente, e então encerre o assunto.",
        "Fale com você do jeito que falaria com uma pessoa querida que errou da mesma forma.",
        "Dê um prazo para a frustração, como o resto do dia, e depois volte para a próxima tarefa."
      ]
    },
    "assertiveness": {
      "label": "Assertividade",
      "desc": "Mede o quanto você expressa opiniões, necessidades e limites de forma clara e respeitosa.",
      "high": "Você costuma dizer o que pensa, pedir o que precisa e colocar limites sem rodeios. Isso evita mal-entendidos e deixa claro para as pessoas o que esperar de você. O ponto de atenção é falar com firmeza demais e deixar pouco espaço para outras opiniões, principalmente quando você já tem uma posição formada.",
      "low": "Você tende a evitar conflitos, aceitar pedidos mesmo quando não quer e guardar opiniões para manter o clima bom. Isso mostra cuidado com os outros e facilita a convivência. O ponto de atenção é acumular incômodos e deixar suas próprias necessidades sempre em segundo plano.",
      "tips": [
        "Comece por situações pequenas, como pedir para trocar um pedido errado ou dizer qual restaurante você prefere.",
        "Use frases que começam por \"eu\", como \"eu prefiro\" ou \"agora não consigo\", em vez de acusar ou se justificar demais.",
        "Depois de se posicionar, pergunte o que a outra pessoa pensa: firmeza e escuta funcionam melhor juntas."
      ]
    }
  },
  "resultTitle": "Seu perfil de autoconfiança",
  "resultIntro": "Cada barra mostra como você ficou em uma das quatro áreas da autoconfiança. Pontuações mais altas indicam mais segurança naquela área, mas confiança alta não é sinônimo de acerto: o que mais ajuda no dia a dia é o equilíbrio entre acreditar em si e continuar ouvindo outras opiniões.",
  "note": "Este resultado é uma ferramenta de autoconhecimento baseada nas suas próprias respostas. Ele não é uma avaliação profissional e não substitui a conversa com um psicólogo. A autoconfiança muda com o tempo, as experiências e o contexto, e pode ser desenvolvida com prática."
};

export default t;
