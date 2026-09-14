// Capítulo 3 · "El delincuente"  —  delincuentes.qmd
// Dos horas en una sesión, con descanso. Cinco preguntas de Wooclap repartidas
// por el recorrido, no agrupadas: cada una abre el bloque que viene detrás.
// Estilo "B claro". Genera Cap03_El-delincuente.pptx

const path = require("path");
const P = require("./plantilla-b-claro");

const LIBRO = "/sessions/clever-modest-cray/mnt/intro_crimi";
const DESTINO = path.join(LIBRO, "presentaciones", "Cap03_El-delincuente.pptx");

const d = P.crear({
  titulo: "El delincuente",
  subject: "Capítulo 3 · Criminología: una introducción",
  autoria: "Juanjo Medina",
  imgDir: LIBRO,
  cacheDir: path.join(LIBRO, "presentaciones", ".cache-imagenes"),
});

// ###########################################################################
//  BLOQUE 1 — ¿Existe «el delincuente»?
// ###########################################################################

P.portada(d, {
  cintillo: "CAPÍTULO 3",
  titulo: "El delincuente",
  autoria: "Juanjo Medina",
  notas:
    "PLAN. Dos horas con descanso. ~70 min de exposición, 5 preguntas de Wooclap (~15 min en " +
    "total) y una actividad de cierre (~15 min).\n\n" +
    "BLOQUE 1 — ¿Existe «el delincuente»? El hombre delincuente (10) · «Todos lo hacen» (10) · " +
    "La curva y la carrera criminal (10) · El 6 % crónico y las trayectorias (10).\n" +
    "BLOQUE 2 — El psicópata y la identidad. Desistimiento (6) · Psicopatía (15) · Identidad (7) · " +
    "Especialización (5) · Cierre.\n\n" +
    "LAS CINCO DE WOOCLAP: W1 nube de palabras (arranque) · W2 prevalencia OCJS · W3 el 6 % " +
    "crónico · W4 ¿se rehabilita un psicópata? · W5 especialización o versatilidad.\n" +
    "Las cuatro últimas están puestas ANTES del contenido que las responde, a propósito: la " +
    "respuesta equivocada del aula es lo que abre el bloque. No adelantar la solución al lanzarlas.\n\n" +
    "SACRIFICABLE si voy con retraso: los factores de riesgo (una diapositiva que se lee) y el " +
    "bloque de identidad a la mitad. Las seis figuras de datos NO se sacrifican.\n\n" +
    "ARRANQUE: en el capítulo anterior estudiamos el delito. Hoy, a quien lo comete. Y el capítulo " +
    "va a dedicarse, sobre todo, a desmontar la pregunta.",
});

P.wooclap(d, {
  tipo: "NUBE DE PALABRAS",
  pregunta: "Una palabra: ¿cómo os\nimagináis a alguien\nque comete delitos?",
  notas:
    "W1 · ABRE LA CLASE. Lanzarla antes de decir absolutamente nada del capítulo.\n\n" +
    "NO comentar la nube en detalle ahora. Solo leer tres o cuatro palabras en voz alta, decir " +
    "«guardad esto» y seguir. La nube se recupera al final de la clase, en la penúltima " +
    "diapositiva, y ahí es donde vale.\n\n" +
    "Lo que suele salir: hombre, joven, pobre, violento, sin estudios, drogas, marginal, " +
    "psicópata. Si sale «psicópata» merece la pena señalarlo: le da entrada al bloque 2.\n\n" +
    "IMPORTANTE: no ridiculizar lo que escriban. La tesis del capítulo no es que el aula tenga " +
    "prejuicios, sino que la criminología del XIX tenía exactamente los mismos y los convirtió en " +
    "ciencia. Ese paralelismo es mucho más interesante que la reprimenda, y les deja escuchar.\n\n" +
    "DEJAR LA PREGUNTA ABIERTA en Wooclap durante toda la sesión si la plataforma lo permite, para " +
    "poder proyectarla otra vez al final sin volver a lanzarla.",
});

// ·· El hombre delincuente — 10 min ········································

P.afirmacion(d, {
  texto: "Nos gusta pensar en\nblancos y negros.",
  sub: "La realidad es obstinadamente más compleja.",
  notas:
    "10 MIN — EL HOMBRE DELINCUENTE.\n\n" +
    "Enlazar con la nube que acaban de generar: eso que habéis escrito es, más o menos, lo que la " +
    "criminología del siglo XIX se propuso demostrar con instrumentos de medida.\n\n" +
    "La criminología que nace en el XIX estaba obsesionada con identificar los marcadores que " +
    "permitirían distinguir al hombre delincuente. Fronteras claras entre lo diabólico y lo " +
    "divino.\n\n" +
    "Y conviene decir de entrada a dónde vamos: el capítulo entero es la historia de ese intento y " +
    "de sus sucesivos fracasos.",
});

P.cita(d, {
  texto: "trastorno moral, locura moral, manía sin delirio, degeneración, imbecilidad moral, incorregibilidad, criminalidad innata, incapacidad hereditaria.",
  atribucion: "Nicole Rafter, 2011 · las etiquetas del siglo XIX",
  size: 24,
  notas:
    "APUNTAR ESTA LISTA. Volvemos a ella en el cierre de la clase, porque la gracia está en ponerla " +
    "al lado de las etiquetas modernas: delincuente nato, 6 % crónico, antisocial persistente, " +
    "psicópata. Cambian los nombres, no la forma del argumento.\n\n" +
    "El contexto que da Rafter: la psiquiatría naciente intentaba explicar por qué algunos " +
    "delincuentes parecían imperturbables y especialmente crueles, y volvía una y otra vez al " +
    "enigma de quienes cometían delitos repetidamente, sin importar el castigo o el tratamiento.\n\n" +
    "Y una frase suya que merece leerse entera: «la criminología comenzó con los esfuerzos por " +
    "comprender científicamente este tipo de delincuentes». O sea, nuestra disciplina nace de esta " +
    "pregunta. No es un apéndice incómodo: es la partida de nacimiento.\n\n" +
    "Todas estas etiquetas compartían el mismo supuesto: que era una condición innata, y que quien " +
    "la sufría carecía de sentido moral.",
});

P.cita(d, {
  texto: "El delincuente nato se distingue del resto por una reversión a una forma primitiva de ser humano.",
  atribucion: "Cesare Lombroso, 1876 · L'uomo delinquente",
  rel: "images/lombroso.JPG",
  pieImg: "Cesare Lombroso (1835-1909)",
  size: 25,
  notas:
    "No fue ni mucho menos el único que pensaba así, pero sí quien cristalizó estas ideas.\n\n" +
    "Quién era: médico, había trabajado para el ejército italiano y dirigido varios asilos " +
    "mentales. Comprometido con construir una ciencia del comportamiento criminal e influido por " +
    "el positivismo científico —análisis racional, fe en el progreso, enfoque empírico e inductivo, " +
    "observación.\n\n" +
    "EL DATO METODOLÓGICO, que es el que quiero que retengan: estudió la fisionomía de 832 " +
    "delincuentes, 390 de ellos comparados con 868 soldados italianos y 90 «lunáticos». De ahí " +
    "salieron las conclusiones.\n\n" +
    "Preguntar al aula qué problema tiene ese diseño. Suele salir solo: el grupo de comparación " +
    "son soldados, seleccionados por aptitud física. Es un buen momento para decir que el problema " +
    "de Lombroso no fue medir, fue medir mal y comparar peor.\n\n" +
    "Influencia de Darwin: la reversión a un estadio evolutivo previo.",
});

P.rejilla(d, {
  titulo: "Los estigmas del delincuente nato",
  items: [
    { etiqueta: "Físicos", sub: "Orejas grandes, brazos\nlargos, narices torcidas." },
    { etiqueta: "Sensoriales", sub: "Menos sensibilidad\nal dolor y al contacto." },
    { etiqueta: "Morales", sub: "Falta de sentido moral,\nincapacidad de arrepentirse." },
    { etiqueta: "Culturales", sub: "Lenguaje criminal,\nuso extensivo de tatuajes." },
  ],
  notas:
    "Leerlas rápido, casi como un catálogo. El efecto cómico es útil: hoy nos parecen ridículas.\n\n" +
    "Pero pararse medio minuto en la última casilla, que es la que no envejece. Los tatuajes como " +
    "marcador de criminalidad no son una antigualla: la idea de que ciertos rasgos culturales " +
    "visibles delatan peligrosidad sigue operando en el control policial contemporáneo. Es la " +
    "misma operación con otra ropa.\n\n" +
    "LA TEORÍA DE LA DEGENERACIÓN, que va con esto: determinadas pautas problemáticas —delincuencia, " +
    "alcoholismo— serían saltos hacia atrás en la evolución humana, transmisibles genéticamente. " +
    "Se convirtió en una obsesión del período.\n\n" +
    "En Estados Unidos, el estudio de la familia Jukes de Dugdale (1877) usaba cartas genealógicas " +
    "y la historia criminal y social de una familia para demostrar la transmisión hereditaria. " +
    "Determinismo biológico duro.",
});

