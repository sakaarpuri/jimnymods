import * as T from 'three';

// Original game-world furniture. A single metre-based plan drives meshes and
// collision hulls, so visible posts/buildings never become drive-through props.
const colours={wood:'#61503e',roof:'#514b42',stone:'#8c887b',orange:'#d9773d',cream:'#e9e0c8',metal:'#526268',canvas:'#b79b70',rubber:'#303535'};
function clearPosition(world,x,z,radius){
  const acceptable=(px,pz)=>world.contains(px,pz,radius+2)&&(world.landmarkRouteDistance||world.routeDistance)(px,pz)>radius+3;
  if(acceptable(x,z))return {x,z};
  for(let r=3;r<=45;r+=3)for(let i=0;i<16;i++){
    const a=i*Math.PI/8,px=x+Math.sin(a)*r,pz=z+Math.cos(a)*r;
    if(acceptable(px,pz))return {x:px,z:pz};
  }
  return null;
}

export function makeLandmarkPlan(world){
  const plan=[];
  const landmark=(id,kind,x,z,radius)=>{
    const p=clearPosition(world,x,z,radius);if(!p)return null;
    const item={id,kind,...p,y:world.height(p.x,p.z),parts:[],labels:[]};plan.push(item);return item;
  };
  const part=(item,name,shape,x,y,z,width,height,depth,color,solid=true)=>{
    if(!item)return;item.parts.push({id:`${item.id}-${name}`,shape,x:item.x+x,y:item.y+y,z:item.z+z,width,height,depth,color,solid});
  };
  const label=(item,text,x,y,z,width=3.2,height=.6)=>{if(item)item.labels.push({text,x:item.x+x,y:item.y+y,z:item.z+z,width,height});};
  const sign=(id,text,x,z)=>{
    const s=landmark(id,'sign',x,z,1.9);if(!s)return;
    part(s,'post','cylinder',0,0,0,.14,2.3,.14,colours.wood);
    part(s,'board','box',0,1.65,0,3.6,.7,.16,colours.wood);
    label(s,text,0,2,-.085,3.35,.55);
  };
  const crate=(s,name,x,z,w=1.15)=>{
    part(s,name,'box',x,0,z,w,.8,w*.8,colours.wood);
    for(const dx of [-.4,.4])part(s,`${name}-strap-${dx}`,'box',x+dx*w,.01,z,.045,.81,w*.81,colours.metal,false);
  };
  const tent=(id,x,z)=>{
    const s=landmark(id,'tent',x,z,4.5);if(!s)return;
    part(s,'canvas','box',0,0,0,5,2,4,colours.canvas);
    part(s,'roof','roof',0,2,0,6,1.5,5,colours.cream);
    part(s,'door','box',0,0,-2.02,1.35,1.75,.06,colours.wood,false);
    part(s,'awning','box',0,2.05,-3.1,5.7,.08,2.5,colours.canvas);
    for(const dx of [-2.6,2.6])part(s,`awning-post-${dx}`,'cylinder',dx,0,-4.2,.12,2.08,.12,colours.wood);
    crate(s,'equipment',3.3,1);return s;
  };

  if(world.course.theme==='mountain'){
    sign('valley-fork','VALLEY CLIMB  ←',-15,48);
    sign('rock-fork','ROCK GARDEN  →',24,60);
    sign('ridge-fork','LOOKOUT  ↑   DESCENT  ←',70,263);
    const pavilion=landmark('lookout-pavilion','pavilion',122,341,7.5);
    if(pavilion){
      // A level plinth extends down to the lowest corner on the sloping ridge.
      const corners=[[-4.5,-3.5],[4.5,-3.5],[-4.5,3.5],[4.5,3.5]].map(([x,z])=>world.height(pavilion.x+x,pavilion.z+z));
      const lo=Math.min(...corners),top=Math.max(...corners)+.18;pavilion.y=lo;
      const deck=top-lo;
      part(pavilion,'stone-plinth','box',0,0,0,9,deck,7,colours.stone);
      for(const x of [-3.7,3.7])for(const z of [-2.7,2.7])part(pavilion,`post-${x}-${z}`,'box',x,deck,z,.24,2.7,.24,colours.wood);
      part(pavilion,'roof','roof',0,deck+2.7,0,9.5,1.45,7.7,colours.roof);
      for(const z of [-2.75,2.75])part(pavilion,`bench-${z}`,'box',0,deck+.42,z,5.8,.14,.55,colours.wood);
      for(const x of [-4.25,4.25])part(pavilion,`rail-${x}`,'box',x,deck+.9,0,.11,.12,6.5,colours.wood);
      label(pavilion,'HIGHLAND LOOKOUT',0,deck+1.8,-2.84,4.4,.55);
    }
    sign('lookout-arrival','LOOKOUT · PARK & TAKE A BREATH',112,327);
    const shelter=landmark('rock-garden-rest','shelter',101,205,4.5);
    if(shelter){
      for(const x of [-2.7,2.7])for(const z of [-1.8,1.8])part(shelter,`post-${x}-${z}`,'cylinder',x,0,z,.18,2.5,.18,colours.wood);
      part(shelter,'roof','roof',0,2.5,0,6.3,1.05,4.7,colours.roof);
      part(shelter,'bench','box',0,.45,1.5,4.8,.18,.65,colours.wood);
      label(shelter,'ROCK GARDEN · REST POINT',0,2,-1.88,4.8,.5);
    }
  }else if(world.course.theme==='sand'){
    // Difficulty changes survey destinations, so the visible numbered beacons
    // follow the active route rather than advertising unreachable fixed points.
    const survey=world.missions?.find(m=>m.id==='survey')?.routes[world.settings.route];
    for(const [index,point]of (survey?[survey[2],survey[3],survey[4]]:[]).entries()){
      const s=landmark(`survey-beacon-${index+1}`,'beacon',point.x+8,point.z,1);
      if(!s)continue;
      part(s,'foot','box',0,0,0,.65,.18,.65,colours.stone);
      for(let j=0;j<6;j++)part(s,`mast-${j}`,'cylinder',0,.18+j*.55,0,.19,.55,.19,j%2?colours.cream:colours.orange);
      part(s,'diamond','diamond',0,3.48,0,1.1,1.1,.18,colours.orange);
      label(s,String(index+1),0,4.03,-.102,.58,.58);
    }
    tent('survey-base-main',-23,30);tent('survey-base-east',-40,35);
    tent('survey-field-camp',-105,245);
    const depot=landmark('survey-depot','depot',-28,44,3.5);
    if(depot){
      part(depot,'water','cylinder',0,0,0,1.5,1.6,1.5,colours.metal);
      crate(depot,'supplies',2.1,0);crate(depot,'recovery-kit',2.1,1.4);
      part(depot,'solar-frame','box',-1.7,.9,0,1.7,.08,1.2,colours.metal);
      part(depot,'solar-panel','box',-1.7,.99,0,1.6,.025,1.1,'#253c48',false);
    }
    sign('survey-base-sign','SURVEY BASE · RETURN HERE',-12,38);
    sign('sand-approach','SOFT BOWL  ←   FIRM SHOULDER  →',90,130);
  }else{
    // This same facility is used by lessons and expedition missions. No new
    // location/menu is introduced, and every selected route stays unobstructed.
    const workshop=landmark('field-workshop','workshop',-36,128,5.5);
    if(workshop){
      part(workshop,'building','box',0,0,0,8,4.2,4,colours.metal);
      part(workshop,'roof','box',0,4.2,0,8.6,.22,4.6,colours.roof);
      for(const x of [-2.1,2.1]){
        part(workshop,`shutter-${x}`,'box',x,.1,-2.045,3,2.9,.07,'#343e42',false);
        for(let h=.35;h<3;h+=.35)part(workshop,`rib-${x}-${h}`,'box',x,h,-2.1,2.85,.025,.02,'#687277',false);
      }
      label(workshop,'TRAIL WORKSHOP',0,3.6,-2.16,6.5,.6);
      for(const x of [-4,4])part(workshop,`column-${x}`,'box',x,0,-2.12,.15,4.2,.2,colours.orange,false);
    }
    const container=landmark('equipment-container','container',-86,101,7);
    if(container){
      part(container,'body','box',0,0,0,12,2.6,3,'#927353');
      for(let x=-5.7;x<6;x+=.45)part(container,`rib-${x}`,'box',x,.08,-1.54,.065,2.45,.055,'#a08362',false);
      label(container,'FIELD EQUIPMENT',0,1.5,-1.59,6,.6);
    }
    for(const [index,z]of [82,91,100].entries()){
      const stacks=landmark(`tyre-station-${index}`,'tyres',-85,z+24,1.3);if(!stacks)continue;
      // A cylinder hull matches the stack envelope. Tread/sidewall rings are
      // visual detail on that same solid envelope, not additional barriers.
      part(stacks,'hull','cylinder',0,0,0,1.15,1.12,1.15,colours.rubber);
      for(let j=0;j<4;j++)part(stacks,`ring-${j}`,'tyre',0,.02+j*.28,0,1.2,.26,1.2,colours.rubber,false);
    }
    sign('slalom-sign','BRAKE FIRST · THEN TURN',15,77);
    sign('ramp-yard-sign','OFFSET RAMPS · LOW RANGE',-83,76);
    for(const x of [17,45])for(const z of [95,115,135,155]){
      const cone=landmark(`lane-cone-${x}-${z}`,'cone',x,z,.3);if(!cone)continue;
      part(cone,'base','box',0,0,0,.46,.055,.46,colours.rubber);
      part(cone,'body','cone',0,.055,0,.36,.58,.36,colours.orange);
      part(cone,'reflector','cone',0,.31,0,.20,.09,.20,colours.cream,false);
    }
  }
  for(const line of world.adventure||[]){const [x,z]=line.points[0];sign(`adventure-sign-${line.id}`,line.name,x-line.width/2-4,z-6);}
  return plan;
}

