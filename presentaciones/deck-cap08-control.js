// Capítulo 8 · "Las respuestas estatales al delito"  —  control.qmd
// Dos sesiones de una hora. El corte sigue la bisagra que el propio capítulo
// declara en su conclusión: durante siglo y medio la respuesta penal se
// discutió en clave normativa (cómo DEBERÍA castigarse) y hubo que esperar al
// etiquetamiento para que alguien preguntara qué PRODUCE castigar.
//   Sesión 1: cómo se construyó la maquinaria.
//   Sesión 2: qué produce, y qué se ha propuesto en su lugar.
// Estilo "B claro". Genera Cap08_Respuestas-estatales.pptx

const path = require("path");
const P = require("./plantilla-b-claro");

const LIBRO = "/sessions/clever-modest-cray/mnt/intro_crimi";
const DESTINO = path.join(LIBRO, "presentaciones", "Cap08_Respuestas-estatales.pptx");

const d = P.crear({
  titulo: "Las respuestas estatales al delito",
  subject: "Capítulo 8 · Criminología: una introducción",
  autoria: "Juanjo Medina",
  imgDir: LIBRO,
  cacheDir: path.join(LIBRO, "presentaciones", ".cache-imagenes"),
});

// ###########################################################################
//  SESIÓN 1 — Cómo se construyó la maquinaria
// ###########################################################################

P.portada(d, {
  cintillo: "CAPÍTULO 8  ·  SESIÓN 1 DE 2",
  titulo: "Las respuestas\nestatales al delito",
  autoria: "Juanjo Medina",
  notas:
    "POR QUÉ DOS SESIONES. El capítulo no cabe en una hora, y su propia conclusión da el corte: " +
    "durante siglo y medio la respuesta penal se discutió en clave NORMATIVA —cómo debería " +
    "castigarse— y hubo que esperar a los teóricos del etiquetamiento para que alguien preguntara " +
    "de forma sistemática qué PRODUCE castigar.\n\n" +
    "SESIÓN 1 (~35 min + actividad). El monopolio del castigo (9) · La Escuela Clásica (7) · La " +
    "policía y la prisión (10) · Correccionalismo y rehabilitación (7).\n" +
    "SESIÓN 2 (~36 min + actividad). El etiquetamiento (9) · Las criminologías críticas (6) · " +
    "Configuraciones político-económicas (13) · Más allá del derecho penal (6) · Cierre.\n\n" +
    "DOS PREGUNTAS DE WOOCLAP, una por sesión, como en los dos capítulos anteriores. Fáciles de " +
    "quitar.\n\n" +
    "SACRIFICABLE en la sesión 1: el bloque de Bentham a la mitad y los dos sistemas " +
    "penitenciarios. La figura de datos está en la sesión 2 y NO se sacrifica.\n\n" +
    "ARRANQUE. Este es el cuarto de los cinco temas que enumeramos el primer día. Hemos visto el " +
    "delito, quien lo comete y quien lo sufre. Hoy, qué hace el Estado con todo ello.\n\n" +
    "AVISO SOBRE LAS COMILLAS: el capítulo escribe «sistema» entre comillas todo el rato y explica " +
    "por qué en un cuadro que, por la regla del proyecto, no llevo a pantalla. Merece decirlo en " +
    "voz alta al arrancar, porque si no las comillas quedan sin explicar: la expresión «sistema de " +
    "justicia penal» viene del funcionalismo estadounidense de los años sesenta y Kelling sostiene " +
    "que no es un hecho sino una metáfora que no funciona —estas agencias no comparten fines ni " +
    "tienen mecanismos de retroalimentación. El manual propone pensarlo como un CAMPO en el " +
    "sentido de Bourdieu: agentes con posiciones desiguales y capitales distintos compitiendo por " +
    "imponer su definición del problema. Y el cambio de metáfora cambia la pregunta: si es un " +
    "sistema, preguntas por qué funciona mal; si es un campo, preguntas quién gana y quién pierde.",
});

P.afirmacion(d, {
  texto: "Que el Estado tenga la\npotestad exclusiva de castigar\nes una rareza histórica.",
  sub: "Y muy reciente. En España, no antes del siglo XIX.",
  size: 36,
  notas:
    "9 MIN — LA FORMACIÓN DEL ESTADO Y EL MONOPOLIO DEL CASTIGO.\n\n" +
    "Arrancar por lo que hoy nos parece natural: si cometéis un delito en Sevilla o en Lugo se os " +
    "aplica el mismo código, con el mismo procedimiento, ante jueces de una misma organización. Nos " +
    "parece la definición mínima de justicia.\n\n" +
    "Pero que sea el Estado —y no la familia de la víctima, ni el señor del lugar, ni la Iglesia, ni " +
    "el gremio— quien defina qué es delito, quién lo persigue y quién impone la pena, es una " +
    "situación histórica reciente y en absoluto inevitable.\n\n" +
    "ADELANTAR LA CONCLUSIÓN DEL BLOQUE, que es la tesis: no fue un acontecimiento, sino una " +
    "conquista lenta, desigual y muy tardía. Los Estados europeos proclamaron el monopolio del " +
    "castigo mucho antes de poder ejercerlo de verdad.\n\n" +
    "Enlazar con el capítulo de víctimas: allí vimos la otra cara de este mismo proceso, la " +
    "expropiación del conflicto que denunciaba Christie.",
});

P.figuraAlta(d, {
  titulo: "El derecho no se\ndescubre: se promulga",
  quéMirar: "Alguien decide qué será la regla. Y ese alguien no es cualquiera.",
  rel: "images/Incipit_Vidal_Mayor.jpg",
  w: 4.8, h: 6.0,
  fuente:
    "Incipit del Vidal Mayor, primera compilación del Fuero de Aragón, Vidal de Canellas, 1247. " +
    "Dominio público, vía Wikimedia Commons.",
  notas:
    "Antes del Estado moderno, Europa estaba organizada en un entramado feudal y religioso con el " +
    "poder político y judicial fragmentado. Iglesia, señores feudales, ciudades y cortes reales " +
    "compartían y competían por la autoridad.\n\n" +
    "La justicia no era uniforme: coexistían tribunales eclesiásticos, jurisdicciones señoriales y " +
    "cortes reales, cada una con sus criterios.\n\n" +
    "Y BUENA PARTE NI SIQUIERA PASABA POR UN TRIBUNAL: acuerdos entre familias, arbitraje " +
    "comunitario, venganza privada regulada. La persecución dependía de la iniciativa de la víctima " +
    "o sus allegados. Las penas eran corporales y pecuniarias. No había prisiones como castigo ni " +
    "cuerpos policiales patrullando.\n\n" +
    "PARA LA LECTURA: el cuadro sobre la monarquía hispánica. No existía España, sino un conjunto " +
    "de reinos con sus propias leyes, instituciones, monedas y consejos. Los súbditos se " +
    "identificaban como castellanos o aragoneses, no como españoles.",
});

P.rejilla(d, {
  titulo: "Tres procesos paralelos",
  sub: "Ninguno tiene fecha de nacimiento clara. Ninguno estaba terminado en 1800.",
  items: [
    { etiqueta: "Acumulación", sub: "El Estado se queda con la\ncapacidad material de ejercer\nviolencia." },
    { etiqueta: "Centralización", sub: "Absorbe la potestad de juzgar,\nsubordinando los tribunales\nque competían." },
    { etiqueta: "Secularización", sub: "Cambia lo que legitima el\ncastigo: de lo religioso\na lo secular." },
  ],
  notas:
    "La definición de Weber (1919): el Estado es la comunidad humana que REIVINDICA CON ÉXITO el " +
    "monopolio del uso legítimo de la fuerza física en un territorio. Fijarse en las dos " +
    "expresiones: reivindica, y con éxito. No describe un rasgo eterno del poder político, sino un " +
    "logro histórico concreto.\n\n" +
    "ACUMULACIÓN, dos lecturas. Elias: las casas reales acumulan dos monopolios entrelazados, el de " +
    "la violencia y el de los impuestos, a costa de la nobleza guerrera. Tilly, menos amable: «la " +
    "guerra hizo al Estado y el Estado hizo la guerra» —ejércitos que necesitan dinero, dinero que " +
    "exige burocracia fiscal, y esa burocracia acaba siendo el esqueleto del Estado. Tilly llega a " +
    "comparar la construcción estatal con el crimen organizado: ofrece protección frente a una " +
    "amenaza que él mismo genera, y cobra por ello.\n\n" +
    "CENTRALIZACIÓN. No tanto suprimiendo tribunales como subordinándolos. El dato español que lo " +
    "resume: la Constitución de Cádiz proclamó en 1812 que no habría más que un solo fuero para " +
    "toda clase de personas, y en los dos artículos siguientes mantuvo el fuero eclesiástico y el " +
    "militar. La unidad de fueros no fue efectiva hasta 1868.\n\n" +
    "SECULARIZACIÓN. Desconfiar de la versión simplificada según la cual la razón desalojó a la fe. " +
    "El derecho canónico fue el primer sistema jurídico moderno de Occidente, y de él viene la " +
    "exigencia de intención para imputar responsabilidad, que es una idea teológica antes que " +
    "jurídica. Y durante mucho tiempo Estado e Iglesia se reforzaron: es la confesionalización y el " +
    "disciplinamiento social de Oestreich, antecedente directo del poder disciplinario de Foucault. " +
    "La religión no desaparece del castigo: se instala dentro de él.",
});

P.figuraAlta(d, {
  titulo: "La pretensión,\nno el hecho",
  quéMirar:
    "Hobbes publica esto en 1651, en plena guerra civil. El soberano sostiene a la vez la espada y " +
    "el báculo: las dos jurisdicciones que aún competían.",
  rel: "images/leviathan.jpg",
  w: 3.8, h: 6.03,
  fuente:
    "Abraham Bosse, frontispicio de Leviathan, de Thomas Hobbes, Londres, 1651. British Library. " +
    "CC0, vía Wikimedia Commons.",
  notas:
    "El detalle que merece señalarse con el dedo: el cuerpo del soberano está hecho de los cuerpos " +
    "que lo componen, centenares de figuras humanas de espaldas al espectador.\n\n" +
    "Y no retrata un Estado consolidado. Retrata la ASPIRACIÓN de uno, en el año y el país donde " +
    "menos consolidado estaba.",
});

