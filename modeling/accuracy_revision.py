"""Reference-guided JB74/JC74 surface revision, run by build_jimny.py.

Original geometry, not manufacturer CAD. India Alpha AT is the cabin target.
Published envelopes constrain scale; photo-guided details are not fitment data.
All coordinates below use the author's x / height / forward convention.
"""

def remove_named(prefixes, parent=None):
    for obj in list(bpy.data.objects):
        if obj.name.startswith(tuple(prefixes)) and (parent is None or obj.parent==groups[parent]):
            bpy.data.objects.remove(obj,do_unlink=True)

def remap_points(obj, transform):
    bpy.context.view_layer.update()
    world=obj.matrix_world.copy();inverse=world.inverted()
    def change(v):
        p=world@Vector(v);x,h,z=transform(p.x,p.z,-p.y)
        return inverse@Vector(pos(x,h,z))
    if obj.type=='MESH':
        for vertex in obj.data.vertices:vertex.co=change(vertex.co)
    elif obj.type=='CURVE':
        for spline in obj.data.splines:
            for point in spline.points:point.co=(*change(point.co[:3]),point.co[3])

# The old bare-spare length exceeded even the covered-spare specification.
# Move the rear closure 78mm forward, but do not compress axles/round arches.
rear_exclusions=('Contoured moulded wheel arch','Arch to body seam','Dark wheel well',
                 'Wheel well shadow','Chassis','Live axle','Axle differential','Coil suspension')
for obj in list(groups['BodyShell'].children)+list(groups['RoofShell'].children):
    if obj.name.startswith(rear_exclusions):continue
    if obj.name.startswith(('Contoured rear bumper','Rear number','Rear registration','Rear lamp',
                            'Rear reversing','Rear lens','Rear turn','Rear bumper top','Showroom rear')):
        continue
    def rear_map(x,h,z):
        closure=min(1,max(0,(-z-1.25)/.45))
        amount=.078*closure
        # Suzuki side/rear-quarter photographs show a modest upper closure
        # rake and rolled roof shoulder. Retain the upright lower tailgate and
        # its measured envelope; lean only the glazed upper closure forward.
        # The same transform covers the side aperture, rear glass/seal, header
        # and roof, avoiding disconnected surfaces from object-only rotation.
        upper=min(1,max(0,(h-1.13)/.55))
        rake=.070*upper*closure
        return x,h,z+amount+rake
    if obj.type in {'MESH','CURVE'}:
        remap_points(obj,rear_map)
        # The tall corner pressings used to retain their beltline width all
        # the way to the roof, leaving square ears outside the tapered sides.
        # Bring these stamped corners inboard with the same 0.105 side lean.
        if obj.name.startswith('Rolled rear body corner'):
            remap_points(obj,lambda x,h,z:(x-math.copysign(max(0,h-1.14)*.105,x),h,z))
        if obj.name.startswith('Tailgate perimeter shut line'):
            # Keep the rubber perimeter behind the newly tapered corner, not
            # outside it as a wide black strip visible from the side.
            remap_points(obj,lambda x,h,z:(x-max(0,h-1.14)*.085*x/.73,h,z))
    elif obj.type=='FONT' and -obj.location.y<-1.65:obj.location.y-=.078

# Less extended mirror reach, retaining a real recessed, rounded lens.
# This is photo-guided, not a claim of a published mirror-width measurement.
for obj in list(groups['BodyShell'].children):
    if obj.name.startswith(('Rounded mirror housing','Rear facing rounded mirror glass')):
        remap_points(obj,lambda x,h,z:(x-math.copysign(.035,x),h,z))
    elif obj.name.startswith('Mirror neck'):
        remap_points(obj,lambda x,h,z:(x-math.copysign(.0175,x),h,z))

# Bonnet continuity is authored in build_jimny.py. Do not add another ridge
# over its leading roll here (the previous patch lifted a narrow extra shelf).
for obj in list(groups['BodyShell'].children):
    if obj.name.startswith('Body colour pull handle'):
        for mod in obj.modifiers:
            if mod.type=='BEVEL':mod.width=.009;mod.segments=4

