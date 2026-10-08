// stress — French translation of pt.ts
import type { TestText } from '../../schema';

const t: TestText = {
  "title": "Niveau de stress",
  "desc": "Voyez à quel point la surcharge a pesé ce dernier mois et où en est votre capacité à reprendre votre souffle.",
  "intro": "Ce questionnaire évalue le stress sous deux angles : la surcharge et la pression que vous avez ressenties, et le sentiment de contrôle et de récupération qui aide à équilibrer ce poids. Il comporte 12 affirmations portant sur le dernier mois. Pour chacune, indiquez à quelle fréquence elle vous est arrivée pendant cette période. Certaines affirmations décrivent des situations positives : répondez-y de la même façon, en pensant seulement à la fréquence. Il s’agit d’une auto-évaluation fondée sur vos réponses, qui ne remplace pas l’évaluation d’un professionnel.",
  "scale": [
    "Jamais",
    "Presque jamais",
    "Parfois",
    "Souvent",
    "Très souvent"
  ],
  "items": [
    "J’ai eu l’impression d’avoir plus de tâches et de responsabilités que d’heures dans la journée.",
    "J’ai réussi à prendre du temps pour me reposer, sans culpabiliser.",
    "J’ai fini la journée avec le sentiment que les choses à faire ne faisaient que s’accumuler.",
    "Quand un problème est survenu, j’ai réussi à m’arrêter et à réfléchir calmement à ce qu’il fallait faire.",
    "J’ai ressenti une forte pression, venant des autres ou de moi-même, pour tout gérer.",
    "J’ai eu le sentiment de pouvoir organiser ma journée comme j’en avais besoin.",
    "J’ai perdu patience pour des choses qui, d’habitude, ne me dérangeraient pas.",
    "Après une journée difficile, une bonne nuit de sommeil ou un moment de loisir a suffi pour que je récupère.",
    "J’ai continué à penser à ce qui me restait à faire même pendant les moments censés être consacrés au repos.",
    "J’ai pu compter sur quelqu’un quand j’ai eu besoin de me confier ou de demander de l’aide.",
    "J’ai ressenti des signes physiques de tension, comme des maux de tête, une mâchoire crispée ou une fatigue qui ne passait pas.",
    "J’ai réussi à dire non ou à reporter des demandes quand j’avais déjà trop de choses à faire."
  ],
  "dims": {
    "load": {
      "label": "Surcharge et pression",
      "desc": "Mesure à quel point vous avez ressenti un excès de tâches, d’exigences et de tension, et à quel point cela a persisté même pendant vos heures de repos.",
      "high": "Ce dernier mois, le sentiment de surcharge a été fréquent : beaucoup de choses à faire, des exigences et peu de répit pour la tête. Le corps et l’esprit peuvent tenir ce rythme un certain temps, mais il a un prix quand il dure longtemps. Il peut être utile de regarder ce qui peut être réduit, partagé ou reporté.",
      "low": "Ce dernier mois, la pression a été peu présente ou est restée à un niveau que vous avez pu gérer. Cela ne veut pas dire qu’il n’y a pas eu de défis, mais ils ne semblent pas s’être accumulés. Observez ce qui a fonctionné pour garder cet équilibre.",
      "tips": [
        "Listez les tâches de la semaine et distinguez ce qui est vraiment urgent, ce qui peut attendre et ce qui peut être partagé avec d’autres personnes.",
        "Faites de courtes pauses au cours de la journée, loin des écrans, même de cinq minutes.",
        "Fixez des limites claires, comme une heure à partir de laquelle vous ne répondez plus aux messages professionnels."
      ]
    },
    "coping": {
      "label": "Contrôle et récupération en baisse",
      "desc": "Mesure le manque des ressources qui équilibrent le stress, comme sentir que votre quotidien est entre vos mains, vous reposer, compter sur du soutien et poser des limites. Les affirmations de cette partie sont positives : le score augmente donc quand elles se sont peu produites.",
      "high": "Ce dernier mois, les moments de repos, de soutien et de sentiment de contrôle ont été rares. Sans ces pauses, même un quotidien ordinaire pèse plus lourd, parce qu’il ne reste pas d’espace pour reprendre son souffle. Renforcer ces ressources petit à petit est l’un des moyens les plus efficaces de réduire le stress.",
      "low": "Vous avez réussi à vous reposer, à demander de l’aide et à sentir que votre quotidien est, en bonne partie, entre vos mains. Ces ressources fonctionnent comme un amortisseur : elles aident à traverser les périodes difficiles sans s’épuiser. Continuez à protéger ces moments, surtout quand le quotidien devient plus intense.",
      "tips": [
        "Protégez votre sommeil : essayez de vous coucher et de vous lever à des heures semblables, y compris le week-end.",
        "Inscrivez dans votre agenda au moins une activité par semaine qui vous apporte du plaisir ou du repos, et traitez ce moment comme un rendez-vous.",
        "Dites à une personne de confiance comment vous allez : partager le poids aide déjà à l’alléger."
      ]
    }
  },
  "bands": {
    "low": {
      "label": "Stress faible",
      "text": "Vos réponses indiquent un niveau de stress faible ce dernier mois. Vous semblez trouver un bon équilibre entre les exigences du quotidien et les moments de récupération. Continuez à prendre soin des habitudes qui soutiennent cet équilibre."
    },
    "moderate": {
      "label": "Stress modéré",
      "text": "Vos réponses indiquent un niveau de stress modéré, ce qui est courant dans les périodes très chargées. Le point de vigilance, c’est quand cet état devient la norme, sans périodes de répit. Essayez les suggestions ci-dessous et, si le stress commence à affecter votre sommeil, votre santé ou vos relations, parlez-en à un professionnel."
    },
    "high": {
      "label": "Stress élevé",
      "text": "Vos réponses indiquent un niveau de stress élevé ce dernier mois, avec beaucoup de pression et peu d’espace pour récupérer. Quand cette situation se prolonge, elle peut affecter le sommeil, l’humeur et la santé physique. Il peut être utile de demander l’aide d’un professionnel, comme un psychologue ou un médecin, pour comprendre ce qui pèse et trouver des façons d’alléger la charge."
    }
  },
  "resultTitle": "Votre niveau de stress",
  "resultIntro": "Le résultat additionne vos réponses sur le dernier mois. Pour les affirmations sur le contrôle et la récupération, le calcul est inversé : moins ces ressources étaient présentes, plus le résultat augmente. Ci-dessous, vous voyez le niveau dans lequel vous vous situez et votre score pour chaque partie.",
  "note": "Ce questionnaire est un outil de connaissance de soi, fondé sur votre propre perception du dernier mois. Ce n’est pas un diagnostic et il ne remplace pas l’évaluation d’un professionnel qualifié. Le niveau de stress varie aussi beaucoup d’une période de la vie à l’autre.",
  "help": "Si le stress affecte votre santé, votre sommeil ou vos relations, adressez-vous à un psychologue ou à votre médecin. Les services de santé de votre région peuvent aussi vous accompagner et, si nécessaire, vous orienter vers des services spécialisés en santé mentale. Si vous traversez une souffrance intense, contactez une ligne d’écoute ou de soutien émotionnel de votre pays. En cas d’urgence, appelez le numéro d’urgence local."
};

export default t;
