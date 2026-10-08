// Texto-fonte (português do Brasil) do teste "dopamine".
// Regras para traduzir: `items` segue a MESMA ordem de ./structure.ts (cada frase pertence à
// dimensão do item na mesma posição) e as chaves de `dims` e `bands` não mudam.
// Os itens de longTerm (posições 3, 7, 11 e 15) são invertidos: concordar indica mais equilíbrio.
// Itens originais. O teste NÃO mede dopamina; os textos dizem isso de forma clara.

import type { TestText } from '../../schema';

const t: TestText = {
  title: 'Teste de dopamina',
  desc: 'Veja como estão seus hábitos ligados ao sistema de recompensa do cérebro: estímulos rápidos, tédio, telas e metas de longo prazo.',
  intro:
    'Este questionário observa hábitos do dia a dia ligados ao sistema de recompensa do cérebro. A dopamina é uma substância que o cérebro usa para transmitir sinais e está ligada à motivação e à busca por recompensas. Importante: apesar do nome popular, este teste não mede a dopamina no seu corpo. Nenhum questionário consegue fazer isso, e os exames médicos capazes de avaliar a dopamina são específicos e raramente usados para essa finalidade. O que o teste avalia são quatro áreas de hábitos: busca por recompensas rápidas, dificuldade com o tédio, motivação para metas de longo prazo e hábitos de tela. São 16 frases. Pense nas últimas 2 semanas e indique com que frequência cada situação aconteceu com você. Responda com sinceridade e sem pensar demais: não há respostas certas ou erradas.',
  scale: ['Nunca', 'Raramente', 'Às vezes', 'Com frequência', 'Sempre'],
  items: [
    'Passo mais tempo do que pretendia vendo vídeos curtos ou navegando nas redes sociais.',
    'Em momentos de espera, como em uma fila ou no transporte, tenho dificuldade para ficar sem fazer nada.',
    'Consigo me dedicar a um objetivo por semanas, mesmo quando os resultados ainda não aparecem.',
    'Pego o celular nos primeiros minutos depois de acordar.',
    'Compro coisas por impulso, principalmente pela internet, e depois percebo que não precisava delas.',
    'Perco a paciência com tarefas lentas ou repetitivas e paro antes de terminar.',
    'Consigo abrir mão de um prazer imediato quando ele atrapalha algo importante para o meu futuro.',
    'Fico no celular na cama e acabo dormindo mais tarde do que pretendia.',
    'Quando sinto cansaço ou desânimo, busco algo que traga prazer imediato, como um doce, um petisco ou um vídeo.',
    'Tenho dificuldade para ler um texto longo ou assistir a um filme inteiro sem me distrair com outra coisa.',
    'Começo as tarefas importantes no horário que planejei, sem adiar para fazer algo mais divertido.',
    'Desbloqueio o celular sem um motivo claro, apenas por hábito.',
    'Quando chega uma notificação, paro o que estou fazendo para ver do que se trata.',
    'Atividades simples, como cozinhar ou caminhar, me parecem sem graça se não houver algo para ver ou ouvir ao mesmo tempo.',
    'Sinto satisfação com o progresso em projetos longos, como estudar, treinar ou economizar.',
    'Uso mais de uma tela ao mesmo tempo, como assistir a uma série enquanto olho o celular.',
  ],
  dims: {
    quickRewards: {
      label: 'Recompensas rápidas',
      desc: 'Mede o quanto você recorre a prazeres imediatos, como redes sociais, vídeos curtos, notificações, compras por impulso e petiscos.',
      high: 'Você recorre a estímulos rápidos com frequência, muitas vezes para descansar ou mudar o humor. Isso é comum e não é um defeito: muitos desses estímulos são criados justamente para chamar a sua atenção. O ponto de atenção é quando eles ocupam o tempo de coisas que importam mais para você ou deixam uma sensação de tempo perdido.',
      low: 'Você recorre pouco a prazeres imediatos e costuma escolher com intenção como usar seu tempo livre. Isso ajuda a manter o foco e a aproveitar melhor os momentos de descanso. Vale continuar observando os dias de cansaço, quando a vontade de estímulos rápidos costuma aumentar.',
      tips: [
        'Desative as notificações que não são essenciais e mantenha só as de pessoas e serviços realmente importantes.',
        'Antes de abrir um aplicativo, defina o que você quer fazer nele e por quanto tempo.',
        'Em compras pela internet que não estavam planejadas, espere 24 horas antes de finalizar o pedido.',
      ],
    },
    boredom: {
      label: 'Dificuldade com o tédio',
      desc: 'Mede o quanto é difícil para você ficar sem estímulos, esperar ou se concentrar em tarefas lentas e repetitivas.',
      high: 'Momentos de espera e tarefas lentas tendem a ser desconfortáveis para você, e a vontade de buscar algo mais interessante aparece rápido. Isso é muito comum em uma rotina cheia de estímulos. A tolerância ao tédio pode ser treinada aos poucos, como qualquer outro hábito.',
      low: 'Você lida bem com esperas, pausas e tarefas que pedem paciência. Isso ajuda a se concentrar por mais tempo e a terminar o que começa. Momentos sem estímulo também dão espaço para descansar a mente e ter ideias novas.',
      tips: [
        'Pratique alguns minutos por dia sem estímulo, como esperar em uma fila ou fazer um trajeto curto sem pegar o celular.',
        'Em tarefas longas, trabalhe em blocos de 20 a 25 minutos, com pausas curtas entre eles.',
        'De vez em quando, faça uma coisa de cada vez, como comer sem tela ou caminhar sem fones de ouvido.',
      ],
    },
    longTerm: {
      label: 'Metas de longo prazo',
      desc: 'Mede a motivação para objetivos que demoram a dar resultado, como estudar, treinar ou economizar. Aqui, pontuação alta indica mais dificuldade para manter esse tipo de meta; pontuação baixa, mais facilidade.',
      high: 'Manter a motivação em objetivos que levam tempo tem sido difícil para você, principalmente quando há opções mais rápidas e agradáveis por perto. Isso não significa falta de capacidade: metas longas trazem poucas recompensas no começo, e o cérebro tende a preferir o que é imediato. Dividir o caminho em etapas menores costuma ajudar bastante.',
      low: 'Você consegue manter o esforço em objetivos que demoram a dar resultado e valoriza o progresso feito aos poucos. Essa capacidade ajuda a construir conquistas duradouras nos estudos, no trabalho e na saúde. O ponto de atenção é não deixar o descanso e o lazer de lado pelo caminho.',
      tips: [
        'Divida cada meta grande em etapas pequenas e reconheça cada etapa concluída com uma recompensa simples.',
        'Registre seu progresso em um calendário ou aplicativo para ver o quanto você já avançou.',
        'Faça as tarefas importantes no horário em que você costuma ter mais energia, antes de abrir redes sociais ou outros aplicativos.',
      ],
    },
    screens: {
      label: 'Hábitos de tela',
      desc: 'Mede como o celular e outras telas aparecem na sua rotina: ao acordar, antes de dormir, ao conferir o celular sem motivo e ao usar várias telas ao mesmo tempo.',
      high: 'As telas estão presentes em muitos momentos do seu dia, inclusive logo ao acordar e na hora de dormir. Isso é comum hoje em dia, mas o uso à noite pode atrasar e prejudicar o sono, e conferir o celular o tempo todo divide a atenção. Pequenas mudanças no ambiente costumam funcionar melhor do que depender só da força de vontade.',
      low: 'Você usa as telas com mais intenção e mantém alguns momentos do dia livres delas, como o início da manhã e a hora de dormir. Isso favorece o sono, a concentração e o descanso. Vale manter esses limites, principalmente em períodos mais agitados.',
      tips: [
        'Deixe o celular fora do quarto à noite e use um despertador comum.',
        'Evite telas nos 30 a 60 minutos antes de dormir e procure manter horários regulares de sono.',
        'Nas pausas do dia, troque o celular por um pouco de movimento, como uma caminhada curta ou um alongamento.',
      ],
    },
  },
  bands: {
    balanced: {
      label: 'Equilíbrio',
      text: 'Suas respostas indicam uma relação equilibrada com estímulos rápidos e telas. Você parece lidar bem com o tédio e manter a motivação para objetivos que levam tempo. Continue cuidando dos hábitos que ajudam você, como um sono regular e momentos longe das telas.',
    },
    attention: {
      label: 'Atenção',
      text: 'Suas respostas indicam que alguns hábitos de estímulo rápido já ocupam um espaço importante na sua rotina. Isso é muito comum e não é motivo para alarme. Observe quais áreas tiveram as pontuações mais altas e escolha uma ou duas mudanças pequenas para testar nas próximas semanas.',
    },
    overloaded: {
      label: 'Sobrecarga de estímulos',
      text: 'Suas respostas indicam que estímulos rápidos e telas estão muito presentes no seu dia, e que esperar, se concentrar ou manter metas longas pode estar mais difícil. Isso é cada vez mais comum e pode mudar com ajustes graduais de hábito, sem cortes radicais. Comece reduzindo o excesso de estímulos em um ou dois momentos do dia, como ao acordar e antes de dormir, e observe como você se sente.',
    },
  },
  resultTitle: 'Seus hábitos de recompensa',
  resultIntro:
    'O resultado soma as quatro áreas e mostra o quanto seus hábitos atuais dependem de estímulos rápidos. Lembre-se: ele não mede a dopamina no seu corpo, e sim padrões de comportamento que podem mudar com o tempo e com a prática.',
  note: 'Este teste é uma ferramenta de autoconhecimento baseada nas suas próprias respostas. Ele não mede a dopamina nem qualquer outra substância no corpo, não é um exame médico e não serve para diagnóstico. Reduzir o excesso de estímulos pode ajudar como mudança de hábito, mas não é um tratamento médico. Se algum hábito parece fora do seu controle ou está causando prejuízos na sua vida, converse com um profissional de saúde.',
  help: 'Se você sente que não consegue controlar o uso do celular, de jogos eletrônicos, de apostas ou de compras, ou se isso está afetando seu sono, seu trabalho, suas finanças ou suas relações, procure um(a) psicólogo(a) ou médico(a). Para jogos, apostas ou compras compulsivas, também existem serviços e grupos de apoio especializados que podem ajudar.',
};

export default t;