P.dosColumnas(d, {
  titulo: "Dos poderes que no van juntos",
  cols: [
    {
      rotulo: "Poder despótico",
      lineas: [
        "Capacidad de decidir sin",
        "negociar con la sociedad.",
        "Las monarquías absolutas",
        "tenían mucho.",
      ],
    },
    {
      rotulo: "Poder infraestructural",
      lineas: [
        "Capacidad real de penetrar el",
        "territorio y ejecutar lo decidido.",
        "Las monarquías absolutas",
        "apenas tenían ninguno.",
      ],
    },
  ],
  notas:
    "La distinción es de Michael Mann y es la llave del bloque entero.\n\n" +
    "Un monarca del siglo XVII podía proclamarse fuente única de la justicia, y muchos lo hicieron. " +
    "Pero no disponía de un cuerpo profesional de policía, ni de sistema penitenciario, ni de " +
    "registros fiables de población, ni de una administración capaz de llegar a la aldea.\n\n" +
    "Había cárceles, alguaciles y verdugos. Lo que no había era una máquina capaz de perseguir, " +
    "juzgar y castigar de forma regular en todo el territorio.\n\n" +
    "LA FORMULACIÓN QUE QUIERO QUE COPIEN: el monopolio del castigo era, en ese momento, una " +
    "pretensión sin instrumentos.",
});

P.figuraAlta(d, {
  titulo: "Y el castigo se hizo\nmás espectacular,\nno menos",
  quéMirar:
    "El cadalso no se levanta a escondidas. Se monta en el centro de la ciudad y de espaldas a los " +
    "edificios del poder.",
  rel: "images/patibulo.jpg",
  w: 5.3, h: 4.77,
  fuente:
    "Ejecución de Johan van Oldenbarnevelt en el Binnenhof de La Haya, 1619. Grabado anónimo, 1777. " +
    "Rijksmuseum. CC0, vía Wikimedia Commons.",
  notas:
    "Spierenburg mostró que la consolidación del poder estatal, en un primer momento, hizo el " +
    "castigo MÁS espectacular. Las ejecuciones públicas ritualizadas no son un residuo medieval: " +
    "son un producto del Estado en construcción.\n\n" +
    "EL MECANISMO, que es contraintuitivo y conviene decirlo despacio: cuanto menos capacidad real " +
    "tenía el poder para vigilar y detener, más necesitaba que los pocos castigos que imponía " +
    "fueran memorables.\n\n" +
    "Enlazar con Foucault: no es casualidad que abra Vigilar y castigar con el suplicio de Damiens " +
    "en 1757. Elige esa fecha precisamente porque el espectáculo punitivo del Antiguo Régimen " +
    "seguía plenamente vivo en pleno siglo de las Luces.",
});

P.datoGrande(d, {
  cifra: "60 %",
  unidad: "de los condenados a muerte\nera indultado",
  glosa:
    "En la Inglaterra del Bloody Code las leyes capitales pasaron de unas cincuenta a más de " +
    "doscientas. Y no había policía ni ministerio fiscal.",
  notas:
    "El caso inglés ilustra la paradoja mejor que ninguno. Entre finales del XVII y comienzos del " +
    "XIX, en pleno afianzamiento del Estado, las leyes que castigaban con la muerte se " +
    "cuadruplicaron. Y sin embargo la persecución del delito seguía dependiendo de la iniciativa " +
    "privada de las víctimas.\n\n" +
    "DOUGLAS HAY LO LEYÓ COMO UN SISTEMA Y NO COMO UNA DISFUNCIÓN, y esa es la idea fina del " +
    "bloque: severidad feroz sobre el papel, aparato mínimo para aplicarla y enormes dosis de " +
    "discrecionalidad e indulto selectivo producían, juntas, terror y deferencia.\n\n" +
    "O sea: el indulto no era el fallo del sistema. Era el sistema. Quien indulta acumula " +
    "gratitud y obediencia.\n\n" +
    "Preguntar al aula qué le conviene más a un poder débil: castigar a muchos poco, o amenazar a " +
    "todos con mucho y perdonar a casi todos.",
});

P.wooclap(d, {
  tipo: "ELECCIÓN MÚLTIPLE",
  pregunta: "¿Cuándo tuvo el Estado español\nel monopolio REAL del castigo?",
  opciones: [
    "Con los Reyes Católicos",
    "Con los Borbones, siglo XVIII",
    "A mediados del siglo XIX",
    "Ya en el siglo XX",
  ],
  notas:
    "W1 · LA RESPUESTA CORRECTA ES LA C.\n\n" +
    "El aula suele votar A o B, porque asocia monarquía fuerte con Estado capaz. Es exactamente la " +
    "confusión entre poder despótico y poder infraestructural que acabamos de ver, así que la " +
    "votación sirve para comprobar si ha calado.\n\n" +
    "LAS FECHAS QUE LO ZANJAN, y conviene darlas seguidas porque el efecto acumulativo es el " +
    "argumento:\n" +
    "· Los señoríos jurisdiccionales no se abolieron hasta 1811, y de forma definitiva hasta 1837.\n" +
    "· La Inquisición no desapareció hasta 1834.\n" +
    "· La Guardia Civil se creó en 1844.\n" +
    "· El primer código penal con vigencia efectiva es el de 1848.\n" +
    "· La unidad de fueros no fue efectiva hasta 1868.\n\n" +
    "Es decir: el Estado no tuvo el monopolio real del castigo hasta bien entrado el siglo XIX. " +
    "Hace menos de doscientos años.\n\n" +
    "Si alguien vota D, darle parte de razón: en el terreno regulatorio, que veremos el segundo " +
    "día, esa capacidad sigue siendo discutible hoy.",
});

// ·· La Escuela Clásica — 7 min ············································

P.figura(d, {
  titulo: "El momento en que empieza a poder representarse como escándalo",
  quéMirar: "Goya pinta esto entre 1808 y 1812, los mismos años en que Cádiz debate la Constitución.",
  rel: "images/goya_1.jpg",
  w: 7.6, h: 4.63,
  fuente:
    "Francisco de Goya, Escena de Inquisición, 1808-1812. Dominio público, vía Wikimedia Commons.",
  notas:
    "7 MIN — LA LLAMADA ESCUELA CLÁSICA.\n\n" +
    "Dos décadas antes de que el Santo Oficio se aboliera. No es un testimonio de la Inquisición: " +
    "es el momento en que el fundamento religioso del castigo empieza a poder representarse como " +
    "escándalo.\n\n" +
    "El contexto que critican los ilustrados: justicia fragmentada entre tribunales eclesiásticos, " +
    "señoriales y reales; castigos desproporcionados; tortura para obtener confesiones; ejecuciones " +
    "públicas como espectáculo. Y una justicia ligada a la moral religiosa, donde muchos delitos se " +
    "percibían como pecados.\n\n" +
    "La Ilustración propone que la base de la comunidad política sea un contrato social entre " +
    "ciudadanos y poder, y que la autoridad legal emane de ahí y no de la teología. De ese periodo " +
    "viene también la separación de poderes.",
});

P.cita(d, {
  texto: "La función del castigo debe ser prevenir futuros delitos, no satisfacer la venganza.",
  atribucion: "Cesare Beccaria, 1764 · De los delitos y de las penas",
  rel: "images/Cesare_Beccaria.jpg",
  pieImg: "Cesare Beccaria (1738-1794)",
  size: 26,
  notas:
    "Lo que propone: leyes claras, públicas y aplicadas de manera uniforme; penas proporcionales; " +
    "garantías procesales con juicios rápidos y públicos; límites a la discrecionalidad de jueces " +
    "y autoridades. Y crítica frontal a la tortura y a la pena de muerte.\n\n" +
    "DOS COSAS QUE SUELEN CONTARSE MAL Y QUE MERECE LA PENA CORREGIR:\n\n" +
    "1. Sus ideas no eran particularmente originales: reflejaban el sentir de muchos intelectuales " +
    "del periodo, y tomaba prestado de autores a los que, por temor a la Inquisición, no citaba. La " +
    "primera versión del tratado la escribió de hecho su amigo Pietro Verri sobre la base de " +
    "conversaciones con él.\n\n" +
    "2. La etiqueta de «escuela clásica» y la idea de que defendía un delincuente puramente " +
    "calculador es una simplificación de manual. Beccaria insiste en que la delincuencia debe " +
    "entenderse causalmente en términos de circunstancias sociales y materiales. El debate " +
    "libre albedrío contra determinismo, tal como se cuenta, es bastante ficticio.\n\n" +
    "SU IMPORTANCIA REAL: no creó una teoría del hombre delincuente. Tradujo las condiciones " +
    "políticas que se estaban gestando —la soberanía estatal y el monopolio del castigo— en " +
    "principios jurídicos racionales.\n\n" +
    "Dato que engancha: la Iglesia lo incluyó en el Índice de libros prohibidos en 1766, y eso " +
    "disparó su fama. En 1800 había 23 ediciones italianas, 14 francesas y 11 inglesas.",
});

P.cita(d, {
  texto: "La naturaleza ha sometido a la humanidad al dominio de dos soberanos amos: el dolor y el placer.",
  atribucion: "Jeremy Bentham",
  size: 28,
  notas:
    "SACRIFICABLE A LA MITAD si voy con retraso: se puede resumir en que Bentham aporta el " +
    "utilitarismo y el panóptico, y saltar a la diapositiva siguiente.\n\n" +
    "Bentham complementa y sistematiza a Beccaria desde el utilitarismo. Donde Beccaria compila " +
    "propuestas humanistas contra las prácticas bárbaras, Bentham se propone dar base filosófica a " +
    "lo que debería ser la nueva penología.\n\n" +
    "Sus cuatro reglas penológicas: que el dolor de la sanción contrarreste el placer del delito; " +
    "que la amenaza baste; que el castigo no sea excesivo; y que sea lo más económico posible.\n\n" +
    "CONVIENE NO JUNTARLOS DEMASIADO, y es un buen apunte de método histórico: Beccaria publica en " +
    "1764 bajo una monarquía absoluta y en una Italia fragmentada, y aporta principios morales. " +
    "Bentham escribe una generación después, al otro lado de la Revolución Francesa y en una Gran " +
    "Bretaña en plena industrialización, y aporta una metodología.\n\n" +
    "Detalle poco conocido: en 1798 y 1799 Bentham redactó por encargo dos proyectos de ley para " +
    "reorganizar la policía de Londres. Solo se aprobó una versión recortada, y los textos " +
    "permanecieron casi inéditos hasta 2018.",
});

P.figuraAlta(d, {
  titulo: "El panóptico",
  quéMirar:
    "Las celdas en anillo contra el muro exterior, abiertas hacia el centro. En el centro, la torre " +
    "de inspección.",
  rel: "images/Panopticon.jpg",
  w: 5.2, h: 5.71,
  fuente:
    "Lámina publicada en The Works of Jeremy Bentham, vol. IV, ed. Bowring, 1843. Dominio público, " +
    "vía Wikimedia Commons.",
  notas:
    "El principio es que la vigilancia sea posible en todo momento, y que quien está dentro no " +
    "pueda saber cuándo se ejerce.\n\n" +
    "EL DATO ESPAÑOL, que está en nota al pie y merece contarse porque desmonta la idea de Bentham " +
    "como inventor: el principio —lo que en la época se llamaba inspección universal— lo propuso en " +
    "el siglo XVI Miguel de Giginta para sus albergues de pobres, y conforme a él se construyó en " +
    "Madrid la cárcel de Corte entre 1629 y 1638, con un vigía en alto que dominaba los patios y se " +
    "comunicaba mediante tubos. Cuando Bentham publica su proyecto, siglo y medio después, esos " +
    "antecedentes se habían borrado de la memoria.\n\n" +
    "Y el dato que cierra el círculo en la conclusión del capítulo: el panóptico de Valladolid se " +
    "terminó a finales de los años cuarenta del XIX, se juzgó demasiado lujoso para delincuentes y " +
    "acabó cedido al Ministerio de la Guerra como escuela de caballería.",
});

