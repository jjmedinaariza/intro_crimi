# Diagnóstico de voz y mecánica — `grupos.qmd`

**Fichero leído del disco:** `intro_crimi/grupos.qmd`, modificado el **11 de septiembre de 2026 a las 10:27** (hora de Madrid); 701 líneas, unas 25.200 palabras en bruto y 20.300 de prosa corrida. Último commit que lo toca: `e7a5a33`, 14-09-2026 11:01. Lo he leído entero, línea a línea. Los números de línea valen para esa versión y para ninguna otra.

**Contra qué he medido.** `concepto.qmd` (4-09-2026) y `delincuentes.qmd` (14-09-2026) leídos del disco, el segundo sin «Identidad y delincuencia» ni la conclusión, y el primero **sin «La criminología en España» ni «A modo de cierre»** (véase el aviso 1). Todo con el mismo script (`claude/medir_voz.py` en el proyecto), de modo que las cifras son comparables entre sí; no lo son del todo con las de la tabla antigua de la skill, que salieron de otro script (el mío da una nominalización un 16 % más alta sobre el mismo texto). Como segunda vara, tus dos módulos de la UOC en castellano y el borrador de la monografía de 2011 (165.000 palabras).

**Contra las claves:** `references.bib` (17-09-2026, 1.016 entradas). 176 claves citadas en el capítulo; faltan 4 (van en su línea).

## Tres avisos antes de la lista

1. **La referencia ha cambiado.** `concepto.qmd` tiene ahora una sección nueva, «La criminología en España» más «A modo de cierre» (L270 en adelante, 1.900 palabras), que no existía en la copia de julio del proyecto. Mide muy distinto del resto del capítulo: mediana de 19 palabras por frase frente a 28, negación con dos puntos a 21 por diez mil frente a 0,7, y la mitad de sus pivotes niegan («no es ombliguismo académico:», «no es una categoría natural que estuviera ahí esperando a ser descubierta:»). No sé quién la escribió; la he sacado de la vara y te lo digo en vez de decidirlo yo.
2. **`INSTRUCCIONES.md` manda leer `log-proyecto_2.md` entero y en la carpeta solo hay `log-proyecto.md`** (10-08-2026, una sesión sobre recuadros). Lo he leído; no dice nada de `grupos.qmd`. Si el `_2` existe en otro sitio, no lo he visto.
3. **La skill da `grupos.qmd` por revisado, con «la negación ya en tasa normal».** Con el detector antiguo (A, B y C) es cierto. Pero la variante de coma sin «sino» con verbo distinto de *ser* («no se cruza, se desplaza sola») no la cazaba la regex C, y en este capítulo hay 13, a 6,4 por diez mil, frente a 1 o menos en todo tu corpus. Es el error que la propia skill tiene apuntado: detector construido alrededor de una palabra.

## Leyenda

**NEG** familia de negación y sustitución · **DP** dos puntos de bisagra · **PIV** pivote que gira en vez de aterrizar · **LEX** léxico ajeno o comodín · **REG** registro (informe, ampuloso o narrativo) · **TRI** tríada o anáfora triple · **REM** remate aforístico · **MEC** mecánica · **CITA** afirmación sin referencia · **⚠** marcador o dato por cotejar. El fragmento va entre comillas cuando es corto.

## Lista, de la última línea a la primera

