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
from mathutils import Vector

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


paint = material('BodyPaint', (.72, .73, .62), .23, .30, 1)
roof = material('RoofPaint', (.72, .73, .62), .23, .30, 1)
trim = material('MouldedPlastic', (.021, .026, .027), .48)
rubber = material('TyreRubber', (.013, .016, .017), .81)
glass = material('WindowGlass', (.10, .16, .18), .085, .18, .6, .55)
chrome = material('BrightChrome', (.72, .75, .77), .16, 1)
alloy = material('MachinedAlloy', (.36, .39, .42), .25, .85)
gunmetal = material('WheelGunmetal', (.045, .054, .063), .29, .7)
glossblack = material('GlossBlackGrille', (.013, .017, .020), .17, .22, 1)
badgewhite = material('GrilleLettering', (.76, .79, .81), .27, .35, .6)
brake = material('BrakeSteel', (.19, .21, .22), .47, .88)
seat = material('WovenCabinFabric', (.038, .043, .048), .93)
black = material('IntakeShadow', (.004, .006, .007), .82)
red = material('RearLampRed', (.42, .009, .004), .24, .12, 1)
amber = material('IndicatorAmber', (.75, .19, .012), .20, .14, 1)
lens = material('LampLens', (.63, .73, .78), .07, .08, 1, .29)
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
        mod.segments = 3
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
    data.bevel_resolution = 2
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
    return geometry(name, vertices, faces, mat, group, .0015, True)


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


# Lower-body shell has genuinely open wheel wells.
lower = [(-1.76,.54),(-1.76,1.13),(.68,1.15),(1.80,1.105),(1.82,.86),(1.80,.53),(1.68,.53)]
for i in range(25):
    a = i/24*math.pi
    lower.append((1.295+math.cos(a)*.391,.335+math.sin(a)*.391))
lower += [(.904,.54),(-.904,.54)]
for i in range(25):
    a = i/24*math.pi
    lower.append((-1.295+math.cos(a)*.391,.335+math.sin(a)*.391))
lower += [(-1.686,.54)]
for side in [-1, 1]:
    prism_side('Pressed quarter and front wings', lower, side, paint, thickness=.026, bevel=.008)
    # Doors have subtle crown across the width, a lower crease and recessed shut lines.
    for front, rear in [(.64,-.29),(-.32,-1.08)]:
        pts=[(front,.59),(front,1.14),(rear,1.14),(rear,.59)]
        prism_side('Separate door skin',pts,side,paint,inset=.003,thickness=.014,bevel=.012)
        tube('Door shut line',[(side*.751,.60,front),(side*.752,1.145,front),(side*.700,1.645,front-.07)],.0023,black)
        tube('Lower door seam',[(side*.751,.587,front-.02),(side*.751,.587,rear+.01)],.0023,black)
        tube('Door pressed highlight',[(side*.753,.72,front-.035),(side*.753,.72,rear+.035)],.003,paint)
        z = rear+.15
        cube('Handle recess',(.021,.044,.162),(side*.762,1.085,z),black,bevel=.014)
        cube('Pull handle',(.031,.024,.132),(side*.774,1.093,z+.002),trim,bevel=.009)
        for h in [.735,1.055]:
            cube('Exposed painted hinge',(.025,.05,.065),(side*.763,h,front-.025),paint,bevel=.008)
            cylinder('Hinge pivot',.009,.055,(side*.781,h,front-.025),trim,'up',vertices=12)
    cube('Sill moulding',(.055,.064,1.83),(side*.759,.545,-.11),trim,bevel=.016)
    # Distinctive squared-off flare profile, not a circular hoop.
    for center in [-1.295,1.295]:
        pts=[(center-.445,.37),(center-.445,.56),(center-.375,.725),(center-.235,.795),
             (center+.235,.795),(center+.375,.725),(center+.445,.56),(center+.445,.37)]
        for i in range(25):
            a = i/24*math.pi
            pts.append((center+math.cos(a)*.371,.335+math.sin(a)*.371))
        prism_side('Squared moulded wheel arch',pts,side,trim,inset=.077,thickness=.082,bevel=.012)
        lining=[]
        for i in range(25):
            a=i/24*math.pi
            lining.append((center-math.cos(a)*.391,.335+math.sin(a)*.391))
        for i in range(24,-1,-1):
            a=i/24*math.pi
            lining.append((center-math.cos(a)*.333,.335+math.sin(a)*.333))
        prism_side('Dark wheel-well liner',lining,side,black,inset=-.02,thickness=.055,bevel=0)
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
    tube('Bonnet panel shut line',[(side*.747,1.14,.69),(side*.747,1.14,1.74),(side*.70,1.13,1.80)],.003,black)
