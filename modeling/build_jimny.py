"""Original five-door Jimny planning asset, authored and exported in Blender.

Run: Blender --background --python modeling/build_jimny.py
Coordinates in helper calls: x = width, h = height, z = forward, all in metres.
The glTF exporter maps Blender Z-up into the website's Y-up coordinates.
No third-party vehicle mesh, photo texture, or manufacturer CAD is included.
"""
import bpy
import bmesh
import math
import os
from mathutils import Vector, Matrix

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, 'assets', 'models')
os.makedirs(OUT, exist_ok=True)
for obj in list(bpy.data.objects):
    bpy.data.objects.remove(obj, do_unlink=True)


def pos(x, h, z):
    return (x, -z, h)


def material(name, color, rough=.4, metal=0, coat=0, alpha=1):
    mat = bpy.data.materials.new(name)
    mat.use_nodes = True
    bsdf = mat.node_tree.nodes.get('Principled BSDF')
    bsdf.inputs['Base Color'].default_value = (*color, alpha)
    bsdf.inputs['Roughness'].default_value = rough
    bsdf.inputs['Metallic'].default_value = metal
    bsdf.inputs['Coat Weight'].default_value = coat
    bsdf.inputs['Coat Roughness'].default_value = .12
    bsdf.inputs['Alpha'].default_value = alpha
    mat.diffuse_color = (*color, alpha)
    if alpha < 1:
        mat.surface_render_method = 'DITHERED'
    return mat


paint = material('BodyPaint', (.72, .73, .62), .28, .025, .85)
roof = material('RoofPaint', (.72, .73, .62), .28, .025, .85)
trim = material('MouldedPlastic', (.018, .021, .023), .72)
rubber = material('TyreRubber', (.013, .016, .017), .81)
glass = material('WindowGlass', (.038, .065, .073), .055, .02, 1, .82)
chrome = material('BrightChrome', (.72, .75, .77), .16, 1)
alloy = material('MachinedAlloy', (.105, .12, .135), .30, .82)
gunmetal = material('WheelGunmetal', (.075, .082, .091), .35, .72)
grillemetal = material('GrilleAnthracite', (.12, .135, .15), .3, .65)
glossblack = material('GlossBlackGrille', (.013, .017, .020), .17, .22, 1)
badgewhite = material('GrilleLettering', (.76, .79, .81), .27, .35, .6)
brake = material('BrakeSteel', (.19, .21, .22), .47, .88)
seat = material('WovenCabinFabric', (.038, .043, .048), .93)
black = material('IntakeShadow', (.004, .006, .007), .82)
red = material('RearLampRed', (.42, .009, .004), .24, .12, 1)
amber = material('IndicatorAmber', (.75, .19, .012), .20, .14, 1)
lens = material('LampLens', (.72, .81, .84), .045, .02, 1, .13)
lamp = material('LampEmitter', (.85, .90, 1), .16, .6)
caliper = material('CaliperMetal', (.12, .13, .14), .49, .65)

groups = {}
for name in ['BodyShell', 'RoofShell', 'OEMGrille', 'BlockGrille', 'RhinoGrille', 'ScriptGrille', 'GlossGrille', 'DeleteGrille', 'ClassicGrille', 'MeshGrille', 'StockBumper', 'StockWheels', 'AllTerrainWheels', 'Cabin', 'SpareWheel']:
    root = bpy.data.objects.new(name, None)
    bpy.context.collection.objects.link(root)
    groups[name] = root


def finish(obj, name, mat, group='BodyShell', bevel=0, smooth=False):
    obj.name = name
    obj.data.materials.append(mat)
    obj.parent = groups[group]
    if bevel:
        mod = obj.modifiers.new('Manufactured edge radii', 'BEVEL')
        mod.width = bevel
        mod.segments = 2
        mod.limit_method = 'ANGLE'
    if smooth or bevel:
        for poly in obj.data.polygons:
            poly.use_smooth = True
    if bevel and not smooth:
        mod = obj.modifiers.new('Weighted panel normals', 'WEIGHTED_NORMAL')
        mod.keep_sharp = True
        mod.weight = 50
    return obj


def cube(name, size, at, mat, group='BodyShell', bevel=.012):
    w,h,d=size
    verts=[(x*w/2,y*h/2,z*d/2) for x,y,z in [(-1,-1,-1),(1,-1,-1),(1,1,-1),(-1,1,-1),(-1,-1,1),(1,-1,1),(1,1,1),(-1,1,1)]]
    obj=geometry(name,verts,[(0,3,2,1),(4,5,6,7),(0,1,5,4),(1,2,6,5),(2,3,7,6),(3,0,4,7)],mat,group,bevel)
    obj.location=pos(*at)
    return obj


def geometry(name, vertices, faces, mat, group='BodyShell', bevel=0, smooth=False):
    data = bpy.data.meshes.new(name)
    data.from_pydata([pos(*v) for v in vertices], [], faces)
    data.update()
    bm = bmesh.new()
    bm.from_mesh(data)
    bmesh.ops.recalc_face_normals(bm, faces=list(bm.faces))
    bm.to_mesh(data)
    bm.free()
    obj = bpy.data.objects.new(name, data)
    bpy.context.collection.objects.link(obj)
    return finish(obj, name, mat, group, bevel, smooth)


def prism_side(name, points, side, mat, group='BodyShell', inset=0, thickness=.016, bevel=.006):
    def outer(h):
        return side * (.746 - max(0, h-1.14)*.105 + inset)
    n = len(points)
    verts = [(outer(h), h, z) for z, h in points] + [(outer(h)-side*thickness, h, z) for z, h in points]
    faces = [tuple(range(n)), tuple(reversed(range(n, n*2)))]
    faces += [(i, (i+1)%n, (i+1)%n+n, i+n) for i in range(n)]
    return geometry(name, verts, faces, mat, group, bevel)


def cylinder(name, r, depth, at, mat, axis='front', group='BodyShell', vertices=48):
    data=bpy.data.meshes.new(name)
    vs=[(math.cos(i/vertices*math.tau)*r,math.sin(i/vertices*math.tau)*r,d) for d in [-depth/2,depth/2] for i in range(vertices)]
    faces=[tuple(reversed(range(vertices))),tuple(range(vertices,vertices*2))]
    faces += [(i,(i+1)%vertices,(i+1)%vertices+vertices,i+vertices) for i in range(vertices)]
    data.from_pydata(vs,[],faces);data.update()
    obj=bpy.data.objects.new(name,data);bpy.context.collection.objects.link(obj);obj.location=pos(*at)
    if axis == 'front':
        obj.rotation_euler.x = math.pi/2
    elif axis == 'side':
        obj.rotation_euler.y = math.pi/2
    return finish(obj, name, mat, group, .0025, True)


