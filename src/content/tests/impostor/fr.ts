import type { TestText } from '../../schema';

// impostor — French translation of pt.ts
const t: TestText = {
  "title": "Syndrome de l’imposteur",
  "desc": "Voyez à quelle fréquence vous doutez de vos réussites, craignez qu’on remarque vos failles et vous mettez trop de pression au travail et dans vos études.",
  "intro": "Le syndrome de l’imposteur, c’est le sentiment de ne pas mériter ce que vous avez accompli et l’idée que, tôt ou tard, quelqu’un s’en rendra compte. C’est une expérience très courante, y compris chez des personnes compétentes et qui réussissent, et ce n’est ni un diagnostic ni un trouble mental. Ce questionnaire s’intéresse à trois formes sous lesquelles il apparaît souvent : attribuer sa réussite à la chance, craindre qu’on vous « démasque » et s’imposer un perfectionnisme exigeant. Il comporte 15 situations de travail et d’études. Pensez aux derniers mois et indiquez à quelle fréquence chacune vous arrive. Si une situation ne fait pas partie de votre quotidien, répondez en pensant à quelque chose de semblable que vous avez déjà vécu. Il n’y a pas de bonnes ou de mauvaises réponses.",
  "scale": [
    "Jamais",
    "Rarement",
    "Parfois",
    "Souvent",
    "Toujours"
  ],
  "items": [
    "Quand je réussis un examen difficile, je me dis que j’ai eu de la chance et que les questions portaient justement sur ce que je savais.",
    "En réunion ou en cours, je renonce à poser une question pour que personne ne remarque ce que je ne sais pas encore.",
    "Je relis plusieurs fois un e-mail simple avant de l’envoyer, de peur de laisser passer une erreur.",
    "Quand j’obtiens un poste, une bourse ou une promotion, je pense que c’est parce qu’il y avait peu de candidats ou grâce à l’aide de quelqu’un.",
    "Pendant les premières semaines dans un nouvel emploi ou une nouvelle formation, j’ai l’impression qu’on va vite se rendre compte qu’on a choisi la mauvaise personne.",
    "Après une présentation qui s’est bien passée, je passe des heures à penser au seul passage où j’ai bafouillé.",
    "Quand un projet sur lequel j’ai travaillé réussit, j’explique le résultat par l’effort de l’équipe ou par un contexte favorable, et non par ce que j’ai fait.",
    "Quand mon responsable ou mon professeur me demande de lui parler en privé, ma première idée est qu’on s’est rendu compte que je ne suis pas à la hauteur.",
    "Je garde un travail terminé plus longtemps que nécessaire, parce que j’ai le sentiment qu’il n’est pas encore assez bon pour être montré.",
    "Quand j’obtiens une bonne note ou une bonne évaluation de mes performances, je pense que la personne chargée de l’évaluation s’est montrée généreuse ce jour-là.",
    "Avant de présenter un travail, j’imagine quelqu’un poser une question qui montrera que j’en sais moins que ce que les gens pensent.",
    "Quand j’obtiens une bonne note, mais pas la note maximale, je ressasse les points perdus au lieu de fêter le résultat.",
    "Quand je résous un problème qui bloquait l’équipe, je pense que j’ai trouvé par hasard, et non parce que je savais ce que je faisais.",
    "Quand quelqu’un me présente comme une référence sur un sujet, je suis mal à l’aise, comme si je trompais les gens.",
    "Quand je fais une petite erreur, comme oublier une pièce jointe ou taper un mauvais chiffre, je me critique durement pour le reste de la journée."
  ],
  "dims": {
    "luck": {
      "label": "Réussite attribuée à la chance",
      "desc": "Mesure à quel point vous expliquez vos réussites par des facteurs extérieurs, comme la chance, l’aide des autres ou des circonstances favorables, au lieu de reconnaître vos efforts et vos capacités.",
      "high": "Quand quelque chose réussit, vous avez tendance à attribuer le résultat à la chance, au contexte ou aux autres. Cela peut ressembler à de la modestie, mais, avec le temps, cela vous empêche de percevoir vos propres compétences et fait passer chaque nouvelle réussite pour un hasard. Reconnaître votre part n’est pas de l’arrogance : c’est une lecture plus juste de ce qui s’est passé.",
      "low": "Vous reconnaissez généralement le rôle de vos efforts et de vos capacités dans vos réussites, sans oublier l’aide que vous avez reçue. Cela aide à construire une confiance fondée sur des faits et à aborder de nouveaux défis avec plus d’assurance. Continuez à prêter attention à ce qui a fonctionné et pourquoi.",
      "tips": [
        "Tenez un dossier de vos réussites : notez vos résultats, les compliments reçus et les problèmes que vous avez résolus, avec dates et détails, et relisez-le quand le doute s’installe.",
        "Après un bon résultat, listez ce que vous avez fait pour y arriver, comme les heures d’étude, les décisions prises et les compétences mobilisées, avant de penser à la chance.",
        "Quand on vous fait un compliment, essayez simplement de remercier, sans minimiser ce que vous avez fait ni attribuer le mérite à quelqu’un d’autre."
      ]
    },
    "fear": {
      "label": "Peur qu’on vous démasque",
      "desc": "Mesure la crainte que les autres découvrent que vos capacités ne sont pas à la hauteur des apparences, et à quel point cette peur influence ce que vous faites ou évitez de faire.",
      "high": "Vous avez souvent le sentiment de tromper les autres et l’impression que quelqu’un va s’en rendre compte à tout moment. Cette peur peut vous amener à éviter de poser des questions, à refuser des opportunités ou à travailler plus que nécessaire pour que personne ne remarque vos doutes. Rappelez-vous que personne ne sait tout, et qu’admettre un doute inspire généralement plus de confiance que de méfiance.",
      "low": "Vous vous sentez à l’aise à la place que vous occupez et vous ne vivez pas avec l’impression que quelqu’un va découvrir une faille cachée. Il vous est ainsi plus facile de poser des questions, de demander de l’aide et d’accepter de nouveaux défis. Cette assurance aide aussi les collègues qui débutent à se sentir plus à l’aise.",
      "tips": [
        "Parlez-en avec des collègues de confiance : on découvre souvent que beaucoup ressentent la même chose, y compris des personnes que vous admirez.",
        "En réunion ou en cours, posez au moins une question par semaine et observez comment les gens réagissent réellement.",
        "Quand la peur apparaît, demandez-vous quelles preuves concrètes montrent que vous n’êtes pas capable, et comparez-les aux preuves du contraire."
      ]
    },
    "perfection": {
      "label": "Perfectionnisme et autocritique",
      "desc": "Mesure à quel point vous vous mettez la pression pour ne pas faire d’erreurs, vérifiez les choses à l’excès et vous critiquez durement quand quelque chose n’est pas parfait.",
      "high": "Vous avez tendance à vous fixer des critères très élevés et à vous critiquer durement quand vous ne les atteignez pas, même pour de petits détails. Ce soin peut donner un travail de qualité, mais aussi de la fatigue, des retards et le sentiment que rien n’est jamais assez bien. Avoir des critères élevés est sain ; le défi est de les distinguer de l’exigence de perfection.",
      "low": "La qualité de ce que vous faites compte pour vous, mais vous acceptez que les erreurs et les imperfections fassent partie du processus. Cela vous aide à respecter les délais, à apprendre de vos faux pas et à garder votre énergie dans la durée. Veillez seulement à ce que cette sérénité ne se transforme pas en négligence pour les tâches qui demandent plus d’attention.",
      "tips": [
        "Avant de commencer une tâche, définissez ce que « terminé » veut dire pour elle, et arrêtez de vérifier une fois ce point atteint.",
        "Distinguez critères élevés et perfection : demandez-vous si le détail qui vous gêne ferait une vraie différence pour la personne qui recevra le travail.",
        "Quand vous faites une erreur, parlez-vous comme vous parleriez à un collègue dans la même situation : reconnaissez l’erreur, voyez ce qui peut être corrigé et passez à autre chose."
      ]
    }
  },
  "bands": {
    "few": {
      "label": "Peu de signes",
      "text": "Vos réponses indiquent peu de signes du syndrome de l’imposteur. Vous semblez reconnaître vos réussites et gérer vos erreurs sans trop vous mettre la pression. Il est toutefois normal que ce sentiment apparaisse lors de changements, comme un nouvel emploi, une promotion ou le début d’une formation."
    },
    "some": {
      "label": "Quelques signes",
      "text": "Vos réponses indiquent que le sentiment d’imposture apparaît dans certaines situations, ce qui est très courant. Il a tendance à se renforcer dans les moments d’exposition ou face à de nouveaux défis. Regardez lequel des trois domaines a obtenu le score le plus élevé et commencez par ses suggestions."
    },
    "strong": {
      "label": "Signes marqués",
      "text": "Vos réponses indiquent que le sentiment d’imposture est très présent dans votre quotidien au travail ou dans vos études. Douter de vos réussites, craindre qu’on remarque vos failles et vous mettre la pression en permanence est épuisant, et rien de tout cela ne dit à quel point vous êtes réellement capable. Essayez les suggestions pratiques et, si ce sentiment vous fait souffrir, envisagez d’en parler à un professionnel."
    }
  },
  "resultTitle": "Comment le syndrome de l’imposteur se manifeste chez vous",
  "resultIntro": "Le résultat additionne les trois domaines et montre à quel point le sentiment d’imposture est présent aujourd’hui dans votre travail ou vos études. Il ne mesure pas votre compétence : beaucoup de personnes très capables obtiennent des scores élevés. Voyez ci-dessous comment chaque domaine ressort dans vos réponses.",
  "note": "Ce test est un outil de connaissance de soi fondé sur vos propres réponses. Le syndrome de l’imposteur n’est ni un diagnostic médical ni un trouble mental, et ce résultat ne remplace pas l’évaluation d’un psychologue. Le sentiment d’imposture évolue aussi avec le temps, le contexte et la pratique.",
  "help": "Si le sentiment d’imposture vous cause une souffrance fréquente, de l’anxiété ou de l’épuisement, ou s’il vous pousse à refuser des opportunités, à éviter les défis ou à freiner votre carrière ou vos études, en parler à un ou une psychologue peut vous aider. La thérapie offre des outils pour gérer l’autocritique et construire une confiance plus réaliste."
};

export default t;
