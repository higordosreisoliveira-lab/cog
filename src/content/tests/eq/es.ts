import type { TestText } from '../../schema';

const t: TestText = {
  "title": "Inteligencia emocional",
  "desc": "Descubre cómo percibes y manejas tus propias emociones y las de otras personas en el día a día.",
  "intro": "Este cuestionario evalúa cuatro áreas de la inteligencia emocional: autoconciencia, autocontrol, empatía y habilidades sociales. Son 24 frases sobre situaciones cotidianas. Para cada una, indica cuánto describe cómo sueles actuar, y no cómo crees que deberías actuar. No hay respuestas correctas: cuanto más sinceras sean tus respuestas, más útil será el resultado.",
  "scale": [
    "Totalmente en desacuerdo",
    "En desacuerdo",
    "Neutral",
    "De acuerdo",
    "Totalmente de acuerdo"
  ],
  "items": [
    "Puedo ponerle nombre a lo que siento, incluso cuando es una mezcla de emociones.",
    "Cuando me enojo, puedo esperar un momento antes de responder.",
    "Me doy cuenta cuando alguien está molesto, aunque no diga nada.",
    "Puedo resolver desacuerdos sin que la conversación se convierta en una pelea.",
    "Muchas veces solo me doy cuenta de lo que sentí cuando la situación ya pasó.",
    "En las discusiones, termino diciendo cosas de las que después me arrepiento.",
    "Antes de juzgar a alguien, trato de entender lo que está viviendo.",
    "Evito las conversaciones difíciles, aun cuando son necesarias.",
    "Me doy cuenta cuando mi estado de ánimo está influyendo en mis decisiones.",
    "Después de un mal día, puedo calmarme sin desquitarme con los demás.",
    "Me cuesta entender por qué algunas personas reaccionan con tanta intensidad.",
    "Puedo decir que no a una petición de forma firme y educada.",
    "Sé qué situaciones suelen sacarme de quicio.",
    "Cuando recibo una crítica, escucho hasta el final antes de defenderme.",
    "Cuando alguien me cuenta un problema, escucho con atención en lugar de pensar ya en lo que voy a responder.",
    "Cuando trabajo en grupo, ayudo a que las personas lleguen a un acuerdo.",
    "Tengo dificultad para explicar lo que siento.",
    "Cuando algo sale mal, tardo mucho en dejar de pensar en eso.",
    "Suelo percibir el ambiente de un lugar apenas llego.",
    "En lugares nuevos, me cuesta acercarme a las personas.",
    "Noto señales en mi cuerpo, como tensión o cansancio, cuando algo me está afectando.",
    "Puedo concentrarme en lo que tengo que hacer incluso en un día emocionalmente difícil.",
    "Cuando alguien piensa distinto de mí, tengo poca paciencia para escuchar sus razones.",
    "Puedo señalar un problema en el trabajo de alguien sin que la persona se sienta atacada."
  ],
  "dims": {
    "selfAwareness": {
      "label": "Autoconciencia",
      "desc": "Percibir y ponerle nombre a lo que sientes, entender de dónde vienen esas emociones y cómo afectan tus actitudes.",
      "high": "Sueles darte cuenta de lo que sientes y por qué, muchas veces antes de reaccionar. Esto te ayuda a tomar decisiones más conscientes y a explicarles tus necesidades a los demás. Lo que conviene vigilar es analizar demasiado cada emoción en lugar de seguir adelante.",
      "low": "Tiendes a enfocarte más en lo que hay que hacer que en lo que sientes, y eso te ayuda a actuar con sentido práctico. Lo que conviene vigilar es notar las emociones solo después de que la situación pasó, cuando ya influyeron en tus actitudes.",
      "tips": [
        "Algunas veces al día, haz una pausa de unos segundos y pregúntate: ¿qué estoy sintiendo ahora?",
        "En lugar de decir solo que estás \"mal\", intenta identificar si es cansancio, frustración, tristeza o ansiedad.",
        "Anota las situaciones que te afectaron y lo que pasó justo antes."
      ]
    },
    "selfRegulation": {
      "label": "Autocontrol",
      "desc": "Manejar emociones fuertes sin actuar por impulso, recuperar la calma y mantener la concentración incluso en días difíciles.",
      "high": "Puedes sentir enojo, frustración o ansiedad sin dejar que dominen tus actitudes. Esto transmite confianza y evita conflictos innecesarios. Lo que conviene vigilar es guardarte emociones que necesitarían expresarse, porque eso puede acumular tensión.",
      "low": "Reaccionas de forma rápida e intensa, y la gente suele saber exactamente lo que sientes. Esa espontaneidad puede ser sincera y llena de energía. Lo que conviene vigilar son las reacciones en el calor del momento, que a veces generan arrepentimiento o desgastan las relaciones.",
      "tips": [
        "Cuando sientas que la emoción sube, haz una pausa corta, respira hondo y solo después responde.",
        "Evita tomar decisiones o enviar mensajes importantes cuando sientas mucho enojo.",
        "Ten una válvula de escape regular, como hacer ejercicio, salir a caminar o conversar con alguien de confianza."
      ]
    },
    "empathy": {
      "label": "Empatía",
      "desc": "Percibir lo que sienten otras personas y entender su punto de vista, incluso cuando es distinto del tuyo.",
      "high": "Percibes con facilidad el ambiente de un lugar y lo que sienten las personas, incluso sin palabras. Eso hace que se sientan comprendidas a tu lado. Lo que conviene vigilar es absorber las emociones de los demás hasta el punto de agotarte.",
      "low": "Tiendes a concentrarte en los hechos y en el problema en sí, más que en las emociones en juego. Esto te ayuda a mantener la objetividad en situaciones delicadas. Lo que conviene vigilar es pasar por alto señales de que alguien necesita apoyo o parecer distante sin querer.",
      "tips": [
        "En conversaciones importantes, repite con tus palabras lo que entendiste antes de responder.",
        "Pregunta \"¿cómo te sientes con esto?\" antes de pasar directamente a las soluciones.",
        "Observa las expresiones, el tono de voz y los silencios, no solo lo que se dice."
      ]
    },
    "social": {
      "label": "Habilidades sociales",
      "desc": "Comunicarte con claridad, resolver conflictos, cooperar y construir buenas relaciones en el trabajo y en la vida personal.",
      "high": "Manejas bien las conversaciones difíciles, sabes expresar tu postura y ayudas a los grupos a llegar a acuerdos. Por eso, la gente suele buscarte cuando hay algo que resolver. Lo que conviene vigilar es asumir la tarea de resolver todos los conflictos, porque eso puede generar sobrecarga.",
      "low": "Prefieres evitar los roces y te sientes más a gusto con personas que ya conoces bien. Esto suele traer relaciones tranquilas y pocas peleas. Lo que conviene vigilar es posponer conversaciones necesarias y dejar que los problemas crezcan o que tus necesidades queden sin respuesta.",
      "tips": [
        "Para dar una retroalimentación difícil, habla del comportamiento y de su impacto, no de la persona.",
        "Practica decir que no con una frase corta y amable, sin justificaciones largas.",
        "En ambientes nuevos, haz una pregunta sencilla para iniciar una conversación: a la gente le gusta hablar de lo que hace."
      ]
    }
  },
  "resultTitle": "Tu perfil de inteligencia emocional",
  "resultIntro": "Mira cómo puntuaste en cada área. Estas habilidades se desarrollan con la práctica, así que usa el resultado como punto de partida, no como una etiqueta.",
  "note": "Este cuestionario es una herramienta de autoconocimiento basada en tu propia percepción. No es una prueba psicológica validada y no reemplaza la evaluación de un profesional."
};

export default t;
