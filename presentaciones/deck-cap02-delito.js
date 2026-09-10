// Capítulo 2 · "El delito"  —  delito.qmd
// Dos sesiones de una hora. Sesión 1: el delito desde arriba (qué es, dónde,
// cuándo). Sesión 2: el delito por dentro (cómo y por qué).
// Estilo "B claro". Genera Cap02_El-delito.pptx

const path = require("path");
const P = require("./plantilla-b-claro");

const LIBRO = "/sessions/clever-modest-cray/mnt/intro_crimi";
const DESTINO = path.join(LIBRO, "presentaciones", "Cap02_El-delito.pptx");

const d = P.crear({
  titulo: "El delito",
  subject: "Capítulo 2 · Criminología: una introducción",
  imgDir: LIBRO,
});

// ###########################################################################
//  SESIÓN 1 — El delito desde arriba
// ###########################################################################

P.portada(d, {
  cintillo: "CAPÍTULO 2  ·  SESIÓN 1 DE 2",
  titulo: "El delito",
  notas:
    "PLAN DE LAS DOS SESIONES. 2 h en total, repartidas en dos días. Cada sesión: ~35 min de " +
    "exposición + una actividad de ~20 min, más preguntas.\n\n" +
    "SESIÓN 1 — EL DELITO DESDE ARRIBA. ¿Delito o daño social? (8) · ¿Qué es un delito? (7) · " +
    "Las características generales (5) · La estadística moral y la geografía (7) · El tiempo del " +
    "delito (8). Actividad: ¿delito o daño social?\n\n" +
    "SESIÓN 2 — EL DELITO POR DENTRO. Transacción situacional (7) · Toma de decisiones (12) · " +
    "Emoción y significado (11) · Los guiones del delito (5). Actividad: construir un guion.\n\n" +
    "SI VOY CON RETRASO en la sesión 1, lo sacrificable son las preguntas de la criminología " +
    "espacial (una diapositiva que se lee) y la hipótesis de la seguridad. Las cinco figuras de " +
    "datos NO se sacrifican.\n\n" +
    "ARRANQUE: recordar que en el capítulo 1 enumeramos cinco temas de la criminología. Este es " +
    "el primero. Y que la respuesta a «¿qué es el delito?» va a ser bastante menos obvia de lo " +
    "que parece.",
});

// ·· ¿Delito o daño social? — 8 min ········································

P.afirmacion(d, {
  texto: "¿La criminología estudia\nel delito, o el daño?",
  sub: "El capítulo abre con esta pregunta. Y la deja sin cerrar, a propósito.",
  size: 44,
  notas:
    "8 MIN — ¿DELITO O DAÑO SOCIAL?\n\n" +
    "Parecería poco controvertido decir que el objeto de la criminología es el delito: hasta la " +
    "etimología lo dice. Gottfredson: limitar la criminología a lo que viola la ley penal es el " +
    "enfoque más común y sensato. Zedner va más lejos: la criminología carece de marco teórico o " +
    "metodología propios, y debe la cohesión que tiene al delito como foco.\n\n" +
    "Avisar de entrada de que vamos a complicarlo, y de que al final de la sesión les voy a pedir " +
    "que se mojen ellos. La actividad de hoy es exactamente esta pregunta.",
});

P.dosColumnas(d, {
  titulo: "El debate fundacional",
  cols: [
    {
      rotulo: "Tappan (1947)",
      lineas: [
        "Delito es lo que dice la ley penal.",
        "Y solo cuando hay condena firme.",
        "Sin sentencia no hay delincuente.",
        "El jurista.",
      ],
    },
    {
      rotulo: "Sutherland (1949)",
      lineas: [
        "Definición sociológica y ampliada.",
        "Incluye infracciones que no son",
        "penales: administrativas, civiles.",
        "El sociólogo.",
      ],
    },
  ],
  notas:
    "El contexto de la pelea es la delincuencia de cuello blanco, que Sutherland propone en 1940 " +
    "y que retomaremos en el capítulo 10. Muchas de esas infracciones estaban prohibidas, pero " +
    "rara vez se tramitaban por la vía penal: iban a organismos administrativos y jurisdicciones " +
    "civiles.\n\n" +
    "El reproche de fondo que le hace Tappan a Sutherland es que está confundiendo el estatus " +
    "legal con la conveniencia científica. Pero fijaos en que Tappan hace exactamente lo mismo al " +
    "revés: convierte una decisión del legislador en el límite de una disciplina científica.\n\n" +
    "Es el mismo desacuerdo que veremos hoy en la actividad, con setenta y cinco años más encima.",
});

P.cita(d, {
  texto: "no se convierte en delincuente por los insultos sociológicos a menos que la autoridad política constituida diga que lo es.",
  atribucion: "Paul Tappan, 1947",
  size: 26,
  notas:
    "Leerla entera, que es mejor: «Puede ser un grosero, un pecador, un leproso moral o el diablo " +
    "encarnado, pero no se convierte en delincuente por los insultos sociológicos a menos que la " +
    "autoridad política constituida diga que lo es.»\n\n" +
    "Funciona muy bien en el aula porque es agresiva y clara. Y porque deja ver que el debate no " +
    "es técnico sino sobre quién tiene autoridad para decir qué es delito.\n\n" +
    "El contrapunto de Colin Sumner: tomar las categorías del Estado como nociones científicas es " +
    "un acto de fe ciega en el orden político. Convierte «las herramientas sectoriales e " +
    "históricas del Estado en conceptos de comportamiento universalmente válidos».",
});

P.rejilla(d, {
  titulo: "Lo que estudiamos sin que sea delito",
  items: [
    { etiqueta: "Desorden de conducta", sub: "El anclaje de parte\nde la psicología." },
    { etiqueta: "Desviación", sub: "El anclaje de la sociología.\nEl delito es solo un caso." },
    { etiqueta: "Drogas", sub: "Carreras enteras sobre una\nconducta que en muchos\npaíses no es ilegal." },
    { etiqueta: "Prostitución", sub: "Ilegal en unos sitios,\nregulada en otros." },
    { etiqueta: "Administrativas", sub: "El derecho sancionador\nno penal, que no para\nde crecer." },
    { etiqueta: "Daño social", sub: "Lo que hace sufrir,\nsea legal o no." },
  ],
  notas:
    "La lista demuestra que la criminología NUNCA se ha limitado al Código Penal, por más que en " +
    "los debates se hable como si sí.\n\n" +
    "El caso de las infracciones administrativas es el que más les cuesta ver y el que más les va " +
    "a afectar profesionalmente. Braithwaite: pasamos de un Estado del bienestar a un Estado " +
    "regulador, con entidades reguladoras que no forman parte del sistema de justicia penal, y las " +
    "herramientas de la criminología «tienen una relevancia cada vez menor para el mundo social " +
    "que está surgiendo». Volvemos a ello en el capítulo 8.\n\n" +
    "Aquí es donde se ve que la pregunta del principio no es un capricho académico: si la mitad de " +
    "la regulación de la vida económica se ha ido al derecho administrativo, una criminología que " +
    "solo mire el Código Penal está mirando cada vez menos mundo.",
});

P.figura(d, {
  titulo: "El anclaje sociológico: la desviación",
  rel: "images/etiquetamiento-clasicos.png",
  w: 8.4, h: 4.03,
  fuente:
    "Becker, Outsiders (Free Press) · Erikson, Wayward Puritans (Allyn and Bacon) · " +
    "Cohen (ed.), Images of Deviance (Pelican). Art. 32.1 LPI.",
  notas:
    "Tres clásicos del etiquetamiento, que veréis en teorías criminológicas.\n\n" +
    "· Becker: el desviado es quien recibe con éxito la etiqueta. No es una propiedad del acto, es " +
    "el resultado de un proceso social.\n" +
    "· Erikson: la desviación como frontera moral que la comunidad necesita trazar para saber " +
    "dónde está ella misma.\n" +
    "· Cohen: la antología que trae el enfoque al Reino Unido.\n\n" +
    "Veinte segundos. Solo quiero que reconozcan los nombres cuando vuelvan a aparecer.",
});

P.figura(d, {
  titulo: "La zemiología: el daño, no el delito",
  rel: "images/zemiologia.png",
  w: 8.6, h: 3.95,
  fuente:
    "Hillyard et al., Beyond Criminology (Pluto) · Boukli y Kotzé, Zemiology (Palgrave) · " +
    "Canning y Tombs, From Social Harm to Zemiology (Routledge). Art. 32.1 LPI.",
  notas:
    "La propuesta más radical: abandonar el delito y estudiar el daño social, sea legal o no.\n\n" +
    "De dónde sale: de querer mirar los daños que producen el Estado y las grandes corporaciones y " +
    "que rara vez se criminalizan. Y del reproche simétrico: los códigos penales están llenos de " +
    "infracciones triviales que no merecen reproche penal alguno.\n\n" +
    "La tesis fuerte, que conviene enunciar con todas las letras: para esta gente el control del " +
    "delito es ineficaz, doloroso y perpetuador de desigualdad, y el propio concepto de delito " +
    "—y la criminología construida sobre él— legitima la expansión de ese control.\n\n" +
    "Preguntar al aula si les convence. Suele haber división, y es la que quiero para la actividad.",
});

