"""Original five-door Jimny planning asset, authored and exported in Blender.

Run: Blender --background --python modeling/build_jimny.py
Coordinates in helper calls: x = width, h = height, z = forward, all in metres.
The glTF exporter maps Blender Z-up into the website's Y-up coordinates.
No third-party vehicle mesh, photo texture, or manufacturer CAD is included.
The tailgate wordmark follows Suzuki's published vector trademark outlines.
"""
import bpy
import bmesh
import math
import json
import os
import sys
from mathutils import Vector, Matrix
from mathutils.bvhtree import BVHTree

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, 'assets', 'models')
SHORT_BODY = '--three-door' in sys.argv
MODEL_STEM = 'jimny-swb' if SHORT_BODY else 'jimny-lwb'
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
rubber = material('TyreRubber', (.012, .014, .015), .96)
glass = material('WindowGlass', (.038, .065, .073), .055, .02, 1, .82)
chrome = material('BrightChrome', (.72, .75, .77), .16, 1)
alloy = material('MachinedAlloy', (.21, .225, .24), .43, .72)
gunmetal = material('WheelGunmetal', (.065, .070, .076), .48, .62)
wheel_barrel = material('WheelBarrelDark', (.035, .038, .041), .64, .45)
grillemetal = material('GrilleAnthracite', (.020, .024, .026), .36, 0)
glossblack = material('GlossBlackGrille', (.013, .017, .020), .17, .22, 1)
badgewhite = material('GrilleLettering', (.76, .79, .81), .27, .35, .6)
brake = material('BrakeSteel', (.19, .21, .22), .47, .88)
seat = material('WovenCabinFabric', (.038, .043, .048), .93)
seat_insert = material('CabinSeatInsert', (.072, .078, .082), .96)
carpet = material('CabinCarpet', (.024, .026, .028), 1)
dash = material('CabinDashboard', (.029, .032, .035), .83)
stitch = material('CabinStitch', (.12, .13, .135), .95)
steering_satin=material('CabinSteeringSatin',(.26,.28,.30),.39,.64)
black = material('IntakeShadow', (.004, .006, .007), .82)
red = material('RearLampRed', (.42, .009, .004), .24, .12, 1)
amber = material('IndicatorAmber', (.75, .19, .012), .20, .14, 1)
lens = material('LampLens', (.86, .93, .96), .035, 0, 1, .09)
optical = material('OpticalGlass', (.075, .105, .13), .08, .45, 1)
lamp = material('LampEmitter', (.56, .64, .71), .12, .7)
caliper = material('CaliperMetal', (.12, .13, .14), .49, .65)

groups = {}
headlamp_root=bpy.data.objects.new('StockHeadlamps',None)
bpy.context.collection.objects.link(headlamp_root)
groups['StockHeadlamps']=headlamp_root
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
        mod.segments = 2 if bevel < .008 else 3
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


def subtract(target, cutter):
    bpy.context.view_layer.objects.active=target
    for mod in list(target.modifiers):bpy.ops.object.modifier_apply(modifier=mod.name)
    bpy.context.view_layer.objects.active=cutter
    for mod in list(cutter.modifiers):bpy.ops.object.modifier_apply(modifier=mod.name)
    mod=target.modifiers.new('True recessed aperture','BOOLEAN');mod.operation='DIFFERENCE';mod.object=cutter
    bpy.context.view_layer.objects.active=target;bpy.ops.object.modifier_apply(modifier=mod.name)
    bpy.data.objects.remove(cutter,do_unlink=True)


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
            elif axis == 'up':
                vertices.append((at[0]+u, at[1]+d, at[2]+v))
            else:
                vertices.append((at[0]+u, at[1]+v, at[2]+d))
    for i in range(segments):
        j = (i+1)%segments
        faces += [(i,j,j+segments,i+segments),(i+segments,j+segments,j+segments*3,i+segments*3),
                  (i+segments*2,j+segments*2,j,i),(i+segments*3,j+segments*3,j+segments*2,i+segments*2)]
    return geometry(name, vertices, faces, mat, group, 0, True)


def window_frame(name, w, h, radius, wall, depth, at, mat, group='BodyShell', wall_h=None, inner_radius=None):
    def outline(w,h,r):
        points=[]
        for cx,cy,start in [(w/2-r,h/2-r,0),(-w/2+r,h/2-r,90),(-w/2+r,-h/2+r,180),(w/2-r,-h/2+r,270)]:
            for i in range(7):
                a=math.radians(start+i*15)
                points.append((cx+math.cos(a)*r,cy+math.sin(a)*r))
        return points
    wall_h=wall if wall_h is None else wall_h
    inner_radius=max(.005,radius-min(wall,wall_h)) if inner_radius is None else inner_radius
    outer=outline(w,h,radius);inner=outline(w-wall*2,h-wall_h*2,inner_radius)
    if name=='Open windscreen rubber surround':
        # Sample the long edges as well as the corners, so the later glass
        # bow also curves the upper/lower seals rather than only the centre.
        sampled_outer=[];sampled_inner=[]
        for i,p in enumerate(outer):
            j=(i+1)%len(outer);q=outer[j]
            count=max(1,math.ceil(math.dist(p,q)/.055))
            for step in range(count):
                t=step/count
                sampled_outer.append(tuple(p[k]+(q[k]-p[k])*t for k in range(2)))
                sampled_inner.append(tuple(inner[i][k]+(inner[j][k]-inner[i][k])*t for k in range(2)))
        outer,inner=sampled_outer,sampled_inner
    n=len(outer)
    vs=[(x,y,z) for z,points in [(-depth/2,outer),(depth/2,outer),(-depth/2,inner),(depth/2,inner)] for x,y in points]
    faces=[]
    for i in range(n):
        j=(i+1)%n
        faces += [(i,j,j+n,i+n),(i+n,j+n,j+n*3,i+n*3),(i+n*2,j+n*2,j,i),(i+n*3,j+n*3,j+n*2,i+n*2)]
    obj=geometry(name,vs,faces,mat,group,bevel=.002)
    obj.location=pos(*at)
    return obj


# Owner-marked side view: raise the closed bonnet nose by 3.5 degrees about
# the rear lower joint. Rotate the complete lid, not its tapered cross-section.
BONNET_POSE_ANGLE=math.radians(3.5)
BONNET_REAR_HALF_WIDTH=.750
BONNET_PLAN_TAPER=.025
BONNET_FRONT_FOLD_HALF_WIDTH=BONNET_REAR_HALF_WIDTH-BONNET_PLAN_TAPER+.002
def bonnet_pose(x,h,z):
    dh,dz=h-1.135,z-.69
    c,s=math.cos(BONNET_POSE_ANGLE),math.sin(BONNET_POSE_ANGLE)
    return (x,1.135+dh*c+dz*s,.69+dz*c-dh*s)

def bonnet_front_relief(z):
    # The lid stops before the grille housing, not merely behind the chrome
    # badge/headlamp tips. Ease the last section back without moving the hinge.
    t=min(1,max(0,(z-1.35)/.43))
    return .050*t*t*(3-2*t)

def bonnet_joint_frame(z):
    # Invert the final side-edge pose, including the curved rear boundary and
    # nose turnover. A straight-line estimate left the fixed wing covering the
    # shut line after the bonnet's plan outline changed.
    def edge(t):
        source_z=.69+1.16*t
        # The wing follows the closing seam, not the top skin's nose roll.
        # Copying that roll here pulled both front corners into a false dent.
        h=1.125-.072*t
        tip=min(1,max(0,(source_z-1.74)/.11));tip=tip*tip*(3-2*tip)
        forward=source_z-.100*t+.120*(1-t)-.010*tip-bonnet_front_relief(source_z)
        return bonnet_pose(0,h,forward)
    low,high=0,1
    for _ in range(24):
        t=(low+high)/2
        if edge(t)[2]<z:low=t
        else:high=t
    t=(low+high)/2
    h=edge(t)[1]
    # This is the bonnet's boundary, not the outside of the fixed wing.
    # Do not pull the body inward or add a steep drop beyond the lid tip.
    return h,BONNET_REAR_HALF_WIDTH-BONNET_PLAN_TAPER*t

def bonnet_joint_lift(z):
    return bonnet_joint_frame(z)[0]-(1.135-.090*min(1,max(0,(z-.69)/1.08)))

def body_width(h):
    # Reference: the real lower door has a narrow stamped swage, not a broad
    # diagonal slab. The shoulder above the handles rolls into the glass belt.
    profile=[(.45,.721),(.48,.735),(.51,.739),(.635,.745),(.66,.749),
             (.678,.751),(.690,.748),(.709,.746),(.73,.746),(.82,.748),
             (.98,.750),(1.075,.749),(1.105,.746),(1.13,.737),(1.18,.724)]
    # Monotone cubic interpolation keeps the pressed ridge but avoids the
    # chain of hard slope changes that produced false horizontal reflections.
    sec=[(y-x)/(b-a) for (a,x),(b,y) in zip(profile,profile[1:])]
    slopes=[sec[0]]+[0 if a*b<=0 else 2*a*b/(a+b) for a,b in zip(sec,sec[1:])]+[sec[-1]]
    for i,((a,x),(b,y)) in enumerate(zip(profile,profile[1:])):
        if h<=b:
            t=max(0,(h-a)/(b-a));d=b-a
            return (2*t**3-3*t*t+1)*x+(t**3-2*t*t+t)*d*slopes[i]+(-2*t**3+3*t*t)*y+(t**3-t*t)*d*slopes[i+1]
    return profile[-1][1]


def wheel_opening_height(z):
    low=.40
    for center in [-1.295,1.295]:
        dz=z-center
        arch=[(-.415,.40),(-.400,.545),(-.365,.675),(-.295,.765),(-.195,.810),(0,.830),
              (.195,.810),(.295,.765),(.365,.675),(.400,.545),(.415,.40)]
        for (a,ha),(b,hb) in zip(arch,arch[1:]):
            if a<=dz<=b:low=max(low,ha+(hb-ha)*(dz-a)/(b-a))
    return low

def rear_panel_forward(z):
    # Same lower-body closure datum as accuracy_revision.rear_map. Sample the
    # arch at the FINISHED position, then author its boundary before normals
    # and the solid sheet are generated. No second Boolean on a thin door skin.
    return z+.078*min(1,max(0,(-z-1.25)/.45))

def body_panel(side):
    # A connected, gently crowned sheet with open arches; no overlapping door boxes.
    zs=sorted(set([-1.76+i*3.48/112 for i in range(113)]+[-.40,-.38,.64,.68]))
    # Shared height rows keep the pressed swage level around the wheel arches.
    levels=sorted(set([.46+i*.69/40 for i in range(41)]+[.48,.51,.635,.66,.678,.690,.709,.73,.82,.98,1.075,1.105,1.13,1.15]))
    vertices=[]
    for z in zs:
        low=max(.46,wheel_opening_height(rear_panel_forward(z)))
        # End the painted rear apron at the bumper shoulder, not at the sill.
        rear=max(0,min(1,(-z-1.54)/.15))
        low=max(low,.46+.24*rear*rear*(3-2*rear))
        # Follow the rebuilt bonnet return; keep the wing joined to the lid
        # without the former tall wedge at the forward end.
        wing=min(1,max(0,(z-.64)/.17));wing=wing*wing*(3-2*wing)
        top=1.15-.015*min(1,max(0,(z-.64)/.05))-.090*min(1,max(0,(z-.69)/1.08))+bonnet_joint_lift(z)-.0055*wing
        for level in levels:
            h=max(low,min(top,level))
            # The bonnet taper must not change the fixed body or arch mounts.
            width=body_width(h)-max(0,-z-1.69)*.20
            shoulder=min(1,max(0,(h-top+.035)/.035));shoulder=shoulder*shoulder*(3-2*shoulder)*wing
            width=width*(1-shoulder)+.746*shoulder
            vertices.append((side*width,h,z))
    faces=[]
    for i in range(len(zs)-1):
        for j in range(len(levels)-1):
            a=i*len(levels)+j;faces.append((a,a+len(levels),a+len(levels)+1,a+1))
    obj=geometry('Crowned side pressing with open wheel wells',vertices,faces,paint,smooth=True)
    bm=bmesh.new();bm.from_mesh(obj.data)
    bmesh.ops.remove_doubles(bm,verts=list(bm.verts),dist=.000001)
    bmesh.ops.dissolve_degenerate(bm,edges=list(bm.edges),dist=.000001)
    bm.to_mesh(obj.data);bm.free()
    solid=obj.modifiers.new('Steel panel return','SOLIDIFY');solid.thickness=.012
    return obj


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


def rounded_flat_plate(name,w,h,depth,radius,at,mat,group='BodyShell'):
    # A genuinely rounded XY outline, independent of the very thin depth.
    # Beveling a 4–5mm cube clamps the requested corner radius to half depth.
    points=rounded_polygon([(-w/2,-h/2),(w/2,-h/2),(w/2,h/2),(-w/2,h/2)],radius)
    n=len(points)
    vertices=[(at[0]+x,at[1]+y,at[2]+z) for z in [-depth/2,depth/2] for x,y in points]
    faces=[tuple(reversed(range(n))),tuple(range(n,2*n))]+[(i,(i+1)%n,(i+1)%n+n,i+n) for i in range(n)]
    return geometry(name,vertices,faces,mat,group)


def upholstered_loft(name,sections,x,mat):
    # Width/depth change with height rather than merely rounding a box. This
    # gives the seat real shoulders and a sculpted side silhouette.
    vertices=[]
    for h,w,d,z in sections:
        outline=rounded_polygon([(-w/2,-d/2),(w/2,-d/2),(w/2,d/2),(-w/2,d/2)],min(w,d)*.24)
        vertices.extend((x+u,h,z+v) for u,v in outline)
    n=len(outline);faces=[tuple(reversed(range(n)))]
    for row in range(len(sections)-1):
        for i in range(n):faces.append((row*n+i,row*n+(i+1)%n,(row+1)*n+(i+1)%n,(row+1)*n+i))
    faces.append(tuple(range((len(sections)-1)*n,len(sections)*n)))
    return geometry(name,vertices,faces,mat,'Cabin',smooth=True)


def windscreen_bow(x,y,w=1.337,h=.480):
    # The windscreen and its surrounding seal share one flat plane.
    return 0.0

def windscreen_width(x,y):
    # Slightly narrower at the header, following the inward A-pillar rake.
    return x*(1-.025*min(1,max(0,(y+.240)/.480)))

def glazing(name, w, h, radius, at, angle=0):
    # One optical surface. A bevelled transparent box renders front, back and
    # side reflections on top of one another and makes the cabin look ghosted.
    points=rounded_polygon([(-w/2,-h/2),(w/2,-h/2),(w/2,h/2),(-w/2,h/2)],radius)
    # The laminated front glass is not a flat polygon: a shallow compound bow
    # catches a continuous reflection rather than a single mirror-flat plane.
    # Use nested rounded contours so the shape remains rounded at every row.
    # Bow is photo-guided (not an unpublished factory glazing measurement).
    if name=='Laminated windscreen':
        sampled=[]
        for i,p in enumerate(points):
            q=points[(i+1)%len(points)]
            count=max(1,math.ceil(math.dist(p,q)/.055))
            sampled.extend(tuple(p[k]+(q[k]-p[k])*step/count for k in range(2)) for step in range(count))
        points=sampled
        rings=18;n=len(points)
        vertices=[(0,0,windscreen_bow(0,0,w,h))]
        for row in range(1,rings+1):
            t=row/rings
            vertices.extend((x*t,y*t,windscreen_bow(x*t,y*t,w,h)) for x,y in points)
        faces=[(0,i+1,(i+1)%n+1) for i in range(n)]
        for row in range(rings-1):
            a=1+row*n;b=a+n
            faces.extend((a+i,b+i,b+(i+1)%n,a+(i+1)%n) for i in range(n))
        vertices=[(windscreen_width(x,y),y,windscreen_bow(windscreen_width(x,y),y,w,h)) for x,y,_ in vertices]
    else:
        vertices=[(0,0,0)]+[(x,y,0) for x,y in points]
        faces=[(0,i+1,(i+1)%len(points)+1) for i in range(len(points))]
    obj=geometry(name,vertices,faces,glass,smooth=True)
    obj.location=pos(*at);obj.rotation_euler.x=math.radians(angle)
    return obj


