import type { TestText } from '../../schema';

// time — French translation of pt.ts
const t: TestText = {
  "title": "Gestion du temps",
  "desc": "Voyez comment vous fixez vos priorités, planifiez, protégez votre concentration et équilibrez travail et repos.",
  "intro": "Ce questionnaire évalue quatre habitudes liées à la gestion du temps : fixer des priorités, planifier, garder sa concentration, et respecter ses limites et ses moments de repos. Il comporte 16 affirmations. Pour chacune, indiquez dans quelle mesure elle décrit votre routine actuelle, que ce soit au travail, dans vos études ou à la maison. Il n’y a pas de bonnes réponses : l’objectif est de repérer les points qui peuvent le plus améliorer votre quotidien.",
  "scale": [
    "Pas du tout d’accord",
    "Pas d’accord",
    "Neutre",
    "D’accord",
    "Tout à fait d’accord"
  ],
  "items": [
    "Je sais quelles sont les tâches les plus importantes de ma semaine.",
    "Je prends quelques minutes pour planifier ma journée ou ma semaine.",
    "J’arrive à travailler sur une tâche pendant un bon moment sans m’interrompre.",
    "J’arrive à refuser des demandes quand elles empiètent sur les engagements que j’ai déjà pris.",
    "Je fais la différence entre ce qui est urgent et ce qui est vraiment important.",
    "Souvent, je découvre au dernier moment que j’ai quelque chose d’important à rendre.",
    "Je coupe les notifications quand j’ai besoin de me concentrer.",
    "Je fais des pauses dans la journée pour me reposer, même quand il y a beaucoup de travail.",
    "Je passe une bonne partie de la journée à régler de petites demandes et je laisse de côté ce qui compte le plus.",
    "Je note les échéances et les rendez-vous dès que j’en ai connaissance.",
    "Je fais une chose à la fois, au lieu d’essayer d’en faire plusieurs en même temps.",
    "Je réponds à des messages liés au travail ou aux études le soir, le week-end ou pendant les vacances.",
    "Avant d’accepter une nouvelle tâche, je me demande si elle est plus importante que ce que je fais déjà.",
    "Quand je fais des plans, je prévois une marge de temps pour les imprévus.",
    "J’interromps ce que je fais chaque fois qu’un message ou une demande arrive.",
    "J’ai une heure pour terminer ma journée de travail et je la respecte généralement."
  ],
  "dims": {
    "priorities": {
      "label": "Priorités",
      "desc": "Savoir ce qui est le plus important et y consacrer votre temps avant ce qui est seulement urgent ou facile.",
      "high": "Vous savez généralement ce qui compte vraiment et vous consacrez vos meilleurs moments à ces tâches. Ainsi, vos efforts produisent des résultats qui font la différence. À surveiller : la rigidité, car une demande inattendue mérite parfois votre attention, même si elle sort du plan.",
      "low": "Vous avez tendance à répondre à ce qui arrive en premier et vous vous montrez disponible pour différentes demandes. Cela vous rend souple et fait de vous une personne sur qui les autres peuvent compter. À surveiller : arriver en fin de journée avec beaucoup de travail accompli et peu d’avancées sur ce qui compte le plus.",
      "tips": [
        "Au début de chaque journée, choisissez les trois tâches les plus importantes et commencez par l’une d’elles.",
        "Avant d’accepter une nouvelle demande, demandez-vous si elle est plus importante que ce que vous faites déjà.",
        "Réservez le moment où vous avez le plus d’énergie à la tâche la plus importante de la journée."
      ]
    },
    "planning": {
      "label": "Planification",
      "desc": "Organiser la journée et la semaine à l’avance, suivre les échéances et prévoir le temps de chaque tâche.",
      "high": "Vous planifiez généralement à l’avance, notez vos engagements et prévoyez le temps que prendront les choses. Cela réduit les imprévus et apporte de la sérénité. À surveiller : passer trop de temps à planifier ou ressentir de la frustration quand la journée ne se déroule pas comme prévu.",
      "low": "Vous avez tendance à décider quoi faire au fil de la journée, ce qui vous apporte de la spontanéité et une capacité d’improvisation. À surveiller : les surprises, comme des échéances découvertes tard et des tâches qui prennent plus de temps que vous ne l’imaginiez.",
      "tips": [
        "Réservez dix minutes au début de chaque semaine pour planifier les jours à venir.",
        "Notez chaque échéance ou rendez-vous dans votre agenda dès que vous en avez connaissance.",
        "Quand vous planifiez votre journée, gardez environ un tiers du temps libre pour les imprévus."
      ]
    },
    "focus": {
      "label": "Concentration",
      "desc": "Garder votre attention sur une seule tâche à la fois et protéger votre temps des interruptions.",
      "high": "Vous arrivez à vous concentrer longtemps sur une tâche et vous protégez votre travail des interruptions. Cela améliore la qualité et la rapidité de ce que vous faites. À surveiller : rester trop longtemps sans répondre et retarder les personnes qui attendent un retour de votre part.",
      "low": "Vous répondez vite aux messages et aux demandes, et vous suivez plusieurs choses à la fois. Cela fait de vous une personne accessible et réactive. À surveiller : passer sans cesse d’une tâche à l’autre fatigue et fait que chacune prend plus de temps qu’avec une attention complète.",
      "tips": [
        "Bloquez dans votre agenda des plages de 60 à 90 minutes pour un travail concentré.",
        "Coupez les notifications et fixez deux ou trois moments dans la journée pour consulter vos messages.",
        "Terminez une tâche, ou une partie bien définie de celle-ci, avant d’en commencer une autre."
      ]
    },
    "boundaries": {
      "label": "Limites et repos",
      "desc": "Dire non quand c’est nécessaire, faire des pauses et séparer le temps de travail du temps de repos.",
      "high": "Vous arrivez à refuser les demandes qui compromettent vos priorités et vous protégez vos moments de pause. Cela préserve votre énergie et votre santé sur le long terme. À surveiller : sembler peu disponible au moment où le groupe a vraiment besoin d’un effort supplémentaire.",
      "low": "Vous êtes généralement disponible et vous dites rarement non, ce qui fait que les gens comptent beaucoup sur vous. À surveiller : la fatigue accumulée, car sans pauses ni limites, l’énergie et la qualité du travail diminuent avec le temps.",
      "tips": [
        "Fixez une heure de fin de journée et désactivez les notifications une fois cette heure passée.",
        "Faites une courte pause toutes les une ou deux heures pour vous lever, boire de l’eau et reposer vos yeux.",
        "Pour refuser une demande, utilisez une phrase simple, comme « Là, je ne peux pas, mais je peux donner un coup de main jeudi »."
      ]
    }
  },
  "resultTitle": "Votre profil de gestion du temps",
  "resultIntro": "Voici votre score pour chaque habitude. Un score plus élevé indique des pratiques mieux ancrées, mais même celles-ci ont leurs points de vigilance. Choisissez une ou deux habitudes à travailler à la fois.",
  "note": "Ce résultat est un outil de connaissance de soi fondé sur vos propres réponses et ne constitue pas une évaluation professionnelle. Si la fatigue ou la surcharge sont fréquentes, il peut être utile d’en parler à votre hiérarchie ou à un professionnel de santé."
};

export default t;
