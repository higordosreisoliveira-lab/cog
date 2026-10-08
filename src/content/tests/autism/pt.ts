// Texto-fonte (português do Brasil) do teste "autism".
// Regras para traduzir: `items` segue a MESMA ordem de ./structure.ts (cada frase pertence à
// dimensão do item na mesma posição) e as chaves de `dims` e `bands` não mudam.
// Itens invertidos (concordar indica MENOS traços): posições 3, 6, 9, 12, 15, 16, 18, 22, 24 e 25.
// Itens originais, escritos como cenários concretos do dia a dia. Não é diagnóstico.

import type { TestText } from '../../schema';

const t: TestText = {
  title: 'Traços do espectro autista em adultos',
  desc: 'Veja como alguns traços ligados ao espectro autista aparecem na sua vida adulta: comunicação, amizades, rotinas, sentidos e interesses.',
  intro:
    'Este questionário reúne 25 situações do dia a dia ligadas a cinco áreas em que pessoas autistas costumam ter um jeito próprio de funcionar: comunicação, interação e amizades, rotinas e mudanças, sensibilidade sensorial, e detalhes e interesses intensos. Ele foi pensado para a vida adulta. Para cada frase, indique o quanto ela descreve como você costuma ser na maior parte do tempo, e não apenas numa fase ou num dia específico. É uma autoavaliação respeitosa de traços, e não um diagnóstico: o resultado mostra tendências, sem rótulos. Muitas pessoas adultas nunca foram avaliadas na infância e aprenderam, ao longo dos anos, a disfarçar ou compensar seus traços para se encaixar. Se for o seu caso, tente responder pensando em como você é de fato quando não está se esforçando para parecer de outro jeito. Não há respostas certas ou erradas.',
  scale: ['Discordo totalmente', 'Discordo', 'Neutro', 'Concordo', 'Concordo totalmente'],
  items: [
    'Quando alguém se despede dizendo "aparece lá em casa qualquer dia", fico na dúvida se é um convite de verdade ou só um jeito educado de encerrar a conversa.',
    'Depois de um aniversário ou de um almoço de família, mesmo quando gostei, chego em casa sem energia e preciso de horas em silêncio para me recuperar.',
    'Se o programa do sábado muda em cima da hora, de cinema para um bar, por exemplo, eu me adapto sem incômodo.',
    'Em restaurantes cheios, o barulho de talheres, conversas e música ao mesmo tempo me impede de acompanhar o que a pessoa à minha frente está dizendo.',
    'Quando um assunto me pega, como um período da história, uma série ou um tipo de planta, passo horas pesquisando e perco a noção do horário.',
    'Numa conversa em grupo, percebo sem esforço o momento certo de falar e a hora de deixar outra pessoa falar.',
    'Prefiro encontrar amigos para fazer algo juntos, como jogar, cozinhar ou montar alguma coisa, do que para ficar só conversando.',
    'Quando uma obra me obriga a mudar o caminho de sempre para o trabalho ou para casa, fico com uma sensação de desconforto que dura o resto do dia.',
    'Visto uma roupa nova direto da loja sem me preocupar com etiqueta, costura ou textura do tecido.',
    'Percebo logo quando um quadro está torto, um número não bate numa conta ou uma palavra está escrita errada numa placa.',
    'Numa conversa cara a cara, olhar nos olhos da pessoa me cansa ou me desconcentra, e costumo olhar para outro ponto enquanto escuto.',
    'Fazer amizade com colegas novos no trabalho ou na faculdade acontece de forma natural para mim, sem que eu precise pensar em cada passo.',
    'No restaurante ou na lanchonete, costumo pedir sempre o mesmo prato, porque assim sei exatamente o que vou encontrar.',
    'A luz branca e forte de alguns supermercados e escritórios me cansa ou me dá dor de cabeça, enquanto as pessoas ao meu redor nem parecem notar.',
    'Quando compro um aparelho novo, leio só o necessário para fazê-lo funcionar e não tenho curiosidade pelo resto do manual.',
    'Quando alguém próximo desabafa comigo sem pedir conselho, percebo pelo tom de voz que a pessoa quer mais ser ouvida do que receber soluções.',
    'No trabalho ou em grupos novos, observo e imito o jeito de falar, os gestos e as expressões dos outros para parecer mais à vontade do que realmente estou.',
    'Viajar sem roteiro, decidindo o que fazer a cada manhã, me parece tranquilo e até divertido.',
    'Cheiros como perfume forte no ônibus ou produto de limpeza no elevador me incomodam a ponto de eu precisar me afastar ou prender a respiração.',
    'Tenho listas, coleções ou anotações detalhadas sobre um tema de que gosto, com informações que a maioria das pessoas nem pensaria em procurar.',
    'Quando estou falando de um assunto de que gosto muito, só percebo que a outra pessoa perdeu o interesse quando ela muda de assunto ou pega o celular.',
    'Num churrasco ou numa festa em que conheço pouca gente, consigo me enturmar e circular entre as rodas de conversa sem grande esforço.',
    'Antes de ir a um lugar novo, como uma clínica ou um escritório, vejo fotos, o mapa e até a entrada do prédio pela internet para saber o que vou encontrar.',
    'Consigo trabalhar ou estudar com conversa ao fundo, a TV ligada ou barulho de obra no vizinho sem perder a concentração.',
    'Quando alguém me indica uma série, assisto por curiosidade, mas não sinto vontade de saber tudo sobre os bastidores, os atores ou as teorias dos fãs.',
  ],
  dims: {
    social: {
      label: 'Comunicação',
      desc: 'Observa como você usa e interpreta a linguagem no dia a dia: frases com duplo sentido, contato visual, tom de voz e o ritmo de uma conversa.',
      high: 'Você tende a se comunicar de forma direta e a entender as palavras pelo que elas dizem, e sinais indiretos, como ironias, indiretas ou mudanças no tom de voz, podem exigir mais esforço. Essa forma de se comunicar tem pontos fortes claros: honestidade, clareza e pouco espaço para mal-entendidos de propósito. A dificuldade costuma aparecer quando as outras pessoas esperam que você leia nas entrelinhas.',
      low: 'Você costuma acompanhar com facilidade os sinais implícitos de uma conversa, como o tom de voz, as pausas e o que fica subentendido. Isso ajuda a ajustar o que você diz a cada pessoa e situação. Mesmo assim, pode haver momentos, como em ambientes novos ou em dias de cansaço, em que a comunicação exige mais de você.',
      tips: [
        'Quando algo parecer ambíguo, pergunte com tranquilidade, por exemplo: "Isso foi um convite ou só um jeito de falar?". Perguntar é uma forma legítima de se comunicar.',
        'Combine com as pessoas próximas que vocês podem ser diretos um com o outro, sem precisar adivinhar intenções.',
        'Se manter o olhar cansa, você não precisa se forçar: acenar com a cabeça ou repetir uma parte do que ouviu também mostra que você está prestando atenção.',
      ],
    },
    interaction: {
      label: 'Interação e amizades',
      desc: 'Observa como você se aproxima das pessoas, cria e mantém amizades e quanta energia os encontros sociais consomem.',
      high: 'Situações sociais tendem a consumir bastante energia de você, mesmo quando são agradáveis, e criar laços pode exigir mais estratégia do que espontaneidade. Muitas pessoas com esse perfil preferem poucas amizades, mas profundas e leais, muitas vezes construídas em torno de interesses ou atividades em comum. Imitar o jeito dos outros para se encaixar é comum e pode cansar bastante com o tempo.',
      low: 'Você costuma se aproximar das pessoas e circular entre grupos com naturalidade. Isso facilita criar contatos novos no trabalho e na vida pessoal. Ainda assim, vale respeitar seus limites de energia social, que podem mudar conforme a fase da vida.',
      tips: [
        'Reserve um tempo de descanso depois de eventos sociais, do mesmo jeito que você descansaria depois de um esforço físico.',
        'Procure amizades em espaços ligados aos seus interesses, como grupos de jogos, cursos, clubes de leitura ou trabalho voluntário.',
        'Observe em quais ambientes você se sente à vontade para ser como é, sem precisar imitar ninguém, e tente passar mais tempo neles.',
      ],
    },
    routine: {
      label: 'Rotinas e mudanças',
      desc: 'Observa o quanto a previsibilidade traz conforto para você e como você lida com imprevistos, mudanças de plano e situações novas.',
      high: 'Rotinas e previsibilidade parecem trazer segurança e calma para você, e mudanças inesperadas podem causar desconforto ou cansaço. Isso tem vantagens reais: constância, confiabilidade e boa capacidade de planejamento. A dificuldade costuma aparecer quando o ambiente muda sem aviso.',
      low: 'Você tende a lidar com imprevistos e mudanças de plano com flexibilidade. Isso ajuda em viagens, trabalhos dinâmicos e situações novas. Mesmo assim, ter algumas rotinas de apoio pode ser útil em períodos mais corridos.',
      tips: [
        'Antes de situações novas, pesquise o que puder: endereço, fotos do lugar, quem vai estar lá e quanto tempo deve durar.',
        'Quando for possível, peça às pessoas próximas que avisem com antecedência sobre mudanças de planos.',
        'Crie pequenas âncoras de rotina que funcionem em qualquer lugar, como um café no mesmo horário ou uma playlist conhecida.',
      ],
    },
    sensory: {
      label: 'Sensibilidade sensorial',
      desc: 'Observa como você reage a sons, luzes, cheiros, texturas e ambientes com muitos estímulos ao mesmo tempo.',
      high: 'Seus sentidos parecem captar sons, luzes, cheiros e texturas com mais intensidade do que a média, e ambientes cheios podem cansar você rapidamente. Isso não é frescura: é uma diferença real na forma de processar os estímulos. A mesma sensibilidade costuma permitir perceber nuances que passam despercebidas para outras pessoas.',
      low: 'Você parece lidar bem com ambientes barulhentos, muito iluminados ou cheios de estímulos. Isso facilita a concentração em lugares movimentados. Vale observar se algum estímulo específico incomoda você, porque a sensibilidade pode aparecer só em um ou dois sentidos.',
      tips: [
        'Tenha um kit de conforto à mão, como protetor auricular ou fone com cancelamento de ruído, óculos escuros e roupas de tecidos que agradam você.',
        'Em lugares cheios, escolha posições mais tranquilas, como uma mesa no canto, ou vá em horários de menor movimento.',
        'Em eventos longos, faça pausas num lugar silencioso antes de chegar ao seu limite.',
      ],
    },
    details: {
      label: 'Detalhes e interesses intensos',
      desc: 'Observa sua atenção a detalhes e padrões e a intensidade com que você mergulha nos assuntos que despertam seu interesse.',
      high: 'Você tende a perceber detalhes e padrões que outras pessoas deixam passar e a se aprofundar muito nos assuntos de que gosta. Essa combinação é uma força real: favorece a precisão, a memória para informações e o conhecimento especializado. O ponto de atenção é o tempo, já que um mergulho num interesse pode fazer você esquecer de comer, descansar ou cumprir outros compromissos.',
      low: 'Você costuma ter interesses mais variados e uma visão mais geral das coisas, sem se prender tanto a detalhes. Isso ajuda a transitar entre assuntos e a enxergar o quadro completo. Em tarefas que pedem precisão, vale reservar um momento para revisar com calma.',
      tips: [
        'Valorize seus interesses como fonte de bem-estar e, se fizer sentido, de trabalho: áreas como pesquisa, revisão, tecnologia, dados e artes costumam valorizar a atenção a detalhes.',
        'Use alarmes para lembrar de comer, descansar e cumprir compromissos quando um assunto prender sua atenção por horas.',
        'Compartilhe seus interesses com pessoas e comunidades que também gostam deles, onde o seu entusiasmo é bem-vindo.',
      ],
    },
  },
  bands: {
    few: {
      label: 'Poucos traços',
      text: 'Suas respostas indicam poucos traços do espectro autista no seu dia a dia. Mesmo assim, é natural se identificar com alguns aspectos, como gostar de rotina ou se incomodar com barulho, que fazem parte da diversidade humana. Os limites entre as faixas são apenas uma referência e não definem quem você é.',
    },
    some: {
      label: 'Alguns traços',
      text: 'Suas respostas indicam alguns traços do espectro autista em parte das situações descritas. Muita gente tem traços assim sem estar no espectro, e há pessoas autistas que aprenderam a disfarçar os seus, por isso os limites entre as faixas servem só como guia. Observe as áreas com pontuação mais alta e, se elas trazem dificuldades no seu dia a dia, conversar com um profissional pode ajudar a entender melhor o seu jeito de funcionar.',
    },
    many: {
      label: 'Muitos traços',
      text: 'Suas respostas indicam muitos traços associados ao espectro autista, e pode valer a pena buscar uma avaliação com psicólogo(a), psiquiatra ou neurologista com experiência em autismo em adultos. Muitas pessoas descobrem o espectro na vida adulta e contam que entender o próprio jeito de funcionar trouxe alívio, autoconhecimento e acesso a apoios úteis. Lembre-se de que este resultado não é um diagnóstico e de que os limites entre as faixas são apenas uma referência.',
    },
  },
  resultTitle: 'Seus traços do espectro autista',
  resultIntro:
    'O resultado soma suas respostas nas cinco áreas e mostra em que faixa o total ficou. Pontuações mais altas indicam que mais traços associados ao espectro autista aparecem na sua vida. Esses traços não são defeitos: são diferenças na forma de perceber o mundo, se comunicar e se organizar, que trazem tanto desafios quanto pontos fortes.',
  note: 'Este questionário é uma ferramenta de autoconhecimento baseada nas suas próprias respostas. Ele não é um diagnóstico e não substitui a avaliação de um profissional. O diagnóstico de autismo em adultos envolve entrevistas detalhadas, a história de vida e, muitas vezes, informações sobre a infância, e só pode ser feito por profissionais habilitados. Traços parecidos também podem aparecer em outras condições, como ansiedade, TDAH ou altas habilidades.',
  help: 'Para uma avaliação, procure um(a) psicólogo(a), psiquiatra ou neurologista com experiência em autismo em adultos. Na rede pública, o caminho costuma começar pela unidade básica de saúde, que pode encaminhar para serviços especializados; clínicas-escola de universidades com cursos de psicologia também costumam oferecer atendimento a preços acessíveis. Antes da consulta, anote exemplos de situações do seu dia a dia e, se possível, lembranças da infância ou relatos de familiares. Comunidades e grupos de apoio de adultos autistas, presenciais ou on-line, também ajudam a trocar experiências, sentir que você não está só e encontrar indicações de profissionais.',
};

export default t;