for side in [-1, 1]:
    door_skin=body_panel(side)
    for front, rear in ([(.64,-.82)] if SHORT_BODY else [(.64,-.38),(-.40,-1.25)]):
        # Keep the fine seam clear of interpolated panel triangles. The older
        # almost-coplanar tube intersected the pressing and looked like a zipper.
        tube('Door shut line',[(side*(body_width(h)+.0045),h,front) for h in [.48+i*.67/80 for i in range(81)]],.0012,black)
        tube('Lower door seam',[(side*(body_width(.48)+.0024),.48,front-.02),(side*(body_width(.48)+.0024),.48,rear+.01)],.0017,black)
        tube('Window pillar door seam',[(side*(.746-max(0,h-1.14)*.105)+side*.001,h,front-(.234 if front>0 else 0)*(h-1.14)/.525) for h in [1.14,1.4,1.665]],.0013,black)
        # Vehicle-forward shift, identical on left and right (not screen-left).
        z = rear+(.44 if SHORT_BODY else .19)
        # Cut the finger cup into the pressing; a raised black box read as an
        # applied accessory rather than the factory recessed handle pocket.
        cutter=rounded_flat_plate('Temporary door handle cup',.164,.074,.080,.023,(0,0,0),black)
        cutter.rotation_euler.z=side*math.pi/2;cutter.location=pos(side*.780,.965,z)
        subtract(door_skin,cutter)
        cup=rounded_flat_plate('Recessed door handle bowl',.158,.068,.006,.022,(0,0,0),trim)
        cup.rotation_euler.z=side*math.pi/2;cup.location=pos(side*.743,.965,z)
        cube('Body colour pull handle',(.028,.033,.139),(side*.762,.979,z+.002),paint,bevel=.014)
        cylinder('Door lock barrel',.008,.006,(side*.766,.960,z-.072),chrome,'side',vertices=16)
    cube('Sill moulding',(.055,.064,1.83),(side*.748,.463,-.11),trim,bevel=.016)
    # Moulded arch tapers from its body seam to a broad, curved shoulder.
    for center in [-1.295,1.295]:
        outer=[(-.47,.38),(-.47,.57),(-.425,.76),(-.34,.875),(-.21,.918),
               (0,.928),(.21,.918),(.34,.875),(.425,.76),(.47,.57),(.47,.38)]
        inner=[(-.40,.38),(-.385,.53),(-.35,.66),(-.28,.75),(-.18,.795),
               (0,.815),(.18,.795),(.28,.75),(.35,.66),(.385,.53),(.40,.38)]
        # Subdivide the profile before lofting: the factory trapezoidal arch has
        # soft moulded transitions, not eleven visible polygon corners.
        def resample_arch(profile):
            out=[]
            for i in range(len(profile)-1):
                p0=Vector(profile[max(0,i-1)]);p1=Vector(profile[i])
                p2=Vector(profile[i+1]);p3=Vector(profile[min(len(profile)-1,i+2)])
                for j in range(5):
                    t=j/5
                    v=.5*((2*p1)+(-p0+p2)*t+(2*p0-5*p1+4*p2-p3)*t*t+(-p0+3*p1-3*p2+p3)*t*t*t)
                    out.append(tuple(v))
            return out+[profile[-1]]
        outer=resample_arch(outer);inner=resample_arch(inner);count=len(outer)
        vs=[]
        for t,width in [(0,.746),(.20,.782),(.68,.8195),(.91,.8225),(1,.8095)]:
            for (zo,ho),(zi,hi) in zip(outer,inner):
                vs.append((side*width,ho+(hi-ho)*t,center+zo+(zi-zo)*t))
        faces=[]
        for row in range(4):
            for i in range(count-1):
                a=row*count+i;faces.append((a,a+1,a+count+1,a+count))
        obj=geometry('Contoured moulded wheel arch',vs,faces,trim,smooth=True)
        mod=obj.modifiers.new('Arch inner return','SOLIDIFY');mod.thickness=.008
        tube('Arch to body seam',[(side*.747,h,center+z) for z,h in outer],.0018,black)
        lining=[(side*width,h,center+z) for width in [.60,.817] for z,h in inner]
        geometry('Dark wheel well inner tub',lining,[(i,i+1,i+count+1,i+count) for i in range(count-1)],black,smooth=True)
        prism_side('Wheel well shadow backing',[(center+z,h+.015) for z,h in inner],side,black,inset=-.16,thickness=.006,bevel=0)
    cylinder('Side repeater bezel',.026,.014,(side*.758,.965,.875),trim,'side',vertices=32)
    cylinder('Amber side repeater',.021,.017,(side*.767,.965,.875),amber,'side',vertices=32)

# Square clamshell bonnet with a broad, shallow centre, defined shoulder
# pressings and a continuous rolled leading edge. Photo-guided from Suzuki's
# five-door ex_img04.jpg, not an unpublished factory tooling surface.
xs=sorted(set([-.755+i*1.510/160 for i in range(161)]+[s*x for s in [-1,1] for x in [.748,.735,.72,.69,.60,.58,.54,.525,.51,.48,.465]]))
zs=sorted(set([.69+i*1.16/58 for i in range(59)]+[1.75+.10*math.sin(i*math.pi/2/24) for i in range(25)]))
def bonnet_seam(z):
    # Deeper hinge-end return, tapering to a slim folded nose. This lower
    # edge must not run parallel to the top surface as it did previously.
    return 1.125-.072*min(1,max(0,(z-.69)/1.16))
def bonnet_width_x(x,z):
    # Lid-only plan taper, approved against the Suzuki overhead drawing.
    # The fixed wing/body perimeter stays wider and MUST NOT follow this.
    t=min(1,max(0,(z-.69)/1.16))
    return x*(BONNET_REAR_HALF_WIDTH-BONNET_PLAN_TAPER*t)/.755

def bonnet_closing_edge(side,z,dh=0,inset=0):
    # Upper skin and folded edge use the SAME perimeter, with only a 2mm
    # manufacturing return. The former 33mm splay made the nose corners flare.
    _,h,forward=bonnet_pose(0,bonnet_seam(z)+dh,bonnet_forward(side*.755,z))
    t=min(1,max(0,(z-.69)/1.16))
    width=BONNET_REAR_HALF_WIDTH-BONNET_PLAN_TAPER*t+.002-inset
    return side*width,h,forward
def bonnet_height(x,z):
    # One declining upper profile with a tangent rounded nose. The previous
    # hinge ceiling, original slope and final smoothstep produced three
    # different visible inclinations. Keep the existing closing seam intact.
    t=min(1,max(0,(z-.69)/1.16))
    def pressing(t):
        # Broad radiused shoulder from the centre pressing to the outer rail.
        # The narrower 40mm transition produced thin, over-sharp stripes.
        s=min(1,max(0,(abs(x)-(.490-.110*t))/.085))
        return s*s*(3-2*s)
    roll=.005*(max(0,(abs(x)-.718)/.037)**2)
    forward=bonnet_forward(x,z)
    rear_forward=bonnet_forward(x,.69)
    nose_forward=bonnet_forward(x,1.85)
    hinge_height=1.197-.020*(rear_forward-.651)-.001*(1-pressing(0))-roll
    # The broad centre pressing sits above the outer shoulder, as in the
    # user's reference photos. The outer perimeter and folded seam stay fixed.
    side_forward=bonnet_forward(.755,.69)
    side_height=1.197-.020*(side_forward-.651)-.005
    rear_offset=hinge_height-(side_height-.040*(rear_forward-side_forward))
    section=.005-roll+.011*(1-pressing(t))
    # Blend over the whole stamping. Ending this transition in the first
    # quarter of the lid left a transverse kink in the centre reflection.
    blend=t*t*(3-2*t)
    base=side_height-.040*(forward-side_forward)+rear_offset*(1-blend)+section*blend
    nose_base=side_height-.040*(nose_forward-side_forward)+.005-roll+.011*(1-pressing(1))
    # Keep a visible folded nose, slimmer than the hinge-end return but not
    # the previous 5.5mm knife edge. The closing seam itself stays in place.
    nose_height=bonnet_pose(0,bonnet_seam(1.85)+.012,nose_forward)[1]
    u=min(1,max(0,(forward-(nose_forward-.050))/.050))
    world_height=base-(nose_base-nose_height)*(1-math.sqrt(max(0,1-u*u)))
    # Thin the lid itself progressively toward the front, not the fixed wing
    # or closing seam. Zero value and tangent at the hinge preserve the cowl
    # transition. Retain 78% of the nose fold, so it remains a rolled edge,
    # not a knife edge; the raised centre and shoulder pressing stay intact.
    seam_height=bonnet_pose(0,bonnet_seam(z),forward)[1]
    world_height=seam_height+(world_height-seam_height)*(1-.22*blend)
    # bonnet_pose applies the owner's approved closed-lid rotation once.
    return 1.135+(world_height-1.135-(forward-.69)*math.sin(BONNET_POSE_ANGLE))/math.cos(BONNET_POSE_ANGLE)
def bonnet_forward(x,z):
    # Plan-view front corners turn back into the side return rather than
    # producing knife-sharp rectangular ears alongside the round indicators.
    # Shorten the bonnet, not the measured wheelbase or whole car. The bumper
    # projects beyond the face on the real Jimny and retains its length datum.
    t=min(1,max(0,(z-.69)/1.16))
    # The lid starts in front of the wiper trough, not against the glass.
    # Its rear boundary bows forward at the centre and returns beside the
    # hinge/scuttle cheeks, as visible in the owner's Suzuki reference.
    # Spread the rear shoulder transition across a wider area so the cowl
    # meets the bonnet without the abrupt pinched notch at either hinge.
    cheek=min(1,max(0,(abs(x)-.43)/.27));cheek=cheek*cheek*(3-2*cheek)
    # Keep the centre and hinge-end datums, but shape the two rear shoulders
    # separately instead of drawing a single bow across the whole cowl.
    rear_setback=(.180-.060*cheek)*(1-t)
    # Viewed from above, the bonnet's leading edge bows gently forward in the
    # middle. The face of the grille remains farther forward than this edge.
    front_arc=.045*max(0,1-(abs(x)/.755)**2)*min(1,max(0,(z-1.65)/.20))**2
    corner=min(1,max(0,(abs(x)-.68)/.075));corner=corner*corner*(3-2*corner)
    tip=min(1,max(0,(z-1.74)/.11));tip=tip*tip*(3-2*tip)
    return z-.100*t+rear_setback+front_arc-.010*corner*tip-bonnet_front_relief(z)
verts=[]
for z in zs:
    for x in xs:
        verts.append(bonnet_pose(bonnet_width_x(x,z),bonnet_height(x,z),bonnet_forward(x,z)))
faces=[]
for j in range(len(zs)-1):
    for i in range(len(xs)-1):
        n=j*len(xs)+i
        faces.append((n,n+1,n+1+len(xs),n+len(xs)))
top_faces=len(faces)
nx,nz=len(xs),len(zs)
boundary=(list(range(nx))+[j*nx+nx-1 for j in range(1,nz)]
          +[(nz-1)*nx+i for i in range(nx-2,-1,-1)]
          +[j*nx for j in range(nz-2,0,-1)])
lower_start=len(verts)
for index in boundary:
    j,i=divmod(index,nx);x,z=xs[i],zs[j]
    t=min(1,max(0,(z-.69)/1.16))
    verts.append(bonnet_pose(x*(BONNET_REAR_HALF_WIDTH+.002-BONNET_PLAN_TAPER*t)/.755,bonnet_seam(z)+.0005,bonnet_forward(x,z)))
for i,index in enumerate(boundary):
    nxt=(i+1)%len(boundary)
    faces.append((index,boundary[nxt],lower_start+nxt,lower_start+i))
faces.append(tuple(reversed(range(lower_start,len(verts)))))
# One continuous lid and folded return. The previous separate solidified top
# and side sheets produced two visible lips and intersecting corner bevels.
bonnet=geometry('Crowned clamshell bonnet',verts,faces,paint,bevel=0,smooth=True)
for poly in bonnet.data.polygons:
    if poly.index>=top_faces:poly.use_smooth=False
mod=bonnet.modifiers.new('Rolled bonnet edges','BEVEL');mod.width=.004;mod.segments=3
mod.limit_method='ANGLE';mod.angle_limit=.65;mod.harden_normals=True
for side in [-1,1]:
    return_faces=[(i*2,i*2+1,i*2+3,i*2+2) for i in range(len(zs)-1)]
    if side>0:return_faces=[tuple(reversed(face)) for face in return_faces]
    tube('Bonnet panel shut line',[bonnet_closing_edge(side,z,.0008,.0005) for z in zs],.00018,black)
    # Recessed closing seal behind the 2mm panel gap. A round seam tube alone
    # left a sub-millimetre sightline after SWB mesh quantisation. This follows
    # the actual lid boundary, overlapping both hidden hems without changing
    # either painted surface or covering a larger geometric discontinuity.
    seal=[]
    for z in zs:
        # The former seal projected above the steel return, appearing as a
        # broad dark stripe. Both its top and bottom now stay below the lid.
        for dh in [.002,-.008]:
            seal.append(bonnet_closing_edge(side,z,dh,.003))
    geometry('Recessed painted wing return',seal,return_faces,paint,smooth=True)
    # Actual fixed wing shoulder, between the independent bonnet shut line
    # and the full-width body. This is not another lip following the lid.
    ledge=[];shoulder_steps=10
    for z in zs:
        # Tuck the fixed panel beneath the folded lid, on both sides. This
        # preserves a fine shut line without exposing the gap behind it.
        x,h,forward=bonnet_closing_edge(side,z,.001,.006)
        # Roll the wing's top into the side, with a shared outer edge. A
        # straight horizontal strip formed a mirror-like white highlight and
        # a hard crease that read as an opening from elevated views.
        for j in range(shoulder_steps+1):
            theta=(math.pi/2)*j/shoulder_steps
            across=math.sin(theta)
            ledge.append((x+(side*.746-x)*across,h-.002*(1-math.cos(theta)),forward))
    # Close the triangular end of the genuine shoulder into the nose's back
    # corner. Both surfaces use the same end point, not independent tapers.
    last_inner,last_outer=len(ledge)-(shoulder_steps+1),len(ledge)-1
    ledge.append((side*.746,ledge[last_outer][1],1.720))
    n=shoulder_steps+1
    shoulder_faces=[(i*n+j,i*n+j+1,(i+1)*n+j+1,(i+1)*n+j) for i in range(len(zs)-1) for j in range(shoulder_steps)]
    shoulder_faces.extend((last_inner+j,last_inner+j+1,len(ledge)-1) for j in range(shoulder_steps))
    if side>0:shoulder_faces=[tuple(reversed(face)) for face in shoulder_faces]
    obj=geometry('Fixed wing shoulder beside tapered bonnet',ledge,shoulder_faces,paint,smooth=True)
    mod=obj.modifiers.new('Wing shoulder sheet','SOLIDIFY');mod.thickness=.003
