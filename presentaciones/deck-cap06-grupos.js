// Capítulo 6 · "Grupos y entidades criminales"  —  grupos.qmd
// CUATRO sesiones de una hora. El capítulo no son tres secciones de un mismo
// tema: son tres objetos distintos (crimen organizado, delito corporativo,
// crimen de Estado) con literaturas y ejemplos propios. La escalera del poder
// es el hilo que los une y se recupera en cada portada.
// Estilo "B claro". Genera Cap06_Grupos-y-entidades.pptx

const path = require("path");
const P = require("./plantilla-b-claro");

const LIBRO = "/sessions/clever-modest-cray/mnt/intro_crimi";
const DESTINO = path.join(LIBRO, "presentaciones", "Cap06_Grupos-y-entidades.pptx");

const d = P.crear({
  titulo: "Grupos y entidades criminales",
  subject: "Capítulo 6 · Criminología: una introducción",
  autoria: "Juanjo Medina",
  imgDir: LIBRO,
  cacheDir: path.join(LIBRO, "presentaciones", ".cache-imagenes"),
});

// ###########################################################################
//  SESIÓN 1 — El crimen organizado: el concepto y el mito
// ###########################################################################

P.portada(d, {
  cintillo: "CAPÍTULO 6  ·  SESIÓN 1 DE 4",
  titulo: "Grupos y entidades\ncriminales",
  autoria: "Juanjo Medina",
  notas:
    "POR QUÉ CUATRO SESIONES Y NO DOS O TRES.\n\n" +
    "No es solo que el capítulo sea largo (701 líneas frente a las 600 de los dos anteriores). Es " +
    "que no son tres secciones de un mismo tema: son TRES OBJETOS DISTINTOS —crimen organizado, " +
    "delito corporativo, crimen de Estado— con literaturas, métodos y ejemplos propios. No fluyen " +
    "como un argumento continuo.\n\n" +
    "Y la densidad de casos concretos es excepcional: DuPont, colza, amianto, Prestige, " +
    "Aznalcóllar, Bankia, Fórum, cárteles, Papeles de Panamá, amnistía fiscal, Volkswagen, " +
    "Pescanova, Challenger, HSBC, García Luna, Gaza, USAID. Cada uno son dos o tres minutos y son " +
    "la columna vertebral pedagógica del capítulo. Correrlos es desperdiciarlos.\n\n" +
    "REPARTO (cada sesión: ~35 min de exposición + actividad):\n" +
    "S1 · El crimen organizado: el concepto y el mito. Qué es (9) · La representación mediática (8) " +
    "· Las actividades y los mercados (10).\n" +
    "S2 · El crimen organizado: quién, y cómo se enreda. De pirámides a redes (9) · Cómo teorizarlo " +
    "(7) · La definición legal (6) · Arraigo y glocal (7) · Economía legal e infiltración (7).\n" +
    "S3 · Las empresas: el daño. DuPont (8) · Los seis ámbitos (10) · Lo que tienen en común (9) · " +
    "Ocupacional frente a corporativo (6).\n" +
    "S4 · Las empresas: la respuesta. Y el Estado. Las cuatro vías (9) · La responsabilidad penal " +
    "(7) · La regulación responsiva (6) · Cómo se esquiva (8) · El Estado (8).\n\n" +
    "UNA PREGUNTA DE WOOCLAP POR SESIÓN, cuatro en total.\n\n" +
    "SI HUBIERA QUE COMPRIMIRLO A TRES SESIONES: fundir S1 y S2 sacrificando la tipología de " +
    "mercados de Beckert y Dewey, la definición legal y el bloque de infiltración estatal. Se " +
    "pierde bastante.\n\n" +
    "ARRANQUE: el capítulo anterior trató a la persona que delinque. Hoy empiezan los colectivos.",
});

P.afirmacion(d, {
  texto: "Buena parte del delito que\nmás daño hace no lo\ncomete nadie a solas.",
  sub: "Se organiza. Los actores de hoy son grupos, empresas y el propio Estado.",
  size: 38,
  notas:
    "Arranque del capítulo. Hay quien se asocia, se reparte tareas, hereda oficios y contactos, y " +
    "sostiene durante años una empresa que da dinero y a veces poder.\n\n" +
    "Enlazar con el capítulo 5: allí la criminología llevaba un siglo proyectando teorías sobre una " +
    "figura individual. Aquí esa figura no sirve.\n\n" +
    "Y anticipar la tesis incómoda, que conviene soltar de entrada porque ordena las cuatro " +
    "sesiones: el crimen mejor organizado y más dañino de nuestras sociedades NO lo cometen las " +
    "mafias. Lo cometen empresas legales y los propios Estados. Y a eso casi nunca lo llamamos " +
    "crimen organizado.",
});

P.figuraAlta(d, {
  titulo: "¿Administración pública\no empresa privada?",
  quéMirar: "El chiste resume la tesis de las cuatro sesiones.",
  rel: "images/comic.png",
  w: 4.4, h: 5.5,
  fuente: "Elaboración usando ChatGPT.",
  notas:
    "Veinte segundos. Dejar que lo lean y que se rían, y luego enunciar la escalera.\n\n" +
    "Preguntar al aula qué les viene a la cabeza cuando oyen «crimen organizado». Van a decir " +
    "mafia, padrino, narcos. Ese es el punto de partida que vamos a desmontar en la sesión de hoy.",
});

P.rejilla(d, {
  titulo: "Una escalera de poder",
  sub: "A cada peldaño, más poder del actor y más difícil aplicar la etiqueta penal.",
  items: [
    { etiqueta: "Los grupos", sub: "Crimen organizado. Nadie duda\nen llamarlo criminal.\nSesiones 1 y 2." },
    { etiqueta: "Las empresas", sub: "Delinquen como organización\ny en su propio beneficio.\nSesiones 3 y 4." },
    { etiqueta: "El Estado", sub: "Delinque siendo a la vez\nquien define qué es delito.\nFinal de la sesión 4." },
  ],
  notas:
    "LA DIAPOSITIVA-ANDAMIO DE LAS CUATRO SESIONES. Volver a ella en cada portada.\n\n" +
    "La lógica: a cada peldaño que subimos el actor tiene más poder, y la etiqueta penal resulta " +
    "más difícil de aplicar en la práctica.\n\n" +
    "LA ADVERTENCIA QUE HAY QUE DAR CON LA METÁFORA, porque el propio capítulo se la hace: la " +
    "escalera es funcional a efectos pedagógicos, pero sugiere que son compartimentos estancos. Y " +
    "no lo son. El crimen organizado penetra las instituciones, la empresa se sirve del Estado y el " +
    "Estado de la empresa. Los presentamos uno a uno por razones expositivas, no porque la realidad " +
    "venga separada así.",
});

// ·· ¿Qué es la delincuencia organizada? — 9 min ···························

P.afirmacion(d, {
  texto: "No está ahí fuera, como\nlas pirámides de Egipto.",
  sub: "Los fenómenos son reales. La categoría que los reúne es un constructo.",
  size: 42,
  notas:
    "9 MIN — ¿QUÉ ES LA DELINCUENCIA ORGANIZADA?\n\n" +
    "La comparación es de von Lampe. Cuando una física habla de un electrón o una geóloga de una " +
    "falla, hay consenso sobre aquello de lo que hablan. Con el crimen organizado no.\n\n" +
    "Los fenómenos existen —los mercados ilegales, los grupos violentos, la corrupción— pero la " +
    "categoría que los reúne es una manera de recortar un fragmento del mundo social y ponerle un " +
    "nombre. Y eso obliga a preguntar QUIÉN lo construye y CON QUÉ FIN. Es exactamente la lección " +
    "del capítulo 1.\n\n" +
    "El origen: probablemente el Informe Anual de la Sociedad Neoyorquina para la Prevención del " +
    "Delito, de 1896, para referirse a la prostitución y el juego ilegal protegidos por autoridades " +
    "corruptas. Desde entonces se ha usado para la Cosa Nostra, los Yakuza, las tríadas, los narcos " +
    "colombianos y mexicanos, los moteros escandinavos...\n\n" +
    "Paoli y Vander Beken: conserva un fuerte poder evocador, lo que explica su éxito político, " +
    "pero la multitud de actores y actividades que engloba lo convierte en un concepto ambiguo que " +
    "no puede usarse, sin especificación, como base para el análisis empírico ni para la política.",
});

P.dosColumnas(d, {
  titulo: "Dos formas de entenderlo",
  cols: [
    {
      rotulo: "Organización de actividades",
      lineas: [
        "Mercados y negocios ilegales,",
        "con su logística y su",
        "contabilidad.",
        "El foco está en el QUÉ.",
      ],
    },
    {
      rotulo: "Organización de delincuentes",
      lineas: [
        "La banda, la familia, la",
        "hermandad, con su estructura",
        "y su jerarquía.",
        "El foco está en el QUIÉN.",
      ],
    },
  ],
  notas:
    "La distinción ordena las dos primeras sesiones: hoy vemos el QUÉ, el próximo día el QUIÉN.\n\n" +
    "Y hay un movimiento pendular que merece contarse porque es historia de la disciplina: primero " +
    "importó el qué, luego se impuso el quién con el mito de la mafia, y la investigación reciente " +
    "ha vuelto a desplazar el foco hacia las actividades.",
});

P.afirmacion(d, {
  texto: "El mito de la conspiración\nextranjera.",
  sub: "Una organización secreta, importada, gobernada desde la cúspide por un jefe.",
  size: 44,
  notas:
    "La imagen que Hollywood popularizó con El padrino, Los intocables y Los Soprano, y que la " +
    "criminología convirtió en modelo científico.\n\n" +
    "DONALD CRESSEY, Theft of the Nation (1969). En pleno pánico estadounidense de los sesenta, y " +
    "con acceso privilegiado a los datos de una comisión presidencial, presentó la Cosa Nostra como " +
    "una confederación de familias unificadas por una comisión, con jerarquía, división del trabajo " +
    "y ritos de iniciación.\n\n" +
    "EL PROBLEMA NO FUE LA DESCRIPCIÓN, y esto es importante para ser justos con Cressey: fue la " +
    "idea de que quien entiende la Cosa Nostra entiende el crimen organizado en Estados Unidos. " +
    "Reducido a eso, su trabajo dio pie a la alien conspiracy theory.\n\n" +
    "LA DECONSTRUCCIÓN POSTERIOR, la era pos-Cressey:\n" +
    "· La «guerra» fundacional de 1931 no dejó rastro documental más allá de un puñado de " +
    "asesinatos, y hay actividad de crimen organizado en EE. UU. mucho antes y con independencia de " +
    "cualquier grupo llegado del sur de Italia.\n" +
    "· Cuando Anderson en Filadelfia y Reuter en Nueva York examinaron de cerca cómo funcionaban " +
    "las familias, descubrieron que no operaban como una gran empresa unificada.\n\n" +
    "PARA LA LECTURA: el cuadro sobre Al Capone. Cortejaba a la prensa, y un reportero del Chicago " +
    "Tribune reconocería después que «lo construimos nosotros como el gran capo del mundo del " +
    "hampa». El personaje era real y violento; la aureola de omnipotencia se fabricó a medias entre " +
    "la policía, los periódicos y el propio Capone.",
});

P.cita(d, {
  texto: "Los italianos no eran más poderosos que antes; sencillamente, sus rivales habían dejado de ser vistos.",
  atribucion: "Jenkins y Potter, 1987 · sobre el «ascenso» de la mafia en Filadelfia",
  size: 26,
  notas:
    "LA CITA CLAVE DEL BLOQUE, porque no habla del crimen organizado sino de cómo lo construyen " +
    "quienes lo persiguen.\n\n" +
    "La cita completa: el supuesto ascenso de la mafia después de 1960 no supuso ningún cambio real " +
    "de poder; reflejaba el uso de una perspectiva nueva por parte de las agencias oficiales, que " +
    "respondían a necesidades burocráticas urgentes.\n\n" +
    "Es la misma lección del capítulo 4 con las estadísticas policiales: lo que se registra mide " +
    "también la actividad de quien registra.\n\n" +
    "LAS CONSECUENCIAS DEL MITO, que es lo que hay que dejar clavado: al culpar al extranjero —el " +
    "siciliano, y después el colombiano, el chino, el albanés— se dejaba fuera del foco a los " +
    "SOCIOS LOCALES, que son esenciales para entenderlo: los políticos que cobraban por proteger el " +
    "negocio, la policía comprada, las empresas legales que compraban servicios ilícitos, y los " +
    "ciudadanos de a pie que consumían los bienes de esos mercados.\n\n" +
    "Preguntar al aula: si el problema viene siempre de fuera, ¿a quién le conviene ese relato?",
});

// ·· La representación mediática — 8 min ···································

P.afirmacion(d, {
  texto: "Hollywood le ha dedicado\nmás atención que las\nciencias sociales.",
  sub: "Y no solo por pereza: es un mundo opaco y peligroso de investigar.",
  size: 38,
  notas:
    "8 MIN — LA REPRESENTACIÓN MEDIÁTICA.\n\n" +
    "Dos razones para el desinterés académico: los sesgos culturales de la criminología, muy " +
    "focalizada en la delincuencia común e individual (capítulo 5), y la dificultad real de " +
    "investigar.\n\n" +
    "El ejemplo que lo hace concreto: Roberto Saviano vive bajo protección policial permanente " +
    "desde que publicó su libro sobre la Camorra.\n\n" +
    "PARA LA LECTURA hay un cuadro con la evolución del género en el cine, que funciona muy bien " +
    "como lectura: el gánster como antihéroe trágico en los años treinta; El padrino humanizando a " +
    "las familias en los setenta; Uno de los nuestros y Los Soprano desmantelando el romanticismo " +
    "en los noventa; y Narcos o Gomorra desplazando el foco a lo transnacional.\n\n" +
    "Si el aula está participativa, preguntar qué serie de mafias han visto y qué imagen les dejó. " +
    "Prepara el Wooclap.",
});