export function landmarkCollisionHulls(plan){
  return plan.flatMap(item=>item.parts.filter(p=>p.solid).map(p=>({id:p.id,type:p.shape==='cylinder'||p.shape==='cone'?'cylinder':'box',x:p.x,y:p.y,z:p.z,width:p.width,depth:p.depth,height:p.height,radius:Math.max(p.width,p.depth)/2,yaw:0,landmarkId:item.id})));
}

export function createCourseLandmarks(world,parent){
  const root=new T.Group();root.name='CourseLandmarks';parent.add(root);
  const plan=world.landmarks||makeLandmarkPlan(world),groups=new Map(),dummy=new T.Object3D();
  for(const landmark of plan)for(const part of landmark.parts){
    if(!groups.has(part.shape))groups.set(part.shape,[]);groups.get(part.shape).push(part);
  }
  for(const [shape,parts]of groups){
    let geometry;
    if(shape==='cylinder')geometry=new T.CylinderGeometry(.5,.5,1,12);
    else if(shape==='cone')geometry=new T.ConeGeometry(.5,1,12);
    else if(shape==='roof'){geometry=new T.ConeGeometry(Math.SQRT1_2,1,4);geometry.rotateY(Math.PI/4);}
    else if(shape==='diamond'){geometry=new T.BoxGeometry(Math.SQRT1_2,Math.SQRT1_2,1);geometry.rotateZ(Math.PI/4);}
    else if(shape==='tyre'){geometry=new T.TorusGeometry(.38,.12,8,16);geometry.rotateX(Math.PI/2);geometry.scale(1,1/.24,1);}
    else geometry=new T.BoxGeometry(1,1,1);
    const material=new T.MeshStandardMaterial({color:'#ffffff',roughness:shape==='tyre'?.96:.86});
    const mesh=new T.InstancedMesh(geometry,material,parts.length);mesh.name=`Landmarks-${shape}`;mesh.castShadow=mesh.receiveShadow=true;
    mesh.userData.landmarkParts=parts.map(p=>({id:p.id,solid:p.solid,width:p.width,height:p.height,depth:p.depth}));
    parts.forEach((p,i)=>{dummy.position.set(p.x,p.y+p.height/2,p.z);dummy.scale.set(p.width,p.height,p.depth);dummy.rotation.set(0,0,0);dummy.updateMatrix();mesh.setMatrixAt(i,dummy.matrix);mesh.setColorAt(i,new T.Color(p.color));});root.add(mesh);
  }
  for(const landmark of plan)for(const label of landmark.labels){
    if(typeof document==='undefined')continue;
    const canvas=document.createElement('canvas'),short=label.text.length<3;canvas.width=short?256:1024;canvas.height=short?256:160;const ctx=canvas.getContext('2d');
    ctx.fillStyle='#ded5b9';ctx.font=`bold ${short?190:66}px sans-serif`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(label.text,canvas.width/2,canvas.height/2,canvas.width-24);
    const map=new T.CanvasTexture(canvas);map.colorSpace=T.SRGBColorSpace;
    const material=new T.MeshStandardMaterial({map,transparent:true,roughness:.95,side:T.DoubleSide,depthWrite:false,polygonOffset:true,polygonOffsetFactor:-1});material.addEventListener('dispose',()=>map.dispose());
    const mesh=new T.Mesh(new T.PlaneGeometry(label.width,label.height),material);mesh.position.set(label.x,label.y,label.z);mesh.rotation.y=Math.PI;root.add(mesh);
  }
  root.userData.landmarks=plan.map(p=>({id:p.id,kind:p.kind,x:p.x,y:p.y,z:p.z}));return root;
}