// ·· La invención de la policía y la prisión — 10 min ······················

P.afirmacion(d, {
  texto: "La policía y la prisión\nson invenciones modernas.",
  sub: "La humanidad ha vivido sin ellas durante la mayor parte de su existencia.",
  size: 44,
  notas:
    "10 MIN — LA INVENCIÓN DE LA POLICÍA Y LA PRISIÓN. El bloque central de la sesión.\n\n" +
    "Ambas se desarrollan durante los siglos XVIII y XIX, en el contexto de la consolidación del " +
    "Estado moderno y de la modernidad capitalista.\n\n" +
    "Y la tesis que recorre el bloque: su aparición no respondió solo a una necesidad técnica de " +
    "organizar el orden público. Reflejó y consolidó una nueva relación de poder entre clases " +
    "sociales, donde el control, la vigilancia y la disciplina se vuelven herramientas de " +
    "dominación política y económica.\n\n" +
    "Merece la pena decir en voz alta lo incómodo: estas dos instituciones que hoy nos parecen " +
    "condición de posibilidad de cualquier sociedad tienen menos de dos siglos.",
});

P.figuraAlta(d, {
  titulo: "1667: la vigilancia\nse hace oficio",
  quéMirar:
    "Luis XIV crea el cargo de teniente de policía de París y lo separa del de teniente civil. " +
    "Policía era el cargo y sus poderes, no un cuerpo de agentes.",
  rel: "images/edicto.jpg",
  w: 4.5, h: 5.7,
  fuente:
    "Édit portant création de la lieutenance générale de police, Luis XIV, marzo de 1667. Archives " +
    "Nationales de France. Dominio público, vía Wikimedia Commons.",
  notas:
    "El concepto de policía evolucionó con la idea de Estado. En el siglo XVII, police en Francia " +
    "designaba el «buen gobierno» o la administración del orden público: gobierno municipal, con " +
    "funciones amplísimas.\n\n" +
    "El cargo tenía poder normativo —podía crear normas con sanciones tan severas que a efectos " +
    "prácticos eran penales— y poder judicial en las materias que se consideraba no debían llegar a " +
    "los tribunales.\n\n" +
    "Y CONVIENE PREGUNTAR AL AULA QUIÉN ERA EL OBJETO DE LA ACCIÓN POLICIAL EN PARÍS. La respuesta: " +
    "fundamentalmente los pobres sin trabajo. Se les consideraba responsables de los delitos y " +
    "movilizables para generar disturbios. La lógica declarada era proteger a la clase trabajadora " +
    "de ser contaminada por ese proletariado.\n\n" +
    "También importaba mucho el control de la opinión pública y la represión de la disidencia " +
    "religiosa o política, porque se creía que las «ideas peligrosas» eran la fuente de los " +
    "problemas.\n\n" +
    "PARA LA LECTURA: el cuadro «Antes de Peel». Dublín tuvo policía metropolitana armada en 1786, " +
    "Glasgow en 1800, Edimburgo en 1805. Y en Londres los Bow Street runners funcionaban desde 1749.",
});

P.dosColumnas(d, {
  titulo: "Lo que cambia en 1829",
  cols: [
    {
      rotulo: "Antes",
      lineas: [
        "Policía significaba la gobernanza",
        "de un territorio en todos sus",
        "aspectos. Un sistema autocontenido",
        "con poder legislativo, regulatorio,",
        "judicial y ejecutivo.",
      ],
    },
    {
      rotulo: "Después",
      lineas: [
        "Una rama del sistema penal, que",
        "pone a los delincuentes en manos",
        "del poder judicial. Y el término",
        "pasa a designar al conjunto de",
        "hombres que hacen esa labor.",
      ],
    },
  ],
  notas:
    "Robert Peel funda la Metropolitan Police de Londres en 1829. Su objetivo declarado no era la " +
    "represión abierta, sino la prevención del delito mediante vigilancia constante y presencia " +
    "pública.\n\n" +
    "EL MATIZ HISTORIOGRÁFICO, que está en nota al pie y que merece la clase porque desmonta un " +
    "tópico de manual: ningún relato que atribuya el nacimiento de la policía moderna a una sola " +
    "idea, una sola persona o una sola ley resiste la evidencia. Hay más continuidad que ruptura. " +
    "Los célebres «principios de Peel» que circulan por tantos manuales son en realidad una " +
    "reconstrucción del siglo XX, formulada por el historiador Charles Reith y consolidada a fuerza " +
    "de repetirse en la manualística estadounidense.\n\n" +
    "Y el modelo londinense tampoco fue la alternativa civil al continental: al crear un cuerpo " +
    "dirigido por el ministro del Interior y no responsable ante las autoridades locales, el " +
    "gobierno británico aplicaba a su capital las lecciones aprendidas gobernando Irlanda.",
});

P.figuraAlta(d, {
  titulo: "La objeción de\nla época",
  quéMirar:
    "Wellington y Peel dibujados como granaderos. El reproche era que el nuevo cuerpo sería una " +
    "gendarmería encubierta, incompatible con las libertades inglesas.",
  rel: "images/robertpeel.jpg",
  w: 4.2, h: 5.92,
  fuente:
    "John Phillips, State Watchmen. Of 1829, mayo de 1829. British Museum. Dominio público, vía " +
    "Wikimedia Commons.",
  notas:
    "Peel tuvo que lidiar con quienes veían en la policía centralizada una amenaza contra la " +
    "libertad, y eso contribuyó al carácter menos militar de la institución británica.\n\n" +
    "ESPAÑA TOMÓ EL CAMINO CONTRARIO, Y A CONCIENCIA. Está en un cuadro que no llevo a pantalla, " +
    "pero es demasiado importante para un aula española como para no contarlo:\n\n" +
    "Mientras los progresistas miraban al modelo de Peel, el moderantismo triunfante en 1844 optó " +
    "por la gendarmería francesa. El Real Decreto de 28 de marzo creó la Guardia Civil como «fuerza " +
    "permanente de conservación del orden social y de protección de personas y propiedades», apenas " +
    "unas semanas después de disolver la Milicia Nacional: se sustituía una fuerza de ciudadanos " +
    "armados por un cuerpo militar dependiente del Gobierno.\n\n" +
    "Y la unidad básica no fue el agente sino el EDIFICIO —el puesto, la casa-cuartel—, cuyos " +
    "ocupantes no dependían del alcalde y vivían separados del vecindario. De 514 puestos en 1846 a " +
    "más de 2.000 en 1900. En Asturias la casa-cuartel la costeaban a menudo las compañías mineras.\n\n" +
    "Lo que vigilaba era, sobre todo, la propiedad de la tierra: cuando en 1876 asumió la guardería " +
    "rural, la caza, el carboneo, el pastoreo o la recogida de leña pasaron a ser delito, y el " +
    "jornalero se convirtió en delincuente.",
});

P.figura(d, {
  titulo: "Casas Viejas, enero de 1933",
  quéMirar: "El Gobierno sostuvo que habían caído en combate. La investigación estableció que varios fueron sacados de sus casas y fusilados.",
  rel: "images/casasviejas.jpg",
  w: 6.6, h: 4.68,
  fuente:
    "Fotografía de los sucesos de Casas Viejas, enero de 1933. Autoría no identificada. Dominio " +
    "público, vía Wikimedia Commons.",
  notas:
    "PROYECTAR CON MARCO. Decir antes de pasarla qué van a ver.\n\n" +
    "Murieron veintitrés campesinos y tres guardias. Es uno de los episodios de un patrón más " +
    "amplio: el conflicto laboral tratado como problema de orden público.\n\n" +
    "Los datos que lo sitúan, y que impresionan: hasta la Ley de Huelgas de 1909 todo paro se " +
    "consideraba sedición y lo juzgaban tribunales militares. Durante la Restauración los españoles " +
    "vivieron el 45,6 % del tiempo con las garantías constitucionales suspendidas en todo o parte " +
    "del territorio. Y en los cinco años de paz de la Segunda República las fuerzas del Estado " +
    "causaron más de 1.550 muertos, siendo obreros y jornaleros la categoría más numerosa con " +
    "enorme diferencia.\n\n" +
    "Y el ejemplo que cierra el argumento del bloque: el 29 de mayo de 1936, en Yeste (Albacete), " +
    "diecisiete campesinos murieron a tiros de la Guardia Civil por cortar leña en tierras que " +
    "habían sido comunales del pueblo hasta que se las arrebataron por subterfugio legal en el " +
    "siglo anterior.",
});

P.figura(d, {
  titulo: "La prisión toma de la fábrica su forma de organizar el trabajo",
  quéMirar: "La máquina, los puestos idénticos, las filas, el supervisor. Lo que no toma prestado es la mercancía.",
  rel: "images/prisonwork.jpg",
  w: 6.2, h: 4.66,
  fuente:
    "La rueda de molino del patio de vagabundos de Coldbath Fields, Londres. Grabado del siglo XIX.",
  notas:
    "El pie de la figura es el argumento entero y conviene leerlo tal cual: la prisión toma prestada " +
    "de la fábrica su forma de organizar el trabajo, pero no la mercancía. El trabajo penitenciario " +
    "no produce: disciplina.\n\n" +
    "Foucault describió el cambio como el paso del «suplicio del cuerpo» a la «corrección del " +
    "alma». El objetivo ya no era destruir al delincuente, sino reformarlo, moldearlo para " +
    "adaptarlo a las normas de la sociedad industrial.\n\n" +
    "Melossi y Pavarini: la cárcel moderna surge como parte del dispositivo disciplinario del " +
    "capitalismo, destinado a producir sujetos obedientes y útiles para la fábrica.\n\n" +
    "El reparto de funciones que cierra el bloque: la policía actúa en el espacio público, " +
    "garantizando la seguridad de la propiedad privada y la disciplina laboral; la prisión actúa en " +
    "el espacio cerrado, sobre quienes transgreden las normas del trabajo y la moral.\n\n" +
    "Importante para el orden del capítulo: este tipo de interpretaciones, aunque las avanzaron " +
    "autores marxistas como Rusche y Kirchheimer en 1939, no empezaron a aceptarse hasta los años " +
    "sesenta y setenta. Es la sesión 2.",
});

// ·· Correccionalismo y rehabilitación — 7 min ·····························

