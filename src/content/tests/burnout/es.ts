// burnout — Spanish translation of pt.ts
import type { TestText } from '../../schema';

const t: TestText = {
  title: 'Nivel de burnout',
  desc: 'Descubre si el trabajo te ha estado dejando sin energía, distante de lo que haces o con la sensación de que tu esfuerzo no rinde.',
  intro:
    'El burnout, o agotamiento laboral, es un desgaste relacionado con el trabajo que suele aparecer en tres frentes: agotamiento, distanciamiento del trabajo y pérdida de la sensación de logro. Son 15 frases sobre los últimos tres meses. Para cada una, indica con qué frecuencia te ocurrió en ese período. Si no tienes un empleo formal, piensa en tu actividad principal, como los estudios, un negocio propio o el cuidado de alguien. Algunas frases describen situaciones positivas: respóndelas de la misma forma, pensando solo en la frecuencia. Es una autoevaluación basada en tus respuestas, no un diagnóstico.',
  scale: ['Nunca', 'Rara vez', 'A veces', 'A menudo', 'Siempre'],
  items: [
    'Después de la jornada laboral, mi energía solo alcanzó para quedarme en el sofá o deslizar el dedo por el celular.',
    'Hice solo lo mínimo necesario en el trabajo, sin involucrarme de verdad en las tareas.',
    'Terminé la jornada de trabajo con la sensación de que mi esfuerzo dio algún resultado.',
    'La víspera de volver al trabajo, sentí un peso con solo pensar en lo que me esperaba.',
    'Traté a colegas, clientes o a las personas que atiendo con más frialdad o impaciencia de la que me gustaría.',
    'Ante un problema en el trabajo, confié en mi capacidad para encontrar una salida.',
    'Incluso después de días libres o vacaciones, el cansancio volvió en los primeros días de trabajo.',
    'Tuve la sensación de que daba igual si hacía bien o mal mi trabajo.',
    'Aprendí algo nuevo o mejoré en alguna parte de mi trabajo.',
    'Necesité un esfuerzo enorme solo para llegar al final de la jornada de trabajo.',
    'Conté las horas para que terminara la jornada.',
    'Me di cuenta de que mi trabajo ayudó a alguien, ya sea a un colega, a un cliente o al equipo.',
    'Dejé de lado a amigos, familia o actividades que me gustan porque el trabajo me dejó sin energía.',
    'Evité mensajes, reuniones o conversaciones de trabajo siempre que pude.',
    'Sentí orgullo por algo que hice en el trabajo.',
  ],
  dims: {
    exhaustion: {
      label: 'Agotamiento',
      desc: 'Mide el cansancio físico y mental relacionado con el trabajo, ese que no se va con una noche de sueño ni con un fin de semana de descanso.',
      high: 'El trabajo te ha estado consumiendo más energía de la que logras reponer. El cansancio no se queda en la jornada laboral: te acompaña a casa, a tus días libres y a tus relaciones. Esta suele ser la primera señal de que el ritmo actual no es sostenible.',
      low: 'Has logrado recuperar la energía entre un día de trabajo y otro. El cansancio aparece, como en cualquier rutina, pero no parece acumularse. Sigue protegiendo tus momentos de descanso.',
      tips: [
        'Define una hora para terminar la jornada y crea un pequeño ritual de salida, como cerrar la computadora y salir a dar una vuelta.',
        'Protege tu sueño y reserva tiempo para moverte, aunque sean caminatas cortas.',
        'Usa los días libres para descansar de verdad, sin revisar mensajes de trabajo.',
      ],
    },
    detachment: {
      label: 'Distanciamiento del trabajo',
      desc: 'Mide cuánto te has estado alejando del trabajo y de las personas relacionadas con él, con menos implicación, más frialdad o la sensación de que todo da igual.',
      high: 'Has sentido ganas de alejarte del trabajo y de las personas relacionadas con él, haciendo lo mínimo y perdiendo el interés por lo que antes te importaba. Muchas veces, este distanciamiento es una forma de protegerte del desgaste, no una falta de carácter ni de compromiso. Vale la pena entender qué te llevó a esto y qué podría cambiar.',
      low: 'Sigues involucrándote en tu trabajo y con las personas relacionadas con él. Incluso en los días difíciles, parece mantener algún sentido para ti. Ese vínculo ayuda a protegerte del desgaste.',
      tips: [
        'Recuerda qué te llevó a elegir este trabajo y busca tareas que se acerquen a eso.',
        'Habla con tus superiores o con tus colegas sobre lo que le ha quitado sentido al trabajo, como metas poco realistas o falta de autonomía.',
        'Cultiva relaciones de apoyo en el trabajo: una conversación sincera con un colega de confianza puede aliviar mucho.',
      ],
    },
    efficacy: {
      label: 'Bajo sentido de logro',
      desc: 'Mide cuánto te falta la sensación de que tu trabajo da resultados, de que eres capaz y de que estás creciendo. Las frases de esta parte son positivas, así que la puntuación sube cuando ocurrieron poco.',
      high: 'Ha sido poco frecuente sentir que tu esfuerzo rinde, que eres capaz o que tu trabajo marca una diferencia. Esa sensación puede venir del propio cansancio, que distorsiona la forma en que ves tu desempeño, o de un entorno con poco reconocimiento. No mide tu valor como profesional.',
      low: 'Sigues notando que tu trabajo da resultados, que eres capaz de resolver problemas y que estás aprendiendo. Esa sensación de logro te ayuda a mantener la motivación incluso en las épocas más exigentes.',
      tips: [
        'Al final de la semana, anota tres cosas que terminaste o resolviste, por pequeñas que sean.',
        'Pide a alguien de confianza una opinión sobre tu trabajo, para tener una visión más equilibrada de tu desempeño.',
        'Busca un pequeño desafío o aprendizaje que te devuelva la sensación de progreso.',
      ],
    },
  },
  bands: {
    low: {
      label: 'Pocas señales de burnout',
      text: 'Tus respuestas indican pocas señales de burnout. Pareces mantener la energía, la implicación y la sensación de logro en el trabajo, incluso con las dificultades normales de la rutina. Sigue cuidando los límites y los hábitos que te ayudan a mantener ese equilibrio.',
    },
    moderate: {
      label: 'Señales moderadas de burnout',
      text: 'Tus respuestas indican algunas señales de desgaste relacionadas con el trabajo. Este es un buen momento para actuar, antes de que el cansancio se acumule. Observa qué es lo que más te ha estado pesando, prueba las sugerencias de abajo y, si es posible, habla con tus superiores sobre ajustes en tu rutina.',
    },
    high: {
      label: 'Señales fuertes de burnout',
      text: 'Tus respuestas indican señales fuertes de burnout, como mucho cansancio, distanciamiento del trabajo y poca sensación de logro. Este desgaste suele requerir cambios reales en la rutina, no solo más fuerza de voluntad. Busca un profesional de psicología o de medicina para evaluar cómo estás y qué caminos tienen sentido en tu caso.',
    },
  },
  resultTitle: 'Tu nivel de burnout',
  resultIntro: 'El resultado suma tus respuestas sobre los últimos tres meses. En las frases sobre el logro, el conteo es inverso: cuanto menos logro sentiste, más sube el resultado. Abajo puedes ver el rango en el que quedaste y cómo puntuaste en cada parte.',
  note: 'Este cuestionario es una herramienta de autoconocimiento, basada en tu propia percepción. El burnout es un desgaste relacionado con el trabajo y no es, por sí solo, un diagnóstico médico. Señales parecidas también aparecen en la depresión, la ansiedad y en problemas de salud física, y solo un profesional cualificado puede hacer esa evaluación.',
  help: 'Si el trabajo está afectando tu salud, busca un profesional de psicología o a tu médico de cabecera. Los servicios de salud de tu localidad pueden orientarte y derivarte a atención especializada en salud mental cuando sea necesario. Si tu empresa tiene un servicio de salud ocupacional o un programa de apoyo a los empleados, también puede ayudarte. Si estás pasando por un malestar intenso, busca una línea de crisis o de apoyo emocional de tu país. En una emergencia, llama al número de emergencias de tu localidad.',
};

export default t;
