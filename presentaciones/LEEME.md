# Presentaciones del manual

Un `.pptx` por capítulo, en estilo **B claro** (aula iluminada con proyector).
Los decks no se editan a mano: se generan con un script.

## Piezas

| Archivo | Qué es |
|---|---|
| `plantilla-b-claro.js` | El sistema visual: tokens y las maquetaciones. **Compartido por todos los capítulos.** |
| `deck-capNN-*.js` | El contenido de un capítulo. Solo diapositivas, sin diseño. |
| `insertar-evaluacion.py` | Inserta una diapositiva suelta en un `.pptx` ya editado a mano, sin regenerarlo. |
| `.cache-imagenes/` | Copias de trabajo de las imágenes: convierte `.webp` y `.gif`, que PowerPoint no traga, y reescala las que superan 2200 px o 1,2 MB. El formato de salida lo decide el canal alfa, no la extensión. Se regenera sola; se puede borrar. |

## Regenerar un deck

```bash
npm install pptxgenjs        # una sola vez
node deck-cap03-delincuentes.js
```

Las rutas de `LIBRO` dentro de cada script apuntan a la carpeta del libro y hay
que ajustarlas si se mueve el proyecto.

## Comprobación, obligatoria antes de dar nada por bueno

```bash
python3 .../pptx/scripts/office/validate.py salida.pptx
python3 .../pptx/scripts/office/soffice.py --headless --convert-to pdf salida.pptx
pdftoppm -jpeg -r 65 salida.pdf p     # y mirar las imágenes una a una
```

Mirar el render no es opcional. Los problemas de esta plantilla —texto que se
desborda, etiquetas que parten en dos líneas y pisan su glosa, contraste
insuficiente del ocre, velos que se leen como un corte— solo se ven mirando.

## Reglas que no se tocan

- **Ligeras de texto.** La diapositiva es señal, no apunte. Lo que no está en
  pantalla va en las notas del ponente.
- **Toda visualización de datos entra**, con su fuente y una línea de qué mirar.
  Si la figura ya trae dentro su propio titular, su anotación y su fuente —como
  las del SAVA en el capítulo 7— va con `figuraPlena`, que le da la diapositiva
  entera: repetirle la cabecera encima la encoge hasta hacerla ilegible.
- **Los callouts del libro quedan fuera.** Son material de lectura; si alguno
  hace mucha falta, va como aviso en las notas.
- **Nunca inventar rutas de imagen.** Si falta el fichero, sale un hueco gris
  con la ruta tal como aparece en el `.qmd`.
- Ocre (`A66A00`) sobre blanco, ámbar (`E0A33E`) sobre negro. Nunca al revés.
- Rellenos con `line: { type: "none" }`: con `width: 0` LibreOffice pinta un
  contorno negro.

## Estado

| Capítulo | Archivo | Diapositivas | Sesión |
|---|---|---|---|
| 1 · ¿Qué es la criminología? | `Cap01_Que-es-la-criminologia.pptx` | 52 | 2 h, una sesión |
| 2 · El delito | `Cap02_El-delito.pptx` | 57 | 2 h, dos sesiones |
| 3 · El delincuente | `Cap03_El-delincuente.pptx` | 50 | 2 h, una sesión, 5 Wooclaps |
| 7 · Las víctimas | `Cap07_Las-victimas.pptx` | 59 | 2 h, dos sesiones, 2 Wooclaps |
| 8 · Las respuestas estatales | `Cap08_Respuestas-estatales.pptx` | 52 | 2 h, dos sesiones, 2 Wooclaps |

El deck del capítulo 1 tiene todavía su propia copia de las maquetaciones
(`deck-cap01-concepto.js`) y no usa `plantilla-b-claro.js`. Funciona, pero
conviene migrarlo antes de que la plantilla y esa copia se separen más.