def tube(name, points, radius, mat, group='BodyShell', closed=False):
    data = bpy.data.curves.new(name, 'CURVE')
    data.dimensions = '3D'
    data.resolution_u = 1
    data.bevel_depth = radius
    data.bevel_resolution = 1
    poly = data.splines.new('POLY')
    poly.points.add(len(points)-1)
    for v, p in zip(poly.points, points):
        v.co = (*pos(*p), 1)
    poly.use_cyclic_u = closed
    obj = bpy.data.objects.new(name, data)
    bpy.context.collection.objects.link(obj)
    obj.parent = groups[group]
    obj.data.materials.append(mat)
    return obj


def ring(name, outer, inner, depth, at, mat, axis='front', group='BodyShell', segments=48):
    vertices, faces = [], []
    for d, r in [(-depth/2,outer),(depth/2,outer),(-depth/2,inner),(depth/2,inner)]:
        for i in range(segments):
            a = i/segments*math.tau
            u, v = math.cos(a)*r, math.sin(a)*r
            if axis == 'side':
                vertices.append((at[0]+d, at[1]+u, at[2]+v))
            else:
                vertices.append((at[0]+u, at[1]+v, at[2]+d))
    for i in range(segments):
        j = (i+1)%segments
        faces += [(i,j,j+segments,i+segments),(i+segments,j+segments,j+segments*3,i+segments*3),
                  (i+segments*2,j+segments*2,j,i),(i+segments*3,j+segments*3,j+segments*2,i+segments*2)]
    return geometry(name, vertices, faces, mat, group, 0, True)


def window_frame(name, w, h, radius, wall, depth, at, mat, group='BodyShell'):
    def outline(w,h,r):
        points=[]
        for cx,cy,start in [(w/2-r,h/2-r,0),(-w/2+r,h/2-r,90),(-w/2+r,-h/2+r,180),(w/2-r,-h/2+r,270)]:
            for i in range(7):
                a=math.radians(start+i*15)
                points.append((cx+math.cos(a)*r,cy+math.sin(a)*r))
        return points
    outer=outline(w,h,radius);inner=outline(w-wall*2,h-wall*2,max(.005,radius-wall));n=len(outer)
    vs=[(x,y,z) for z,points in [(-depth/2,outer),(depth/2,outer),(-depth/2,inner),(depth/2,inner)] for x,y in points]
    faces=[]
    for i in range(n):
        j=(i+1)%n
        faces += [(i,j,j+n,i+n),(i+n,j+n,j+n*3,i+n*3),(i+n*2,j+n*2,j,i),(i+n*3,j+n*3,j+n*2,i+n*2)]
    obj=geometry(name,vs,faces,mat,group,bevel=.002)
    obj.location=pos(*at)
    return obj


def body_width(h):
    # The pressed lower shoulder and rolled waist catch long reflections.
    profile=[(.45,.721),(.50,.736),(.68,.749),(.705,.758),(.724,.758),
             (.745,.741),(.80,.743),(.99,.749),(1.08,.746),(1.12,.739),(1.18,.724)]
    for (a,x),(b,y) in zip(profile,profile[1:]):
        if h<=b:return x+(y-x)*max(0,(h-a)/(b-a))
    return profile[-1][1]


def body_panel(side):
    # A connected, gently crowned sheet with open arches; no overlapping door boxes.
    zs=sorted(set([-1.76+i*3.56/112 for i in range(113)]+[-.40,-.38,.64,.68]))
    levels=[0,.06,.14,.22,.29,.34,.38,.48,.64,.80,.93,1]
    vertices=[]
    for z in zs:
        low=.46
        for center in [-1.295,1.295]:
            dz=z-center
            arch=[(-.40,.40),(-.385,.53),(-.35,.66),(-.28,.75),(-.18,.795),(0,.815),
                  (.18,.795),(.28,.75),(.35,.66),(.385,.53),(.40,.40)]
            for (a,ha),(b,hb) in zip(arch,arch[1:]):
                if a<=dz<=b:low=max(low,ha+(hb-ha)*(dz-a)/(b-a)+.012)
        top=1.15-max(0,z-.68)*.040
        for t in levels:
            h=low+(top-low)*t
            vertices.append((side*(body_width(h)-max(0,abs(z)-1.69)*.20),h,z))
    faces=[]
    for i in range(len(zs)-1):
        for j in range(len(levels)-1):
            a=i*len(levels)+j;faces.append((a,a+len(levels),a+len(levels)+1,a+1))
    obj=geometry('Crowned side pressing with open wheel wells',vertices,faces,paint,smooth=True)
    solid=obj.modifiers.new('Steel panel return','SOLIDIFY');solid.thickness=.012


def rounded_polygon(points, radius=.035):
    result=[]
    for i,p in enumerate(points):
        p=Vector(p);before=Vector(points[i-1]);after=Vector(points[(i+1)%len(points)])
        entry=p+(before-p).normalized()*min(radius,(before-p).length*.25)
        exit=p+(after-p).normalized()*min(radius,(after-p).length*.25)
        for step in range(7):
            t=step/6;v=(1-t)**2*entry+2*(1-t)*t*p+t*t*exit
            result.append(tuple(v))
    return result