P.figura(d, {
  titulo: "Hooton, 1939",
  quéMirar: "No es una caricatura de época: es una lámina de un libro académico, publicada por un antropólogo de Harvard.",
  rel: "images/hooton3.gif",
  w: 8.2, h: 4.09,
  fuente:
    "«Diferencias etnorraciales en delitos sexuales», en Earnest A. Hooton, Crime and the Man / " +
    "The American Criminal, 1939.",
  notas:
    "PROYECTAR CON MARCO. Decir antes de pasar la diapositiva qué van a ver y por qué: una lámina " +
    "racista de un libro de 1939 que vamos a mirar como documento histórico, no como ilustración " +
    "de nada.\n\n" +
    "Hooton concluía que los delincuentes eran biológicamente inferiores y que determinados grupos " +
    "etnorraciales eran más comunes en particulares formas delictivas. Y decidió ilustrarlo con un " +
    "estilo de un mal gusto asombroso, en palabras del capítulo.\n\n" +
    "POR QUÉ ESTÁ EN EL DECK Y NO SOLO EN LA LECTURA: porque el argumento del capítulo es que estas " +
    "ideas no eran marginales ni clandestinas. Estaban en libros de antropología física de " +
    "universidades de prestigio, con aparato empírico. Verlo impreso hace ese punto mejor que " +
    "contarlo.\n\n" +
    "No detenerse. Veinte segundos y pasar. Y no pedir reacciones del aula sobre la imagen.\n\n" +
    "Si alguien pregunta por qué mostrarla: porque la alternativa —describirla sin enseñarla— " +
    "convierte en abstracto algo que fue muy concreto, y porque quien va a trabajar en justicia " +
    "penal conviene que sepa de dónde viene su disciplina.",
});

P.afirmacion(d, {
  texto: "Esto no se quedó\nen el seminario.",
  sub: "Internamiento, esterilización, eugenesia. Y después, el sustrato de la barbarie nazi.",
  size: 44,
  notas:
    "La diapositiva que justifica haber enseñado la anterior. No pasarla deprisa.\n\n" +
    "El movimiento eugenésico propuso internamiento, esterilización y otras medidas orientadas a " +
    "impedir la reproducción biológica de personas consideradas contaminadas (Rafter, 1997). Más " +
    "tarde, en Europa, el sustrato de estas ideas alimentó la «solución final» y la idea de " +
    "limpieza de la raza (Rafter, 2008).\n\n" +
    "ESTE ES EL TERCER HÁBITO DEL CIERRE, anticipado: ninguna de estas categorías se quedó en el " +
    "plano teórico. Cada una autorizó una decisión sobre la vida de alguien. Cuando evaluéis una " +
    "categoría criminológica, evaluad también la decisión que hace posible.\n\n" +
    "Y el giro del XX: la creciente popularidad de las explicaciones sociales fue desinflando estas " +
    "perspectivas. Lo patológico se desplazó del individuo a lo social. La Escuela de Chicago, " +
    "desde los treinta, rechazaba la lógica darwinista social de que los pobres eran biológicamente " +
    "inferiores; preferían una interpretación más optimista, que el entorno empujaba y que no se " +
    "nacía así.",
});

// ·· «Todos lo hacen» — 10 min ·············································

P.wooclap(d, {
  tipo: "ELECCIÓN MÚLTIPLE",
  pregunta: "De cada 100 jóvenes de 10 a 25 años,\n¿cuántos cometieron un delito\nen los últimos 12 meses?",
  opciones: ["Menos de 5", "Alrededor de 10", "Alrededor de 25", "Más de 40"],
  notas:
    "W2 · LA RESPUESTA CORRECTA ES LA C: alrededor de 25, uno de cada cuatro.\n\n" +
    "Fuente: Offending Crime and Justice Survey, Home Office británico, muestra nacional " +
    "representativa de Inglaterra y Gales (Wilson et al., 2006).\n\n" +
    "QUÉ SUELE PASAR: el aula se reparte entre A y B, o sea subestima. Eso es exactamente lo que " +
    "quiero, porque el bloque siguiente va de eso.\n\n" +
    "SI ACIERTAN EN MASA (pasa en grupos que ya han oído hablar de la cifra negra): no perder la " +
    "diapositiva, cambiar la pregunta oral. «Vale, ¿y qué proporción de esos delitos diríais que " +
    "son serios?» La respuesta es la mitad, y esa sí sorprende siempre.\n\n" +
    "No dar la respuesta al cerrar la votación: pasar a la figura y que la lean ellos.",
});

P.figura(d, {
  titulo: "Delincuencia confesada, 10 a 25 años",
  quéMirar: "Esto no son detenidos ni condenados: es lo que la gente reconoce cuando se le pregunta en una encuesta anónima.",
  rel: "images/ocjs.png",
  w: 7.4, h: 4.88,
  fuente:
    "Offending Crime and Justice Survey, Home Office. Wilson et al. (2006). Inglaterra y Gales, " +
    "muestra nacional representativa.",
  notas:
    "NO SACRIFICABLE: visualización de datos. Y es la que responde al Wooclap.\n\n" +
    "Un cuarto de la población de 10 a 25 años cometió un delito en los doce meses previos. La " +
    "MITAD de esas infracciones eran, según los propios autores, «delitos serios»: lesiones, robos " +
    "de vehículos, robos en viviendas, venta de drogas de clase A, robos con violencia.\n\n" +
    "De dónde viene el método: los autoinformes arrancan en los años cuarenta (Kivivuori), primero " +
    "con menores en ámbitos educativos y sobre conductas casi triviales. En setenta y cinco años " +
    "se pasó a medir delincuencia seria con muestras de más edad. La OCJS es probablemente la más " +
    "minuciosa de todas.\n\n" +
    "LA CONSECUENCIA: si la participación delictiva es tan común y está tan repartida entre grupos " +
    "sociales, se hace muy difícil sostener la imagen del delincuente como un ser aparte.",
});

P.cita(d, {
  texto: "Los delincuentes no son una subespecie del homo sapiens.",
  atribucion: "Austin Porterfield, 1946 · Youth in Trouble",
  rel: "images/porterfield.jpeg",
  pieImg: "Austin L. Porterfield (1896-1979)",
  size: 30,
  notas:
    "LA FRASE DEL CAPÍTULO. Si solo se llevan una cosa de la clase, que sea esta.\n\n" +
    "Porterfield hizo el estudio en 1940-41 y lo publicó en 1943 y 1946. Comparó delincuentes " +
    "penados con estudiantes universitarios y encontró una prevalencia parecida en el tipo de " +
    "infracciones que medía.\n\n" +
    "La cita sigue: «La conducta antisocial de estudiantes y penados sugiere los mismos anhelos " +
    "fundamentales: nuevas experiencias, aventura, estimulación, retos, reconocimiento, respuestas " +
    "personales; en resumen, el completo espectro de emociones humanas.»\n\n" +
    "Lo que demostró en realidad, y esto es lo fino: que el control social CONFORMA la población " +
    "de delincuentes registrados, y que las estadísticas criminales son construcciones sociales. " +
    "Enlaza directo con el embudo del capítulo anterior.",
});

P.afirmacion(d, {
  texto: "La pregunta cambia de sitio.",
  sub: "Si todos los grupos delinquen parecido, ¿por qué penamos sobre todo a unos?",
  size: 44,
  notas:
    "El giro que da el bloque, y conviene enunciarlo despacio porque es un cambio de pregunta, no " +
    "una respuesta.\n\n" +
    "Muchas de las diferencias de clase, raza y otros marcadores entre delincuentes y no " +
    "delincuentes se diluyen mucho cuando en vez de comparar penados con no penados comparamos a " +
    "quienes confiesan infracciones en una encuesta con quienes no.\n\n" +
    "Así que la pregunta interesante deja de ser «¿qué tienen de distinto los delincuentes?» y pasa " +
    "a ser «¿por qué, dados niveles de participación parecidos, los penados proceden sobre todo de " +
    "determinados grupos sociales?». Eso es el capítulo 8 y buena parte de la tercera parte del " +
    "manual.\n\n" +
    "Es también, dicho sea de paso, la respuesta a por qué este capítulo se llama «El delincuente» " +
    "y se dedica a discutir si esa categoría existe.",
});

