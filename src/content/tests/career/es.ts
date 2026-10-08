import type { TestText } from '../../schema';

const t: TestText = {
  "title": "Intereses profesionales",
  "desc": "Descubre qué tipos de actividad van más contigo y conoce profesiones relacionadas con tus intereses.",
  "intro": "Este cuestionario se basa en el modelo de Holland, que organiza los intereses profesionales en seis tipos: práctico, investigador, artístico, social, emprendedor y organizador. Son 36 actividades. Para cada una, indica cuánto te gustaría hacerla, sin pensar en el salario, en la formación ni en si ya sabes hacerla. No hay respuestas correctas: el objetivo es identificar lo que despierta tu interés.",
  "scale": [
    "Totalmente en desacuerdo",
    "En desacuerdo",
    "Neutral",
    "De acuerdo",
    "Totalmente de acuerdo"
  ],
  "items": [
    "Me gustaría descubrir por qué un aparato dejó de funcionar y repararlo.",
    "Me gustaría hacer experimentos para comprobar si una idea funciona en la práctica.",
    "Me gustaría escribir historias, guiones o letras de canciones.",
    "Me gustaría enseñarle algo nuevo a un grupo de personas.",
    "Me gustaría abrir y administrar mi propio negocio.",
    "Me gustaría organizar hojas de cálculo, archivos y registros para que todo sea fácil de encontrar.",
    "Me gustaría construir o armar cosas con mis propias manos.",
    "Me gustaría analizar datos para descubrir la causa de un problema.",
    "Me gustaría crear la identidad visual de una marca, como el logotipo y los colores.",
    "Me gustaría escuchar y orientar a personas que están pasando por un momento difícil.",
    "Me gustaría negociar con clientes y cerrar ventas.",
    "Me gustaría llevar el control de las cuentas por pagar y por cobrar de una empresa.",
    "Me gustaría trabajar al aire libre, en lugares como obras, granjas o parques.",
    "Me gustaría investigar cómo funcionan el cuerpo humano y otros seres vivos.",
    "Me gustaría presentarme en un escenario, cantando, tocando un instrumento o actuando.",
    "Me gustaría cuidar la salud y el bienestar de otras personas.",
    "Me gustaría liderar un equipo para alcanzar una meta.",
    "Me gustaría revisar documentos con atención para asegurarme de que no tengan errores.",
    "Me gustaría operar máquinas, vehículos o herramientas de precisión.",
    "Me gustaría entender a fondo cómo funciona una tecnología nueva.",
    "Me gustaría tomar fotos o grabar videos y después editar el material.",
    "Me gustaría acompañar y apoyar el desarrollo de niños o jóvenes.",
    "Me gustaría presentar una idea para convencer a inversionistas o a la dirección de una empresa.",
    "Me gustaría controlar el inventario, los pedidos y los plazos de entrega.",
    "Me gustaría cuidar plantas o animales en el día a día.",
    "Me gustaría leer estudios científicos y sacar mis propias conclusiones.",
    "Me gustaría diseñar ropa, objetos o la decoración de espacios.",
    "Me gustaría ayudar a las personas a resolver conflictos y a entenderse mejor.",
    "Me gustaría crear estrategias para que un producto crezca en el mercado.",
    "Me gustaría verificar si una empresa cumple las normas y las leyes.",
    "Me gustaría hacer la instalación eléctrica o de plomería de un inmueble.",
    "Me gustaría resolver problemas complejos de matemáticas o de lógica.",
    "Me gustaría inventar ideas originales para una campaña o un proyecto creativo.",
    "Me gustaría participar en proyectos que ayuden a la comunidad donde vivo.",
    "Me gustaría tomar decisiones importantes, aunque impliquen riesgos.",
    "Me gustaría organizar la agenda y las rutinas de una oficina."
  ],
  "dims": {
    "realistic": {
      "label": "Práctico",
      "desc": "Interés por actividades concretas: usar las manos, herramientas y máquinas, construir, reparar y trabajar al aire libre.",
      "high": "Te gusta ver resultados concretos y resolver problemas con tus propias manos. Los entornos con tareas claras y prácticas suelen motivarte. Ten en cuenta que muchas de estas carreras también exigen estudio técnico y actualización constante.",
      "low": "Las actividades manuales, mecánicas o al aire libre despiertan menos tu interés. Probablemente te sientes más a gusto trabajando con ideas, personas o información. Aun así, algunas habilidades prácticas básicas son útiles en cualquier área.",
      "tips": [
        "Haz un curso corto de alguna habilidad manual o técnica para poner a prueba tu interés.",
        "Conversa con profesionales del área sobre cómo es en realidad la rutina de trabajo.",
        "Considera las carreras técnicas, que suelen ser una puerta de entrada rápida a estas profesiones."
      ],
      "examples": [
        "Ingeniería civil",
        "Ingeniería mecánica",
        "Electricista",
        "Agronomía",
        "Piloto de avión",
        "Gastronomía",
        "Carpintería",
        "Mantenimiento industrial"
      ]
    },
    "investigative": {
      "label": "Investigador",
      "desc": "Interés por observar, investigar, analizar y entender cómo funcionan las cosas, ya sea en la ciencia, la tecnología o la salud.",
      "high": "Te gustan las preguntas difíciles, investigar las causas y entender las cosas a fondo. Los entornos que valoran el razonamiento y la autonomía suelen motivarte. Lo que conviene vigilar es perderte en el análisis y tardar en pasar a la acción.",
      "low": "La investigación, el análisis de datos y las teorías despiertan menos tu interés. Probablemente prefieres aplicar soluciones antes que estudiar un problema durante mucho tiempo. Aun así, saber buscar información confiable ayuda en cualquier profesión.",
      "tips": [
        "Sigue contenidos de divulgación científica sobre temas que te llamen la atención.",
        "Participa en un proyecto de investigación, una olimpiada de conocimiento o un curso en línea.",
        "Prueba analizar datos reales en una hoja de cálculo para ver si este tipo de tarea te gusta."
      ],
      "examples": [
        "Medicina",
        "Biología",
        "Ciencia de datos",
        "Química",
        "Farmacia",
        "Desarrollo de software",
        "Investigación científica",
        "Geología"
      ]
    },
    "artistic": {
      "label": "Artístico",
      "desc": "Interés por crear, expresarte y trabajar con ideas originales, ya sea con imágenes, palabras, música, movimiento o diseño.",
      "high": "Te gusta crear, imaginar y darles forma a tus propias ideas. Los entornos con libertad, variedad y espacio para la originalidad suelen motivarte. Lo que conviene vigilar es cómo manejas los plazos, las reglas y las partes repetitivas que todo trabajo creativo también tiene.",
      "low": "Las actividades artísticas y de expresión personal despiertan menos tu interés. Probablemente prefieres objetivos claros y resultados más previsibles. Sin embargo, la creatividad también aparece en la forma de resolver problemas, en cualquier área.",
      "tips": [
        "Arma un portafolio sencillo con tus trabajos, aunque sean proyectos personales.",
        "Haz un taller corto en un área creativa distinta de la que ya conoces.",
        "Investiga cómo los profesionales creativos combinan el arte con otras habilidades, como la tecnología o los negocios."
      ],
      "examples": [
        "Diseño gráfico",
        "Arquitectura",
        "Publicidad",
        "Fotografía",
        "Música",
        "Artes escénicas",
        "Diseño de modas",
        "Producción audiovisual"
      ]
    },
    "social": {
      "label": "Social",
      "desc": "Interés por ayudar, enseñar, cuidar y orientar a las personas, contribuyendo a su bienestar y su desarrollo.",
      "high": "Te motiva que tu trabajo marque una diferencia en la vida de otras personas. Escuchar, enseñar y cuidar son actividades que le dan sentido a tu día. Lo que conviene vigilar es sobrecargarte con los problemas ajenos y olvidarte de cuidarte.",
      "low": "Las actividades centradas en cuidar, enseñar o aconsejar a personas despiertan menos tu interés. Probablemente prefieres trabajar con tareas, objetos, datos o ideas. Aun así, saber colaborar sigue siendo importante en casi cualquier trabajo.",
      "tips": [
        "Haz voluntariado en una causa que te importe y observa cómo te sientes.",
        "Prueba explicarles algo que sabes a otras personas, por ejemplo con tutorías o clases particulares.",
        "Conversa con profesionales de la salud, la educación o el trabajo social sobre los desafíos de su rutina."
      ],
      "examples": [
        "Psicología",
        "Pedagogía",
        "Enfermería",
        "Trabajo social",
        "Fisioterapia",
        "Educación física",
        "Terapia del lenguaje",
        "Recursos humanos"
      ]
    },
    "enterprising": {
      "label": "Emprendedor",
      "desc": "Interés por liderar, convencer, negociar y tomar decisiones para alcanzar metas, ya sea en empresas, en ventas o en proyectos propios.",
      "high": "Te gusta tomar la iniciativa, convencer a las personas y ver cómo se alcanzan las metas. Los entornos dinámicos, con desafíos y reconocimiento por los resultados, suelen motivarte. Lo que conviene vigilar es la prisa por decidir y la tendencia a subestimar riesgos o detalles.",
      "low": "Liderar, vender y negociar despiertan menos tu interés. Probablemente prefieres aportar tu conocimiento o tu trabajo sin estar en el centro de las decisiones. Aun así, saber defender tus ideas ayuda en cualquier carrera.",
      "tips": [
        "Asume el liderazgo de un proyecto pequeño, en el trabajo, en los estudios o en tu comunidad.",
        "Prueba una idea de negocio a pequeña escala antes de invertir mucho tiempo o dinero.",
        "Aprende lo básico de finanzas, negociación y comunicación."
      ],
      "examples": [
        "Administración de empresas",
        "Derecho",
        "Marketing",
        "Ventas y gestión comercial",
        "Relaciones públicas",
        "Gestión de proyectos",
        "Corretaje de bienes raíces",
        "Comercio exterior"
      ]
    },
    "conventional": {
      "label": "Organizador",
      "desc": "Interés por organizar información, seguir procesos claros y manejar datos, números y documentos con precisión.",
      "high": "Te gustan el orden, las reglas claras y saber exactamente qué hay que hacer. Los entornos estructurados, donde se valora la precisión, suelen motivarte. Lo que conviene vigilar es cómo manejas los cambios rápidos y las situaciones sin un procedimiento definido.",
      "low": "Las rutinas, las hojas de cálculo y los procedimientos detallados despiertan menos tu interés. Probablemente prefieres la variedad y la libertad para hacer las cosas a tu manera. Aun así, un poco de organización facilita el trabajo en cualquier área.",
      "tips": [
        "Aprende a usar bien las hojas de cálculo y las herramientas de organización, una habilidad útil en muchas carreras.",
        "Hazte cargo de las finanzas o de la organización de un proyecto y observa si este tipo de tarea te gusta.",
        "Investiga áreas como contabilidad, logística y auditoría, presentes en casi todo tipo de empresa."
      ],
      "examples": [
        "Contabilidad",
        "Auditoría",
        "Logística",
        "Asistencia ejecutiva",
        "Análisis financiero",
        "Bibliotecología",
        "Control de calidad",
        "Gestión de compras"
      ]
    }
  },
  "resultTitle": "Tus tipos de interés",
  "resultIntro": "Destacamos los tres tipos con las puntuaciones más altas. La mayoría de las personas combina más de un tipo, y cada profesión valora una combinación diferente. Usa las sugerencias como punto de partida para investigar y conversar con quienes ya trabajan en el área.",
  "note": "Este resultado muestra intereses, no habilidades ni probabilidades de éxito. Es una herramienta de autoconocimiento y no reemplaza una orientación vocacional hecha por especialistas."
};

export default t;
