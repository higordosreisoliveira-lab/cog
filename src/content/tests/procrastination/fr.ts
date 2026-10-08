import type { TestText } from '../../schema';

// procrastination — French translation of pt.ts
const t: TestText = {
  "title": "Procrastination",
  "desc": "Découvrez ce qui vous pousse le plus souvent à remettre vos tâches à plus tard et des stratégies pratiques adaptées à chaque raison.",
  "intro": "Presque tout le monde remet des tâches à plus tard de temps en temps, mais les raisons varient d’une personne à l’autre. Ce questionnaire évalue quatre raisons courantes : éviter l’inconfort, la peur de ne pas faire parfaitement, la distraction et le manque de clarté dans la planification. Il comporte 16 affirmations. Pensez aux dernières semaines et indiquez à quelle fréquence chaque situation vous arrive. Il n’y a pas de bonnes réponses : l’objectif est de comprendre ce qui pèse le plus dans votre cas pour choisir les bonnes stratégies.",
  "scale": [
    "Jamais",
    "Rarement",
    "Parfois",
    "Souvent",
    "Toujours"
  ],
  "items": [
    "Je repousse les tâches qui me causent de l’anxiété, même en sachant qu’elles sont importantes.",
    "Je tarde à commencer parce que j’ai l’impression que tout doit être parfait dès le départ.",
    "Je prends mon téléphone pour regarder quelque chose rapidement et je finis par y passer beaucoup plus de temps que prévu.",
    "Je repousse une tâche parce que je ne sais pas exactement par où commencer.",
    "Je remets à plus tard les appels, les messages ou les conversations qui risquent d’être difficiles.",
    "Je passe tellement de temps à revoir et à retoucher un travail que je finis par le rendre en retard.",
    "Au milieu d’une tâche, je passe à autre chose dès que quelque chose de plus intéressant se présente.",
    "J’ai tellement de choses à faire que je ne sais pas par laquelle commencer.",
    "J’évite d’ouvrir des e-mails, des factures ou des messages par crainte de ce que je pourrais y trouver.",
    "Je préfère ne pas commencer plutôt que de risquer de faire quelque chose en dessous de ce que j’attends de moi.",
    "Les notifications, les conversations ou les bruits autour de moi me détournent facilement de ce que je fais.",
    "J’évalue mal le temps que prendra une tâche et je me retrouve avec moins de temps que nécessaire.",
    "Quand une tâche me semble ennuyeuse ou désagréable, je cherche autre chose de plus agréable à faire.",
    "J’attends le moment idéal, avec beaucoup de temps et d’énergie, pour commencer les tâches importantes.",
    "Je fais ce dont j’ai envie sur le moment, même en sachant que je devrais faire autre chose.",
    "Quand une tâche est grande ou floue, j’ai du mal à la transformer en étapes concrètes."
  ],
  "dims": {
    "avoidance": {
      "label": "Éviter l’inconfort",
      "desc": "Repousser des tâches parce qu’elles provoquent de l’ennui, de l’anxiété, de la peur ou d’autres sensations désagréables.",
      "high": "Une bonne partie de vos reports semble venir de l’envie de fuir des sensations désagréables, comme l’anxiété, l’ennui ou la peur d’une réponse négative. Cela montre que vous ressentez vos émotions avec intensité, ce qui vous aide aussi à percevoir ce qui compte. À surveiller : le soulagement de repousser dure peu, et la tâche devient souvent encore plus lourde ensuite.",
      "low": "L’inconfort d’une tâche vous empêche rarement de la commencer. Cette capacité à affronter ce qui est ennuyeux ou difficile est un grand atout. À surveiller : vous forcer à continuer même quand la fatigue ou la surcharge réclament une pause.",
      "tips": [
        "Commencez par seulement deux minutes : ouvrez le fichier ou écrivez la première phrase. Ensuite, vous pouvez vous arrêter si vous le voulez. Commencer est souvent le plus difficile.",
        "Mettez un nom sur ce que vous ressentez, par exemple « j’ai peur de recevoir une critique ». Reconnaître l’émotion diminue souvent sa force.",
        "Faites la tâche la plus désagréable dès le début de la journée, avant d’ouvrir vos e-mails ou les réseaux sociaux."
      ]
    },
    "perfectionism": {
      "label": "Perfectionnisme",
      "desc": "Repousser des tâches par peur de ne pas les faire assez bien ou en attendant le moment idéal pour commencer.",
      "high": "Vous semblez repousser certaines choses parce que vous voulez qu’elles soient parfaites ou parce que vous attendez d’avoir le temps et l’énergie idéaux pour commencer. Ce soin montre que vous prenez votre travail au sérieux et que vous avez des exigences élevées. À surveiller : le moment idéal arrive rarement, et la peur de mal faire peut retarder ou empêcher des rendus importants.",
      "low": "Vous commencez généralement même si tout n’est pas parfait et vous acceptez de faire des ajustements en cours de route. Cela vous apporte de la réactivité et vous aide à apprendre par la pratique. À surveiller : rendre un travail moins soigné que ce que la situation demandait, surtout pour les tâches importantes.",
      "tips": [
        "Avant de commencer, écrivez ce qui serait « assez bien » pour cette tâche.",
        "Faites une première version rapide, en sachant qu’elle sera améliorée ensuite.",
        "Fixez une limite de temps pour les révisions et rendez le travail quand elle est atteinte."
      ]
    },
    "distraction": {
      "label": "Distraction et impulsivité",
      "desc": "Repousser des tâches parce que l’attention est attirée par des sollicitations plus immédiates, comme le téléphone, les conversations ou des activités plus agréables.",
      "high": "Votre attention semble facilement attirée par les notifications, les conversations ou des activités plus intéressantes que la tâche du moment. Cette sensibilité à la nouveauté peut aussi apporter de la réactivité et de la créativité. À surveiller : mises bout à bout, les petites interruptions vous prennent des heures dans la journée sans que vous vous en rendiez compte.",
      "low": "Vous arrivez à rester dans votre tâche même avec des sollicitations autour de vous et vous résistez bien à l’envie de la délaisser pour quelque chose de plus agréable. C’est un grand atout pour les travaux qui demandent de la concentration. À surveiller : vous enfermer dans la tâche au point de ne pas remarquer des demandes ou des changements importants autour de vous.",
      "tips": [
        "Laissez votre téléphone dans une autre pièce ou en mode silencieux pendant que vous travaillez sur quelque chose d’important.",
        "Travaillez par blocs de 25 minutes, avec des pauses de 5 minutes entre chacun.",
        "Notez les idées et les envies qui surgissent pendant la tâche pour vous en occuper plus tard, au lieu d’interrompre ce que vous faites."
      ]
    },
    "planning": {
      "label": "Manque de clarté et de planification",
      "desc": "Repousser des tâches parce qu’on ne voit pas clairement par où commencer, quoi faire en premier ou combien de temps chaque chose prendra.",
      "high": "Souvent, vous repoussez non pas par manque d’envie, mais parce que la tâche semble grande, floue ou confuse. Cela montre que vous percevez la complexité des choses. À surveiller : sans étapes concrètes, même les tâches simples paraissent difficiles et finissent par être remises à plus tard.",
      "low": "Vous savez généralement par où commencer et vous arrivez à transformer les grandes tâches en étapes pratiques. Cela vous aide à garder le rythme et à respecter les délais. À surveiller : planifier avec une telle précision qu’il devient difficile de s’adapter quand quelque chose change.",
      "tips": [
        "Découpez chaque grande tâche en étapes de 30 minutes maximum et écrivez quelle est la première.",
        "Décidez à l’avance quand et où vous ferez la tâche, par exemple : « Mardi, à 9 h, à mon bureau, j’écrirai l’introduction du rapport ».",
        "Estimez le temps que prendra chaque tâche et ajoutez une marge d’au moins 50 %."
      ]
    }
  },
  "resultTitle": "Pourquoi vous remettez les choses à plus tard",
  "resultIntro": "Chaque barre montre à quel point une raison ressort dans vos réponses. Plus le score est élevé, plus ce facteur contribue à vos reports. Commencez par les stratégies de la raison qui obtient le score le plus élevé.",
  "note": "Ce questionnaire est un outil de connaissance de soi et non un diagnostic. Si la difficulté à commencer ou à terminer des tâches est constante et perturbe vos études, votre travail ou votre vie personnelle, il peut être utile d’en parler à un professionnel de santé, car elle peut être liée à des difficultés comme l’anxiété, la dépression ou le TDAH."
};

export default t;