- **L701** LEX «ejercer cautela en como». MEC «vemos como», «en como» (cómo); «código penal» y «Código Penal» en la misma frase. TRI estructural (primera, segunda, tercera lección). NEG «Pensar que… es no entender que».
- **L699** REM quiasmo «La empresa se sirve del Estado y el Estado de la empresa».
- **L697** MEC «¿Que lecciones» (Qué), «dificilmente». La tesis («cuanto más poder… más difícil») vuelve aquí por cuarta vez (L19, L494, L697 y cierre de L15), pero sin molde negativo: repetición para enseñar, no la marco.
- **L695** Sección «A modo de conclusión»: 271 marcas de persona por diez mil, nominalización 38. Suena a ti.
- **L692** REG ampuloso [AJENA]: «flujos de supervivencia», «poblaciones estructuralmente dependientes», gerundios «conociendo», «transformando». LEX «resulta insuficiente», «constituiría». CITA «Autores de esta tradición sostendrían», «la criminología crítica concluye que»: se atribuye una conclusión a una corriente sin fuente. MEC «Criminología del Crimen de Estado» en mayúsculas frente a minúsculas en L659.
- **L690** REG informe [AJENA]. MEC «Derecho Internacional Público» en mayúsculas frente a L634 y L644.
- **L688** MEC «Mederios» (la clave dice Medeiros); «las 14 millones» (los). CITA/⚠ «demostró»: es una proyección a 2030, no algo demostrado. LEX «la prestigiosa revista».
- **L686** REG informe [AJENA]: «Esta determinación institucional supuso», «de gran envergadura». CITA cifra de 133 países sin referencia en la frase.
- **L684** CITA «liderado por Elon Musk y Donald Trump» sin fuente.
- **L681** Recuadro L681-693 (391 palabras): 26 marcas de persona por diez mil, nominalización 79. Afecta a todo lo de dentro.
- **L679** MEC «prácica». TRI «el diagnóstico, la denuncia política, y el activismo académico».
- **L677** LEX «Asimismo», «pueden constituir elementos indispensables». MEC «podrían pensarse que diluyen» (sintaxis), «reduciendol», «de reparación y la memoria».
- **L675** REG informe, gerundio final «exponiendo los análisis…». Una sola marca de persona.
- **L673** MEC «en si», «por otra lado», «crimen de estado» (minúscula; en el resto, Estado), «código penal». El tramo «nuestra propia postura es que…» sí es voz tuya [MIXTA].
- **L671** LEX «En última instancia». REG ampuloso [AJENA]: «violencia hegemónica», «la verdadera rendición de cuentas», «consagrado».
- **L668** MEC doble espacio «fue  un»; gerundio «operando ahora a escala institucional». Cruce «(capítulo 5, El delincuente)» correcto según `INSTRUCCIONES.md`.
- **L663** LEX «Asimismo». REG [AJENA]: «sofisticadas técnicas», «vínculos indisolubles», «completamente fuera».
- **L661** DP + gerundio «prácticas lesivas: permitiendo que». LEX «resulta insuficiente», «intrínsecamente conservador».
- **L659** REG ampuloso [AJENA]: «parte de una premisa que cuestiona las limitaciones inherentes del formalismo jurídico», «supedita». TRI «el daño social sistemático, la desviación institucional y la vulneración estructural». MEC «(*zemiology*)» colgado de «daño social sistemático»; espacio final.
- **L657** Sección «El crimen estatal en la criminología crítica» (1.375 palabras): 36 marcas de persona por diez mil, nominalización 75, tres *asimismo*. Es, con L516 y L326, el bloque más alejado de la voz del manual. Afecta a L659-693.
- **L655** ⚠ CITA «entre 1.100 y 2.200 muertes adicionales… entre principios de abril de 2026 y mediados de agosto de 2026»: cifra precisa sin referencia. CITA «ha continuado sus acciones genocidas» sin fuente ni atenuación (regla de sobriedad factual). MEC «ha inicia»; «caso Palestino» (mayúscula); «tribunal penal internacional» frente a «Corte Penal Internacional» en L646. Gerundio «poniendo de relieve».
- **L649** MEC sin incidencia: «(1948)» y «(1998)» son fechas de tratados, no citas a mano.
- **L644** DP «del derecho internacional público: la separación entre…».
- **L642** MEC figura sin identificador `#fig-` y sin fuente ni licencia de la imagen.
- **L640** MEC «teneis», «por la otra parte». La frase «como veréis si en vuestro grado…» es tuya [MIXTA].
- **L638** MEC «y la (4) cooperación» (el número va antes del artículo). Clave **`Jorgensen_2000` no existe** en el `.bib`; hay `Jorgensen_2002`.
- **L636** REG jurídico ampuloso [AJENA]; nominalización 133.
- **L634** REG [AJENA]: «Esta delimitación dogmática responde a la premisa fundacional», gerundio «evitando así».
- **L632** Sección «¿Responsabilidad penal de los Estados?» (533 palabras): nominalización 101, la más alta del capítulo. Afecta a L634-655.
- **L627** MEC «el conflicto de la Parte 3»: cruce por número sin título (`INSTRUCCIONES.md` pide número + título). CITA multas de 8.200, 500 y 200 millones sin referencia. REM «Es, a pequeña escala, el conflicto…».
- **L624** Recuadro L624-628: cero marcas de persona.
- **L622** ⚠ **U+FE0F suelto** tras «Directiva de Diligencia Debida en materia de Sostenibilidad»: alguien marcó esa directiva para cotejar. NEG «en vez de perseguir…, impone», «en vez de detenerse…, alcanza», y REM «no sobre el daño concreto». MEC «Union Europea»; Bradford y Philippon nombrados con la cita parentética al final: según `INSTRUCCIONES.md` va `[-@Clave]` tras el nombre.
- **L620** LEX «perversas consecuencias económicas, sociales y políticas» (TRI). MEC «en este sentido… en ese sentido» en la misma frase; espacio final. NEG «en lugar de simplemente eludir».
- **L617** MEC «Merchands of Doubt» (Merchants), «pelicula». CITA memorando de Brown & Williamson de 1969 entrecomillado sin referencia.
- **L609** MEC siglas sin desarrollar: SLAPP, FOIA.
- **L605** MEC «ambitos», «azucar».
- **L600** MEC figura sin identificador `#fig-` y sin fuente.
- **L598** MEC «fosiles»; frase sin verbo principal («La "fabricación de la duda" como la llaman los expertos y que hemos visto…»).
- **L596** PIV «Si el regulador es débil, no hace falta esquivarlo.» en mitad del párrafo (el detector no lo caza porque la frase anterior tiene 29 palabras).
- **L594** CITA Google Shopping, «más de 14 años», sin referencia. LEX «sistemáticamente».
- **L592** MEC «en en». CITA caso Google sin referencia. Gerundios «implementando», «volviendo».
- **L590** MEC «salud publica». CITA litigios de la industria de ultraprocesados sin referencia.
- **L586** MEC «cláusulas… asociados»; espacios finales (también L588).
- **L584** MEC «neutralizar el control, con tácticas dirigidas a neutralizar»; «tácticas» tres veces en dos líneas.
- **L582** REG pasa el filtro automático (84 por mil, sin persona, sin nombre ni cifra). MEC «razonable denegabilidad» (calco).
- **L578** TRI «tácticas estructurales, jurídicas e informativas». LEX «sofisticado repertorio», «formidable reto».
- **L576** REG informe [AJENA]: «implementan», «defensa afirmativa», gerundio «probando su debida diligencia». CITA Directiva 2019/1937 sin referencia. MEC espacio final.
- **L572** Puente ya escrito y tuyo: «A esas cuestiones dedicamos la siguiente sección.» MEC «sobre como podemos» (cómo).
- **L570** NEG «en lugar de fiarlo todo a una sola vía».
- **L568** LEX «constituye una distracción útil» + TRI «legitima…, traslada… y desactiva». NEG «no es el incumplimiento de la ley, sino el propio diseño» (aquí el contraste es el argumento de Tombs y Whyte; defendible). MEC «para esto autores».
- **L565** MEC frase sin cerrar («los problemas de una regulación el premiado documental»).
- **L563** LEX «Asimismo». DP «por vigilar un sistema obsoleto: mientras…». CITA 60.000 millones y paro del 8 % al 26,9 % sin referencia. LEX «demuestra que», «severas políticas». MEC «y que nunca se recuperarán» (sintaxis).
- **L561** **MEC carácter corrupto U+FFFD en «calificaci��n»**. CITA Adam Tooze y *Crashed* nombrados sin clave (regla: si se nombra, se cita). NEG «no se debió únicamente a… Para este autor fue reflejo de». LEX «descomunales», «ciegamente».
- **L558** Recuadro L558-566 (317 palabras): cero marcas de persona. Afecta a todo lo de dentro.
- **L556** LEX «Existe asimismo». Frase sin verbo: «Sobre todo, cuando opera bajo…».
- **L554** DP «maquillaje de escaparate: sirve para…, pero no para». MEC «Ademas». LEX «extremadamente difícil». «que han revisado montañas de casos» sí suena a ti [MIXTA].
- **L552** REG pasa el filtro (100 por mil). MEC «Pensar, por ejemplo,» (¿«Pensad»?); «las empresas… tiene».
- **L550** NEG **«deja de ser la conducta aislada para centrarse en»**: construcción que en tu corpus aparece una vez en 180.000 palabras. MEC «demuesta».
- **L548** REG pasa el filtro con la nominalización más alta del capítulo (167 por mil). MEC «De forma simultanea», «descansa de manera en» (falta el adverbio), «Este es lo que».
- **L546** Sección «La responsabilización de las empresas»: nominalización 73; la persona (76) la sostienen L554 y L572. Afecta a L548-572.
- **L544** MEC «recomiendan la necesidad de… y a redes» (sintaxis).
- **L542** MEC «las agencia regulatoria», «pueden der y, de hecho son». TRI «músculo financiero, pericial y legal». LEX «profundas asimetrías».
- **L540** REG pasa el filtro (99 por mil). MEC «el simplemente chequear».
- **L534-538** TRI lista de exactamente tres.
- **L532** LEX **«entrañan»** (dos veces en 136.000 palabras tuyas), «De igual modo», «Por consiguiente», «robusta autonomía», «fuertemente». CITA «la investigación ha documentado que» y «La literatura sugiere que», ambas sin referencia. MEC «esta fuertemente».
- **L530** REG [AJENA]: «Siendo eso así», tres «puede» en una frase.
- **L528** LEX «Asimismo». MEC «persuasion», «autoregulación» (en L548, «autorregulación»).
- **L526** MEC «debería reducir… y a fortalecer» (sintaxis).
- **L524** REG pasa el filtro (109 por mil). MEC **clave `Parker_2012` no existe** (hay `Parker_2013`, `Parker_2002`, `Parker_2004`); la clave `Braithwate_2007` existe pero está mal escrita también en el `.bib`; «libre competición» (competencia); doble espacio.
- **L520** REG [AJENA]: «la célebre pirámide», gerundios «reservando», «delegando».
- **L518** NEG «no reside en… ni en… Para estos autores lo determinante es». LEX «reside», «influencia decisiva». MEC «Levy-Faur» (la clave dice Levi-Faur).
- **L516** Sección «La regulación responsiva» (889 palabras): nominalización 89, dos *asimismo*, cuatro de los siete párrafos que pasan el filtro. La skill ya la señalaba como registro de informe; sigue ahí. Afecta a L518-544.
- **L514** CITA «Los estudios de reincidencia apenas encuentran efecto, y las entrevistas muestran»: la referencia llega tres frases después. TRI «ni la ley, ni las multas, ni la supervisión» (viene de la fuente).
- **L512** TRI anáfora «Se pierde… Se pierde… Y se pierde», con dos tríadas dentro («no la reconoce…, no le da voz ni la repara»; «no aparecen…, no alimentan… y no forman»).
- **L510** REM «El artículo 31 bis existe, se estudia y se enseña; el daño corporativo, en cambio,…» (TRI).
- **L502** LEX «marcadamente sociológica». CITA «La jurisprudencia ha cerrado la puerta a los modelos cosméticos» sin referencia.
- **L498** NEG «no responde por el delito de otro, sino por algo propio» (el contraste es la doctrina; defendible).
- **L494** Tesis repetida («cuanto mayor es el poder…») sin molde negativo: no la marco.
- **L492** PIV/REM «Y ahí hay una ausencia reveladora.» MEC «numerus clausus» sin cursiva; espacio final.
- **L490** MEC «las última décadas», «ha comenzado ha jugar». NEG «no solo en España, también a nivel global».
- **L488** Sección «La responsabilidad penal de las empresas» (1.346 palabras): 30 marcas de persona por diez mil. Afecta a L490-514.
- **L485** CITA «un efecto curioso y poco comentado» sin referencia.
- **L480** TRI anáfora «No hay acusada, no hay juicio oral, no hay antecedente penal, no hay imagen…»; «un expediente, una multa y…». REM «esa diferencia simbólica no es menor. Es justamente la que separa al ladrón del…».
- **L478** ⚠ **U+FE0F suelto** tras `[@STSPrestige_16]`: alguien marcó para cotejar los catorce años hasta sentencia firme del *Prestige* (el mismo dato está en L386 sin marca).
- **L476** Pivote «Tiene sus razones.»: aterriza, no lo marco.
- **L468** Nota al pie en registro de informe, pero con cita; «resulta más sencilla».
- **L464** REM «El daño se salda como un problema de coste, no de delito.»
- **L456** MEC sigla SEPBLAC sin desarrollar.
- **L454** MEC «el llamaba», «ilicitos», «capitulos», doble espacio «por  las». CITA Tappan nombrado sin clave ni nombre de pila. Pivote «No eran infracciones penales.»: da un dato llano, aterriza, no lo marco.
- **L452** Sección «¿Quién responde y por qué vía?» (1.238 palabras): 32 marcas de persona por diez mil. Afecta a L454-485.
- **L450** Puente ya escrito y tuyo: «De eso trata el apartado siguiente.» MEC «cual es la base» (cuál).
- **L446** REM «Que lo segundo prosperara y lo primero no, dice bastante sobre…» (tercer cierre con «dice mucho/bastante»: L373, L398, L446). MEC «el uso… eran puro aprovechamiento».
- **L438** LEX **«cuando llegó la factura»**. MEC «tambien», «no fue organizado un empleado» (falta «por»), «mas ecológicos», falta el punto final tras la cita.
- **L436** TRI de ejemplos («Maquillar…, falsear…, verter…»). «hace falta separar dos cosas»: andamiaje leve.
- **L426** NEG ×2 en un párrafo: «no nos explica por qué se delinque, nos explica cómo», y REM de cierre «Describe cómo se produce el daño, no exime de responsabilidad». LEX «advertencias» (uso literal, no lo cuento como tic).
- **L422** MEC cita en bloque huérfana: queda detrás de la definición de la nota `grupos-5` y sin frase que la introduzca.
- **L420** MEC `LordDavies_27` existe en el `.bib` con año 2027: comprobar que conste como en prensa.
- **L418** NEG + REM **«La línea no se cruza, se desplaza sola»**; «esto no es buscarse una excusa…, quienes participan no perciben». DP «Funciona así:». TRI «la rutina, la presión de los plazos y la cultura del grupo». MEC «sociologia» (socióloga); espacio antes de `[^grupos-5]`. Con L426 son tres enunciados de la misma idea en molde negativo: es la señal de alarma de la skill.
- **L416** LEX **«decisión nítida»**. REM «una pregunta sin respuesta, y no porque alguien la esté escondiendo».
- **L414** DP + NEG + TRI «No aparece la figura que la criminología lleva un siglo persiguiendo: la persona desviada, con su biografía, sus carencias y su decisión».
- **L410** LEX **«lo que factura el conjunto del crimen organizado»**. Números correctos a la española; 3.378 sobre 10.000 millones sí es un tercio.
- **L404** Sección «Lo que todos estos casos tienen en común»: 113 marcas de persona por diez mil, nominalización 37. Voz tuya en conjunto; las incidencias son puntuales.
- **L402** DP «estamos ante lo contrario: bastante más de lo que parece». MEC **frase rota**: «La pregunta que tenemos que hacernos no es por qué por qué no tenemos…» (palabra duplicada y la negación inicial nunca se resuelve); «lo que ocurren».
- **L400** NEG/PIV **«Estos comportamientos no son excepciones, son un patrón.»** en mitad de párrafo. NEG «En lugar de estudiar a personas presas, estudió». MEC «uso el término» (usó), «casi no aparece» (aparecen).
- **L398** REM ×3 en una sola entrada de lista: «Y cuando ese dinero aflora, el trato que recibe dice mucho», «Es el mismo patrón de siempre», «Y hay más,». PIV «Pero no todo es legal.» **Clave `EUTaxObs` no existe** (hay `EUTaxObs_23`). CITA/⚠ investigación penal a Cristóbal Montoro sin referencia y con estado procesal que caduca («la causa sigue abierta»).
- **L396** TRI/REM «Nadie sangra, nadie sale en el telediario, y…».
- **L394** PIV **«Este contraste no hay que esconderlo.»** + REM «es una tendencia, no una ley física». CITA Bankia (absolución de 2020, doscientos mil afectados) y Fórum/Afinsa sin referencia.
- **L391** MEC **«s la cifra oficial»** (falta la E), «un juicios», «no resulto». NEG «no juzgaba el vertido, era un juicio sobre».
- **L388** Recuadro L388-392: cero marcas de persona.
- **L386** Pivote «Es un patrón conocido.»: aterriza, no lo marco. REM «y no a subir hasta la empresa».
- **L382** TRI «la decisión… está prescrita, la empresa se ha transformado y quien decidió se ha jubilado».
- **L378** REM «El caso DuPont es extremo, pero no es exótico.»
- **L375** MEC «apartado 6.3.5»: cruce por número suelto, sin título, y frágil si cambia la numeración.
- **L373** NEG + DP + TRI **«Aquí no vemos códigos de honor, ni banquetes, ni gansters con carisma: hay un abogado…»**. REM de cierre «tiene probablemente algo que ver con eso». MEC «gansters» (en L373 mismo y L301, «gánster»), «vemos como».
- **L368** Cinco negaciones en un párrafo («no fue la obra de un villano… ni…», «Lo que vemos aquí es», «pero esto no fue», «no castiga solo…, sino también», «Esto no fue necesariamente»). MEC **dos frases rotas**: «El problema es que la intención o la imprudencia, atribuir la decisión…» (falta un verbo) y «El conflicto  en este se resolvió» (falta «caso», doble espacio); «a raiz», «facil». El pivote «el caso nunca fue a un juzgado de lo penal» da un dato: aterriza.
- **L366** PIV **«Porque este no es un problema del otro lado del Atlántico.»** en mitad de párrafo. REM «Y el daño sigue ahí.» TRI anáfora «No hubo condena penal, no hubo persona alguna en prisión y no hubo admisión de culpa».
- **L362** MEC «Puede que… te suenen»: segunda persona del singular; en el resto del manual, vosotras. Anáfora «Sabía que… Sabía que».
- **L360** REG narrativo: apertura en escena («se plantó en el despacho…»). Es justo el registro que la skill dice que no es el tuyo de base; decide tú si lo quieres como excepción. DP ×2: «salían sus vacas: dientes ennegrecidos…», «a lo contrario de lo que le pedían: defender a empresas químicas».
- **L358** Sección «¿Pueden delinquir las corporaciones?» (2.134 palabras): 113 marcas de persona por diez mil. La persona es tuya; los tics de este tramo son de ritmo (remates, anáforas, negación), no de registro.
- **L354** NEG **«deja de ser corrupción puntual y se convierte en captura»**. MEC «eventualmente» (falso amigo de *eventually*). CITA condena de García Luna sin referencia. «que podéis consultar» es tuyo.
- **L352** LEX «advierten» (uso literal). «Hay quien señala que en Italia…»: la referencia llega en la frase siguiente, correcto.
- **L349** NEG + DP + REM **«no es un déficit técnico menor: sin información fiable, el debate… queda condenado a oscilar entre la negación corporativa y el escándalo mediático»**. LEX «resultan insuficientes».
- **L347** LEX «Resulta especialmente relevante, desde una perspectiva criminológica». DP «un problema recurrente en la literatura sobre control interno: la capacidad de…», y esa literatura va sin CITA. CITA causa del OCON-Sur sin referencia.
- **L345** LEX **«constituye el caso más significativo»**. DP «impunidad estructural a una organización: el procedimiento…». TRI estructural («tres modalidades»). CITA: Ceuta, exjefe de la UDEF (32,6 millones, 73 toneladas) y Mossos en Girona, todo sin referencia.
- **L343** LEX **«debe interpretarse con cautela»**. CITA respuesta parlamentaria de Interior (106 agentes, 22-16-24-20-24) sin referencia.
- **L341** REG informe [AJENA]. La única cita del recuadro es Punch.
- **L338** Recuadro «La corrupción policial…» L338-350 (784 palabras): 26 marcas de persona por diez mil, nominalización 91, una sola referencia para seis párrafos de datos. Es el bloque más claro de registro de informe del capítulo. Afecta a todo lo de dentro.
- **L336** REG pasa el filtro (128 por mil). CITA párrafo entero sin referencia, con afirmaciones tajantes («Las redadas… en realidad lo que buscan es castigar»). Frase sin verbo principal: «Mientras que en el plano judicial,…».
- **L334** REG informe [AJENA]. CITA párrafo entero sin referencia («la policía y los agentes locales aceptan sobornos»). NEG «no refleja una "ausencia del Estado", más bien se manifiesta como».
- **L332** MEC «*La infiltración» con mayúscula tras coma. NEG aditiva «no solo esquivan al Estado, sino que gobiernan».
- **L330** NEG «no son ni víctimas pasivas… ni instituciones enteramente capturadas» (viene de la fuente; defendible).
- **L328** REG [AJENA]: abre hablando del «análisis académico» en vez de afirmar algo (tus 21 aperturas de referencia no lo hacen). NEG «Su objetivo primordial no es la confrontación… Lo que estas organizaciones buscan… es». TRI ×2 («captura, neutralización y corrupción»; «la impunidad…, la exclusividad…, así como la consolidación»). MEC «mejicanos» (en L27, «mexicanos»); espacio final.
- **L326** Sección «La infiltración de estructuras estatales» (1.704 palabras): 35 marcas de persona por diez mil, nominalización 88. La skill ya la señalaba; sigue ahí. Afecta a L328-354.
- **L324** REG informe [AJENA], nominalización 111.
- **L322** CITA HSBC (881 millones, 2006-2010) y BCCI sin referencia. MEC «mirar a otra lado»; frase sin verbo principal «Mientras que el *Bank of Credit*… facilitó» como oración suelta.
- **L320** NEG «Lejos de operar de forma aislada…, los grupos». MEC `Benson_27` con año 2027 en el `.bib`: comprobar que conste como en prensa.
- **L318** REG informe puro en nota al pie [AJENA]: «exhibe deficiencias estructurales», «La principal limitación radica en», «severo deterioro funcional». CITA ninguna referencia en toda la nota, incluida «los colectivos ciudadanos y expertos en prevención reclaman». MEC doble espacio.
- **L316** NEG «no ya la "captura"…, sino también». LEX «barreras constantes», «constantes desafíos».
- **L311-314** MEC pie de figura partido en cuatro líneas; «Maldita.es, 2024» citado a mano.
- **L309** «Diversos estudios independientes y análisis del GAFI revelan»: lleva referencia (`EPRS_20`, `Europol_23`), correcto.
- **L305** NEG «no son dos mundos separados por una frontera rígida, al contrario, están entrelazadas».
- **L303** **AVISO DE SECCIÓN:** «Los vínculos entre la economía legal y la ilegal» tiene 949 palabras y 21 marcas de persona por diez mil, la única por debajo del umbral de 25. Afecta a L305-324.
- **L301** MEC **clave incompleta `[-@Hobbs_]`** (en el `.bib`, `Hobbs_98`). NEG la misma idea dos veces con el mismo molde en un párrafo: «no se puede entender simplemente como…, pero tampoco es» y cierre «No son un cuerpo extraño…, pero tampoco se explican sin». LEX «se matiza», «estrechamente».
- **L298** REG pasa el filtro (88 por mil). NEG «lejos de frenar la migración, incrementa». TRI ×2 («profesionalizados, caros y peligrosos»; «abuso, trabajo forzoso y trata»). MEC «migrant». LEX «consecuencias estructurales paradójicas y graves».
- **L296** NEG aditiva «no solo despoja…, sino que oculta».
- **L294** NEG «no solo sostiene los mercados ilegales, también explica»; «En lugar de estar controladas…, la mayoría». DP + TRI «infraestructuras de apoyo mutuo: comparten…, financian… y facilitan». LEX «demuestra que».
- **L291** Recuadro «¿Mafias o capital social informal?» L291-299 (435 palabras): 23 marcas de persona por diez mil, nominalización 71. Bien citado, pero en registro de informe. Afecta a todo lo de dentro.
- **L289** MEC comas: «en un mundo de desconfianza juega», «la costa gallega ofrece».
- **L285** MEC frase sin verbo: «El ejemplo que traen van de Bunt y sus colegas por lo anodino que es.» REM + TRI «Bastaron un empresario de clase media, sus contactos y su cámara frigorífica.» DP «las infraestructuras del mundo legal: sus rutas comerciales, sus puertos, sus empresas» (TRI).
- **L281** MEC falta el verbo: «en lo que Sergi y Lavorgna su dimensión "glocal"». CITA «hoy la mafia italiana más poderosa» sin referencia.
- **L279** MEC **«no se genera mediante a través de»**: frase rota que además invierte el sentido (dice que la confianza *no* se genera por esas vías); «Los distribuidores… necesita». REG informe [AJENA]. LEX «demuestra», «profundamente integrados». Gerundio «operando».
- **L277** DP + REG **«La empresa criminal es bien un fenómeno glocal: una intersección estructural donde los flujos transnacionales…»**. MEC «es bien un»; coma entre sujeto y verbo («contemporáneo, conceptualiza»); «(1998)» y título en el texto en lugar de `[-@Hobbs_98]`; Roland Robertson nombrado sin clave. LEX «intrínsecamente», «contranarrativa frente a este relato».
- **L271** NEG «No contratamos, compramos ni invertimos con desconocidos abstractos, generalmente lo hacemos a través de». MEC «sociologo»; Granovetter sin nombre de pila (tú sueles dar nombre, apellido y disciplina). LEX «profundamente arraigadas».
- **L269** MEC «relaciones sociales preexistente de la gente que participan». «No se sostiene en el vacío.» responde a la pregunta: aterriza.
- **L263** ⚠ **marcador visible**: «cita del DOUE por confirmar».
- **L260** LEX **«Conviene subrayar que esto no es un efecto no deseado»** (muletilla más doble negación).
- **L256** ⚠ **U+FE0F suelto** tras `[@Zuniga_15]`: alguien marcó para cotejar que los tribunales «tienden a buscar una jefatura como indicio de que hay organización». Andamiaje: «Hay que empezar reconociéndole un acierto de partida.»
- **L253** MEC `::: callout-note` sin llaves ni `appearance="simple"`, distinto del resto de recuadros del capítulo (el log del 10-08 los normalizó).
- **L249** CITA «sirve para injustificadamente ensanchar la red del control penal con efectos draconianos» sin referencia; «la literatura que emana de los Informes Anuales de Europol cada vez usa menos» sin referencia. LEX «Como acertadamente señalan».
- **L205-247** MEC lista rota: cada punto tiene una viñeta vacía (`-`) seguida de un número sangrado; doble espacio en los once.
- **L203** MEC coma donde va punto o dos puntos («en 1997 [@vonLampe_16], se podía hablar»); «(1,3,5 y 11…)» sin espacios.
- **L201** Sección «De la definición criminológica a la definición legal»: 41 marcas de persona por diez mil.
- **L199** REM «Son, en pequeño y sin permiso, una forma de gobierno.» Claves `Varese_2001` y `Skaperdas_2001` existen, pero con año de cuatro cifras: el `.bib` mezcla dos formatos.
- **L195** REG informe [AJENA], el párrafo más ajeno del tramo: **«Asimismo»**, «resulta valiosa», gerundio «demostrando que», cero marcas de persona, nominalización alta.
- **L193** TRI anáfora «No puede firmar…, no puede anunciarse, no puede pedir». NEG «en lugar de empujar hacia grandes organizaciones, empuja hacia lo contrario». «Reuter lo llamó *crimen desorganizado*.» aterriza: no lo marco.
- **L191** «la investigación ha ofrecido tres respuestas complementarias»: anuncio de estructura (TRI estructural; las tres vienen de la literatura).
- **L186** REG ampuloso [AJENA], el recuadro entero: LEX **«notablemente corta», «sumamente ágiles», «profundamente especializadas», «Su función principal radica en la convergencia»**, «centro neurológico de esta arquitectura comercial», «riesgos tácticos». MEC «reades», «narcotrafico», «canabis»; «es un reflejo… y que muestra» (sintaxis). Cero marcas de persona en 302 palabras.
- **L183** Recuadro *Layer Cake* L183-187: afecta a todo lo de dentro.
- **L181** CITA/⚠ «el único lugar donde se han asentado las cuatro grandes organizaciones italianas» y «buena parte del litoral se levantó con su dinero»: afirmaciones tajantes apoyadas en una sola fuente periodística (`deCastro_25`); comprobar que la fuente lo dice así.
- **L179** NEG «funciona menos como un cargo estable que como una función». MEC «facilmente».
- **L177** REG informe [AJENA]: «Esa alta prevalencia de redes fluidas y orgánicas refleja la difusión del modelo de negocio». CITA párrafo entero sin referencia («El análisis que se hace desde la criminología dibuja…»); por el contenido parece venir del SOCTA de L175.
- **L175** MEC «corre a cargo de **mafias** de empresas criminales»: contradice el párrafo anterior (¿«multitud»?); sigla SOCTA sin desarrollar. TRI «fluida, sistemática y motivada».
- **L173** DP + TRI «en sentido sociológico: carecen de fronteras…, de una estructura… y de un aparato…».
- **L159-171** MEC puntuación desigual tras el término en cursiva (dos puntos, punto, coma); L163 «*,con» sin espacio.
- **L151** MEC figura sin identificador `#fig-`.
- **L149** MEC **cita a mano** «Departamento de Justicia (2008)» sin clave.
- **L147** Sección «De las pirámides jerárquicas a las estructuras reticulares» (1.344 palabras): 30 marcas de persona por diez mil. Afecta a L149-187.
- **L143** MEC **«pero. es importante»** (punto suelto); «porque son el mercado» (es).
- **L141** LEX **«Es conveniente subrayar»**. MEC «estsas».
- **L138** ⚠ **Dato por cotejar:** José Alfredo Bea Gondar figura como «alcalde de Pontevedra (entre 1983 y 1985)»; mi recuerdo es que fue alcalde de O Grove, en la provincia de Pontevedra. No lo he verificado: cotéjalo tú. CITA el secuestro del libro y las condenas de 2005 y 2007 van sin referencia. TRI «poder, relato y arraigo social».
- **L136** MEC «el libro Fariña» sin cursiva. TRI «Concurrían el atraso económico, una tradición centenaria… y una tolerancia…».
- **L131** NEG ×2 en un párrafo: «no entra a través de un territorio cualquiera; arraiga donde», «no llega de fuera y se impone contra la comunidad, crece dentro de ella». MEC «ademas». «Sobre ese arraigo volveremos más adelante.» es puente tuyo.
- **L129** MEC **identificador `#fig-mafia` en la foto de la narcolancha**: parece heredado de otra figura.
- **L127** REM «tan viejos como porosas las fronteras». Pivote «Y no es solo el hachís.»: dudoso; hace de bisagra hacia el dato siguiente, más transición que giro.
- **L102** MEC «unica», «formulas», «más centrados» (centradas).
- **L100** MEC cita en bloque sin página (`Hoorens_25`).
- **L98** MEC «Y que solución» (qué).
- **L93** NEG/PIV **tres veces el mismo molde en un párrafo**: «Prohibir algo no lo hace desaparecer, solo traslada», «La prohibición no elimina el mercado, tan solo cambia su naturaleza» (pivote que gira: repite la frase anterior), «no lo fija la naturaleza de las cosas, lo decide el Estado». MEC «es como regular», «en torno a como» (cómo).
- **L89** Sección «Actividades…»: 160 marcas de persona por diez mil. Voz tuya; el problema es el molde negativo de L93 y L131.
- **L87** MEC «una de los mensajes». REM «Si el crimen organizado pesa poco en la economía, la delincuencia de las empresas legales pesa mucho más.» «queremos que os quede claro» es tuyo.
- **L81** NEG «no solo crece cuando el Estado la tolera, también cae cuando». MEC «estan»; «la tolera» (lo).
- **L77** DP «ejerce un doble efecto: intensifica la violencia y, a la vez, la inhibe».
- **L75** NEG «la amenaza creíble y la reputación más que el acto en sí». Bien citado.
- **L73** MEC **nota huérfana: un «1» suelto tras `[@Savona_16]1;`**, resto de una llamada de nota perdida; «es estima». PIV «Que son cosas muy distintas.» (fragmento).
- **L66** TRI «la cotidianidad, el pragmatismo despiadado y la disfunción psicológica». REG la lista del recuadro (L62-68) está en registro de reseña.
- **L60** LEX **«ha evolucionado sustancialmente»**.
- **L55** MEC coma: «que, sobre todo empieza».
- **L49** MEC «ilicitos». DP enumerativo, natural.
- **L45** MEC **«dejó, además vino a mostrar»** (dos verbos, resto de una corrección).
- **L41** NEG **«El problema no fue tanto esa descripción organizativa como la idea de que»**: «no tanto… como», cero casos en tu referencia y en los módulos de la UOC.
- **L38** REM de cierre del recuadro: «El personaje era real y violento. La aureola de omnipotencia, en cambio, se fabricó…».
- **L33** MEC **«insuabamos»** (insinuábamos).
- **L31** MEC «Para algunos autores… Para otras»: género incoherente dentro de la frase (el genérico del manual es el femenino). DP ×3, los tres enumerativos o explicativos; el tercero («un movimiento pendular: primero…») es el único con aire de bisagra.
- **L29** MEC cita en bloque sin página (`PaoliVanderBeken_14`); «ya... que».
- **L27** NEG aditiva «no solo es…, sino que». MEC «a las que se aluden».
- **L25** NEG «no vienen dados, se construyen socialmente».
- **L19** MEC «cada una de estos posibles sujetos». DP enumerativo.
- **L17** Pie de figura: «El chiste resume la tesis del capítulo. Elaboración usando ChatGPT.» Sin incidencia de voz; lo anoto por si quieres unificarlo con «Elaboración propia» de L197 y L522.
- **L15** MEC **falta el verbo**: «No todos los actores… del delito esa mala imagen»; «se les consideran». NEG «no lo cometen las mafias criminales. Lo cometen empresas legales».
- **L11** NEG + DP «ya no son las personas aisladas…, sino colectivos: grupos, organizaciones…». «Se organiza.» es un pivote sin negación que aterriza: no lo marco.
- **L9** Sección «Introducción»: 363 marcas de persona por diez mil, nominalización 28. Es tu voz.

