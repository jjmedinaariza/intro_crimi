// Capítulo 7 · "Las víctimas y los procesos de victimación"  —  victimas.qmd
// Dos sesiones de una hora. El corte sigue los dos ejes que el propio capítulo
// declara: la victimación como PROCESO (sesión 1, quién sufre) y el
// RECONOCIMIENTO (sesión 2, quién cuenta como víctima).
// Estilo "B claro". Genera Cap07_Las-victimas.pptx

const path = require("path");
const P = require("./plantilla-b-claro");

const LIBRO = "/sessions/clever-modest-cray/mnt/intro_crimi";
const DESTINO = path.join(LIBRO, "presentaciones", "Cap07_Las-victimas.pptx");

const d = P.crear({
  titulo: "Las víctimas y los procesos de victimación",
  subject: "Capítulo 7 · Criminología: una introducción",
  autoria: "Juan José Medina Ariza",
  imgDir: LIBRO,
  cacheDir: path.join(LIBRO, "presentaciones", ".cache-imagenes"),
});

// ###########################################################################
//  SESIÓN 1 — Quién sufre
// ###########################################################################

P.portada(d, {
  cintillo: "CAPÍTULO 7  ·  SESIÓN 1 DE 2",
  titulo: "Las víctimas",
  autoria: "Juan José Medina Ariza",
  notas:
    "POR QUÉ DOS SESIONES. El capítulo no cabe en una hora, y además tiene dos ejes declarados que " +
    "dan un corte limpio: la victimación como PROCESO y el RECONOCIMIENTO. La sesión 1 responde a " +
    "«¿quién sufre delitos?», que es una pregunta empírica. La sesión 2 a «¿a quién se reconoce " +
    "como víctima?», que es una pregunta política. Partirlo por ahí evita retomar una sección a " +
    "medias el segundo día.\n\n" +
    "SESIÓN 1 (~35 min + actividad). El regreso de la víctima (8) · Quién sufre: regularidades (9) · " +
    "Exposición y responsabilización (5) · La concentración (8) · El solapamiento (5).\n" +
    "SESIÓN 2 (~35 min + actividad). El pecado original (7) · La corrección feminista (6) · La " +
    "víctima ideal (8) · Victimación secundaria (8) · Las respuestas (6).\n\n" +
    "HE METIDO DOS PREGUNTAS DE WOOCLAP, una por sesión, siguiendo lo que hicimos en el capítulo " +
    "anterior. Son fáciles de quitar si prefieres la clase corrida.\n\n" +
    "SACRIFICABLE en la sesión 1: la polivictimación y el debate del proceso civilizatorio. Las " +
    "cuatro figuras de datos NO se sacrifican.\n\n" +
    "ARRANQUE: preguntar quién ha sufrido un delito alguna vez. Suelen levantar bastantes manos, y " +
    "eso ya desmonta la idea de la víctima como figura excepcional. No pedir detalles ni señalar a " +
    "nadie: solo contar manos y seguir.",
});

// ·· El regreso de la víctima — 8 min ······································

P.afirmacion(d, {
  texto: "En los manuales de hace\nsetenta años la víctima\ncasi no aparece.",
  sub: "No hay capítulo sobre la víctima en la primera edición de Sutherland.",
  size: 40,
  notas:
    "8 MIN — EL REGRESO DE LA VÍCTIMA.\n\n" +
    "La disciplina se construyó como una ciencia volcada en el delincuente: sus causas, su perfil, " +
    "sus diferencias con quien cumple la ley. Quien sufría el daño quedaba en segundo plano.\n\n" +
    "Enlazar con los dos capítulos anteriores: hemos dedicado uno al delito y otro a quien lo " +
    "comete. Este es el tercero de los cinco temas que enumeramos el primer día.\n\n" +
    "La victimología se consolida a partir de los años sesenta. Y ahí aparece la trampa: es muy " +
    "tentador contarlo como un «descubrimiento».",
});

P.afirmacion(d, {
  texto: "Pero no se «descubrió»\na la víctima.",
  sub: "Durante siglos estuvo en el centro. Lo que hubo fue una expropiación.",
  notas:
    "El giro del bloque, y conviene decirlo despacio porque contradice la intuición.\n\n" +
    "Hablar de descubrimiento sugiere que la víctima siempre estuvo ahí, invisible y pasiva, " +
    "esperando a que los criminólogos repararan en ella. La historia es al revés.\n\n" +
    "En la Europa anterior a los sistemas penales públicos, el conflicto nacido de una ofensa " +
    "PERTENECÍA a las partes. La persona agraviada, o su linaje, podía negociar un acuerdo, exigir " +
    "reparación o recurrir a la venganza.\n\n" +
    "Y no era una rareza europea: la investigación socio-jurídica comparada muestra que la " +
    "mediación y la compensación privada son respuestas extendidas en comunidades tempranas, y que " +
    "los aparatos coercitivos especializados solo emergen cuando las sociedades ganan complejidad.",
});

P.figura(d, {
  titulo: "El wergeld",
  quéMirar: "A la izquierda, el hacha y el cuerpo. A la derecha, las monedas cambiando de mano.",
  rel: "images/wergild.jpg",
  w: 6.2, h: 3.24,
  fuente:
    "Sachsenspiegel de Heidelberg, ca. 1300. Universitätsbibliothek Heidelberg, Cod. Pal. germ. 164. " +
    "Dominio público, vía Wikimedia Commons.",
  notas:
    "El wergeld germánico y otros sistemas de composición tasaban el daño y obligaban a compensar a " +
    "quien lo había padecido.\n\n" +
    "NO ROMANTIZARLO, y decirlo en voz alta: en sociedades profundamente desiguales, la capacidad " +
    "de hacer valer un agravio dependía de los recursos de la víctima, y las tarifas de reparación " +
    "variaban según el rango social. El pobre valía menos, literalmente.\n\n" +
    "Lo que sí retenía la víctima era el control del desenlace. El delito se gestionaba como un " +
    "asunto interpersonal.\n\n" +
    "Cómo se pierde eso: no de golpe. Empieza en la Baja Edad Media, siglo XIII, cuando el derecho " +
    "canónico y las monarquías introducen el procedimiento inquisitivo y se puede investigar de " +
    "oficio para proteger la «paz del rey» —y llenar las arcas regias. Se culmina con la " +
    "codificación penal ilustrada de los siglos XVIII y XIX: el delito pasa de daño entre " +
    "particulares a vulneración del orden público. La víctima queda degradada a instrumento " +
    "probatorio, un testigo necesario. Acusa el fiscal, en nombre de la sociedad.",
});

P.cita(d, {
  texto: "La víctima es una perdedora por partida doble: primero frente a quien la agredió, y después frente a un Estado que le niega el derecho a participar en aquello que era suyo.",
  atribucion: "Nils Christie, 1977 · «Los conflictos como propiedad»",
  size: 23,
  notas:
    "EL TEXTO FUNDACIONAL DEL CAPÍTULO. Christie vuelve dos veces más: con la víctima ideal en la " +
    "sesión 2, y al final, con la justicia restaurativa como el proyecto de devolver el conflicto.\n\n" +
    "Su tesis: los conflictos no se disuelven de forma natural, son EXPROPIADOS. Primero por el " +
    "Estado, que usurpa la posición de parte ofendida. Y después por los profesionales del derecho, " +
    "que secuestran el litigio traduciéndolo a un lenguaje técnico inaccesible para la comunidad.\n\n" +
    "Esa segunda expropiación merece un ejemplo del aula: preguntad a cualquiera que haya pasado " +
    "por un juzgado si entendió lo que pasaba.\n\n" +
    "Aviso de edición: la página exacta de la cita está pendiente de verificar contra el original.",
});

P.dosColumnas(d, {
  titulo: "La misma historia, dos lecturas",
  cols: [
    {
      rotulo: "Una expropiación",
      lineas: [
        "El Estado arrebata el conflicto",
        "a sus dueños legítimos.",
        "La víctima pierde su agravio.",
        "Christie y la victimología crítica.",
      ],
    },
    {
      rotulo: "Una conquista",
      lineas: [
        "El Estado desplaza la venganza",
        "privada, el duelo y la vendetta.",
        "El homicidio cae de decenas",
        "por 100.000 a una en el XX.",
      ],
    },
  ],
  notas:
    "SACRIFICABLE si voy con retraso, pero es una diapositiva que enseña a pensar y merece " +
    "defenderse.\n\n" +
    "La segunda lectura es la de Elias y el «proceso de civilización», validada empíricamente por " +
    "Eisner con series históricas de homicidio, y divulgada a lo grande —con simplificaciones muy " +
    "cuestionadas— por Steven Pinker. Desde ahí, que el litigio dejara de ser propiedad de los " +
    "particulares no es un despojo sino la condición para contener la espiral de letalidad.\n\n" +
    "LAS TRES FISURAS de esa lectura, que hay que dar:\n" +
    "· Sesgo eurocéntrico: se apoya casi solo en series europeas. Capítulo 13.\n" +
    "· Invisibiliza la violencia estatal: guerras, violencia colonial, represión, castigo. " +
    "Capítulo 6.\n" +
    "· Mito del pasado armónico: el orden premoderno no era justicia igualitaria.\n\n" +
    "LA CONCLUSIÓN QUE QUIERO: no son dos tesis rivales entre las que elegir. La pérdida de " +
    "protagonismo de la víctima y la ganancia colectiva en pacificación son dos caras de la misma " +
    "transformación. Y sirve de vacuna contra la nostalgia de un pasado idealizado.",
});