cube('Bonnet nose rolled edge',(1.44,.031,.045),(0,1.126,1.79),paint,bevel=.014)
cube('Cowl and scuttle',(1.45,.042,.16),(0,1.163,.635),paint,bevel=.012)
for x in [-.43,-.38,-.33,.30,.35,.40]:
    cube('Scuttle ventilation slots',(.011,.005,.07),(x,1.187,.627),black,bevel=.002)

# Cabin ring is formed from real pillars and window openings.
for side in [-1,1]:
    for z0,z1 in [(.64,.49),(-.29,-.32),(-1.09,-1.11),(-1.74,-1.73)]:
        pts=[(z0-.028,1.14),(z0+.028,1.14),(z1+.028,1.665),(z1-.028,1.665)]
        prism_side('Tapered cabin pillar',pts,side,roof,thickness=.038,bevel=.009)
    prism_side('Window waist rail',[(.64,1.12),(.64,1.18),(-1.75,1.18),(-1.75,1.12)],side,paint,thickness=.03,bevel=.01)
    prism_side('Roof edge rail',[(.54,1.63),(.53,1.69),(-1.74,1.69),(-1.74,1.63)],side,roof,'RoofShell',thickness=.04,bevel=.012)
    windows=[[(.585,1.195),(.487,1.613),(-.242,1.613),(-.242,1.195)],
             [(-.353,1.195),(-.355,1.613),(-1.046,1.613),(-1.046,1.195)],
             [(-1.143,1.195),(-1.143,1.613),(-1.683,1.613),(-1.696,1.195)]]
    for points in windows:
        prism_side('Flush tinted side glass',points,side,glass,inset=-.004,thickness=.004,bevel=.012)
        tube('Window rubber seal',[(side*(.748-max(0,h-1.14)*.105),h,z) for z,h in points],.009,trim,closed=True)
    tube('Rain gutter',[(side*.710,1.675,.54),(side*.710,1.702,.46),(side*.710,1.702,-1.68),(side*.710,1.675,-1.76)],.009,trim)
    cube('Mirror mounting triangle',(.035,.16,.11),(side*.754,1.247,.575),trim,bevel=.015)
    cube('Mirror neck',(.14,.039,.05),(side*.817,1.257,.577),trim,bevel=.014)
    cube('Rounded mirror housing',(.155,.15,.225),(side*.906,1.30,.582),trim,bevel=.038)
    cube('Rear facing mirror glass',(.117,.105,.008),(side*.909,1.303,.465),chrome,bevel=.022)

# Crowned roof, pressed roof channels and curved front/back window frames.
roofverts=[]
rxs=[-.716,-.70,-.59,0,.59,.70,.716]
rzs=[-1.76,-1.725,-1.65,.46,.52,.56]
for z in rzs:
    for x in rxs:
        h=1.695+.026*(1-(x/.73)**2)-max(0,abs(z+.60)-1.10)*.15
        roofverts.append((x,h,z))
rooffaces=[]
for j in range(len(rzs)-1):
    for i in range(len(rxs)-1):
        n=j*len(rxs)+i
        rooffaces.append((n,n+1,n+len(rxs)+1,n+len(rxs)))
obj=geometry('Crowned pressed steel roof',roofverts,rooffaces,roof,'RoofShell',smooth=True)
mod=obj.modifiers.new('Roof thickness','SOLIDIFY');mod.thickness=.024
mod=obj.modifiers.new('Roof roll','BEVEL');mod.width=.008;mod.segments=3
for x in [-.47,-.235,0,.235,.47]:
    tube('Roof pressed channel',[(x,1.721-.023*(x/.73)**2,-1.56),(x,1.721-.023*(x/.73)**2,.32)],.003,roof,'RoofShell')

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
cube('Upper front panel',(1.49,.27,.075),(0,.978,1.79),paint,bevel=.035)
cube('Anthracite grille face',(1.49,.28,.045),(0,.980,1.839),gunmetal,'OEMGrille',bevel=.022)
for x in [-.32,-.16,0,.16,.32]:
    cube('Slot rolled chrome bezel',(.112,.204,.012),(x,.983,1.871),chrome,'OEMGrille',bevel=.021)
    cube('Deep grille aperture',(.087,.177,.016),(x,.983,1.882),black,'OEMGrille',bevel=.017)
    for h in [.925,.965,1.005,1.045]:
        tube('Inset grille mesh',[(x-.028,h,1.893),(x,h+.018,1.893),(x+.028,h,1.893)],.002,gunmetal,'OEMGrille')

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
    data=bpy.data.curves.new('Raised Suzuki grille lettering','FONT')
    data.body=text;data.font=font_script if script else font_block
    data.align_x='CENTER';data.align_y='CENTER';data.size=.18
    data.offset=.0006 if script else .002
    data.extrude=.004;data.bevel_depth=.0008;data.bevel_resolution=2;data.resolution_u=6
    obj=bpy.data.objects.new('Raised Suzuki grille lettering',data);bpy.context.collection.objects.link(obj)
    obj.location=pos(0,.983,1.909);obj.rotation_euler.x=math.pi/2;obj.parent=groups[group]
    obj.data.materials.append(badgewhite)

