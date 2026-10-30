import * as T from 'three';
import {createWorkshopGear} from './workshop-gear.js';

export const WORKSHOP_CAMERA_RADIUS=8.1;
export const WORKSHOP_LAYOUT=Object.freeze({width:20.32,depth:20.32,roof:10.26});

// One dominant opening, two weaker high-bay battens and a local bench light.
// Every source has an actual visible fixture, not a camera-facing softbox.
// Direct illumination and reflected highlights consume the same layout.
export const WORKSHOP_LIGHT_SOURCES=Object.freeze([
 Object.freeze({role:'key',width:4,height:3.8,position:Object.freeze([10.04,3.1,5.2]),target:Object.freeze([0,.9,0]),intensity:10,colour:'#fffdf8'}),
 Object.freeze({role:'ceiling-front',width:1.8,height:.12,position:Object.freeze([0,9.72,4.8]),target:Object.freeze([0,0,4.8]),intensity:85,colour:'#f7f7f2'}),
 Object.freeze({role:'ceiling-rear',width:1.8,height:.12,position:Object.freeze([0,9.72,-4.8]),target:Object.freeze([0,0,-4.8]),intensity:36,colour:'#f7f7f2'}),
 Object.freeze({role:'bench',width:.045,height:1.2,position:Object.freeze([-6.4,3.45,-9.54]),target:Object.freeze([-6.4,1.0,-8.1]),intensity:65,colour:'#fff4df'})
]);

// Original seamless concrete, not a photographic plate. Broad mottling, fine
// aggregate and independent surface data give physical scale without more mesh.
function concreteTextures(size=512){
  const colour=new Uint8Array(size*size*4),surface=new Uint8Array(size*size*4);let seed=91;
  function noise(x,y,period){
    const ix=Math.floor(x),iy=Math.floor(y),fx=x-ix,fy=y-iy,sx=fx*fx*(3-2*fx),sy=fy*fy*(3-2*fy);
    const hash=(a,b)=>{let n=Math.imul((a%period)+31,374761393)^Math.imul((b%period)+73,668265263);n=Math.imul(n^(n>>>13),1274126177);return ((n^(n>>>16))>>>0)/4294967295;};
    const a=hash(ix,iy)*(1-sx)+hash(ix+1,iy)*sx,b=hash(ix,iy+1)*(1-sx)+hash(ix+1,iy+1)*sx;
    return a*(1-sy)+b*sy;
  }
  for(let y=0;y<size;y++)for(let x=0;x<size;x++){
    seed=(Math.imul(seed,1664525)+1013904223)>>>0;
    const u=x/size,v=y/size,grain=(seed>>>24)/255;
    const cloud=(noise(u*4,v*4,4)-.5)*.55+(noise(u*13,v*13,13)-.5)*.28+(noise(u*41,v*41,41)-.5)*.17;
    const pit=grain>.98?.14:0,level=.46+cloud*.24+(grain-.5)*.14-pit,i=(y*size+x)*4;
    colour[i]=Math.round(level*255);colour[i+1]=Math.round((level+.003)*255);colour[i+2]=Math.round((level-.006)*255);colour[i+3]=255;
    surface[i]=Math.round((.52+(grain-.5)*.23+cloud*.012-pit)*255);
    surface[i+1]=Math.round((.83+cloud*.16+grain*.065)*255);surface[i+2]=surface[i];surface[i+3]=255;
  }
  function texture(data,colourSpace){const t=new T.DataTexture(data,size,size);t.wrapS=t.wrapT=T.RepeatWrapping;t.generateMipmaps=true;t.minFilter=T.LinearMipmapLinearFilter;t.magFilter=T.LinearFilter;t.colorSpace=colourSpace;t.needsUpdate=true;return t;}
  return {colour:texture(colour,T.SRGBColorSpace),surface:texture(surface,T.NoColorSpace)};
}