P.wooclap(d, {
  tipo: "ELECCIÓN MÚLTIPLE",
  pregunta: "¿Qué parte del PIB mundial\nmueve el crimen organizado?",
  opciones: ["En torno al 1,5 %", "En torno al 5 %", "En torno al 15 %", "En torno al 30 %"],
  notas:
    "W1 · LA RESPUESTA CORRECTA ES LA A.\n\n" +
    "El aula sobreestima casi siempre, y por mucho. Esa sobreestimación ES el contenido: viene " +
    "directamente de la imagen de omnipotencia que acabamos de describir.\n\n" +
    "Las estimaciones: Naciones Unidas calcula unos 900.000 millones de dólares al año, alrededor " +
    "del 1,5 % del producto mundial. La Comisión Europea, entre 92.000 y 188.000 millones de euros, " +
    "un 0,7-1,4 % del PIB de la Unión.\n\n" +
    "NO DAR LA RESPUESTA AL CERRAR LA VOTACIÓN: pasar a la diapositiva siguiente.\n\n" +
    "Y tener preparada la cautela, porque alguien la va a plantear: estas cifras estiman INGRESOS, " +
    "no DAÑO, que son cosas muy distintas. En México, donde la capacidad estatal es frágil, el " +
    "coste estimado de la violencia ronda el 18 % del PIB mientras el país dedica a justicia y " +
    "seguridad interior el 0,63 %, el nivel más bajo de la OCDE.",
});

P.rejilla(d, {
  titulo: "«Menos de lo que parece»",
  sub: "Reuter y Tonry, tras décadas estudiándolo.",
  items: [
    { etiqueta: "Ni omnipresente", sub: "Ni tan rentable. En torno al\n1 % del PIB, y casi todo\nson grupos pequeños." },
    { etiqueta: "Ni tan violento", sub: "Los mercados ilícitos son\nrelativamente pacíficos.\nLa violencia es cara." },
    { etiqueta: "Y en declive", sub: "Las grandes mafias clásicas\nllevan décadas cayendo." },
  ],
  notas:
    "AQUÍ SE RESPONDE AL WOOCLAP.\n\n" +
    "ESPAÑA encaja en ese orden de magnitud: la policía detectó 497 grupos en 2013, de los cuales " +
    "solo 29 eran de alta intensidad, y los ingresos de sus principales mercados ilícitos suman del " +
    "orden de 10.000 millones de euros. RETENED ESA CIFRA: vuelve en la sesión 3, y el contraste es " +
    "el mejor momento del capítulo.\n\n" +
    "SOBRE LA VIOLENCIA. Suele ser un último recurso: consume recursos, atrae a la policía y daña " +
    "la credibilidad del negocio. La literatura habla de una ECONOMÍA DE LA VIOLENCIA: buena parte " +
    "del efecto lo produce la amenaza creíble y la reputación, no el acto. Y muy rara vez alcanza " +
    "al ciudadano corriente, con excepciones dolorosas como México.\n\n" +
    "Matiz honesto: la investigación se ha concentrado en la violencia entre vendedores rivales y " +
    "ha mirado mucho menos la que se ejerce DENTRO de las redes —disciplina, cobro de deudas, " +
    "sospechas de delación, explotación de subordinados—, que sigue mal medida.\n\n" +
    "SOBRE EL DECLIVE. Cambios estructurales tanto como presión policial: la pérdida de fuerza de " +
    "los sindicatos, el fin de las viejas maquinarias políticas urbanas, Estados más capaces. Paoli " +
    "lo formula bien: el crimen organizado no solo crece cuando el Estado lo tolera, también cae " +
    "cuando se le retira esa aceptación.\n\n" +
    "La cita de cierre: «Son de tamaño natural, brotes comprensibles de culturas, sistemas " +
    "políticos y mercados locales. No son enormemente rentables. Económicamente importantes, en el " +
    "gran esquema de las cosas, casi nunca.»",
});

P.afirmacion(d, {
  texto: "Si el crimen organizado\npesa poco, la delincuencia\nde las empresas pesa mucho.",
  sub: "Un fraude contable o una burbuja pueden arruinar a millones. Lo veremos en la sesión 3.",
  size: 36,
  notas:
    "LA BISAGRA DEL CAPÍTULO ENTERO, anunciada ya en la primera sesión a propósito.\n\n" +
    "Sin trivializar el fenómeno ni exagerarlo: el daño mayor y más extendido lo causan actores a " +
    "los que casi nunca llamamos organizaciones criminales.\n\n" +
    "Decir explícitamente que volveremos a ello, para que el contraste del tercer día tenga efecto: " +
    "guardaos la cifra de los 10.000 millones.",
});

// ·· Actividades: mercados ilegales — 10 min ································

P.afirmacion(d, {
  texto: "Prohibir algo no lo\nhace desaparecer.",
  sub: "Solo traslada su intercambio a un mercado donde el precio incorpora el riesgo.",
  size: 44,
  notas:
    "10 MIN — LAS ACTIVIDADES Y LOS MERCADOS ILEGALES.\n\n" +
    "La mayor parte de lo que llamamos crimen organizado consiste en surtir bienes y servicios que " +
    "tienen demanda pero que el Estado ha prohibido o gravado: drogas, tabaco de contrabando, " +
    "armas, sexo de pago.\n\n" +
    "La regla económica: en un mercado ilegal el precio incorpora el riesgo, no hay contratos ni " +
    "tribunales que valgan, y el Estado pierde la capacidad de regular lo que antes controlaba. La " +
    "prohibición no elimina el mercado: cambia su naturaleza.\n\n" +
    "Y LA CONSECUENCIA POLÍTICA: dónde acaba lo legal y empieza lo ilegal no lo fija la naturaleza " +
    "de las cosas, lo decide el Estado, que elige qué prohíbe y a quién persigue. Esa aplicación " +
    "selectiva es ya una forma de poder.\n\n" +
    "PARA LA LECTURA: el cuadro sobre los niveles de regulación entre la prohibición absoluta y el " +
    "libre mercado, con el cannabis estadounidense como ejemplo de lo que pasa cuando se opta por " +
    "el libre mercado —caída de precios, envases atractivos, marketing dirigido, y los actores del " +
    "«gran cannabis» con incentivos para dirigirse a los consumidores más problemáticos.",
});

P.rejilla(d, {
  titulo: "Tres tipos de actividad",
  sub: "Von Lampe. No todo lo que hace el crimen organizado es vender algo.",
  items: [
    { etiqueta: "De mercado", sub: "Proveer un bien o servicio\na quien lo quiere.\nDrogas, tabaco, armas." },
    { etiqueta: "Depredadores", sub: "Arrebatar algo a quien\nno lo quiere dar.\nRobo, estafa, extorsión." },
    { etiqueta: "De gobernanza", sub: "Fijar reglas y resolver\ndisputas donde el Estado\nno llega. Y cobrar." },
  ],
  notas:
    "La tercera casilla es la menos intuitiva y la más importante. Volveremos a ella el próximo día " +
    "con el modelo de la protección de Gambetta y Varese: las mafias son, antes que traficantes, " +
    "proveedoras de orden.\n\n" +
    "El ejemplo del pizzo siciliano: no es solo extorsión, es la venta de un servicio de protección " +
    "que el Estado no presta.\n\n" +
    "PARA LA LECTURA hay una segunda tipología, la de Beckert y Dewey sobre los tipos de mercado " +
    "ilegal según dónde reside la ilegalidad: productos prohibidos (drogas), bienes robados (arte), " +
    "falsificaciones (relojes), bienes «repugnantes» —legales pero cuya compraventa se prohíbe por " +
    "razones morales, como los órganos o la gestación subrogada— e incumplimiento de normas " +
    "(economía informal, información privilegiada). Esa cuarta categoría suele dar buen debate.",
});

P.figura(d, {
  titulo: "Catorce kilómetros",
  quéMirar: "Marruecos produce en torno al 80 % del hachís del mundo. La costa andaluza queda ahí al lado.",
  rel: "images/narcolancha.jpg",
  w: 8.0, h: 4.49,
  fuente: "Fuerzas españolas abordan una narcolancha interceptada en aguas internacionales.",
  notas:
    "España es un buen ejemplo por razones en buena parte geográficas: la ruta natural de salida " +
    "hacia Europa pasa por aquí.\n\n" +
    "Y no es solo hachís. España fue durante años una de las grandes puertas de entrada de la " +
    "cocaína en Europa, y llegó a concentrar cerca del 45 % de todas las incautaciones europeas " +
    "entre 1998 y 2008. Lo que hace veinte años era casi todo hachís ronda ya el 60 % de cocaína. " +
    "En 2023 se intervino en Algeciras el mayor alijo de cocaína jamás incautado en España: nueve " +
    "toneladas y media llegadas desde Ecuador.",
});

P.afirmacion(d, {
  texto: "Pero no es una invasión.",
  sub: "Arraiga donde encuentra las condiciones sociales y políticas para hacerlo.",
  size: 46,
  notas:
    "EL PUNTO IMPORTANTE DEL BLOQUE, y el que conecta con toda la sesión 2.\n\n" +
    "Sería fácil describir el narcotráfico del sur como un producto extranjero que se cuela por una " +
    "frontera mal cerrada. Sería engañoso.\n\n" +
    "En el sur de la provincia de Cádiz, con un paro que ronda el 24 %, de los más altos del país, " +
    "el contrabando tiene raíces históricas profundas —primero de tabaco, luego de droga— y una " +
    "tolerancia social e institucional que viene de lejos.\n\n" +
    "La formulación que quiero: el mercado ilegal no llega de fuera y se impone contra la " +
    "comunidad. Crece DENTRO de ella, y responde además a una demanda ciudadana.\n\n" +
    "PARA LA LECTURA: el cuadro sobre Fariña y la «nueva Sicilia» gallega, con el episodio " +
    "revelador del secuestro judicial del libro a instancias de un exalcalde que acabó condenado " +
    "por blanqueo de dinero del narcotráfico. Poder, relato y arraigo en el mismo caso.",
});

P.afirmacion(d, {
  texto: "Un récord de incautaciones\npuede significar más droga.\nO más vigilancia.",
  sub: "Casi todo lo que sabemos del tamaño de estos mercados viene de fuentes policiales.",
  size: 36,
  notas:
    "La cautela metodológica que cierra la sesión, y que ya es un estribillo del curso: las cifras " +
    "miden a la vez el tráfico y la actividad de quien lo persigue.\n\n" +
    "Usamos estas cifras porque son las que hay, sin confundir lo intervenido con lo que circula.\n\n" +
    "Y una advertencia de alcance: hemos usado el narcotráfico porque es el mercado ilegal más " +
    "visible en España y el que más atención concentra. No es el único relevante.",
});

P.actividad(d, {
  rotulo: "ACTIVIDAD · SESIÓN 1 · 15 MIN",
  titulo: "Regular un mercado",
  pasos: [
    "A cada grupo, un mercado: cannabis, prostitución, tabaco, órganos, apuestas.",
    "Diseñad tres regímenes: prohibición, libre mercado y una opción intermedia.",
    "¿Qué gana y qué pierde cada uno? ¿Y quién gana y quién pierde?",
  ],
  notas:
    "Aterriza la idea de que la frontera entre legal e ilegal la decide el Estado, y que toda opción " +
    "regulatoria tiene ventajas y desventajas —lo que no quiere decir que todas sean igual de " +
    "convenientes.\n\n" +
    "LO QUE TIENE QUE SALIR:\n" +
    "· Que ninguna opción elimina el mercado: solo cambia quién lo controla, a qué precio y con qué " +
    "daños asociados.\n" +
    "· Que la pregunta de la tercera línea es la buena. Con el cannabis en libre mercado, quien " +
    "gana es la industria y quien pierde es el consumidor problemático, al que el marketing busca " +
    "activamente.\n" +
    "· Con la prostitución va a salir la división ideológica dentro del propio feminismo. No " +
    "cerrarla: señalar que existe y que la veremos en el capítulo 11.\n\n" +
    "Si el grupo va sobrado: ¿qué necesitaríais saber para decidir? Casi siempre concluyen que " +
    "datos que nadie recoge. Es una buena lección sobre por qué importa la infraestructura de " +
    "investigación.",
});

P.cierre(d, {
  frase: "Menos de lo que parece.",
  remate: "El próximo día: quién lo hace, y por qué no se parece a una pirámide.",
  notas:
    "Cierre de la sesión 1. Recapitular en tres frases: (1) «crimen organizado» es un constructo, y " +
    "conviene preguntar quién lo construye; (2) el mito de la conspiración extranjera dejó fuera " +
    "del foco a los socios locales; (3) el fenómeno es real pero mucho menor de lo que la ficción " +
    "sugiere, y el daño grande está en otra parte.\n\n" +
    "Para leer: Al Capone, el cine de gánsteres, la regulación del cannabis y Fariña.",
});

