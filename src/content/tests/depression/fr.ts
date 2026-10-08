// depression — French translation of pt.ts
import type { TestText } from '../../schema';

const t: TestText = {
  "title": "Signes d’humeur dépressive",
  "desc": "Voyez à quelle fréquence des signes comme le découragement, la perte d’intérêt et le manque d’énergie sont apparus ces deux dernières semaines.",
  "intro": "Ce questionnaire observe deux groupes de signes liés à l’humeur dépressive : les changements d’humeur et d’intérêt pour les choses, et les changements d’énergie, de sommeil, d’appétit et de concentration. Il comporte 10 affirmations portant sur les deux dernières semaines. Pour chacune, indiquez à quelle fréquence elle vous est arrivée pendant cette période. Certaines affirmations abordent des sujets délicats : répondez à votre rythme et avec sincérité. Il s’agit d’une auto-évaluation fondée sur vos réponses, et non d’un diagnostic.",
  "scale": [
    "Jamais",
    "Quelques jours",
    "Plus de la moitié des jours",
    "Presque tous les jours"
  ],
  "items": [
    "Des choses qui me faisaient plaisir avant, comme un loisir ou voir des amis, ont perdu leur saveur.",
    "J’ai manqué d’énergie même pour des tâches simples, comme prendre une douche ou répondre à un message.",
    "J’ai passé une bonne partie de la journée avec une tristesse ou un vide difficile à expliquer.",
    "Mon sommeil a changé : j’ai mis du temps à m’endormir, je me réveillais plusieurs fois dans la nuit ou je dormais beaucoup plus que d’habitude.",
    "Mon appétit a changé : j’ai mangé beaucoup moins ou beaucoup plus que d’habitude.",
    "J’ai envisagé les prochains mois sans espoir que quoi que ce soit s’améliore.",
    "J’ai perdu le fil de conversations ou de tâches simples parce que je n’arrivais pas à me concentrer.",
    "Il m’est arrivé de penser que je n’ai aucune valeur ou que tout ce que je fais tourne mal.",
    "De petites décisions, comme quoi manger ou quoi porter, m’ont paru beaucoup trop difficiles.",
    "J’ai eu des pensées selon lesquelles la vie ne vaut pas la peine d’être vécue, ou des pensées de me faire du mal."
  ],
  "dims": {
    "mood": {
      "label": "Humeur et intérêt",
      "desc": "Mesure des signes comme une tristesse persistante, la perte de plaisir, le manque d’espoir et des pensées très négatives sur soi-même.",
      "high": "Ces deux dernières semaines, la tristesse, le manque d’intérêt ou des pensées dures envers vous-même sont apparus souvent. Ce n’est pas un manque de volonté : l’humeur dépressive change la façon dont nous nous voyons et dont nous voyons l’avenir. En parler à un professionnel est une étape importante, et vous n’avez pas besoin d’attendre que cela s’aggrave pour demander de l’aide.",
      "low": "Votre humeur et votre intérêt pour les choses semblent être restés stables ces deux dernières semaines. Les jours de tristesse arrivent à tout le monde, mais ils ne semblent pas avoir dominé votre quotidien. Continuez à prendre soin de ce qui vous fait du bien.",
      "tips": [
        "Prévoyez de petites activités agréables au fil de la semaine, même sans en avoir envie : souvent, l’élan vient après avoir commencé, et non avant.",
        "Restez en contact avec des personnes de confiance, même si ce n’est qu’un message ou une courte conversation.",
        "Si la tristesse ou le manque d’intérêt durent plus de deux semaines, consultez un psychologue ou un médecin pour en parler."
      ]
    },
    "energy": {
      "label": "Énergie, sommeil, appétit et concentration",
      "desc": "Mesure les changements dans le corps et dans le fonctionnement au quotidien qui accompagnent souvent l’humeur dépressive, comme la fatigue, les changements de sommeil et d’appétit et les difficultés de concentration.",
      "high": "Votre corps et votre esprit ont montré des signes d’usure ces deux dernières semaines : moins d’énergie, des changements de sommeil ou d’appétit et des difficultés à vous concentrer. Ces signes peuvent accompagner l’humeur dépressive, mais ils peuvent aussi avoir d’autres causes, comme le stress, des nuits de mauvais sommeil ou des problèmes de santé physique. Il est utile d’en parler à un médecin, surtout s’ils persistent.",
      "low": "Votre énergie, votre sommeil, votre appétit et votre concentration semblent fonctionner de façon stable. Cette base aide souvent beaucoup à traverser les jours plus difficiles. Continuez à en prendre soin.",
      "tips": [
        "Essayez de garder des horaires réguliers pour dormir, vous lever et manger, même les jours où l’envie n’est pas là.",
        "Sortez un peu à l’air libre et bougez, ne serait-ce que pour une courte marche : la lumière du jour et le mouvement aident à réguler le sommeil et l’énergie.",
        "Découpez les tâches en petites parties et reconnaissez chacune de celles que vous terminez, sans vous imposer le rythme d’avant."
      ]
    }
  },
  "bands": {
    "minimal": {
      "label": "Peu de signes",
      "text": "Vos réponses indiquent peu ou pas de signes d’humeur dépressive ces deux dernières semaines. Les moments de tristesse ou de fatigue font partie de la vie et, dans votre cas, ils ne semblent pas envahir votre quotidien. Continuez à prendre soin de votre sommeil, de votre activité physique et de vos relations."
    },
    "mild": {
      "label": "Signes légers",
      "text": "Vos réponses indiquent quelques signes d’humeur dépressive certains jours. Cela peut arriver dans les périodes de fatigue, de perte ou de changement. Observez comment vous vous sentez dans les semaines à venir et, si les signes persistent ou augmentent, parlez-en à un professionnel."
    },
    "moderate": {
      "label": "Signes modérés",
      "text": "Vos réponses indiquent des signes d’humeur dépressive une bonne partie des jours, ce qui pèse peut-être sur votre quotidien. Cela mérite de l’attention et du soin, et vous n’avez pas à y faire face par vos propres moyens. Adressez-vous à un professionnel, comme un psychologue ou un médecin, pour parler de ce que vous ressentez."
    },
    "high": {
      "label": "Signes intenses",
      "text": "Vos réponses indiquent des signes fréquents et intenses d’humeur dépressive ces deux dernières semaines. Cela peut rendre tout plus difficile, mais il existe des traitements, et les gens vont mieux avec le bon soutien. Adressez-vous à un professionnel, comme un psychologue ou un médecin, dès que possible, et dites à une personne de confiance comment vous allez."
    }
  },
  "resultTitle": "Vos signes d’humeur",
  "resultIntro": "Le résultat additionne vos réponses sur les deux dernières semaines. Ci-dessous, vous voyez le niveau dans lequel vous vous situez et vos scores pour l’humeur et l’intérêt, et pour l’énergie, le sommeil, l’appétit et la concentration.",
  "note": "Ce questionnaire est un outil de connaissance de soi et de dépistage, fondé sur vos propres réponses. Ce n’est pas un diagnostic de dépression : seul un professionnel qualifié, comme un psychologue ou un médecin, peut faire cette évaluation. La fatigue et les changements de sommeil et d’appétit peuvent aussi avoir d’autres causes, y compris physiques.",
  "help": "Pour parler de ce que vous ressentez, adressez-vous à un psychologue ou à votre médecin. Les services de santé de votre région peuvent aussi vous accompagner et, si nécessaire, vous orienter vers des services spécialisés en santé mentale. Si vous êtes en souffrance, contactez une ligne d’écoute ou de soutien émotionnel de votre pays. En cas d’urgence, appelez le numéro d’urgence local.",
  "alert": "Vous avez indiqué que, ces deux dernières semaines, vous avez eu des pensées selon lesquelles la vie ne vaut pas la peine d’être vécue, ou des pensées de vous faire du mal. C’est une bonne chose que vous ayez répondu avec sincérité. Ces pensées méritent qu’on en prenne soin dès maintenant, et vous n’avez pas à traverser cela sans personne à vos côtés. Si vous êtes en danger ou si vous sentez que vous pourriez vous faire du mal, appelez dès maintenant le numéro d’urgence local. Pour parler à quelqu’un à tout moment, contactez une ligne d’écoute ou de soutien émotionnel de votre pays. Si vous le pouvez, dites aussi à une personne de confiance comment vous vous sentez."
};

export default t;
