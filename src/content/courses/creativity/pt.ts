import type { CourseText } from '../../schema';

const t: CourseText = {
  title: 'Criatividade e novas ideias',
  desc: 'Entenda como as ideias novas surgem e aprenda técnicas práticas para gerar, escolher e testar ideias, no trabalho e fora dele.',
  outcome: 'Ao final, você vai saber alternar entre gerar e avaliar ideias, usar técnicas simples para ir além das primeiras ideias e testar suas propostas em pequena escala antes de investir muito nelas.',
  lessons: [
    {
      title: 'O que é criatividade',
      body: `Muita gente acha que criatividade é um dom de artistas e inventores. A pesquisa em psicologia apresenta uma visão mais ampla. Uma definição bastante aceita, discutida por pesquisadores como Mark Runco, diz que uma ideia é criativa quando é, ao mesmo tempo, **nova** e **útil**.

## Nova e útil

As duas partes importam. Uma ideia apenas nova pode ser estranha e não resolver nada. Uma ideia apenas útil pode ser a mesma solução de sempre. A criatividade está na combinação: algo diferente que também funciona para um objetivo.

"Útil" aqui tem um sentido amplo. Pode ser resolver um problema prático, comunicar algo de forma mais clara ou criar uma experiência que as pessoas valorizam, como uma música ou uma receita.

## Criatividade do dia a dia

Os pesquisadores James Kaufman e Ronald Beghetto propuseram um modelo com vários níveis de criatividade. Num extremo estão as grandes obras e descobertas, que mudam uma área inteira. No outro está a criatividade do cotidiano: adaptar uma receita com o que há na geladeira, encontrar um jeito novo de organizar uma planilha, inventar uma brincadeira para as crianças.

Este curso trata principalmente da criatividade do dia a dia e do trabalho. Ela está ao alcance de qualquer pessoa e melhora com prática.

## Mitos comuns

- **"Criatividade é só para quem nasceu com ela."** Existem diferenças entre as pessoas, mas hábitos e técnicas influenciam bastante o resultado.
- **"Boas ideias surgem do nada."** Na maioria das vezes, elas vêm da combinação de conhecimentos que você já tem. Conhecer bem uma área ajuda a criar nela.
- **"O lado direito do cérebro é o lado criativo."** Essa ideia é popular, mas não tem apoio na neurociência. Tarefas criativas envolvem várias redes do cérebro trabalhando juntas.
- **"É preciso liberdade total."** Na prática, alguns limites bem escolhidos costumam ajudar, como você vai ver mais adiante.

## Quantidade ajuda a qualidade

O psicólogo Dean Keith Simonton estudou a produção de grandes criadores e notou que os mais famosos não acertavam com mais frequência do que os outros. Eles produziam muito mais e, por isso, tinham mais acertos. A lição para o dia a dia é simples: gere muitas ideias antes de escolher. A primeira ideia raramente é a melhor.

## O processo

Criar costuma envolver duas etapas que se alternam: abrir possibilidades e depois escolher entre elas. A próxima aula trata dessas duas formas de pensar e explica por que é melhor não misturá-las.`,
      practice: {
        question: 'O objetivo é reduzir as filas na cantina de uma empresa na hora do almoço. A empresa nunca usou pedidos antecipados. Classifique cada ideia como "nova e útil", "só nova" ou "só útil": (a) colocar música ao vivo na cantina; (b) contratar mais um funcionário para o caixa, como já foi feito no ano anterior; (c) permitir que as pessoas façam o pedido pelo celular com antecedência e só retirem a refeição.',
        answer: '(a) é só nova: é diferente, mas não diminui a fila. (b) é só útil: ajuda, mas é a solução de sempre. (c) é nova e útil: muda o processo e atua sobre a causa da fila. Note que "novo" depende do contexto: algo comum em outros lugares pode ser novo dentro da sua empresa.',
      },
    },
    {
      title: 'Pensamento divergente e convergente',
      body: `Nos anos 1950, o psicólogo J. P. Guilford chamou atenção para dois tipos de pensamento usados na solução de problemas. O **pensamento divergente** gera muitas possibilidades a partir de um ponto de partida. O **pensamento convergente** avalia as opções e escolhe a melhor. A criatividade depende dos dois, mas em momentos diferentes.

## Divergir

Um teste clássico de pensamento divergente pede: "liste todos os usos que você consegue imaginar para um tijolo". As respostas costumam ser avaliadas por quatro critérios:

- **Fluência**: quantas ideias você gerou.
- **Flexibilidade**: quantas categorias diferentes elas cobrem. Usar o tijolo como peso de porta ou peso de papel é a mesma categoria. Usá-lo como degrau ou triturá-lo para fazer tinta são categorias diferentes.
- **Originalidade**: quão raras são as ideias, em comparação com as de outras pessoas.
- **Elaboração**: quanto detalhe cada ideia tem.

Esses testes medem só uma parte da criatividade, mas mostram algo útil: as primeiras respostas costumam ser as mais comuns. As ideias mais originais tendem a aparecer depois que as óbvias acabam.

## Convergir

Depois de gerar opções, é preciso escolher. Aqui entram critérios como custo, tempo, impacto, risco e o que o público valoriza. O pensamento convergente é crítico e seletivo, e isso é uma qualidade nesta etapa.

## Não misture as duas fases

O erro mais comum é julgar cada ideia no momento em que ela aparece: "isso é caro demais", "isso nunca vai funcionar". Criticar cedo demais interrompe a geração de ideias e faz as pessoas guardarem propostas que poderiam levar a algo bom.

A sugestão prática é separar as fases no tempo:

- **Fase de gerar**: defina um tempo, por exemplo 10 minutos, e anote tudo, sem comentar nem descartar nada.
- **Fase de avaliar**: só depois, aplique critérios e escolha.

## Em grupo

Em reuniões de ideias, as pessoas tendem a se influenciar e a evitar propostas que pareçam estranhas. Pesquisas mostram que grupos que discutem ideias em voz alta costumam gerar menos ideias do que o mesmo número de pessoas pensando sozinhas. Uma alternativa é cada pessoa escrever suas ideias em silêncio por alguns minutos e só depois o grupo compartilhar e discutir.

## Ideias ruins também servem

Uma ideia impossível pode conter uma parte aproveitável. Na fase de avaliar, antes de descartar uma ideia, pergunte: o que há de bom nela e como eu poderia tornar essa parte viável?`,
      practice: {
        question: 'Use um cronômetro de 3 minutos e liste todos os usos que conseguir imaginar para um clipe de papel. Depois, conte quantas ideias você teve e quantas categorias diferentes elas cobrem. O que costuma acontecer com as ideias do final da lista em comparação com as do início?',
        answer: 'Não há um número certo, mas o padrão mais comum é este: as primeiras ideias são as mais óbvias, como prender papéis, e as do final tendem a ser mais originais, como usar o clipe para desenhar um círculo ou como peça de um jogo. Esse padrão mostra por que vale continuar gerando ideias depois que as primeiras aparecem.',
      },
    },
    {
      title: 'Técnicas para gerar ideias',
      body: `Esperar a inspiração não é um bom método. Algumas técnicas simples ajudam a ir além das primeiras ideias e a explorar caminhos que você não veria de imediato. Elas funcionam melhor na fase de gerar, quando o objetivo é quantidade.

## Perguntas de transformação

Escolha um produto, serviço ou processo que já existe e faça perguntas sobre ele. Uma lista conhecida, chamada SCAMPER, organiza perguntas desse tipo. Uma versão simples:

- **Trocar**: que parte, material ou pessoa eu poderia substituir?
- **Combinar**: o que acontece se eu juntar isto com outra coisa?
- **Adaptar**: que solução de outra área eu poderia trazer para cá?
- **Aumentar ou diminuir**: e se fosse muito maior, menor, mais rápido ou mais simples?
- **Mudar o uso**: para que mais isto poderia servir, ou para quem mais?
- **Eliminar**: o que eu posso tirar sem perder o essencial?
- **Inverter**: e se a ordem fosse a contrária, ou se o cliente fizesse a parte que hoje nós fazemos?

Escolha duas ou três e gere várias respostas para cada uma.

## Restrições

Parece contraditório, mas limites podem ajudar a criar. Diante de uma folha em branco, a mente tende a voltar ao caminho mais conhecido. Uma restrição obriga você a procurar outro. Experimente regras como "resolver sem gastar dinheiro", "em no máximo três passos" ou "usando só o que já temos". Pesquisas indicam que restrições moderadas costumam favorecer a criatividade, enquanto restrições excessivas tendem a atrapalhar.

## Estímulo aleatório

Escolha uma palavra ao acaso, por exemplo abrindo um livro numa página qualquer, e procure uma ligação entre ela e o seu problema. Se o problema é atrair mais clientes para uma padaria e a palavra é "biblioteca", você pode pensar em silêncio, cartão de leitor e clube de leitura. Cada associação pode virar uma ideia: um cartão de fidelidade, um canto tranquilo para trabalhar, um clube de degustação.

O estímulo aleatório funciona porque tira você do conjunto habitual de associações.

## Analogias

Pergunte: quem já resolveu um problema parecido em outra área? O velcro, por exemplo, foi inspirado nas sementes de uma planta que grudavam na roupa. Um hospital pode aprender com equipes de corrida de automóveis a fazer trocas de turno mais rápidas e organizadas. Quanto mais distante a área, maior a chance de uma ideia original, embora a adaptação dê mais trabalho.

## Combine técnicas

As técnicas podem ser usadas juntas: aplique uma restrição e depois faça perguntas de transformação dentro dela. Anote tudo e só avalie depois.`,
      practice: {
        question: 'Use a pergunta "Inverter" para gerar uma ideia para este problema: numa academia de ginástica, muitos alunos desistem nos dois primeiros meses.',
        answer: 'Uma resposta possível: em vez de esperar que o aluno volte, a academia vai até ele, por exemplo com uma mensagem de um instrutor quando alguém falta por uma semana. Outra inversão: em vez de só pagar para treinar, o aluno recebe um desconto na mensalidade quando cumpre uma meta de frequência. A técnica funciona quando você inverte a direção, a ordem ou os papéis de algo que hoje é feito sempre do mesmo jeito.',
      },
    },
    {
      title: 'Incubação: o papel das pausas',
      body: `Muitas pessoas contam que tiveram uma boa ideia no banho, numa caminhada ou logo ao acordar, depois de dias pensando no problema sem sucesso. Em 1926, o psicólogo Graham Wallas descreveu o processo criativo em quatro etapas:

- **Preparação**: estudar o problema e reunir informações.
- **Incubação**: afastar-se do problema por um tempo.
- **Iluminação**: a ideia aparece, às vezes de repente.
- **Verificação**: testar se a ideia realmente funciona.

O modelo é uma simplificação, mas a etapa de incubação foi estudada em muitos experimentos.

## O que a pesquisa diz

Revisões de estudos encontraram um efeito de incubação real, porém moderado: fazer uma pausa depois de trabalhar num problema tende a ajudar a resolvê-lo, principalmente em tarefas que pedem muitas ideias diferentes. Algumas pesquisas sugerem que pausas com atividades leves, que exigem pouco esforço mental, ajudam mais do que outra tarefa difícil.

Uma explicação possível é que, durante a pausa, você esquece as abordagens erradas que estava repetindo e volta ao problema com uma visão mais aberta. Outra é que a mente continua fazendo associações sem que você perceba. Os pesquisadores ainda discutem qual explicação é a mais importante.

## A preparação vem antes

A incubação não substitui o trabalho. Ela funciona depois que você estudou o problema com atenção. Uma ideia que aparece no banho geralmente é resultado de horas de preparação.

## Caminhar e dormir

Em estudos da Universidade Stanford, os pesquisadores Marily Oppezzo e Daniel Schwartz observaram que as pessoas geravam mais ideias em testes de pensamento divergente enquanto caminhavam, e logo depois, do que quando ficavam sentadas.

O sono também parece ajudar. Num estudo feito na Alemanha, pessoas que dormiram depois de praticar uma tarefa tiveram mais chance de descobrir um atalho escondido nela do que pessoas que passaram o mesmo tempo acordadas. É um resultado interessante, mas ainda precisa de mais confirmação.

## Como usar isso

- Comece cedo os problemas difíceis, para ter tempo de fazer pausas.
- Trabalhe com foco e, quando travar, mude para algo leve: caminhar, arrumar a mesa, lavar a louça.
- Antes de dormir, releia o problema por alguns minutos.
- Tenha sempre onde anotar, porque ideias que surgem fora do horário de trabalho são fáceis de esquecer.
- Volte ao problema depois da pausa. A incubação ajuda a ter ideias, mas a verificação continua necessária.`,
      practice: {
        question: 'Você precisa criar o nome de um novo produto até sexta-feira, e hoje é segunda. Usando o que a aula explica sobre incubação, como você organizaria o trabalho nesses dias?',
        answer: 'Uma organização possível: na segunda, estudar o produto e o público e fazer uma primeira lista de nomes (preparação). Na terça e na quarta, voltar ao problema em sessões curtas, com pausas para atividades leves, como caminhadas, e anotar as ideias que surgirem fora do horário de trabalho (incubação). Na quinta, escolher os melhores nomes e testá-los com algumas pessoas (verificação). O ponto principal é começar cedo, para que haja tempo de pausa entre as sessões de trabalho.',
      },
    },
    {
      title: 'Prototipar e testar em pequena escala',
      body: `Uma ideia só mostra o seu valor quando entra em contato com a realidade. Muitas ideias que parecem ótimas no papel têm problemas que só aparecem quando alguém tenta usá-las. Outras, que pareciam fracas, se mostram úteis. A forma mais barata de descobrir isso é testar cedo e em pequena escala.

## O que é um protótipo

Um protótipo é uma versão simples e incompleta de uma ideia, feita para aprender algo. Ele não precisa ser bonito nem funcionar por completo. Alguns exemplos:

- Um desenho feito à mão das telas de um aplicativo.
- Uma página simples que descreve um serviço, para ver se as pessoas se interessam.
- Uma versão de um evento com cinco convidados em vez de cem.
- Um roteiro de atendimento testado com dois clientes antes de ser usado pela equipe toda.

## Defina o que você quer aprender

Antes de montar o protótipo, escreva a pergunta que ele deve responder. "As pessoas entendem como usar isto sem explicação?" "Alguém pagaria por este serviço?" "Este novo processo é mais rápido?" Um teste sem uma pergunta clara gera opiniões vagas, e não informação útil.

## Teste com pessoas reais

Mostre o protótipo para pessoas parecidas com quem vai usar a ideia de verdade. Observe o que elas fazem, e não só o que dizem. Muitas pessoas elogiam por educação, mas se confundem na hora de usar. Faça perguntas abertas, como "o que você esperava que acontecesse aqui?", em vez de "você gostou?".

## Aprenda e ajuste

Depois de cada teste, pergunte: o que funcionou, o que confundiu e o que eu mudo na próxima versão? Esse ciclo de criar, testar e ajustar é a base de abordagens como o design thinking e o desenvolvimento ágil de produtos. Cada ciclo custa pouco e reduz o risco de investir muito numa ideia que não funciona.

## O medo de mostrar algo incompleto

É comum querer esperar até a ideia estar perfeita antes de mostrá-la. Mas, quanto mais você investe, mais difícil fica mudar de direção e mais caro fica descobrir um problema. Mostrar algo simples cedo não é falta de cuidado. É uma forma responsável de economizar tempo e dinheiro.

## Um bom teste pode dizer "não"

Às vezes o teste mostra que a ideia não funciona. Isso não é um fracasso: é exatamente a informação de que você precisava, obtida com pouco custo. Você pode ajustar a ideia, tentar outra versão ou passar para outra opção da sua lista.`,
      practice: {
        question: 'Você quer oferecer aulas particulares de culinária na casa dos clientes. Antes de investir em equipamentos e divulgação, qual seria um protótipo simples, e que pergunta ele deveria responder?',
        answer: 'Uma opção: dar duas ou três aulas para conhecidos, com os utensílios que você já tem, cobrando um valor de teste. A pergunta poderia ser: "as pessoas acham a experiência boa o suficiente para pagar por ela e recomendar a outras?". Outra opção é publicar uma página simples descrevendo o serviço e contar quantas pessoas pedem informações. Em qualquer caso, o protótipo deve ser barato e responder a uma pergunta específica.',
      },
    },
    {
      title: 'Bloqueios e medo de julgamento',
      body: `Quase todo mundo já ficou diante de uma página em branco sem saber por onde começar, ou guardou uma ideia por medo de parecer ridículo. Esses bloqueios são comuns e têm causas conhecidas.

## Bloqueios comuns

- **Fixação**: você fica preso à primeira solução que pensou, ou ao uso habitual de um objeto, e não consegue ver alternativas. O psicólogo Karl Duncker estudou isso com o famoso problema da vela, em que muitas pessoas não percebiam que uma caixa de tachinhas podia servir de suporte.
- **Perfeccionismo**: você não começa porque nada parece bom o suficiente.
- **Excesso de crítica**: você avalia cada ideia no momento em que ela surge.
- **Cansaço**: com pouca energia, a mente tende a repetir caminhos conhecidos.

## Contra a fixação

Mude o ponto de vista. Descreva o problema com outras palavras. Imagine como uma criança, um especialista de outra área ou um cliente veria a situação. Pergunte também: o que eu estou tratando como obrigatório que talvez não seja?

## Contra a página em branco

Diminua a exigência do primeiro passo. Escreva de propósito uma versão ruim, faça um rascunho de cinco minutos ou liste dez ideias sem se preocupar com a qualidade. É mais fácil melhorar algo que já existe do que criar a versão perfeita de uma vez.

## O medo de julgamento

O medo de ser criticado faz muitas pessoas apresentarem só ideias seguras. Algumas atitudes ajudam:

- **Separe você da ideia.** Uma crítica a uma proposta não é uma crítica a você. Ideias são material de trabalho, feitas para serem testadas e melhoradas.
- **Apresente como teste.** Dizer "tenho uma ideia que gostaria de testar" reduz a pressão, porque deixa claro que ela ainda está em desenvolvimento.
- **Comece com pessoas de confiança.** Mostre primeiro a quem costuma dar retornos construtivos e só depois para um grupo maior.
- **Lembre da quantidade.** Se você gera muitas ideias, nenhuma delas precisa ser perfeita. Uma ideia rejeitada é só uma entre várias.

## Ambientes que ajudam

A pesquisadora Amy Edmondson estuda a **segurança psicológica**: a sensação, numa equipe, de que é possível propor uma ideia ou admitir um erro sem ser humilhado. Equipes com mais segurança psicológica tendem a aprender mais e a propor mais melhorias. Se você lidera pessoas, responda a ideias novas primeiro com perguntas e só depois com críticas.

## Criatividade como hábito

Reserve um tempo regular para gerar ideias e teste algo pequeno com frequência. Com prática, criar fica menos assustador.`,
      practice: {
        question: 'Fernando precisa sugerir uma melhoria para o processo de recepção de novos funcionários. Ele tem uma ideia diferente, mas não diz nada porque acha que o grupo vai rir dele. Que duas atitudes da aula podem ajudá-lo?',
        answer: 'Ele pode apresentar a proposta como um teste, dizendo algo como "tenho uma ideia que gostaria de testar com um ou dois novos funcionários", o que reduz a pressão. Também pode mostrar a ideia primeiro a um colega de confiança e receber sugestões antes de levá-la ao grupo. Outra atitude válida é levar várias ideias, para que nenhuma precise ser perfeita.',
      },
    },
  ],
};

export default t;
