// depression — Spanish translation of pt.ts
import type { TestText } from '../../schema';

const t: TestText = {
  title: 'Señales de ánimo deprimido',
  desc: 'Descubre con qué frecuencia aparecieron en las últimas dos semanas señales como el desánimo, la pérdida de interés y la falta de energía.',
  intro:
    'Este cuestionario observa dos grupos de señales relacionadas con el ánimo deprimido: cambios en el estado de ánimo y en el interés por las cosas, y cambios en la energía, el sueño, el apetito y la concentración. Son 10 frases sobre las últimas dos semanas. Para cada una, indica con qué frecuencia te ocurrió en ese período. Algunas frases tocan temas delicados: responde a tu ritmo y con sinceridad. Es una autoevaluación basada en tus respuestas, no un diagnóstico.',
  scale: ['Nunca', 'Algunos días', 'Más de la mitad de los días', 'Casi todos los días'],
  items: [
    'Cosas que antes me daban placer, como un pasatiempo o reunirme con amigos, perdieron la gracia.',
    'Sentí falta de energía incluso para tareas sencillas, como bañarme o responder un mensaje.',
    'Pasé buena parte del día con una tristeza o un vacío difícil de explicar.',
    'Mi sueño cambió: tardé en dormirme, me desperté varias veces durante la noche o dormí mucho más de lo normal.',
    'Mi apetito cambió: comí mucho menos o mucho más de lo habitual.',
    'Miré los próximos meses sin esperanza de que algo fuera a mejorar.',
    'Perdí el hilo en conversaciones o tareas sencillas porque no lograba concentrarme.',
    'Me sorprendí pensando que no valgo nada o que todo lo que hago sale mal.',
    'Las decisiones pequeñas, como qué comer o qué ponerme, me parecieron demasiado difíciles.',
    'Me pasaron por la cabeza pensamientos de que no vale la pena vivir o de hacerme daño.',
  ],
  dims: {
    mood: {
      label: 'Ánimo e interés',
      desc: 'Mide señales como la tristeza persistente, la pérdida de placer en las cosas, la falta de esperanza y los pensamientos muy negativos sobre ti.',
      high: 'En las últimas dos semanas, la tristeza, la falta de interés o los pensamientos duros sobre ti aparecieron con frecuencia. Esto no es falta de fuerza de voluntad: el ánimo deprimido cambia la forma en que nos vemos a nosotros mismos y al futuro. Hablar de esto con un profesional es un paso importante, y no tienes que esperar a sentirte peor para buscar ayuda.',
      low: 'Tu estado de ánimo y tu interés por las cosas parecen haberse mantenido estables en las últimas dos semanas. Todo el mundo tiene días tristes, pero no parecen haber dominado tu rutina. Sigue cuidando lo que te hace bien.',
      tips: [
        'Planea pequeñas actividades agradables a lo largo de la semana, aunque no tengas ganas: muchas veces el ánimo llega después de empezar, y no antes.',
        'Mantén el contacto con personas de confianza, aunque sea solo con un mensaje o una conversación corta.',
        'Si la tristeza o la falta de interés duran más de dos semanas, busca un profesional de psicología o de medicina para hablar de ello.',
      ],
    },
    energy: {
      label: 'Energía, sueño, apetito y concentración',
      desc: 'Mide cambios en el cuerpo y en el funcionamiento diario que suelen acompañar al ánimo deprimido, como el cansancio, las alteraciones del sueño y del apetito y la dificultad para concentrarse.',
      high: 'Tu cuerpo y tu mente dieron señales de desgaste en las últimas dos semanas: menos energía, cambios en el sueño o en el apetito y dificultad para concentrarte. Estas señales pueden acompañar al ánimo deprimido, pero también pueden tener otras causas, como el estrés, las noches de mal sueño o problemas de salud física. Vale la pena hablar con un médico o una médica, sobre todo si continúan.',
      low: 'Tu energía, tu sueño, tu apetito y tu concentración parecen estar funcionando de forma estable. Esa base suele ayudar mucho a atravesar los días más difíciles. Sigue cuidándola.',
      tips: [
        'Intenta mantener horarios regulares para dormir, despertarte y comer, incluso en los días en que tengas pocas ganas.',
        'Sal un poco al aire libre y mueve el cuerpo, aunque sea con una caminata corta: la luz del día y el movimiento ayudan a regular el sueño y la energía.',
        'Divide las tareas en partes pequeñas y reconoce cada una que termines, sin exigirte el ritmo de antes.',
      ],
    },
  },
  bands: {
    minimal: {
      label: 'Pocas señales',
      text: 'Tus respuestas indican pocas o ninguna señal de ánimo deprimido en las últimas dos semanas. Los momentos de tristeza o cansancio forman parte de la vida y, en tu caso, no parecen estar adueñándose de tu rutina. Sigue cuidando tu sueño, tu actividad física y tus relaciones.',
    },
    mild: {
      label: 'Señales leves',
      text: 'Tus respuestas indican algunas señales de ánimo deprimido en parte de los días. Esto puede ocurrir en épocas de cansancio, pérdidas o cambios. Observa cómo te sientes en las próximas semanas y, si las señales continúan o aumentan, habla con un profesional.',
    },
    moderate: {
      label: 'Señales moderadas',
      text: 'Tus respuestas indican señales de ánimo deprimido buena parte de los días, lo que puede estar pesando en tu día a día. Esto merece atención y cuidado, y no es algo que tengas que resolver por tu cuenta. Busca un profesional de psicología o de medicina para hablar de lo que has estado sintiendo.',
    },
    high: {
      label: 'Señales intensas',
      text: 'Tus respuestas indican señales frecuentes e intensas de ánimo deprimido en las últimas dos semanas. Esto puede hacer que todo resulte más difícil, pero existe tratamiento, y las personas mejoran con el apoyo adecuado. Busca un profesional de psicología o de medicina en cuanto puedas, y cuéntale a alguien de confianza cómo estás.',
    },
  },
  resultTitle: 'Tus señales de ánimo',
  resultIntro: 'El resultado suma tus respuestas sobre las últimas dos semanas. Abajo puedes ver el rango en el que quedaste y cómo puntuaste en ánimo e interés y en energía, sueño, apetito y concentración.',
  note: 'Este cuestionario es una herramienta de autoconocimiento y detección, basada en tus propias respuestas. No es un diagnóstico de depresión: solo un profesional cualificado de psicología o de medicina puede hacer esa evaluación. El cansancio y los cambios en el sueño y el apetito también pueden tener otras causas, incluso físicas.',
  help: 'Para hablar de lo que estás sintiendo, busca un profesional de psicología o a tu médico de cabecera. Los servicios de salud de tu localidad pueden orientarte y derivarte a atención especializada en salud mental cuando sea necesario. Si estás pasando por un momento de mucho malestar, busca una línea de crisis o de apoyo emocional de tu país. En una emergencia, llama al número de emergencias de tu localidad.',
  alert:
    'Nos contaste que, en las últimas dos semanas, tuviste pensamientos de que no vale la pena vivir o de hacerte daño. Qué bueno que respondiste con sinceridad. Estos pensamientos merecen cuidado ahora mismo, y no tienes que pasar por esto sin nadie a tu lado. Si estás en peligro o sientes que podrías hacerte daño, llama ahora al número de emergencias de tu localidad o acude al servicio de urgencias más cercano. Para hablar con alguien en cualquier momento, busca una línea de crisis o de apoyo emocional de tu país. Si puedes, cuéntale también a alguien de confianza cómo te estás sintiendo.',
};

export default t;
