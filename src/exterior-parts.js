import * as T from 'three';
import jimnyWordmark from '../assets/models/jimny-wordmark.json' with {type:'json'};
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import '../assets/exterior-parts-data.js';
import {addFittedFrontCornerGuards} from './jimnyworx-front-guards.js';
export const EXTERIOR_PARTS=globalThis.JimnyExteriorParts;
export const WHEEL_PARTS=Object.values(EXTERIOR_PARTS).filter(p=>p.diameter);
export const exteriorConflict=(a,b)=>globalThis.JimnyExteriorConflict(a,b);
export function normalizeExteriorParts(ids,body){
 const result=[];
 for(const id of ids){const p=EXTERIOR_PARTS[id];if(p&&!p.bodyStyles.includes(body))continue;for(let i=result.length-1;i>=0;i--)if(exteriorConflict(id,result[i]))result.splice(i,1);result.push(id);}
 return result;
}
const add=(g,geo,mat,name,pos=[0,0,0])=>{const m=new T.Mesh(geo,mat);m.name=name;m.position.set(...pos);m.castShadow=m.receiveShadow=true;g.add(m);return m;};
const box=(g,size,pos,mat,name,r=.003)=>add(g,new RoundedBoxGeometry(...size,2,Math.min(r,...size.map(x=>x/3))),mat,name,pos);
function materialPalette(){
 const noise=new Uint8Array(64*64*4);let seed=113;
 for(let i=0;i<noise.length;i+=4){seed=(seed*1664525+1013904223)>>>0;noise[i]=noise[i+1]=noise[i+2]=120+(seed%70);noise[i+3]=255;}
 const texture=new T.DataTexture(noise,64,64);texture.wrapS=texture.wrapT=T.RepeatWrapping;texture.repeat.set(12,12);texture.needsUpdate=true;
 const plastic=new T.MeshStandardMaterial({name:'Moulded textured ABS',color:'#252a2c',roughness:.82,bumpMap:texture,bumpScale:.00035});plastic.addEventListener('dispose',()=>texture.dispose());
 return {plastic,silver:new T.MeshStandardMaterial({name:'Satin silver coated garnish',color:'#b6bec0',metalness:.55,roughness:.37}),edge:new T.MeshStandardMaterial({name:'Garnish rubber backing',color:'#141a1c',roughness:.93}),bolt:new T.MeshStandardMaterial({name:'Recessed mounting screws',color:'#525b5e',metalness:.7,roughness:.35})};
}
function outline(points){
 const shape=new T.Shape(),v=points.map(p=>new T.Vector2(...p));
 for(let i=0;i<v.length;i++){const prev=v[(i+v.length-1)%v.length],p=v[i],next=v[(i+1)%v.length],r=Math.min(.009,p.distanceTo(prev)*.2,p.distanceTo(next)*.2),a=p.clone().lerp(prev,r/p.distanceTo(prev)),b=p.clone().lerp(next,r/p.distanceTo(next));if(i===0)shape.moveTo(a.x,a.y);else shape.lineTo(a.x,a.y);shape.quadraticCurveTo(p.x,p.y,b.x,b.y);}
 shape.closePath();return shape;
}
function panel(g,points,mat,name,position,side=0,depth=.006){
 const geo=new T.ExtrudeGeometry(outline(points),{depth,bevelEnabled:true,bevelSize:.0018,bevelThickness:.001,bevelSegments:2,curveSegments:12});
 const m=add(g,geo,mat,name,position);if(side)m.rotation.y=side*Math.PI/2;return m;
}
function screw(g,pos,mat,side=0){const m=add(g,new T.CylinderGeometry(.004,.004,.0025,16),mat,'Recessed screw',pos);m.rotation.x=Math.PI/2;if(side)m.rotation.z=side*Math.PI/2;return m;}
// A real raised crosshatch, instanced rather than hundreds of draw calls.
function tread(g,points,pos,side,mat,spacing=.027){
 const inside=(x,y)=>{let c=false;for(let i=0,j=points.length-1;i<points.length;j=i++)if((points[i][1]>y)!==(points[j][1]>y)&&x<(points[j][0]-points[i][0])*(y-points[i][1])/(points[j][1]-points[i][1])+points[i][0])c=!c;return c;};
 const xs=points.map(p=>p[0]),ys=points.map(p=>p[1]),cells=[];
 for(let x=Math.min(...xs)+.013,col=0;x<Math.max(...xs)-.01;x+=spacing,col++)for(let y=Math.min(...ys)+.013,row=0;y<Math.max(...ys)-.01;y+=spacing,row++)if([[-.011,-.011],[.011,-.011],[.011,.011],[-.011,.011]].every(([dx,dy])=>inside(x+dx,y+dy)))for(let k=-1;k<=1;k++)cells.push({x:x+((col+row)%2?k*.005:0),y:y+((col+row)%2?0:k*.005),a:(col+row)%2?0:Math.PI/2});
 if(!cells.length)return;
 const inst=new T.InstancedMesh(new RoundedBoxGeometry(.0025,.019,.0016,1,.0006),mat,cells.length),o=new T.Object3D();inst.name='Raised tread-metal pattern';
 cells.forEach((c,i)=>{o.position.set(c.x,c.y,.008);o.rotation.z=c.a;o.updateMatrix();inst.setMatrixAt(i,o.matrix);});inst.position.set(...pos);if(side)inst.rotation.y=side*Math.PI/2;inst.castShadow=true;inst.receiveShadow=true;g.add(inst);
}
function sidePanel(g,points,side,z,mat,name,x=.772){return panel(g,points,mat,name,[side*x,0,z],side);}
// Maruti 990J0M80T01-010: the square ends meet at the door shut.
// Only the long (front) inserts carry the dark Jimny mark.
function addRuggedCladding(g,side,m){
 for(const [front,inner,outer] of [[true,-.275,.64],[false,-.305,-.79]]){
  const x=t=>-side*(inner+(outer-inner)*t);
  const face=(profile,mat,name,offset)=>sidePanel(g,profile.map(([t,y])=>[x(t),y]),side,0,mat,name,offset);
  face([[0,.58],[.94,.58],[1,.731],[0,.731]],m.plastic,'Moulded cladding surround',.772);
  face([[.012,.605],[.92,.605],[.94,.628],[.94,.665],[.89,.699],
        [.78,.699],[.76,.694],[.68,.694],[.66,.699],[.012,.699]],
       m.silver,'Pressed grey cladding insert',.781);
  screw(g,[side*.790,.677,-side*x(.87)],m.bolt,side);
  if(!front){
   face([[.12,.607],[.13,.607],[.13,.697],[.12,.697]],m.bolt,'Rear insert crease',.788);
   continue;
  }
  const width=.142,scale=width/jimnyWordmark.width;
  const shapes=jimnyWordmark.polygons.map(points=>new T.Shape(points.map(([px,py])=>
   new T.Vector2(px*scale-width/2,(jimnyWordmark.height/2-py)*scale))));
  const badge=add(g,new T.ShapeGeometry(shapes),m.edge,'Jimny wordmark · front door',[side*.789,.650,inner+.135]);
  badge.rotation.y=side*Math.PI/2;
  badge.castShadow=false;
 }
}
export function buildExteriorPart(id,body='5door'){
 const spec=EXTERIOR_PARTS[id];if(!spec||spec.diameter||!spec.bodyStyles.includes(body))return null;
 const g=new T.Group(),m=materialPalette();g.name=id;g.userData={finishTarget:id,exteriorPart:id,ownedMaterials:Object.values(m),referenceURL:spec.url,previewKind:'reference-guided'};
 const short=body==='3door',axle=short?1.125:1.295;
 if(id==='msga_rugged_cladding')for(const side of [-1,1])addRuggedCladding(g,side,m);
 if(id==='suzuki_side_moulding')for(const side of [-1,1]){
  const points=[[-.59,.605],[.59,.605],[.615,.62],[.61,.67],[-.61,.67],[-.615,.62]];
  sidePanel(g,points,side,0,m.plastic,'Tapered black body moulding');
  box(g,[.003,.008,1.13],[side*.781,.653,0],m.edge,'Moulding recessed upper line',.001);
 }
 if(id.startsWith('suzuki_sill_'))for(const side of [-1,1]){
  const len=short?1.24:1.65,points=[[-len/2,.455],[len/2,.455],[len/2+.025,.51],[len/2-.025,.545],[-len/2+.025,.545],[-len/2-.025,.51]];
  sidePanel(g,points,side,0,m.edge,'Sill garnish backing',.782);
  sidePanel(g,points.map(([x,y])=>[x*.97,.50+(y-.50)*.8]),side,0,m.silver,'Folded silver sill garnish',.792);
  for(let i=-2;i<=2;i++)box(g,[.004,.014,.10],[side*.800,.470,i*(len-.24)/5],m.silver,'Sill lower pressed rib',.003);
 }
 if(id==='msga_front_fender'||id==='msga_rear_fender')for(const side of [-1,1]){
  const front=id==='msga_front_fender',z=front?axle:-axle;
  // Side-local X maps to -side*Z; contour follows the top/outboard arch.
  const raw=[[.0,1.075],[.43,1.075],[.445,1.04],[.44,.88],[.38,.85],[.30,.96],[.20,1.005],[-.045,1.01]];
  const points=raw.map(([a,y])=>[-side*(front?a:-a),y]);
  sidePanel(g,points,side,z,m.edge,'Fender garnish gasket',.755);
  sidePanel(g,points,side,z,m.silver,'Contoured fender tread plate',.763);
  tread(g,points,[side*.763,0,z],side,m.silver);
  for(const [dz,y]of [[.07,1.047],[.38,1.045],[.39,.92]])screw(g,[side*.778,y,z+(front?dz:-dz)],m.bolt,side);
 }
 if(id==='msga_bumper_garnish')for(const side of [-1,1]){
  const p=[[.40,.48],[.49,.54],[.49,.79],[.40,.80],[.38,.77],[.38,.52]].map(([x,y])=>[side*x,y]);
  panel(g,p,m.silver,'Vertical bumper garnish',[0,0,1.943]);
  box(g,[.063,.18,.006],[side*.442,.667,1.957],m.plastic,'Bumper garnish dark inset');
 }
 if(id==='msga_tread_skid'||id==='suzuki_bumper_under'){
  const z=short?1.803:1.973;
  const p=id==='msga_tread_skid'?[[-.56,.425],[-.43,.605],[-.27,.605],[-.245,.53],[.245,.53],[.27,.605],[.43,.605],[.56,.425],[.49,.40],[-.49,.40]]:[[-.57,.425],[-.55,.57],[-.49,.60],[-.27,.60],[-.25,.555],[.25,.555],[.27,.60],[.49,.60],[.55,.57],[.57,.425],[.50,.40],[-.50,.40]];
  panel(g,p,m.edge,'Lower garnish gasket',[0,0,z]);
  panel(g,p.map(([x,y])=>[x*.99,.50+(y-.50)*.93]),m.silver,id==='msga_tread_skid'?'Tread-metal plastic front plate':'Silver bumper under garnish',[0,0,z+.008]);
  if(id==='msga_tread_skid')tread(g,p,[0,0,z+.008],0,m.silver);
  else for(const side of [-1,1]){box(g,[.20,.055,.018],[side*.397,.55,z+.019],m.silver,'Raised shoulder on silver under garnish',.015);}
  for(const x of [-.39,.39])screw(g,[x,.555,z+.024],m.bolt);
 }
 if(id==='jimnyworx_corners'){
  // The supplier's front and rear photographs show continuous, full-height
  // chequer-plate skins following the arch edge, not strips above the arch.
  const plate=new T.MeshStandardMaterial({name:'JimnyworX dark chequer plate',color:'#4c5558',metalness:.65,roughness:.38});
  g.userData.ownedMaterials.push(plate);
  addFittedFrontCornerGuards(g,plate);
  for(const side of [-1,1])for(const end of [-1]){
   const front=end===1,start=front?1.27:1.24,bend=front?1.581:1.485,radius=front?.045:.078,angle=front?Math.PI/3:Math.PI/2;
   const flat=bend-start,width=flat+radius*angle,top=front?1.082:1.115;
   const lower=front?[[0,.974],[.08,.960],[.16,.915],[.225,.835],[flat,.745],[width,.745]]:[[0,.980],[.08,.958],[.16,.882],[.215,.770],[flat,.635],[width,.605]];
   const bottom=u=>{for(let i=1;i<lower.length;i++)if(u<=lower[i][0]){const [a,ya]=lower[i-1],[b,yb]=lower[i];const t=(u-a)/(b-a);return ya+(yb-ya)*t-.024;}return lower.at(-1)[1]-.024;};
   const surface=(u,y,lift=0)=>{
    const theta=Math.max(0,u-flat)/radius;
    const x=(front?.766:.757)-radius*(1-Math.cos(theta));
    const z=u<=flat?start+u:bend+radius*Math.sin(theta);
    // The slight crown follows the vertical body surface; the formed return
    // is part of the same mesh and cannot float away as a separate tab.
    const crown=.002*Math.sin((y-.60)/.52*Math.PI);
    return new T.Vector3(side*(x+crown+lift*Math.cos(theta)),y,end*(z+lift*Math.sin(theta)));
   };
   const positions=[],indices=[],cols=56,rows=18;
   // Two skins plus perimeter faces make a thin, closed sheet with a real edge.
   for(let skin=0;skin<2;skin++)for(let c=0;c<=cols;c++)for(let row=0;row<=rows;row++){
    const u=width*c/cols,lo=bottom(u),y=lo+(top-lo)*row/rows;
    positions.push(...surface(u,y,skin===0?.003:0));
   }
   const stride=rows+1,layer=(cols+1)*stride;
   const quad=(a,b,c,d)=>indices.push(a,b,c,a,c,d);
   for(let c=0;c<cols;c++)for(let row=0;row<rows;row++){
    const a=c*stride+row,b=a+stride;quad(a,b,b+1,a+1);quad(a+layer,a+1+layer,b+1+layer,b+layer);
   }
   for(let c=0;c<cols;c++){let a=c*stride,b=a+stride;quad(a,a+layer,b+layer,b);a+=rows;b+=rows;quad(a,b,b+layer,a+layer);}
   for(let row=0;row<rows;row++){let a=row;quad(a,a+1,a+1+layer,a+layer);a=cols*stride+row;quad(a,a+layer,a+1+layer,a+1);}
   if(side*end>0)for(let i=0;i<indices.length;i+=3)[indices[i+1],indices[i+2]]=[indices[i+2],indices[i+1]];
   const geo=new T.BufferGeometry();geo.setAttribute('position',new T.Float32BufferAttribute(positions,3));geo.setIndex(indices);geo.computeVertexNormals();
   const skin=add(g,geo,plate,front?'Front formed corner guard':'Rear formed corner guard');skin.userData.cornerGuard={side,end,height:top-Math.min(...lower.map(p=>p[1]))+.024,continuousReturn:true};
   // Raised lozenges alternate direction, as in the photographed chequer plate.
   const stamps=[];const pitch=.024;
   for(let col=0,u=.012;u<width-.010;u+=pitch,col++)for(let row=0,y=.615;y<top-.010;y+=pitch,row++)if(y>bottom(Math.max(0,u-.010))+.012&&y>bottom(Math.min(width,u+.010))+.012)stamps.push({u,y,a:(col+row)%2?Math.PI/4:-Math.PI/4});
   const diamond=new T.Shape();diamond.moveTo(0,.010);diamond.quadraticCurveTo(.004,.004,.004,0);diamond.quadraticCurveTo(.004,-.004,0,-.010);diamond.quadraticCurveTo(-.004,-.004,-.004,0);diamond.quadraticCurveTo(-.004,.004,0,.010);
   const emboss=new T.ExtrudeGeometry(diamond,{depth:.001,bevelEnabled:true,bevelSize:.0008,bevelThickness:.0007,bevelSegments:2,curveSegments:4});
   const inst=new T.InstancedMesh(emboss,plate,stamps.length),o=new T.Object3D(),up=new T.Vector3(0,1,0);
   stamps.forEach(({u,y,a},i)=>{
    const theta=Math.max(0,u-flat)/radius,normal=new T.Vector3(side*Math.cos(theta),0,end*Math.sin(theta));
    const tangent=new T.Vector3().crossVectors(up,normal),basis=new T.Matrix4().makeBasis(tangent,up,normal);
    o.position.copy(surface(u,y,.0032));o.quaternion.setFromRotationMatrix(basis);o.rotateZ(a);o.updateMatrix();inst.setMatrixAt(i,o.matrix);
   });inst.name=(front?'Front':'Rear')+' raised diamond tread';inst.castShadow=inst.receiveShadow=true;g.add(inst);
  }
 }
 return g;
}
export function addExteriorParts(parts,body,rig){const visible=[];for(const id of normalizeExteriorParts([...parts],body)){const g=buildExteriorPart(id,body);if(g){rig.add(g);visible.push(id);}}return visible;}
