import type { TestText } from '../../schema';

const t: TestText = {
  "title": "Interesses profissionais",
  "desc": "Descubra quais tipos de atividade mais combinam com você e conheça profissões ligadas aos seus interesses.",
  "intro": "Este questionário se baseia no modelo de Holland, que organiza os interesses profissionais em seis tipos: prático, investigativo, artístico, social, empreendedor e organizador. São 36 atividades. Para cada uma, indique o quanto você gostaria de fazê-la, sem pensar em salário, formação ou se você já sabe fazer. Não há respostas certas: o objetivo é mapear o que desperta o seu interesse.",
  "scale": [
    "Discordo totalmente",
    "Discordo",
    "Neutro",
    "Concordo",
    "Concordo totalmente"
  ],
  "items": [
    "Eu gostaria de descobrir por que um aparelho parou de funcionar e consertá-lo.",
    "Eu gostaria de fazer experimentos para testar se uma ideia funciona na prática.",
    "Eu gostaria de escrever histórias, roteiros ou letras de música.",
    "Eu gostaria de ensinar algo novo para um grupo de pessoas.",
    "Eu gostaria de abrir e administrar meu próprio negócio.",
    "Eu gostaria de organizar planilhas, arquivos e registros para que tudo fique fácil de encontrar.",
    "Eu gostaria de construir ou montar coisas com as minhas próprias mãos.",
    "Eu gostaria de analisar dados para descobrir a causa de um problema.",
    "Eu gostaria de criar a identidade visual de uma marca, como o logotipo e as cores.",
    "Eu gostaria de ouvir e orientar pessoas que estão passando por um momento difícil.",
    "Eu gostaria de negociar com clientes e fechar vendas.",
    "Eu gostaria de acompanhar as contas a pagar e a receber de uma empresa.",
    "Eu gostaria de trabalhar ao ar livre, em lugares como obras, fazendas ou parques.",
    "Eu gostaria de pesquisar como funcionam o corpo humano e outros seres vivos.",
    "Eu gostaria de me apresentar em um palco, cantando, tocando ou atuando.",
    "Eu gostaria de cuidar da saúde e do bem-estar de outras pessoas.",
    "Eu gostaria de liderar uma equipe para alcançar uma meta.",
    "Eu gostaria de revisar documentos com atenção para garantir que não há erros.",
    "Eu gostaria de operar máquinas, veículos ou ferramentas de precisão.",
    "Eu gostaria de entender a fundo como funciona uma tecnologia nova.",
    "Eu gostaria de fotografar ou filmar e depois editar o material.",
    "Eu gostaria de acompanhar e apoiar o desenvolvimento de crianças ou jovens.",
    "Eu gostaria de apresentar uma ideia para convencer investidores ou a diretoria de uma empresa.",
    "Eu gostaria de controlar o estoque, os pedidos e os prazos de entrega.",
    "Eu gostaria de cuidar de plantas ou de animais no dia a dia.",
    "Eu gostaria de ler estudos científicos e tirar minhas próprias conclusões.",
    "Eu gostaria de desenhar roupas, objetos ou a decoração de ambientes.",
    "Eu gostaria de ajudar pessoas a resolver conflitos e a se entenderem melhor.",
    "Eu gostaria de criar estratégias para fazer um produto crescer no mercado.",
    "Eu gostaria de verificar se uma empresa está cumprindo as normas e as leis.",
    "Eu gostaria de fazer a instalação elétrica ou hidráulica de um imóvel.",
    "Eu gostaria de resolver problemas complexos de matemática ou de lógica.",
    "Eu gostaria de inventar ideias originais para uma campanha ou um projeto criativo.",
    "Eu gostaria de participar de projetos que ajudam a comunidade onde vivo.",
    "Eu gostaria de tomar decisões importantes, mesmo que isso envolva riscos.",
    "Eu gostaria de organizar a agenda e as rotinas de um escritório."
  ],
  "dims": {
    "realistic": {
      "label": "Prático",
      "desc": "Interesse por atividades concretas: usar as mãos, ferramentas e máquinas, construir, consertar e trabalhar ao ar livre.",
      "high": "Você gosta de ver resultados concretos e de resolver problemas com as próprias mãos. Ambientes com tarefas claras e práticas tendem a motivar você. Vale lembrar que muitas dessas carreiras também pedem estudo técnico e atualização constante.",
      "low": "Atividades manuais, mecânicas ou ao ar livre despertam menos o seu interesse. Você provavelmente se sente mais à vontade lidando com ideias, pessoas ou informações. Ainda assim, algumas habilidades práticas básicas são úteis em qualquer área.",
      "tips": [
        "Faça um curso curto de alguma habilidade manual ou técnica para testar seu interesse.",
        "Converse com profissionais da área sobre como é a rotina real do trabalho.",
        "Considere cursos técnicos, que costumam ser uma porta de entrada rápida para essas carreiras."
      ],
      "examples": [
        "Engenharia civil",
        "Engenharia mecânica",
        "Eletricista",
        "Agronomia",
        "Piloto de avião",
        "Gastronomia",
        "Marcenaria",
        "Manutenção industrial"
      ]
    },
    "investigative": {
      "label": "Investigativo",
      "desc": "Interesse por observar, pesquisar, analisar e entender como as coisas funcionam, seja na ciência, na tecnologia ou na saúde.",
      "high": "Você gosta de perguntas difíceis, de investigar causas e de entender as coisas a fundo. Ambientes que valorizam o raciocínio e a autonomia tendem a motivar você. O ponto de atenção é se perder na análise e demorar a passar para a ação.",
      "low": "Pesquisa, análise de dados e teorias despertam menos o seu interesse. Você provavelmente prefere aplicar soluções a estudar um problema por muito tempo. Mesmo assim, saber buscar informações confiáveis ajuda em qualquer profissão.",
      "tips": [
        "Acompanhe conteúdos de divulgação científica sobre temas que chamam sua atenção.",
        "Participe de um projeto de pesquisa, de uma olimpíada de conhecimento ou de um curso online.",
        "Experimente analisar dados reais em uma planilha para ver se esse tipo de tarefa agrada você."
      ],
      "examples": [
        "Medicina",
        "Biologia",
        "Ciência de dados",
        "Química",
        "Farmácia",
        "Desenvolvimento de software",
        "Pesquisa científica",
        "Geologia"
      ]
    },
    "artistic": {
      "label": "Artístico",
      "desc": "Interesse por criar, se expressar e trabalhar com ideias originais, seja com imagens, palavras, música, movimento ou design.",
      "high": "Você gosta de criar, imaginar e dar forma a ideias próprias. Ambientes com liberdade, variedade e espaço para a originalidade tendem a motivar você. O ponto de atenção é lidar com prazos, regras e as partes repetitivas que todo trabalho criativo também tem.",
      "low": "Atividades artísticas e de expressão pessoal despertam menos o seu interesse. Você provavelmente prefere objetivos claros e resultados mais previsíveis. A criatividade, porém, também aparece na forma de resolver problemas, em qualquer área.",
      "tips": [
        "Monte um portfólio simples com seus trabalhos, mesmo que sejam projetos pessoais.",
        "Faça uma oficina curta em uma área criativa diferente da que você já conhece.",
        "Pesquise como profissionais criativos combinam arte com outras habilidades, como tecnologia ou negócios."
      ],
      "examples": [
        "Design gráfico",
        "Arquitetura",
        "Publicidade e propaganda",
        "Fotografia",
        "Música",
        "Artes cênicas",
        "Design de moda",
        "Produção audiovisual"
      ]
    },
    "social": {
      "label": "Social",
      "desc": "Interesse por ajudar, ensinar, cuidar e orientar pessoas, contribuindo para o bem-estar e o desenvolvimento delas.",
      "high": "Você se motiva quando seu trabalho faz diferença na vida de outras pessoas. Ouvir, ensinar e cuidar são atividades que dão sentido ao seu dia. O ponto de atenção é se sobrecarregar com os problemas alheios e esquecer de cuidar de si.",
      "low": "Atividades centradas em cuidar, ensinar ou aconselhar pessoas despertam menos o seu interesse. Você provavelmente prefere lidar com tarefas, objetos, dados ou ideias. Mesmo assim, saber colaborar continua sendo importante em quase todo trabalho.",
      "tips": [
        "Faça trabalho voluntário em uma causa que importa para você e observe como se sente.",
        "Experimente explicar algo que você sabe para outras pessoas, como em uma monitoria ou aula particular.",
        "Converse com profissionais de saúde, educação ou assistência social sobre os desafios da rotina."
      ],
      "examples": [
        "Psicologia",
        "Pedagogia",
        "Enfermagem",
        "Serviço social",
        "Fisioterapia",
        "Educação física",
        "Fonoaudiologia",
        "Recursos humanos"
      ]
    },
    "enterprising": {
      "label": "Empreendedor",
      "desc": "Interesse por liderar, convencer, negociar e tomar decisões para alcançar metas, seja em empresas, vendas ou projetos próprios.",
      "high": "Você gosta de tomar a frente, convencer pessoas e ver metas sendo alcançadas. Ambientes dinâmicos, com desafios e reconhecimento pelos resultados, tendem a motivar você. O ponto de atenção é a pressa em decidir e a tendência a subestimar riscos ou detalhes.",
      "low": "Liderar, vender e negociar despertam menos o seu interesse. Você provavelmente prefere contribuir com seu conhecimento ou seu trabalho sem estar no centro das decisões. Ainda assim, saber defender suas ideias ajuda em qualquer carreira.",
      "tips": [
        "Assuma a liderança de um projeto pequeno, no trabalho, nos estudos ou na sua comunidade.",
        "Teste uma ideia de negócio em pequena escala antes de investir muito tempo ou dinheiro.",
        "Estude o básico de finanças, negociação e comunicação."
      ],
      "examples": [
        "Administração",
        "Direito",
        "Marketing",
        "Vendas e gestão comercial",
        "Relações públicas",
        "Gestão de projetos",
        "Corretagem de imóveis",
        "Comércio exterior"
      ]
    },
    "conventional": {
      "label": "Organizador",
      "desc": "Interesse por organizar informações, seguir processos claros e cuidar de dados, números e documentos com precisão.",
      "high": "Você gosta de ordem, de regras claras e de saber exatamente o que precisa ser feito. Ambientes estruturados, em que a precisão é valorizada, tendem a motivar você. O ponto de atenção é lidar com mudanças rápidas e situações sem um procedimento definido.",
      "low": "Rotinas, planilhas e procedimentos detalhados despertam menos o seu interesse. Você provavelmente prefere variedade e liberdade para fazer as coisas do seu jeito. Ainda assim, um pouco de organização facilita o trabalho em qualquer área.",
      "tips": [
        "Aprenda a usar bem planilhas e ferramentas de organização, uma habilidade útil em muitas carreiras.",
        "Assuma as finanças ou a organização de um projeto e veja se esse tipo de tarefa agrada você.",
        "Pesquise áreas como contabilidade, logística e auditoria, presentes em quase todo tipo de empresa."
      ],
      "examples": [
        "Ciências contábeis",
        "Auditoria",
        "Logística",
        "Secretariado executivo",
        "Análise financeira",
        "Biblioteconomia",
        "Controle de qualidade",
        "Gestão de compras"
      ]
    }
  },
  "resultTitle": "Seus tipos de interesse",
  "resultIntro": "Destacamos os três tipos com as maiores pontuações. A maioria das pessoas combina mais de um tipo, e cada profissão valoriza uma combinação diferente. Use as sugestões como ponto de partida para pesquisar e conversar com quem já trabalha na área.",
  "note": "Este resultado mostra interesses, não habilidades nem chances de sucesso. É uma ferramenta de autoconhecimento e não substitui uma orientação profissional feita por especialistas."
};

export default t;
