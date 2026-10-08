// burnout — French translation of pt.ts
import type { TestText } from '../../schema';

const t: TestText = {
  "title": "Niveau de burn-out",
  "desc": "Voyez si le travail vous prive d’énergie, vous éloigne de ce que vous faites ou vous donne l’impression que vos efforts ne servent à rien.",
  "intro": "Le burn-out est une usure liée au travail qui se manifeste généralement sur trois plans : l’épuisement, la prise de distance avec le travail et la perte du sentiment d’accomplissement. Ce questionnaire comporte 15 affirmations portant sur les trois derniers mois. Pour chacune, indiquez à quelle fréquence elle vous est arrivée pendant cette période. Si vous n’avez pas d’emploi salarié, pensez à votre activité principale, comme vos études, votre propre entreprise ou le fait de prendre soin de quelqu’un. Certaines affirmations décrivent des situations positives : répondez-y de la même façon, en pensant seulement à la fréquence. Il s’agit d’une auto-évaluation fondée sur vos réponses, et non d’un diagnostic.",
  "scale": [
    "Jamais",
    "Rarement",
    "Parfois",
    "Souvent",
    "Toujours"
  ],
  "items": [
    "Après le travail, je n’avais d’énergie que pour rester sur le canapé ou faire défiler mon téléphone.",
    "J’ai fait le strict minimum au travail, sans vraiment m’impliquer dans mes tâches.",
    "J’ai terminé ma journée de travail avec le sentiment que mes efforts avaient donné un résultat.",
    "La veille de la reprise du travail, j’ai ressenti un poids rien qu’en pensant à ce qui m’attendait.",
    "J’ai traité mes collègues, mes clients ou les personnes dont je m’occupe avec plus de froideur ou d’impatience que je ne l’aurais voulu.",
    "Face à un problème au travail, j’ai fait confiance à ma capacité à trouver une solution.",
    "Même après des jours de repos ou des vacances, la fatigue est revenue dès les premiers jours de travail.",
    "J’ai eu l’impression que cela ne changeait rien que je fasse bien ou mal mon travail.",
    "J’ai appris quelque chose de nouveau ou progressé dans un aspect de mon travail.",
    "Il m’a fallu un effort énorme juste pour arriver au bout de ma journée de travail.",
    "J’ai compté les heures jusqu’à la fin de la journée de travail.",
    "J’ai remarqué que mon travail avait aidé quelqu’un, que ce soit un collègue, un client ou l’équipe.",
    "J’ai mis de côté mes amis, ma famille ou des activités que j’aime parce que le travail me laissait sans énergie.",
    "J’ai évité les messages, les réunions ou les conversations liés au travail chaque fois que je le pouvais.",
    "J’ai ressenti de la fierté pour quelque chose que j’ai fait au travail."
  ],
  "dims": {
    "exhaustion": {
      "label": "Épuisement",
      "desc": "Mesure la fatigue physique et mentale liée au travail, celle qui ne disparaît pas après une nuit de sommeil ou un week-end de repos.",
      "high": "Le travail vous prend plus d’énergie que vous n’arrivez à en récupérer. La fatigue ne se limite pas aux heures de travail : elle vous suit à la maison, pendant vos jours de repos et dans vos relations. C’est souvent le premier signe que le rythme actuel n’est pas tenable.",
      "low": "Vous arrivez à récupérer votre énergie d’une journée de travail à l’autre. La fatigue est là, comme dans tout quotidien, mais elle ne semble pas s’accumuler. Continuez à protéger vos moments de repos.",
      "tips": [
        "Fixez une heure de fin de journée et créez un petit rituel de départ, comme fermer l’ordinateur et aller faire un tour.",
        "Protégez votre sommeil et prenez le temps de bouger, même s’il ne s’agit que de courtes marches.",
        "Profitez de vos jours de repos pour vraiment vous reposer, sans consulter vos messages professionnels."
      ]
    },
    "detachment": {
      "label": "Distance vis-à-vis du travail",
      "desc": "Mesure à quel point vous prenez de la distance avec le travail et les personnes qui y sont liées, avec moins d’implication, plus de froideur ou le sentiment que rien n’a d’importance.",
      "high": "Vous avez envie de prendre vos distances avec le travail et les personnes qui y sont liées, en faisant le minimum et en perdant l’intérêt pour ce qui comptait auparavant. Souvent, cette distance est une façon de vous protéger de l’usure, et non un manque de caractère ou d’engagement. Il est utile de comprendre ce qui a conduit à cette situation et ce qui pourrait changer.",
      "low": "Vous continuez à vous impliquer dans votre travail et auprès des personnes qui y sont liées. Même les jours difficiles, il semble garder un sens pour vous. Ce lien aide à vous protéger de l’usure.",
      "tips": [
        "Rappelez-vous les raisons pour lesquelles vous avez choisi ce travail et cherchez des tâches qui s’en rapprochent.",
        "Parlez avec vos responsables ou vos collègues de ce qui fait perdre son sens à votre travail, comme des objectifs irréalistes ou un manque d’autonomie.",
        "Cultivez des relations de soutien au travail : une conversation sincère avec un collègue de confiance peut beaucoup soulager."
      ]
    },
    "efficacy": {
      "label": "Faible accomplissement",
      "desc": "Mesure à quel point il vous manque le sentiment que votre travail porte ses fruits, que vous êtes capable et que vous progressez. Les affirmations de cette partie sont positives : le score augmente donc quand elles se sont peu produites.",
      "high": "Vous avez rarement eu le sentiment que vos efforts portent leurs fruits, que vous êtes capable ou que votre travail fait une différence. Ce sentiment peut venir de la fatigue elle-même, qui déforme la façon dont vous percevez vos performances, ou d’un environnement où la reconnaissance est rare. Il ne mesure pas votre valeur professionnelle.",
      "low": "Vous continuez à percevoir que votre travail donne des résultats, que vous êtes capable de résoudre des problèmes et que vous apprenez. Ce sentiment d’accomplissement aide à garder la motivation, même dans les périodes les plus intenses.",
      "tips": [
        "En fin de semaine, notez trois choses que vous avez terminées ou résolues, aussi petites soient-elles.",
        "Demandez à une personne de confiance un retour sur votre travail, pour avoir une vision plus équilibrée de vos performances.",
        "Cherchez un petit défi ou un nouvel apprentissage qui vous redonne le sentiment de progresser."
      ]
    }
  },
  "bands": {
    "low": {
      "label": "Peu de signes de burn-out",
      "text": "Vos réponses indiquent peu de signes de burn-out. Vous semblez garder de l’énergie, de l’implication et un sentiment d’accomplissement au travail, malgré les difficultés normales du quotidien. Continuez à prendre soin des limites et des habitudes qui vous aident à garder cet équilibre."
    },
    "moderate": {
      "label": "Signes modérés de burn-out",
      "text": "Vos réponses indiquent quelques signes d’usure liés au travail. C’est un bon moment pour agir, avant que la fatigue ne s’accumule. Observez ce qui pèse le plus, essayez les suggestions ci-dessous et, si possible, parlez avec vos responsables d’ajustements dans votre quotidien de travail."
    },
    "high": {
      "label": "Signes marqués de burn-out",
      "text": "Vos réponses indiquent des signes marqués de burn-out, comme une grande fatigue, une distance vis-à-vis du travail et un faible sentiment d’accomplissement. Cette usure demande généralement de vrais changements dans le quotidien, et pas seulement plus de volonté. Adressez-vous à un professionnel, comme un psychologue ou un médecin, pour faire le point sur votre état et sur les pistes qui ont du sens dans votre situation."
    }
  },
  "resultTitle": "Votre niveau de burn-out",
  "resultIntro": "Le résultat additionne vos réponses sur les trois derniers mois. Pour les affirmations sur l’accomplissement, le calcul est inversé : moins vous avez ressenti d’accomplissement, plus le résultat augmente. Ci-dessous, vous voyez le niveau dans lequel vous vous situez et votre score pour chaque partie.",
  "note": "Ce questionnaire est un outil de connaissance de soi, fondé sur votre propre perception. Le burn-out est une usure liée au travail et n’est pas, en soi, un diagnostic médical. Des signes semblables apparaissent aussi dans la dépression, l’anxiété et certains problèmes de santé physique, et seul un professionnel qualifié peut faire cette évaluation.",
  "help": "Si le travail affecte votre santé, adressez-vous à un psychologue ou à votre médecin. Les services de santé de votre région peuvent aussi vous accompagner et, si nécessaire, vous orienter vers des services spécialisés en santé mentale. Si votre employeur dispose d’un service de santé au travail ou d’un programme d’aide aux salariés, il peut également vous aider. Si vous traversez une souffrance intense, contactez une ligne d’écoute ou de soutien émotionnel de votre pays. En cas d’urgence, appelez le numéro d’urgence local."
};

export default t;
