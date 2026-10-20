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
  const scene=new THREE.Scene();scene.background=new THREE.Color('#efefed');
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
  function updateInputMode(){
    const compact=window.matchMedia('(max-width:899px)').matches&&!mount.parentElement.classList.contains('expanded');
    controls.enabled=!compact;renderer.domElement.style.touchAction=compact?'pan-y':'none';mount.dataset.touchMode=compact?'scroll':'orbit';
    renderer.domElement.setAttribute('aria-label',canvasLabel+(compact?' Expand the preview for touch rotation.':''));
  }
  new MutationObserver(updateInputMode).observe(mount.parentElement,{attributes:true,attributeFilter:['class']});
  window.matchMedia('(max-width:899px)').addEventListener('change',updateInputMode);updateInputMode();
  const floor=new THREE.Mesh(new THREE.CircleGeometry(100,64),new THREE.MeshStandardMaterial({color:'#e8e9e0',roughness:1}));floor.rotation.x=-Math.PI/2;floor.position.y=-.003;floor.receiveShadow=true;scene.add(floor);
  const car=new THREE.Group();scene.add(car);
  const bodyRig=new THREE.Group();car.add(bodyRig);
  const wheels=new THREE.Group();car.add(wheels);
  const accessoryRig=new THREE.Group();bodyRig.add(accessoryRig);
  const beams=[-.602,.602].map(x=>{const light=new THREE.SpotLight('#fff2cd',0,8,.40,.65,1.4);light.position.set(x,.98,1.96);light.target.position.set(x,.12,6);car.add(light,light.target);return light;});
  const finishMaterial=new THREE.MeshPhysicalMaterial({color:'#d9b744',roughness:.25,metalness:.32,clearcoat:1,clearcoatRoughness:.14});
  const roofMaterial=finishMaterial.clone();
  const mats={paint:finishMaterial,roof:roofMaterial,trim:new THREE.MeshStandardMaterial({color:'#232a2a',roughness:.7}),rubber:new THREE.MeshStandardMaterial({color:'#1b2020',roughness:.98}),glass:new THREE.MeshStandardMaterial({color:'#213c45',roughness:.12,metalness:.55,transparent:true,opacity:.91}),metal:new THREE.MeshStandardMaterial({color:'#adb4b0',metalness:.8,roughness:.3}),darkmetal:new THREE.MeshStandardMaterial({color:'#39403b',metalness:.6,roughness:.5}),white:new THREE.MeshStandardMaterial({color:'#fff7de',emissive:'#fff3c4',emissiveIntensity:.25,roughness:.2}),red:new THREE.MeshStandardMaterial({color:'#b72d27',emissive:'#951d19',emissiveIntensity:.2}),orange:new THREE.MeshStandardMaterial({color:'#d88132',roughness:.5}),seat:new THREE.MeshStandardMaterial({color:'#343a36',roughness:.94}),accent:new THREE.MeshStandardMaterial({color:'#cb593a',roughness:.7}),canvas:new THREE.MeshStandardMaterial({color:'#a39a79',roughness:1})};
  const baseRig=new THREE.Group();bodyRig.add(baseRig);
  // Small, original surface maps, shared across rebuilds. No downloaded vehicle textures.
  function surfaceMap(kind){
    const canvas=document.createElement('canvas');canvas.width=canvas.height=256;const ctx=canvas.getContext('2d');ctx.fillStyle='#888';ctx.fillRect(0,0,256,256);
    let seed=73;for(let i=0;i<12000;i++){seed=(seed*16807)%2147483647;const x=seed%256;seed=(seed*16807)%2147483647;const y=seed%256;ctx.fillStyle=`rgba(${kind==='paint'?'220,220,220':'40,40,40'},${kind==='paint'?.12:.15})`;ctx.fillRect(x,y,1,1);}
    if(kind==='tyre'){ctx.strokeStyle='#252525';ctx.lineWidth=3;for(let x=-256;x<512;x+=24){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x+40,90);ctx.lineTo(x+22,168);ctx.lineTo(x+62,256);ctx.stroke();}}
    const texture=new THREE.CanvasTexture(canvas);texture.wrapS=texture.wrapT=THREE.RepeatWrapping;texture.repeat.set(kind==='paint'?8:12,kind==='paint'?8:1);texture.anisotropy=Math.min(4,renderer.capabilities.getMaxAnisotropy());return texture;
  }
  const grain=surfaceMap('paint'),treadMap=surfaceMap('tyre');
  finishMaterial.bumpMap=grain;finishMaterial.bumpScale=.00035;
  mats.rubber.bumpMap=treadMap;mats.rubber.bumpScale=.0015;
  mats.glass.color.set('#34444a');mats.glass.roughness=.09;mats.glass.metalness=.28;mats.glass.opacity=.77;
  mats.lens=new THREE.MeshPhysicalMaterial({color:'#e0e7e7',metalness:.05,roughness:.08,clearcoat:1,transparent:true,opacity:.40,depthWrite:false});
  mats.chrome=new THREE.MeshStandardMaterial({color:'#e8eeed',metalness:1,roughness:.17});
  mats.reflector=new THREE.MeshStandardMaterial({color:'#d4d9d7',metalness:1,roughness:.24});
  mats.brake=new THREE.MeshStandardMaterial({color:'#737976',metalness:.85,roughness:.46});
  mats.textured=new THREE.MeshStandardMaterial({color:'#30362f',roughness:.96,bumpMap:grain,bumpScale:.008});
  let dirty=true,visible=true,night=false,stock=false,colour='#d9b744',current={parts:[],design:{finish:'oem',decal:'none',grille:'oem'},colour:'#d9b744'};
  let visiblePartIds=[],cameraView='orbit',effectiveDesign={finish:'oem',decal:'none',grille:'oem'};
  const mesh=(geometry,material,parent,x=0,y=0,z=0)=>{const obj=new THREE.Mesh(geometry,material);obj.position.set(x,y,z);obj.castShadow=true;obj.receiveShadow=true;parent.add(obj);return obj;};
  const box=(parent,w,h,d,x,y,z,mat=mats.trim)=>mesh(Math.min(w,h,d)>.065?new RoundedBoxGeometry(w,h,d,2,Math.min(w,h,d)*.14):new THREE.BoxGeometry(w,h,d),mat,parent,x,y,z);
  const cylinder=(parent,rTop,rBottom,length,x,y,z,mat=mats.trim,axis='y',segments=24)=>{const obj=mesh(new THREE.CylinderGeometry(rTop,rBottom,length,segments),mat,parent,x,y,z);if(axis==='x')obj.rotation.z=Math.PI/2;if(axis==='z')obj.rotation.x=Math.PI/2;return obj;};
  const tube=(parent,points,r=.025,mat=mats.darkmetal)=>mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points.map(p=>new THREE.Vector3(...p)),false,'centripetal',.1),Math.max(12,points.length*3),r,8,false),mat,parent);
  const lineTube=(parent,points,r=.01,mat=mats.trim)=>{const vectors=points.map(p=>new THREE.Vector3(...p));const path=new THREE.CurvePath();for(let i=1;i<vectors.length;i++)path.add(new THREE.LineCurve3(vectors[i-1],vectors[i]));return mesh(new THREE.TubeGeometry(path,points.length*2,r,6,false),mat,parent);};
  function clear(group){while(group.children.length){const obj=group.children[0];obj.traverse(child=>{child.geometry?.dispose();if(child.isInstancedMesh)child.dispose();if(child.userData.disposableMaterial){child.material.map?.dispose();child.material.dispose();}});group.remove(obj);}}
  function label(parent,text,w,h,x,y,z,rotationY=0,foreground='#e9e9df',background='#222827',italic=false){
    const canvas=document.createElement('canvas');canvas.width=512;canvas.height=128;const ctx=canvas.getContext('2d');ctx.fillStyle=background;ctx.fillRect(0,0,512,128);ctx.fillStyle=foreground;ctx.font=`${italic?'italic ':''}700 ${text.length>8?'52':'72'}px Arial`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(text,256,68,490);
    const tex=new THREE.CanvasTexture(canvas);tex.colorSpace=THREE.SRGBColorSpace;const material=new THREE.MeshStandardMaterial({map:tex,roughness:.6,transparent:false});const obj=mesh(new THREE.PlaneGeometry(w,h),material,parent,x,y,z);obj.rotation.y=rotationY;obj.userData.disposableMaterial=true;return obj;
  }
  function sideShape(parent,points,side,material=mats.paint,holes=[],inset=0){
    const shape=new THREE.Shape(points.map(([z,y])=>new THREE.Vector2(-z,y)));
    holes.forEach(points=>shape.holes.push(new THREE.Path(points.map(([z,y])=>new THREE.Vector2(-z,y)))));
    const geo=new THREE.ShapeGeometry(shape,24),position=geo.attributes.position;
    for(let i=0;i<position.count;i++){const z=-position.getX(i),y=position.getY(i);position.setXYZ(i,side*(.768-Math.max(0,y-1.14)*.115+inset),y,z);}geo.computeVertexNormals();
    if(side<0){const index=geo.index;for(let i=0;i<index.count;i+=3){const a=index.getX(i);index.setX(i,index.getX(i+2));index.setX(i+2,a);}geo.computeVertexNormals();}
    return mesh(geo,material,parent);
  }
  function arch(parent,x,z,wide=false){
    // Flared moulding follows a real open wheel well, rather than sitting over a solid box.
    const side=x<0?-1:1,inner=.385,outer=wide?.462:.432,points=[];
    for(let i=0;i<=32;i++){const a=Math.PI*i/32;points.push([z-Math.cos(a)*outer,.335+Math.sin(a)*outer]);}
    for(let i=32;i>=0;i--){const a=Math.PI*i/32;points.push([z-Math.cos(a)*inner,.335+Math.sin(a)*inner]);}
    sideShape(parent,points,side,mats.trim,[],wide?.137:.075);
    const arc=[];for(let i=0;i<=32;i++){const a=i*Math.PI/32;arc.push([side*(wide?.91:.843),.335+Math.sin(a)*outer,z-Math.cos(a)*outer]);}tube(parent,arc,.014,mats.trim);
    for(const direction of [-1,1])box(parent,wide?.15:.09,.18,.055,side*(wide?.84:.80),.42,z+direction*.404,mats.trim);
  }
  function buildBase(){
    // Metre-scale body, 2.590m wheelbase. Side shells are actually cut around each tyre.
    const lower=[[-1.78,.54],[-1.78,1.13],[.69,1.15],[1.79,1.10],[1.84,.88],[1.84,.52],[1.69,.52]];
    for(let i=0;i<=30;i++){const a=i*Math.PI/30;lower.push([1.295+Math.cos(a)*.392,.335+Math.sin(a)*.392]);}
    lower.push([.903,.535],[-.903,.535]);
    for(let i=0;i<=30;i++){const a=i*Math.PI/30;lower.push([-1.295+Math.cos(a)*.392,.335+Math.sin(a)*.392]);}
    lower.push([-1.687,.54]);
    box(baseRig,1.43,.075,2.30,0,1.125,-.53,mats.paint);
    const hood=box(baseRig,1.48,.075,1.11,0,1.13,1.235,mats.paint);hood.rotation.x=.026;
    box(baseRig,1.46,.035,.15,0,1.163,.635,mats.paint);
    // Rounded pressed roof and narrow gutters, not a thick floating slab.
    box(baseRig,1.46,.085,2.43,0,1.665,-.505,mats.roof);
    for(const x of [-.746,.746])tube(baseRig,[[x,1.647,.70],[x,1.684,.53],[x,1.684,-1.63],[x,1.65,-1.75]],.012,mats.roof);
    for(const x of [-.48,-.24,0,.24,.48])box(baseRig,.018,.009,1.93,x,1.709,-.55,mats.roof);
    box(baseRig,1.48,.53,.045,0,1.355,-1.75,mats.paint);
    box(baseRig,1.30,.375,.015,0,1.412,-1.778,mats.trim);
    box(baseRig,1.25,.33,.017,0,1.422,-1.790,mats.glass);
    tube(baseRig,[[.52,1.28,-1.805],[.11,1.29,-1.805]],.009,mats.trim);
    // Separate flush door skins, tapered pillars and rounded, recessed window seals.
    [-1,1].forEach(side=>{
      sideShape(baseRig,lower,side);
      const windows=[[[.57,1.20],[.51,1.59],[-.24,1.59],[-.24,1.20]],[[-.34,1.20],[-.34,1.59],[-1.06,1.59],[-1.06,1.20]],[[-1.15,1.20],[-1.15,1.59],[-1.65,1.59],[-1.65,1.20]]];
      sideShape(baseRig,[[.69,1.12],[.59,1.65],[-1.74,1.65],[-1.76,1.12]],side,mats.paint,windows);
      windows.forEach(points=>{sideShape(baseRig,points,side,mats.glass,[],-.008);const outline=points.concat([points[0]]).map(([z,y])=>[side*(.768-Math.max(0,y-1.14)*.115+.002),y,z]);lineTube(baseRig,outline,.011,mats.trim);});
      for(const z of [.665,-.285,-1.105])tube(baseRig,[[side*.772,.56,z],[side*.773,1.15,z],[side*.716,1.63,z-.035]],.0035,mats.trim);
      tube(baseRig,[[side*.773,.58,.67],[side*.773,.57,-1.07]],.003,mats.trim);
      tube(baseRig,[[side*.774,1.104,.64],[side*.774,1.104,-1.72]],.005,mats.paint);
      [-.13,-.93].forEach(z=>{box(baseRig,.025,.045,.16,side*.785,1.085,z,mats.trim);box(baseRig,.028,.017,.115,side*.799,1.092,z,mats.darkmetal);});
      [.63,-.32].forEach(z=>[.72,1.04].forEach(y=>{box(baseRig,.025,.048,.065,side*.785,y,z,mats.paint);cylinder(baseRig,.009,.009,.065,side*.806,y,z,mats.darkmetal,'y',8);}));
      tube(baseRig,[[side*.77,1.22,.54],[side*.89,1.24,.55]],.018,mats.trim);
      box(baseRig,.17,.15,.24,side*.91,1.285,.56,mats.trim);box(baseRig,.012,.105,.18,side*.999,1.29,.54,mats.glass);
      box(baseRig,.05,.065,1.83,side*.78,.55,-.08,mats.trim);
      [-1.295,1.295].forEach(z=>arch(baseRig,side===1?.80:-.875,z));
      for(const z of [-1.295,1.295]){const lining=[];for(let i=0;i<=24;i++){const a=Math.PI*i/24;lining.push([z-Math.cos(a)*.395,.335+Math.sin(a)*.395]);}for(let i=24;i>=0;i--){const a=Math.PI*i/24;lining.push([z-Math.cos(a)*.333,.335+Math.sin(a)*.333]);}sideShape(baseRig,lining,side,mats.rubber,[],-.06);}
      box(baseRig,.055,.035,.12,side*.791,1.035,1.07,mats.orange);
      if(side===-1){sideShape(baseRig,[[-1.48,1.01],[-1.48,1.12],[-1.66,1.12],[-1.66,1.01]],side,mats.trim,[],.003);sideShape(baseRig,[[-1.49,1.02],[-1.49,1.11],[-1.65,1.11],[-1.65,1.02]],side,mats.paint,[],.004);}
    });
    const windshield=box(baseRig,1.395,.465,.026,0,1.397,.644,mats.trim);windshield.rotation.x=-.17;
    const glass=box(baseRig,1.315,.393,.028,0,1.405,.661,mats.glass);glass.rotation.x=-.17;
    [-.726,.726].forEach(x=>{const pillar=box(baseRig,.06,.515,.06,x,1.392,.634,mats.paint);pillar.rotation.x=-.17;});
    for(const x of [-.43,.21]){tube(baseRig,[[x,1.20,.703],[x+.08,1.24,.704]],.007,mats.trim);tube(baseRig,[[x-.14,1.245,.705],[x+.22,1.26,.704]],.009,mats.trim);}
    box(baseRig,1.50,.23,.10,0,.975,1.811,mats.paint);
    box(baseRig,1.62,.19,.22,0,.645,1.825,mats.trim);box(baseRig,1.62,.17,.18,0,.64,-1.795,mats.trim);
    box(baseRig,1.57,.08,.085,0,.775,1.83,mats.trim);
    [-.602,.602].forEach(x=>{
      cylinder(baseRig,.153,.153,.035,x,.976,1.868,mats.trim,'z',48);
      cylinder(baseRig,.128,.12,.027,x,.976,1.889,mats.chrome,'z',48);
      const reflector=mesh(new THREE.SphereGeometry(.116,32,16,0,Math.PI*2,0,Math.PI/2),mats.reflector,baseRig,x,.976,1.895);reflector.rotation.x=Math.PI/2;reflector.scale.y=.30;
      cylinder(baseRig,.032,.032,.018,x,.976,1.908,mats.white,'z');
      cylinder(baseRig,.118,.118,.012,x,.976,1.927,mats.lens,'z',48);
      for(let i=-3;i<=3;i++)tube(baseRig,[[x+i*.025,.89,1.934],[x+i*.025,1.06,1.934]],.0015,mats.lens);
      box(baseRig,.128,.049,.025,x,1.146,1.813,mats.trim);box(baseRig,.11,.032,.029,x,1.146,1.83,mats.orange);
      cylinder(baseRig,.065,.065,.014,x,.64,1.945,mats.trim,'z');cylinder(baseRig,.045,.045,.018,x,.64,1.956,mats.lens,'z');
      box(baseRig,.23,.12,.025,x,.65,-1.901,mats.red);box(baseRig,.08,.057,.028,x+.052,.652,-1.918,mats.lens);
    });
    box(baseRig,.46,.11,.018,0,.65,1.949,mats.trim);label(baseRig,'JIMNY',.34,.066,0,.65,1.96,0,'#c9ccc5','#242a27');
    for(let x=-.28;x<=.28;x+=.055)box(baseRig,.032,.055,.015,x,.766,1.884,mats.trim);
    box(baseRig,1.13,.075,2.94,0,.43,-.1,mats.darkmetal);
    [-1.295,1.295].forEach(z=>cylinder(baseRig,.055,.055,1.65,0,.35,z,mats.darkmetal,'x'));
    for(const z of [-1.295,1.295])cylinder(baseRig,.105,.11,.15,0,.35,z,mats.darkmetal,'z');
    label(baseRig,'Jimny',.19,.055,-.49,1.075,-1.783,Math.PI,'#c8cfcb','#36443c',true);
    // Spare tyre mounted to tailgate.
    const spare=new THREE.Group();spare.position.set(.12,1.00,-1.94);spare.rotation.y=Math.PI/2;makeWheel(spare,0,0,0,.335,false);baseRig.add(spare);
    // Interior is intentionally schematic, rather than a product-specific promise.
    [-.38,.38].forEach(x=>{box(baseRig,.46,.12,.48,x,.85,.33,mats.seat);const seat=box(baseRig,.46,.48,.12,x,1.08,.09,mats.seat);seat.rotation.x=-.1;box(baseRig,.25,.14,.12,x,1.37,.08,mats.seat);});
    box(baseRig,1.25,.12,.46,0,.85,-.70,mats.seat);box(baseRig,1.25,.40,.10,0,1.05,-.98,mats.seat);
    box(baseRig,1.36,.12,.26,0,1.12,.50,mats.trim);
    cylinder(baseRig,.075,.075,.012,.39,1.19,.355,mats.trim,'z');
    cylinder(baseRig,.065,.065,.014,.24,1.19,.355,mats.trim,'z');
    const steering=mesh(new THREE.TorusGeometry(.127,.014,8,32),mats.trim,baseRig,.38,1.16,.30);steering.rotation.x=-.32;
  }
  function makeWheel(parent,x,y,z,r=.335,alloy=false){
    const side=x<0?-1:1,half=alloy?.115:.098,rim=.191,outer=x+side*(half+.003);
    const profile=[[rim,-half*.92],[r*.82,-half],[r*.93,-half*.88],[r*.99,-half*.63],[r,-half*.32],[r,half*.32],[r*.99,half*.63],[r*.93,half*.88],[r*.82,half],[rim,half*.92]].map(([radius,axial])=>new THREE.Vector2(radius,axial));
    const tyre=mesh(new THREE.LatheGeometry(profile,64),mats.rubber,parent,x,y,z);tyre.rotation.z=Math.PI/2;
    for(const offset of [-1,1]){const bead=mesh(new THREE.TorusGeometry(r*.81,.002,4,64),mats.trim,parent,x+offset*half,y,z);bead.rotation.y=Math.PI/2;}
    if(alloy){
      const tread=new THREE.InstancedMesh(new THREE.BoxGeometry(.062,.009,.036),mats.rubber,180),dummy=new THREE.Object3D();
      for(let i=0;i<60;i++)for(let row=0;row<3;row++){const a=(i+(row===1?.4:0))/60*Math.PI*2;dummy.position.set(x+(row-1)*.071,y+Math.cos(a)*(r-.002),z+Math.sin(a)*(r-.002));dummy.rotation.set(a,0,(row-1)*.18);dummy.updateMatrix();tread.setMatrixAt(i*3+row,dummy.matrix);}tread.castShadow=true;parent.add(tread);
    }
    cylinder(parent,rim,rim,.15,x,y,z,mats.darkmetal,'x',48);
    cylinder(parent,.157,.157,.012,x+side*.076,y,z,mats.brake,'x',48);
    const lip=mesh(new THREE.TorusGeometry(rim-.005,.009,8,48),alloy?mats.darkmetal:mats.chrome,parent,outer,y,z);lip.rotation.y=Math.PI/2;
    for(let i=0;i<5;i++){
      const a=i*Math.PI*2/5;
      for(const split of [-1,1]){const angle=a+split*.105;const spoke=box(parent,.018,.11,.022,outer,y+Math.cos(angle)*.119,z+Math.sin(angle)*.119,alloy?mats.darkmetal:mats.metal);spoke.rotation.x=angle;}
      cylinder(parent,.009,.009,.016,outer+side*.014,y+Math.cos(a)*.044,z+Math.sin(a)*.044,mats.chrome,'x',6);
    }
    cylinder(parent,.056,.056,.027,outer,y,z,alloy?mats.darkmetal:mats.metal,'x',32);
    cylinder(parent,.025,.025,.031,outer,y,z,mats.trim,'x',24);
  }
  function buildWheels(parts){clear(wheels);const r=parts.has('tires')?.368:.335;const wide=parts.has('tires')?.765:.715;for(const x of [-wide,wide])for(const z of [-1.295,1.295])makeWheel(wheels,x,r,z,r,parts.has('tires'));return r;}
  function roofRack(parent,basket=false){
    const group=new THREE.Group();parent.add(group);
    const front=.61,rear=-1.62;
    [-.72,.72].forEach(x=>box(group,.035,.055,2.25,x,1.82,-.50,mats.darkmetal));
    [front,rear].forEach(z=>box(group,1.46,.055,.035,0,1.82,z,mats.darkmetal));
    for(let z=-1.56;z<.62;z+=.14)box(group,1.43,.022,.072,0,1.825,z,mats.trim);
    [-.68,.68].forEach(x=>[-1.38,.38].forEach(z=>{box(group,.055,.095,.11,x,1.755,z,mats.darkmetal);box(group,.10,.02,.15,x,1.715,z,mats.rubber);cylinder(group,.012,.012,.06,x,1.77,z,mats.metal,'x',8);}));
    const fairing=box(group,1.38,.13,.018,0,1.77,.64,mats.trim);fairing.rotation.x=-.5;
    if(basket){[-.72,.72].forEach(x=>lineTube(group,[[x,1.83,front],[x,1.96,front-.12],[x,1.96,rear+.06],[x,1.83,rear]],.018));for(const z of [-1.55,.49])box(group,1.44,.025,.025,0,1.955,z,mats.darkmetal);}
    else for(const x of [-.72,.72])for(const z of [-1.5,-.8,-.1,.5])box(group,.018,.014,.045,x,1.86,z,mats.metal);
  }
  function suzukiBadge(parent,x,y,z,size=.115){
    // Raised angular S emblem, not a typeset letter pasted onto the grille.
    const polygons=[[[.48,.44],[.14,.64],[-.48,.20],[-.16,-.03],[.19,.23],[.34,.14],[.48,.25]],[[.16,.03],[-.19,-.23],[-.34,-.14],[-.48,-.25],[-.48,-.44],[-.14,-.64],[.48,-.20]]];
    for(const points of polygons){const shape=new THREE.Shape(points.map(([a,b])=>new THREE.Vector2(a*size,b*size)));mesh(new THREE.ExtrudeGeometry(shape,{depth:.008,bevelEnabled:true,bevelSegments:1,steps:1,bevelSize:.001,bevelThickness:.001}),mats.chrome,parent,x,y,z);}
  }
  function buildGrille(parent,id){
    box(parent,1.49,.286,.038,0,.977,1.855,mats.trim);
    if(id==='mesh'||id==='delete'||id==='rhino'){
      for(let y=.866;y<1.09;y+=.028)box(parent,.88,.009,.012,0,y,1.882,mats.darkmetal);
      for(let x=-.43;x<.45;x+=.035)box(parent,.008,.22,.012,x,.977,1.885,mats.darkmetal);
      if(id==='rhino')suzukiBadge(parent,0,.98,1.907,.13);
    }else if(id==='oem'||id==='chrome'){
      for(const x of [-.35,-.175,0,.175,.35]){box(parent,.11,.20,.018,x,.977,1.88,mats.darkmetal);box(parent,.075,.162,.021,x,.977,1.893,mats.trim);for(const edge of [-1,1])box(parent,.008,.18,.015,x+edge*.048,.977,1.901,id==='chrome'?mats.chrome:mats.darkmetal);}
      suzukiBadge(parent,0,.98,1.92,.125);
    }else{
      for(let y=.89;y<1.08;y+=.047)box(parent,.88,.014,.012,0,y,1.887,mats.darkmetal);
      label(parent,id==='script'?'Suzuki':'SUZUKI',.68,.12,0,.98,1.908,0,'#e2e5dd','#252e2d',id==='script');
    }
  }
  function addDecals(parent,id){
    if(id==='none')return;
    [-1,1].forEach(side=>{
      if(id==='heritage'||id==='safari'){
        const colours=id==='heritage'?['#b24d25','#d58d43','#e6c58f']:['#d7c18f','#655e47','#3d4836'];
        colours.forEach((color,i)=>{const material=new THREE.MeshStandardMaterial({color,roughness:.7});const obj=box(parent,.006,.045,2.70,side*.773,.87+i*.052,-.36,material);obj.userData.disposableMaterial=true;});
      }else if(id==='geo'||id==='mountain'){
        const shape=new THREE.Shape();shape.moveTo(-1.45,0);shape.lineTo(-.85,.20);shape.lineTo(-.45,.06);shape.lineTo(.05,.24);shape.lineTo(.65,0);shape.closePath();
        const obj=mesh(new THREE.ShapeGeometry(shape),mats.darkmetal,parent,side*.774,.67,-.25);obj.rotation.y=side*Math.PI/2;
        for(let z=-1.4;z<.4;z+=.19){const stripe=box(parent,.007,.05,.11,side*.776,.77,z,mats.trim);stripe.rotation.x=-.45;}
      }else if(id==='topo'){
        for(let i=0;i<6;i++){const points=[];for(let z=-1.52;z<.8;z+=.13)points.push([side*.775,.72+i*.035+Math.sin(z*4+i)*.017,z]);tube(parent,points,.003,mats.darkmetal);}
      }
    });
  }
  function buildAccessories(parts,design){
    clear(accessoryRig);visiblePartIds=[];
    const show=(ids,fn)=>{const found=ids.filter(id=>parts.has(id));if(found.length){fn();visiblePartIds.push(...found);}};
    buildGrille(accessoryRig,design.grille||'oem');addDecals(accessoryRig,design.decal||'none');
    if(design.finish==='raptor')[-1,1].forEach(side=>box(accessoryRig,.018,.16,1.77,side*.777,.65,-.08,mats.textured));
    const hasRack=['rack','msga_roofbasket','prad_roofrack'].some(id=>parts.has(id));
    show(['rack','msga_roofbasket','prad_roofrack'],()=>roofRack(accessoryRig,parts.has('msga_roofbasket')));
    show(['snorkel','bimbra_snorkel'],()=>{tube(accessoryRig,[[-.79,1.04,1.24],[-.84,1.08,.82],[-.84,1.25,.66],[-.79,1.67,.59]],.041,mats.trim);const head=box(accessoryRig,.13,.095,.16,-.79,1.705,.62,mats.trim);head.rotation.x=.15;for(let x=-.832;x<-.74;x+=.025)box(accessoryRig,.008,.058,.008,x,1.71,.706,mats.darkmetal);box(accessoryRig,.018,.045,.07,-.78,1.5,.61,mats.darkmetal);});
    show(['bull','autostylenn_bumper_v1'],()=>{
      const shape=new THREE.Shape([[-.85,.64],[-.78,.75],[-.40,.73],[-.31,.68],[.31,.68],[.40,.73],[.78,.75],[.85,.64],[.73,.51],[-.73,.51]].map(([x,y])=>new THREE.Vector2(x,y)));
      mesh(new THREE.ExtrudeGeometry(shape,{depth:.19,bevelEnabled:true,bevelSize:.009,bevelThickness:.009,bevelSegments:1}),mats.darkmetal,accessoryRig,0,0,1.86);
      if(parts.has('bull'))tube(accessoryRig,[[-.62,.68,2.07],[-.58,.97,2.07],[.58,.97,2.07],[.62,.68,2.07]],.027);
      for(const x of [-.50,.50]){box(accessoryRig,.06,.06,.09,x,.55,2.06,mats.accent);cylinder(accessoryRig,.043,.043,.015,x,.65,2.065,mats.lens,'z');}
    });
    show(['winch'],()=>{box(accessoryRig,.45,.12,.19,0,.72,2.13,mats.trim);cylinder(accessoryRig,.055,.055,.27,0,.74,2.21,mats.metal,'x');box(accessoryRig,.07,.09,.03,0,.69,2.25,mats.accent);});
    show(['sliders'],()=>[-1,1].forEach(side=>{tube(accessoryRig,[[side*.91,.45,-.95],[side*.97,.45,-.85],[side*.97,.45,.85],[side*.91,.45,.95]],.035);box(accessoryRig,.18,.035,1.80,side*.86,.46,0,mats.darkmetal);}));
    show(['flares'],()=>[-1,1].forEach(side=>[-1.295,1.295].forEach(z=>arch(accessoryRig,side===1?.82:-.97,z,true))));
    show(['ladder'],()=>{[-.65,-.35].forEach(x=>tube(accessoryRig,[[x,.60,-1.99],[x,1.74,-1.99],[x,1.84,-1.60]],.02));for(let y=.68;y<1.7;y+=.19)box(accessoryRig,.32,.025,.035,-.5,y,-1.99,mats.darkmetal);});
    show(['led'],()=>{const y=hasRack?1.91:1.77;box(accessoryRig,1.18,.09,.10,0,y,.68,mats.trim);for(let x=-.51;x<=.52;x+=.066){cylinder(accessoryRig,.023,.023,.008,x,y,.736,mats.reflector,'z',12);cylinder(accessoryRig,.011,.011,.01,x,y,.744,mats.white,'z',8);}for(const x of [-.51,.51])box(accessoryRig,.025,.09,.06,x,y-.065,.68,mats.darkmetal);});
    show(['pods'],()=>[-1,1].forEach(side=>{box(accessoryRig,.13,.13,.12,side*.82,1.15,1.0,mats.trim);box(accessoryRig,.095,.095,.01,side*.82,1.15,1.065,mats.white);}));
    show(['rtt'],()=>{const y=hasRack?2.00:1.91;box(accessoryRig,1.34,.18,2.1,0,y,-.42,mats.canvas);box(accessoryRig,1.39,.055,2.13,0,y+.105,-.42,mats.trim);for(const side of [-1,1])for(const z of [-1.1,.3])box(accessoryRig,.018,.10,.045,side*.68,y,z,mats.trim);});
    show(['awning'],()=>{const y=hasRack?1.92:1.78;cylinder(accessoryRig,.061,.061,2.25,.82,y,-.50,mats.canvas,'z');for(const z of [-1.35,.35])box(accessoryRig,.11,.03,.055,.78,y-.05,z,mats.darkmetal);});
    show(['boards'],()=>{const y=hasRack?1.90:1.80;[-.32,.32].forEach(x=>{box(accessoryRig,.24,.035,1.0,x,y,-.4,mats.accent);for(let z=-.8;z<0;z+=.10)for(const offset of [-.075,0,.075])cylinder(accessoryRig,.012,.014,.022,x+offset,y+.027,z,mats.accent,'y',6);});});
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
    finishMaterial.color.set(colour);finishMaterial.roughness=design.finish==='matte'?.87:design.finish==='satin'?.48:.24;finishMaterial.metalness=.32;
    finishMaterial.clearcoat=design.finish==='matte'?0:design.finish==='satin'?.35:1;finishMaterial.clearcoatRoughness=design.finish==='satin'?.4:.13;finishMaterial.bumpScale=.00035;
    roofMaterial.copy(finishMaterial);if(design.finish==='twotone')roofMaterial.color.set('#242c29');
    [finishMaterial,roofMaterial].forEach(mat=>{mat.transparent=cameraView==='cabin';mat.opacity=cameraView==='cabin'?.16:1;mat.depthWrite=cameraView!=='cabin';});mats.glass.opacity=cameraView==='cabin'?.15:.77;
    clear(baseRig);buildBase();const r=buildWheels(parts);bodyRig.position.y=(parts.has('lift')?.055:0)+(r-.335);
    buildAccessories(parts,design);dirty=true;
    const visibleCount=visiblePartIds.length;
    status.textContent=stock?'Stock preview':visibleCount?`${visibleCount} selected part${visibleCount===1?'':'s'} in 3D`:mount.dataset.touchMode==='scroll'?'Live 3D · expand to rotate':'Live 3D · drag to rotate';
    renderer.domElement.setAttribute('aria-label',canvasLabel+` ${visibleCount} visible modifications.`);
    mount.dataset.parts=visiblePartIds.join(',');mount.dataset.finish=design.finish||'oem';mount.dataset.grille=design.grille||'oem';mount.dataset.decal=design.decal||'none';
    updateInputMode();
  }
  function setNight(value){night=value;scene.background.set(night?'#202b2e':'#efefed');floor.material.color.set(night?'#283338':'#e8e9e0');hemi.intensity=night?.4:1.35;sun.intensity=night?.35:2.2;rimLight.intensity=night?1.2:2;mats.white.emissiveIntensity=night?4:.25;beams.forEach(light=>light.intensity=night?12:0);dirty=true;}
  function view(name){cameraView=name;const poses={front:[0,1.6,6.7],side:[6.6,1.8,0],rear:[-4,2.4,-5.5],orbit:[4.1,2.65,4.9],cabin:[3.9,3.4,3.3]};camera.position.set(...(poses[name]||poses.orbit));controls.target.set(0,.9,0);controls.update();sync();if(name==='cabin')status.textContent='Cabin cutaway · approximate interior';document.querySelectorAll('[data-camera]').forEach(b=>b.classList.toggle('active',b.dataset.camera===name));dirty=true;}
  function fitViewport(aspect){camera.aspect=aspect;camera.fov=THREE.MathUtils.radToDeg(2*Math.atan(Math.tan(THREE.MathUtils.degToRad(35/2))*Math.max(1,1.25/aspect)));camera.updateProjectionMatrix();}
  const observer=new ResizeObserver(()=>{const {width,height}=mount.getBoundingClientRect();if(!width||!height)return;renderer.setSize(width,height,false);fitViewport(width/height);dirty=true;});observer.observe(mount);
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
    renderer.setPixelRatio(1);renderer.setSize(1600,1200,false);fitViewport(4/3);renderer.render(scene,camera);
    const data=renderer.domElement.toDataURL('image/png');
    renderer.setPixelRatio(ratio);renderer.setSize(size.x,size.y,false);fitViewport(aspect);renderer.render(scene,camera);return data;
  }
  window.jimny3D={ready:true,snapshot,getState:()=>({modelVersion:'2026.10.20',parts:[...visiblePartIds],colour,stock,night,view:cameraView,design:{...effectiveDesign},touchMode:mount.dataset.touchMode,renderCalls:renderer.info.render.calls,triangles:renderer.info.render.triangles,meshCount:car.children.reduce((sum,g)=>{let count=0;g.traverse(o=>{if(o.isMesh)count++;});return sum+count;},0)}),view};
  sync(window.getJimnyBuildState?.()||current);
  mount.classList.add('ready');
  renderer.setAnimationLoop(()=>{if(!visible||document.hidden)return;controls.update();if(dirty){renderer.render(scene,camera);dirty=false;}});
}
