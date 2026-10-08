import type { TestText } from '../../schema';

// strengths — French translation of pt.ts
const t: TestText = {
  "title": "Vos forces",
  "desc": "Découvrez quelles qualités ressortent le plus naturellement dans votre quotidien et comment les mettre à profit.",
  "intro": "Ce questionnaire vous aide à identifier vos forces personnelles, c’est-à-dire les qualités que vous utilisez le plus naturellement et qui vous apportent généralement de l’énergie et de bons résultats. Il comporte 30 affirmations portant sur dix forces, comme la curiosité, la persévérance, l’empathie et la créativité. Pour chaque affirmation, indiquez dans quelle mesure elle décrit votre façon habituelle d’agir, et non celle que vous aimeriez adopter. Il n’y a pas de bonnes réponses : chaque personne a sa propre combinaison de forces, et aucune n’est meilleure qu’une autre.",
  "scale": [
    "Pas du tout d’accord",
    "Pas d’accord",
    "Neutre",
    "D’accord",
    "Tout à fait d’accord"
  ],
  "items": [
    "Quand un sujet nouveau surgit dans une conversation, j’ai l’habitude de me renseigner davantage dessus ensuite.",
    "Quand je commence un projet, je le mène généralement jusqu’au bout, même quand cela devient difficile.",
    "Avant de réagir au comportement de quelqu’un, j’essaie de comprendre ce qui peut l’expliquer.",
    "Dans les travaux de groupe, c’est souvent moi qui organise qui fait quoi.",
    "Je trouve souvent des façons différentes de résoudre les problèmes du quotidien.",
    "Je tiens une liste ou un agenda de ce que j’ai à faire.",
    "Je dis ce que je pense en réunion, même quand mon avis est différent de celui de la majorité.",
    "J’arrive à faire rire les gens, même dans les moments tendus.",
    "Avant de prendre une décision importante, je pense aux conséquences à long terme.",
    "Je propose mon aide avant même qu’on me la demande.",
    "Je pose beaucoup de questions pour comprendre comment les choses fonctionnent.",
    "Une erreur ou un refus ne me fait pas renoncer à quelque chose que je juge important.",
    "Les gens viennent souvent me voir quand ils ont besoin de parler de quelque chose qui les inquiète.",
    "Quand un groupe manque de direction, je prends l’initiative de proposer une voie à suivre.",
    "J’aime combiner des idées venues de domaines différents pour créer quelque chose de nouveau.",
    "Avant de commencer un grand projet, je découpe le travail en étapes.",
    "J’affronte les situations qui me font peur quand je sais qu’elles sont importantes.",
    "Je vois souvent le côté drôle des situations, y compris de celles qui tournent mal.",
    "J’évite de prendre des risques inutiles, même quand une occasion semble tentante.",
    "J’aime partager ce que je sais avec les personnes qui débutent.",
    "J’aime apprendre de nouvelles choses, même quand elles n’ont pas d’utilité immédiate.",
    "J’arrive à poursuivre une tâche longue même quand elle devient fatigante.",
    "J’arrive à imaginer comment une même situation peut être vécue différemment par chaque personne.",
    "J’aime encourager les autres à travailler ensemble vers un objectif commun.",
    "Quand la façon habituelle de faire quelque chose ne fonctionne pas, je pense tout de suite à des alternatives.",
    "Je sais où se trouvent mes documents et fichiers importants quand j’en ai besoin.",
    "Je prends la défense d’une personne traitée injustement, même si cela peut m’attirer des ennuis.",
    "J’utilise l’humour pour détendre l’atmosphère, au travail ou à la maison.",
    "Je préfère rassembler les informations nécessaires avant de prendre un engagement.",
    "Cela me fait plaisir de consacrer du temps à quelqu’un qui en a besoin, sans rien attendre en retour."
  ],
  "dims": {
    "curiosity": {
      "label": "Curiosité",
      "desc": "Un intérêt sincère pour l’apprentissage, les questions et l’exploration de sujets, de lieux et d’idées nouveaux.",
      "high": "Vous aimez comprendre comment les choses fonctionnent et vous cherchez à apprendre par vous-même. Cela vous aide à vous adapter aux changements et à trouver des informations qui échappent aux autres. À surveiller : vous lancer dans beaucoup de sujets à la fois sans en approfondir aucun.",
      "low": "Vous avez tendance à vous concentrer sur ce que vous connaissez déjà et sur ce qui a une utilité pratique immédiate. Cela vous apporte de l’objectivité et vous aide à ne pas vous disperser. À surveiller : passer à côté d’occasions d’apprendre qui n’apparaissent que lorsqu’on explore un peu au-delà du nécessaire.",
      "tips": [
        "Choisissez un thème par mois à étudier tranquillement, avec un livre, un cours ou un podcast.",
        "Dans les conversations, posez au moins une question de plus que d’habitude.",
        "Notez les questions qui vous viennent pendant la semaine et réservez un moment pour faire des recherches."
      ],
      "examples": [
        "Apprendre une nouvelle compétence ou un nouvel outil",
        "Rechercher la cause d’un problème",
        "Découvrir des personnes et des cultures différentes",
        "Débuter dans un domaine inconnu"
      ]
    },
    "persistence": {
      "label": "Persévérance",
      "desc": "La capacité à poursuivre un effort jusqu’au bout, même face aux obstacles, à la fatigue ou à des résultats qui tardent à venir.",
      "high": "Vous terminez généralement ce que vous commencez et vous n’abandonnez pas facilement face aux difficultés. C’est précieux dans les projets longs et pour les objectifs qui demandent de la constance. À surveiller : vous obstiner dans une voie qui a déjà montré qu’elle ne fonctionne pas, alors qu’il serait plus sensé de changer de stratégie.",
      "low": "Vous avez tendance à changer d’activité quand quelque chose n’a plus de sens ou devient trop difficile. Cela vous donne de la souplesse et vous évite de gaspiller votre énergie dans des voies sans issue. À surveiller : abandonner des projets importants peu avant qu’ils commencent à porter leurs fruits.",
      "tips": [
        "Découpez les objectifs à long terme en étapes courtes et célébrez chaque étape franchie.",
        "Avant de renoncer à quelque chose, demandez-vous si le problème vient de l’objectif ou seulement de la stratégie choisie.",
        "Notez vos progrès dans un carnet ou une application pour voir le chemin déjà parcouru."
      ],
      "examples": [
        "Projets longs, dont les résultats tardent à venir",
        "Préparer un examen ou une certification difficile",
        "Repartir de zéro après un échec",
        "Garder une habitude saine dans la durée"
      ]
    },
    "empathy": {
      "label": "Empathie",
      "desc": "La capacité à percevoir ce que ressentent les autres et à comprendre leur point de vue.",
      "high": "Vous percevez facilement l’état d’esprit des gens et vous cherchez à comprendre leurs raisons avant de juger. Cela crée de la confiance et les autres se sentent compris à vos côtés. À surveiller : absorber les problèmes des autres au point de vous épuiser.",
      "low": "Vous avez tendance à regarder d’abord les faits et le problème à résoudre. Cela vous aide à garder votre objectivité dans les situations chargées d’émotion. À surveiller : donner une impression de distance sans le vouloir ou ne pas remarquer quand quelqu’un a besoin de soutien.",
      "tips": [
        "Dans les conversations importantes, reformulez avec vos mots ce que l’autre personne a dit avant de répondre.",
        "Demandez à la personne comment elle se sent avant de proposer une solution.",
        "Si vous avez tendance à absorber beaucoup les émotions des autres, prenez un moment pour prendre soin de vous après les conversations difficiles."
      ],
      "examples": [
        "Soutenir quelqu’un dans un moment difficile",
        "Accueillir des clients ou des patients",
        "Aider deux personnes à régler un désaccord",
        "Faire un retour délicat à quelqu’un"
      ]
    },
    "leadership": {
      "label": "Leadership",
      "desc": "La capacité à organiser, orienter et motiver des personnes vers un objectif commun.",
      "high": "Vous prenez généralement l’initiative quand un groupe a besoin d’une direction et vous savez répartir les tâches. Les gens ont tendance à vous faire confiance pour coordonner des projets. À surveiller : centraliser les décisions et laisser peu de place aux autres pour prendre aussi des responsabilités.",
      "low": "Vous préférez contribuer par votre travail et vos connaissances sans être à la tête du groupe. Cela fait de vous une personne qui collabore bien et qui soutient ceux qui coordonnent. À surveiller : ne pas proposer des idées ou des pistes qui pourraient aider le groupe, en attendant que quelqu’un d’autre prenne l’initiative.",
      "tips": [
        "Prenez en charge la coordination d’un petit projet à court délai pour vous entraîner.",
        "En réunion, terminez toujours en convenant de qui fait quoi et pour quand.",
        "Si vous dirigez déjà souvent, essayez de déléguer une décision importante tout en suivant de près."
      ],
      "examples": [
        "Coordonner un projet de groupe",
        "Organiser un événement ou une action collective",
        "Accompagner une personne qui débute",
        "Prendre des décisions dans les moments d’incertitude"
      ]
    },
    "creativity": {
      "label": "Créativité",
      "desc": "La capacité à produire des idées originales et à trouver des solutions qui sortent de l’ordinaire.",
      "high": "Vous voyez souvent des alternatives là où les autres ne voient qu’une seule voie. Cela aide à résoudre des problèmes nouveaux et à améliorer ce qui a toujours été fait de la même façon. À surveiller : vous enthousiasmer pour chaque nouvelle idée et avoir du mal à mener les précédentes jusqu’au bout.",
      "low": "Vous préférez les méthodes éprouvées et les solutions qui ont fait leurs preuves. Cela apporte sécurité et régularité à votre travail. À surveiller : écarter trop tôt des idées différentes, avant d’avoir évalué ce qu’elles peuvent apporter.",
      "tips": [
        "Avant de choisir une solution, listez au moins trois alternatives différentes.",
        "Cherchez des références en dehors de votre domaine : beaucoup de bonnes idées naissent de la combinaison de sujets éloignés.",
        "Réservez un moment dans la semaine pour tester une idée nouvelle sans vous soucier du résultat."
      ],
      "examples": [
        "Résoudre un problème qui n’a pas de solution toute faite",
        "Créer un produit, un contenu ou une campagne",
        "Améliorer un processus qui a toujours été fait de la même façon",
        "Faire beaucoup avec peu de moyens"
      ]
    },
    "organization": {
      "label": "Organisation",
      "desc": "La capacité à planifier, à structurer les tâches et à garder les choses en ordre pour tenir ses engagements.",
      "high": "Vous planifiez généralement à l’avance, surveillez les délais et savez où se trouve chaque chose. Cela apporte de la sérénité et les autres peuvent compter sur vos engagements. À surveiller : être mal à l’aise face aux imprévus ou passer trop de temps à organiser plutôt qu’à faire.",
      "low": "Vous gérez vos tâches de façon plus souple et vous vous adaptez bien quand les plans changent. C’est utile dans les environnements dynamiques et pleins d’imprévus. À surveiller : manquer des échéances ou perdre des informations importantes faute d’un système simple pour les suivre.",
      "tips": [
        "Utilisez une seule liste pour toutes vos tâches, au lieu de notes éparpillées.",
        "Réservez dix minutes en fin de journée pour passer en revue ce qui a été fait et préparer le lendemain.",
        "Si vous planifiez déjà beaucoup, gardez une partie de votre agenda libre pour les imprévus."
      ],
      "examples": [
        "Planifier un voyage, un déménagement ou un événement",
        "Suivre plusieurs échéances à la fois",
        "Gérer les finances du foyer ou d’un projet",
        "Mettre de l’ordre dans un processus confus"
      ]
    },
    "courage": {
      "label": "Courage",
      "desc": "La disposition à agir, à parler ou à défendre ce qui est juste, même face à la peur, au risque ou à la désapprobation.",
      "high": "Vous affrontez généralement les situations difficiles et dites ce que vous pensez, même quand cela crée un malaise. Cela vous aide à défendre des idées et des personnes, et à franchir des étapes importantes dans votre vie. À surveiller : agir trop vite ou sous-estimer les risques parce que vous ne voulez pas reculer.",
      "low": "Vous avez tendance à bien évaluer les risques avant de vous exposer et vous évitez les conflits inutiles. Cela apporte de la prudence et vous aide à préserver vos relations et votre énergie. À surveiller : renoncer à parler ou à agir dans des situations importantes par peur de la réaction des autres.",
      "tips": [
        "Commencez par de petits actes de courage, comme donner votre avis en réunion ou poser une question en public.",
        "Avant une situation difficile, pensez au pire scénario réaliste et à la façon dont vous y feriez face.",
        "Rappelez-vous qu’avoir peur est normal : le courage, c’est agir malgré la peur, et non l’absence de peur."
      ],
      "examples": [
        "Parler en public ou défendre une idée devant un groupe",
        "Changer de carrière ou de ville",
        "Annoncer une nouvelle difficile",
        "Défendre une personne traitée injustement"
      ]
    },
    "humor": {
      "label": "Sens de l’humour",
      "desc": "La capacité à voir le côté léger des situations et à utiliser l’humour pour rapprocher les gens.",
      "high": "Vous trouvez souvent de quoi sourire au quotidien et vous aidez à alléger l’ambiance autour de vous. Cela rapproche les gens et soulage la tension dans les moments difficiles. À surveiller : utiliser l’humour pour fuir les sujets sérieux ou faire des plaisanteries que tout le monde ne prend pas bien.",
      "low": "Vous avez tendance à aborder les situations avec sérieux et concentration. Cela inspire confiance dans les moments qui demandent le sens des responsabilités. À surveiller : porter la tension trop longtemps et manquer l’occasion de rendre le quotidien plus léger pour vous et pour les autres.",
      "tips": [
        "Observez ce qui vous fait rire et faites-lui une place dans votre semaine.",
        "Avant de faire une plaisanterie, demandez-vous si le moment et les personnes présentes s’y prêtent.",
        "Face à une erreur sans conséquences graves, essayez d’en voir le côté drôle avant de vous le reprocher."
      ],
      "examples": [
        "Mettre à l’aise un nouveau groupe",
        "Détendre l’atmosphère lors d’une réunion difficile",
        "Enseigner quelque chose avec légèreté",
        "Aider quelqu’un à voir un problème avec plus de légèreté"
      ]
    },
    "prudence": {
      "label": "Prudence",
      "desc": "La tendance à réfléchir avant d’agir, à évaluer les risques et à considérer les conséquences de ses choix.",
      "high": "Vous réfléchissez généralement avant de décider et vous pensez aux conséquences à long terme. Cela évite des erreurs coûteuses et rassure ceux qui dépendent de vous. À surveiller : mettre trop de temps à décider ou laisser passer des occasions par excès de prudence.",
      "low": "Vous avez tendance à décider rapidement et à saisir les occasions dès qu’elles se présentent. Cela vous apporte de la réactivité et l’envie d’expérimenter. À surveiller : prendre des engagements ou des risques sans disposer des informations nécessaires.",
      "tips": [
        "Pour les décisions importantes, attendez au moins une nuit avant de donner votre réponse définitive.",
        "Listez ce qui peut bien se passer et ce qui peut mal tourner avant de prendre un engagement important.",
        "Si vous mettez souvent du temps à décider, fixez-vous une date limite pour la décision et respectez-la."
      ],
      "examples": [
        "Décisions financières importantes",
        "Signer un contrat ou prendre un engagement de longue durée",
        "Évaluer les risques d’un projet",
        "Situations qui exigent de la sécurité, comme conduire ou s’occuper d’enfants"
      ]
    },
    "generosity": {
      "label": "Générosité",
      "desc": "La disposition à consacrer du temps, de l’attention, des connaissances ou des ressources aux autres, sans attendre de retour.",
      "high": "Vous proposez votre aide avec naturel et vous aimez voir les personnes autour de vous progresser. Cela crée des liens forts et un climat de confiance. À surveiller : donner tellement aux autres que vos propres besoins passent toujours après.",
      "low": "Vous avez tendance à concentrer votre énergie sur vos propres objectifs et responsabilités. Cela vous aide à protéger votre temps et à garder le cap. À surveiller : laisser passer des moments où un petit coup de main de votre part ferait une grande différence pour quelqu’un.",
      "tips": [
        "Proposez chaque semaine une aide petite et précise, comme une recommandation, une relecture ou une explication.",
        "Partagez quelque chose que vous savez bien faire avec une personne qui débute.",
        "Si vous aidez beaucoup les autres, réservez aussi du temps dans votre agenda pour vos propres priorités."
      ],
      "examples": [
        "Transmettre ce que vous savez aux personnes qui débutent",
        "Bénévolat",
        "Aider un collègue débordé",
        "Prendre soin d’un membre de la famille ou de la communauté"
      ]
    }
  },
  "resultTitle": "Vos principales forces",
  "resultIntro": "Voici les trois forces qui obtiennent les scores les plus élevés. Elles indiquent où vous avez tendance à vous sentir le plus à l’aise et à donner le meilleur de vous-même. Les forces aux scores plus bas ne sont pas des défauts : ce sont des qualités moins présentes aujourd’hui, que vous pouvez développer si cela a du sens pour vous.",
  "note": "Ce résultat est un outil de connaissance de soi fondé sur votre propre perception. Ce n’est pas un test psychologique validé et il ne remplace pas l’évaluation d’un professionnel. Vos forces peuvent aussi évoluer avec le temps et les expériences que vous vivez."
};

export default t;
