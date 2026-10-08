import type { CourseText } from '../../schema';

const t: CourseText = {
  title: 'Decisões melhores',
  desc: 'Aprenda a definir bem uma escolha, encontrar mais opções, reconhecer vieses comuns e pensar em probabilidades antes de decidir.',
  outcome: 'Ao final, você vai seguir um roteiro simples para tomar decisões importantes com mais clareza e avaliá-las pelo processo, não só pelo resultado.',
  lessons: [
    {
      title: 'Defina a decisão e o objetivo real',
      body: `Muitas decisões ruins não falham na escolha final. Elas falham antes, quando a pessoa tenta responder à pergunta errada. Por isso, o primeiro passo de uma boa decisão é dizer com clareza o que está sendo decidido e com qual objetivo.

## Escreva a decisão numa frase

Descreva a decisão numa frase curta, que diga o que será escolhido e até quando. Por exemplo: "Preciso decidir onde vou morar no próximo ano até o fim de março." Escrever obriga você a separar a decisão de verdade das preocupações que giram em torno dela. O prazo também importa: ele mostra quanto tempo de análise faz sentido.

## Pergunte "para quê?"

A forma como uma decisão aparece costuma esconder o objetivo real. Alguém pergunta "devo comprar um carro?", mas o que quer de fato é chegar ao trabalho em menos tempo. Quando o objetivo fica claro, surgem caminhos que a pergunta original escondia: mudar o horário de trabalho, usar uma bicicleta elétrica, trabalhar alguns dias em casa.

Para chegar ao objetivo, pergunte "para quê?" algumas vezes seguidas. Comprar um carro para quê? Para chegar mais rápido. Chegar mais rápido para quê? Para ter mais tempo com a família à noite. Agora a decisão ficou maior e mais útil: como ganhar tempo livre à noite.

## Liste o que importa

Quase toda decisão envolve mais de um critério. Antes de comparar opções, anote o que importa para você e quanto cada coisa pesa. Numa troca de emprego, por exemplo, os critérios podem ser salário, tempo de deslocamento, aprendizado e estabilidade.

Fazer essa lista antes de olhar as opções tem uma vantagem. Se você listar os critérios depois, tende a escolher justamente os que favorecem a opção de que já gostava.

## Separe fatos, suposições e valores

- **Fatos** podem ser verificados: o aluguel custa tanto, a viagem leva tanto tempo.
- **Suposições** são apostas sobre o futuro: "o bairro vai melhorar", "o preço vai cair".
- **Valores** são preferências pessoais: "prefiro silêncio a morar perto do centro".

Misturar os três gera discussões sem fim. Fatos se resolvem com pesquisa. Suposições pedem estimativas e cautela. Valores não têm resposta certa, mas precisam ser ditos com clareza, principalmente quando a decisão envolve outras pessoas.`,
      practice: {
        question: 'Marcos escreveu: "Preciso decidir se aceito a vaga de gerente em outra cidade." Quando se perguntou "para quê?", respondeu: "Quero ganhar mais e ter mais responsabilidade, mas sem ficar longe dos meus pais, que estão envelhecendo." Reescreva a decisão de forma mais útil e diga quais critérios ele deveria listar.',
        answer: 'Uma versão mais útil é: "Como posso ganhar mais e ter mais responsabilidade sem ficar longe dos meus pais?" Essa pergunta abre outras opções, como buscar uma promoção na empresa atual, procurar vagas de gerente na mesma cidade ou negociar trabalho remoto em parte da semana. Os critérios são pelo menos três: renda, nível de responsabilidade e distância dos pais.',
      },
    },
    {
      title: 'Mais opções, escolhas melhores',
      body: `Muitas decisões chegam até nós no formato "sim ou não": "devo trocar de emprego ou não?", "compro esta casa ou não?". Esse formato parece simples, mas tem um problema: ele analisa uma única opção e a compara apenas com ficar parado.

## O problema do "sim ou não"

O pesquisador Paul Nutt estudou centenas de decisões tomadas em empresas e encontrou um padrão: na maioria delas, os gestores consideraram apenas uma alternativa. As decisões em que duas ou mais opções foram comparadas de verdade fracassaram com menos frequência. Os escritores Chip e Dan Heath chamam esse problema de **enquadramento estreito**.

A pergunta "faço isso ou não?" esconde todas as outras formas de chegar ao mesmo objetivo. Ela também deixa a escolha mais tensa, porque transforma a decisão numa aposta única.

## Troque o "ou" pelo "e também"

Uma forma prática de encontrar mais opções é perguntar: e se eu pudesse fazer as duas coisas? Em vez de "faço um curso ou continuo trabalhando?", tente "como posso estudar e também continuar trabalhando?". Dessa pergunta podem surgir opções como um curso à noite, um curso a distância ou uma redução temporária da carga horária.

Nem sempre dá para ter tudo. Mas, ao procurar formas de combinar as opções, você costuma encontrar alternativas melhores do que as duas iniciais.

## Outras perguntas que geram opções

- **E se essa opção não existisse?** Imagine que a sua opção favorita foi eliminada. O que você faria? Essa pergunta força você a procurar caminhos novos.
- **O que outras pessoas fizeram?** Quem já enfrentou um problema parecido pode conhecer saídas que você nem considerou.
- **Dá para testar antes?** Muitas vezes é possível experimentar em pequena escala: fazer um trabalho temporário na nova área, alugar antes de comprar, passar uma semana na cidade nova.
- **Qual seria a opção oposta?** Pensar no extremo contrário ajuda a ver as possibilidades que ficam entre os dois.

## Quantas opções bastam

Mais opções nem sempre é melhor. Comparar dezenas de alternativas cansa e pode travar a decisão. Para a maioria das escolhas importantes, três boas opções já fazem uma grande diferença em relação a uma só. O objetivo é sair do "sim ou não" sem cair numa lista sem fim.`,
      practice: {
        question: 'Júlia pergunta a si mesma: "Devo vender meu carro ou não?" O carro custa caro para manter, mas ela o usa nos fins de semana para visitar a família em outra cidade. Use a pergunta "e também" para propor pelo menos três opções além de simplesmente vender ou manter o carro.',
        answer: 'A pergunta pode ser: "Como posso gastar menos com transporte e também continuar visitando minha família?" Algumas opções: trocar por um carro mais barato de manter; vender o carro e alugar um só nos fins de semana de visita; vender e viajar de ônibus; dividir os custos do carro com um parente que faz o mesmo trajeto. Qualquer conjunto de três opções que atenda aos dois objetivos, gastar menos e continuar visitando a família, está correto.',
      },
    },
    {
      title: 'Quatro vieses que distorcem as escolhas',
      body: `Um viés cognitivo é um desvio previsível no modo como julgamos e decidimos. Os psicólogos Daniel Kahneman e Amos Tversky mostraram que esses desvios não são falhas raras: eles aparecem em pessoas inteligentes e bem informadas, principalmente quando decidimos depressa. Conhecer os mais comuns não elimina o problema, mas ajuda você a criar defesas.

## Ancoragem

O primeiro número que você vê influencia as estimativas seguintes, mesmo quando ele não tem relação com a questão. Se uma loja anuncia "de R$ 500 por R$ 300", o valor de R$ 500 serve de âncora e o de R$ 300 parece barato. Numa negociação, a primeira proposta costuma puxar o acordo final para perto dela.

**Defesa:** antes de ver qualquer número, faça a sua própria estimativa. Pergunte de onde veio a âncora e se ela faz sentido.

## Viés de confirmação

Tendemos a procurar, notar e lembrar as informações que confirmam o que já pensamos. Quem já decidiu comprar um certo modelo de celular lê com atenção as avaliações positivas e passa rápido pelas negativas.

**Defesa:** procure de propósito os melhores argumentos contra a sua opção preferida. Pergunte: que informação me faria mudar de ideia?

## Custo irrecuperável

É a tendência de continuar investindo em algo só porque já se investiu muito. Você comprou o ingresso de um show, está doente e chove forte, mas vai mesmo assim "para não perder o dinheiro". Só que o dinheiro já foi gasto e não volta, quer você vá ou não. A única pergunta que importa é: daqui para frente, o que é melhor?

**Defesa:** imagine que você está começando do zero hoje. Se não tivesse investido nada até agora, escolheria entrar nesse caminho?

## Excesso de confiança

A maioria das pessoas confia mais nas próprias estimativas do que deveria. Quando alguém indica um intervalo com 90% de certeza, como "a reforma vai levar entre dois e três meses", o valor real fica fora desse intervalo com muito mais frequência do que uma vez em cada dez. Prazos e orçamentos de projetos são exemplos clássicos: eles costumam estourar.

**Defesa:** amplie os seus intervalos e compare com casos parecidos. Em vez de perguntar "quanto tempo isso vai levar para mim?", pergunte "quanto tempo projetos como este costumam levar?".

## Uma regra geral

Esses vieses ficam mais fortes com pressa, cansaço e emoções intensas. Para decisões importantes, dê a si mesmo algum tempo, escreva o seu raciocínio e, se puder, peça a opinião de alguém que não tenha interesse no resultado.`,
      practice: {
        question: 'Paulo pagou R$ 900 por um curso de 10 módulos. Depois de 3 módulos, percebeu que o conteúdo não serve para o objetivo dele e que outro curso, de R$ 300, seria muito mais útil. Ele pensa: "Já gastei R$ 900, preciso terminar este." Qual viés aparece aqui, e como ele deveria pensar?',
        answer: 'É o viés do custo irrecuperável. Os R$ 900 já foram gastos e não voltam, seja qual for a escolha dele. A pergunta certa é: daqui para frente, o que me aproxima mais do meu objetivo, gastar o meu tempo nos 7 módulos restantes ou pagar R$ 300 pelo curso mais útil? Se o outro curso serve muito melhor, continuar no atual só porque já pagou é um erro.',
      },
    },
    {
      title: 'Probabilidades e valor esperado',
      body: `Quase toda decisão importante envolve incerteza: você não sabe se o novo emprego vai ser bom ou se vai chover no dia da festa. Não dá para eliminar a incerteza, mas dá para pensar nela de forma organizada.

## Pense em chances, não em certezas

Em vez de perguntar "isso vai dar certo?", pergunte "qual é a chance de isso dar certo?". A resposta quase nunca é 0% ou 100%. Mesmo uma estimativa aproximada, como "uns 70%", é mais útil do que um "acho que sim", porque obriga você a pensar no que acontece nos outros 30%.

Um bom ponto de partida é a **taxa de base**: com que frequência situações parecidas dão certo? Se a maioria dos restaurantes novos de um bairro fecha nos primeiros anos, comece por aí. Depois, ajuste a estimativa com base no que torna o seu caso diferente. Kahneman e Tversky mostraram que muitas pessoas ignoram a taxa de base e se guiam só pelos detalhes do caso.

## O que é valor esperado

O valor esperado é a média dos resultados possíveis, levando em conta a chance de cada um. Para calcular, multiplique o valor de cada resultado pela sua probabilidade e some tudo.

Exemplo: participar de um sorteio custa R$ 10. Você tem 20% de chance de ganhar R$ 40 e 80% de chance de não ganhar nada.

- Prêmio esperado: 0,2 × 40 + 0,8 × 0 = R$ 8.
- Custo: R$ 10.
- Valor esperado: R$ 8 menos R$ 10, ou seja, uma perda média de R$ 2.

Numa única participação, você ganha R$ 30 ou perde R$ 10. Mas, se participar muitas vezes, o resultado médio se aproxima de uma perda de R$ 2 por vez.

## Além do valor esperado

O valor esperado é um bom ponto de partida, mas não é a única coisa que importa.

- **Riscos que você não pode correr.** Uma escolha com valor esperado positivo pode ser ruim se o pior resultado for grave demais, como perder a casa ou a saúde. Pergunte sempre: eu consigo suportar o pior cenário?
- **Coisas difíceis de medir.** Tranquilidade, tempo livre e relações nem sempre cabem num número.
- **Chances incertas.** Se você não tem certeza das probabilidades, refaça a conta com valores mais pessimistas. Se a escolha continua boa, você pode ficar mais tranquilo.

Mesmo sem contas exatas, pensar em "chance vezes consequência" ajuda a evitar dois erros comuns: ter medo demais de riscos pequenos e dar pouca atenção a riscos grandes.`,
      practice: {
        question: 'Alugar um espaço numa feira de artesanato custa R$ 500. Pelas suas estimativas, já descontado o custo dos produtos, há 50% de chance de as vendas renderem R$ 800, 30% de chance de renderem R$ 500 e 20% de chance de a feira ser cancelada por causa da chuva, sem devolução do aluguel, e você não vender nada. Qual é o valor esperado das vendas, e alugar o espaço compensa em média?',
        answer: 'O valor esperado das vendas é 0,5 × 800 + 0,3 × 500 + 0,2 × 0 = 400 + 150 + 0 = R$ 550. Descontando os R$ 500 do aluguel, sobra um ganho esperado de R$ 50: em média, compensa. Mas há 20% de chance de perder os R$ 500 inteiros, então só faz sentido se você puder suportar essa perda sem um prejuízo grave.',
      },
    },
    {
      title: 'Decisões reversíveis e irreversíveis',
      body: `Nem toda decisão merece o mesmo cuidado. Passar uma semana analisando qual caneta comprar é desperdício. Decidir em cinco minutos se você vai assinar um contrato de dez anos é imprudência. Uma das perguntas mais úteis para ajustar o esforço é: dá para voltar atrás?

## Portas de ida e volta, portas só de ida

O empresário Jeff Bezos popularizou uma imagem simples. Algumas decisões são como uma porta que abre nos dois sentidos: se você passar e não gostar do que encontrou, pode voltar. Outras são como uma porta que só abre num sentido: depois de passar, não há volta, ou a volta custa muito caro.

- **Fáceis de reverter:** experimentar um restaurante novo, testar outro horário de estudo, mudar os móveis de lugar, usar o período gratuito de um serviço.
- **Difíceis de reverter:** vender um imóvel, ter um filho, pedir demissão de um emprego difícil de conseguir de novo, assinar um contrato longo com multa alta.

## Decisões reversíveis: decida rápido

Quando a decisão é fácil de desfazer, o maior custo costuma ser a demora. Enquanto você analisa, perde tempo e oportunidades. Além disso, a forma mais rápida de aprender é experimentar: uma semana usando algo pode ensinar mais do que um mês de pesquisa.

Uma regra prática: se a decisão é reversível e barata, escolha a opção que parece melhor com as informações que você tem, defina quando vai avaliar o resultado e siga em frente.

## Decisões irreversíveis: vá devagar

Quando não há volta, vale a pena investir tempo. Use as ferramentas deste curso: defina o objetivo real, amplie as opções, procure informações que contrariem a sua preferência e estime as chances de cada cenário.

## Torne a decisão mais reversível

Muitas decisões que parecem definitivas podem ficar, pelo menos em parte, reversíveis:

- **Teste em pequena escala.** Alugue antes de comprar. Faça um trabalho temporário antes de mudar de carreira.
- **Negocie uma saída.** Peça um período de experiência ou uma cláusula de cancelamento.
- **Divida em etapas.** Em vez de investir tudo de uma vez, invista uma parte, veja o resultado e depois decida o resto.

## Cuidado com a pressa criada pelos outros

Vendedores costumam apresentar decisões como urgentes: "só hoje", "última unidade". Quando a decisão for difícil de reverter, desconfie da pressa. Na maioria dos casos, pedir um dia para pensar custa pouco e pode evitar um erro caro.`,
      practice: {
        question: 'Classifique cada decisão como fácil ou difícil de reverter e diga quanto tempo de análise ela merece: (a) escolher um aplicativo de lista de tarefas que tem 30 dias de uso gratuito; (b) comprar um apartamento com financiamento de 25 anos; (c) mudar o horário em que você vai à academia. Para a decisão difícil de reverter, sugira uma forma de torná-la mais reversível.',
        answer: 'As decisões (a) e (c) são fáceis de reverter: decida rápido, experimente e ajuste se não gostar. A decisão (b) é difícil de reverter: merece tempo, comparação de opções e análise cuidadosa. Uma forma de torná-la mais reversível é morar de aluguel no mesmo bairro por alguns meses antes de comprar, para testar a rotina, o barulho e o trajeto.',
      },
    },
    {
      title: 'Pré-mortem e revisão pelo processo',
      body: `Esta última aula trata de dois momentos: logo antes de pôr uma decisão em prática e depois de ver o resultado. Nos dois, o objetivo é o mesmo: decidir melhor da próxima vez.

## O pré-mortem

O psicólogo Gary Klein propôs uma técnica simples para encontrar falhas num plano antes que elas aconteçam. Ele a chamou de **pré-mortem**.

- Imagine que já se passou um ano e que a decisão deu muito errado.
- Escreva, em poucos minutos, todos os motivos que podem ter levado a esse fracasso.
- Para os motivos mais prováveis ou mais graves, pense no que você pode fazer agora para evitá-los ou para reduzir o dano.

A diferença em relação a perguntar "o que pode dar errado?" parece pequena, mas importa. Quando você parte do princípio de que o fracasso já aconteceu, a mente passa a procurar explicações em vez de defender o plano. Em equipes, a técnica também ajuda quem tem dúvidas a falar, sem medo de parecer pessimista.

## Resultado não é o mesmo que decisão

A ex-jogadora profissional de pôquer Annie Duke chama de **resultadismo** o hábito de julgar uma decisão só pelo resultado: se deu certo, a decisão foi boa; se deu errado, foi ruim. Esse raciocínio parece natural, mas engana.

Uma decisão pode ser boa e dar errado por azar: você dirigiu com cuidado, dentro do limite de velocidade, e mesmo assim outro carro bateu no seu. Uma decisão pode ser ruim e dar certo por sorte: você dirigiu depois de beber e chegou em casa sem problemas. Quem julga só pelo resultado aprende a lição errada nos dois casos.

## Avalie o processo

Para revisar uma decisão, separe o que estava sob o seu controle do que não estava. Algumas perguntas úteis:

- Eu tinha as informações importantes, ou dava para conseguir mais a um custo razoável?
- Considerei mais de uma opção?
- Minhas estimativas de chance eram razoáveis com o que eu sabia na época?
- O resultado ruim estava entre os cenários que eu tinha previsto?

## Registre suas decisões

A memória reescreve o passado. Depois que sabemos o resultado, temos a impressão de que ele era previsível desde o início. Para evitar isso, anote nas decisões importantes o que você decidiu, por quê, quais opções considerou e o que esperava que acontecesse. Algumas linhas bastam. Quando o resultado chegar, compare com o que você escreveu. Com o tempo, esse registro mostra os seus padrões: onde você costuma acertar e onde costuma errar.`,
      practice: {
        question: 'Ana e Bruno tinham entrevistas de emprego no mesmo prédio, às 9h. O trajeto costuma levar 30 minutos. Ana consultou o trânsito e saiu de casa com uma hora de antecedência, mas chegou atrasada porque um acidente fechou a avenida. Bruno saiu 20 minutos antes do horário, sem consultar nada, e chegou a tempo porque o trânsito estava bem mais livre do que o normal. Avaliando pelo processo, quem tomou a melhor decisão? Que lição errada cada um pode aprender se julgar só pelo resultado?',
        answer: 'Ana tomou a melhor decisão: ela se informou e deixou uma boa margem de tempo; o atraso veio de um acidente, fora do controle dela. Bruno teve sorte. Julgando só pelo resultado, Ana pode concluir que se planejar não adianta, e Bruno pode concluir que sair com pouca margem funciona. Nas próximas vezes, o hábito de Bruno tende a causar atrasos com muito mais frequência do que o de Ana.',
      },
    },
  ],
};

export default t;