P.dosColumnas(d, {
  titulo: "Qué se gana y qué se pierde",
  cols: [
    {
      rotulo: "Si te anclas al delito",
      lineas: [
        "Objeto acotado y comparable.",
        "Puedes discutir con el derecho penal.",
        "Pero heredas los sesgos del",
        "legislador y de la policía.",
      ],
    },
    {
      rotulo: "Si te anclas al daño",
      lineas: [
        "Ves lo que el Código Penal no ve.",
        "Escapas del corsé legal.",
        "Pero pierdes fronteras: ¿quién",
        "decide qué cuenta como daño?",
      ],
    },
  ],
  notas:
    "El equilibrio del libro, que no es equidistancia: el delito sigue siendo el principal punto " +
    "de anclaje, pero no hay que ser dogmático.\n\n" +
    "Zedner lo formula bien: la irrupción de estas perspectivas «no debe implicar el abandono del " +
    "delito como categoría jurídica», porque el compromiso crítico con el derecho penal permite " +
    "plantear las preguntas difíciles —cómo se llega a las infracciones delictivas, cómo se " +
    "definen, a quién se aplican y qué consecuencias se derivan.\n\n" +
    "O sea: no abandonar el delito, pero tampoco tragárselo entero. Estudiar la criminalización " +
    "misma como objeto. Eso es el capítulo 8.",
});

// ·· ¿Pero qué es un delito? — 7 min ·······································

P.afirmacion(d, {
  texto: "Típica, antijurídica,\nculpable y punible.",
  sub: "Eso es Derecho Penal, y lo daréis allí. A la criminología no le basta.",
  size: 44,
  notas:
    "7 MIN — ¿PERO QUÉ ES UN DELITO?\n\n" +
    "Gottfredson: a muchos les parecerá extraño que haya algún problema para responder a esto, " +
    "pero la definición de delito lleva mucho tiempo siendo objeto de debate.\n\n" +
    "La definición dogmática es de Muñoz Conde y la van a ver en su asignatura de Penal. No la " +
    "repito aquí; solo la nombro para deslindar.\n\n" +
    "Por qué no basta: porque el delito no es solo una categoría legal, es también una " +
    "construcción social. Lo que se considera delictivo varía entre países y a lo largo del " +
    "tiempo, incluso en las conductas más universales.",
});

P.dosColumnas(d, {
  titulo: "Dos salidas de criminólogo",
  cols: [
    {
      rotulo: "La pragmática",
      lineas: [
        "«Cualquier conducta identificable",
        "que un número apreciable de",
        "gobiernos haya prohibido y a la",
        "que aplique sanciones penales.»",
        "Felson, 2006",
      ],
    },
    {
      rotulo: "La universalista",
      lineas: [
        "«Actos de fuerza o fraude",
        "realizados en beneficio del",
        "interés propio.»",
        "",
        "Gottfredson y Hirschi, 1990",
      ],
    },
  ],
  notas:
    "Dos maneras de escapar de la dependencia de un Código Penal concreto.\n\n" +
    "Felson renuncia a la esencia y se queda con lo que funciona para comparar: si muchos " +
    "gobiernos lo prohíben, nos sirve. Es una definición de trabajo, no una teoría.\n\n" +
    "Gottfredson y Hirschi buscan la naturaleza universal del delito, y de ahí saldrá su teoría " +
    "del autocontrol, que veréis en teorías criminológicas.\n\n" +
    "Preguntar: ¿qué deja fuera cada una? La de fuerza o fraude deja fuera casi toda la " +
    "delincuencia imprudente y buena parte de la ambiental. Eso conecta con la actividad.",
});

P.afirmacion(d, {
  texto: "El delito no es solo lo que\nla ley define. Es lo que el\nsistema efectivamente persigue.",
  sub: "Zedner, 2011",
  size: 36,
  notas:
    "Segunda forma en que el delito es una construcción social, y la más importante para lo que " +
    "viene después.\n\n" +
    "La cita completa: «El delito no es solo una cuestión de lo que se define legislativamente " +
    "como tal, sino de lo que los funcionarios de la justicia penal realmente persiguen, " +
    "investigan, procesan y castigan.»\n\n" +
    "Entre el universo legal de delitos del Código Penal y los delitos efectivamente denunciados, " +
    "perseguidos y resueltos media —y siempre mediará— un abismo. Es la metáfora del embudo, que " +
    "viene ahora.",
});

P.datoGrande(d, {
  cifra: "1 %",
  unidad: "de los robos en vivienda\nacaba en condena",
  glosa:
    "De 3,3 millones estimados en EE. UU. en 2016, la mitad se denunció y uno de cada diez terminó " +
    "en detención. Con drogas, la probabilidad es aún menor.",
  notas:
    "Los datos son de Felson y Eckert. El número les impresiona y es el que quiero que retengan " +
    "antes de la figura siguiente, que es densa.\n\n" +
    "El resto de la cadena, por si preguntan: en la mayoría de los delitos conocidos por la " +
    "policía nadie es detenido; cuando hay detención, la mayoría de casos no llega al fiscal; de " +
    "los que llegan, la mayoría acaba en conformidad y no en juicio; y de las personas condenadas, " +
    "muchas evitan el encarcelamiento pese a décadas de políticas de ley y orden.\n\n" +
    "El juicio con jurado que sale en televisión es la excepción de la excepción de la excepción.",
});

P.figura(d, {
  titulo: "El embudo del sistema penal",
  quéMirar: "Fijaos solo en las flechas que se van por arriba y por abajo: son los casos que salen del sistema en cada fase.",
  rel: "images/flowchart.png",
  w: 8.0, h: 4.87,
  fuente:
    "Criminal Justice System Flowchart, Bureau of Justice Statistics, 1997, que actualiza el " +
    "diagrama de la President's Commission on Law Enforcement and the Administration of Justice " +
    "(1967). Obra federal estadounidense, libre de derechos.",
  notas:
    "NO SACRIFICABLE, pero tampoco explicable. No leer el diagrama.\n\n" +
    "Advertir de lo que el propio pie dice: el grosor de las líneas NO representa volúmenes " +
    "reales. Es un esquema de recorrido, no una infografía de datos. Si alguien lo usa para " +
    "estimar proporciones, se equivoca.\n\n" +
    "Lo que quiero que vean en veinte segundos: el bloque ancho de la izquierda («delito») se va " +
    "estrechando, y en cada fase hay ramas que abandonan el sistema —casos no resueltos, puestas " +
    "en libertad, cargos retirados. El sistema penal no procesa el delito: procesa una fracción " +
    "muy pequeña y muy seleccionada del delito.\n\n" +
    "Y de ahí la consecuencia metodológica que arrastraremos toda la sesión: cuando estudiamos " +
    "«el delito» con datos oficiales, estamos estudiando el final del embudo.",
});

P.rejilla(d, {
  titulo: "Tres preguntas sobre el delito",
  items: [
    { etiqueta: "Cómo se define", sub: "Qué procesos e intereses\nguían la criminalización\ny la descriminalización." },
    { etiqueta: "Cómo se responde", sub: "Qué hacen en la práctica\npolicía, fiscales, jueces\ny prisiones. Y por qué." },
    { etiqueta: "Qué ocurre", sub: "Qué delitos se cometen,\ncuándo, dónde, cómo\ny por qué." },
  ],
  notas:
    "El mapa de lo que queda de capítulo y de curso.\n\n" +
    "Las dos primeras son el capítulo 8. La tercera es el resto de HOY: el resto de la sesión 1 " +
    "responde al cuándo y al dónde; la sesión 2, al cómo y al porqué.\n\n" +
    "Merece la pena decirlo explícitamente, porque da estructura a dos días de clase.",
});

// ·· Las características generales — 5 min ·································

P.afirmacion(d, {
  texto: "La falacia del drama.",
  sub: "Los delitos más publicitados están muy alejados de la vida real.",
  notas:
    "5 MIN — LAS CARACTERÍSTICAS GENERALES DEL DELITO.\n\n" +
    "Felson: los medios encuentran una historia de terror, entretienen al público con ella, ganan " +
    "dinero, crean un mito en la mente del público, y luego se apoyan en ese mito para la " +
    "siguiente historia de terror. El delito acaba muy distorsionado.\n\n" +
    "Es la misma operación que hicimos el primer día con la imagen del criminólogo. Ahora con la " +
    "imagen del delito. Merece la pena señalar el paralelismo en voz alta.",
});

P.cita(d, {
  texto: "El asesinato tiene dos características fundamentales: una pistola demasiado cerca y un hospital demasiado lejos.",
  atribucion: "Marcus Felson",
  size: 27,
  notas:
    "La frase funciona sola. Dejarla respirar tres segundos antes de comentar.\n\n" +
    "Otras perlas de Felson por si hace falta insistir: «la mayoría de los asesinatos son el " +
    "trágico resultado de una pequeña y estúpida disputa; el asesinato es menos un delito que una " +
    "consecuencia». «Los detectives ficticios de televisión no tendrían ningún interés en la " +
    "mayoría de asesinatos.» «El trabajo policial consiste en horas y horas de aburrimiento.» " +
    "«Las bandas delictivas son extremadamente aburridas la mayor parte del tiempo.»\n\n" +
    "Esta idea del homicidio como desenlace y no como proyecto reaparece en la sesión 2, con " +
    "Luckenbill. Vale la pena anunciarlo.",
});