# The solidified, bevelled bonnet already has a rolled lip. A second box here
# previously intersected the front panel and made the nose look double-edged.
def cowl_surface(x,t):
    # Match the lid tangent at the shut line instead of ending a smoothstep
    # ramp 4mm below it. That separate high lip read as a sharp hinge hump.
    bx,bh,bz=bonnet_pose(x,bonnet_height(x,.69),bonnet_forward(x,.69))
    _,next_h,next_z=bonnet_pose(x,bonnet_height(x,.692),bonnet_forward(x,.692))
    rear_z=.651
    h=1.188+.009*(abs(x)/.755)**4
    span=bz-.0025-rear_z
    tangent=(next_h-bh)/(next_z-bz)*span
    delta=bh-.0008-h
    # A cubic arriving with the opposite slope overshoots into a sharp hump.
    # Keep its end tangent inside the monotone interval instead.
    tangent=0 if tangent*delta<=0 else math.copysign(min(abs(tangent),3*abs(delta)),delta)
    height=(2*t**3-3*t*t+1)*h+(-2*t**3+3*t*t)*(bh-.0008)+(t**3-t*t)*tangent
    return x,height,rear_z+span*t
cowl_xs=[-.755+i*1.51/64 for i in range(65)]
cowl_rows=12
cowl_verts=[cowl_surface(x,j/cowl_rows) for j in range(cowl_rows+1) for x in cowl_xs]
cowl_faces=[(j*len(cowl_xs)+i,j*len(cowl_xs)+i+1,(j+1)*len(cowl_xs)+i+1,(j+1)*len(cowl_xs)+i) for j in range(cowl_rows) for i in range(len(cowl_xs)-1)]
obj=geometry('Sculpted wiper trough and curved scuttle',cowl_verts,cowl_faces,paint,smooth=True)
mod=obj.modifiers.new('Scuttle sheet return','SOLIDIFY');mod.thickness=.006
tube('Curved rear bonnet shut line',[(*cowl_surface(x,1)[:2],cowl_surface(x,1)[2]+.002) for x in cowl_xs],.0013,black)
for x in [-.43,-.38,-.33,.30,.35,.40]:
    px,h,z=cowl_surface(x,.42)
    cube('Scuttle ventilation slots',(.010,.002,.034),(px,h+.001,z),black,bevel=.001)
# The hinge is concealed below the lid, not an exposed door-style hinge.
# Its visible identifying detail is the stepped scuttle side return and three
# shallow stamped ribs below the rear edge of the bonnet.
for side in [-1,1]:
    # Follow the same top surface, not an independently positioned pointed cap.
    cheek_top=[(cowl_surface(side*.755,t)[2],cowl_surface(side*.755,t)[1]) for t in [0,.2,.4,.6,.8,1]]
    cheek_end=cheek_top[-1][0]+.025
    prism_side('Stepped bonnet hinge scuttle return',cheek_top+[(cheek_end,1.130),(.681,1.130)],side,paint,inset=.002,thickness=.009,bevel=.004)
    tube('Scuttle hinge panel separation',[(side*.749,1.130,cheek_end),(side*.750,cheek_top[-1][1],cheek_top[-1][0])],.0008,black)
    for h in [1.148,1.162,1.176]:
        # A pressed lip with a dark undercut, rather than three painted bars.
        tube('Scuttle pressed rib lower reveal',[(side*.755,h-.002,.740),(side*.755,h-.002,.810)],.0013,black)
        tube('Scuttle stamped rib',[(side*.755,h,.740),(side*.757,h+.001,.748),(side*.757,h+.001,.802),(side*.755,h,.810)],.0022,paint)

# Cabin ring is formed from real pillars and window openings.
for side in [-1,1]:
    panel=prism_side('Continuous cabin side with window apertures',[(.715,1.14),(.492,1.637),(.466,1.650),(.425,1.666),(.36,1.676),(.28,1.68),(-1.76,1.68),(-1.76,1.14)],side,paint,thickness=.025,bevel=0)
    prism_side('Roof edge rail',[(.483,1.653),(.470,1.667),(.450,1.680),(.415,1.688),(.38,1.69),(-1.74,1.69),(-1.74,1.63)],side,roof,'RoofShell',thickness=.04,bevel=.009)
    windows=[[(.635,1.155),(.439,1.615),(-.305,1.615),(-.305,1.198),(.22,1.198),(.28,1.194),(.34,1.174),(.40,1.162),(.52,1.158)],
             [(-.445,1.185),(-.445,1.620),(-1.173,1.620),(-1.173,1.185)],
             [(-1.325,1.185),(-1.325,1.620),(-1.638,1.620),(-1.650,1.185)]]
    if SHORT_BODY:
        # JB74 has one longer front door and one uninterrupted rear quarter
        # window on each side; it is not a scaled five-door/kei JB64 shell.
        windows=[[(.635,1.155),(.439,1.615),(-.770,1.615),(-.770,1.198),(.22,1.198),(.28,1.194),(.34,1.174),(.40,1.162),(.52,1.158)],
                 [(-.940,1.185),(-.940,1.620),(-1.638,1.620),(-1.650,1.185)]]
    for window_index,points in enumerate(windows):
        boundary=rounded_polygon(points,.052)
        # Form the visible pressed reveal around the front door window rather
        # than stopping the flat door sheet abruptly against the rubber.
        centre_z=(min(z for z,h in boundary)+max(z for z,h in boundary))/2
        outer_boundary=[(centre_z+(z-centre_z)*1.035,1.39+(h-1.39)*1.065) for z,h in boundary] if window_index==0 else boundary
        cutter=prism_side('Temporary rounded window cutter',outer_boundary,side,black,inset=.05,thickness=.12,bevel=0)
        boolean=panel.modifiers.new('True window aperture','BOOLEAN');boolean.operation='DIFFERENCE';boolean.object=cutter
        bpy.context.view_layer.objects.active=panel
        bpy.ops.object.modifier_apply(modifier=boolean.name)
        bpy.data.objects.remove(cutter,do_unlink=True)
        if window_index==0:
            n=len(boundary)
            rings=[(side*(.746-max(0,h-1.14)*.105+offset),h,z) for curve,offset in [(outer_boundary,0),(boundary,-.004)] for z,h in curve]
            reveal=geometry('Front door pressed window reveal',rings,[(i,(i+1)%n,(i+1)%n+n,i+n) for i in range(n)],paint,smooth=True)
            for poly in reveal.data.polygons:
                if poly.normal.x*side<0:
                    bm=bmesh.new();bm.from_mesh(reveal.data);bmesh.ops.reverse_faces(bm,faces=list(bm.faces));bm.to_mesh(reveal.data);bm.free();break
        # A single sheet also prevents the far-side cabin from receiving four
        # layers of alpha at every window edge. Orient outward on either side.
        glass_vertices=[(side*(.746-max(0,h-1.14)*.105-.005),h,z) for z,h in boundary]
        obj=geometry('Rounded flush side glass',glass_vertices,[tuple(range(len(boundary)))],glass)
        for poly in obj.data.polygons:
            if poly.normal.x*side<0:
                bm=bmesh.new();bm.from_mesh(obj.data);bmesh.ops.reverse_faces(bm,faces=list(bm.faces));bm.to_mesh(obj.data);bm.free()
        tube('Window rubber seal',[(side*(.746-max(0,h-1.14)*.105),h,z) for z,h in boundary],.006,trim,closed=True)
    # Fixed quarter-light divider in each rear door, visible in the real car.
    if not SHORT_BODY:
        tube('Rear door quarter light divider',[(side*(.746-max(0,h-1.14)*.105),h,-.925) for h in [1.195,1.610]],.009,trim)
    shut_z=-.82 if SHORT_BODY else -1.25
    tube('Front door trailing shut line' if SHORT_BODY else 'Rear door trailing shut line',[(side*(body_width(h)+.004 if h<1.14 else .747-max(0,h-1.14)*.105),h,shut_z) for h in ([.48,.65,.93,1.05,1.14,1.32,1.51,1.665] if SHORT_BODY else [.93,1.05,1.14,1.32,1.51,1.665])],.0013,black)
    bevel=panel.modifiers.new('Rolled window aperture edge','BEVEL');bevel.width=.004;bevel.segments=2
    tube('Painted folded rain gutter',[(side*.696,1.680,.420),(side*.710,1.685,.38),(side*.720,1.685,.32),(side*.720,1.685,-1.68),(side*.720,1.663,-1.76)],.008,roof,'RoofShell')
    tube('Rain gutter shadow',[(side*.717,1.677,.38),(side*.717,1.677,-1.70)],.0025,trim)
    cube('Mirror mounting triangle',(.035,.16,.11),(side*.754,1.247,.575),trim,bevel=.015)
    cube('Mirror neck',(.14,.039,.05),(side*.817,1.257,.577),trim,bevel=.014)
    housing=cube('Rounded mirror housing',(.205,.145,.137),(side*.897,1.285,.582),glossblack,bevel=.036)
    aperture=rounded_flat_plate('Mirror lens recess cutter',.179,.121,.060,.027,(side*.898,1.285,.516),black)
    subtract(housing,aperture)
    rounded_flat_plate('Rear facing rounded mirror glass',.175,.117,.004,.026,(side*.898,1.285,.542),chrome)

# Flush fuel flap with rounded stamped perimeter on the left rear quarter.
fuel_outline=rounded_polygon([(-1.495,1.004),(-1.495,1.125),(-1.665,1.125),(-1.665,1.004)],.025)
tube('Fuel flap panel gap',[(-body_width(h)-.002,h,z+.10) for z,h in fuel_outline],.0016,black,closed=True)
cylinder('Antenna foot',.025,.028,(-.42,1.714,-1.53),trim,'up',vertices=24)
tube('Flexible roof antenna',[(-.42,1.725,-1.53),(-.42,1.825,-1.60),(-.42,1.89,-1.65)],.0035,trim)

# Crowned roof, pressed roof channels and curved front/back window frames.
roofverts=[]
rxs=sorted(set([-.716+i*1.432/80 for i in range(81)]+[-.70,-.59,-.47,-.235,0,.235,.47,.59,.70]))
rzs=[-1.76,-1.725,-1.65,-1.56,-1.50,-1.3,-.9,-.5,0,.25,.32,.36,.38,.40,.42,.44,.46,.475,.485,.495,.505]
for z in rzs:
    for x in rxs:
        # Keep the measured centre height, but fill out its broad shoulders
        # and roll sharply into thin gutter edges instead of a shallow flat cap.
        h=1.681+.040*(1-(abs(x)/.73)**6)-max(0,abs(z+.60)-1.10)*.15
        h-=.043*min(1,max(0,(z-.38)/.125))**2
        rib=sum(.0024*math.exp(-((x-c)/.016)**2) for c in [-.47,-.235,0,.235,.47])
        h+=rib*min(1,max(0,(z+1.56)/.08))*min(1,max(0,(.40-z)/.08))
        roofverts.append((x,h,z))
rooffaces=[]
for j in range(len(rzs)-1):
    for i in range(len(rxs)-1):
        n=j*len(rxs)+i
        rooffaces.append((n,n+1,n+len(rxs)+1,n+len(rxs)))
top_count=len(roofverts)
roofverts.extend((x,h-(.006+.025*(1-(abs(x)/.73)**6)),z) for x,h,z in list(roofverts))
rooffaces += [tuple(i+top_count for i in reversed(face)) for face in list(rooffaces)]
for j in [0,len(rzs)-1]:
    for i in range(len(rxs)-1):
        a=j*len(rxs)+i;rooffaces.append((a,a+top_count,a+top_count+1,a+1))
for i in [0,len(rxs)-1]:
    for j in range(len(rzs)-1):
        a=j*len(rxs)+i;b=a+len(rxs);rooffaces.append((a,b,b+top_count,a+top_count))
obj=geometry('Crowned pressed steel roof',roofverts,rooffaces,roof,'RoofShell',smooth=True)
mod=obj.modifiers.new('Roof roll','BEVEL');mod.width=.008;mod.segments=3
cube('Windshield upper header',(1.39,.041,.075),(0,1.653,.477),paint,bevel=.014)
front=window_frame('Open windscreen rubber surround',1.385,.527,.042,.026,.018,(0,1.416,.570),trim)
for vertex in front.data.vertices:
    vertex.co.x=windscreen_width(vertex.co.x,vertex.co.z)
    vertex.co.y-=windscreen_bow(vertex.co.x,vertex.co.z)
front.rotation_euler.x=math.radians(-24)
glazing('Laminated windscreen',1.337,.480,.036,(0,1.416,.576),-24)
for side in [-1,1]:
    # A tapered pressed pillar, bounded by the actual cabin side, rather
    # than a constant 50mm tube projecting 30mm beyond the upper door skin.
    vertices=[];rows=33
    for row in range(rows):
        h=1.181+(.647-.181)*row/(rows-1)
        outer=.746-(h-1.14)*.105
        inner=windscreen_width(.6925,(h-1.416)/math.cos(math.radians(24)))-.002
        front=.715+(.492-.715)*(h-1.14)/.497 if h<=1.637 else .492+(.466-.492)*(h-1.637)/.013
        section=[(outer-.003,front-.026),(outer,front-.014),(outer,front-.008),
                 (outer-.003,front-.003),(outer-.010,front),
                 (inner+.010,front),(inner+.003,front-.003),
                 (inner,front-.010),(inner,front-.026)]
        vertices.extend((side*x,h,z) for x,z in section)
    count=len(section);faces=[tuple(reversed(range(count)))]
    for row in range(rows-1):
        for col in range(count):
            a=row*count+col;b=row*count+(col+1)%count
            faces.append((a,b,b+count,a+count))
    faces.append(tuple(range((rows-1)*count,rows*count)))
    geometry('Flush tapered windscreen pillar',vertices,faces,paint,smooth=True)
for x in [-.45,.18]:
    tube('Wiper arm',[(x,1.194,.711),(x+.075,1.23,.702)],.005,trim)
    tube('Wiper blade',[(x-.11,1.233,.705),(x+.22,1.247,.700)],.008,trim)

# Rear closure: one continuous stamped skin, not a rounded lower box joined
# to an unrelated window frame. Both outlines have corresponding corner
# samples so the belt, corners and glazing shoulders share surface normals.
def closure_outline(w,h,r,cy):
    points=[]
    for cx,yy,start in [(w/2-r,h/2-r,0),(-w/2+r,h/2-r,90),(-w/2+r,-h/2+r,180),(w/2-r,-h/2+r,270)]:
        for i in range(9):
            a=math.radians(start+i*11.25)
            points.append((cx+math.cos(a)*r,cy+yy+math.sin(a)*r))
    # Subdivide the long straight runs before the height-dependent body rake.
    # Corner samples alone made the vertical seam cut diagonally across the
    # tapered skin. Both outlines use the same point correspondence.
    sampled=[]
    for i,p in enumerate(points):
        sampled.append(p)
        if i%9==8:
            q=points[(i+1)%len(points)]
            sampled.extend((p[0]+(q[0]-p[0])*t,p[1]+(q[1]-p[1])*t) for t in [.2,.4,.6,.8])
    return sampled
outer=closure_outline(1.400,.966,.036,1.197)
inner=closure_outline(1.178,.458,.056,1.38)
def rear_skin_depth(x,h):
    # The belt rolls inward above the handle rather than leaving a hard
    # horizontal join across the rear door. The lower sheet has a slight crown.
    # Broad, restrained pressing instead of the old sharp 14mm belt trough,
    # which produced a rippled/embossed rectangle in the garage reflections.
    # One monotone belt roll: a Gaussian trough reversed the surface twice
    # and produced several parallel reflected ridges under the rear window.
    belt_t=min(1,max(0,(h-1.075)/.085))
    belt=.0045*belt_t*belt_t*(3-2*belt_t)
    crown=.002*max(0,1-(x/.70)**2)**2*max(0,1-((h-.94)/.25)**2)**2
    # The lower door is pressed inward within its rolled outer margin, not a
    # flat board. Rounded transitions are geometry, never drawn dark bars.
    def ease(v):
        t=min(1,max(0,v));return t*t*(3-2*t)
    inset=.004*ease((.655-abs(x))/.055)*ease((h-.760)/.055)*ease((1.080-h)/.085)
    return -1.800+belt-crown+inset
