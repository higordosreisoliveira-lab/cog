// anxiety — French translation of pt.ts
import type { TestText } from '../../schema';

const t: TestText = {
  "title": "Niveau d’anxiété",
  "desc": "Voyez à quelle fréquence l’inquiétude et la tension dans le corps se sont manifestées dans votre quotidien ces deux dernières semaines.",
  "intro": "Ce questionnaire s’intéresse à deux facettes de l’anxiété : l’inquiétude, qui occupe les pensées, et la tension, qui se manifeste dans le corps et dans le comportement. Il comporte 10 affirmations portant sur les deux dernières semaines. Pour chacune, indiquez à quelle fréquence elle vous est arrivée pendant cette période, et non comment vous êtes en général. Il n’y a pas de bonnes ou de mauvaises réponses. Il s’agit d’une auto-évaluation fondée sur vos réponses : elle aide à percevoir comment vous allez, mais ce n’est pas un diagnostic.",
  "scale": [
    "Jamais",
    "Quelques jours",
    "Plus de la moitié des jours",
    "Presque tous les jours"
  ],
  "items": [
    "J’ai passé une bonne partie de la journée la tête occupée par des inquiétudes, l’une entraînant l’autre.",
    "J’ai senti mon corps tendu, surtout au niveau des épaules, de la nuque ou de la mâchoire.",
    "J’ai essayé de penser à autre chose, mais les mêmes pensées inquiétantes revenaient.",
    "J’ai remarqué que mon cœur s’emballait ou que j’avais le souffle court sans avoir fait le moindre effort physique.",
    "Au moment de dormir, ma tête n’arrêtait pas de ressasser les problèmes et les choses en suspens.",
    "J’ai eu du mal à rester immobile, en remuant les jambes, en tripotant quelque chose ou en faisant les cent pas.",
    "Face à quelque chose de simple, comme un message resté sans réponse, j’ai tout de suite pensé au pire.",
    "De petits imprévus, comme un bruit ou un retard, m’ont fait perdre mon calme plus que d’habitude.",
    "J’ai repoussé des décisions ou évité des situations par peur que quelque chose tourne mal.",
    "Même pendant mes moments de repos, mon corps est resté en alerte et je n’ai pas réussi à ralentir."
  ],
  "dims": {
    "worry": {
      "label": "Inquiétude",
      "desc": "Mesure à quel point des pensées inquiétantes ont occupé votre esprit, sont revenues même quand vous essayiez de vous distraire et ont influencé vos décisions.",
      "high": "Ces dernières semaines, l’inquiétude a pris beaucoup de place dans vos pensées, souvent en anticipant des problèmes qui ne se sont pas encore produits. C’est fatigant et cela détourne votre attention de ce qui est à votre portée maintenant. Il peut être utile d’apprendre des façons de poser une limite à ces pensées et de chercher du soutien si elles perturbent votre quotidien.",
      "low": "L’inquiétude a été peu présente ou passagère ces dernières semaines. Vous semblez capable de penser à vos problèmes sans qu’ils envahissent votre journée. Continuez à entretenir les habitudes qui vous aident à garder cet équilibre.",
      "tips": [
        "Réservez 15 minutes par jour pour noter vos inquiétudes et, à côté de chacune, écrivez une prochaine étape possible ou indiquez si elle échappe à votre contrôle.",
        "Quand vous vous surprenez à imaginer le pire, demandez-vous : qu’est-ce qui a le plus de chances de se produire réellement ?",
        "Réduisez le temps passé sur l’actualité et les réseaux sociaux, surtout avant de dormir."
      ]
    },
    "tension": {
      "label": "Tension corporelle et agitation",
      "desc": "Mesure les signes physiques et comportementaux liés à l’anxiété, comme les muscles tendus, le cœur qui s’accélère, l’agitation et l’irritation face à de petites choses.",
      "high": "Votre corps a envoyé de nombreux signaux d’alerte ces dernières semaines, comme de la tension, de l’agitation ou des réactions fortes à de petits imprévus. C’est ainsi que le corps répond à la pression, mais quand cela dure longtemps, c’est épuisant et cela nuit au repos. Les pratiques qui apaisent le corps aident souvent, et il est utile d’en parler à un professionnel si les signes sont intenses ou fréquents.",
      "low": "Votre corps a montré peu de signes de tension ces dernières semaines, et vous avez réussi à ralentir pendant vos moments de repos. Cela indique que la pression du quotidien ne s’accumule pas dans votre corps.",
      "tips": [
        "Essayez de respirer lentement pendant quelques minutes, en expirant plus longtemps que vous n’inspirez.",
        "Bougez régulièrement : une marche de 20 à 30 minutes aide déjà à relâcher la tension.",
        "Si vous ressentez souvent des palpitations, un essoufflement ou une douleur dans la poitrine, consultez un médecin pour évaluer d’autres causes possibles."
      ]
    }
  },
  "bands": {
    "minimal": {
      "label": "Anxiété minimale",
      "text": "Vos réponses indiquent peu de signes d’anxiété ces deux dernières semaines. Les inquiétudes et les moments de tension font partie de la vie et, dans votre cas, ils ne semblent pas peser sur votre quotidien. Continuez à prendre soin de votre sommeil, de votre activité physique et de vos relations."
    },
    "mild": {
      "label": "Anxiété légère",
      "text": "Vos réponses indiquent quelques signes d’anxiété, présents certains jours. C’est courant dans les périodes chargées ou de changement. Observez ce qui suscite vos inquiétudes et essayez les suggestions ci-dessous ; si les signes augmentent ou durent longtemps, parlez-en à un professionnel."
    },
    "moderate": {
      "label": "Anxiété modérée",
      "text": "Vos réponses indiquent que l’inquiétude et la tension ont été présentes une bonne partie des jours. Cela peut être épuisant et affecter le sommeil, la concentration et les relations. En parler à un professionnel, comme un psychologue ou un médecin, peut vous aider à comprendre ce qui se passe et à trouver des façons d’y faire face."
    },
    "high": {
      "label": "Anxiété élevée",
      "text": "Vos réponses indiquent des signes d’anxiété intenses presque tous les jours de ces deux dernières semaines. Cela ne définit pas qui vous êtes, mais cela montre que vous portez un poids important, et il existe des moyens efficaces d’en prendre soin. Adressez-vous à un professionnel, comme un psychologue ou un médecin, pour une évaluation et pour réfléchir ensemble aux prochaines étapes."
    }
  },
  "resultTitle": "Votre niveau d’anxiété",
  "resultIntro": "Le résultat tient compte de la somme de vos réponses sur les deux dernières semaines. Ci-dessous, vous voyez le niveau dans lequel vous vous situez et vos scores pour l’inquiétude et pour la tension corporelle.",
  "note": "Ce questionnaire est un outil de connaissance de soi et de dépistage, fondé sur vos propres réponses. Ce n’est pas un diagnostic : seul un professionnel qualifié, comme un psychologue ou un médecin, peut évaluer l’anxiété de façon complète. Certains signes physiques, comme les palpitations et l’essoufflement, peuvent aussi avoir d’autres causes.",
  "help": "Si l’anxiété perturbe votre quotidien, adressez-vous à un psychologue ou à votre médecin. Les services de santé de votre région peuvent aussi vous accompagner et, si nécessaire, vous orienter vers des services spécialisés en santé mentale. Si vous traversez une souffrance intense, contactez une ligne d’écoute ou de soutien émotionnel de votre pays. En cas d’urgence, appelez le numéro d’urgence local."
};

export default t;
