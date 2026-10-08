import type { TestText } from '../../schema';

// procrastination — Spanish translation of pt.ts
const t: TestText = {
  title: 'Procrastinación',
  desc: 'Descubre qué es lo que suele llevarte a postergar tareas y conoce estrategias prácticas para cada motivo.',
  intro:
    'Casi todo el mundo posterga tareas de vez en cuando, pero los motivos varían de una persona a otra. Este cuestionario evalúa cuatro motivos comunes: evitar la incomodidad, el miedo a no hacerlo perfecto, la distracción y la falta de claridad en la planificación. Son 16 frases. Piensa en las últimas semanas e indica con qué frecuencia te pasa cada situación. No hay respuestas correctas: el objetivo es entender qué pesa más en tu caso para elegir las estrategias adecuadas.',
  scale: ['Nunca', 'Rara vez', 'A veces', 'A menudo', 'Siempre'],
  items: [
    'Postergo las tareas que me causan ansiedad, aunque sepa que son importantes.',
    'Tardo en empezar porque siento que todo tiene que salir perfecto desde el principio.',
    'Tomo el celular para ver algo rápido y termino pasando mucho más tiempo del que pensaba.',
    'Postergo una tarea porque no sé exactamente por dónde empezar.',
    'Dejo para después las llamadas, los mensajes o las conversaciones que pueden ser difíciles.',
    'Me quedo revisando y ajustando un trabajo durante tanto tiempo que termino retrasando la entrega.',
    'En medio de una tarea, me paso a otra cosa en cuanto aparece algo más interesante.',
    'Tengo tantas cosas que hacer que no sé cuál hacer primero.',
    'Evito abrir correos, facturas o mensajes por temor a lo que pueda encontrar.',
    'Prefiero no empezar antes que correr el riesgo de hacer algo por debajo de lo que espero de mí.',
    'Las notificaciones, las conversaciones o los ruidos a mi alrededor me sacan fácilmente de lo que estoy haciendo.',
    'Calculo mal cuánto tiempo va a llevarme una tarea y termino con menos tiempo del que necesitaba.',
    'Cuando una tarea me parece aburrida o desagradable, busco otra cosa más agradable para hacer.',
    'Espero el momento ideal, con mucho tiempo y energía, para empezar las tareas importantes.',
    'Hago lo que tengo ganas de hacer en el momento, aunque sepa que debería estar haciendo otra cosa.',
    'Cuando una tarea es grande o poco definida, me cuesta convertirla en pasos concretos.',
  ],
  dims: {
    avoidance: {
      label: 'Evitar la incomodidad',
      desc: 'Postergar tareas porque provocan aburrimiento, ansiedad, miedo u otras sensaciones desagradables.',
      high: 'Buena parte de tus postergaciones parece venir de las ganas de escapar de sensaciones desagradables, como la ansiedad, el aburrimiento o el miedo a una mala respuesta. Esto indica que vives las emociones con intensidad, lo que también te ayuda a percibir lo que importa. Lo que conviene vigilar es que el alivio de postergar dura poco, y la tarea suele volverse todavía más pesada después.',
      low: 'La incomodidad de una tarea rara vez te impide empezarla. Esa capacidad de enfrentar lo aburrido o lo difícil es una gran ventaja. Lo que conviene vigilar es obligarte a seguir incluso cuando el cansancio o la sobrecarga piden una pausa.',
      tips: [
        'Empieza con solo dos minutos: abre el archivo o escribe la primera frase. Después de eso, puedes parar si quieres. Empezar suele ser la parte más difícil.',
        'Ponle nombre a lo que sientes, como "tengo miedo de recibir una crítica". Reconocer la emoción suele quitarle fuerza.',
        'Haz la tarea más desagradable al principio del día, antes de abrir el correo o las redes sociales.',
      ],
    },
    perfectionism: {
      label: 'Perfeccionismo',
      desc: 'Postergar tareas por miedo a no hacerlas lo bastante bien o por esperar el momento ideal para empezar.',
      high: 'Pareces postergar las cosas porque quieres que queden perfectas o porque esperas tener el tiempo y la energía ideales para empezar. Ese cuidado muestra que te tomas el trabajo en serio y que tienes estándares altos. Lo que conviene vigilar es que el momento ideal casi nunca llega, y el miedo a equivocarte puede retrasar o impedir entregas importantes.',
      low: 'Sueles empezar aunque no tengas todo perfecto y aceptas hacer ajustes sobre la marcha. Esto te da agilidad y te ayuda a aprender con la práctica. Lo que conviene vigilar es entregar algo con menos cuidado del que la situación pedía, sobre todo en tareas importantes.',
      tips: [
        'Antes de empezar, escribe qué es "lo bastante bueno" para esa tarea.',
        'Haz una primera versión rápida, sabiendo que la vas a mejorar después.',
        'Ponles un límite de tiempo a las revisiones y entrega cuando se termine.',
      ],
    },
    distraction: {
      label: 'Distracción e impulso',
      desc: 'Postergar tareas porque la atención se va hacia estímulos más inmediatos, como el celular, las conversaciones o actividades más agradables.',
      high: 'Tu atención parece irse con facilidad hacia las notificaciones, las conversaciones o las actividades más interesantes que la tarea del momento. Esa sensibilidad a los estímulos nuevos también puede aportarte agilidad y creatividad. Lo que conviene vigilar es que las pequeñas interrupciones, sumadas, consumen horas de tu día sin que te des cuenta.',
      low: 'Puedes mantener la concentración aunque haya estímulos a tu alrededor y resistes bien las ganas de cambiar una tarea por algo más agradable. Es una gran ventaja en los trabajos que exigen concentración. Lo que conviene vigilar es encerrarte demasiado en la tarea y no notar pedidos o cambios importantes a tu alrededor.',
      tips: [
        'Deja el celular en otra habitación o en modo silencio mientras trabajas en algo importante.',
        'Trabaja en bloques de 25 minutos, con pausas de 5 minutos entre ellos.',
        'Anota las ideas y las ganas que surjan durante la tarea para ocuparte de ellas después, en lugar de interrumpir lo que estás haciendo.',
      ],
    },
    planning: {
      label: 'Falta de claridad y planificación',
      desc: 'Postergar tareas porque no está claro por dónde empezar, qué hacer primero o cuánto tiempo llevará cada cosa.',
      high: 'Muchas veces postergas no por falta de ganas, sino porque la tarea parece grande, poco definida o confusa. Esto muestra que percibes la complejidad de las cosas. Lo que conviene vigilar es que, sin pasos concretos, hasta las tareas sencillas parecen difíciles y terminan quedando para después.',
      low: 'Sueles saber por dónde empezar y puedes convertir las tareas grandes en pasos prácticos. Esto te facilita mantener el ritmo y cumplir los plazos. Lo que conviene vigilar es planificar con tanta precisión que te cueste adaptarte cuando algo cambia.',
      tips: [
        'Divide cada tarea grande en pasos de 30 minutos como máximo y escribe cuál es el primero.',
        'Decide de antemano cuándo y dónde vas a hacer la tarea, por ejemplo: "El martes, a las 9, en mi escritorio, voy a escribir la introducción del informe".',
        'Estima cuánto tiempo va a llevarte cada tarea y agrégale un margen de al menos el 50 %.',
      ],
    },
  },
  resultTitle: 'Por qué postergas las cosas',
  resultIntro:
    'Cada barra muestra cuánto aparece un motivo en tus respuestas. Cuanto más alta es la puntuación, más contribuye ese factor a tus postergaciones. Empieza por las estrategias del motivo con la puntuación más alta.',
  note: 'Este cuestionario es una herramienta de autoconocimiento y no un diagnóstico. Si la dificultad para empezar o terminar tareas es constante y está afectando tus estudios, tu trabajo o tu vida personal, vale la pena hablar con un profesional de la salud, porque puede estar relacionada con cuestiones como la ansiedad, la depresión o el TDAH.',
};

export default t;