vs=[];steps=sorted(set([i/32 for i in range(33)]+[.025,.07,.97]));n=len(outer)
for layer in [0,1]:
    for t in steps:
        for (xi,hi),(xo,ho) in zip(inner,outer):
            x=xi+(xo-xi)*t;h=hi+(ho-hi)*t
            # Taper the outer door into the same leaning pillars as its
            # perimeter seam; keep the glazing aperture itself unchanged.
            x-=math.copysign(max(0,h-1.14)*.085*t,x)
            rim=min(1,max(0,t/.16));rim=rim*rim*(3-2*rim)
            z=rear_skin_depth(x,h)+.006*(1-rim)+(.004*max(0,(t-.97)/.03)**2)
            vs.append((x,h,z+layer*.025))
faces=[];count=n*len(steps)
for layer in [0,1]:
    for row in range(len(steps)-1):
        for i in range(n):
            a=layer*count+row*n+i;b=layer*count+row*n+(i+1)%n
            faces.append((a,b,b+n,a+n))
for row in [0,len(steps)-1]:
    for i in range(n):
        a=row*n+i;b=row*n+(i+1)%n;faces.append((a,a+count,b+count,b))
tailgate=geometry('Continuous stamped tailgate skin',vs,faces,paint,smooth=True)
subtract(tailgate,rounded_flat_plate('Temporary tailgate handle recess',.164,.092,.100,.021,(.54,1.007,-1.826),black))
tube('Tailgate perimeter shut line',[(x,h,-1.790) for x,h in closure_outline(1.404,.974,.039,1.197)],.0012,black,closed=True)
for side in [-1,1]:
    # Swept corner pressing joins the side wall to the rear face without
    # overlapping rounded cubes or diagonal pinched highlights at the roof.
    profile=[(.704,-1.794),(.722,-1.790),(.739,-1.778),(.749,-1.758),(.752,-1.720),(.748,-1.675)]
    heights=[.700,.714,.80,.98,1.08,1.13,1.17,1.39,1.60,1.65,1.68]
    vs=[(side*x,max(h,wheel_opening_height(rear_panel_forward(z))),z) for h in heights for x,z in profile]
    faces=[(j*len(profile)+i,j*len(profile)+i+1,(j+1)*len(profile)+i+1,(j+1)*len(profile)+i) for j in range(len(heights)-1) for i in range(len(profile)-1)]
    corner=geometry('Rolled rear body corner',vs,faces,paint,smooth=True)
    mod=corner.modifiers.new('Stamped corner thickness','SOLIDIFY');mod.thickness=.008
window_frame('Tailgate window seal',1.185,.465,.056,.018,.016,(0,1.38,-1.792),trim)
glazing('Tailgate tinted glass',1.140,.420,.045,(0,1.38,-1.796),180)
# Printed ceramic perimeter sits on the pane, inside the physical seal.
# It is not another thick rubber gasket. The real rear view has a clear
# distinction between painted surround, thin seal and the black glass frit.
window_frame('Rear glass ceramic frit',1.140,.420,.045,.019,.001,(0,1.38,-1.797),black,wall_h=.018,inner_radius=.034)
rounded_flat_plate('High brake light painted recess',.168,.039,.013,.016,(0,1.649,-1.804),paint)
rounded_flat_plate('High brake light bezel',.149,.027,.012,.012,(0,1.649,-1.814),trim)
rounded_flat_plate('High brake light',.130,.018,.013,.008,(0,1.649,-1.820),red)
tube('Rear wiper',[(.43,1.190,-1.824),(.05,1.203,-1.828)],.006,trim)
rounded_flat_plate('Tailgate handle recessed cup',.154,.082,.004,.018,(.54,1.007,-1.777),paint)
cube('Tailgate handle finger shadow',(.127,.028,.004),(.54,1.000,-1.797),black,bevel=.008)
cube('Tailgate door handle',(.126,.023,.014),(.54,1.024,-1.824),paint,bevel=.005)
for h in [.71,1.13]:
    cube('Tailgate hinge cover',(.105,.085,.035),(-.672,h,-1.812),trim,bevel=.018)

# Shared factory fascia silhouette: clipped shoulders and a bowed/tapered
# lower edge. The former generic rounded rectangle obscured this key shape.
GRILLE_OUTLINE=[(-.680,1.120),(.680,1.120),(.725,1.109),(.747,1.079),
                (.747,.915),(.734,.889),(.692,.871),(.430,.842),(0,.835),
                (-.430,.842),(-.692,.871),(-.734,.889),(-.747,.915),(-.747,1.079),(-.725,1.109)]
def front_body_bow(x):
    # A shallow front-to-back crown shared by the body, grille and fittings.
    return .020*max(0,1-(x/.755)**2)
def grille_bounds(x):
    sections=[(0,1.120,.835),(.430,1.120,.842),(.680,1.120,.870),
              (.692,1.117,.871),(.725,1.109,.885),(.734,1.097,.889),(.747,1.079,.915)]
    x=abs(x)
    for (a,top,low),(b,top2,low2) in zip(sections,sections[1:]):
        if x<=b:
            t=(x-a)/(b-a)
            return top+(top2-top)*t,low+(low2-low)*t
    return sections[-1][1:]
def factory_grille_relief(x,h):
    # Moulded polymer is not a flat plate: a shallow crown, rolled boundary
    # and recessed lamp seats give real shape to its moving reflections.
    # All dimensions remain small; lamps and slot inserts keep their datums.
    def smooth(t):
        t=max(0,min(1,t));return t*t*(3-2*t)
    top,low=grille_bounds(x)
    v=max(0,min(1,(h-low)/(top-low)))
    edge=min(h-low,top-h,.747-abs(x))
    depth=.004*math.sin(math.pi*v)-.004*(1-smooth(edge/.020))
    for cx in [-.550,.550]:
        radius=math.hypot(x-cx,h-.977)
        depth-=.0025*(1-smooth((radius-.112)/.022))
    return depth
def fascia_plate(name,outline,back,front,mat,group='BodyShell'):
    outline=rounded_polygon(outline,.009);n=len(outline)
    vertices=[(x,h,z) for z in [back,front] for x,h in outline]
    return geometry(name,vertices,[tuple(reversed(range(n))),tuple(range(n,n*2))]+[(i,(i+1)%n,(i+1)%n+n,i+n) for i in range(n)],mat,group,bevel=.0015)
def grille_face(group,mat):
    # A regular curved sheet, not a triangulated bowed n-gon. A triangle fan
    # made conspicuous radial facets around the lights in the preview.
    factory=group=='OEMGrille'
    segments=144 if factory else 96
    xs=[-.747+i*1.494/segments for i in range(segments+1)];rows=33 if factory else 13;vertices=[]
    for depth in [1.8165,1.8615]:
        for x in xs:
            top,low=grille_bounds(x)
            for j in range(rows):
                h=low+(top-low)*j/(rows-1)
                vertices.append((x,h,depth+front_body_bow(x)+(factory_grille_relief(x,h) if factory else 0)))
    n=len(xs)*rows;faces=[]
    for i in range(len(xs)-1):
        for j in range(rows-1):
            a=i*rows+j;faces.extend([(a,a+rows,a+rows+1,a+1),(n+a,n+a+1,n+a+rows+1,n+a+rows)])
        for j in [0,rows-1]:
            a=i*rows+j;faces.append((a,a+rows,n+a+rows,n+a))
    for i in [0,len(xs)-1]:
        for j in range(rows-1):
            a=i*rows+j;faces.append((a,a+1,n+a+1,n+a))
    obj=geometry('Reference shaped grille face',vertices,faces,mat,group,smooth=True)
    obj['factory_relief']=factory
    return obj
def factory_slot(name,x,mat,group):
    def outline(w,h,c):return [(-w/2+c,h/2),(w/2-c,h/2),(w/2,h/2-c),(w/2,-h/2+c),(w/2-c,-h/2),(-w/2+c,-h/2),(-w/2,-h/2+c),(-w/2,h/2-c)]
    outer,inner=outline(.132,.178,.021),outline(.106,.152,.015);n=8
    vertices=[(x+u,.983+h,z) for z in [1.872,1.894] for shape in [outer,inner] for u,h in shape]
    faces=[]
    for i in range(n):
        j=(i+1)%n;faces.extend([(i,j,n+j,n+i),(2*n+i,3*n+i,3*n+j,2*n+j),(i,2*n+i,2*n+j,j),(n+i,n+j,3*n+j,3*n+i)])
    return geometry(name,vertices,faces,mat,group,bevel=.0016)
# Meet the shortened bonnet's folded lip with a narrow shut gap. Extend only
# the painted upper flange, not the grille slots or circular lamp apertures.
# A single sloping closing flange meets the rolled lid. The previous constant-
# height extrusion made a second horizontal shelf under it. Keep the front
# surround/lamps in place; vary only the upper return behind the grille.
nose_closing_height=bonnet_pose(0,bonnet_seam(1.85),bonnet_forward(.755,1.85))[1]
# Preserve the approved grille-face height; the wing's new corner roll must
# not move the whole face down through bonnet_joint_lift's continuation.
paint_outline=[(x*1.0107,.980+(h-.980)*1.105+(.016+nose_closing_height-1.045-.070)*min(1,max(0,(h-1.079)/.041))) for x,h in GRILLE_OUTLINE]
# The lower painted apron meets the bumper with a narrow shut line. The old
# black closing block left a large false void below the grille and at its ends.
for i,h in {4:.872,5:.811,6:.800,7:.800,8:.800,9:.800,10:.800,11:.811,12:.872}.items():
    paint_outline[i]=(paint_outline[i][0],h)
def grille_side_clearance(x,h):
    # Suzuki's side drawing/photo shows the moulded grille return standing
    # ahead of the side landing. Our painted collar hid the entire 45mm-deep
    # grille cheek. Relieve only that overlap, not the bonnet landing, upper
    # lip, centre fascia or lamp positions. No added decorative black strip.
    def smooth(t):
        t=max(0,min(1,t));return t*t*(3-2*t)
    return .032*smooth((abs(x)-.690)/.055)*smooth((h-.880)/.035)*smooth((1.100-h)/.035)
def nose_point(x,h,back):
    # The grille surround retains its width. Only its BACK boundary follows
    # the shared bonnet/wing junction; no separate corner scaling or pinching.
    upper=min(1,max(0,(h-1.070)/.025))
    upper=upper*upper*(3-2*upper)
    # The painted lip must sit just ahead of the grille's 1.8615 front sheet.
    # The old 1.834 plane was behind the grille and even behind the bonnet
    # landing, making the rolled transition an inverted, recessed channel.
    if not back:return x,h-.006*upper,1.871+front_body_bow(x)-grille_side_clearance(x,h)
    source_x=max(-.755,min(.755,x*.755/BONNET_FRONT_FOLD_HALF_WIDTH))
    _,join_h,join_z=bonnet_pose(source_x,bonnet_seam(1.85),bonnet_forward(source_x,1.85))
    outside=min(1,max(0,(abs(x)-BONNET_FRONT_FOLD_HALF_WIDTH)/(.755-BONNET_FRONT_FOLD_HALF_WIDTH)))
    h=h*(1-upper)+(join_h+.060-.001)*upper
    z=1.752+((join_z*(1-outside)+1.720*outside)+.080-1.752)*upper
    if abs(x)>BONNET_FRONT_FOLD_HALF_WIDTH:
        # The entire rear side edge lands on the fixed wing, including its
        # vertical face. Matching only the top left a proud vertical step.
        top=bonnet_joint_frame(1.720)[0]
        world_h=h-.060
        shoulder=min(1,max(0,(world_h-top+.035)/.035))
        shoulder=shoulder*shoulder*(3-2*shoulder)
        target=body_width(world_h)*(1-shoulder)+.746*shoulder
        x=math.copysign(abs(x)*(1-outside)+target*outside,x)
        z=z*(1-outside*(1-upper))+1.800*outside*(1-upper)
    return x,h,z

# An open, continuous surround: four connected rings instead of a warped
# full-width n-gon with Boolean lamp cuts. The actual grille supplies the
# separate lamp apertures; there is no painted sheet behind the optics.
outer=rounded_polygon(paint_outline,.018)
inner=rounded_polygon(GRILLE_OUTLINE,.018)
# Sample the long straight portions too: otherwise their corner-only vertices
# cannot express the shared curve across the front.
sampled_outer=[];sampled_inner=[]
for i,p in enumerate(outer):
    j=(i+1)%len(outer);q=outer[j]
    steps=max(1,math.ceil(math.dist(p,q)/.035))
    for k in range(steps):
        t=k/steps
        sampled_outer.append(tuple(p[a]*(1-t)+q[a]*t for a in range(2)))
        sampled_inner.append(tuple(inner[i][a]*(1-t)+inner[j][a]*t for a in range(2)))
outer,inner=sampled_outer,sampled_inner
roll_steps=12
count=len(outer);nose_rings=[[] for _ in range(roll_steps+4)]
for (x,h),(ix,ih) in zip(outer,inner):
    bx,bh,bz=nose_point(x,h,True)
    fx,fh,fz=nose_point(x,h,False)
    # Keep the outer rim outside the aperture at the clipped shoulders.
    if abs(ix)>.68:fx=math.copysign(max(abs(fx),abs(ix)+.006),fx)
    if ih>1.075:fh=max(fh,ih+.008)
    back=Vector((bx,bh,bz));crest=Vector((fx,fh,fz))
    inner_front=Vector((ix,ih,1.864+front_body_bow(ix)-grille_side_clearance(ix,ih)))
    # Roll the exposed painted crest rather than leaving the former sharp
    # two-plane crease. Explicit rings avoid a bevel being clamped to nearly
    # zero by the short edges in this sampled outline. Keep the wing landing,
    # bonnet seam and grille aperture exactly where they already are.
    start=crest+(back-crest)*min(.80,.024/max(.0001,(back-crest).length))
    end=crest+(inner_front-crest)*min(.80,.024/max(.0001,(inner_front-crest).length))
    nose_rings[0].append(tuple(back))
    for step in range(roll_steps+1):
        t=step/roll_steps
        point=(1-t)**2*start+2*t*(1-t)*crest+t*t*end
        nose_rings[step+1].append(tuple(point))
    nose_rings[roll_steps+2].append(tuple(inner_front))
    nose_rings[roll_steps+3].append((ix,ih,1.752))
nose_faces=[]
for ring_index in range(len(nose_rings)):
    next_ring=(ring_index+1)%len(nose_rings)
    for i in range(count):
        j=(i+1)%count
        nose_faces.append((ring_index*count+i,ring_index*count+j,next_ring*count+j,next_ring*count+i))
front_panel=geometry('Reference shaped painted nose',sum(nose_rings,[]),nose_faces,paint,smooth=True)
# Keep the opening/rear boundary from pulling the broad painted face's
# shading inward. Only the new outer rolled crest is a smooth transition.
for edge in front_panel.data.edges:
    a,b=edge.vertices
    if a//count==b//count and a//count in {0,roll_steps+2,roll_steps+3}:
        edge.use_edge_sharp=True
grille_faces=[grille_face('OEMGrille',grillemetal)]
for x in [-.32,-.16,0,.16,.32]:
    factory_slot('Chamfered factory chrome slot',x,chrome,'OEMGrille')
    cube('Deep grille aperture',(.106,.152,.007),(x,.983,1.867),black,'OEMGrille',bevel=.015)
    for row in range(6):
        for column in range(3):
            centre=x-.031+column*.031+(row%2)*.0155
            if abs(centre-x)>.039:continue
            h=.924+row*.0235
            points=[(centre+math.cos(i*math.tau/6)*.016,h+math.sin(i*math.tau/6)*.0135,1.875) for i in range(6)]
            tube('Inset grille honeycomb',points,.0012,gunmetal,'OEMGrille',closed=True)

