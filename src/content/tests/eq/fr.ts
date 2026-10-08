import type { TestText } from '../../schema';

const t: TestText = {
  "title": "Intelligence émotionnelle",
  "desc": "Découvrez comment vous percevez et gérez vos propres émotions, et celles des autres, au quotidien.",
  "intro": "Ce questionnaire évalue quatre domaines de l’intelligence émotionnelle : la conscience de soi, la maîtrise de soi, l’empathie et les compétences sociales. Il comporte 24 affirmations sur des situations du quotidien. Pour chacune, indiquez dans quelle mesure elle décrit votre façon habituelle d’agir, et non celle que vous pensez devoir adopter. Il n’y a pas de bonnes réponses : plus vous serez sincère, plus le résultat sera utile.",
  "scale": [
    "Pas du tout d’accord",
    "Pas d’accord",
    "Neutre",
    "D’accord",
    "Tout à fait d’accord"
  ],
  "items": [
    "J’arrive à mettre un nom sur ce que je ressens, même quand c’est un mélange d’émotions.",
    "Quand je suis en colère, j’arrive à attendre un peu avant de répondre.",
    "Je remarque quand quelqu’un est contrarié, même si la personne ne dit rien.",
    "J’arrive à régler un désaccord sans que la conversation tourne à la dispute.",
    "Souvent, je ne me rends compte de ce que j’ai ressenti qu’une fois la situation passée.",
    "Dans les disputes, je finis par dire des choses que je regrette ensuite.",
    "Avant de juger quelqu’un, j’essaie de comprendre ce que la personne traverse.",
    "J’évite les conversations difficiles, même quand elles sont nécessaires.",
    "Je remarque quand mon humeur influence mes décisions.",
    "Après une mauvaise journée, j’arrive à me calmer sans m’en prendre aux autres.",
    "J’ai du mal à comprendre pourquoi certaines personnes réagissent aussi fortement.",
    "Je sais refuser une demande de façon ferme et polie.",
    "Je sais quelles situations ont tendance à me faire sortir de mes gonds.",
    "Quand on me fait une critique, j’écoute jusqu’au bout avant de me défendre.",
    "Quand quelqu’un me parle d’un problème, j’écoute attentivement au lieu de penser déjà à ce que je vais répondre.",
    "Quand je travaille en groupe, j’aide les autres à trouver un accord.",
    "J’ai du mal à expliquer ce que je ressens.",
    "Quand quelque chose tourne mal, il me faut beaucoup de temps pour arrêter d’y penser.",
    "En arrivant quelque part, je perçois généralement tout de suite l’ambiance.",
    "Dans un nouvel environnement, j’ai du mal à aller vers les autres.",
    "Je remarque des signaux dans mon corps, comme de la tension ou de la fatigue, quand quelque chose m’affecte.",
    "J’arrive à me concentrer sur ce que j’ai à faire, même lors d’une journée émotionnellement difficile.",
    "Quand quelqu’un ne pense pas comme moi, j’ai peu de patience pour écouter ses raisons.",
    "Je sais signaler un problème dans le travail de quelqu’un sans que la personne se sente attaquée."
  ],
  "dims": {
    "selfAwareness": {
      "label": "Conscience de soi",
      "desc": "Percevoir et nommer ce que vous ressentez, comprendre d’où viennent ces émotions et comment elles influencent vos actions.",
      "high": "Vous percevez généralement ce que vous ressentez et pourquoi, souvent avant de réagir. Cela vous aide à prendre des décisions plus réfléchies et à exprimer vos besoins aux autres. À surveiller : analyser chaque émotion en détail au lieu d’avancer.",
      "low": "Vous avez tendance à vous concentrer sur ce qu’il y a à faire plus que sur ce que vous ressentez, ce qui vous aide à agir de façon pragmatique. À surveiller : ne remarquer vos émotions qu’une fois la situation passée, alors qu’elles ont déjà influencé votre comportement.",
      "tips": [
        "Plusieurs fois par jour, arrêtez-vous quelques secondes et demandez-vous : qu’est-ce que je ressens en ce moment ?",
        "Au lieu de dire simplement que ça « ne va pas », essayez de voir s’il s’agit de fatigue, de frustration, de tristesse ou d’anxiété.",
        "Notez les situations qui ont suscité chez vous une émotion forte et ce qui s’est passé juste avant."
      ]
    },
    "selfRegulation": {
      "label": "Maîtrise de soi",
      "desc": "Gérer les émotions fortes sans agir sur un coup de tête, retrouver son calme et garder le cap même les jours difficiles.",
      "high": "Vous pouvez ressentir de la colère, de la frustration ou de l’anxiété sans les laisser dicter votre comportement. Cela inspire confiance et évite des conflits inutiles. À surveiller : garder pour vous des émotions qui mériteraient d’être exprimées, ce qui peut accumuler des tensions.",
      "low": "Vous réagissez vite et intensément, et les autres savent généralement exactement ce que vous ressentez. Cette spontanéité peut être sincère et pleine d’énergie. À surveiller : les réactions à chaud, qui provoquent parfois des regrets ou abîment les relations.",
      "tips": [
        "Quand vous sentez l’émotion monter, faites une courte pause, respirez profondément et ne répondez qu’ensuite.",
        "Évitez de prendre des décisions ou d’envoyer des messages importants quand vous êtes très en colère.",
        "Ayez une soupape régulière, comme le sport, une promenade ou une discussion avec une personne de confiance."
      ]
    },
    "empathy": {
      "label": "Empathie",
      "desc": "Percevoir ce que les autres ressentent et comprendre leur point de vue, même quand il est différent du vôtre.",
      "high": "Vous percevez facilement l’ambiance d’un lieu et ce que ressentent les gens, même sans mots. Les autres se sentent compris à vos côtés. À surveiller : absorber les émotions des autres au point de vous épuiser.",
      "low": "Vous avez tendance à vous concentrer sur les faits et sur le problème lui-même, plus que sur les émotions en jeu. Cela vous aide à garder votre objectivité dans les situations délicates. À surveiller : passer à côté de signes montrant que quelqu’un a besoin de soutien, ou donner une impression de distance sans le vouloir.",
      "tips": [
        "Dans les conversations importantes, reformulez avec vos mots ce que vous avez compris avant de répondre.",
        "Demandez à la personne comment elle vit la situation avant de passer directement aux solutions.",
        "Observez les expressions, le ton de la voix et les silences, pas seulement ce qui est dit."
      ]
    },
    "social": {
      "label": "Compétences sociales",
      "desc": "Communiquer clairement, résoudre les conflits, coopérer et construire de bonnes relations, au travail comme dans la vie personnelle.",
      "high": "Vous êtes à l’aise dans les conversations difficiles, vous savez affirmer votre position et vous aidez les groupes à trouver un accord. C’est pourquoi on vient souvent vous voir quand quelque chose doit être réglé. À surveiller : prendre sur vous la résolution de tous les conflits, au risque de vous surcharger.",
      "low": "Vous préférez éviter les frictions et vous vous sentez plus à l’aise avec les personnes que vous connaissez bien. Cela donne souvent des relations paisibles et peu de disputes. À surveiller : repousser des conversations nécessaires, au risque de laisser les problèmes grossir ou vos besoins sans réponse.",
      "tips": [
        "Pour faire un retour difficile, parlez du comportement et de son impact, pas de la personne.",
        "Entraînez-vous à dire non avec une phrase courte et polie, sans longues justifications.",
        "Dans un nouvel environnement, posez une question simple pour lancer la conversation : les gens aiment parler de ce qu’ils font."
      ]
    }
  },
  "resultTitle": "Votre profil d’intelligence émotionnelle",
  "resultIntro": "Voici votre score dans chaque domaine. Ces compétences se développent avec la pratique : utilisez ce résultat comme un point de départ, pas comme une étiquette.",
  "note": "Ce questionnaire est un outil de connaissance de soi fondé sur votre propre perception. Ce n’est pas un test psychologique validé et il ne remplace pas l’évaluation d’un professionnel."
};

export default t;
