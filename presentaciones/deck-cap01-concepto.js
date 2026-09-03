// Capítulo 1 · "¿Qué es la criminología?"
// Estilo "B claro" (aula iluminada). Maquetaciones del sistema, sin inventar nuevas.
// Genera: Cap01_Que-es-la-criminologia.pptx

const pptxgen = require("pptxgenjs");
const fs = require("fs");
const path = require("path");

const W = 13.333, H = 7.5, M = 0.95;
const CW = W - 2 * M;

const IMGDIR = "/sessions/clever-modest-cray/mnt/intro_crimi";
const OUT = path.join(IMGDIR, "presentaciones");

// --- tokens "B claro" ------------------------------------------------------
const s = {
  bg: "FFFFFF",
  ink: "14171A",
  muted: "5F666D",
  accent: "A66A00",        // ocre: acento SOBRE BLANCO
  accentFill: "E0A33E",    // ámbar: acento SOBRE NEGRO y relleno de círculos
  numeralOnCircle: "14171A",
  dark: "14171A",
  onDark: "F2F0EB",
  onDarkMuted: "9198A0",
  head: "Arial",
  body: "Arial",
  ph: "EDEEF0",
  phInk: "868D95",
};

let N = 0;               // contador de diapositivas
const missing = [];      // imágenes que no aparecen en disco

// --- helpers ---------------------------------------------------------------

function slide(pres, { dark = false, numbered = true } = {}) {
  const sl = pres.addSlide();
  N += 1;
  sl.background = { color: dark ? s.dark : s.bg };
  if (numbered) {
    sl.addText(String(N).padStart(2, "0"), {
      x: W - M - 1.4, y: H - 1.25, w: 1.4, h: 0.75,
      isTextBox: true, margin: 0,
      fontFace: s.body, fontSize: 40, bold: true,
      color: dark ? "2A2E33" : "D5D9DD",
      align: "right", valign: "bottom",
    });
  }
  return sl;
}

// Imagen real del libro; si falta el fichero, cae al hueco gris con la ruta del .qmd.
function img(sl, { rel, x, y, w, h, cover = false }) {
  const abs = path.join(IMGDIR, rel);
  if (fs.existsSync(abs)) {
    sl.addImage({
      path: abs, x, y, w, h,
      sizing: { type: cover ? "cover" : "contain", w, h },
    });
    return true;
  }
  missing.push(rel);
  sl.addShape("roundRect", {
    x, y, w, h, rectRadius: 0.04,
    fill: { color: s.ph }, line: { type: "none" },
  });
  sl.addText(rel, {
    x, y: y + h / 2 - 0.2, w, h: 0.4, isTextBox: true, margin: 0,
    fontFace: s.body, fontSize: 11, color: s.phInk,
    align: "center", valign: "middle",
  });
  return false;
}

function titular(sl, t, { y = 0.95, dark = false } = {}) {
  sl.addText(t, {
    x: M, y, w: CW, h: 0.8, isTextBox: true, margin: 0,
    fontFace: s.head, fontSize: 38, bold: true,
    color: dark ? s.onDark : s.ink,
  });
}

// Pie + fuente bajo una imagen.
function pie(sl, texto, { x = M, y, w = CW, align = "center" } = {}) {
  sl.addText(texto, {
    x, y, w, h: 0.7, isTextBox: true, margin: 0,
    fontFace: s.body, fontSize: 10.5, color: s.muted, italic: true,
    lineSpacing: 14, align, valign: "top",
  });
}

// --- maquetación 1 · PORTADA ----------------------------------------------
function portada(pres, { cintillo, titulo, autoria, notas }) {
  const sl = slide(pres, { dark: true, numbered: false });
  sl.addText(cintillo, {
    x: M, y: 2.3, w: CW, h: 0.35, isTextBox: true, margin: 0,
    fontFace: s.body, fontSize: 13, bold: true, charSpacing: 3,
    color: s.accentFill,          // ámbar sobre negro
  });
  sl.addText(titulo, {
    x: M, y: 2.75, w: 9.2, h: 2.3, isTextBox: true, margin: 0,
    fontFace: s.head, fontSize: 60, bold: true, color: s.onDark,
    lineSpacing: 62,
  });
  sl.addText(autoria, {
    x: M, y: 5.45, w: CW, h: 0.35, isTextBox: true, margin: 0,
    fontFace: s.body, fontSize: 14, color: s.onDarkMuted,
  });
  sl.addNotes(notas);
}

// --- maquetación 2 · AFIRMACIÓN -------------------------------------------
function afirmacion(pres, { texto, sub, notas, dark = false, size = 48 }) {
  const sl = slide(pres, { dark });
  sl.addText(texto, {
    x: M, y: 2.15, w: 10.6, h: 2.3, isTextBox: true, margin: 0,
    fontFace: s.head, fontSize: size, bold: true,
    color: dark ? s.onDark : s.ink,
    lineSpacing: Math.round(size * 1.14),
  });
  if (sub) {
    sl.addText(sub, {
      x: M, y: 4.62, w: 9.5, h: 0.5, isTextBox: true, margin: 0,
      fontFace: s.body, fontSize: 18,
      color: dark ? s.onDarkMuted : s.muted,
    });
  }
  sl.addNotes(notas);
}

// --- maquetación 3 · CITA (con retrato opcional) ---------------------------
function cita(pres, { texto, atribucion, rel, pieImg, notas, size = 28 }) {
  const sl = slide(pres);
  const conRetrato = Boolean(rel);
  const anchoTexto = conRetrato ? 7.3 : 10.4;
  sl.addText([
    { text: "“", options: { fontSize: size + 24, color: s.accent } },
    { text: texto, options: { fontSize: size, color: s.ink } },
  ], {
    x: M, y: 1.85, w: anchoTexto, h: 3.0, isTextBox: true, margin: 0,
    fontFace: s.head, italic: true, lineSpacing: Math.round(size * 1.36),
    valign: "top",
  });
  sl.addText(atribucion, {
    x: M, y: 5.05, w: anchoTexto, h: 0.35, isTextBox: true, margin: 0,
    fontFace: s.body, fontSize: 14, bold: true, color: s.muted,
  });
  if (conRetrato) {
    img(sl, { rel, x: 9.25, y: 1.6, w: 3.15, h: 3.9 });
    if (pieImg) pie(sl, pieImg, { x: 9.25, y: 5.62, w: 3.15 });
  }
  sl.addNotes(notas);
}

// --- maquetación 4 · DOS COLUMNAS ------------------------------------------
function dosColumnas(pres, { titulo, cols, notas }) {
  const sl = slide(pres);
  titular(sl, titulo, { y: 1.15 });
  cols.forEach((c, i) => {
    const x = M + i * 5.95;
    sl.addText(c.rotulo, {
      x, y: 2.7, w: 5.1, h: 0.55, isTextBox: true, margin: 0,
      fontFace: s.body, fontSize: 23, bold: true, color: s.accent,
    });
    sl.addText(c.lineas.join("\n"), {
      x, y: 3.38, w: 5.1, h: 2.0, isTextBox: true, margin: 0,
      fontFace: s.body, fontSize: 17, color: s.ink, lineSpacing: 29,
    });
  });
  sl.addNotes(notas);
}

// --- maquetación 5 · DATO GRANDE -------------------------------------------
function datoGrande(pres, { cifra, unidad, glosa, notas, size = 150 }) {
  const sl = slide(pres);
  sl.addText(cifra, {
    x: M, y: 1.7, w: 5.6, h: 2.5, isTextBox: true, margin: 0,
    fontFace: s.head, fontSize: size, bold: true, color: s.accent,
    lineSpacing: size,
  });
  sl.addText(unidad, {
    x: M + 0.1, y: 4.05, w: 5.4, h: 0.6, isTextBox: true, margin: 0,
    fontFace: s.body, fontSize: 26, color: s.ink,
  });
  sl.addText(glosa, {
    x: 7.1, y: 2.2, w: 5.25, h: 2.4, isTextBox: true, margin: 0,
    fontFace: s.body, fontSize: 19, color: s.ink, lineSpacing: 32,
  });
  sl.addNotes(notas);
}