P.rejilla(d, {
  titulo: "El retrato del delito común",
  sub: "Gottfredson y Hirschi, 1990.",
  items: [
    { etiqueta: "Trivial", sub: "Pocas pérdidas\ny menos ganancias." },
    { etiqueta: "Sin esfuerzo", sub: "Poca preparación,\nplanificación o habilidad." },
    { etiqueta: "Predecible", sub: "Distribución espacial\ny temporal muy regular." },
    { etiqueta: "Sin rastro", sub: "Deja pocas consecuencias\nduraderas." },
    { etiqueta: "Fallido", sub: "A menudo ni produce\nel resultado buscado." },
    { etiqueta: "No denunciado", sub: "Casi la mitad: la víctima\nno lo vio importante." },
  ],
  notas:
    "El mejor antídoto contra la falacia del drama.\n\n" +
    "El razonamiento de Gottfredson y Hirschi: lo que sabemos de la distribución espacio-temporal " +
    "del delito sugiere que quien delinque es reacio a esforzarse, que la accesibilidad aumenta el " +
    "riesgo de las víctimas, y que evitar la detección forma parte del cálculo.\n\n" +
    "El último punto conecta con el embudo: si casi la mitad no se denuncia es porque las víctimas " +
    "no lo consideraron bastante importante como para tomarse la molestia. Lo dicen las encuestas " +
    "de victimación una y otra vez.\n\n" +
    "Pero NO cerrar aquí. La diapositiva siguiente es el matiz, y es la importante.",
});

P.afirmacion(d, {
  texto: "¿De qué delito\nestamos hablando?",
  sub: "Todo lo anterior describe la delincuencia común. La de quien tiene poco poder.",
  notas:
    "LA DIAPOSITIVA IMPORTANTE DEL BLOQUE. Si algo se llevan de esta parte, que sea esto.\n\n" +
    "Hay delitos que no encajan en absoluto en ese retrato: el fraude fiscal de una gran " +
    "corporación, la manipulación de un mercado financiero, el vertido sistemático de residuos " +
    "tóxicos, la trata de seres humanos, la tortura ordenada desde un aparato estatal, buena parte " +
    "de la ciberdelincuencia. Exigen planificación, conocimiento experto y división del trabajo, " +
    "se prolongan meses o años, y no se pueden situar en un momento y un lugar concretos. Sus " +
    "consecuencias no son triviales.\n\n" +
    "Lo mismo vale para la violencia en la pareja, que a menudo no es un episodio sino un patrón " +
    "sostenido en el tiempo.\n\n" +
    "La formulación que quiero que copien: cuando la criminología describe «el delito», suele " +
    "estar describiendo el delito de quienes tienen poco poder, que es el que el sistema persigue " +
    "con más diligencia y sobre el que, por eso, tenemos más datos. Que la delincuencia de los " +
    "poderosos aparezca poco en los manuales no significa que sea infrecuente ni poco dañina: " +
    "significa que la mirada criminológica se construyó mirando hacia otro lado.\n\n" +
    "Regla práctica: ante cualquier afirmación sobre «la naturaleza del delito», preguntad de qué " +
    "delitos se habla y de cuáles procede la evidencia.",
});

// ·· La estadística moral y la geografía — 7 min ···························

P.afirmacion(d, {
  texto: "1833: alguien dibuja\nel delito en un mapa.",
  sub: "Y descubre que no se reparte al azar.",
  notas:
    "7 MIN — LA ESTADÍSTICA MORAL Y LA GEOGRAFÍA DEL DELITO.\n\n" +
    "Guerry publica el Essai sur la statistique morale de la France en 1833; Quetelet trabaja esos " +
    "mismos años. Ambos sobre la misma fuente: el Compte général de l'administration de la justice " +
    "criminelle, la primera estadística judicial nacional del mundo, que Francia publicaba desde " +
    "1827. Detalle que suele sorprender: Quetelet era belga, pero su criminología se construyó " +
    "sobre datos franceses.\n\n" +
    "Lo que inauguran no es un hallazgo sino un método: tratar el delito como un hecho social " +
    "medible y desigualmente distribuido, no como una suma de decisiones individuales.",
});

P.figuraAlta(d, {
  titulo: "El mapa de Guerry, 1833",
  quéMirar:
    "Cuanto más oscuro, más delitos contra las personas. El sur, más pobre, sale oscuro; el norte " +
    "rico e industrializado, claro. Con los delitos contra la propiedad pasa justo al revés.",
  rel: "images/guerry.jpg",
  w: 5.4, h: 5.74,
  fuente:
    "André-Michel Guerry, Carte de France des crimes contre les personnes, en Essai sur la " +
    "statistique morale de la France, París, 1833. Dominio público, vía Wikimedia Commons.",
  notas:
    "NO SACRIFICABLE: es visualización de datos.\n\n" +
    "Lo importante es que sus hallazgos DESMINTIERON las creencias de la época, y por eso el mapa " +
    "vale como lección de método y no solo como antigüedad:\n\n" +
    "· No hay relación simple entre pobreza y delito. La propiedad se roba donde hay propiedad " +
    "que robar. Guerry lo explica por la oportunidad, que es exactamente el argumento que en el " +
    "siglo XX reaparecerá con las actividades rutinarias.\n" +
    "· La instrucción pública no pacificaba: los departamentos con más alfabetización no " +
    "registraban menos delincuencia, a veces más. Un jarro de agua fría para los reformadores.\n" +
    "· Quetelet sostenía que lo determinante no era la pobreza absoluta sino la desigualdad, la " +
    "coexistencia de riqueza y miseria en un mismo territorio.\n\n" +
    "Si alguien pregunta por la estacionalidad: también es de Quetelet, y la vemos en un rato.",
});

P.afirmacion(d, {
  texto: "La ley de la\nconcentración espacial.",
  sub: "Unas pocas calles concentran una parte desproporcionada del delito. En todas partes.",
  size: 44,
  notas:
    "Weisburd. El hecho está tan universalmente documentado que hay quien propone llamarlo ley.\n\n" +
    "Puntos calientes (hot spots): regiones, ciudades, barrios, calles y lugares concretos que " +
    "concentran un volumen desproporcionado.\n\n" +
    "El campo está muy vivo institucionalmente: la American Society of Criminology tiene una " +
    "división (Community and Place), la European Society of Criminology un grupo de trabajo, y la " +
    "SEIC un grupo en criminología ambiental. Algunos grados españoles ya ofrecen optativas de " +
    "sistemas de información geográfica. Y fuera de España hay policías que emplean analistas del " +
    "delito —criminólogas y geógrafos— para este trabajo. En España aún es inusual, pero es una " +
    "salida profesional real y conviene que la conozcan.",
});

P.rejilla(d, {
  titulo: "La escala se ha ido encogiendo",
  items: [
    { etiqueta: "La región", sub: "Guerry, siglo XIX.\nDepartamentos de Francia." },
    { etiqueta: "El barrio", sub: "Escuela de Chicago.\nLo veréis en teorías." },
    { etiqueta: "La calle", sub: "Hoy: segmentos, cruces,\ndirecciones concretas." },
  ],
  notas:
    "Un siglo y medio de historia de la disciplina en tres pasos. Es una diapositiva rápida.\n\n" +
    "Lo interesante no es solo que la unidad se haga más pequeña, sino que las explicaciones " +
    "cambian con ella: a nivel de región se habla de estructura social; a nivel de barrio, de " +
    "cohesión y desorganización; a nivel de calle, de oportunidad y diseño.\n\n" +
    "AVISO PARA LA LECTURA: el capítulo tiene un cuadro sobre si los mapas policiales miden el " +
    "delito o la denuncia. No lo cubro en clase, pero es de lo más importante del capítulo y " +
    "conviene decirles que lo lean: alrededor del 60 % de los delitos no llegan a la policía en " +
    "Inglaterra y Gales, y esa cifra negra varía mucho por territorio, más en los municipios muy " +
    "pobres y también en los muy ricos, por motivos distintos —desconfianza abajo, «era una " +
    "tontería» arriba. Comparar barrios sin tener esto presente es confundir dónde ocurre el " +
    "delito con dónde la gente denuncia.",
});

// ·· El tiempo del delito — 8 min ··········································

P.rejilla(d, {
  titulo: "«Cuándo» son tres preguntas distintas",
  items: [
    { etiqueta: "Ciclos cortos", sub: "Hora y día de la semana.\nLo explica el horario social." },
    { etiqueta: "Estacionales", sub: "Meses del año.\nClima y rutinas." },
    { etiqueta: "Tendencias", sub: "Décadas y siglos.\nDatos frágiles, otra liga." },
  ],
  notas:
    "8 MIN — EL TIEMPO DEL DELITO. La diapositiva que ordena el bloque.\n\n" +
    "La frase que resume por qué importa distinguirlas: que los robos se concentren los viernes " +
    "por la noche y que el homicidio lleve siglos descendiendo en Europa son dos hechos ciertos " +
    "que no tienen nada que ver el uno con el otro.\n\n" +
    "Vamos de la escala más corta a la más larga.\n\n" +
    "Para la lectura: el capítulo tiene un cuadro sobre las tendencias históricas del delito —" +
    "Eisner y el descenso del homicidio desde el XVI, con las réplicas de Aebi y de Schwerhoff " +
    "sobre la fragilidad de las fuentes. No lo damos en clase.",
});