## Los tics más repetidos

1. **Negación con coma y sin «sino», con verbo cualquiera** («no se cruza, se desplaza sola»; «no son excepciones, son un patrón»): **13 casos** (L25, L93 ×3, L131 ×2, L271, L305, L391, L400, L418, L426 ×2), 6,4 por diez mil. En tu corpus: 1,2 en la referencia del manual, 0 y 1,4 en los módulos de la UOC, 1,0 en la monografía, y casi todos esos son falsos positivos de la regex. Si se suma la variante de punto («no lo cometen las mafias. Lo cometen…»: L15, L328, L368, L518, L561) y los remates «X, no Y» (L394, L464, L622), pasan de veinte. Agravante: la idea central de tres tramos se enuncia dos o tres veces con ese mismo molde (L93, L301, L418-426).
2. ***Asimismo*: 6 casos** (L195, L528, L556, L563, L663, L677). Cero en tu referencia, cero en los módulos de la UOC y cero en las 136.000 palabras de la monografía. Es el marcador léxico más limpio que tengo, y cae siempre dentro de los bloques de registro de informe.
3. **Dos puntos de bisagra: 16** de los 29 dos puntos en prosa (L11, L77, L173, L277, L294, L345, L347, L349, L360, L373, L402, L414, L554, L563, L644, L661); los otros 13 abren una enumeración y son naturales. Tres de ellos van montados sobre una negación (L349, L373, L414): tipo B a 1,5 por diez mil frente a 0,7 en tu referencia y entre 0 y 0,2 reales en el resto.
4. **Tríadas y anáforas triples: unas 25**, de las que las más marcadas son las anáforas negativas (L193, L366, L480, L512) y los cierres de tres (L285, L396, L510). No tengo tasa tuya medida para esto: es recuento de lectura, no comparación.