// --- maquetación 6 · REJILLA -----------------------------------------------
function rejilla(pres, { titulo, items, notas, sub }) {
  const sl = slide(pres);
  titular(sl, titulo, { y: 1.0 });
  if (sub) {
    sl.addText(sub, {
      x: M, y: 1.82, w: CW, h: 0.4, isTextBox: true, margin: 0,
      fontFace: s.body, fontSize: 16, color: s.muted,
    });
  }
  const filas = Math.ceil(items.length / 3);
  const y0 = filas > 1 ? 2.75 : 3.2;
  const dy = items.some((i) => i.sub) ? 1.55 : 1.25;
  items.forEach((it, i) => {
    const x = M + (i % 3) * 3.95;
    const y = y0 + Math.floor(i / 3) * dy;
    sl.addShape("ellipse", {
      x, y, w: 0.42, h: 0.42,
      fill: { color: s.accentFill }, line: { type: "none" },
    });
    sl.addText(String(i + 1), {
      x, y, w: 0.42, h: 0.42, isTextBox: true, margin: 0,
      fontFace: s.body, fontSize: 13, bold: true, color: s.numeralOnCircle,
      align: "center", valign: "middle",
    });
    sl.addText(it.etiqueta, {
      x: x + 0.62, y: y - 0.02, w: 3.15, h: 0.45, isTextBox: true, margin: 0,
      fontFace: s.body, fontSize: 21, bold: true, color: s.ink,
    });
    if (it.sub) {
      sl.addText(it.sub, {
        x: x + 0.62, y: y + 0.44, w: 3.15, h: 0.75, isTextBox: true, margin: 0,
        fontFace: s.body, fontSize: 14, color: s.muted, lineSpacing: 19,
      });
    }
  });
  sl.addNotes(notas);
}

// --- maquetación 7 · IMAGEN A SANGRE ---------------------------------------
function imagenSangre(pres, { rel, titulo, pieImg, notas }) {
  const sl = slide(pres, { dark: true, numbered: false });
  img(sl, { rel, x: 0, y: 0, w: W, h: H, cover: true });
  sl.addShape("rect", {
    x: 0, y: 0, w: 6.6, h: H,
    fill: { color: "000000", transparency: 28 }, line: { type: "none" },
  });
  sl.addText(titulo, {
    x: M, y: 2.35, w: 5.1, h: 2.7, isTextBox: true, margin: 0,
    fontFace: s.head, fontSize: 34, bold: true, color: "FFFFFF",
    lineSpacing: 44,
  });
  if (pieImg) {
    sl.addText(pieImg, {
      x: M, y: 6.55, w: 5.1, h: 0.4, isTextBox: true, margin: 0,
      fontFace: s.body, fontSize: 9.5, color: "C9CDD2", italic: true,
    });
  }
  sl.addNotes(notas);
}

// --- maquetación 8 · CIERRE ------------------------------------------------
function cierre(pres, { frase, remate, notas }) {
  const sl = slide(pres, { dark: true, numbered: false });
  sl.addText(frase, {
    x: M, y: 2.45, w: 11.0, h: 2.0, isTextBox: true, margin: 0,
    fontFace: s.head, fontSize: 46, bold: true, color: s.onDark,
    lineSpacing: 56,
  });
  sl.addText(remate, {
    x: M, y: 4.75, w: 11.0, h: 0.5, isTextBox: true, margin: 0,
    fontFace: s.body, fontSize: 20, color: s.onDarkMuted,
  });
  sl.addNotes(notas);
}

// --- variante · IMAGEN CENTRADA con titular (para figuras y datos) ---------
// Justificación: el capítulo trae doce figuras que no son retrato ni van a
// sangre. Es la maquetación 3 sin la cita, no un sistema nuevo.
function figura(pres, { titulo, quéMirar, rel, w: iw, h: ih, fuente, notas }) {
  const sl = slide(pres);
  sl.addText(titulo, {
    x: M, y: 0.75, w: CW, h: 0.6, isTextBox: true, margin: 0,
    fontFace: s.head, fontSize: 30, bold: true, color: s.ink,
  });
  if (quéMirar) {
    sl.addText(quéMirar, {
      x: M, y: 1.42, w: CW, h: 0.4, isTextBox: true, margin: 0,
      fontFace: s.body, fontSize: 15, bold: true, color: s.accent,
    });
  }
  const y0 = quéMirar ? 2.0 : 1.65;
  img(sl, { rel, x: (W - iw) / 2, y: y0, w: iw, h: ih });
  if (fuente) pie(sl, fuente, { x: 1.6, w: W - 3.2, y: y0 + ih + 0.14 });
  sl.addNotes(notas);
}

// --- variante · FIGURA ALTA (imagen en vertical, texto al lado) -----------
// Para figuras de formato retrato, que en 16:9 no caben con titular encima.
function figuraAlta(pres, { titulo, quéMirar, rel, w: iw, h: ih, fuente, notas }) {
  const sl = slide(pres);
  img(sl, { rel, x: M, y: 0.62, w: iw, h: ih });
  const tx = M + iw + 0.7;
  const tw = W - tx - M;
  sl.addText(titulo, {
    x: tx, y: 1.5, w: tw, h: 1.4, isTextBox: true, margin: 0,
    fontFace: s.head, fontSize: 30, bold: true, color: s.ink, lineSpacing: 38,
  });
  if (quéMirar) {
    sl.addText(quéMirar, {
      x: tx, y: 3.15, w: tw, h: 1.3, isTextBox: true, margin: 0,
      fontFace: s.body, fontSize: 16, bold: true, color: s.accent, lineSpacing: 24,
    });
  }
  if (fuente) pie(sl, fuente, { x: tx, w: tw, y: 4.75, align: "left" });
  sl.addNotes(notas);
}

// --- actividad (fondo negro: el aula distingue escuchar de trabajar) -------
function actividad(pres, { rotulo, titulo, pasos, notas }) {
  const sl = slide(pres, { dark: true });
  sl.addText(rotulo, {
    x: M, y: 1.05, w: CW, h: 0.35, isTextBox: true, margin: 0,
    fontFace: s.body, fontSize: 13, bold: true, charSpacing: 3,
    color: s.accentFill,
  });
  sl.addText(titulo, {
    x: M, y: 1.6, w: 10.4, h: 1.2, isTextBox: true, margin: 0,
    fontFace: s.head, fontSize: 42, bold: true, color: s.onDark,
    lineSpacing: 50,
  });
  pasos.forEach((p, i) => {
    const y = 3.35 + i * 0.82;
    sl.addShape("ellipse", {
      x: M, y, w: 0.4, h: 0.4,
      fill: { color: s.accentFill }, line: { type: "none" },
    });
    sl.addText(String(i + 1), {
      x: M, y, w: 0.4, h: 0.4, isTextBox: true, margin: 0,
      fontFace: s.body, fontSize: 13, bold: true, color: s.numeralOnCircle,
      align: "center", valign: "middle",
    });
    sl.addText(p, {
      x: M + 0.6, y: y - 0.03, w: 10.0, h: 0.5, isTextBox: true, margin: 0,
      fontFace: s.body, fontSize: 19, color: s.onDark,
    });
  });
  sl.addNotes(notas);
}

// ===========================================================================
//  EL DECK
// ===========================================================================

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE";
pres.author = "Juanjo Medina · Lorea Arenas";
pres.title = "¿Qué es la criminología?";
pres.subject = "Capítulo 1 · Criminología: una introducción";

// ---------------------------------------------------------------- BLOQUE 1

portada(pres, {
  cintillo: "CAPÍTULO 1",
  titulo: "¿Qué es la\ncriminología?",
  autoria: "Juanjo Medina · Lorea Arenas",
  notas:
    "PLAN DE LA SESIÓN. 2 h en total: ~10 min de presentación de la asignatura (material aparte), " +
    "Bloque 1 = 30 min de exposición + actividad, descanso, Bloque 2 = 30 min + actividad.\n\n" +
    "SI VOY CON RETRASO, lo sacrificable está marcado en las notas: (a) la mitad de INSTITUCIONALIZACIÓN " +
    "—diapos 20-22— y (b) LOS CINCO TEMAS —diapo 33—, que se puede despachar leyendo la pantalla. " +
    "La diapositiva de datos del SIIU no se sacrifica.",
});

