import type { TestText } from '../../schema';

// confidence — Spanish translation of pt.ts
const t: TestText = {
  "title": "Confianza en ti",
  "desc": "Descubre cómo está tu confianza en ti en cuatro áreas: autoestima, confianza en tus capacidades, recuperación después de los errores y asertividad.",
  "intro": "Este cuestionario muestra cómo sueles sentirte y actuar en situaciones cotidianas que piden confianza en ti. Son 16 frases que describen escenas comunes, como recibir un elogio, enfrentar una tarea nueva o decir que no a una petición. Para cada una, indica cuánto te describe hoy, pensando en los últimos meses, y no como te gustaría ser. Si nunca viviste exactamente esa situación, responde pensando en cómo sueles reaccionar en casos parecidos. No hay respuestas correctas ni incorrectas.",
  "scale": [
    "Totalmente en desacuerdo",
    "En desacuerdo",
    "Neutral",
    "De acuerdo",
    "Totalmente de acuerdo"
  ],
  "items": [
    "Cuando alguien elogia algo que hice, puedo agradecer sin restarle mérito.",
    "Cuando me dan una tarea que nunca hice antes, creo que podré aprender sobre la marcha.",
    "Después de recibir una crítica dura en el trabajo o en los estudios, vuelvo a concentrarme en lo que tengo que hacer en poco tiempo.",
    "Cuando en un restaurante me traen un plato equivocado, pido con tranquilidad que lo cambien.",
    "Después de ver los logros de conocidos en las redes sociales, me quedo con la sensación de que valgo menos que ellos.",
    "Ante un problema práctico en casa, como un aparato que dejó de funcionar, confío en que puedo encontrar una solución.",
    "Cuando un plan sale mal, como una entrevista de trabajo que no funcionó, puedo sacar una lección e intentarlo de nuevo.",
    "Cuando alguien me pide un favor en un momento en que no tengo tiempo, termino aceptando aunque quiera decir que no.",
    "En un día en que no pude hacer casi nada de lo que había planeado, igual me trato con respeto y amabilidad.",
    "Antes de una presentación o un examen, suelo pensar que no voy a poder, aunque me haya preparado.",
    "Cuando recibo un no a una petición importante, como una propuesta o una invitación, me recompongo en poco tiempo.",
    "En una reunión o una conversación en grupo, digo cuando no estoy de acuerdo, aunque la mayoría piense distinto.",
    "Cuando me miro al espejo por la mañana, suelo aceptarme tal como soy, con virtudes y defectos.",
    "Cuando tengo que tomar una decisión importante, como cambiar de trabajo o de ciudad, confío en mi propio criterio.",
    "Cuando olvido un compromiso o decepciono a alguien, me quedo dándole vueltas durante varios días.",
    "Si alguien se cuela delante de mí en una fila, se lo hago notar de forma educada."
  ],
  "dims": {
    "selfWorth": {
      "label": "Autoestima",
      "desc": "Mide cuánto te valoras y te respetas, independientemente de los resultados, los elogios o las comparaciones con otras personas.",
      "high": "Sueles tratarte con respeto y reconocer tu propio valor, incluso en los días malos o ante los logros de los demás. Esto te da estabilidad y te hace menos dependiente de la aprobación ajena. Lo que conviene vigilar es que una imagen muy positiva de ti puede ocultar puntos ciegos, así que vale la pena seguir escuchando con apertura a quienes conviven contigo.",
      "low": "Tiendes a medir tu propio valor por los resultados, por la opinión de los demás o por las comparaciones, y eso pesa más en los días difíciles. Esa mirada crítica suele venir acompañada de humildad y ganas de mejorar. Lo que conviene vigilar es el desgaste: tratarte con dureza todo el tiempo cansa y hace que dejes de valorar lo que ya haces bien.",
      "tips": [
        "Al final del día, anota una cosa que hiciste bien, por pequeña que sea.",
        "Cuando recibas un elogio, responde solo con un agradecimiento, sin justificarte ni restarle valor a lo que hiciste.",
        "Fíjate en cuándo te comparas en las redes sociales y recuerda que ahí solo se ve una parte de la vida de las personas."
      ]
    },
    "capability": {
      "label": "Confianza en tus capacidades",
      "desc": "Mide cuánto crees que puedes aprender, resolver problemas y hacer frente a desafíos nuevos.",
      "high": "Sueles enfrentar las tareas nuevas y las decisiones difíciles con la sensación de que vas a encontrar un camino. Esto te ayuda a tomar la iniciativa y a no paralizarte ante lo desconocido. Lo que conviene vigilar es sobrestimar lo que puedes hacer sin apoyo o dentro del plazo, y dejar de pedir ayuda o de escuchar a quien tiene más experiencia en el tema.",
      "low": "Tiendes a dudar de tu capacidad, incluso cuando ya te preparaste o tienes experiencia en el tema. Esa cautela puede llevarte a prepararte con cuidado y a tomar menos decisiones impulsivas. Lo que conviene vigilar es dejar de intentar cosas que podrías hacer y perder oportunidades por pensar que todavía no es el momento.",
      "tips": [
        "Antes de un desafío, recuerda dos o tres situaciones parecidas en las que te fue bien.",
        "Divide una tarea nueva en pasos pequeños y fíjate en cada uno que completes.",
        "Pide la opinión de alguien de confianza sobre tus planes: eso ayuda a ajustar tanto el exceso como la falta de confianza."
      ]
    },
    "resilience": {
      "label": "Recuperación después de los errores",
      "desc": "Mide qué tan rápido y de qué manera te recompones después de fallas, críticas y rechazos.",
      "high": "Sueles recomponerte rápido después de un error, una crítica o un rechazo, y vuelves a actuar sin quedarte atado a lo que pasó. Esto te permite arriesgar más y aprender de la experiencia. Lo que conviene vigilar es pasar la página demasiado rápido, sin detenerte a entender qué llevó al error o cómo afectó a otras personas.",
      "low": "Los errores y las críticas suelen quedarse contigo bastante tiempo, y es común que repases mentalmente lo que salió mal. Esto muestra que te tomas las cosas en serio y te importan las consecuencias. Lo que conviene vigilar es cuando darle vueltas al error ocupa el lugar de corregirlo y hace que evites nuevos intentos.",
      "tips": [
        "Después de un error, escribe en una frase lo que pasó y en otra lo que harías distinto, y luego da el tema por cerrado.",
        "Háblate como le hablarías a una persona querida que se equivocó de la misma manera.",
        "Ponle un plazo a la frustración, como el resto del día, y después vuelve a la siguiente tarea."
      ]
    },
    "assertiveness": {
      "label": "Asertividad",
      "desc": "Mide cuánto expresas tus opiniones, necesidades y límites de forma clara y respetuosa.",
      "high": "Sueles decir lo que piensas, pedir lo que necesitas y poner límites sin rodeos. Esto evita malentendidos y deja claro a los demás qué pueden esperar de ti. Lo que conviene vigilar es hablar con demasiada firmeza y dejar poco espacio para otras opiniones, sobre todo cuando ya tienes una postura formada.",
      "low": "Tiendes a evitar los conflictos, aceptar peticiones aunque no quieras y guardarte tus opiniones para mantener el buen ambiente. Esto muestra que te importan los demás y facilita la convivencia. Lo que conviene vigilar es acumular molestias y dejar tus propias necesidades siempre en segundo plano.",
      "tips": [
        "Empieza por situaciones pequeñas, como pedir que cambien un pedido equivocado o decir qué restaurante prefieres.",
        "Usa frases que empiecen por \"yo\", como \"yo prefiero\" o \"ahora no puedo\", en lugar de acusar o justificarte demasiado.",
        "Después de dar tu postura, pregunta qué piensa la otra persona: la firmeza y la escucha funcionan mejor juntas."
      ]
    }
  },
  "resultTitle": "Tu perfil de confianza en ti",
  "resultIntro": "Cada barra muestra cómo te fue en una de las cuatro áreas de la confianza en ti. Las puntuaciones más altas indican más seguridad en esa área, pero tener mucha confianza no es sinónimo de acertar: lo que más ayuda en el día a día es el equilibrio entre creer en ti y seguir escuchando otras opiniones.",
  "note": "Este resultado es una herramienta de autoconocimiento basada en tus propias respuestas. No es una evaluación profesional y no reemplaza la conversación con un psicólogo. La confianza en ti cambia con el tiempo, las experiencias y el contexto, y se puede desarrollar con la práctica."
};

export default t;
