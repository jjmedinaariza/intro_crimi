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
