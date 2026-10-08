import type { TestText } from '../../schema';

const t: TestText = {
  "title": "Estilo de apego",
  "desc": "Descubra como você costuma sentir e agir quando alguém se torna próximo, seja em um namoro, em uma amizade ou na família.",
  "intro": "Este questionário olha para duas tendências que aparecem nos vínculos próximos: a ansiedade no vínculo, que é o quanto você se preocupa com a possibilidade de perder o carinho ou a atenção das pessoas, e o quanto você evita a proximidade, preferindo manter certa distância emocional. As 18 frases descrevem situações comuns em relacionamentos próximos de modo geral, com parceiros, amigos e família. Para cada uma, indique o quanto ela combina com o que você costuma sentir ou fazer, pensando nos seus vínculos em geral, e não em uma única pessoa ou fase. Se alguma situação nunca aconteceu com você, responda pensando em como provavelmente reagiria. Não existem respostas certas ou erradas.",
  "scale": [
    "Discordo totalmente",
    "Discordo",
    "Neutro",
    "Concordo",
    "Concordo totalmente"
  ],
  "items": [
    "Quando alguém importante para mim demora a responder uma mensagem, começo a pensar que fiz algo errado.",
    "Quando alguém começa a me contar coisas muito pessoais, sinto vontade de mudar de assunto.",
    "Se amigos marcam um programa e não me chamam, passo horas pensando no que isso diz sobre a nossa relação.",
    "Consigo chorar ou mostrar que estou triste na frente das pessoas em quem confio.",
    "Quando alguém próximo viaja ou passa uns dias sem tempo para mim, sigo minha rotina sem me preocupar com a relação.",
    "Quando uma amizade nova começa a ficar mais próxima, com conversas frequentes e convites, sinto vontade de dar uma esfriada.",
    "Depois de uma discussão com alguém próximo, fico com medo de que a pessoa se afaste de vez.",
    "Mesmo quando estou com dificuldade, prefiro resolver tudo por conta própria a pedir ajuda a alguém próximo.",
    "Quando alguém de quem gosto parece mais quieto ou distante, logo acho que o problema sou eu.",
    "Quando alguém próximo diz, com todas as letras, o quanto gosta de mim, fico à vontade com isso.",
    "Se alguém próximo diz que precisa de um tempo só para si, entendo sem levar para o lado pessoal.",
    "Quando alguém com quem tenho um vínculo próximo pede para passarmos mais tempo juntos, sinto que estou perdendo meu espaço.",
    "Depois de um encontro ou de uma conversa importante, fico relendo as mensagens para ter certeza de que a pessoa ainda está bem comigo.",
    "Quando o assunto vira sentimentos, costumo responder com algo prático ou com uma piada em vez de dizer o que sinto.",
    "Quando um amigo cancela um encontro em cima da hora, aceito a explicação e não fico remoendo.",
    "Fico desconfortável quando alguém passa a contar comigo para lidar com as próprias emoções.",
    "Quando vejo alguém que eu amo muito animado com outra companhia, sinto um aperto, como se eu fosse ficar em segundo plano.",
    "Quando algo importante acontece na minha vida, bom ou ruim, logo quero contar para alguém próximo."
  ],
  "dims": {
    "anxiety": {
      "label": "Ansiedade no vínculo",
      "desc": "Mede o quanto você se preocupa com a estabilidade das suas relações próximas e com a possibilidade de perder o carinho ou a atenção das pessoas.",
      "high": "Você costuma prestar muita atenção a sinais de distância e pode sentir insegurança quando alguém demora a responder ou parece diferente. Essa sensibilidade mostra o quanto seus vínculos importam e ajuda a perceber mudanças nas relações. O ponto de atenção é o desgaste: interpretar sinais neutros como rejeição pode trazer sofrimento e gerar cobranças que acabam afastando as pessoas.",
      "low": "Você tende a confiar que suas relações continuam firmes mesmo quando há silêncio, distância ou pequenos desentendimentos. Isso traz tranquilidade e dá espaço para que cada pessoa viva a própria vida. O ponto de atenção é não deixar de perceber quando algo realmente mudou e merece uma conversa.",
      "tips": [
        "Quando bater a insegurança, separe o fato (a pessoa não respondeu) da interpretação (ela está chateada comigo) antes de agir.",
        "Em vez de buscar garantias de forma indireta, diga com calma o que você está sentindo e do que precisa.",
        "Cultive interesses e amizades variadas, para que sua tranquilidade não dependa de uma única relação."
      ]
    },
    "avoidance": {
      "label": "Evitar proximidade",
      "desc": "Mede o quanto você prefere manter distância emocional, em vez de se abrir, pedir apoio e deixar que as pessoas contem com você.",
      "high": "Você valoriza sua independência e tende a resolver as coisas por conta própria, guardando parte do que sente para si. Isso traz autonomia e capacidade de manter a calma em situações difíceis. O ponto de atenção é que as pessoas próximas podem sentir que não conseguem chegar perto de você, e você pode ficar sem apoio justamente quando mais precisar.",
      "low": "Você se sente à vontade para se abrir, pedir ajuda e acolher quem se aproxima. Isso favorece relações de confiança, em que as duas partes se sentem vistas e apoiadas. O ponto de atenção é lembrar que nem todo mundo tem o mesmo ritmo para se abrir e respeitar quem precisa de mais espaço.",
      "tips": [
        "Experimente contar algo pequeno sobre como você está com uma pessoa de confiança e observe como ela reage.",
        "Quando sentir vontade de se afastar, tente identificar o que exatamente incomodou, em vez de simplesmente sumir.",
        "Se precisar de espaço, avise a pessoa em vez de se afastar em silêncio: isso protege a relação e o seu tempo."
      ]
    }
  },
  "bands": {
    "secure": {
      "label": "Seguro",
      "text": "Você tende a se sentir à vontade com a proximidade e, ao mesmo tempo, confia que suas relações se mantêm mesmo com distância ou desentendimentos. Isso costuma facilitar conversas sinceras, pedidos de apoio e a resolução de conflitos sem medo excessivo. Ter esse estilo não significa nunca sentir insegurança, e ele também pode variar conforme a fase da vida e a relação."
    },
    "anxious": {
      "label": "Ansioso",
      "text": "Você valoriza muito seus vínculos e costuma perceber rápido qualquer sinal de distância, o que pode trazer preocupação com a possibilidade de perder o carinho das pessoas. Essa sensibilidade também mostra dedicação e capacidade de se envolver de verdade nas relações. Com o tempo, conversas claras e relações em que você encontra segurança podem deixar essa inquietação bem mais leve."
    },
    "avoidant": {
      "label": "Evitativo",
      "text": "Você tende a valorizar a independência e a se sentir mais à vontade resolvendo as coisas por conta própria do que dividindo o que sente. Isso traz autonomia e serenidade em muitas situações, mas pode deixar as pessoas próximas com a sensação de que não conseguem chegar perto. Esse jeito costuma ter boas razões para existir, e relações que respeitam o seu ritmo podem tornar a proximidade mais confortável aos poucos."
    },
    "fearful": {
      "label": "Ansioso-evitativo",
      "text": "Você pode desejar muito a proximidade e, ao mesmo tempo, sentir receio dela, alternando entre buscar as pessoas e manter distância. Esse movimento costuma ser uma forma compreensível de se proteger de decepções e mostra o quanto os vínculos importam para você. Com o tempo, relações estáveis e acolhedoras ajudam a se aproximar com menos medo, e conversar com um profissional também pode ajudar nesse caminho."
    }
  },
  "resultTitle": "Seu estilo de apego",
  "resultIntro": "Seu resultado combina duas dimensões: a ansiedade no vínculo e o quanto você evita a proximidade. Juntas, elas indicam o estilo que mais aparece hoje nas suas relações próximas. Nenhum estilo é melhor ou pior que outro, e todos podem mudar com o tempo e com a experiência de relações seguras.",
  "note": "Este resultado é uma ferramenta de autoconhecimento baseada nas suas próprias respostas. Ele não é um diagnóstico e não substitui a avaliação de um psicólogo. O jeito de se vincular pode variar de uma relação para outra e costuma mudar ao longo da vida.",
  "help": "Se os seus padrões nos relacionamentos têm causado sofrimento, como medo constante de perder as pessoas ou dificuldade de se aproximar de quem você gosta, conversar com um psicólogo pode ajudar. A terapia é um espaço seguro para entender de onde vêm esses padrões e experimentar, aos poucos, novas formas de se relacionar."
};

export default t;