afirmacion(pres, {
  texto: "Estas diapositivas\nno son los apuntes.",
  sub: "El manual está en abierto. Lo escrito vive en el libro.",
  notas:
    "INSTRUCCIÓN DE USO DEL DECK. Decirlo explícitamente el primer día: las diapositivas son " +
    "deliberadamente ligeras y están pensadas para que me escuchéis, no para que las copiéis. " +
    "Todo lo que aquí se resume está desarrollado en el capítulo, que es de acceso abierto. " +
    "Si tomáis apuntes de la pantalla, estáis copiando el índice y perdiéndoos el argumento.",
});

// ·· Desmontar la imagen previa — 6 min ····································

afirmacion(pres, {
  texto: "Hollywood tiene buena\nparte de la culpa.",
  sub: "Ni perfiladoras, ni criminalistas.",
  notas:
    "6 MIN — DESMONTAR LA IMAGEN PREVIA.\n\n" +
    "Arrancar por la anécdota: cuando dices en una reunión social a qué te dedicas, ya sabes cómo " +
    "va a acabar la conversación. Deriva hacia perfiles de asesinos en serie y lo emocionante que " +
    "tiene que ser capturar a un delincuente.\n\n" +
    "Parte de la culpa es de la traducción del inglés, parte del desconocimiento de quien escribe " +
    "los guiones. Preguntar al aula: ¿qué creíais que hacía un criminólogo cuando os matriculasteis? " +
    "Merece la pena escuchar dos o tres respuestas; suelen dar el pie exacto para la diapositiva siguiente.",
});

rejilla(pres, {
  titulo: "Quién hace qué",
  items: [
    { etiqueta: "Psicóloga forense", sub: "Evalúa comportamiento individual\npara tribunales e intervención." },
    { etiqueta: "Criminalista", sub: "Recoge y analiza evidencia física\ny química para el proceso." },
    { etiqueta: "Criminóloga", sub: "Estudia el delito y las respuestas\nsociales que suscita." },
  ],
  notas:
    "Las tres se confunden constantemente. La criminalista tiene carrera técnica —medicina, biología, " +
    "informática, química— más formación en policía científica. La perfilación es psicología forense. " +
    "Ninguna de las dos es criminología.\n\n" +
    "Insistir: no es una cuestión de prestigio ni de fronteras corporativas, es que hacen preguntas " +
    "distintas. La criminalista pregunta quién lo hizo; la criminóloga, por qué esto es delito, " +
    "por qué pasa, y qué hacemos con ello.",
});

// ·· Definiciones — 13 min ·················································

afirmacion(pres, {
  texto: "¿Qué es, entonces,\nla criminología?",
  sub: "Tres respuestas ajenas, y luego la nuestra.",
  notas:
    "13 MIN — DEFINICIONES. ES LA IDEA-ANDAMIO DEL CAPÍTULO: NO RECORTAR.\n\n" +
    "Advertir de entrada que la pregunta parece sencilla y no lo es. No hay consenso universal sobre " +
    "las fronteras de la criminología —dónde empieza y dónde termina— ni sobre cuál es su legítimo " +
    "objeto de estudio. Y las respuestas han variado históricamente y entre países.\n\n" +
    "El orden: Sutherland (el clásico), Garland (el giro), la del libro (la que usaremos todo el curso).",
});

cita(pres, {
  texto: "el conjunto de conocimientos sobre el delito como fenómeno social.",
  atribucion: "Edwin Sutherland, 1947",
  rel: "images/Edwin_Sutherland.jpg",
  pieImg: "Edwin H. Sutherland (1883-1950)",
  notas:
    "Leer la definición larga en voz alta, del libro: incluye los procesos de elaboración de leyes, " +
    "de infracción de leyes y de reacción ante la infracción de leyes.\n\n" +
    "Dato que engancha: Sutherland era sociólogo, no criminólogo. Vuelve en el bloque de " +
    "interdisciplinariedad.\n\n" +
    "Larrauri (2020) y Redondo (2023) son formulaciones resumidas de esto mismo: la ciencia que " +
    "estudia los comportamientos delictivos y las reacciones sociales frente a ellos. Mencionarlas " +
    "de pasada, no darles diapositiva.",
});

rejilla(pres, {
  titulo: "Los tres procesos de Sutherland",
  items: [
    { etiqueta: "Hacer la ley", sub: "Ciertos actos indeseables\nse definen políticamente." },
    { etiqueta: "Infringirla", sub: "Pese a la definición,\nalgunas personas persisten." },
    { etiqueta: "Reaccionar", sub: "La sociedad política responde:\ncastigo, tratamiento, prevención." },
  ],
  notas:
    "Esta es la arquitectura que sobrevive en casi todas las definiciones posteriores, incluida la " +
    "nuestra. Sutherland dice que son tres aspectos de una secuencia de interacciones algo unificada, " +
    "y que esa secuencia es el objeto de estudio.\n\n" +
    "Señalar lo importante: la primera casilla ya es política. El delito no está ahí fuera esperando " +
    "a ser descubierto; alguien decide qué entra. Volveremos a esto en el cierre del capítulo.",
});

dosColumnas(pres, {
  titulo: "Qué añade Garland",
  cols: [
    {
      rotulo: "Sutherland: un objeto",
      lineas: [
        "El delito como fenómeno social.",
        "La criminología estudia algo.",
        "Definición por su contenido.",
      ],
    },
    {
      rotulo: "Garland: un género",
      lineas: [
        "Una forma de hablar y pensar",
        "sobre el delito, nacida con la",
        "modernidad, con sus revistas,",
        "cátedras e institutos.",
      ],
    },
  ],
  notas:
    "El desplazamiento es fino y merece medio minuto: Garland no define la criminología por lo que " +
    "estudia, sino como un género específico de discurso e investigación. Es una definición " +
    "sociológica, no programática.\n\n" +
    "Dos deslindes que hace Garland: la pretensión científica y empírica la separa de los discursos " +
    "morales y jurídico-legales; la atención al delito la separa de la sociología de la desviación, " +
    "cuyo objeto es más amplio y no está definido por el Código Penal.\n\n" +
    "Y la frase que reaparecerá: desde mediados del XX la criminología está marcada por los adornos " +
    "de una identidad distintiva. Esos adornos son el bloque de institucionalización.",
});

afirmacion(pres, {
  texto: "Nada de esto está\nescrito en piedra.",
  sub: "Es una cuestión contestada, no cerrada.",
  notas:
    "Aviso metodológico, breve. En ciencias sociales tendréis que juzgar por vosotras mismas lo " +
    "convincentes que son los argumentos. Que haya varias respuestas no significa que todas valgan " +
    "lo mismo ni que dé igual cuál elijáis: significa que hay que saber defender la elección.\n\n" +
    "Pero tampoco os podemos dejar en 'hay muchas formas, vosotras veréis'. De ahí la definición " +
    "propia que viene ahora.",
});

rejilla(pres, {
  titulo: "La definición del libro, por piezas",
  sub: "Cada pieza es una sección de este capítulo. El curso entero cuelga de aquí.",
  items: [
    { etiqueta: "Proyecto", sub: "Intelectual y académico,\nno «ciencia»." },
    { etiqueta: "Institucionalizado", sub: "De forma gradual, desigual\ny creciente." },
    { etiqueta: "Determinado", sub: "Surge cuando surge\npor razones históricas." },
    { etiqueta: "Temas", sub: "Delito, quien lo comete,\nquien lo sufre, respuestas." },
    { etiqueta: "Sesgado", sub: "Canon de hombres blancos\ny occidentales." },
    { etiqueta: "Político", sub: "Con consecuencias sobre\nla vida de las personas." },
  ],
  notas:
    "ESTA ES LA DIAPOSITIVA-ANDAMIO. Si el aula solo se lleva una cosa de la clase, que sea esta.\n\n" +
    "Leer la definición completa del libro y luego decir: las seis piezas son las seis secciones que " +
    "siguen. Vamos a ir destilando y justificando cada una.\n\n" +
    "Y el remate de la definición, que no cabe en pantalla: de ahí que sea hoy un campo " +
    "irreductiblemente plural. Ese es el cierre del bloque 2.\n\n" +
    "Merece la pena volver a esta diapositiva al final de la clase, treinta segundos, para cerrar el círculo.",
});