P.dosColumnas(d, {
  titulo: "Los dos ejes del capítulo",
  cols: [
    {
      rotulo: "La victimación es un proceso",
      lineas: [
        "No el instante del delito.",
        "Empieza antes y sigue mucho",
        "después. Depende también de lo",
        "que hagan el sistema, los medios",
        "y el entorno.",
      ],
    },
    {
      rotulo: "Ser víctima es un estatus",
      lineas: [
        "No basta con haber sufrido",
        "un daño: hace falta que la",
        "sociedad lo reconozca.",
        "Quién cuenta como víctima",
        "es una cuestión normativa.",
      ],
    },
  ],
  notas:
    "LA DIAPOSITIVA-ANDAMIO DE LAS DOS SESIONES. Merece un minuto entero y volver a ella al cerrar.\n\n" +
    "Anunciar el reparto explícitamente, que da estructura a dos días: HOY trabajamos el eje " +
    "izquierdo, quién sufre delitos y cómo se reparte eso socialmente. EL PRÓXIMO DÍA, el eje " +
    "derecho, a quién se le concede el estatus y a quién se le niega.\n\n" +
    "El eje derecho es el punto de partida de la victimología cultural, que estudia la condición de " +
    "víctima como una construcción social hecha de prácticas rituales, artísticas y mediáticas.\n\n" +
    "APUNTE DE VOCABULARIO, que conviene dar ya: en el manual usamos VICTIMACIÓN, no " +
    "«victimización», aunque la RAE recoja las dos y ellas puedan usar la que quieran. No es manía " +
    "terminológica: insistir en el proceso es lo que permitirá distinguir después el daño del " +
    "delito del daño que añade la respuesta.",
});

// ·· Quién sufre: las regularidades — 9 min ································

P.afirmacion(d, {
  texto: "Hasta 1970 solo teníamos\nlo que la policía registraba.",
  sub: "Y eso mide la actividad de la policía tanto como el delito. La cifra negra.",
  size: 40,
  notas:
    "9 MIN — ¿QUIÉNES SON LAS VÍCTIMAS?\n\n" +
    "Ya lo vimos con el embudo en el capítulo del delito: las fuentes oficiales son el resultado de " +
    "la actividad burocrática de una administración. Miden la actuación de los cuerpos de " +
    "seguridad, su legitimidad institucional y la propensión de la ciudadanía a colaborar.\n\n" +
    "LO QUE CAMBIA TODO: las encuestas de victimación. Preguntar directamente a muestras " +
    "representativas si han sufrido delitos, con independencia de si los denunciaron. La National " +
    "Crime Survey estadounidense a principios de los setenta, la British Crime Survey en 1982.\n\n" +
    "No solo sacaron a la luz la magnitud de la cifra oculta: permitieron trazar por primera vez, " +
    "con base empírica independiente, el perfil de quién sufre delitos.\n\n" +
    "PARA LA LECTURA: el capítulo tiene un cuadro sobre por qué unos delitos se denuncian y otros " +
    "no. Lo que más pesa es la gravedad; se denuncia mucho menos cuando el agresor es conocido o la " +
    "pareja; y en el sur de Europa, España incluida, la desigualdad socioeconómica opera como " +
    "barrera de acceso a la policía. Merece que lo lean.",
});

P.wooclap(d, {
  tipo: "ELECCIÓN MÚLTIPLE",
  pregunta: "¿Quién tiene más probabilidad\nde sufrir un delito violento?",
  opciones: [
    "Una mujer mayor que vive sola",
    "Un hombre joven que sale mucho",
    "Una familia de clase media",
    "Se reparte más o menos por igual",
  ],
  notas:
    "W1 · LA RESPUESTA CORRECTA ES LA B.\n\n" +
    "El aula suele votar A, porque la víctima que tenemos en la cabeza es la anciana indefensa. Y " +
    "esa intuición es exactamente la «víctima ideal» de Christie, que es el tema del próximo día. " +
    "Merece la pena anunciarlo así: «guardad esta votación, porque el segundo día vamos a descubrir " +
    "de dónde sale».\n\n" +
    "El perfil que encontraron las encuestas: personas jóvenes, varones, residentes en áreas " +
    "urbanas, con hábitos que implican pasar más tiempo fuera del hogar. Y de forma transversal, la " +
    "victimación se concentra en los estratos con menos recursos.\n\n" +
    "Es una regularidad estadística persistente entre países y periodos, así que exigía una " +
    "explicación teórica. Eso es lo que viene.\n\n" +
    "OJO: quien votó A no está del todo equivocada respecto al MIEDO al delito, que sí es mayor " +
    "entre mujeres y mayores. La paradoja entre riesgo objetivo y miedo se ve en otro capítulo, " +
    "pero si sale, vale la pena nombrarla.",
});

P.figuraAlta(d, {
  titulo: "El riesgo, por\nnivel de análisis",
  quéMirar:
    "No es solo cuestión de qué clase de persona eres. Hay factores del hogar, del barrio y del " +
    "país, y se acumulan.",
  rel: "images/factores-riesgo-victimizacion.png",
  w: 4.55, h: 5.99,
  fuente: "Elaboración propia a partir de Lauritsen y Rezey (2018).",
  notas:
    "NO SACRIFICABLE: visualización de datos.\n\n" +
    "Los cuatro bloques —individual, hogar y familia, comunidad, país y territorio— son el mapa de " +
    "todo el bloque y conviene señalarlos con el dedo sin leerlos.\n\n" +
    "LA IDEA QUE HAY QUE DEJAR: la victimación no se distribuye al azar, y no se explica en un solo " +
    "nivel. Si solo miras el individual, acabas en el consejo «cambia de hábitos», que es donde " +
    "termina la diapositiva de la responsabilización dentro de un rato.",
});

P.afirmacion(d, {
  texto: "Depende de cuánto\nte expones al encuentro.",
  sub: "Teoría del estilo de vida: Hindelang, Gottfredson y Garofalo, 1978.",
  size: 44,
  notas:
    "La primera explicación de esas regularidades, formulada por criminólogos ligados al desarrollo " +
    "inicial de las encuestas.\n\n" +
    "El razonamiento es simple y elegante: si un delito necesita que se encuentren alguien " +
    "dispuesto a cometerlo y alguien a quien cometérselo, la probabilidad de ser víctima depende de " +
    "cuánto te expones a ese encuentro. Del perfil demográfico se infería que sus rutinas —a qué " +
    "hora salen, por dónde se mueven, con quién, en qué trabajan— los sitúan a distinta distancia " +
    "de los agresores potenciales.\n\n" +
    "EL REFINAMIENTO CONTEMPORÁNEO, que es lo interesante: lo decisivo no es el volumen bruto de " +
    "exposición sino su CALIDAD. Estar fuera de casa no basta; importa a qué situaciones y " +
    "compañías te asoman tus rutinas. Hay entornos inocuos y entornos criminógenos.\n\n" +
    "Y converge con las actividades rutinarias de Cohen y Felson, que ya vimos en el capítulo del " +
    "delito: agresor motivado, objetivo adecuado, ausencia de guardián capaz. Aquí la víctima es el " +
    "objetivo adecuado, o quien lo porta.",
});

P.figuraAlta(d, {
  titulo: "Cada persona,\ncomparada consigo misma",
  quéMirar:
    "Reconstruyeron hora a hora dónde estuvo cada joven el día de la agresión. Con cada uno como su " +
    "propio control, la edad y la personalidad dejan de contar: solo queda el contexto.",
  rel: "images/risk.jpg",
  w: 5.3, h: 4.79,
  fuente: "Wiebe et al. (2016), Epidemiology 27(1), figura 1. Jóvenes agredidos y controles, Filadelfia.",
  notas:
    "NO SACRIFICABLE: visualización de datos. Y es la mejor del capítulo para enseñar diseño de " +
    "investigación.\n\n" +
    "EXPLICAR EL DISEÑO DE CASO CRUZADO, que es lo que la hace valiosa: comparar a cada participante " +
    "consigo mismo en distintos momentos de la misma jornada. Así se descarta la influencia de la " +
    "edad, el sexo o la personalidad, y se aísla el impacto del contexto situacional. Es una forma " +
    "muy limpia de separar «qué clase de persona eres» de «dónde estabas».\n\n" +
    "Lo que aumentaba el riesgo: estar en espacios públicos en actividades no estructuradas, la " +
    "ausencia de guardianes, y transitar por zonas con edificios abandonados, violencia previa y " +
    "desorden físico.\n\n" +
    "Si va sobrado de tiempo, la pregunta buena: ¿esto explica por qué unos jóvenes se agreden y " +
    "otros no, o solo dónde y cuándo? Prepara la diapositiva siguiente.",
});

P.afirmacion(d, {
  texto: "Pero hay un caso\nque lo rompe todo.",
  sub: "La violencia machista ocurre en casa, con quien convives, y de forma recurrente.",
  size: 44,
  notas:
    "LA DIAPOSITIVA IMPORTANTE DEL BLOQUE. No pasar de largo.\n\n" +
    "El retrato que sale del estilo de vida y las actividades rutinarias —exposición nocturna, " +
    "agresor desconocido, la calle— explica muy mal la victimación más grave que sufre la mitad de " +
    "la población.\n\n" +
    "Una mujer que sufre violencia de género no es victimizada por «exponerse» a riesgos en el " +
    "espacio público ante extraños. Es agredida en su propio hogar, por la persona con quien " +
    "convive, de forma recurrente, en el espacio que estas teorías presumen SEGURO.\n\n" +
    "Y el remate, que suele provocar un silencio útil en el aula: paradójicamente, quien debería " +
    "actuar como «guardián capaz» es el propio agresor.\n\n" +
    "Toda teoría de la oportunidad que ignore esto adolece de un sesgo explicativo estructural. No " +
    "es un matiz: es una limitación de fondo de dos de las teorías más influyentes de la disciplina.",
});

// ·· Exposición, responsabilización, desigualdad — 5 min ···················