P.afirmacion(d, {
  texto: "La Ilustración no\ninventó el encierro.",
  sub: "Inventó una idea nueva sobre para qué debería servir: corregir a quien lo padece.",
  size: 44,
  notas:
    "7 MIN — CORRECCIONALISMO Y REHABILITACIÓN.\n\n" +
    "Malentendido frecuente que conviene desactivar: en España el encierro venía funcionando como " +
    "castigo desde el siglo XVI —galeras, presidios norteafricanos, minas de Almadén— y la cárcel " +
    "figura ya como pena en decenas de disposiciones anteriores a la codificación liberal.\n\n" +
    "Lo que aportan los reformadores no es la privación de libertad. Es la finalidad.\n\n" +
    "Y un matiz de escala que evita el eurocentrismo: durante décadas los sistemas penitenciarios " +
    "fueron más una excepción estadounidense que un modelo europeo. En el resto de Occidente la " +
    "penitenciaría se adoptó despacio, porque construirla y sostenerla resultaba caro frente a " +
    "alternativas mucho más baratas como la transportación penal. Al menos 970.000 penados fueron " +
    "empleados como mano de obra colonial por los imperios occidentales entre 1415 y 1954; España " +
    "transportó unos 110.000.",
});

P.dosColumnas(d, {
  titulo: "Dos modelos, un mismo sustrato religioso",
  cols: [
    {
      rotulo: "Filadelfia · pensilvano",
      lineas: [
        "Aislamiento total del preso.",
        "El recogimiento y la reflexión",
        "moral conducirían al",
        "arrepentimiento.",
      ],
    },
    {
      rotulo: "Auburn",
      lineas: [
        "Trabajo colectivo con silencio",
        "absoluto. El trabajo como medio",
        "de disciplina y redención.",
        "",
      ],
    },
  ],
  notas:
    "SACRIFICABLE si voy con retraso.\n\n" +
    "Los cuáqueros fueron particularmente influyentes en el diseño del sistema pensilvano, " +
    "concibiendo la prisión como un lugar de retiro espiritual donde el individuo, aislado del " +
    "mundo, pudiera reconciliarse con Dios.\n\n" +
    "NO CONFUNDIR EL MODELO CON SU FUNCIONAMIENTO, que está en nota al pie y es demoledor: entre " +
    "1791 y 1809 tres cuartas partes de los internos de Walnut Street salieron por indulto, y los " +
    "presos daban por supuesto que, cumplida la mitad de la condena, les correspondía el perdón.\n\n" +
    "Y el sistema auburniano nació de un FRACASO: en 1821 la legislatura de Nueva York ordenó " +
    "someter a ochenta internos a aislamiento total; el experimento produjo suicidios y " +
    "automutilaciones, y en 1823 el gobernador indultó y liberó a los supervivientes. El alcaide y " +
    "el propio gobernador admitieron que había sido «un error peligroso». De ahí el giro al trabajo " +
    "colectivo en silencio.\n\n" +
    "La dimensión disciplinaria que no hay que perder: el discurso de la redención sirvió para " +
    "moralizar y domesticar a las clases trabajadoras, imponiendo obediencia, sobriedad y sumisión.",
});

P.cita(d, {
  texto: "El castigo debe servir para corregir, no para vengar.",
  atribucion: "Concepción Arenal, 1820-1893",
  rel: "images/concepcion_arenal.jpg",
  pieImg: "Visitadora de prisiones e inspectora de casas de corrección de mujeres",
  size: 30,
  notas:
    "La voz más influyente del reformismo penitenciario español del siglo XIX, y una de las cinco " +
    "figuras del relato canónico que vimos en el capítulo 1.\n\n" +
    "Su obra se sitúa en la encrucijada entre filantropía cristiana, humanismo jurídico y " +
    "correccionalismo liberal. Textos: El visitador del preso (1863), Estudios penitenciarios " +
    "(1877), La instrucción del pueblo (1881).\n\n" +
    "LO QUE LA HACE INTERESANTE MÁS ALLÁ DEL TÓPICO: su pensamiento, aunque impregnado de valores " +
    "religiosos, trascendió lo moral para cuestionar la raíz estructural de la criminalidad. " +
    "Entendía el delito no solo como fallo individual sino como producto de la pobreza, la " +
    "ignorancia y la injusticia social. Vinculó la cuestión penal con la cuestión social.\n\n" +
    "Fue también pionera en denunciar las condiciones infrahumanas de las cárceles españolas y en " +
    "promover las sociedades de patronato y de protección al liberado.",
});

P.afirmacion(d, {
  texto: "Mucha doctrina,\ncasi ninguna ley.",
  sub: "El correccionalismo tuvo en España más desarrollo que en ningún país. Y apenas traducción legal.",
  size: 44,
  notas:
    "La distinción entre la fortuna de una doctrina y su traducción legal, que es una lección de " +
    "método para todo el curso.\n\n" +
    "El correccionalismo nace de la filosofía de Krause, lo sistematiza el jurista alemán Röder y " +
    "llega a España de la mano del krausismo. Para esta doctrina la pena solo se justifica como " +
    "medio de corregir la voluntad defectuosa de quien delinque: no es un mal que se le inflige, " +
    "sino un bien que se le hace.\n\n" +
    "Culmina en Pedro Dorado Montero, catedrático en Salamanca, que lo llevó a su extremo lógico al " +
    "concebir el derecho penal como un DERECHO PROTECTOR DE LOS CRIMINALES. Merece decir el título " +
    "en voz alta, porque descoloca.\n\n" +
    "Y SIN EMBARGO: los códigos penales de 1848 y 1870 mantuvieron una concepción retributiva, y " +
    "las ideas correccionalistas no se incorporaron a la normativa penal y penitenciaria hasta " +
    "comienzos del siglo XX.\n\n" +
    "Hacia finales del XIX el correccionalismo confluye con la escuela sociológica de von Liszt y " +
    "el positivismo italiano de Ferri. Todas miraban al delincuente antes que al acto. Pero no " +
    "confundirlas: donde el correccionalismo veía en la corrección el único fin legítimo, von Liszt " +
    "la reservaba para los corregibles y proponía para el habitual incorregible la INOCUIZACIÓN, " +
    "neutralizarlo mediante reclusión indeterminada si hacía falta.",
});

P.afirmacion(d, {
  texto: "Del pecador al paciente.",
  sub: "La prisión se convierte en laboratorio de observación y tratamiento.",
  notas:
    "A finales del XIX y comienzos del XX, la psicología, la medicina y la criminología positivista " +
    "introducen un paradigma nuevo: el delincuente como anormal o enfermo. Lombroso, Ferri, " +
    "Garofalo, que ya vimos en el capítulo 5.\n\n" +
    "Se introducen evaluaciones psiquiátricas, clasificaciones de reclusos, programas de trabajo " +
    "diferenciados, «tratamiento» individualizado. El delincuente deja de ser un pecador y pasa a " +
    "ser un paciente social que debe ser diagnosticado, tratado y, si es posible, curado.\n\n" +
    "LA SÍNTESIS DEL BLOQUE: la prisión moderna fue a la vez institución moral, científica y " +
    "política. Desde la moral cristiana buscaba el arrepentimiento; desde el correccionalismo, la " +
    "educación y el trabajo; desde la psicología, la adaptación. Pero todas compartían una misma " +
    "lógica: el poder disciplinario.\n\n" +
    "CAUTELA HISTORIOGRÁFICA QUE EL PROPIO CAPÍTULO SE HACE, y que conviene dar porque enseña a " +
    "leer: buena parte de la literatura inspirada en Foucault ha trabajado con discursos generales " +
    "y prácticas ideales más que con lo que ocurría dentro de las instituciones, donde los " +
    "proyectos disciplinarios se veían comprometidos por la falta de presupuesto y de personal, el " +
    "hacinamiento y la simple desidia. Y los discursos nuevos rara vez barrieron a los anteriores: " +
    "tuvieron que disputarles un sitio.\n\n" +
    "PARA LA LECTURA: el cuadro sobre la resocialización en las cárceles franquistas, con la " +
    "redención de penas por el trabajo y el dato que lo explica todo —15.000 plazas para más de " +
    "200.000 presos.",
});

P.actividad(d, {
  rotulo: "ACTIVIDAD · SESIÓN 1 · 15 MIN",
  titulo: "¿Quién pagó, y qué\nquería a cambio?",
  pasos: [
    "Grupos pequeños. A cada uno, una institución penal de las que hemos visto hoy.",
    "¿Quién la impulsó? ¿Qué problema decía resolver? ¿Y qué resolvía en la práctica?",
    "¿A quién se aplicó primero?",
  ],
  notas:
    "Aplica a las instituciones la misma mirada que el capítulo 1 aplicaba a la disciplina: " +
    "preguntar por qué surgen cuando surgen y quién se beneficia.\n\n" +
    "INSTITUCIONES PARA REPARTIR: la lugartenencia de policía de París (1667) · la Metropolitan " +
    "Police (1829) · la Guardia Civil (1844) · el panóptico · el sistema pensilvano · la redención " +
    "de penas por el trabajo (1937).\n\n" +
    "LO QUE TIENE QUE SALIR:\n" +
    "· Que la distancia entre el problema declarado y el problema resuelto es casi siempre grande, " +
    "y casi siempre en la misma dirección.\n" +
    "· Que la tercera pregunta es la que más enseña: la policía de París se aplicó a los pobres sin " +
    "trabajo; la Guardia Civil, a los jornaleros; la redención franquista, a los perdedores de la " +
    "guerra. En ningún caso el primer destinatario fue el conjunto de la ciudadanía.\n\n" +
    "Si el grupo va sobrado: ¿qué institución de hoy os parece que responde a este mismo patrón? " +
    "Suele salir la videovigilancia, el control de fronteras o las ordenanzas de civismo. Deja el " +
    "terreno preparado para la sesión 2.",
});

P.cierre(d, {
  frase: "Hoy: cómo se construyó\nla maquinaria.",
  remate: "El próximo día: qué produce usarla, y qué se ha propuesto en su lugar.",
  notas:
    "Cierre de la sesión 1 y puente.\n\n" +
    "Recapitular en tres frases: (1) el monopolio del castigo es muy reciente y durante siglos fue " +
    "una pretensión sin instrumentos; (2) los reformadores ilustrados describieron un sistema penal " +
    "racional que todavía no existía; (3) la policía y la prisión, las dos instituciones que por " +
    "fin lo hicieron posible, nacieron mirando a una clase social concreta.\n\n" +
    "Y anunciar la bisagra con todas las letras: durante todo lo que hemos visto hoy, la discusión " +
    "fue sobre cómo DEBERÍA castigarse. El próximo día veremos qué pasó cuando alguien empezó a " +
    "preguntar qué PRODUCE castigar.\n\n" +
    "Para leer: los cuadros que no hemos cubierto —«sistema» o campo, la Guardia Civil y el orden " +
    "en el campo español, y la resocialización bajo el franquismo.",
});