actividad(pres, {
  rotulo: "ACTIVIDAD · 15-20 MIN",
  titulo: "Las definiciones",
  pasos: [
    "Grupos pequeños. A cada grupo, una definición: Sutherland, Garland o la nuestra.",
    "¿Qué incluye esa definición? ¿Qué deja fuera?",
    "Puesta en común: buscamos los casos frontera, no el consenso.",
  ],
  notas:
    "VA AQUÍ A PROPÓSITO: justo después del bloque más denso, que es donde el aula necesita hacer " +
    "algo con las manos.\n\n" +
    "Lo que tiene que salir: con Sutherland, ¿entra el daño social no tipificado? Con Garland, " +
    "¿entra alguien que estudia el delito sin publicar en revistas de criminología? Con la nuestra, " +
    "¿qué hacemos con los 'ilícitos afines'?\n\n" +
    "No cerrar con una definición ganadora. El objetivo es que vean que las fronteras se dibujan, " +
    "no se encuentran. Si sale la pregunta 'entonces, ¿cuál nos toca estudiar?', responder: la del " +
    "libro, porque es la que estructura el temario, no porque sea la verdadera.",
});

// ·· Proyecto intelectual, no ciencia — 9 min ······························

afirmacion(pres, {
  texto: "No decimos «ciencia».\nDecimos proyecto intelectual.",
  sub: "No es un tecnicismo: es una posición.",
  size: 42,
  notas:
    "9 MIN — LAS DOS ALMAS.\n\n" +
    "Casi todos los manuales dicen 'ciencia'. Nosotras no, y conviene explicar por qué, porque el " +
    "alumnado lo va a ver en otras asignaturas y va a pensar que es un descuido.\n\n" +
    "La razón: es una terminología más generosa con las distintas formas de hacer criminología y más " +
    "abierta a aceptar sus distintas almas.",
});

dosColumnas(pres, {
  titulo: "Dos almas",
  cols: [
    {
      rotulo: "Idiográfica",
      lineas: [
        "Lo particular de cada fenómeno.",
        "Comprensión empática.",
        "Desconfía de la generalización.",
      ],
    },
    {
      rotulo: "Nomotética",
      lineas: [
        "Lo regular y lo repetido.",
        "Medida y experimento.",
        "Busca leyes universales.",
      ],
    },
  ],
  notas:
    "Epistemología = cómo conocemos el mundo. Desde el XIX conviven en ciencias sociales dos culturas: " +
    "una que se acerca a las humanidades y otra a las ciencias naturales. Y conviven mal.\n\n" +
    "La nomotética destaca el paralelismo entre los procesos humanos y los materiales. La idiográfica " +
    "destaca que todo fenómeno social es particular y que las generalizaciones sirven de poco.\n\n" +
    "Ejemplo que funciona en el aula: estudiar por qué sube el robo con violencia en una ciudad " +
    "(nomotético) frente a entender qué significa robar para un chaval de dieciséis años (idiográfico). " +
    "Ninguna de las dos preguntas es ilegítima.",
});

cita(pres, {
  texto: "alguien atado a dos caballos galopando en dirección contraria.",
  atribucion: "Immanuel Wallerstein, 2004 · sobre las ciencias sociales",
  notas:
    "La imagen es de Wallerstein y describe la situación de las ciencias sociales en general, no solo " +
    "de la criminología.\n\n" +
    "Insistir en que la tensión no está resuelta ni va a resolverse, y que eso no es un defecto de " +
    "juventud de la disciplina. Es su condición.",
});

figura(pres, {
  titulo: "Quién es quién, y las dos almas",
  rel: "images/criminologas.png",
  w: 8.1, h: 5.4,
  fuente: "Infografía elaborada por el autor con ChatGPT (OpenAI).",
  notas:
    "Recoge de golpe lo de las tres diapositivas anteriores: arriba, el deslinde con psicología " +
    "forense y criminalística; abajo, las dos almas y los dos jinetes de Wallerstein.\n\n" +
    "Usarla como resumen visual, no leerla panel a panel. Treinta segundos: señalar los dos jinetes " +
    "y seguir.",
});

dosColumnas(pres, {
  titulo: "El mapa de David Smith",
  cols: [
    {
      rotulo: "Campo de las ciencias",
      lineas: [
        "Epidemiología, genética, buena",
        "parte de la psiquiatría, psicología",
        "social y experimental, casi toda",
        "la economía, sociología de encuesta.",
      ],
    },
    {
      rotulo: "Campo de las humanidades",
      lineas: [
        "Buena parte de la sociología,",
        "historia, teoría política, estudios",
        "sobre medios, teoría psicoanalítica.",
        "La antropología, a medio camino.",
      ],
    },
  ],
  notas:
    "Smith avisa de que es una simplificación muy cruda que exagera el contraste, y que hay autores a " +
    "caballo. Pero sirve para mapear la criminología europea, porque la división se corresponde con " +
    "métodos distintos y con concepciones distintas de qué es conocimiento criminológico.\n\n" +
    "Su formulación: quienes van de científicos usan números, estadísticas, encuestas y experimentos; " +
    "quienes se acercan a las humanidades describen eventos particulares en toda su complejidad, " +
    "insistiendo en matices.\n\n" +
    "Afinidades filosóficas: ciencias con la filosofía analítica, humanidades con la continental.",
});

afirmacion(pres, {
  texto: "Llamarla «ciencia»\nes tomar partido.",
  sub: "Empobrecedor como objetivo. Y falso como descripción.",
  notas:
    "Cerrar el bloque con el argumento en sus dos niveles, que es como lo plantea el libro.\n\n" +
    "NORMATIVO (como objetivo a seguir): es empobrecedor, porque ambos enfoques tienen mucho que " +
    "ofrecer.\n\n" +
    "DESCRIPTIVO (definir el campo hoy): no refleja la pluralidad de enfoques que de hecho coexisten.\n\n" +
    "Y decir en voz alta la sospecha del libro: cuando alguien insiste mucho en 'ciencia' a menudo " +
    "está diciendo que solo el alma cientificista es la correcta. Y esa alma, a veces, representa los " +
    "intereses del statu quo.",
});

// ·· Institucionalización — 7 min, sacrificable a la mitad ·················

rejilla(pres, {
  titulo: "Qué es una «disciplina»",
  sub: "Wallerstein: tres cosas a la vez.",
  items: [
    { etiqueta: "Categoría", sub: "Un campo con fronteras\ny modos legítimos de investigar." },
    { etiqueta: "Institución", sub: "Departamentos, revistas,\nsociedades, congresos." },
    { etiqueta: "Cultura", sub: "Clásicos compartidos, debates\npropios, estilos que se premian." },
  ],
  notas:
    "SACRIFICABLE: si voy con retraso, esta diapositiva y la siguiente se funden en una frase y paso " +
    "directo a los datos del SIIU.\n\n" +
    "Lo esencial: las disciplinas son construcciones sociales cuyos orígenes hay que situar en las " +
    "dinámicas del sistema histórico que les da forma. No son productos naturales.\n\n" +
    "Las cuatro preguntas de Wallerstein, que valen para cualquier disciplina y que vamos a aplicar a " +
    "la nuestra: ¿por qué surgen cuando surgen? ¿quién se beneficia? ¿por qué adoptan esa forma? " +
    "¿qué consecuencias sociales tienen?",
});

figura(pres, {
  titulo: "Los adornos de una identidad distintiva",
  rel: "images/revistas-criminologia.png",
  w: 8.6, h: 3.95,
  fuente:
    "Criminology (ASC), The British Journal of Criminology (OUP) y Revista Española de Investigación Criminológica (SEIC). " +
    "Reproducidas al amparo del art. 32.1 LPI.",
  notas:
    "SACRIFICABLE si voy con retraso.\n\n" +
    "Fechas: Criminology, 1963, revista de la American Society of Criminology. British Journal of " +
    "Criminology, 1960. La REIC, desde 2003 —volveremos a ella en el bloque de España.\n\n" +
    "La ASC se remonta a 1941, cuando gente ligada al mundo policial empezó a reunirse; la palabra " +
    "'criminología' no aparece en el nombre hasta 1946.\n\n" +
    "La idea que hay que dejar caer: el pensamiento criminológico precede a todo esto. Bentham y " +
    "Beccaria, siglo XVIII. Los adornos institucionales llegan mucho después.",
});

