// Texto-fonte (português do Brasil) do teste "adhd".
// Regras para traduzir: `items` segue a MESMA ordem de ./structure.ts (posições ímpares = inattention,
// posições pares = hyperactivity) e as chaves de `dims` e `bands` não mudam. Nenhum item é invertido.
// Itens originais, escritos como cenários concretos do dia a dia; não reproduzem escalas publicadas.

import type { TestText } from '../../schema';

const t: TestText = {
  title: 'Traços de TDAH em adultos',
  desc: 'Veja com que frequência situações ligadas à atenção, à organização, à inquietação e à impulsividade aparecem na sua rotina de adulto.',
  intro:
    'O TDAH (transtorno de déficit de atenção e hiperatividade) não é coisa só de criança: muitas pessoas chegam à vida adulta com esses traços, às vezes sem nunca terem passado por uma avaliação. Este questionário observa dois grupos de traços no dia a dia: atenção e organização, e inquietação e impulsividade. São 18 situações comuns da vida adulta, no trabalho, em casa e nas relações. Pense nos últimos 6 meses e indique com que frequência cada uma aconteceu com você. Responda com sinceridade, pensando no que de fato acontece, e não no que você gostaria que acontecesse. Lembre-se de que esta é uma autoavaliação que olha para traços, e não um diagnóstico. Todo mundo se distrai ou fica com pressa de vez em quando; o que conta aqui é a frequência.',
  scale: ['Nunca', 'Raramente', 'Às vezes', 'Com frequência', 'Muito frequentemente'],
  items: [
    'Leio uma página de um livro ou de um relatório até o fim e percebo que não sei dizer o que estava escrito, porque minha cabeça estava em outro assunto.',
    'Numa reunião, aula ou palestra, percebo que estou balançando a perna, batendo a caneta na mesa ou trocando de posição na cadeira o tempo todo.',
    'Já na porta de casa, perco alguns minutos procurando a chave, o celular ou a carteira, que deixei em algum lugar de que não me lembro.',
    'Numa conversa em grupo, uma ideia aparece e eu falo na hora, por cima de alguém que ainda não tinha terminado, com receio de esquecer o que queria dizer.',
    'Pego o celular ou abro o computador para resolver uma coisa específica, como pagar uma conta, e acabo fazendo outras três sem resolver a primeira.',
    'Vejo uma promoção ou algo que me chama a atenção e compro na hora, sem comparar preços nem pensar no orçamento do mês.',
    'Enquanto alguém me explica algo com calma, percebo que perdi uma parte do que a pessoa disse e preciso pedir para repetir, ou faço de conta que acompanhei.',
    'Na fila do mercado ou no trânsito parado, sinto uma impaciência que cresce rápido: fico olhando para os lados, bufando ou procurando outro caminho.',
    'Uma tarefa simples e sem graça, como marcar uma consulta ou enviar um documento, fica parada por semanas na minha lista, mesmo sabendo que levaria poucos minutos.',
    'Num dia de folga sem planos, em vez de descansar, sinto uma inquietação e logo invento algo para fazer, porque passar um tempo sem fazer nada me incomoda.',
    'Envio um e-mail, um trabalho ou uma planilha e só depois noto um detalhe que passou batido, como um anexo esquecido, uma data errada ou um nome trocado.',
    'Respondo uma mensagem ou um comentário no calor do momento e, pouco depois, me arrependo do tom ou do que escrevi.',
    'Começo a arrumar um cômodo, encontro algo que me leva para outro canto da casa e, no fim do dia, há várias arrumações pela metade.',
    'Deito para dormir com o corpo cansado, mas a cabeça continua acelerada, pulando de um pensamento para outro por um bom tempo.',
    'Combino algo com alguém e só me lembro do compromisso quando a pessoa manda mensagem perguntando se ainda vou.',
    'Depois de um encontro com amigos ou colegas, percebo que falei bem mais do que os outros ou que emendei um assunto no outro sem deixar a conversa respirar.',
    'Acho que ainda tenho bastante tempo antes de sair e, quando olho o relógio, já deveria estar a caminho.',
    'No embalo da empolgação, aceito um convite, um projeto novo ou uma mudança de planos na hora, e só depois percebo que aquilo não cabia na minha rotina.',
  ],
  dims: {
    inattention: {
      label: 'Atenção e organização',
      desc: 'Mede com que frequência a atenção escapa no meio de uma leitura, tarefa ou conversa, e como você lida com prazos, compromissos, objetos do dia a dia e tarefas pouco interessantes.',
      high: 'Manter o foco em tarefas pouco interessantes, lembrar de compromissos e cuidar dos detalhes parece exigir de você mais esforço do que de muita gente. Isso não tem a ver com preguiça nem com falta de inteligência: muitas pessoas com esse perfil têm uma mente rápida e criativa, cheia de associações, e conseguem se concentrar intensamente no que desperta o interesse delas. O que costuma ajudar é tirar a organização da cabeça e levá-la para o ambiente, com lembretes, listas e rotinas simples.',
      low: 'Você costuma manter a atenção no que está fazendo, lembra dos compromissos e consegue levar as tarefas até o fim, mesmo as menos interessantes. Isso traz confiabilidade e tranquilidade no trabalho e em casa. Distrações ocasionais são normais, principalmente em fases de cansaço, estresse ou sono ruim.',
      tips: [
        'Use alarmes e lembretes no celular para compromissos e contas, em vez de confiar só na memória.',
        'Tenha um lugar fixo para chave, carteira e documentos, como um pote ou um gancho perto da porta.',
        'Diante de uma tarefa chata, comprometa-se apenas com os primeiros cinco minutos: começar costuma ser a parte mais difícil.',
      ],
    },
    hyperactivity: {
      label: 'Inquietação e impulsividade',
      desc: 'Mede a inquietação do corpo e da mente, a dificuldade de esperar e a tendência a falar, decidir ou agir no impulso do momento.',
      high: 'Você tem bastante energia e tende a agir rápido: fala, decide e reage no ritmo em que as ideias aparecem, e esperar ou ficar muito tempo sem se mexer costuma ser desconfortável. Essa energia pode ser uma grande aliada, trazendo entusiasmo, iniciativa, criatividade e coragem para começar coisas novas. O ponto de atenção são as palavras e decisões no calor do momento, que às vezes geram arrependimento ou atritos, e o cansaço de uma mente que demora a desacelerar.',
      low: 'Você costuma esperar com tranquilidade, pensar antes de agir e consegue relaxar quando tem tempo livre. Isso ajuda a tomar decisões ponderadas e a manter conversas equilibradas. Momentos pontuais de impaciência ou agitação são normais, principalmente em fases de estresse.',
      tips: [
        'Antes de comprar, responder uma mensagem que irritou você ou aceitar um compromisso novo, crie uma pausa: espere alguns minutos ou até o dia seguinte.',
        'Dê uma saída para a energia do corpo, com atividade física regular, caminhadas curtas nas pausas ou um objeto discreto para mexer nas mãos durante reuniões.',
        'Se a mente acelera na hora de dormir, anote num papel o que está na cabeça antes de deitar e deixe para resolver no dia seguinte.',
      ],
    },
  },
  bands: {
    few: {
      label: 'Poucos traços',
      text: 'Suas respostas indicam que situações ligadas à desatenção, à inquietação e à impulsividade aparecem pouco no seu dia a dia. Algumas distrações e momentos de impaciência são normais para qualquer pessoa. As faixas deste teste servem apenas como orientação e não foram validadas clinicamente.',
    },
    some: {
      label: 'Alguns traços',
      text: 'Suas respostas indicam que alguns traços de desatenção ou de inquietação aparecem com certa frequência na sua rotina. Isso é comum e pode ter várias causas, como cansaço, estresse, sono ruim ou excesso de demandas. Observe em quais situações eles pesam mais e experimente as dicas de cada área, lembrando que as faixas são só uma orientação, sem validação clínica.',
    },
    many: {
      label: 'Muitos traços',
      text: 'Suas respostas indicam que muitos traços ligados à atenção, à inquietação e à impulsividade aparecem com frequência no seu dia a dia. Isso não significa que você tem TDAH: outras condições e fases da vida podem trazer sinais parecidos, e as faixas deste teste são só uma orientação, sem validação clínica. Se esses traços acompanham você há bastante tempo, talvez desde a infância, e atrapalham o trabalho, os estudos ou as relações, vale conversar com um(a) psiquiatra, neurologista ou psicólogo(a) para uma avaliação adequada.',
    },
  },
  resultTitle: 'Seus traços de TDAH',
  resultIntro:
    'O resultado soma suas respostas às 18 situações e mostra com que frequência traços de desatenção, inquietação e impulsividade aparecem no seu dia a dia. Veja também as duas áreas separadamente: elas ajudam a entender onde esses traços pesam mais e onde estão os seus pontos fortes.',
  note: 'Este teste é uma ferramenta de autoconhecimento baseada nas suas próprias respostas. Ele não é um diagnóstico de TDAH nem de qualquer outra condição, e as faixas de resultado não foram validadas clinicamente. Somente um profissional qualificado, como psiquiatra, neurologista ou psicólogo(a), pode fazer uma avaliação completa, que considera sua história desde a infância e outras possíveis causas, como ansiedade, depressão ou problemas de sono.',
  help: 'Se você quer investigar esses traços, procure um(a) psiquiatra, neurologista ou psicólogo(a), de preferência com experiência em TDAH em adultos. No Brasil, pelo SUS, o primeiro passo é ir a uma Unidade Básica de Saúde (UBS), que pode orientar e encaminhar para avaliação; em situações de maior sofrimento, o atendimento também pode acontecer em um Centro de Atenção Psicossocial (CAPS). Há ainda serviços especializados em ambulatórios de universidades e hospitais-escola, além de associações de apoio a pessoas com TDAH, que costumam indicar profissionais e materiais confiáveis.',
};

export default t;
