import type { TestText } from '../../schema';

const t: TestText = {
  "title": "Perfil de personalidad",
  "desc": "Descubre cómo te ubicas en los cinco grandes rasgos de personalidad, uno de los modelos más estudiados por la psicología.",
  "intro": "Este cuestionario mide cinco rasgos amplios de personalidad: apertura a la experiencia, responsabilidad, extroversión, amabilidad y estabilidad emocional. Las 50 frases se adaptaron del IPIP, un banco de ítems de dominio público que se usa en investigación. Para cada frase, indica cuánto describe cómo eres hoy, y no cómo te gustaría ser. No hay respuestas correctas ni incorrectas, y ningún rasgo es mejor que otro. Responde con sinceridad y sin pensarlo demasiado: la primera impresión suele ser la más fiel.",
  "scale": [
    "Totalmente en desacuerdo",
    "En desacuerdo",
    "Neutral",
    "De acuerdo",
    "Totalmente de acuerdo"
  ],
  "items": [
    "Soy el alma de la fiesta.",
    "Me preocupo poco por los demás.",
    "Siempre me preparo con anticipación.",
    "Me estreso con facilidad.",
    "Tengo un vocabulario amplio.",
    "No hablo mucho.",
    "Me intereso por las personas.",
    "Dejo mis cosas esparcidas por todas partes.",
    "La mayor parte del tiempo, mantengo la calma.",
    "Me cuesta entender las ideas abstractas.",
    "Me siento a gusto entre otras personas.",
    "Hago comentarios que ofenden a la gente.",
    "Presto atención a los detalles.",
    "Suelo preocuparme por las cosas.",
    "Tengo una imaginación muy viva.",
    "Prefiero quedarme en segundo plano.",
    "Me importa lo que sienten los demás.",
    "Termino desordenándolo todo.",
    "Rara vez me siento con el ánimo bajo.",
    "Las ideas abstractas no me interesan.",
    "Suelo ser quien inicia las conversaciones.",
    "Los problemas de los demás no me interesan.",
    "Hago mis tareas enseguida, sin dejarlas para después.",
    "Me altero con facilidad.",
    "Tengo ideas excelentes.",
    "Suelo tener poco que decir.",
    "Tengo el corazón blando.",
    "A menudo me olvido de guardar las cosas en su lugar.",
    "Me disgusto con facilidad.",
    "No tengo mucha imaginación.",
    "En las fiestas, converso con muchas personas distintas.",
    "En el fondo, no me interesan mucho los demás.",
    "Me gusta tener las cosas en orden.",
    "Mi estado de ánimo cambia mucho.",
    "Entiendo las cosas rápidamente.",
    "No me gusta llamar la atención.",
    "Saco tiempo para ayudar a los demás.",
    "Evito mis obligaciones.",
    "Con frecuencia tengo altibajos de ánimo.",
    "Uso palabras difíciles.",
    "No me molesta ser el centro de atención.",
    "Siento las emociones de los demás.",
    "Sigo una rutina planificada.",
    "Me irrito con facilidad.",
    "Dedico tiempo a reflexionar sobre las cosas.",
    "Hablo poco cuando estoy con personas que no conozco.",
    "Hago que las personas se sientan a gusto.",
    "Soy exigente con la calidad de mi trabajo.",
    "A menudo me siento con el ánimo bajo.",
    "Mi cabeza siempre está llena de ideas."
  ],
  "dims": {
    "openness": {
      "label": "Apertura a la experiencia",
      "desc": "Mide la curiosidad, la imaginación y el interés por ideas nuevas, abstractas o distintas de las habituales.",
      "high": "Te gusta explorar ideas, aprender cosas distintas e imaginar posibilidades. Esto te ayuda a crear soluciones originales y a adaptarte a los cambios. Lo que conviene vigilar es dispersarte entre muchos intereses y dejar proyectos a medias.",
      "low": "Prefieres lo concreto, lo conocido y lo que ya se probó en la práctica. Esto aporta enfoque, sentido común y eficiencia en las tareas del día a día. Lo que conviene vigilar es descartar ideas nuevas demasiado pronto, antes de entender lo que pueden ofrecer.",
      "tips": [
        "Prueba algo nuevo de vez en cuando, como un libro de otro género o un camino distinto para volver a casa.",
        "Ante una idea diferente, pregúntate \"¿qué tiene de útil?\" antes de decidir.",
        "Si tienes muchos intereses, elige uno a la vez y llévalo hasta el final."
      ]
    },
    "conscientiousness": {
      "label": "Responsabilidad",
      "desc": "Mide cuánto planificas, cumples tus compromisos y cuidas los detalles; es decir, tu disciplina y tu sentido de la responsabilidad.",
      "high": "Sueles planificar, cumplir los plazos y cuidar los detalles, y la gente sabe que puede contar contigo. Lo que conviene vigilar es la exigencia excesiva: el perfeccionismo y la dificultad con los imprevistos pueden generar cansancio.",
      "low": "Manejas las tareas de forma flexible y espontánea, sin atarte a planes rígidos. Esto te ayuda a improvisar y a adaptarte cuando algo cambia. Lo que conviene vigilar es dejar cosas importantes para último momento o perder de vista los plazos.",
      "tips": [
        "Divide las tareas grandes en pasos pequeños y ponle un plazo a cada uno.",
        "Usa una lista o una agenda sencilla y revísala al comienzo del día.",
        "Define qué es \"suficientemente bueno\" antes de empezar, para que el perfeccionismo no te frene."
      ]
    },
    "extraversion": {
      "label": "Extroversión",
      "desc": "Mide cuánto buscas la compañía de otras personas, la conversación y los ambientes animados, y cuánto eso te recarga de energía.",
      "high": "Ganas energía al estar con personas, inicias conversaciones con facilidad y te sientes bien en ambientes animados. Esto te ayuda a crear vínculos y a exponerte en público. Lo que conviene vigilar es hablar más de lo que escuchas o que te cuesten las tareas que requieren tiempo a solas.",
      "low": "Prefieres grupos pequeños, conversaciones más profundas y momentos de silencio para recargar energía. Esto favorece la concentración, la escucha y la reflexión antes de actuar. Lo que conviene vigilar es dejar de mostrar tus ideas y tu trabajo por no querer llamar la atención.",
      "tips": [
        "Observa qué te recarga, estar con gente o estar a solas, y reserva tiempo para eso.",
        "En las reuniones, si hablas mucho, haz una pregunta antes de dar tu opinión; si hablas poco, intenta compartir al menos una idea.",
        "Ser una persona reservada no es lo mismo que ser tímida: se puede disfrutar del silencio y comunicarse muy bien."
      ]
    },
    "agreeableness": {
      "label": "Amabilidad",
      "desc": "Mide cuánto te importan los demás, cuánto confías en las personas y cuánto prefieres cooperar en lugar de competir.",
      "high": "Eres una persona atenta, cálida y dispuesta a ayudar. Esto crea relaciones de confianza y un buen ambiente dondequiera que estés. Lo que conviene vigilar es poner siempre las necesidades de los demás por delante de las tuyas y que te cueste decir que no.",
      "low": "Tiendes a ser una persona directa, objetiva y crítica, que no tiene miedo de discrepar. Esto te ayuda a negociar, defender tus posturas y tomar decisiones difíciles. Lo que conviene vigilar es que tus palabras suenen duras sin querer y alejen a personas que podrían colaborar contigo.",
      "tips": [
        "Antes de discrepar, muestra que entendiste el punto de vista de la otra persona.",
        "Practica rechazar con amabilidad las peticiones que interfieren con tus prioridades.",
        "Recuerda que ser amable y ser firme pueden ir de la mano."
      ]
    },
    "stability": {
      "label": "Estabilidad emocional",
      "desc": "Mide cuánto mantienes la calma ante la presión, las preocupaciones y las frustraciones. Una puntuación alta indica más serenidad; una baja, más sensibilidad al estrés.",
      "high": "Sueles mantener la calma bajo presión y te recuperas rápido de los contratiempos. Esto transmite seguridad a las personas y te ayuda a pensar con claridad en momentos difíciles. Lo que conviene vigilar es minimizar problemas reales o no notar cuando alguien cercano está sufriendo.",
      "low": "Sientes las emociones con intensidad y percibes riesgos y problemas antes que mucha gente. Esa sensibilidad te ayuda a prepararte y a tomarte las cosas en serio. Lo que conviene vigilar es el desgaste: la preocupación y el estrés frecuentes cansan, y vale la pena tener estrategias para manejarlos.",
      "tips": [
        "Cuida lo básico: el sueño, la alimentación y la actividad física influyen en el estado de ánimo.",
        "Cuando aparezca la preocupación, escribe lo que estás pensando y cuál sería el siguiente paso posible.",
        "Si el estrés o la tristeza están afectando tu rutina, habla con un profesional de la salud mental."
      ]
    }
  },
  "resultTitle": "Tu perfil de personalidad",
  "resultIntro": "Cada barra muestra dónde quedaste entre los dos extremos de un rasgo. Las puntuaciones altas o bajas no son buenas ni malas: cada lado tiene ventajas y aspectos a tener en cuenta.",
  "note": "Este resultado es una herramienta de autoconocimiento basada en tus propias respuestas. No es un diagnóstico y no reemplaza la evaluación de un psicólogo. La personalidad también cambia a lo largo de la vida y según el contexto."
};

export default t;
