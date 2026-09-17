# -*- coding: utf-8 -*-
import matplotlib; matplotlib.use('Agg')
import matplotlib.pyplot as plt, squarify, textwrap
from matplotlib.patches import Patch

INK='#1c1c1c'; MUT='#6f6f6f'; BG='#ffffff'
C1='#2f4858'; C2='#93a6b3'; C3='#c96f3f'; C4='#e0d3bd'
plt.rcParams.update({'font.family':'DejaVu Sans','text.color':INK,'figure.facecolor':BG,'axes.facecolor':BG})

AMB=[("General",C1,[("Información sobre los derechos de la víctima",10091),("Entrevista de acogida",9593),
   ("Contactos de seguimiento telefónico",8417),("Información sobre justicia gratuita",7609),
   ("Contactos con otros organismos",6042),("Derivación a entidades y asociaciones",4300),
   ("Acompañamiento a denuncias, policía y juzgados",4265),("Contacto con abogados y procuradores",4000),
   ("Otras actuaciones generales",3910),("Entrevista de seguimiento personal",3536),
   ("Seguimiento por otras tecnologías",2525)]),
 ("Jurídico",C3,[("Asesoramiento jurídico en procesos penales",10499),("Colaboración con órganos judiciales y fiscalías",7893),
   ("Gestión de medidas de protección",4107),("Información y asesoramiento sobre denuncias",3036),
   ("Otras actuaciones jurídicas",2093),("Redacción de escritos e informes",359),
   ("Tramitación de ayudas de la Ley 35/1995",94)]),
 ("Psicológico",C2,[("Organización cognitiva y manejo de la ansiedad",3755),("Otras actuaciones psicológicas",3338),
   ("Terapia breve",3120),("Intervención en situaciones de crisis",2943),("Apoyo psicológico en el proceso penal",2844),
   ("Entrevistas de seguimiento y evolución",2620),("Preparación para la declaración y el juicio oral",2599),
   ("Información a otros organismos",217)]),
 ("Social",C4,[("Información y búsqueda de recursos sociales",5978),("Entrevistas de valoración social",5471),
   ("Otras actuaciones sociales",2675),("Orientación y derivación para empleo",1063),
   ("Elaboración de informes",644),("Solicitud de informes",343)])]
TOT=sum(v for _,_,it in AMB for _,v in it)
def mil(v): return f"{v:,}".replace(',','.')

fig=plt.figure(figsize=(12.6,8.6),dpi=300)
fig.text(.035,.965,'¿Qué hace un servicio de asistencia a víctimas?',size=19.5,weight='bold',va='top')
fig.text(.035,.912,'Las 129.979 actuaciones del Servicio de Asistencia a Víctimas en Andalucía durante 2025, por ámbito y tipo.\n'
                   'La superficie de cada rectángulo es proporcional al número de actuaciones.',
         size=9.8,color=MUT,va='top',linespacing=1.55)
fig.add_artist(plt.Line2D([.035,.965],[.862,.862],color=INK,lw=1.5))

leg=[Patch(facecolor=c,edgecolor='white',label=f"{n}   {mil(sum(v for _,v in it))}   {sum(v for _,v in it)/TOT*100:.0f} %")
     for n,c,it in AMB]
fig.legend(handles=leg,loc='upper left',bbox_to_anchor=(.032,.852),ncol=4,frameon=False,
           handlelength=1.1,handleheight=1.1,columnspacing=2.2,fontsize=10.2)

ax=fig.add_axes([.035,.085,.93,.715]); ax.axis('off'); ax.set_xlim(0,100); ax.set_ylim(-14,100)
outer=squarify.squarify(squarify.normalize_sizes([sum(v for _,v in it) for _,_,it in AMB],100,100),0,0,100,100)
def lum(c):
    c=c.lstrip('#'); r,g,b=[int(c[i:i+2],16) for i in (0,2,4)]
    return (.299*r+.587*g+.114*b)/255
