import type { TestText } from '../../schema';

// confidence — French translation of pt.ts
const t: TestText = {
  "title": "Confiance en soi",
  "desc": "Découvrez où en est votre confiance en soi dans quatre domaines : l’estime de soi, la confiance en vos capacités, le rebond après les erreurs et l’affirmation de soi.",
  "intro": "Ce questionnaire montre comment vous vous sentez et agissez habituellement dans des situations du quotidien qui demandent de la confiance en soi. Il comporte 16 affirmations décrivant des scènes courantes, comme recevoir un compliment, aborder une tâche nouvelle ou refuser une demande. Pour chacune, indiquez dans quelle mesure elle vous décrit aujourd’hui, en pensant aux derniers mois, et non la personne que vous aimeriez être. Si vous n’avez jamais vécu exactement cette situation, répondez en pensant à votre façon habituelle de réagir dans des cas similaires. Il n’y a pas de bonnes ou de mauvaises réponses.",
  "scale": [
    "Pas du tout d’accord",
    "Pas d’accord",
    "Neutre",
    "D’accord",
    "Tout à fait d’accord"
  ],
  "items": [
    "Quand quelqu’un me complimente sur ce que j’ai fait, j’arrive à remercier sans minimiser mon mérite.",
    "Quand on me confie une tâche que je n’ai jamais faite, je crois que je vais réussir à apprendre en cours de route.",
    "Après une critique sévère au travail ou dans mes études, je me reconcentre rapidement sur ce que j’ai à faire.",
    "Quand on m’apporte le mauvais plat au restaurant, je demande calmement qu’on le change.",
    "Après avoir vu les réussites de mes connaissances sur les réseaux sociaux, j’ai l’impression de valoir moins qu’elles.",
    "Face à un problème pratique à la maison, comme un appareil qui ne fonctionne plus, j’ai confiance en ma capacité à trouver une solution.",
    "Quand un projet échoue, comme un entretien d’embauche qui ne s’est pas bien passé, j’arrive à en tirer une leçon et à réessayer.",
    "Quand quelqu’un me demande un service à un moment où je manque de temps, je finis par accepter même si j’ai envie de dire non.",
    "Les jours où je n’ai presque rien fait de ce que j’avais prévu, je continue à me traiter avec respect et bienveillance.",
    "Avant une présentation ou un examen, j’ai souvent l’impression que je ne vais pas y arriver, même après une bonne préparation.",
    "Quand on me dit non pour une demande importante, comme une proposition ou une invitation, j’arrive à me reprendre rapidement.",
    "En réunion ou dans une discussion de groupe, je dis quand je ne suis pas d’accord, même si la majorité pense autrement.",
    "Quand je me regarde dans le miroir le matin, j’accepte généralement la personne que je suis, avec ses qualités et ses défauts.",
    "Quand je dois prendre une décision importante, comme changer d’emploi ou de ville, je fais confiance à mon propre jugement.",
    "Quand j’oublie un engagement ou que je déçois quelqu’un, je rumine pendant plusieurs jours.",
    "Si quelqu’un me passe devant dans une file d’attente, je le lui fais remarquer poliment."
  ],
  "dims": {
    "selfWorth": {
      "label": "Estime de soi",
      "desc": "Mesure à quel point vous vous valorisez et vous respectez, indépendamment des résultats, des compliments ou des comparaisons avec les autres.",
      "high": "Vous avez tendance à vous traiter avec respect et à reconnaître votre valeur, même les mauvais jours ou face aux réussites des autres. Cela vous apporte de la stabilité et réduit votre dépendance à l’approbation d’autrui. À surveiller : une image de soi très positive peut cacher des angles morts, c’est pourquoi il vaut la peine de continuer à écouter avec ouverture les personnes qui vous côtoient.",
      "low": "Vous avez tendance à mesurer votre valeur à vos résultats, à l’opinion des autres ou aux comparaisons, et cela pèse davantage les jours difficiles. Ce regard critique va souvent de pair avec de l’humilité et l’envie de progresser. À surveiller : l’usure, car se traiter durement en permanence épuise et vous empêche de reconnaître ce que vous faites déjà bien.",
      "tips": [
        "En fin de journée, notez une chose que vous avez bien faite, aussi petite soit-elle.",
        "Quand on vous fait un compliment, répondez simplement par un merci, sans vous justifier ni minimiser ce que vous avez fait.",
        "Remarquez les moments où vous vous comparez aux autres sur les réseaux sociaux et rappelez-vous qu’on n’y voit qu’une partie de la vie des gens."
      ]
    },
    "capability": {
      "label": "Confiance en ses capacités",
      "desc": "Mesure à quel point vous croyez pouvoir apprendre, résoudre des problèmes et relever de nouveaux défis.",
      "high": "Vous abordez généralement les tâches nouvelles et les décisions difficiles avec le sentiment que vous trouverez une solution. Cela vous aide à prendre des initiatives et à ne pas vous bloquer face à l’inconnu. À surveiller : surestimer ce que vous pouvez faire sans aide ou dans les délais, et ne plus demander d’aide ni écouter ceux qui ont plus d’expérience sur le sujet.",
      "low": "Vous avez tendance à douter de vos capacités, même avec une bonne préparation ou de l’expérience dans le domaine. Cette prudence peut mener à une préparation soignée et à moins de décisions impulsives. À surveiller : renoncer à essayer des choses dont vous seriez capable et laisser passer des occasions parce que vous pensez que ce n’est pas encore le moment.",
      "tips": [
        "Avant un défi, rappelez-vous deux ou trois situations semblables que vous avez bien gérées.",
        "Découpez une tâche nouvelle en petites étapes et remarquez chaque étape franchie.",
        "Demandez l’avis d’une personne de confiance sur vos projets : cela aide à corriger aussi bien l’excès que le manque de confiance."
      ]
    },
    "resilience": {
      "label": "Rebond après les erreurs",
      "desc": "Mesure la rapidité et la manière dont vous vous remettez des échecs, des critiques et des refus.",
      "high": "Vous vous remettez généralement vite d’une erreur, d’une critique ou d’un refus, et vous repassez à l’action sans ressasser le passé. Cela vous permet de prendre plus de risques et d’apprendre de l’expérience. À surveiller : tourner la page trop vite, sans prendre le temps de comprendre ce qui a mené à l’erreur ou comment elle a affecté d’autres personnes.",
      "low": "Les erreurs et les critiques vous restent souvent longtemps en tête, et il vous arrive fréquemment de repasser mentalement ce qui n’a pas marché. Cela montre que vous prenez les choses au sérieux et que les conséquences comptent pour vous. À surveiller : le moment où ressasser l’erreur prend la place de sa correction et vous pousse à éviter de nouvelles tentatives.",
      "tips": [
        "Après une erreur, écrivez en une phrase ce qui s’est passé et dans une autre ce que vous feriez différemment, puis considérez le sujet comme clos.",
        "Parlez-vous comme vous parleriez à une personne qui vous est chère et qui aurait commis la même erreur.",
        "Accordez-vous un délai pour la frustration, par exemple le reste de la journée, puis passez à la tâche suivante."
      ]
    },
    "assertiveness": {
      "label": "Affirmation de soi",
      "desc": "Mesure à quel point vous exprimez vos opinions, vos besoins et vos limites de façon claire et respectueuse.",
      "high": "Vous dites généralement ce que vous pensez, demandez ce dont vous avez besoin et posez vos limites sans détour. Cela évite les malentendus et permet aux autres de savoir clairement à quoi s’attendre avec vous. À surveiller : parler avec trop de fermeté et laisser peu de place aux autres avis, surtout quand votre opinion est déjà faite.",
      "low": "Vous avez tendance à éviter les conflits, à accepter des demandes même quand vous n’en avez pas envie et à garder vos opinions pour vous afin de préserver une bonne ambiance. Cela montre votre attention aux autres et facilite la vie en commun. À surveiller : accumuler les frustrations et laisser vos propres besoins toujours au second plan.",
      "tips": [
        "Commencez par de petites situations, comme demander qu’on remplace une commande erronée ou dire quel restaurant vous préférez.",
        "Utilisez des phrases qui commencent par « je », comme « je préfère » ou « là, je ne peux pas », au lieu d’accuser ou de trop vous justifier.",
        "Après avoir donné votre position, demandez à l’autre personne ce qu’elle en pense : la fermeté et l’écoute fonctionnent mieux ensemble."
      ]
    }
  },
  "resultTitle": "Votre profil de confiance en soi",
  "resultIntro": "Chaque barre montre votre résultat dans l’un des quatre domaines de la confiance en soi. Un score plus élevé indique plus d’assurance dans ce domaine, mais une confiance élevée n’est pas synonyme de justesse : ce qui aide le plus au quotidien, c’est l’équilibre entre croire en soi et continuer à écouter d’autres avis.",
  "note": "Ce résultat est un outil de connaissance de soi fondé sur vos propres réponses. Ce n’est pas une évaluation professionnelle et il ne remplace pas un échange avec un psychologue. La confiance en soi évolue avec le temps, les expériences et le contexte, et elle peut se développer avec la pratique."
};

export default t;