# Continuous reflector bowls and a proper convex projector, not radial spokes.
remove_named(['Segmented headlight reflector','Projector metal shroud',
              'Projector dark optical centre','Convex projector optic',
              'Optical reflector partition','Curved clear headlamp cover'])
for x in [-.550,.550]:
    vs=[];faces=[];segments=64
    profile=[(.097,1.891),(.094,1.879),(.084,1.864),(.066,1.853),(.043,1.854)]
    for radius,z in profile:
        for i in range(segments):
            a=i*math.tau/segments
            vs.append((x+math.cos(a)*radius,.977+math.sin(a)*radius,z))
    for row in range(len(profile)-1):
        for i in range(segments):
            j=(i+1)%segments;faces.append((row*segments+i,row*segments+j,(row+1)*segments+j,(row+1)*segments+i))
    geometry('Continuous optical reflector bowl',vs,faces,chrome,'StockHeadlamps',smooth=True)
    ring('Headlamp inner optical separation',.087,.081,.003,(x,.977,1.889),gunmetal,group='StockHeadlamps',segments=64)
    ring('Projector recessed black surround',.057,.044,.013,(x,.987,1.882),gunmetal,group='StockHeadlamps',segments=64)
    ring('Projector machined lip',.046,.041,.004,(x,.987,1.891),chrome,group='StockHeadlamps',segments=64)
    cylinder('Projector optical backing',.041,.005,(x,.987,1.883),black,group='StockHeadlamps',vertices=48)
    bpy.ops.mesh.primitive_uv_sphere_add(segments=40,ring_count=16,radius=1,location=pos(x,.987,1.892))
    obj=bpy.context.object;obj.scale=(.040,.012,.040);finish(obj,'Convex projector glass',optical,'StockHeadlamps',smooth=True)
    # Small lower reflector chambers, not a decorative LED halo.
    for a,b in [(3.48,4.02),(4.14,4.68),(4.80,5.34),(5.46,5.92)]:
        points=[(x+math.cos(a+(b-a)*i/12)*.082,.977+math.sin(a+(b-a)*i/12)*.082,1.887) for i in range(13)]
        tube('Lower reflector chamber edge',points,.0016,chrome,'StockHeadlamps')
    bpy.ops.mesh.primitive_uv_sphere_add(segments=48,ring_count=20,radius=1,location=pos(x,.977,1.895))
    obj=bpy.context.object;obj.scale=(.099,.006,.099);finish(obj,'Single curved optical headlamp cover',lens,'StockHeadlamps',smooth=True)

# Fog lamps are also miniature optical bowls, not flat chrome disks.
for obj in list(groups['StockBumper'].children):
    if obj.name.startswith('Continuous curved moulded bumper'):
        # A flatter moulded cheek with a restrained return, not a swollen bar.
        remap_points(obj,lambda x,h,z:(x,h,z+.014*math.exp(-((abs(x)-.70)/.13)**2)*min(1,max(0,(z-1.80)/.09))))
    elif obj.name.startswith('Upper bumper ledge'):
        remap_points(obj,lambda x,h,z:(x,.818+(h-.818)*.62,z))
    elif obj.name.startswith('Angular lower bumper pad'):
        remap_points(obj,lambda x,h,z:(x,h,z-.011*min(1,max(0,(abs(x)-.30)/.20))))