// ###########################################################################
//  SESIÓN 2 — Qué produce castigar
// ###########################################################################

P.portada(d, {
  cintillo: "CAPÍTULO 8  ·  SESIÓN 2 DE 2",
  titulo: "Qué produce\ncastigar",
  autoria: "Juanjo Medina",
  notas:
    "SESIÓN 2. ~36 min de exposición + actividad.\n\n" +
    "Reparto: el etiquetamiento (9) · las criminologías críticas (6) · configuraciones " +
    "político-económicas (13) · más allá del derecho penal (6) · cierre.\n\n" +
    "SACRIFICABLE: el bloque del Estado regulador se puede reducir a la diapositiva de la " +
    "desregulación estructural y el dato del inspector. La figura del encarcelamiento NO se " +
    "sacrifica.\n\n" +
    "ARRANQUE, dos minutos: ayer vimos tres siglos de discusión sobre cómo debería castigar el " +
    "Estado. Beccaria, Bentham, el correccionalismo, Concepción Arenal: todos discutían el DEBER " +
    "SER. Hoy empieza con una pregunta distinta y sorprendentemente tardía.",
});

P.afirmacion(d, {
  texto: "Nadie preguntó\nqué produce castigar.",
  sub: "Durante siglo y medio la respuesta penal se discutió solo en clave normativa.",
  size: 44,
  notas:
    "LA BISAGRA DE LAS DOS SESIONES, tal como la formula la conclusión del capítulo.\n\n" +
    "Desde sus orígenes la criminología tuvo un proyecto político sobre cómo responder al delito. " +
    "Beccaria y Bentham no estudiaban delincuentes: discutían cómo debía castigar el Estado, y los " +
    "consideramos padres de la disciplina precisamente por eso.\n\n" +
    "Lo que tardó en llegar fue la investigación sistemática sobre las CONSECUENCIAS. Hubo que " +
    "esperar a los teóricos del etiquetamiento para que alguien preguntara qué produce castigar, " +
    "incluidos los efectos IATROGÉNICOS: el daño que causa el propio tratamiento.\n\n" +
    "Merece la pena detenerse en esa palabra, que viene de la medicina y que van a necesitar: " +
    "iatrogénico es el daño producido por la intervención destinada a curar.",
});

// ·· Los teóricos del etiquetamiento — 9 min ·······························

P.cita(d, {
  texto: "La desviación no es una cualidad del acto que la persona comete, sino una consecuencia de la aplicación por parte de otros de reglas y sanciones a un «infractor».",
  atribucion: "Howard Becker, 1963 · Outsiders",
  size: 23,
  notas:
    "9 MIN — LAS CONSECUENCIAS DE LA INTERVENCIÓN.\n\n" +
    "La teoría del etiquetamiento surge del interaccionismo simbólico: la realidad social no existe " +
    "de forma objetiva e independiente, sino que se construye a través de la comunicación y los " +
    "símbolos.\n\n" +
    "La idea central: un comportamiento se convierte en desviado o criminal no por su naturaleza " +
    "intrínseca, sino porque la sociedad —a través de sus normas, autoridades e instituciones— lo " +
    "clasifica y lo registra como tal.\n\n" +
    "Y el giro que esto supuso para la disciplina, que es lo que quiero que retengan: pasamos de " +
    "una criminología centrada en el delito y el delincuente a una que pone el acento en la forma " +
    "en que el Estado y la sociedad RESPONDEN al delito. Es, en el fondo, la razón por la que este " +
    "capítulo existe.\n\n" +
    "Becker ya salió en el capítulo 4, con los clásicos del etiquetamiento. Merece recordarlo.",
});

P.figuraAlta(d, {
  titulo: "La etiqueta vive\nen el archivo",
  quéMirar:
    "Clotilde Adnet, diecinueve años, bordadora. La ficha conserva el número, el nombre y las " +
    "medidas. La palabra que la clasificaba, «anarquista», no está en la cartulina.",
  rel: "images/etiquetamiento.jpg",
  w: 4.4, h: 5.87,
  fuente:
    "Alphonse Bertillon, ficha antropométrica de Clotilde Adnet, 7 de enero de 1894. The " +
    "Metropolitan Museum of Art. CC0, vía Wikimedia Commons.",
  notas:
    "La etiqueta rara vez se ve en la persona: vive en el sistema que la registra. Ese es el punto " +
    "de la diapositiva y conviene decirlo tal cual.\n\n" +
    "Enlaza con el capítulo 5 y Bertillon: la antropometría como tecnología de identificación.\n\n" +
    "Una vez aplicada la etiqueta de criminal, adicto o delincuente, el etiquetamiento tiende a " +
    "modificar tanto la identidad social del individuo como su autopercepción. Es una etiqueta " +
    "PEGAJOSA. Y puede desembocar en una profecía autocumplida.",
});

P.dosColumnas(d, {
  titulo: "Lemert: dos desviaciones",
  cols: [
    {
      rotulo: "Primaria",
      lineas: [
        "Los actos iniciales.",
        "Transgresiones que pueden",
        "pasar inadvertidas.",
        "Casi todo el mundo las comete.",
      ],
    },
    {
      rotulo: "Secundaria",
      lineas: [
        "La que surge cuando la persona",
        "es públicamente etiquetada",
        "y asume esa identidad.",
        "Ahí empieza la carrera.",
      ],
    },
  ],
  notas:
    "Este tránsito marcaría el paso de lo que podría ser un acto aislado a consolidarse en una " +
    "carrera delictiva sostenida, alimentada por la exclusión social y la falta de oportunidades.\n\n" +
    "Los otros dos autores del bloque:\n" +
    "· GOFFMAN y el ESTIGMA, entendido como identidad social deteriorada. La etiqueta criminal se " +
    "convierte en un rasgo dominante que eclipsa el resto de características del individuo y " +
    "restringe su acceso a roles convencionales.\n" +
    "· TANNENBAUM y la DRAMATIZACIÓN DEL MAL: el proceso por el cual comportamientos juveniles " +
    "leves se interpretan como señales de una esencia maligna, empujando al joven hacia la " +
    "delincuencia profesional.\n\n" +
    "Enlazar con el capítulo 5: es exactamente la crítica de Matza a las cajas ontológicas, y la " +
    "misma lógica del «significar» en Becoming Deviant.",
});

P.wooclap(d, {
  tipo: "ELECCIÓN MÚLTIPLE",
  pregunta: "Procesar formalmente a un menor\npor el sistema de justicia juvenil,\n¿reduce su reincidencia?",
  opciones: [
    "Sí, bastante",
    "Sí, algo",
    "No la cambia",
    "No: probablemente la aumenta",
  ],
  notas:
    "W2 · LA RESPUESTA CORRECTA ES LA D.\n\n" +
    "La síntesis más sólida de que disponemos es una revisión sistemática Campbell que reunió " +
    "VEINTINUEVE ENSAYOS CONTROLADOS con más de siete mil menores a lo largo de treinta y cinco " +
    "años. Su conclusión: el procesamiento formal no reduce la delincuencia posterior, y buena " +
    "parte de los resultados apunta a que la AUMENTA.\n\n" +
    "Subrayar el tipo de evidencia: ensayos controlados, que es lo más parecido a un experimento " +
    "que la criminología puede ofrecer. No es una opinión teórica.\n\n" +
    "El aula suele votar A o B, porque la intuición es que la intervención temprana ayuda. Es la " +
    "misma intuición sobre la que se construyeron políticas enteras.\n\n" +
    "Al comentar: esto no dice que no haya que hacer nada. Dice que el procesamiento FORMAL, con su " +
    "etiqueta y su registro, tiene costes que hay que contar. De ahí salen los programas de " +
    "desviación, que veremos en un momento con su propia ironía.",
});

P.rejilla(d, {
  titulo: "Lo que la etiqueta le cuesta a quien la lleva",
  items: [
    { etiqueta: "El empleo", sub: "Pager: los antecedentes reducen\ndrásticamente la contratación,\nincluso en delitos menores." },
    { etiqueta: "Los vínculos", sub: "Sampson y Laub: la prisión rompe\nfamilia, trabajo y comunidad,\nesenciales para desistir." },
    { etiqueta: "La desigualdad", sub: "Western: el encarcelamiento no\nsolo castiga la pobreza,\nla reproduce." },
    { etiqueta: "El barrio entero", sub: "Clear: donde hay mucho\nencarcelamiento se erosiona la\ncohesión y sube el delito." },
  ],
  notas:
    "La prisión es el máximo exponente del etiquetamiento formal: no solo castiga el acto, redefine " +
    "públicamente al individuo como criminal. Y esa marca persiste tras la liberación.\n\n" +
    "El experimento de Pager merece contarse: envió candidaturas equivalentes que solo se " +
    "diferenciaban en tener o no antecedentes. El efecto se amplifica al combinarse con la raza: " +
    "los hombres afroamericanos con antecedentes eran los más discriminados. De hecho, un hombre " +
    "blanco CON antecedentes recibía más respuestas que un hombre negro SIN ellos.\n\n" +
    "La cuarta casilla es la menos intuitiva y la más importante para política pública: el efecto " +
    "no es solo individual sino COLECTIVO. En barrios con altas tasas de encarcelamiento la " +
    "cohesión social se erosiona, aumentando paradójicamente la criminalidad. El castigo produce " +
    "aquello que dice combatir.\n\n" +
    "Y el contacto policial temprano: Bernburg y Krohn encontraron que los jóvenes oficialmente " +
    "etiquetados reincidían más, no por propensión individual sino por los efectos sociales de la " +
    "etiqueta. Hirschfield documentó el school-to-prison pipeline, la trayectoria que conecta la " +
    "exclusión educativa con la criminalización temprana.",
});

P.afirmacion(d, {
  texto: "Y la teoría de las consecuencias\nno buscadas produjo\nconsecuencias no buscadas.",
  sub: "Net widening: redes más anchas, más fuertes y distintas.",
  size: 34,
  notas:
    "La ironía que cierra el bloque, y que conviene no ahorrarse porque enseña humildad.\n\n" +
    "Si el castigo y la estigmatización generan más delincuencia, la respuesta debía orientarse a " +
    "evitar los efectos desocializadores de la intervención formal. De ahí salieron tres familias " +
    "de políticas: los programas de DESVIACIÓN en justicia juvenil, la JUSTICIA RESTAURATIVA que " +
    "condena el acto pero no a la persona, y la DESPENALIZACIÓN de delitos menores.\n\n" +
    "PERO la evaluación de algunos programas de desviación descubrió que, en lugar de sacar jóvenes " +
    "del sistema, muchos acabaron absorbiendo a chavales a los que antes simplemente se habría " +
    "dejado en paz. Austin y Krisberg lo llamaron redes «más anchas, más fuertes y distintas»; " +
    "Stanley Cohen lo popularizó como AMPLIACIÓN DE LA RED.\n\n" +
    "Hay penalistas españoles que han propuesto que evitar el etiquetamiento es precisamente el " +
    "sentido que hay que darle al mandato constitucional de resocialización del artículo 25.2.",
});

