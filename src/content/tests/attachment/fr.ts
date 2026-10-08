import type { TestText } from '../../schema';

// attachment — French translation of pt.ts
const t: TestText = {
  "title": "Style d’attachement",
  "desc": "Découvrez ce que vous ressentez et comment vous agissez quand quelqu’un devient proche de vous, que ce soit en couple, en amitié ou en famille.",
  "intro": "Ce questionnaire s’intéresse à deux tendances qui apparaissent dans les liens proches : l’anxiété relationnelle, c’est-à-dire à quel point vous vous inquiétez de perdre l’affection ou l’attention des autres, et l’évitement de la proximité, c’est-à-dire votre préférence pour une certaine distance émotionnelle. Les 18 affirmations décrivent des situations courantes dans les relations proches en général, avec un ou une partenaire, des amis ou la famille. Pour chacune, indiquez dans quelle mesure elle correspond à ce que vous ressentez ou faites habituellement, en pensant à vos liens en général, et non à une seule personne ou à une seule période. Si une situation ne vous est jamais arrivée, répondez en imaginant comment vous réagiriez probablement. Il n’y a pas de bonnes ou de mauvaises réponses.",
  "scale": [
    "Pas du tout d’accord",
    "Pas d’accord",
    "Neutre",
    "D’accord",
    "Tout à fait d’accord"
  ],
  "items": [
    "Quand une personne importante pour moi tarde à répondre à un message, je commence à penser que j’ai fait quelque chose de mal.",
    "Quand quelqu’un commence à me confier des choses très personnelles, j’ai envie de changer de sujet.",
    "Si des amis organisent une sortie sans m’inviter, je passe des heures à me demander ce que cela dit de notre relation.",
    "J’arrive à pleurer ou à montrer que je suis triste devant les personnes en qui j’ai confiance.",
    "Quand un proche part en voyage ou n’a pas de temps pour moi pendant quelques jours, je continue ma routine sans m’inquiéter pour notre relation.",
    "Quand une nouvelle amitié devient plus proche, avec des échanges fréquents et des invitations, j’ai envie de prendre un peu de distance.",
    "Après une dispute avec un proche, j’ai peur que la personne s’éloigne pour de bon.",
    "Même quand je traverse une période difficile, je préfère tout régler par moi-même plutôt que de demander de l’aide à un proche.",
    "Quand une personne que j’aime bien semble plus silencieuse ou distante, je pense tout de suite que le problème vient de moi.",
    "Quand une personne proche me dit clairement à quel point elle tient à moi, je suis à l’aise avec ça.",
    "Si une personne proche me dit qu’elle a besoin de temps pour elle, je le comprends sans le prendre personnellement.",
    "Quand une personne avec qui j’ai un lien proche me demande que l’on passe plus de temps ensemble, j’ai l’impression de perdre mon espace.",
    "Après un rendez-vous ou une conversation importante, je relis les messages pour vérifier que tout va toujours bien entre la personne et moi.",
    "Quand la conversation porte sur les sentiments, j’ai tendance à répondre par quelque chose de pratique ou par une blague au lieu de dire ce que je ressens.",
    "Quand un ami annule un rendez-vous à la dernière minute, j’accepte son explication et je ne rumine pas.",
    "Je suis mal à l’aise quand quelqu’un se met à compter sur moi pour gérer ses propres émotions.",
    "Quand je vois une personne que j’aime beaucoup tout enthousiaste en compagnie de quelqu’un d’autre, j’ai un pincement au cœur, comme si j’allais passer au second plan.",
    "Quand quelque chose d’important m’arrive, en bien ou en mal, j’ai tout de suite envie de le raconter à un proche."
  ],
  "dims": {
    "anxiety": {
      "label": "Anxiété relationnelle",
      "desc": "Mesure à quel point vous vous inquiétez de la stabilité de vos relations proches et de la possibilité de perdre l’affection ou l’attention des autres.",
      "high": "Vous prêtez souvent beaucoup d’attention aux signes de distance et vous pouvez vous sentir en insécurité quand quelqu’un tarde à répondre ou semble différent. Cette sensibilité montre à quel point vos liens comptent et vous aide à percevoir les changements dans vos relations. À surveiller : l’usure, car interpréter des signes neutres comme un rejet peut faire souffrir et entraîner des reproches qui finissent par éloigner les autres.",
      "low": "Vous avez tendance à faire confiance à la solidité de vos relations, même en cas de silence, de distance ou de petits désaccords. Cela apporte de la sérénité et laisse à chacun l’espace de vivre sa propre vie. À surveiller : ne pas passer à côté des moments où quelque chose a vraiment changé et mérite une discussion.",
      "tips": [
        "Quand l’insécurité monte, distinguez le fait (la personne n’a pas répondu) de l’interprétation (elle m’en veut) avant d’agir.",
        "Au lieu de chercher des garanties de façon indirecte, dites calmement ce que vous ressentez et ce dont vous avez besoin.",
        "Cultivez des centres d’intérêt et des amitiés variés, pour que votre sérénité ne dépende pas d’une seule relation."
      ]
    },
    "avoidance": {
      "label": "Évitement de la proximité",
      "desc": "Mesure à quel point vous préférez garder une distance émotionnelle, plutôt que de vous confier, de demander du soutien et de laisser les autres compter sur vous.",
      "high": "Vous tenez à votre indépendance et avez tendance à régler les choses par vous-même, en gardant pour vous une partie de ce que vous ressentez. Cela vous apporte de l’autonomie et la capacité de garder votre calme dans les situations difficiles. À surveiller : vos proches peuvent avoir l’impression de ne pas réussir à se rapprocher de vous, et vous risquez de manquer de soutien justement quand vous en auriez le plus besoin.",
      "low": "Vous êtes à l’aise pour vous confier, demander de l’aide et accueillir ceux qui se rapprochent de vous. Cela favorise des relations de confiance, où chacun se sent vu et soutenu. À surveiller : vous rappeler que tout le monde n’a pas le même rythme pour s’ouvrir, et respecter ceux qui ont besoin de plus d’espace.",
      "tips": [
        "Essayez de confier une petite chose sur la façon dont vous allez à une personne de confiance, et observez sa réaction.",
        "Quand vous avez envie de prendre vos distances, essayez d’identifier ce qui a posé problème exactement, au lieu de simplement disparaître.",
        "Si vous avez besoin d’espace, prévenez la personne au lieu de vous éloigner en silence : cela protège la relation et votre temps."
      ]
    }
  },
  "bands": {
    "secure": {
      "label": "Sécure",
      "text": "Vous avez tendance à être à l’aise avec la proximité tout en ayant confiance dans le fait que vos relations tiennent, même avec de la distance ou des désaccords. Cela facilite généralement les conversations sincères, les demandes de soutien et la résolution des conflits sans peur excessive. Avoir ce style ne veut pas dire ne jamais ressentir d’insécurité, et il peut aussi varier selon la période de la vie et la relation."
    },
    "anxious": {
      "label": "Anxieux",
      "text": "Vos liens comptent énormément pour vous et vous percevez vite le moindre signe de distance, ce qui peut faire naître la peur de perdre l’affection des autres. Cette sensibilité montre aussi votre dévouement et votre capacité à vous investir vraiment dans vos relations. Avec le temps, des conversations claires et des relations dans lesquelles vous trouvez de la sécurité peuvent rendre cette inquiétude beaucoup plus légère."
    },
    "avoidant": {
      "label": "Évitant",
      "text": "Vous avez tendance à valoriser l’indépendance et à vous sentir plus à l’aise en réglant les choses par vous-même qu’en partageant ce que vous ressentez. Cela vous apporte autonomie et sérénité dans bien des situations, mais vos proches peuvent avoir l’impression de ne pas réussir à se rapprocher de vous. Cette façon d’être a souvent de bonnes raisons d’exister, et des relations qui respectent votre rythme peuvent rendre la proximité plus confortable, petit à petit."
    },
    "fearful": {
      "label": "Anxieux-évitant",
      "text": "Vous pouvez désirer très fort la proximité tout en la redoutant, et alterner entre aller vers les autres et garder vos distances. Ce mouvement est souvent une façon compréhensible de vous protéger des déceptions, et il montre à quel point les liens comptent pour vous. Avec le temps, des relations stables et bienveillantes aident à se rapprocher avec moins de peur, et parler à un professionnel peut aussi vous accompagner sur ce chemin."
    }
  },
  "resultTitle": "Votre style d’attachement",
  "resultIntro": "Votre résultat combine deux dimensions : l’anxiété relationnelle et votre degré d’évitement de la proximité. Ensemble, elles indiquent le style qui ressort le plus aujourd’hui dans vos relations proches. Aucun style n’est meilleur ou pire qu’un autre, et tous peuvent évoluer avec le temps et l’expérience de relations sécurisantes.",
  "note": "Ce résultat est un outil de connaissance de soi fondé sur vos propres réponses. Ce n’est pas un diagnostic et il ne remplace pas l’évaluation d’un psychologue. La façon de s’attacher peut varier d’une relation à l’autre et évolue souvent au fil de la vie.",
  "help": "Si vos schémas relationnels vous font souffrir, par exemple une peur constante de perdre les autres ou une difficulté à vous rapprocher des personnes que vous aimez, en parler à un psychologue peut vous aider. La thérapie est un espace sûr pour comprendre d’où viennent ces schémas et expérimenter, petit à petit, de nouvelles façons d’être en relation."
};

export default t;