P.dosColumnas(d, {
  titulo: "Dos planos que no se pueden confundir",
  cols: [
    {
      rotulo: "Exposición situacional",
      lineas: [
        "Ciertas rutinas aumentan la",
        "probabilidad estadística de",
        "coincidir con alguien dispuesto",
        "a cometer un delito.",
      ],
    },
    {
      rotulo: "Responsabilidad moral y penal",
      lineas: [
        "La autoría y la culpa recaen",
        "de forma exclusiva sobre quien",
        "decide agredir.",
        "Sin reparto posible.",
      ],
    },
  ],
  notas:
    "5 MIN — EXPOSICIÓN, RESPONSABILIZACIÓN Y DESIGUALDAD.\n\n" +
    "Del «esta rutina aumenta la exposición» al «pues haber cambiado de rutina» hay un paso, y este " +
    "es el bloque que impide darlo.\n\n" +
    "El ejemplo del capítulo, que funciona: una mujer joven que sale de un local de ocio nocturno " +
    "ha decidido salir a divertirse; en ningún caso ha decidido ser agredida. Su rutina explica, a " +
    "lo sumo, la convergencia situacional del encuentro; nunca la agresión.\n\n" +
    "Entre la oportunidad ambiental y la consumación del delito media siempre una voluntad que opta " +
    "por quebrantar la ley, y esa decisión es la única causa eficiente del daño.\n\n" +
    "PARA LA LECTURA hay un cuadro excelente sobre cuando la prevención responsabiliza: el " +
    "«trabajo de seguridad» que las mujeres ya hacen a diario, y el efecto más sutil, que el " +
    "consejo preventivo cambia quién cuenta como víctima creíble —ya no la inocente, sino la que " +
    "además gestionó bien su riesgo. Y un dato que desmonta el tópico: para las mujeres el hogar es " +
    "más peligroso que la vía pública.",
});

P.figura(d, {
  titulo: "¿A quién se le pide que cambie?",
  rel: "images/responsabilizacion.png",
  w: 7.2, h: 4.8,
  fuente: "Imagen generada con ChatGPT.",
  notas:
    "Veinte segundos. La pancarta hace el trabajo: «vivimos en una sociedad que enseña a las " +
    "mujeres a cuidarse de no ser violadas en vez de enseñar a los hombres a no violar». Dejar que " +
    "la lean y no glosarla.\n\n" +
    "Si el aula reacciona, aprovechar para el matiz honesto: la propia tradición que formuló estas " +
    "teorías se defiende diciendo que reducir oportunidades no es culpar a nadie, y que una campaña " +
    "se dirige a la ciudadanía respetuosa de la ley porque es más fácil de persuadir que un agresor " +
    "decidido. No es un argumento ridículo.\n\n" +
    "La salida que propone el capítulo tampoco es renunciar a toda prevención: cabe reconocer que " +
    "una conducta redujo CAUSALMENTE el riesgo sin cargar a la víctima con la responsabilidad MORAL " +
    "del delito. Pero la carga de acabar con la violencia machista recae sobre quien la ejerce, no " +
    "sobre quien tiene que vivir esquivándola.",
});

P.afirmacion(d, {
  texto: "El estilo de vida no es\nun catálogo de preferencias.",
  sub: "Quien limpia oficinas de madrugada no ha elegido ese riesgo: lo impone su posición material.",
  size: 40,
  notas:
    "El giro de justicia social, y el que conecta este capítulo con toda la tercera parte del " +
    "manual.\n\n" +
    "Los ejemplos del capítulo, que conviene dar los tres porque son concretos: quien limpia " +
    "oficinas en turnos de madrugada; quien reside en un barrio marginalizado porque no puede " +
    "costearse otra vivienda; quien carece de vehículo y depende de un transporte público " +
    "deficitario. Asumen un riesgo objetivo derivado de su posición material, no de su voluntad.\n\n" +
    "Y la consecuencia: quien querría reorganizar sus rutinas a menudo carece de medios para " +
    "hacerlo. En las comunidades más precarizadas la capacidad de alterar los patrones cotidianos " +
    "de riesgo es mínima, lo que alimenta la revictimación de forma sistemática.\n\n" +
    "ANUNCIAR EL MAPA: la probabilidad y la concentración de la victimación siguen las fracturas de " +
    "la clase social (cap. 10), el género (cap. 11) y la etnicidad (cap. 12). Los mismos grupos con " +
    "menos capacidad de elegir dónde viven y por dónde se mueven son los más expuestos Y los que " +
    "más barreras encuentran para que se les reconozca el estatus de víctima. Ese doble filo es el " +
    "hilo que une las dos sesiones.",
});

// ·· La concentración de la victimación — 8 min ····························

P.rejilla(d, {
  titulo: "La victimación se concentra",
  sub: "Pocas personas y pocos lugares soportan una parte desproporcionada de todos los delitos.",
  items: [
    { etiqueta: "Repetida", sub: "El mismo tipo de daño,\nvarias veces.\nTres robos en la vivienda." },
    { etiqueta: "Polivictimación", sub: "Distintos tipos, en varios\námbitos de la vida.\nAcoso, casa y barrio." },
    { etiqueta: "Abuso crónico", sub: "Una sola forma de daño,\nprolongada en el tiempo.\nEl control coercitivo." },
  ],
  notas:
    "8 MIN — LA CONCENTRACIÓN.\n\n" +
    "La tabla del capítulo. Es vocabulario técnico que se confunde constantemente, así que merece " +
    "la pena fijarlo bien y con los ejemplos.\n\n" +
    "DATO CURIOSO Y ÚTIL: cada una de las tres se estudió desde una tradición distinta. La repetida, " +
    "por los teóricos de la prevención situacional estudiando robos en pisos. La polivictimación, " +
    "por psicólogos de la victimación infantil. El abuso crónico, por investigadoras feministas que " +
    "estudiaban la violencia machista en la pareja. Tres comunidades científicas que apenas se " +
    "hablaban describiendo el mismo fenómeno de fondo.\n\n" +
    "A nivel espacial ya lo vimos: la ley de la concentración del delito, Weisburd. En las personas " +
    "y los hogares opera algo análogo.",
});

P.dosColumnas(d, {
  titulo: "Por qué se repite",
  cols: [
    {
      rotulo: "Señalización · flag",
      lineas: [
        "El primer delito solo «señala»",
        "un objetivo que ya era idóneo.",
        "Las condiciones que lo hacían",
        "vulnerable siguen ahí.",
      ],
    },
    {
      rotulo: "Impulso · boost",
      lineas: [
        "El delito facilita los siguientes.",
        "El agresor ya sabe qué vías de",
        "escape funcionan y qué alarmas",
        "faltan. Le cuesta menos volver.",
      ],
    },
  ],
  notas:
    "Los dos mecanismos son complementarios, no rivales. En la mayoría de los casos operan los dos.\n\n" +
    "La distinción importa para la prevención: si es flag, hay que cambiar las condiciones " +
    "estructurales del objetivo. Si es boost, hay que actuar rápido, antes de que el agresor " +
    "aproveche lo que aprendió.\n\n" +
    "Es de Ken Pease, criminólogo británico, y de la tradición de la prevención situacional que " +
    "veremos en el último capítulo.",
});

P.datoGrande(d, {
  cifra: "48 h",
  unidad: "la ventana en que se\nconcentra buena parte\nde las repeticiones",
  glosa:
    "El riesgo se dispara justo después del primer incidente y decae con las semanas. En el robo " +
    "en vivienda, entre las primeras 48 y 72 horas.",
  notas:
    "LA FIRMA TEMPORAL de la victimación repetida, y el dato con más aplicación práctica del bloque.\n\n" +
    "La consecuencia es directa y conviene enunciarla: la víctima reciente es un objetivo de " +
    "protección prioritario CON FECHA DE CADUCIDAD. La intervención tiene que ser inmediata o no " +
    "sirve.\n\n" +
    "La evidencia: el Proyecto Kirkholt en el Reino Unido concentró medidas de seguridad y apoyo " +
    "comunitario en hogares recién asaltados y redujo los robos a menos de la mitad. Las revisiones " +
    "sistemáticas posteriores dan descensos medios cercanos al 20 %.\n\n" +
    "PERO el capítulo advierte de los riesgos éticos, y merece decirse: aplicada sin criterio, esta " +
    "lógica justifica la sospecha y la sobrevigilancia permanente sobre los mismos colectivos y " +
    "barrios. La concentración del delito puede servir para proteger a las personas o para " +
    "estigmatizarlas.\n\n" +
    "Y la métrica de «incidentes aislados» es insuficiente para la violencia acumulativa y " +
    "continuada, que es justo lo que viene ahora.\n\n" +
    "SACRIFICABLE: la polivictimación de Finkelhor, si voy con retraso, se despacha en una frase " +
    "desde la diapositiva de las tres formas.",
});

P.figura(d, {
  titulo: "El control coercitivo",
  quéMirar: "La agresión física, cuando la hay, no es el daño: es el recordatorio que sostiene todo lo demás.",
  rel: "images/coercivecontrol.png",
  w: 7.2, h: 4.8,
  fuente: "Imagen generada con ChatGPT.",
  notas:
    "El concepto de Evan Stark, y probablemente lo más importante de la sesión.\n\n" +
    "ARRANCAR CON LA PREGUNTA DEL CAPÍTULO: si a «¿cuándo se victimiza a una mujer maltratada?» " +
    "respondiéramos «el día en que él la golpeó», habríamos omitido la dimensión estructural del " +
    "fenómeno.\n\n" +
    "El control coercitivo es un patrón sostenido de dominación que articula intimidación " +
    "psicológica, aislamiento social —fracturar las redes familiares, de amistad o laborales—, " +
    "vigilancia constante y microrregulación de la vida cotidiana: horarios, vestimenta, autonomía " +
    "económica, comunicaciones.\n\n" +
    "No es una secuencia de incidentes lesivos intercalados con periodos de calma. Es una condición " +
    "de sometimiento continuo.",
});