// ###########################################################################
//  SESIÓN 2 — El crimen organizado: quién, y cómo se enreda
// ###########################################################################

P.portada(d, {
  cintillo: "CAPÍTULO 6  ·  SESIÓN 2 DE 4",
  titulo: "Quién lo hace,\ny cómo se enreda",
  autoria: "Juanjo Medina",
  notas:
    "SESIÓN 2. ~35 min + actividad. El primer peldaño de la escalera, segunda parte.\n\n" +
    "Reparto: de pirámides a redes (9) · cómo teorizarlo (7) · de la definición criminológica a la " +
    "legal (6) · el arraigo y lo glocal (7) · economía legal e infiltración estatal (7).\n\n" +
    "SACRIFICABLE: los siete rasgos de Reuter y Paoli se pueden leer en pantalla en un minuto, y el " +
    "bloque de la definición legal se puede reducir a la diapositiva del Código Penal. La figura " +
    "del embudo NO se sacrifica.\n\n" +
    "ARRANQUE: el día anterior vimos el QUÉ. Hoy el QUIÉN, que es donde está el mito más resistente " +
    "de todos.",
});

P.wooclap(d, {
  tipo: "ELECCIÓN MÚLTIPLE",
  pregunta: "La policía detiene al líder de\nun grupo de tráfico de drogas.\n¿Qué le pasa al grupo?",
  opciones: [
    "Desaparece: era quien lo sostenía",
    "Sigue igual: le sustituye su número dos",
    "Se dispersa y se recompone con otros",
    "Se fusiona con un grupo rival",
  ],
  notas:
    "W2 · LA RESPUESTA CORRECTA ES LA C.\n\n" +
    "El aula suele votar A o B, porque las dos presuponen una pirámide con una cadena de mando. Esa " +
    "presuposición es el contenido del bloque.\n\n" +
    "La evidencia: el liderazgo funciona menos como un cargo estable que como una FUNCIÓN que pasa " +
    "de mano en mano. Cuando la policía detiene a alguien, el grupo se dispersa y se recompone.\n\n" +
    "Y de ahí la consecuencia práctica, que es la que importa para política criminal: estos " +
    "mercados son muy resistentes porque no hay una cúpula a la que descabezar fácilmente. Las " +
    "operaciones policiales que se anuncian como «desarticulación de la cúpula» suelen producir " +
    "menos efecto del que prometen.\n\n" +
    "No dar la respuesta: pasar a la figura.",
});

P.figuraPlena(d, {
  rel: "images/red_criminal_vs_piramide.png",
  w: 11.0, h: 5.07,
  notas:
    "NO SACRIFICABLE: es figura analítica propia y responde al Wooclap. Va a página completa porque " +
    "trae dentro sus propios rótulos.\n\n" +
    "LA IMAGEN QUE CASI TODAS TENEMOS es la de la izquierda: un jefe en la cumbre —el capo de " +
    "capos, el Mr. Big inglés, el padrino— que da órdenes que bajan hasta el último peón. Es la del " +
    "cine y también la de buena parte del discurso policial.\n\n" +
    "LO QUE SEÑALAR EN LA DERECHA: el intermediario no es el jefe. No manda sobre nadie. Pero ocupa " +
    "la única posición que conecta dos partes de la red que no se conocen entre sí. Y el pie lo " +
    "dice: si el intermediario cae, la red se parte en dos.\n\n" +
    "De ahí la utilidad policial del análisis de redes: neutralizar a un actor por su POSICIÓN " +
    "puede desarticular los flujos mucho más eficazmente que ir a por los mandos superiores.\n\n" +
    "El propio Departamento de Justicia estadounidense admite que no existe una estructura única y " +
    "que estas agrupaciones van desde jerarquías hasta clanes, redes y células.",
});

P.rejilla(d, {
  titulo: "Cuándo sí es una organización",
  sub: "Reuter y Paoli: siete rasgos. Solo cinco grupos en el mundo los cumplen todos.",
  items: [
    { etiqueta: "Longevidad", sub: "Al menos un siglo\nde existencia." },
    { etiqueta: "Gran tamaño", sub: "Miles de miembros\nen algunas décadas." },
    { etiqueta: "Estructura formal", sub: "Reglas internas, órganos\nde gobierno, unidades." },
    { etiqueta: "Aparato cultural", sub: "Ritos de iniciación,\nidentidad, sentido\nde familia." },
    { etiqueta: "Gobierno", sub: "Resolución de disputas\ny servicios de seguridad.\nObjetivos políticos." },
    { etiqueta: "Legitimidad", sub: "Y reparto de poder con\ninstituciones estatales\nlocales." },
  ],
  notas:
    "SACRIFICABLE: se lee en un minuto si voy con retraso.\n\n" +
    "Las cinco que cumplen los siete rasgos: las Cosa Nostra siciliana y estadounidense, la " +
    "'Ndrangheta calabresa, las tríadas chinas y la Yakuza japonesa. Falta el séptimo en la " +
    "pantalla, la multifuncionalidad: participan en actividades legales e ilegales diversas.\n\n" +
    "EL DATO QUE DESCOLOCA Y QUE HAY QUE DAR: con estos criterios, ni los narcos colombianos ni " +
    "casi ninguno de los mexicanos serían «organizaciones» en sentido sociológico. Les faltan " +
    "fronteras claras de pertenencia, estructura de mando formalizada y aparato cultural. El caso " +
    "que más se acerca es el brasileño Primeiro Comando da Capital, nacido en las cárceles de São " +
    "Paulo.\n\n" +
    "La Camorra, algunos grupos de Europa del Este o los clubes de moteros escandinavos quedan como " +
    "«organizaciones candidatas».",
});

P.afirmacion(d, {
  texto: "Diez plantaciones.\nDieciséis cómplices distintos.",
  sub: "Cinco años siguiendo a un solo cultivador de cannabis.",
  size: 40,
  notas:
    "El dato que hace concreta la idea de red frente a organización.\n\n" +
    "La forma habitual del crimen organizado es un puñado de grupos pequeños, cambiantes y " +
    "oportunistas que se juntan para una operación y se deshacen después. Nada que ver con la " +
    "pirámide.\n\n" +
    "El vocabulario que la literatura ha acuñado para esto: redes y empresas ilegales, grupos " +
    "criminales. Y el modelo de negocio del DELITO-COMO-SERVICIO, en el que individuos y grupos " +
    "ofrecen prestaciones criminales a otros. Un mismo delincuente puede operar en varias redes a " +
    "la vez y en etapas distintas de la cadena.\n\n" +
    "ESPAÑA ENCAJA POR PARTIDA DOBLE, y merece decirse: es país de crimen DESORGANIZADO, de redes " +
    "pequeñas de contrabando y tráfico más que de una mafia autóctona al estilo siciliano. Y a la " +
    "vez ha sido tierra de acogida de mafias ajenas: es el único lugar donde se han asentado las " +
    "cuatro grandes organizaciones italianas, atraídas por el ladrillo y el clima, hasta el extremo " +
    "de que se calcula que buena parte del litoral se levantó con su dinero. La Camorra tiene " +
    "clanes en Granada, Tarragona y Tenerife.",
});

P.figura(d, {
  titulo: "Vigilancia de la familia Bonanno en Montreal",
  quéMirar: "Las mafias en sentido estricto existen. Pero son la excepción, y están en declive.",
  rel: "images/Montreal_Mafia_Bonanno_Decina.jpg",
  w: 6.4, h: 4.81,
  fuente: "Fotografía de dominio público, vía Wikimedia Commons.",
  notas:
    "Veinte segundos. Sirve para que no se vayan con la idea contraria: que nada de esto existe.\n\n" +
    "Organizaciones criminales estables, grandes, presentes en varios países y en una pluralidad de " +
    "mercados las hay. Solo se dan en un puñado de países, por razones históricas, culturales y " +
    "socioeconómicas, y hoy están en declive.\n\n" +
    "En otros lugares han aparecido grupos con reputación de mafias —sobre todo en Europa del " +
    "Este— que rara vez han perdurado. Y en América Latina el narcotráfico y la debilidad estatal " +
    "alimentan carteles que desaparecen y son reemplazados con la misma facilidad con que surgen.",
});

// ·· Cómo teorizarlo — 7 min ···············································

P.rejilla(d, {
  titulo: "Tres maneras de mirarlo",
  sub: "Ninguna sustituye a las otras dos.",
  items: [
    { etiqueta: "La empresa ilegal", sub: "Reuter: es un empresario\na secas, trabajando en\ncondiciones penosas." },
    { etiqueta: "Las redes sociales", sub: "Morselli: cartografiar los\nintercambios reales en vez\nde suponer jerarquías." },
    { etiqueta: "La protección", sub: "Gambetta y Varese: las mafias\nvenden orden, no droga.\nSon un gobierno sin permiso." },
  ],
  notas:
    "7 MIN — CÓMO TEORIZAR ESTE CONTEXTO. Sustituye a los dos modelos viejos que ya hemos " +
    "desmontado: la conspiración extranjera y la burocracia piramidal.\n\n" +
    "LA EMPRESA ILEGAL, y este es el argumento más elegante del capítulo: quien delinque no puede " +
    "firmar contratos exigibles, no puede anunciarse, no puede pedir un crédito y en cualquier " +
    "momento lo detienen. En ese entorno, cooperar y fiarse sale CARO. Y de ahí Reuter deriva algo " +
    "contraintuitivo: la ilegalidad, en lugar de empujar hacia grandes organizaciones, empuja hacia " +
    "lo contrario. Cada socio nuevo es un cabo suelto. Por eso la mayoría de las empresas ilegales " +
    "son pequeñas y efímeras. Reuter lo llamó CRIMEN DESORGANIZADO.\n\n" +
    "LAS REDES. Empezó cuando varios investigadores accedieron a grabaciones telefónicas de " +
    "investigaciones policiales. Permite identificar a los intermediarios que, sin ser los jefes " +
    "visibles, conectan nodos inconexos.\n\n" +
    "LA PROTECCIÓN. Es la tercera cara de la tipología de actividades que vimos ayer. Las mafias " +
    "cobran por hacer cumplir acuerdos que el Estado no ampara, arbitran disputas que no pueden ir " +
    "a un juzgado, deciden quién trabaja y quién no. Son, en pequeño y sin permiso, una forma de " +
    "gobierno. Y aparecen donde el Estado deja de garantizar los contratos: Varese lo mostró con la " +
    "mafia rusa, nacida del vacío de la transición postsoviética.",
});

// ·· De la definición criminológica a la legal — 6 min ·····················

P.afirmacion(d, {
  texto: "«Tres hombres y un perro\nque venden cannabis con\nregularidad.»",
  sub: "Reuter y Paoli, sobre lo que las definiciones oficiales permiten llamar crimen organizado.",
  size: 36,
  notas:
    "6 MIN — DE LA DEFINICIÓN CRIMINOLÓGICA A LA LEGAL.\n\n" +
    "Si reconocemos la complejidad social que acabamos de ver, ¿cómo pueden las instituciones de " +
    "control penal definir el delito organizado? No es fácil, y la concepción fluida genera " +
    "problemas legislativos serios.\n\n" +
    "La definición europea de compromiso de 1997 exigía seis de once características, cuatro de " +
    "ellas obligatorias: más de dos personas, por un periodo prolongado, sospechosas de delitos " +
    "serios, y motivadas por enriquecimiento o poder. A efectos prácticos es demasiado amplia y " +
    "ambigua, lo que ensancha injustificadamente la red del control penal.\n\n" +
    "La cita completa de Reuter y Paoli merece leerse: «En el derecho penal de la Unión Europea, el " +
    "crimen organizado parece significar poco más que la comisión de delitos en colaboración por " +
    "parte de más de dos autores.»\n\n" +
    "Y el desplazamiento que conviene señalar: Europol usa cada vez menos esa definición —un quién " +
    "diluido— y se limita a describir las actividades, mientras que en el ámbito político se ha " +
    "pasado a hablar de delincuencia «organizada y grave».",
});

P.dosColumnas(d, {
  titulo: "Lo que exigía Europa y lo que recogió España",
  cols: [
    {
      rotulo: "Decisión Marco de 2008",
      lineas: [
        "Delitos castigados con al menos",
        "cuatro años en su extremo máximo.",
        "Y finalidad de beneficio",
        "económico o material.",
      ],
    },
    {
      rotulo: "Código Penal, art. 570",
      lineas: [
        "Ninguno de los dos límites.",
        "Basta la finalidad de cometer",
        "delitos, cualesquiera que sean",
        "y con el propósito que sea.",
      ],
    },
  ],
  notas:
    "UN ACIERTO Y UN EXCESO, y conviene dar los dos.\n\n" +
    "EL ACIERTO: el art. 570 bis exige más de dos personas, vocación de permanencia y reparto " +
    "concertado de tareas, pero en ningún momento una jerarquía formal ni una estructura piramidal. " +
    "La letra de la ley deja sitio a las formas fluidas que la criminología describe. Otra cosa es " +
    "lo que pasa en los tribunales, que tienden a buscar una jefatura como indicio de que hay " +
    "organización, reintroduciendo el organigrama que la ley no impone.\n\n" +
    "EL EXCESO: el art. 570 ter añadió el GRUPO CRIMINAL, definido de forma residual, que no " +
    "responde a exigencia europea ni internacional alguna y que desde 2010 alcanza también a " +
    "quienes se conciertan para cometer de forma reiterada infracciones de poca monta. Cancio Meliá " +
    "ironizaba con que una cuadrilla de ladrones de gallinas encaja en el tenor literal; podríamos " +
    "añadir a las grafiteras o a las okupas no violentas.\n\n" +
    "Y ESTO NO SE LE ESCAPÓ A NADIE: la propia Fiscalía General del Estado, en su Circular 2/2011, " +
    "defendió la figura precisamente como respuesta a la delincuencia a pequeña escala que genera " +
    "intranquilidad. El aparato construido para las mafias transnacionales se puso deliberadamente " +
    "a disposición de la persecución del menudeo. Es un ejemplo de manual de ensanchamiento de la " +
    "red, que vimos en el capítulo 8.",
});