def emblem():
    # Suzuki S outline, not the former disconnected approximation.
    # Public-domain geometric logo: Wikimedia File:Suzuki Motor Corporation logo.svg,
    # path3213. Trademark remains Suzuki's; shown only on the depicted vehicle.
    current=Vector((229.03885,140.36372));points=[tuple(current)]
    commands=[
        ('c',(0,0,-8.11688,2.35257,-23.845,12.01832)),
        ('c',(-14.12870,8.68639,-19.66415,14.5199,-19.66415,14.5199)),
        ('l',(-43.51448,-30.07505)),
        ('c',(0,0,18.30956,-13.46604,33.61188,-3.15095)),
        ('l',(20.52108,14.07813)),('l',(2.49893,-1.64997)),('l',(-56.63189,-39.66896)),
        ('c',(0,0,8.1435,-2.35255,23.87428,-12.020963)),
        ('c',(14.12871,-8.686393,19.6402,-14.522567,19.6402,-14.522567)),
        ('l',(43.53577,30.07771)),
        ('c',(0,0,-18.30957,13.46871,-33.61188,3.15095)),
        ('l',(-20.51842,-14.075475)),('l',(-2.49894,1.642005)),('l',(56.60262,39.67692))]
    for kind,values in commands:
        if kind=='l':
            current+=Vector(values);points.append(tuple(current))
        else:
            start=current.copy();c1=start+Vector(values[:2]);c2=start+Vector(values[2:4]);end=start+Vector(values[4:])
            for step in range(1,9):
                t=step/8;p=(1-t)**3*start+3*(1-t)**2*t*c1+3*(1-t)*t*t*c2+t**3*end;points.append(tuple(p))
            current=end
    if (Vector(points[-1])-Vector(points[0])).length<.01:points.pop()
    n=len(points)
    vs=[((x-185.53)*.00135,.983-(y-123.45)*.00135,z) for z in [1.904,1.910] for x,y in points]
    faces=[tuple(range(n)),tuple(reversed(range(n,n*2)))]+[(i,(i+1)%n,(i+1)%n+n,i+n) for i in range(n)]
    badge=geometry('Raised Suzuki S emblem',vs,faces,chrome,'OEMGrille')
    # Bevel the solid boundary, not an inset of the concave cap: an inset
    # self-intersects across the S's narrow diagonal cutouts and fills them.
    bevel=badge.modifiers.new('Plated emblem bevel facets','BEVEL')
    bevel.width=.0025;bevel.segments=1;bevel.limit_method='ANGLE'
    bevel.use_clamp_overlap=True
    return points
suzuki_outline=emblem()

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
    obj.location=pos(0,.983,1.911);obj.parent=groups[group]
    obj.data.materials.append(badgewhite)
    bpy.context.view_layer.update()
    obj.scale.x*=.46/obj.dimensions.x
    obj.scale.y*=.060/obj.dimensions.y
    obj.rotation_euler.x=math.pi/2

for group in ['BlockGrille','RhinoGrille','ScriptGrille','GlossGrille','DeleteGrille','ClassicGrille','MeshGrille']:
    grille_faces.append(grille_face(group,glossblack if group=='GlossGrille' else trim))
    if group in ['DeleteGrille','ClassicGrille']:
        for x in [-.32,-.16,0,.16,.32]:
            factory_slot('Unbadged chamfered factory slot',x,chrome if group=='DeleteGrille' else gunmetal,group)
            cube('Unbadged grille opening',(.106,.152,.007),(x,.983,1.867),black,group,bevel=.015)
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

# LED headlamp assemblies, based on the India Alpha reference: segmented
# reflector bowls around a small convex projector, behind a clear outer lens.
# There is no luminous white halo in the stock daylight headlamp.
for panel in grille_faces:
    # Both the grille AND painted panel must be open, otherwise the reflector
    # bowls are hidden behind flat plastic despite existing in the GLB.
    for x in [-.550,.550]:
        subtract(panel,cylinder('Temporary headlamp aperture',.112,.50,(x,.977,1.81),black,vertices=80))
    for x in [-.697,.697]:
        subtract(panel,cylinder('Temporary indicator aperture',.043,.50,(x,1.061,1.81),black,vertices=48))
for x in [-.550,.550]:
    before_lamp=set(bpy.data.objects)
    ring('Open headlight rubber gasket',.123,.110,.027,(x,.977,1.866),trim,segments=80)
    ring('Headlight retaining bezel',.116,.109,.014,(x,.977,1.884),chrome,segments=64)
    cylinder('Dark headlamp housing',.110,.012,(x,.977,1.823),black,vertices=64)
    for sector in range(12):
        vs=[];faces=[];steps=6
        for row,(radius,depth) in enumerate([(.108,1.884),(.102,1.866),(.079,1.849),(.054,1.858)]):
            for i in range(steps+1):
                a=(sector+(i/steps)*.965)/12*math.tau
                # Alternating, slightly tilted surfaces catch different parts
                # of the environment, as stamped optical reflectors do.
                d=depth+.005*math.sin(i/steps*math.pi)*(1 if sector%2 else -.45)
                vs.append((x+math.cos(a)*radius,.977+math.sin(a)*radius,d))
        for row in range(3):
            for i in range(steps):
                n=row*(steps+1)+i;faces.append((n,n+1,n+steps+2,n+steps+1))
        geometry('Segmented headlight reflector',vs,faces,chrome,smooth=True)
    ring('Projector metal shroud',.065,.049,.017,(x,.982,1.874),chrome,segments=64)
    cylinder('Projector dark optical centre',.048,.006,(x,.982,1.876),optical,vertices=64)
    bpy.ops.mesh.primitive_uv_sphere_add(segments=40,ring_count=20,radius=1,location=pos(x,.982,1.884))
    obj=bpy.context.object;obj.scale=(.046,.017,.046);finish(obj,'Convex projector optic',optical,smooth=True)
    # Stamped reflector partitions, not the previous six decorative LED dots.
    for a in [3.55,4.15,4.75,5.35]:
        pts=[(x+math.cos(a)*r,.977+math.sin(a)*r,z) for r,z in [(.059,1.861),(.082,1.858),(.105,1.882)]]
        tube('Optical reflector partition',pts,.0025,chrome)
    bpy.ops.mesh.primitive_uv_sphere_add(segments=48,ring_count=24,radius=1,location=pos(x,.977,1.889))
    obj=bpy.context.object;obj.scale=(.110,.008,.110);finish(obj,'Curved clear headlamp cover',lens,smooth=True)
    # Calibrated against the full-width front reference: the earlier 246 mm
    # outer housing dominated the fascia. Reduce radial size, preserving depth.
    bpy.context.view_layer.update()
    centre=Vector(pos(x,.977,0))
    radial=Matrix.Translation(centre) @ Matrix.Diagonal((.90,1,.90,1)) @ Matrix.Translation(-centre)
    for lamp_part in set(bpy.data.objects)-before_lamp:
        lamp_part.matrix_world=radial @ lamp_part.matrix_world
        lamp_part.parent=groups['StockHeadlamps']
    side=-1 if x<0 else 1
    # Reference-guided proportion: amber lens is about 36% of the headlamp,
    # not the previous tiny 52 mm lens. Inset its centre to retain the edge seal.
    cylinder('Round front turn signal seal',.045,.016,(side*.697,1.061,1.863),trim,vertices=48)
    cylinder('Round front turn signal',.040,.019,(side*.697,1.061,1.876),amber,vertices=48)
    bpy.ops.mesh.primitive_uv_sphere_add(segments=32,ring_count=16,radius=1,location=pos(side*.697,1.061,1.884))
    obj=bpy.context.object;obj.scale=(.039,.009,.039);finish(obj,'Domed amber indicator lens',amber,smooth=True)
    for offset in [-.030,-.020,-.010,0,.010,.020,.030]:
        extent=math.sqrt(.039**2-offset**2)
        tube('Indicator lens fluting',[(side*.697+offset,1.061-extent,1.892),(side*.697+offset,1.061+extent,1.892)],.0007,amber)

# Reference bumper: an upper horizontal ledge, inset central intake and two
# angular lower pads. Fog lamps are INSIDE actual holes, not chrome rings glued
# onto a rounded bar. Boolean apertures retain their full-depth moulded returns.
def bumper_height(h):
    # Keep the lower edge/approach clearance while lowering the upper ledge.
    # Author apertures at their new centres so round fog optics remain round.
    return .412+(h-.445)*(.320/.392)
profile=[(.445,.565,1.905),(.47,.665,1.925),(.52,.765,1.946),(.60,.811,1.950),(.73,.811,1.950),(.78,.803,1.930),(.82,.786,1.878),(.837,.73,1.852)]
rows=[]
for i in range(len(profile)-1):
    p0=Vector(profile[max(0,i-1)]);p1=Vector(profile[i]);p2=Vector(profile[i+1]);p3=Vector(profile[min(len(profile)-1,i+2)])
    for step in range(4):
        t=step/4;rows.append(.5*((2*p1)+(-p0+p2)*t+(2*p0-5*p1+4*p2-p3)*t*t+(-p0+3*p1-3*p2+p3)*t*t*t))
rows.append(Vector(profile[-1]));columns=65;vs=[]
for back in [False,True]:
    for h,width,depth in rows:
        for col in range(columns):
            u=col/(columns-1)*2-1
            vs.append((u*width,bumper_height(h),1.66 if back else depth-.115*abs(u)**6))
count=len(rows)*columns;faces=[]
for row in range(len(rows)-1):
    for col in range(columns-1):
        a=row*columns+col;faces.extend([(a,a+1,a+columns+1,a+columns),(a+count,a+columns+count,a+columns+count+1,a+count+1)])
for row in range(len(rows)-1):
    for col in [0,columns-1]:
        a=row*columns+col;faces.append((a,a+count,a+count+columns,a+columns))
for row in [0,len(rows)-1]:
    for col in range(columns-1):
        a=row*columns+col;faces.append((a,a+1,a+count+1,a+count))
bumper=geometry('Continuous curved moulded bumper',vs,faces,trim,'StockBumper',smooth=True)
subtract(bumper,cube('Temporary intake opening',(.90,.143,.60),(0,bumper_height(.654),1.84),black,bevel=.018))
for side in [-1,1]:
    subtract(bumper,cylinder('Temporary fog aperture',.068,.65,(side*.607,bumper_height(.667),1.87),black,vertices=64))
    # The real fog lamps sit in broad trapezoidal moulded pockets, not round
    # chrome portholes on an inflated bar. Recess the surrounding face as well.
    pts=[(side*.472,.762),(side*.746,.755),(side*.748,.600),(side*.480,.572)]
    vs=[(x,bumper_height(h),z) for z in [1.909,2.10] for x,h in pts]
    cutter=geometry('Temporary fog pocket',vs,[(0,3,2,1),(4,5,6,7),(0,1,5,4),(1,2,6,5),(2,3,7,6),(3,0,4,7)],black,bevel=.012)
    subtract(bumper,cutter)
mod=bumper.modifiers.new('Injection moulded corner radii','BEVEL');mod.width=.017;mod.segments=4
for poly in bumper.data.polygons:poly.use_smooth=True
mod=bumper.modifiers.new('Stable bumper surface normals','WEIGHTED_NORMAL');mod.keep_sharp=True;mod.weight=50
# The moulded bumper already has a continuous rounded top return. Do not
# place a second horizontal slab above it.
for side in [-1,1]:
    ring('Recessed fog moulding',.068,.051,.075,(side*.607,bumper_height(.667),1.894),trim,group='StockBumper',segments=48)
    cylinder('Fog reflector back',.049,.014,(side*.607,.667,1.876),chrome,group='StockBumper')
    ring('Fog reflector rim',.049,.040,.010,(side*.607,.667,1.891),chrome,group='StockBumper',segments=48)
    bpy.ops.mesh.primitive_uv_sphere_add(segments=32,ring_count=16,radius=1,location=pos(side*.607,.667,1.900))
    obj=bpy.context.object;obj.scale=(.045,.009,.045);finish(obj,'Inset fog lens',lens,'StockBumper',smooth=True)
    # Raised lower protectors have planar bevelled faces, not tubular outlines.
    points=[(side*.28,.45),(side*.28,.515),(side*.36,.551),(side*.51,.551),(side*.585,.495),(side*.555,.456)]
    vertices=[(x,bumper_height(h),z) for z in [1.932,1.975] for x,h in points];count=len(points)
    geometry('Angular lower bumper pad',vertices,[tuple(range(count)),tuple(reversed(range(count,count*2)))]+[(i,(i+1)%count,(i+1)%count+count,i+count) for i in range(count)],trim,'StockBumper',.012)
    cube('Headlight washer cap',(.045,.023,.013),(side*.52,bumper_height(.811),1.887),trim,'StockBumper',bevel=.005)
cube('Deep central bumper intake',(.91,.149,.008),(0,bumper_height(.654),1.82),black,'StockBumper',bevel=.018)
for row in range(5):
    for col in range(14):
        x=-.401+col*.061+(row%2)*.03
        if abs(x)>.42: continue
        h=.582+row*.036
        pts=[(x+math.cos(i/6*math.tau)*.034,bumper_height(h+math.sin(i/6*math.tau)*.022),1.860) for i in range(6)]
        tube('Lower intake honeycomb',pts,.0023,trim,'StockBumper',closed=True)
cube('Front registration mount',(.43,.110,.022),(0,bumper_height(.520),1.978),trim,'StockBumper',bevel=.007)
cube('Blank front registration face',(.412,.090,.004),(0,bumper_height(.520),1.991),gunmetal,'StockBumper',bevel=.002)
def vehicle_lettering(name,text,at,width,mat=chrome,group='BodyShell',rear=False):
    data=bpy.data.curves.new(name,'FONT');data.body=text;data.font=font_block;data.align_x='CENTER';data.align_y='CENTER';data.size=.09;data.extrude=.0007;data.resolution_u=3
    obj=bpy.data.objects.new(name,data);bpy.context.collection.objects.link(obj);obj.parent=groups[group];data.materials.append(mat)
    bpy.context.view_layer.update();obj.scale*=width/max(.001,obj.dimensions.x)
    obj.rotation_euler.x=math.pi/2
    if rear:obj.rotation_euler.z=math.pi
    obj.location=pos(*at)
rear_bumper=cube('Contoured rear bumper',(1.61,.245,.245),(0,.592,-1.79),trim,bevel=.055)
subtract(rear_bumper,cube('Rear number plate recess cutter',(.535,.165,.10),(0,.565,-1.915),black,bevel=.014))
cube('Rear number plate recess',(.535,.165,.015),(0,.565,-1.870),black,bevel=.012)
cube('Rear registration mount',(.445,.104,.012),(0,.565,-1.882),gunmetal,bevel=.005)
def tailgate_badge(name, glyphs, widths, at, width, height, gap=.11, rear=True, mat=chrome, group='BodyShell'):
    # Outline lettering used for the separate SUZUKI badge.
    total=sum(widths)+gap*(len(widths)-1)
    cursor=-total/2
    for index,(pieces,advance) in enumerate(zip(glyphs,widths)):
        for piece in pieces:
            sign=-1 if rear else 1
            points=[(at[0]+sign*(cursor+u)*width/total,at[1]+v*height,z) for z in [at[2],at[2]+sign*.0015] for u,v in piece]
            n=len(piece)
            faces=[tuple(range(n)),tuple(reversed(range(n,n*2)))]+[(i,(i+1)%n,(i+1)%n+n,i+n) for i in range(n)]
            geometry(name+' outline '+str(index),points,faces,mat,group,.00022)
        cursor+=advance+gap