Cerca de esos cuatro: remates con «dice mucho / dice bastante / algo que ver» (L373, L398, L446) y adverbios en *-mente* cultos (4 de la lista de la skill, L60, L186 ×2 y L502, más nueve de la misma familia: *profundamente* ×3, *intrínsecamente* ×2, *extremadamente*, *sistemáticamente*, *estrechamente*, *fuertemente*).

**Pivotes.** El script global encuentra 22 pivotes de frase larga a corta sobre 564 pares (3,9 %), tasa normal, y 5 con negación (23 %, frente a 10 % en tu referencia y 0-7 % en UOC y monografía). El detector por líneas, que lee también notas al pie y entradas de lista, encuentra 28, seis con negación. De esos seis, **tres giran** (L93, L366, L394), dos aterrizan con un dato (L368, L454) y uno es dudoso (L127). Fuera del detector, por no llegar la frase previa a 30 palabras: L400 y L596.

**Afirmaciones sin cita: 34 líneas** (L684, L686, L688, L692, L655, L627, L617, L594, L592, L590, L576, L563, L561, L532 ×2, L514, L502, L485, L454, L398, L394, L354, L347, L345, L343, L336, L334, L322, L318, L281, L249 ×2, L181, L177, L149, L138). La concentración está en los recuadros de corrupción policial (L338), crisis de 2008 (L558), Bruselas (L624) y USAID (L681), y en las secciones L326 y L574.