P.rejilla(d, {
  titulo: "Matza contra el positivismo",
  sub: "Delinquency and Drift, 1964: las teorías positivistas predicen más delincuencia de la que hay.",
  items: [
    { etiqueta: "Es episódico", sub: "No delinquen de forma\npersistente: la mayor parte\ndel tiempo hacen otra cosa." },
    { etiqueta: "Hay maduración", sub: "Llega una edad en que\nse deja. «Reforma\nde maduración»." },
    { etiqueta: "Hay agencia", sub: "El positivismo los pinta\nsujetos a fuerzas fuera\nde su control." },
  ],
  notas:
    "Matza vuelve dos veces más en esta clase: en el bloque de identidad, con Becoming Deviant, y " +
    "en el cierre con lo de las cajas ontológicas. Merece la pena presentarlo bien ahora.\n\n" +
    "Los tres puntos son una crítica interna demoledora: si los delincuentes fueran lo que el " +
    "positivismo dice que son, deberíamos observar mucha más delincuencia de la que observamos. El " +
    "argumento no es moral, es empírico.\n\n" +
    "Las dos primeras casillas anticipan el bloque siguiente: la curva de la edad y el " +
    "desistimiento son, en el fondo, la confirmación cuantitativa de lo que Matza intuyó.",
});

// ·· La curva del delito y la carrera criminal — 10 min ····················

P.afirmacion(d, {
  texto: "Los años setenta:\nseguir a la gente\ndurante décadas.",
  sub: "Los estudios longitudinales cambian la imagen del delincuente por segunda vez.",
  size: 40,
  notas:
    "10 MIN — LA CURVA Y LA CARRERA CRIMINAL.\n\n" +
    "El paralelismo que ordena el capítulo: en los cuarenta fue el autoinforme, en los setenta los " +
    "estudios longitudinales. Dos innovaciones METODOLÓGICAS que cambiaron una idea teórica. " +
    "Merece la pena decirlo así de explícito, porque es una lección sobre cómo avanza la " +
    "disciplina: no por mejores argumentos, sino por mejores instrumentos.\n\n" +
    "Estos estudios seguían a muestras o cohortes locales durante largos períodos de sus vidas, y " +
    "permitieron examinar de forma sistemática cómo cambia la participación delictiva con el " +
    "tiempo.",
});

P.figura(d, {
  titulo: "La curva de la edad",
  quéMirar: "Sube en la adolescencia, hace pico cerca de la mayoría de edad y cae. Es la misma forma en todos los sitios donde se ha mirado.",
  rel: "images/age_crime.png",
  w: 8.2, h: 4.79,
  fuente: "Her Majesty's Inspectorate of Probation.",
  notas:
    "NO SACRIFICABLE: visualización de datos.\n\n" +
    "Hirschi y Gottfredson (1983) la caracterizan como una de las poquísimas observaciones fácticas " +
    "de la criminología que no cuestiona nadie. Conviene subrayar lo raro que es eso en ciencias " +
    "sociales.\n\n" +
    "Lo que la criminología evolutiva acepta hoy (Steffensmeier, 2025): el grupo de 15 a 19 es el " +
    "de mayor tasa de participación; la prevalencia entre adolescentes es alta, con un porcentaje " +
    "elevado participando; y la curva tiene ascenso rápido, pico temprano, descenso inicial rápido " +
    "y luego descenso gradual.\n\n" +
    "Y la consecuencia teórica, que es fuerte: a los teóricos se les recuerda con frecuencia que " +
    "sus explicaciones deben ajustarse a la distribución por edades. Una teoría de la delincuencia " +
    "que no explique esta curva tiene un problema serio.\n\n" +
    "Pregunta al aula si va sobrada de tiempo: ¿es la curva un hecho sobre las personas o sobre las " +
    "oportunidades? Conecta con las actividades rutinarias del capítulo anterior.",
});

P.figura(d, {
  titulo: "La carrera criminal",
  quéMirar: "Tiene un inicio y un final. Entre medias, unos delitos se detectan y la mayoría no.",
  rel: "images/career.png",
  w: 6.6, h: 5.02,
  fuente: "National Research Council, 1986. Informe coordinado por Alfred Blumstein.",
  notas:
    "NO SACRIFICABLE: visualización de datos.\n\n" +
    "El informe del National Research Council de 1986 consolidó el concepto. Una carrera criminal " +
    "es «la caracterización de la secuencia longitudinal de delitos cometidos por un individuo».\n\n" +
    "Lo que hay que señalar en la figura: el inicio (onset), el final, y sobre todo que durante el " +
    "período activo se cometen X delitos de los cuales solo una minoría son detectados y " +
    "sancionados. Y que el encarcelamiento genera períodos de incapacitación.\n\n" +
    "EL PUNTO IMPORTANTE, que es conceptual y no gráfico: este enfoque supuso entender la " +
    "delincuencia como una ETAPA en la vida de una persona, no como una cualidad o condición " +
    "inmutable. Es la tercera vez en la clase que se desmonta lo mismo desde otro sitio.",
});

P.rejilla(d, {
  titulo: "Los parámetros de una carrera",
  items: [
    { etiqueta: "Participación", sub: "Quién inicia una\ny quién no." },
    { etiqueta: "Frecuencia", sub: "Delitos por año activo.\nLa famosa lambda." },
    { etiqueta: "Seriedad", sub: "La gravedad de\nlo que se comete." },
    { etiqueta: "Escalada", sub: "La tendencia a ir\na más." },
    { etiqueta: "Duración", sub: "Del inicio al cese.\nCuánto dura." },
  ],
  notas:
    "Diapositiva de vocabulario. Se lee rápido, pero los términos reaparecen en varias asignaturas " +
    "y conviene que los hayan oído bien una vez.\n\n" +
    "La investigación lleva décadas intentando estimar todos estos parámetros —edad de iniciación, " +
    "lambda, duración— y es una labor ardua. Evidentemente, todas estas cantidades varían según la " +
    "persona.\n\n" +
    "Si preguntan para qué sirve: la política de incapacitación selectiva se construyó sobre la " +
    "idea de que se podía estimar lambda y encerrar a quien la tuviera alta. Volvemos a ello en el " +
    "6 % crónico.",
});

P.afirmacion(d, {
  texto: "El paradigma del\nfactor de riesgo.",
  sub: "Importado de la medicina: identificar factores, y luego intervenir sobre ellos.",
  size: 44,
  notas:
    "David Farrington fue su defensor más prolífico. Investigó en el Cambridge Study in Delinquent " +
    "Development: 411 varones nacidos en Londres en 1953 en barrios empobrecidos, seguidos desde " +
    "los 8-9 años hasta los 48.\n\n" +
    "La analogía que usa Farrington, y que conviene citar porque es la clave del enfoque y también " +
    "su punto débil: el paradigma se importó de la medicina y la salud pública, donde se ha usado " +
    "con éxito contra el cáncer y las cardiopatías. Factores de riesgo del infarto: tabaco, dieta " +
    "grasa, falta de ejercicio. Se actúa sobre ellos.\n\n" +
    "OJO CON LA DEFINICIÓN, que es más modesta de lo que parece: un factor de riesgo es simplemente " +
    "algo que incrementa la probabilidad. NO es necesariamente una causa. Esa distinción se pierde " +
    "constantemente en el debate público y conviene machacarla.\n\n" +
    "El enfoque condujo a la proliferación de modelos multifactoriales, que es la diapositiva " +
    "siguiente.",
});

P.rejilla(d, {
  titulo: "Los factores de riesgo más citados",
  sub: "Murray, 2010. Ojo: correlatos, no causas.",
  items: [
    { etiqueta: "Individuales", sub: "Impulsividad, CI bajo,\nrendimiento escolar bajo." },
    { etiqueta: "Crianza", sub: "Supervisión deficiente,\ndisciplina errática o punitiva,\nactitud fría." },
    { etiqueta: "Maltrato", sub: "Maltrato físico infantil,\nconflictos parentales." },
    { etiqueta: "Familia", sub: "Familias desestructuradas\no numerosas, padres\nantisociales." },
    { etiqueta: "Economía", sub: "Bajos ingresos\nfamiliares." },
    { etiqueta: "Entorno", sub: "Compañeros antisociales,\nescuelas y barrios con\naltas tasas." },
  ],
  notas:
    "SACRIFICABLE: si voy con retraso, se lee la pantalla en cuarenta segundos y adelante.\n\n" +
    "Pero si hay tiempo, la pregunta que merece la pena: mirad la lista y decidme cuántos de estos " +
    "factores son cosas que le PASAN a un niño y cuántos son cosas que un niño HACE. Casi todos son " +
    "lo primero.\n\n" +
    "Y la crítica que conviene dejar sembrada para el bloque siguiente: una lista de correlatos no " +
    "es una explicación, y la mayoría de los niños que acumulan varios de estos factores no acaban " +
    "delinquiendo de forma persistente. La asimetría entre reconocer hacia atrás y predecir hacia " +
    "delante empieza aquí.",
});

// ·· El 6 % crónico y las trayectorias — 10 min ····························