# Official Suzuki vector outlines; no substitute font or hand-drawn glyphs.
with open(os.path.join(ROOT, 'assets/models/jimny-wordmark.json')) as source:
    jimny_wordmark = json.load(source)
wordmark_scale = .184 / jimny_wordmark['width']
wordmark_vertices, wordmark_faces = [], []
for polygon in jimny_wordmark['polygons']:
    start, count = len(wordmark_vertices), len(polygon)
    for depth in [0, .0015]:
        for x, y in polygon:
            wordmark_vertices.append((-.53-(x-jimny_wordmark['width']/2)*wordmark_scale, .826-y*wordmark_scale, -1.8122-depth))
    wordmark_faces.extend([tuple(start+i for i in reversed(range(count))), tuple(start+count+i for i in range(count))])
    wordmark_faces.extend((start+i,start+(i+1)%count,start+(i+1)%count+count,start+i+count) for i in range(count))
wordmark = geometry('JimnyTailgateWordmark', wordmark_vertices, wordmark_faces, chrome, bevel=.00012)
wordmark['source_url'] = jimny_wordmark['source']
wordmark['badge_width_m'] = .184
# Neutral blank registration plates; the vehicle badges remain on the body.
SUZUKI_BADGE={
 'S':[(.95,1),(.13,1),(0,.84),(0,.58),(.15,.46),(.74,.40),(.74,.22),(0,.22),(0,0),(.86,0),(1,.15),(1,.43),(.85,.56),(.26,.62),(.26,.78),(.95,.78)],
 'U':[(0,1),(0,.17),(.17,0),(.83,0),(1,.17),(1,1),(.74,1),(.74,.28),(.65,.22),(.35,.22),(.26,.28),(.26,1)],
 'Z':[(0,1),(1,1),(1,.78),(.36,.22),(1,.22),(1,0),(0,0),(0,.22),(.64,.78),(0,.78)],
 'K':[(0,1),(.26,1),(.26,.63),(.65,1),(1,1),(.50,.53),(1,0),(.65,0),(.26,.40),(.26,0),(0,0)],
 'I':[(0,0),(.27,0),(.27,1),(0,1)]}
tailgate_badge('Suzuki tailgate badge',[[SUZUKI_BADGE[c]] for c in 'SUZUKI'],[1,1,1,1,1,.27],(.51,.786,-1.812),.191,.024,.13)
vehicle_lettering('Allgrip tailgate badge','ALLGRIP',(-.53,.751,-1.809),.13,rear=True)
for side in [-1,1]:
    x=side*.578
    subtract(rear_bumper,cube('Rear lamp recess cutter',(.301,.142,.10),(x,.606,-1.915),black,bevel=.021))
    cube('Rear lamp smoked rim',(.292,.135,.029),(x,.606,-1.897),black,bevel=.020)
    cube('Rear lamp red perimeter',(.264,.108,.020),(x,.606,-1.916),red,bevel=.016)
    cube('Rear reversing reflector',(.096,.072,.024),(x-side*.067,.606,-1.927),chrome,bevel=.008)
    cube('Rear reversing clear lens',(.092,.068,.025),(x-side*.067,.606,-1.940),lens,bevel=.008)
    for dx in [-.035,-.018,0,.018,.035]:
        tube('Rear lens optical ribs',[(x-side*.067+dx,.581,-1.942),(x-side*.067+dx,.631,-1.942)],.001,chrome)
    cube('Rear turn signal section',(.061,.066,.025),(x+side*.030,.606,-1.932),red,bevel=.006)
    cube('Rear bumper top tread',(.27,.012,.13),(side*.60,.714,-1.804),rubber,bevel=.004)

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


def wheel_turn(name, profile, centre, side, mat, group, segments=48):
    """Turn a machined section without smoothing a flat lip into its barrel.

    Each segment owns its vertices. Circumferential normals remain smooth,
    while a deliberate bevel/chamfer must exist in the profile itself. This
    prevents the swollen torus highlights of the old four-ring smooth mesh.
    Profile coordinates are (outward axial distance, radius), in metres.
    """
    x,h,z=centre;vertices=[];faces=[]
    for first,last in zip(profile,profile[1:]):
        start=len(vertices)
        for axial,radius in [first,last]:
            for i in range(segments):
                angle=i/segments*math.tau
                vertices.append((x+side*axial,h+math.cos(angle)*radius,z+math.sin(angle)*radius))
        for i in range(segments):
            j=(i+1)%segments
            faces.append((start+i,start+j,start+j+segments,start+i+segments))
    if side<0:faces=[tuple(reversed(face)) for face in faces]
    return geometry(name,vertices,faces,mat,group,smooth=True)


def wheel_disc(name,radius,depth,at,mat,group,segments=48):
    obj=cylinder(name,radius,depth,at,mat,'side',group,segments)
    # A wheel hub is a flat casting, not a softly shaded sphere.
    for polygon in obj.data.polygons:
        if len(polygon.vertices)>4:polygon.use_smooth=False
    normals=obj.modifiers.new('Flat hub face normals','WEIGHTED_NORMAL')
    normals.keep_sharp=True;normals.weight=70
    return obj


def wheel(group,x,h,z,r=.3465,offroad=False):
    half=.1175 if offroad else .0975
    side=-1 if x<0 else 1
    rim=.1905
    # The casing ends at the groove bed, not the top of the tread. Previously
    # the full-radius casing filled almost every channel, leaving a slick
    # doughnut with thin marks instead of actual blocks and open shoulders.
    # Nominal outside diameter/section width are unchanged by this revision.
    groove=.008 if offroad else .005
    cross=[(rim,half*.84),(.207,half*.93),(r*.71,half*.99),(r*.87,half),
           (r*.955,half*.90),(r-groove-.004,half*.72),(r-groove-.001,half*.45)]
    profile=[(radius,-axial) for radius,axial in cross]+[(r-groove,0)]+list(reversed(cross))
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
        # Two fine mould seams, seated on the carcass rather than floating
        # radial hoops. The outer mould seam does not substitute for tread.
        for radius,axial,thickness in [(rim+.011,half*.915,.0009),(r*.865,half*1.003,.0007)]:
            ring('Fine tyre mould seam',radius,radius-thickness,.0008,(x+offset*axial,h,z),rubber,'side',group,64)
    # Five staggered tread rows with genuinely recessed longitudinal and
    # transverse channels. Crown falloff rounds the shoulder without growing
    # the rolling radius or adding rectangular paddle-like silhouettes.
    count=44 if offroad else 60
    for i in range(count):
        for row in range(5):
            axial=(row-2)*half*.34
            angle=(i+(row%2)*.44+(i%3)*.025)/count*math.tau
            shoulder=abs(row-2)==2
            width=half*((.38 if shoulder else .29) if offroad else .29)
            length=math.tau/count*(.74 if offroad else .87)
            vertices=[]
            for layer in [-groove,0]:
                for u,v in [(-width/2,-length/2),(width/2,-length/2),(width/2,length/2),(-width/2,length/2)]:
                    a=angle+v+u*(.60 if row%2 else -.60)
                    radial=r-(abs(axial+u)/half)**4*(.012 if offroad else .010)+layer
                    vertices.append((x+axial+u,h+math.cos(a)*radial,z+math.sin(a)*radial))
            geometry('Staggered AT tread block' if offroad else 'Road tread rib segment',vertices,
                     [(0,3,2,1),(4,5,6,7),(0,1,5,4),(1,2,6,5),(2,3,7,6),(3,0,4,7)],rubber,group)
        if offroad:
            # Alternating open-shoulder lugs wrap down the sidewall. They are
            # integrated wedges with roots inside the casing, not floating
            # blocks glued onto a smooth tube. No branded tread is copied.
            for flank in [-1,1]:
                angle=(i+(.34 if flank>0 else .04))/count*math.tau
                sweep=math.tau/count*(.66 if i%2 else .74)
                contour=[(half*.965,r*.922),(half*1.018,r*.928),
                         (half*.79,r*.988),(half*.72,r*.979)]
                vertices=[]
                for delta in [-sweep/2,sweep/2]:
                    for axial,radial in contour:
                        a=angle+delta
                        vertices.append((x+flank*axial,h+math.cos(a)*radial,z+math.sin(a)*radial))
                geometry('AT open shoulder wrap lug',vertices,
                         [(0,3,2,1),(4,5,6,7),(0,1,5,4),(1,2,6,5),(2,3,7,6),(3,0,4,7)],rubber,group)
    outer=x+side*(half*.88)
    # Deep bead seat, drop centre and front lip are one credible open rim,
    # rather than several coplanar shiny hoops. Interior stays dark when the
    # user changes the visible powder-coated wheel finish.
    face=half*.88
    wheel_turn('Recessed wheel barrel',[(-.073,.186),(-.060,.177),
               (-.018,.162),(.012,.162),(face-.015,.177)],
               (x,h,z),side,wheel_barrel,group,32)
    if z>0:
        wheel_turn('Front brake rotor annulus',[(.016,.145),(.027,.145),(.027,.087),(.016,.087),(.016,.145)],
                   (x,h,z),side,brake,group)
        wheel_disc('Recessed brake rotor hat',.087,.023,(x+side*.012,h,z),wheel_barrel,group)
        for radius in [.109,.132,.142]:
            wheel_turn('Brake disc machining groove',[(.0273,radius),(.0273,radius-.00055)],
                       (x,h,z),side,caliper,group,32)
        cube('Front brake caliper',(.040,.085,.048),(x+side*.037,h+.027,z+.130),caliper,group,bevel=.007)
        cube('Caliper bridge rib',(.043,.014,.050),(x+side*.037,h+.027,z+.131),caliper,group,bevel=.003)
    else:
        wheel_disc('Rear drum brake',.129,.065,(x,h,z),wheel_barrel,group)
    wheel_turn('Turned alloy flange',[(face-.009,.1905),(face+.003,.1905),
               (face+.005,.1885),(face+.005,.1835),(face+.002,.1805),
               (face-.012,.1765),(face-.017,.1765)],(x,h,z),side,gunmetal if offroad else alloy,group)
    # The factory wheel is five broad Y castings, not five thin jewellery-like
    # forks. The centre cap and five recessed nuts fill the inner third.
    spoke=[(-.027,.071),(-.030,.111),(-.058,.164),(-.047,.178),(-.022,.178),
           (0,.133),(.022,.178),(.047,.178),(.058,.164),(.030,.111),(.027,.071)]
    if offroad:spoke=[(-.021,.058),(-.016,.090),(-.014,.145),(-.022,.176),
                     (.022,.176),(.014,.145),(.016,.090),(.021,.058)]
    for i in range(6 if offroad else 5):
        a=i/(6 if offroad else 5)*math.tau
        vertices=[]
        for depth in [-.014,.002]:
            for u,v in spoke:
                axial=outer+side*(depth-.030*(1-v/.19))
                vertices.append((axial,h+math.cos(a)*v-math.sin(a)*u,z+math.sin(a)*v+math.cos(a)*u))
        n=len(spoke)
        faces=[tuple(range(n)),tuple(reversed(range(n,n*2)))]+[(j,(j+1)%n,(j+1)%n+n,j+n) for j in range(n)]
        geometry('Cast concave spoke' if offroad else 'Sculpted factory split spoke',vertices,faces,gunmetal if offroad else alloy,group,bevel=.0012)
    wheel_disc('Five bolt wheel hub',.081,.019,(outer-side*.017,h,z),gunmetal if offroad else alloy,group)
    for i in range(5):
        a=i/5*math.tau
        at=(outer-side*.006,h+math.cos(a)*.06985,z+math.sin(a)*.06985)
        wheel_disc('Recessed wheel nut well',.0105,.002,at,black,group,24)
        wheel_disc('Wheel nut',.0075,.008,(outer-side*.003,at[1],at[2]),gunmetal,group,6)
    wheel_turn('Wheel centre cap rim',[(face-.006,.046),(face+.002,.046),
               (face+.003,.044),(face+.003,.042)],(x,h,z),side,gunmetal,group,48)
    wheel_disc('Wheel centre cap',.042,.009,(outer-side*.002,h,z),gunmetal,group)
    if not offroad:
        vs=[(outer+side*.003,h-(v-123.45)*.00029,z+(u-185.53)*.00029) for u,v in suzuki_outline]
        geometry('Moulded centre cap Suzuki badge',vs,[tuple(range(len(vs)))],alloy,group)
    # Small moulded size markings and the valve give the wheel a believable scale.
    for label,base_angle in [('ALL TERRAIN' if offroad else 'RADIAL',-.24),('235/75 R15' if offroad else '195/80 R15',math.pi-.28)]:
        radius=r*.79
        for i,letter in enumerate(label):
            angle=base_angle+(i-len(label)/2)*.065
            data=bpy.data.curves.new('Moulded tyre size','FONT');data.body=letter;data.font=font_block
            data.size=.017;data.extrude=.0005;data.resolution_u=3;data.align_x='CENTER'
            obj=bpy.data.objects.new('Moulded tyre size',data);bpy.context.collection.objects.link(obj);obj.parent=groups[group];data.materials.append(rubber)
            tangent=Vector((0,side*math.cos(angle),side*math.sin(angle)))
            radial=Vector((0,-math.sin(angle),math.cos(angle)));normal=tangent.cross(radial)
            obj.rotation_euler=Matrix((tangent,radial,normal)).transposed().to_euler()
            obj.location=pos(x+side*half*.998,h+math.cos(angle)*radius,z+math.sin(angle)*radius)
    cylinder('Tyre valve stem',.004,.018,(outer+side*.007,h-.133,z+.098),trim,'side',group,12)

for side in [-1,1]:
    for z in [-1.295,1.295]:wheel('StockWheels',side*(.6975 if z>0 else .7025),.3465,z)
for x in [-.750,.750]:
    for z in [-1.295,1.295]:wheel('AllTerrainWheels',x,.368,z,.368,True)
# Spare wheel is modelled in wheel coordinates, then rotated onto the tailgate.
wheel('SpareWheel',0,0,0)
groups['SpareWheel'].rotation_euler.z=math.pi/2
groups['SpareWheel'].location=pos(0,.995,-1.870)

# India-spec right-hand-drive cabin, real dashboard volumes and separately shaped seats.
cube('Cabin floor',(1.43,.065,2.57),(0,.645,-.43),carpet,'Cabin',bevel=.014)
# A closed passenger tub, including the sill/footwell joins and firewall. A
# single narrow flat slab left daylight/terrain visible beside the footwells.
cube('Cabin firewall',(1.43,.47,.065),(0,.87,.817),dash,'Cabin',bevel=.018)
cube('Lower dashboard knee panel',(1.33,.19,.18),(0,.957,.56),dash,'Cabin',bevel=.025)
for side in [-1,1]:
    # Keep the sill inside the narrowest lower door section. Its outer edge
    # (.720m) overlaps the floor (.715m) without piercing the .740m body skin.
    cube('Cabin sealed sill',(.090,.15,2.57),(side*.675,.696,-.43),trim,'Cabin',bevel=.018)
    cube('Front footwell mat',(.48,.009,.51),(side*.37,.682,.38),rubber,'Cabin',bevel=.012)
    for line in range(12):cube('Floor mat rib',(.43,.003,.004),(side*.37,.689,.16+line*.037),trim,'Cabin',bevel=.001)
    cube('Rear load area wheel tub',(.14,.27,.54),(side*.64,.78,-1.27),carpet,'Cabin',bevel=.045)
cube('Cabin headliner',(1.35,.025,2.12),(0,1.645,-.56),seat,'Cabin',bevel=.018)
for side in [-1,1]:
    for z,length in ([(0,1.20)] if SHORT_BODY else [(.10,.88),(-.84,.74)]):
        cube('Inner door card',(.032,.40,length),(side*.699,.91,z),trim,'Cabin',bevel=.025)
        cube('Door armrest',(.075,.044,.29),(side*.660,1.005,z-.06),seat,'Cabin',bevel=.018)
    tube('Front seat belt webbing',[(side*.675,1.52,-.36),(side*.628,1.03,-.30),(side*.64,.75,-.29)],.009,seat,'Cabin')
