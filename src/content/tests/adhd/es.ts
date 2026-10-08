// adhd — Spanish translation of pt.ts
import type { TestText } from '../../schema';

const t: TestText = {
  title: 'Rasgos de TDAH en adultos',
  desc: 'Descubre con qué frecuencia aparecen en tu rutina de adulto situaciones relacionadas con la atención, la organización, la inquietud y la impulsividad.',
  intro:
    'El TDAH (trastorno por déficit de atención e hiperactividad) no es cosa solo de la infancia: muchas personas llegan a la vida adulta con estos rasgos, a veces sin haber pasado nunca por una evaluación. Este cuestionario observa dos grupos de rasgos en el día a día: atención y organización, e inquietud e impulsividad. Son 18 situaciones comunes de la vida adulta, en el trabajo, en casa y en las relaciones. Piensa en los últimos 6 meses e indica con qué frecuencia te ocurrió cada una. Responde con sinceridad, pensando en lo que de verdad pasa y no en lo que te gustaría que pasara. Recuerda que esta es una autoevaluación que observa rasgos, no un diagnóstico. Todo el mundo se distrae o se apura de vez en cuando; lo que cuenta aquí es la frecuencia.',
  scale: ['Nunca', 'Rara vez', 'A veces', 'A menudo', 'Muy a menudo'],
  items: [
    'Leo una página de un libro o de un informe hasta el final y me doy cuenta de que no sé decir qué decía, porque mi cabeza estaba en otra cosa.',
    'En una reunión, clase o charla, me doy cuenta de que estoy moviendo la pierna, golpeando la mesa con el bolígrafo o cambiando de posición en la silla todo el tiempo.',
    'Ya en la puerta de casa, pierdo algunos minutos buscando las llaves, el celular o la billetera, que dejé en algún lugar que no recuerdo.',
    'En una conversación en grupo, se me ocurre una idea y la digo al instante, interrumpiendo a alguien que todavía no había terminado, por miedo a olvidar lo que quería decir.',
    'Tomo el celular o abro la computadora para resolver algo concreto, como pagar una cuenta, y termino haciendo otras tres cosas sin resolver la primera.',
    'Veo una oferta o algo que me llama la atención y lo compro en el momento, sin comparar precios ni pensar en el presupuesto del mes.',
    'Mientras alguien me explica algo con calma, me doy cuenta de que me perdí una parte de lo que dijo y tengo que pedir que lo repita, o hago como que lo seguí.',
    'En la fila del supermercado o en un embotellamiento, siento una impaciencia que crece rápido: miro hacia todos lados, resoplo o busco otro camino.',
    'Una tarea sencilla y aburrida, como pedir una cita o enviar un documento, se queda semanas parada en mi lista, aunque sé que me llevaría pocos minutos.',
    'En un día libre sin planes, en lugar de descansar, siento inquietud y enseguida invento algo que hacer, porque pasar un rato sin hacer nada me incomoda.',
    'Envío un correo, un trabajo o una hoja de cálculo y solo después noto un detalle que se me pasó, como un archivo adjunto olvidado, una fecha equivocada o un nombre cambiado.',
    'Respondo un mensaje o un comentario en caliente y, poco después, me arrepiento del tono o de lo que escribí.',
    'Empiezo a ordenar una habitación, encuentro algo que me lleva a otro rincón de la casa y, al final del día, hay varios lugares ordenados a medias.',
    'Me acuesto con el cuerpo cansado, pero la cabeza sigue acelerada, saltando de un pensamiento a otro durante un buen rato.',
    'Quedo en algo con alguien y solo me acuerdo del compromiso cuando la persona me escribe para preguntar si todavía voy.',
    'Después de un encuentro con amigos o colegas, me doy cuenta de que hablé mucho más que los demás o de que encadené un tema tras otro sin dejar respirar la conversación.',
    'Creo que todavía tengo bastante tiempo antes de salir y, cuando miro el reloj, ya debería estar en camino.',
    'Llevado por el entusiasmo, acepto en el momento una invitación, un proyecto nuevo o un cambio de planes, y solo después me doy cuenta de que no cabía en mi rutina.',
  ],
  dims: {
    inattention: {
      label: 'Atención y organización',
      desc: 'Mide con qué frecuencia la atención se escapa en medio de una lectura, una tarea o una conversación, y cómo manejas los plazos, los compromisos, los objetos de uso diario y las tareas poco interesantes.',
      high: 'Mantener la concentración en tareas poco interesantes, acordarte de los compromisos y cuidar los detalles parece exigirte más esfuerzo que a mucha gente. Esto no tiene que ver con pereza ni con falta de inteligencia: muchas personas con este perfil tienen una mente rápida y creativa, llena de asociaciones, y logran concentrarse intensamente en lo que despierta su interés. Lo que suele ayudar es sacar la organización de la cabeza y llevarla al entorno, con recordatorios, listas y rutinas sencillas.',
      low: 'Sueles mantener la atención en lo que estás haciendo, recuerdas tus compromisos y logras terminar las tareas, incluso las menos interesantes. Esto aporta confiabilidad y tranquilidad en el trabajo y en casa. Las distracciones ocasionales son normales, sobre todo en épocas de cansancio, estrés o mal sueño.',
      tips: [
        'Usa alarmas y recordatorios en el celular para compromisos y cuentas, en lugar de confiar solo en la memoria.',
        'Ten un lugar fijo para las llaves, la billetera y los documentos, como un recipiente o un gancho cerca de la puerta.',
        'Ante una tarea aburrida, comprométete solo con los primeros cinco minutos: empezar suele ser la parte más difícil.',
      ],
    },
    hyperactivity: {
      label: 'Inquietud e impulsividad',
      desc: 'Mide la inquietud del cuerpo y de la mente, la dificultad para esperar y la tendencia a hablar, decidir o actuar por el impulso del momento.',
      high: 'Tienes mucha energía y tiendes a actuar rápido: hablas, decides y reaccionas al ritmo en que aparecen las ideas, y esperar o pasar mucho tiempo sin moverte suele resultarte incómodo. Esa energía puede ser una gran aliada y aportar entusiasmo, iniciativa, creatividad y valor para empezar cosas nuevas. Lo que conviene vigilar son las palabras y decisiones en el calor del momento, que a veces generan arrepentimiento o roces, y el cansancio de una mente a la que le cuesta desacelerar.',
      low: 'Sueles esperar con tranquilidad, pensar antes de actuar y logras relajarte cuando tienes tiempo libre. Esto te ayuda a tomar decisiones meditadas y a mantener conversaciones equilibradas. Los momentos puntuales de impaciencia o agitación son normales, sobre todo en épocas de estrés.',
      tips: [
        'Antes de comprar, responder un mensaje que te irritó o aceptar un compromiso nuevo, haz una pausa: espera unos minutos o hasta el día siguiente.',
        'Dale una salida a la energía del cuerpo, con actividad física regular, caminatas cortas en los descansos o un objeto discreto para mover entre las manos durante las reuniones.',
        'Si la mente se acelera a la hora de dormir, anota en un papel lo que tienes en la cabeza antes de acostarte y déjalo para resolver al día siguiente.',
      ],
    },
  },
  bands: {
    few: {
      label: 'Pocos rasgos',
      text: 'Tus respuestas indican que las situaciones relacionadas con la falta de atención, la inquietud y la impulsividad aparecen poco en tu día a día. Algunas distracciones y momentos de impaciencia son normales para cualquier persona. Los rangos de este test sirven solo como orientación y no han sido validados clínicamente.',
    },
    some: {
      label: 'Algunos rasgos',
      text: 'Tus respuestas indican que algunos rasgos de falta de atención o de inquietud aparecen con cierta frecuencia en tu rutina. Esto es común y puede tener varias causas, como cansancio, estrés, mal sueño o exceso de exigencias. Observa en qué situaciones pesan más y prueba los consejos de cada área, recordando que los rangos son solo una orientación, sin validación clínica.',
    },
    many: {
      label: 'Muchos rasgos',
      text: 'Tus respuestas indican que muchos rasgos relacionados con la atención, la inquietud y la impulsividad aparecen con frecuencia en tu día a día. Esto no significa que tengas TDAH: otras condiciones y etapas de la vida pueden traer señales parecidas, y los rangos de este test son solo una orientación, sin validación clínica. Si estos rasgos te acompañan desde hace mucho tiempo, quizá desde la infancia, y afectan tu trabajo, tus estudios o tus relaciones, vale la pena consultar a un profesional de psiquiatría, neurología o psicología para una evaluación adecuada.',
    },
  },
  resultTitle: 'Tus rasgos de TDAH',
  resultIntro:
    'El resultado suma tus respuestas a las 18 situaciones y muestra con qué frecuencia aparecen en tu día a día rasgos de falta de atención, inquietud e impulsividad. Mira también las dos áreas por separado: te ayudan a entender dónde pesan más estos rasgos y dónde están tus puntos fuertes.',
  note: 'Este test es una herramienta de autoconocimiento basada en tus propias respuestas. No es un diagnóstico de TDAH ni de ninguna otra condición, y los rangos de resultado no han sido validados clínicamente. Solo un profesional cualificado, de psiquiatría, neurología o psicología, puede hacer una evaluación completa, que tenga en cuenta tu historia desde la infancia y otras posibles causas, como ansiedad, depresión o problemas de sueño.',
  help: 'Si quieres investigar estos rasgos, busca un profesional de psiquiatría, neurología o psicología, de preferencia con experiencia en TDAH en adultos. Un buen primer paso puede ser hablar con tu médico de cabecera o acudir a los servicios de salud de tu localidad, que pueden orientarte y derivarte a una evaluación; en situaciones de mayor malestar, también puedes buscar los servicios de salud mental de tu zona. Existen además servicios especializados en clínicas universitarias y hospitales escuela, así como asociaciones de apoyo a personas con TDAH, que suelen recomendar profesionales y materiales confiables.',
};

export default t;
