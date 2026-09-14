// ---------------------------------------------------------------------------
// Sistema visual "B claro" — decks del manual "Criminología: una introducción"
// Pensado para aula iluminada con proyector: fondo blanco, tinta casi negra,
// acento ocre sobre blanco y ámbar sobre negro.
//
// Uso desde el deck de un capítulo:
//   const P = require("./plantilla-b-claro");
//   const d = P.crear({ titulo: "El delito", imgDir: "..." });
//   P.portada(d, {...}); P.afirmacion(d, {...}); ...
//   P.guardar(d, "/ruta/Cap02.pptx");
// ---------------------------------------------------------------------------

const pptxgen = require("pptxgenjs");
const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const W = 13.333, H = 7.5, M = 0.95;
const CW = W - 2 * M;

// --- tokens ----------------------------------------------------------------
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

// --- ciclo de vida ---------------------------------------------------------

function crear({ titulo, subject, autoria = "Juanjo Medina · Lorea Arenas", imgDir, cacheDir }) {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_WIDE";
  pres.author = autoria;
  pres.title = titulo;
  if (subject) pres.subject = subject;
  return {
    pres, imgDir, n: 0, faltan: [], convertidas: [],
    cacheDir: cacheDir || path.join(imgDir, ".cache-imagenes"),
  };
}

function guardar(d, destino) {
  fs.mkdirSync(path.dirname(destino), { recursive: true });
  return d.pres.writeFile({ fileName: destino }).then(() => {
    console.log(`OK · ${d.n} diapositivas · ${path.basename(destino)}`);
    if (d.faltan.length) {
      console.log("IMÁGENES QUE FALTAN (salen como hueco gris):");
      [...new Set(d.faltan)].forEach((m) => console.log("  · " + m));
    } else {
      console.log("Todas las imágenes encontradas.");
    }
    if (d.convertidas.length) {
      console.log("Convertidas a PNG: " + [...new Set(d.convertidas)].join(", "));
    }
    return destino;
  });
}

// --- helpers ---------------------------------------------------------------

function hoja(d, { dark = false, numbered = true } = {}) {
  const sl = d.pres.addSlide();
  d.n += 1;
  sl.background = { color: dark ? s.dark : s.bg };
  if (numbered) {
    sl.addText(String(d.n).padStart(2, "0"), {
      x: W - M - 1.4, y: H - 1.25, w: 1.4, h: 0.75,
      isTextBox: true, margin: 0,
      fontFace: s.body, fontSize: 40, bold: true,
      color: dark ? "2A2E33" : "D5D9DD",
      align: "right", valign: "bottom",
    });
  }
  return sl;
}

// Dos problemas que se resuelven en la misma caché, sin tocar images/:
//  · PowerPoint no maneja bien .webp ni .gif.
//  · Los originales del libro llegan a pesar 9 MB, y a sesenta diapositivas
//    por deck el .pptx se vuelve inmanejable. 2200 px de lado largo son ~165
//    ppp proyectando a pantalla completa: de sobra, y pesa una fracción.
const LADO_MAX = 2200;
const PESO_MAX = 1.2 * 1024 * 1024;

function normalizar(d, abs) {
  const ext = path.extname(abs).toLowerCase();
  const raro = [".webp", ".gif"].includes(ext);
  const pesado = fs.statSync(abs).size > PESO_MAX;
  if (!raro && !pesado) return abs;

  // El formato de salida lo decide el CONTENIDO, no la extensión: un .png que
  // en realidad es una foto sin transparencia pesa menos como .jpg. Python
  // mira el canal alfa, guarda, y devuelve la ruta que ha usado.
  const base = path.join(d.cacheDir, path.basename(abs, ext));
  const yaEstaPng = fs.existsSync(base + ".png");
  const yaEstaJpg = fs.existsSync(base + ".jpg");
  if (yaEstaPng) return base + ".png";
  if (yaEstaJpg) return base + ".jpg";

  fs.mkdirSync(d.cacheDir, { recursive: true });
  const cache = execFileSync("python3", ["-c",
    "import sys\n" +
    "from PIL import Image\n" +
    "im = Image.open(sys.argv[1])\n" +
    "if getattr(im, 'is_animated', False): im.seek(0)\n" +
    "lado = int(sys.argv[3])\n" +
    "if max(im.size) > lado: im.thumbnail((lado, lado), Image.LANCZOS)\n" +
    "alfa = im.mode in ('RGBA', 'LA', 'P') and im.convert('RGBA').getchannel('A').getextrema()[0] < 255\n" +
    "destino = sys.argv[2] + ('.png' if alfa else '.jpg')\n" +
    "if alfa: im.convert('RGBA').save(destino, optimize=True)\n" +
    "else: im.convert('RGB').save(destino, quality=86, optimize=True)\n" +
    "print(destino, end='')\n",
    abs, base, String(LADO_MAX)], { encoding: "utf8" });

  const antes = fs.statSync(abs).size, ahora = fs.statSync(cache).size;
  d.convertidas.push(
    `${path.basename(abs)} (${Math.round(antes / 1024)} → ${Math.round(ahora / 1024)} KB)`);
  return cache;
}

