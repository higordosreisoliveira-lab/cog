import type { TestText } from '../../schema';

// archetypes — French translation of pt.ts
const t: TestText = {
  "title": "Votre archétype",
  "desc": "Découvrez à quels personnages classiques des récits vous vous identifiez le plus et ce qu’ils révèlent de vos motivations.",
  "intro": "Les archétypes sont des personnages qui reviennent dans les mythes, les contes et les films de nombreuses cultures, comme le héros, le sage ou l’explorateur. L’idée s’inspire des travaux de Carl Jung et sert aujourd’hui de façon simple de parler des motivations et des manières de voir le monde. Ce questionnaire comporte 36 affirmations sur 12 archétypes. Pour chacune, indiquez dans quelle mesure elle vous décrit. Il n’y a pas de bonnes réponses, et aucun archétype n’est meilleur qu’un autre : chacun a ses qualités et ses points de vigilance.",
  "scale": [
    "Pas du tout d’accord",
    "Pas d’accord",
    "Neutre",
    "D’accord",
    "Tout à fait d’accord"
  ],
  "items": [
    "Je crois qu’au bout du compte, les choses finissent par bien se passer.",
    "J’ai envie de découvrir des lieux et des cultures très éloignés de ce que je connais.",
    "J’aime comprendre un sujet en profondeur avant de me faire une opinion.",
    "J’aime les défis difficiles, parce qu’ils montrent de quoi je suis capable.",
    "Je remets en question les règles qui me semblent absurdes, même quand tout le monde les suit.",
    "Je vois souvent des possibilités de changement que les autres n’ont pas encore remarquées.",
    "Je me sens bien quand je fais partie d’un groupe où tout le monde est traité sur un pied d’égalité.",
    "Les relations proches et pleines d’affection sont ce qui donne le plus de sens à ma vie.",
    "J’aime transformer des moments ordinaires en moments amusants.",
    "J’éprouve le besoin de protéger les personnes qui m’entourent et de prendre soin d’elles.",
    "J’ai envie de créer quelque chose qui soit vraiment à moi, comme une œuvre, un projet ou une entreprise.",
    "Quand une situation est désorganisée, je prends les choses en main pour y mettre de l’ordre.",
    "Je préfère une vie simple et tranquille à une vie pleine de complications.",
    "Quand la routine devient trop répétitive, j’éprouve le besoin de chercher quelque chose de nouveau.",
    "Pour moi, découvrir la vérité est plus important que d’avoir raison.",
    "Quand il y a un problème grave, je veux faire partie des personnes qui vont le résoudre.",
    "Je préfère suivre mon propre chemin plutôt que de faire quelque chose simplement parce qu’on l’a toujours fait ainsi.",
    "Je crois qu’une bonne idée, bien mise en pratique, peut complètement changer une situation.",
    "Je préfère être une personne simple et accessible plutôt que de me distinguer des autres.",
    "Je prête attention à la beauté des choses, comme un bel endroit, un bon repas ou une musique.",
    "Je trouve que la vie est meilleure quand on ne prend pas tout trop au sérieux.",
    "Aider quelqu’un à se sentir mieux donne un vrai sens à ce que je fais.",
    "Les moments où je donne forme à une idée nouvelle comptent parmi les plus heureux pour moi.",
    "J’aime avoir de l’influence sur les décisions importantes du groupe dont je fais partie.",
    "J’ai tendance à faire confiance aux gens jusqu’à ce qu’ils me donnent une raison de ne plus le faire.",
    "Je tiens à la liberté de choisir mon propre chemin, même sans savoir exactement où il va me mener.",
    "Les gens me demandent souvent des explications ou des conseils sur des sujets complexes.",
    "Je me prépare avec discipline pour réussir dans ce qui est important pour moi.",
    "J’ai envie de changer les systèmes qui ne fonctionnent pas, au lieu de simplement m’y adapter.",
    "J’aime aider des personnes ou des lieux à traverser de grandes transformations.",
    "J’accorde plus de valeur aux choses pratiques et réalistes qu’aux promesses grandioses.",
    "J’aime montrer mon affection et faire en sorte que les personnes que j’aime se sentent spéciales.",
    "Je préfère profiter du moment présent plutôt que de trop planifier l’avenir.",
    "J’ai tendance à penser à ce dont les gens auront besoin avant même qu’ils le demandent.",
    "J’aime soigner les détails de ce que je produis pour que le résultat soit comme je l’avais imaginé.",
    "Je pense à long terme et à la manière de rendre les choses stables et bien structurées."
  ],
  "dims": {
    "innocent": {
      "label": "Innocent",
      "desc": "Représente l’espoir, la simplicité et le désir de bien faire. Recherche une vie tranquille et fait confiance à la bonté des gens.",
      "high": "Vous avez tendance à voir le côté positif des situations et à faire confiance aux gens. Cet optimisme apporte de la légèreté et aide votre entourage à garder espoir. À surveiller : ignorer des signes de problème ou vivre des déceptions quand la réalité ne correspond pas à vos attentes.",
      "low": "Vous avez tendance à regarder les situations avec réalisme et à ne pas accepter de promesses sans vérifier. Cela vous aide à vous protéger et à repérer les risques. À surveiller : laisser la méfiance ou le pessimisme enlever leur légèreté à vos relations et à vos projets.",
      "tips": [
        "Gardez votre optimisme, mais vérifiez les faits avant les décisions importantes.",
        "Notez trois bonnes choses qui se sont produites dans votre journée, même petites.",
        "Quand quelque chose tourne mal, demandez-vous ce qui peut encore être fait, au lieu de vous concentrer seulement sur ce qui a été perdu."
      ],
      "examples": [
        "Pollyanna",
        "Heidi",
        "Dorothy (Le Magicien d’Oz)",
        "Blanche-Neige (frères Grimm)"
      ]
    },
    "explorer": {
      "label": "Explorateur",
      "desc": "Représente la liberté et la découverte. Recherche de nouvelles expériences, de nouveaux lieux et de nouvelles façons de vivre.",
      "high": "Vous tenez à votre liberté et vous avez envie de découvrir la nouveauté, qu’il s’agisse d’un lieu, d’une idée ou d’une autre façon de vivre. Cela vous apporte de l’indépendance et une ouverture au changement. À surveiller : l’agitation intérieure, car changer souvent de voie peut compliquer les engagements à long terme.",
      "low": "Vous vous sentez bien dans ce qui vous est familier et vous trouvez de la satisfaction à approfondir ce que vous connaissez déjà. Cela apporte de la stabilité et des liens durables. À surveiller : passer à côté d’expériences enrichissantes par attachement à la routine.",
      "tips": [
        "Glissez de petites nouveautés dans votre routine, comme un trajet différent, un plat nouveau ou une promenade dans un quartier inconnu.",
        "Si vous changez souvent de direction, choisissez un engagement à tenir pendant au moins quelques mois.",
        "Planifiez un voyage ou une expérience que vous repoussez depuis longtemps."
      ],
      "examples": [
        "Marco Polo",
        "Ibn Battuta",
        "Amelia Earhart",
        "Phileas Fogg (Le Tour du monde en quatre-vingts jours)"
      ]
    },
    "sage": {
      "label": "Sage",
      "desc": "Représente la quête de connaissance et de vérité. Veut comprendre le monde et partager ses découvertes.",
      "high": "Vous aimez réfléchir calmement, étudier et chercher des explications bien fondées. C’est pourquoi les gens font souvent confiance à votre jugement. À surveiller : trop analyser et tarder à agir, ou donner une impression de distance aux personnes plus pragmatiques.",
      "low": "Vous avez tendance à apprendre en faisant et à accorder plus de valeur à l’expérience qu’à la théorie. Cela vous apporte de la réactivité et un sens pratique. À surveiller : prendre des décisions importantes sans chercher suffisamment d’informations.",
      "tips": [
        "Réservez un moment dans la semaine pour lire ou étudier quelque chose qui éveille votre curiosité.",
        "Partagez ce que vous apprenez : expliquer quelque chose à quelqu’un aide à retenir les connaissances.",
        "Si vous avez tendance à trop analyser, fixez un moment pour arrêter les recherches et décider."
      ],
      "examples": [
        "Socrate",
        "Confucius",
        "Hypatie d’Alexandrie",
        "Sherlock Holmes"
      ]
    },
    "hero": {
      "label": "Héros",
      "desc": "Représente le courage et le dépassement de soi. Veut relever des défis difficiles et montrer de quoi il est capable.",
      "high": "Les défis vous motivent et vous aimez montrer de quoi vous êtes capable. Face à des problèmes graves, vous avez tendance à agir plutôt qu’à attendre. À surveiller : tout transformer en compétition ou avoir du mal à demander de l’aide et à accepter vos propres limites.",
      "low": "Vous n’éprouvez pas le besoin de prouver votre valeur par de grands exploits et vous préférez un rythme plus équilibré. Cela évite l’usure et une pression inutile. À surveiller : renoncer à des objectifs qui pourraient vous faire grandir, par crainte de vous exposer.",
      "tips": [
        "Choisissez les défis qui comptent vraiment pour vous, au lieu d’essayer de tous les remporter.",
        "Rappelez-vous que demander de l’aide fait aussi partie de toute grande réussite.",
        "Après un effort intense, prenez le temps de vous reposer et de récupérer."
      ],
      "examples": [
        "Hercule",
        "Jeanne d’Arc",
        "Harriet Tubman",
        "Ulysse (L’Odyssée)"
      ]
    },
    "rebel": {
      "label": "Rebelle",
      "desc": "Représente la volonté de changer ce qui ne fonctionne pas. Remet en question les règles et n’accepte pas les choses simplement parce qu’elles ont toujours été ainsi.",
      "high": "Vous remettez en question ce qui vous semble injuste ou absurde et vous n’avez pas peur de suivre une voie différente. Cela aide à provoquer des changements nécessaires et à voir des problèmes que d’autres acceptent. À surveiller : vous engager dans des conflits épuisants ou rejeter une règle utile simplement parce que c’est une règle.",
      "low": "Vous avez tendance à respecter les règles et à chercher le changement par le dialogue et les voies établies. Cela facilite la vie en commun et la coopération. À surveiller : accepter des situations injustes ou inefficaces pour ne pas créer de malaise.",
      "tips": [
        "Avant de contester une règle, cherchez à comprendre pourquoi elle a été créée.",
        "Transformez vos critiques en propositions concrètes de changement.",
        "Choisissez avec soin les causes qui méritent votre énergie."
      ],
      "examples": [
        "Robin des Bois",
        "Prométhée",
        "Spartacus",
        "Antigone"
      ]
    },
    "magician": {
      "label": "Magicien",
      "desc": "Représente la transformation. Croit que les situations peuvent changer en profondeur et cherche à provoquer ce changement.",
      "high": "Vous voyez des possibilités là où d’autres voient des limites et vous aimez provoquer des transformations. Cela inspire les autres et aide à trouver des issues créatives aux situations difficiles. À surveiller : promettre plus que ce qu’il est possible de tenir ou ressentir de la frustration quand le changement est plus lent que vous ne l’imaginiez.",
      "low": "Vous préférez les améliorations progressives et les résultats concrets aux grandes transformations. Cela apporte réalisme et régularité. À surveiller : douter de changements importants qui seraient possibles avec du temps et des efforts.",
      "tips": [
        "Transformez une grande vision en un premier pas réalisable cette semaine.",
        "Partagez vos idées de changement avec une personne pragmatique qui vous aidera à les tester.",
        "Notez les transformations que vous avez déjà vécues pour vous rappeler ce qui est possible."
      ],
      "examples": [
        "Merlin",
        "Prospero (La Tempête)",
        "La fée marraine (Cendrillon)",
        "Nikola Tesla"
      ]
    },
    "everyperson": {
      "label": "Personne ordinaire",
      "desc": "Représente le désir d’appartenance et de relations d’égal à égal avec les autres. Valorise la simplicité, l’honnêteté et le sens pratique.",
      "high": "Vous vous sentez bien quand vous faites partie d’un groupe et vous traitez les gens d’égal à égal. Les autres se sentent ainsi à l’aise avec vous. À surveiller : cacher vos qualités ou vos opinions pour ne pas vous faire remarquer.",
      "low": "Vous ne cherchez pas particulièrement à vous fondre dans le groupe et vous êtes à l’aise pour vous distinguer ou suivre votre propre voie. Cela vous aide à montrer vos talents. À surveiller : donner une impression de distance ou sous-estimer la valeur de l’appartenance à une communauté.",
      "tips": [
        "Rejoignez des groupes qui partagent vos centres d’intérêt, comme un club de sport, une association de bénévoles ou un club de lecture.",
        "Rappelez-vous qu’être une personne accessible ne vous empêche pas de montrer vos qualités.",
        "Accordez de la valeur aux conversations simples du quotidien : ce sont elles qui construisent la plupart des relations."
      ],
      "examples": [
        "Sancho Panza (Don Quichotte)",
        "Le docteur Watson (Sherlock Holmes)",
        "Bob Cratchit (Un chant de Noël)"
      ]
    },
    "lover": {
      "label": "Amoureux",
      "desc": "Représente l’affection, le lien et la beauté. Accorde de la valeur aux relations proches et aux expériences qui éveillent les sens.",
      "high": "Vous accordez une grande valeur aux relations proches, à la tendresse et aux belles choses de la vie. Cela fait de vous une personne chaleureuse, qui aide les autres à se sentir uniques. À surveiller : trop dépendre de l’approbation des personnes que vous aimez ou mettre vos propres besoins de côté.",
      "low": "Vous avez tendance à exprimer votre affection de façon plus discrète et à privilégier le côté pratique. Cela vous apporte une indépendance émotionnelle. À surveiller : donner une impression de distance aux personnes qui ont besoin de plus de marques d’affection.",
      "tips": [
        "Dites aux personnes qui comptent pour vous ce que vous appréciez chez elles.",
        "Prenez le temps de vivre des expériences qui vous font plaisir, comme un bon repas, une musique ou une belle promenade.",
        "Préservez votre autonomie : les relations saines ont aussi besoin d’espace individuel."
      ],
      "examples": [
        "Roméo et Juliette",
        "Cyrano de Bergerac",
        "Elizabeth Bennet (Orgueil et Préjugés)",
        "Aphrodite"
      ]
    },
    "jester": {
      "label": "Bouffon",
      "desc": "Représente la joie et le plaisir de vivre l’instant présent. Dans les histoires anciennes, c’était celui qui utilisait l’humour pour apaiser les tensions et même pour dire des vérités difficiles.",
      "high": "Vous apportez de la légèreté autour de vous et vous savez profiter du moment présent. Cela rapproche les gens et aide à traverser les périodes difficiles. À surveiller : utiliser l’humour pour fuir les sujets sérieux ou remettre à plus tard des responsabilités importantes.",
      "low": "Vous avez tendance à aborder la vie avec sérieux et concentration. Cela inspire confiance dans les situations qui demandent le sens des responsabilités. À surveiller : porter des soucis inutiles et ne pas profiter des moments de détente et de repos.",
      "tips": [
        "Réservez un moment dans la semaine pour des activités faites uniquement pour le plaisir.",
        "Utilisez l’humour pour rapprocher les gens, et non pour éviter des conversations importantes.",
        "Dans les moments de tension, demandez-vous si cette situation comptera encore dans un an."
      ],
      "examples": [
        "Puck (Le Songe d’une nuit d’été)",
        "Le Chapelier fou (Alice au pays des merveilles)",
        "Falstaff (Shakespeare)",
        "Charlie Chaplin"
      ]
    },
    "caregiver": {
      "label": "Protecteur",
      "desc": "Représente la protection et le soin. Trouve du sens dans le fait de contribuer au bien-être des autres.",
      "high": "Vous percevez les besoins des autres et vous avez envie d’aider et de protéger. Cela fait de vous une personne en qui les gens ont confiance dans les moments difficiles. À surveiller : vous surcharger ou oublier de prendre soin de vous pendant que vous prenez soin des autres.",
      "low": "Vous avez tendance à encourager l’autonomie des gens plutôt qu’à prendre leurs problèmes en charge. Cela aide à maintenir des limites saines. À surveiller : ne pas voir quand un proche a vraiment besoin de soutien.",
      "tips": [
        "Prenez soin de vous avec la même attention que celle que vous accordez aux autres.",
        "Avant d’aider, demandez à la personne ce dont elle a vraiment besoin.",
        "Entraînez-vous à dire non quand une demande dépasse vos limites."
      ],
      "examples": [
        "Florence Nightingale",
        "Anne Sullivan",
        "Albert Schweitzer"
      ]
    },
    "creator": {
      "label": "Créateur",
      "desc": "Représente l’imagination et le désir de créer quelque chose d’original et de durable. Veut donner forme à ses propres idées.",
      "high": "Vous ressentez le besoin d’imaginer et de transformer des idées en quelque chose de concret. Cela apporte de l’originalité à tout ce que vous faites. À surveiller : le perfectionnisme, car vouloir que tout soit exactement comme vous l’aviez imaginé peut retarder ou empêcher l’aboutissement de vos projets.",
      "low": "Vous vous sentez bien en appliquant et en améliorant ce qui existe déjà, sans avoir besoin de créer quelque chose d’entièrement nouveau. Cela apporte efficacité et sens pratique. À surveiller : laisser de côté des idées personnelles qui pourraient avoir de la valeur si elles étaient développées.",
      "tips": [
        "Réservez un créneau fixe dans la semaine pour un projet créatif personnel.",
        "Définissez ce que « terminé » veut dire avant de commencer, pour ne pas faire des ajustements sans fin.",
        "Montrez votre travail à d’autres personnes avant de le trouver parfait."
      ],
      "examples": [
        "Léonard de Vinci",
        "Geppetto (Pinocchio)",
        "Jo March (Les Quatre Filles du docteur March)",
        "Frida Kahlo"
      ]
    },
    "ruler": {
      "label": "Souverain",
      "desc": "Représente l’ordre, la responsabilité et la stabilité. Aime diriger et créer des structures qui fonctionnent bien.",
      "high": "Vous prenez des responsabilités avec naturel et vous aimez organiser les personnes et les ressources pour que tout fonctionne bien. Cela rassure votre entourage. À surveiller : vouloir tout contrôler et avoir du mal à gérer les situations qui sortent du cadre prévu.",
      "low": "Vous n’éprouvez pas le besoin d’être aux commandes et vous préférez partager les décisions avec le groupe. Cela favorise la collaboration et la souplesse. À surveiller : hésiter quand le groupe a besoin de quelqu’un qui prenne la responsabilité.",
      "tips": [
        "Déléguez des tâches et faites confiance à la façon de faire de chacun.",
        "Quand vous dirigez, expliquez les raisons de vos décisions, et pas seulement ce qu’il faut faire.",
        "Quand quelque chose vous échappe, concentrez-vous sur ce qui dépend encore de vous."
      ],
      "examples": [
        "Le roi Arthur",
        "Élisabeth Ire d’Angleterre",
        "Marc Aurèle",
        "Cléopâtre"
      ]
    }
  },
  "resultTitle": "Vos archétypes principaux",
  "resultIntro": "Voici les trois archétypes qui obtiennent les scores les plus élevés. Presque tout le monde en combine plusieurs, et cette combinaison peut changer selon les périodes de la vie. Utilisez ce résultat pour réfléchir à ce qui vous anime, et non comme une étiquette.",
  "note": "Les archétypes sont une idée symbolique, utilisée dans les récits et dans la réflexion sur l’identité. Ce questionnaire est un outil de connaissance de soi : ce n’est pas un test psychologique validé et il ne remplace pas l’évaluation d’un professionnel."
};

export default t;