sin_etiqueta=[]
for (name,col,items),R in zip(AMB,outer):
    sub=squarify.squarify(squarify.normalize_sizes([v for _,v in items],R['dx'],R['dy']),R['x'],R['y'],R['dx'],R['dy'])
    for (lab,v),r in zip(items,sub):
        ax.add_patch(plt.Rectangle((r['x'],r['y']),r['dx'],r['dy'],facecolor=col,edgecolor='white',lw=1.5))
        area=r['dx']*r['dy']
        col_txt='white' if lum(col)<.6 else INK
        if area<40 or r['dx']<5.5 or r['dy']<4.5:
            sin_etiqueta.append((lab,v,r,col)); continue
        fs=6.9 if area<110 else (7.8 if area<260 else 8.7)
        ax.text(r['x']+r['dx']/2,r['y']+r['dy']/2,
                textwrap.fill(lab,max(11,int(r['dx']*1.35)))+f"\n{mil(v)}",
                ha='center',va='center',size=fs,color=col_txt,linespacing=1.3)
    ax.add_patch(plt.Rectangle((R['x'],R['y']),R['dx'],R['dy'],facecolor='none',edgecolor='white',lw=4))

ley=[x for x in sin_etiqueta if 'Ley 35/1995' in x[0]]
if ley:
    _,v,r,_=ley[0]
    ax.annotate('Tramitación de ayudas\nde la Ley 35/1995:  94',
        xy=(r['x']+r['dx']/2,r['y']+r['dy']/2), xytext=(72,-9),
        textcoords='data', ha='center', va='top', size=8.6, color=INK,
        arrowprops=dict(arrowstyle='-', color=MUT, lw=.9, shrinkA=0, shrinkB=2,
                        connectionstyle='angle,angleA=0,angleB=90,rad=0'))
nota='Fuente: elaboración propia a partir de Consejería de Justicia, Administración Local y Función Pública, ' \
     '«Estadística de la asistencia a víctimas en Andalucía. Año 2025».'
if sin_etiqueta:
    nota='Sin rótulo por tamaño: '+'; '.join(f"{l} ({mil(v)})" for l,v,_,_ in sin_etiqueta)+'.\n'+nota
fig.text(.035,.012,nota,size=7.4,color=MUT,va='bottom',linespacing=1.6)
fig.savefig('/tmp/figs/sava-actuaciones-treemap.png',dpi=300,facecolor=BG)
print('ok. sin etiqueta:',sin_etiqueta)
# -*- coding: utf-8 -*-
import matplotlib; matplotlib.use('Agg')
import matplotlib.pyplot as plt
INK='#1c1c1c'; MUT='#6f6f6f'; GRID='#dedad4'; BG='#ffffff'
C1='#2f4858'; C2='#93a6b3'; C3='#c96f3f'; C4='#e0d3bd'
plt.rcParams.update({'font.family':'DejaVu Sans','text.color':INK,'figure.facecolor':BG,'axes.facecolor':BG})
def mil(v): return f"{v:,}".replace(',','.')
def pct(x): return f"{x:.1f}".replace('.',',')

D=[("Torturas y otros contra la integridad moral",6648),("Lesiones",5547),
   ("Contra la libertad y la seguridad",5538),("Contra la libertad sexual",2597),
   ("Contra la Administración de Justicia",1377),("Contra el patrimonio",506),
   ("Homicidio y sus formas",349),("Contra el honor",252),
   ("Contra las relaciones familiares",251),("Contra la intimidad",176),
   ("Contra las personas",105),("Trata de seres humanos",44),
   ("Delitos de odio (LGTBI y racistas)",75)]
TOT=23610
resto=TOT-sum(v for _,v in D)
D.append(("Resto de categorías",resto))
D=sorted(D,key=lambda x:x[1])
labs=[l for l,_ in D]; vals=[v for _,v in D]
top4={"Torturas y otros contra la integridad moral","Lesiones","Contra la libertad y la seguridad","Contra la libertad sexual"}
cols=[C3 if l=="Contra el patrimonio" else (C1 if l in top4 else C2) for l in labs]