P.datoGrande(d, {
  cifra: "×7",
  unidad: "entre el momento más tranquilo\ny el más intenso de la semana",
  glosa:
    "Madrugada del martes frente a tarde del viernes, sobre 220.000 delitos denunciados en Ciudad " +
    "de México. Prieto Curiel, 2023.",
  notas:
    "Los momentos calientes son franjas de la semana, no lugares. Cuidado con confundirlos con los " +
    "puntos calientes: son cosas distintas y, además, su estabilidad no está igual de asentada. " +
    "El latido semanal se repite año tras año; que un segmento de calle concreto siga concentrando " +
    "delitos dentro de un año está bastante más discutido.\n\n" +
    "Felson y Poulsen llegan a sostener que el delito varía más según la hora del día que según " +
    "cualquier otra variable que conozcamos, y que es una dimensión que hemos analizado bastante " +
    "menos de lo que merece.\n\n" +
    "La imagen que funciona: los latidos (heartbeats) del delito, con sus períodos de alto y bajo " +
    "riesgo.",
});

P.rejilla(d, {
  titulo: "Por qué: las actividades rutinarias",
  sub: "Cohen y Felson, 1979. Para que haya delito tienen que coincidir tres cosas.",
  items: [
    { etiqueta: "Alguien dispuesto", sub: "La teoría lo da por supuesto\ny no pregunta por qué." },
    { etiqueta: "Un objetivo adecuado", sub: "Valor, inercia, visibilidad\ny acceso." },
    { etiqueta: "Nadie que lo impida", sub: "Un guardián capaz. Casi\nsiempre un vecino, no\nun policía." },
  ],
  notas:
    "La teoría que explica el ritmo semanal, y una de las más influyentes del curso.\n\n" +
    "La clave: esa coincidencia no se produce a cualquier hora, sino que sigue el horario social " +
    "—jornadas laborales, horarios comerciales, salidas del fin de semana, calendario escolar. Lo " +
    "que llamamos el ritmo del delito es, en buena medida, el ritmo de nuestras rutinas.\n\n" +
    "El giro que les descoloca y que merece medio minuto: la teoría dice que la OPORTUNIDAD es una " +
    "causa fundamental del delito, más que las variables personales y sociales. Las tasas pueden " +
    "subir sin que cambie la motivación de nadie, solo porque han cambiado las oportunidades. El " +
    "ejemplo clásico del artículo: la incorporación de las mujeres al trabajo remunerado dejó más " +
    "hogares vacíos de día y contribuyó al aumento del robo en domicilio.\n\n" +
    "Y el corolario incómodo: los mismos cambios que amplían las oportunidades legítimas —libertad " +
    "de movimiento, bienes nuevos, vida social— amplían las ilegítimas. El delito «se alimenta de» " +
    "la vida cotidiana legal.\n\n" +
    "El capítulo tiene un cuadro que desarrolla esto en detalle. No lo cubro; que lo lean.",
});

P.figuraAlta(d, {
  titulo: "No roban a la misma\nhora a todo el mundo",
  quéMirar:
    "Arriba, turistas: pico de madrugada. Abajo, residentes: pico de tarde-noche y un repunte a la " +
    "hora de comer que los turistas no tienen.",
  rel: "images/hours.png",
  w: 6.6, h: 5.95,
  fuente: "Robos denunciados en Barcelona, 2016-2021. Elaboración propia a partir de Trinidad et al., 2024.",
  notas:
    "NO SACRIFICABLE: visualización de datos.\n\n" +
    "El perfil de los residentes dibuja una W: madrugada, mediodía y, el más alto, entre las siete " +
    "y las nueve de la tarde. El repunte del mediodía se corresponde bastante bien con el horario " +
    "español de las comidas, y los turistas no lo tienen.\n\n" +
    "LA MORALEJA METODOLÓGICA, que es a lo que va la diapositiva: si se hubieran analizado todos " +
    "los robos juntos, como se hace habitualmente, las dos pautas se habrían superpuesto y el " +
    "resultado habría sido una curva más plana y menos informativa que cualquiera de las dos por " +
    "separado.\n\n" +
    "Antes de eso: la concentración tampoco es igual para todos los delitos. En Ciudad de México, " +
    "los robos a quien acaba de salir del banco se concentran de forma extrema —el 10 % de los " +
    "momentos de la semana reúne el 44 % de esos robos, con pico los jueves— mientras que los " +
    "hurtos a viandantes apenas se concentran. Y en Gante, cinco delitos con niveles de " +
    "concentración parecidos tenían latidos completamente distintos: dos delitos pueden estar " +
    "igual de concentrados y estarlo en momentos que no tienen nada que ver.",
});

P.afirmacion(d, {
  texto: "En cuanto desagregas,\nla regularidad se deshace.",
  sub: "Por tipo de delito, por tipo de víctima, por ciudad. Es el aviso del capítulo.",
  size: 44,
  notas:
    "El hilo conductor de todo el bloque espacio-temporal, y probablemente lo más transferible que " +
    "se llevan hoy.\n\n" +
    "Con todo, hay una pauta que aguanta la desagregación: las noches del fin de semana. Nelson, " +
    "Bromley y Thomas la encontraron en Cardiff y Worcester, con las concentraciones más densas de " +
    "noche en las zonas de pubs y un repunte de madrugada en el nodo peatonal por donde la gente " +
    "confluía al cerrar los locales. Lo mismo en Gante y en Vancouver.\n\n" +
    "Los dos ingredientes que se señalan son el alcohol y la oscuridad, y hay cifras para los dos: " +
    "en Worcester la policía anotaba el alcohol como factor contribuyente en el 8 % del delito " +
    "registrado pero en el 36 % de los delitos violentos; y Tompson y Bowers, comparando Londres y " +
    "Glasgow, encontraron que pasar de luz plena a oscuridad multiplicaba por 2,6 el robo con " +
    "violencia previsto en la primera y solo por 1,2 en la segunda. Parte de lo que atribuimos a " +
    "la hora es en realidad falta de luz.\n\n" +
    "Para España no hay estudios cuantitativos equivalentes, pero Recasens y Rodríguez Basanta " +
    "describen cómo la conflictividad escala conforme avanza la noche y cómo lo más grave tiende a " +
    "pasar en las zonas de paso, en el momento del cierre, que es cuando el transporte y la " +
    "dispersión funcionan peor.",
});

P.figura(d, {
  titulo: "Estacionalidad: existe, pero es modesta",
  quéMirar: "La fila del medio es el componente estacional. Compárese con la de abajo, el residuo: la parte irregular varía más.",
  rel: "images/covidcrime.png",
  w: 7.2, h: 4.71,
  fuente:
    "Descomposición de las series diarias de robos en Barcelona. Elaboración propia a partir de " +
    "Trinidad et al., 2024. Ojo: las escalas verticales no son comunes.",
  notas:
    "NO SACRIFICABLE: visualización de datos.\n\n" +
    "Se suele afirmar que el delito sube en verano y baja en invierno. Para el delito violento la " +
    "evidencia es sólida: Gracia y colegas lo confirman en España con más de 650.000 denuncias por " +
    "violencia contra la mujer en la pareja entre 2016 y 2023, con pico muy claro en julio y " +
    "agosto. Para el patrimonial está más discutido.\n\n" +
    "Pero no exagerar su importancia: el componente estacional existe y es modesto comparado con " +
    "el residuo. Y es mayor entre turistas que entre residentes, lo que no sorprende porque el " +
    "turismo es en sí mismo estacional.\n\n" +
    "El COVID: una perturbación social grande anula los patrones estacionales típicos. Se ve en " +
    "las dos series, pero de un orden de magnitud distinto. Recordar en voz alta que las escalas " +
    "verticales no son comunes, o la comparación visual engaña.\n\n" +
    "¿POR QUÉ hay estacionalidad? Dos explicaciones: la temperatura sobre la irritabilidad (viene " +
    "de Quetelet) y las rutinas (salimos más, dejamos las casas vacías). Hipp y colegas concluyen " +
    "que el patrimonial responde sobre todo a lo segundo y el violento a las dos. Y un detalle " +
    "precioso del estudio español: el pico de julio y agosto aparece en todos los grupos de edad " +
    "SALVO en los mayores de 65, cuya convivencia no cambia con el calendario escolar ni con las " +
    "vacaciones. Difícil de explicar si el calor actuase solo sobre la agresividad.",
});

P.figura(d, {
  titulo: "La caída del delito",
  quéMirar: "La línea oscura cae desde 1995. La clara, que incluye fraude y delitos informáticos, no existía antes de 2016: al contarlos, el total se duplica.",
  rel: "images/crimedrop.png",
  w: 7.6, h: 4.34,
  fuente:
    "Crime in England and Wales, Office for National Statistics. Open Government Licence v3.0.",
  notas:
    "NO SACRIFICABLE: visualización de datos. Y es la mejor del capítulo para enseñar a leer una " +
    "serie.\n\n" +
    "De casi veinte millones de incidentes en 1995 a menos de cinco millones treinta años después. " +
    "El descenso empieza en los noventa en EE. UU. y Reino Unido.\n\n" +
    "LA LECCIÓN: la caída del delito tradicional y la aparición de una delincuencia que antes no " +
    "se contaba son dos hechos distintos, y conviene no confundirlos. Las encuestas de victimación " +
    "son la mejor herramienta para medir variación temporal, porque no las afecta el cambio en la " +
    "propensión a denunciar; pero durante mucho tiempo no midieron fraude ni delitos informáticos. " +
    "Parte de lo que interpretamos como descenso puede ser transformación.\n\n" +
    "¿Es un fenómeno británico y estadounidense? Se documentó de forma más o menos simultánea en " +
    "la mayoría de países occidentales, con políticas penales, demografías y economías muy " +
    "distintas. Y esa simultaneidad es justamente lo que hace el problema difícil.",
});