P.afirmacion(d, {
  texto: "Un derecho penal que\njuzga episodios fechados.",
  sub: "Reconstruir una atmósfera de dominio prolongada es mucho más difícil que acreditar una lesión.",
  size: 40,
  notas:
    "El choque estructural, y donde el capítulo se pone más incómodo.\n\n" +
    "Buena parte de la dificultad es probatoria: acreditar ante un tribunal pautas de conducta que, " +
    "analizadas por separado, pueden parecer inocuas.\n\n" +
    "DERECHO COMPARADO: Reino Unido tipificó el control coercitivo como delito autónomo en 2015, " +
    "Irlanda en 2018. España no tiene un tipo con ese nombre, pero no está desarmada: el art. 173.2 " +
    "CP castiga la violencia habitual, física o psíquica, y el Tribunal Supremo lo interpreta no " +
    "como una suma de agresiones sino como la instauración de un clima de dominación y humillación " +
    "permanente. Es, en el fondo, el núcleo del control coercitivo.\n\n" +
    "Si una tipificación específica aportaría garantías adicionales frente a las formas sutiles de " +
    "dominación psicológica o económica sigue siendo un debate abierto.\n\n" +
    "PARA LA LECTURA, Y ES IMPORTANTE: el capítulo trae el caso de Laura Cruz, la guardia civil " +
    "asesinada por su expareja en agosto de 2026, como evidencia del fracaso del sistema. Doce años " +
    "de acoso, 45 denuncias instrumentales, violencia económica, y una Audiencia que atomizó todo " +
    "eso en dos episodios sueltos al no apreciar «clima continuado de dominación». Y después " +
    "denegó la orden de protección porque «no constaba objetivado ningún otro episodio lesivo». Es " +
    "un caso reciente, español y durísimo: mandadlo leer, y decidid vosotras si lo lleváis al aula " +
    "o lo dejáis en la lectura.",
});

// ·· El solapamiento víctima-infractor — 5 min ·····························

P.afirmacion(d, {
  texto: "Víctimas y agresores no son\ndos colectivos separados.",
  sub: "Aunque les dediquemos capítulos distintos en el manual.",
  size: 42,
  notas:
    "5 MIN — EL SOLAPAMIENTO VÍCTIMA-INFRACTOR.\n\n" +
    "Reconocer el chiste del capítulo: hasta aquí hemos asumido implícitamente que son dos grupos " +
    "nítidos, después de todo les dedicamos capítulos distintos. La realidad empírica lo desmiente.\n\n" +
    "Quienes cometen delitos tienen una probabilidad sustancialmente mayor de sufrir " +
    "victimizaciones, y a la inversa. Es un patrón tan replicado en distintas épocas y países que " +
    "se considera uno de los hechos empíricos básicos de la disciplina.\n\n" +
    "DONDE SE VE MÁS CRUDO: el homicidio. Alrededor de la mitad de las víctimas mortales, y más de " +
    "la mitad de los agresores, acumulaban antecedentes previos. Las víctimas de homicidio tienen " +
    "entre cuatro y diez veces más probabilidades de haber sido arrestadas que la población " +
    "general.",
});

P.figura(d, {
  titulo: "Cuánto se solapan, según el delito",
  quéMirar: "Quince veces más probable en los delitos violentos. Cuatro en los delitos contra la propiedad.",
  rel: "images/solapamiento-odds-ratios_1.png",
  w: 8.4, h: 4.5,
  fuente:
    "Elaboración propia a partir de Wittebrood y Nieuwbeerta (1999), recogido en Jennings, Piquero " +
    "y Reingle (2012). Razones de probabilidad.",
  notas:
    "NO SACRIFICABLE: visualización de datos.\n\n" +
    "El solapamiento no es universal ni homogéneo, y la figura lo demuestra: 15,21 en delitos " +
    "violentos, 12,93 en vandalismo, 3,90 en delitos contra la propiedad.\n\n" +
    "LAS DOS CAUTELAS QUE HAY QUE DAR SIEMPRE CON ESTE DATO:\n" +
    "· La inmensa mayoría de las víctimas nunca ha cometido un delito. La categoría más numerosa en " +
    "la población es siempre «solo víctimas».\n" +
    "· Una fracción sustancial de quienes mueren asesinados no tiene ningún historial previo.\n\n" +
    "En población general el grupo víctima-infractor es pequeño —en torno al 7 % en un estudio " +
    "sueco reciente— pero concentra un riesgo desproporcionado.",
});

P.rejilla(d, {
  titulo: "Por qué se solapan",
  items: [
    { etiqueta: "Desventaja compartida", sub: "Los mismos determinantes\nsociales y biográficos\nde exclusión." },
    { etiqueta: "Los mismos sitios", sub: "Las rutinas de riesgo\nexponen a las dos cosas\na la vez." },
    { etiqueta: "El trauma sin reparar", sub: "La victimación temprana\nabre trayectorias de\nrevictimación y de delito." },
  ],
  notas:
    "Las dos primeras son la explicación clásica. La tercera es el puente conceptual que viene de la " +
    "investigación sobre adversidad y maltrato infantil.\n\n" +
    "Sobre el trauma, y con cuidado: la asociación no es mecánica ni inevitable. La mayoría de " +
    "quienes sufrieron abuso NO delinquen. Pero sí lo bastante como para sospechar que algo se " +
    "transmite y se repite cuando el daño queda sin reparar.\n\n" +
    "PARA LA LECTURA, un cuadro estupendo sobre los pathways feministas: Kathleen Daly y las " +
    "«mujeres dañadas que dañan», Gilfus y el tránsito «de víctimas a supervivientes y de " +
    "supervivientes a infractoras», y Beth Richie con el «atrapamiento de género». La tesis: el " +
    "Estado con frecuencia criminaliza la respuesta de las mujeres a la violencia que sufren, " +
    "porque las estrategias para escapar —la fuga del hogar, la calle, las sustancias, el trabajo " +
    "sexual de subsistencia— son las que precipitan el contacto con el sistema penal.\n\n" +
    "Y la advertencia de la propia Daly, que conviene repetir: no convertirlo en un «tejido sin " +
    "costuras» que diluya la agencia y la responsabilidad moral de las mujeres.",
});

P.dosColumnas(d, {
  titulo: "Dos cosas que el solapamiento NO significa",
  cols: [
    {
      rotulo: "Sobre la causalidad",
      lineas: [
        "No significa que la víctima",
        "fuera «en el fondo» delincuente,",
        "ni que sea responsable",
        "de su daño.",
      ],
    },
    {
      rotulo: "Sobre el reconocimiento",
      lineas: [
        "Pero sí explica por qué a",
        "ciertas víctimas no se las cree.",
        "Quien estuvo del otro lado",
        "queda descalificada de antemano.",
      ],
    },
  ],
  notas:
    "LA BISAGRA ENTRE LAS DOS SESIONES. No saltársela: es lo que hace que el segundo día tenga " +
    "sentido.\n\n" +
    "El plano de los hechos —quién sufre y quién ofende— y el plano del reconocimiento —a quién se " +
    "cree— son distintos. Pero se tocan.\n\n" +
    "Si para ser reconocida como víctima hace falta una biografía impecable, quien alguna vez " +
    "estuvo del otro lado de la ley queda descalificada por real que sea su daño. «No era ninguna " +
    "santa.»\n\n" +
    "Anunciar el próximo día con esa frase exacta. Funciona.",
});

P.actividad(d, {
  rotulo: "ACTIVIDAD · SESIÓN 1 · 15 MIN",
  titulo: "¿Por qué esta persona\ny no otra?",
  pasos: [
    "Grupos pequeños. A cada uno, un perfil: quién es, dónde vive, en qué trabaja.",
    "¿Qué factores de riesgo acumula, y en qué nivel: individual, hogar, barrio, país?",
    "¿Cuáles podría cambiar esa persona? ¿Y cuáles no dependen de ella?",
  ],
  notas:
    "Aterriza la figura de los cuatro niveles y desactiva de paso la responsabilización.\n\n" +
    "PERFILES QUE FUNCIONAN, con el riesgo repartido en niveles distintos:\n" +
    "· Una limpiadora que sale del turno de noche a las 6 y depende del autobús.\n" +
    "· Un chaval de 17 que queda con amigos en un parque sin iluminar.\n" +
    "· Una mujer que convive con su pareja en un piso de propiedad compartida.\n" +
    "· Un repartidor a domicilio con la moto y el teléfono a la vista.\n" +
    "· Una mujer migrante en situación administrativa irregular.\n\n" +
    "LO QUE TIENE QUE SALIR EN LA TERCERA PREGUNTA, que es la buena: la lista de lo que NO depende " +
    "de la persona es casi siempre más larga que la otra, y crece cuanto más precario es el perfil. " +
    "Ahí es donde ven con las manos que el estilo de vida no es un catálogo de preferencias.\n\n" +
    "El caso de la pareja es el que rompe el ejercicio, y conviene dejar que lo descubran: ninguno " +
    "de los factores de exposición clásicos sirve, porque el riesgo está dentro de casa.\n\n" +
    "Si sobra tiempo: ¿a cuál de estas personas creeríais más si os contara que ha sufrido un " +
    "delito? Deja plantado el segundo día.",
});

P.cierre(d, {
  frase: "Hoy: quién sufre.\nEl próximo día: quién cuenta.",
  remate: "Porque haber sufrido un daño y ser reconocida como víctima son dos cosas distintas.",
  notas:
    "Cierre de la sesión 1 y puente a la 2.\n\n" +
    "Recapitular en tres frases: (1) la víctima no se descubrió, se la había expropiado; (2) la " +
    "victimación no se reparte al azar, sino siguiendo las fracturas de clase, género y origen; " +
    "(3) se concentra en pocas personas, y víctimas y agresores se solapan más de lo que nos " +
    "gusta.\n\n" +
    "Para leer antes del próximo día: los cuadros que no hemos cubierto —por qué unos delitos se " +
    "denuncian y otros no, cuando la prevención responsabiliza, los pathways feministas y el caso " +
    "de Laura Cruz.",
});

// ###########################################################################
//  SESIÓN 2 — Quién cuenta
// ###########################################################################

P.portada(d, {
  cintillo: "CAPÍTULO 7  ·  SESIÓN 2 DE 2",
  titulo: "Quién cuenta\ncomo víctima",
  autoria: "Juan José Medina Ariza",
  notas:
    "SESIÓN 2. ~35 min de exposición + actividad.\n\n" +
    "Reparto: el pecado original (7) · la corrección feminista (6) · la víctima ideal (8) · la " +
    "victimación secundaria y el reparto del daño (8) · las respuestas (6).\n\n" +
    "SACRIFICABLE: el bloque de «¿víctimas de qué?» y la parte de asistencia, que se pueden " +
    "resumir en una frase cada uno. Las dos figuras de datos NO se sacrifican.\n\n" +
    "ARRANQUE, dos minutos: el día anterior vimos que la victimación no se reparte al azar. Hoy la " +
    "pregunta es otra y es política: de entre quienes sufren un daño, ¿a quién reconocemos como " +
    "víctima? Recordar la votación del Wooclap del primer día: casi todos dijisteis «una mujer " +
    "mayor». Hoy vamos a ver de dónde sale esa intuición.",
});