// ·· El arraigo social y la dimensión glocal — 7 min ························

P.cita(d, {
  texto: "Los «socios en el delito» son, ante todo, socios unidos por lazos sociales relativamente fuertes.",
  atribucion: "Van de Bunt y colegas, 2014",
  size: 27,
  notas:
    "7 MIN — EL ARRAIGO SOCIAL Y LA DIMENSIÓN GLOCAL.\n\n" +
    "La pregunta del bloque: ¿cómo se sostiene un negocio en el que no puedes fiarte de nadie y no " +
    "hay tribunal que te ampare? No se sostiene en el vacío.\n\n" +
    "GRANOVETTER y el arraigo: toda transacción económica —precios, contratos, contratación, " +
    "confianza— está arraigada en redes de relaciones personales concretas. No contratamos ni " +
    "invertimos con desconocidos abstractos: lo hacemos a través de amigos, familiares y conocidos " +
    "del trabajo o del barrio. Lo que en España a veces llamamos, con menos glamour, enchufes.\n\n" +
    "Lo que vale para el comercio legal vale AÚN MÁS para el ilegal, donde la confianza escasea y " +
    "no hay institución que la respalde.\n\n" +
    "SCIARRONE lo lleva más lejos: el arraigo mafioso como forma de capital social, con lazos de " +
    "unión hacia dentro —familia, parentesco ritual— que cohesionan el grupo, y lazos puente hacia " +
    "fuera —profesionales, empresarios, políticos— que lo enredan con el mundo legal.\n\n" +
    "La cita completa sigue: «La cooperación criminal suele estar arraigada en relaciones previas " +
    "de amistad, familia o trabajo.»",
});

P.figura(d, {
  titulo: "El crimen organizado toma prestadas las infraestructuras legales",
  quéMirar: "Sus rutas comerciales, sus puertos, sus empresas. No necesita construir las suyas.",
  rel: "images/Aarhus_container_terminal.jpg",
  w: 7.4, h: 4.93,
  fuente: "Puerto de Aarhus, Dinamarca. Foto: Guillaume Baviere, CC BY 2.0, vía Flickr.",
  notas:
    "EL EJEMPLO QUE HAY QUE CONTAR, por lo anodino que es y por eso funciona: un pastelero holandés " +
    "con un negocio legítimo de importación de zumo de fruta congelado desde Colombia entabla " +
    "amistad en un bar con unos traficantes y termina metiendo cocaína por su propia ruta " +
    "comercial.\n\n" +
    "Bastaron un empresario de clase media, sus contactos y su cámara frigorífica. Ni violencia, ni " +
    "ritos de iniciación, ni omertà.\n\n" +
    "Ese empresario que presta su negocio legal y sus contactos tiene nombre en la sociología de " +
    "las mafias: el CÓMPLICE COMPENETRADO, la figura por la que una mafia se enraíza en la economía " +
    "legal sin necesidad de dominar un territorio.\n\n" +
    "La segunda consecuencia del arraigo: entre redes que no se conocen entre sí, alguien tiene que " +
    "hacer de puente. Entre los productores de cocaína en Colombia y los importadores en Galicia se " +
    "abre un hueco que solo cruzan unos pocos brokers. Sito Miñanco, que pasó del contrabando de " +
    "tabaco a enlazar los carteles colombianos con la costa gallega, es el ejemplo español.",
});

P.afirmacion(d, {
  texto: "Glocal.",
  sub: "Los flujos son globales. La monetización y la reproducción son intrínsecamente locales.",
  notas:
    "El concepto es de Hobbs, a partir de la «glocalización» de Robertson, y es la respuesta a los " +
    "dos relatos que hemos desmontado: ni invasión extranjera, ni fenómeno puramente local.\n\n" +
    "Al carecer de mecanismos estatales de ejecución de contratos y de crédito formal, las empresas " +
    "ilícitas obtienen estabilidad de su ARRAIGO SOCIAL. Los distribuidores internacionales " +
    "necesitan intermediarios con credibilidad en territorios concretos, y esa credibilidad viene " +
    "de trayectorias vitales compartidas, reputación en el vecindario y vínculos de parentesco.\n\n" +
    "Hobbs añade que en las comunidades obreras posindustriales marcadas por el declive y la " +
    "desregulación, la frontera entre empresa legal, economía informal y comercio ilícito es " +
    "difusa. Los actores delictivos están integrados en la vida cotidiana, con negocios legítimos " +
    "de fachada —pubs, empresas de seguridad, constructoras— que blanquean y a la vez los " +
    "consolidan como empleadores o benefactores locales.\n\n" +
    "El ejemplo: la 'Ndrangheta se globaliza aprovechando los lazos de sangre de la emigración " +
    "calabresa repartida por el mundo.\n\n" +
    "PARA LA LECTURA, y es de lo mejor del capítulo: el cuadro sobre migración y capital social. La " +
    "mayoría de los desplazamientos no los controlan grandes mafias sino redes no criminales de " +
    "familia y diáspora. Confundir deliberadamente tráfico ilícito de migrantes con trata sirve " +
    "para justificar la militarización de fronteras, y criminalizar la ayuda informal destruye las " +
    "redes seguras y empuja a los migrantes hacia actores comerciales más caros y peligrosos.",
});

// ·· Economía legal e infiltración estatal — 7 min ··························

P.figuraPlena(d, {
  rel: "images/embudo_seguir_el_dinero.png",
  w: 9.6, h: 5.7,
  notas:
    "NO SACRIFICABLE: visualización de datos propia. A página completa porque trae sus propios " +
    "rótulos y su fuente.\n\n" +
    "7 MIN — LOS VÍNCULOS ENTRE LA ECONOMÍA LEGAL Y LA ILEGAL.\n\n" +
    "El contexto: para consolidar ganancias, el crimen organizado invierte en sectores legales que " +
    "mueven mucho efectivo —construcción, hostelería, transporte, agricultura, gestión de residuos. " +
    "Esas empresas sirven de fachada Y son rentables por sí mismas.\n\n" +
    "De ahí que «seguir el dinero» se haya convertido en uno de los pilares de la lucha contra la " +
    "delincuencia organizada: atacar el incentivo del negocio.\n\n" +
    "LO QUE HAY QUE SEÑALAR, en este orden:\n" +
    "1. El panel de arriba: 11,4 millones recuperados de media al año frente a unos 10.000 millones " +
    "de ingresos estimados. El 0,11 %. Las estimaciones internacionales del GAFI hablan de entre el " +
    "1 % y el 2 % del dinero ilícito global; en España el dato es un orden de magnitud peor.\n" +
    "2. El panel de abajo, que es el que menos se espera: de 4.859 bienes inventariados, el 85,5 % " +
    "acabó ABANDONADO por deterioro o coste de conservación. Solo 163 —el 3,35 %— se cedieron para " +
    "uso social.\n" +
    "3. Y el pie: la ORGA disponía en 2019 de doce personas para localizar activos dentro y fuera " +
    "de España. Doce.\n\n" +
    "Por qué falla: la dilatación de los procedimientos —una sentencia firme puede tardar más de " +
    "una década—, la ausencia de venta anticipada, y un sesgo legal hacia la subasta en detrimento " +
    "de la cesión.",
});

P.afirmacion(d, {
  texto: "Los facilitadores profesionales.",
  sub: "Abogados, contables y banqueros. Sin ellos el dinero no se convierte en patrimonio legal.",
  size: 44,
  notas:
    "Los professional enablers o gatekeepers, uno de los temas centrales del estudio contemporáneo " +
    "del crimen organizado.\n\n" +
    "Lejos de operar aislados en mercados clandestinos, los grupos criminales NECESITAN la " +
    "infraestructura técnica, legal y financiera de la economía formal. Estos actores legítimos " +
    "aportan la apariencia de legalidad indispensable.\n\n" +
    "El reparto de papeles: los abogados constituyen estructuras societarias opacas en múltiples " +
    "jurisdicciones y se escudan en el secreto profesional; los contables falsifican balances; los " +
    "bancos dan la puerta de entrada al sistema de pagos global.\n\n" +
    "LOS DOS CASOS QUE CONVIENE DAR, porque son enormes y poco conocidos:\n" +
    "· Entre 2006 y 2010 la filial mexicana de HSBC movió al menos 881 millones de dólares " +
    "procedentes del narcotráfico hacia el sistema bancario global.\n" +
    "· El BCCI facilitó el blanqueo de cientos de millones a líderes del cártel de Medellín, " +
    "traficantes de armas y dictadores como Noriega.\n\n" +
    "Su participación va de la complicidad activa al mirar a otro lado ante señales evidentes. Y " +
    "este es el punto donde el crimen organizado empieza a parecerse a lo que veremos en la sesión " +
    "3: los mismos profesionales, los mismos despachos.",
});

P.rejilla(d, {
  titulo: "El Estado y el crimen organizado: un continuo",
  sub: "Barnes. No es «hay corrupción» o «no la hay».",
  items: [
    { etiqueta: "Confrontación", sub: "El Estado persigue al grupo\ny este responde con violencia." },
    { etiqueta: "Evasión", sub: "Corrupción episódica para\nesquivar la ley." },
    { etiqueta: "Alianza", sub: "Reparto de beneficios.\nInfiltración institucional." },
    { etiqueta: "Integración", sub: "La frontera entre ambos\nse disuelve. Captura\ndel Estado." },
  ],
  notas:
    "A diferencia de los grupos insurgentes, las organizaciones criminales no buscan derrocar el " +
    "poder político: conciben las estructuras estatales como RECURSOS OPERATIVOS. Buscan captura, " +
    "neutralización y corrupción para garantizar impunidad y exclusividad de mercado.\n\n" +
    "EL ESTADO AMBIVALENTE de Auyero y Sobering, que es el concepto más útil del bloque: las " +
    "autoridades no son ni víctimas pasivas de la corrupción ni instituciones enteramente " +
    "capturadas. Aplican la ley de puertas afuera mientras regulan y sostienen en la sombra los " +
    "mercados ilícitos.\n\n" +
    "Lessing añade que donde la presencia estatal es débil, los grupos no solo esquivan al Estado: " +
    "GOBIERNAN, imponen reglas a la población y forman un «duopolio de la violencia».\n\n" +
    "Los ejemplos del extremo: García Luna, secretario de Seguridad Pública de México y máximo " +
    "responsable de la lucha antidroga entre 2006 y 2012, condenado en EE. UU. en 2023 por cobrar " +
    "millones del cártel de Sinaloa. Y Colombia, donde el Estado no tuvo durante décadas el " +
    "monopolio real de la violencia en buena parte del territorio.\n\n" +
    "PARA LA LECTURA, Y ES EL CUADRO MÁS IMPORTANTE DE LA SESIÓN: la corrupción policial vinculada " +
    "al narcotráfico en España. Entre 2021 y 2025, 106 miembros de Policía Nacional y Guardia Civil " +
    "detenidos o investigados. Tres modalidades documentadas: venta de información reservada, " +
    "cobertura estructural —el caso del exjefe de la UDEF de Madrid, con 32,6 millones y unas 73 " +
    "toneladas de cocaína— y participación directa, como los Mossos condenados por traficar con la " +
    "marihuana incautada y depositada en su propia comisaría. Y la geografía de los casos coincide " +
    "con los nodos de entrada.",
});

P.actividad(d, {
  rotulo: "ACTIVIDAD · SESIÓN 2 · 15 MIN",
  titulo: "Dibujad la red",
  pasos: [
    "A cada grupo, un mercado ilegal concreto y su recorrido de principio a fin.",
    "Dibujad quién hace falta en cada paso. Incluid a los actores legales.",
    "¿Dónde intervendríais? ¿Y qué pasaría con la red si acertáis?",
  ],
  notas:
    "Aplica el análisis de redes con las manos, y recupera los guiones del delito del capítulo 4.\n\n" +
    "MERCADOS QUE FUNCIONAN: la cocaína de Ecuador a Algeciras · el hachís del Rif a la costa " +
    "andaluza · el tabaco de contrabando · la reventa de móviles robados · la marihuana de interior.\n\n" +
    "LO QUE TIENE QUE SALIR:\n" +
    "· Que en cuanto lo dibujan aparecen actores LEGALES en casi todos los pasos: el transportista, " +
    "el consignatario, el abogado, el inmobiliario, el que alquila la nave. Si no aparecen, " +
    "preguntarles quién mueve el contenedor.\n" +
    "· Que la posición importa más que el rango. El nodo cuya caída parte la red rara vez es el que " +
    "ellos habrían llamado jefe.\n" +
    "· Y la tercera pregunta devuelve al Wooclap: si intervienen sobre una persona sustituible, la " +
    "red se recompone.\n\n" +
    "Si van sobrados: ¿qué pasa si en vez de detener a alguien les quitáis el dinero? Enlaza con el " +
    "embudo y su 0,11 %.",
});

