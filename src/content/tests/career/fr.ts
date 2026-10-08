import type { TestText } from '../../schema';

const t: TestText = {
  "title": "Intérêts professionnels",
  "desc": "Découvrez les types d’activités qui vous correspondent le mieux et des métiers liés à vos centres d’intérêt.",
  "intro": "Ce questionnaire s’appuie sur le modèle de Holland, qui classe les intérêts professionnels en six types : pratique, investigateur, artistique, social, entreprenant et organisé. Il comporte 36 activités. Pour chacune, indiquez à quel point vous aimeriez la pratiquer, sans penser au salaire, aux études nécessaires ni au fait de savoir déjà la faire. Il n’y a pas de bonnes réponses : l’objectif est de repérer ce qui éveille votre intérêt.",
  "scale": [
    "Pas du tout d’accord",
    "Pas d’accord",
    "Neutre",
    "D’accord",
    "Tout à fait d’accord"
  ],
  "items": [
    "J’aimerais découvrir pourquoi un appareil ne fonctionne plus et le réparer.",
    "J’aimerais mener des expériences pour vérifier si une idée fonctionne en pratique.",
    "J’aimerais écrire des histoires, des scénarios ou des paroles de chansons.",
    "J’aimerais enseigner quelque chose de nouveau à un groupe de personnes.",
    "J’aimerais créer et gérer ma propre entreprise.",
    "J’aimerais organiser des tableaux, des dossiers et des registres pour que tout soit facile à retrouver.",
    "J’aimerais construire ou assembler des choses de mes propres mains.",
    "J’aimerais analyser des données pour trouver la cause d’un problème.",
    "J’aimerais créer l’identité visuelle d’une marque, comme le logo et les couleurs.",
    "J’aimerais écouter et conseiller des personnes qui traversent une période difficile.",
    "J’aimerais négocier avec des clients et conclure des ventes.",
    "J’aimerais suivre les factures à payer et les paiements à recevoir d’une entreprise.",
    "J’aimerais travailler en plein air, par exemple sur des chantiers, dans des fermes ou dans des parcs.",
    "J’aimerais étudier le fonctionnement du corps humain et des autres êtres vivants.",
    "J’aimerais me produire sur scène, en chantant, en jouant d’un instrument ou en jouant la comédie.",
    "J’aimerais prendre soin de la santé et du bien-être des autres.",
    "J’aimerais diriger une équipe pour atteindre un objectif.",
    "J’aimerais relire des documents avec attention pour m’assurer qu’ils ne contiennent pas d’erreurs.",
    "J’aimerais utiliser des machines, des véhicules ou des outils de précision.",
    "J’aimerais comprendre en profondeur le fonctionnement d’une nouvelle technologie.",
    "J’aimerais photographier ou filmer, puis monter les images.",
    "J’aimerais accompagner et soutenir le développement d’enfants ou de jeunes.",
    "J’aimerais présenter une idée pour convaincre des investisseurs ou la direction d’une entreprise.",
    "J’aimerais gérer les stocks, les commandes et les délais de livraison.",
    "J’aimerais m’occuper de plantes ou d’animaux au quotidien.",
    "J’aimerais lire des études scientifiques et en tirer mes propres conclusions.",
    "J’aimerais dessiner des vêtements, des objets ou la décoration d’intérieurs.",
    "J’aimerais aider des personnes à résoudre leurs conflits et à mieux se comprendre.",
    "J’aimerais élaborer des stratégies pour développer un produit sur son marché.",
    "J’aimerais vérifier qu’une entreprise respecte les normes et la loi.",
    "J’aimerais réaliser l’installation électrique ou la plomberie d’un logement.",
    "J’aimerais résoudre des problèmes complexes de mathématiques ou de logique.",
    "J’aimerais trouver des idées originales pour une campagne ou un projet créatif.",
    "J’aimerais participer à des projets utiles aux habitants de ma ville ou de mon quartier.",
    "J’aimerais prendre des décisions importantes, même si elles comportent des risques.",
    "J’aimerais organiser l’agenda et le fonctionnement quotidien d’un bureau."
  ],
  "dims": {
    "realistic": {
      "label": "Pratique",
      "desc": "Intérêt pour les activités concrètes : travailler de ses mains, utiliser des outils et des machines, construire, réparer et travailler en plein air.",
      "high": "Vous aimez voir des résultats concrets et résoudre les problèmes de vos propres mains. Les environnements où les tâches sont claires et pratiques ont tendance à vous motiver. Gardez en tête que beaucoup de ces métiers demandent aussi une formation technique et une mise à jour régulière des connaissances.",
      "low": "Les activités manuelles, mécaniques ou en plein air éveillent moins votre intérêt. Vous êtes probablement plus à l’aise avec les idées, les personnes ou les informations. Quelques compétences pratiques de base restent toutefois utiles dans tous les domaines.",
      "tips": [
        "Suivez une courte formation à une compétence manuelle ou technique pour tester votre intérêt.",
        "Demandez à des professionnels du domaine à quoi ressemble vraiment leur quotidien au travail.",
        "Pensez aux formations techniques et professionnelles, qui sont souvent une porte d’entrée rapide vers ces métiers."
      ],
      "examples": [
        "Génie civil",
        "Génie mécanique",
        "Électricité du bâtiment",
        "Agronomie",
        "Pilote de ligne",
        "Cuisine et restauration",
        "Menuiserie",
        "Maintenance industrielle"
      ]
    },
    "investigative": {
      "label": "Investigateur",
      "desc": "Intérêt pour l’observation, la recherche, l’analyse et la compréhension du fonctionnement des choses, que ce soit en science, en technologie ou en santé.",
      "high": "Vous aimez les questions difficiles, chercher les causes et comprendre les choses en profondeur. Les environnements qui valorisent le raisonnement et l’autonomie ont tendance à vous motiver. À surveiller : vous perdre dans l’analyse et tarder à passer à l’action.",
      "low": "La recherche, l’analyse de données et les théories éveillent moins votre intérêt. Vous préférez probablement appliquer des solutions plutôt qu’étudier un problème pendant longtemps. Savoir trouver des informations fiables reste toutefois utile dans tous les métiers.",
      "tips": [
        "Suivez des contenus de vulgarisation scientifique sur des sujets qui vous intéressent.",
        "Participez à un projet de recherche, à un concours scientifique ou à un cours en ligne.",
        "Essayez d’analyser de vraies données dans un tableur pour voir si ce type de tâche vous plaît."
      ],
      "examples": [
        "Médecine",
        "Biologie",
        "Science des données",
        "Chimie",
        "Pharmacie",
        "Développement logiciel",
        "Recherche scientifique",
        "Géologie"
      ]
    },
    "artistic": {
      "label": "Artistique",
      "desc": "Intérêt pour la création, l’expression personnelle et les idées originales, que ce soit avec des images, des mots, de la musique, le mouvement ou le design.",
      "high": "Vous aimez créer, imaginer et donner forme à vos propres idées. Les environnements qui offrent de la liberté, de la variété et de la place pour l’originalité ont tendance à vous motiver. À surveiller : composer avec les délais, les règles et les aspects répétitifs que comporte aussi tout travail créatif.",
      "low": "Les activités artistiques et d’expression personnelle éveillent moins votre intérêt. Vous préférez probablement des objectifs clairs et des résultats plus prévisibles. La créativité se manifeste pourtant aussi dans la façon de résoudre les problèmes, dans tous les domaines.",
      "tips": [
        "Constituez un portfolio simple avec vos réalisations, même s’il s’agit de projets personnels.",
        "Participez à un court atelier dans un domaine créatif que vous ne connaissez pas encore.",
        "Renseignez-vous sur la façon dont les professionnels créatifs associent l’art à d’autres compétences, comme la technologie ou le commerce."
      ],
      "examples": [
        "Design graphique",
        "Architecture",
        "Publicité",
        "Photographie",
        "Musique",
        "Arts du spectacle",
        "Stylisme et mode",
        "Production audiovisuelle"
      ]
    },
    "social": {
      "label": "Social",
      "desc": "Intérêt pour aider, enseigner, soigner et conseiller les autres, en contribuant à leur bien-être et à leur développement.",
      "high": "Ce qui vous motive, c’est que votre travail fasse une différence dans la vie des autres. Écouter, enseigner et prendre soin des autres donne du sens à vos journées. À surveiller : vous surcharger avec les problèmes des autres et oublier de prendre soin de vous.",
      "low": "Les activités centrées sur le soin, l’enseignement ou le conseil éveillent moins votre intérêt. Vous préférez probablement travailler avec des tâches, des objets, des données ou des idées. Savoir collaborer reste toutefois important dans presque tous les métiers.",
      "tips": [
        "Faites du bénévolat pour une cause qui compte pour vous et observez ce que vous ressentez.",
        "Essayez d’expliquer à d’autres quelque chose que vous savez, par exemple en faisant du tutorat ou en donnant des cours particuliers.",
        "Parlez avec des professionnels de la santé, de l’éducation ou de l’action sociale des défis de leur quotidien."
      ],
      "examples": [
        "Psychologie",
        "Sciences de l’éducation",
        "Soins infirmiers",
        "Travail social",
        "Kinésithérapie",
        "Éducation physique et sportive",
        "Orthophonie",
        "Ressources humaines"
      ]
    },
    "enterprising": {
      "label": "Entreprenant",
      "desc": "Intérêt pour diriger, convaincre, négocier et prendre des décisions pour atteindre des objectifs, que ce soit en entreprise, dans la vente ou dans des projets personnels.",
      "high": "Vous aimez prendre les devants, convaincre et voir les objectifs se concrétiser. Les environnements dynamiques, avec des défis et une reconnaissance des résultats, ont tendance à vous motiver. À surveiller : la précipitation dans les décisions et la tendance à sous-estimer les risques ou les détails.",
      "low": "Diriger, vendre et négocier éveillent moins votre intérêt. Vous préférez probablement apporter vos connaissances ou votre travail sans être au centre des décisions. Savoir défendre vos idées reste toutefois utile dans toutes les carrières.",
      "tips": [
        "Prenez la tête d’un petit projet, au travail, dans vos études ou dans votre quartier.",
        "Testez une idée d’entreprise à petite échelle avant d’y investir beaucoup de temps ou d’argent.",
        "Apprenez les bases de la finance, de la négociation et de la communication."
      ],
      "examples": [
        "Gestion d’entreprise",
        "Droit",
        "Marketing",
        "Vente et développement commercial",
        "Relations publiques",
        "Gestion de projet",
        "Immobilier",
        "Commerce international"
      ]
    },
    "conventional": {
      "label": "Organisé",
      "desc": "Intérêt pour organiser l’information, suivre des procédures claires et traiter avec précision des données, des chiffres et des documents.",
      "high": "Vous aimez l’ordre, les règles claires et savoir exactement ce qu’il y a à faire. Les environnements structurés, où la précision est valorisée, ont tendance à vous motiver. À surveiller : faire face aux changements rapides et aux situations sans procédure définie.",
      "low": "Les routines, les tableaux et les procédures détaillées éveillent moins votre intérêt. Vous préférez probablement la variété et la liberté de faire les choses à votre façon. Un minimum d’organisation facilite toutefois le travail dans tous les domaines.",
      "tips": [
        "Apprenez à bien utiliser les tableurs et les outils d’organisation, une compétence utile dans de nombreux métiers.",
        "Prenez en charge le budget ou l’organisation d’un projet et voyez si ce type de tâche vous plaît.",
        "Renseignez-vous sur des domaines comme la comptabilité, la logistique et l’audit, présents dans presque toutes les entreprises."
      ],
      "examples": [
        "Comptabilité",
        "Audit",
        "Logistique",
        "Assistanat de direction",
        "Analyse financière",
        "Métiers des bibliothèques",
        "Contrôle qualité",
        "Achats"
      ]
    }
  },
  "resultTitle": "Vos types d’intérêts",
  "resultIntro": "Nous mettons en avant les trois types qui obtiennent les scores les plus élevés. La plupart des gens combinent plusieurs types, et chaque métier valorise une combinaison différente. Servez-vous de ces suggestions comme point de départ pour vous renseigner et échanger avec des personnes qui travaillent déjà dans le domaine.",
  "note": "Ce résultat reflète des intérêts, pas des compétences ni des chances de réussite. C’est un outil de connaissance de soi qui ne remplace pas un accompagnement en orientation réalisé par des spécialistes."
};

export default t;