// ·· El pecado original — 7 min ············································

P.afirmacion(d, {
  texto: "La victimología no preguntó\nqué le pasa a la víctima.\nPreguntó qué tiene.",
  sub: "Qué rasgos o qué conductas la hacen más propensa a acabar siéndolo.",
  size: 38,
  notas:
    "7 MIN — EL PECADO ORIGINAL.\n\n" +
    "Cuando la victimología se constituye como campo, a mediados del siglo XX, sus fundadores " +
    "hicieron la pregunta equivocada. Y no es una anécdota: lastró la disciplina durante décadas.\n\n" +
    "· Hans von Hentig, El criminal y su víctima (1948): piensa el delito como una relación entre " +
    "quien agrede y quien es agredido, y propone TIPOLOGÍAS de víctimas —la joven, la mayor, la " +
    "deprimida, la «nata».\n" +
    "· Benjamin Mendelsohn, a quien se atribuye el propio término victimología, las ordena por " +
    "GRADO DE CULPABILIDAD, en una escala que va de la «completamente inocente» a la «más culpable " +
    "que el propio infractor».\n\n" +
    "Leer esa última categoría en voz alta y dejar que cale.",
});

P.figura(d, {
  titulo: "La precipitación victimal",
  quéMirar: "La premisa: que la persona agraviada «contribuye» o «desencadena» el delito que padece.",
  rel: "images/goya_9.jpg",
  w: 6.4, h: 4.71,
  fuente:
    "Francisco de Goya, No quieren, estampa 9 de Los desastres de la guerra, ca. 1810-1814. " +
    "Dominio público.",
  notas:
    "EL CONCEPTO QUE LASTRÓ LA DISCIPLINA.\n\n" +
    "EN SU ORIGEN ERA ACOTADO Y DEFENDIBLE. Wolfgang, analizando homicidios en Filadelfia (1958), " +
    "definió el «homicidio precipitado por la víctima» como aquel en que quien acaba falleciendo " +
    "fue la primera en recurrir a la fuerza física letal: exhibió un arma o asestó el primer golpe. " +
    "Describía la dinámica de una riña simétrica. No era un juicio moral sobre el valor de esa vida.\n\n" +
    "LA DISTORSIÓN llega al extrapolarlo. En 1971 Menachem Amir, discípulo de Wolfgang, publica un " +
    "estudio sobre la violación sosteniendo que parte de los casos eran «violaciones precipitadas " +
    "por la víctima»: mujeres que por su forma de vestir, de moverse o de estar en un lugar habrían " +
    "contribuido a su propia agresión.\n\n" +
    "Y EL DETALLE QUE LO AGRAVA, que es el que quiero que retengan: la «precipitación» se medía por " +
    "lo que el AGRESOR había creído percibir, no por lo que la víctima había hecho. Culpabilización " +
    "de la víctima con barniz científico.\n\n" +
    "El grabado de Goya está aquí por su título, «No quieren». Señalarlo.",
});

P.afirmacion(d, {
  texto: "Y el sesgo sigue vivo.",
  sub: "Cambió de costuras: qué hacía ella allí, qué llevaba puesto, cuánto había bebido.",
  size: 44,
  notas:
    "Sería cómodo contar todo esto como un error del pasado ya superado. No lo es, y este es el " +
    "punto del bloque.\n\n" +
    "Reconocer el pecado original de la victimología no es ajustar cuentas con unos autores de los " +
    "años cuarenta: es aprender a detectar la misma operación cuando reaparece hoy, en una " +
    "sentencia, en un titular o en una conversación de bar.\n\n" +
    "Pedir al aula ejemplos recientes. Salen solos, y valen más que los míos.",
});

// ·· La corrección feminista — 6 min ·······································

P.afirmacion(d, {
  texto: "La pregunta cambia:\n¿por qué a unas víctimas\nse las cree y a otras no?",
  sub: "La criminología feminista desplaza el foco de la conducta de la víctima a las estructuras.",
  size: 38,
  notas:
    "6 MIN — LA CORRECCIÓN FEMINISTA. El giro que salva a la disciplina.\n\n" +
    "Frente al interrogante fundacional —¿qué hizo la víctima para provocar el hecho?— el feminismo " +
    "formula una pregunta radicalmente distinta: ¿por qué a unas víctimas se les otorga " +
    "credibilidad y amparo institucional, mientras a otras se las somete a sospecha?\n\n" +
    "Y despoja a la «precipitación victimal» de su halo técnico para denunciarla como lo que era: " +
    "culpabilización de la víctima.\n\n" +
    "No es casual que fuera la violencia contra las mujeres la que más frontalmente chocaba contra " +
    "el molde institucional de la víctima creíble.\n\n" +
    "PARA LA LECTURA hay un cuadro sobre qué es mirar con perspectiva feminista, y merece decir al " +
    "menos su punto de partida: el feminismo no es «hablar de mujeres» ni «defender a las mujeres». " +
    "Es partir de que el género organiza el poder. De ahí salen las cuatro consecuencias " +
    "victimológicas: visibilizar daños que se daban por privados, desplazar la pregunta hacia las " +
    "estructuras que deciden a quién se cree, desconfiar de categorías que dan por universal la " +
    "experiencia de unos pocos, y exigir prácticas que cambien eso.",
});

P.figura(d, {
  titulo: "Una batalla por la credibilidad",
  rel: "images/slut_shaming.jpg",
  w: 7.4, h: 4.65,
  fuente:
    "Marcha contra la culpabilización de las víctimas (SlutWalk), Edmonton, 2011. Foto: Hugh Lee, " +
    "CC BY-SA 2.0, vía Wikimedia Commons.",
  notas:
    "Veinte segundos.\n\n" +
    "Las SlutWalk nacen en 2011 después de que un policía de Toronto dijera a unas estudiantes que " +
    "«para evitar ser violadas, las mujeres deberían evitar vestirse como zorras». La respuesta fue " +
    "reapropiarse del insulto.\n\n" +
    "Es la precipitación victimal saliendo por la boca de un agente de policía cuarenta años " +
    "después de Amir. Por eso la diapositiva anterior decía que el sesgo sigue vivo.",
});

P.dosColumnas(d, {
  titulo: "Injusticia epistémica",
  cols: [
    {
      rotulo: "Testimonial",
      lineas: [
        "Darte menos credibilidad de la",
        "que mereces por un prejuicio",
        "sobre quién eres: tu sexo, tu",
        "clase, tu reputación, tu manera",
        "de contarlo.",
      ],
    },
    {
      rotulo: "Hermenéutica",
      lineas: [
        "No tener palabras ni marcos",
        "para nombrar lo que te ha",
        "pasado. Antes de que existiera",
        "«acoso sexual», quien lo sufría",
        "no tenía cómo decirlo.",
      ],
    },
  ],
  notas:
    "El concepto es de la filósofa Miranda Fricker (2007) y ordena todo el resto del capítulo. " +
    "Merece minuto y medio.\n\n" +
    "TESTIMONIAL: es lo que sufre la víctima de una agresión sexual a la que se cree menos porque " +
    "había bebido, porque tardó en denunciar, porque conocía a su agresor, o porque se fue a casa " +
    "del agresor tras una noche bailando.\n\n" +
    "HERMENÉUTICA: más abstracta y por eso más difícil de ver. Antes de que existieran expresiones " +
    "como «acoso sexual», «control coercitivo» o «violación por un conocido», quienes sufrían esas " +
    "situaciones apenas tenían vocabulario reconocido para hablar de ellas. Ni siquiera para sí " +
    "mismas. Que un daño no tenga nombre es una manera de que no cuente.\n\n" +
    "LA RELECTURA QUE ORDENA EL CAPÍTULO: la pregunta de la victimología positivista era injusticia " +
    "testimonial institucionalizada con pedigrí de categoría teórica. Y la crítica feminista fue, " +
    "en el fondo, una batalla política por la credibilidad y por las palabras.",
});

// ·· La víctima ideal — 8 min ··············································

P.wooclap(d, {
  tipo: "ELECCIÓN MÚLTIPLE",
  pregunta: "Las cuatro han sufrido una agresión\nsexual. ¿A cuál creería antes\nun tribunal?",
  opciones: [
    "Una desconocida asaltada en la calle",
    "Una mujer agredida por su pareja",
    "Una mujer que había bebido esa noche",
    "Una mujer en contexto de prostitución",
  ],
  notas:
    "W2 · NO HAY RESPUESTA «CORRECTA» EN SENTIDO NORMATIVO: LAS CUATRO MERECEN LA MISMA " +
    "CREDIBILIDAD. La respuesta descriptiva, la que la evidencia sostiene, es la A.\n\n" +
    "Y el aula lo acierta casi siempre, que es justo lo interesante. Señalarlo: «habéis contestado " +
    "todos lo mismo y muy deprisa, así que todos conocéis la regla aunque nadie os la haya " +
    "enseñado». Esa regla tiene nombre y es lo que viene ahora.\n\n" +
    "Formular la pregunta con cuidado: no es «¿a cuál creerías tú?» sino «¿a cuál creería un " +
    "tribunal?». La distancia entre las dos preguntas es el contenido del bloque, y preguntarlo en " +
    "primera persona pondría al aula a la defensiva sin ganar nada.\n\n" +
    "Si alguien vota B, C o D, preguntarle por qué. Suele dar un argumento sobre pruebas que abre " +
    "muy bien el tema probatorio.",
});