P.cierre(d, {
  frase: "No es una pirámide.\nY no viene de fuera.",
  remate: "El próximo día subimos un peldaño: las empresas. Y el daño se multiplica.",
  notas:
    "Cierre de la sesión 2 y del primer peldaño de la escalera.\n\n" +
    "Recapitular: (1) la forma habitual son redes pequeñas y cambiantes, no organizaciones; (2) se " +
    "sostienen sobre relaciones sociales previas y sobre infraestructuras legales; (3) y su " +
    "relación con el Estado es un continuo, no un sí o un no.\n\n" +
    "Anunciar el contraste del tercer día: guardaos otra vez los 10.000 millones.\n\n" +
    "Para leer: los siete rasgos, la migración y el capital social, y la corrupción policial " +
    "española.",
});

// ###########################################################################
//  SESIÓN 3 — Las empresas: el daño
// ###########################################################################

P.portada(d, {
  cintillo: "CAPÍTULO 6  ·  SESIÓN 3 DE 4",
  titulo: "Las empresas:\nel daño",
  autoria: "Juanjo Medina",
  notas:
    "SESIÓN 3. ~35 min + actividad. Segundo peldaño de la escalera.\n\n" +
    "Reparto: DuPont (8) · los seis ámbitos (10) · lo que todos estos casos tienen en común (9) · " +
    "ocupacional frente a corporativo (6).\n\n" +
    "ESTA SESIÓN VA DE CASOS. Son la columna vertebral y hay que contarlos, no enumerarlos. Si voy " +
    "con retraso, reducir los seis ámbitos a tres —colza, amianto y cárteles— antes que acelerar " +
    "DuPont o el Challenger.\n\n" +
    "ARRANQUE: recuperar la escalera. Ayer terminamos el peldaño de abajo. Hoy subimos uno, y " +
    "vamos a ver que el daño crece mientras la etiqueta penal desaparece.",
});

P.afirmacion(d, {
  texto: "1998. Un ganadero se planta\nen un despacho de abogados\ncon unas cintas de vídeo.",
  sub: "En ellas salen sus vacas: dientes negros, tumores, terneros deformes, doscientos animales muertos.",
  size: 34,
  notas:
    "8 MIN — DUPONT. Contarlo como historia, no como caso. Es la entrada al peldaño y funciona " +
    "mejor si se despliega despacio.\n\n" +
    "Wilbur Tennant, de Parkersburg (Virginia Occidental). El arroyo del que bebían sus vacas bajaba " +
    "de un vertedero que DuPont había comprado años antes a su propia familia.\n\n" +
    "EL DETALLE QUE ENGANCHA: el abogado al que acude, Robert Bilott, se dedicaba justamente a lo " +
    "contrario de lo que le pedían —defender a empresas químicas.\n\n" +
    "Aceptó el caso y tardó DOS DÉCADAS en llegar al fondo.",
});

P.figuraAlta(d, {
  titulo: "Puede que DuPont no\nte suene. El teflón, sí",
  quéMirar:
    "La empresa llevaba desde los años sesenta estudiando por su cuenta el PFOA, el compuesto con " +
    "que lo fabricaba.",
  rel: "images/Happy_Pan_Poster.jpg",
  w: 3.6, h: 5.9,
  fuente: "Reclamo publicitario del «Happy Pan», la sartén recubierta con teflón de DuPont. Dominio público.",
  notas:
    "LO QUE SABÍA LA EMPRESA, y conviene darlo como lista porque el efecto es acumulativo:\n" +
    "· Que el PFOA era tóxico.\n" +
    "· Que se acumulaba en el organismo.\n" +
    "· Que no se degradaba.\n" +
    "· Que aparecía en la sangre de sus trabajadoras.\n" +
    "· Que había habido malformaciones en hijos de empleadas de la planta.\n\n" +
    "Aun así siguió vertiéndolo al río y enterrándolo en fosas durante décadas, mientras el agua " +
    "corriente de unas cien mil personas lo llevaba disuelto.\n\n" +
    "Un panel científico independiente, creado por acuerdo judicial y con datos de casi setenta mil " +
    "vecinas, terminó estableciendo vínculo probable con seis enfermedades, dos de ellas cánceres.\n\n" +
    "Y ESTO NO ES DEL OTRO LADO DEL ATLÁNTICO: hay cerca de 23.000 focos de contaminación por PFAS " +
    "cartografiados en Europa, España incluida, y un estudio nacional detectó PFAS en la sangre de " +
    "alrededor del 95 % de la población adulta española.",
});

P.datoGrande(d, {
  cifra: "0",
  unidad: "condenas penales.\nNadie en prisión.\nNinguna admisión de culpa",
  glosa:
    "Una multa administrativa de 16,5 millones en 2005 y un acuerdo civil de 671 millones en 2017. " +
    "Una fracción de lo que la empresa ingresaba con el teflón.",
  notas:
    "EL DATO QUE ORDENA LAS DOS SESIONES QUE QUEDAN.\n\n" +
    "La multa de 2005 fue la mayor impuesta hasta entonces por la agencia ambiental estadounidense. " +
    "Y aun así.\n\n" +
    "¿POR QUÉ NO HUBO CAUSA PENAL? Y esta es la pregunta que hay que plantear al aula antes de " +
    "responderla. No fue necesariamente por falta de conducta reprochable: el derecho penal no " +
    "castiga solo la intención de dañar sino también la imprudencia grave, y verter durante décadas " +
    "una sustancia que se sabe tóxica podría serlo.\n\n" +
    "El problema es que atribuir la decisión a una persona concreta y sortear la prescripción " +
    "resulta muy difícil cuando el autor es una ESTRUCTURA y el daño tarda décadas en aflorar.\n\n" +
    "Estos dos elementos juntos —un daño enorme y una etiqueta penal que casi nunca se aplica— son " +
    "el tema de las dos sesiones que quedan.\n\n" +
    "PARA LA LECTURA: el cuadro sobre Dark Waters, y la comparación que propone. Al gánster se le " +
    "dedica una épica; al daño corporativo, una película sobre papeleo. Que uno nos parezca " +
    "«crimen» y el otro «un asunto complicado» tiene algo que ver con eso.",
});

// ·· Los seis ámbitos — 10 min ·············································

P.rejilla(d, {
  titulo: "Dónde aparece este daño",
  sub: "Seis ámbitos, seis casos españoles.",
  items: [
    { etiqueta: "El consumo", sub: "La colza, 1981. Más de 20.000\nafectados y 330 muertes\nreconocidas." },
    { etiqueta: "El trabajo", sub: "El amianto. Prohibido en 2002,\ndécadas después de saberse\nque daba cáncer." },
    { etiqueta: "El ambiente", sub: "El Prestige, 2002. Catorce años\nhasta la sentencia, y recayó\nen el capitán." },
    { etiqueta: "El ahorro", sub: "Bankia y las preferentes.\nLa vía civil devolvió; la penal\nabsolvió." },
    { etiqueta: "El mercado", sub: "Los cárteles. Solo se detecta\nuno de cada diez." },
    { etiqueta: "Los impuestos", sub: "Papeles de Panamá, y una\namnistía fiscal al 3 %." },
  ],
  notas:
    "10 MIN — LOS SEIS ÁMBITOS. Contar tres o cuatro con detalle y nombrar el resto.\n\n" +
    "LA COLZA. Se vendió como aceite comestible una partida de colza industrial desnaturalizada con " +
    "anilina, destinada por ley a usos no alimentarios. Probablemente el mayor daño de origen " +
    "alimentario de nuestra historia reciente. Hubo condenas a los empresarios de la red, y también " +
    "—y esto es lo interesante— una declaración posterior de responsabilidad civil subsidiaria del " +
    "propio Estado.\n\n" +
    "EL AMIANTO es el que mejor enseña la LATENCIA. La enfermedad tarda treinta o cuarenta años en " +
    "manifestarse, así que las muertes por mesotelioma siguen llegando hoy y se prevé que continúen " +
    "hasta al menos 2040. Cuando el daño aflora, la decisión que lo causó está prescrita, la " +
    "empresa se ha transformado y quien decidió se ha jubilado o ha muerto.\n\n" +
    "EL PRESTIGE enseña otro patrón: cuando el daño es difuso y la cadena de responsabilidad larga, " +
    "la imputación tiende a BAJAR hasta el último eslabón operativo y no a subir hasta la empresa.\n\n" +
    "EL MERCADO es el daño más invisible: cuando varias empresas pactan precios, cada consumidora " +
    "paga de más sin llegar a saberlo nunca. Nadie sangra, nadie sale en el telediario.\n\n" +
    "LOS IMPUESTOS. Mossack Fonseca había constituido más de 214.000 entidades opacas. Y en 2012 la " +
    "amnistía fiscal dejó regularizar capitales ocultos a un tipo efectivo en torno al 3 %: " +
    "afloraron unos 40.000 millones y se recaudaron 1.200. El Constitucional la anuló en 2017, pero " +
    "sus 31.500 beneficiarios ya estaban al día.\n\n" +
    "MATIZ HONESTO QUE NO HAY QUE ESCONDER: Fórum Filatélico y Afinsa, con más de cuatrocientos mil " +
    "afectados, SÍ terminaron en condenas penales de peso. La impunidad es una tendencia, no una " +
    "ley física.\n\n" +
    "PARA LA LECTURA: Aznalcóllar, el daño sin responsable.",
});

P.figura(d, {
  titulo: "El Prestige, noviembre de 2002",
  quéMirar: "Más de mil setecientos kilómetros de costa afectada. Catorce años hasta sentencia firme.",
  rel: "images/MV_Prestige.jpg",
  w: 6.6, h: 4.4,
  fuente: "Foto: Bahamas Maritime Authority, CC BY-SA 4.0, vía Wikimedia Commons.",
  notas:
    "Veinte segundos. Lo conocen, y eso ayuda: preguntarles quién creen que acabó condenado.\n\n" +
    "Casi nunca aciertan. Fue el capitán del buque.\n\n" +
    "Es el patrón que hay que fijar: cadena larga, daño difuso, imputación que desciende.",
});

P.wooclap(d, {
  tipo: "ELECCIÓN MÚLTIPLE",
  pregunta: "Los mercados ilegales mueven unos\n10.000 M€ al año en España. ¿Cuánto\ntransfiere el impago de horas extra?",
  opciones: ["Unos 50 M€", "Unos 300 M€", "Unos 1.000 M€", "Más de 3.000 M€"],
  notas:
    "W3 · LA RESPUESTA CORRECTA ES LA D: 3.378 millones de euros al año.\n\n" +
    "ES EL MEJOR MOMENTO DEL CAPÍTULO. Llevan dos sesiones oyendo la cifra de los 10.000 millones " +
    "del crimen organizado. Una sola práctica empresarial —el impago de unos 2,54 millones de horas " +
    "extraordinarias cada semana— transfiere del bolsillo de los trabajadores al de los " +
    "empresarios un TERCIO de esa cantidad, entre salarios, cotizaciones e impuestos que dejan de " +
    "ingresarse.\n\n" +
    "Y es solo UNA de las muchas prácticas que venimos repasando.\n\n" +
    "El nombre que tiene en la literatura anglosajona: ROBO DE SALARIOS (wage theft). En Estados " +
    "Unidos el Economic Policy Institute estima que los empresarios sustraen a sus trabajadores " +
    "unos 15.000 millones de dólares al año, cifra que EXCEDE los 12.000 millones que suman todos " +
    "los robos a personas y domicilios registrados por el FBI.\n\n" +
    "Dejar que caiga. Y luego preguntar: ¿cuántas veces habéis oído hablar del robo de salarios en " +
    "un telediario?",
});

P.rejilla(d, {
  titulo: "Qué comparten todos estos casos",
  items: [
    { etiqueta: "Llega lejos y tarde", sub: "Repartido entre miles que no\nse conocen, y aflora décadas\ndespués." },
    { etiqueta: "Es mayor", sub: "Considerablemente mayor que\nel de otras formas\ndelictivas." },
    { etiqueta: "Casi nunca es delito", sub: "No lo era, no se pudo probar,\nprescribió, o bajó al\neslabón operativo." },
    { etiqueta: "No hay villano", sub: "Profesionales cualificadas\nhaciendo su trabajo y\ncumpliendo objetivos." },
    { etiqueta: "Ni una decisión", sub: "Pasos pequeños, cada uno\ndefendible, que suman algo\nque nadie aprobó." },
  ],
  notas:
    "9 MIN — LO QUE TODOS ESTOS CASOS TIENEN EN COMÚN. La diapositiva de síntesis del bloque.\n\n" +
    "Las dos últimas casillas son las importantes y las que justifican que este capítulo exista.\n\n" +
    "SOBRE EL VILLANO: no aparece la figura que la criminología lleva un siglo persiguiendo —la " +
    "persona desviada, con su biografía y su decisión de hacer daño. Lo que hay son profesionales " +
    "firmando informes técnicos y ajustando presupuestos. Casi todas habrían pasado cualquier " +
    "examen moral en abstracto, y muchas se habrían escandalizado si alguien les hubiera dicho lo " +
    "que estaban produciendo entre todas.\n\n" +
    "SOBRE LA DECISIÓN: preguntar «quién lo decidió» es, en muchos de estos casos, una pregunta sin " +
    "respuesta. Y no porque alguien la esté escondiendo.\n\n" +
    "Y el cierre del argumento: si todo esto se explicara por individuos corruptos o malévolos, nos " +
    "bastaría con el capítulo 5. Le damos entidad propia porque hay daños graves y recurrentes que " +
    "obligan a tomar la ORGANIZACIÓN —su estructura, sus rutinas, sus incentivos, su cultura— como " +
    "unidad de análisis.",
});