remove_named(['Fog reflector back','Fog reflector rim','Inset fog lens'])
for side in [-1,1]:
    x=side*.607
    tube('Fog pocket moulded rolled return',[(side*.479,.758,1.916),(side*.737,.752,1.916),(side*.741,.606,1.913),(side*.487,.582,1.913),(side*.479,.758,1.916)],.0035,trim,'StockBumper')
    cylinder('Fog dark optical backing',.048,.007,(x,.667,1.866),black,group='StockBumper',vertices=48)
    ring('Fog rolled reflector lip',.048,.043,.008,(x,.667,1.891),chrome,group='StockBumper',segments=48)
    for sector in range(4):
        a=sector*math.pi/2
        vs=[(x+math.cos(a+t)*r,.667+math.sin(a+t)*r,z) for r,z in [(.043,1.89),(.017,1.873)] for t in [i*math.pi/2/8 for i in range(9)]]
        geometry('Fog bowl reflector quadrant',vs,[(i,i+1,i+10,i+9) for i in range(8)],chrome,'StockBumper',smooth=True)
    cylinder('Fog lamp bulb shield',.012,.010,(x,.667,1.892),gunmetal,group='StockBumper',vertices=32)
    bpy.ops.mesh.primitive_uv_sphere_add(segments=32,ring_count=12,radius=1,location=pos(x,.667,1.900))
    obj=bpy.context.object;obj.scale=(.045,.006,.045);finish(obj,'Fog clear cover',lens,'StockBumper',smooth=True)

# Recess all rear lamps into the bumper; the previous clear slabs projected
# another 40mm behind it. Bumper-to-bumper target is 3820mm for the LWB shell.
remove_named(['Contoured rear bumper','Rear number plate','Rear registration','Rear lamp',
              'Rear reversing','Rear lens','Rear turn signal','Rear bumper top','Showroom rear'])
# The factory bumper has swept end cheeks and rising lower corners, not a
# bevelled rectangular beam. Keep the 3.820m bumper-to-bumper envelope;
# the old protruding lamp slabs are no longer the rear length datum.
def rear_bumper_face(x,h):
    return -1.828+.050*(abs(x)/.810)**5+.008*((h-.59)/.13)**2
rear_sections=[(0,.461,.704),(.355,.461,.704),(.408,.478,.704),
    (.730,.489,.704),(.765,.511,.702),(.789,.548,.697),(.803,.600,.687),(.810,.649,.670)]
def rear_section(x):
    for (a,lo,hi),(b,lo2,hi2) in zip(rear_sections,rear_sections[1:]):
        if abs(x)<=b:
            t=max(0,(abs(x)-a)/(b-a));return lo+(lo2-lo)*t,hi+(hi2-hi)*t
    return rear_sections[-1][1:]
xx=sorted(set([-.810+i*1.620/80 for i in range(81)]+[s*p[0] for p in rear_sections for s in [-1,1]]))
vs=[];rows=9
for layer in [0,1]:
    for x in xx:
        low,high=rear_section(x)
        for j in range(rows):
            h=low+(high-low)*j/(rows-1)
            vs.append((x,h,-1.605 if layer==0 else rear_bumper_face(x,h)))
n=len(xx)*rows;faces=[]
for i in range(len(xx)-1):
    for j in range(rows-1):
        a=i*rows+j;faces.extend([(a,a+rows,a+rows+1,a+1),(n+a,n+a+1,n+a+rows+1,n+a+rows)])
    for j in [0,rows-1]:
        a=i*rows+j;faces.append((a,a+rows,n+a+rows,n+a))
for i in [0,len(xx)-1]:
    for j in range(rows-1):
        a=i*rows+j;faces.append((a,a+1,n+a+1,n+a))