P.rejilla(d, {
  titulo: "La víctima ideal",
  sub: "Christie, 1986. Una anciana asaltada de día por un desconocido al volver de cuidar a su hermana.",
  items: [
    { etiqueta: "Débil", sub: "Vulnerabilidad física\nintrínseca." },
    { etiqueta: "Respetable", sub: "Hacía algo abnegado\ny encomiable." },
    { etiqueta: "Sin reproche", sub: "Lugar y hora\nirreprochables." },
    { etiqueta: "Sin vínculo", sub: "Ningún lazo previo\ncon el agresor." },
  ],
  notas:
    "8 MIN — LA VÍCTIMA IDEAL. El concepto central de la sesión.\n\n" +
    "No es una descripción de quién sufre delitos: es una descripción de quién recibe con más " +
    "facilidad el estatus pleno y legítimo de víctima. Los dos planos, otra vez.\n\n" +
    "Y RECUPERAR AQUÍ EL WOOCLAP DEL PRIMER DÍA: la mayoría votó «una mujer mayor que vive sola» " +
    "como la de más riesgo. Los datos decían que no. Pero esa figura es exactamente la víctima " +
    "ideal de Christie. Lo que el aula tenía en la cabeza no era una estimación de riesgo, era un " +
    "molde moral. Ese enlace entre las dos sesiones es el mejor momento de la clase: no " +
    "desperdiciarlo.",
});

P.afirmacion(d, {
  texto: "Y necesita un\nagresor ideal.",
  sub: "«Un hombre peligroso que viene de lejos». Los dos se construyen a la vez.",
  size: 44,
  notas:
    "La otra mitad del concepto, que se olvida a menudo.\n\n" +
    "Cuanto más monstruoso, ajeno y deshumanizado resulte el infractor, más nítida e incontestable " +
    "deviene la inocencia de quien padece el ataque.\n\n" +
    "POR QUÉ NOS GUSTA: la figura del «monstruo en el callejón» es reconfortante porque traza una " +
    "frontera clara y tranquilizadora entre el mal absoluto, externo y ajeno, y la comunidad " +
    "protegida. El problema es que la inmensa mayoría del daño delictivo real no ocurre en ese " +
    "escenario.\n\n" +
    "Enlazar con el capítulo del delincuente: es la misma operación que vimos allí con el " +
    "delincuente nato y el psicópata. Necesitamos que quien hace daño sea de otra especie.\n\n" +
    "Y LA PARADOJA DE PODER, que merece decirse: para ser reconocida como víctima ideal hay que ser " +
    "lo bastante vulnerable para suscitar compasión, pero a la vez disponer del capital social, " +
    "económico y emocional para alzar la voz, denunciar y sostener el desgaste del proceso. Con " +
    "demasiado poder dejas de inspirar empatía; con muy poco, no tienes agencia para reclamar nada.",
});

P.afirmacion(d, {
  texto: "La antivíctima ideal:\nla mujer maltratada\npor su pareja.",
  sub: "Conoce al agresor y convive con él, el daño es crónico, y encima: «¿por qué no se marchó antes?».",
  size: 38,
  notas:
    "En su experiencia se quiebran SIMULTÁNEAMENTE todos los requisitos del molde. Por eso es el " +
    "caso límite y por eso el capítulo vuelve a ella una y otra vez.\n\n" +
    "Susan Estrich acuñó «violación real» (real rape) para describir cómo el sistema penal y el " +
    "imaginario colectivo solo validaban plenamente las agresiones que calcaban la plantilla: " +
    "asaltante desconocido, violencia física extrema, vía pública nocturna, y una víctima que opuso " +
    "resistencia desesperada.\n\n" +
    "La evidencia desmiente el cliché: la abrumadora mayoría de las agresiones sexuales las cometen " +
    "personas conocidas —parejas, exparejas, amigos, familiares—, en espacios privados, mediante " +
    "intimidación ambiental o abuso de confianza.\n\n" +
    "Y AQUÍ LAS DOS INJUSTICIAS OPERAN AL UNÍSONO: se devalúa la credibilidad del testimonio " +
    "(testimonial) y, al no encajar el abuso en la imagen de lo que «cuenta» como agresión " +
    "legítima, la víctima carece de marcos para dar sentido a su propio agravio (hermenéutica).\n\n" +
    "Sumar el solapamiento del primer día: quien además tiene alguna mancha en el expediente queda " +
    "descalificada por partida doble.\n\n" +
    "PARA LA LECTURA: el cuadro sobre las mujeres en contextos de prostitución, otra antivíctima " +
    "ideal, con una cifra negra casi absoluta.",
});

P.figura(d, {
  titulo: "Nevenka Fernández",
  quéMirar: "Denunció en 2001 al alcalde de Ponferrada por acoso sexual. Ganó el juicio y tuvo que irse del país.",
  rel: "images/nevenka.jpg",
  w: 6.2, h: 4.74,
  fuente: "Mural en Ponferrada. Foto: Viascos, CC BY-SA 4.0, vía Wikimedia Commons.",
  notas:
    "El caso español que mejor ilustra el molde, y lo conocen por la película de Icíar Bollaín y " +
    "por el documental.\n\n" +
    "Ganó el juicio —fue la primera condena en España a un cargo público por acoso sexual— y aun " +
    "así tuvo que abandonar Ponferrada y después el país. Esa desproporción entre ganar en " +
    "el juzgado y perder en todo lo demás es exactamente el objeto de este bloque.\n\n" +
    "PARA LA LECTURA, el cuadro sobre la víctima ideal y la violencia sexual: la serie Inconcebible " +
    "sobre el caso de Mary Adler, a quien la policía presionó hasta hacerle firmar que se lo había " +
    "inventado; el juicio de La Manada, donde la defensa aportó el informe de un detective privado " +
    "que había seguido a la víctima para presentarla como alguien que «hacía vida normal», y el " +
    "tribunal lo admitió como prueba. Y la Operación Soteria en Inglaterra y Gales, que reorienta " +
    "la investigación policial para que deje de girar en torno a demostrar que la víctima no es " +
    "fiable y se centre en la conducta del sospechoso: más casos llegan a juicio.",
});

P.afirmacion(d, {
  texto: "¿Y víctimas de qué?",
  sub: "Hemos dado por sentada una frontera: la de la víctima del delito.",
  notas:
    "SACRIFICABLE si voy con retraso: se despacha en treinta segundos con la diapositiva siguiente.\n\n" +
    "Todo el bloque ha preguntado a quién, de entre quienes sufren un DELITO, se le concede el " +
    "estatus. ¿Por qué damos por sentado que la víctima es la del delito?\n\n" +
    "El propio Mendelsohn defendía una victimología general y autónoma, ocupada del sufrimiento " +
    "humano viniera de donde viniera: accidentes, catástrofes, el propio orden social.\n\n" +
    "Sandra Walklate y la victimología crítica ponen el poder en el centro: la etiqueta de víctima " +
    "no es neutra, la concede o la niega un aparato estatal con intereses propios, y por eso deja " +
    "fuera una y otra vez la violencia machista, el abuso de las empresas o el daño de la desidia " +
    "institucional.\n\n" +
    "Y la zemiología, que ya vimos en el capítulo del delito: mirar los daños —físicos, económicos, " +
    "psíquicos, ambientales— que producen el modelo económico, las empresas o las políticas " +
    "públicas, se llamen delito o no.",
});

P.figura(d, {
  titulo: "Víctimas que no cuentan",
  quéMirar: "Casi todo el daño ambiental es legal, o apenas está regulado. Por eso queda fuera.",
  rel: "images/oiled_bird.jpg",
  w: 7.2, h: 4.83,
  fuente:
    "Ave impregnada de fuel tras el hundimiento del Prestige, Galicia, 2002. Foto: Adela Leiro, " +
    "CC BY-SA 3.0, vía Wikimedia Commons.",
  notas:
    "La criminología verde se ocupa de las víctimas del daño ambiental, humanas y no humanas, " +
    "causadas por la contaminación, el cambio climático o la destrucción de hábitats.\n\n" +
    "Es la corriente que da el paso que ninguna otra había dado: contar como víctimas también a " +
    "otras especies y a los propios ecosistemas.\n\n" +
    "El Prestige funciona bien en un aula española porque lo tienen oído en casa. Preguntar quién " +
    "fue la víctima del Prestige: los mariscadores, los voluntarios, la costa, el ave de la foto. " +
    "Ninguna de esas respuestas cabe en el Estatuto de la víctima del delito.",
});

// ·· La victimación secundaria y el reparto del daño — 8 min ···············

P.dosColumnas(d, {
  titulo: "El daño tiene dos momentos",
  cols: [
    {
      rotulo: "Victimación primaria",
      lineas: [
        "El daño que causa",
        "directamente el delito.",
        "La lesión, la pérdida,",
        "el miedo.",
      ],
    },
    {
      rotulo: "Victimación secundaria",
      lineas: [
        "El daño AÑADIDO por cómo",
        "responden quienes deberían",
        "ayudar. La policía, el juzgado,",
        "el entorno, los medios.",
      ],
    },
  ],
  notas:
    "8 MIN — LA VICTIMACIÓN SECUNDARIA Y EL REPARTO DEL DAÑO.\n\n" +
    "Es donde aterriza el «la victimación es un proceso» del primer día. Las consecuencias no se " +
    "detienen cuando termina el hecho delictivo.\n\n" +
    "Ejemplos concretos: la policía que la interroga como si mintiera; el juzgado que la obliga a " +
    "narrar una y otra vez lo peor de su vida; el entorno que cotillea; los medios que construyen " +
    "un relato parcial para atraer audiencias.\n\n" +
    "PARA LA LECTURA: hay quien añade una «victimación terciaria», la huella a largo plazo. El " +
    "manual no la usa porque entiende que la idea de proceso ya incluye ese después. Se menciona " +
    "para que reconozcan el término si se lo encuentran.",
});

