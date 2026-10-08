// Texto-fonte (português do Brasil). `items` segue a MESMA ordem de ./structure.ts e as chaves de `dims` não mudam.
// Itens e conjunto de valores originais.

import type { TestText } from '../../schema';

const t: TestText = {
  title: 'Valores no trabalho',
  desc: 'Entenda o que mais pesa para você na hora de escolher um emprego, uma carreira ou um projeto.',
  intro:
    'Este questionário ajuda a identificar o que você mais valoriza no trabalho, entre oito valores como propósito, autonomia, estabilidade e remuneração. São 24 frases. Para cada uma, indique o quanto você concorda que aquilo é importante para você no trabalho. Algumas frases envolvem escolhas entre duas coisas boas: responda pensando no que pesaria mais na prática. Não há respostas certas, e seus valores podem mudar conforme a fase da vida.',
  scale: ['Discordo totalmente', 'Discordo', 'Neutro', 'Concordo', 'Concordo totalmente'],
  items: [
    'Quero que meu trabalho ajude outras pessoas ou a sociedade de alguma forma.',
    'Preciso sentir que estou aprendendo coisas novas no trabalho.',
    'Gosto de decidir por conta própria como vou realizar minhas tarefas.',
    'Prefiro um emprego seguro a um emprego mais interessante, porém incerto.',
    'É importante para mim que meus resultados sejam notados pelas pessoas com quem trabalho.',
    'Quero um trabalho que deixe tempo e energia para minha vida pessoal.',
    'Gosto de trabalhar em equipe, trocando ideias com outras pessoas.',
    'Um bom salário é um dos fatores que mais pesam quando escolho um emprego.',
    'Preciso acreditar na missão da organização em que trabalho.',
    'Valorizo empregos que oferecem desafios e chances de assumir novas responsabilidades.',
    'Trabalho melhor quando ninguém controla cada passo que dou.',
    'Saber que terei trabalho e renda nos próximos anos me traz tranquilidade.',
    'Um elogio sincero da minha liderança me motiva a fazer ainda melhor.',
    'Eu aceitaria ganhar um pouco menos para ter horários flexíveis ou mais tempo livre.',
    'Um bom relacionamento com os colegas é tão importante para mim quanto a tarefa em si.',
    'Busco trabalhos em que eu possa ganhar mais conforme os resultados que entrego.',
    'Um trabalho bem pago, mas sem sentido para mim, não seria suficiente.',
    'Eu deixaria um emprego confortável se ele não me oferecesse mais oportunidades de evoluir.',
    'Ter liberdade para escolher meus horários ou meu local de trabalho é importante para mim.',
    'Gosto de ter uma rotina previsível e regras claras no trabalho.',
    'Gosto de ocupar posições com prestígio e visibilidade.',
    'Evito empregos que exigem estar disponível fora do horário de trabalho.',
    'Prefiro ambientes em que as pessoas se ajudam a ambientes em que cada um trabalha por si.',
    'Eu mudaria de emprego por uma remuneração bem maior, mesmo gostando do atual.',
  ],
  dims: {
    purpose: {
      label: 'Propósito',
      desc: 'O quanto você precisa sentir que seu trabalho tem sentido e contribui para algo maior.',
      high: 'Para você, não basta um bom emprego: é preciso acreditar no que se faz e ver o impacto disso nas pessoas ou no mundo. Isso traz motivação profunda e ajuda a atravessar os dias difíceis. O ponto de atenção é aceitar condições ruins só porque a causa é importante.',
      low: 'Você tende a ver o trabalho de forma mais prática, como um meio para alcançar outros objetivos da sua vida. Isso traz flexibilidade para escolher oportunidades. O ponto de atenção é sentir falta de motivação com o tempo, se nada no trabalho parecer significativo.',
      tips: [
        'Pergunte-se quem se beneficia do seu trabalho, mesmo que de forma indireta.',
        'Antes de aceitar uma vaga, pesquise a missão e as práticas da organização.',
        'Se o trabalho atual não traz esse sentido, procure-o em projetos paralelos ou em voluntariado.',
      ],
      examples: ['Organizações sem fins lucrativos', 'Saúde', 'Educação', 'Empresas de impacto social ou ambiental'],
    },
    growth: {
      label: 'Crescimento',
      desc: 'O quanto você valoriza aprender, se desenvolver e assumir desafios cada vez maiores.',
      high: 'Você precisa sentir que está evoluindo, aprendendo e avançando na carreira. Isso mantém você em desenvolvimento e amplia suas opções profissionais. O ponto de atenção é a insatisfação constante: nem toda fase precisa trazer uma promoção ou um desafio novo.',
      low: 'Você valoriza mais a tranquilidade de fazer bem o que já domina do que a busca constante por novos desafios. Isso traz consistência e menos pressão. O ponto de atenção é deixar suas habilidades ficarem desatualizadas com o tempo.',
      tips: [
        'Combine com sua liderança uma meta de desenvolvimento para os próximos meses.',
        'Reserve algumas horas por mês para aprender algo útil para sua área.',
        'Em processos seletivos, pergunte como funcionam as promoções e os treinamentos.',
      ],
      examples: ['Empresas em expansão', 'Programas de trainee', 'Consultorias', 'Empresas com plano de carreira estruturado'],
    },
    autonomy: {
      label: 'Autonomia',
      desc: 'O quanto você valoriza ter liberdade para decidir como, quando e onde trabalhar.',
      high: 'Você rende mais quando tem liberdade para organizar o trabalho do seu jeito. Isso favorece a iniciativa e a responsabilidade pelos resultados. O ponto de atenção é ter dificuldade com ambientes muito controlados ou com tarefas que exigem seguir processos rígidos.',
      low: 'Você se sente bem com orientações claras e com alguém que ajude a definir as prioridades. Isso facilita trabalhar em equipe e seguir padrões de qualidade. O ponto de atenção é depender demais de direcionamento e perder oportunidades de mostrar iniciativa.',
      tips: [
        'Negocie metas claras com sua liderança em troca de mais liberdade sobre a forma de alcançá-las.',
        'Em entrevistas, pergunte como as decisões são tomadas no dia a dia da equipe.',
        'Quando tiver mais liberdade, crie sua própria rotina e defina um prazo para cada etapa.',
      ],
      examples: ['Trabalho autônomo', 'Empreendedorismo', 'Pesquisa', 'Equipes remotas com metas claras'],
    },
    stability: {
      label: 'Estabilidade',
      desc: 'O quanto você valoriza segurança, previsibilidade e continuidade no trabalho e na renda.',
      high: 'Você se sente melhor quando sabe o que esperar: renda garantida, regras claras e uma rotina previsível. Isso traz tranquilidade para planejar a vida pessoal. O ponto de atenção é deixar passar oportunidades interessantes por receio de mudanças.',
      low: 'Você lida bem com incertezas e se sente à vontade para mudar quando surge algo interessante. Isso facilita aproveitar novas oportunidades. O ponto de atenção é assumir riscos financeiros sem uma reserva que dê segurança em momentos difíceis.',
      tips: [
        'Mantenha uma reserva financeira para alguns meses de despesas: ela traz segurança em qualquer cenário.',
        'Antes de recusar uma mudança, avalie o risco real e o que você poderia ganhar com ela.',
        'Busque estabilidade também em habilidades valorizadas pelo mercado, e não só no emprego atual.',
      ],
      examples: ['Serviço público', 'Grandes empresas consolidadas', 'Bancos e seguradoras', 'Serviços essenciais, como energia e saneamento'],
    },
    recognition: {
      label: 'Reconhecimento',
      desc: 'O quanto é importante para você que seu esforço e seus resultados sejam vistos e valorizados.',
      high: 'Você se motiva quando seu trabalho é notado e valorizado pelas pessoas ao redor. Isso impulsiona você a buscar resultados de qualidade. O ponto de atenção é depender demais da opinião dos outros para sentir que fez um bom trabalho.',
      low: 'Você se satisfaz com o trabalho bem feito, mesmo quando ninguém comenta sobre ele. Isso traz independência e motivação própria. O ponto de atenção é deixar suas conquistas invisíveis e perder oportunidades por não mostrá-las.',
      tips: [
        'Registre suas conquistas ao longo do ano para apresentá-las em conversas de avaliação.',
        'Peça retorno de forma direta quando sentir falta dele.',
        'Reconheça também o trabalho dos colegas: isso cria uma cultura de valorização.',
      ],
      examples: ['Vendas com metas e premiações', 'Comunicação e mídia', 'Direito e consultoria', 'Esportes e artes'],
    },
    balance: {
      label: 'Equilíbrio',
      desc: 'O quanto você valoriza ter tempo e energia para a vida pessoal, a família, a saúde e o descanso.',
      high: 'Para você, o trabalho precisa caber na vida, e não o contrário. Isso protege sua saúde, suas relações e sua energia a longo prazo. O ponto de atenção é recusar fases mais intensas que poderiam trazer crescimento, mesmo quando seriam temporárias.',
      low: 'Você aceita se dedicar intensamente ao trabalho quando acredita que vale a pena. Isso pode acelerar sua carreira e seus projetos. O ponto de atenção é o desgaste: sem pausas, o cansaço acaba afetando a saúde, as relações e o próprio desempenho.',
      tips: [
        'Defina um horário para encerrar o trabalho e avise as pessoas com quem você trabalha.',
        'Em entrevistas, pergunte sobre a jornada real, as horas extras e a política de trabalho remoto.',
        'Coloque na agenda seus compromissos pessoais com a mesma seriedade dos profissionais.',
      ],
      examples: ['Empresas com jornada flexível', 'Trabalho remoto ou híbrido', 'Funções com horário bem definido', 'Trabalho por projeto ou em meio período'],
    },
    collaboration: {
      label: 'Colaboração',
      desc: 'O quanto você valoriza trabalhar em equipe, ter boas relações com os colegas e um ambiente de ajuda mútua.',
      high: 'Você rende mais quando troca ideias e trabalha junto com outras pessoas. Um bom clima de equipe é tão importante para você quanto a tarefa em si. O ponto de atenção é ter dificuldade em trabalhos mais solitários ou em ambientes muito competitivos.',
      low: 'Você se sente bem trabalhando de forma independente, com responsabilidades bem definidas. Isso favorece a concentração e a autonomia. O ponto de atenção é se isolar e perder contribuições que só surgem na troca com outras pessoas.',
      tips: [
        'Em processos seletivos, peça para conhecer a equipe ou pergunte como ela trabalha no dia a dia.',
        'Se você prefere trabalhar de forma independente, combine momentos curtos de alinhamento com a equipe.',
        'Ofereça ajuda a um colega e peça ajuda quando precisar: as duas coisas fortalecem a confiança.',
      ],
      examples: ['Equipes multidisciplinares', 'Empresas com hierarquia mais horizontal', 'Hospitais e equipes de saúde', 'Agências e estúdios criativos'],
    },
    pay: {
      label: 'Remuneração',
      desc: 'O quanto o salário, os benefícios e a possibilidade de ganhar mais pesam nas suas escolhas profissionais.',
      high: 'Para você, ser bem pago é uma prioridade clara, seja para ter segurança, liberdade ou realizar objetivos pessoais. Isso ajuda a negociar com firmeza e a buscar funções valorizadas. O ponto de atenção é permanecer em trabalhos que desgastam você só por causa do salário.',
      low: 'Você valoriza outros aspectos do trabalho mais do que o dinheiro em si. Isso dá liberdade para escolher oportunidades pelo que elas oferecem de interessante. O ponto de atenção é aceitar uma remuneração abaixo do que seu trabalho vale por não negociar.',
      tips: [
        'Pesquise a faixa salarial da sua função antes de negociar um aumento ou uma proposta.',
        'Considere o pacote completo: benefícios, bônus, flexibilidade e custos de deslocamento.',
        'Defina o valor mínimo de que você precisa para viver bem e use-o como referência nas negociações.',
      ],
      examples: ['Mercado financeiro', 'Vendas com comissão', 'Tecnologia', 'Cargos de gestão'],
    },
  },
  resultTitle: 'O que mais importa para você no trabalho',
  resultIntro:
    'Destacamos os três valores com as maiores pontuações. Quando um trabalho respeita esses valores, a tendência é que você sinta mais motivação e satisfação. Quando eles ficam de lado por muito tempo, a insatisfação costuma aparecer, mesmo que o resto pareça bom.',
  note: 'Este resultado é uma ferramenta de autoconhecimento baseada nas suas próprias respostas. Ele não é um teste psicológico validado e não substitui uma orientação de carreira feita por um profissional.',
};

export default t;