for side in [-1, 1]:
    body_panel(side)
    for front, rear in [(.64,-.38),(-.40,-1.25)]:
        tube('Door shut line',[(side*(body_width(h)+.001),h,front) for h in [.48,.50,.68,.705,.724,.745,.80,.99,1.08,1.12,1.15]],.0015,black)
        tube('Lower door seam',[(side*(body_width(.48)+.001),.48,front-.02),(side*(body_width(.48)+.001),.48,rear+.01)],.0015,black)
        tube('Window pillar door seam',[(side*(.746-max(0,h-1.14)*.105)+side*.001,h,front-(.15 if front>0 else 0)*(h-1.14)/.525) for h in [1.14,1.4,1.665]],.0013,black)
        z = rear+.15
        cube('Recessed door handle bowl',(.012,.048,.132),(side*.748,1.063,z),trim,bevel=.018)
        cube('Body colour pull handle',(.026,.021,.112),(side*.761,1.080,z+.002),paint,bevel=.008)
        cylinder('Door lock barrel',.008,.006,(side*.766,1.060,z-.072),chrome,'side',vertices=16)
    cube('Sill moulding',(.055,.064,1.83),(side*.748,.463,-.11),trim,bevel=.016)
    # Moulded arch tapers from its body seam to a broad, curved shoulder.
    for center in [-1.295,1.295]:
        outer=[(-.47,.38),(-.47,.57),(-.425,.76),(-.34,.875),(-.21,.918),
               (0,.928),(.21,.918),(.34,.875),(.425,.76),(.47,.57),(.47,.38)]
        inner=[(-.40,.38),(-.385,.53),(-.35,.66),(-.28,.75),(-.18,.795),
               (0,.815),(.18,.795),(.28,.75),(.35,.66),(.385,.53),(.40,.38)]
        vs=[]
        for t,width in [(0,.746),(.20,.782),(.68,.817),(.91,.820),(1,.807)]:
            for (zo,ho),(zi,hi) in zip(outer,inner):
                vs.append((side*width,ho+(hi-ho)*t,center+zo+(zi-zo)*t))
        faces=[]
        for row in range(4):
            for i in range(10):
                a=row*11+i;faces.append((a,a+1,a+12,a+11))
        obj=geometry('Contoured moulded wheel arch',vs,faces,trim,smooth=True)
        mod=obj.modifiers.new('Arch inner return','SOLIDIFY');mod.thickness=.008
        tube('Arch to body seam',[(side*.747,h,center+z) for z,h in outer],.0018,black)
        lining=[(side*width,h,center+z) for width in [.60,.825] for z,h in inner]
        geometry('Dark wheel well inner tub',lining,[(i,i+1,i+12,i+11) for i in range(10)],black,smooth=True)
        prism_side('Wheel well shadow backing',[(center+z,h+.015) for z,h in inner],side,black,inset=-.16,thickness=.006,bevel=0)
    cylinder('Side repeater bezel',.026,.014,(side*.758,1.035,1.105),trim,'side',vertices=32)
    cylinder('Amber side repeater',.021,.017,(side*.767,1.035,1.105),amber,'side',vertices=32)

# Clamshell bonnet: a crowned surface with real shoulder creases and rolled front lip.
xs=[-.744,-.727,-.685,-.555,-.50,-.44,0,.44,.50,.555,.685,.727,.744]
zs=[.69,.72,.80,1.04,1.47,1.68,1.765,1.79]
verts=[]
for z in zs:
    for x in xs:
        crown=.018*(1-(abs(x)/.75)**2)
        shoulder=.014*math.exp(-((abs(x)-.53)/.055)**2)
        frontdrop=max(0,z-1.69)*.16
        h=1.15+crown+shoulder-frontdrop
        verts.append((x,h,z))
faces=[]
for j in range(len(zs)-1):
    for i in range(len(xs)-1):
        n=j*len(xs)+i
        faces.append((n,n+1,n+1+len(xs),n+len(xs)))
bonnet=geometry('Crowned clamshell bonnet',verts,faces,paint,bevel=0,smooth=True)
mod=bonnet.modifiers.new('Bonnet sheet thickness','SOLIDIFY');mod.thickness=.025
mod=bonnet.modifiers.new('Rolled bonnet edges','BEVEL');mod.width=.008;mod.segments=3
for side in [-1,1]:
    vs=[]
    for z in zs:
        upper=1.15+.018*(1-(.744/.75)**2)-max(0,z-1.69)*.16
        lower=1.15-max(0,z-.68)*.040
        vs.extend([(side*.744,upper,z),(side*.746,lower,z)])
    geometry('Clamshell bonnet side return',vs,[(i*2,i*2+1,i*2+3,i*2+2) for i in range(len(zs)-1)],paint,smooth=True)
    tube('Bonnet panel shut line',[(side*.748,1.15-max(0,z-.68)*.040-.0015,z) for z in zs],.0013,black)
cube('Bonnet nose rolled edge',(1.485,.031,.045),(0,1.126,1.79),paint,bevel=.014)
cube('Cowl and scuttle',(1.45,.042,.16),(0,1.163,.635),paint,bevel=.012)
for x in [-.43,-.38,-.33,.30,.35,.40]:
    cube('Scuttle ventilation slots',(.011,.005,.07),(x,1.187,.627),black,bevel=.002)

# Cabin ring is formed from real pillars and window openings.
for side in [-1,1]:
    panel=prism_side('Continuous cabin side with window apertures',[(.66,1.14),(.51,1.68),(-1.76,1.68),(-1.76,1.14)],side,roof,thickness=.025,bevel=0)
    prism_side('Roof edge rail',[(.54,1.63),(.53,1.69),(-1.74,1.69),(-1.74,1.63)],side,roof,'RoofShell',thickness=.04,bevel=.012)
    windows=[[(.575,1.188),(.473,1.603),(-.305,1.603),(-.305,1.218),(.29,1.218),(.35,1.188)],
             [(-.468,1.218),(-.468,1.603),(-1.173,1.603),(-1.173,1.218)],
             [(-1.344,1.218),(-1.344,1.603),(-1.638,1.603),(-1.650,1.218)]]
    for points in windows:
        boundary=rounded_polygon(points,.052)
        cutter=prism_side('Temporary rounded window cutter',boundary,side,black,inset=.05,thickness=.12,bevel=0)
        boolean=panel.modifiers.new('True window aperture','BOOLEAN');boolean.operation='DIFFERENCE';boolean.object=cutter
        bpy.context.view_layer.objects.active=panel
        bpy.ops.object.modifier_apply(modifier=boolean.name)
        bpy.data.objects.remove(cutter,do_unlink=True)
        prism_side('Rounded flush side glass',boundary,side,glass,inset=-.005,thickness=.003,bevel=0)
        tube('Window rubber seal',[(side*(.746-max(0,h-1.14)*.105),h,z) for z,h in boundary],.006,trim,closed=True)
    bevel=panel.modifiers.new('Rolled window aperture edge','BEVEL');bevel.width=.004;bevel.segments=2
    tube('Rain gutter',[(side*.710,1.675,.54),(side*.710,1.702,.46),(side*.710,1.702,-1.68),(side*.710,1.675,-1.76)],.009,trim)
    cube('Mirror mounting triangle',(.035,.16,.11),(side*.754,1.247,.575),trim,bevel=.015)
    cube('Mirror neck',(.14,.039,.05),(side*.817,1.257,.577),trim,bevel=.014)
    cube('Rounded mirror housing',(.155,.182,.135),(side*.893,1.30,.582),glossblack,bevel=.032)
    cube('Rear facing mirror glass',(.121,.145,.008),(side*.894,1.303,.512),chrome,bevel=.023)