P.wooclap(d, {
  tipo: "ELECCIÓN MÚLTIPLE",
  pregunta: "En Filadelfia, el 6 % de una cohorte\nconcentró... ¿qué parte de\ntodos los delitos?",
  opciones: ["Un 10 %", "Un 25 %", "Más del 50 %", "Más del 80 %"],
  notas:
    "W3 · LA RESPUESTA CORRECTA ES LA C: más del 50 %.\n\n" +
    "Wolfgang, Delinquency in a Birth Cohort (1972). Los 9.945 varones nacidos en 1945 que vivían " +
    "en Filadelfia entre los 10 y los 18 años. De ellos, 3.475 tuvieron contactos policiales no " +
    "relacionados con tráfico entre los 7 y los 18.\n\n" +
    "POR QUÉ VA AQUÍ Y NO ANTES: viene justo después de media hora demostrando que «todos lo " +
    "hacen». El aula acaba de aprender a rebajar, así que ahora tiende a contestar A o B. La " +
    "corrección en sentido contrario es el contenido del bloque.\n\n" +
    "Y ese es el punto pedagógico de la sesión entera: ni una cosa ni la otra. La participación " +
    "delictiva está muy repartida Y hay un grupo pequeño de alta frecuencia. Las dos afirmaciones " +
    "son verdad a la vez, y el error es quedarse solo con una.\n\n" +
    "No dar la respuesta: pasar a la siguiente diapositiva.",
});

P.datoGrande(d, {
  cifra: "6 %",
  unidad: "de la cohorte,\nmás de la mitad\nde los delitos",
  glosa:
    "Habían sido arrestados cinco veces o más antes de los 18. En la cohorte de 1958 fueron el " +
    "7,5 % y concentraron el 69 %.",
  notas:
    "El dato que funda el «6 % crónico», una de las etiquetas más influyentes y más peligrosas de " +
    "la criminología del siglo XX.\n\n" +
    "El resto de las cifras, por si preguntan: un 35 % de los niños de la cohorte tenía algún " +
    "antecedente policial no vial, lo que reitera las altas tasas de participación. En la segunda " +
    "cohorte, que ya incluía mujeres, alrededor del 9 % de los 13.800 niños y el 2 % de las 14.500 " +
    "niñas cometieron un delito violento con lesiones.\n\n" +
    "CÓMO SE INTERPRETÓ: como complemento del momento «todos lo hacen». Es cierto que el " +
    "comportamiento infractor es más común de lo que pensamos, y es cierto que hay un subconjunto " +
    "pequeño con mucha mayor propensión a reincidir.\n\n" +
    "Y CÓMO SE USÓ: como argumento para políticas de incapacitación selectiva. Si el 6 % hace la " +
    "mitad, encerremos al 6 %. El problema, que es el de todo el capítulo, es que identificar a ese " +
    "6 % por adelantado es harina de otro costal.\n\n" +
    "No he metido la portada del libro de Wolfgang en el deck: es solo una cubierta y aquí el dato " +
    "hace todo el trabajo.",
});

P.cita(d, {
  texto: "Mordiscos a los 4 años, hurtos a los 10, vender drogas a los 16, atracos a los 22, fraudes a los 30. La disposición permanece; su expresión cambia.",
  atribucion: "Terrie Moffitt, 1993",
  rel: "images/moffitt.jpeg",
  pieImg: "Terrie E. Moffitt",
  size: 22,
  notas:
    "La cita está abreviada en pantalla; la original añade «faltar a clase a los 10», «robar coches " +
    "a los 16», «violaciones a los 22» y «abuso infantil a los 30», y termina «en la medida en que " +
    "nuevas oportunidades se presentan a lo largo de su desarrollo vital».\n\n" +
    "Describe al grupo persistente a lo largo de la vida. Lo que Moffitt hace es reconciliar los " +
    "datos que los estudios longitudinales habían ido acumulando, proponiendo dos tipos ideales de " +
    "trayectoria.\n\n" +
    "El artículo se titula «Adolescence-Limited and Life-Course-Persistent Antisocial Behavior: A " +
    "Developmental Taxonomy» y lleva más de 18.000 citas, que es una auténtica barbaridad. Merece " +
    "la pena decir el número: les da la medida de qué significa un artículo influyente.",
});

P.dosColumnas(d, {
  titulo: "Las dos trayectorias de Moffitt",
  cols: [
    {
      rotulo: "Limitada a la adolescencia",
      lineas: [
        "Empieza y acaba en la adolescencia.",
        "Deseo de aventura e independencia,",
        "cambios hormonales, influencia",
        "de los iguales.",
        "Adaptativa, no patológica.",
      ],
    },
    {
      rotulo: "Persistente en la vida",
      lineas: [
        "Se manifiesta ya en la infancia",
        "y se prolonga en la vida adulta.",
        "Vulnerabilidades neuropsicológicas",
        "por ambiente criminógeno.",
        "Es el 6 % de Wolfgang.",
      ],
    },
  ],
  notas:
    "Las tres hipótesis etiológicas de Moffitt para la trayectoria limitada, en sus palabras: está " +
    "motivada por la brecha entre la madurez biológica y la madurez social, se aprende de modelos " +
    "antisociales fácilmente imitables, y se mantiene según los principios de refuerzo de la teoría " +
    "del aprendizaje.\n\n" +
    "SUBRAYAR LO DE «ADAPTATIVO». Para Moffitt el comportamiento de este primer grupo no puede " +
    "conceptualizarse como patológico: es comportamiento social adaptativo. Dicho de otro modo, la " +
    "mayor parte de la delincuencia juvenil es normal. Eso descoloca al aula y conviene dejarlo " +
    "caer despacio.\n\n" +
    "Para el segundo grupo, la clave es la INTERACCIÓN: vulnerabilidad neuropsicológica por " +
    "ambiente criminógeno. Ni lo uno ni lo otro por separado.",
});

P.figura(d, {
  titulo: "Las dos trayectorias",
  quéMirar: "Una curva que sube y baja con la adolescencia; otra que empieza antes y no baja.",
  rel: "images/trajectories.png",
  w: 6.9, h: 4.95,
  fuente: "Moffitt (1993), taxonomía del desarrollo.",
  notas:
    "NO SACRIFICABLE: visualización de datos.\n\n" +
    "Son tipos IDEALES, no grupos observados. Es importante decirlo mirando el gráfico, porque la " +
    "figura induce a pensar que alguien fue por ahí midiendo y encontró dos curvas limpias.\n\n" +
    "Qué han encontrado después los estudios longitudinales y transnacionales: sistemáticamente " +
    "múltiples trayectorias, casi siempre entre tres y cinco grupos —no delincuentes, crónicos de " +
    "bajo nivel, delincuentes adolescentes, crónicos de alto nivel.\n\n" +
    "Y el número varía por razones que son metodológicas, no sustantivas (Egglestone): las opciones " +
    "de modelización estadística, las características de la muestra, cómo se define operativamente " +
    "cronicidad, cuánto dura el seguimiento, y el hecho de que el encarcelamiento y la mortalidad " +
    "se han descuidado.\n\n" +
    "La revisión sistemática de 55 estudios (Jolliffe, 2017): los crónicos son una pequeña minoría, " +
    "entre el 1 % y el 10 %, con muchas estimaciones cerca del 5 %. Menos entre mujeres, más en " +
    "grupos desfavorecidos o de alto riesgo.",
});

P.rejilla(d, {
  titulo: "Las tres objeciones de Sampson y Laub",
  items: [
    { etiqueta: "Los grupos se asumen", sub: "La técnica estadística\npresupone que hay grupos.\nY por eso los encuentra." },
    { etiqueta: "Se pierde la agencia", sub: "Trata la conducta como\ndeterminada por la infancia,\nno por decisiones continuas." },
    { etiqueta: "Reconocer ≠ predecir", sub: "Hacia atrás es fácil.\nHacia delante, mucho menos." },
  ],
  notas:
    "EL BLOQUE CRÍTICO. Es lo que separa este capítulo de un manual que se limitara a exponer a " +
    "Moffitt, y merece tiempo.\n\n" +
    "La tercera casilla es la importante y reaparece en el cierre de la clase. Es relativamente " +
    "fácil identificar trayectorias a posteriori, cuando ya tienes los datos de toda una vida; es " +
    "mucho más difícil hacerlo de forma prospectiva, sobre lo que sabes de alguien antes de que " +
    "se haga mayor. Parece un tecnicismo metodológico y es en realidad el hueco por donde se " +
    "cuelan las intervenciones más dañinas, porque actuar sobre quien todavía no ha hecho nada " +
    "exige una seguridad que los datos no dan.\n\n" +
    "Un dato que remata: incluso entre los grupos de alto riesgo, la mayoría acaba abandonando la " +
    "delincuencia. Eso pone en cuestión la propia noción de persistente a lo largo de toda la vida.\n\n" +
    "Matiz honesto: Brame y otros defienden que los modelos basados en grupos son valiosos para " +
    "visualizar y describir datos. La crítica no es que no sirvan, es que se les ha pedido un poder " +
    "explicativo y predictivo que no tienen.",
});

// ·· Desistimiento — 6 min ·················································

