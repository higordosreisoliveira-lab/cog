// dopamine — Spanish translation of pt.ts
import type { TestText } from '../../schema';

const t: TestText = {
  title: 'Test de dopamina',
  desc: 'Descubre cómo están tus hábitos relacionados con el sistema de recompensa del cerebro: estímulos rápidos, aburrimiento, pantallas y metas a largo plazo.',
  intro:
    'Este cuestionario observa hábitos del día a día relacionados con el sistema de recompensa del cerebro. La dopamina es una sustancia que el cerebro usa para transmitir señales y está relacionada con la motivación y la búsqueda de recompensas. Importante: a pesar de su nombre popular, este test no mide la dopamina en tu cuerpo. Ningún cuestionario puede hacerlo, y los exámenes médicos capaces de evaluar la dopamina son específicos y rara vez se usan con ese fin. Lo que evalúa el test son cuatro áreas de hábitos: búsqueda de recompensas rápidas, dificultad con el aburrimiento, motivación para metas a largo plazo y hábitos de pantalla. Son 16 frases. Piensa en las últimas 2 semanas e indica con qué frecuencia te ocurrió cada situación. Responde con sinceridad y sin pensarlo demasiado: no hay respuestas correctas ni incorrectas.',
  scale: ['Nunca', 'Rara vez', 'A veces', 'A menudo', 'Siempre'],
  items: [
    'Paso más tiempo del que pretendía viendo videos cortos o navegando en las redes sociales.',
    'En los momentos de espera, como en una fila o en el transporte, me cuesta quedarme sin hacer nada.',
    'Puedo dedicarme a un objetivo durante semanas, incluso cuando los resultados todavía no se ven.',
    'Tomo el celular en los primeros minutos después de despertarme.',
    'Compro cosas por impulso, sobre todo por internet, y después me doy cuenta de que no las necesitaba.',
    'Pierdo la paciencia con las tareas lentas o repetitivas y las dejo antes de terminar.',
    'Puedo renunciar a un placer inmediato cuando interfiere con algo importante para mi futuro.',
    'Me quedo con el celular en la cama y termino durmiéndome más tarde de lo que pretendía.',
    'Cuando siento cansancio o desánimo, busco algo que me dé placer inmediato, como un dulce, un snack o un video.',
    'Me cuesta leer un texto largo o ver una película completa sin distraerme con otra cosa.',
    'Empiezo las tareas importantes a la hora que planeé, sin posponerlas para hacer algo más divertido.',
    'Desbloqueo el celular sin un motivo claro, solo por costumbre.',
    'Cuando llega una notificación, dejo lo que estoy haciendo para ver de qué se trata.',
    'Las actividades sencillas, como cocinar o caminar, me parecen aburridas si no tengo algo que ver o escuchar al mismo tiempo.',
    'Siento satisfacción con el progreso en proyectos largos, como estudiar, entrenar o ahorrar.',
    'Uso más de una pantalla al mismo tiempo, como ver una serie mientras miro el celular.',
  ],
  dims: {
    quickRewards: {
      label: 'Recompensas rápidas',
      desc: 'Mide cuánto recurres a placeres inmediatos, como las redes sociales, los videos cortos, las notificaciones, las compras por impulso y los snacks.',
      high: 'Recurres a estímulos rápidos con frecuencia, muchas veces para descansar o cambiar de ánimo. Esto es común y no es un defecto: muchos de estos estímulos están diseñados justamente para captar tu atención. Lo que conviene vigilar es cuando ocupan el tiempo de cosas que te importan más o te dejan una sensación de tiempo perdido.',
      low: 'Recurres poco a los placeres inmediatos y sueles elegir con intención cómo usar tu tiempo libre. Esto te ayuda a mantener la concentración y a aprovechar mejor los momentos de descanso. Conviene seguir observando los días de cansancio, cuando las ganas de estímulos rápidos suelen aumentar.',
      tips: [
        'Desactiva las notificaciones que no son esenciales y deja solo las de personas y servicios realmente importantes.',
        'Antes de abrir una aplicación, define qué quieres hacer en ella y durante cuánto tiempo.',
        'En las compras por internet que no tenías planeadas, espera 24 horas antes de finalizar el pedido.',
      ],
    },
    boredom: {
      label: 'Dificultad con el aburrimiento',
      desc: 'Mide cuánto te cuesta quedarte sin estímulos, esperar o concentrarte en tareas lentas y repetitivas.',
      high: 'Los momentos de espera y las tareas lentas suelen resultarte incómodos, y las ganas de buscar algo más interesante aparecen rápido. Esto es muy común en una rutina llena de estímulos. La tolerancia al aburrimiento se puede entrenar poco a poco, como cualquier otro hábito.',
      low: 'Manejas bien las esperas, las pausas y las tareas que exigen paciencia. Esto te ayuda a concentrarte durante más tiempo y a terminar lo que empiezas. Los momentos sin estímulos también dan espacio para descansar la mente y tener ideas nuevas.',
      tips: [
        'Practica unos minutos al día sin estímulos, como esperar en una fila o hacer un trayecto corto sin tomar el celular.',
        'En las tareas largas, trabaja en bloques de 20 a 25 minutos, con pausas cortas entre ellos.',
        'De vez en cuando, haz una sola cosa a la vez, como comer sin pantallas o caminar sin audífonos.',
      ],
    },
    longTerm: {
      label: 'Metas a largo plazo',
      desc: 'Mide la motivación para objetivos que tardan en dar resultados, como estudiar, entrenar o ahorrar. Aquí, una puntuación alta indica más dificultad para mantener este tipo de metas; una puntuación baja, más facilidad.',
      high: 'Mantener la motivación en objetivos que llevan tiempo te ha resultado difícil, sobre todo cuando hay opciones más rápidas y agradables a mano. Esto no significa falta de capacidad: las metas largas traen pocas recompensas al principio, y el cerebro tiende a preferir lo inmediato. Dividir el camino en etapas más pequeñas suele ayudar mucho.',
      low: 'Logras mantener el esfuerzo en objetivos que tardan en dar resultados y valoras el progreso que se hace poco a poco. Esta capacidad te ayuda a construir logros duraderos en los estudios, el trabajo y la salud. Lo que conviene vigilar es no dejar de lado el descanso y el ocio por el camino.',
      tips: [
        'Divide cada meta grande en etapas pequeñas y reconoce cada etapa completada con una recompensa sencilla.',
        'Registra tu progreso en un calendario o una aplicación para ver cuánto has avanzado.',
        'Haz las tareas importantes a la hora en que sueles tener más energía, antes de abrir las redes sociales u otras aplicaciones.',
      ],
    },
    screens: {
      label: 'Hábitos de pantalla',
      desc: 'Mide cómo aparecen el celular y otras pantallas en tu rutina: al despertar, antes de dormir, al revisar el celular sin motivo y al usar varias pantallas a la vez.',
      high: 'Las pantallas están presentes en muchos momentos de tu día, incluso nada más despertar y a la hora de dormir. Esto es común hoy en día, pero usarlas de noche puede retrasar y empeorar el sueño, y revisar el celular todo el tiempo divide la atención. Los pequeños cambios en el entorno suelen funcionar mejor que depender solo de la fuerza de voluntad.',
      low: 'Usas las pantallas con más intención y mantienes algunos momentos del día libres de ellas, como el comienzo de la mañana y la hora de dormir. Esto favorece el sueño, la concentración y el descanso. Conviene mantener esos límites, sobre todo en épocas más agitadas.',
      tips: [
        'Deja el celular fuera del dormitorio por la noche y usa un despertador común.',
        'Evita las pantallas entre 30 y 60 minutos antes de dormir y procura mantener horarios regulares de sueño.',
        'En las pausas del día, cambia el celular por un poco de movimiento, como una caminata corta o unos estiramientos.',
      ],
    },
  },
  bands: {
    balanced: {
      label: 'Equilibrio',
      text: 'Tus respuestas indican una relación equilibrada con los estímulos rápidos y las pantallas. Pareces manejar bien el aburrimiento y mantener la motivación para objetivos que llevan tiempo. Sigue cuidando los hábitos que te ayudan, como un sueño regular y momentos lejos de las pantallas.',
    },
    attention: {
      label: 'Atención',
      text: 'Tus respuestas indican que algunos hábitos de estímulo rápido ya ocupan un espacio importante en tu rutina. Esto es muy común y no es motivo de alarma. Observa qué áreas tuvieron las puntuaciones más altas y elige uno o dos cambios pequeños para probar en las próximas semanas.',
    },
    overloaded: {
      label: 'Sobrecarga de estímulos',
      text: 'Tus respuestas indican que los estímulos rápidos y las pantallas están muy presentes en tu día, y que esperar, concentrarte o mantener metas largas puede estar costándote más. Esto es cada vez más común y puede cambiar con ajustes graduales de hábitos, sin recortes radicales. Empieza por reducir el exceso de estímulos en uno o dos momentos del día, como al despertar y antes de dormir, y observa cómo te sientes.',
    },
  },
  resultTitle: 'Tus hábitos de recompensa',
  resultIntro:
    'El resultado suma las cuatro áreas y muestra cuánto dependen tus hábitos actuales de los estímulos rápidos. Recuerda: no mide la dopamina en tu cuerpo, sino patrones de comportamiento que pueden cambiar con el tiempo y con la práctica.',
  note: 'Este test es una herramienta de autoconocimiento basada en tus propias respuestas. No mide la dopamina ni ninguna otra sustancia del cuerpo, no es un examen médico y no sirve para hacer un diagnóstico. Reducir el exceso de estímulos puede ayudar como cambio de hábito, pero no es un tratamiento médico. Si algún hábito parece fuera de tu control o te está causando perjuicios, habla con un profesional de la salud.',
  help: 'Si sientes que no puedes controlar el uso del celular, de los videojuegos, de las apuestas o de las compras, o si esto está afectando tu sueño, tu trabajo, tus finanzas o tus relaciones, busca un profesional de psicología o de medicina. Para los videojuegos, las apuestas o las compras compulsivas, también existen servicios y grupos de apoyo especializados que pueden ayudarte.',
};

export default t;
