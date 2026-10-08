import type { TestText } from '../../schema';

// impostor — Spanish translation of pt.ts
const t: TestText = {
  title: 'Síndrome del impostor',
  desc: 'Mira con qué frecuencia dudas de tus propios logros, temes que noten tus fallas y te exiges demasiado en el trabajo y en los estudios.',
  intro:
    'El síndrome del impostor es la sensación de que no mereces lo que lograste y de que, tarde o temprano, alguien se va a dar cuenta. Es una experiencia muy común, incluso entre personas competentes y exitosas, y no es un diagnóstico ni un trastorno mental. Este cuestionario observa tres formas en que suele aparecer: atribuir el éxito a la suerte, tener miedo de que te "descubran" y exigirte con perfeccionismo. Son 15 situaciones de trabajo y de estudio. Piensa en los últimos meses e indica con qué frecuencia te pasa cada una. Si alguna situación no forma parte de tu rutina, responde pensando en algo parecido que ya hayas vivido. No hay respuestas correctas ni incorrectas.',
  scale: ['Nunca', 'Rara vez', 'A veces', 'A menudo', 'Siempre'],
  items: [
    'Cuando apruebo un examen difícil, pienso que tuve suerte y que justo tocaron las preguntas que sabía.',
    'En una reunión o una clase, dejo de hacer una pregunta para que nadie note lo que todavía no sé.',
    'Releo un correo sencillo varias veces antes de enviarlo, por miedo a que se me pase algún error.',
    'Cuando consigo un puesto, una beca o un ascenso, pienso que fue porque había pocos candidatos o porque alguien me ayudó.',
    'En las primeras semanas en un trabajo o un curso nuevo, tengo la sensación de que pronto se van a dar cuenta de que eligieron a la persona equivocada.',
    'Después de una presentación que salió bien, paso horas pensando en el único momento en que me trabé.',
    'Cuando un proyecto en el que trabajé sale bien, explico el resultado por el esfuerzo del equipo o por el buen momento, y no por lo que hice yo.',
    'Cuando mi jefe o mi profesor me pide hablar en privado, lo primero que pienso es que se dieron cuenta de que no estoy a la altura.',
    'Retengo un trabajo terminado más tiempo del necesario, porque siento que todavía no está lo bastante bien para mostrarlo.',
    'Cuando recibo una nota alta o una buena evaluación de desempeño, pienso que quien me evaluó fue generoso conmigo ese día.',
    'Antes de presentar un trabajo, imagino a alguien haciendo una pregunta que va a mostrar que sé menos de lo que la gente cree.',
    'Cuando saco una buena nota, pero no la máxima, me quedo dándole vueltas a los puntos que perdí en lugar de celebrar el resultado.',
    'Cuando resuelvo un problema que estaba trabando al equipo, pienso que acerté por casualidad, y no porque sabía lo que estaba haciendo.',
    'Cuando alguien me presenta como referente en algún tema, siento incomodidad, como si estuviera engañando a la gente.',
    'Cuando cometo un error pequeño, como olvidar un archivo adjunto o escribir mal un número, me critico con dureza el resto del día.',
  ],
  dims: {
    luck: {
      label: 'Éxito atribuido a la suerte',
      desc: 'Mide cuánto explicas tus logros por factores externos, como la suerte, la ayuda de otras personas o las circunstancias favorables, en lugar de reconocer tu esfuerzo y tu capacidad.',
      high: 'Cuando algo sale bien, tiendes a atribuir el resultado a la suerte, al momento o a otras personas. Esto puede parecer modestia, pero con el tiempo te impide ver tus propias habilidades y hace que cada nuevo logro parezca una casualidad. Reconocer tu parte no es arrogancia: es una lectura más precisa de lo que pasó.',
      low: 'Sueles reconocer el papel de tu esfuerzo y de tu capacidad en tus logros, sin dejar de lado la ayuda que recibiste. Esto te ayuda a construir una confianza basada en hechos y a enfrentar nuevos desafíos con más seguridad. Sigue prestando atención a lo que funcionó y por qué.',
      tips: [
        'Lleva un archivo de logros: anota resultados, elogios y problemas que resolviste, con fechas y detalles, y reléelo cuando aparezca la duda.',
        'Después de un buen resultado, haz una lista de lo que hiciste para llegar ahí, como las horas de estudio, las decisiones y las habilidades que usaste, antes de pensar en la suerte.',
        'Cuando recibas un elogio, prueba a solo agradecer, sin restarle valor a lo que hiciste ni pasarle el mérito a otra persona.',
      ],
    },
    fear: {
      label: 'Miedo a que te descubran',
      desc: 'Mide la preocupación de que las personas noten que no eres tan capaz como pareces, y cuánto influye ese miedo en lo que haces o dejas de hacer.',
      high: 'Sueles sentir que estás engañando a las personas y que, en cualquier momento, alguien se va a dar cuenta. Ese miedo puede llevarte a evitar preguntas, rechazar oportunidades o trabajar más de la cuenta para que nadie note tus dudas. Vale la pena recordar que nadie lo sabe todo, y que admitir una duda suele generar más confianza que desconfianza.',
      low: 'Te sientes a gusto en el lugar que ocupas y no vives con la sensación de que alguien va a descubrir una falla escondida. Esto te facilita hacer preguntas, pedir ayuda y aceptar nuevos desafíos. Esa seguridad también ayuda a los colegas que están empezando a sentirse más cómodos.',
      tips: [
        'Habla de esto con colegas de confianza: es común descubrir que muchos sienten lo mismo, incluso personas que admiras.',
        'En reuniones o clases, haz al menos una pregunta por semana y observa cómo reacciona la gente de verdad.',
        'Cuando aparezca el miedo, pregúntate qué pruebas concretas hay de que no eres capaz, y compáralas con las pruebas de lo contrario.',
      ],
    },
    perfection: {
      label: 'Perfeccionismo y autocrítica',
      desc: 'Mide cuánto te exiges para no equivocarte, revisas las cosas en exceso y te criticas con dureza cuando algo no sale perfecto.',
      high: 'Sueles fijarte estándares muy altos y criticarte con dureza cuando no los alcanzas, incluso en detalles pequeños. Ese cuidado puede dar como resultado trabajos de calidad, pero también cansancio, retrasos y la sensación de que nada está nunca lo bastante bien. Tener estándares es sano; el desafío es separarlos de la exigencia de perfección.',
      low: 'Te importa la calidad de lo que haces, pero aceptas que los errores y las imperfecciones forman parte del proceso. Esto te ayuda a entregar a tiempo, aprender de los tropiezos y mantener la energía a lo largo del tiempo. Solo presta atención a que la tranquilidad no se convierta en descuido en las tareas que piden más atención.',
      tips: [
        'Antes de empezar una tarea, define qué significa "terminada" para ella y deja de revisar cuando llegues a ese punto.',
        'Separa los estándares de la perfección: pregúntate si el detalle que te molesta haría una diferencia real para quien va a recibir el trabajo.',
        'Cuando te equivoques, háblate como le hablarías a un colega en la misma situación: reconoce el error, mira qué se puede corregir y sigue adelante.',
      ],
    },
  },
  bands: {
    few: {
      label: 'Pocas señales',
      text: 'Tus respuestas indican pocas señales de síndrome del impostor. Pareces reconocer tus logros y manejar los errores sin exigirte demasiado. Aun así, es normal que esta sensación aparezca en momentos de cambio, como un trabajo nuevo, un ascenso o el inicio de un curso.',
    },
    some: {
      label: 'Algunas señales',
      text: 'Tus respuestas indican que la sensación de impostor aparece en algunas situaciones, algo muy común. Suele tomar fuerza en momentos de exposición o ante desafíos nuevos. Observa cuál de las tres áreas tuvo la puntuación más alta y empieza por sus sugerencias.',
    },
    strong: {
      label: 'Señales fuertes',
      text: 'Tus respuestas indican que la sensación de impostor está muy presente en tu rutina de trabajo o de estudio. Dudar de tus propios logros, temer que noten tus fallas y exigirte todo el tiempo es agotador, y nada de eso dice cuán capaz eres de verdad. Prueba las sugerencias prácticas y, si este sentimiento te está causando sufrimiento, considera hablar con un profesional.',
    },
  },
  resultTitle: 'Cómo aparece en ti el síndrome del impostor',
  resultIntro:
    'El resultado suma las tres áreas y muestra cuánto está presente hoy la sensación de impostor en tu trabajo o en tus estudios. No mide tu competencia: muchas personas muy capaces obtienen puntuaciones altas. Mira abajo cómo apareció cada área en tus respuestas.',
  note: 'Este test es una herramienta de autoconocimiento basada en tus propias respuestas. El síndrome del impostor no es un diagnóstico médico ni un trastorno mental, y este resultado no reemplaza la evaluación de un psicólogo. La sensación de impostor también cambia con el tiempo, con el contexto y con la práctica.',
  help: 'Si la sensación de impostor te causa sufrimiento frecuente, ansiedad o agotamiento, o si te está llevando a rechazar oportunidades, evitar desafíos o estancarte en tu carrera o en tus estudios, hablar con un psicólogo o una psicóloga puede ayudarte. La terapia ofrece herramientas para manejar la autocrítica y construir una confianza más realista.',
};

export default t;