P.afirmacion(d, {
  texto: "La hipótesis de la seguridad.",
  sub: "Cierre centralizado e inmovilizadores: el robo de vehículos cayó dos tercios en el Reino Unido.",
  size: 44,
  notas:
    "SACRIFICABLE si voy con retraso.\n\n" +
    "Las hipótesis sobre el crime drop han sido muchas y el debate agrio: cambios demográficos, " +
    "mercados de drogas, tácticas policiales, mejora de la economía, legalización del aborto, " +
    "reducción de la exposición al plomo, cambios culturales.\n\n" +
    "La forma de ordenarlas es exigir a cualquier explicación que dé cuenta de un descenso " +
    "simultáneo en países muy distintos entre sí. Aplicado ese criterio, las explicaciones " +
    "específicamente estadounidenses —el aborto, el encarcelamiento masivo— se quedan cortas.\n\n" +
    "La que mejor resiste es la de Farrell y colegas: lo determinante habrían sido las mejoras en " +
    "los dispositivos de seguridad cotidianos. Su caso mejor documentado es el del vehículo, y de " +
    "ahí conjeturan efectos parecidos en viviendas y empresas.\n\n" +
    "Es un buen ejemplo de criterio de evaluación de teorías: no cuál suena mejor, sino cuál " +
    "explica el patrón completo.",
});

P.actividad(d, {
  rotulo: "ACTIVIDAD · SESIÓN 1 · 20 MIN",
  titulo: "¿Delito o daño social?",
  pasos: [
    "Grupos pequeños. A cada uno, cinco casos en el límite del campo.",
    "¿Cuáles estudiaría Tappan? ¿Cuáles Sutherland? ¿Cuáles solo la zemiología?",
    "¿Cuál de los cinco os incomoda más dejar fuera? Y ¿por qué está fuera?",
  ],
  notas:
    "Cierra la sesión volviendo a la pregunta del principio, ahora con herramientas.\n\n" +
    "CASOS QUE FUNCIONAN (mezclar dañosidad alta con ilegalidad baja y al revés):\n" +
    "· Un vertido industrial autorizado que enferma a un barrio durante veinte años.\n" +
    "· Hurtar un chicle en un supermercado.\n" +
    "· Una empresa que elude impuestos con ingeniería fiscal legal.\n" +
    "· Consumir cocaína un sábado.\n" +
    "· Un desahucio ejecutado conforme a derecho sobre una familia con menores.\n" +
    "· Opcional, si el grupo va sobrado: un empleador que incumple sistemáticamente la prevención " +
    "de riesgos y provoca accidentes graves.\n\n" +
    "LO QUE TIENE QUE SALIR: que la dañosidad y la ilegalidad no van de la mano, y que quien " +
    "decide la frontera no es la criminología. El chicle es delito y no hace daño; el vertido hace " +
    "daño y no es delito.\n\n" +
    "La tercera pregunta es la buena. No cerrar con un ganador. Lo que quiero es que noten que " +
    "elegir anclaje tiene consecuencias sobre qué se ve, y que el propio capítulo deja la cuestión " +
    "abierta a propósito.\n\n" +
    "Si sobra tiempo: ¿cambiaría vuestra respuesta si supierais que de los delitos del caso 1 solo " +
    "el 1 % acaba en condena? Devuelve al embudo.",
});

P.cierre(d, {
  frase: "Hoy hemos mirado\nel delito desde arriba.",
  remate: "Mapas, series, agregados. El próximo día, desde dentro: cómo y por qué.",
  notas:
    "Cierre de la sesión 1 y puente a la 2.\n\n" +
    "Recapitular en tres frases: (1) qué cuente como delito es una decisión discutida y no la toma " +
    "la criminología; (2) lo que sabemos del delito «en general» es sobre todo lo que sabemos de " +
    "la delincuencia común; (3) el delito se concentra en el espacio y en el tiempo, pero cada vez " +
    "que desagregamos la regularidad se descompone.\n\n" +
    "Para leer antes del próximo día: los cuadros que no hemos cubierto —mapas del delito o mapas " +
    "de la denuncia, la teoría de las actividades rutinarias y las tendencias históricas.",
});

// ###########################################################################
//  SESIÓN 2 — El delito por dentro
// ###########################################################################

P.portada(d, {
  cintillo: "CAPÍTULO 2  ·  SESIÓN 2 DE 2",
  titulo: "El delito\npor dentro",
  notas:
    "SESIÓN 2. ~35 min de exposición + actividad de guiones.\n\n" +
    "Reparto: transacción situacional (7) · toma de decisiones (12) · emoción y significado (11) · " +
    "guiones del delito (5).\n\n" +
    "SACRIFICABLE si voy con retraso: la diapositiva de críticas a Becker y la de ocio desviado.\n\n" +
    "ARRANQUE: dos minutos de recordatorio. El día anterior miramos el delito desde arriba: mapas, " +
    "series temporales, agregados. Hoy bajamos al nivel del acto concreto. La pregunta cambia de " +
    "«dónde y cuándo» a «cómo y por qué».",
});

P.afirmacion(d, {
  texto: "Un mapa no explica\nuna pelea.",
  sub: "De lo agregado a la situación concreta.",
  notas:
    "La bisagra entre las dos sesiones.\n\n" +
    "Todo lo del día anterior describe regularidades sobre muchos actos. Pero ninguna de esas " +
    "regularidades nos dice qué pasa en la cabeza y en la interacción de quien delinque en un " +
    "momento dado.\n\n" +
    "Anunciar las tres miradas de hoy, que son tres respuestas distintas al porqué: la situación " +
    "(el delito como interacción), el cálculo (el delito como decisión) y el sentido (el delito " +
    "como experiencia). Y avisar de que ninguna basta sola. Eso es el cierre del capítulo.",
});

// ·· El delito como transacción situacional — 7 min ························

P.afirmacion(d, {
  texto: "El homicidio como una\ndiscusión que salió mal.",
  sub: "Luckenbill, 1977: la transacción situada.",
  notas:
    "7 MIN — EL DELITO COMO TRANSACCIÓN SITUACIONAL.\n\n" +
    "Enlaza directamente con Felson del día anterior: «el asesinato es menos un delito que una " +
    "consecuencia». Merece la pena hacer explícito el enlace.\n\n" +
    "Una transacción situada es una cadena de interacción entre dos o más personas que dura lo que " +
    "dura su presencia física mutua. Luckenbill analizó homicidios como secuencias de intercambios " +
    "cada vez más intensos —lo que Goffman llamaba una competición de caracteres— en las que cada " +
    "parte busca mantener o recuperar su prestigio mediante desafíos verbales y físicos.\n\n" +
    "El resultado lo determina el contexto social inmediato y las acciones de TODOS los " +
    "implicados, no solo la intención o los antecedentes de uno.",
});

P.rejilla(d, {
  titulo: "Qué escala un conflicto",
  sub: "Tedeschi y Felson: la coerción como conducta orientada a objetivos, no como arrebato.",
  items: [
    { etiqueta: "Obtener algo", sub: "Bienes, servicios, seguridad.\nInfluir sobre el otro." },
    { etiqueta: "Hacer justicia", sub: "Atribuir culpa, sentir ira,\nquerer castigar la ofensa." },
    { etiqueta: "Defender la identidad", sub: "No parecer débil.\nSostener una imagen." },
    { etiqueta: "El ataque a la cara", sub: "Insultos y críticas disparan\nespirales de conflicto." },
    { etiqueta: "El alcohol", sub: "Deteriora el control cognitivo\ny sube la propensión al riesgo." },
    { etiqueta: "El público", sub: "Puede disuadir… o azuzar.\nSube lo que hay en juego." },
  ],
  notas:
    "Toda una teoría de la violencia construida sobre el modelo de Luckenbill. Detalle importante: " +
    "siguiendo a Bandura, consideran que TODA violencia es instrumental y mediada cognitivamente, " +
    "y rechazan la «agresión enfadada» automática. Es decir, rechazan la distinción clásica entre " +
    "violencia instrumental y expresiva.\n\n" +
    "La secuencia típica en las coerciones reactivas: se percibe una violación de normas y una " +
    "injusticia → se atribuye la culpa → aparece la ira → se expresa el agravio (reproche, " +
    "reclamación, negociación) → si se rechaza o se expresa con dureza, escala.\n\n" +
    "Y una asimetría que explica muchas escaladas: el autor minimiza el daño, la víctima lo " +
    "exagera. Cada uno tiene razón desde su sitio.\n\n" +
    "El capítulo desarrolla esto en un cuadro que no cubro. Que lo lean.",
});

