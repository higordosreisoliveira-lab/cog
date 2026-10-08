import type { CourseText } from '../../schema';

const t: CourseText = {
  title: 'Inteligência emocional na prática',
  desc: 'Aprenda a reconhecer o que você sente, a lidar com emoções fortes no momento em que elas surgem e a conversar melhor com as pessoas, inclusive sobre assuntos difíceis.',
  outcome: 'Ao final, você vai saber nomear suas emoções com precisão, usar técnicas simples para se acalmar e conduzir conversas difíceis com mais clareza e respeito.',
  lessons: [
    {
      title: 'Para que servem as emoções e como dar nome a elas',
      body: `Inteligência emocional é a capacidade de perceber, entender e usar as emoções, as suas e as dos outros, para agir de forma mais adequada. O termo foi proposto pelos psicólogos Peter Salovey e John Mayer e ficou conhecido com o jornalista Daniel Goleman. Não é um talento fixo: boa parte dela é feita de habilidades que se aprendem com prática.

## Emoções são informação

Uma emoção é uma reação rápida do corpo e da mente a algo que parece importante para você. Ela chama a sua atenção e prepara uma resposta. O medo sinaliza um possível perigo. A raiva sinaliza que algo parece injusto ou que um limite foi ultrapassado. A tristeza aparece diante de uma perda. A alegria indica que algo vai bem.

Por isso, não existem emoções "boas" ou "ruins" em si. Todas trazem uma informação útil. O problema aparece quando a reação não combina com a situação, dura demais ou leva a escolhas das quais você se arrepende.

## Dar nome ajuda

Muitas pessoas descrevem o que sentem com poucas palavras: "estou mal", "estou estressado", "estou bem". A psicóloga Lisa Feldman Barrett chama de **granularidade emocional** a capacidade de distinguir emoções parecidas usando palavras mais precisas. Estudos sugerem que pessoas com mais granularidade tendem a lidar melhor com emoções negativas, talvez porque uma descrição precisa aponta o que fazer.

Compare "estou mal" com estas opções:

- **Frustração**: algo atrapalhou um objetivo seu.
- **Decepção**: uma expectativa não se cumpriu.
- **Ansiedade**: você prevê um problema que ainda não aconteceu.
- **Vergonha**: você sente que os outros o viram de forma negativa.
- **Sobrecarga**: há mais demandas do que você consegue atender.

Cada palavra sugere uma resposta diferente. Frustração pede outro caminho até o objetivo. Sobrecarga pede priorizar tarefas ou pedir ajuda. "Estou mal" não sugere nada.

## Como treinar

Quando notar uma emoção, pare e procure a palavra mais exata. Pergunte: o que aconteceu, o que isso significa para mim e o que eu quero agora? Se mais de uma palavra servir, tudo bem. As emoções muitas vezes aparecem misturadas, como alívio e cansaço ao mesmo tempo.

Uma lista de palavras de emoção, guardada no celular ou num caderno, ajuda nas primeiras semanas. Com o tempo, as palavras passam a vir com mais facilidade.`,
      practice: {
        question: 'Marina passou duas semanas preparando um relatório. Na reunião, o chefe dela comentou só um erro de formatação e não falou nada sobre o conteúdo. Ela pensa: "estou mal". Que palavra mais precisa pode descrever o que ela sente, e que ação essa palavra sugere?',
        answer: 'Uma boa opção é "decepção", porque ela esperava um retorno sobre o conteúdo e isso não aconteceu. Essa palavra sugere uma ação concreta: pedir ao chefe, em outro momento, uma opinião específica sobre o conteúdo do relatório. Outras palavras, como "frustração", também servem, desde que ajudem a apontar o que fazer.',
      },
    },
    {
      title: 'Sinais do corpo e gatilhos',
      body: `Muitas vezes o corpo percebe uma emoção antes de você dar nome a ela. O coração acelera, os ombros ficam tensos, o estômago aperta. Aprender a notar esses sinais cedo dá a você alguns segundos a mais para escolher como agir.

## O que o corpo mostra

Cada pessoa tem um padrão próprio, mas alguns sinais são comuns:

- **Raiva**: calor no rosto, mandíbula tensa, mãos fechadas, vontade de falar mais alto.
- **Ansiedade**: respiração curta, coração rápido, inquietação, dificuldade para ficar parado.
- **Tristeza**: corpo pesado, pouca energia, vontade de se afastar das pessoas.
- **Vergonha**: rosto quente, olhar para baixo, vontade de sair da situação.

Esses sinais não são precisos como um termômetro. Um coração acelerado pode indicar ansiedade, entusiasmo ou apenas o efeito do café. Por isso, use o corpo como um alerta, e não como um diagnóstico: "algo está acontecendo e vale prestar atenção".

## Gatilhos

Um gatilho é uma situação que costuma provocar em você uma reação forte, muitas vezes maior do que a situação pede. Ser interrompido, receber uma crítica em público, esperar sem saber por quanto tempo, sentir que não foi ouvido. Os gatilhos variam muito de pessoa para pessoa e costumam estar ligados a coisas que você valoriza, como respeito, justiça ou controle sobre o próprio tempo.

Conhecer os seus gatilhos não faz a reação desaparecer, mas tira o efeito surpresa. Quando você sabe que interrupções o irritam, consegue perceber a irritação chegando e decidir o que fazer com ela.

## Um registro simples

Durante uma ou duas semanas, sempre que tiver uma reação forte, anote quatro coisas:

- **Situação**: o que aconteceu, de forma objetiva.
- **Corpo**: o que você sentiu fisicamente.
- **Emoção**: o nome mais preciso que encontrar.
- **Reação**: o que você fez ou teve vontade de fazer.

Depois de algumas anotações, procure repetições. Talvez a irritação apareça mais no fim do dia, quando você está cansado ou com fome. Talvez um tipo de comentário sempre provoque a mesma reação. Esses padrões revelam os seus gatilhos.

## Cansaço, fome e sono

O estado do corpo muda a intensidade das emoções. Pesquisas sobre sono mostram que noites mal dormidas deixam as pessoas mais reativas a situações negativas no dia seguinte. Antes de concluir que uma situação é grave, vale perguntar: eu dormi, comi e descansei o suficiente?`,
      practice: {
        question: 'Durante uma semana, Paulo anotou suas reações fortes. Ele percebeu que ficou irritado três vezes, sempre em reuniões depois das 17h, quando alguém mudava um prazo sem avisar antes. Qual parece ser o gatilho dele, e que fator do corpo pode estar aumentando a reação?',
        answer: 'O gatilho parece ser a mudança de prazo sem aviso, que provavelmente afeta algo que ele valoriza, como previsibilidade ou controle sobre o próprio tempo. O horário indica que o cansaço do fim do dia pode estar aumentando a intensidade da irritação.',
      },
    },
    {
      title: 'Como se regular no momento',
      body: `Regular uma emoção não é escondê-la nem fingir que ela não existe. É influenciar quanto tempo ela dura, quão forte ela fica e como você a expressa. O psicólogo James Gross, que estuda o tema há décadas, mostrou que algumas estratégias funcionam melhor do que outras.

## O que costuma funcionar pior

**Suprimir**, ou seja, segurar a expressão da emoção sem mudar o que você sente por dentro, tende a manter a tensão no corpo e a cansar. Em estudos, pessoas que suprimem com frequência relatam mais emoções negativas e relações menos próximas. **Ruminar**, que é repetir mentalmente o mesmo problema sem chegar a uma conclusão, também tende a prolongar o mal-estar.

## A pausa

O primeiro passo é ganhar tempo entre o que acontece e o que você faz. Quando notar os sinais do corpo, faça uma pausa curta antes de responder. Pode ser uma frase simples, como "preciso pensar um pouco antes de responder", ou alguns segundos de silêncio. Em conversas por mensagem, você pode esperar alguns minutos antes de enviar.

## A respiração

Respirar mais devagar é uma das formas mais acessíveis de reduzir a agitação do corpo. Uma opção é soltar o ar por mais tempo do que você leva para puxá-lo: inspire contando até quatro e expire contando até seis, por um ou dois minutos. Não é uma solução mágica, mas costuma diminuir a sensação de urgência e deixar o pensamento mais claro.

## A reavaliação

A estratégia com mais apoio na pesquisa é a **reavaliação**: mudar a interpretação da situação. A emoção depende muito do significado que você dá ao que aconteceu. Se um colega não respondeu ao seu cumprimento, você pode pensar "ele me ignorou de propósito" ou "ele estava distraído com algum problema". A segunda leitura não é garantida, mas é possível, e muda o que você sente.

Algumas perguntas ajudam a reavaliar:

- Existe outra explicação para o que aconteceu?
- Como eu vou ver isso daqui a um mês?
- O que eu diria a um amigo na mesma situação?

Reavaliar não significa aceitar qualquer coisa. Se algo foi de fato injusto, a raiva é uma informação válida. A reavaliação serve para que a sua resposta se baseie nos fatos, e não na primeira interpretação que surgiu.

## A ordem

Em momentos intensos, siga esta ordem: perceber o sinal, pausar, respirar e só então reavaliar. Com a emoção muito forte, é difícil pensar com clareza, por isso a pausa e a respiração vêm antes.`,
      practice: {
        question: 'Você enviou uma proposta para um cliente e, dois dias depois, ele ainda não respondeu. Você começa a pensar "ele não gostou e não quer me dizer" e sente o estômago apertar. Aplique a sequência da aula: o que você faz em cada passo?',
        answer: 'Primeiro, você percebe o sinal no corpo: o estômago apertado. Depois, faz uma pausa e evita escrever uma mensagem irritada naquele momento. Em seguida, respira devagar por um ou dois minutos. Por fim, reavalia: o cliente pode estar ocupado, viajando ou ainda analisando a proposta. Com mais calma, você escolhe uma ação concreta, como enviar uma mensagem curta perguntando se ele tem alguma dúvida.',
      },
    },
    {
      title: 'Empatia e escuta ativa',
      body: `Empatia é a capacidade de entender o que outra pessoa sente e pensa. Os pesquisadores costumam separar dois lados dela. A **empatia cognitiva** é entender o ponto de vista do outro. A **empatia afetiva** é sentir algo em resposta ao que o outro sente. As duas são úteis, e ambas melhoram com atenção e prática.

## Empatia não é concordar

Entender por que alguém está irritado não significa achar que essa pessoa tem razão. Você pode reconhecer o sentimento de alguém e, mesmo assim, discordar da opinião ou do pedido dela. Essa separação deixa as conversas mais calmas, porque a pessoa se sente ouvida antes de ouvir um "não".

## O que atrapalha a escuta

Muitas vezes, enquanto o outro fala, você já está preparando a sua resposta. Outros hábitos comuns também atrapalham:

- Interromper para corrigir um detalhe.
- Mudar o assunto para uma história parecida que aconteceu com você.
- Dar conselhos antes de entender o problema.
- Diminuir o que a pessoa sente, com frases como "isso não é nada".

## Escuta ativa

O psicólogo Carl Rogers ajudou a difundir a ideia de **escuta ativa**: ouvir com atenção total e mostrar que você entendeu. Ela tem alguns elementos práticos:

- **Atenção**: olhe para a pessoa, deixe o celular de lado e não interrompa.
- **Perguntas abertas**: em vez de "foi ruim?", pergunte "como foi para você?".
- **Resumo**: repita com suas palavras o que entendeu, por exemplo "então o que mais incomodou foi não ter sido avisado antes, certo?".
- **Nome da emoção**: quando fizer sentido, diga o que parece que a pessoa sente, como "parece que você ficou frustrado". Se errar, ela vai corrigir, e isso também ajuda.

## Por que o resumo funciona

O resumo faz duas coisas ao mesmo tempo. Ele confirma se você entendeu direito, o que evita discussões sobre coisas que ninguém disse. E ele mostra à pessoa que ela foi ouvida, o que costuma diminuir a tensão. Muitas vezes, depois de um bom resumo, a pessoa acrescenta a parte mais importante, que ainda não tinha dito.

## Quando dar conselhos

Nem toda conversa pede uma solução. Às vezes a pessoa só quer ser ouvida. Se não tiver certeza, pergunte: "você quer sugestões ou prefere só conversar sobre isso agora?". Essa pergunta simples evita muitos mal-entendidos.`,
      practice: {
        question: 'Um colega diz: "Passei o fim de semana inteiro refazendo a apresentação e, no fim, o cliente cancelou a reunião." Qual destas respostas é o melhor exemplo de escuta ativa: (a) "Pelo menos a apresentação já está pronta para a próxima vez." (b) "Comigo aconteceu a mesma coisa no mês passado." (c) "Você usou o fim de semana todo nisso e a reunião nem aconteceu. Deve ter sido frustrante." (d) "Você devia ter confirmado a reunião antes."',
        answer: 'A alternativa (c). Ela resume o que aconteceu e dá nome à emoção provável, sem julgar. A (a) diminui o que a pessoa sente, a (b) muda o foco para você e a (d) critica antes de entender a situação.',
      },
    },
    {
      title: 'Conversas difíceis',
      body: `Conversas difíceis são aquelas em que o assunto é importante, as opiniões são diferentes e as emoções estão fortes. Pedir que alguém mude um comportamento, discordar de um chefe, resolver um conflito em casa. É comum evitar essas conversas ou começá-las de um jeito que piora a situação. Algumas ferramentas simples ajudam.

## Fale de você, não do outro

Frases que começam com "você" costumam soar como acusação: "você nunca me avisa", "você é desorganizado". A outra pessoa tende a se defender, e a conversa vira uma disputa. Uma alternativa é a **mensagem em primeira pessoa**, que descreve o seu lado: "eu fico preocupado quando não sei se o prazo mudou".

A diferença não está só nas palavras. Uma frase sobre você descreve uma experiência que a outra pessoa não pode negar. Uma frase sobre o caráter do outro convida à discussão.

## Quatro partes de uma boa mensagem

O psicólogo Marshall Rosenberg propôs um modelo chamado **comunicação não violenta**. Em palavras simples, ele sugere organizar o que você quer dizer em quatro partes:

- **Fato**: o que aconteceu, sem julgamento. "Na reunião de ontem, o relatório foi apresentado sem o meu nome."
- **Sentimento**: o que você sentiu. "Eu fiquei chateado."
- **Necessidade**: o que é importante para você. "Para mim, é importante que o meu trabalho seja reconhecido."
- **Pedido**: uma ação concreta e possível. "Nas próximas apresentações, você pode citar quem participou?"

Um cuidado: "eu sinto que você não me respeita" não descreve um sentimento, e sim uma interpretação sobre o outro. Prefira palavras que descrevem o seu estado, como chateado, preocupado ou inseguro.

## Pedido, não exigência

Um pedido deixa espaço para a outra pessoa responder, inclusive com outra proposta. Uma exigência só aceita "sim". Pedidos concretos funcionam melhor do que pedidos vagos: "você pode me avisar com um dia de antecedência?" é mais claro do que "você pode ser mais atencioso?".

## Antes e durante a conversa

- Escolha um momento calmo e um lugar reservado.
- Fale de um assunto por vez.
- Depois de falar, ouça e resuma o lado do outro, como na aula anterior.
- Se a tensão aumentar demais, proponha uma pausa e combine quando voltar ao assunto.

O objetivo não é vencer a conversa. É que as duas pessoas entendam o problema e encontrem algo que possam fazer de forma diferente.`,
      practice: {
        question: 'Reescreva esta frase usando as quatro partes da aula: "Você sempre chega atrasado nas nossas reuniões e não se importa com o meu tempo."',
        answer: 'Uma versão possível: "Nas três últimas reuniões, você chegou cerca de 15 minutos depois do horário (fato). Eu fiquei irritado e preocupado (sentimento), porque para mim é importante usar bem o tempo da equipe (necessidade). Você pode me avisar com antecedência quando for se atrasar, ou podemos escolher um horário que funcione melhor para você? (pedido)". A nova frase descreve fatos em vez de usar "sempre" e troca a acusação por um pedido concreto.',
      },
    },
    {
      title: 'Hábitos para continuar evoluindo',
      body: `A inteligência emocional se desenvolve com repetição, como qualquer habilidade. Ler sobre emoções ajuda a entender, mas a mudança vem de praticar em situações reais, errar, perceber o erro e tentar de novo. Esta aula reúne hábitos simples para manter esse treino.

## Escrever sobre o que você sente

O psicólogo James Pennebaker estudou a **escrita expressiva**: escrever por 15 a 20 minutos, durante alguns dias, sobre uma experiência difícil, contando o que aconteceu e o que você sentiu. Em vários estudos, essa prática esteve ligada a pequenas melhoras no bem-estar. Os efeitos não são grandes nem aparecem para todos, mas o custo é baixo.

Para o dia a dia, um diário curto já é útil. No fim do dia, responda por escrito:

- Qual foi o momento de emoção mais forte hoje?
- Que nome mais preciso eu dou a essa emoção?
- O que provocou essa reação?
- Como eu agi, e como eu gostaria de ter agido?

Cinco minutos bastam. O objetivo é perceber padrões, não escrever bem.

## Revisar sem se atacar

Ao olhar para trás, muitas pessoas tendem a se criticar: "de novo eu perdi a paciência". A pesquisadora Kristin Neff estuda a **autocompaixão**, que é tratar a si mesmo com a mesma gentileza que você teria com um amigo. Os estudos sugerem que essa atitude está ligada a mais disposição para corrigir erros, e não a menos. A pergunta útil não é "o que há de errado comigo?", e sim "o que eu vou fazer de forma diferente da próxima vez?".

## Planejar a próxima vez

Uma técnica com bom apoio na pesquisa é o plano do tipo **"se... então"**, estudado pelo psicólogo Peter Gollwitzer. Você define com antecedência uma situação e a resposta que quer dar. Por exemplo: "se eu sentir o rosto quente numa reunião, então eu respiro devagar antes de falar". Ligar a resposta a um sinal concreto torna mais provável que ela aconteça no momento certo.

## Pequenas práticas diárias

- Uma vez por dia, resuma o que alguém disse antes de responder.
- Antes de enviar uma mensagem tensa, espere alguns minutos e releia.
- Uma vez por semana, releia o diário e procure repetições.

## O que esperar

Mudanças assim são graduais. Você vai continuar sentindo raiva, medo e tristeza, e isso é esperado. O que muda é o tempo que você leva para perceber o que sente e a quantidade de opções que você enxerga antes de agir.`,
      practice: {
        question: 'Pelo seu diário, você percebeu que costuma responder de forma grosseira quando recebe mensagens de cobrança no fim do dia. Escreva um plano do tipo "se... então" para essa situação.',
        answer: 'Um exemplo: "Se eu receber uma mensagem de cobrança depois das 18h, então eu espero dez minutos, releio a mensagem e só depois respondo." Um bom plano liga uma situação concreta, que você já sabe que é um gatilho, a uma ação específica e possível de cumprir.',
      },
    },
  ],
};

export default t;