// ·· Las criminologías críticas — 6 min ····································

P.afirmacion(d, {
  texto: "El sistema penal\nno es neutral.",
  sub: "Ni en la ley que se escribe, ni en la que se aplica, ni en a quién se le aplica.",
  size: 44,
  notas:
    "6 MIN — PODER, CLASE SOCIAL E INSTITUCIONES DE CONTROL PENAL.\n\n" +
    "El sistema penal se presenta como un mecanismo neutral destinado a mantener el orden y " +
    "garantizar la igualdad ante la ley. Desde hace más de un siglo las ciencias sociales han " +
    "mostrado que esa neutralidad es, en gran medida, una ilusión.\n\n" +
    "El recorrido teórico, rápido:\n" +
    "· La tradición marxista introduce la crítica directa: el Estado y sus leyes reflejan los " +
    "intereses de la clase dominante. En los sesenta y setenta lo consolidan Quinney y " +
    "Chambliss y Seidman.\n" +
    "· Foucault amplía la crítica: el poder no se ejerce solo desde arriba, se filtra en todos los " +
    "niveles mediante vigilancia y disciplina. Prisiones, escuelas y hospitales como espacios de " +
    "normalización.\n" +
    "· Las críticas feministas: Carol Smart señala que la criminología estaba escrita desde una " +
    "mirada masculina. Chesney-Lind y Heidensohn muestran que la criminalización femenina se liga a " +
    "la pobreza, la violencia doméstica y la transgresión de roles de género.\n" +
    "· Y las antirracistas: Angela Davis y, más tarde, Michelle Alexander ponen de relieve el " +
    "componente racial, con la guerra contra las drogas como mecanismo de control social que " +
    "perpetúa un sistema de castas raciales.",
});

P.rejilla(d, {
  titulo: "Dónde pesa el poder",
  sub: "En las cuatro fases, no en una.",
  items: [
    { etiqueta: "Al crear la ley", sub: "Los delitos financieros reciben\nsanciones leves; la pobreza y\nla protesta se criminalizan." },
    { etiqueta: "Al vigilar", sub: "La policía concentra su presencia\nen barrios pobres: de ahí la\nsobrerrepresentación estadística." },
    { etiqueta: "Al juzgar", sub: "La capacidad económica determina\nel acceso a una defensa\nde calidad." },
    { etiqueta: "Al castigar", sub: "La prisión funciona como espacio\nde reproducción de la exclusión\nsocial y racial." },
  ],
  notas:
    "La diapositiva que ordena toda la evidencia empírica del bloque. Es importante que vean que no " +
    "se trata de un sesgo puntual de un juez o un agente, sino de algo que opera en cada fase.\n\n" +
    "LA EVIDENCIA, por si hace falta:\n" +
    "· Reiman, The rich get richer and the poor get prison: el sistema concentra sus esfuerzos en " +
    "los delitos callejeros y minimiza las sanciones por crímenes corporativos o financieros.\n" +
    "· Hagan: un «ciclo de desventaja» donde la pobreza incrementa la probabilidad de condena y la " +
    "condena perpetúa la pobreza.\n" +
    "· Blumstein: las diferencias raciales en encarcelamiento no se explican solo por las tasas " +
    "delictivas. Gelman analizó más de 125.000 registros de stop-and-frisk en Nueva York: afectaban " +
    "desproporcionadamente a afroamericanos y latinos incluso en barrios con criminalidad similar.\n" +
    "· Spohn y Tonry: personas negras e hispanas reciben penas más severas, especialmente en " +
    "delitos de drogas y propiedad.\n\n" +
    "CAUTELA QUE CONVIENE DAR: casi toda esa evidencia es estadounidense. La europea existe y " +
    "matiza: De Koster y Reinke sostienen que el factor que hacía vulnerable a un grupo no era " +
    "tanto su diferencia cultural o étnica como su condición de FORASTERO DESARRAIGADO —mucha " +
    "visibilidad pública y ninguna red informal de apoyo. En la Bélgica del XIX se procesaba por " +
    "vagancia en Bruselas el doble o el triple que en Amberes con la misma ley: Amberes necesitaba " +
    "mano de obra eventual, Bruselas quería decoro.",
});

P.figuraAlta(d, {
  titulo: "El Estado que\nproduce categorías",
  quéMirar:
    "Davis analizaba cómo el Estado fabrica categorías raciales de criminalidad. El mismo Estado la " +
    "fichó a ella, con una casilla de «raza».",
  rel: "images/angeladavis.webp",
  w: 3.1, h: 4.56,
  fuente:
    "Wanted by the FBI: Angela Yvonne Davis, 18 de agosto de 1970. Obra del gobierno federal de " +
    "los Estados Unidos. CC0, vía Wikimedia Commons.",
  notas:
    "Fue detenida en octubre de 1970 y ABSUELTA DE TODOS LOS CARGOS en junio de 1972. Decirlo, " +
    "porque cierra la anécdota y porque es parte del argumento.\n\n" +
    "La ironía que hace funcionar la diapositiva: la persona que teorizó sobre cómo el aparato " +
    "estatal produce y administra categorías raciales de peligrosidad aparece aquí procesada por " +
    "ese aparato, en un documento que incluye una casilla de raza.\n\n" +
    "Davis es además una de las voces centrales del abolicionismo penal contemporáneo, que veremos " +
    "al final de la sesión.\n\n" +
    "NOTA DE MONTAJE: el original es muy pequeño (320 px de ancho), así que va a tamaño reducido a " +
    "propósito. Ampliarlo más lo pixelaría.",
});

// ·· Configuraciones político-económicas — 13 min ··························

P.afirmacion(d, {
  texto: "¿Qué tipo de Estado,\nqué tipo de castigo?",
  sub: "La pregunta que ha ocupado a la criminología en las últimas décadas.",
  size: 44,
  notas:
    "13 MIN — CONFIGURACIONES POLÍTICO-ECONÓMICAS Y POLÍTICA CRIMINAL. El bloque más largo de la " +
    "sesión, y el que más conecta con la actualidad.\n\n" +
    "Dos preguntas: ¿de qué forma distintos arreglos institucionales político-económicos están " +
    "asociados con formas diversas de pensar y estructurar la respuesta penal? Y ¿en qué medida " +
    "esos arreglos contribuyen a la desigualdad social?\n\n" +
    "Vamos a ver tres configuraciones: el Estado social, el Estado neoliberal y el Estado " +
    "regulador. Anunciarlo, porque da estructura al bloque.",
});

P.figuraAlta(d, {
  titulo: "El Estado social",
  quéMirar:
    "Las prestaciones se despliegan en abanico. Y al pie, en letra pequeña, quién es el " +
    "destinatario: «hombre, esposa y dos hijos».",
  rel: "images/beveridge.jpg",
  w: 3.8, h: 6.03,
  fuente:
    "Demand the Beveridge Plan, cartel de la Social Security League, Londres, 1944. LSE Library, " +
    "vía Wikimedia Commons.",
  notas:
    "El Estado social surge como respuesta a las tensiones del capitalismo liberal del XIX: pobreza, " +
    "desempleo, desigualdad, exclusión. Primero el modelo bismarckiano, más tarde el keynesiano y " +
    "beveridgiano.\n\n" +
    "El giro conceptual: el liberalismo clásico concebía al individuo como responsable de su propio " +
    "destino; el Estado social reconoce que la libertad y la igualdad solo son posibles con " +
    "condiciones materiales mínimas. El bienestar deja de ser caridad y se convierte en derecho.\n\n" +
    "El Informe Beveridge (1942) propuso un sistema integral contra los «cinco gigantes»: necesidad, " +
    "enfermedad, ignorancia, miseria y ocio forzoso.\n\n" +
    "EL DETALLE DEL PIE DEL CARTEL MERECE SEÑALARSE CON EL DEDO: las cantidades corresponden a " +
    "«hombre, esposa y dos hijos». El modelo tenía un sujeto muy concreto en la cabeza, y eso " +
    "anticipa las críticas que veremos en un momento.",
});

P.afirmacion(d, {
  texto: "La penalidad\ndel bienestar.",
  sub: "El delito como síntoma de exclusión; el castigo como instrumento de reinserción.",
  size: 44,
  notas:
    "Garland, Punishment and Welfare (1985). Analizaba cómo la política penal británica del siglo XX " +
    "reflejaba la lógica inclusiva del Estado social.\n\n" +
    "La criminología positivista y las políticas correccionales se basaban en la idea de que el " +
    "delincuente era un sujeto TRATABLE, producto de deficiencias sociales o psicológicas. De ahí " +
    "instituciones orientadas al tratamiento: libertad condicional, tribunales de menores, trabajo " +
    "social penitenciario, servicios de rehabilitación.\n\n" +
    "LO DECISIVO, y suele pasarse por alto: la prisión no era el instrumento central, sino un " +
    "componente dentro de un abanico más amplio de medidas sociales.\n\n" +
    "La analogía que lo resume: así como el desempleado debía ser ayudado, el infractor debía ser " +
    "rehabilitado.\n\n" +
    "Y LA ADVERTENCIA DEL PROPIO GARLAND, que no hay que ahorrarse: esta lógica contenía también un " +
    "elemento disciplinario. El Estado del bienestar, aunque inclusivo, extendía su poder sobre la " +
    "vida cotidiana mediante la vigilancia, el diagnóstico y la normalización. El bienestar era " +
    "también una forma de control social difuso.",
});