P.dosColumnas(d, {
  titulo: "Dónde está la explicación",
  cols: [
    {
      rotulo: "En la persona",
      lineas: [
        "Rasgos estables de personalidad.",
        "Quien delinque «es así».",
        "La explicación viaja con el sujeto",
        "de una situación a otra.",
      ],
    },
    {
      rotulo: "En la situación",
      lineas: [
        "Señales del entorno inmediato.",
        "Las mismas personas hacen cosas",
        "distintas en sitios distintos.",
        "Horney, 2006, siguiendo a Mischel.",
      ],
    },
  ],
  notas:
    "Horney lo planteó en su discurso inaugural como presidenta de la American Society of " +
    "Criminology, o sea desde el púlpito más alto de la disciplina.\n\n" +
    "Su propuesta: para comprender el comportamiento delictivo es más útil subrayar la " +
    "especificidad de la situación que centrarse solo en rasgos estables. Apoyándose en el trabajo " +
    "de Walter Mischel sobre contingencias situacionales, critica las teorías de la personalidad " +
    "basadas en rasgos.\n\n" +
    "Y hace una petición metodológica concreta que conviene subrayar, porque es la clase de cosa " +
    "que decide qué se puede investigar: recopilad datos SITUACIONALES, no solo individuales, " +
    "especialmente en los estudios de curso de vida.\n\n" +
    "No es «o lo uno o lo otro»: es que la criminología llevaba décadas midiendo casi solo lo " +
    "primero.",
});

// ·· Toma de decisiones — 12 min ···········································

P.afirmacion(d, {
  texto: "¿Y si delinquir\nfuese una decisión?",
  sub: "La tradición más vieja de la criminología. Y la que más ha tenido que rectificar.",
  size: 44,
  notas:
    "12 MIN — TOMA DE DECISIONES. El bloque más largo de la sesión.\n\n" +
    "El arco que vamos a recorrer, y conviene anunciarlo: racionalidad perfecta (Becker) → " +
    "racionalidad acotada (Cornish y Clarke) → los dos sistemas (Kahneman). Cada paso conserva la " +
    "idea de que hay decisión y le quita pureza.\n\n" +
    "Los orígenes están en Beccaria y Bentham, o sea en el siglo XVIII y en el capítulo 1. " +
    "Bentham: toda acción humana puede evaluarse por la cantidad de placer o dolor que produce; el " +
    "delito es una acción en la que el actor evaluó que los beneficios superaban los costes. Y de " +
    "ahí la función del legislador: diseñar sanciones que reequilibren la ecuación.",
});

P.cita(d, {
  texto: "Se comete el delito si la recompensa esperada es mayor que la alternativa legal.",
  atribucion: "Gary Becker, 1968 · Crime and Punishment: An Economic Approach",
  rel: "images/garybecker.jpg",
  pieImg: "Becker y Landes (eds.), Essays in the Economics of Crime and Punishment, 1974",
  size: 25,
  notas:
    "El artículo que resucita el paradigma racionalista, ahora con aparato microeconómico.\n\n" +
    "El modelo: se comparan los beneficios del acto ilegal con sus costes —probabilidad de ser " +
    "descubierto, severidad del castigo— más los costes de oportunidad, por ejemplo los salarios " +
    "legales perdidos.\n\n" +
    "Y hay una segunda mitad que se suele olvidar y que es la que da política criminal: el problema " +
    "de la SOCIEDAD, que es elegir cuánto esfuerzo de aplicación de la ley y cuánta gravedad de " +
    "castigo para minimizar la pérdida social total —daño del delito, más costes de aplicación, " +
    "más costes de sanción. O sea, castigar tiene un coste y por tanto castigar más no siempre " +
    "sale a cuenta.\n\n" +
    "Becker ganó el Nobel de Economía. Su artículo inspiró toda la corriente de análisis económico " +
    "del derecho.",
});

P.rejilla(d, {
  titulo: "Por dónde hace agua",
  items: [
    { etiqueta: "Racionalidad perfecta", sub: "Supone información completa\ny cálculo preciso." },
    { etiqueta: "Neutralidad al riesgo", sub: "No contempla aversión\nni propensión al riesgo." },
    { etiqueta: "Miopía temporal", sub: "Descontamos mucho el futuro:\nla sanción lejana disuade poco." },
    { etiqueta: "Desigualdad", sub: "Trata el delito como elección\nindividual y deja lo social\nen segundo plano." },
  ],
  notas:
    "SACRIFICABLE a la mitad si voy con retraso: quedarse con racionalidad perfecta y miopía " +
    "temporal, que son las dos que se usan después.\n\n" +
    "La miopía temporal es la que tiene consecuencias prácticas más claras y merece un ejemplo: " +
    "una pena de cárcel que llegará tras un proceso de tres años disuade mucho menos que una " +
    "sanción pequeña e inmediata. Es el descuento hiperbólico, y explica por qué endurecer penas " +
    "suele ser menos eficaz que aumentar la probabilidad de ser detectado.\n\n" +
    "Aun con las críticas, el artículo revitalizó el enfoque y generó una enorme investigación " +
    "empírica. Las críticas no lo tiraron: lo corrigieron.",
});

P.cita(d, {
  texto: "Actúan con intención y propósito, pero su racionalidad está limitada por la información, la presión del momento y los sesgos.",
  atribucion: "Cornish y Clarke, 1986 · The Reasoning Criminal",
  size: 26,
  notas:
    "La racionalidad acotada (bounded rationality). El paso teórico que salva el enfoque.\n\n" +
    "En lugar de un calculador abstracto, describen a alguien que toma decisiones prácticas en " +
    "contextos concretos: elegir una casa sin alarma, evitar lugares vigilados, preferir delitos de " +
    "bajo esfuerzo.\n\n" +
    "Y hay evidencia: los estudios con ladrones de coches o carteristas muestran que sí ponderan " +
    "riesgos inmediatos y oportunidades visibles, pero de forma rápida y heurística, no mediante " +
    "cálculos precisos.\n\n" +
    "Lo importante de este paso es que permite incorporar los hallazgos de la psicología " +
    "cognitiva, que es exactamente lo que viene ahora. Y que Clarke es también el padre de la " +
    "prevención situacional, que reaparece al final de la sesión con los guiones.\n\n" +
    "NOTA DE MONTAJE: esta diapositiva va sin retrato a propósito. En la carpeta hay un " +
    "images/ronaldclarke.jpg cuya identidad no he podido verificar, y prefiero no rotular una cara " +
    "con un nombre que no puedo confirmar. Si confirmas que es él, se añade en un minuto.",
});

P.cita(d, {
  texto: "El Sistema 1 domina la mayoría de las decisiones cotidianas. El Sistema 2 solo interviene cuando hace falta esfuerzo.",
  atribucion: "Daniel Kahneman, 2011 · Pensar rápido, pensar despacio",
  rel: "images/Daniel-Kahneman.jpg",
  pieImg: "Daniel Kahneman (1934-2024)",
  size: 24,
  notas:
    "Kahneman también Nobel de Economía, y también sin ser economista: era psicólogo. Detalle que " +
    "conecta con el capítulo 1 y la interdisciplinariedad.\n\n" +
    "Antes de los dos sistemas, dos hallazgos suyos que afectan directamente a la disuasión:\n" +
    "· No evaluamos probabilidades de forma lineal: sobrestimamos las bajas y subestimamos las " +
    "altas. Para quien delinque, el riesgo de ser atrapado puede percibirse muy distorsionado, " +
    "unos magnificándolo y otros ignorándolo.\n" +
    "· Descuento hiperbólico: preferimos recompensas inmediatas aunque sean pequeñas frente a " +
    "castigos lejanos.\n\n" +
    "Los dos socavan el supuesto de que subir la pena disuade proporcionalmente.",
});

P.dosColumnas(d, {
  titulo: "Los dos sistemas",
  cols: [
    {
      rotulo: "Sistema 1",
      lineas: [
        "Rápido, automático, intuitivo.",
        "Heurísticas y emociones.",
        "Sin esfuerzo consciente.",
        "Peleas, hurtos oportunistas.",
      ],
    },
    {
      rotulo: "Sistema 2",
      lineas: [
        "Lento, deliberativo, analítico.",
        "Cálculo y anticipación.",
        "Cuesta esfuerzo.",
        "Fraude financiero, corrupción.",
      ],
    },
  ],
  notas:
    "El reparto por tipo de delito es un ejemplo expositivo, y hay que decirlo: en la práctica los " +
    "dos sistemas no operan aislados.\n\n" +
    "Muchos delitos ocurren en contextos de alta emocionalidad, presión social o búsqueda de " +
    "gratificación inmediata, y ahí predomina el Sistema 1. En los que hay planificación —fraudes, " +
    "robos organizados, corrupción— se aprecia más el Sistema 2, y las entrevistas con " +
    "delincuentes de cuello blanco o ladrones profesionales muestran que analizan costes de " +
    "seguridad, probabilidad de captura y ganancias esperadas.\n\n" +
    "Pero el matiz que cierra el bloque va en la diapositiva siguiente.",
});