P.afirmacion(d, {
  texto: "Lo normal es dejarlo.",
  sub: "El desistimiento es un proceso, no un acontecimiento. Con recaídas.",
  notas:
    "6 MIN — DESISTIMIENTO. Buen sitio para el descanso, justo después.\n\n" +
    "Al margen del debate sobre trayectorias, lo cierto es que generalmente las personas que " +
    "participan en actividades delictivas acaban desistiendo.\n\n" +
    "La distinción técnica que conviene fijar: desistencia no es lo mismo que TERMINACIÓN. La " +
    "terminación es el punto en que cesa la delincuencia; la desistencia abarca los cambios " +
    "subyacentes que conducen a la abstinencia a largo plazo. Y como proceso, implica retrocesos y " +
    "recaídas antes de una abstinencia sostenida.\n\n" +
    "Esto tiene consecuencias prácticas inmediatas para quien trabaje en ejecución penal: una " +
    "recaída no es el fracaso del proceso, es parte de él. Si el sistema trata cada recaída como " +
    "prueba de que la persona no cambia, está trabajando con un modelo equivocado.",
});

P.dosColumnas(d, {
  titulo: "Dos modelos que hoy se suman",
  cols: [
    {
      rotulo: "Lo externo · Sampson y Laub",
      lineas: [
        "Oportunidades vitales.",
        "Empleo estable.",
        "Nuevos lazos sociales:",
        "pareja, familia.",
      ],
    },
    {
      rotulo: "Lo interno · Maruna",
      lineas: [
        "Transformación cognitiva.",
        "Cambio de identidad.",
        "Verse capaz de cambiar.",
        "Una narrativa nueva.",
      ],
    },
  ],
  notas:
    "Empezaron siendo modelos contrapuestos y hoy se reconoce que ambos elementos importan y se " +
    "refuerzan mutuamente.\n\n" +
    "Cómo interactúan, que es lo interesante: desarrollar una identidad prosocial puede ser el " +
    "catalizador para dejarlo, pero ese cambio suele estar motivado o reforzado por experiencias " +
    "sociales —relaciones de apoyo, empleo, comunidad. Y al revés: las desventajas estructurales " +
    "—estigma, paro, exclusión— pueden socavar o revertir el cambio de identidad.\n\n" +
    "Los otros dos factores que suelen listarse: los estructurales y contextuales (vivienda, " +
    "oportunidades de empleo, entorno político) y los emocionales (equilibrio, esperanza, capacidad " +
    "de gestionar la angustia).\n\n" +
    "No existe un único camino y los reveses son comunes. Maruna vuelve en el bloque de identidad.\n\n" +
    "AQUÍ VA EL DESCANSO.",
});

// ###########################################################################
//  BLOQUE 2 — El psicópata y la identidad
// ###########################################################################

P.wooclap(d, {
  tipo: "VERDADERO O FALSO",
  pregunta: "«A un psicópata no se le\npuede rehabilitar: es una\ncondición intratable.»",
  opciones: ["Verdadero", "Falso"],
  notas:
    "W4 · ABRE EL BLOQUE 2 DESPUÉS DEL DESCANSO. LA RESPUESTA CORRECTA ES FALSO.\n\n" +
    "La mayoría del aula votará verdadero, y con razón: es lo que dice la cultura popular, lo que " +
    "dicen muchos manuales, y lo que se afirmaba en más de la mitad de los testimonios periciales " +
    "analizados en el estudio canadiense que veremos al final del bloque.\n\n" +
    "De dónde viene ese pesimismo: fundamentalmente de UN SOLO estudio, que ha sido cuestionado " +
    "después por su uso irresponsable de los datos. Los estudios contemporáneos sugieren con " +
    "claridad que las personas diagnosticadas como psicópatas se benefician del tratamiento y de " +
    "los programas de rehabilitación de forma similar al resto.\n\n" +
    "NO REVELAR AHORA. Decir solo: «guardad vuestra respuesta, volvemos en veinte minutos». El " +
    "bloque entero es la respuesta, y se estropea si se da de entrada.\n\n" +
    "Si el aula vota mayoritariamente falso, preguntar en voz alta quién ha votado eso y por qué. " +
    "Suele haber alguien que ha leído a Larsen o que ha visto algo en redes, y su explicación vale " +
    "más que la mía.",
});

P.cita(d, {
  texto: "Depredadores sociales que seducen, manipulan y se abren camino sin piedad por la vida, dejando tras de sí un rastro de corazones rotos y carteras vacías.",
  atribucion: "Robert Hare, 1993",
  size: 24,
  notas:
    "15 MIN — LA PSICOPATÍA. El bloque más largo y el que más les interesa.\n\n" +
    "La cita sigue: «Carecen por completo de conciencia y de sentimientos hacia los demás, toman " +
    "egoístamente lo que quieren y hacen lo que les place, violando las normas y expectativas " +
    "sociales sin el más mínimo sentimiento de culpa o arrepentimiento.»\n\n" +
    "Hare es el psicólogo canadiense que más ha hecho por popularizar y desarrollar el concepto. " +
    "Fijaos en el registro de la cita: no es lenguaje clínico, es lenguaje de thriller. Eso no es " +
    "accidental y explica parte del éxito cultural del constructo.\n\n" +
    "En España, Vicente Garrido —profesor de psicología en Valencia, con un papel clave en la " +
    "institucionalización de la criminología en nuestro país— ha escrito abundantemente sobre el " +
    "tema, a menudo para audiencia general. Según los títulos de sus libros, los psicópatas serían " +
    "los delincuentes más peligrosos y sus formas camaleónicas los harían difíciles de detectar.",
});

P.figura(d, {
  titulo: "La psicopatía como género editorial",
  rel: "images/garridopsicopatas.webp",
  w: 7.6, h: 4.59,
  fuente: "Vicente Garrido y uno de sus libros sobre el tema.",
  notas:
    "Veinte segundos. No es una diapositiva de contenido: es para que registren que esto tiene un " +
    "mercado, y que el mercado condiciona cómo se habla del constructo.\n\n" +
    "Reconocer el mérito de Garrido en la institucionalización de la criminología española (lo " +
    "vimos en el capítulo 1) y separar eso de la discusión científica sobre el constructo. Son dos " +
    "cosas distintas y conviene no mezclarlas ni en un sentido ni en el otro.\n\n" +
    "La pregunta que abre el bloque crítico: ¿por qué un constructo que no aparece en ninguna " +
    "clasificación oficial de psicopatología tiene tantos libros de divulgación?",
});

P.rejilla(d, {
  titulo: "Los cuatro factores de la PCL-R",
  sub: "20 ítems, 0-2 puntos cada uno. Corte habitual para «psicopatía»: 30 de 40.",
  items: [
    { etiqueta: "Interpersonal", sub: "Encanto superficial, labia,\ngrandiosidad, mentira\npatológica, manipulación." },
    { etiqueta: "Afectivo", sub: "Falta de remordimiento,\nafectividad superficial,\nfalta de empatía." },
    { etiqueta: "Estilo de vida", sub: "Necesidad de estimulación,\nparasitismo, impulsividad,\nirresponsabilidad." },
    { etiqueta: "Antisocial", sub: "Mal control conductual,\nproblemas tempranos,\ndelincuencia juvenil." },
  ],
  notas:
    "Es una escala de valoración clínica: entrevista semiestructurada, información del historial e " +
    "criterios de puntuación específicos.\n\n" +
    "Dieciocho de los veinte ítems forman estos cuatro factores. Los otros dos (conducta sexual " +
    "promiscua, muchas relaciones cortas) no van en ningún factor pero suman al total.\n\n" +
    "AGRUPACIÓN QUE IMPORTA MUCHO DESPUÉS: interpersonal + afectivo = FACTOR 1. Estilo de vida + " +
    "antisocial = FACTOR 2. Retenedlo, porque toda la discusión crítica gira sobre cuál de los dos " +
    "hace el trabajo.\n\n" +
    "FIJAOS EN LA CUARTA COLUMNA: delincuencia juvenil, problemas de conducta tempranos, " +
    "versatilidad delictiva, revocación de la condicional. O sea, la escala que mide si eres un " +
    "psicópata incluye entre sus ítems si has delinquido. Ahí está la circularidad, y merece la " +
    "pena que la vean ellos antes de que yo la nombre.",
});

P.figura(d, {
  titulo: "Estructura factorial de la PCL-R",
  quéMirar: "Dos grandes factores. El 1 es lo interpersonal y afectivo; el 2, el estilo de vida y la conducta antisocial.",
  rel: "images/hare.png",
  w: 6.7, h: 5.02,
  fuente: "Hare (2008).",
  notas:
    "NO SACRIFICABLE: visualización de datos.\n\n" +
    "La figura ordena lo de la diapositiva anterior. Lo que quiero que retengan es la división en " +
    "dos factores, porque es la bisagra de todo el debate crítico.\n\n" +
    "Hare siempre ha defendido que el constructo es muy sólido. Redondo y Garrido apuntan que " +
    "quizás habría que considerarlo más como un ESPECTRO, que se manifiesta en distintos grados y " +
    "de forma diversa según la persona. Es la posición que se está abriendo paso con fuerza.\n\n" +
    "La caracterización de Redondo, que sirve de resumen: «una persona emocionalmente fría, " +
    "manipuladora, que no tiene sentimientos de culpa o conciencia, y que es capaz de actuar con " +
    "gran impulsividad y temeridad, pero también siguiendo de forma maquiavélica un plan " +
    "preconcebido».",
});

