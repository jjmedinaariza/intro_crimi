###############################################################################
## Miedo, medios y raíces del castigo: ¿qué predice la demanda de prisión?
## Análisis reproducible sobre la European Social Survey, ronda 5 (2010).
##
## Acompaña al Capítulo 9 (Respuestas sociales y culturales al delito),
## sección de punitivismo. Genera las dos figuras del capítulo:
##   - images/miedo-punitivismo-ess-2010.(png|svg)   -> #fig-miedo-punitivismo
##   - images/punitivismo-raices-ess-2010.(png|svg)  -> #fig-punitivismo-raices
##
## Variable dependiente (ambos modelos): preferir PRISIÓN (frente a otra
## sanción) para un reincidente de robo en casa (viñeta ESS: stcbg2t == 1).
##
## Modelo: regresión logística con EFECTOS FIJOS de país (factor(cntry)),
## ponderada con el peso post-estratificación (pspwght) y con errores
## estándar robustos agrupados por país (sandwich::vcovCL).
##
## Resultados esperados (para verificar la réplica):
##   Fig. 1 (miedo + medios + demografía):   N ~ 37.779, 26 países
##       Miedo (índice, por DT)  OR ~ 1,19  | Victimización  OR ~ 0,97 (n.s.)
##       Noticias TV  OR ~ 1,06 (+) | Radio  OR ~ 0,95 (-) | Prensa OR ~ 0,96 (-)
##   Fig. 2 (+ ideología, inmigración, confianza, valores de conservación):
##       N ~ 29.941, 26 países
##       Anti-inmigración OR ~ 1,20 | Miedo OR ~ 1,15 | Conservación OR ~ 1,13
##       Ideología (derecha) OR ~ 1,08 | Confianza interpersonal OR ~ 0,90
##       Confianza en la justicia OR ~ 1,01 (n.s.) | Victimización n.s.
##   Ajuste global modesto en ambos: pseudo-R2 de McFadden ~ 0,01-0,02.
##
## Requisitos: R >= 4.0 y los paquetes haven, dplyr, sandwich, lmtest, ggplot2.
###############################################################################

## ---- 0. Configuración -------------------------------------------------------
## Ajusta la ruta al fichero integrado de la ESS R5 (SPSS .sav, o el CSV):
data_path <- "ESS5e03_6.sav"          # alternativa: "ESS5e03_6.csv"
img_dir   <- "images"                  # carpeta de salida de las figuras

for (p in c("haven","dplyr","sandwich","lmtest","ggplot2"))
  if (!requireNamespace(p, quietly = TRUE))
    install.packages(p, repos = "https://cloud.r-project.org")
suppressPackageStartupMessages({library(haven); library(dplyr)
  library(sandwich); library(lmtest); library(ggplot2)})

## ---- 1. Lectura -------------------------------------------------------------
raw <- if (grepl("\\.sav$", data_path)) haven::read_sav(data_path) else
       read.csv(data_path, stringsAsFactors = FALSE)
raw <- as.data.frame(lapply(raw, function(x) as.numeric(haven::zap_labels(x))),
                     stringsAsFactors = FALSE)
raw$cntry <- if (is.numeric(raw$cntry)) as.character(raw$cntry) else raw$cntry
# (cntry puede venir como texto; lo recuperamos del original si hiciera falta)
cntry_txt <- if (grepl("\\.sav$", data_path))
  as.character(haven::as_factor(haven::read_sav(data_path)$cntry)) else raw$cntry
raw$cntry <- cntry_txt

## ---- 2. Recodificaciones ----------------------------------------------------
val   <- function(x, lo, hi) ifelse(x >= lo & x <= hi, x, NA)      # rango válido
mediaX<- function(x) ifelse(x == 66, 0, ifelse(x >= 0 & x <= 7, x, NA)) # 66=no consume
z     <- function(x) (x - mean(x, na.rm = TRUE)) / sd(x, na.rm = TRUE)