rear_bumper=geometry('Revised swept rear bumper',vs,faces,trim,bevel=.003,smooth=True)
subtract(rear_bumper,cube('Temporary rear plate cut',(.525,.146,.075),(0,.566,-1.817),black,bevel=.012))
cube('Recessed rear plate shadow',(.519,.140,.007),(0,.566,-1.782),black,bevel=.010)
cube('Inset rear registration mount',(.431,.101,.009),(0,.566,-1.794),gunmetal,bevel=.005)
# Keep the inset registration face blank, without a second model wordmark.
rear_reflector=material('RearClearReflector',(.61,.64,.65),.24,.28)
for side in [-1,1]:
    x=side*.578
    subtract(rear_bumper,cube('Temporary rear lamp cut',(.302,.139,.100),(x,.606,-1.812),black,bevel=.022))
    rounded_flat_plate('Recessed rear lamp gasket',.294,.132,.012,.029,(x,.606,-1.785),black)
    rounded_flat_plate('Rear segmented red lens',.274,.112,.010,.026,(x,.606,-1.796),red)
    clear_x=x-side*.067
    # Inner clear chamber and outer red stop chamber follow the Suzuki rear
    # reference. A satin optical backing stays readable without fake emission.
    reflector=rear_reflector
    rounded_flat_plate('Rear clear reversing chamber',.112,.085,.009,.013,(clear_x,.606,-1.803),reflector)
    rounded_flat_plate('Rear clear lens cover',.108,.081,.005,.013,(clear_x,.606,-1.809),lens)
    cylinder('Rear reversing optic',.024,.003,(clear_x,.606,-1.809),reflector,vertices=32)
    window_frame('Rear stop chamber inner prism',.111,.076,.005,.004,.002,(x+side*.058,.606,-1.803),red)
    for y in [.574,.584,.595,.606,.617,.628,.638]:
        tube('Rear stop lens prismatic rib',[(x+side*.058-.046,y,-1.804),(x+side*.058+.046,y,-1.804)],.00065,red)
    for dx in [-.045,-.030,-.015,0,.015,.030,.045]:
        tube('Rear clear lens fine prisms',[(clear_x+dx,.574,-1.812),(clear_x+dx,.638,-1.812)],.00045,reflector)
    cube('Rear corner upper tread',(.265,.008,.110),(side*.60,.706,-1.690),rubber,bevel=.004)
remove_named(['Tailgate hinge cover'])
# Factory rear hinges wear two broad rounded black covers, not exposed
# furniture-sized pivot barrels. Keep the upper cover aligned with the rake.
for h in [.812,1.170]:
    z=-1.728+.070*min(1,max(0,(h-1.13)/.55))
    cube('Rear hinge moulded cover',(.083,.092,.020),(-.665,h,z),trim,bevel=.013)
    cube('Rear hinge painted root',(.032,.076,.014),(-.706,h,z+.010),paint,bevel=.006)
# The two old raised horizontal tubes read as an applied rectangular patch.
# Keep the existing rounded sheet, but give the exposed rear face a restrained
# stamping crown and one low folded return instead of embossed bars.
remove_named(['Tailgate horizontal pressing'])
for obj in list(groups['BodyShell'].children):
    if obj.name.startswith('Tailgate lower pressing'):
        remap_points(obj,lambda x,h,z:(x,h,z-.005*max(0,1-(x/.72)**2)*max(0,1-((h-.88)/.24)**2)))

# Coordinated centre-stack reconstruction: stepped fascia, nine-inch screen,
# separate vent cassette, climate fascia and switch bank (India Alpha AT).
remove_named(['Centre console fascia','Centre infotainment screen','Screen glass',
              'Centre rectangular vent','Centre vent louvre','Hazard switch','Hazard warning',
              'Climate control','Climate knob','Climate ring','Lower dashboard switch','Switch legend'])
rounded_flat_plate('Stepped centre stack backing',.286,.257,.055,.024,(0,1.027,.381),dash,'Cabin')
rounded_flat_plate('Centre stack reveal',.275,.247,.010,.020,(0,1.026,.348),black,'Cabin')
rounded_flat_plate('Centre stack moulded fascia',.267,.238,.020,.017,(0,1.024,.334),trim,'Cabin')
rounded_flat_plate('Nine inch screen outer bezel',.225,.147,.027,.010,(0,1.230,.357),black,'Cabin')
rounded_flat_plate('Nine inch active screen glass',.200,.1125,.002,.004,(0,1.232,.342),optical,'Cabin')
for x in [-.066,.066]:
    window_frame('Centre vent moulded surround',.107,.049,.009,.005,.016,(x,1.119,.314),steering_satin,'Cabin')
    rounded_flat_plate('Centre vent dark throat',.096,.038,.004,.007,(x,1.119,.318),black,'Cabin')
    for h in [1.107,1.119,1.131]:cube('Centre air vent directional blade',(.089,.0025,.020),(x,h,.310),gunmetal,'Cabin',bevel=.001)
    cube('Vent directional thumb tab',(.017,.007,.008),(x,1.119,.297),steering_satin,'Cabin',bevel=.002)
