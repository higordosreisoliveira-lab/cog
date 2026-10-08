import type { TestText } from '../../schema';

const t: TestText = {
  "title": "Perfil de personalidade",
  "desc": "Veja como você se posiciona nos cinco grandes traços de personalidade, um dos modelos mais estudados pela psicologia.",
  "intro": "Este questionário mede cinco traços amplos de personalidade: abertura a experiências, organização, extroversão, amabilidade e estabilidade emocional. As 50 frases foram adaptadas do IPIP, um banco de itens de domínio público usado em pesquisas. Para cada frase, indique o quanto ela descreve como você é hoje, e não como gostaria de ser. Não existem respostas certas ou erradas, e nenhum traço é melhor que outro. Responda com sinceridade e sem pensar demais: a primeira impressão costuma ser a mais fiel.",
  "scale": [
    "Discordo totalmente",
    "Discordo",
    "Neutro",
    "Concordo",
    "Concordo totalmente"
  ],
  "items": [
    "Sou a alma da festa.",
    "Eu me preocupo pouco com os outros.",
    "Sempre me preparo com antecedência.",
    "Eu me estresso com facilidade.",
    "Tenho um vocabulário rico.",
    "Não falo muito.",
    "Tenho interesse pelas pessoas.",
    "Deixo minhas coisas espalhadas por aí.",
    "Na maior parte do tempo, mantenho a calma.",
    "Tenho dificuldade para entender ideias abstratas.",
    "Fico à vontade no meio de outras pessoas.",
    "Faço comentários que ofendem as pessoas.",
    "Presto atenção aos detalhes.",
    "Costumo me preocupar com as coisas.",
    "Tenho uma imaginação fértil.",
    "Prefiro ficar em segundo plano.",
    "Eu me importo com o que os outros sentem.",
    "Acabo bagunçando as coisas.",
    "Raramente me sinto para baixo.",
    "Ideias abstratas não me interessam.",
    "Costumo puxar conversa.",
    "Os problemas dos outros não me interessam.",
    "Faço minhas tarefas logo, sem deixar para depois.",
    "Eu me abalo com facilidade.",
    "Tenho ideias excelentes.",
    "Costumo ter pouco a dizer.",
    "Tenho um coração mole.",
    "Muitas vezes esqueço de guardar as coisas no lugar.",
    "Eu me chateio com facilidade.",
    "Não tenho muita imaginação.",
    "Em festas, converso com muitas pessoas diferentes.",
    "No fundo, não tenho muito interesse pelos outros.",
    "Gosto das coisas em ordem.",
    "Meu humor muda muito.",
    "Entendo as coisas rapidamente.",
    "Não gosto de chamar atenção.",
    "Tiro um tempo para ajudar os outros.",
    "Fujo das minhas obrigações.",
    "Tenho altos e baixos de humor com frequência.",
    "Uso palavras difíceis.",
    "Não me incomodo de ser o centro das atenções.",
    "Sinto as emoções das outras pessoas.",
    "Sigo uma rotina planejada.",
    "Eu me irrito com facilidade.",
    "Passo tempo refletindo sobre as coisas.",
    "Falo pouco perto de pessoas que não conheço.",
    "Deixo as pessoas à vontade.",
    "Sou exigente com a qualidade do meu trabalho.",
    "Muitas vezes me sinto para baixo.",
    "Minha cabeça está sempre cheia de ideias."
  ],
  "dims": {
    "openness": {
      "label": "Abertura a experiências",
      "desc": "Mede a curiosidade, a imaginação e o interesse por ideias novas, abstratas ou diferentes das habituais.",
      "high": "Você gosta de explorar ideias, aprender coisas diferentes e imaginar possibilidades. Isso ajuda a criar soluções originais e a se adaptar a mudanças. O ponto de atenção é se dispersar entre muitos interesses e deixar projetos pela metade.",
      "low": "Você prefere o que é concreto, conhecido e já testado na prática. Isso traz foco, bom senso e eficiência nas tarefas do dia a dia. O ponto de atenção é descartar ideias novas cedo demais, antes de entender o que elas podem oferecer.",
      "tips": [
        "Experimente algo novo de vez em quando, como um livro de outro gênero ou um caminho diferente para casa.",
        "Diante de uma ideia diferente, pergunte \"o que há de útil aqui?\" antes de decidir.",
        "Se você tem muitos interesses, escolha um por vez e leve-o até o fim."
      ]
    },
    "conscientiousness": {
      "label": "Organização",
      "desc": "Mede o quanto você planeja, cumpre compromissos e cuida dos detalhes, ou seja, sua disciplina e seu senso de responsabilidade.",
      "high": "Você costuma planejar, cumprir prazos e cuidar dos detalhes, e as pessoas sabem que podem contar com você. O ponto de atenção é a exigência excessiva: perfeccionismo e dificuldade com imprevistos podem gerar cansaço.",
      "low": "Você lida com as tarefas de forma flexível e espontânea, sem se prender a planos rígidos. Isso ajuda a improvisar e a se adaptar quando algo muda. O ponto de atenção é deixar coisas importantes para a última hora ou perder prazos de vista.",
      "tips": [
        "Divida tarefas grandes em passos pequenos e coloque um prazo em cada um.",
        "Use uma lista ou agenda simples e revise-a no início do dia.",
        "Defina o que é \"bom o suficiente\" antes de começar, para não travar no perfeccionismo."
      ]
    },
    "extraversion": {
      "label": "Extroversão",
      "desc": "Mede o quanto você busca a companhia de outras pessoas, a conversa e ambientes movimentados, e o quanto isso recarrega suas energias.",
      "high": "Você ganha energia estando com pessoas, puxa conversa com facilidade e se sente bem em ambientes movimentados. Isso ajuda a criar laços e a se expor em público. O ponto de atenção é falar mais do que ouvir ou ter dificuldade com tarefas que pedem tempo a sós.",
      "low": "Você prefere grupos pequenos, conversas mais profundas e momentos de silêncio para recarregar as energias. Isso favorece a concentração, a escuta e a reflexão antes de agir. O ponto de atenção é deixar de mostrar suas ideias e seu trabalho por não querer chamar atenção.",
      "tips": [
        "Observe o que recarrega você, estar com pessoas ou ficar a sós, e reserve tempo para isso.",
        "Em reuniões, se você fala muito, faça uma pergunta antes de dar sua opinião; se fala pouco, tente compartilhar pelo menos uma ideia.",
        "Ser uma pessoa reservada não é o mesmo que ser tímida: dá para gostar do silêncio e se comunicar muito bem."
      ]
    },
    "agreeableness": {
      "label": "Amabilidade",
      "desc": "Mede o quanto você se importa com os outros, confia nas pessoas e prefere cooperar a competir.",
      "high": "Você é uma pessoa atenciosa, acolhedora e disposta a ajudar. Isso cria relações de confiança e um bom clima por onde você passa. O ponto de atenção é colocar sempre as necessidades dos outros na frente das suas e ter dificuldade para dizer não.",
      "low": "Você tende a ser uma pessoa direta, objetiva e crítica, que não tem medo de discordar. Isso ajuda a negociar, defender suas posições e tomar decisões difíceis. O ponto de atenção é soar duro sem querer e afastar pessoas que poderiam colaborar com você.",
      "tips": [
        "Antes de discordar, mostre que entendeu o ponto de vista da outra pessoa.",
        "Pratique recusar com gentileza os pedidos que atrapalham suas prioridades.",
        "Lembre-se de que ser gentil e ser firme podem andar juntos."
      ]
    },
    "stability": {
      "label": "Estabilidade emocional",
      "desc": "Mede o quanto você mantém a calma diante de pressão, preocupações e frustrações. Pontuação alta indica mais serenidade; pontuação baixa, mais sensibilidade ao estresse.",
      "high": "Você costuma manter a calma sob pressão e se recupera rápido de contratempos. Isso transmite segurança às pessoas e ajuda a pensar com clareza em momentos difíceis. O ponto de atenção é minimizar problemas reais ou não perceber quando alguém perto de você está sofrendo.",
      "low": "Você sente as emoções com intensidade e percebe riscos e problemas antes de muita gente. Essa sensibilidade ajuda a se preparar e a levar as coisas a sério. O ponto de atenção é o desgaste: preocupação e estresse frequentes cansam, e vale ter estratégias para lidar com eles.",
      "tips": [
        "Cuide do básico: sono, alimentação e atividade física fazem diferença no humor.",
        "Quando a preocupação aparecer, escreva o que está pensando e qual seria o próximo passo possível.",
        "Se o estresse ou a tristeza estiverem atrapalhando sua rotina, converse com um profissional de saúde mental."
      ]
    }
  },
  "resultTitle": "Seu perfil de personalidade",
  "resultIntro": "Cada barra mostra onde você ficou entre os dois extremos de um traço. Pontuações altas ou baixas não são boas nem ruins: cada lado traz vantagens e pontos de atenção.",
  "note": "Este resultado é uma ferramenta de autoconhecimento baseada nas suas próprias respostas. Ele não é um diagnóstico e não substitui a avaliação de um psicólogo. A personalidade também muda ao longo da vida e conforme o contexto."
};

export default t;
