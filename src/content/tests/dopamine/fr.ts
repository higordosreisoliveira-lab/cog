// dopamine — French translation of pt.ts
import type { TestText } from '../../schema';

const t: TestText = {
  "title": "Test de dopamine",
  "desc": "Faites le point sur vos habitudes liées au système de récompense du cerveau : stimulations rapides, ennui, écrans et objectifs à long terme.",
  "intro": "Ce questionnaire observe des habitudes du quotidien liées au système de récompense du cerveau. La dopamine est une substance que le cerveau utilise pour transmettre des signaux ; elle est liée à la motivation et à la recherche de récompenses. Important : malgré son nom populaire, ce test ne mesure pas la dopamine dans votre corps. Aucun questionnaire ne peut le faire, et les examens médicaux capables d’évaluer la dopamine sont spécifiques et rarement utilisés dans ce but. Ce que le test évalue, ce sont quatre domaines d’habitudes : la recherche de récompenses rapides, la difficulté face à l’ennui, la motivation pour les objectifs à long terme et les habitudes d’écran. Il comporte 16 affirmations. Pensez aux 2 dernières semaines et indiquez à quelle fréquence chaque situation vous est arrivée. Répondez sincèrement et sans trop réfléchir : il n’y a pas de bonnes ou de mauvaises réponses.",
  "scale": [
    "Jamais",
    "Rarement",
    "Parfois",
    "Souvent",
    "Toujours"
  ],
  "items": [
    "Je passe plus de temps que prévu à regarder des vidéos courtes ou à parcourir les réseaux sociaux.",
    "Dans les moments d’attente, par exemple dans une file ou dans les transports, j’ai du mal à rester sans rien faire.",
    "J’arrive à me consacrer à un objectif pendant des semaines, même quand les résultats ne se voient pas encore.",
    "Je prends mon téléphone dans les premières minutes après mon réveil.",
    "J’achète des choses sur un coup de tête, surtout sur Internet, et je me rends compte ensuite que je n’en avais pas besoin.",
    "Je perds patience face aux tâches lentes ou répétitives et j’arrête avant d’avoir fini.",
    "J’arrive à renoncer à un plaisir immédiat quand il nuit à quelque chose d’important pour mon avenir.",
    "Je reste sur mon téléphone au lit et je finis par m’endormir plus tard que prévu.",
    "Quand je ressens de la fatigue ou du découragement, je cherche quelque chose qui me fasse plaisir tout de suite, comme une sucrerie, un grignotage ou une vidéo.",
    "J’ai du mal à lire un long texte ou à regarder un film en entier sans me laisser distraire par autre chose.",
    "Je commence les tâches importantes à l’heure que j’avais prévue, sans les repousser pour faire quelque chose de plus amusant.",
    "Je déverrouille mon téléphone sans raison précise, juste par habitude.",
    "Quand une notification arrive, j’arrête ce que je suis en train de faire pour voir de quoi il s’agit.",
    "Les activités simples, comme cuisiner ou marcher, me paraissent fades s’il n’y a rien à regarder ou à écouter en même temps.",
    "Je ressens de la satisfaction à progresser dans des projets de longue haleine, comme étudier, m’entraîner ou épargner.",
    "J’utilise plusieurs écrans à la fois, par exemple je regarde une série tout en consultant mon téléphone."
  ],
  "dims": {
    "quickRewards": {
      "label": "Récompenses rapides",
      "desc": "Mesure à quel point vous avez recours aux plaisirs immédiats, comme les réseaux sociaux, les vidéos courtes, les notifications, les achats impulsifs et le grignotage.",
      "high": "Vous avez souvent recours aux stimulations rapides, fréquemment pour vous détendre ou changer d’humeur. C’est courant et ce n’est pas un défaut : beaucoup de ces stimulations sont conçues précisément pour capter votre attention. Le point de vigilance, c’est quand elles prennent le temps de choses qui comptent davantage pour vous ou qu’elles laissent une impression de temps perdu.",
      "low": "Vous avez peu recours aux plaisirs immédiats et vous choisissez généralement de façon intentionnelle comment utiliser votre temps libre. Cela vous aide à garder votre concentration sur l’essentiel et à mieux profiter de vos moments de repos. Continuez à observer les jours de fatigue, où l’envie de stimulations rapides a tendance à augmenter.",
      "tips": [
        "Désactivez les notifications qui ne sont pas essentielles et ne gardez que celles des personnes et des services vraiment importants.",
        "Avant d’ouvrir une application, décidez ce que vous voulez y faire et pendant combien de temps.",
        "Pour les achats en ligne qui n’étaient pas prévus, attendez 24 heures avant de valider la commande."
      ]
    },
    "boredom": {
      "label": "Difficulté face à l’ennui",
      "desc": "Mesure à quel point il vous est difficile de rester sans stimulation, d’attendre ou de vous concentrer sur des tâches lentes et répétitives.",
      "high": "Les moments d’attente et les tâches lentes ont tendance à vous mettre mal à l’aise, et l’envie de chercher quelque chose de plus intéressant arrive vite. C’est très courant dans un quotidien rempli de stimulations. La tolérance à l’ennui peut s’entraîner petit à petit, comme n’importe quelle autre habitude.",
      "low": "Vous gérez bien les attentes, les pauses et les tâches qui demandent de la patience. Cela vous aide à vous concentrer plus longtemps et à terminer ce que vous commencez. Les moments sans stimulation laissent aussi de la place pour reposer votre esprit et avoir de nouvelles idées.",
      "tips": [
        "Entraînez-vous quelques minutes par jour à rester sans stimulation, par exemple en attendant dans une file ou en faisant un court trajet sans sortir votre téléphone.",
        "Pour les tâches longues, travaillez par blocs de 20 à 25 minutes, avec de courtes pauses entre eux.",
        "De temps en temps, faites une seule chose à la fois, comme manger sans écran ou marcher sans écouteurs."
      ]
    },
    "longTerm": {
      "label": "Objectifs à long terme",
      "desc": "Mesure la motivation pour les objectifs qui mettent du temps à donner des résultats, comme étudier, s’entraîner ou épargner. Ici, un score élevé indique plus de difficulté à tenir ce type d’objectif ; un score bas, plus de facilité.",
      "high": "Garder votre motivation pour des objectifs qui prennent du temps vous est difficile ces derniers temps, surtout quand des options plus rapides et plus agréables sont à portée de main. Cela ne veut pas dire que vous en êtes incapable : les objectifs à long terme apportent peu de récompenses au début, et le cerveau a tendance à préférer l’immédiat. Découper le chemin en étapes plus petites aide souvent beaucoup.",
      "low": "Vous arrivez à maintenir vos efforts pour des objectifs qui mettent du temps à donner des résultats, et vous appréciez les progrès faits petit à petit. Cette capacité aide à construire des réussites durables dans les études, au travail et pour la santé. Le point de vigilance est de ne pas laisser le repos et les loisirs de côté en chemin.",
      "tips": [
        "Découpez chaque grand objectif en petites étapes et célébrez chaque étape franchie par une récompense simple.",
        "Notez vos progrès dans un calendrier ou une application pour voir le chemin déjà parcouru.",
        "Faites les tâches importantes au moment de la journée où vous avez généralement le plus d’énergie, avant d’ouvrir les réseaux sociaux ou d’autres applications."
      ]
    },
    "screens": {
      "label": "Habitudes d’écran",
      "desc": "Mesure la place du téléphone et des autres écrans dans votre quotidien : au réveil, avant de dormir, quand vous consultez votre téléphone sans raison et quand vous utilisez plusieurs écrans à la fois.",
      "high": "Les écrans sont présents à de nombreux moments de votre journée, y compris dès le réveil et au moment de dormir. C’est courant aujourd’hui, mais leur utilisation le soir peut retarder l’endormissement et nuire au sommeil, et consulter son téléphone en permanence divise l’attention. De petits changements dans votre environnement fonctionnent souvent mieux que de compter uniquement sur la volonté.",
      "low": "Vous utilisez les écrans de façon plus intentionnelle et vous gardez certains moments de la journée sans eux, comme le début de la matinée et l’heure du coucher. Cela favorise le sommeil, la concentration et le repos. Gardez ces limites, surtout dans les périodes plus chargées.",
      "tips": [
        "Laissez votre téléphone hors de la chambre la nuit et utilisez un réveil classique.",
        "Évitez les écrans dans les 30 à 60 minutes avant de dormir et essayez de garder des horaires de sommeil réguliers.",
        "Pendant les pauses de la journée, remplacez le téléphone par un peu de mouvement, comme une courte marche ou quelques étirements."
      ]
    }
  },
  "bands": {
    "balanced": {
      "label": "Équilibre",
      "text": "Vos réponses indiquent une relation équilibrée avec les stimulations rapides et les écrans. Vous semblez bien gérer l’ennui et garder votre motivation pour des objectifs qui prennent du temps. Continuez à prendre soin des habitudes qui vous aident, comme un sommeil régulier et des moments loin des écrans."
    },
    "attention": {
      "label": "À surveiller",
      "text": "Vos réponses indiquent que certaines habitudes de stimulation rapide occupent déjà une place importante dans votre quotidien. C’est très courant et il n’y a pas lieu de s’alarmer. Regardez quels domaines ont obtenu les scores les plus élevés et choisissez un ou deux petits changements à essayer dans les semaines à venir."
    },
    "overloaded": {
      "label": "Surcharge de stimulations",
      "text": "Vos réponses indiquent que les stimulations rapides et les écrans sont très présents dans votre journée, et qu’attendre, vous concentrer ou tenir des objectifs à long terme vous est peut-être plus difficile. C’est de plus en plus courant et cela peut évoluer grâce à des ajustements progressifs de vos habitudes, sans coupure radicale. Commencez par réduire l’excès de stimulations à un ou deux moments de la journée, par exemple au réveil et avant de dormir, et observez comment vous vous sentez."
    }
  },
  "resultTitle": "Vos habitudes de récompense",
  "resultIntro": "Le résultat additionne les quatre domaines et montre à quel point vos habitudes actuelles dépendent des stimulations rapides. Rappel : il ne mesure pas la dopamine dans votre corps, mais des comportements qui peuvent changer avec le temps et la pratique.",
  "note": "Ce test est un outil de connaissance de soi fondé sur vos propres réponses. Il ne mesure ni la dopamine ni aucune autre substance dans le corps, ce n’est pas un examen médical et il ne permet pas de poser un diagnostic. Réduire l’excès de stimulations peut aider en tant que changement d’habitude, mais ce n’est pas un traitement médical. Si une habitude semble échapper à votre contrôle ou nuit à votre vie, parlez-en à un professionnel de santé.",
  "help": "Si vous avez le sentiment de ne pas arriver à contrôler votre utilisation du téléphone, des jeux vidéo, des jeux d’argent ou des achats, ou si cela affecte votre sommeil, votre travail, vos finances ou vos relations, consultez un psychologue ou un médecin. Pour les jeux vidéo, les jeux d’argent ou les achats compulsifs, il existe aussi des services et des groupes de soutien spécialisés qui peuvent vous aider."
};

export default t;