P.afirmacion(d, {
  texto: "La psicopatía no existe\npara el DSM ni para el ICD.",
  sub: "Ninguna de las dos clasificaciones oficiales la recoge como trastorno.",
  size: 40,
  notas:
    "Suele sorprender, y es un buen dato para desactivar la autoridad del término.\n\n" +
    "Las dos clasificaciones: el DSM-5, de la Asociación Americana de Psiquiatría, y la " +
    "Clasificación Internacional de Enfermedades de la OMS, que va por la undécima edición aunque " +
    "en España seguimos con la décima.\n\n" +
    "Lo que sí recogen son trastornos que se solapan parcialmente: el DSM-5 habla de TRASTORNO " +
    "ANTISOCIAL DE LA PERSONALIDAD y el ICD-10 de TRASTORNO DISOCIAL DE LA PERSONALIDAD. En ambos " +
    "casos, a diferencia de la psicopatía, el énfasis está en el componente ANTISOCIAL del " +
    "comportamiento.\n\n" +
    "Y esa es justamente la crítica de Hare: que el DSM y el ICD ponen demasiado peso en la " +
    "conducta antisocial y no en las esferas afectiva e interpersonal.\n\n" +
    "Apunte para quien lea la nota al pie: el ICD-11 se ha movido bastante en la dirección que Hare " +
    "reclamaba, con un dominio de disocialidad definido por egocentrismo y falta de empatía, y sin " +
    "los arrestos ni la delincuencia juvenil. Pero que una clasificación se acerque a Hare no " +
    "significa que Hare tuviera razón.",
});

P.rejilla(d, {
  titulo: "Las cuatro premisas que lo justifican todo",
  sub: "Larsen, 2025: sobre esto se apoya el trato penal diferenciado.",
  items: [
    { etiqueta: "Son peligrosísimos", sub: "Una plaga social responsable\nde una cantidad\ndesproporcionada de delitos." },
    { etiqueta: "No tienen cura", sub: "Condición crónica\ne intratable." },
    { etiqueta: "No tienen moral", sub: "Carecen de empatía,\nremordimiento y conciencia." },
    { etiqueta: "Es biológico", sub: "Está determinado por\nfactores biológicos." },
  ],
  notas:
    "Antes de pasar a la crítica, dejar claro para qué sirve esto en la práctica, que es lo que lo " +
    "hace serio.\n\n" +
    "En Norteamérica el sistema legal diagnostica psicopatía de forma sistemática en las " +
    "evaluaciones forenses, y las herramientas de Hare son de las más utilizadas. Redondo lo " +
    "resume: se ha utilizado en procesos penales como prueba de la potencial peligrosidad, " +
    "cuestión importante para decidir si se aplicaba la PENA DE MUERTE o una detención preventiva " +
    "tras cumplir condena. Y la clasificación tiene amplias repercusiones sobre las expectativas " +
    "de tratamiento, porque se ha considerado un trastorno incurable.\n\n" +
    "O sea: estas cuatro premisas no son un debate de seminario. Son lo que sostiene decisiones " +
    "sobre la vida de personas concretas.\n\n" +
    "Y antes de Larsen, una objeción de sentido común: existe una circularidad evidente. Si " +
    "definimos el constructo en parte por delinquir habitualmente, no debería sorprendernos " +
    "encontrar «psicópatas» entre delincuentes habituales. Hay además un solapamiento notable con " +
    "el persistente de Moffitt: es la misma figura con otra bata.",
});

P.rejilla(d, {
  titulo: "Y lo que dice la evidencia",
  sub: "La revisión de Larsen, premisa por premisa.",
  items: [
    { etiqueta: "Diferencias pequeñas", sub: "Los estudios de los 90 tenían\nproblemas metodológicos\nserios." },
    { etiqueta: "Sí responden", sub: "Se benefician del tratamiento\ncomo el resto. El pesimismo\nvenía de un solo estudio." },
    { etiqueta: "Empatía: sin apoyo", sub: "De 1.672 efectos publicados,\nsolo el 11 % resultó\nsignificativo." },
    { etiqueta: "Cerebro: nada", sub: "Cientos de experimentos\nsin diferencias\nsignificativas." },
  ],
  notas:
    "AQUÍ SE RESPONDE AL WOOCLAP 4. Recuperarlo explícitamente: «¿os acordáis de lo que votasteis " +
    "antes del descanso?».\n\n" +
    "Sobre la empatía, la frase de Larsen merece leerse: la idea de que los psicópatas tienen " +
    "problemas de razonamiento moral y empatía «nunca ha sido apoyada por evidencia científica " +
    "creíble». Cuando se les evalúa en experimentos sobre moralidad, no se encuentran diferencias " +
    "de rendimiento. La revisión sistemática posterior reunió 66 estudios y más de 5.700 " +
    "participantes: de 1.672 efectos publicados, solo 182 significativos.\n\n" +
    "HONESTIDAD OBLIGATORIA: no todo el mundo lee la evidencia igual. El metaanálisis de Holper, " +
    "entre cuyos autores está un coautor de Hare, SÍ encuentra validez predictiva, con efectos " +
    "moderados para reincidencia general y violenta. Pero el detalle es delicioso: quien hace el " +
    "trabajo predictivo es el FACTOR 2, el del estilo de vida y la conducta antisocial. El factor " +
    "1, el interpersonal y afectivo, que es el que supuestamente captura lo específico de la " +
    "psicopatía frente al mero comportamiento antisocial, es el que menos predice.\n\n" +
    "O sea: lo que predice reincidencia es haber delinquido. Que es donde empezamos.",
});

P.figura(d, {
  titulo: "«Una idea zombi»",
  quéMirar: "Una idea con atractivo intuitivo, pero muerta: sin referente en la realidad.",
  rel: "images/psycopathy.webp",
  w: 8.6, h: 2.69,
  fuente: "Rasmus Rosenberg Larsen, Psychopathy Unmasked: The Rise and Fall of a Dangerous Diagnosis, 2025.",
  notas:
    "Larsen es profesor de epistemología forense y filosofía de la ciencia en Toronto-Mississauga.\n\n" +
    "Su explicación de por qué no hay progreso científico en apoyar estas premisas: quizás porque " +
    "el desorden no es real, no existe. De ahí la «idea zombi»: «una idea que tiene un cierto " +
    "atractivo intuitivo, pero que está muerta, que no tiene un referente en la realidad».\n\n" +
    "Señala además que este es un ámbito donde la crisis de reproducibilidad y las prácticas " +
    "científicas cuestionables han contribuido a generar resultados que no aguantan un escrutinio " +
    "riguroso. Eso enlaza con lo que verán en metodología.\n\n" +
    "Su recomendación: una moratoria urgente en el uso forense de las evaluaciones PCL, porque esa " +
    "práctica parece violar los códigos éticos profesionales de la psiquiatría y la psicología.",
});

P.afirmacion(d, {
  texto: "Lealtad adversarial.",
  sub: "Los peritos de la acusación puntúan más alto que los de la defensa. A la misma persona.",
  size: 44,
  notas:
    "EL DATO QUE MÁS IMPRESIONA DEL BLOQUE. Merece contarse despacio.\n\n" +
    "Estudio sobre 3.315 resoluciones judiciales canadienses entre 1980 y 2023 (Larsen, 2026). " +
    "Los peritos contratados por la acusación puntuaban a los acusados más alto en la PCL-R que los " +
    "contratados por la defensa: una diferencia del orden de UNA DESVIACIÓN TÍPICA, con una " +
    "concordancia entre unos y otros prácticamente nula.\n\n" +
    "Lo que eso significa en román paladino: la puntuación depende de quién paga al perito. Para un " +
    "instrumento que se usa para decidir sobre penas capitales, es demoledor.\n\n" +
    "El mismo trabajo: en más de la mitad de los testimonios periciales analizados la psicopatía se " +
    "describía como categóricamente intratable, y en uno de cada seis se afirmaba que el " +
    "tratamiento EMPEORA a estas personas. Recordar aquí el Wooclap: esa creencia que el aula " +
    "comparte está también en los tribunales.\n\n" +
    "Qué ha pasado con la moratoria: no ha prosperado y las escalas se siguen usando. Sí hubo un " +
    "movimiento parcial desde dentro: en 2020, trece especialistas destacados —entre ellos Stephen " +
    "Hart y Kevin Douglas— publicaron una declaración de consenso sobre el uso de la PCL-R en la " +
    "determinación de la pena capital en Estados Unidos, concluyendo que las puntuaciones no pueden " +
    "ni deben emplearse para predecir violencia grave en prisión. Ojo al matiz: hablan a título " +
    "individual y se ciñen a ese uso concreto.",
});