// Imagen real del libro; si falta el fichero, cae al hueco gris con la ruta
// tal cual aparece en el .qmd. Nunca inventar rutas.
function img(d, sl, { rel, x, y, w, h, cover = false }) {
  let abs = path.join(d.imgDir, rel.replace(/^\//, ""));
  if (fs.existsSync(abs)) {
    abs = normalizar(d, abs);
    sl.addImage({
      path: abs, x, y, w, h,
      sizing: { type: cover ? "cover" : "contain", w, h },
    });
    return true;
  }
  d.faltan.push(rel);
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

function pie(sl, texto, { x = M, y, w = CW, align = "center" } = {}) {
  sl.addText(texto, {
    x, y, w, h: 0.7, isTextBox: true, margin: 0,
    fontFace: s.body, fontSize: 10.5, color: s.muted, italic: true,
    lineSpacing: 14, align, valign: "top",
  });
}

// === maquetación 1 · PORTADA ==============================================
function portada(d, { cintillo, titulo, autoria = "Juanjo Medina · Lorea Arenas", notas }) {
  const sl = hoja(d, { dark: true, numbered: false });
  sl.addText(cintillo, {
    x: M, y: 2.3, w: CW, h: 0.35, isTextBox: true, margin: 0,
    fontFace: s.body, fontSize: 13, bold: true, charSpacing: 3,
    color: s.accentFill,
  });
  sl.addText(titulo, {
    x: M, y: 2.75, w: 10.2, h: 2.3, isTextBox: true, margin: 0,
    fontFace: s.head, fontSize: 60, bold: true, color: s.onDark,
    lineSpacing: 62,
  });
  sl.addText(autoria, {
    x: M, y: 5.45, w: CW, h: 0.35, isTextBox: true, margin: 0,
    fontFace: s.body, fontSize: 14, color: s.onDarkMuted,
  });
  sl.addNotes(notas || "");
  return sl;
}

// === maquetación 2 · AFIRMACIÓN ===========================================
function afirmacion(d, { texto, sub, notas, dark = false, size = 48 }) {
  const sl = hoja(d, { dark });
  sl.addText(texto, {
    x: M, y: 2.15, w: 10.8, h: 2.3, isTextBox: true, margin: 0,
    fontFace: s.head, fontSize: size, bold: true,
    color: dark ? s.onDark : s.ink,
    lineSpacing: Math.round(size * 1.14),
  });
  if (sub) {
    sl.addText(sub, {
      x: M, y: 4.62, w: 10.2, h: 0.55, isTextBox: true, margin: 0,
      fontFace: s.body, fontSize: 18,
      color: dark ? s.onDarkMuted : s.muted,
    });
  }
  sl.addNotes(notas || "");
  return sl;
}

// === maquetación 3 · CITA (con retrato opcional) ==========================
function cita(d, { texto, atribucion, rel, pieImg, notas, size = 28 }) {
  const sl = hoja(d);
  const conRetrato = Boolean(rel);
  const ancho = conRetrato ? 7.3 : 10.4;
  sl.addText([
    { text: "“", options: { fontSize: size + 24, color: s.accent } },
    { text: texto, options: { fontSize: size, color: s.ink } },
  ], {
    x: M, y: 1.85, w: ancho, h: 3.0, isTextBox: true, margin: 0,
    fontFace: s.head, italic: true, lineSpacing: Math.round(size * 1.36),
    valign: "top",
  });
  sl.addText(atribucion, {
    x: M, y: 5.05, w: ancho, h: 0.35, isTextBox: true, margin: 0,
    fontFace: s.body, fontSize: 14, bold: true, color: s.muted,
  });
  if (conRetrato) {
    img(d, sl, { rel, x: 9.25, y: 1.6, w: 3.15, h: 3.9 });
    if (pieImg) pie(sl, pieImg, { x: 9.25, y: 5.62, w: 3.15 });
  }
  sl.addNotes(notas || "");
  return sl;
}

// === maquetación 4 · DOS COLUMNAS =========================================
function dosColumnas(d, { titulo, cols, notas }) {
  const sl = hoja(d);
  titular(sl, titulo, { y: 1.15 });
  cols.forEach((c, i) => {
    const x = M + i * 5.95;
    sl.addText(c.rotulo, {
      x, y: 2.7, w: 5.4, h: 0.55, isTextBox: true, margin: 0,
      fontFace: s.body, fontSize: 23, bold: true, color: s.accent,
    });
    sl.addText(c.lineas.join("\n"), {
      x, y: 3.38, w: 5.4, h: 2.0, isTextBox: true, margin: 0,
      fontFace: s.body, fontSize: 17, color: s.ink, lineSpacing: 29,
    });
  });
  sl.addNotes(notas || "");
  return sl;
}

// === maquetación 5 · DATO GRANDE ==========================================
function datoGrande(d, { cifra, unidad, glosa, notas, size = 150 }) {
  const sl = hoja(d);
  sl.addText(cifra, {
    x: M, y: 1.7, w: 5.6, h: 2.5, isTextBox: true, margin: 0,
    fontFace: s.head, fontSize: size, bold: true, color: s.accent,
    lineSpacing: size,
  });
  sl.addText(unidad, {
    x: M + 0.1, y: 4.05, w: 5.4, h: 0.7, isTextBox: true, margin: 0,
    fontFace: s.body, fontSize: 24, color: s.ink, lineSpacing: 30,
  });
  sl.addText(glosa, {
    x: 7.1, y: 2.2, w: 5.25, h: 2.4, isTextBox: true, margin: 0,
    fontFace: s.body, fontSize: 19, color: s.ink, lineSpacing: 32,
  });
  sl.addNotes(notas || "");
  return sl;
}

// === maquetación 6 · REJILLA ==============================================
function rejilla(d, { titulo, items, notas, sub }) {
  const sl = hoja(d);
  titular(sl, titulo, { y: 1.0 });
  if (sub) {
    sl.addText(sub, {
      x: M, y: 1.82, w: CW, h: 0.45, isTextBox: true, margin: 0,
      fontFace: s.body, fontSize: 16, color: s.muted,
    });
  }
  const filas = Math.ceil(items.length / 3);
  const conSub = items.some((i) => i.sub);
  // Una etiqueta larga ocupa dos líneas y empujaría su propia glosa: se
  // reserva altura para todas por igual y así la rejilla no se descuadra.
  const ANCHO_ETIQUETA = 21; // caracteres por línea a 20 pt en 3,15"
  const etiquetaAlta = items.some((i) => i.etiqueta.length > ANCHO_ETIQUETA);
  const desplSub = etiquetaAlta ? 0.78 : 0.44;
  const y0 = filas > 1 ? (sub ? 2.8 : 2.7) : (sub ? 3.3 : 3.2);
  const dy = conSub ? (etiquetaAlta ? 1.92 : 1.62) : 1.25;
  items.forEach((it, i) => {
    const x = M + (i % 3) * 3.9;
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
      x: x + 0.6, y: y - 0.04, w: 3.15, h: desplSub, isTextBox: true, margin: 0,
      fontFace: s.body, fontSize: 20, bold: true, color: s.ink, lineSpacing: 24,
    });
    if (it.sub) {
      sl.addText(it.sub, {
        x: x + 0.6, y: y + desplSub, w: 3.15, h: 0.95, isTextBox: true, margin: 0,
        fontFace: s.body, fontSize: 13.5, color: s.muted, lineSpacing: 18,
      });
    }
  });
  sl.addNotes(notas || "");
  return sl;
}

// === maquetación 7 · IMAGEN A SANGRE ======================================
// `velo` = transparencia del paño negro sobre el tercio izquierdo (0 = negro
// opaco, 100 = invisible). Subirlo cuando la foto ya sea oscura por ese lado:
// si no, el borde del velo se lee como si fueran dos fotos pegadas.
function imagenSangre(d, { rel, titulo, pieImg, notas, velo = 28 }) {
  const sl = hoja(d, { dark: true, numbered: false });
  img(d, sl, { rel, x: 0, y: 0, w: W, h: H, cover: true });
  sl.addShape("rect", {
    x: 0, y: 0, w: 6.6, h: H,
    fill: { color: "000000", transparency: velo }, line: { type: "none" },
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
  sl.addNotes(notas || "");
  return sl;
}

// === maquetación 8 · CIERRE ===============================================
function cierre(d, { frase, remate, notas }) {
  const sl = hoja(d, { dark: true, numbered: false });
  // El bloque se centra según el número de líneas, para que una frase de tres
  // no se coma el remate.
  const lineas = frase.split("\n").length;
  const alto = lineas * 0.78;
  const y = 3.55 - alto / 2;
  sl.addText(frase, {
    x: M, y, w: 11.0, h: alto, isTextBox: true, margin: 0,
    fontFace: s.head, fontSize: 46, bold: true, color: s.onDark,
    lineSpacing: 56,
  });
  sl.addText(remate, {
    x: M, y: y + alto + 0.32, w: 11.0, h: 0.6, isTextBox: true, margin: 0,
    fontFace: s.body, fontSize: 20, color: s.onDarkMuted, lineSpacing: 27,
  });
  sl.addNotes(notas || "");
  return sl;
}

// === variante · FIGURA (titular + imagen centrada + fuente) ===============
// La maquetación 3 sin la cita. Para las figuras del libro que no son
// retrato ni van a sangre.
function figura(d, { titulo, quéMirar, rel, w: iw, h: ih, fuente, notas }) {
  const sl = hoja(d);
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
  img(d, sl, { rel, x: (W - iw) / 2, y: y0, w: iw, h: ih });
  if (fuente) pie(sl, fuente, { x: 1.6, w: W - 3.2, y: y0 + ih + 0.14 });
  sl.addNotes(notas || "");
  return sl;
}

// === variante · FIGURA ALTA (imagen a la izquierda, texto al lado) ========
// Para figuras de formato retrato o casi cuadrado, que en 16:9 no caben con
// titular encima sin quedar en sello de correos.
function figuraAlta(d, { titulo, quéMirar, rel, w: iw, h: ih, fuente, notas }) {
  const sl = hoja(d);
  img(d, sl, { rel, x: M, y: 0.62, w: iw, h: ih });
  const tx = M + iw + 0.7;
  const tw = W - tx - M;
  sl.addText(titulo, {
    x: tx, y: 1.5, w: tw, h: 1.5, isTextBox: true, margin: 0,
    fontFace: s.head, fontSize: 28, bold: true, color: s.ink, lineSpacing: 36,
  });
  if (quéMirar) {
    sl.addText(quéMirar, {
      x: tx, y: 3.2, w: tw, h: 1.5, isTextBox: true, margin: 0,
      fontFace: s.body, fontSize: 15, bold: true, color: s.accent, lineSpacing: 23,
    });
  }
  if (fuente) pie(sl, fuente, { x: tx, w: tw, y: 4.9, align: "left" });
  sl.addNotes(notas || "");
  return sl;
}

// === actividad (fondo negro: el aula distingue escuchar de trabajar) ======
function actividad(d, { rotulo, titulo, pasos, notas }) {
  const sl = hoja(d, { dark: true });
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
      x: M + 0.6, y: y - 0.03, w: 10.2, h: 0.5, isTextBox: true, margin: 0,
      fontFace: s.body, fontSize: 19, color: s.onDark,
    });
  });
  sl.addNotes(notas || "");
  return sl;
}

