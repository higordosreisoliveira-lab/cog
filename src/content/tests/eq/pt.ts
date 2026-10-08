import type { TestText } from '../../schema';

const t: TestText = {
  "title": "Inteligência emocional",
  "desc": "Veja como você percebe e lida com as próprias emoções e com as emoções das outras pessoas no dia a dia.",
  "intro": "Este questionário avalia quatro áreas da inteligência emocional: autoconsciência, autocontrole, empatia e habilidades sociais. São 24 frases sobre situações do dia a dia. Para cada uma, indique o quanto ela descreve como você costuma agir, e não como acha que deveria agir. Não há respostas certas: quanto mais sinceras forem as respostas, mais útil será o resultado.",
  "scale": [
    "Discordo totalmente",
    "Discordo",
    "Neutro",
    "Concordo",
    "Concordo totalmente"
  ],
  "items": [
    "Consigo dar nome ao que estou sentindo, mesmo quando é uma mistura de emoções.",
    "Quando fico com raiva, consigo esperar um pouco antes de responder.",
    "Percebo quando alguém está chateado, mesmo que a pessoa não diga nada.",
    "Consigo resolver desentendimentos sem que a conversa vire uma briga.",
    "Muitas vezes só me dou conta do que senti depois que a situação já passou.",
    "Em discussões, acabo dizendo coisas das quais me arrependo depois.",
    "Antes de julgar alguém, tento entender o que a pessoa está passando.",
    "Evito conversas difíceis, mesmo quando elas são necessárias.",
    "Percebo quando meu humor está influenciando minhas decisões.",
    "Depois de um dia ruim, consigo me acalmar sem descontar nos outros.",
    "Tenho dificuldade para entender por que algumas pessoas reagem de forma tão intensa.",
    "Consigo recusar um pedido de forma firme e educada.",
    "Sei quais situações costumam me tirar do sério.",
    "Quando recebo uma crítica, escuto até o fim antes de me defender.",
    "Quando alguém me conta um problema, escuto com atenção em vez de já pensar no que vou responder.",
    "Quando trabalho em grupo, ajudo as pessoas a chegarem a um acordo.",
    "Tenho dificuldade para explicar o que estou sentindo.",
    "Quando algo dá errado, demoro muito para parar de pensar no assunto.",
    "Costumo perceber o clima de um ambiente assim que chego.",
    "Em lugares novos, tenho dificuldade para me aproximar das pessoas.",
    "Noto sinais no meu corpo, como tensão ou cansaço, quando algo está me afetando.",
    "Consigo me concentrar no que preciso fazer mesmo em um dia emocionalmente difícil.",
    "Quando alguém pensa diferente de mim, tenho pouca paciência para ouvir os motivos.",
    "Consigo apontar um problema no trabalho de alguém sem que a pessoa se sinta atacada."
  ],
  "dims": {
    "selfAwareness": {
      "label": "Autoconsciência",
      "desc": "Perceber e dar nome ao que você sente, entender de onde vêm essas emoções e como elas afetam suas atitudes.",
      "high": "Você costuma perceber o que está sentindo e por quê, muitas vezes antes de reagir. Isso ajuda a tomar decisões mais conscientes e a explicar suas necessidades para as outras pessoas. O ponto de atenção é analisar demais cada emoção em vez de seguir em frente.",
      "low": "Você tende a focar mais no que precisa ser feito do que no que está sentindo, o que ajuda a agir com praticidade. O ponto de atenção é perceber as emoções só depois que a situação passou, quando elas já influenciaram suas atitudes.",
      "tips": [
        "Algumas vezes por dia, pare por alguns segundos e pergunte: o que estou sentindo agora?",
        "Em vez de dizer só que está \"mal\", tente identificar se é cansaço, frustração, tristeza ou ansiedade.",
        "Anote situações que mexeram com você e o que aconteceu logo antes delas."
      ]
    },
    "selfRegulation": {
      "label": "Autocontrole",
      "desc": "Lidar com emoções fortes sem agir por impulso, recuperar a calma e manter o foco mesmo em dias difíceis.",
      "high": "Você consegue sentir raiva, frustração ou ansiedade sem deixar que elas tomem conta das suas atitudes. Isso transmite confiança e evita conflitos desnecessários. O ponto de atenção é guardar emoções que precisariam ser ditas, o que pode acumular tensão.",
      "low": "Você reage de forma rápida e intensa, e as pessoas costumam saber exatamente o que você sente. Essa espontaneidade pode ser sincera e cheia de energia. O ponto de atenção são as reações no calor do momento, que às vezes geram arrependimento ou desgastam relações.",
      "tips": [
        "Quando sentir a emoção subir, faça uma pausa curta, respire fundo e só depois responda.",
        "Evite tomar decisões ou enviar mensagens importantes quando estiver com muita raiva.",
        "Tenha uma válvula de escape regular, como exercício, uma caminhada ou uma conversa com alguém de confiança."
      ]
    },
    "empathy": {
      "label": "Empatia",
      "desc": "Perceber o que outras pessoas estão sentindo e entender o ponto de vista delas, mesmo quando é diferente do seu.",
      "high": "Você percebe com facilidade o clima de um ambiente e o que as pessoas sentem, mesmo sem palavras. Isso faz com que elas se sintam compreendidas ao seu lado. O ponto de atenção é absorver as emoções dos outros a ponto de se esgotar.",
      "low": "Você tende a se concentrar nos fatos e no problema em si, mais do que nas emoções envolvidas. Isso ajuda a manter a objetividade em situações delicadas. O ponto de atenção é deixar passar sinais de que alguém precisa de apoio ou parecer distante sem querer.",
      "tips": [
        "Em conversas importantes, repita com suas palavras o que entendeu antes de responder.",
        "Pergunte \"como você está se sentindo com isso?\" antes de partir direto para as soluções.",
        "Observe expressões, tom de voz e silêncios, não só o que é dito."
      ]
    },
    "social": {
      "label": "Habilidades sociais",
      "desc": "Comunicar-se com clareza, resolver conflitos, cooperar e construir boas relações no trabalho e na vida pessoal.",
      "high": "Você lida bem com conversas difíceis, sabe se posicionar e ajuda grupos a chegarem a acordos. Por isso, as pessoas costumam procurar você quando algo precisa ser resolvido. O ponto de atenção é tomar para si a tarefa de resolver todos os conflitos, o que pode gerar sobrecarga.",
      "low": "Você prefere evitar atritos e se sente mais à vontade com pessoas que já conhece bem. Isso costuma trazer relações tranquilas e poucas brigas. O ponto de atenção é adiar conversas necessárias e deixar problemas crescerem ou suas necessidades sem resposta.",
      "tips": [
        "Para dar um retorno difícil, fale do comportamento e do impacto dele, não da pessoa.",
        "Pratique dizer não com uma frase curta e educada, sem justificativas longas.",
        "Em ambientes novos, faça uma pergunta simples para puxar conversa: as pessoas gostam de falar sobre o que fazem."
      ]
    }
  },
  "resultTitle": "Seu perfil de inteligência emocional",
  "resultIntro": "Veja como você pontuou em cada área. Essas habilidades se desenvolvem com a prática, então use o resultado como ponto de partida, não como um rótulo.",
  "note": "Este questionário é uma ferramenta de autoconhecimento baseada na sua própria percepção. Ele não é um teste psicológico validado e não substitui a avaliação de um profissional."
};

export default t;
