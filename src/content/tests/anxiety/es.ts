// anxiety — Spanish translation of pt.ts
import type { TestText } from '../../schema';

const t: TestText = {
  title: 'Nivel de ansiedad',
  desc: 'Descubre con qué frecuencia la preocupación y la tensión en el cuerpo aparecieron en tu rutina en las últimas dos semanas.',
  intro:
    'Este cuestionario observa dos caras de la ansiedad: la preocupación, que ocupa los pensamientos, y la tensión, que aparece en el cuerpo y en el comportamiento. Son 10 frases sobre las últimas dos semanas. Para cada una, indica con qué frecuencia te ocurrió en ese período, y no cómo sueles ser en general. No hay respuestas correctas ni incorrectas. Es una autoevaluación basada en tus respuestas: te ayuda a darte cuenta de cómo estás, pero no es un diagnóstico.',
  scale: ['Nunca', 'Algunos días', 'Más de la mitad de los días', 'Casi todos los días'],
  items: [
    'Pasé buena parte del día con la cabeza ocupada por preocupaciones, una detrás de otra.',
    'Sentí el cuerpo tenso, sobre todo en los hombros, el cuello o la mandíbula.',
    'Intenté pensar en otra cosa, pero los mismos pensamientos preocupantes volvían.',
    'Noté el corazón acelerado o la respiración corta sin haber hecho ningún esfuerzo físico.',
    'A la hora de dormir, mi cabeza se quedó repasando problemas y pendientes.',
    'Me costó quedarme quieto o quieta: movía las piernas, jugaba con las manos o caminaba de un lado a otro.',
    'Ante algo sencillo, como un mensaje sin respuesta, enseguida pensé en lo peor.',
    'Pequeños imprevistos, como un ruido o un retraso, me sacaron de quicio más de lo normal.',
    'Pospuse decisiones o evité situaciones por miedo a que algo saliera mal.',
    'Incluso en los momentos libres, mi cuerpo siguió en alerta y no pude desacelerar.',
  ],
  dims: {
    worry: {
      label: 'Preocupación',
      desc: 'Mide cuánto ocuparon tu cabeza los pensamientos preocupantes, si volvían aunque intentaras distraerte y cuánto influyeron en tus decisiones.',
      high: 'En las últimas semanas, la preocupación ocupó mucho espacio en tus pensamientos, muchas veces anticipando problemas que todavía no ocurrieron. Esto cansa y quita la atención de lo que está a tu alcance ahora. Vale la pena aprender formas de ponerles un límite a esos pensamientos y buscar apoyo si están afectando tu rutina.',
      low: 'La preocupación apareció poco o de forma pasajera en las últimas semanas. Pareces poder pensar en los problemas sin que se adueñen de tu día. Sigue cuidando los hábitos que te ayudan a mantener ese equilibrio.',
      tips: [
        'Reserva 15 minutos al día para anotar tus preocupaciones y, junto a cada una, escribe un próximo paso posible o si está fuera de tu control.',
        'Cuando notes que estás imaginando lo peor, pregúntate: ¿qué es lo más probable que pase en realidad?',
        'Reduce el tiempo que dedicas a las noticias y las redes sociales, sobre todo antes de dormir.',
      ],
    },
    tension: {
      label: 'Tensión en el cuerpo e inquietud',
      desc: 'Mide señales físicas y de comportamiento relacionadas con la ansiedad, como músculos tensos, corazón acelerado, inquietud e irritación por cosas pequeñas.',
      high: 'Tu cuerpo dio muchas señales de alerta en las últimas semanas, como tensión, inquietud o reacciones fuertes ante pequeños imprevistos. Es la forma en que el cuerpo responde a la presión, pero, cuando dura mucho, cansa y dificulta el descanso. Las prácticas que calman el cuerpo suelen ayudar, y vale la pena hablar con un profesional si las señales son intensas o frecuentes.',
      low: 'Tu cuerpo mostró pocas señales de tensión en las últimas semanas, y lograste desacelerar en los momentos de descanso. Esto indica que la presión del día a día no se está acumulando en tu cuerpo.',
      tips: [
        'Prueba a respirar despacio durante unos minutos, soltando el aire durante más tiempo del que tardas en tomarlo.',
        'Mueve el cuerpo con regularidad: una caminata de 20 a 30 minutos ya ayuda a descargar la tensión.',
        'Si sientes con frecuencia el corazón acelerado, falta de aire o dolor en el pecho, consulta a un médico o una médica para evaluar otras posibles causas.',
      ],
    },
  },
  bands: {
    minimal: {
      label: 'Ansiedad mínima',
      text: 'Tus respuestas indican pocas señales de ansiedad en las últimas dos semanas. Las preocupaciones y los momentos de tensión forman parte de la vida y, en tu caso, no parecen estar pesando en tu rutina. Sigue cuidando tu sueño, tu actividad física y tus relaciones.',
    },
    mild: {
      label: 'Ansiedad leve',
      text: 'Tus respuestas indican algunas señales de ansiedad, presentes en parte de los días. Esto es común en épocas más ajetreadas o de cambios. Conviene observar qué te ha estado generando preocupación y probar las sugerencias de abajo; si las señales aumentan o duran mucho, habla con un profesional.',
    },
    moderate: {
      label: 'Ansiedad moderada',
      text: 'Tus respuestas indican que la preocupación y la tensión estuvieron presentes buena parte de los días. Esto puede cansar y afectar el sueño, la concentración y las relaciones. Hablar con un profesional de psicología o de medicina puede ayudarte a entender lo que está pasando y a encontrar formas de manejarlo.',
    },
    high: {
      label: 'Ansiedad alta',
      text: 'Tus respuestas indican señales intensas de ansiedad casi todos los días de las últimas dos semanas. Esto no define quién eres, pero muestra que estás cargando un peso grande, y existen formas eficaces de cuidarte. Busca un profesional de psicología o de medicina para una evaluación y para pensar juntos en los próximos pasos.',
    },
  },
  resultTitle: 'Tu nivel de ansiedad',
  resultIntro: 'El resultado tiene en cuenta la suma de tus respuestas sobre las últimas dos semanas. Abajo puedes ver el rango en el que quedaste y cómo puntuaste en preocupación y en tensión en el cuerpo.',
  note: 'Este cuestionario es una herramienta de autoconocimiento y detección, basada en tus propias respuestas. No es un diagnóstico: solo un profesional cualificado de psicología o de medicina puede evaluar la ansiedad de forma completa. Algunas señales físicas, como las palpitaciones y la falta de aire, también pueden tener otras causas.',
  help: 'Si la ansiedad está afectando tu rutina, busca un profesional de psicología o a tu médico de cabecera. Los servicios de salud de tu localidad pueden orientarte y derivarte a atención especializada en salud mental cuando sea necesario. Si estás pasando por un malestar intenso, busca una línea de crisis o de apoyo emocional de tu país. En una emergencia, llama al número de emergencias de tu localidad.',
};

export default t;