P.figura(d, {
  titulo: "Challenger, 28 de enero de 1986",
  quéMirar: "Ninguna condena penal, nadie buscando un beneficio ilícito. Y siete muertos en una catástrofe evitable.",
  rel: "images/Challenger_explosion.jpg",
  w: 6.0, h: 4.88,
  fuente: "Fotografía de la NASA, dominio público, vía Wikimedia Commons.",
  notas:
    "LA NORMALIZACIÓN DE LA DESVIACIÓN de Diane Vaughan, que es el mecanismo que explica todo lo " +
    "anterior.\n\n" +
    "CÓMO FUNCIONA, y conviene darlo paso a paso porque es la idea más transferible del capítulo:\n" +
    "· Una pequeña desviación respecto de la norma o del diseño se tolera porque no causa daño " +
    "inmediato.\n" +
    "· Al repetirse sin consecuencias, deja de percibirse como desviación y pasa a ser la nueva " +
    "normalidad.\n" +
    "· Y desde ese umbral, un poco más alto, se acepta la siguiente.\n\n" +
    "LA LÍNEA NO SE CRUZA: SE DESPLAZA SOLA, empujada por la rutina, la presión de los plazos y la " +
    "cultura del grupo.\n\n" +
    "Y esto NO es buscarse una excusa para algo que se sabe que está mal. Quienes participan no " +
    "perciben estar haciendo nada malo, porque el grupo ha redefinido qué cuenta como normal.\n\n" +
    "La cita de Vaughan: «al desmentir los mitos del error del operador y de la mala conducta " +
    "individual, cualquier estrategia preventiva debe ir más allá de los individuos, hacia los " +
    "factores institucionales y organizativos que dan forma a la cognición y la acción de cada " +
    "persona».\n\n" +
    "LA CAUTELA QUE HAY QUE DAR SIEMPRE CON ESTE CONCEPTO: Vaughan describe cómo se produce el " +
    "daño, NO exime de responsabilidad a quien lo produce. Varios ingenieros habían advertido del " +
    "riesgo la víspera del lanzamiento y la investigación concluyó que la catástrofe era evitable.",
});

P.dosColumnas(d, {
  titulo: "Dos cosas que se confunden",
  cols: [
    {
      rotulo: "Delito ocupacional",
      lineas: [
        "Desde el puesto y para provecho",
        "propio, a costa de la organización.",
        "La directora que desvía fondos",
        "para comprarse un barco.",
      ],
    },
    {
      rotulo: "Delincuencia corporativa",
      lineas: [
        "En nombre y en beneficio de la",
        "organización.",
        "Falsear emisiones para vender",
        "más coches.",
      ],
    },
  ],
  notas:
    "6 MIN. La prueba para distinguirlas es sencilla y conviene dársela así: ¿QUIÉN SALE GANANDO, " +
    "la persona a costa de la empresa, o la empresa?\n\n" +
    "La segunda es la que nos ocupa en este capítulo.\n\n" +
    "EL DIESELGATE lo ilustra bien. En 2015 se destapó que Volkswagen había instalado en sus " +
    "motores diésel un programa que reconocía cuándo el coche estaba pasando una prueba de " +
    "emisiones y solo entonces activaba a fondo el control de la contaminación. En carretera " +
    "emitían hasta CUARENTA VECES el óxido de nitrógeno permitido. Once millones de vehículos.\n\n" +
    "Y no lo organizó un empleado para su provecho: la compañía presentaba sus coches como más " +
    "ecológicos de lo que eran para vender más. Por eso quien se declaró culpable de tres delitos y " +
    "pagó 4.300 millones de dólares fue Volkswagen COMO EMPRESA, además de varios directivos.\n\n" +
    "PERO LA DISTINCIÓN NO ES TAN LIMPIA, y esa es la diapositiva siguiente.",
});

P.figura(d, {
  titulo: "Pescanova: las dos cosas a la vez",
  quéMirar: "Falsear las cuentas beneficiaba a la empresa. Que el presidente vendiera sus acciones antes, a él.",
  rel: "images/Redondela_Pescanova.jpeg",
  w: 6.8, h: 4.53,
  fuente:
    "Instalaciones de Pescanova en Redondela (Pontevedra). Foto: HombreDHojalata, CC BY-SA 3.0, vía " +
    "Wikimedia Commons.",
  notas:
    "En la práctica ambas cosas suelen darse juntas. En Pescanova, la ocultación de casi dos mil " +
    "millones de euros de deuda era corporativa; la venta de acciones propias por el presidente, " +
    "meses antes de que estallara el asunto y sin comunicarlo al regulador, era ocupacional.\n\n" +
    "EN BANKIA OCURRE ALGO PARECIDO Y EL CONTRASTE ES ELOCUENTE: la salida a bolsa se juzgó como " +
    "conducta de la entidad y terminó en ABSOLUCIÓN; el uso de las tarjetas black por determinados " +
    "empleados era puro aprovechamiento personal y SÍ acabó en condena.\n\n" +
    "Que lo segundo prosperara y lo primero no dice bastante sobre qué tipo de conducta sabe " +
    "perseguir nuestro sistema penal: la que tiene una persona identificable detrás.\n\n" +
    "NOTA DE MONTAJE: el .qmd pide images/Redondela_Pescanova.jpg y el fichero real es .jpeg. En el " +
    "libro esa figura no se está renderizando. Aquí uso la extensión correcta.",
});

P.actividad(d, {
  rotulo: "ACTIVIDAD · SESIÓN 3 · 15 MIN",
  titulo: "¿Quién lo decidió?",
  pasos: [
    "A cada grupo, uno de los casos de hoy.",
    "Reconstruid la cadena: quién supo qué, cuándo, y qué hizo con esa información.",
    "Señalad a una persona responsable. Si no podéis, explicad por qué.",
  ],
  notas:
    "La tercera consigna es una trampa deliberada, y hay que dejar que caigan en ella.\n\n" +
    "CASOS PARA REPARTIR: DuPont · la colza · el amianto · el Prestige · el dieselgate · el " +
    "Challenger · un cártel de precios.\n\n" +
    "LO QUE TIENE QUE SALIR:\n" +
    "· Que en unos casos SÍ hay una persona señalable —el dieselgate, la colza— y en otros la " +
    "pregunta no tiene respuesta. Esa diferencia no es casual: depende de si hubo un acto " +
    "deliberado o una deriva acumulada.\n" +
    "· Que cuando no la hay, la tentación es señalar al último eslabón. Es exactamente lo que hizo " +
    "el sistema con el capitán del Prestige.\n" +
    "· Y que decir «no hay una persona responsable» no equivale a decir «no hay responsabilidad». " +
    "Ese es el paso conceptual que hay que forzar, y el que abre la sesión 4.\n\n" +
    "Si van sobrados: ¿qué habría tenido que pasar dentro de esa organización para que alguien " +
    "parara? Casi siempre responden «que alguien hablara», y ahí entran los canales de denuncia que " +
    "veremos el próximo día.",
});

P.cierre(d, {
  frase: "Bastante más de lo que parece.",
  remate: "Y con mucha menos atención pública, académica y penal. El próximo día: por qué.",
  notas:
    "Cierre de la sesión 3, y el reverso deliberado del cierre de la sesión 1.\n\n" +
    "Si Reuter y Tonry titulaban su balance del crimen organizado «menos de lo que parece», aquí " +
    "estamos ante lo contrario.\n\n" +
    "Y la pregunta con la que quiero que se vayan: no es por qué llamamos «delito» al crimen " +
    "organizado. Es por qué llamamos «riesgo», «accidente», «mala praxis» o «crisis» a lo que " +
    "ocurre cuando las corporaciones generan daño social.\n\n" +
    "Recordar que Sutherland describió a las grandes corporaciones como delincuentes habituales en " +
    "1949, estudiando las setenta mayores y su historial de resoluciones administrativas, civiles y " +
    "penales. No son excepciones: son un patrón. Y se siguen observando hoy.",
});

// ###########################################################################
//  SESIÓN 4 — Las empresas: la respuesta. Y el Estado
// ###########################################################################

P.portada(d, {
  cintillo: "CAPÍTULO 6  ·  SESIÓN 4 DE 4",
  titulo: "La respuesta,\ny el Estado",
  autoria: "Juanjo Medina",
  notas:
    "SESIÓN 4. ~38 min + actividad. Cierra el segundo peldaño y sube al tercero.\n\n" +
    "Reparto: las cuatro vías (9) · la responsabilidad penal de las empresas (7) · la regulación " +
    "responsiva (6) · cómo se esquiva la responsabilidad (8) · el Estado como delincuente (8).\n\n" +
    "VA ALGO MÁS CARGADA QUE LAS OTRAS TRES. Si hay que recortar: el bloque de la responsabilización " +
    "y el cumplimiento cosmético se pueden fundir en una diapositiva, y la actividad final puede " +
    "quedarse en diez minutos.\n\n" +
    "ARRANQUE: ayer vimos el daño. Hoy, qué hace el Estado con él. Y la respuesta corta es: casi " +
    "nunca derecho penal.",
});

P.rejilla(d, {
  titulo: "Cuatro carriles para el mismo daño",
  items: [
    { etiqueta: "Administrativa", sub: "La principal. CNMC, CNMV,\nInspección de Trabajo,\nHacienda, SEPBLAC." },
    { etiqueta: "Civil", sub: "Repara el daño patrimonial.\nDevolvió el dinero de\nlas preferentes." },
    { etiqueta: "Social", sub: "Lo laboral. Recargo de\nprestaciones del 30 al 50 %,\nque no se puede asegurar." },
    { etiqueta: "Penal", sub: "La única que produce condena,\nantecedente y estigma.\nY la que menos se usa." },
  ],
  notas:
    "9 MIN — ¿QUIÉN RESPONDE Y POR QUÉ VÍA?\n\n" +
    "Enlazar con Sutherland y Tappan, que ya vimos en el capítulo 5: cuando Sutherland hablaba de " +
    "delito de cuello blanco estaba hablando sobre todo de ilícitos civiles y administrativos. " +
    "Tappan le reprochó que aquello no era delincuencia. Su respuesta: la conducta era socialmente " +
    "dañosa y estaba legalmente sancionada, y si el sistema la desviaba hacia otro carril, eso " +
    "decía más del sistema que de la conducta.\n\n" +
    "LA ADMINISTRATIVA puede imponer multas enormes —en competencia, hasta el 10 % del volumen de " +
    "negocios— sin pasar por un juzgado penal. Pero ese tope rara vez basta: la propia CNMC estima " +
    "que la mayoría de sus multas no alcanza el umbral disuasorio, y como solo se detecta una " +
    "fracción de los cárteles, para disuadir habría que multar más de lo que la ley permite.\n\n" +
    "LA SOCIAL tiene una herramienta interesante, el recargo de prestaciones: recae solo sobre el " +
    "empresario y la ley prohíbe expresamente asegurarlo. La empresa paga, a veces mucho, pero no " +
    "hay condena penal ni antecedente. El daño se salda como un problema de COSTE, no de delito.\n\n" +
    "PARA LA LECTURA, Y CONVIENE MENCIONARLO EN VOZ ALTA porque es salida profesional: el cuadro " +
    "sobre «la otra policía que nunca pensamos como tal». Para ser inspector de trabajo o de " +
    "Hacienda basta un título universitario cualquiera y unas oposiciones. Son labores de policía " +
    "administrativa perfectamente al alcance de una graduada en criminología, y casi nadie en el " +
    "aula las tiene en el radar.",
});

P.wooclap(d, {
  tipo: "ELECCIÓN MÚLTIPLE",
  pregunta: "En 2022 hubo 4.180 procesamientos\nde cuello blanco en tribunales\nfederales de EE. UU. ¿Y corporaciones\nacusadas penalmente?",
  opciones: ["31", "310", "1.100", "2.400"],
  notas:
    "W4 · LA RESPUESTA CORRECTA ES LA A: TREINTA Y UNA.\n\n" +
    "El contraste es brutal y no necesita glosa: 4.180 personas físicas, 31 corporaciones.\n\n" +
    "POR QUÉ. Las grandes se derivan a acuerdos que evitan el juicio. Y las mayores quedan al " +
    "margen porque procesarlas pondría en riesgo empleos, ahorros o la propia economía. Es lo que " +
    "se ha llamado TOO BIG TO JAIL, demasiado grandes para ir a la cárcel. La multa, cuando llega, " +
    "se absorbe como un coste más.\n\n" +
    "Y hay obstáculos prácticos documentados por Benson y Cullen: perseguir un delito corporativo " +
    "exige tiempo, dinero y pericia contable de la que las fiscalías rara vez disponen, mientras " +
    "las empresas movilizan equipos jurídicos con muchos más recursos. Además, como en EE. UU. los " +
    "fiscales son cargos electos, dudan antes de imputar a una empresa de la que dependen el empleo " +
    "y la actividad de su comunidad.\n\n" +
    "No dar la respuesta al cerrar: pasar a la diapositiva siguiente.",
});

