import type { TestText } from '../../schema';

// time — Spanish translation of pt.ts
const t: TestText = {
  title: 'Gestión del tiempo',
  desc: 'Mira cómo defines prioridades, planificas, proteges tu concentración y equilibras el trabajo y el descanso.',
  intro:
    'Este cuestionario evalúa cuatro hábitos relacionados con la gestión del tiempo: definir prioridades, planificar, mantener la concentración y respetar límites y momentos de descanso. Son 16 frases. Para cada una, indica cuánto describe tu rutina actual, ya sea en el trabajo, en los estudios o en casa. No hay respuestas correctas: el objetivo es encontrar los puntos que más pueden mejorar tu día a día.',
  scale: ['Totalmente en desacuerdo', 'En desacuerdo', 'Neutral', 'De acuerdo', 'Totalmente de acuerdo'],
  items: [
    'Sé cuáles son las tareas más importantes de mi semana.',
    'Reservo algunos minutos para planificar mi día o mi semana.',
    'Puedo trabajar en una tarea durante un buen rato sin interrumpirme.',
    'Puedo rechazar peticiones cuando interfieren con lo que ya me comprometí a hacer.',
    'Distingo lo urgente de lo que es realmente importante.',
    'Muchas veces me entero en el último momento de que tengo algo importante que entregar.',
    'Silencio las notificaciones cuando necesito concentrarme.',
    'Hago pausas a lo largo del día para descansar, incluso cuando hay mucho trabajo.',
    'Paso buena parte del día resolviendo pequeños pendientes y dejo de lado lo que más importa.',
    'Anoto los plazos y los compromisos en cuanto me entero de ellos.',
    'Hago una cosa a la vez, en lugar de intentar hacer varias al mismo tiempo.',
    'Respondo mensajes del trabajo o de los estudios por la noche, los fines de semana o en vacaciones.',
    'Antes de aceptar una tarea nueva, pienso si es más importante que lo que ya estoy haciendo.',
    'Cuando hago planes, dejo un margen de tiempo para los imprevistos.',
    'Dejo lo que estoy haciendo cada vez que llega un mensaje o una petición.',
    'Tengo una hora para terminar de trabajar y suelo respetarla.',
  ],
  dims: {
    priorities: {
      label: 'Prioridades',
      desc: 'Saber qué es lo más importante y dedicarle tu tiempo antes que a lo que solo es urgente o fácil.',
      high: 'Sueles saber lo que realmente importa y le dedicas tu mejor tiempo a esas tareas. Esto hace que tu esfuerzo produzca resultados que marcan la diferencia. Lo que conviene vigilar es la rigidez: a veces una petición inesperada merece atención, aunque esté fuera del plan.',
      low: 'Tiendes a responder a lo que aparece primero y te muestras disponible para distintos pendientes. Esto te da flexibilidad y te convierte en alguien con quien los demás pueden contar. Lo que conviene vigilar es llegar al final del día con mucho trabajo hecho y poco avance en lo que más importa.',
      tips: [
        'Al comenzar cada día, elige las tres tareas más importantes y empieza por una de ellas.',
        'Antes de aceptar un nuevo pendiente, pregúntate si es más importante que lo que ya estás haciendo.',
        'Reserva el horario en el que tienes más energía para la tarea más importante del día.',
      ],
    },
    planning: {
      label: 'Planificación',
      desc: 'Organizar el día y la semana con anticipación, dar seguimiento a los plazos y prever el tiempo de cada tarea.',
      high: 'Sueles planificar con anticipación, registrar tus compromisos y prever cuánto tiempo te van a llevar las cosas. Esto reduce los imprevistos y te da tranquilidad. Lo que conviene vigilar es pasar demasiado tiempo planificando o frustrarte cuando el día no sale como lo previste.',
      low: 'Tiendes a decidir qué hacer a medida que avanza el día, lo que te da espontaneidad y capacidad de improvisar. Lo que conviene vigilar son las sorpresas: plazos que descubres tarde y tareas que llevan más tiempo del que imaginabas.',
      tips: [
        'Reserva diez minutos al comienzo de cada semana para planificar los próximos días.',
        'Anota cada plazo o compromiso en tu agenda en el mismo momento en que te enteras.',
        'Al planificar el día, deja cerca de un tercio del tiempo libre para los imprevistos.',
      ],
    },
    focus: {
      label: 'Concentración',
      desc: 'Mantener la atención en una tarea a la vez y proteger tu tiempo de las interrupciones.',
      high: 'Puedes concentrarte en una tarea durante bastante tiempo y proteges tu trabajo de las interrupciones. Esto mejora la calidad y la rapidez de lo que haces. Lo que conviene vigilar es pasar demasiado tiempo sin responder y retrasar a quienes dependen de una respuesta tuya.',
      low: 'Respondes rápido a mensajes y peticiones y sigues varias cosas al mismo tiempo. Esto te convierte en una persona accesible y ágil. Lo que conviene vigilar es que los cambios constantes de tarea cansan y hacen que cada una lleve más tiempo del que llevaría con atención plena.',
      tips: [
        'Bloquea en tu agenda períodos de 60 a 90 minutos para trabajar con concentración.',
        'Silencia las notificaciones y define dos o tres momentos del día para revisar los mensajes.',
        'Termina una tarea, o una parte bien definida de ella, antes de empezar otra.',
      ],
    },
    boundaries: {
      label: 'Límites y descanso',
      desc: 'Decir que no cuando hace falta, hacer pausas y separar el tiempo de trabajo del tiempo de descanso.',
      high: 'Puedes rechazar peticiones que comprometen tus prioridades y proteges tus momentos de pausa. Esto cuida tu energía y tu salud a largo plazo. Lo que conviene vigilar es parecer poco disponible en momentos en que el grupo realmente necesita un esfuerzo extra.',
      low: 'Sueles estar disponible y casi nunca dices que no, lo que hace que la gente confíe mucho en ti. Lo que conviene vigilar es el cansancio acumulado: sin pausas ni límites, la energía y la calidad del trabajo disminuyen con el tiempo.',
      tips: [
        'Define una hora para terminar de trabajar y desactiva las notificaciones después.',
        'Haz una pausa corta cada una o dos horas para levantarte, tomar agua y descansar la vista.',
        'Para rechazar una petición, usa una frase sencilla, como "Ahora no puedo, pero puedo ayudarte el jueves".',
      ],
    },
  },
  resultTitle: 'Tu perfil de gestión del tiempo',
  resultIntro:
    'Mira cómo puntuaste en cada hábito. Las puntuaciones más altas indican prácticas más consolidadas, pero incluso ellas tienen aspectos que conviene vigilar. Elige uno o dos hábitos para trabajar a la vez.',
  note: 'Este resultado es una herramienta de autoconocimiento basada en tus propias respuestas y no es una evaluación profesional. Si el cansancio o la sobrecarga son frecuentes, vale la pena hablar con tus superiores o con un profesional de la salud.',
};

export default t;