cube('Dashboard moulding',(1.35,.15,.24),(0,1.108,.485),dash,'Cabin',bevel=.025)
cube('Dashboard upper crash pad',(1.35,.060,.25),(0,1.205,.515),dash,'Cabin',bevel=.018)
window_frame('Passenger fascia fine perimeter',.465,.128,.020,.002,.004,(-.365,1.172,.354),black,'Cabin')
rounded_flat_plate('Inset passenger fascia panel',.456,.119,.014,.019,(-.365,1.172,.357),dash,'Cabin')
for side in [-1,1]:
    cube('Demister grille',(.31,.005,.035),(side*.36,1.240,.576),black,'Cabin',bevel=.004)
    for line in range(9):cube('Demister slat',(.004,.003,.031),(side*.36-.13+line*.033,1.244,.576),dash,'Cabin',bevel=.001)
cube('Passenger glovebox',(.48,.175,.15),(-.36,1.002,.47),trim,'Cabin',bevel=.021)
cube('Glovebox latch recess',(.105,.034,.010),(-.36,1.021,.390),black,'Cabin',bevel=.005)
cube('Glovebox release lip',(.081,.014,.018),(-.36,1.027,.380),gunmetal,'Cabin',bevel=.004)
# Broad grab rail and recessed shelf, guided by the NEXA cabin photograph.
cube('Passenger open shelf shadow',(.44,.052,.012),(-.38,1.086,.369),black,'Cabin',bevel=.006)
cube('Passenger grab rail',(.465,.046,.055),(-.38,1.126,.318),gunmetal,'Cabin',bevel=.021)
for x in [-.59,-.17]:
    cylinder('Grab rail end boss',.025,.055,(x,1.126,.321),gunmetal,group='Cabin',vertices=24)
    cylinder('Grab rail bolt',.007,.006,(x,1.126,.290),black,group='Cabin',vertices=12)
cube('Centre console fascia',(.272,.335,.075),(0,1.075,.365),trim,'Cabin',bevel=.018)
cube('Centre infotainment screen',(.206,.133,.017),(0,1.22,.355),black,'Cabin',bevel=.012)
cube('Screen glass',(.183,.103,.019),(0,1.224,.344),glass,'Cabin',bevel=.007)
for x in [-.062,.062]:
    cube('Centre rectangular vent',(.105,.045,.02),(x,1.119,.315),black,'Cabin',bevel=.005)
    for y in [1.105,1.119,1.133]:cube('Centre vent louvre',(.089,.004,.008),(x,y,.301),gunmetal,'Cabin',bevel=.001)
cube('Hazard switch red insert',(.015,.043,.012),(0,1.119,.299),red,'Cabin',bevel=.003)
tube('Hazard warning triangle',[(-.004,1.112,.291),(0,1.125,.291),(.004,1.112,.291),(-.004,1.112,.291)],.0007,badgewhite,'Cabin')
for x in [-.083,0,.083]:
    cylinder('Climate control rim',.028,.014,(x,1.040,.305),steering_satin,group='Cabin',vertices=32)
    cylinder('Climate control knob',.025,.025,(x,1.040,.295),trim,group='Cabin',vertices=24)
    cube('Climate knob index',(.003,.010,.004),(x,1.055,.280),badgewhite,'Cabin',bevel=.001)
    cylinder('Climate knob face',.019,.004,(x,1.040,.280),black,group='Cabin',vertices=32)
    for j in range(12):
        a=j*math.tau/12
        tube('Climate ring grip',[(x+math.cos(a)*.026,1.040+math.sin(a)*.026,.286),(x+math.cos(a)*.028,1.040+math.sin(a)*.028,.286)],.0008,gunmetal,'Cabin')
for x in [-.095,-.047,0,.047,.095]:
    cube('Lower dashboard switch',(.033,.026,.019),(x,.965,.304),trim,'Cabin',bevel=.004)
    cube('Switch legend',(.009,.003,.003),(x,.971,.293),badgewhite,'Cabin',bevel=.001)
for x in [-.55,.55]:
    cylinder('Round dash air vent',.045,.018,(x,1.15,.354),black,group='Cabin',vertices=32)
    ring('Air vent bright rim',.048,.042,.013,(x,1.15,.343),chrome,group='Cabin',segments=32)
    for j in [-1,0,1]:cube('Vent grille',(.065,.005,.008),(x,1.15+j*.015,.342),gunmetal,'Cabin',bevel=.001)
rounded_flat_plate('Integrated instrument fascia',.321,.145,.014,.014,(.38,1.223,.337),trim,'Cabin')
for x in [.30,.46]:
    # The Jimny has square instrument hoods, not two solid rounded blocks.
    # Model a thin open shell around each circular dial, with a recessed back.
    outlines=[]
    for half,radius in [(.069,.012),(.063,.009)]:
        outline=[]
        for cx,cy,start in [(half-radius,half-radius,0),(-half+radius,half-radius,90),(-half+radius,-half+radius,180),(half-radius,-half+radius,270)]:
            for step in range(5):
                a=math.radians(start+step*90/4)
                outline.append((cx+radius*math.cos(a),cy+radius*math.sin(a)))
        outlines.append(outline)
    n=len(outlines[0]);vertices=[(x+u,1.223+v,z) for z in [.326,.373] for outline in outlines for u,v in outline];faces=[]
    for i in range(n):
        j=(i+1)%n
        faces.extend([(i,j,n+j,n+i),(2*n+i,3*n+i,3*n+j,2*n+j),(i,2*n+i,2*n+j,j),(n+i,n+j,3*n+j,3*n+i)])
    geometry('Thin squared instrument hood',vertices,faces,trim,'Cabin',bevel=.0015)
    cube('Instrument recessed back plate',(.127,.127,.008),(x,1.223,.345),black,'Cabin',bevel=.009)
    cylinder('Instrument dial',.057,.021,(x,1.223,.326),black,group='Cabin',vertices=32)
    ring('Instrument chrome bezel',.060,.055,.006,(x,1.223,.314),chrome,group='Cabin',segments=32)
    for tick in range(13):
        a=math.radians(215-tick*23)
        tube('Gauge graduation',[(x+math.cos(a)*r,1.223+math.sin(a)*r,.309) for r in [.044,.050]],.0012,badgewhite,'Cabin')
    tube('Instrument needle',[(x,1.223,.306),(x-.028,1.198,.306)],.0015,red,'Cabin')
# Padded rounded grip, not an extruded rectangular ring. Exact outer/inner
# radii, centre and depth remain compatible with runtime steering extraction.
vertices=[];faces=[];around=72;section=12
for i in range(around):
    a=i*math.tau/around
    for j in range(section):
        b=j*math.tau/section;r=.159+.011*math.cos(b)
        vertices.append((.38+r*math.cos(a),1.16+r*math.sin(a),.26+.014*math.sin(b)))
for i in range(around):
    for j in range(section):faces.append((i*section+j,((i+1)%around)*section+j,((i+1)%around)*section+(j+1)%section,i*section+(j+1)%section))
geometry('Rounded padded steering rim',vertices,faces,trim,'Cabin',smooth=True)
# A gently crowned airbag face catches light like a moulded cover rather than
# the former straight-sided cylinder. The hub/emblem remains in the same plane.
hub_profile=[(0,.229),(.025,.229),(.047,.231),(.061,.237),(.065,.246),(.065,.268),(0,.274)]
vertices=[(.38+r*math.cos(i*math.tau/48),1.16+r*math.sin(i*math.tau/48),z) for r,z in hub_profile for i in range(48)]
faces=[(row*48+i,row*48+(i+1)%48,(row+1)*48+(i+1)%48,(row+1)*48+i) for row in range(len(hub_profile)-1) for i in range(48)]
geometry('Crowned circular steering airbag hub',vertices,faces,trim,'Cabin',smooth=True)
ring('Steering hub satin surround',.067,.063,.008,(.38,1.16,.232),gunmetal,group='Cabin',segments=48)
emblem_count=len(suzuki_outline)
emblem_vertices=[(.38-(x-185.53)*.00032,1.16-(y-123.45)*.00032,z) for z in [.227,.225] for x,y in suzuki_outline]
geometry('Steering wheel Suzuki emblem',emblem_vertices,[tuple(range(emblem_count)),tuple(reversed(range(emblem_count,emblem_count*2)))]+[(i,(i+1)%emblem_count,(i+1)%emblem_count+emblem_count,i+emblem_count) for i in range(emblem_count)],chrome,'Cabin',.0003)
def steering_plate(name,outline,front,depth,mat,bevel=.003):
    n=len(outline);vertices=[(.38+x,1.16+h,z) for z in [front,front+depth] for x,h in outline]
    faces=[tuple(reversed(range(n))),tuple(range(n,n*2))]+[(i,(i+1)%n,(i+1)%n+n,i+n) for i in range(n)]
    return geometry(name,vertices,faces,mat,'Cabin',bevel)
for side in [-1,1]:
    mirror=lambda shape:[(side*x,h) for x,h in shape]
    # Broad sculpted horizontal spokes integrate black switch pods. All wheel
    # geometry stays in the existing 218–282mm extraction/animation envelope.
    steering_plate('Sculpted steering side spoke',mirror([(.044,.035),(.145,.030),(.151,.010),(.141,-.027),(.058,-.041),(.043,-.020)]),.239,.031,trim,.006)
    steering_plate('Steering spoke satin perimeter',mirror([(.065,.030),(.140,.025),(.144,.008),(.134,-.021),(.065,-.031),(.061,-.023),(.127,-.015),(.134,.009),(.133,.018),(.066,.023)]),.232,.008,steering_satin,.0015)
    steering_plate('Steering black switch pod',mirror([(.069,.020),(.131,.016),(.134,.004),(.123,-.014),(.069,-.022)]),.228,.009,black,.003)
    # Small distinct switches and neutral icon strokes, not invented large text.
    for dx,dy in [(.083,.008),(.108,.007),(.084,-.010),(.109,-.009)]:
        cube('Steering tactile switch',(.017,.011,.004),(.38+side*dx,1.16+dy,.226),trim,'Cabin',bevel=.002)
        cube('Steering switch icon stroke',(.006,.0012,.001),(.38+side*dx,1.16+dy,.223),badgewhite,'Cabin',bevel=.0003)
    # Buttons at the inner side include a small directional rocker.
    tube('Steering rocker chevron',[(.38+side*.086,1.175,.223),(.38+side*.089,1.178,.223),(.38+side*.092,1.175,.223)],.0007,badgewhite,'Cabin')
lower_v=[(-.053,-.049),(-.045,-.100),(-.024,-.150),(.024,-.150),(.045,-.100),(.053,-.049),(.037,-.060),(.028,-.105),(.012,-.132),(-.012,-.132),(-.028,-.105),(-.037,-.060)]
steering_plate('Open V lower steering spoke',lower_v,.239,.027,trim,.004)
steering_plate('Lower steering open V satin inlay',[(x*.90,h*.97) for x,h in lower_v],.233,.007,steering_satin,.002)
for side in [-1,1]:
    tube('Column stalk',[(.38+side*.055,1.16,.30),(.38+side*.17,1.18,.31)],.010,trim,'Cabin')
for side in [-1,1]:
    x=side*.37
    upholstered_loft('Sculpted front seat cushion',[(.742,.39,.37,.08),(.755,.445,.445,.08),(.805,.46,.47,.08),(.832,.44,.445,.08),(.840,.40,.405,.08)],x,seat)
    upholstered_loft('Seat cushion woven insert',[(.840,.285,.315,.07),(.851,.315,.352,.07),(.864,.305,.34,.07),(.869,.285,.31,.07)],x,seat_insert)
    upholstered_loft('Shouldered seat back',[(.822,.38,.115,-.105),(.87,.435,.135,-.111),(.99,.45,.13,-.13),(1.12,.438,.12,-.152),(1.205,.39,.105,-.171),(1.245,.325,.08,-.184),(1.255,.27,.060,-.188)],x,seat)
    upholstered_loft('Contoured woven seat back insert',[(.886,.25,.018,-.043),(.92,.302,.024,-.040),(1.03,.31,.028,-.064),(1.13,.29,.025,-.084),(1.191,.245,.017,-.105)],x,seat_insert)
    upholstered_loft('Rounded tapered head restraint',[(1.267,.205,.070,-.19),(1.282,.25,.10,-.19),(1.335,.265,.113,-.198),(1.386,.245,.098,-.207),(1.407,.195,.065,-.208)],x,seat)
    for xoffset in [-.18,.18]:
        upholstered_loft('Sculpted seat side bolster',[(.865,.045,.040,-.030),(.91,.063,.075,-.028),(1.025,.067,.073,-.043),(1.14,.055,.060,-.069),(1.195,.025,.030,-.095)],x+xoffset,seat)
    for xoffset in [-.155,.155]:
        tube('Seat upholstery seam',[(side*.37+xoffset,.885,-.06),(side*.37+xoffset,1.17,-.095)],.0013,stitch,'Cabin')
        tube('Seat cushion seam',[(side*.37+xoffset,.873,-.075),(side*.37+xoffset,.873,.225)],.0013,stitch,'Cabin')
    for xoffset in [-.155,.155]:cube('Seat runner',(.026,.035,.46),(side*.37+xoffset,.708,.02),gunmetal,'Cabin',bevel=.005)
    cube('Seatbelt buckle',(.028,.052,.04),(side*.37-side*.255,.855,-.05),trim,'Cabin',bevel=.004)
    cube('Seatbelt release',(.023,.010,.032),(side*.37-side*.255,.881,-.05),red,'Cabin',bevel=.003)
    for offset in [-.07,.07]:cylinder('Headrest post',.008,.08,(side*.37+offset,1.25,-.18),chrome,'up','Cabin',12)
cube('Rear bench cushion',(1.18,.11,.43),(0,.82,-.83),seat,'Cabin',bevel=.035)
cube('Rear bench back',(1.18,.40,.11),(0,1.03,-1.055),seat,'Cabin',bevel=.035)
for x in [-.37,.37]:cube('Rear head restraint',(.25,.13,.09),(x,1.29,-1.09),seat,'Cabin',bevel=.025)
cube('Transmission console',(.21,.17,.45),(0,.77,.24),trim,'Cabin',bevel=.024)
for z in [-.15,-.32]:
    cylinder('Console cup holder',.036,.012,(0,.747,z),black,'up','Cabin',32)
    ring('Cup holder lip',.041,.035,.008,(0,.755,z),trim,'up','Cabin',segments=32)
cylinder('Gear lever',.012,.16,(0,.92,.26),trim,'up','Cabin',12)
cylinder('Transfer lever',.012,.11,(.07,.90,.15),trim,'up','Cabin',12)
for x,y,z in [(0,1.01,.26),(.07,.965,.15)]:
    bpy.ops.mesh.primitive_uv_sphere_add(segments=20,ring_count=12,radius=.024,location=pos(x,y,z))
    obj=bpy.context.object;obj.scale=(.85,1,1.15);finish(obj,'Gear selector grip',trim,'Cabin',smooth=True)
for side in [-1,1]:
    cube('Sun visor',(.32,.025,.14),(side*.40,1.604,.49),seat,'Cabin',bevel=.015)
    for z in ([.08] if SHORT_BODY else [.08,-.78]):
        cube('Door handle bezel',(.027,.07,.13),(side*.671,1.076,z+.19),black,'Cabin',bevel=.012)
        cube('Interior door release',(.032,.018,.09),(side*.649,1.081,z+.19),chrome,'Cabin',bevel=.005)
        cube('Door storage pocket',(.06,.085,.32),(side*.654,.77,z),trim,'Cabin',bevel=.014)