P.afirmacion(d, {
  texto: "No es «más trauma».\nEs una vulneración\nde derechos.",
  sub: "Llamarlo daño psicológico abre la puerta a apartar a la víctima del proceso «por su bien».",
  size: 40,
  notas:
    "El matiz conceptual del bloque, y es más importante de lo que parece.\n\n" +
    "En los inicios del campo era habitual describir la victimación secundaria como «más trauma»: " +
    "el sistema agravaba el daño psicológico. Eso reduce lo que en esencia es una vulneración de " +
    "derechos a un estado anímico, y abre la puerta a un paternalismo institucional que usa el " +
    "«riesgo de revictimación» como pretexto para apartar a la víctima del procedimiento.\n\n" +
    "Es más preciso conceptualizarla como una forma estructural de INJUSTICIA EPISTÉMICA: se " +
    "devalúa su credibilidad, se desestima su relato, se prescinde de su participación, o se le " +
    "niegan los recursos interpretativos para articular el daño.\n\n" +
    "Y EL DIAGNÓSTICO ESTRUCTURAL, que cierra el círculo con el bloque anterior: esta hostilidad no " +
    "son incidentes aislados ni falta de sensibilidad de un funcionario concreto. El sistema legal " +
    "lleva incorporado el modelo de la víctima ideal. La victimación secundaria es lo que ocurre, " +
    "de forma sistemática, cuando una víctima real choca con un molde que no la contempla.",
});

P.figura(d, {
  titulo: "De cada cien víctimas, siete vieron una condena",
  quéMirar: "Cuarenta y una se lo contaron a un adulto. Veintiuna denunciaron. Siete obtuvieron condena.",
  rel: "images/embudo-denuncia-abusos.png",
  w: 8.2, h: 4.82,
  fuente:
    "Elaboración propia a partir de Defensor del Pueblo (2023), Informe sobre los abusos sexuales " +
    "en el ámbito de la Iglesia católica, pp. 179-180.",
  notas:
    "NO SACRIFICABLE: visualización de datos. Y es el caso de estudio del bloque.\n\n" +
    "POR QUÉ ES REVELADOR: sobre el papel, un menor encarna de forma casi arquetípica la víctima " +
    "ideal —fragilidad, indefensión, ausencia total de responsabilidad. Y aun así operaron barreras " +
    "que silenciaron la victimación primaria e infligieron una severa victimación secundaria. Esto " +
    "demuestra que el molde no basta: hace falta también poder.\n\n" +
    "Qué pasó: el prestigio del sacerdote, que «representa la voz de Dios», y el peso de la " +
    "institución. Negación de los hechos, minimización del daño, traslado de clérigos a destinos " +
    "donde a veces seguían en contacto con menores, y a veces culpabilización de quien hablaba. El " +
    "informe lo llama traición de la confianza institucional.\n\n" +
    "EL DATO BIOGRÁFICO QUE MÁS IMPRESIONA: media de trece años al sufrir las agresiones, y más de " +
    "cuarenta y dos al encontrar las condiciones para verbalizarlas. Casi treinta años. Por eso el " +
    "debate sobre la prescripción es tan complejo: frente al plazo procesal, las víctimas oponen " +
    "que el derecho a la verdad y a la reparación no prescribe.\n\n" +
    "Y EL DETALLE DE INJUSTICIA TESTIMONIAL, que es el mejor del capítulo: los síntomas del trauma " +
    "—la disociación, que hace que la víctima se muestre insegura, confusa y dubitativa al " +
    "declarar— se leen en sede judicial no como huella de la victimación, sino como indicio de que " +
    "el relato es poco creíble. Lo que debería reforzar su credibilidad se usa para restársela.",
});

P.afirmacion(d, {
  texto: "El daño no es una propiedad\ndel delito. Lo es de la situación\nde quien lo sufre.",
  sub: "El delito no cuesta lo que cuesta el objeto: cuesta lo que le cuesta absorberlo a quien lo sufre.",
  size: 34,
  notas:
    "El giro de la sección, y va contra cómo lo cuentan casi todos los manuales de victimología, que " +
    "se limitan a dos catálogos: cifras macroeconómicas y secuelas clínicas.\n\n" +
    "La pregunta buena no es qué efectos genera el delito en abstracto, sino por qué los mismos " +
    "hechos dejan huellas tan dispares según quién los sufra.\n\n" +
    "EL EJEMPLO DEL COSTE ECONÓMICO, que se entiende a la primera: un móvil robado o unos días sin " +
    "poder trabajar pueden ser los mismos euros para dos personas y significar cosas muy " +
    "diferentes. Para quien tiene solvencia, una molestia. Para quien vive al límite, la gota que " +
    "colma el vaso.\n\n" +
    "Y el dato que descoloca: la pérdida directa de la mayoría de los delitos contra la propiedad " +
    "es pequeña. En el Reino Unido, unas 340 libras de media en el hurto a la persona.\n\n" +
    "EN LO PSICOLÓGICO pasa igual. Más clarificador que enumerar síntomas es entender qué certezas " +
    "destruye el delito: la presunción de que el entorno es previsible, el hogar un espacio seguro " +
    "y los demás no albergan intenciones lesivas. Janoff-Bulman lo llamó la QUIEBRA DEL MUNDO DE " +
    "SUPUESTOS.\n\n" +
    "No exagerar el tamaño medio del daño: cuando se sigue a las mismas personas antes y después, " +
    "buena parte de lo que parecía efecto del delito resulta ser diferencias previas, y la mayoría " +
    "se recupera en torno al año y medio.",
});

P.afirmacion(d, {
  texto: "La desventaja no se suma.\nSe multiplica.",
  sub: "Las mismas personas se victimizan más, son peor tratadas al pedir ayuda y tienen menos medios para recuperarse.",
  size: 42,
  notas:
    "LA FRASE QUE CIERRA LAS DOS SESIONES. Si solo se llevan una, que sea esta.\n\n" +
    "Las tres desventajas se alinean en las mismas personas:\n" +
    "· Son quienes MÁS SE VICTIMIZAN. Eso fue la sesión 1.\n" +
    "· Son quienes PEOR SON TRATADAS al pedir ayuda. Eso es la victimación secundaria de hoy.\n" +
    "· Son quienes MENOS MEDIOS tienen para recuperarse.\n\n" +
    "Sobre lo tercero: quien tiene dinero repara, reemplaza o se muda; quien tiene red encuentra " +
    "quien la escuche; quien puede pagarlo accede a ayuda profesional. Y quien encaja en la " +
    "plantilla de la víctima ideal se recupera mejor porque el entorno la apoya en vez de someterla " +
    "a sospecha. SER CREÍDA ES TAMBIÉN UN RECURSO PARA LA RECUPERACIÓN: decirlo así de literal.\n\n" +
    "El delito no reparte su daño al azar, sino siguiendo las grietas de clase, género y origen que " +
    "estructuran el resto del libro. Y si el daño es desigual, la respuesta a ese daño es una " +
    "cuestión de justicia, no solo de asistencia.",
});

// ·· Las respuestas a las víctimas — 6 min ·································

P.dosColumnas(d, {
  titulo: "La víctima llega al centro. Con dos caras",
  cols: [
    {
      rotulo: "Conquista de derechos",
      lineas: [
        "Violencias invisibilizadas que",
        "pasan a ser nombradas y creídas.",
        "Lo que la mayoría reclama:",
        "trato digno, escucha, información.",
      ],
    },
    {
      rotulo: "Instrumentalización punitiva",
      lineas: [
        "El sufrimiento como coartada",
        "para endurecer el castigo.",
        "Leyes con nombre de víctima.",
        "Garland, Simon, el populismo penal.",
      ],
    },
  ],
  notas:
    "6 MIN — LAS RESPUESTAS A LAS VÍCTIMAS.\n\n" +
    "Rock: el avance en derechos victimales no surgió de un colectivo de víctimas organizado —por " +
    "definición disperso y sin poder estructural— sino del empuje sostenido de las movilizaciones " +
    "de mujeres. Conviene decirlo, porque no es obvio.\n\n" +
    "Garland: la víctima como «personaje representativo» cuya experiencia de ultraje se universaliza " +
    "para deslegitimar las garantías procesales y el conocimiento criminológico experto. La " +
    "invocación al dolor blinda cualquier reforma penal frente a la crítica racional.\n\n" +
    "Simon: «gobernar a través del delito», reorganizando las prioridades del Estado en torno al " +
    "miedo. Y el populismo penal culmina con leyes epónimas y un relato falaz de suma cero en el " +
    "que cada garantía de la persona acusada se presenta como un despojo a la víctima.\n\n" +
    "LO FUNDAMENTAL, y hay que decirlo explícito: ES LA MISMA VOZ. No hay una «víctima buena» " +
    "restaurativa y una «víctima mala» punitiva. Hay un recurso político de extraordinaria potencia " +
    "—el dolor humano socialmente legitimado— que puede canalizarse en las dos direcciones.\n\n" +
    "Y reaparece la selectividad: la víctima ideal es la coartada perfecta para justificar más " +
    "penas, mientras las víctimas complejas siguen en el desamparo.",
});

P.rejilla(d, {
  titulo: "En España, tres campos de disputa",
  items: [
    { etiqueta: "El terrorismo", sub: "De la marginación al veto\nmoral. Y después, la\nfractura del movimiento." },
    { etiqueta: "La violencia machista", sub: "De la ley de 2004 al «solo\nsí es sí». Y la negación\nde la propia categoría." },
    { etiqueta: "La dictadura", sub: "Aquí no se discute cómo\ntratarla: se discute si es\nvíctima siquiera." },
  ],
  notas:
    "El bloque español, y el que más les toca de cerca. Ir despacio en la tercera.\n\n" +
    "TERRORISMO. Las víctimas de ETA sufrieron décadas de marginación institucional; el movimiento " +
    "asociativo revirtió esa invisibilidad y arrancó un marco legal propio. Con el tiempo alcanzó " +
    "capacidad de veto moral, sobre todo en política penitenciaria. Se vio en 2013 con Del Río " +
    "Prada y la doctrina Parot. Pero hablar de «las víctimas» en singular falsea el cuadro: el " +
    "movimiento se partió entre quienes asumieron el uso partidista y quienes lo rechazan.\n\n" +
    "VIOLENCIA MACHISTA. La LO 1/2004 recogió las demandas del movimiento feminista. La LO 10/2022 " +
    "nació de un caso de victimación —La Manada— y su aplicación produjo rebajas de condena que se " +
    "convirtieron en ariete político.\n\n" +
    "EL MATIZ QUE NO HAY QUE AHORRARSE: que todos instrumentalicen no quiere decir que todos hagan " +
    "lo mismo. Reclamar derechos no equivale a silenciar. Agitar el fantasma de las denuncias " +
    "falsas —en torno al 0,008 % según la Fiscalía— es la injusticia testimonial convertida en " +
    "programa político.\n\n" +
    "MEMORIA. Es el más revelador porque la disputa es sobre si se la reconoce siquiera. La " +
    "transición «amnésica», el pacto del olvido, y lo que Tamarit llama justicia transicional " +
    "tardía. Que en pleno siglo XXI haya que litigar sobre esto —el Constitucional ha anulado parte " +
    "de una «ley de concordia» por equiparar dictadura y democracia— es la prueba más clara de la " +
    "tesis del capítulo.",
});