P.afirmacion(d, {
  texto: "Incluso los delitos planificados\nse cometen a menudo\nen piloto automático.",
  sub: "Los dos sistemas no funcionan por separado.",
  size: 36,
  notas:
    "El correctivo al esquema anterior, para que no se lo lleven como una taxonomía limpia.\n\n" +
    "Es también un buen momento para nombrar una tensión de fondo del bloque: cuanto más " +
    "realistamente describimos la decisión —limitada, sesgada, emocional, automática— menos se " +
    "parece a lo que la política criminal supone cuando confía en la disuasión.\n\n" +
    "Puente a la última diapositiva del bloque: resumamos qué sabemos de verdad.",
});

P.rejilla(d, {
  titulo: "Qué sabemos de cómo deciden",
  sub: "Bernasco, 2017.",
  items: [
    { etiqueta: "Racionalidad limitada", sub: "Información escasa, poco tiempo,\natajos mentales, sesgo del presente." },
    { etiqueta: "Situación", sub: "Muchos delitos son oportunistas:\nun coche sin cerrar." },
    { etiqueta: "Sesgos", sub: "Exceso de confianza en no ser\ndetectado. Optimismo irreal." },
    { etiqueta: "Aprendizaje", sub: "Mejoran con la experiencia,\npero solo en su ámbito." },
    { etiqueta: "Diferencias", sub: "Impulsividad, sustancias,\nautocontrol, salud mental." },
    { etiqueta: "Lo social", sub: "Group think, reputación,\nestatus dentro de la red." },
  ],
  notas:
    "El resumen del bloque. Se puede leer rápido: es una diapositiva de síntesis.\n\n" +
    "La conclusión que quiero: existe una instrumentalidad real a la hora de delinquir, y es muy " +
    "relevante. Pero no podemos simplificar lo que eso implica. La elección racional pura no " +
    "sobrevive; la idea de que hay decisión, sí.\n\n" +
    "El último punto —lo social y lo emocional— es el puente al bloque siguiente. Decirlo así: " +
    "«y aquí, en la última casilla, es donde la propia literatura de la decisión reconoce que le " +
    "falta algo».",
});

// ·· Emoción, significado y delito — 11 min ································

P.afirmacion(d, {
  texto: "Se transgrede también\npor lo que se siente.",
  sub: "Ni por cálculo, ni por déficit. Por la emoción, o por lo que uno quiere ser ante los demás.",
  size: 44,
  notas:
    "11 MIN — EMOCIÓN, SIGNIFICADO Y DELITO. Es el bloque que más engancha; no correr.\n\n" +
    "El planteamiento del capítulo: casi toda la criminología mira el delito de dos maneras. O " +
    "como cálculo, que es lo que acabamos de ver. O como síntoma de algo que va mal —la pobreza, " +
    "la familia rota— que es lo que verán en teorías criminológicas. Las dos capturan dimensiones " +
    "relevantes, pero dejan fuera algo que cualquiera que haya sido joven reconoce.\n\n" +
    "Preguntar al aula por una transgresión menor propia y por qué la hicieron. Rara vez responden " +
    "«calculé». Es la mejor entrada al bloque, y funciona mejor si el ejemplo lo ponen ellos.\n\n" +
    "Nee: las emociones no son solo desinhibidoras, tienen un papel facilitador y motivador. Y " +
    "esto se apoya en dos cambios de fondo en psicología y neurociencia: se abandona la idea de " +
    "cerebro y cuerpo como entidades distintas (cognición incorporada), y se reconoce que la " +
    "emoción es parte plenamente integrada del procesamiento de información.",
});

P.cita(d, {
  texto: "La criminología ha buscado defectos psicológicos y entornos sociales, y ha descuartado las atracciones positivas, a menudo maravillosas, de la experiencia vivida de la criminalidad.",
  atribucion: "Jack Katz, 1988 · Seductions of Crime",
  size: 24,
  notas:
    "OJO: en la pantalla la cita está parafraseada y comprimida. La formulación del libro es que " +
    "la investigación criminológica ha estado preocupada por buscar fuerzas de trasfondo —defectos " +
    "psicológicos, entornos sociales— DESCUIDANDO las atracciones positivas, a menudo " +
    "«maravillosas», dentro de la experiencia vivida de la criminalidad.\n\n" +
    "La tesis de Katz: los delitos son «sensualmente atractivos». La criminalidad no es meramente " +
    "una reacción contra estructuras sociales; tiene una genuina creatividad experiencial. Y la " +
    "atracción más convincente en muchas experiencias desviadas es superar un desafío personal a " +
    "la existencia MORAL, no material.\n\n" +
    "Esa última distinción es la clave del autor y conviene decirla despacio: lo que está en juego " +
    "no es lo que se gana, es quién se es.",
});

P.rejilla(d, {
  titulo: "Las seducciones del delito",
  items: [
    { etiqueta: "Humillación y rabia", sub: "El «sacrificio justiciero»:\nconvertir la humillación\nen rabia defendible." },
    { etiqueta: "Emociones furtivas", sub: "Hurto, vandalismo. El subidón\nno viene del botín, viene\nde jugar con las apariencias." },
    { etiqueta: "Pavor y crueldad", sub: "El «malote»: cultivar un aura\nde amenaza e imponer\nsu significado." },
    { etiqueta: "Suspense y dureza", sub: "El atracador que ha de sostener\nuna indiferencia a las\nconsecuencias." },
    { etiqueta: "Vértigo", sub: "Oscilar entre el juego con lo\ndesviado y la vergüenza\nparanoica de conformarse." },
  ],
  notas:
    "Pasar por encima. Son etiquetas, no contenido a memorizar; el capítulo las desarrolla en un " +
    "cuadro que no cubro.\n\n" +
    "Si hay que elegir una, las EMOCIONES FURTIVAS (sneaky thrills), porque es la que más " +
    "reconocen: hurto en tiendas, vandalismo, allanamiento. No están impulsadas por recompensas " +
    "materiales obvias, sino que ofrecen una forma «mágica» de ocultar y poner a prueba deseos " +
    "censurados. Katz habla de euforia y de «profanación secreta». La emoción viene de coquetear " +
    "con la desviación y probar los límites del yo.\n\n" +
    "El sacrificio justiciero también funciona bien porque explica homicidios que parecen " +
    "absurdos: el agresor interpreta la acción de la víctima como un ataque a un valor eterno y a " +
    "su propia valía, y la rabia le permite cegarse a su futuro.",
});

P.afirmacion(d, {
  texto: "El delito como vehículo\nde significado.",
  sub: "Criminología cultural: importa menos lo que se obtiene que lo que el acto comunica.",
  size: 44,
  notas:
    "Katz es la intuición fundacional; la criminología cultural es la corriente que hace del " +
    "significado su objeto central.\n\n" +
    "Su tesis: transgredir opera a menudo como respuesta estética, ritual de afirmación personal o " +
    "impugnación simbólica frente a la alienación y el tedio cotidianos. Desde el grafiti hasta " +
    "los disturbios juveniles, la infracción se interpreta como búsqueda de autenticidad, respeto " +
    "y soberanía dentro de una estructura social que niega sistemáticamente esas formas de " +
    "reconocimiento.\n\n" +
    "Los ejemplos del libro son los buenos: el grafiti y las carreras ilegales no se entienden por " +
    "lo que se gana sino por lo que se vive. El subidón de robar por robar, el vértigo de pintar " +
    "un vagón entero jugándose el tipo.\n\n" +
    "Contrapunto honesto, por si alguien lo plantea: esta corriente se ha criticado por " +
    "romantizar. Conviene reconocerlo en vez de esquivarlo.",
});

P.afirmacion(d, {
  texto: "Edgework.",
  sub: "Ir al borde que separa el orden del caos, el control de la catástrofe. Y volver.",
  notas:
    "Concepto de Stephen Lyng, adoptado por la criminología cultural para descifrar la fascinación " +
    "por el peligro.\n\n" +
    "Lo importante, y lo contraintuitivo: NO son impulsos autodestructivos ni irracionales. Estas " +
    "incursiones exigen un dominio técnico refinado y una agudeza sensorial extrema, precisamente " +
    "para mantener el control allí donde las circunstancias amenazan con desbordarse. Conducción " +
    "temeraria, carreras clandestinas, confrontaciones ritualizadas entre grupos rivales. El valor " +
    "no está en el desenlace material sino en la intensidad afectiva.\n\n" +
    "El marco social que lo explica es de Jock Young: el «aburrimiento vertiginoso» de la sociedad " +
    "contemporánea, una atmósfera que estimula un deseo infinito de sensaciones a través del " +
    "consumo mientras impone vidas rutinarias, precarizadas y vigiladas. La transgresión queda " +
    "como una de las pocas arenas donde sentirse indiscutiblemente vivo.\n\n" +
    "Es una idea con la que se puede discutir, y merece la pena invitarles a hacerlo.",
});

