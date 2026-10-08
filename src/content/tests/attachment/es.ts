import type { TestText } from '../../schema';

// attachment — Spanish translation of pt.ts
const t: TestText = {
  "title": "Estilo de apego",
  "desc": "Descubre cómo sueles sentir y actuar cuando alguien se vuelve cercano, ya sea en una relación de pareja, en una amistad o en la familia.",
  "intro": "Este cuestionario observa dos tendencias que aparecen en los vínculos cercanos: la ansiedad en el vínculo, que es cuánto te preocupa la posibilidad de perder el cariño o la atención de las personas, y cuánto evitas la cercanía, prefiriendo mantener cierta distancia emocional. Las 18 frases describen situaciones comunes en las relaciones cercanas en general, con la pareja, las amistades y la familia. Para cada una, indica cuánto coincide con lo que sueles sentir o hacer, pensando en tus vínculos en general y no en una sola persona o etapa. Si alguna situación nunca te ha pasado, responde pensando en cómo reaccionarías probablemente. No hay respuestas correctas ni incorrectas.",
  "scale": [
    "Totalmente en desacuerdo",
    "En desacuerdo",
    "Neutral",
    "De acuerdo",
    "Totalmente de acuerdo"
  ],
  "items": [
    "Cuando alguien importante para mí tarda en responder un mensaje, empiezo a pensar que hice algo mal.",
    "Cuando alguien empieza a contarme cosas muy personales, siento ganas de cambiar de tema.",
    "Si mis amistades hacen un plan y no me invitan, paso horas pensando en lo que eso dice de nuestra relación.",
    "Puedo llorar o mostrar que estoy triste frente a las personas en quienes confío.",
    "Cuando alguien cercano se va de viaje o pasa unos días sin tiempo para mí, sigo con mi rutina sin preocuparme por la relación.",
    "Cuando una amistad nueva empieza a hacerse más cercana, con conversaciones frecuentes e invitaciones, siento ganas de enfriarla un poco.",
    "Después de una discusión con alguien cercano, me da miedo que esa persona se aleje para siempre.",
    "Incluso cuando estoy pasando por dificultades, prefiero resolver todo por mi cuenta antes que pedir ayuda a alguien cercano.",
    "Cuando alguien que quiero parece más callado o distante, enseguida pienso que el problema soy yo.",
    "Cuando alguien cercano me dice con todas las letras cuánto me quiere, me siento a gusto con eso.",
    "Si alguien cercano dice que necesita un tiempo para sí, lo entiendo sin tomármelo como algo personal.",
    "Cuando alguien con quien tengo un vínculo cercano me pide que pasemos más tiempo juntos, siento que estoy perdiendo mi espacio.",
    "Después de una cita o de una conversación importante, releo los mensajes para asegurarme de que la otra persona sigue bien conmigo.",
    "Cuando la conversación gira hacia los sentimientos, suelo responder con algo práctico o con una broma en lugar de decir lo que siento.",
    "Cuando una amistad cancela un plan a último momento, acepto la explicación y no me quedo dándole vueltas.",
    "Me incomoda que alguien empiece a contar conmigo para manejar sus propias emociones.",
    "Cuando veo a alguien que quiero mucho muy entusiasmado con otra compañía, siento una opresión, como si fuera a quedar en segundo plano.",
    "Cuando pasa algo importante en mi vida, bueno o malo, enseguida quiero contárselo a alguien cercano."
  ],
  "dims": {
    "anxiety": {
      "label": "Ansiedad en el vínculo",
      "desc": "Mide cuánto te preocupa la estabilidad de tus relaciones cercanas y la posibilidad de perder el cariño o la atención de las personas.",
      "high": "Sueles prestar mucha atención a las señales de distancia y puedes sentir inseguridad cuando alguien tarda en responder o parece distinto. Esa sensibilidad muestra cuánto te importan tus vínculos y te ayuda a percibir cambios en las relaciones. Lo que conviene vigilar es el desgaste: interpretar señales neutras como rechazo puede causarte sufrimiento y llevarte a hacer reclamos que terminan alejando a las personas.",
      "low": "Tiendes a confiar en que tus relaciones siguen firmes incluso cuando hay silencio, distancia o pequeños desacuerdos. Esto trae tranquilidad y deja espacio para que cada persona viva su propia vida. Lo que conviene vigilar es no dejar de notar cuando algo realmente cambió y merece una conversación.",
      "tips": [
        "Cuando aparezca la inseguridad, separa el hecho (la persona no respondió) de la interpretación (está molesta conmigo) antes de actuar.",
        "En lugar de buscar garantías de forma indirecta, di con calma lo que sientes y lo que necesitas.",
        "Cultiva intereses y amistades variadas, para que tu tranquilidad no dependa de una sola relación."
      ]
    },
    "avoidance": {
      "label": "Evitar la cercanía",
      "desc": "Mide cuánto prefieres mantener distancia emocional, en lugar de abrirte, pedir apoyo y dejar que las personas cuenten contigo.",
      "high": "Valoras tu independencia y tiendes a resolver las cosas por tu cuenta, guardándote parte de lo que sientes. Esto te da autonomía y capacidad para mantener la calma en situaciones difíciles. Lo que conviene vigilar es que las personas cercanas pueden sentir que no logran acercarse a ti, y podrías quedarte sin apoyo justo cuando más lo necesites.",
      "low": "Te sientes a gusto abriéndote, pidiendo ayuda y recibiendo a quien se acerca. Esto favorece relaciones de confianza, en las que ambas partes se sienten vistas y apoyadas. Lo que conviene vigilar es recordar que no todo el mundo tiene el mismo ritmo para abrirse y respetar a quien necesita más espacio.",
      "tips": [
        "Prueba a contarle algo pequeño sobre cómo estás a una persona de confianza y observa cómo reacciona.",
        "Cuando sientas ganas de alejarte, intenta identificar qué fue exactamente lo que te molestó, en lugar de simplemente desaparecer.",
        "Si necesitas espacio, avísale a la otra persona en lugar de alejarte en silencio: eso protege la relación y también tu tiempo."
      ]
    }
  },
  "bands": {
    "secure": {
      "label": "Seguro",
      "text": "Tiendes a sentirte a gusto con la cercanía y, al mismo tiempo, confías en que tus relaciones se mantienen aunque haya distancia o desacuerdos. Esto suele facilitar las conversaciones sinceras, los pedidos de apoyo y la resolución de conflictos sin un miedo excesivo. Tener este estilo no significa no sentir nunca inseguridad, y también puede variar según la etapa de la vida y la relación."
    },
    "anxious": {
      "label": "Ansioso",
      "text": "Valoras mucho tus vínculos y sueles notar rápidamente cualquier señal de distancia, lo que puede traerte preocupación por la posibilidad de perder el cariño de las personas. Esa sensibilidad también muestra dedicación y capacidad de involucrarte de verdad en las relaciones. Con el tiempo, las conversaciones claras y las relaciones en las que encuentras seguridad pueden aliviar mucho esa inquietud."
    },
    "avoidant": {
      "label": "Evitativo",
      "text": "Tiendes a valorar la independencia y a sentirte más a gusto resolviendo las cosas por tu cuenta que compartiendo lo que sientes. Esto te da autonomía y serenidad en muchas situaciones, pero puede dejar a las personas cercanas con la sensación de que no logran acercarse. Esta manera de ser suele tener buenas razones para existir, y las relaciones que respetan tu ritmo pueden hacer que la cercanía resulte más cómoda poco a poco."
    },
    "fearful": {
      "label": "Ansioso-evitativo",
      "text": "Puedes desear mucho la cercanía y, al mismo tiempo, sentir temor ante ella, alternando entre buscar a las personas y mantener distancia. Este vaivén suele ser una forma comprensible de protegerte de las decepciones y muestra cuánto te importan los vínculos. Con el tiempo, las relaciones estables y cálidas te ayudan a acercarte con menos miedo, y hablar con un profesional también puede ayudarte en ese camino."
    }
  },
  "resultTitle": "Tu estilo de apego",
  "resultIntro": "Tu resultado combina dos dimensiones: la ansiedad en el vínculo y cuánto evitas la cercanía. Juntas, indican el estilo que más aparece hoy en tus relaciones cercanas. Ningún estilo es mejor ni peor que otro, y todos pueden cambiar con el tiempo y con la experiencia de relaciones seguras.",
  "note": "Este resultado es una herramienta de autoconocimiento basada en tus propias respuestas. No es un diagnóstico y no reemplaza la evaluación de un psicólogo. La forma de vincularse puede variar de una relación a otra y suele cambiar a lo largo de la vida.",
  "help": "Si tus patrones en las relaciones te han causado sufrimiento, como un miedo constante a perder a las personas o dificultad para acercarte a quienes quieres, hablar con un psicólogo puede ayudarte. La terapia es un espacio seguro para entender de dónde vienen esos patrones y probar, poco a poco, nuevas formas de relacionarte."
};

export default t;