# Crowned roof, pressed roof channels and curved front/back window frames.
roofverts=[]
rxs=sorted(set([-.716+i*1.432/80 for i in range(81)]+[-.70,-.59,-.47,-.235,0,.235,.47,.59,.70]))
rzs=[-1.76,-1.725,-1.65,-1.56,-1.50,-1.3,-.9,-.5,0,.25,.32,.40,.46,.52,.56]
for z in rzs:
    for x in rxs:
        h=1.695+.026*(1-(x/.73)**2)-max(0,abs(z+.60)-1.10)*.15
        rib=sum(.0024*math.exp(-((x-c)/.016)**2) for c in [-.47,-.235,0,.235,.47])
        h+=rib*min(1,max(0,(z+1.56)/.08))*min(1,max(0,(.40-z)/.08))
        roofverts.append((x,h,z))
rooffaces=[]
for j in range(len(rzs)-1):
    for i in range(len(rxs)-1):
        n=j*len(rxs)+i
        rooffaces.append((n,n+1,n+len(rxs)+1,n+len(rxs)))
obj=geometry('Crowned pressed steel roof',roofverts,rooffaces,roof,'RoofShell',smooth=True)
mod=obj.modifiers.new('Roof thickness','SOLIDIFY');mod.thickness=.024
mod=obj.modifiers.new('Roof roll','BEVEL');mod.width=.008;mod.segments=3
cube('Windshield upper header',(1.39,.061,.075),(0,1.668,.552),roof,bevel=.014)
front=window_frame('Open windscreen rubber surround',1.385,.475,.035,.018,.025,(0,1.416,.626),trim)
front.rotation_euler.x=math.radians(-10)
front=cube('Laminated windscreen',(1.315,.411,.011),(0,1.421,.649),glass,bevel=.025)
front.rotation_euler.x=math.radians(-10)
for side in [-1,1]:
    tube('Painted A pillar',[(side*.716,1.181,.688),(side*.699,1.647,.538)],.025,roof)
for x in [-.45,.18]:
    tube('Wiper arm',[(x,1.194,.711),(x+.075,1.23,.702)],.005,trim)
    tube('Wiper blade',[(x-.11,1.233,.705),(x+.22,1.247,.700)],.008,trim)

# Rear door, window, washer and latch.
cube('Tailgate lower pressing',(1.46,.57,.055),(0,.90,-1.745),paint,bevel=.03)
cube('Rear window upper header',(1.385,.061,.07),(0,1.668,-1.742),roof,bevel=.014)
window_frame('Open rear window frame',1.385,.48,.035,.04,.041,(0,1.414,-1.748),paint)
window_frame('Tailgate window seal',1.28,.37,.03,.016,.016,(0,1.426,-1.774),trim)
cube('Tailgate tinted glass',(1.24,.332,.017),(0,1.43,-1.786),glass,bevel=.027)
cube('High brake light',(.23,.045,.023),(0,1.598,-1.800),red,bevel=.009)
tube('Rear wiper',[(.43,1.292,-1.801),(.05,1.298,-1.805)],.007,trim)
cube('Tailgate door handle',(.14,.035,.025),(-.55,1.06,-1.784),trim,bevel=.01)
for h in [.71,1.13]:
    cube('Tailgate hinge',(.09,.05,.028),(.65,h,-1.785),paint,bevel=.01)

# Five-slot Suzuki grille. Rounded apertures have inset honeycomb and rolled chrome bezels.
cube('Upper front panel',(1.52,.31,.075),(0,.978,1.79),paint,bevel=.045)
cube('Anthracite grille face',(1.49,.28,.045),(0,.980,1.839),grillemetal,'OEMGrille',bevel=.030)
for x in [-.32,-.16,0,.16,.32]:
    window_frame('Rolled open chrome slot',.112,.214,.024,.011,.022,(x,.983,1.883),chrome,'OEMGrille')
    cube('Deep grille aperture',(.091,.188,.007),(x,.983,1.867),black,'OEMGrille',bevel=.017)
    for h in [.918,.951,.984,1.017,1.050]:
        tube('Inset grille mesh',[(x-.035,h,1.875),(x,h+.014,1.875),(x+.035,h,1.875)],.0018,gunmetal,'OEMGrille')

def emblem():
    polygons=[[(.48,.44),(.14,.64),(-.48,.20),(-.16,-.03),(.19,.23),(.34,.14),(.48,.25)],
              [(.16,.03),(-.19,-.23),(-.34,-.14),(-.48,-.25),(-.48,-.44),(-.14,-.64),(.48,-.20)]]
    for points in polygons:
        n=len(points)
        vs=[(x*.115,.983+y*.115,z) for z in [1.903,1.913] for x,y in points]
        faces=[tuple(range(n)),tuple(reversed(range(n,n*2)))]+[(i,(i+1)%n,(i+1)%n+n,i+n) for i in range(n)]
        geometry('Raised S emblem',vs,faces,chrome,'OEMGrille',.001)
emblem()