export function createWorkshopStage({onLoad=()=>{}}={}){
  const root=new T.Group();root.name='WorkshopStage';root.visible=false;
  let disposed=false,ready=typeof document==='undefined',surfacesReady=ready,identityReady=ready;
  const loaded=()=>{ready=surfacesReady&&identityReady;if(!disposed)onLoad();};
  const textures=concreteTextures(),maps=new Set(Object.values(textures)),materials=new Set(),geometries=new Set();
  // Viewer floor spans 200 m: each repeat is 4 m. Correct sRGB tagging avoids
  // treating grey albedo as bright linear data under the studio environment.
  textures.colour.repeat.set(50,50);textures.surface.repeat.set(50,50);
  function material(options){const m=new T.MeshStandardMaterial(options);materials.add(m);return m;}
  const concrete=material({name:'WorkshopConcrete',color:'#484a44',map:textures.colour,bumpMap:textures.surface,bumpScale:.005,roughnessMap:textures.surface,roughness:.94,envMapIntensity:.10});
  // Generated, project-owned diffuse concrete, not a flat garage photograph.
  // The real geometry, shadows and perspective remain responsive to orbit.
  // Keep procedural maps as a network-error fallback and for surface relief.
  if(typeof document!=='undefined')new T.TextureLoader().load('assets/environments/workshop-concrete.webp',texture=>{
    if(disposed){texture.dispose();return;}
    texture.colorSpace=T.SRGBColorSpace;texture.wrapS=texture.wrapT=T.RepeatWrapping;texture.repeat.set(100,100);texture.anisotropy=8;maps.add(texture);
    concrete.map=texture;concrete.color.set('#aaaaa8');concrete.needsUpdate=true;surfacesReady=true;loaded();
  },undefined,()=>{surfacesReady=true;loaded();});
  function wallMap(source){const map=source.clone();map.repeat.set(6,1.4);map.needsUpdate=true;maps.add(map);return map;}
  // The map already contains grey albedo: do not multiply it by dark paint.
  const wall=material({name:'WorkshopPlaster',color:'#dededd',map:wallMap(textures.colour),bumpMap:wallMap(textures.surface),bumpScale:.0005,roughness:.95,envMapIntensity:.04});
  const plinth=material({color:'#252c2d',roughness:.94,envMapIntensity:.04});
  const steel=material({color:'#343c3e',roughness:.68,metalness:.42,envMapIntensity:.18});
  const darkSteel=material({color:'#202729',roughness:.78,metalness:.3,envMapIntensity:.12});
  const shutter=material({color:'#3b4243',roughness:.76,metalness:.32,envMapIntensity:.12});
  const safety=material({color:'#a3a397',roughness:.9,envMapIntensity:.04});
  const enamel=material({name:'WorkshopGreyEnamel',color:'#777b78',roughness:.78,metalness:.08,envMapIntensity:.15});
  const timber=material({name:'WorkshopTimber',color:'#a29f95',roughness:.86,envMapIntensity:.08});
  const lamp=material({color:'#ebece5',emissive:'#f3f4ec',emissiveIntensity:2.0,roughness:.55,envMapIntensity:.05});
  function geometry(g){geometries.add(g);return g;}
  function box(name,w,h,d,x,y,z,mat){const mesh=new T.Mesh(geometry(new T.BoxGeometry(w,h,d)),mat);mesh.name=name;mesh.position.set(x,y,z);root.add(mesh);return mesh;}
  function instances(name,shape,mat,positions){const mesh=new T.InstancedMesh(geometry(shape),mat,positions.length),dummy=new T.Object3D();mesh.name=name;positions.forEach(([x,y,z,angle=0],i)=>{dummy.position.set(x,y,z);dummy.rotation.set(0,0,angle);dummy.updateMatrix();mesh.setMatrixAt(i,dummy.matrix);});root.add(mesh);return mesh;}
  // Author the shell on a regular grid, then contract its footprint below.
  // Doors, cabinets and tools retain human-scale dimensions. The inspection
  // orbit is bounded separately so no wall or equipment can cross the camera.
  box('Back wall',25.4,5.6,.16,0,2.8,-12.5,wall);
  box('Front wall',25.4,5.6,.16,0,2.8,12.5,wall);
  box('Shaded side wall',.16,5.6,25.4,-12.7,2.8,0,wall);
  // One actual daylight opening explains the dominant light and its reflection.
  // The opposite side remains a quiet, shaded working bay, not another softbox.
  box('Window wall south',.16,5.6,16.7,12.7,2.8,-4.35,wall);
  box('Window wall north',.16,5.6,3.7,12.7,2.8,10.85,wall);
  box('Window sill wall',.16,1.2,5,12.7,.6,6.5,wall);
  box('Window lintel wall',.16,.6,5,12.7,5.3,6.5,wall);
  const sky=material({color:'#d1d5d5',emissive:'#d1d5d5',emissiveIntensity:.85,roughness:1});
  box('Open bay daylight',.03,3.8,5,12.78,3.1,6.5,sky);
  instances('Daylight bay mullions',new T.BoxGeometry(.12,3.9,.045),darkSteel,[4,6.5,9].map(z=>[12.59,3.1,z]));
  instances('Daylight bay frames',new T.BoxGeometry(.13,.07,5.1),steel,[1.2,5].map(y=>[12.58,y,6.5]));
  for(const z of [-12.5,12.5])box('Upper end cladding',25.4,7,.16,0,9.1,z,darkSteel);
  for(const x of [-12.7,12.7])box('Upper side cladding',.16,7,25.4,x,9.1,0,darkSteel);
  box('High bay roof',25.4,.12,25.4,0,12.66,0,darkSteel);
  // Shallow I-section roof beams and enclosed LED battens. No animated lights,
  // shadow maps or translucent layers are added by this architectural stage.
  for(const [name,w,h,d,y] of [['Roof beam lower flange',25.1,.045,.20,12.24],['Roof beam web',25.1,.28,.045,12.4],['Roof beam upper flange',25.1,.045,.20,12.56]]){
    instances(name,new T.BoxGeometry(w,h,d),steel,[-9,-3,3,9].map(z=>[0,y,z]));
  }
  instances('Ceiling light housings',new T.BoxGeometry(2.4,.075,.22),darkSteel,[-6,6].map(z=>[0,12.17,z]));
  instances('Ceiling light diffusers',new T.BoxGeometry(2.25,.018,.15),lamp,[-6,6].map(z=>[0,12.12,z]));
  box('Back protective plinth',25.2,.64,.08,0,.32,-12.36,plinth);
  box('Front protective plinth',25.2,.64,.08,0,.32,12.36,plinth);
  for(const side of [-1,1])box('Side protective plinth',.08,.64,25.2,side*12.56,.32,0,plinth);
  instances('Steel uprights',new T.BoxGeometry(.16,5.6,.24),darkSteel,[-12,-8,-4,0,4,8,12].map(x=>[x,2.8,-12.29]));
  instances('Front steel uprights',new T.BoxGeometry(.16,5.6,.24),darkSteel,[-12,-8,-4,0,4,8,12].map(x=>[x,2.8,12.29]));
  instances('Column baseplates',new T.BoxGeometry(.32,.045,.35),steel,[-12,-8,-4,0,4,8,12].flatMap(x=>[-12.29,12.29].map(z=>[x,.025,z])));
  const boltShape=new T.CylinderGeometry(.021,.021,.025,6);
  instances('Baseplate fixings',boltShape,steel,[-12,-8,-4,0,4,8,12].flatMap(x=>[-12.29,12.29].flatMap(z=>[-.11,.11].flatMap(dx=>[-.12,.12].map(dz=>[x+dx,.055,z+dz])))));
  // Recessed seams and a capped impact plinth describe panel construction;
  // they sit behind the doors, so they never cross their visible surfaces.
  instances('Back panel joints',new T.BoxGeometry(.018,4.9,.012),plinth,[-10,-6,-2,2,6,10].map(x=>[x,3.1,-12.408]));
  for(const z of [-12.31,12.31])box('Plinth cap',25.2,.045,.12,0,.66,z,darkSteel);
  box('Wall service conduit',25.2,.045,.05,0,2.72,-12.23,steel);
  box('Upper wall rail',25.2,.12,.15,0,4.75,-12.28,darkSteel);
  // Real-size 4.2 x 3.5 m service shutter, with shallow rolled steel profiles.
  box('Shutter recess',4.36,3.6,.045,4.5,1.8,-12.23,darkSteel);
  box('Shutter leaf',4.2,3.45,.04,4.5,1.755,-12.18,shutter);
  const ribShape=new T.CylinderGeometry(.017,.017,4.2,5,1);ribShape.rotateZ(Math.PI/2);
  instances('Shutter ribs',ribShape,steel,Array.from({length:34},(_,i)=>[4.5,.1+i*.102,-12.145]));
  for(const x of [2.33,6.67])box('Shutter guide',.11,3.62,.12,x,1.81,-12.12,darkSteel);
  box('Shutter lintel',4.52,.2,.22,4.5,3.66,-12.13,steel);
  box('Shutter bottom seal',4.2,.055,.06,4.5,.045,-12.12,darkSteel);
  // A human-size service door supplies scale without adding people or clutter.
  box('Service door frame',1.12,2.2,.12,-5.8,1.1,-12.21,darkSteel);
  box('Service door',.96,2.08,.04,-5.8,1.06,-12.13,steel);
  box('Service door handle',.13,.035,.055,-5.47,1.02,-12.08,shutter);
  // A small wall-side work station is deliberately peripheral, below the
  // vehicle silhouette, and outside the orbit envelope. Drawer reveals and a
  // folded worktop communicate use without a shelf full of decorative clutter.
  box('Service station body',1.8,.84,.44,-9,.47,-12.04,enamel);
  box('Service station worktop',1.96,.055,.53,-9,.92,-12.04,timber);
  instances('Service station drawer fronts',new T.BoxGeometry(1.7,.18,.025),enamel,[.23,.44,.65].map(y=>[-9,y,-11.805]));
  instances('Service station drawer pulls',new T.BoxGeometry(.48,.025,.045),steel,[.23,.44,.65].map(y=>[-9,y,-11.77]));
  for(const x of [-8]){
    box('Wall light housing',.12,1.36,.09,x,3.45,-12.11,darkSteel);
    box('Wall light diffuser',.045,1.2,.025,x,3.45,-12.05,lamp);
  }
  box('Corner protector',.25,1.15,.055,-11.98,.575,-12.11,darkSteel);
  instances('Safety markings',new T.BoxGeometry(.22,.08,.015),safety,Array.from({length:4},(_,i)=>[-11.98,.2+i*.24,-12.07,-.4]));
  // Painted bay number and an actual hanging tool rail give the room a purpose.
  // Both stay on the far wall and never intrude into the vehicle orbit envelope.
  if(typeof document!=='undefined'){
    const canvas=document.createElement('canvas');canvas.width=512;canvas.height=256;const ctx=canvas.getContext('2d');ctx.fillStyle='#c4c4ba';ctx.font='700 154px sans-serif';ctx.fillText('03',20,155);ctx.font='20px sans-serif';ctx.fillText('BUILD / SERVICE',25,200);
    const texture=new T.CanvasTexture(canvas);texture.colorSpace=T.SRGBColorSpace;maps.add(texture);const sign=material({map:texture,transparent:true,roughness:1,depthWrite:false});
    const marking=new T.Mesh(geometry(new T.PlaneGeometry(2.4,1.2)),sign);marking.name='Painted service bay number';marking.position.set(-3,3.55,-12.10);root.add(marking);
  }
  instances('Tool rail pegs',new T.BoxGeometry(.025,.025,.12),steel,[-9.65,-9.3,-8.95,-8.6].map(x=>[x,1.9,-12.05]));
  instances('Hanging tool handles',new T.BoxGeometry(.045,.40,.025),steel,[-9.65,-9.3,-8.95,-8.6].map((x,i)=>[x,1.7,-11.97,i%2?.08:-.06]));
  instances('Hanging tool heads',new T.TorusGeometry(.07,.018,5,12,Math.PI*1.45),steel,[-9.65,-9.3,-8.95,-8.6].map(x=>[x,1.95,-11.97,.3]));
  // Paint, not another luminous panel: restrained workshop identity in the
  // everyday driving-view background. Nothing enters the inspection envelope.
  instances('Workshop datum stripe',new T.BoxGeometry(25.1,.16,.012),enamel,[-12.39,12.39].map(z=>[0,1.20,z]));
  box('Equipment locker',1.35,1.65,.52,-10.8,.825,-12.02,enamel);
  instances('Locker door reveals',new T.BoxGeometry(.018,1.5,.012),darkSteel,[-10.8].map(x=>[x,.825,-11.75]));
  instances('Locker handles',new T.BoxGeometry(.025,.18,.035),steel,[-10.87,-10.73].map(x=>[x,.98,-11.73]));
  if(typeof document!=='undefined'){
    function wallGraphic(name,width,height,x,y,draw){
      const canvas=document.createElement('canvas');canvas.width=1536;canvas.height=768;let texture;
      draw(canvas.getContext('2d'),()=>{if(texture&&!disposed){texture.needsUpdate=true;onLoad();}});
      texture=new T.CanvasTexture(canvas);texture.colorSpace=T.SRGBColorSpace;maps.add(texture);
      const m=material({map:texture,transparent:true,roughness:1,depthWrite:false});
      const mesh=new T.Mesh(geometry(new T.PlaneGeometry(width,height)),m);mesh.name=name;mesh.position.set(x,y,-12.08);root.add(mesh);
    }
    wallGraphic('Workshop painted identity',2.85,1.425,-8.3,3.25,(ctx,refresh)=>{
      ctx.fillStyle='#d5d5ce';ctx.font='800 150px sans-serif';ctx.fillText('jimnygami',25,265);
      ctx.fillStyle='#a6aaa5';ctx.fillRect(30,320,1420,14);ctx.font='600 58px sans-serif';ctx.fillText('BUILT HERE. TAKEN EVERYWHERE.',30,420);
      ctx.fillStyle='#d5d5ce';ctx.font='42px monospace';ctx.fillText('WORKSHOP  /  4 × 4  /  FIELD NOTES',30,530);
      const logo=new Image();logo.onload=()=>{
        if(disposed)return;ctx.clearRect(0,0,1536,350);
        // A code-native die-cut paper silhouette. The supplied lettering pixels
        // remain untouched; only the surrounding rectangular backing is clipped.
        ctx.save();ctx.translate(25,20);ctx.scale(1420/1570,326/360);ctx.beginPath();
        ctx.roundRect(70,82,1490,197,22);
        for(const x of [120,216,1505]){ctx.moveTo(x+48,55);ctx.arc(x,55,48,0,Math.PI*2);}
        ctx.moveTo(10,248);ctx.lineTo(75,193);ctx.lineTo(170,207);ctx.lineTo(170,310);ctx.quadraticCurveTo(166,347,132,347);ctx.lineTo(10,347);ctx.closePath();
        ctx.roundRect(675,240,190,107,37);ctx.roundRect(855,240,215,108,37);
        ctx.clip();ctx.drawImage(logo,100,250,1570,360,0,0,1570,360);ctx.restore();
        identityReady=true;refresh();loaded();
      };
      logo.onerror=()=>{identityReady=true;loaded();};logo.src='assets/jimnygami-logo-original.png';
    });
    wallGraphic('Workshop route board',2.6,1.3,-.15,2.75,ctx=>{
      ctx.fillStyle='#414745';ctx.fillRect(0,0,1536,768);ctx.strokeStyle='#b9bbb4';ctx.lineWidth=3;
      for(let j=0;j<10;j++){ctx.beginPath();for(let i=0;i<=70;i++){const x=i*23,y=110+j*59+Math.sin(i*.18+j*.31)*45+Math.cos(i*.31)*24;i?ctx.lineTo(x,y):ctx.moveTo(x,y);}ctx.stroke();}
      ctx.strokeStyle='#d1d3cb';ctx.lineWidth=11;ctx.beginPath();ctx.moveTo(220,650);ctx.bezierCurveTo(900,500,200,350,1140,180);ctx.stroke();
      ctx.fillStyle='#e6e6df';ctx.fillRect(30,25,650,86);ctx.fillStyle='#414745';ctx.font='bold 48px sans-serif';ctx.fillText('NEXT TRIP / FIELD ROUTE',50,84);
    });
  }
  // A 20% smaller shell, not a miniature room: human-scale assemblies move
  // with their wall while retaining their own dimensions and internal spacing.
  const shellScale=.8;
  function humanAnchor(name){
    if(/Service door/.test(name))return -5.8;
    if(/Service station|Tool rail|Hanging tool/.test(name))return -9;
    if(/Equipment locker|Locker/.test(name))return -10.8;
    if(/Shutter/.test(name))return 4.5;
    if(/Wall light/.test(name))return -8;
    return null;
  }
  for(const mesh of root.children){
    const anchor=humanAnchor(mesh.name);
    if(anchor===null){
      mesh.geometry.scale(shellScale,1,shellScale);
      if(/Upper .*cladding/.test(mesh.name))mesh.geometry.scale(1,4.6/7,1);
    }
    const move=position=>{
      if(anchor===null){position.x*=shellScale;position.z*=shellScale;}
      else{position.x+=anchor*(shellScale-1);position.z+=2.5;}
      if(position.y>6)position.y-= /Upper .*cladding/.test(mesh.name)?1.2:2.4;
    };
    if(mesh.isInstancedMesh){
      const matrix=new T.Matrix4(),position=new T.Vector3(),quaternion=new T.Quaternion(),scale=new T.Vector3();
      for(let i=0;i<mesh.count;i++){mesh.getMatrixAt(i,matrix);matrix.decompose(position,quaternion,scale);move(position);matrix.compose(position,quaternion,scale);mesh.setMatrixAt(i,matrix);}mesh.instanceMatrix.needsUpdate=true;
    }else move(mesh.position);
  }
  const gear=createWorkshopGear();root.add(gear.root);
  root.userData.layout=WORKSHOP_LAYOUT;root.userData.gear=gear.root.userData.items;
  return {root,floorMaterial:concrete,get ready(){return ready;},dispose(){if(disposed)return;disposed=true;gear.dispose();root.traverse(o=>{if(o.isInstancedMesh)o.dispose();});geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());maps.forEach(t=>t.dispose());}};
}