fig=plt.figure(figsize=(11.6,7.6),dpi=300)
fig.text(.035,.965,'La asistencia a víctimas atiende, sobre todo, violencia interpersonal',size=18.4,weight='bold',va='top')
fig.text(.035,.905,'Delitos registrados en los expedientes del Servicio de Asistencia a Víctimas en Andalucía, 2025 (n = 23.610).',
         size=9.8,color=MUT,va='top')
fig.add_artist(plt.Line2D([.035,.965],[.868,.868],color=INK,lw=1.5))

ax=fig.add_axes([.285,.10,.695,.735])
y=range(len(labs))
ax.barh(list(y),vals,color=cols,height=.72)
for s in ('top','right','left'): ax.spines[s].set_visible(False)
ax.spines['bottom'].set_color(GRID)
ax.set_axisbelow(True); ax.grid(axis='x',color=GRID,lw=.7)
ax.set_yticks(list(y)); ax.set_yticklabels(labs,size=9.2)
ax.tick_params(length=0,labelsize=8.6); ax.set_xlim(0,10400)
ax.set_xticks([0,2000,4000,6000]); ax.set_xticklabels(['0','2.000','4.000','6.000'],size=8.4,color=MUT)
for i,(l,v) in enumerate(zip(labs,vals)):
    ax.text(v+120,i,f"{mil(v)}   {pct(v/TOT*100)} %",va='center',size=8.6,
            color=(C3 if l=="Contra el patrimonio" else INK),
            weight=('bold' if l=="Contra el patrimonio" else 'normal'))

ax.annotate('', xy=(8500,len(labs)-1.3), xytext=(8500,len(labs)-4.7),
            arrowprops=dict(arrowstyle='-',color=C1,lw=2.4))
ax.text(8720,len(labs)-3.0,'Las cuatro primeras\ncategorías suman\nel 86 % de los delitos',
        ha='left',va='center',size=9.2,color=C1,weight='bold',linespacing=1.45)
ax.text(3450,labs.index("Contra el patrimonio"),
        'Los delitos contra el patrimonio son el grueso de la\ndelincuencia registrada por la policía y aquí apenas el 2 %',
        va='center',ha='left',size=9.2,color=C3,linespacing=1.5)
fig.text(.035,.022,'Fuente: elaboración propia a partir de Consejería de Justicia, Administración Local y Función Pública, '
                   '«Estadística de la asistencia a víctimas en Andalucía. Año 2025», tabla 3.2.4.',size=7.4,color=MUT)
fig.savefig('/tmp/figs/sava-concentracion-delitos.png',dpi=300,facecolor=BG)
print('fig2 ok. resto =',resto)
# -*- coding: utf-8 -*-
import matplotlib; matplotlib.use('Agg')
import matplotlib.pyplot as plt
INK='#1c1c1c'; MUT='#6f6f6f'; GRID='#dedad4'; BG='#ffffff'
C1='#2f4858'; C2='#93a6b3'; C3='#c96f3f'; C4='#e0d3bd'
plt.rcParams.update({'font.family':'DejaVu Sans','text.color':INK,'figure.facecolor':BG,'axes.facecolor':BG})
def pc(x): return f"{x:.1f}".replace('.',',')+' %'

FILAS=[("Mujeres",90.1,91.2),("Personas menores de 18 años",13.4,7.3),("Personas extranjeras",16.9,55.7)]
AND_YRS=[2010+i for i in range(15)]
CAT_EXT=[35.5,34.9,34.9,34.7,34.2,34.0,37.1,36.7,38.5,43.1,47.6,49.4,52.4,56.2,55.7]

fig=plt.figure(figsize=(12.2,7.0),dpi=300)
fig.text(.035,.955,'Dos servicios del mismo tamaño que atienden a poblaciones distintas',size=18.2,weight='bold',va='top')
fig.text(.035,.885,'Perfil de las personas atendidas por los servicios de asistencia a víctimas de Andalucía (16.172 expedientes, 2025)\n'
                   'y de Cataluña (16.209 víctimas atendidas, 2024). Solo se comparan las tres variables que ambas comunidades publican.',
         size=9.7,color=MUT,va='top',linespacing=1.55)