P.imagenSangre(d, {
  rel: "images/pista_baile.jpg",
  titulo: "Elegí no elegir\nla vida. Elegí\notra cosa.",
  pieImg: "Foto: Charles Puaud / Unsplash.",
  velo: 52,
  notas:
    "El monólogo de Renton en Trainspotting. Leer el final, que es lo que importa:\n\n" +
    "«La gente piensa que todo se trata de miseria y desesperación y muerte y toda esa mierda, que " +
    "no debe ignorarse, pero lo que olvidan es que uno se inyecta por placer, por el placer que le " +
    "produce. De lo contrario, no lo haríamos. Después de todo, no somos tan estúpidos.»\n\n" +
    "EL ARGUMENTO, que es serio y no anecdótico: mirado con las gafas de siempre, el consumo es " +
    "adicción (patología) o es un mercado (cálculo). La criminología cultural añade una tercera " +
    "mirada que las otras dos dejan fuera, la del sentido y el placer. Y ninguna explicación del " +
    "consumo se sostiene si no da cuenta de por qué, para quien consume, aquello merece la pena.\n\n" +
    "Esto NO es apología: es una condición de adecuación de cualquier teoría. Conviene decirlo " +
    "explícitamente, porque en un aula de primero alguien lo va a entender mal.\n\n" +
    "Para la lectura: el capítulo recomienda dos documentales, «Everybody in the Place» de Jeremy " +
    "Deller y el proyecto «People and Dancefloors». El de Deller es excelente y está en YouTube.",
});

P.afirmacion(d, {
  texto: "¿Quién decide qué\nconsumo es delito?",
  sub: "La tesis de la normalización: Parker, Aldridge y Measham.",
  size: 44,
  notas:
    "Para toda una generación, cierto consumo recreativo dejó de ser cosa de una subcultura " +
    "desviada y pasó a ser un ingrediente más del ocio. Normalizado.\n\n" +
    "Y en cuanto se admite que consumir tiene sentido y placer, deja de poder tratarse solo como " +
    "enfermedad o como delito. La pregunta pasa a ser quién tiene el poder de trazar la línea " +
    "entre el consumo legítimo —tomarse una copa— y el delictivo.\n\n" +
    "Es exactamente la pregunta de la sesión 1 con otra ropa: qué cuenta como delito y quién lo " +
    "decide. Merece la pena señalar que el capítulo vuelve al mismo sitio por otro camino.\n\n" +
    "El caso histórico que lo ilustra: la Criminal Justice Act británica de 1994, que llegó a " +
    "prohibir las reuniones con música caracterizada por «una sucesión de ritmos repetitivos». Un " +
    "Estado definiendo un delito por su compás.",
});

P.afirmacion(d, {
  texto: "El ocio también hace daño.",
  sub: "Ocio desviado: la noche, la fiesta y el turismo vendidos como experiencia.",
  size: 44,
  notas:
    "SACRIFICABLE si voy con retraso.\n\n" +
    "Hayward y Smith, sobre el «nexo crimen-consumo». Vivimos en una cultura del consumo —la " +
    "modernidad líquida de Bauman, que volverá en el capítulo 9— que enseña a desear ya, sin " +
    "espera, y que convierte la propia transgresión en un producto con su estética y su mercado.\n\n" +
    "El argumento tiene filo: el mismo mundo que vende la emoción y la inmediatez no puede luego " +
    "extrañarse de que algunos las persigan por vías que no considera legítimas.\n\n" +
    "Y el ocio mercantilizado genera daños sociales, ambientales y personales que rara vez " +
    "contamos como delito. Cierra el círculo con la zemiología de la sesión 1: otra vez daño sin " +
    "delito.",
});

// ·· Los guiones del delito — 5 min ········································

P.afirmacion(d, {
  texto: "Entre la decisión\ny el resultado\nmedian muchos pasos.",
  sub: "Los guiones del delito (crime scripts). Cornish, 1994.",
  size: 40,
  notas:
    "5 MIN — LOS GUIONES DEL DELITO.\n\n" +
    "Un guion es la secuencia completa de acciones que hay que realizar antes, durante y después " +
    "de cometer un delito concreto, junto con los recursos, habilidades y actores que cada paso " +
    "requiere. Cornish lo tomó prestado de la psicología cognitiva.\n\n" +
    "En el fondo son lo que Katz llamaba los cursos de acción del delito, descritos uno por uno. " +
    "Merece la pena señalar ese puente: el bloque anterior y este no están tan lejos.\n\n" +
    "Hay además una larga tradición de investigación cualitativa sobre el cómo del delito; los " +
    "guiones son la herramienta que la sistematiza.",
});

P.rejilla(d, {
  titulo: "Un guion: el tráfico de reptiles",
  sub: "Arenas, 2024. Cada paso admite una medida de prevención distinta.",
  items: [
    { etiqueta: "Encontrar comprador", sub: "Antes de mover nada\nhay que tener salida." },
    { etiqueta: "Viajar al origen", sub: "Y elegir el país\ndel que sacarlo." },
    { etiqueta: "Elegir aeropuerto", sub: "Con controles débiles." },
    { etiqueta: "Documentar", sub: "Papeles falsos\no preparar el escondite." },
    { etiqueta: "Pasar el control", sub: "El único paso que\nnormalmente vigilamos." },
    { etiqueta: "Entregar el animal", sub: "Y cobrar." },
  ],
  notas:
    "El ejemplo del capítulo, y de una autora de casa: Lorea Arenas, coautora del manual.\n\n" +
    "LA IDEA, que es la que hay que dejar clavada antes de la actividad: cada uno de esos pasos " +
    "admite una medida de control distinta. Formación del personal de aduanas, avisos a los " +
    "pasajeros, recompensas por denuncia, control de los anuncios donde se busca comprador. Si " +
    "solo vigilas el control del aeropuerto, estás interviniendo en una casilla de seis.\n\n" +
    "Cómo se construyen: expedientes judiciales, entrevistas a condenados, atestados policiales, " +
    "fuentes abiertas. Se han aplicado al terrorismo, al fraude, al narcotráfico.\n\n" +
    "Quien quiera aprender a construir uno tiene en Arenas (2024) una guía detallada en castellano. " +
    "Decirlo: es material directamente utilizable para un TFG.",
});

P.actividad(d, {
  rotulo: "ACTIVIDAD · SESIÓN 2 · 20 MIN",
  titulo: "Construid un guion",
  pasos: [
    "Grupos pequeños. A cada uno, un delito concreto y cotidiano.",
    "Escribid los pasos: antes, durante y después. Con sus recursos y actores.",
    "Elegid el paso donde intervendríais. ¿Por qué ese y no el del momento del delito?",
  ],
  notas:
    "Cierra la sesión y el capítulo, y anticipa el último capítulo del libro, sobre prevención.\n\n" +
    "DELITOS QUE FUNCIONAN, porque tienen pasos visibles y ellos los conocen: el robo de bicicletas " +
    "en el campus; la reventa de entradas falsas por redes; el hurto en un supermercado; la estafa " +
    "del wallapop; el robo de móviles en una zona de ocio nocturno; el fraude del falso soporte " +
    "técnico por teléfono.\n\n" +
    "LO QUE TIENE QUE SALIR:\n" +
    "· Que casi ningún delito es un acto único, sino un proceso con muchas decisiones.\n" +
    "· Que la intuición «hay que poner más policía en el momento del robo» es casi siempre la peor " +
    "casilla: es la más cara, la más tardía y la más fácil de esquivar.\n" +
    "· Que los pasos previos —encontrar comprador, conseguir la herramienta, elegir el sitio— " +
    "suelen ser más baratos de bloquear.\n\n" +
    "Si el grupo va rápido, la pregunta de nivel: ¿vuestra intervención previene el delito o lo " +
    "desplaza a otro sitio? Es el debate clásico de la prevención situacional y les deja pensando " +
    "para el último capítulo.\n\n" +
    "Reservar tres minutos finales para el cierre del capítulo, que no conviene saltarse.",
});

P.cierre(d, {
  frase: "Ninguna de estas\nexplicaciones basta sola.",
  remate: "El delito tiene cálculo, situación y sentido. Y es un proceso, no un acto.",
  notas:
    "El cierre del capítulo. Recapitular en cuatro frases:\n\n" +
    "· Empezamos preguntando si la criminología estudia el delito o el daño, y lo dejamos sin " +
    "resolver. No por descuido: la respuesta no está cerrada y las dos posiciones tienen " +
    "argumentos.\n" +
    "· Cuando decimos que el delito es trivial y mundano estamos describiendo la delincuencia " +
    "común, que es la que más hemos estudiado y la que el sistema persigue con más diligencia.\n" +
    "· El delito se concentra en pocos lugares y pocas horas, y esas concentraciones son bastante " +
    "estables. Pero cada vez que desagregamos, la regularidad se descompone en pautas distintas y " +
    "a veces opuestas. Desconfiad de las afirmaciones generales que no digan de qué delito, de qué " +
    "víctimas y de qué sitios hablan.\n" +
    "· La dimensión instrumental es real, pero la racionalidad es limitada, está sometida a la " +
    "presión del momento y convive con emociones que no son ruido a eliminar del modelo sino parte " +
    "de lo que empuja a delinquir.\n\n" +
    "Y la pregunta que queda abierta, que es la que quiero que se lleven a casa: si el delito es " +
    "una categoría que el Estado construye, si lo que medimos depende de quién denuncia, y si las " +
    "regularidades se deshacen en cuanto miramos de cerca, ¿qué queda exactamente de eso que " +
    "llamamos «el delito»? La respuesta provisional del libro: queda bastante, siempre que se sepa " +
    "de qué se está hablando en cada caso.\n\n" +
    "Anunciar el capítulo siguiente: los delincuentes.",
});

P.guardar(d, DESTINO);