**Marcadores ⚠ degradados (U+FE0F suelto): 3**, en L256, L478 y L622; más uno visible en L263. **Carácter corrupto U+FFFD: 1**, en L561.

**Claves que no existen en el `.bib`: 4.** `Hobbs_` (L301), `EUTaxObs` (L398), `Parker_2012` (L524), `Jorgensen_2000` (L638 y L640). Notas al pie: todas las citadas están definidas y viceversa; la única huérfana es el «1» suelto de L73. Números a la inglesa: ninguno. Figuras sin identificador: L151, L600, L642; identificador equivocado: L129.

## Tasas del capítulo frente a las tuyas

Por diez mil palabras de prosa corrida, salvo donde se indica. Todo medido hoy con el mismo script.

| Rasgo | `grupos.qmd` | Tu referencia del manual | Tus módulos UOC y la monografía |
|---|---|---|---|
| Palabras de prosa medidas | 20.322 | 14.499 | 14.905 · 14.466 · 135.758 |
| Mediana de palabras por frase | **26** | 28 | 27 · 31 · 32 |
| Frases de más de 40 palabras | **18 %** | 26 % | 28 % · 30 % · 32 % |
| Nominalización por mil | 56,8 | 56,3 | 80,6 · 66,3 · 71,0 |
| Nominalización por párrafo largo, percentil 90 | 100 | 95 | — |
| Primera persona del plural | **80,7** | 114,5 | 32,9 · 32,5 · 25,6 |
| Segunda persona del plural | **3,4** | 12,4 | 0,7 · 0 · 0 |
| *asimismo* | **3,0** | 0 | 0 · 0 · 0 |
| Adverbios cultos (lista de la skill) | **2,0** | 0 | 0 · 0,7 · 0,4 |
| *constituye(n)* | 1,0 | 1,4 | 5,4 · 0,7 · 2,5 |
| *conviene* | 0,5 | 0,7 | 1,3 · 0,7 · 1,3 |
| *sin embargo* / *no obstante* | 5,4 / 3,4 | 1,4 / 2,8 | 4,7 / 4,7 · 10,4 / 6,2 · 10,7 / 4,3 |
| A: *no … sino* | 4,4 | 3,4 | 4,7 · 10,4 · 6,8 |
| B: *no … :* | **1,5** | 0,7 | 0 · 0 · 0,2 (tras quitar falsos positivos) |
| C ampliada: *no V, V* sin «sino» | **6,4** | 1,2 | 0 · 1,4 · 1,0 |
| *deja de ser … para / y se convierte* | 1,0 | 0 | 0,7 · 0 · 0 |
| Pivotes largo→corto | 3,9 % | 3,2 % | 3,9 % · 1,9 % · 3,3 % |
| Pivotes con negación | **23 %** | 10 % | 0 % · 0 % · 7 % |
| Pivotes que cierran párrafo | **27 %** | 60 % | 50 % · 67 % · 28 %* |
| Párrafos que pasan el filtro (umbral 80) | 7 de 157 | 7 de 119 | 9 de 82 · 1 de 73 · 13 de 634 |