P.rejilla(d, {
  titulo: "Tres regímenes, tres penalidades",
  sub: "Esping-Andersen, leído por Cavadino y Dignan. Y un cuarto que nos toca.",
  items: [
    { etiqueta: "Socialdemócrata", sub: "Nórdicos. Baja penalidad,\nalta inclusión. El castigo\ncomo último recurso." },
    { etiqueta: "Corporativista", sub: "Europa continental. Penalidad\npaternalista que reproduce\nlas jerarquías que protege." },
    { etiqueta: "Liberal", sub: "EE. UU., Reino Unido. Alta\npenalidad y exclusión.\nEncarcelamiento masivo." },
    { etiqueta: "Mediterráneo", sub: "Ferrera: protección fragmentada,\nfamilia como proveedora, y\ndistancia entre norma y entrega." },
  ],
  notas:
    "La tipología de Esping-Andersen es la más famosa de la ciencia política, y Cavadino y Dignan " +
    "propusieron que hay regímenes penales paralelos a los regímenes de bienestar.\n\n" +
    "NÓRDICOS: Lappi-Seppälä sostiene que la combinación no es casual. Donde hay alta confianza " +
    "social, igualdad y cohesión, el castigo se concibe como último recurso y el infractor sigue " +
    "siendo parte del cuerpo social. La criminología escandinava lo llama «penalidad solidaria».\n\n" +
    "LIBERALES: Wacquant lo describe como la «penalización de la miseria». La reducción del " +
    "bienestar se compensa simbólicamente con mano dura y tolerancia cero.\n\n" +
    "EL CUARTO NOS IMPORTA MÁS QUE LOS OTROS TRES, y conviene decirlo: Ferrera identificó el modelo " +
    "del sur de Europa —España, Italia, Portugal, Grecia— con protección social fragmentada según " +
    "el estatus ocupacional, fuerte dependencia de la familia como proveedora de cuidados, y una " +
    "distancia notable entre lo que la norma promete y lo que la administración entrega. Tenedlo " +
    "presente antes de aplicar a España, sin más, cualquiera de las asociaciones anteriores.\n\n" +
    "PARA LA LECTURA, y es de lo mejor del capítulo: el cuadro «¿Bienestar frente a castigo?». " +
    "Gregory sostiene que en EE. UU. el Estado del bienestar y el penal se construyeron A LA VEZ, y " +
    "que el mismo New Deal que amplió la protección financió una oleada de construcción de " +
    "prisiones. Hinton documenta que la guerra contra el crimen surgió de la guerra contra la " +
    "pobreza. Y el caso nórdico tampoco sale indemne: Barker habla de «violencia benevolente» —los " +
    "extranjeros rondan el 27 % de la población penitenciaria sueca— y entre 1935 y 1976, en plena " +
    "edad dorada del Estado social, se practicaron cerca de 63.000 esterilizaciones, la mitad sin " +
    "consentimiento. La cara excluyente no apareció con la inmigración: cambió de destinatario.",
});

P.afirmacion(d, {
  texto: "El Estado centauro.",
  sub: "Liberal en la economía, autoritario en lo penal. No un Estado mínimo: uno selectivo.",
  size: 44,
  notas:
    "El giro neoliberal de los setenta y ochenta. La expresión es de Wacquant.\n\n" +
    "El proceso no supone una disminución del poder estatal, sino una RECONFIGURACIÓN de sus " +
    "funciones: se reduce la intervención pública en lo social —educación, salud, vivienda, " +
    "dependencia— y se fortalece el aparato coercitivo —policía, tribunales, cárceles.\n\n" +
    "Así, el neoliberalismo no produce un Estado mínimo sino un Estado selectivo que abandona la " +
    "protección social para intensificar el control punitivo.\n\n" +
    "El castigo se convierte en forma de gestionar las nuevas desigualdades: la prisión pasa a " +
    "cumplir la función que antes tenía la asistencia. Y el infractor ya no es un ciudadano en " +
    "riesgo, sino un enemigo moral y un riesgo a gestionar.\n\n" +
    "Otros dos rasgos que conviene nombrar aunque sea rápido:\n" +
    "· MERCANTILIZACIÓN. En España el sistema penitenciario sigue siendo público, pero se han " +
    "externalizado servicios, y en justicia juvenil buena parte de los centros se gestiona por " +
    "contrato: solo en Andalucía, ocho centros salieron a licitación en 2021 por 275 millones. " +
    "Añadir la Ley de Seguridad Privada de 2014.\n" +
    "· GERENCIALISMO. El delincuente como riesgo calculable: herramientas actuariales, algoritmos " +
    "de predicción, vigilancia masiva. Simon lo llama «gobernar a través del delito», que ya salió " +
    "en el capítulo de víctimas.",
});

P.figuraPlena(d, {
  rel: "images/encarcelamiento-espana-paneles.png",
  w: 7.43, h: 6.3,
  notas:
    "NO SACRIFICABLE: es la única visualización de datos del capítulo. Va a página completa porque " +
    "trae su propio titular, sus anotaciones y sus fuentes.\n\n" +
    "LO QUE HAY QUE SEÑALAR CON EL DEDO, en este orden:\n\n" +
    "1. EL PRIMER GRAN SALTO ES ANTERIOR AL CÓDIGO PENAL DE 1995. Entre 1984 y 1994 la tasa pasa de " +
    "44 a 120: casi se triplica. Esto descoloca a quien cree que todo empezó con el código de la " +
    "democracia, y es el dato más útil de la figura.\n\n" +
    "2. El máximo: 166 por 100.000 en 2010, una de las tasas más altas de la Unión Europea, con " +
    "78.148 personas encarceladas. España nunca se acercó a EE. UU., pero su crecimiento durante " +
    "todo el periodo democrático fue extraordinario.\n\n" +
    "3. Y la caída posterior: un 25 % hasta 124 en 2025. En 2022 llegó a 116, muy cerca de la media " +
    "europea. Cid y Varona lo atribuyen a menos entradas —menor uso de la prisión preventiva, más " +
    "penas alternativas, menos delincuencia violenta— y a condenas efectivamente más cortas por " +
    "mayor uso de la libertad condicional.\n\n" +
    "4. PERO el descenso se detuvo en 2022 y en los dos últimos años vuelve a subir. Está por ver " +
    "si es una corrección duradera o el final de un paréntesis. Dejarlo abierto.\n\n" +
    "Los cuatro factores que propone Cid para explicar la escalada: el nivel de delincuencia, la " +
    "europeización de la política criminal, la criminalización de conductas leves y el rigorismo de " +
    "las reformas penales. Y el dato político: las reformas de sucesivos gobiernos, CON " +
    "INDEPENDENCIA DE SU COLOR, ampliaron tipos, redujeron beneficios penitenciarios e introdujeron " +
    "la prisión permanente revisable en 2015.",
});

P.afirmacion(d, {
  texto: "De una cultura de la solidaridad\na una cultura del control.",
  sub: "Cuando el bienestar se privatiza, el castigo se endurece.",
  size: 36,
  notas:
    "Garland, La cultura del control (2001). Ya salió en el capítulo 4 con la politización del " +
    "delito, así que conviene enlazar.\n\n" +
    "El delito se presenta como un riesgo constante que debe ser gestionado mediante vigilancia, " +
    "castigo y exclusión. La justicia penal deja de orientarse a la rehabilitación y pasa a " +
    "centrarse en la gestión del riesgo, la neutralización del infractor y la satisfacción " +
    "simbólica de la demanda social de seguridad.\n\n" +
    "Garland describe la transformación como una MUTACIÓN MORAL del Estado moderno.\n\n" +
    "PARA EL CASO ESPAÑOL: González Sánchez ha seguido el rastro de las racionalidades neoliberales " +
    "—individualización, contractualización, moralización— durante cuatro décadas y en tres " +
    "terrenos a la vez: la política laboral, la social y la penal. Su punto de partida es " +
    "contundente y merece leerse en voz alta: España tiene hoy más policías y más personas presas " +
    "que hace cincuenta años, y un Código Penal más duro que el que estaba en vigor cuando murió " +
    "Franco, pese a que la delincuencia lleva décadas sin aumentar.",
});

P.afirmacion(d, {
  texto: "Pero el crecimiento no\nha sido penal. Ha sido\nregulatorio.",
  sub: "Braithwaite: el neoliberalismo no produjo un Estado mínimo, sino uno distinto.",
  size: 38,
  notas:
    "EL CONTRAPUNTO NECESARIO. Garland, Wacquant y Simon comparten la premisa de que la respuesta " +
    "estatal al delito es esencialmente penal. Braithwaite discute justo eso.\n\n" +
    "Las privatizaciones y la liberalización no eliminaron la intervención pública: la " +
    "transformaron en una gobernanza fragmentada de agencias, comités técnicos y organismos " +
    "internacionales.\n\n" +
    "La fórmula británica que lo resume, y que funciona muy bien en clase: el Estado dejó de REMAR " +
    "—prestar los servicios directamente a través de empresas públicas— para PILOTAR, regulando y " +
    "fiscalizando a quienes los prestan desde el sector privado.\n\n" +
    "Hoy buena parte del daño socialmente relevante —fraudes contables, evasión fiscal, vertidos, " +
    "siniestralidad laboral, productos inseguros— se controla mediante inspecciones, auditorías y " +
    "sanciones administrativas. Nada de eso pasa por el sistema penal.\n\n" +
    "Enlazar con el capítulo 6, donde vieron cómo funcionan esos mecanismos y qué promete la " +
    "regulación responsiva.",
});

P.afirmacion(d, {
  texto: "No se derogan las normas.\nSe vacía a quien\ndebe aplicarlas.",
  sub: "Desregulación estructural: atacar al organismo en lugar de a la regla.",
  size: 38,
  notas:
    "El concepto es de Freeman y Jacobs, y es de lo más actual del manual.\n\n" +
    "El procedimiento: en lugar de atacar las reglas —que es visible y cuesta votos— se ataca al " +
    "organismo, dejándolo sin plantilla y sin dirección estable, marginando su criterio técnico, " +
    "reasignando sus recursos y deteriorando su reputación pública. Las leyes siguen vigentes, pero " +
    "desaparece la infraestructura encargada de vigilar.\n\n" +
    "EL PARALELISMO QUE CIERRA EL CAPÍTULO Y QUE MERECE ENUNCIARSE DESPACIO: en la primera sesión " +
    "vimos Estados que proclamaban un monopolio del castigo para el que carecían de medios. Aquí " +
    "ocurre algo simétrico y DELIBERADO: normas plenamente vigentes, infracciones documentadas y " +
    "una capacidad de respuesta que se desmantela. En ambos casos, la distancia entre lo que el " +
    "Estado dice poder hacer y lo que efectivamente hace es el objeto de estudio.\n\n" +
    "El caso británico como ejemplo concreto: verter aguas fecales sin depurar en periodo seco es " +
    "ilegal en Inglaterra y además contamina más, porque no hay lluvia que diluya. En 2025 las " +
    "empresas declararon 8.576 vertidos en seco; entre enero y mayo de 2026 fueron 7.280 en cinco " +
    "meses. Conductas ilegales, deliberadas, contadas una a una por el propio Estado, y que casi " +
    "nunca terminan en sanción seria.\n\n" +
    "Y LA CONSECUENCIA PARA LA DISCIPLINA: como estos hechos no pasan por el sistema penal, no " +
    "aparecen en ninguna estadística de criminalidad. Si la criminología solo mira al delito, todo " +
    "esto es invisible.",
});

P.datoGrande(d, {
  cifra: "1",
  unidad: "inspector de seguridad\nlaboral por cada\n84.000 trabajadores",
  glosa:
    "Estados Unidos, previsión para 2026. La norma sigue vigente; lo que se ha desmantelado es la " +
    "capacidad de aplicarla.",
  notas:
    "El dato que hace concreto el concepto anterior. La inspección federal pasó de 846 inspectores " +
    "en febrero de 2024 a 736 en junio de 2025; contando administraciones estatales, el país prevé " +
    "cubrir 2026 con unos 1.720 inspectores para 144 millones de trabajadores.\n\n" +
    "Los otros dos casos documentados, por si hay tiempo:\n" +
    "· La Environmental Protection Agency perdió en torno a un tercio de su plantilla en 2025 y " +
    "entró en 2026 con unos 9.700 empleados, la cifra más baja desde los años setenta. El proyecto " +
    "de presupuesto recortaba un 54 % sus fondos y, dentro de ellos, un 49 % la APLICACIÓN PENAL.\n" +
    "· En la Consumer Financial Protection Bureau se documentó un plan de reducción del 88 % de la " +
    "plantilla y el archivo de diecisiete de los treinta y cuatro procedimientos sancionadores " +
    "abiertos.\n\n" +
    "Puede que encontremos confort en que son ejemplos lejanos. Pero conviene no ignorar la rapidez " +
    "con la que prácticas políticas de origen anglosajón acaban afectándonos. Y hay literatura " +
    "española que documenta las dificultades del aparato administrativo para controlar el daño " +
    "social en determinados ámbitos regulados.",
});

