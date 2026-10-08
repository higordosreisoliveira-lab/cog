import type { TestText } from '../../schema';

// values — French translation of pt.ts
const t: TestText = {
  "title": "Valeurs au travail",
  "desc": "Comprenez ce qui compte le plus pour vous au moment de choisir un emploi, une carrière ou un projet.",
  "intro": "Ce questionnaire vous aide à identifier ce à quoi vous accordez le plus d’importance au travail, parmi huit valeurs comme le sens, l’autonomie, la stabilité et la rémunération. Il comporte 24 affirmations. Pour chacune, indiquez dans quelle mesure vous êtes d’accord avec l’idée que cela compte pour vous au travail. Certaines affirmations impliquent un choix entre deux bonnes choses : répondez en pensant à ce qui pèserait le plus en pratique. Il n’y a pas de bonnes réponses, et vos valeurs peuvent évoluer selon la période de votre vie.",
  "scale": [
    "Pas du tout d’accord",
    "Pas d’accord",
    "Neutre",
    "D’accord",
    "Tout à fait d’accord"
  ],
  "items": [
    "Je veux que mon travail aide les autres ou la société d’une manière ou d’une autre.",
    "J’ai besoin de sentir que j’apprends de nouvelles choses au travail.",
    "J’aime décider moi-même de la façon dont je vais accomplir mes tâches.",
    "Je préfère un emploi sûr à un emploi plus intéressant mais incertain.",
    "Il est important pour moi que mes résultats soient remarqués par les personnes avec qui je travaille.",
    "Je veux un travail qui me laisse du temps et de l’énergie pour ma vie personnelle.",
    "J’aime travailler en équipe et échanger des idées avec d’autres personnes.",
    "Un bon salaire fait partie des critères qui comptent le plus quand je choisis un emploi.",
    "J’ai besoin de croire en la mission de l’organisation pour laquelle je travaille.",
    "J’apprécie les emplois qui offrent des défis et la possibilité de prendre de nouvelles responsabilités.",
    "Je travaille mieux quand personne ne contrôle chacun de mes faits et gestes.",
    "Savoir que j’aurai du travail et des revenus dans les années à venir me rassure.",
    "Un compliment sincère de ma hiérarchie me motive à faire encore mieux.",
    "J’accepterais de gagner un peu moins pour avoir des horaires flexibles ou plus de temps libre.",
    "Une bonne relation avec mes collègues compte autant pour moi que le travail lui-même.",
    "Je recherche des emplois où je peux gagner plus en fonction des résultats que j’obtiens.",
    "Un travail bien payé, mais qui n’a pas de sens pour moi, ne me suffirait pas.",
    "Je quitterais un emploi confortable s’il ne m’offrait pas de nouvelles possibilités d’évolution.",
    "Avoir la liberté de choisir mes horaires ou mon lieu de travail est important pour moi.",
    "J’aime avoir une routine prévisible et des règles claires au travail.",
    "J’aime occuper des postes prestigieux et visibles.",
    "J’évite les emplois qui exigent d’être disponible en dehors des heures de travail.",
    "Je préfère les environnements où les gens s’entraident à ceux où chacun travaille pour soi.",
    "Je changerais d’emploi pour une rémunération nettement plus élevée, même si j’aime mon poste actuel."
  ],
  "dims": {
    "purpose": {
      "label": "Sens",
      "desc": "À quel point vous avez besoin de sentir que votre travail a du sens et contribue à quelque chose de plus grand.",
      "high": "Pour vous, un bon emploi ne suffit pas : il faut croire en ce que l’on fait et en voir l’impact sur les gens ou sur le monde. Cela vous apporte une motivation profonde et vous aide à traverser les jours difficiles. À surveiller : accepter de mauvaises conditions simplement parce que la cause est importante.",
      "low": "Vous avez tendance à voir le travail de façon plus pratique, comme un moyen d’atteindre d’autres objectifs dans votre vie. Cela vous laisse de la souplesse pour choisir vos opportunités. À surveiller : manquer de motivation avec le temps, si rien dans votre travail ne vous semble important.",
      "tips": [
        "Demandez-vous qui bénéficie de votre travail, même indirectement.",
        "Avant d’accepter un poste, renseignez-vous sur la mission et les pratiques de l’organisation.",
        "Si votre travail actuel ne vous apporte pas ce sens, cherchez-le dans des projets parallèles ou dans le bénévolat."
      ],
      "examples": [
        "Organisations à but non lucratif",
        "Santé",
        "Éducation",
        "Entreprises à impact social ou environnemental"
      ]
    },
    "growth": {
      "label": "Évolution",
      "desc": "À quel point vous tenez à apprendre, à vous développer et à relever des défis de plus en plus grands.",
      "high": "Vous avez besoin de sentir que vous évoluez, que vous apprenez et que vous progressez dans votre carrière. Cela vous permet de continuer à vous développer et élargit vos options professionnelles. À surveiller : l’insatisfaction permanente, car chaque période de votre vie n’a pas besoin d’apporter une promotion ou un nouveau défi.",
      "low": "Vous accordez plus de valeur à la sérénité de bien faire ce que vous maîtrisez déjà qu’à la recherche constante de nouveaux défis. Cela vous apporte de la régularité et moins de pression. À surveiller : laisser vos compétences devenir obsolètes avec le temps.",
      "tips": [
        "Convenez avec votre responsable d’un objectif de développement pour les prochains mois.",
        "Réservez quelques heures par mois pour apprendre quelque chose d’utile dans votre domaine.",
        "Lors des processus de recrutement, demandez comment fonctionnent les promotions et les formations."
      ],
      "examples": [
        "Entreprises en pleine croissance",
        "Programmes pour jeunes diplômés",
        "Cabinets de conseil",
        "Entreprises avec un plan de carrière structuré"
      ]
    },
    "autonomy": {
      "label": "Autonomie",
      "desc": "À quel point vous tenez à avoir la liberté de décider comment, quand et où travailler.",
      "high": "Vous êtes plus efficace quand vous avez la liberté d’organiser votre travail à votre façon. Cela favorise l’initiative et le sens des responsabilités vis-à-vis des résultats. À surveiller : avoir du mal avec les environnements très contrôlés ou les tâches qui exigent de suivre des processus rigides.",
      "low": "Vous vous sentez bien avec des consignes claires et quelqu’un qui aide à définir les priorités. Cela facilite le travail en équipe et le respect des normes de qualité. À surveiller : trop dépendre des directives et manquer des occasions de faire preuve d’initiative.",
      "tips": [
        "Négociez des objectifs clairs avec votre responsable en échange de plus de liberté sur la façon de les atteindre.",
        "En entretien, demandez comment les décisions sont prises au quotidien dans l’équipe.",
        "Quand vous avez plus de liberté, créez votre propre routine et fixez une échéance pour chaque étape."
      ],
      "examples": [
        "Travail indépendant",
        "Entrepreneuriat",
        "Recherche",
        "Équipes à distance avec des objectifs clairs"
      ]
    },
    "stability": {
      "label": "Stabilité",
      "desc": "À quel point vous tenez à la sécurité, à la prévisibilité et à la continuité de votre travail et de vos revenus.",
      "high": "Vous vous sentez mieux quand vous savez à quoi vous attendre : un revenu garanti, des règles claires et une routine prévisible. Cela vous donne la sérénité nécessaire pour planifier votre vie personnelle. À surveiller : laisser passer des opportunités intéressantes par crainte du changement.",
      "low": "Vous gérez bien l’incertitude et vous êtes à l’aise pour changer quand quelque chose d’intéressant se présente. Cela vous aide à saisir de nouvelles opportunités. À surveiller : prendre des risques financiers sans une épargne de précaution qui vous protège dans les moments difficiles.",
      "tips": [
        "Gardez une épargne de précaution couvrant quelques mois de dépenses : elle apporte de la sécurité dans tous les cas de figure.",
        "Avant de refuser un changement, évaluez le risque réel et ce que vous pourriez y gagner.",
        "Cherchez aussi la stabilité dans des compétences recherchées sur le marché, et pas seulement dans votre emploi actuel."
      ],
      "examples": [
        "Fonction publique",
        "Grandes entreprises bien établies",
        "Banques et assurances",
        "Services essentiels, comme l’énergie, l’eau et l’assainissement"
      ]
    },
    "recognition": {
      "label": "Reconnaissance",
      "desc": "À quel point il est important pour vous que vos efforts et vos résultats soient vus et valorisés.",
      "high": "Vous trouvez votre motivation quand votre travail est remarqué et apprécié par votre entourage. Cela vous pousse à rechercher des résultats de qualité. À surveiller : trop dépendre de l’avis des autres pour sentir que vous avez fait du bon travail.",
      "low": "Le travail bien fait vous satisfait, même quand personne ne le commente. Cela vous apporte de l’indépendance et une motivation personnelle. À surveiller : laisser vos réussites dans l’ombre et manquer des opportunités faute de les mettre en avant.",
      "tips": [
        "Notez vos réussites tout au long de l’année pour les présenter lors des entretiens d’évaluation.",
        "Demandez directement un retour quand il vous manque.",
        "Reconnaissez aussi le travail de vos collègues : cela crée une culture de la reconnaissance."
      ],
      "examples": [
        "Vente avec objectifs et primes",
        "Communication et médias",
        "Droit et conseil",
        "Sport et arts"
      ]
    },
    "balance": {
      "label": "Équilibre",
      "desc": "À quel point vous tenez à avoir du temps et de l’énergie pour votre vie personnelle, votre famille, votre santé et votre repos.",
      "high": "Pour vous, le travail doit trouver sa place dans la vie, et non l’inverse. Cela protège votre santé, vos relations et votre énergie sur le long terme. À surveiller : refuser des périodes plus intenses qui pourraient vous faire progresser, même quand elles seraient temporaires.",
      "low": "Vous acceptez de vous consacrer intensément à votre travail quand vous pensez que cela en vaut la peine. Cela peut accélérer votre carrière et vos projets. À surveiller : l’usure, car sans pauses, la fatigue finit par affecter la santé, les relations et les performances elles-mêmes.",
      "tips": [
        "Fixez une heure de fin de journée et prévenez les personnes avec qui vous travaillez.",
        "En entretien, posez des questions sur le temps de travail réel, les heures supplémentaires et la politique de télétravail.",
        "Inscrivez vos engagements personnels dans votre agenda avec le même sérieux que vos engagements professionnels."
      ],
      "examples": [
        "Entreprises aux horaires flexibles",
        "Télétravail ou travail hybride",
        "Postes aux horaires bien définis",
        "Travail en mode projet ou à temps partiel"
      ]
    },
    "collaboration": {
      "label": "Collaboration",
      "desc": "À quel point vous tenez au travail en équipe, à de bonnes relations avec vos collègues et à un environnement d’entraide.",
      "high": "Vous êtes plus efficace quand vous échangez des idées et travaillez avec d’autres personnes. Une bonne ambiance d’équipe compte autant pour vous que le travail lui-même. À surveiller : avoir du mal avec les postes plus solitaires ou les environnements très compétitifs.",
      "low": "Vous vous sentez bien en travaillant de façon indépendante, avec des responsabilités bien définies. Cela favorise la concentration et l’autonomie. À surveiller : vous isoler et passer à côté de contributions qui ne naissent que de l’échange avec les autres.",
      "tips": [
        "Lors d’un recrutement, demandez à rencontrer l’équipe ou à savoir comment elle travaille au quotidien.",
        "Si vous préférez travailler de façon indépendante, prévoyez de courts points d’échange avec l’équipe.",
        "Proposez votre aide à un collègue et demandez de l’aide quand vous en avez besoin : les deux renforcent la confiance."
      ],
      "examples": [
        "Équipes pluridisciplinaires",
        "Entreprises à la hiérarchie plus horizontale",
        "Hôpitaux et équipes soignantes",
        "Agences et studios créatifs"
      ]
    },
    "pay": {
      "label": "Rémunération",
      "desc": "À quel point le salaire, les avantages et la possibilité de gagner plus pèsent dans vos choix professionnels.",
      "high": "Pour vous, une bonne rémunération est une priorité claire, que ce soit pour la sécurité, pour la liberté ou pour réaliser des objectifs personnels. Cela vous aide à négocier avec fermeté et à viser des postes valorisés. À surveiller : rester dans des emplois qui vous épuisent uniquement pour le salaire.",
      "low": "Vous accordez plus de valeur à d’autres aspects du travail qu’à l’argent lui-même. Cela vous laisse libre de choisir des opportunités pour ce qu’elles ont d’intéressant. À surveiller : accepter une rémunération inférieure à ce que vaut votre travail, faute de négocier.",
      "tips": [
        "Renseignez-vous sur la fourchette de salaire de votre poste avant de négocier une augmentation ou une offre.",
        "Tenez compte de l’ensemble : avantages, primes, flexibilité et frais de transport.",
        "Définissez le montant minimum dont vous avez besoin pour bien vivre et utilisez-le comme référence dans vos négociations."
      ],
      "examples": [
        "Finance",
        "Vente à la commission",
        "Technologie",
        "Postes de management"
      ]
    }
  },
  "resultTitle": "Ce qui compte le plus pour vous au travail",
  "resultIntro": "Voici les trois valeurs qui obtiennent les scores les plus élevés. Quand un travail respecte ces valeurs, vous avez tendance à ressentir plus de motivation et de satisfaction. Quand elles sont mises de côté trop longtemps, l’insatisfaction finit souvent par apparaître, même si le reste semble bien.",
  "note": "Ce résultat est un outil de connaissance de soi fondé sur vos propres réponses. Ce n’est pas un test psychologique validé et il ne remplace pas un bilan d’orientation réalisé par un professionnel."
};

export default t;
