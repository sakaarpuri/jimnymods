import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

// Original, dimensionally approximate Jimny planning geometry. No third-party vehicle asset.
const mount=document.getElementById('viewer3d');
const status=document.getElementById('viewerStatus');
const canvasLabel='Interactive Jimny modification preview. Drag to orbit, scroll or pinch to zoom.';
let renderer;
try {renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'low-power'});}
catch {mount.classList.add('unavailable');status.textContent='3D is unavailable in this browser. Your parts list and estimates still work.';}

if(renderer){
  const scene=new THREE.Scene();scene.background=new THREE.Color('#e8e9e0');
  const camera=new THREE.PerspectiveCamera(35,1,.1,60);camera.position.set(4.1,2.65,4.9);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.7));
  renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFShadowMap;
  renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=.95;
  renderer.domElement.setAttribute('aria-label',canvasLabel);renderer.domElement.setAttribute('role','img');renderer.domElement.tabIndex=0;
  mount.appendChild(renderer.domElement);
  const pmrem=new THREE.PMREMGenerator(renderer);const env=new RoomEnvironment();
  const envMap=pmrem.fromScene(env,.04);scene.environment=envMap.texture;scene.environmentIntensity=.7;env.dispose();pmrem.dispose();
  const hemi=new THREE.HemisphereLight('#fffcf3','#73836c',1.35);scene.add(hemi);
  const sun=new THREE.DirectionalLight('#fff9e8',2.2);sun.position.set(3,7,5);sun.castShadow=true;
  sun.shadow.mapSize.set(1024,1024);Object.assign(sun.shadow.camera,{left:-4,right:4,top:4,bottom:-4,near:.1,far:20});sun.shadow.bias=-.0008;sun.shadow.normalBias=.025;scene.add(sun);
  const rimLight=new THREE.DirectionalLight('#f0f6ff',2);rimLight.position.set(-5,3,-4);scene.add(rimLight);
  const controls=new OrbitControls(camera,renderer.domElement);controls.target.set(0,.9,0);controls.enableDamping=true;controls.dampingFactor=.09;controls.enablePan=false;controls.minDistance=3.3;controls.maxDistance=11;controls.maxPolarAngle=Math.PI*.49;controls.minPolarAngle=.15;
  const floor=new THREE.Mesh(new THREE.CircleGeometry(5.5,80),new THREE.MeshStandardMaterial({color:'#e8e9e0',roughness:1}));floor.rotation.x=-Math.PI/2;floor.position.y=-.025;floor.receiveShadow=true;scene.add(floor);
  const car=new THREE.Group();scene.add(car);
  const bodyRig=new THREE.Group();car.add(bodyRig);
  const wheels=new THREE.Group();car.add(wheels);
  const accessoryRig=new THREE.Group();bodyRig.add(accessoryRig);
  const finishMaterial=new THREE.MeshStandardMaterial({color:'#d9b744',roughness:.3,metalness:.35});
  const roofMaterial=finishMaterial.clone();
  const mats={paint:finishMaterial,roof:roofMaterial,trim:new THREE.MeshStandardMaterial({color:'#232a2a',roughness:.7}),rubber:new THREE.MeshStandardMaterial({color:'#1b2020',roughness:.98}),glass:new THREE.MeshStandardMaterial({color:'#213c45',roughness:.12,metalness:.55,transparent:true,opacity:.91}),metal:new THREE.MeshStandardMaterial({color:'#adb4b0',metalness:.8,roughness:.3}),darkmetal:new THREE.MeshStandardMaterial({color:'#39403b',metalness:.6,roughness:.5}),white:new THREE.MeshStandardMaterial({color:'#fff7de',emissive:'#fff3c4',emissiveIntensity:.25,roughness:.2}),red:new THREE.MeshStandardMaterial({color:'#b72d27',emissive:'#951d19',emissiveIntensity:.2}),orange:new THREE.MeshStandardMaterial({color:'#d88132',roughness:.5}),seat:new THREE.MeshStandardMaterial({color:'#343a36',roughness:.94}),accent:new THREE.MeshStandardMaterial({color:'#cb593a',roughness:.7}),canvas:new THREE.MeshStandardMaterial({color:'#a39a79',roughness:1})};
  const baseRig=new THREE.Group();bodyRig.add(baseRig);
  let dirty=true,visible=true,night=false,stock=false,colour='#d9b744',current={parts:[],design:{finish:'oem',decal:'none',grille:'oem'},colour:'#d9b744'};
  let visiblePartIds=[],cameraView='orbit',effectiveDesign={finish:'oem',decal:'none',grille:'oem'};
  const mesh=(geometry,material,parent,x=0,y=0,z=0)=>{const obj=new THREE.Mesh(geometry,material);obj.position.set(x,y,z);obj.castShadow=true;obj.receiveShadow=true;parent.add(obj);return obj;};
  const box=(parent,w,h,d,x,y,z,mat=mats.trim)=>mesh(Math.min(w,h,d)>.065?new RoundedBoxGeometry(w,h,d,2,Math.min(w,h,d)*.14):new THREE.BoxGeometry(w,h,d),mat,parent,x,y,z);
  const cylinder=(parent,rTop,rBottom,length,x,y,z,mat=mats.trim,axis='y',segments=24)=>{const obj=mesh(new THREE.CylinderGeometry(rTop,rBottom,length,segments),mat,parent,x,y,z);if(axis==='x')obj.rotation.z=Math.PI/2;if(axis==='z')obj.rotation.x=Math.PI/2;return obj;};
  const tube=(parent,points,r=.025,mat=mats.darkmetal)=>mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points.map(p=>new THREE.Vector3(...p))),12,r,8,false),mat,parent);
  function clear(group){while(group.children.length){const obj=group.children[0];obj.traverse(child=>{child.geometry?.dispose();if(child.userData.disposableMaterial){child.material.map?.dispose();child.material.dispose();}});group.remove(obj);}}
  function label(parent,text,w,h,x,y,z,rotationY=0,foreground='#e9e9df',background='#222827',italic=false){
    const canvas=document.createElement('canvas');canvas.width=512;canvas.height=128;const ctx=canvas.getContext('2d');ctx.fillStyle=background;ctx.fillRect(0,0,512,128);ctx.fillStyle=foreground;ctx.font=`${italic?'italic ':''}700 ${text.length>8?'52':'72'}px Arial`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(text,256,68,490);
    const tex=new THREE.CanvasTexture(canvas);tex.colorSpace=THREE.SRGBColorSpace;const material=new THREE.MeshStandardMaterial({map:tex,roughness:.6,transparent:false});const obj=mesh(new THREE.PlaneGeometry(w,h),material,parent,x,y,z);obj.rotation.y=rotationY;obj.userData.disposableMaterial=true;return obj;
  }
  function arch(parent,x,z,wide=false){
    const radius=.415;const shape=new THREE.Shape();shape.absarc(0,0,radius,0,Math.PI,false);shape.lineTo(-radius+.07,-.06);shape.absarc(0,0,radius-.07,Math.PI,0,true);shape.closePath();
    const obj=mesh(new THREE.ExtrudeGeometry(shape,{depth:wide?.15:.075,bevelEnabled:false,curveSegments:20}),mats.trim,parent,x,.36,z);obj.rotation.y=Math.PI/2;return obj;
  }
  function buildBase(){
    box(baseRig,1.60,.54,3.60,0,.79,0,mats.paint);
    box(baseRig,1.54,.10,1.02,0,1.09,1.30,mats.paint);
    box(baseRig,1.57,.12,2.64,0,1.66,-.40,mats.roof);
    box(baseRig,1.48,.48,.07,0,1.34,-1.72,mats.paint);
    box(baseRig,1.32,.39,.02,0,1.41,-1.762,mats.glass);
    // A tall, upright cabin, separate front/rear doors and rear quarter windows.
    [-1,1].forEach(side=>{
      const x=side*.79;
      box(baseRig,.065,.59,2.58,x,1.30,-.40,mats.paint);
      [{z:.47,d:.69},{z:-.36,d:.71},{z:-1.13,d:.55}].forEach(win=>box(baseRig,.012,.40,win.d,x+side*.038,1.42,win.z,mats.glass));
      [.02,-.78,-1.53,.91].forEach(z=>box(baseRig,.045,.52,.055,x+side*.023,1.39,z,mats.paint));
      [.88,.02,-.79].forEach(z=>box(baseRig,.008,.47,.013,x+side*.018,.87,z,mats.trim));
      [.24,-.56].forEach(z=>{box(baseRig,.028,.035,.15,x+side*.042,1.08,z,mats.trim);box(baseRig,.021,.07,.055,x+side*.045,.88,z+.28,mats.darkmetal);});
      box(baseRig,.17,.14,.23,side*.94,1.30,.89,mats.trim);box(baseRig,.008,.095,.17,side*1.03,1.31,.86,mats.glass);
      box(baseRig,.06,.08,2.9,x+side*.025,.55,-.15,mats.trim);
      [-1.295,1.295].forEach(z=>arch(baseRig,side===1?.80:-.875,z));
      box(baseRig,.065,.14,2.25,x,1.04,-.52,mats.paint);
    });
    const windshield=box(baseRig,1.41,.48,.035,0,1.39,.938,mats.glass);windshield.rotation.x=-.11;
    [-.745,.745].forEach(x=>{const pillar=box(baseRig,.07,.61,.065,x,1.38,.94,mats.paint);pillar.rotation.x=-.11;});
    box(baseRig,1.48,.05,.06,0,1.66,.91,mats.roof);
    box(baseRig,1.62,.15,.19,0,.62,1.91,mats.trim);box(baseRig,1.62,.15,.18,0,.62,-1.91,mats.trim);
    box(baseRig,1.64,.10,.12,0,.77,1.84,mats.paint);
    [-.60,.60].forEach(x=>{cylinder(baseRig,.15,.15,.06,x,.95,1.847,mats.trim,'z');cylinder(baseRig,.12,.12,.066,x,.95,1.875,mats.white,'z');box(baseRig,.14,.06,.035,x,1.11,1.86,mats.orange);cylinder(baseRig,.055,.055,.04,x,.63,2.015,mats.white,'z');box(baseRig,.18,.14,.03,x,.82,-1.925,mats.red);});
    box(baseRig,.48,.09,.025,0,.68,2.02,mats.darkmetal);
    box(baseRig,1.16,.08,2.95,0,.43,-.1,mats.darkmetal);
    [-1.295,1.295].forEach(z=>cylinder(baseRig,.055,.055,1.65,0,.35,z,mats.darkmetal,'x'));
    label(baseRig,'JIMNY',.24,.06,-.50,1.10,-1.766,Math.PI,'#d7dcd1','#344038');
    // Spare tyre mounted to tailgate.
    const spare=new THREE.Group();spare.position.set(.12,.99,-2.03);spare.rotation.y=Math.PI/2;makeWheel(spare,0,0,0,.335,false);baseRig.add(spare);
    // Interior is intentionally schematic, rather than a product-specific promise.
    [-.38,.38].forEach(x=>{box(baseRig,.46,.12,.48,x,.85,.33,mats.seat);const seat=box(baseRig,.46,.48,.12,x,1.08,.09,mats.seat);seat.rotation.x=-.1;box(baseRig,.25,.14,.12,x,1.37,.08,mats.seat);});
    box(baseRig,1.25,.12,.46,0,.85,-.70,mats.seat);box(baseRig,1.25,.40,.10,0,1.05,-.98,mats.seat);
    box(baseRig,1.4,.12,.24,0,1.12,.79,mats.trim);
  }
  function makeWheel(parent,x,y,z,r=.335,alloy=false){
    const tyre=new THREE.Mesh(new THREE.TorusGeometry(r-.085,.105,10,36),mats.rubber);tyre.rotation.y=Math.PI/2;tyre.position.set(x,y,z);tyre.castShadow=true;parent.add(tyre);
    cylinder(parent,r*.65,r*.65,.17,x,y,z,alloy?mats.darkmetal:mats.metal,'x');
    cylinder(parent,r*.47,r*.47,.182,x,y,z,mats.trim,'x');
    const side=x<0?-1:1;const outer=x+side*.10;
    for(let i=0;i<(alloy?6:5);i++){const a=i*Math.PI*2/(alloy?6:5);const spoke=box(parent,.025,.042,r*.92,outer,y,z,alloy?mats.metal:mats.darkmetal);spoke.rotation.x=a;}
    cylinder(parent,.052,.052,.21,x,y,z,mats.darkmetal,'x',12);
    for(let i=0;i<28;i++){const a=i/28*Math.PI*2;const block=box(parent,.19,alloy?.045:.025,.065,x,y+Math.sin(a)*(r+.005),z+Math.cos(a)*(r+.005),mats.rubber);block.rotation.x=-a;}
  }
  function buildWheels(parts){clear(wheels);const r=parts.has('tires')?.385:.335;const wide=parts.has('tires')?.87:.80;for(const x of [-wide,wide])for(const z of [-1.295,1.295])makeWheel(wheels,x,r,z,r,parts.has('tires'));return r;}
  function roofRack(parent){
    const group=new THREE.Group();parent.add(group);
    box(group,1.52,.055,2.44,0,1.91,-.28,mats.trim);
    [-.75,.75].forEach(x=>tube(group,[[x,1.94,.94],[x,2.03,.94],[x,2.03,-1.50],[x,1.94,-1.50]],.022));
    [-1.50,.94].forEach(z=>box(group,1.5,.075,.035,0,1.99,z,mats.darkmetal));
    for(let z=-1.4;z<.9;z+=.22)box(group,1.46,.025,.035,0,1.97,z,mats.darkmetal);
    [-.67,.67].forEach(x=>[-1.15,.57].forEach(z=>box(group,.09,.15,.09,x,1.79,z,mats.darkmetal)));
  }
  function buildGrille(parent,id){
    box(parent,.94,.27,.035,0,.955,1.856,mats.trim);
    if(id==='mesh'||id==='delete'){for(let x=-.42;x<.44;x+=.07)for(let y=.85;y<1.08;y+=.065){const bar=box(parent,.048,.012,.012,x,y,1.885,mats.darkmetal);bar.rotation.z=.5;}}
    else for(let x=-.37;x<.4;x+=.125)box(parent,.04,.20,.016,x,.955,1.885,id==='chrome'?mats.metal:mats.darkmetal);
    if(['block','rhino','script','chrome'].includes(id))label(parent,id==='script'?'Suzuki':'SUZUKI',.58,.095,0,.96,1.902,0,'#e2e5dd','#252e2d',id==='script');
    else if(id==='oem')label(parent,'S',.10,.13,0,.96,1.904);
  }
  function addDecals(parent,id){
    if(id==='none')return;
    [-1,1].forEach(side=>{
      if(id==='heritage'||id==='safari'){
        const colours=id==='heritage'?['#b24d25','#d58d43','#e6c58f']:['#d7c18f','#655e47','#3d4836'];
        colours.forEach((color,i)=>{const material=new THREE.MeshStandardMaterial({color,roughness:.7});const obj=box(parent,.006,.045,2.70,side*.828,.87+i*.052,-.36,material);obj.userData.disposableMaterial=true;});
      }else if(id==='geo'||id==='mountain'){
        const shape=new THREE.Shape();shape.moveTo(-1.45,0);shape.lineTo(-.85,.20);shape.lineTo(-.45,.06);shape.lineTo(.05,.24);shape.lineTo(.65,0);shape.closePath();
        const obj=mesh(new THREE.ShapeGeometry(shape),mats.darkmetal,parent,side*.83,.67,-.25);obj.rotation.y=side*Math.PI/2;
        for(let z=-1.4;z<.4;z+=.19){const stripe=box(parent,.007,.05,.11,side*.835,.77,z,mats.trim);stripe.rotation.x=-.45;}
      }else if(id==='topo'){
        for(let i=0;i<6;i++){const points=[];for(let z=-1.52;z<.8;z+=.13)points.push([side*.833,.72+i*.035+Math.sin(z*4+i)*.017,z]);tube(parent,points,.004,mats.darkmetal);}
      }
    });
  }
  function buildAccessories(parts,design){
    clear(accessoryRig);visiblePartIds=[];
    const show=(ids,fn)=>{const found=ids.filter(id=>parts.has(id));if(found.length){fn();visiblePartIds.push(...found);}};
    buildGrille(accessoryRig,design.grille||'oem');addDecals(accessoryRig,design.decal||'none');
    if(design.finish==='raptor')[-1,1].forEach(side=>box(accessoryRig,.018,.16,2.15,side*.82,.65,-.21,mats.darkmetal));
    const hasRack=['rack','msga_roofbasket','prad_roofrack'].some(id=>parts.has(id));
    show(['rack','msga_roofbasket','prad_roofrack'],()=>roofRack(accessoryRig));
    show(['snorkel','bimbra_snorkel'],()=>{tube(accessoryRig,[[-.80,1.04,1.35],[-.89,1.15,.94],[-.87,1.67,.85]],.047,mats.trim);box(accessoryRig,.15,.075,.19,-.87,1.70,.86,mats.trim);});
    show(['bull','autostylenn_bumper_v1'],()=>{box(accessoryRig,1.8,.21,.26,0,.62,1.98,mats.darkmetal);tube(accessoryRig,[[-.70,.68,2.11],[-.65,1.01,2.11],[.65,1.01,2.11],[.70,.68,2.11]],.035);});
    show(['winch'],()=>{box(accessoryRig,.45,.12,.19,0,.72,2.13,mats.trim);cylinder(accessoryRig,.055,.055,.27,0,.74,2.21,mats.metal,'x');box(accessoryRig,.07,.09,.03,0,.69,2.25,mats.accent);});
    show(['sliders'],()=>[-1,1].forEach(side=>{tube(accessoryRig,[[side*.91,.45,-.95],[side*.97,.45,-.85],[side*.97,.45,.85],[side*.91,.45,.95]],.035);box(accessoryRig,.18,.035,1.80,side*.86,.46,0,mats.darkmetal);}));
    show(['flares'],()=>[-1,1].forEach(side=>[-1.295,1.295].forEach(z=>arch(accessoryRig,side===1?.82:-.97,z,true))));
    show(['ladder'],()=>{[-.65,-.35].forEach(x=>tube(accessoryRig,[[x,.60,-1.99],[x,1.74,-1.99],[x,1.84,-1.60]],.02));for(let y=.68;y<1.7;y+=.19)box(accessoryRig,.32,.025,.035,-.5,y,-1.99,mats.darkmetal);});
    show(['led'],()=>{box(accessoryRig,1.18,.09,.10,0,hasRack?2.05:1.77,.90,mats.trim);box(accessoryRig,1.1,.05,.008,0,hasRack?2.05:1.77,.955,mats.white);});
    show(['pods'],()=>[-1,1].forEach(side=>{box(accessoryRig,.13,.13,.12,side*.82,1.15,1.0,mats.trim);box(accessoryRig,.095,.095,.01,side*.82,1.15,1.065,mats.white);}));
    show(['rtt'],()=>{box(accessoryRig,1.40,.20,2.1,0,hasRack?2.17:1.92,-.25,mats.canvas);box(accessoryRig,1.46,.055,2.13,0,hasRack?2.30:2.05,-.25,mats.trim);});
    show(['awning'],()=>{cylinder(accessoryRig,.065,.065,2.38,.87,hasRack?2.04:1.78,-.28,mats.canvas,'z');});
    show(['boards'],()=>{[-.32,.32].forEach(x=>{box(accessoryRig,.24,.045,1.0,x,hasRack?2.08:1.80,-.4,mats.accent);for(let z=-.8;z<0;z+=.13)box(accessoryRig,.22,.02,.04,x,hasRack?2.11:1.83,z,mats.trim);});});
    show(['mudflaps'],()=>[-1,1].forEach(side=>[-1.58,1.01].forEach(z=>box(accessoryRig,.28,.30,.025,side*.77,.36,z,mats.rubber))));
    show(['sparecover'],()=>cylinder(accessoryRig,.34,.34,.10,.12,.99,-2.18,mats.trim,'z'));
    show(['bonnetguard'],()=>box(accessoryRig,1.40,.035,.16,0,1.16,1.76,mats.trim));
    show(['spoiler'],()=>box(accessoryRig,1.58,.065,.26,0,1.75,-1.68,mats.trim));
    show(['visors'],()=>[-1,1].forEach(side=>[.45,-.38].forEach(z=>box(accessoryRig,.07,.045,.70,side*.85,1.65,z,mats.trim))));
    show(['hingecovers'],()=>[-1,1].forEach(side=>[.87,-.02].forEach(z=>[.76,1.03].forEach(y=>box(accessoryRig,.035,.065,.10,side*.84,y,z,mats.metal)))));
    show(['cladding'],()=>[-1,1].forEach(side=>box(accessoryRig,.035,.15,2.0,side*.84,.65,-.2,mats.trim)));
    show(['skid'],()=>box(accessoryRig,1.22,.045,1.22,0,.38,.85,mats.metal));
    show(['headlamps'],()=>[-.6,.6].forEach(x=>{const ring=mesh(new THREE.TorusGeometry(.115,.014,6,28),mats.white,accessoryRig,x,.95,1.915);ring.rotation.z=.3;}));
    show(['dashcam'],()=>box(accessoryRig,.10,.055,.055,-.25,1.56,.91,mats.trim));
    show(['headunit'],()=>box(accessoryRig,.25,.15,.015,0,1.18,.66,mats.glass));
    show(['molle'],()=>[-1,1].forEach(side=>{box(accessoryRig,.012,.30,.45,side*.84,1.43,-1.14,mats.trim);for(let z=-1.32;z<-1;z+=.08)for(let y=1.33;y<1.56;y+=.08)box(accessoryRig,.015,.025,.045,side*.851,y,z,mats.metal);}));
    show(['drawer'],()=>box(accessoryRig,1.2,.22,.58,0,.98,-1.34,mats.darkmetal));
    show(['shelf'],()=>box(accessoryRig,1.3,.035,.58,0,1.18,-1.30,mats.trim));
    show(['armrest'],()=>box(accessoryRig,.20,.14,.35,0,.98,.20,mats.seat));
    show(['mats'],()=>[-.36,.36].forEach(x=>box(accessoryRig,.36,.018,.48,x,.71,.42,mats.trim)));
    show(['seats'],()=>[-.38,.38].forEach(x=>box(accessoryRig,.42,.35,.025,x,1.10,.015,mats.canvas)));
    show(['steering'],()=>{const ring=mesh(new THREE.TorusGeometry(.13,.019,6,24),mats.darkmetal,accessoryRig,-.38,1.18,.67);ring.rotation.x=-.4;});
    show(['ambient'],()=>{box(accessoryRig,1.22,.013,.013,0,1.13,.65,mats.white);});
    visiblePartIds.push(...['tires','lift','autostylenn_big_suzuki_grille','autostylenn_cursive_grille','autostylenn_s_grille'].filter(id=>parts.has(id)));
  }
  function sync(payload=current){
    current={...current,...payload};if(payload.colour)colour=payload.colour;
    const parts=new Set(stock?[]:current.parts||[]);const design=stock?{finish:'oem',decal:'none',grille:'oem'}:current.design||{};
    // SKU grille products and the design selection control the same physical grille.
    if(!stock){if(parts.has('autostylenn_big_suzuki_grille'))design.grille='block';else if(parts.has('autostylenn_cursive_grille'))design.grille='script';else if(parts.has('autostylenn_s_grille'))design.grille='oem';}
    effectiveDesign={...design};
    finishMaterial.color.set(design.finish==='blackout'?'#303735':colour);finishMaterial.roughness=design.finish==='matte'?.87:design.finish==='satin'?.62:design.finish==='raptor'?.95:.28;finishMaterial.metalness=design.finish==='raptor'?.05:.3;
    roofMaterial.copy(finishMaterial);if(design.finish==='twotone')roofMaterial.color.set('#242c29');
    [finishMaterial,roofMaterial].forEach(mat=>{mat.transparent=cameraView==='cabin';mat.opacity=cameraView==='cabin'?.16:1;mat.depthWrite=cameraView!=='cabin';});mats.glass.opacity=cameraView==='cabin'?.15:.91;
    clear(baseRig);buildBase();const r=buildWheels(parts);bodyRig.position.y=(parts.has('lift')?.055:0)+(r-.335);
    buildAccessories(parts,design);dirty=true;
    const visibleCount=visiblePartIds.length;
    status.textContent=stock?'Stock preview':visibleCount?`${visibleCount} selected part${visibleCount===1?'':'s'} in 3D`:'Live 3D · drag to rotate';
    renderer.domElement.setAttribute('aria-label',canvasLabel+` ${visibleCount} visible modifications.`);
    mount.dataset.parts=visiblePartIds.join(',');mount.dataset.finish=design.finish||'oem';mount.dataset.grille=design.grille||'oem';mount.dataset.decal=design.decal||'none';
  }
  function setNight(value){night=value;scene.background.set(night?'#202b2e':'#e8e9e0');floor.material.color.set(night?'#283338':'#e8e9e0');hemi.intensity=night?.4:1.35;sun.intensity=night?.35:2.2;rimLight.intensity=night?1.2:2;mats.white.emissiveIntensity=night?4:.25;dirty=true;}
  function view(name){cameraView=name;const poses={front:[0,1.6,6.7],side:[6.6,1.8,0],rear:[-4,2.4,-5.5],orbit:[4.1,2.65,4.9],cabin:[3.9,3.4,3.3]};camera.position.set(...(poses[name]||poses.orbit));controls.target.set(0,.9,0);controls.update();sync();if(name==='cabin')status.textContent='Cabin cutaway · approximate interior';document.querySelectorAll('[data-camera]').forEach(b=>b.classList.toggle('active',b.dataset.camera===name));dirty=true;}
  const observer=new ResizeObserver(()=>{const {width,height}=mount.getBoundingClientRect();if(!width||!height)return;renderer.setSize(width,height,false);camera.aspect=width/height;camera.updateProjectionMatrix();dirty=true;});observer.observe(mount);
  new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(visible)dirty=true;},{rootMargin:'100px'}).observe(mount);
  controls.addEventListener('change',()=>{dirty=true;});
  renderer.domElement.addEventListener('keydown',e=>{if(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key)){e.preventDefault();const delta=e.key==='ArrowLeft'?.16:e.key==='ArrowRight'?-.16:0;const pos=camera.position.clone().sub(controls.target);if(delta)pos.applyAxisAngle(new THREE.Vector3(0,1,0),delta);else pos.multiplyScalar(e.key==='ArrowUp'?.92:1.08);camera.position.copy(controls.target).add(pos);controls.update();dirty=true;}});
  renderer.domElement.addEventListener('webglcontextlost',()=>{status.textContent='3D paused. Reload to restore the preview. Your build is saved.';});
  window.addEventListener('jimny-build-change',event=>{stock=false;sync(event.detail);});
  window.addEventListener('jimny-preview-mode',event=>{stock=event.detail==='stock';sync();});
  window.addEventListener('jimny-preview-night',event=>setNight(event.detail));
  window.addEventListener('jimny-preview-colour',event=>sync({colour:event.detail}));
  document.querySelectorAll('[data-camera]').forEach(button=>button.addEventListener('click',()=>{view(button.dataset.camera);document.querySelectorAll('[data-camera]').forEach(b=>b.classList.toggle('active',b===button));}));
  function snapshot(){
    const size=renderer.getSize(new THREE.Vector2()),ratio=renderer.getPixelRatio(),aspect=camera.aspect;
    renderer.setPixelRatio(1);renderer.setSize(1600,1200,false);camera.aspect=4/3;camera.updateProjectionMatrix();renderer.render(scene,camera);
    const data=renderer.domElement.toDataURL('image/png');
    renderer.setPixelRatio(ratio);renderer.setSize(size.x,size.y,false);camera.aspect=aspect;camera.updateProjectionMatrix();renderer.render(scene,camera);return data;
  }
  window.jimny3D={ready:true,snapshot,getState:()=>({parts:[...visiblePartIds],colour,stock,night,view:cameraView,design:{...effectiveDesign},meshCount:car.children.reduce((sum,g)=>{let count=0;g.traverse(o=>{if(o.isMesh)count++;});return sum+count;},0)}),view};
  sync(window.getJimnyBuildState?.()||current);
  mount.classList.add('ready');
  renderer.setAnimationLoop(()=>{if(!visible||document.hidden)return;controls.update();if(dirty){renderer.render(scene,camera);dirty=false;}});
}
