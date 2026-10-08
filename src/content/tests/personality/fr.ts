import type { TestText } from '../../schema';

const t: TestText = {
  "title": "Profil de personnalité",
  "desc": "Découvrez où vous vous situez sur les cinq grands traits de personnalité, l’un des modèles les plus étudiés en psychologie.",
  "intro": "Ce questionnaire mesure cinq grands traits de personnalité : l’ouverture à l’expérience, l’organisation, l’extraversion, l’amabilité et la stabilité émotionnelle. Les 50 affirmations sont adaptées de l’IPIP, une banque d’items du domaine public utilisée en recherche. Pour chacune, indiquez dans quelle mesure elle décrit la personne que vous êtes aujourd’hui, et non celle que vous aimeriez être. Il n’y a pas de bonnes ou de mauvaises réponses, et aucun trait n’est meilleur qu’un autre. Répondez avec sincérité, sans trop réfléchir : la première impression est souvent la plus juste.",
  "scale": [
    "Pas du tout d’accord",
    "Pas d’accord",
    "Neutre",
    "D’accord",
    "Tout à fait d’accord"
  ],
  "items": [
    "Je suis le boute-en-train des soirées.",
    "Je me soucie peu des autres.",
    "Je me prépare toujours à l’avance.",
    "Je stresse facilement.",
    "J’ai un vocabulaire riche.",
    "Je ne parle pas beaucoup.",
    "Les gens m’intéressent.",
    "Je laisse traîner mes affaires.",
    "La plupart du temps, je reste calme.",
    "J’ai du mal à comprendre les idées abstraites.",
    "Je me sens à l’aise avec les autres.",
    "Je fais des remarques qui blessent les gens.",
    "Je fais attention aux détails.",
    "J’ai tendance à me faire du souci.",
    "J’ai une imagination fertile.",
    "Je préfère rester en retrait.",
    "Ce que ressentent les autres compte pour moi.",
    "Je mets le désordre partout.",
    "J’ai rarement le moral en berne.",
    "Les idées abstraites ne m’intéressent pas.",
    "C’est souvent moi qui engage la conversation.",
    "Les problèmes des autres ne m’intéressent pas.",
    "Je fais mes tâches tout de suite, sans les remettre à plus tard.",
    "Je me laisse facilement déstabiliser.",
    "J’ai d’excellentes idées.",
    "En général, j’ai peu de choses à dire.",
    "J’ai le cœur tendre.",
    "J’oublie souvent de ranger les choses à leur place.",
    "Un rien me contrarie.",
    "Je n’ai pas beaucoup d’imagination.",
    "En soirée, je discute avec beaucoup de personnes différentes.",
    "Au fond, les autres ne m’intéressent pas vraiment.",
    "J’aime que les choses soient en ordre.",
    "Mon humeur change beaucoup.",
    "Je comprends les choses rapidement.",
    "Je n’aime pas attirer l’attention sur moi.",
    "Je prends du temps pour aider les autres.",
    "Je fuis mes obligations.",
    "J’ai souvent des sautes d’humeur.",
    "J’utilise des mots compliqués.",
    "Être au centre de l’attention ne me dérange pas.",
    "Je ressens les émotions des autres.",
    "Je m’en tiens à une routine planifiée.",
    "Je m’agace facilement.",
    "Je prends le temps de réfléchir aux choses.",
    "Je parle peu en présence de personnes que je ne connais pas.",
    "Je mets les gens à l’aise.",
    "J’ai des exigences élevées pour la qualité de mon travail.",
    "J’ai souvent le moral en berne.",
    "J’ai toujours la tête pleine d’idées."
  ],
  "dims": {
    "openness": {
      "label": "Ouverture à l’expérience",
      "desc": "Mesure la curiosité, l’imagination et l’intérêt pour les idées nouvelles, abstraites ou différentes de l’ordinaire.",
      "high": "Vous aimez explorer des idées, apprendre des choses variées et imaginer des possibilités. Cela vous aide à trouver des solutions originales et à vous adapter au changement. À surveiller : la tendance à vous disperser entre trop de centres d’intérêt et à laisser des projets inachevés.",
      "low": "Vous préférez ce qui est concret, connu et éprouvé dans la pratique. Cela vous apporte de la concentration, du bon sens et de l’efficacité au quotidien. À surveiller : la tendance à écarter trop vite les idées nouvelles, avant de comprendre ce qu’elles peuvent apporter.",
      "tips": [
        "Essayez de temps en temps quelque chose de nouveau, comme un livre d’un autre genre ou un autre chemin pour rentrer chez vous.",
        "Face à une idée différente, demandez-vous « qu’est-ce qui est utile ici ? » avant de trancher.",
        "Si vous avez beaucoup de centres d’intérêt, choisissez-en un à la fois et menez-le jusqu’au bout."
      ]
    },
    "conscientiousness": {
      "label": "Organisation",
      "desc": "Mesure à quel point vous planifiez, tenez vos engagements et soignez les détails, autrement dit votre discipline et votre sens des responsabilités.",
      "high": "Vous avez l’habitude de planifier, de respecter les délais et de soigner les détails, et les autres savent qu’ils peuvent compter sur vous. À surveiller : l’excès d’exigence. Le perfectionnisme et la difficulté à gérer les imprévus peuvent vous épuiser.",
      "low": "Vous abordez vos tâches de façon souple et spontanée, sans vous enfermer dans des plans rigides. Cela vous aide à improviser et à vous adapter quand quelque chose change. À surveiller : la tendance à repousser les choses importantes à la dernière minute ou à perdre de vue les échéances.",
      "tips": [
        "Découpez les grandes tâches en petites étapes et donnez une échéance à chacune.",
        "Utilisez une liste ou un agenda simple, et relisez-le en début de journée.",
        "Définissez ce qui est « assez bien » avant de commencer, pour que le perfectionnisme ne vous paralyse pas."
      ]
    },
    "extraversion": {
      "label": "Extraversion",
      "desc": "Mesure à quel point vous recherchez la compagnie des autres, la conversation et les environnements animés, et à quel point cela vous ressource.",
      "high": "Vous puisez votre énergie dans le contact avec les autres, vous engagez facilement la conversation et vous vous sentez bien dans les lieux animés. Cela vous aide à créer des liens et à prendre la parole en public. À surveiller : parler plus qu’écouter, ou avoir du mal avec les tâches qui demandent du temps en solitaire.",
      "low": "Vous préférez les petits groupes, les conversations approfondies et les moments de calme pour recharger vos batteries. Cela favorise la concentration, l’écoute et la réflexion avant d’agir. À surveiller : garder vos idées et votre travail pour vous, simplement pour éviter d’attirer l’attention.",
      "tips": [
        "Observez ce qui vous ressource, être avec d’autres personnes ou vous retrouver au calme, et réservez du temps pour cela.",
        "En réunion, si vous parlez beaucoup, posez une question avant de donner votre avis ; si vous parlez peu, essayez de partager au moins une idée.",
        "Être une personne réservée, ce n’est pas la même chose qu’être timide : on peut aimer le calme et très bien communiquer."
      ]
    },
    "agreeableness": {
      "label": "Amabilité",
      "desc": "Mesure à quel point vous vous souciez des autres, faites confiance aux gens et préférez coopérer plutôt que rivaliser.",
      "high": "Vous êtes une personne attentionnée, chaleureuse et prête à aider. Cela crée des relations de confiance et une bonne ambiance autour de vous. À surveiller : faire toujours passer les besoins des autres avant les vôtres et avoir du mal à dire non.",
      "low": "Vous avez tendance à être une personne directe, pragmatique et critique, qui n’a pas peur d’exprimer son désaccord. Cela vous aide à négocier, à défendre vos positions et à prendre des décisions difficiles. À surveiller : paraître brusque sans le vouloir et éloigner des personnes qui pourraient collaborer avec vous.",
      "tips": [
        "Avant d’exprimer un désaccord, montrez que vous avez compris le point de vue de l’autre.",
        "Entraînez-vous à refuser avec gentillesse les demandes qui empiètent sur vos priorités.",
        "Rappelez-vous qu’on peut être à la fois aimable et ferme."
      ]
    },
    "stability": {
      "label": "Stabilité émotionnelle",
      "desc": "Mesure votre capacité à garder votre calme face à la pression, aux soucis et aux frustrations. Un score élevé indique plus de sérénité ; un score bas, une plus grande sensibilité au stress.",
      "high": "Vous gardez généralement votre calme sous pression et vous vous remettez vite des contretemps. Cela rassure votre entourage et vous aide à penser clairement dans les moments difficiles. À surveiller : minimiser des problèmes réels ou ne pas remarquer qu’un proche est en souffrance.",
      "low": "Vous ressentez les émotions avec intensité et repérez les risques et les problèmes avant beaucoup d’autres. Cette sensibilité vous aide à vous préparer et à prendre les choses au sérieux. À surveiller : l’usure. Les soucis et le stress fréquents fatiguent, et il vaut la peine d’avoir des stratégies pour y faire face.",
      "tips": [
        "Prenez soin des bases : le sommeil, l’alimentation et l’activité physique ont un effet réel sur l’humeur.",
        "Quand une inquiétude surgit, notez ce que vous pensez et quelle serait la prochaine étape possible.",
        "Si le stress ou la tristesse perturbent votre quotidien, parlez-en à un professionnel de santé mentale."
      ]
    }
  },
  "resultTitle": "Votre profil de personnalité",
  "resultIntro": "Chaque barre montre où vous vous situez entre les deux extrêmes d’un trait. Un score élevé ou bas n’est ni bon ni mauvais : chaque côté a ses atouts et ses points de vigilance.",
  "note": "Ce résultat est un outil de connaissance de soi fondé sur vos propres réponses. Ce n’est pas un diagnostic et il ne remplace pas l’évaluation d’un psychologue. La personnalité évolue aussi au fil de la vie et selon le contexte."
};

export default t;