// === wooclap (fondo negro, como la actividad: el aula deja de escuchar) ===
// `tipo` rotula la mecánica ("ELECCIÓN MÚLTIPLE", "NUBE DE PALABRAS"…).
// Las opciones van con letra, no con número, para no confundirlas con los
// círculos numerados de la rejilla, que significan otra cosa.
function wooclap(d, { tipo = "ELECCIÓN MÚLTIPLE", pregunta, opciones = [], notas }) {
  const sl = hoja(d, { dark: true });
  sl.addText(`WOOCLAP  ·  ${tipo}`, {
    x: M, y: 1.0, w: CW, h: 0.35, isTextBox: true, margin: 0,
    fontFace: s.body, fontSize: 13, bold: true, charSpacing: 3,
    color: s.accentFill,
  });
  const alto = pregunta.split("\n").length;
  sl.addText(pregunta, {
    x: M, y: 1.55, w: 11.0, h: alto * 0.72, isTextBox: true, margin: 0,
    fontFace: s.head, fontSize: 38, bold: true, color: s.onDark,
    lineSpacing: 46,
  });
  const letras = "ABCDEF";
  const y0 = 1.72 + alto * 0.72;
  opciones.forEach((op, i) => {
    const dosCol = opciones.length > 3;
    const x = M + (dosCol ? (i % 2) * 5.6 : 0);
    const y = y0 + Math.floor(dosCol ? i / 2 : i) * 0.78;
    sl.addShape("ellipse", {
      x, y, w: 0.42, h: 0.42,
      fill: { color: s.accentFill }, line: { type: "none" },
    });
    sl.addText(letras[i], {
      x, y, w: 0.42, h: 0.42, isTextBox: true, margin: 0,
      fontFace: s.body, fontSize: 13, bold: true, color: s.numeralOnCircle,
      align: "center", valign: "middle",
    });
    sl.addText(op, {
      x: x + 0.62, y: y - 0.02, w: dosCol ? 4.8 : 10.2, h: 0.5,
      isTextBox: true, margin: 0,
      fontFace: s.body, fontSize: 19, color: s.onDark,
    });
  });
  sl.addNotes(notas || "");
  return sl;
}

module.exports = {
  W, H, M, CW, s,
  crear, guardar,
  portada, afirmacion, cita, dosColumnas, datoGrande,
  rejilla, imagenSangre, cierre, figura, figuraAlta, actividad, wooclap,
};
