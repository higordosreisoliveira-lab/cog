// autism — Spanish translation of pt.ts
import type { TestText } from '../../schema';

const t: TestText = {
  title: 'Rasgos del espectro autista en adultos',
  desc: 'Descubre cómo aparecen en tu vida adulta algunos rasgos relacionados con el espectro autista: comunicación, amistades, rutinas, sentidos e intereses.',
  intro:
    'Este cuestionario reúne 25 situaciones del día a día relacionadas con cinco áreas en las que las personas autistas suelen tener una forma propia de funcionar: comunicación, interacción y amistades, rutinas y cambios, sensibilidad sensorial, y detalles e intereses intensos. Está pensado para la vida adulta. Para cada frase, indica cuánto describe cómo sueles ser la mayor parte del tiempo, y no solo en una etapa o en un día concreto. Es una autoevaluación respetuosa de rasgos, no un diagnóstico: el resultado muestra tendencias, sin etiquetas. Muchas personas adultas nunca fueron evaluadas en la infancia y aprendieron, con los años, a disimular o compensar sus rasgos para encajar. Si es tu caso, intenta responder pensando en cómo eres en realidad cuando no te estás esforzando por parecer de otra manera. No hay respuestas correctas ni incorrectas.',
  scale: ['Totalmente en desacuerdo', 'En desacuerdo', 'Neutral', 'De acuerdo', 'Totalmente de acuerdo'],
  items: [
    'Cuando alguien se despide diciendo "pasa por casa cuando quieras", me quedo con la duda de si es una invitación de verdad o solo una forma educada de terminar la conversación.',
    'Después de un cumpleaños o de una comida familiar, aunque lo haya disfrutado, llego a casa sin energía y necesito horas de silencio para recuperarme.',
    'Si el plan del sábado cambia a último momento, por ejemplo del cine a un bar, me adapto sin molestia.',
    'En los restaurantes llenos, el ruido de los cubiertos, las conversaciones y la música al mismo tiempo me impide seguir lo que dice la persona que tengo enfrente.',
    'Cuando un tema me atrapa, como un período de la historia, una serie o un tipo de planta, paso horas investigando y pierdo la noción del tiempo.',
    'En una conversación en grupo, percibo sin esfuerzo el momento adecuado para hablar y el momento de dejar hablar a otra persona.',
    'Prefiero reunirme con amigos para hacer algo juntos, como jugar, cocinar o armar algo, en lugar de solo conversar.',
    'Cuando una obra me obliga a cambiar el camino de siempre al trabajo o a casa, me queda una sensación de incomodidad que dura el resto del día.',
    'Me pongo una prenda nueva recién comprada sin preocuparme por la etiqueta, las costuras o la textura de la tela.',
    'Noto enseguida cuando un cuadro está torcido, un número no cuadra en una cuenta o una palabra está mal escrita en un cartel.',
    'En una conversación cara a cara, mirar a la persona a los ojos me cansa o me desconcentra, y suelo mirar hacia otro punto mientras escucho.',
    'Hacer amistad con compañeros nuevos en el trabajo o en la universidad me sale de forma natural, sin tener que pensar en cada paso.',
    'En el restaurante o en la cafetería, suelo pedir siempre el mismo plato, porque así sé exactamente lo que voy a encontrar.',
    'La luz blanca y fuerte de algunos supermercados y oficinas me cansa o me da dolor de cabeza, mientras que las personas a mi alrededor ni siquiera parecen notarla.',
    'Cuando compro un aparato nuevo, leo solo lo necesario para que funcione y no siento curiosidad por el resto del manual.',
    'Cuando alguien cercano se desahoga conmigo sin pedir consejo, percibo por su tono de voz que quiere más ser escuchado que recibir soluciones.',
    'En el trabajo o en grupos nuevos, observo e imito la forma de hablar, los gestos y las expresiones de los demás para parecer más a gusto de lo que realmente estoy.',
    'Viajar sin itinerario, decidiendo qué hacer cada mañana, me parece tranquilo e incluso divertido.',
    'Olores como un perfume fuerte en el autobús o un producto de limpieza en el ascensor me molestan hasta el punto de tener que alejarme o contener la respiración.',
    'Tengo listas, colecciones o notas detalladas sobre un tema que me gusta, con información que la mayoría de la gente ni pensaría en buscar.',
    'Cuando hablo de un tema que me gusta mucho, solo me doy cuenta de que la otra persona perdió el interés cuando cambia de tema o toma el celular.',
    'En una reunión o una fiesta donde conozco a poca gente, logro integrarme y moverme entre los grupos de conversación sin gran esfuerzo.',
    'Antes de ir a un lugar nuevo, como una clínica o una oficina, miro fotos, el mapa e incluso la entrada del edificio en internet para saber qué voy a encontrar.',
    'Puedo trabajar o estudiar con conversaciones de fondo, la televisión encendida o ruido de obra en la casa de al lado sin perder la concentración.',
    'Cuando alguien me recomienda una serie, la veo por curiosidad, pero no siento ganas de saberlo todo sobre lo que pasa detrás de cámaras, los actores o las teorías de los fans.',
  ],
  dims: {
    social: {
      label: 'Comunicación',
      desc: 'Observa cómo usas e interpretas el lenguaje en el día a día: frases con doble sentido, contacto visual, tono de voz y el ritmo de una conversación.',
      high: 'Tiendes a comunicarte de forma directa y a entender las palabras por lo que dicen, y las señales indirectas, como las ironías, las indirectas o los cambios en el tono de voz, pueden exigirte más esfuerzo. Esta forma de comunicarte tiene fortalezas claras: honestidad, claridad y poco espacio para malentendidos intencionales. La dificultad suele aparecer cuando los demás esperan que leas entre líneas.',
      low: 'Sueles seguir con facilidad las señales implícitas de una conversación, como el tono de voz, las pausas y lo que queda sobreentendido. Esto te ayuda a ajustar lo que dices a cada persona y situación. Aun así, puede haber momentos, como en ambientes nuevos o en días de cansancio, en los que comunicarte te exija más.',
      tips: [
        'Cuando algo te parezca ambiguo, pregunta con tranquilidad, por ejemplo: "¿Eso fue una invitación o solo una forma de hablar?". Preguntar es una forma legítima de comunicarse.',
        'Acuerda con las personas cercanas que pueden ser directos entre ustedes, sin tener que adivinar intenciones.',
        'Si sostener la mirada te cansa, no tienes que forzarte: asentir con la cabeza o repetir una parte de lo que escuchaste también muestra que estás prestando atención.',
      ],
    },
    interaction: {
      label: 'Interacción y amistades',
      desc: 'Observa cómo te acercas a las personas, cómo creas y mantienes amistades y cuánta energía te consumen los encuentros sociales.',
      high: 'Las situaciones sociales tienden a consumirte mucha energía, incluso cuando son agradables, y crear lazos puede exigirte más estrategia que espontaneidad. Muchas personas con este perfil prefieren pocas amistades, pero profundas y leales, muchas veces construidas en torno a intereses o actividades en común. Imitar la forma de ser de los demás para encajar es habitual y puede resultar muy agotador con el tiempo.',
      low: 'Sueles acercarte a las personas y moverte entre grupos con naturalidad. Esto te facilita hacer contactos nuevos en el trabajo y en la vida personal. Aun así, conviene respetar tus límites de energía social, que pueden cambiar según la etapa de la vida.',
      tips: [
        'Reserva un tiempo de descanso después de los eventos sociales, del mismo modo que descansarías después de un esfuerzo físico.',
        'Busca amistades en espacios relacionados con tus intereses, como grupos de juegos, cursos, clubes de lectura o voluntariado.',
        'Observa en qué ambientes te sientes a gusto para ser como eres, sin tener que imitar a nadie, e intenta pasar más tiempo en ellos.',
      ],
    },
    routine: {
      label: 'Rutinas y cambios',
      desc: 'Observa cuánto consuelo te aporta la previsibilidad y cómo manejas los imprevistos, los cambios de planes y las situaciones nuevas.',
      high: 'Las rutinas y la previsibilidad parecen darte seguridad y calma, y los cambios inesperados pueden causarte incomodidad o cansancio. Esto tiene ventajas reales: constancia, confiabilidad y buena capacidad de planificación. La dificultad suele aparecer cuando el entorno cambia sin aviso.',
      low: 'Tiendes a manejar los imprevistos y los cambios de planes con flexibilidad. Esto ayuda en los viajes, en los trabajos dinámicos y en las situaciones nuevas. Aun así, tener algunas rutinas de apoyo puede ser útil en épocas más ajetreadas.',
      tips: [
        'Antes de una situación nueva, averigua lo que puedas: la dirección, fotos del lugar, quién va a estar y cuánto tiempo debería durar.',
        'Cuando sea posible, pide a las personas cercanas que te avisen con anticipación de los cambios de planes.',
        'Crea pequeños anclajes de rutina que funcionen en cualquier lugar, como un café a la misma hora o una lista de reproducción conocida.',
      ],
    },
    sensory: {
      label: 'Sensibilidad sensorial',
      desc: 'Observa cómo reaccionas a los sonidos, las luces, los olores, las texturas y los ambientes con muchos estímulos a la vez.',
      high: 'Tus sentidos parecen captar los sonidos, las luces, los olores y las texturas con más intensidad que el promedio, y los ambientes concurridos pueden cansarte rápidamente. No es exageración: es una diferencia real en la forma de procesar los estímulos. Esa misma sensibilidad suele permitirte percibir matices que a otras personas se les escapan.',
      low: 'Pareces manejar bien los ambientes ruidosos, muy iluminados o llenos de estímulos. Esto te facilita concentrarte en lugares concurridos. Conviene observar si algún estímulo concreto te molesta, porque la sensibilidad puede aparecer solo en uno o dos sentidos.',
      tips: [
        'Ten a mano un kit de confort, como tapones para los oídos o audífonos con cancelación de ruido, lentes de sol y ropa de telas que te resulten agradables.',
        'En lugares llenos, elige ubicaciones más tranquilas, como una mesa en un rincón, o ve en horarios de menos afluencia.',
        'En eventos largos, haz pausas en un lugar silencioso antes de llegar a tu límite.',
      ],
    },
    details: {
      label: 'Detalles e intereses intensos',
      desc: 'Observa tu atención a los detalles y los patrones, y la intensidad con la que te sumerges en los temas que despiertan tu interés.',
      high: 'Tiendes a percibir detalles y patrones que otras personas pasan por alto y a profundizar mucho en los temas que te gustan. Esta combinación es una fortaleza real: favorece la precisión, la memoria para los datos y el conocimiento especializado. Lo que conviene vigilar es el tiempo, ya que sumergirte en un interés puede hacer que te olvides de comer, descansar o cumplir otros compromisos.',
      low: 'Sueles tener intereses más variados y una visión más general de las cosas, sin aferrarte tanto a los detalles. Esto te ayuda a pasar de un tema a otro y a ver el panorama completo. En las tareas que exigen precisión, conviene reservar un momento para revisar con calma.',
      tips: [
        'Valora tus intereses como fuente de bienestar y, si tiene sentido para ti, de trabajo: áreas como la investigación, la corrección de textos, la tecnología, los datos y las artes suelen valorar la atención a los detalles.',
        'Usa alarmas para acordarte de comer, descansar y cumplir tus compromisos cuando un tema atrape tu atención durante horas.',
        'Comparte tus intereses con personas y comunidades a las que también les gusten, donde tu entusiasmo sea bienvenido.',
      ],
    },
  },
  bands: {
    few: {
      label: 'Pocos rasgos',
      text: 'Tus respuestas indican pocos rasgos del espectro autista en tu día a día. Aun así, es natural identificarse con algunos aspectos, como disfrutar de la rutina o molestarse con el ruido, que forman parte de la diversidad humana. Los límites entre los rangos son solo una referencia y no definen quién eres.',
    },
    some: {
      label: 'Algunos rasgos',
      text: 'Tus respuestas indican algunos rasgos del espectro autista en parte de las situaciones descritas. Mucha gente tiene rasgos así sin estar en el espectro, y hay personas autistas que aprendieron a disimular los suyos, por eso los límites entre los rangos sirven solo como guía. Observa las áreas con puntuación más alta y, si te traen dificultades en el día a día, hablar con un profesional puede ayudarte a entender mejor tu forma de funcionar.',
    },
    many: {
      label: 'Muchos rasgos',
      text: 'Tus respuestas indican muchos rasgos asociados al espectro autista, y podría valer la pena buscar una evaluación con un profesional de psicología, psiquiatría o neurología con experiencia en autismo en adultos. Muchas personas descubren que están en el espectro en la vida adulta y cuentan que entender su propia forma de funcionar les trajo alivio, autoconocimiento y acceso a apoyos útiles. Recuerda que este resultado no es un diagnóstico y que los límites entre los rangos son solo una referencia.',
    },
  },
  resultTitle: 'Tus rasgos del espectro autista',
  resultIntro:
    'El resultado suma tus respuestas en las cinco áreas y muestra en qué rango quedó el total. Las puntuaciones más altas indican que aparecen en tu vida más rasgos asociados al espectro autista. Estos rasgos no son defectos: son diferencias en la forma de percibir el mundo, de comunicarse y de organizarse, que traen tanto desafíos como fortalezas.',
  note: 'Este cuestionario es una herramienta de autoconocimiento basada en tus propias respuestas. No es un diagnóstico y no reemplaza la evaluación de un profesional. El diagnóstico de autismo en adultos implica entrevistas detalladas, la historia de vida y, muchas veces, información sobre la infancia, y solo pueden hacerlo profesionales habilitados. Rasgos parecidos también pueden aparecer en otras condiciones, como la ansiedad, el TDAH o las altas capacidades.',
  help: 'Para una evaluación, busca un profesional de psicología, psiquiatría o neurología con experiencia en autismo en adultos. En los servicios públicos de salud, el camino suele empezar por tu médico de cabecera o tu centro de salud, que pueden derivarte a servicios especializados; las clínicas universitarias de psicología también suelen ofrecer atención a precios accesibles. Antes de la consulta, anota ejemplos de situaciones de tu día a día y, si es posible, recuerdos de la infancia o relatos de familiares. Las comunidades y los grupos de apoyo de adultos autistas, presenciales o en línea, también ayudan a compartir experiencias, sentir que no estás solo y encontrar recomendaciones de profesionales.',
};

export default t;
