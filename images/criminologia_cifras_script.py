import json, textwrap, matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from matplotlib.ticker import FuncFormatter
from matplotlib.patches import Patch

d=json.load(open('/tmp/data.json'))
yrs=d['years']; x=list(range(len(yrs)))
short=[y if i in (0,4,9) else '' for i,y in enumerate(yrs)]
INK='#1c1c1c'; MUT='#6f6f6f'; GRID='#dedad4'; BG='#ffffff'
C1='#2f4858'; C2='#93a6b3'; C3='#c96f3f'; C4='#e0d3bd'
plt.rcParams.update({'font.family':'DejaVu Sans','text.color':INK,'axes.labelcolor':INK,
 'xtick.color':MUT,'ytick.color':MUT,'figure.facecolor':BG,'axes.facecolor':BG})
mil=FuncFormatter(lambda v,p: f'{int(v):,}'.replace(',','.'))
def clean(ax,axis='y'):
    for s in ('top','right'): ax.spines[s].set_visible(False)
    ax.spines['left'].set_color(GRID); ax.spines['bottom'].set_color(GRID)
    ax.set_axisbelow(True); ax.grid(axis=axis,color=GRID,lw=.7); ax.tick_params(length=0,labelsize=8.2)
def note(ax,t): ax.set_xlabel(t,size=7.3,color=MUT,loc='left',labelpad=7)
def head(ax,t): ax.set_title(t,size=11.2,weight='bold',loc='left',pad=10)

fig=plt.figure(figsize=(11.5,13.9),dpi=300,layout='constrained')
fig.get_layout_engine().set(hspace=.05,wspace=.07)
ax=fig.subplot_mosaic([['H','H'],['A','A'],['B','C'],['D','E'],['F','G']],
                      height_ratios=[.19,1.00,.88,.88,.88])

h=ax['H']; h.axis('off')
h.text(0,.94,'Los grados de criminología en España',size=20.5,weight='bold',va='top',transform=h.transAxes)
h.text(0,.30,'Diez cursos de expansión, estancamiento y desplazamiento hacia la privada y la enseñanza a distancia',
       size=9.6,color=MUT,va='top',transform=h.transAxes)
h.plot([0,1],[.0,.0],color=INK,lw=1.5,transform=h.transAxes,clip_on=False)

# 1 serie + universidades
a=ax['A']; clean(a)
a.stackplot(x,d['simples'],d['dobles'],colors=[C1,C3],edgecolor='white',lw=.7)
a.set_xticks(x); a.set_xticklabels(yrs,size=8.0); a.yaxis.set_major_formatter(mil)
a.set_ylim(0,31000); a.set_xlim(0,9)
a.axvspan(6,9,color='#f4efe7',zorder=0)
a.text(7.5,29100,'cuatro cursos planos',size=8.8,style='italic',color=MUT,ha='center')
a.text(7.5,27500,'24.289  →  24.076',size=8.4,color=MUT,ha='center')
a.annotate('máximo 2021-22',xy=(6,24289),xytext=(3.2,27600),size=8.4,color=INK,
           arrowprops=dict(arrowstyle='-',color=MUT,lw=.8,shrinkA=0))
a.text(.12,13100,'12.121',size=8.4,color=INK)
a.text(8.85,20381/2,'grados simples\n20.381',size=8.6,color='white',ha='right',va='center',weight='bold')
a.text(8.85,25400,'dobles grados 3.695',size=8.2,color=C3,ha='right',va='bottom')
a2=a.twinx(); a2.plot(x,d['univ'],color=INK,lw=1.4,ls=(0,(3,2)))
a2.set_ylim(20,52); a2.tick_params(length=0,labelsize=8,colors=MUT)
for s in ('top','left'): a2.spines[s].set_visible(False)
a2.spines['right'].set_color(GRID)
a2.text(8.9,37.5,'universidades que lo ofrecen',size=8,color=MUT,va='center',ha='right')
a2.set_xlim(0,9)
head(a,'1. La matrícula se duplicó y luego se detuvo; la oferta siguió creciendo')

# 2 peso de los dobles
b=ax['B']; clean(b)
b.fill_between(x,d['pct_dob'],10,color=C3,alpha=.16)
b.plot(x,d['pct_dob'],color=C3,lw=2.4,marker='o',ms=3.4)
b.set_xticks(x); b.set_xticklabels(short); b.set_ylim(10,17.2)
b.yaxis.set_major_formatter(FuncFormatter(lambda v,p:f'{v:.0f}%'))
b.text(.18,10.9,'11,4%',size=8.6,color=INK,weight='bold')
b.text(9,15.35+.45,'15,3%',size=8.6,color=INK,ha='right',weight='bold')
head(b,'2. El peso de los dobles grados\nno deja de crecer')
note(b,'Dobles grados como % de la matrícula total.\nDesde 2021-22 los simples caen y los dobles suben.')

