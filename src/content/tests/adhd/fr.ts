// adhd — French translation of pt.ts
import type { TestText } from '../../schema';

const t: TestText = {
  "title": "Traits de TDAH chez l’adulte",
  "desc": "Voyez à quelle fréquence des situations liées à l’attention, à l’organisation, à l’agitation et à l’impulsivité se présentent dans votre quotidien d’adulte.",
  "intro": "Le TDAH (trouble du déficit de l’attention avec ou sans hyperactivité) ne concerne pas que les enfants : beaucoup de personnes arrivent à l’âge adulte avec ces traits, parfois sans avoir jamais été évaluées. Ce questionnaire observe deux groupes de traits au quotidien : l’attention et l’organisation, et l’agitation et l’impulsivité. Il comporte 18 situations courantes de la vie adulte, au travail, à la maison et dans les relations. Pensez aux 6 derniers mois et indiquez à quelle fréquence chacune vous est arrivée. Répondez sincèrement, en pensant à ce qui se passe réellement, et non à ce que vous aimeriez qu’il se passe. Gardez à l’esprit qu’il s’agit d’une auto-évaluation qui porte sur des traits, et non d’un diagnostic. Tout le monde se laisse distraire ou se sent pressé de temps en temps ; ce qui compte ici, c’est la fréquence.",
  "scale": [
    "Jamais",
    "Rarement",
    "Parfois",
    "Souvent",
    "Très souvent"
  ],
  "items": [
    "Je lis une page d’un livre ou d’un rapport jusqu’au bout et je me rends compte que je serais incapable de dire ce qui était écrit, parce que j’avais la tête ailleurs.",
    "En réunion, en cours ou pendant une conférence, je me rends compte que je remue la jambe, que je tapote mon stylo sur la table ou que je change sans arrêt de position sur ma chaise.",
    "Au moment de sortir de chez moi, je perds quelques minutes à chercher mes clés, mon téléphone ou mon portefeuille, que j’ai posés quelque part sans m’en souvenir.",
    "Dans une conversation de groupe, une idée me vient et je la dis tout de suite, en coupant la parole à quelqu’un qui n’avait pas fini, de peur d’oublier ce que je voulais dire.",
    "Je prends mon téléphone ou j’ouvre mon ordinateur pour faire une chose précise, comme payer une facture, et je finis par en faire trois autres sans avoir fait la première.",
    "Je vois une promotion ou quelque chose qui attire mon attention et je l’achète sur-le-champ, sans comparer les prix ni penser au budget du mois.",
    "Pendant que quelqu’un m’explique quelque chose calmement, je me rends compte que j’ai manqué une partie de ce que la personne a dit et je dois lui demander de répéter, ou je fais semblant d’avoir suivi.",
    "Dans la file d’attente du supermarché ou dans un embouteillage, je sens monter très vite une impatience : je regarde partout, je souffle ou je cherche un autre chemin.",
    "Une tâche simple et ennuyeuse, comme prendre un rendez-vous ou envoyer un document, reste des semaines sur ma liste, alors que je sais qu’elle ne prendrait que quelques minutes.",
    "Un jour de congé sans programme, au lieu de me reposer, je ressens de l’agitation et je m’invente vite quelque chose à faire, parce que rester un moment sans rien faire me dérange.",
    "J’envoie un e-mail, un travail ou un tableur et ce n’est qu’après que je remarque un détail qui m’avait échappé, comme une pièce jointe oubliée, une mauvaise date ou un nom qui n’est pas le bon.",
    "Je réponds à un message ou à un commentaire sous le coup de l’émotion et, peu après, je regrette le ton ou ce que j’ai écrit.",
    "Je commence à ranger une pièce, je trouve quelque chose qui m’emmène à l’autre bout de la maison et, à la fin de la journée, plusieurs rangements sont restés à moitié faits.",
    "Je me couche le corps fatigué, mais ma tête continue de tourner à toute vitesse, sautant d’une pensée à l’autre pendant un bon moment.",
    "Je prévois quelque chose avec quelqu’un et je ne m’en souviens que lorsque la personne m’envoie un message pour demander si je viens toujours.",
    "Après une sortie avec des amis ou des collègues, je me rends compte que j’ai parlé beaucoup plus que les autres ou que j’ai enchaîné les sujets sans laisser la conversation respirer.",
    "Je pense avoir encore largement le temps avant de partir et, quand je regarde l’heure, je devrais déjà être en route.",
    "Sur un élan d’enthousiasme, j’accepte sur-le-champ une invitation, un nouveau projet ou un changement de programme, et ce n’est qu’après que je me rends compte que cela ne rentrait pas dans mon quotidien."
  ],
  "dims": {
    "inattention": {
      "label": "Attention et organisation",
      "desc": "Mesure à quelle fréquence l’attention vous échappe au milieu d’une lecture, d’une tâche ou d’une conversation, et comment vous gérez les échéances, les rendez-vous, les objets du quotidien et les tâches peu intéressantes.",
      "high": "Garder votre attention sur des tâches peu intéressantes, vous souvenir de vos rendez-vous et soigner les détails semble vous demander plus d’efforts qu’à beaucoup de gens. Cela n’a rien à voir avec de la paresse ni avec un manque d’intelligence : beaucoup de personnes ayant ce profil ont un esprit rapide et créatif, plein d’associations, et savent se concentrer intensément sur ce qui les intéresse. Ce qui aide souvent, c’est de sortir l’organisation de votre tête pour la confier à votre environnement, avec des rappels, des listes et des routines simples.",
      "low": "Vous gardez généralement votre attention sur ce que vous faites, vous vous souvenez de vos rendez-vous et vous menez vos tâches à terme, même les moins intéressantes. Cela vous rend fiable et vous apporte de la sérénité au travail comme à la maison. Les distractions occasionnelles sont normales, surtout dans les périodes de fatigue, de stress ou de mauvais sommeil.",
      "tips": [
        "Utilisez des alarmes et des rappels sur votre téléphone pour vos rendez-vous et vos factures, au lieu de compter uniquement sur votre mémoire.",
        "Ayez un endroit fixe pour vos clés, votre portefeuille et vos papiers, comme un bol ou un crochet près de la porte.",
        "Face à une tâche ennuyeuse, engagez-vous seulement pour les cinq premières minutes : commencer est souvent le plus difficile."
      ]
    },
    "hyperactivity": {
      "label": "Agitation et impulsivité",
      "desc": "Mesure l’agitation du corps et de l’esprit, la difficulté à attendre et la tendance à parler, décider ou agir sur l’impulsion du moment.",
      "high": "Vous avez beaucoup d’énergie et vous avez tendance à agir vite : vous parlez, décidez et réagissez au rythme où les idées arrivent, et attendre ou rester longtemps sans bouger est souvent inconfortable. Cette énergie peut être une grande alliée, source d’enthousiasme, d’initiative, de créativité et de courage pour se lancer dans de nouvelles choses. Le point de vigilance, ce sont les paroles et les décisions prises sur le coup, qui entraînent parfois des regrets ou des frictions, ainsi que la fatigue d’un esprit qui a du mal à ralentir.",
      "low": "Vous attendez généralement avec calme, vous réfléchissez avant d’agir et vous arrivez à vous détendre quand vous avez du temps libre. Cela vous aide à prendre des décisions réfléchies et à avoir des conversations équilibrées. Des moments ponctuels d’impatience ou d’agitation sont normaux, surtout dans les périodes de stress.",
      "tips": [
        "Avant d’acheter, de répondre à un message agaçant ou d’accepter un nouvel engagement, accordez-vous une pause : attendez quelques minutes, voire le lendemain.",
        "Donnez une soupape à l’énergie de votre corps, avec une activité physique régulière, de courtes marches pendant les pauses ou un petit objet discret à manipuler pendant les réunions.",
        "Si votre esprit s’emballe au moment de dormir, notez sur papier ce que vous avez en tête avant de vous coucher et gardez-le pour le lendemain."
      ]
    }
  },
  "bands": {
    "few": {
      "label": "Peu de traits",
      "text": "Vos réponses indiquent que les situations liées à l’inattention, à l’agitation et à l’impulsivité sont peu présentes dans votre quotidien. Quelques distractions et moments d’impatience sont normaux pour tout le monde. Les niveaux de ce test ne sont qu’indicatifs et n’ont pas été validés cliniquement."
    },
    "some": {
      "label": "Quelques traits",
      "text": "Vos réponses indiquent que certains traits d’inattention ou d’agitation apparaissent assez souvent dans votre quotidien. C’est courant et cela peut avoir plusieurs causes, comme la fatigue, le stress, un mauvais sommeil ou un excès de sollicitations. Observez dans quelles situations ils pèsent le plus et essayez les conseils de chaque domaine, en gardant à l’esprit que les niveaux ne sont qu’indicatifs, sans validation clinique."
    },
    "many": {
      "label": "Beaucoup de traits",
      "text": "Vos réponses indiquent que de nombreux traits liés à l’attention, à l’agitation et à l’impulsivité apparaissent souvent dans votre quotidien. Cela ne signifie pas que vous avez un TDAH : d’autres troubles et certaines périodes de la vie peuvent donner des signes semblables, et les niveaux de ce test ne sont qu’indicatifs, sans validation clinique. Si ces traits vous accompagnent depuis longtemps, peut-être depuis l’enfance, et qu’ils gênent votre travail, vos études ou vos relations, il peut être utile d’en parler à un psychiatre, un neurologue ou un psychologue pour une évaluation adaptée."
    }
  },
  "resultTitle": "Vos traits de TDAH",
  "resultIntro": "Le résultat additionne vos réponses aux 18 situations et montre à quelle fréquence des traits d’inattention, d’agitation et d’impulsivité apparaissent dans votre quotidien. Regardez aussi les deux domaines séparément : ils aident à comprendre où ces traits pèsent le plus et où se trouvent vos points forts.",
  "note": "Ce test est un outil de connaissance de soi fondé sur vos propres réponses. Ce n’est pas un diagnostic de TDAH ni d’aucun autre trouble, et les niveaux de résultat n’ont pas été validés cliniquement. Seul un professionnel qualifié, comme un psychiatre, un neurologue ou un psychologue, peut réaliser une évaluation complète, qui tient compte de votre histoire depuis l’enfance et d’autres causes possibles, comme l’anxiété, la dépression ou les troubles du sommeil.",
  "help": "Si vous souhaitez explorer ces traits, adressez-vous à un psychiatre, un neurologue ou un psychologue, de préférence expérimenté dans le TDAH de l’adulte. Votre médecin ou les services de santé de votre région sont souvent une bonne première étape : ils peuvent vous conseiller et vous orienter vers une évaluation. Si vous traversez une période de grande souffrance, les services de santé mentale de votre région peuvent aussi vous accueillir. Il existe également des consultations spécialisées dans les hôpitaux universitaires et les centres de consultation des universités, ainsi que des associations d’aide aux personnes concernées par le TDAH, qui recommandent souvent des professionnels et des ressources fiables."
};

export default t;