afirmacion(pres, {
  texto: "Beccaria era jurista y economista.\nSutherland, sociólogo.",
  sub: "Nadie hacía criminología desde la criminología.",
  size: 38,
  notas:
    "LA INTERDISCIPLINARIEDAD ENTRA AQUÍ, EN DOS FRASES. No lleva bloque propio: en 60 minutos no " +
    "aguanta epígrafe.\n\n" +
    "El argumento en corto: si no había grados ni sociedades, ¿quién hacía criminología? Gente de " +
    "procedencia muy diversa. Y sigue siendo así: hay contribución notable desde psicología, " +
    "sociología, ciencia política, economía.\n\n" +
    "Si hay tiempo y el aula está despierta, el debate de fondo: ¿es la criminología una disciplina " +
    "autónoma o un 'punto de encuentro' (Downes)? Garland dice que no es disciplina, porque no tiene " +
    "objeto teórico propio ni métodos distintivos. El libro defiende que en España no nos queda más " +
    "remedio que reivindicar la autonomía, por razones legales y administrativas, aunque fuera de " +
    "nuestras fronteras la cuestión esté abierta. Si voy justo, esto va entero a la lectura.",
});

datoGrande(pres, {
  cifra: "2003",
  unidad: "titulación oficial en España",
  glosa:
    "Antes solo hubo títulos propios en Institutos de Criminología, casi todos nacidos dentro de " +
    "departamentos de Derecho Penal.",
  notas:
    "Primero licenciatura de segundo ciclo; con Bolonia, los grados de cuatro años que estáis cursando.\n\n" +
    "Contexto rápido: en los noventa proliferan los 'Expertos Universitarios', que atraen sobre todo a " +
    "policía y administración penitenciaria. De esos institutos sale la SEIC y el Libro Blanco de la " +
    "Criminología, criticado por su escasa atención a las destrezas profesionales y el exceso de " +
    "asignaturas jurídicas.\n\n" +
    "Comparación útil: la Escuela de Justicia Criminal de Rutgers es de 1974. Vamos con treinta años " +
    "de retraso.",
});

datoGrande(pres, {
  cifra: "43",
  unidad: "universidades ofrecen el grado",
  glosa:
    "Y la matrícula lleva estancada en unos 24.000 estudiantes desde 2021-22. Siguen abriéndose " +
    "títulos para repartirse los mismos alumnos.",
  notas:
    "Este es el número que quiero que se lleven, porque la infografía siguiente es densa y desde el " +
    "fondo del aula no se lee.\n\n" +
    "De 32 universidades a 43 en una década. La matrícula creció de 12.121 (2015-16) a un máximo de " +
    "24.289 (2021-22) y ahí se quedó.\n\n" +
    "Decirlo sin dramatismo pero decirlo: parte de esa demanda está mediatizada por la construcción " +
    "fantasiosa de la cultura popular sobre qué es una criminóloga. Es exactamente el mito con el que " +
    "hemos abierto la clase. Y tiene consecuencias para vosotras en el mercado laboral.",
});

figuraAlta(pres, {
  titulo: "Los grados de\ncriminología en España",
  quéMirar:
    "Mirad el primer panel: la matrícula se estanca en 24.000 mientras el número de universidades " +
    "sigue subiendo, de 32 a 43.",
  rel: "images/criminologia_cifras.png",
  w: 5.15, h: 6.23,
  fuente:
    "Cursos 2015-16 a 2024-25. Elaboración propia sobre datos del SIIU (Ministerio de Ciencia, " +
    "Innovación y Universidades), Estadística de Estudiantes Universitarios. 2024-25, provisional.",
  notas:
    "NO SACRIFICABLE: es la única visualización de datos del capítulo y la regla del proyecto es que " +
    "toda visualización entra en el deck con su fuente.\n\n" +
    "No leer los siete paneles. Señalar dos y seguir:\n" +
    "· Panel 1: la matrícula estancada frente a la oferta creciente (ya dicho en la diapositiva anterior).\n" +
    "· La distancia: entre el 42 % y el 54 % del alumnado estudia a distancia, frente al 22-35 % de " +
    "una década antes. UNED, UOC y UNIR concentran el 38 % del total.\n\n" +
    "Si alguien pregunta por sociología: perdió un 22 % de matrícula en el mismo periodo. Sirve para " +
    "situar la anomalía del crecimiento criminológico.\n\n" +
    "Cautela metodológica por si sale la pregunta: el SIIU agrega por titulación y no por modalidad, " +
    "así que las presenciales que además ofrecen el grado en línea no se pueden desglosar; de ahí que " +
    "la matrícula a distancia se dé como horquilla.",
});

// ---------------------------------------------------------------- BLOQUE 2

afirmacion(pres, {
  texto: "El conocimiento sobre el delito\nno surge de la nada.",
  sub: "Loader y Sparks, parafraseando a Stanley Cohen.",
  size: 42,
  notas:
    "8 MIN — PRODUCTO SOCIALMENTE DETERMINADO. ES DONDE MÁS SE PIERDE EL ALUMNADO: IR DESPACIO.\n\n" +
    "Arranque del bloque 2. Recordar en una frase dónde estábamos: hemos visto qué es y cómo se ha " +
    "institucionalizado. Ahora, por qué es como es.\n\n" +
    "La cita completa: el conocimiento no está simplemente ubicado en las cabezas de quienes lo " +
    "producen. Qué se llega a conocer, desde qué perspectivas, con qué métodos, sobre qué delitos y " +
    "con qué efectos está condicionado por un amplio rango de instituciones.",
});

rejilla(pres, {
  titulo: "Quién decide qué se sabe",
  items: [
    { etiqueta: "Universidades", sub: "Emplean —o no— al personal\ninvestigador." },
    { etiqueta: "Financiadores", sub: "Financian unos proyectos\ny no otros." },
    { etiqueta: "Gestores de datos", sub: "Permiten o niegan el acceso\na datos y contextos." },
    { etiqueta: "Editoriales", sub: "Ofrecen —o cierran—\nespacios donde publicar." },
    { etiqueta: "Medios", sub: "Usan, abusan, ignoran\nlos resultados." },
    { etiqueta: "Ministerios", sub: "Definen qué problema\nmerece ser estudiado." },
  ],
  notas:
    "Cada una de estas instituciones está a su vez situada en contextos sociales, políticos y " +
    "económicos que condicionan cómo puede pensar y operar.\n\n" +
    "La formulación que interesa: estudiar la criminología como 'campo' implica estudiar cómo las " +
    "relaciones y luchas de poder entre estos actores estructuran el conocimiento que se produce " +
    "—y también el que NO se produce.\n\n" +
    "Preguntar al aula por el negativo: ¿qué no se investiga en España, y por qué? Anticipa el " +
    "bloque de España, donde salen los ángulos muertos: criminalidad organizada, drogas, delincuencia " +
    "corporativa, daño ambiental, racismo institucional.",
});

dosColumnas(pres, {
  titulo: "Los dos proyectos de Garland",
  cols: [
    {
      rotulo: "Proyecto lombrosiano",
      lineas: [
        "Objetivo científico.",
        "Explicar por qué delinquen",
        "quienes delinquen.",
        "Investigación etiológica.",
      ],
    },
    {
      rotulo: "Proyecto gubernamental",
      lineas: [
        "Objetivo institucional.",
        "Gobernar administrativamente",
        "la delincuencia.",
        "Investigación operativa.",
      ],
    },
  ],
  notas:
    "EL NÚCLEO DEL BLOQUE. Si algo hay que explicar dos veces, es esto.\n\n" +
    "Garland: la criminología surge de la confluencia de estos dos proyectos. Y su unidad, por frágil " +
    "que sea, emerge de la creencia de que se apoyan mutuamente —que la investigación etiológica " +
    "puede ser útil para propósitos administrativos y que la operativa puede servir a las pesquisas " +
    "teóricas.\n\n" +
    "OJO CON LA LECTURA FÁCIL: no es solo que la criminología tenga dos objetos (el delito y su " +
    "control). Garland va más allá: el campo está íntimamente ligado a los esfuerzos ESTATALES por " +
    "controlar el delito.\n\n" +
    "Prueba: los grados en EE. UU. nacen de recomendaciones de comités presidenciales sobre formación " +
    "de profesionales de la justicia penal, y el dominio científico norteamericano viene de la " +
    "financiación pública para mejorar la respuesta estatal al delito.",
});