for group in ['BlockGrille','RhinoGrille','ScriptGrille','GlossGrille','DeleteGrille','ClassicGrille','MeshGrille']:
    cube('Replacement grille surround',(1.49,.28,.045),(0,.980,1.839),glossblack if group=='GlossGrille' else trim,group,bevel=.022)
    if group in ['DeleteGrille','ClassicGrille']:
        for x in [-.32,-.16,0,.16,.32]:
            cube('Five-slot aperture bezel',(.112,.204,.012),(x,.983,1.871),chrome if group=='DeleteGrille' else gunmetal,group,bevel=.021)
            cube('Unbadged grille opening',(.087,.177,.016),(x,.983,1.882),black,group,bevel=.017)
    elif group in ['RhinoGrille','MeshGrille']:
        for row in range(6):
            for col in range(15):
                x=-.427+col*.06+(row%2)*.03
                if abs(x)>.44:continue
                h=.875+row*.037
                pts=[(x+math.cos(i/6*math.tau)*.034,h+math.sin(i/6*math.tau)*.022,1.893) for i in range(6)]
                tube('Grille hexagonal mesh',pts,.0025,gunmetal,group,closed=True)
    else:
        for h in [.893,.938,.983,1.028,1.073]:
            cube('Grille horizontal louvre',(.91,.012,.017),(0,h,1.89),gunmetal,group,bevel=.003)
    if group in ['BlockGrille','RhinoGrille','GlossGrille']:raised_wordmark(group,'SUZUKI')
    if group=='ScriptGrille':raised_wordmark(group,'Suzuki',True)

# Deep optical headlamps: outer bezel, silver reflector, central projector, clear lens.
for x in [-.574,.574]:
    cylinder('Headlight rubber gasket',.140,.028,(x,.977,1.868),trim)
    ring('Headlight chrome bezel',.130,.116,.018,(x,.977,1.889),chrome)
    cylinder('Dark headlamp back',.117,.020,(x,.977,1.873),gunmetal)
    for radius in [.105,.088,.070]:
        ring('Concentric reflector',radius,radius-.009,.008,(x,.977,1.880),chrome)
    cylinder('Projector lens',.043,.011,(x,.977,1.890),lens)
    ring('Projector surround',.052,.043,.010,(x,.977,1.884),chrome)
    for i in range(10):
        a=i/10*math.tau
        cube('LED reflector facet',(.018,.016,.008),(x+math.cos(a)*.097,.977+math.sin(a)*.097,1.883),lamp,bevel=.003)
    cylinder('Clear front lamp glass',.116,.007,(x,.977,1.902),lens)
    side=-1 if x<0 else 1
    cylinder('Round front turn signal seal',.040,.016,(side*.713,1.018,1.863),trim,vertices=32)
    cylinder('Round front turn signal',.033,.019,(side*.713,1.018,1.876),amber,vertices=32)

# Injection-moulded stock bumper: soft corners, deep intake, fog-light cups and lower ribs.
cube('Bumper upper sweep',(1.61,.112,.215),(0,.780,1.833),trim,'StockBumper',bevel=.04)
cube('Bumper lower chin',(1.45,.10,.22),(0,.468,1.842),trim,'StockBumper',bevel=.039)
for side in [-1,1]:
    cube('Rounded bumper end',(.345,.29,.24),(side*.634,.624,1.824),trim,'StockBumper',bevel=.065)
    cylinder('Fog light recessed cup',.072,.016,(side*.596,.635,1.956),black,group='StockBumper')
    ring('Fog light bezel',.056,.043,.012,(side*.596,.635,1.968),chrome,group='StockBumper',segments=32)
    cylinder('Fog light glass',.043,.010,(side*.596,.635,1.978),lens,group='StockBumper',vertices=32)
    cube('Bumper lower sculpted pad',(.26,.095,.085),(side*.51,.463,1.946),trim,'StockBumper',bevel=.028)
