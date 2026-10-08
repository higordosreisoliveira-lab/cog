import type { CourseText } from '../../schema';

const t: CourseText = {
  title: 'Resolução de problemas complexos',
  desc: 'Aprenda a definir um problema com precisão, dividi-lo em partes, testar hipóteses com dados e apresentar a solução de forma clara.',
  outcome: 'Ao final, você vai seguir um método em etapas para sair de um problema confuso e chegar a uma recomendação clara e bem justificada.',
  lessons: [
    {
      title: 'Defina o problema com precisão',
      body: `Diante de um problema, a tentação é ir direto para as soluções. Mas uma ótima solução para o problema errado não resolve nada. Antes de buscar respostas, vale gastar alguns minutos para deixar claro qual é exatamente a pergunta.

## Do vago ao preciso

Compare duas formas de descrever a mesma situação:

- "As vendas estão ruins."
- "As vendas da loja online caíram 20% nos últimos três meses, enquanto as da loja física ficaram estáveis. Precisamos entender por quê e voltar ao nível anterior até dezembro."

A segunda versão já orienta o trabalho. Ela diz onde está o problema, qual é o tamanho dele, desde quando existe e o que conta como sucesso.

## O que uma boa definição responde

- **O que está acontecendo?** Descreva a situação com fatos, de preferência com números.
- **Onde e desde quando?** Delimite o lugar, o grupo ou o período afetado.
- **Qual é o objetivo?** O que precisa ser verdade no final para o problema estar resolvido?
- **Quais são as restrições?** Prazo, orçamento e regras que não podem ser quebradas.
- **Quem decide?** Quem precisa aprovar a solução e o que é importante para essa pessoa.

Escreva as respostas em poucas linhas. Se você não consegue, provavelmente ainda não entendeu bem o problema. Uma boa definição também descreve o problema sem apontar a causa nem a solução. Essas partes vêm depois.

## Os "5 porquês"

Muitas vezes, o problema que aparece é só um sintoma. A ideia dos "5 porquês", que ficou conhecida na indústria automobilística japonesa, é perguntar "por quê?" várias vezes seguidas até chegar a uma causa sobre a qual se pode agir. O número cinco é só uma referência: às vezes três perguntas bastam, às vezes são necessárias mais.

- O cliente reclamou de atraso na entrega. Por quê?
- O pedido saiu do depósito com dois dias de atraso. Por quê?
- O produto estava sem estoque. Por quê?
- A reposição foi pedida tarde. Por quê?
- O sistema de estoque só avisa quando o produto já acabou.

Pedir desculpas ao cliente resolve o primeiro nível. Mudar o aviso do sistema evita que o problema se repita.

## Cuidados

A técnica funciona melhor quando cada resposta é verificada com fatos, e não com palpites. Também é comum que um problema tenha mais de uma causa. Se, num dos níveis, aparecerem duas respostas possíveis, investigue as duas.`,
      practice: {
        question: 'Um gerente diz: "O atendimento está ruim." Você descobre o seguinte: o tempo médio de espera no telefone subiu de 3 para 9 minutos desde março; o número de reclamações por e-mail não mudou; a equipe de telefone perdeu duas pessoas em março, que não foram substituídas; a empresa quer voltar a menos de 4 minutos de espera até o fim do semestre, sem aumentar o orçamento. Escreva uma definição precisa do problema.',
        answer: 'Uma versão possível: "Desde março, o tempo médio de espera no atendimento por telefone subiu de 3 para 9 minutos, enquanto as reclamações por e-mail ficaram estáveis. O objetivo é voltar a menos de 4 minutos até o fim do semestre, sem aumentar o orçamento." A saída das duas pessoas não entra na definição: ela é uma possível causa e deve ser tratada como hipótese na hora de investigar.',
      },
    },
    {
      title: 'Divida o problema em partes',
      body: `Problemas complexos assustam porque parecem grandes demais para caber na cabeça. A saída é dividi-los em partes menores, que podem ser analisadas uma de cada vez. Uma ferramenta útil para isso é a **árvore de problemas**.

## Como montar uma árvore

Escreva a pergunta principal no alto de uma folha. Em seguida, divida-a em duas a cinco partes que, juntas, explicam a pergunta. Depois, divida cada parte de novo, até chegar a perguntas que você consegue responder com dados ou com uma ação concreta.

Exemplo: "Por que o lucro da padaria caiu?". O lucro é a receita menos os custos, então a primeira divisão é natural:

- **A receita caiu?** Pode ser que haja menos clientes ou que cada cliente gaste menos.
- **Os custos subiram?** Podem ser ingredientes, salários, aluguel, energia ou outros custos.

Cada ramo pode ser dividido mais uma vez. "Menos clientes" pode virar: menos clientes de manhã, menos clientes à tarde, menos pedidos por entrega.

## Sem repetições e sem buracos

Consultores costumam usar a sigla **MECE**, do inglês, para descrever uma boa divisão. Ela significa "mutuamente exclusivas e coletivamente exaustivas". Em palavras simples, a divisão precisa ter duas qualidades:

- **Sem repetições:** cada parte trata de algo diferente. Se duas partes se sobrepõem, você pode contar a mesma causa duas vezes.
- **Sem buracos:** as partes, juntas, cobrem todas as possibilidades. Se falta uma parte, a causa verdadeira pode estar justamente nela.

Dividir os clientes em "jovens" e "estudantes" falha nas duas coisas: muitos estudantes são jovens, e os adultos que não estudam ficam de fora. Já a divisão entre "menores de 30 anos" e "30 anos ou mais" não tem repetições nem buracos.

## Dicas para dividir bem

- **Use fórmulas quando houver.** Lucro é receita menos custo. Receita é número de clientes vezes gasto médio. Fórmulas garantem divisões sem buracos.
- **Use as etapas de um processo.** Um problema de entrega pode ser dividido em pedido, separação, transporte e recebimento.
- **Use categorias simples.** Interno e externo, antes e depois, por região, por produto.
- **Inclua "outros" se precisar.** Um ramo chamado "outros" fecha os buracos, desde que não fique grande demais.

## Por que isso ajuda

A árvore transforma uma pergunta difícil em várias perguntas mais fáceis. Ela também mostra o que você ainda não investigou e permite dividir o trabalho entre pessoas sem que duas façam a mesma coisa.`,
      practice: {
        question: 'A receita mensal de uma academia caiu. Proponha uma primeira divisão dessa pergunta em dois ramos, sem repetições e sem buracos, e depois divida cada ramo em dois.',
        answer: 'Uma divisão possível usa a fórmula: receita = número de alunos pagantes × valor médio pago por aluno. Ramo 1, "o número de alunos caiu?", dividido em "entraram menos alunos novos" e "saíram mais alunos". Ramo 2, "o valor médio pago caiu?", dividido em "os preços dos planos baixaram, por exemplo com descontos" e "os alunos passaram para planos mais baratos". Outras divisões também podem estar certas, desde que cubram todas as possibilidades sem repetir nenhuma.',
      },
    },
    {
      title: 'Hipóteses e testes com dados',
      body: `Depois de dividir um problema, você pode investigar cada ramo da árvore, um por um. Mas isso pode levar muito tempo. Uma alternativa mais rápida é começar com uma **hipótese**: um palpite bem fundamentado sobre a resposta, que você vai tentar confirmar ou derrubar.

## Por que começar com um palpite

Pode parecer contraditório. Não seria melhor coletar todos os dados primeiro e só depois concluir? Na prática, sem uma hipótese, é comum juntar uma grande quantidade de dados que não respondem a nada. A hipótese diz quais dados importam. Ela funciona como um mapa provisório: você o segue, mas troca de mapa assim que encontrar evidências contra ele.

## Como escrever uma boa hipótese

Uma boa hipótese é específica e pode ser testada. Compare:

- Fraca: "O problema é o atendimento."
- Boa: "O tempo de espera subiu porque a equipe perdeu duas pessoas em março e não houve substituição."

A segunda diz o que se espera encontrar nos dados. Se ela for verdadeira, a espera deve ter começado a subir em março e deve ser maior nos horários em que faltam atendentes.

## Procure o que derrubaria a hipótese

O passo mais importante é perguntar: se a minha hipótese estivesse errada, o que eu veria nos dados? Depois, vá procurar exatamente isso. Essa atitude protege você do viés de confirmação, a tendência de procurar só o que confirma o que você já pensa.

No exemplo, se a espera já estava subindo em janeiro, antes de a equipe diminuir, a hipótese perde força. Se a espera aumentou igualmente em todos os horários, inclusive nos que continuaram com a equipe completa, ela também perde força.

## Correlação não é causa

Duas coisas que acontecem juntas não têm, necessariamente, uma relação de causa. As vendas de sorvete e os casos de queimadura de sol sobem no verão, mas uma coisa não causa a outra: as duas são causadas pelo calor. Quando os dados mostrarem uma relação, pergunte se existe um terceiro fator que explica as duas coisas, ou se a causa pode estar no sentido inverso.

## Um ciclo, não uma linha reta

Na prática, o trabalho é um ciclo: você formula uma hipótese, testa, ajusta e testa de novo. Derrubar uma hipótese não é fracasso. É progresso, porque elimina um ramo da árvore e aproxima você da causa real.`,
      practice: {
        question: 'As vendas de uma loja online caíram em julho. A hipótese da equipe é: "As vendas caíram porque o novo design do site, lançado no início de julho, deixou o pagamento mais difícil." Cite um dado que apoiaria essa hipótese e um dado que a derrubaria.',
        answer: 'Um dado que apoiaria: a proporção de pessoas que colocam produtos no carrinho e desistem na página de pagamento aumentou logo depois do lançamento do novo design. Um dado que derrubaria: as vendas já estavam caindo em junho, antes do novo design, ou caíram com a mesma força no aplicativo da loja, que não mudou. Outras respostas são possíveis, desde que usem dados que seriam diferentes se a hipótese fosse verdadeira ou falsa.',
      },
    },
    {
      title: 'De trás para frente e por analogia',
      body: `Quando o caminho do início ao fim não está claro, duas estratégias ajudam a destravar o raciocínio: começar pelo fim e procurar um problema parecido que você já sabe resolver. O matemático George Pólya, num livro clássico sobre resolução de problemas, recomendava as duas.

## Comece pelo objetivo

Trabalhar de trás para frente significa partir da situação final desejada e perguntar: o que precisa ser verdade logo antes disso? E antes disso? Você segue voltando até chegar a algo que já tem ou que pode fazer hoje.

Exemplo: você precisa estar no aeroporto às 14h.

- Para chegar às 14h, precisa sair de casa às 13h, porque a viagem leva uma hora.
- Para sair às 13h com a mala pronta, precisa terminar de arrumá-la até as 12h30.
- Para arrumar com calma, precisa começar às 11h30.

Agora o plano está claro, e você sabe a que horas cada coisa precisa acontecer.

A mesma lógica serve para metas maiores. Se você quer correr 10 km daqui a 12 semanas, pergunte quanto precisa correr na semana 11, depois na semana 10, e assim por diante, até chegar ao treino desta semana.

## Quando usar

Essa estratégia funciona bem quando o objetivo é claro e o ponto de partida tem muitos caminhos possíveis. É o caso de planejamentos com prazo, de alguns quebra-cabeças e de certos problemas de lógica. A partir do fim, costuma haver menos caminhos a considerar.

## Analogias: um problema parecido

A segunda estratégia é perguntar: já vi um problema com essa mesma estrutura? Não se trata de encontrar uma situação igual, mas uma que funcione com a mesma lógica.

Um exemplo clássico da psicologia: um médico precisa destruir um tumor com radiação, mas um raio forte o bastante também destruiria o tecido saudável no caminho. Nos estudos de Mary Gick e Keith Holyoak, poucas pessoas resolviam o problema sozinhas. Quando liam antes a história de um general que dividiu o exército em pequenos grupos, que vieram por estradas diferentes e se encontraram no alvo ao mesmo tempo, e recebiam a dica de que a história podia ajudar, a maioria chegava à solução: vários raios fracos, vindos de direções diferentes, que se somam só no tumor.

## O cuidado com analogias

Esses estudos também mostraram que, sem a dica, muitas pessoas não percebiam a analogia. Por isso, ajuda perguntar de propósito: deixando os detalhes de lado, qual é a estrutura deste problema? Também é preciso conferir onde a analogia falha, porque nenhum problema é idêntico a outro.`,
      practice: {
        question: 'Uma festa começa às 20h. Você precisa de 30 minutos para arrumar a sala, e só pode fazer isso depois que a comida estiver pronta. A comida leva 2 horas para ficar pronta, e antes de começar a prepará-la você precisa ir ao mercado, o que leva 1 hora entre ida e volta. Trabalhando de trás para frente, a que horas você precisa sair para o mercado?',
        answer: 'Às 16h30. Para a sala ficar pronta às 20h, a arrumação começa às 19h30. Então a comida precisa estar pronta às 19h30, e o preparo começa às 17h30. A ida ao mercado leva 1 hora e precisa terminar antes do preparo, então você sai às 16h30.',
      },
    },
    {
      title: 'Impacto e esforço: o que fazer primeiro',
      body: `Depois de entender o problema e as suas causas, normalmente aparecem várias soluções possíveis. Raramente há tempo e recursos para todas. Priorizar é escolher por onde começar, e também o que deixar para depois ou simplesmente não fazer.

## A matriz de impacto e esforço

Uma ferramenta simples é avaliar cada solução por dois critérios:

- **Impacto:** quanto essa solução ajuda a atingir o objetivo?
- **Esforço:** quanto tempo, dinheiro e energia ela exige?

Com isso, cada solução cai num de quatro grupos:

- **Alto impacto e baixo esforço:** faça primeiro. São as vitórias rápidas.
- **Alto impacto e alto esforço:** planeje com cuidado. São projetos que valem a pena, mas precisam de preparo.
- **Baixo impacto e baixo esforço:** faça se sobrar tempo, sem deixar que ocupem o lugar das prioridades.
- **Baixo impacto e alto esforço:** evite. Consomem recursos e trazem pouco retorno.

## Notas simples funcionam

Não é preciso muita precisão. Dê uma nota de 1 a 5 para o impacto e outra para o esforço de cada opção. Uma forma de comparar é dividir o impacto pelo esforço: quanto maior o resultado, mais retorno você tem por unidade de esforço. Use esse número como guia, não como regra final.

## Cuidados

- **Estimativas de esforço costumam ser otimistas.** Lembre-se do excesso de confiança e compare com tarefas parecidas que você já fez.
- **O impacto depende do objetivo.** Uma solução de alto impacto para reduzir custos pode ter impacto nenhum na satisfação dos clientes. Avalie sempre em relação ao objetivo definido no início.
- **Dependências mudam a ordem.** Às vezes, uma tarefa de impacto pequeno precisa vir antes porque libera outras mais importantes.
- **Vitórias rápidas não bastam.** Fazer só o que é fácil dá uma sensação de progresso, mas os problemas mais importantes costumam exigir esforço alto.

## Poucas causas, muito efeito

Em muitos problemas, uma parte pequena das causas responde pela maior parte do efeito. É comum, por exemplo, que poucos tipos de defeito expliquem a maioria das reclamações. Essa ideia é conhecida como princípio de Pareto. A proporção exata varia de caso para caso, mas a lição é útil: antes de atacar tudo, descubra quais poucas causas pesam mais.`,
      practice: {
        question: 'Uma equipe precisa reduzir as reclamações de clientes e deu notas de 1 a 5 para quatro opções. A: melhorar as respostas prontas do atendimento (impacto 3, esforço 1). B: refazer todo o sistema de pedidos (impacto 5, esforço 5). C: corrigir o erro que gera cobranças em dobro (impacto 4, esforço 2). D: mudar as cores do site (impacto 1, esforço 2). Calcule o impacto dividido pelo esforço de cada uma e indique a ordem sugerida.',
        answer: 'A = 3 ÷ 1 = 3; C = 4 ÷ 2 = 2; B = 5 ÷ 5 = 1; D = 1 ÷ 2 = 0,5. A ordem sugerida é A, C, B e D. A e C são vitórias rápidas e vêm primeiro. B tem o maior impacto, mas exige muito esforço, então deve ser planejada com cuidado. D tem pouco impacto sobre as reclamações e pode ficar para o fim ou ser descartada.',
      },
    },
    {
      title: 'Comunique a solução: resposta primeiro',
      body: `Uma boa solução só gera resultado se as pessoas certas a entenderem e decidirem agir. Muitas análises cuidadosas se perdem porque são apresentadas na ordem em que foram feitas: primeiro o contexto, depois os dados, depois os detalhes e, só no fim, a conclusão. Quem ouve se cansa antes de chegar à parte que importa.

## Comece pela resposta

A consultora Barbara Minto popularizou um modelo chamado **princípio da pirâmide**. A ideia central é inverter a ordem: comece pela conclusão, depois apresente os principais motivos e só então os detalhes que sustentam cada motivo.

- **Topo:** a resposta ou recomendação, numa frase.
- **Meio:** de dois a quatro motivos que justificam a resposta.
- **Base:** os dados e exemplos que sustentam cada motivo.

Quem tem pouco tempo lê só o topo e já sabe o essencial. Quem quer entender mais desce até onde precisar.

## Um exemplo

Na ordem em que tudo aconteceu: "Em março, analisamos os dados de atendimento. Vimos que o tempo de espera subiu. Depois, conversamos com a equipe. Também comparamos os horários. Por isso, sugerimos contratar duas pessoas."

Com a resposta primeiro: "Recomendo contratar duas pessoas para o atendimento por telefone. Há três motivos. A espera triplicou desde que a equipe perdeu dois atendentes. Os horários mais afetados são justamente os que ficaram sem cobertura. E o custo das contratações é menor do que a perda estimada com clientes que desistem de esperar."

A segunda versão diz logo o que se pede e por quê. Quem ouve pode concordar, discordar ou pedir detalhes de um motivo específico.

## Dicas para comunicar bem

- **Adapte ao público.** Uma diretora quer saber custo, prazo e risco. A equipe técnica quer saber como a solução funciona.
- **Separe fatos de opiniões.** Deixe claro o que foi medido e o que é estimativa.
- **Mostre o que você descartou.** Citar as alternativas consideradas e o motivo de não terem sido escolhidas aumenta a confiança na recomendação.
- **Diga o próximo passo.** Termine com o que precisa acontecer agora e quem precisa decidir.

## Um teste rápido

Antes de apresentar, tente resumir a sua recomendação em uma frase e os seus motivos em mais três. Se não conseguir, a análise pode até estar pronta, mas a mensagem ainda não está.`,
      practice: {
        question: 'Reorganize esta mensagem para que ela comece pela resposta: "Fizemos uma pesquisa com 200 clientes. Muitos disseram que o horário atual da loja não serve para eles. A maioria trabalha até as 18h. A loja fecha às 18h. Os concorrentes ficam abertos até as 20h. Sugerimos estender o horário até as 20h."',
        answer: 'Uma versão possível: "Recomendamos estender o horário da loja até as 20h. Primeiro, a maioria dos clientes pesquisados trabalha até as 18h, justamente quando a loja fecha. Segundo, muitos dos 200 clientes ouvidos disseram que o horário atual não serve para eles. Terceiro, os concorrentes já ficam abertos até as 20h." A recomendação vem na primeira frase, e cada motivo vem em seguida com o seu dado.',
      },
    },
  ],
};

export default t;