# Replaceable aftermarket grille assemblies. Letters are extruded Blender outlines,
# not canvas captions or screenshots pasted over the front of the car.
font_block=bpy.data.fonts.load(os.path.join(ROOT,'assets','fonts','manrope.ttf'))
font_script=bpy.data.fonts.load(os.path.join(ROOT,'modeling','fonts','Yellowtail-Regular.ttf'))
def raised_wordmark(group,text,script=False):
    if not script:
        # Broad moulded block letters, shaped to match the photographed ABS badge.
        glyphs={
            'S':[(.94,1),(.14,1),(0,.86),(0,.60),(.12,.49),(.72,.43),(.72,.25),(0,.25),(0,0),(.86,0),(1,.14),(1,.42),(.87,.56),(.26,.62),(.26,.76),(.94,.76)],
            'U':[(0,1),(0,.17),(.17,0),(.83,0),(1,.17),(1,1),(.74,1),(.74,.30),(.67,.24),(.33,.24),(.26,.30),(.26,1)],
            'Z':[(0,1),(1,1),(1,.75),(.36,.24),(1,.24),(1,0),(0,0),(0,.25),(.65,.76),(0,.76)],
            'K':[(0,1),(.27,1),(.27,.63),(.67,1),(1,1),(.51,.53),(1,0),(.65,0),(.27,.39),(.27,0),(0,0)],
            'I':[(0,0),(1,0),(1,1),(0,1)]
        }
        widths=[.112 if letter!='I' else .031 for letter in text]
        cursor=-(sum(widths)+.022*(len(text)-1))/2
        for letter,width in zip(text,widths):
            points=glyphs[letter];n=len(points)
            vs=[(cursor+u*width,.934+v*.100,z) for z in [1.899,1.906] for u,v in points]
            faces=[tuple(range(n)),tuple(reversed(range(n,n*2)))]+[(i,(i+1)%n,(i+1)%n+n,i+n) for i in range(n)]
            geometry('Moulded SUZUKI badge '+letter,vs,faces,badgewhite,group,.0009)
            cursor+=width+.022
        return
    cube('Script badge backing',(.54,.081,.013),(0,.984,1.899),glossblack,group,bevel=.009)
    data=bpy.data.curves.new('Raised Suzuki grille lettering','FONT')
    data.body=text;data.font=font_script if script else font_block
    data.align_x='CENTER';data.align_y='CENTER';data.size=.18
    data.offset=.0006 if script else .002
    data.extrude=.004;data.bevel_depth=.0008;data.bevel_resolution=2;data.resolution_u=6
    obj=bpy.data.objects.new('Raised Suzuki grille lettering',data);bpy.context.collection.objects.link(obj)
    obj.location=pos(0,.983,1.911);obj.rotation_euler.x=math.pi/2;obj.parent=groups[group]
    obj.data.materials.append(badgewhite)
    bpy.context.view_layer.update()
    obj.scale.x*=.46/obj.dimensions.x
    obj.scale.y*=.060/obj.dimensions.z

for group in ['BlockGrille','RhinoGrille','ScriptGrille','GlossGrille','DeleteGrille','ClassicGrille','MeshGrille']:
    cube('Replacement grille surround',(1.49,.28,.045),(0,.980,1.839),glossblack if group=='GlossGrille' else trim,group,bevel=.022)
    if group in ['DeleteGrille','ClassicGrille']:
        for x in [-.32,-.16,0,.16,.32]:
            window_frame('Open five-slot bezel',.112,.214,.024,.011,.022,(x,.983,1.883),chrome if group=='DeleteGrille' else gunmetal,group)
            cube('Unbadged grille opening',(.091,.188,.007),(x,.983,1.867),black,group,bevel=.017)
    else:
        window_frame('Recessed mesh surround',.845,.216,.045,.018,.028,(0,.983,1.879),glossblack if group=='GlossGrille' else trim,group)
        cube('Radiator shadow behind grille',(.81,.187,.008),(0,.983,1.869),black,group,bevel=.023)
        for row in range(5):
            for col in range(15):
                x=-.370+col*.053+(row%2)*.0265
                if abs(x)>.375:continue
                h=.916+row*.0335
                pts=[(x+math.cos(i/6*math.tau)*.030,h+math.sin(i/6*math.tau)*.019,1.889) for i in range(6)]
                tube('Recessed grille honeycomb',pts,.0021,gunmetal,group,closed=True)
    if group in ['BlockGrille','RhinoGrille','GlossGrille']:raised_wordmark(group,'SUZUKI')
    if group=='ScriptGrille':raised_wordmark(group,'Suzuki',True)

# Deep optical headlamps: outer bezel, silver reflector, central projector, clear lens.
for x in [-.574,.574]:
    before=set(bpy.data.objects)
    cylinder('Headlight rubber gasket',.140,.028,(x,.977,1.868),trim)
    ring('Headlight chrome bezel',.130,.116,.018,(x,.977,1.889),chrome)
    cylinder('Dark headlamp back',.117,.012,(x,.977,1.852),gunmetal)
    # A dished reflector produces optical highlights rather than flat silver discs.
    vs=[];faces=[];steps=48
    for radius,depth in [(.112,1.892),(.100,1.882),(.076,1.872),(.049,1.869)]:
        for i in range(steps):
            a=i/steps*math.tau;vs.append((x+math.cos(a)*radius,.977+math.sin(a)*radius,depth))
    for row in range(3):
        for i in range(steps):
            j=(i+1)%steps;faces.append((row*steps+i,row*steps+j,(row+1)*steps+j,(row+1)*steps+i))
    geometry('Dished headlamp reflector',vs,faces,chrome,smooth=True)
    cylinder('Projector dark optical centre',.041,.006,(x,.977,1.882),gunmetal)
    bpy.ops.mesh.primitive_uv_sphere_add(segments=24,ring_count=12,radius=1,location=pos(x,.977,1.890))
    obj=bpy.context.object;obj.scale=(.041,.013,.041);finish(obj,'Convex projector glass',lens,smooth=True)
    ring('Projector light guide',.044,.040,.005,(x,.977,1.889),lamp)
    ring('Projector surround',.052,.043,.010,(x,.977,1.884),chrome)
    for i in range(9):
        a=i/10*math.tau
        cube('Headlamp optical facet',(.019,.012,.008),(x+math.cos(a)*.098,.977+math.sin(a)*.098,1.883),chrome,bevel=.002)
    cylinder('Clear front lamp glass',.116,.007,(x,.977,1.902),lens)
    bpy.context.view_layer.update()
    center=Vector(pos(x,.977,1.884))
    radial_scale=Matrix.Diagonal((.84,1,.84,1))
    for obj in set(bpy.data.objects)-before:
        obj.matrix_world=Matrix.Translation(center)@radial_scale@Matrix.Translation(-center)@obj.matrix_world
    side=-1 if x<0 else 1
    cylinder('Round front turn signal seal',.033,.016,(side*.695,1.042,1.863),trim,vertices=32)
    cylinder('Round front turn signal',.027,.019,(side*.695,1.042,1.876),amber,vertices=32)