d <- with(raw, data.frame(
  cntry    = cntry,
  ## DV: prefiere prisión (viñeta del reincidente)
  prision  = ifelse(val(stcbg2t, 1, 5) == 1, 1, 0),
  ## Miedo: 2 de preocupación (1 casi siempre..4 nunca -> invertir) + inseguridad noche
  robo     = 5 - val(brghmwr, 1, 4),
  violento = 5 - val(crvctwr, 1, 4),
  noche    = val(aesfdrk, 1, 4),                 # 1 muy seguro..4 muy inseguro
  ## Experiencia
  victima  = ifelse(val(crmvct, 1, 2) == 1, 1, 0),
  ## Demografía
  mujer    = ifelse(val(gndr, 1, 2) == 2, 1, 0),
  edad     = val(agea, 14, 110),
  estudios = val(eisced, 1, 7),
  renta    = val(hinctnta, 1, 10),
  ## Medios (exposición a noticias; 66 = no consume ese medio -> 0)
  tvnews   = mediaX(tvpol), radionews = mediaX(rdpol), prensanews = mediaX(nwsppol),
  ## Ideología, inmigración, confianza
  derecha  = val(lrscale, 0, 10),                # 0 izq .. 10 der
  antiinmig= (30 - (val(imbgeco,0,10) + val(imueclt,0,10) + val(imwbcnt,0,10)))/3, # mayor=más anti
  confjust = val(trstlgl, 0, 10),                # confianza en el sistema legal
  confinter= val(ppltrst, 0, 10),                # confianza interpersonal
  w        = pspwght,
  stringsAsFactors = FALSE))

## ---- 2b. Valores de autoridad y orden: Conservación de Schwartz -------------
## 21 ítems (1 "se parece mucho a mí" .. 6 "nada"), se IPSATIZAN (se centra cada
## persona en su media de los 21) y se orientan a "mayor = más importante".
sch  <- c("ipcrtiv","imprich","ipeqopt","ipshabt","impsafe","impdiff","ipfrule",
          "ipudrst","ipmodst","ipgdtim","impfree","iphlppl","ipsuces","ipstrgv",
          "ipadvnt","ipbhprp","iprspot","iplylfr","impenv","imptrad","impfun")
cons <- c("ipfrule","ipbhprp","imptrad","impsafe","ipstrgv")   # conformidad+tradición+seguridad
S    <- sapply(raw[sch], function(x) ifelse(x >= 1 & x <= 6, x, NA))
pmean<- rowMeans(S, na.rm = TRUE); nvalid <- rowSums(!is.na(S))
ips  <- -(S - pmean)                                           # ipsatizado y orientado
d$conserva <- ifelse(nvalid >= 10 & rowSums(is.na(S[, cons])) == 0,
                     rowMeans(ips[, cons]), NA)

## alfa de Cronbach del índice de conservación (ítems invertidos)
alpha <- function(M){ M <- M[complete.cases(M), ]; k <- ncol(M)
  k/(k-1) * (1 - sum(apply(M, 2, var)) / var(rowSums(M))) }
cat(sprintf("Alfa Conservación (5 ítems) = %.3f\n", alpha(7 - S[, cons])))

## índice de miedo = media de las 3 z, re-estandarizada
d$miedo <- z(rowMeans(cbind(z(d$robo), z(d$violento), z(d$noche))))
## estandarizar continuas (OR "por desviación típica")
for (v in c("miedo","edad","estudios","renta","tvnews","radionews","prensanews",
            "derecha","antiinmig","confjust","confinter","conserva"))
  d[[v]] <- z(d[[v]])

## ---- 3. Ajuste con EF de país y ES robustos por clúster ---------------------
fit_or <- function(vars, data){
  f <- as.formula(paste("prision ~", paste(vars, collapse=" + "), "+ factor(cntry)"))
  s <- data[complete.cases(data[, c("prision","w","cntry", vars)]), ]
  m <- suppressWarnings(glm(f, data = s, family = binomial, weights = w))
  ct <- lmtest::coeftest(m, vcov = sandwich::vcovCL(m, cluster = s$cntry))
  m0 <- suppressWarnings(glm(prision ~ factor(cntry), data = s,
                             family = binomial, weights = w))
  mcf <- 1 - as.numeric(logLik(m)) / as.numeric(logLik(m0))
  list(n = nrow(s), k = length(unique(s$cntry)), mcfadden = mcf,
       tab = data.frame(term = rownames(ct), b = ct[,1], se = ct[,2],
                        or = exp(ct[,1]), lo = exp(ct[,1]-1.96*ct[,2]),
                        hi = exp(ct[,1]+1.96*ct[,2]), p = ct[,4],
                        row.names = NULL))
}

base <- c("miedo","victima","tvnews","radionews","prensanews",
          "mujer","edad","estudios","renta")
ext  <- c(base, "derecha","antiinmig","confjust","confinter","conserva")

fig1 <- fit_or(base, d)
fig2 <- fit_or(ext,  d)
cat(sprintf("\nFig.1  N=%d (%d países)  McFadden=%.3f\n", fig1$n, fig1$k, fig1$mcfadden))
print(subset(fig1$tab, term %in% base)[, c("term","or","lo","hi","p")], digits=3)
cat(sprintf("\nFig.2  N=%d (%d países)  McFadden=%.3f\n", fig2$n, fig2$k, fig2$mcfadden))
print(subset(fig2$tab, term %in% ext)[, c("term","or","lo","hi","p")], digits=3)