P.rejilla(d, {
  titulo: "Por qué el daño va por lo administrativo",
  sub: "No es un accidente ni un descuido del legislador.",
  items: [
    { etiqueta: "Prueba", sub: "Lo penal exige culpabilidad,\nhecho concreto y persona\nimputable." },
    { etiqueta: "Capacidad", sub: "Un regulador entiende de\nvertidos o de derivados.\nUn juzgado generalista, no." },
    { etiqueta: "Velocidad", sub: "Meses frente a lustros.\nEl Prestige tardó catorce\naños." },
    { etiqueta: "Y no llama criminal a nadie", sub: "No hay acusada, ni juicio oral,\nni antecedente, ni imagen\nde directivos en la Audiencia." },
  ],
  notas:
    "Las tres primeras razones son buenas y hay que reconocerlas como tales. La cuarta es la menos " +
    "confesable, y es la que hay que subrayar.\n\n" +
    "Hay un expediente, una multa y, muy a menudo, un recurso contencioso-administrativo que la " +
    "rebaja años después. El daño se procesa como una irregularidad técnica y no como un delito.\n\n" +
    "LA FRASE QUE LO RESUME: esa diferencia simbólica es justamente la que separa al ladrón del " +
    "«contribuyente que tuvo una discrepancia con Hacienda».\n\n" +
    "QUÉ SE PIERDE POR EL CAMINO, y conviene enumerarlo porque es el argumento a favor de lo penal:\n" +
    "· El ESTIGMA, que es lo único que el derecho penal aporta y ninguna otra vía produce. En el " +
    "caso de las empresas, cuya reputación es un activo, podría ser el instrumento más disuasorio " +
    "disponible.\n" +
    "· La VÍCTIMA. El procedimiento administrativo no la reconoce como tal, no le da voz ni la " +
    "repara. Enlaza con el capítulo 7.\n" +
    "· La VISIBILIDAD PÚBLICA. Los expedientes no aparecen en las estadísticas de criminalidad ni " +
    "forman parte de lo que la ciudadanía entiende por delincuencia.\n\n" +
    "PARA LA LECTURA: el cuadro sobre non bis in idem, con su efecto paradójico —la vía penal, la " +
    "más garantista y la más lenta, puede acabar desactivando una sanción administrativa que habría " +
    "llegado antes.",
});

// ·· La responsabilidad penal de las empresas — 7 min ······················

P.afirmacion(d, {
  texto: "Sesenta y un años.",
  sub: "Sutherland llamó delincuentes habituales a las corporaciones en 1949. España lo admitió en 2010.",
  size: 46,
  notas:
    "7 MIN — LA RESPONSABILIDAD PENAL DE LAS PERSONAS JURÍDICAS.\n\n" +
    "Durante décadas rigió el aforismo SOCIETAS DELINQUERE NON POTEST: las sociedades no pueden " +
    "delinquir. La empresa era una ficción legal sin voluntad ni culpabilidad.\n\n" +
    "La reforma de 2010, consolidada en 2015, introdujo el art. 31 bis. No es responsabilidad " +
    "ilimitada: la empresa solo responde por una lista cerrada de delitos.\n\n" +
    "Y AHÍ HAY UNA AUSENCIA REVELADORA que merece decirse despacio: quedan fuera los delitos contra " +
    "los derechos de los trabajadores y la seguridad laboral, y también el homicidio y las " +
    "lesiones, incluso imprudentes. Es decir, justo los tipos que cubrirían el amianto y la " +
    "siniestralidad.\n\n" +
    "La lección que conecta con toda la escalera: cuanto mayor es el poder del actor, más tarda la " +
    "etiqueta criminal en alcanzarlo.",
});

P.afirmacion(d, {
  texto: "El defecto de organización.",
  sub: "La empresa no responde por el delito de otro. Responde por no haberse dotado de controles.",
  size: 44,
  notas:
    "El modelo de AUTORRESPONSABILIDAD, fijado por la STS 154/2016 frente al modelo vicarial que " +
    "defendía la Fiscalía.\n\n" +
    "Detalle que da idea de lo disputado que fue: la sentencia se aprobó por ocho votos contra " +
    "siete, con voto particular firmado por siete magistrados, y la Fiscalía mantuvo su propia " +
    "interpretación pese a la sentencia.\n\n" +
    "LO INTERESANTE PARA NOSOTRAS: al situar el reproche en el defecto de organización, el derecho " +
    "penal español ha terminado adoptando una tesis marcadamente SOCIOLÓGICA. Reconoce que el daño " +
    "procede de una estructura mal diseñada y de las rutinas y la cultura que resultan de ese " +
    "diseño. Es Vaughan convertida en dogmática penal.\n\n" +
    "Consecuencia procesal, en nota al pie: si el defecto de organización forma parte del delito, es " +
    "la ACUSACIÓN quien debe acreditarlo, no la empresa quien deba demostrar que se organizó bien. " +
    "Lo contrario habría vaciado la presunción de inocencia de la persona jurídica.\n\n" +
    "Y DE AHÍ EL COMPLIANCE. La jurisprudencia ha cerrado la puerta a los modelos cosméticos: para " +
    "eximir exige cultura efectiva de cumplimiento, órgano de supervisión con autonomía real y " +
    "medidas eficaces de detección.\n\n" +
    "MENCIONAR LA SALIDA PROFESIONAL, que está en un cuadro: el compliance es un mercado de trabajo " +
    "en expansión y para el que una criminóloga está bien preparada. Compliance officers, analistas " +
    "de prevención del blanqueo, investigación interna, canales de denuncia. Frente a la idea de " +
    "que la criminología solo lleva a opositar, este es un sector en crecimiento en la empresa " +
    "privada.",
});

P.afirmacion(d, {
  texto: "Pero las condenas recaen\nsobre sociedades pequeñas.",
  sub: "De 109 personas jurídicas acusadas ante Audiencias Provinciales, 69 absueltas. Casi la mitad, por estafa.",
  size: 38,
  notas:
    "El dato que desinfla la reforma, y que hay que dar para que no se vayan con la idea de que el " +
    "problema está resuelto.\n\n" +
    "Las condenas son escasas, se concentran en la estafa, el delito fiscal y el blanqueo, y recaen " +
    "sobre todo en sociedades pequeñas, a menudo INSTRUMENTALES —empresas pantalla que existían " +
    "justamente para delinquir—, no en las grandes corporaciones.\n\n" +
    "En la jurisprudencia del Supremo: de setenta personas jurídicas acusadas, solo treinta " +
    "condenadas, y casi nueve de cada diez eran sociedades limitadas.\n\n" +
    "Ante las Audiencias: el 63 % absueltas; el 100 % de las condenas por la vía del delito del " +
    "administrador, nunca por la otra; buena parte resuelta por conformidad; y penas casi siempre " +
    "de multa.\n\n" +
    "LA CONCLUSIÓN: de todos los casos de ayer —colza, amianto, Aznalcóllar, Prestige, preferentes, " +
    "cárteles— la parte que terminó en condena penal a la organización responsable es mínima. El " +
    "artículo 31 bis existe, se estudia y se enseña; el daño corporativo sigue tratándose sobre " +
    "todo por la vía administrativa.",
});

// ·· La regulación responsiva — 6 min ······································

P.figuraPlena(d, {
  rel: "images/piramide_regulatoria.png",
  w: 7.5, h: 6.3,
  notas:
    "6 MIN — LA REGULACIÓN RESPONSIVA. Ayres y Braithwaite, 1992. A página completa porque la " +
    "figura trae su propio título y su explicación.\n\n" +
    "Es la alternativa a las demandas de mayor contundencia penal. Su postulado: la eficacia de la " +
    "supervisión no reside ni en la sanción inflexible ni en la confianza en el cumplimiento " +
    "voluntario, sino en la capacidad del Estado de ADAPTAR su intervención según la actitud y el " +
    "comportamiento del supervisado.\n\n" +
    "El Estado gobierna «a distancia», delegando el control cotidiano y guardándose la amenaza para " +
    "cuando todo lo demás falla.\n\n" +
    "Braithwaite y sus seguidores lo han probado en administración tributaria, residencias de " +
    "ancianos, competencia, seguridad laboral, medio ambiente y servicios financieros.\n\n" +
    "LOS DOS ARGUMENTOS A FAVOR: que al priorizar el trato equitativo y la justicia procedimental " +
    "las empresas perciben las normas como más legítimas; y que permite optimizar recursos " +
    "institucionales limitados, concentrándolos en los infractores recalcitrantes.\n\n" +
    "Enlazar con el capítulo 8, donde ya vimos el Estado regulador y su desmantelamiento.",
});

P.afirmacion(d, {
  texto: "Todo depende de que la\namenaza de arriba\nsea creíble.",
  sub: "Si el regulador no puede o no quiere sancionar, el diálogo degenera en permisividad.",
  size: 38,
  notas:
    "La limitación estructural del modelo, y la que más pesa.\n\n" +
    "Las otras que documenta la literatura:\n" +
    "· La proximidad y la informalidad de la base de la pirámide entrañan riesgo de CAPTURA " +
    "REGULATORIA y de complacencia.\n" +
    "· Exige capacidades institucionales MÁS sofisticadas que el modelo tradicional de mando y " +
    "control: los inspectores deben pasar de comprobar el cumplimiento mecánico a diagnosticar " +
    "motivaciones y distinguir el error involuntario de la elusión deliberada. Eso es caro.\n" +
    "· Y hay asimetrías de recursos e información: para que la amenaza conserve poder, el regulador " +
    "necesita músculo financiero y legal para litigar contra grandes corporaciones. Si no, las " +
    "fases de persuasión se explotan estratégicamente con promesas dilatadas de enmienda.\n\n" +
    "De ahí que los propios proponentes recomienden una GOBERNANZA TRIPARTITA que integre a " +
    "sindicatos, organizaciones civiles y entidades internacionales para suplir los déficits de " +
    "vigilancia.\n\n" +
    "Y EL CUMPLIMIENTO COSMÉTICO: las empresas diseñan manuales, formaciones y certificaciones que " +
    "operan como fachada de legitimidad pero no tocan los incentivos comerciales que originan las " +
    "infracciones. Gottschalk y Hamerton lo llaman WINDOW DRESSING, maquillaje de escaparate. Sirve " +
    "para presentar una fachada limpia, no para prevenir el daño. Pensad en cómo funcionan en la " +
    "práctica muchos protocolos de acoso.\n\n" +
    "PARA LA LECTURA: el cuadro sobre la crisis de 2008 como fracaso del modelo. Y la crítica de " +
    "Tombs y Whyte: una regulación construida sobre el diálogo trata al poderoso como un socio al " +
    "que persuadir y no como a un infractor al que someter, reproduciendo la misma asimetría que " +
    "debería corregir.",
});

// ·· Cómo se esquiva la responsabilidad — 8 min ····························

P.rejilla(d, {
  titulo: "El repertorio para esquivarla",
  sub: "Casi todo es formalmente legal.",
  items: [
    { etiqueta: "Blindaje societario", sub: "Fragmentarse en filiales para\nque el daño no alcance\na la matriz." },
    { etiqueta: "Externalizar", sub: "Las actividades de riesgo a\nterceros, para generar\ndenegabilidad razonable." },
    { etiqueta: "Arbitraje obligatorio", sub: "Sacar las disputas de la\njusticia ordinaria a tribunales\nprivados sin precedente." },
    { etiqueta: "Acuerdos con la fiscalía", sub: "Cerrar el caso sin condena,\nsin antecedente y a menudo\nsin admisión de culpa." },
    { etiqueta: "Cumplimiento malicioso", sub: "Acatar la letra con una\nsolución tan incómoda que\nnadie pueda usarla." },
    { etiqueta: "Litigar hasta agotar", sub: "Google Shopping tardó catorce\naños. Los denunciantes ya\nhabían quebrado." },
  ],
  notas:
    "8 MIN — CÓMO SE ESQUIVA LA RESPONSABILIDAD. La diapositiva más densa de la sesión: ir casilla " +
    "por casilla, rápido.\n\n" +
    "EL EJEMPLO DE CUMPLIMIENTO MALICIOSO que funciona en clase: la normativa obliga a Google a " +
    "compartir datos de clics con motores rivales. Google propuso entregar datos agregados con " +
    "meses de retraso y sin métricas cualitativas clave, volviendo esa información casi inútil.\n\n" +
    "Y EL TERCER NIVEL, QUE ES EL DE MAYOR ALCANCE: si el regulador es débil, no hace falta " +
    "esquivarlo. La CAPTURA REGULATORIA —la industria regulada acaba controlando las decisiones del " +
    "organismo que debía controlarla— se alimenta de la puerta giratoria, de la participación en la " +
    "redacción de las normas y, sobre todo en EE. UU., de la financiación de campañas y del dinero " +
    "opaco.\n\n" +
    "POR ÚLTIMO EL PODER DE MERCADO, que es el blindaje más eficaz porque debilita la capacidad del " +
    "Estado de aplicar la ley en lugar de eludirla en un caso concreto. Una empresa lo bastante " +
    "grande para amenazar con retirar su inversión condiciona lo que el Estado se atreve a hacer.\n\n" +
    "Y la contraparte: frente a esa asimetría el Estado en solitario tiene límites, de ahí la " +
    "relevancia de lo supranacional. La UE impone deberes por adelantado y alcanza a las empresas " +
    "por lo que hacen en toda su cadena global de valor. Bradford lo llama el EFECTO BRUSELAS.",
});

