import * as T from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';

// Original metre-scale workshop props. Static pieces are merged by material,
// rather than adding a draw call for every socket, drawer or tyre tread.
export function createWorkshopGear(){
  const root=new T.Group();root.name='WorkshopModificationGear';
  const materials=[
    new T.MeshStandardMaterial({name:'Gear powder-coated steel',color:'#777b78',roughness:.72,metalness:.22,envMapIntensity:.18}),
    new T.MeshStandardMaterial({name:'Gear dark rubber and straps',color:'#303432',roughness:.95,envMapIntensity:.08}),
    new T.MeshStandardMaterial({name:'Gear brushed metal',color:'#a1a4a1',roughness:.48,metalness:.7,envMapIntensity:.22}),
    new T.MeshStandardMaterial({name:'Gear canvas and bench',color:'#96958c',roughness:.94,envMapIntensity:.1})
  ],batches=materials.map(()=>[]),items=[];
  const matrix=new T.Matrix4(),rotation=new T.Quaternion(),euler=new T.Euler();
  function shape(geometry,at,mat=0,angles=[0,0,0]){
    rotation.setFromEuler(euler.set(...angles));matrix.compose(new T.Vector3(...at),rotation,new T.Vector3(1,1,1));
    geometry.applyMatrix4(matrix);batches[mat].push(geometry);return geometry;
  }
  const box=(w,h,d,x,y,z,mat=0,angles)=>shape(new T.BoxGeometry(w,h,d),[x,y,z],mat,angles);
  const cyl=(r,length,x,y,z,mat=2,angles)=>shape(new T.CylinderGeometry(r,r,length,12),[x,y,z],mat,angles);
  const tube=(points,r,mat=1)=>shape(new T.TubeGeometry(new T.CatmullRomCurve3(points.map(p=>new T.Vector3(...p))),Math.max(12,points.length*4),r,5,false),[0,0,0],mat);
  const mark=(name,centre)=>items.push({name,centre});

  // Back-wall modification bench: vice, socket rail, drill and hanging tools.
  const bx=-1.5,bz=-9.35;
  box(2.6,.075,.70,bx,.94,bz,3);box(2.40,.09,.54,bx,.13,bz);
  for(const x of [bx-1.12,bx+1.12])for(const z of [bz-.24,bz+.24])box(.055,.88,.055,x,.47,z);
  box(2.55,1.05,.045,bx,1.67,-9.78);
  for(let i=0;i<12;i++)for(let j=0;j<3;j++)cyl(.008,.012,bx-1.1+i*.2,1.28+j*.29,-9.75,1,[Math.PI/2,0,0]);
  for(let i=0;i<5;i++){
    const x=bx-.92+i*.20;
    box(.028,.27+i*.018,.022,x,1.73,-9.70,2,[0,0,.08]);
    shape(new T.TorusGeometry(.040+i*.003,.012,5,12,Math.PI*1.6),[x,1.90,-9.70],2,[0,0,-.45]);
  }
  box(.46,.025,.07,bx+.58,1.08,bz-.1);
  for(let i=0;i<6;i++)cyl(.012+i*.002,.05,bx+.38+i*.075,1.115,bz-.1);
  box(.26,.07,.19,bx-.82,1.01,bz+.15);box(.16,.15,.18,bx-.82,1.09,bz+.15);
  for(const z of [bz+.05,bz+.26])box(.23,.08,.045,bx-.82,1.18,z,2);
  cyl(.013,.35,bx-.82,1.10,bz+.29,2,[0,0,Math.PI/2]);
  box(.09,.14,.06,bx+.98,1.05,bz+.09,1,[0,0,-.25]);
  cyl(.039,.16,bx+.94,1.16,bz+.09,0,[0,0,Math.PI/2]);cyl(.009,.10,bx+.81,1.16,bz+.09,2,[0,0,Math.PI/2]);
  mark('Modification bench with vice, drill and socket rail',[bx,.9,bz]);

  // A second front-wall tool chest stays visible when inspecting the tailgate.
  const tx=1.0,tz=9.20;
  box(1.12,.70,.52,tx,.48,tz);box(1.18,.045,.58,tx,.86,tz,1);
  for(let i=0;i<6;i++){box(1.02,.083,.027,tx,.24+i*.1,tz-.28);box(.82,.014,.025,tx,.25+i*.1,tz-.304,2);}
  for(const x of [tx-.44,tx+.44])for(const z of [tz-.19,tz+.19])cyl(.055,.035,x,.08,z,1,[0,0,Math.PI/2]);
  box(.18,.06,.09,tx-.32,.915,tz);cyl(.035,.22,tx+.22,.92,tz,2,[Math.PI/2,0,0]);
  mark('Rolling tool chest',[tx,.45,tz]);

  // Tyre rack and labelled-shape storage cases: behind the side inspection view.
  const rx=-9.15,rz=-4.1;
  for(const z of [rz-1.14,rz+1.14])for(const x of [rx-.33,rx+.33])box(.045,2.15,.045,x,1.075,z);
  for(const y of [.12,1.12,2.08])box(.75,.055,2.35,rx,y,rz);
  for(let i=0;i<4;i++){
    const z=rz-.82+i*.55;
    shape(new T.TorusGeometry(.245,.095,8,32),[rx,.47,z],1,[0,Math.PI/2,0]);
    for(let j=0;j<20;j++){
      const a=j*Math.PI/10;
      box(.17,.026,.055,rx,.47+Math.cos(a)*.337,z+Math.sin(a)*.337,1,[a,0,0]);
    }
  }
  for(const [z,w]of [[rz-.67,.64],[rz+.27,.88]]){
    box(.60,.36,w,rx,1.34,z,3);box(.62,.045,w+.02,rx,1.55,z,1);
    box(.045,.29,.025,rx+.314,1.34,z-w*.28,1);box(.045,.29,.025,rx+.314,1.34,z+w*.28,1);
  }
  mark('Tyre and expedition-equipment rack',[rx,1,rz]);

  // Floor jack, axle stands and compressed-air gear, kept outside the camera orbit.
  const jx=-8.95,jz=1.45;
  for(const x of [jx-.12,jx+.12])box(.07,.11,.68,x,.14,jz,0,[.10,0,0]);
  box(.12,.08,.47,jx,.21,jz-.05,2,[.30,0,0]);cyl(.07,.035,jx,.31,jz-.27,1);
  for(const z of [jz-.27,jz+.27])cyl(.06,.36,jx,.06,z,1,[0,0,Math.PI/2]);
  cyl(.019,1.04,jx,.61,jz+.68,2,[.38,0,0]);cyl(.026,.26,jx,1.10,jz+.88,1,[.38,0,0]);
  for(const z of [2.8,3.35]){
    for(const sign of [-1,1])box(.035,.43,.035,jx+sign*.10,.22,z,0,[0,0,sign*.32]);
    box(.32,.04,.28,jx,.025,z);box(.21,.035,.08,jx,.45,z,2);
  }
  cyl(.19,.65,-9.10,.40,5.5,0,[Math.PI/2,0,0]);
  for(const z of [5.24,5.76])cyl(.085,.06,-8.91,.10,z,1,[0,0,Math.PI/2]);
  box(.23,.15,.23,-9.1,.66,5.5,1);cyl(.022,.25,-9.1,.81,5.5,2);
  const coil=[];for(let i=0;i<=80;i++){const a=i/80*Math.PI*12;coil.push([-8.8+Math.cos(a)*.12,.32+Math.sin(a)*.12,4.5+i/80*.55]);}tube(coil,.009);
  mark('Floor jack and axle stands',[jx,.5,2.5]);mark('Air compressor and hose',[-9.1,.5,5.5]);

  // Quiet camping/recovery corner opposite the bench, not colourful advertising.
  for(const y of [.12,.78,1.5])box(2.05,.045,.58,-4.1,y,9.45);
  for(const x of [-5.1,-3.1])for(const z of [9.18,9.72])box(.04,1.55,.04,x,.775,z);
  for(const x of [-4.75,-3.95,-3.3]){box(.54,.35,.42,x,.34,9.45,3);box(.56,.04,.44,x,.53,9.45,1);box(.20,.045,.02,x,.37,9.22,1);}
  cyl(.14,.62,-4.65,.98,9.44,3,[0,0,Math.PI/2]);
  for(const x of [-4.85,-4.45])shape(new T.TorusGeometry(.145,.013,5,16),[x,.98,9.44],1,[0,Math.PI/2,0]);
  box(.62,.20,.37,-3.65,.91,9.45,3);box(.65,.035,.39,-3.65,1.03,9.45,1);
  mark('Touring and recovery gear shelves',[-4.1,.8,9.45]);

  // Tall, shallow right-wall cupboard reads above the car in rear inspection.
  box(.45,2.0,1.45,9.45,1.0,4.1);
  for(const z of [3.73,4.47]){
    box(.025,1.82,.68,9.21,1.01,z);box(.035,.19,.025,9.18,1.08,z-.20,2);
    for(let i=0;i<4;i++)box(.014,.014,.34,9.19,1.62+i*.045,z,1);
  }
  box(.49,.055,1.50,9.45,2.02,4.1,1);
  mark('Shallow workshop equipment cupboard',[9.45,1.0,4.1]);

  for(let i=0;i<batches.length;i++){
    const parts=batches[i],geometry=mergeGeometries(parts);parts.forEach(g=>g.dispose());
    const mesh=new T.Mesh(geometry,materials[i]);mesh.name=materials[i].name;mesh.receiveShadow=true;root.add(mesh);
  }
  root.userData.items=items;
  let disposed=false;
  return {root,dispose(){if(disposed)return;disposed=true;root.children.forEach(m=>m.geometry.dispose());materials.forEach(m=>m.dispose());}};
}