interior_mirror=cube('Interior rear-view mirror',(.20,.072,.025),(0,1.522,.545),trim,'Cabin',bevel=.012)
mirror_recess=rounded_flat_plate('Interior mirror recess cutter',.183,.058,.020,.010,(0,1.522,.530),black,'Cabin')
subtract(interior_mirror,mirror_recess)
rounded_flat_plate('Interior rounded mirror glass',.18,.055,.004,.009,(0,1.522,.536),chrome,'Cabin')

# Reproducible, reference-guided detail pass before batching/export.
with open(os.path.join(ROOT,'modeling','accuracy_revision.py')) as revision:
    exec(compile(revision.read(),'accuracy_revision.py','exec'),globals())

# The revision adds optical fog components after the bumper is authored.
# Move those complete round lenses to the revised pocket, without squashing
# their circular cross-sections along with the bumper's height change.
for obj in list(groups['StockBumper'].children):
    if obj.name.startswith('Fog pocket moulded rolled return'):
        remap_points(obj,lambda x,h,z:(x,bumper_height(h),z))
    elif obj.name.startswith(('Fog dark optical backing','Fog rolled reflector lip',
                              'Fog bowl reflector quadrant','Fog lamp bulb shield','Fog clear cover')):
        obj.location.z+=bumper_height(.667)-.667
# The flatter windscreen must not leave the rear-view mirror outside the glass.
for obj in list(groups['Cabin'].children):
    if obj.name.startswith(('Interior rear-view mirror','Interior rounded mirror glass')):
        obj.location.y+=.055

# Bow the grille itself and its parts together, while shifting each round lamp
# rigidly so its circular optics remain circular. Work before final transforms.
for group_name in ['OEMGrille','BlockGrille','RhinoGrille','ScriptGrille','GlossGrille','DeleteGrille','ClassicGrille','MeshGrille','StockHeadlamps']:
    for obj in list(groups[group_name].children):
        if obj.type not in {'MESH','CURVE'}:continue
        if obj.type=='MESH' and obj.name.startswith('Reference shaped grille face'):
            continue  # authored with the shared curve already
        else:
            corners=[obj.matrix_world@Vector(corner) for corner in obj.bound_box]
            centre=(min(p.x for p in corners)+max(p.x for p in corners))/2
            if group_name!='StockHeadlamps' and max(p.x for p in corners)-min(p.x for p in corners)>.20:
                remap_points(obj,lambda x,h,z:(x,h,z+front_body_bow(x)))
            else:
                obj.location.y-=front_body_bow(centre)

# Move complete front assemblies, preserving circular optics and flat slots.
# This is not the reverted nonlinear warp. New bonnet/wing geometry above is
# authored at its final heights; transforms happen BEFORE normals are baked.
front_groups=['OEMGrille','BlockGrille','RhinoGrille','ScriptGrille',
              'GlossGrille','DeleteGrille','ClassicGrille','MeshGrille',
              'StockHeadlamps']
for name in front_groups:
    # Keep the approved complete-fascia position under the revised bonnet's
    # rolled leading edge. This is 45mm above the preceding fascia datum.
    # All round optics and grille variants retain their dimensions.
    groups[name].location.z-=.060
    groups[name].location.y+=.080
for obj in list(groups['BodyShell'].children):
    if obj.name.startswith(('Reference shaped painted nose','Round front turn signal',
                            'Domed amber indicator lens','Indicator lens fluting')):
        obj.location.z-=.060
        obj.location.y+=.080
        if not obj.name.startswith('Reference shaped painted nose'):
            corners=[obj.matrix_world@Vector(corner) for corner in obj.bound_box]
            obj.location.y-=front_body_bow((min(p.x for p in corners)+max(p.x for p in corners))/2)

# +Z is forward, so the driver's right is -X when sitting inside. Mirror the
# symmetric cabin's dashboard layout into the India-market right-hand position.
groups['Cabin'].scale.x=-1

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
if SHORT_BODY:
    # Remove 340 mm only from the centre of the platform. The cut is between
    # the wheel arches, so wheel/arch radii, bonnet and both end assemblies
    # retain their dimensions. Authored SWB doors/windows above bridge it.
    # Use world coordinates: the spare wheel and cabin have rotated parents.
    bpy.context.view_layer.update()
    for obj in bpy.context.scene.objects:
        if obj.type!='MESH':continue
        world=obj.matrix_world.copy();inverse=world.inverted()
        rigid_cabin=obj.parent==groups['Cabin'] and not any(s in obj.name.lower() for s in ['floor','headliner','inner door card','sealed sill'])
        centre_z=sum(-(world@v.co).y for v in obj.data.vertices)/max(1,len(obj.data.vertices))
        for vertex in obj.data.vertices:
            p=world@vertex.co;z=-p.y
            if rigid_cabin:
                z+=.17 if centre_z<-.65 else -.17
            else:
                z=(z+.17 if z<=-.82 else z-.17 if z>=-.48 else -.65)
            p.y=-z;vertex.co=inverse@p
        bm=bmesh.new();bm.from_mesh(obj.data)
        bmesh.ops.remove_doubles(bm,verts=list(bm.verts),dist=.000001)
        bmesh.ops.dissolve_degenerate(bm,edges=list(bm.edges),dist=.000001)
        bm.to_mesh(obj.data);bm.free();obj.data.update()
    groups['BodyShell']['body_style']='3-door JB74 wide-body'
    groups['BodyShell']['wheelbase_m']=2.250
else:
    groups['BodyShell']['body_style']='5-door long wheelbase'
    groups['BodyShell']['wheelbase_m']=2.590
# Boolean lamp openings must not average their recessed walls into the broad
# front face. That generated the dark, stair-stepped halo, even with runtime
# shadows disabled. Give the bowed sheet its own continuous loop normals,
# keeping the aperture wall normals independent. Do this after the SWB edit,
# before material batching/export, so both versions keep the same surface.
for obj in bpy.context.scene.objects:
    if obj.type!='MESH' or not obj.name.startswith('Reference shaped grille face'):continue
    mesh=obj.data;world=obj.matrix_world.copy()
    inverse_normal=world.to_3x3().transposed()
    front=1.7815-(.170 if SHORT_BODY else 0)
    back=front-.045
    factory=obj.get('factory_relief',False)
    def surface(x,h):return front_body_bow(x)+(factory_grille_relief(x,h+.060) if factory else 0)
    normals=[tuple(n.vector) for n in mesh.corner_normals]
    for polygon in mesh.polygons:
        points=[world@mesh.vertices[mesh.loops[i].vertex_index].co for i in polygon.loop_indices]
        for depth,sign in [(front,1),(back,-1)]:
            if all(abs(-p.y-depth-surface(p.x,p.z))<(.0008 if factory else .00015) for p in points):
                for loop_index,p in zip(polygon.loop_indices,points):
                    epsilon=.0001
                    dx=(surface(p.x+epsilon,p.z)-surface(p.x-epsilon,p.z))/(2*epsilon)
                    dh=(surface(p.x,p.z+epsilon)-surface(p.x,p.z-epsilon))/(2*epsilon)
                    n=Vector((-dx,-1,-dh))*sign
                    normals[loop_index]=tuple((inverse_normal@n).normalized())
                break
    mesh.normals_split_custom_set(normals)
# Authored surface coordinates let the web paint/plastic microtexture actually
# follow the mesh. Previously these materials had maps but no UV coordinates.
for obj in bpy.context.scene.objects:
    if obj.type!='MESH':continue
    mesh=obj.data
    if mesh.materials[0].name not in {'BodyPaint','RoofPaint','TyreRubber','MouldedPlastic','WovenCabinFabric','CabinSeatInsert','CabinCarpet','CabinDashboard'}:continue
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
        if obj.name == 'JimnyTailgateWordmark':continue
        if obj.type=='MESH':
            matname=obj.data.materials[0].name
            # Keep the curved bonnet and its immediate joins separate from
            # the rest of the paint so the web optimizer can preserve them.
            protected=matname=='BodyPaint' and obj.name.startswith(('Crowned clamshell bonnet','Fixed wing shoulder','Sculpted wiper trough','Reference shaped painted nose','Stepped bonnet hinge scuttle'))
            by_material.setdefault((matname,protected),[]).append(obj)
    for (name,protected),items in by_material.items():
        bpy.ops.object.select_all(action='DESELECT')
        for obj in items:obj.select_set(True)
        bpy.context.view_layer.objects.active=items[0]
        if len(items)>1:bpy.ops.object.join()
        items[0].name=root.name+'__'+name+('__ProtectedBonnet' if protected else '')

# Bake local cavity occlusion into vertex colour. This is geometry-derived,
# not a photograph or a prepainted body texture: owners can still change paint.
# A short 18cm ray range captures seams, grille recesses and wheel barrels
# without baking a rack/other optional part's shadow into the stock body.
print('Baking local surface occlusion for the real-time model',flush=True)
hidden_groups={'AllTerrainWheels','BlockGrille','RhinoGrille','ScriptGrille','GlossGrille','DeleteGrille','ClassicGrille','MeshGrille'}
transparent={'WindowGlass','LampLens','OpticalGlass'}
occluders=[];triangles=[]
bpy.context.view_layer.update()
for obj in bpy.context.scene.objects:
    if obj.type!='MESH' or obj.parent.name in hidden_groups or obj.data.materials[0].name in transparent|{'IntakeShadow'}:continue
    start=len(occluders);obj.data.calc_loop_triangles()
    occluders.extend(obj.matrix_world@v.co for v in obj.data.vertices)
    triangles.extend(tuple(start+i for i in t.vertices) for t in obj.data.loop_triangles)
bvh=BVHTree.FromPolygons(occluders,triangles,all_triangles=True)
directions=[]
for i in range(12):
    r=math.sqrt((i+.5)/12);a=i*2.39996323
    directions.append((r*math.cos(a),r*math.sin(a),math.sqrt(1-r*r)))
for obj in bpy.context.scene.objects:
    # The browser deliberately disables vertex AO on machined alloy. Its flat
    # faces should read through geometry/PBR reflections, not baked blotches.
    # Omit that unused stream (and fixed dark barrel AO) instead of reducing
    # the precision of visible hard-edged wheel faces to hit the web budget.
    if obj.type!='MESH' or obj.data.materials[0].name in transparent|{'MachinedAlloy','WheelBarrelDark'}:continue
    # The grille sheet needs smooth material shading, not low-frequency
    # per-vertex dark patches around its cut-outs. Recess walls remain dark
    # IntakeShadow geometry; real-time lighting/occlusion still supplies depth.
    if obj.name.startswith('OEMGrille__GrilleAnthracite') or obj.name.startswith(tuple(name+'__'+mat for name in hidden_groups if name.endswith('Grille') for mat in ['MouldedPlastic','GlossBlackGrille'])):continue
    data=obj.data;col=data.color_attributes.new(name='CavityOcclusion',type='BYTE_COLOR',domain='POINT')
    data.color_attributes.active_color=col
    normal_matrix=obj.matrix_world.to_3x3().inverted().transposed()
    for vertex,value in zip(data.vertices,col.data):
        n=(normal_matrix@vertex.normal).normalized()
        if n.length<.1:value.color=(1,1,1,1);continue
        helper=Vector((0,0,1)) if abs(n.z)<.9 else Vector((0,1,0))
        tangent=n.cross(helper).normalized();bitangent=n.cross(tangent)
        origin=obj.matrix_world@vertex.co+n*.002
        obscured=0
        for dx,dy,dz in directions:
            hit,_,_,distance=bvh.ray_cast(origin,tangent*dx+bitangent*dy+n*dz,.18)
            if hit is not None:obscured+=1-distance/.18
        ao=max(.30,1-.72*obscured/len(directions))
        value.color=(ao,ao,ao,1)
bpy.ops.object.select_all(action='DESELECT')
for obj in bpy.context.scene.objects:obj.select_set(True)
print('Exporting web model',flush=True)
bpy.ops.export_scene.gltf(filepath=os.path.join(OUT,MODEL_STEM+'-blender.glb'),export_format='GLB',export_yup=True,
                          export_apply=True,export_extras=True,export_cameras=False,export_lights=False,
                          export_vertex_color='ACTIVE',export_all_vertex_colors=False,
                          # Compress once in optimize-model.mjs. Blender's
                          # scene-wide quantization erases the small S bevels.
                          export_meshopt_compression_enable=False)

# Native editable project contains each replaceable assembly plus a reproducible studio scene.
for name in ['AllTerrainWheels','BlockGrille','RhinoGrille','ScriptGrille','GlossGrille','DeleteGrille','ClassicGrille','MeshGrille']:
    groups[name].hide_render=True;groups[name].hide_viewport=True
    for obj in groups[name].children:obj.hide_render=True;obj.hide_viewport=True
world=bpy.data.worlds.new('Poly Haven studio environment');bpy.context.scene.world=world;world.use_nodes=True
env=world.node_tree.nodes.new('ShaderNodeTexEnvironment')
hdr=os.path.join(ROOT,'assets','environments','rostock-laage-airport-1k.hdr')
if os.path.exists(hdr):
    env.image=bpy.data.images.load(hdr)
    world.node_tree.links.new(env.outputs['Color'],world.node_tree.nodes['Background'].inputs['Color'])
world.node_tree.nodes['Background'].inputs['Strength'].default_value=.65
for name,at,power,size in [('Main softbox',(3.5,5.0,4.5),700,5),('Fill softbox',(-4,3,1),450,4)]:
    bpy.ops.object.light_add(type='AREA',location=pos(*at));light=bpy.context.object;light.name=name;light.data.energy=power;light.data.shape='DISK';light.data.size=size
    light.rotation_euler=(Vector(pos(0,.8,0))-light.location).to_track_quat('-Z','Y').to_euler()
bpy.ops.object.camera_add(location=pos(4.25,1.98,5.35))
camera=bpy.context.object;camera.rotation_euler=(Vector(pos(0,.90,-.02))-camera.location).to_track_quat('-Z','Y').to_euler();camera.data.lens=48;bpy.context.scene.camera=camera
scene=bpy.context.scene;scene.render.engine='CYCLES';scene.cycles.samples=48;scene.cycles.use_denoising=True
scene.render.resolution_x=1100;scene.render.resolution_y=850;scene.render.resolution_percentage=100
scene.render.film_transparent=True
scene.render.image_settings.file_format='PNG';scene.render.filepath=os.path.join(ROOT,'modeling','jimny-blender-preview.png')
# Reference stays in the editable project only, outside the web export.
reference=bpy.data.objects.new('Official Suzuki five-door bonnet reference — globalsuzuki.com',None)
bpy.context.collection.objects.link(reference);reference.empty_display_type='IMAGE'
# https://www.globalsuzuki.com/automobile/lineup/jimny5door/img/ex_img04.jpg
reference.data=bpy.data.images.load(os.path.join(ROOT,'modeling','references','suzuki-official-bonnet-detail.jpg'))
reference.empty_display_size=4;reference.location=(4,0,1.5);reference.hide_render=True
for screen in bpy.data.screens:
    for area in screen.areas:
        if area.type=='VIEW_3D':
            area.spaces.active.region_3d.view_perspective='CAMERA'
            area.spaces.active.shading.type='MATERIAL'
bpy.ops.file.pack_all()
# Preserve the original editable masters while this geometry is under review.
native=MODEL_STEM+'-body-review.blend'
bpy.ops.wm.save_as_mainfile(filepath=os.path.join(ROOT,'modeling',native))
print('MODEL_EXPORT',os.path.getsize(os.path.join(OUT,MODEL_STEM+'-blender.glb')))
if '--skip-render' not in __import__('sys').argv:
    bpy.ops.render.render(write_still=True)
