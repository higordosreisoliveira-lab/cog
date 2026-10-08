// stress — Spanish translation of pt.ts
import type { TestText } from '../../schema';

const t: TestText = {
  title: 'Nivel de estrés',
  desc: 'Descubre cuánto pesó la sobrecarga en el último mes y cómo está tu capacidad para recuperar el aliento.',
  intro:
    'Este cuestionario evalúa el estrés desde dos lados: la sobrecarga y la presión que sentiste, y la sensación de control y de recuperación que ayuda a equilibrar ese peso. Son 12 frases sobre el último mes. Para cada una, indica con qué frecuencia te ocurrió en ese período. Algunas frases describen situaciones positivas: respóndelas de la misma forma, pensando solo en la frecuencia. Es una autoevaluación basada en tus respuestas y no reemplaza la evaluación de un profesional.',
  scale: ['Nunca', 'Casi nunca', 'A veces', 'A menudo', 'Muy a menudo'],
  items: [
    'Mis tareas y responsabilidades parecieron más grandes que las horas del día.',
    'Logré reservar un tiempo para descansar, sin culpa.',
    'Llegué al final del día sintiendo que los pendientes no hacían más que aumentar.',
    'Cuando surgió un problema, pude detenerme y pensar con calma qué hacer.',
    'Sentí una exigencia fuerte, de otras personas o de mí, para poder con todo.',
    'Sentí que podía organizar mi día como lo necesitaba.',
    'Perdí la paciencia con cosas que normalmente no me molestarían.',
    'Después de un día difícil, una buena noche de sueño o un momento de ocio bastó para recuperarme.',
    'Seguí pensando en mis pendientes incluso en los momentos que deberían haber sido de descanso.',
    'Tuve con quién contar cuando necesité desahogarme o pedir ayuda.',
    'Sentí señales físicas de tensión, como dolor de cabeza, la mandíbula apretada o un cansancio que no se iba.',
    'Pude decir que no o posponer pedidos cuando ya tenía demasiadas cosas.',
  ],
  dims: {
    load: {
      label: 'Sobrecarga y presión',
      desc: 'Mide cuánto sentiste exceso de tareas, exigencias y tensión, y cuánto te acompañó todo eso incluso en las horas de descanso.',
      high: 'En el último mes, la sensación de sobrecarga fue frecuente: muchas cosas por hacer, exigencias y poco respiro para la cabeza. El cuerpo y la mente aguantan ese ritmo durante un tiempo, pero pasa factura cuando dura mucho. Vale la pena mirar qué se puede reducir, repartir o posponer.',
      low: 'En el último mes, la presión apareció poco o se mantuvo en un nivel que pudiste manejar. Esto no quiere decir que no hubo desafíos, pero no parecen haberse acumulado. Observa qué te ha funcionado para mantener ese equilibrio.',
      tips: [
        'Haz una lista de las tareas de la semana y separa lo que es realmente urgente, lo que puede esperar y lo que se puede repartir con otras personas.',
        'Haz pausas cortas a lo largo del día, lejos de las pantallas, aunque sean de cinco minutos.',
        'Acuerda límites claros, como una hora a partir de la cual ya no respondes mensajes de trabajo.',
      ],
    },
    coping: {
      label: 'Control y recuperación bajos',
      desc: 'Mide la falta de los recursos que equilibran el estrés, como sentir que la rutina está en tus manos, descansar, contar con apoyo y poner límites. Las frases de esta parte son positivas, así que la puntuación sube cuando ocurrieron poco.',
      high: 'En el último mes, los momentos de descanso, de apoyo y de sensación de control fueron escasos. Sin esas pausas, hasta una rutina común pesa más, porque no queda espacio para recuperar el aliento. Fortalecer poco a poco estos recursos es una de las formas más eficaces de reducir el estrés.',
      low: 'Has logrado descansar, pedir ayuda y sentir que la rutina está, en buena parte, en tus manos. Estos recursos funcionan como un amortiguador: ayudan a atravesar etapas difíciles sin agotarse. Sigue protegiendo esos momentos, sobre todo cuando la rutina apriete.',
      tips: [
        'Protege tu sueño: intenta dormir y despertarte a horas parecidas, incluso los fines de semana.',
        'Agenda al menos una actividad por semana que te dé placer o descanso y trata ese horario como un compromiso.',
        'Cuéntale a alguien de confianza cómo estás: compartir el peso ya ayuda a aliviarlo.',
      ],
    },
  },
  bands: {
    low: {
      label: 'Estrés bajo',
      text: 'Tus respuestas indican un nivel bajo de estrés en el último mes. Pareces encontrar un buen equilibrio entre las exigencias de la rutina y los momentos de recuperación. Sigue cuidando los hábitos que sostienen ese equilibrio.',
    },
    moderate: {
      label: 'Estrés moderado',
      text: 'Tus respuestas indican un nivel moderado de estrés, algo común en épocas de muchas exigencias. Lo que conviene vigilar es que ese estado se vuelva lo normal, sin períodos de alivio. Prueba las sugerencias de abajo y, si el estrés empieza a afectar tu sueño, tu salud o tus relaciones, habla con un profesional.',
    },
    high: {
      label: 'Estrés alto',
      text: 'Tus respuestas indican un nivel alto de estrés en el último mes, con mucha presión y poco espacio para recuperarte. Cuando esta situación se prolonga, puede afectar el sueño, el estado de ánimo y la salud física. Vale la pena buscar la ayuda de un profesional de psicología o de medicina para entender qué te está pesando y encontrar formas de aliviar la carga.',
    },
  },
  resultTitle: 'Tu nivel de estrés',
  resultIntro: 'El resultado suma tus respuestas sobre el último mes. En las frases sobre control y recuperación, el conteo es inverso: cuanto menos aparecieron esos recursos, más sube el resultado. Abajo puedes ver el rango en el que quedaste y cómo puntuaste en cada parte.',
  note: 'Este cuestionario es una herramienta de autoconocimiento, basada en tu propia percepción del último mes. No es un diagnóstico y no reemplaza la evaluación de un profesional cualificado. El nivel de estrés también varía mucho de una etapa de la vida a otra.',
  help: 'Si el estrés está afectando tu salud, tu sueño o tus relaciones, busca un profesional de psicología o a tu médico de cabecera. Los servicios de salud de tu localidad pueden orientarte y derivarte a atención especializada en salud mental cuando sea necesario. Si estás pasando por un malestar intenso, busca una línea de crisis o de apoyo emocional de tu país. En una emergencia, llama al número de emergencias de tu localidad.',
};

export default t;