P.afirmacion(d, {
  texto: "Que el derecho reconozca\nla asistencia no garantiza\nque la asistencia exista.",
  sub: "España es de los países europeos donde menos víctimas llegan a un servicio especializado.",
  size: 36,
  notas:
    "SACRIFICABLE a la mitad si voy con retraso.\n\n" +
    "Si la victimación es un proceso, la asistencia no puede ser un trámite puntual: tiene que " +
    "acompañar antes, durante y después, y su función principal es amortiguar la victimación " +
    "secundaria.\n\n" +
    "Los problemas concretos, que interesan a quien vaya a trabajar en esto:\n" +
    "· JERARQUÍA DE LA VICTIMACIÓN: los servicios responden con eficacia ante quienes encajan en el " +
    "perfil de víctima ideal y desatienden los perfiles complejos o estigmatizados.\n" +
    "· FRAGMENTACIÓN COMPETENCIAL: no hay un modelo único de oficina. Depende de si tu comunidad " +
    "tiene transferidas las competencias de Justicia. La asistencia que recibes depende de dónde " +
    "vivas.\n" +
    "· La evaluación del Ministerio de 2017 reconoció carencias: a veces los juzgados, en el mismo " +
    "edificio, no derivan a las víctimas. Sobrecarga administrativa, medios escasos, precariedad de " +
    "los psicólogos.\n" +
    "· Y el estudio catalán: pese a la buena valoración del trato humano, las intervenciones eran " +
    "demasiado breves y no redujeron de forma significativa ni el sufrimiento ni la victimación " +
    "secundaria.\n\n" +
    "Sobre la justicia «sensible al trauma»: dos cautelas. Convertir todo sufrimiento en trauma " +
    "clínico puede patologizar una reacción normal a un hecho anormal y, mal usado, volverse contra " +
    "la víctima presentándola como «dañada». Y su eficacia está poco probada.",
});

P.figura(d, {
  titulo: "Devolver el conflicto",
  quéMirar: "Reduce algo la reincidencia, es coste-eficiente, sube la satisfacción de la víctima y baja su deseo de venganza.",
  rel: "images/portadas-justicia-restaurativa.png",
  w: 8.0, h: 3.79,
  fuente:
    "Braithwaite, Restorative Justice and Responsive Regulation (OUP) · Pranis, Stuart y Wedge, " +
    "Peacemaking Circles (Living Justice Press) · Strang et al., revisión Campbell. Art. 32.1 LPI.",
  notas:
    "Cerramos donde empezamos: Christie y la expropiación del conflicto. La justicia restaurativa " +
    "es el proyecto de devolvérselo.\n\n" +
    "Sitúa a la víctima, siempre desde la VOLUNTARIEDAD, en el núcleo de un proceso enfocado a la " +
    "responsabilización activa del infractor y la reparación del daño. Modalidades: mediación " +
    "víctima-infractor, conferencias restaurativas, círculos de paz.\n\n" +
    "La evidencia, según la revisión Campbell: las conferencias bien preparadas y voluntarias " +
    "reducen algo la reincidencia, son coste-eficientes, elevan la satisfacción y rebajan el deseo " +
    "de venganza. Sobre todo en delitos violentos y como COMPLEMENTO, no sustituto, del proceso " +
    "penal. Tamarit advierte de la distancia entre el vocabulario de la justicia restaurativa y lo " +
    "que muestran las evaluaciones reales.\n\n" +
    "EL CASO ESPAÑOL, que impresiona: la Vía Nanclares. En 2011 y 2012, alrededor de una docena de " +
    "víctimas de ETA se reunieron cara a cara, voluntariamente, con presos que habían roto con la " +
    "organización. El más conocido es el de Maixabel Lasa, viuda de Juan María Jáuregui, que " +
    "accedió a sentarse con uno de los asesinos de su marido. La película de Bollaín lo llevó al " +
    "gran público, y Gema Varona lo ha estudiado de cerca. No fueron una alternativa a la condena " +
    "sino algo paralelo, y no gustaron a una parte del movimiento de víctimas.\n\n" +
    "PARA LA LECTURA: el cuadro de la genealogía, con la advertencia sobre tomar prácticas " +
    "indígenas vaciándolas de contexto.",
});

P.afirmacion(d, {
  texto: "Pero devolver el conflicto\nsolo es justo si las partes\nestán en pie de igualdad.",
  sub: "Cuando no lo están, «devolverlo» puede ser abandonar a la más débil.",
  size: 36,
  notas:
    "La cautela final, y la impone otra vez la violencia de género.\n\n" +
    "Discutir la reparación en pie de igualdad presupone que ninguna de las partes está sometida a " +
    "coacción. Cuando existe una relación de dominio, promover el encuentro directo puede " +
    "traducirse en indefensión y revictimación: el proceso puede ser instrumentalizado por el " +
    "agresor como una extensión más del control coercitivo. Por eso muchos ordenamientos, el " +
    "español entre ellos, restringen o prohíben la mediación en violencia de género.\n\n" +
    "Y el caso de los abusos en la Iglesia muestra las dos caras: han funcionado procesos " +
    "restaurativos cuidadosos, como el Proyecto Repara, y a la vez el informe advierte de que la " +
    "compensación sin reconocimiento ni verdad —los viejos acuerdos de silencio— no repara, sino " +
    "que revictimiza.\n\n" +
    "LA MORALEJA, que vale para todo el capítulo: la misma herramienta que sana en un contexto daña " +
    "en otro. No hay recetas universales, solo el juicio criminológico caso a caso.",
});

P.actividad(d, {
  rotulo: "ACTIVIDAD · SESIÓN 2 · 15 MIN",
  titulo: "Auditad un caso real",
  pasos: [
    "Grupos pequeños. A cada uno, un caso de los que hemos visto estos dos días.",
    "¿Qué requisitos de la víctima ideal cumple? ¿Cuáles incumple?",
    "Señalad un momento concreto de victimación secundaria. ¿Quién la produjo?",
  ],
  notas:
    "Aplica los conceptos de las dos sesiones al mismo material, y obliga a distinguir el plano de " +
    "los hechos del plano del reconocimiento.\n\n" +
    "CASOS PARA REPARTIR: Nevenka Fernández · las víctimas de abusos en la Iglesia · una mujer que " +
    "sufre control coercitivo y cuya denuncia se atomiza en episodios · las víctimas del Prestige · " +
    "las víctimas de la dictadura que buscan a los suyos en una fosa · una mujer en contexto de " +
    "prostitución agredida por un cliente.\n\n" +
    "LO QUE TIENE QUE SALIR:\n" +
    "· Que casi ningún caso real cumple el molde entero, y que el incumplimiento predice bastante " +
    "bien el trato recibido.\n" +
    "· Que la victimación secundaria casi nunca la produce «el sistema» en abstracto: la produce " +
    "alguien concreto en un momento concreto. Exigir nombre del actor —el agente que tomó la " +
    "denuncia, el tribunal que admitió la prueba, el medio que publicó el titular— es lo que " +
    "convierte el concepto en herramienta y no en queja.\n\n" +
    "Si el grupo va sobrado: ¿qué habría hecho falta, y de quién, para que ese momento no hubiera " +
    "ocurrido? Pasa del diagnóstico a la política pública y anticipa los capítulos finales.\n\n" +
    "RESERVAR TRES MINUTOS para el cierre, que es lo que amarra las dos sesiones.",
});

P.cierre(d, {
  frase: "Ser víctima no es un hecho.\nEs un estatus que se\nconcede o se niega.",
  remate: "Y decidir a quién se le concede es una cuestión política de primer orden.",
  notas:
    "El cierre del capítulo. Recapitular las tesis:\n\n" +
    "· Hablar de víctimas es hablar de un estatus normativo que las instituciones conceden o " +
    "deniegan según expectativas morales preconcebidas. Ese reparto reproduce las mismas fracturas " +
    "estructurales que recorren todo el manual.\n" +
    "· Pensar la victimación como proceso biográfico, y no como papel circunstancial en un hecho " +
    "aislado, permite ver el daño antes y después: la vulnerabilidad acumulada que precede, la " +
    "victimación secundaria que añade el sistema, y la desigualdad material en la recuperación.\n\n" +
    "Y EL PUNTO QUE NO HAY QUE AHORRARSE, porque es el que eleva el capítulo: hemos hablado todo el " +
    "rato de asimetrías y repartos desiguales, con el riesgo de presentarlos como un rasgo inerte " +
    "del paisaje, como inercias inevitables. No lo son. Tienen una raíz precisa en las RELACIONES " +
    "DE PODER.\n" +
    "· Que no se creyera durante décadas a los menores agredidos por sacerdotes refleja la " +
    "capacidad de una institución hegemónica para blindar su prestigio.\n" +
    "· Que a una mujer maltratada se le pregunte por qué no se marchó antes arrastra siglos de " +
    "subordinación patriarcal.\n" +
    "· Que unas víctimas motiven reformas de urgencia y otras ni figuren en los registros depende " +
    "del capital social y la capacidad de presión de quienes las respaldan.\n\n" +
    "Por eso el reconocimiento no es un trámite técnico asistencial ni una cuestión de empatía: es " +
    "un campo de disputa político y moral. Y por eso no podemos analizar la victimación al margen " +
    "de las estructuras de dominación y de las políticas que definen qué daños merecen reparación.",
});

P.guardar(d, DESTINO);