afirmacion(pres, {
  texto: "Una disciplina financiada\npara resolver los problemas\ndel Estado.",
  sub: "Por eso no puede ser apolítica.",
  size: 38,
  notas:
    "Es la consecuencia de la diapositiva anterior, y conviene decirla despacio porque incomoda.\n\n" +
    "No es una denuncia: es una descripción. Y no invalida el conocimiento producido; obliga a leerlo " +
    "sabiendo de dónde viene.\n\n" +
    "Loader y Sparks: la mayor institucionalización en Europa y el mundo anglosajón se explica porque " +
    "desde los ochenta el delito, la policía, la justicia, el castigo, el miedo, las víctimas, el " +
    "orden y la seguridad ocupan un lugar más prominente en la conciencia de la ciudadanía y en las " +
    "acciones de los gobiernos.",
});

dosColumnas(pres, {
  titulo: "De un modelo a otro",
  cols: [
    {
      rotulo: "Estado del bienestar",
      lineas: [
        "Primeros dos tercios del XX.",
        "El delito, gestionado de forma",
        "tecnocrática y lejos del",
        "foco público.",
      ],
    },
    {
      rotulo: "Cultura del control",
      lineas: [
        "Desde los años ochenta.",
        "Politización del delito, nuevos",
        "actores privados, tecnologías",
        "de control, víctimas organizadas.",
      ],
    },
  ],
  notas:
    "Garland (2001, La cultura del control). El tránsito genera condiciones más propicias para el " +
    "desarrollo de la criminología, pero también le plantea retos.\n\n" +
    "La lista larga de la columna derecha, por si hay tiempo: politización de la cuestión criminal; " +
    "ansiedades ciudadanas hacia el delito y hacia el inmigrante, incitadas por los medios; expansión " +
    "del castigo; actores privados en la gestión de la inseguridad; IA y videovigilancia; movimientos " +
    "de víctimas y su instrumentalización política; globalización y flujo unidireccional de ideas " +
    "sobre control del delito.\n\n" +
    "No hace falta desarrollarlas todas. Elegir la politización, que es la que sigue.",
});

cita(pres, {
  texto: "un contexto político hiperactivo, volátil, inestable, y en el que resulta más difícil que la razón y la evidencia conduzcan lo que se dice y hace.",
  atribucion: "Ian Loader y Richard Sparks, 2012",
  size: 24,
  notas:
    "La politización del delito, en concreto. Los partidos compiten abiertamente en política criminal, " +
    "priorizando respuestas a corto plazo que maximicen el rédito electoral aunque no sean las más " +
    "justas, eficaces ni humanas. Los medios estimulan respuestas emocionales y simplistas a " +
    "problemas complejos.\n\n" +
    "El remate: una disciplina que aspira precisamente a que la razón y la evidencia pesen en estas " +
    "discusiones se encuentra una pendiente muy empinada. Ese es el oficio al que os estáis " +
    "asomando.\n\n" +
    "Ejemplo español si hace falta: cualquier reforma penal aprobada en caliente tras un caso mediático.",
});

// ·· Los cinco temas — 3 min, sacrificable ·································

rejilla(pres, {
  titulo: "Los cinco temas",
  sub: "Es el índice de la segunda parte del manual.",
  items: [
    { etiqueta: "El delito", sub: "Como evento y como proceso.\nY los daños afines." },
    { etiqueta: "Quien lo comete", sub: "Personas físicas y jurídicas,\nsus contextos." },
    { etiqueta: "Quien lo sufre", sub: "Consecuencias, respuestas,\nmecanismos de reparación." },
    { etiqueta: "Respuesta estatal", sub: "Criminalización e instituciones\nde la justicia penal." },
    { etiqueta: "Respuesta social", sub: "Control informal y cultura\nen torno al delito." },
  ],
  notas:
    "SACRIFICABLE. Enumeración pura: se puede despachar leyendo la pantalla en un minuto si voy con " +
    "retraso. No perder tiempo aquí.\n\n" +
    "Un matiz que sí merece los diez segundos: decimos TEMAS y no OBJETOS a propósito. Hablar de " +
    "objetos refleja una visión trasnochada, del positivismo decimonónico, que ignora que las personas " +
    "son sujetos. Matza: el error fue concebir al hombre como objeto en lugar de como sujeto.\n\n" +
    "Y una ampliación del libro respecto de manuales clásicos: junto al delito en sentido estricto " +
    "hay corrientes que estudian la desviación, las infracciones administrativas y el daño social. " +
    "Esa frontera es justo la que se discute en la actividad de las definiciones.",
});

// ·· Los sesgos — 7 min ····················································

afirmacion(pres, {
  texto: "Nace en sociedades clasistas,\nmachistas y racistas.",
  sub: "Y muchas de sus construcciones sirvieron para reproducirlas.",
  size: 42,
  notas:
    "7 MIN — LOS SESGOS. Avance de la tercera parte del manual: cada sesgo tiene capítulo propio.\n\n" +
    "El argumento no es que la criminología sea culpable, sino que es un producto social como " +
    "cualquier otro y que la mirada criminológica nace condicionada. Es exactamente la lección del " +
    "bloque anterior aplicada a nosotras mismas.\n\n" +
    "Las cinco diapositivas de imágenes que vienen pasan rápido, veinte segundos cada una. No " +
    "detenerse: son el mapa de lo que viene en el curso, no el contenido.",
});

rejilla(pres, {
  titulo: "Cinco puntos ciegos",
  items: [
    { etiqueta: "Clase" },
    { etiqueta: "Género" },
    { etiqueta: "Raza" },
    { etiqueta: "Sur global" },
    { etiqueta: "Planeta" },
  ],
  notas:
    "El índice del bloque. Cada uno tiene un capítulo en la tercera parte del volumen.\n\n" +
    "Anunciar que van a pasar rápido y que lo que quiero es que reconozcan los nombres cuando los " +
    "vuelvan a ver.",
});

figura(pres, {
  titulo: "Clase: la delincuencia de los poderosos",
  rel: "images/cuello-blanco-corporativo.png",
  w: 8.4, h: 4.1,
  fuente:
    "Sutherland, White Collar Crime (Yale UP) · Weisburd et al. (Yale UP) · " +
    "Tombs y Whyte (Routledge). Art. 32.1 LPI.",
  notas:
    "La criminología se ha ocupado casi siempre de la 'delincuencia común': las formas delictivas más " +
    "frecuentes en sectores desfavorecidos.\n\n" +
    "Sutherland abre la grieta en 1949 —el mismo Sutherland de la definición del principio— y aun así, " +
    "si miramos lo que se publica hoy en las principales revistas, el foco sigue estando en la " +
    "delincuencia común.\n\n" +
    "Los tres momentos: la obra fundacional de Sutherland; el estudio empírico de Weisburd y colegas " +
    "sobre quién acaba efectivamente ante los tribunales federales; y la reformulación de Tombs y " +
    "Whyte en clave de delito corporativo.",
});

figura(pres, {
  titulo: "Género: tres décadas de corrección",
  rel: "images/criminologia-feminista.png",
  w: 8.4, h: 3.7,
  fuente:
    "Feminist Criminology (Sage/ASC) · Bartolomé Gutiérrez (Síntesis) · " +
    "Barberet (Routledge). Art. 32.1 LPI.",
  notas:
    "Hasta la irrupción de las voces feministas en los setenta, la criminología no prestaba atención " +
    "suficiente a la mujer ni como delincuente, ni como víctima, ni como trabajadora del sistema penal.\n\n" +
    "Dos desarrollos posteriores que sorprenden al aula:\n" +
    "· Los varones también tienen género. Solo se entiende su comportamiento delictivo entendiendo " +
    "las identidades masculinas (Messerschmidt).\n" +
    "· Criminología queer (Buist), a partir del reconocimiento de otras identidades de género y " +
    "sexuales.\n\n" +
    "Barberet reaparece en el bloque de España: es suya la fórmula 'variada, enérgica y dispersa'.",
});