\* En la monografía los párrafos los he reconstruido a partir del PDF; ese dato es poco fiable.

**Cómo leer la tabla.** La media del capítulo engaña: nominalización y pivotes salen normales porque conviven dos textos. Las secciones L9, L89, L358, L404 y L695 miden como tu referencia (persona entre 110 y 360, nominalización entre 28 y 46). Las secciones L303, L326, L516, L632 y L657, y los recuadros L183, L338, L558 y L681, miden como otro autor (persona entre 0 y 36, nominalización entre 70 y 101, y ahí caen los seis *asimismo*). El filtro automático con umbral 80 marca tantos párrafos tuyos como del capítulo, así que tal como está no discrimina; con el umbral en el percentil 90 de tu referencia medido con este script (95) quedan L336, L524, L540, L548 y L552.

Una salvedad sobre la primera persona: tus módulos de la UOC y la monografía están entre 26 y 33, de modo que una sección a 30 no prueba por sí sola que el texto no sea tuyo. Prueba que se aparta de la voz que fijaste para el manual. Donde coincide con *asimismo*, adverbios cultos, gerundios de cierre y párrafos sin una sola referencia, el diagnóstico de registro ajeno se sostiene por esos otros rasgos.

## Qué no he hecho

No he tocado `grupos.qmd` ni ningún otro fichero de la carpeta. No he verificado ninguna de las afirmaciones sin cita contra fuentes externas; las listo para que las cotejes. El dato de Bea Gondar (L138) es un recuerdo mío, no una comprobación. No he revisado que las 172 claves que sí existen correspondan a la obra correcta (los «falsos amigos» de `INSTRUCCIONES.md`); solo que existen. No he mirado las imágenes ni sus licencias.