## ---- 4. Modelo secundario: DURACIÓN de la pena (tmprs, entre prisión) --------
dt <- d; dt$tmprs <- val(raw$tmprs, 1, 10)
st <- dt[complete.cases(dt[, c("tmprs","w","cntry", base)]), ]
mt <- lm(as.formula(paste("tmprs ~", paste(base, collapse=" + "), "+ factor(cntry)")),
         data = st, weights = w)
ctt <- lmtest::coeftest(mt, vcov = sandwich::vcovCL(mt, cluster = st$cntry))
cat(sprintf("\nDuración de la pena (N=%d): miedo b=%+.3f (p=%.1e); victima b=%+.3f (p=%.2f)\n",
            nrow(st), ctt["miedo",1], ctt["miedo",4], ctt["victima",1], ctt["victima",4]))

## ---- 5. Figuras (forest plots) ----------------------------------------------
forest <- function(tab, order, labs, cols, title, subtitle, file, h = 5.0){
  df <- tab[match(order, tab$term), ]
  df$lab <- factor(labs[order], levels = rev(labs[order]))
  df$col <- cols[order]
  p <- ggplot(df, aes(or, lab)) +
    geom_vline(xintercept = 1, linetype = "dashed", color = "grey50") +
    geom_errorbarh(aes(xmin = lo, xmax = hi, color = col), height = 0, linewidth = 1) +
    geom_point(aes(color = col), size = 2.8) +
    scale_color_identity() +
    scale_x_log10() +
    labs(title = title, subtitle = subtitle, y = NULL,
         x = "Odds ratio de preferir prisión (mayor = más punitivo)") +
    theme_minimal(base_size = 11) +
    theme(panel.grid.major.y = element_blank(),
          plot.title = element_text(face = "bold"),
          plot.subtitle = element_text(color = "grey35", size = 8.5))
  ggsave(file.path(img_dir, paste0(file, ".png")), p, width = 8.8, height = h, dpi = 300, bg = "white")
  ggsave(file.path(img_dir, paste0(file, ".svg")), p, width = 8.8, height = h, bg = "white")
}

## Figura 1
lab1 <- c(miedo="Miedo al delito (índice)", victima="Ha sido víctima (últ. 5 años)",
  tvnews="Noticias en televisión", radionews="Noticias en radio", prensanews="Noticias en prensa",
  mujer="Ser mujer", edad="Edad", estudios="Nivel de estudios", renta="Renta del hogar")
col1 <- c(miedo="#b2182b", victima="#2166ac", tvnews="#1b7837", radionews="#1b7837",
  prensanews="#1b7837", mujer="#6e6e6e", edad="#6e6e6e", estudios="#6e6e6e", renta="#6e6e6e")
forest(fig1$tab, names(lab1), lab1, col1,
  "¿Alimenta el miedo la demanda de castigo?",
  sprintf("Predictores de preferir la cárcel para el reincidente. ESS ronda 5 (2010), %d países, N = %s.\nRegresión logística con efectos fijos de país; continuas por desviación típica.",
          fig1$k, format(fig1$n, big.mark=".")),
  "miedo-punitivismo-ess-2010", h = 5.6)

## Figura 2
ord2 <- c("antiinmig","miedo","conserva","derecha","confinter","confjust","victima")
lab2 <- c(antiinmig="Actitud anti-inmigración", miedo="Miedo al delito (índice)",
  conserva="Valores de autoridad y orden", derecha="Ideología de derecha",
  confinter="Confianza interpersonal", confjust="Confianza en la justicia",
  victima="Ha sido víctima (últ. 5 años)")
col2 <- c(antiinmig="#762a83", miedo="#b2182b", conserva="#762a83", derecha="#762a83",
  confinter="#762a83", confjust="#762a83", victima="#2166ac")
forest(fig2$tab, ord2, lab2, col2,
  "Más allá del miedo: las raíces del castigo",
  sprintf("Modelo de la figura anterior ampliado. ESS ronda 5 (2010), %d países, N = %s.\nSe controlan además medios y perfil sociodemográfico (no mostrados).",
          fig2$k, format(fig2$n, big.mark=".")),
  "punitivismo-raices-ess-2010", h = 5.0)

cat("\nFiguras guardadas en", img_dir, "\n")
###############################################################################