rounded_flat_plate('Hazard switch',.019,.044,.013,.004,(0,1.119,.303),red,'Cabin')
tube('Hazard warning triangle',[(-.004,1.113,.295),(0,1.126,.295),(.004,1.113,.295),(-.004,1.113,.295)],.0007,badgewhite,'Cabin')
rounded_flat_plate('Climate panel inset',.253,.086,.010,.010,(0,1.037,.315),dash,'Cabin')
for x in [-.083,0,.083]:
    ring('Climate knurled outer ring',.0315,.026,.014,(x,1.039,.300),steering_satin,group='Cabin',segments=48)
    cylinder('Climate control dial',.026,.023,(x,1.039,.291),trim,group='Cabin',vertices=48)
    cylinder('Climate display inset',.021,.003,(x,1.039,.278),black,group='Cabin',vertices=48)
    for j in range(18):
        a=j*math.tau/18
        tube('Climate control knurl',[(x+math.cos(a)*.030,1.039+math.sin(a)*.030,.291),(x+math.cos(a)*.031,1.039+math.sin(a)*.031,.300)],.00065,gunmetal,'Cabin')
for x in [-.095,-.047,0,.047,.095]:
    rounded_flat_plate('Recessed lower switch surround',.040,.035,.009,.006,(x,.965,.315),black,'Cabin')
    rounded_flat_plate('Dashboard rocker switch',.032,.027,.012,.004,(x,.965,.306),trim,'Cabin')
rounded_flat_plate('Central cluster LCD recess',.052,.067,.010,.003,(.38,1.218,.313),black,'Cabin')
remove_named(['Round dash air vent','Air vent bright rim','Vent grille'])
for x in [-.610,.610]:
    cylinder('Side air vent moulded pod',.051,.065,(x,1.205,.351),dash,group='Cabin',vertices=48)
    cylinder('Side vent recessed throat',.043,.008,(x,1.205,.315),black,group='Cabin',vertices=48)
    ring('Side vent satin trim ring',.048,.043,.008,(x,1.205,.314),steering_satin,group='Cabin',segments=48)
    for y in [-.020,-.006,.008,.022]:
        width=2*math.sqrt(.041**2-y*y)
        cube('Side vent tilting vane',(width,.003,.014),(x,1.205+y,.309),gunmetal,'Cabin',bevel=.001)
    cube('Side air vent thumb pad',(.025,.006,.008),(x,1.205,.300),steering_satin,'Cabin',bevel=.002)
# Fasteners, glovebox seam, column shroud and stalk grips add manufactured depth.
for x in [.236,.524]:cylinder('Instrument fascia screw',.0045,.004,(x,1.159,.325),gunmetal,group='Cabin',vertices=12)
cube('Steering column lower shroud',(.127,.068,.16),(.38,1.128,.365),trim,'Cabin',bevel=.019)
for side in [-1,1]:
    cube('Column stalk moulded grip',(.057,.026,.030),(.38+side*.17,1.180,.310),trim,'Cabin',bevel=.009)
tube('Glovebox fine perimeter',[(-.603,1.070,.390),(-.603,.943,.390),(-.117,.943,.390),(-.117,1.070,.390)],.0012,black,'Cabin')