cube('Deep central bumper intake',(.86,.19,.15),(0,.623,1.839),black,'StockBumper',bevel=.018)
for row in range(5):
    for col in range(14):
        x=-.401+col*.061+(row%2)*.03
        if abs(x)>.42: continue
        h=.548+row*.036
        pts=[(x+math.cos(i/6*math.tau)*.034,h+math.sin(i/6*math.tau)*.022,1.929) for i in range(6)]
        tube('Lower intake honeycomb',pts,.0023,trim,'StockBumper',closed=True)
cube('Front registration mount',(.43,.105,.027),(0,.467,1.972),trim,'StockBumper',bevel=.01)
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


def wheel(group,x,h,z,r=.335,offroad=False):
    half=.111 if offroad else .096
    side=-1 if x<0 else 1
    rim=.1905
    profile=[(rim,-half*.94),(r*.76,-half),(r*.90,-half*.99),(r*.97,-half*.78),(r,-half*.44),
             (r,half*.44),(r*.97,half*.78),(r*.90,half*.99),(r*.76,half),(rim,half*.94)]
    vs=[];faces=[];steps=64
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
        ring('Tyre sidewall bead',r*.82,r*.815,.002,(x+offset*half,h,z),rubber,'side',group,64)
    # Fine shoulder blocks, not oversized gear teeth. Each row is independently staggered.
    for i in range(48 if offroad else 56):
        a=i/(48 if offroad else 56)*math.tau
        for row in [-1,0,1]:
            angle=a+(row%2)*.018
            o=cube('All terrain tread' if offroad else 'Road tyre tread',(.064,.011 if offroad else .005,.035 if offroad else .025),
                   (x+row*half*.63,h+math.cos(angle)*(r-.002),z+math.sin(angle)*(r-.002)),rubber,group,bevel=0)
            o.rotation_euler.x=angle
    outer=x+side*(half+.003)
    cylinder('Wheel barrel',rim,.15,(x,h,z),gunmetal,'side',group)
    cylinder('Brake disc',.152,.012,(x+side*.073,h,z),brake,'side',group)
    cube('Brake caliper',(.041,.09,.052),(x+side*.082,h+.03,z+.135),caliper,group,bevel=.01)
    ring('Alloy outer lip',rim,rim-.009,.015,(outer,h,z),gunmetal if offroad else alloy,'side',group)
    ring('Inner rim chamfer',.171,.165,.012,(outer+side*.002,h,z),alloy,'side',group)
    for i in range(5):
        a=i/5*math.tau
        for split in [-1,1]:
            angle=a+split*.095
            obj=cube('Tapered twin alloy spoke',(.022,.121,.022),(outer,h+math.cos(angle)*.115,z+math.sin(angle)*.115),gunmetal if offroad else alloy,group,bevel=.004)
            obj.rotation_euler.x=angle
        cylinder('Chrome wheel nut',.008,.013,(outer+side*.02,h+math.cos(a)*.044,z+math.sin(a)*.044),chrome,'side',group,vertices=6)
    cylinder('Five bolt wheel hub',.055,.031,(outer,h,z),gunmetal if offroad else alloy,'side',group,32)
    cylinder('Wheel centre cap',.027,.034,(outer,h,z),trim,'side',group,32)

for x in [-.705,.705]:
    for z in [-1.295,1.295]:wheel('StockWheels',x,.335,z)
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
bpy.ops.object.camera_add(location=pos(4.0,2.55,4.8))
camera=bpy.context.object;camera.rotation_euler=(Vector(pos(0,.90,-.02))-camera.location).to_track_quat('-Z','Y').to_euler();camera.data.lens=48;bpy.context.scene.camera=camera
scene=bpy.context.scene;scene.render.engine='CYCLES';scene.cycles.samples=24;scene.cycles.use_denoising=True
scene.render.resolution_x=1100;scene.render.resolution_y=850;scene.render.resolution_percentage=100
scene.render.film_transparent=True
scene.render.image_settings.file_format='PNG';scene.render.filepath=os.path.join(ROOT,'modeling','jimny-blender-preview.png')
bpy.ops.file.pack_all()
bpy.ops.wm.save_as_mainfile(filepath=os.path.join(ROOT,'modeling','jimny-lwb.blend'))
print('MODEL_EXPORT',os.path.getsize(os.path.join(OUT,'jimny-lwb-blender.glb')))
bpy.ops.render.render(write_still=True)