// ·· Identidad y delincuencia — 7 min ······································

P.afirmacion(d, {
  texto: "¿Hay una identidad\ndelictiva?",
  sub: "Cómo nos vemos, y qué tiene eso que ver con lo que hacemos.",
  notas:
    "7 MIN — IDENTIDAD Y DELINCUENCIA. SACRIFICABLE A LA MITAD si voy con retraso: quedarse con " +
    "Matza y Maruna y saltar la caracterización general de la identidad.\n\n" +
    "Identidad, según la RAE: la conciencia que una persona tiene de ser ella misma y distinta a " +
    "las demás.\n\n" +
    "Dos preguntas: ¿desarrollan las personas que delinquen una identidad ligada a esa actividad? " +
    "Y ¿es esa identidad relevante para entender la participación continuada?\n\n" +
    "Enlazar con el desistimiento de antes del descanso: ya vimos que el cambio de identidad es uno " +
    "de los predictores más sólidos de dejarlo.",
});

P.rejilla(d, {
  titulo: "Cómo se entiende hoy la identidad",
  items: [
    { etiqueta: "Multidimensional", sub: "Personal, social, cultural\ny narrativa a la vez." },
    { etiqueta: "Dinámica", sub: "Cambia con el tiempo\ny según el contexto." },
    { etiqueta: "Relacional", sub: "Se forma en la interacción.\nEl reconocimiento ajeno\ncondiciona." },
    { etiqueta: "Narrativa", sub: "Las historias que nos\ncontamos sobre quiénes\nsomos." },
  ],
  notas:
    "SACRIFICABLE: se lee en treinta segundos.\n\n" +
    "Las tradiciones detrás, por si alguien pregunta: Erikson y el desarrollo, con la formación de " +
    "la identidad como tarea central de la adolescencia; Tajfel y Turner con la identidad social y " +
    "la pertenencia a grupos; las teorías cognitivas con las representaciones mentales; Goffman y " +
    "el interaccionismo simbólico con la identidad como emergente, fluida y negociada; y las " +
    "teorías narrativas de Bruner y McAdams.\n\n" +
    "La última casilla es la que más rendimiento da en criminología, y es donde entra Maruna.\n\n" +
    "Añadir que las visiones contemporáneas subrayan cómo las estructuras de poder y desigualdad " +
    "determinan qué identidades se privilegian y cuáles se marginalizan.",
});

P.cita(d, {
  texto: "«Desviado», «delincuente» o «criminal» no son cajas ontológicas en las que los seres humanos encajen perfectamente.",
  atribucion: "David Matza, Becoming Deviant, 1969",
  size: 26,
  notas:
    "La formulación más económica de la tesis del capítulo entero. Volvemos a ella en el cierre.\n\n" +
    "Lo que distinguía a Becoming Deviant, según Blomberg en la introducción a la reedición: sitúa " +
    "al lector en el ámbito subjetivo y la mente del sujeto desviado. «En lugar de estar fuera " +
    "mirando hacia dentro, nos sitúa dentro mirando hacia fuera.»\n\n" +
    "La otra noción clave de Matza aquí: la IDENTIDAD PROVISIONAL. La identidad es siempre más una " +
    "suposición que una conclusión.\n\n" +
    "Y su secuencia, que va en la diapositiva siguiente.",
});

P.rejilla(d, {
  titulo: "Convertirse en desviado",
  sub: "Matza: un proceso secuencial y abierto, no un destino.",
  items: [
    { etiqueta: "Afinidad", sub: "Una inclinación hacia\nciertos comportamientos\nprohibidos." },
    { etiqueta: "Afiliación", sub: "Entrar en círculos que\nincluyen o patrocinan\nlas infracciones." },
    { etiqueta: "Significación", sub: "Interpretar lo hecho\ncomo prueba de lo\nque uno es." },
  ],
  notas:
    "La tercera casilla es la interesante y donde Matza es más original.\n\n" +
    "Su planteamiento: la identidad desviada no es simplemente impuesta desde fuera. Es un proceso " +
    "dinámico en el que el individuo, bajo la influencia de la autoridad, se convierte ACTIVAMENTE " +
    "en autor de su propia auto-ordenación como desviado, sobre todo al interpretar la recurrencia " +
    "de sus actos como prueba concluyente de su verdadero ser.\n\n" +
    "La pregunta que Matza pone en boca del sujeto, y que merece leerse tal cual: «¿de todas las " +
    "cosas que he hecho, cuál es el mejor índice de lo que soy? ¿Cuál representa con mayor " +
    "precisión mi verdadero ser?»\n\n" +
    "Anunciar: el papel del Estado en la construcción de identidades criminales vuelve en el " +
    "capítulo sobre respuestas estatales, y lo verán a fondo en teorías criminológicas con las " +
    "teorías del etiquetamiento.",
});

P.afirmacion(d, {
  texto: "Quien desiste ha construido\nuna historia nueva.",
  sub: "Maruna: para entender a quien delinque, hay que entender los relatos que se cuenta.",
  size: 40,
  notas:
    "Maruna revolucionó el estudio del desistimiento demostrando que quienes desisten han construido " +
    "narrativas poderosas que les ayudan a dar sentido a su pasado, a encontrar satisfacción en " +
    "comportamientos productivos y a sentir que controlan su futuro.\n\n" +
    "Y el giro práctico: ese proceso de creación de historias tiene en sí mismo capacidad de " +
    "transformar vidas. No es que la narrativa refleje el cambio; es parte del cambio.\n\n" +
    "La otra cara, la identidad social: las afiliaciones grupales median el impacto del entorno. " +
    "Si los grupos convencionales rechazan o estigmatizan a alguien, esa persona puede buscar " +
    "pertenencia en grupos que redefinan su comportamiento desviado como valioso. En casos " +
    "extremos se ha descrito una fusión de identidad personal y grupal que conduce a lealtad " +
    "extrema (Newson).\n\n" +
    "Conclusión aplicada, que interesa a quien vaya a trabajar en intervención: las intervenciones " +
    "dirigidas a la identidad, personal y social, pueden ser útiles para prevención y " +
    "rehabilitación.",
});

// ·· Especialización — 5 min ···············································

P.wooclap(d, {
  tipo: "ELECCIÓN MÚLTIPLE",
  pregunta: "Quien delinque de forma habitual,\n¿tiende a especializarse\nen un tipo de delito?",
  opciones: ["Sí, casi siempre", "Sí, una mayoría", "No, la regla es la versatilidad", "Depende solo del sexo"],
  notas:
    "W5 · LA RESPUESTA CORRECTA ES LA C.\n\n" +
    "El aula suele votar A o B, porque nuestro propio vocabulario empuja: hablamos de «delincuentes " +
    "violentos», «delincuentes sexuales», «defraudadores», como si fueran oficios. Señalar eso al " +
    "comentar la votación: el error no es suyo, está en el idioma que les hemos enseñado.\n\n" +
    "Y la consecuencia teórica, que es lo que hace interesante la pregunta: si hubiera " +
    "especialización, necesitaríamos explicaciones diferenciadas para cada forma de criminalidad. " +
    "Como no la hay, buscamos explicaciones más generales.\n\n" +
    "Es la última pregunta de la sesión. Después van el cierre y la actividad.",
});

P.afirmacion(d, {
  texto: "Delincuencia estilo bufé.",
  sub: "«Cafeteria style»: se coge un poco de todo. La regla es la versatilidad, no la especialización.",
  size: 44,
  notas:
    "5 MIN — ESPECIALIZACIÓN. Responde al Wooclap 5.\n\n" +
    "Las investigaciones concluyen sistemáticamente que la mayoría de las personas que delinquen " +
    "son versátiles y cometen tipos diversos de delito a lo largo de su carrera.\n\n" +
    "PERO con matices, que van en la diapositiva siguiente. No dejarlo en un eslogan.",
});