# Contoured rear seating and restrained front cushion joinery. Stock fabric
# stays in its own material so upholstery, seat folding and touring still work.
remove_named(['Rear bench cushion','Rear bench back','Rear head restraint'])
for x in [-.30,.30]:
    upholstered_loft('Rear seat crowned cushion',[(.765,.55,.38,-.83),(.790,.58,.43,-.83),(.844,.57,.41,-.83),(.868,.51,.35,-.82)],x,seat)
    upholstered_loft('Rear seat woven cushion centre',[(.865,.37,.30,-.82),(.878,.39,.32,-.82),(.884,.35,.28,-.82)],x,seat_insert)
    upholstered_loft('Rear seat shaped backrest',[(.84,.55,.12,-1.055),(.94,.58,.14,-1.072),(1.16,.53,.12,-1.10),(1.23,.43,.09,-1.12)],x,seat)
    upholstered_loft('Rear backrest woven insert',[(.91,.36,.020,-.993),(1.00,.39,.025,-1.003),(1.17,.33,.018,-1.048)],x,seat_insert)
    upholstered_loft('Rear shaped head restraint',[(1.255,.19,.070,-1.11),(1.28,.25,.093,-1.12),(1.35,.235,.089,-1.13),(1.375,.18,.055,-1.13)],x,seat)
for side in [-1,1]:
    x=side*.37
    cylinder('Seat recliner moulded wheel',.031,.019,(x+side*.238,.805,-.095),trim,'side','Cabin',32)
    cube('Seat slide release crossbar',(.31,.011,.016),(x,.723,.255),gunmetal,'Cabin',bevel=.004)
    for line in [-.07,0,.07]:
        tube('Front cushion stitched channel',[(x+line,.870,-.055),(x+line,.874,.07),(x+line,.870,.20)],.0006,stitch,'Cabin')

# Open door bins with an actual cavity, not solid black bricks. Keep inboard
# of the skin and below the upholstered inserts already offered in the garage.
remove_named(['Door storage pocket'])
for side in [-1,1]:
    for z in ([.08] if SHORT_BODY else [.08,-.78]):
        cube('Door bin bottom',(.060,.010,.345),(side*.653,.789,z),trim,'Cabin',bevel=.004)
        cube('Door bin outer lip',(.009,.077,.345),(side*.625,.827,z),trim,'Cabin',bevel=.004)
        for dz in [-.167,.167]:cube('Door bin closed end',(.060,.072,.010),(side*.653,.826,z+dz),trim,'Cabin',bevel=.004)
        cube('Door armrest lower grip well',(.025,.022,.20),(side*.652,.987,z-.06),black,'Cabin',bevel=.008)
    # Pillar seals stop light leaking through the inner/outer door join.
    tube('Front pillar inner seal',[(side*.680,1.17,.627),(side*.666,1.56,.407)],.007,trim,'Cabin')
    for h in [.83,1.08]:cube('Visible inner door hinge',(.025,.046,.034),(side*.678,h,.575),gunmetal,'Cabin',bevel=.006)

# Visible ladder-frame detail only. Hidden/safety geometry remains unverified.
for z in [-1.295,1.295]:
    for side in [-1,1]:
        tube('Axle locating link',[(side*.44,.29,z),(side*.46,.36,z+(.38 if z<0 else -.38))],.017,gunmetal)
        tube('Suspension damper body',[(side*.54,.35,z-.05),(side*.48,.57,z-.10)],.022,trim)
    cylinder('Differential lower casing',.122,.13,(0,.335,z),trim,'front',vertices=32)
cube('Transfer case housing',(.23,.19,.29),(0,.36,-.03),gunmetal,bevel=.028)
for z in [-.66,.65]:tube('Visible propeller shaft',[(0,.35,z-.42),(0,.35,z+.42)],.018,gunmetal)
groups['BodyShell']['reference_revision']='2026-10-23 — compound front glazing, aligned 24-degree A-pillars and modest tapered upper rear closure; not certified CAD'
groups['Cabin']['reference_trim']='India Alpha automatic / right hand drive; screen UI representative'