// ·· Más allá del derecho penal — 6 min ····································

P.rejilla(d, {
  titulo: "Cinco propuestas de reducir lo penal",
  items: [
    { etiqueta: "Realismo de izquierda", sub: "Lea y Young: el delito daña\nmás a los barrios obreros.\nMás política social." },
    { etiqueta: "Garantismo", sub: "Ferrajoli: derecho penal mínimo,\nsubordinado a los derechos\nfundamentales." },
    { etiqueta: "Justicia restaurativa", sub: "Cambia la pregunta: quién ha\nsido dañado y qué necesita." },
    { etiqueta: "Abolicionismo", sub: "Christie, Mathiesen, Hulsman:\nel sistema penal es en sí\nviolencia institucionalizada." },
    { etiqueta: "Despoliciamiento", sub: "Defund the Police: transferir\nfondos y funciones a\nservicios civiles." },
  ],
  notas:
    "6 MIN — MÁS ALLÁ DEL DERECHO PENAL. Van de menos a más radical; decirlo al presentarlas.\n\n" +
    "REALISMO DE IZQUIERDA. Nace de un reproche interno: al explicar la delincuencia como síntoma " +
    "de la desigualdad, la criminología crítica había acabado desatendiendo a las víctimas y la " +
    "demanda de seguridad de las propias clases populares. Lea y Young argumentan que negarlo deja " +
    "ese terreno a los discursos punitivistas de la derecha. Su propuesta no es más castigo sino " +
    "reconstruir el control informal: empleo, educación, servicios públicos, participación vecinal.\n\n" +
    "GARANTISMO. No discute la existencia del sistema penal, sino su TAMAÑO. Intervenir solo para " +
    "proteger bienes jurídicos esenciales, despenalizar lo que no genere daños, sustituir la " +
    "prisión por alternativas. Menos derecho penal y más garantías.\n\n" +
    "ABOLICIONISMO. El argumento más influyente es de Christie, con el que abrimos el capítulo de " +
    "víctimas: el Estado ha ROBADO LOS CONFLICTOS a quienes los protagonizan. Mathiesen lo formuló " +
    "con una frase que ha hecho fortuna: las cárceles no tienen futuro, solo pasado. Abolir no " +
    "significa impunidad, sino devolver la gestión del conflicto a estructuras comunitarias.\n\n" +
    "DESPOLICIAMIENTO. Tras el asesinato de George Floyd en 2020. Su diagnóstico no es solo el " +
    "exceso de violencia, sino la EXPANSIÓN de la función policial hacia ámbitos —salud, educación, " +
    "conflicto vecinal— donde antes no estaba.\n\n" +
    "Para quien quiera seguir: Metropolice extiende estos análisis al caso español y está en abierto.",
});

P.figura(d, {
  titulo: "«No se puede reformar un sistema diseñado para matar»",
  quéMirar: "Es exactamente la premisa que Langer, Levin, Wacquant y Garland aceptan en el diagnóstico y rechazan en la conclusión.",
  rel: "images/abolishpolice.jpg",
  w: 6.2, h: 4.66,
  fuente:
    "Andrew Ratto, protesta por la muerte de Daunte Wright, 12 de abril de 2021. CC BY 2.0, vía " +
    "Wikimedia Commons.",
  notas:
    "El cartón resume el argumento abolicionista en una frase, y el pie de la figura dice " +
    "exactamente por qué está aquí: es la premisa que los críticos del abolicionismo aceptan en el " +
    "diagnóstico y rechazan en la conclusión.\n\n" +
    "LAS RESPUESTAS, que hay que dar porque si no el bloque queda cojo:\n\n" +
    "· Desde el derecho, Langer y Levin formulan un MINIMALISMO PENAL que acepta el diagnóstico " +
    "abolicionista sobre el daño que produce el sistema, pero no su conclusión: el sistema conserva " +
    "una función, aunque debería tener un tamaño y un alcance radicalmente menores. Es, en el " +
    "fondo, una recuperación «a la anglosajona» —sin citarle— del espíritu de Ferrajoli.\n\n" +
    "· Wacquant, a quien hemos citado varias veces como crítico del Estado penal, argumenta " +
    "EXPLÍCITAMENTE CONTRA el abolicionismo: lo considera filosóficamente atractivo pero " +
    "sociológicamente insostenible y políticamente contraproducente. Su propuesta tiene forma de " +
    "paradoja y merece decirse despacio: AUMENTAR los medios del aparato penal —más jueces, más " +
    "fiscales, más abogados de oficio, más personal por recluso— y REDUCIR al mismo tiempo el " +
    "número de personas que entran en él. Aumentar el tamaño para recortar el alcance.\n\n" +
    "· Garland ha defendido una posición próxima: escéptica ante la abolición y partidaria de una " +
    "reforma profunda.",
});

P.rejilla(d, {
  titulo: "Tres lecciones del capítulo",
  items: [
    { etiqueta: "Norma y capacidad", sub: "Desconfiad de cualquier\ndescripción del sistema penal\nque solo lea la ley." },
    { etiqueta: "Nunca fue neutral", sub: "Quién es vigilado y quién\nacaba encerrado no son\ncuestiones técnicas." },
    { etiqueta: "Lo penal es una parte", sub: "Y probablemente no la mayor.\nSi medís el delito por lo que\nel sistema procesa, medís\nuna decisión política." },
  ],
  notas:
    "EL CIERRE REAL. Si solo se llevan una diapositiva de las dos sesiones, que sea esta.\n\n" +
    "1. LA DISTANCIA ENTRE LO QUE EL ESTADO DICE PODER HACER Y LO QUE HACE. Los monarcas del XVII " +
    "se proclamaron fuente única de la justicia sin policía ni prisiones. Beccaria y Bentham " +
    "describieron un sistema racional que no existía. El siglo XIX proyectó panópticos y apenas " +
    "construyó una veintena de establecimientos —la primera cárcel celular española no se abrió " +
    "hasta 1861, en Vitoria, y la Modelo de Madrid se terminó en 1883, cuando el modelo celular ya " +
    "se abandonaba en Europa. El correccionalismo tuvo aquí más doctrina que ley. Y hoy, en lo " +
    "regulatorio, las normas siguen vigentes mientras se desmantela la capacidad de aplicarlas.\n\n" +
    "2. NUNCA FUE NEUTRAL. La Guardia Civil se desplegó donde había propiedad agraria que proteger " +
    "y jornaleros a los que vigilar; las cárceles del XIX se llenaron de pobres; y la investigación " +
    "contemporánea sigue mostrando que la clase, el origen y el género pesan en cada fase.\n\n" +
    "3. LO PENAL ES SOLO UNA PARTE. El fraude, la evasión fiscal, los vertidos, la siniestralidad " +
    "laboral se gestionan por vías administrativas que no generan antecedentes, no llegan a un " +
    "juzgado y no aparecen en ninguna estadística.",
});

P.actividad(d, {
  rotulo: "ACTIVIDAD · SESIÓN 2 · 15 MIN",
  titulo: "¿Cuánto aparato penal\nnecesita una sociedad?",
  pasos: [
    "A cada grupo, una de las cinco propuestas: realismo, garantismo, restaurativa, abolición, despoliciamiento.",
    "Defendedla en dos minutos. Qué problema resuelve y qué deja sin resolver.",
    "¿Qué parte del desacuerdo podría zanjar la evidencia? ¿Y cuál no?",
  ],
  notas:
    "La tercera pregunta es la actividad. Las dos primeras solo preparan el terreno.\n\n" +
    "LA DISTINCIÓN QUE TIENE QUE SALIR, y que González y Escobar formulan bien: hay críticas al " +
    "FUNCIONAMIENTO del sistema penal —que aceptan su planteamiento y señalan la distancia entre lo " +
    "previsto y lo practicado, terreno donde la evaluación criminológica tiene mucho que decir— y " +
    "críticas NORMATIVAS, que lo rechazan por razones de valor y sobre las que el método científico " +
    "apenas puede pronunciarse.\n\n" +
    "Wacquant lo formula con la distinción de Weber entre la ÉTICA DE LA CONVICCIÓN, que exige " +
    "fidelidad a un ideal absoluto, y la ÉTICA DE LA RESPONSABILIDAD, que pondera los caminos " +
    "posibles y sus resultados probables. Quienes defienden el minimalismo sostienen que abolir es " +
    "moralmente irreprochable y políticamente estéril; quienes defienden la abolición responden que " +
    "las reformas graduales llevan un siglo prometiendo lo mismo y consolidando el sistema que " +
    "dicen corregir.\n\n" +
    "NO CERRAR CON UNA POSICIÓN. Es explícitamente lo que pide el capítulo: ninguna evidencia zanja " +
    "esa discusión, y es mejor salir de aquí sabiendo dónde está el desacuerdo que con una postura " +
    "ya tomada. Decírselo así.\n\n" +
    "Si el grupo va sobrado: ¿qué dato os haría cambiar de opinión? A quien no se le ocurre " +
    "ninguno, probablemente está en el terreno normativo y no en el empírico. Y eso está bien, " +
    "siempre que lo sepa.",
});

P.cierre(d, {
  frase: "El desacuerdo no es empírico.\nEs ético y estratégico.",
  remate: "Y conviene que salgáis sabiendo dónde está, no con una posición ya tomada.",
  notas:
    "El cierre del capítulo, y es deliberadamente abierto.\n\n" +
    "Recapitular el arco de las dos sesiones en tres frases: (1) el monopolio del castigo se " +
    "construyó tarde y siempre hubo distancia entre la proclama y la capacidad; (2) cuando por fin " +
    "hubo maquinaria, nunca apuntó a todos por igual; (3) y cuando por fin se preguntó qué produce " +
    "usarla, la respuesta fue incómoda.\n\n" +
    "Y la pregunta que queda: cuánto aparato penal necesita realmente una sociedad. Ahí el " +
    "desacuerdo no es empírico sino ético y estratégico.\n\n" +
    "Anunciar lo que viene: el capítulo 9, sobre las respuestas sociales y culturales al delito, " +
    "que es el quinto y último de los cinco temas.",
});

P.guardar(d, DESTINO);