imagenSangre(pres, {
  rel: "images/nicole-baster-blacklivesmatter.jpg",
  titulo: "Raza: del racismo\ncientífico al racismo\ninstitucional.",
  pieImg: "Black Lives Matter, Nueva York, julio de 2016. Foto: Nicole Baster / Unsplash.",
  notas:
    "La criminología biológica del XIX era profundamente racista y contribuyó, a través de sus " +
    "prácticas, a legitimar el movimiento eugenésico y la ideología nazi (Rafter).\n\n" +
    "La cita de Rafter, que conviene leer entera porque es incómoda y por eso funciona: la mayoría de " +
    "los criminólogos del XIX aceptaban el racismo científico, según el cual los blancos son la raza " +
    "más evolucionada; los peores delincuentes serían como salvajes, más cercanos a los primitivos de " +
    "piel negra que a los blancos normales con su sentido moral desarrollado.\n\n" +
    "Y el puente al presente: no es solo historia. Covington ha mostrado cómo conceptos del XX, como " +
    "la subcultura de la violencia de Wolfgang, seguían legitimando estereotipos raciales. Hoy el " +
    "trabajo va sobre los mecanismos por los que el sistema penal se estructura como " +
    "institucionalmente racista: mecanismos, no intenciones individuales.",
});

figura(pres, {
  titulo: "Sur global: el canon es provinciano",
  rel: "images/criminologia-sur-global.png",
  w: 8.4, h: 4.0,
  fuente:
    "Blagg y Anthony (Palgrave) · Pessoa Cavalcanti et al. (Bristol UP) · " +
    "Dal Santo y Sepúlveda Penna (Routledge). Art. 32.1 LPI.",
  notas:
    "Las teorías desarrolladas en EE. UU. y el norte de Europa toman como modelo la sociedad de esos " +
    "países y se han olvidado de las experiencias y estructuras del sur global.\n\n" +
    "Cuatro etiquetas que van a encontrar en la bibliografía: criminología del sur (Carrington), " +
    "perspectivas poscoloniales (Cunneen), criminología global (Bowling) y criminología comparada " +
    "(Nelken).\n\n" +
    "Pregunta que suele funcionar: ¿es España norte o sur en este mapa? No hay respuesta limpia, y " +
    "esa incomodidad conecta directamente con el bloque siguiente.",
});

figura(pres, {
  titulo: "Planeta: criminología verde",
  rel: "images/criminologia-verde.png",
  w: 8.4, h: 3.4,
  fuente:
    "White y Heckenberg (Routledge) · Lynch et al. (Univ. of California Press) · " +
    "Mol, Rodríguez Goyes, South y Brisman (Temis). Art. 32.1 LPI.",
  notas:
    "El más reciente de los cinco. Vivimos en una sociedad antropocéntrica y en un planeta finito cuyo " +
    "clima y sistemas ecológicos hemos alterado radicalmente en dos siglos.\n\n" +
    "El tercer título está en español y es la principal introducción disponible: útil para quien " +
    "quiera TFG por aquí. Hay además una web, criminologiaverde.com.\n\n" +
    "Cerrar el bloque: estos cinco sesgos se estudian uno por capítulo en la tercera parte. Enlazar " +
    "con la actividad.",
});

actividad(pres, {
  rotulo: "ACTIVIDAD · 15-20 MIN",
  titulo: "Los sesgos aplicados",
  pasos: [
    "A cada grupo, un tema de investigación criminológica concreto.",
    "Localizad en él los cinco puntos ciegos: clase, género, raza, sur global, planeta.",
    "¿Cuál de los cinco es el más difícil de ver? ¿Por qué?",
  ],
  notas:
    "Temas que funcionan bien porque los sesgos aparecen a distintas profundidades: el botellón; la " +
    "reincidencia tras la excarcelación; los robos en viviendas; la violencia de género en parejas " +
    "adolescentes; el tráfico de drogas en un barrio concreto.\n\n" +
    "La tercera pregunta es la buena. Casi siempre responden 'planeta', y ahí se ve que un punto ciego " +
    "no es un error que se corrige sabiendo que existe: es lo que la propia forma de plantear la " +
    "pregunta deja fuera.\n\n" +
    "Si el grupo va rápido, añadir: ¿qué investigación NO se está haciendo sobre vuestro tema, y a " +
    "quién le conviene que no se haga? Devuelve a los dos proyectos de Garland.",
});

// ·· La criminología en España — 7 min (bloque nuevo) ······················

afirmacion(pres, {
  texto: "Somos un campo ciego\na su propio pasado.",
  sub: "Hay un relato canónico. Y casi nadie ha leído a sus protagonistas.",
  notas:
    "7 MIN — ESPAÑA. BLOQUE NUEVO: la sección ya no está en construcción.\n\n" +
    "Empezar por el relato que muchos ya han oído: unos autores del último tercio del XIX y primer " +
    "tercio del XX, la Escuela de Criminología de 1903 como momento fundacional, una 'edad de oro' en " +
    "las tres primeras décadas del siglo, y la Guerra Civil y la dictadura como interrupción brusca " +
    "hasta la transición.\n\n" +
    "Y el dato que lo desmonta: Salillas da nombre al premio más prestigioso de la SEIC, y es más " +
    "probable que un criminólogo español haya leído fragmentos de Lombroso o Beccaria que de Salillas.",
});

figura(pres, {
  titulo: "El relato canónico",
  rel: "images/retratos-criminologia-espanola.png",
  w: 11.0, h: 3.42,
  fuente:
    "Concepción Arenal, Rafael Salillas, Pedro Dorado Montero, Constancio Bernaldo de Quirós y " +
    "Luis Jiménez de Asúa. Dominio público (Wikimedia Commons y Hemeroteca Digital de la BNE).",
  notas:
    "La nómina que casi cualquier criminólogo español es capaz de recitar. Pedir que levanten la mano " +
    "quienes hayan leído a alguno: el resultado es el argumento.\n\n" +
    "El relato no es falso, es incompleto. Y por dos razones que van en la diapositiva siguiente.",
});

dosColumnas(pres, {
  titulo: "Por qué el relato se queda corto",
  cols: [
    {
      rotulo: "Es historia de las ideas",
      lineas: [
        "Escrita casi toda desde el derecho",
        "penal. Identifica autores y",
        "reconstruye sus aportaciones,",
        "pero no las instituciones.",
      ],
    },
    {
      rotulo: "Y con una definición estrecha",
      lineas: [
        "Deja fuera a alienistas,",
        "psiquiatras e higienistas.",
        "Y permite sostener que bajo el",
        "franquismo no hubo discurso.",
      ],
    },
  ],
  notas:
    "Lo social y lo político aparecen solo como marcadores de cesuras —la guerra, el régimen— y no " +
    "como el contexto que explica por qué ciertos discursos emergen cuando emergen y adoptan la forma " +
    "que adoptan.\n\n" +
    "Garland y Sparks: hay que estudiar la criminología como un tipo específico de discurso inscrito " +
    "en un conjunto particular de instituciones en una coyuntura histórica determinada. Es " +
    "exactamente lo que hemos hecho en el bloque anterior; ahora lo aplicamos a casa.\n\n" +
    "Nombres que quedan fuera del canon: Pere Felip Monlau, Max Bembo.\n\n" +
    "El contrapunto: Ricardo Campos y los historiadores de la ciencia, que reconstruyen la psiquiatría " +
    "española y la construcción del enfermo mental como sujeto peligroso, incluyendo cómo se dio " +
    "racionalización 'científica' a la represión franquista. Espacio fértil, ligado a la memoria " +
    "democrática, pero que se desarrolla en foros distintos de aquellos donde estamos las criminólogas.",
});

cita(pres, {
  texto: "variada, enérgica y dispersa.",
  atribucion: "Rosemary Barberet, 2005 · sobre la criminología española",
  size: 34,
  notas:
    "Barberet lo escribió en 2005 y sigue siendo exacto veinte años después. Ese 'sigue siendo exacto' " +
    "es la parte interesante: veinte años de crecimiento espectacular sin corregir la dispersión.\n\n" +
    "El crecimiento ha sido institucional y también científico. La dispersión no es accidental: tiene " +
    "tres causas, que van ahora.",
});

