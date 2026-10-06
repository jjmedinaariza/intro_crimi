# Log del proyecto

## 2026-08-10 — Clasificación y color de los recuadros (callouts)

- Sesión solo de formato: no se ha tocado prosa, citas, notas al pie, imágenes ni YAML de capítulo.
- Se definieron tres funciones de recuadro con tipo Quarto y color:
  - Profundización → `.callout-note` (azul claro).
  - Cine y documentales → `.callout-tip` (verde claro).
  - Orientación profesional → `.callout-warning` (ocre claro).
- **Paso 2 (arreglo global):** corregido el atributo malformado `appearance="\"simple"` → `appearance="simple"` en 20 recuadros (residuo de la conversión desde Word). 0 restantes.
- **Paso 3 (reclasificación):** de 38 recuadros → 33 `note`, 3 `tip`, 2 `warning`. Cambios aplicados solo en la línea de apertura:
  - intro.qmd L79 → `tip` (leyenda de documentales/audiovisual).
  - intro.qmd L84 → `warning` (leyenda de orientación profesional).
  - concepto.qmd L50 "¿Es la criminología una profesión?" → `warning` (decisión de Juanjo: orientación profesional).
  - victimas.qmd L180 "La víctima ideal y la violencia sexual" → `tip` (decisión de Juanjo: material audiovisual, por *Soy Nevenka* y otros).
  - sociedad.qmd L262 "Dancing on Drugs" → `tip` (recomienda documentales).
- **Paso 4:** creado `estilos.css` en la raíz con los fondos pastel de los tres tipos.
- **Paso 5:** añadido `css: estilos.css` bajo `format: html:` en `_quarto.yml`. El tema es `cosmo + brand` (tema claro único, sin modo oscuro), así que los fondos pastel funcionan sin necesidad de duplicar reglas.
- **Incidencia pendiente:** index.qmd L7 (aviso de licencia Creative Commons) no encaja en ninguna de las tres categorías; se deja como `note` a la espera de decisión.
- Pendiente: lanzar `quarto render` en RStudio para ver el resultado (lo hace Juanjo).

## 2026-09-29 — Cap. 2 Método científico y criminología (`metodo.qmd`)

- **[metodo] Autoría:** el capítulo pasa a ser de JM (el mapa de `prompt-capitulo-nuevo.md` aún lo da como ajeno; actualizar).
- **[metodo] Guion validado** (copia en el proyecto: `claude/guion-metodo.md`): 1) ¿Para qué sirve el método?; 2) Las dos almas revisitadas (ontología/epistemología/metodología/métodos; postpositivismo, interpretativismo, construccionismo, críticas y punto de vista, realismo crítico, pragmatismo; tabla en callout; debate Young); 3) Dos culturas de investigación (Goertz y Mahoney), con "Tipos de investigación" **integrado** como primer subepígrafe; 4) Virtudes criminológicas: **curiosidad, rigor, humildad, empatía, transparencia y valentía** (decisión de JM: se añaden curiosidad y valentía; reflexividad dentro de humildad/transparencia), cierre con "virtudes en tensión"; 5) Para seguir leyendo.
- **[metodo] Caso conductor:** "¿funciona la prisión?" (decisión de JM, en lugar del desistimiento).
- **[metodo] Borrador completo del asistente** (~6.600 palabras) volcado en `metodo.qmd`, marcado como borrador. Copia del esqueleto en `metodo_backup_20260929_1055.qmd`.
- **[metodo] Coordinación con cap. 15:** Weber, Myrdal, Becker (jerarquía de la credibilidad), Bourdieu y las virtudes de Loader y Sparks se quedan en `politica.qmd`; en `metodo.qmd` solo se remiten. La frase de Feynman se usa en `politica.qmd` (L366, sin cita y con errata "Feyman"): ahora puede citarse `@Feynman_74`.
- **[metodo] Pendientes:** dos huecos de cita en bloque sin original delante (Young 2011; Mahoney y Goertz 2006/2012); ⚠️ cotejar fechas del máximo y descenso de la población penitenciaria española con `@CidVarona_26`; decidir si se añade un callout de cine/documental (`.callout-tip`); pasar el diagnóstico de voz tras la reescritura de JM.
- **[bib] Altas:** 31 claves nuevas añadidas al final de `references.bib` en el bloque "Altas cap. 2" (copia de seguridad `references_backup_20260929_1055.bib`); pendiente de ordenar con `normaliza_bib.py`. Verificadas en la web: Bhuller_20, Chin_23, LoefflerNagin_22, Pickett_20, Villettaz_06, Villettaz_15 (parcialmente); el resto con ⚠️ en comentario. Falsos amigos señalados: Chin_23/Chin_99, Pickett_20/Pickett_19, Mills_59/Mills_03, Merton_42/Merton_38, Roberts_07/Roberts_03, Goffman_14/Goffman_59.
- **[bib] Observación:** `Sutherland_49` figura con Holt, Rinehart & Winston; la edición original de 1949 parece ser de Dryden Press. Revisar.

## 2026-09-30 — Título del cap. 3 en el índice lateral

- El índice lateral de la portada seguía mostrando "La delincuencia en España": las páginas de `_book/` renderizadas antes del cambio de título (index, intro, clase, colonial, genero, green, politica, prevencion, references) conservan la barra lateral antigua. Solución: `quarto render` completo del libro.
- **[intro]** L17: "Capítulo 3. La delincuencia en España" → "Capítulo 3. Fuentes de datos".

## 2026-09-30 — Notas de pie duplicadas en figuras

- El editor visual de RStudio duplica la nota al guardar cuando está dentro del pie de una figura (`![... [^x]](img)`): crea una definición nueva idéntica y sin llamada.
- Eliminadas 41 definiciones huérfanas idénticas (colonial 4, concepto 9, control 12, delito 7, sociedad 6, victimas 3). Copias en `backups_notas_20260930/`.
- Pendiente: decidir cómo evitar que se repita (modo Source para estos capítulos o `editor: source`).
- 14:47: RStudio volvió a guardar `sociedad.qmd` desde su copia abierta y reaparecieron los duplicados (más `[^sociedad-16]`). Limpiados de nuevo (7), manteniendo las ediciones de JM; copia en `backups_notas_20260930b/`.
- `_quarto.yml`: `editor: visual` → `editor: source`.
- Figuras con nota en el pie (45 en colonial, concepto, control, delito, etnicas, sociedad, victimas) convertidas a bloque de figura Quarto (`::: {#fig-id}` + imagen + párrafo de pie), para que el editor visual no duplique las notas. Probado con quarto 1.7: mismo HTML (figura numerada, pie, nota, alt). Copias en `backups_figuras_20260930/`. Limpiados otra vez 7 duplicados en sociedad.