# One moulded bumper skin, with a recessed open intake and broad angular shoulders.
outer=rounded_polygon([(-.82,.77),(-.77,.818),(.77,.818),(.82,.77),(.82,.55),(.69,.48),
                       (.55,.435),(.35,.450),(-.35,.450),(-.55,.435),(-.69,.48),(-.82,.55)],.045)
inner=rounded_polygon([(-.46,.70),(-.43,.728),(.43,.728),(.46,.70),(.46,.58),(.43,.55),
                       (.30,.55),(.18,.55),(-.18,.55),(-.30,.55),(-.43,.55),(-.46,.58)],.014)
n=len(outer);vs=[];faces=[]
for t in [0,.12,.40,.80,1]:
    for (xo,ho),(xi,hi) in zip(outer,inner):
        x=xo+(xi-xo)*t;h=ho+(hi-ho)*t
        depth=1.955-.11*(abs(x)/.82)**5-.052*(1-t)**3+.009*math.sin(t*math.pi)
        vs.append((x,h,depth))
for row in range(4):
    for i in range(n):
        j=(i+1)%n;faces.append((row*n+i,row*n+j,(row+1)*n+j,(row+1)*n+i))
back=len(vs)
vs.extend((x*.99,h,1.675) for x,h in outer)
for i in range(n):
    j=(i+1)%n;faces.append((i,back+i,back+j,j))
obj=geometry('Sculpted one piece bumper face',vs,faces,trim,'StockBumper',smooth=True)
mod=obj.modifiers.new('Bumper return thickness','SOLIDIFY');mod.thickness=.04
for side in [-1,1]:
    cylinder('Fog light recessed cup',.072,.016,(side*.596,.635,1.956),black,group='StockBumper')
    ring('Fog light bezel',.056,.043,.012,(side*.596,.635,1.968),chrome,group='StockBumper',segments=32)
    cylinder('Fog light glass',.043,.010,(side*.596,.635,1.978),lens,group='StockBumper',vertices=32)
    tube('Bumper lower pressed rib',[(side*.26,.485,1.97),(side*.39,.485,1.97),(side*.51,.518,1.97)],.012,trim,'StockBumper')
    cube('Headlight washer cap',(.045,.029,.013),(side*.52,.811,1.887),trim,'StockBumper',bevel=.005)
cube('Deep central bumper intake',(.91,.19,.008),(0,.636,1.896),black,'StockBumper',bevel=.018)
for row in range(5):
    for col in range(14):
        x=-.401+col*.061+(row%2)*.03
        if abs(x)>.42: continue
        h=.548+row*.036
        pts=[(x+math.cos(i/6*math.tau)*.034,h+math.sin(i/6*math.tau)*.022,1.929) for i in range(6)]
        tube('Lower intake honeycomb',pts,.0023,trim,'StockBumper',closed=True)
cube('Front registration mount',(.43,.105,.022),(0,.493,1.977),trim,'StockBumper',bevel=.007)
cube('Rear bumper',(1.60,.22,.22),(0,.61,-1.78),trim,bevel=.045)
for x in [-.60,.60]:
    cube('Rear lamp smoked rim',(.257,.13,.031),(x,.649,-1.901),trim,bevel=.022)
    cube('Rear red lamp',(.223,.096,.035),(x,.657,-1.920),red,bevel=.018)
    cube('Reverse lamp',(.066,.046,.038),(x+.052,.657,-1.940),lens,bevel=.007)

# Ladder chassis, axles and suspension remain visible beneath the body.
for x in [-.47,.47]:
    cube('Chassis rail',(.10,.10,3.23),(x,.38,-.02),trim,bevel=.009)
for z in [-1.295,1.295]:
    cylinder('Live axle',.036,1.43,(0,.335,z),gunmetal,'side')
    bpy.ops.mesh.primitive_uv_sphere_add(segments=20,ring_count=12,radius=.104,location=pos(0,.335,z))
    finish(bpy.context.object,'Axle differential',trim,bevel=0,smooth=True)
    for x in [-.51,.51]:
        pts=[(x+.037*math.cos(i/12*math.tau),.40+i*.003,z+.037*math.sin(i/12*math.tau)) for i in range(72)]
        tube('Coil suspension spring',pts,.006,gunmetal)