# 3 parejas
c=ax['C']; clean(c,axis='x')
par=d['parejas'][::-1]; tot=sum(v for _,v in par)
c.barh(range(len(par)),[v for _,v in par],color=[C3 if n=='Derecho' else C2 for n,_ in par],height=.6)
c.set_yticks(range(len(par))); c.set_yticklabels([n for n,_ in par],size=8.4,color=INK)
c.set_xlim(0,3050); c.xaxis.set_major_formatter(mil); c.set_xticks([0,1000,2000,3000])
for i,(n,v) in enumerate(par): c.text(v+55,i,f'{v/tot*100:.0f}%',va='center',size=8,color=MUT)
head(c,'3. Dos de cada tres dobles grados\nson con Derecho')
note(c,'Composición de los 3.695 estudiantes de dobles\ngrados, curso 2024-25.')

# 4 pública/privada
e=ax['D']; clean(e)
e.plot(x,d['pub'],color=C1,lw=2.3,marker='o',ms=3.2); e.plot(x,d['priv'],color=C3,lw=2.3,marker='o',ms=3.2)
e.set_xticks(x); e.set_xticklabels(short); e.yaxis.set_major_formatter(mil); e.set_ylim(2500,19500)
e.text(4.1,16100,'Pública',size=8.8,color=C1,weight='bold'); e.text(4.6,4600,'Privada',size=8.8,color=C3,weight='bold')
e.text(9,14300,'−1.079\ndesde 2021-22',size=7.8,color=C1,ha='right',va='top')
e.text(9,8900,'+866\ndesde 2021-22',size=7.8,color=C3,ha='right',va='bottom')
head(e,'4. La privada gana lo que\npierde la pública')
note(e,'Titularidad de la universidad.')

# 5 modalidad
f=ax['E']; clean(f,axis='x')
par2=[('2015-16',d['dist'][0],d['mix'][0],d['pres'][0]),('2024-25',d['dist'][-1],d['mix'][-1],d['pres'][-1])]
for (et,p1,p2,p3),yp in zip(par2,[1,0]):
    t=p1+p2+p3; l=0
    for v,col in ((p1,C1),(p2,C2),(p3,C4)): f.barh(yp,v/t*100,left=l,color=col,height=.40); l+=v/t*100
    f.text(p1/t*100/2,yp,f'{p1/t*100:.0f}%',ha='center',va='center',size=10,color='white',weight='bold')
    f.text(p1/t*100+p2/t*100/2,yp,f'{p2/t*100:.0f}%',ha='center',va='center',size=7.6,color='white')
    f.text(100-p3/t*100/2,yp,f'{p3/t*100:.0f}%',ha='center',va='center',size=8.4,color=INK)
f.set_yticks([1,0]); f.set_yticklabels(['2015-16','2024-25'],size=9.4,color=INK)
f.set_ylim(-.5,2.25); f.set_xlim(0,100); f.set_xticks([0,50,100]); f.set_xticklabels(['0','50','100%'])
f.legend(handles=[Patch(facecolor=C1,label='no presenciales'),Patch(facecolor=C2,label='presenciales con oferta en línea'),
                  Patch(facecolor=C4,label='solo presenciales')],loc='upper left',frameon=False,fontsize=7.2,
        handlelength=1.1,handleheight=1.0,borderpad=0,labelspacing=.35,bbox_to_anchor=(-.005,1.03))
head(f,'5. Cuatro de cada diez estudiantes\nno pisan un aula')
note(f,'Horquilla a distancia: 22–35% en 2015-16 y 42–54% en 2024-25.')

# 6 concentración
g=ax['F']; clean(g,axis='x')
top=d['top'][:10][::-1]
nm={'Nacional de Educación a Distancia':'UNED','Oberta de Catalunya':'UOC','Internacional de La Rioja':'UNIR',
    'Europea Miguel de Cervantes':'E. Miguel de Cervantes','Internacional Valenciana':'VIU'}
names=[nm.get(n,n) for n,_ in top]; vals=[v for _,v in top]
g.barh(range(len(top)),vals,color=[C3 if n in ('UNED','UOC','UNIR','VIU') else C2 for n in names],height=.6)
g.set_yticks(range(len(top))); g.set_yticklabels(names,size=8.0,color=INK)
g.xaxis.set_major_formatter(mil); g.set_xlim(0,7400); g.set_xticks([0,2000,4000,6000])
for i,v in enumerate(vals): g.text(v+120,i,f'{v:,}'.replace(',','.'),va='center',size=7.6,color=MUT)
head(g,'6. La UNED, la UOC y la UNIR\nsuman el 38% del total')
note(g,'En naranja, universidades no presenciales.\nSolo grados simples, curso 2024-25.')

# 7 sociología
i=ax['G']; clean(i)
i.plot(x,d['total'],color=C1,lw=2.3,marker='o',ms=3.2); i.plot(x,d['soc'],color=C3,lw=2.3,marker='o',ms=3.2)
i.set_xticks(x); i.set_xticklabels(short); i.yaxis.set_major_formatter(mil); i.set_ylim(0,28000)
i.text(1.6,25400,'Criminología  24.076',size=8.6,color=C1,weight='bold')
i.text(1.6,6600,'Sociología  4.862',size=8.6,color=C3,weight='bold')
head(i,'7. La criminología se duplicó;\nla sociología perdió un 22%')
note(i,'Grados de sociología: 4.862 estudiantes en 18 universidades.')

fig.savefig('/tmp/fig/criminologia_cifras.png',dpi=300,facecolor=BG)
print('OK')