fig.add_artist(plt.Line2D([.035,.965],[.822,.822],color=INK,lw=1.5))

ax=fig.add_axes([.245,.345,.45,.40])
for i,(lab,a,c) in enumerate(FILAS):
    y=len(FILAS)-1-i
    ax.plot([a,c],[y,y],color=GRID,lw=3.2,zorder=1,solid_capstyle='round')
    ax.scatter([a],[y],s=210,color=C1,zorder=3)
    ax.scatter([c],[y],s=210,color=C3,zorder=3)
    lo,hi=(a,c) if a<c else (c,a)
    ax.text(lo-2.2,y,pc(lo),ha='right',va='center',size=9.4,weight='bold',color=(C1 if a<c else C3))
    ax.text(hi+2.2,y,pc(hi),ha='left',va='center',size=9.4,weight='bold',color=(C3 if a<c else C1))
    ax.text(-5,y,lab,ha='right',va='center',size=10.2)
for s in ('top','right','left'): ax.spines[s].set_visible(False)
ax.spines['bottom'].set_color(GRID)
ax.set_xlim(-4,100); ax.set_ylim(-.7,len(FILAS)-.3)
ax.set_yticks([]); ax.set_xticks([0,25,50,75,100])
ax.set_xticklabels(['0','25','50','75','100 %'],size=8.6,color=MUT)
ax.tick_params(length=0); ax.set_axisbelow(True); ax.grid(axis='x',color=GRID,lw=.7)
h1=ax.scatter([],[],s=150,color=C1,label='Andalucía'); h2=ax.scatter([],[],s=150,color=C3,label='Cataluña')
fig.legend(handles=[h1,h2],loc='upper left',bbox_to_anchor=(.245,.805),ncol=2,frameon=False,
           fontsize=10.6,handletextpad=.4,columnspacing=2.6)

ax2=fig.add_axes([.775,.345,.195,.32])
ax2.plot(AND_YRS,CAT_EXT,color=C3,lw=2.3)
ax2.scatter([AND_YRS[-1]],[CAT_EXT[-1]],s=48,color=C3,zorder=3)
ax2.text(AND_YRS[-1]-.4,CAT_EXT[-1]+4.5,'55,7 %',ha='right',size=8.8,color=C3,weight='bold')
ax2.text(AND_YRS[0]+.3,CAT_EXT[0]-7.5,'35,5 %',ha='left',size=8.8,color=C3)
for s in ('top','right','left'): ax2.spines[s].set_visible(False)
ax2.spines['bottom'].set_color(GRID)
ax2.set_ylim(0,72); ax2.set_xlim(2009.4,2024.8)
ax2.set_xticks([2010,2016,2024]); ax2.set_xticklabels(['2010','2016','2024'],size=8.4,color=MUT)
ax2.set_yticks([]); ax2.tick_params(length=0)
ax2.text(0,1.30,'En Cataluña la proporción de víctimas\nextranjeras se ha duplicado desde 2010',
         transform=ax2.transAxes,size=9.3,color=INK,va='top',linespacing=1.45)

fig.text(.035,.215,'Las dos comunidades publican estadística oficial anual, pero casi todo lo demás que difunden es distinto: Andalucía detalla el tipo de delito,\n'
                   'el perfil socioeconómico y la relación con quien agrede; Cataluña, las actuaciones por víctima, los acompañamientos a juicio y las órdenes\n'
                   'de protección en seguimiento. Ninguna de las dos permite responder las preguntas que responde la otra.',
         size=9.0,color=INK,va='top',linespacing=1.7)
fig.text(.035,.022,'Fuente: elaboración propia a partir de Consejería de Justicia, Administración Local y Función Pública (Andalucía, 2025) y '
                   'Departament de Justícia i Qualitat Democràtica (Cataluña, 2024).',size=7.4,color=MUT)
fig.savefig('/tmp/figs/sava-oav-comparacion.png',dpi=300,facecolor=BG)
print('fig3 ok')