rejilla(pres, {
  titulo: "Tres carencias estructurales",
  items: [
    { etiqueta: "Sin área propia", sub: "La carrera se hace y se evalúa\ndentro de áreas ajenas." },
    { etiqueta: "Sin administración", sub: "No hay equivalente al NIJ\nni al NSCR neerlandés." },
    { etiqueta: "Sin datos", sub: "No hay encuesta nacional\nde victimización." },
  ],
  notas:
    "IR DESPACIO: esto explica por qué su carrera, si la eligen, será como será.\n\n" +
    "1. La criminología no está reconocida como 'área de conocimiento'. Como los créditos docentes " +
    "determinan la capacidad de contratación de cada departamento, y los de derecho penal concentran " +
    "la mayor parte de los créditos en los grados, son ellos quienes controlan en la práctica las " +
    "escasas plazas de especialistas.\n\n" +
    "2. El compromiso del Estado con producir conocimiento sobre delito y justicia explica en buena " +
    "medida dónde se institucionaliza la criminología. Consecuencias: la carrera investigadora solo es " +
    "viable en la universidad, y la descripción básica que en otros países hace la administración " +
    "tiene que hacerla el mundo académico.\n\n" +
    "3. Sin encuesta nacional de victimización es prácticamente imposible discutir con rigor sobre " +
    "niveles y tendencias de la delincuencia. Excepciones que confirman la regla: VioGén, las " +
    "encuestas del Plan Nacional sobre Drogas, y el ecosistema catalán gracias a sus competencias " +
    "policiales y penitenciarias.",
});

figura(pres, {
  titulo: "La diáspora",
  quéMirar: "Catorce criminólogas y criminólogos españoles que investigan hoy fuera de España.",
  rel: "images/diaspora.png",
  w: 5.9, h: 4.73,
  fuente: "Retratos reproducidos con autorización expresa de las personas retratadas.",
  notas:
    "Escasez de financiación, cargas docentes elevadas, alta temporalidad. Y la consecuencia: parte de " +
    "las cohortes más jóvenes y prometedoras se va.\n\n" +
    "Manchester, Utrecht, Rutgers, Lovaina, Friburgo, Ámsterdam, Leeds, Bergen, Leiden, Colonia, Texas, " +
    "California. No es una lista de fracasos: es una lista de gente muy buena que aquí no encontró sitio.\n\n" +
    "Decirlo sin amargura y con honestidad: algunas de las personas de esta foto podrían ser vuestras " +
    "directoras de tesis, y no lo van a ser aquí. Y también: si alguien de esta clase acaba haciendo " +
    "investigación, hay una probabilidad real de que sea fuera.",
});

afirmacion(pres, {
  texto: "Y aun así, hay mucho\nque celebrar.",
  sub: "La SEIC: ~200 investigadoras, la REIC desde 2003, congreso anual.",
  notas:
    "No dejar el bloque de España en el pesimismo, que sería injusto y además falso.\n\n" +
    "La producción ha crecido, se ha diversificado y ha ganado presencia internacional, con líneas " +
    "consolidadas: estudios penitenciarios y penología, cibercriminalidad, criminología ambiental, " +
    "tratamiento y desistimiento, estudios policiales, violencia de género, justicia juvenil, " +
    "migración y justicia penal.\n\n" +
    "Ángulos muertos llamativos, por si alguien busca tema: criminalidad organizada, tráfico y " +
    "producción de drogas, delincuencia corporativa, daño ambiental, racismo institucional.\n\n" +
    "Y lo que más les afecta directamente: los congresos de la SEIC son el sitio donde quien empieza " +
    "presenta por primera vez su trabajo y recibe crítica de alguien que no es su director de TFG. " +
    "Para una comunidad tan dispersa, ese espacio no es un detalle menor. Se puede ir siendo estudiante.",
});

// ·· Política, pluralidad y cierre — 5 min ·································

cita(pres, {
  texto: "La relación entre la criminología y la política es básica, incluso interna.",
  atribucion: "Ian Loader, 2022",
  size: 30,
  notas:
    "5 MIN — POLÍTICA Y PLURALIDAD.\n\n" +
    "'Interna' es la palabra: no es que la política contamine la criminología desde fuera, es que la " +
    "criminología está constituida en parte por la política.\n\n" +
    "El matiz que evita el malentendido: no significa que toda teorización sobre delito y justicia sea " +
    "teoría política. Significa que toda investigación plantea cuestiones políticas que solo pueden " +
    "eludirse a costa de no entender por qué el delito y las respuestas al delito importan.\n\n" +
    "Los procesos de criminalización, el reparto de recursos y las respuestas que damos se deciden " +
    "políticamente. Una disciplina que los estudia no puede ser del todo 'neutral'.",
});

afirmacion(pres, {
  texto: "Cada teoría lleva dentro\nun programa político criminal.",
  sub: "Una idea de la naturaleza humana, de la buena sociedad y del papel del Estado.",
  size: 40,
  notas:
    "Medina (2025): quienes defienden distintas teorías pueden tener visiones muy diferentes, y a " +
    "veces mutuamente excluyentes, sobre la naturaleza humana, el concepto de buena sociedad, la " +
    "prioridad de la seguridad frente a otros valores, el papel del Estado y de la iniciativa privada " +
    "en prevención, y las posibilidades de reforma del sistema penal.\n\n" +
    "Se desarrolla en la cuarta parte del volumen. Aquí solo hay que dejar plantado que la teoría " +
    "criminológica no es un catálogo neutral de explicaciones.\n\n" +
    "Enlaza con el segundo hábito del cierre.",
});

rejilla(pres, {
  titulo: "Tres hábitos para el curso",
  items: [
    { etiqueta: "De dónde viene", sub: "Qué país, qué década, qué datos,\nquién lo financió." },
    { etiqueta: "Qué zanja la evidencia", sub: "Y qué parte del desacuerdo\nno la zanja." },
    { etiqueta: "Mapa ≠ campo", sub: "Lo mejor no siempre lleva\nla etiqueta." },
  ],
  notas:
    "ES EL CIERRE REAL DEL CAPÍTULO. Si el aula solo se lleva una diapositiva del bloque 2, que sea esta.\n\n" +
    "1. Una teoría que funciona razonablemente para explicar la delincuencia juvenil en Chicago en " +
    "1930 no es automáticamente una teoría sobre el ser humano.\n\n" +
    "2. Toda teoría lleva dentro una idea de la naturaleza humana y del papel del Estado; buscar la " +
    "que esté libre de ellas es perder el tiempo. Lo útil no es preguntarse si una teoría es " +
    "ideológica —todas lo son— sino saber, en cada discusión, si se disiente sobre lo que ocurre o " +
    "sobre lo que debería ocurrir. Muchos debates que se presentan como empíricos son lo segundo y no " +
    "se resuelven con más datos.\n\n" +
    "3. Buena parte del mejor trabajo criminológico español no se publica en revistas de criminología " +
    "ni lo firma gente que se presente como criminóloga. Si limitáis las lecturas a lo que lleva la " +
    "etiqueta, os perdéis media conversación.\n\n" +
    "Si queda medio minuto, volver a la diapositiva de la definición por piezas y cerrar el círculo.",
});

cierre(pres, {
  frase: "Un campo joven, disputado\ny con huecos evidentes.",
  remate: "Todavía tiene preguntas importantes sin respuesta. Esa es la buena noticia.",
  notas:
    "El giro final del capítulo, y conviene decirlo mirando al aula.\n\n" +
    "Hemos dedicado mucho espacio a las carencias: los sesgos del canon, la subordinación al derecho " +
    "penal, la escasez de datos y financiación, la fragmentación. Puede parecer un panorama poco " +
    "estimulante para quien empieza. Se lee justo al revés: un campo maduro, cerrado y bien trillado " +
    "ofrece poco margen a quien llega con ganas de aportar.\n\n" +
    "Y la lección de método del capítulo, que es la que quiero que se lleven: la pregunta '¿qué es la " +
    "criminología?' no se responde consultando un diccionario, sino haciendo con la criminología lo " +
    "mismo que la criminología hace con sus temas —preguntar cuándo surge, quién la produce, con qué " +
    "recursos, al servicio de qué, con qué puntos ciegos.\n\n" +
    "El delito no es una categoría natural. La criminología, tampoco.\n\n" +
    "Anunciar lo que viene: el capítulo 2, sobre cómo se conoce en criminología.",
});

// ===========================================================================

fs.mkdirSync(OUT, { recursive: true });
pres.writeFile({ fileName: path.join(OUT, "Cap01_Que-es-la-criminologia.pptx") })
  .then(() => {
    console.log(`OK · ${N} diapositivas`);
    if (missing.length) {
      console.log("IMÁGENES QUE FALTAN (salen como hueco gris):");
      missing.forEach((m) => console.log("  · " + m));
    } else {
      console.log("Todas las imágenes encontradas.");
    }
  });