P.figura(d, {
  titulo: "«La duda es nuestro producto»",
  quéMirar: "Memorando interno de la tabacalera Brown & Williamson, 1969. Las mismas técnicas se reutilizaron para el clima.",
  rel: "images/doubt.webp",
  w: 7.2, h: 4.04,
  fuente: "Portada del juego de mesa Doubt is Our Product, sobre la desinformación de la industria del tabaco.",
  notas:
    "La fabricación de la duda. Naomi Oreskes documentó cómo las técnicas con que la industria " +
    "tabacalera negó el daño del tabaco se reutilizaron para negar el cambio climático.\n\n" +
    "La cita completa del memorando: «La duda es nuestro producto, ya que es el mejor medio para " +
    "competir con el cuerpo de hechos que existe en la mente del público general.» Leerla entera: " +
    "es escalofriante por lo explícita.\n\n" +
    "PARA LA LECTURA, el cuadro con la taxonomía de la Union of Concerned Scientists y sus cinco " +
    "jugadas: la falsificación (financiar ciencia sesgada), el bombardeo (hostigar a científicos " +
    "con demandas abusivas), la distracción (culpar a la falta de ejercicio en vez del azúcar), la " +
    "pantalla (organizaciones aparentemente neutrales) y el amaño (colocar a ejecutivos en comités " +
    "asesores y cargos reguladores).\n\n" +
    "Y volver a DuPont: la industria química lleva años presionando contra la restricción europea " +
    "de los PFAS. El mismo libro de instrucciones, treinta años después.",
});

// ·· El Estado como delincuente — 8 min ····································

P.dosColumnas(d, {
  titulo: "¿Pueden delinquir los Estados?",
  cols: [
    {
      rotulo: "El Estado · CIJ",
      lineas: [
        "Responsabilidad internacional por",
        "hechos ilícitos. No es «delito» en",
        "sentido técnico.",
        "Reparación, cesación, cooperación.",
      ],
    },
    {
      rotulo: "Las personas · CPI",
      lineas: [
        "Responsabilidad penal individual.",
        "Solo personas físicas, art. 25 del",
        "Estatuto de Roma.",
        "Órdenes de detención.",
      ],
    },
  ],
  notas:
    "8 MIN — EL ESTADO COMO DELINCUENTE. Tercer peldaño de la escalera.\n\n" +
    "A diferencia de lo que ocurre con las personas jurídicas en los sistemas nacionales, el " +
    "derecho penal internacional restringe su competencia EXCLUSIVAMENTE a personas físicas. La " +
    "premisa: las atrocidades las ejecutan individuos concretos, y así se evita imponer penas y " +
    "estigma sobre poblaciones enteras.\n\n" +
    "Pero eso no implica impunidad del Estado: se articula por el régimen de responsabilidad " +
    "internacional, con consecuencias agravadas frente a violaciones de normas de ius cogens.\n\n" +
    "EL PRINCIPIO DE DUALIDAD DE RESPONSABILIDADES: una misma conducta genera dos vías procesales " +
    "autónomas.\n\n" +
    "EL CASO DE GAZA lo ilustra: la demanda de Sudáfrica ante la CIJ por la Convención del " +
    "Genocidio, con medidas provisionales; y las órdenes de detención de la CPI contra Netanyahu y " +
    "Gallant por crímenes de guerra, incluido el uso del hambre como método de guerra.\n\n" +
    "Y LAS DIFICULTADES DE APLICACIÓN, que hay que dar: pese a los requerimientos, las acciones han " +
    "continuado, con entre 1.100 y 2.200 muertes adicionales registradas entre abril y agosto de " +
    "2026. Mientras tanto Estados Unidos ha iniciado acciones legales contra miembros del propio " +
    "tribunal penal internacional como represalia.",
});

P.figura(d, {
  titulo: "Gaza",
  quéMirar: "Las dos vías funcionan a la vez. Y ninguna ha detenido los hechos.",
  rel: "images/gaza.webp",
  w: 5.4, h: 3.6,
  fuente: "Devastación en Gaza.",
  notas:
    "PROYECTAR CON MARCO Y SIN DETENERSE. Decir antes qué van a ver.\n\n" +
    "No pedir reacciones ni abrir debate sobre el conflicto: el punto de la diapositiva es " +
    "estrictamente el de los límites del derecho internacional para responder al crimen de Estado, " +
    "que es lo que estamos estudiando.\n\n" +
    "Si alguien quiere discutir el fondo, reconducir: la pregunta criminológica aquí no es quién " +
    "tiene razón, sino qué puede y qué no puede hacer el aparato jurídico internacional cuando el " +
    "acusado es un Estado con aliados poderosos.",
});

P.rejilla(d, {
  titulo: "Los estados de negación",
  sub: "Stanley Cohen. Son las técnicas de neutralización del capítulo 5, a escala institucional.",
  items: [
    { etiqueta: "Literal", sub: "El hecho no ha ocurrido.\n«No hay desaparecidos.»" },
    { etiqueta: "Interpretativa", sub: "Ocurrió, pero no es eso.\n«No fue tortura, fue un\ninterrogatorio.»" },
    { etiqueta: "Implicatoria", sub: "Ocurrió y es grave, pero\nestá justificado.\n«La seguridad nacional.»" },
  ],
  notas:
    "El paralelismo con el capítulo 5 es lo que hace valiosa esta diapositiva: son las mismas " +
    "técnicas con que un delincuente común racionaliza su conducta, operando a escala " +
    "institucional.\n\n" +
    "A ellas se suma la pasividad de los ESTADOS ESPECTADORES, que conocen las atrocidades ajenas y " +
    "callan por conveniencia política.\n\n" +
    "EL MARCO TEÓRICO: frente al formalismo del derecho internacional, la criminología del crimen " +
    "de Estado —Chambliss, Green y Ward— define el crimen estatal a partir del DAÑO SOCIAL " +
    "sistemático y la vulneración estructural de derechos humanos, con independencia de si esas " +
    "conductas han sido tipificadas o legalizadas por el propio aparato estatal. Su reproche al " +
    "positivismo jurídico: permite que los Estados diseñen sus propios sistemas para legitimar " +
    "prácticas lesivas.\n\n" +
    "Y el concepto de CRIMINALIDAD CORPORATIVO-ESTATAL, que cierra la escalera del capítulo al unir " +
    "los peldaños dos y tres.",
});

P.rejilla(d, {
  titulo: "Pero tiene sus límites",
  items: [
    { etiqueta: "Legalidad", sub: "Fundar el delito en el «daño\nsocial» expone a la\nindeterminación valorativa." },
    { etiqueta: "Datos", sub: "El objeto de estudio es quien\nmonopoliza la información\ny la clasifica." },
    { etiqueta: "Sin remedio", sub: "Al rechazar el formalismo,\nse queda en diagnóstico\ny denuncia." },
  ],
  notas:
    "La honestidad del capítulo, que no se ahorra las objeciones a su propia posición. Merece " +
    "subrayarse como ejercicio de método.\n\n" +
    "SOBRE LA LEGALIDAD: la falta de límites normativos precisos dificulta distinguir entre " +
    "decisiones políticas legítimas pero perjudiciales, mala gestión y verdaderos crímenes " +
    "institucionales. El propio manual matiza: que la criminología no tenga que verse constreñida " +
    "por el código penal no es un problema; el riesgo real es que por razones ideológicas " +
    "califiquemos como crimen de Estado situaciones sobre las que hay poco consenso.\n\n" +
    "SOBRE LOS DATOS: a diferencia de la delincuencia convencional, aquí el objeto de estudio es el " +
    "propio aparato que recopila la información, clasifica documentos como secreto y despliega " +
    "políticas de negación. La investigación se apoya en testimonios fragmentarios, filtraciones e " +
    "informes de ONG, y queda expuesta a acusaciones de sesgo.\n\n" +
    "Y una cuarta objeción: al centrar la atención en las dinámicas organizacionales se corre el " +
    "riesgo de diluir la agencia moral de los perpetradores, lo que puede chocar con las demandas " +
    "de justicia retributiva de las víctimas.\n\n" +
    "PARA LA LECTURA, Y ES EL MEJOR CUADRO DEL CAPÍTULO PARA CONTRASTAR LOS DOS ENFOQUES: los 14 " +
    "millones de muertes proyectadas por el desmantelamiento de la ayuda exterior estadounidense. " +
    "Para el derecho internacional es un ejercicio lícito de soberanía; para la criminología " +
    "crítica, un crimen de omisión y violencia estructural. Mismo hecho, dos veredictos opuestos.",
});

P.rejilla(d, {
  titulo: "Tres lecciones de la escalera",
  items: [
    { etiqueta: "Poder y etiqueta", sub: "La capacidad de causar daño\ny la de ser tratado como\ndelincuente van en\ndirecciones opuestas." },
    { etiqueta: "No son estancos", sub: "La empresa se sirve del Estado\ny el Estado de la empresa.\nEl crimen organizado penetra\nlas instituciones." },
    { etiqueta: "Y la respuesta cambia", sub: "De la cárcel a la multa, y\nde la multa a unos mecanismos\ninternacionales de\nalcance limitado." },
  ],
  notas:
    "EL CIERRE REAL DE LAS CUATRO SESIONES. Si solo se llevan una diapositiva de las cuatro horas, " +
    "que sea esta.\n\n" +
    "1. Al grupo mafioso, que opera desde los márgenes y con poco poder, nadie duda en llamarlo " +
    "criminal. La empresa que contamina o defrauda y el Estado que reprime causan un daño mucho " +
    "mayor y más difícilmente reciben esa etiqueta. La etiqueta de «delito» es el resultado de " +
    "quién tiene poder para redactar la ley, para aplicarla o no, y para negar el daño.\n\n" +
    "La formulación que quiero que copien: el derecho penal alcanza con facilidad a quien te roba " +
    "la cartera por la calle, con mucha más dificultad a la corporación que te vende productos " +
    "adulterados, y ante el Estado —que es a la vez autor de los actos y custodio de la ley— apenas " +
    "llega.\n\n" +
    "3. Y la consecuencia para la disciplina, con Braithwaite: pensar que la criminología es la " +
    "ciencia del sistema de justicia penal y que solo nos interesan la policía, los juzgados y las " +
    "prisiones es no entender que su futuro está en estudiar todas esas otras instancias jurídicas " +
    "y sociales que regulan el daño social que no llega al Código Penal.\n\n" +
    "Con la cautela que el propio capítulo pide: mirar más allá del código penal, sí, pero con " +
    "prudencia al calificar como delito lo que no está tipificado.",
});

P.actividad(d, {
  rotulo: "ACTIVIDAD · SESIÓN 4 · 15 MIN",
  titulo: "El mismo daño,\ntres actores",
  pasos: [
    "Un vertido tóxico que enferma a un barrio. Tres versiones: lo hace una red criminal, una empresa legal o una administración pública.",
    "¿Qué pasa en cada caso? Quién investiga, por qué vía, con qué desenlace probable.",
    "¿Cambia el daño? ¿Y cambia la respuesta?",
  ],
  notas:
    "Cierra la escalera aplicándola a un solo hecho, que es la mejor manera de que vean que la " +
    "diferencia no está en la conducta.\n\n" +
    "LO QUE TIENE QUE SALIR, y sale casi solo:\n" +
    "· Versión red criminal: investigación policial, delito contra el medio ambiente, posible " +
    "organización criminal del art. 570, prisión.\n" +
    "· Versión empresa: inspección ambiental, expediente sancionador, multa, recurso contencioso, " +
    "quizá una causa penal que prescribe o baja al jefe de planta.\n" +
    "· Versión administración: responsabilidad patrimonial, quizá prevaricación si hay dolo " +
    "demostrable, y casi seguro ninguna consecuencia personal.\n\n" +
    "EL DAÑO ES EL MISMO EN LAS TRES. Que lo digan ellos.\n\n" +
    "Si van sobrados, la pregunta de nivel: ¿está justificada esa diferencia? Hay argumentos " +
    "razonables a favor —la prueba, la capacidad técnica, la velocidad— y conviene que los " +
    "reconozcan antes de indignarse. La indignación sin el argumento contrario no sirve de mucho en " +
    "un informe técnico.\n\n" +
    "RESERVAR TRES MINUTOS para el cierre.",
});

P.cierre(d, {
  frase: "Cuanto más poder concentra\nel actor, más difícil resulta\naplicarle el reproche penal.",
  remate: "Y eso no es un fallo del sistema. Es una descripción de cómo funciona.",
  notas:
    "Cierre del capítulo y de las cuatro sesiones.\n\n" +
    "Recapitular la escalera en una frase por peldaño y volver a la diapositiva 4 si queda tiempo.\n\n" +
    "Y dejar la pregunta abierta que el capítulo plantea: si la criminología solo mira lo que el " +
    "código penal define como delito, ¿cuánto del daño socialmente relevante se le escapa? La " +
    "respuesta que hemos ido construyendo estas cuatro horas es: casi todo el que producen los " +
    "actores con más poder.\n\n" +
    "Anunciar el capítulo siguiente: las respuestas sociales y culturales al delito.",
});

P.guardar(d, DESTINO);