def wheel(group,x,h,z,r=.3465,offroad=False):
    half=.1175 if offroad else .0975
    side=-1 if x<0 else 1
    rim=.1905
    profile=[(rim,-half*.84),(.205,-half*.95),(r*.68,-half*1.02),(r*.82,-half*1.035),
             (r*.93,-half*.94),(r*.985,-half*.76),(r,-half*.59),
             (r,half*.59),(r*.985,half*.76),(r*.93,half*.94),
             (r*.82,half*1.035),(r*.68,half*1.02),(.205,half*.95),(rim,half*.84)]
    vs=[];faces=[];steps=80
    for radius,axial in profile:
        for i in range(steps):
            a=i/steps*math.tau
            vs.append((x+axial,h+math.cos(a)*radius,z+math.sin(a)*radius))
    for row in range(len(profile)-1):
        for i in range(steps):
            n=row*steps+i;j=row*steps+(i+1)%steps
            faces.append((n,j,j+steps,n+steps))
    geometry('Rounded tyre carcass',vs,faces,rubber,group,smooth=True)
    for offset in [-1,1]:
        for radius,thickness in [(rim+.011,.001),(r*.89,.001),(r*.91,.0008)]:
            ring('Moulded sidewall rib',radius,radius-thickness,.001,(x+offset*half*(1.02 if radius<r*.85 else .975),h,z),rubber,'side',group,64)
    # Each tread block follows the tyre radius and has narrow grooves between it and
    # its neighbours. This avoids the old rectangular paddles around the silhouette.
    count=48 if offroad else 64
    for i in range(count):
        for row in range(5):
            axial=(row-2)*half*.34
            angle=(i+(row%2)*.40)/count*math.tau
            width=half*(.29 if offroad else .30)
            length=math.tau/count*(.73 if offroad else .88)
            radius=r-(.004 if abs(row-2)==2 else 0)
            vertices=[]
            for radial in [radius-.004,radius+.0025 if offroad else radius+.0008]:
                for u,v in [(-width/2,-length/2),(width/2,-length/2),(width/2,length/2),(-width/2,length/2)]:
                    a=angle+v+u*(.20 if row%2 else -.20)
                    vertices.append((x+axial+u,h+math.cos(a)*radial,z+math.sin(a)*radial))
            geometry('Rounded AT tread block' if offroad else 'Fine road tread block',vertices,
                     [(0,3,2,1),(4,5,6,7),(0,1,5,4),(1,2,6,5),(2,3,7,6),(3,0,4,7)],rubber,group)
    outer=x+side*(half*.88)
    ring('Open wheel barrel',rim,rim-.012,.15,(x,h,z),gunmetal,'side',group)
    cylinder('Brake disc',.152,.012,(x+side*.025,h,z),brake,'side',group)
    for radius in [.111,.133,.147]:
        ring('Brake disc machining groove',radius,radius-.0012,.002,(x+side*.033,h,z),gunmetal,'side',group)
    cube('Brake caliper',(.041,.09,.052),(x+side*.046,h+.03,z+.135),caliper,group,bevel=.01)
    ring('Alloy outer lip',rim,rim-.009,.015,(outer,h,z),gunmetal if offroad else alloy,'side',group)
    ring('Inner rim chamfer',.171,.165,.012,(outer+side*.002,h,z),alloy,'side',group)
    spoke=[(-.018,.048),(-.026,.097),(-.057,.165),(-.049,.180),(-.031,.176),
           (0,.122),(.031,.176),(.049,.180),(.057,.165),(.026,.097),(.018,.048)]
    if offroad:spoke=[(-.024,.048),(-.023,.172),(.023,.172),(.024,.048)]
    for i in range(6 if offroad else 5):
        a=i/(6 if offroad else 5)*math.tau
        vertices=[]
        for depth in [-.015,.009]:
            for u,v in spoke:
                axial=outer+side*(depth-.023*(1-v/.19))
                vertices.append((axial,h+math.cos(a)*v-math.sin(a)*u,z+math.sin(a)*v+math.cos(a)*u))
        n=len(spoke)
        faces=[tuple(range(n)),tuple(reversed(range(n,n*2)))]+[(j,(j+1)%n,(j+1)%n+n,j+n) for j in range(n)]
        geometry('Forged concave spoke' if offroad else 'Sculpted factory split spoke',vertices,faces,gunmetal if offroad else alloy,group,bevel=.003)
    for i in range(5):
        a=i/5*math.tau
        cylinder('Chrome wheel nut',.008,.013,(outer+side*.02,h+math.cos(a)*.044,z+math.sin(a)*.044),chrome,'side',group,vertices=6)
    cylinder('Five bolt wheel hub',.055,.031,(outer,h,z),gunmetal if offroad else alloy,'side',group,32)
    cylinder('Wheel centre cap',.027,.034,(outer,h,z),trim,'side',group,32)
    # Small moulded size markings and the valve give the wheel a believable scale.
    for label,base_angle in [('ALL TERRAIN' if offroad else 'RADIAL',-.24),('235/75 R15' if offroad else '195/80 R15',math.pi-.28)]:
        radius=r*.79
        for i,letter in enumerate(label):
            angle=base_angle+(i-len(label)/2)*.065
            data=bpy.data.curves.new('Moulded tyre size','FONT');data.body=letter;data.font=font_block
            data.size=.017;data.extrude=.0005;data.resolution_u=3;data.align_x='CENTER'
            obj=bpy.data.objects.new('Moulded tyre size',data);bpy.context.collection.objects.link(obj);obj.parent=groups[group];data.materials.append(rubber)
            tangent=Vector((0,side*math.cos(angle),-side*math.sin(angle)))
            radial=Vector((0,math.sin(angle),math.cos(angle)));normal=tangent.cross(radial)
            obj.rotation_euler=Matrix((tangent,radial,normal)).transposed().to_euler()
            obj.location=pos(x+side*half*1.039,h+math.cos(angle)*radius,z+math.sin(angle)*radius)
    cylinder('Tyre valve stem',.004,.018,(outer+side*.007,h-.133,z+.098),trim,'side',group,12)

for x in [-.705,.705]:
    for z in [-1.295,1.295]:wheel('StockWheels',x,.3465,z)
for x in [-.750,.750]:
    for z in [-1.295,1.295]:wheel('AllTerrainWheels',x,.368,z,.368,True)
# Spare wheel is modelled in wheel coordinates, then rotated onto the tailgate.
wheel('SpareWheel',0,0,0)
groups['SpareWheel'].rotation_euler.z=math.pi/2
groups['SpareWheel'].location=pos(.12,.995,-1.948)

# India-spec right-hand-drive cabin, real dashboard volumes and separately shaped seats.
cube('Cabin floor',(1.32,.055,2.39),(0,.65,-.48),trim,'Cabin',bevel=.014)
cube('Dashboard moulding',(1.35,.15,.24),(0,1.108,.485),trim,'Cabin',bevel=.035)
cube('Centre infotainment screen',(.206,.133,.017),(0,1.22,.355),black,'Cabin',bevel=.012)
cube('Screen glass',(.183,.103,.019),(0,1.224,.344),glass,'Cabin',bevel=.007)
for x in [-.55,.55]:
    cylinder('Round dash air vent',.045,.018,(x,1.15,.354),trim,group='Cabin',vertices=32)
    for j in [-1,0,1]:cube('Vent grille',(.065,.005,.008),(x,1.15+j*.015,.342),gunmetal,'Cabin',bevel=.001)
for x in [.30,.46]:cylinder('Instrument dial',.057,.021,(x,1.18,.36),black,group='Cabin',vertices=32)
ring('RHD steering wheel',.132,.113,.025,(.38,1.16,.26),trim,group='Cabin',segments=40)
cube('Steering airbag hub',(.10,.066,.041),(.38,1.16,.255),trim,'Cabin',bevel=.018)
for side in [-1,1]:
    cube('Front seat cushion',(.46,.12,.47),(side*.37,.80,.08),seat,'Cabin',bevel=.042)
    obj=cube('Contoured seat back',(.45,.43,.125),(side*.37,1.035,-.14),seat,'Cabin',bevel=.045)
    obj.rotation_euler.x=math.radians(-8)
    cube('Seat head restraint',(.265,.14,.10),(side*.37,1.338,-.19),seat,'Cabin',bevel=.036)
    for xoffset in [-.18,.18]:cube('Seat side bolsters',(.055,.30,.06),(side*.37+xoffset,1.04,-.054),seat,'Cabin',bevel=.022)
    for offset in [-.07,.07]:cylinder('Headrest post',.008,.08,(side*.37+offset,1.25,-.18),chrome,'up','Cabin',12)