P.rejilla(d, {
  titulo: "Dónde sí aparece especialización",
  items: [
    { etiqueta: "A corto plazo", sub: "Se ve en ventanas cortas\ny se diluye en carreras\nlargas." },
    { etiqueta: "Con la edad", sub: "Quienes son mayores\nse especializan algo más." },
    { etiqueta: "En mujeres", sub: "Algo más que los hombres,\nque tienden a la versatilidad." },
    { etiqueta: "En redes cerradas", sub: "Grupos pequeños y unidos,\námbito geográfico limitado:\ndivisión del trabajo." },
    { etiqueta: "Con inicio precoz, no", sub: "Inicio temprano, alta\nfrecuencia y bandas predicen\nversatilidad." },
    { etiqueta: "Y cambia con la vida", sub: "Empleo, matrimonio y consumo\nmueven de especialización\na versatilidad." },
  ],
  notas:
    "El matiz completo, para que no se queden con el eslogan.\n\n" +
    "La especialización es más pronunciada a corto plazo, no suele sostenerse a plazos largos, y " +
    "tiende a disminuir cuando se examinan carreras más largas (McGloin).\n\n" +
    "La cuarta casilla es la que más rendimiento tiene para quien vaya a trabajar en delincuencia " +
    "organizada: los especialistas operan en redes más pequeñas y muy unidas, dentro de un ámbito " +
    "geográfico limitado, lo que sugiere división del trabajo.\n\n" +
    "Y la conclusión honesta: aunque algunos se especializan, la mayoría muestra versatilidad. Una " +
    "serie de características —demográficas, psicológicas y situacionales— determinan si alguien se " +
    "especializa o no.",
});

// ·· Cierre ································································

P.afirmacion(d, {
  texto: "Volvamos a la\nprimera pregunta.",
  sub: "Proyectad otra vez la nube de palabras del principio.",
  size: 44,
  notas:
    "AQUÍ SE RECUPERA EL WOOCLAP 1. Volver a proyectar la nube que generaron hace dos horas.\n\n" +
    "Repasar en voz alta tres o cuatro de las palabras que escribieron y contrastarlas con lo que " +
    "hemos visto:\n" +
    "· ¿«Hombre, joven»? La curva de la edad les da parte de razón, pero es una etapa, no una " +
    "condición.\n" +
    "· ¿«Pobre, marginal»? Las encuestas de autoinforme dicen que la participación está mucho más " +
    "repartida de lo que sugieren las estadísticas penales.\n" +
    "· ¿«Psicópata»? Acabamos de dedicarle veinte minutos.\n" +
    "· ¿«Violento»? La versatilidad dice que ni siquiera dentro de la delincuencia hay tipos " +
    "nítidos.\n\n" +
    "EL TONO IMPORTA. No es un «os equivocasteis»: es un «esto mismo lo pensó la criminología " +
    "durante siglo y medio, con instrumentos de medida y revistas científicas». La nube no es su " +
    "prejuicio, es el punto de partida de la disciplina.\n\n" +
    "Y la conexión que cierra el arco: poned la lista de etiquetas de Rafter del principio —locura " +
    "moral, degeneración, imbecilidad moral, criminalidad innata— al lado de las que hemos visto " +
    "después: delincuente nato, 6 % crónico, antisocial persistente, psicópata. Cambian los nombres " +
    "y cambian los aparatos, del calibrador antropométrico a una escala de veinte ítems, y la forma " +
    "del argumento se mantiene intacta.",
});

P.afirmacion(d, {
  texto: "Hay diferencias.\nPero son de grado,\nno de clase.",
  sub: "Se distribuyen de forma continua, cambian a lo largo de la vida, y se reconocen mejor hacia atrás.",
  size: 40,
  notas:
    "EL MATIZ QUE EVITA EL MALENTENDIDO. Sin esta diapositiva, media clase se va pensando que he " +
    "dicho que todos somos iguales.\n\n" +
    "Sería un mal servicio dejarles con la idea de que no hay diferencias, porque las hay. El grupo " +
    "reducido y de alta frecuencia que encontró Wolfgang se ha vuelto a encontrar después, y " +
    "ninguna criminóloga sensata sostiene hoy que la participación delictiva se reparta por igual.\n\n" +
    "Lo que hemos visto es algo bastante más incómodo que la ausencia de diferencias: que las que " +
    "existen son de grado y no de clase, se distribuyen de forma continua, cambian a lo largo de la " +
    "vida de cada cual, y resultan mucho más fáciles de reconocer cuando ya han ocurrido que de " +
    "anticipar cuando todavía no han ocurrido.\n\n" +
    "Decirlo despacio. Es la frase más precisa del capítulo.",
});

P.rejilla(d, {
  titulo: "Tres hábitos",
  items: [
    { etiqueta: "¿Qué fabrica la categoría?", sub: "Con qué se mide, con quién\nse validó, qué pasa en\notras poblaciones." },
    { etiqueta: "¿Hacia atrás o hacia delante?", sub: "Reconocer una trayectoria\nvivida no es predecir\nla que viene." },
    { etiqueta: "¿Qué autoriza la etiqueta?", sub: "Cada categoría hizo posible\nuna decisión sobre la vida\nde alguien." },
  ],
  notas:
    "EL CIERRE REAL. Si solo se llevan una diapositiva de las dos horas, que sea esta.\n\n" +
    "1. Ninguno de los tipos que hemos repasado se encontró en la naturaleza esperando a ser " +
    "descubierto. Todos se construyeron con un procedimiento, unas muestras y unos criterios " +
    "concretos, y varios arrastran el problema de circularidad que vimos con la psicopatía.\n\n" +
    "2. Trazar la trayectoria de alguien que ya ha vivido buena parte de su vida es relativamente " +
    "sencillo; decir a los ocho años qué trayectoria va a seguir, bastante menos. Parece un " +
    "tecnicismo y es el hueco por donde se cuelan las intervenciones más dañinas.\n\n" +
    "3. Ninguno de estos conceptos se quedó en el seminario. La degeneración condujo a la " +
    "esterilización y sirvió de sustrato a la barbarie nazi; el 6 % crónico se convirtió en " +
    "argumento para la incapacitación selectiva; la psicopatía pesa hoy en penas capitales, en " +
    "denegaciones de libertad condicional y en las expectativas de tratamiento de quien la lleva " +
    "escrita en el expediente.\n\n" +
    "Cuando evaluéis una categoría criminológica, evaluad también la decisión que hace posible.",
});

P.actividad(d, {
  rotulo: "ACTIVIDAD · 15 MIN",
  titulo: "Auditad una categoría",
  pasos: [
    "Grupos pequeños. A cada uno, una de las categorías de hoy.",
    "¿Con qué instrumento se fabricó? ¿Sobre qué muestra? ¿Qué tiene de circular?",
    "¿Qué decisión sobre una persona concreta autoriza esa etiqueta?",
  ],
  notas:
    "Aplica los tres hábitos a lo que acaban de ver, que es la mejor manera de que no se queden en " +
    "eslogan.\n\n" +
    "CATEGORÍAS PARA REPARTIR: el delincuente nato de Lombroso · el 6 % crónico de Wolfgang · el " +
    "antisocial persistente de Moffitt · el psicópata de Hare · el trastorno antisocial del DSM-5 · " +
    "y una fuera de programa que funciona muy bien: «menor en riesgo», que es la que se van a " +
    "encontrar en su vida profesional.\n\n" +
    "LO QUE TIENE QUE SALIR:\n" +
    "· Que casi todas se construyeron sobre muestras muy particulares —presos, varones, un solo " +
    "país— y se aplicaron a poblaciones distintas.\n" +
    "· Que la circularidad aparece en casi todas en cuanto se rasca: si la categoría se define en " +
    "parte por delinquir, encontrarla entre quienes delinquen no demuestra gran cosa.\n" +
    "· Que la tercera pregunta es la que les va a servir en el trabajo. Una etiqueta en un " +
    "expediente no describe: autoriza.\n\n" +
    "Si el grupo va sobrado: ¿qué habría que exigirle a una categoría para que os pareciera " +
    "aceptable usarla en una decisión penal? Es una pregunta de nivel y no tiene respuesta fácil.\n\n" +
    "SI VOY MUY JUSTO DE TIEMPO: esta actividad se puede reducir a cinco minutos haciendo solo la " +
    "tercera pregunta, en plenario y con una sola categoría, la psicopatía.",
});

P.cierre(d, {
  frase: "Los delincuentes no son\nuna subespecie del\nhomo sapiens.",
  remate: "Austin Porterfield, 1946. Ochenta años después, sigue siendo lo más importante del capítulo.",
  notas:
    "Cerrar donde empezamos: con médicos decimonónicos midiendo orejas, y terminando en cuál de los " +
    "dos factores de una escala clínica predice mejor la reincidencia. Siglo y medio de " +
    "investigación, y un mismo impulso que vuelve cada pocas décadas con ropa nueva: que existe un " +
    "tipo de persona distinto del resto, que se puede identificar con el instrumento adecuado, y " +
    "con el que hay que hacer algo diferente.\n\n" +
    "Los tres hallazgos que lo desmienten, por si hay que recapitular en treinta segundos: los " +
    "autoinformes enseñaron que la participación es demasiado corriente para sostener la imagen del " +
    "delincuente como ser aparte; la curva de la edad y el desistimiento enseñaron que para la " +
    "inmensa mayoría delinquir es una etapa y no una condición; y la investigación sobre " +
    "especialización enseñó que ni siquiera dentro de la delincuencia hay tipos nítidos.\n\n" +
    "Anunciar el capítulo siguiente y dejar las lecturas.",
});

P.guardar(d, DESTINO);