cube('Rear bench cushion',(1.18,.11,.43),(0,.82,-.83),seat,'Cabin',bevel=.035)
cube('Rear bench back',(1.18,.40,.11),(0,1.03,-1.055),seat,'Cabin',bevel=.035)
for x in [-.37,.37]:cube('Rear head restraint',(.25,.13,.09),(x,1.29,-1.09),seat,'Cabin',bevel=.025)
cube('Transmission console',(.21,.17,.45),(0,.77,.24),trim,'Cabin',bevel=.024)
cylinder('Gear lever',.012,.16,(0,.92,.26),trim,'up','Cabin',12)
cylinder('Transfer lever',.012,.11,(.07,.90,.15),trim,'up','Cabin',12)

# Apply the modelling stack and batch by material within functional groups.
# This keeps GPU draw calls small while preserving all configurator switching groups.
print('Applying authored panel geometry',flush=True)
bpy.context.view_layer.update()
depsgraph=bpy.context.evaluated_depsgraph_get()
evaluated=[]
for obj in list(bpy.context.scene.objects):
    if obj.type in {'CURVE','FONT'} or obj.type=='MESH' and obj.modifiers:
        evaluated.append((obj,bpy.data.meshes.new_from_object(obj.evaluated_get(depsgraph),preserve_all_data_layers=True,depsgraph=depsgraph)))
for obj,data in evaluated:
    if obj.type in {'CURVE','FONT'}:
        name,parent,matrix=obj.name,obj.parent,obj.matrix_local.copy()
        bpy.data.objects.remove(obj,do_unlink=True)
        obj=bpy.data.objects.new(name,data);bpy.context.collection.objects.link(obj);obj.parent=parent;obj.matrix_local=matrix
    else:
        obj.modifiers.clear();obj.data=data
# Authored surface coordinates let the web paint/plastic microtexture actually
# follow the mesh. Previously these materials had maps but no UV coordinates.
for obj in bpy.context.scene.objects:
    if obj.type!='MESH':continue
    mesh=obj.data
    if mesh.materials[0].name not in {'BodyPaint','RoofPaint','TyreRubber','MouldedPlastic'}:continue
    if mesh.uv_layers:continue
    uv=mesh.uv_layers.new(name='SurfaceMetres')
    for polygon in mesh.polygons:
        normal=(obj.matrix_world.to_3x3()@polygon.normal).normalized()
        axis=max(range(3),key=lambda i:abs(normal[i]))
        axes=[i for i in range(3) if i!=axis]
        for loop in polygon.loop_indices:
            p=obj.matrix_world@mesh.vertices[mesh.loops[loop].vertex_index].co
            uv.data[loop].uv=(round(p[axes[0]],4),round(p[axes[1]],4))
print('Batching materials for mobile',flush=True)
for root in groups.values():
    by_material={}
    for obj in list(root.children):
        if obj.type=='MESH':by_material.setdefault(obj.data.materials[0].name,[]).append(obj)
    for name,items in by_material.items():
        bpy.ops.object.select_all(action='DESELECT')
        for obj in items:obj.select_set(True)
        bpy.context.view_layer.objects.active=items[0]
        if len(items)>1:bpy.ops.object.join()
        items[0].name=root.name+'__'+name
bpy.ops.object.select_all(action='DESELECT')
for obj in bpy.context.scene.objects:obj.select_set(True)
print('Exporting web model',flush=True)
bpy.ops.export_scene.gltf(filepath=os.path.join(OUT,'jimny-lwb-blender.glb'),export_format='GLB',export_yup=True,
                          export_apply=True,export_extras=True,export_cameras=False,export_lights=False,
                          export_meshopt_compression_enable=True,export_meshopt_extension='EXT_meshopt_compression')

# Native editable project contains each replaceable assembly plus a reproducible studio scene.
for name in ['AllTerrainWheels','BlockGrille','RhinoGrille','ScriptGrille','GlossGrille','DeleteGrille','ClassicGrille','MeshGrille']:
    groups[name].hide_render=True;groups[name].hide_viewport=True
    for obj in groups[name].children:obj.hide_render=True;obj.hide_viewport=True
world=bpy.data.worlds.new('Poly Haven studio environment');bpy.context.scene.world=world;world.use_nodes=True
env=world.node_tree.nodes.new('ShaderNodeTexEnvironment')
hdr=os.path.join(ROOT,'assets','environments','studio-small-09-1k.hdr')
if os.path.exists(hdr):
    env.image=bpy.data.images.load(hdr)
    world.node_tree.links.new(env.outputs['Color'],world.node_tree.nodes['Background'].inputs['Color'])
world.node_tree.nodes['Background'].inputs['Strength'].default_value=.65
for name,at,power,size in [('Main softbox',(3.5,5.0,4.5),700,5),('Fill softbox',(-4,3,1),450,4)]:
    bpy.ops.object.light_add(type='AREA',location=pos(*at));light=bpy.context.object;light.name=name;light.data.energy=power;light.data.shape='DISK';light.data.size=size
    light.rotation_euler=(Vector(pos(0,.8,0))-light.location).to_track_quat('-Z','Y').to_euler()
bpy.ops.object.camera_add(location=pos(4.25,1.98,5.35))
camera=bpy.context.object;camera.rotation_euler=(Vector(pos(0,.90,-.02))-camera.location).to_track_quat('-Z','Y').to_euler();camera.data.lens=48;bpy.context.scene.camera=camera
scene=bpy.context.scene;scene.render.engine='CYCLES';scene.cycles.samples=24;scene.cycles.use_denoising=True
scene.render.resolution_x=1100;scene.render.resolution_y=850;scene.render.resolution_percentage=100
scene.render.film_transparent=True
scene.render.image_settings.file_format='PNG';scene.render.filepath=os.path.join(ROOT,'modeling','jimny-blender-preview.png')
bpy.ops.file.pack_all()
bpy.ops.wm.save_as_mainfile(filepath=os.path.join(ROOT,'modeling','jimny-lwb.blend'))
print('MODEL_EXPORT',os.path.getsize(os.path.join(OUT,'jimny-lwb-blender.glb')))
bpy.ops.render.render(write_still=True)
