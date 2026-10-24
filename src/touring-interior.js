import * as T from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {upholsteryMaterial,validFabric,metreFabricUV} from './interior-fabrics.js';
import {xlDrawerSystem,halfMollyPockets,rearDoorMolle} from './interior-storage.js';

export const TOURING_LAYOUT=Object.freeze({body:'5door',rearDeckWidth:1.110,rearDeckLength:1.165,extensionLength:.685,bedLength:1.83,bedWidth:.65,bedThickness:.075});
function box(g,name,w,h,d,x,y,z,material,r=.005){const m=new T.Mesh(new RoundedBoxGeometry(w,h,d,2,Math.min(r,w/3,h/3,d/3)),material);m.name=name;m.position.set(x,y,z);m.castShadow=m.receiveShadow=true;g.add(m);return m;}
function owned(g,material){g.userData.ownedMaterials??=[];g.userData.ownedMaterials.push(material);return material;}
function seam(g,points,material,r=.0012){const curve=new T.CurvePath(),vectors=points.map(p=>new T.Vector3(...p));for(let i=1;i<vectors.length;i++)curve.add(new T.LineCurve3(vectors[i-1],vectors[i]));const line=new T.Mesh(new T.TubeGeometry(curve,points.length*4,r,5,false),material);line.name='Stitched piping';g.add(line);return line;}
export function doorInserts(mats,{body='5door',fabric='canvas',colour='#a38b69'}={}){
 const g=new T.Group();g.name='UpholsteredDoorInserts';const cloth=owned(g,upholsteryMaterial(validFabric(fabric),colour)),thread=owned(g,new T.MeshStandardMaterial({color:'#d5c6aa',roughness:.9}));
 // Recessed centre panels fit inside the source door cards, below the pull
 // handles. Rounded moulded outline, padded crown, piping and fine top stitch.
 for(const side of [-1,1])for(const [z,length]of body==='3door'?[[0,1.04]]:[[.10,.74],[-.84,.60]]){
  const x=side*.676,panel=box(g,'Padded door insert',.012,.185,length,x,.875,z,cloth,.012);
  box(g,'Upholstered upper door strip',.012,.028,length,x,1.088,z,cloth,.006);
  box(g,'Wrapped door armrest',.077,.047,.15,side*.660,1.005,z-.06,cloth,.013);
  // RoundedBox UVs are unit based. Replace by metre-based fabric coordinates.
  const uv=panel.geometry.attributes.uv,p=panel.geometry.attributes.position;for(let i=0;i<uv.count;i++)uv.setXY(i,p.getZ(i),p.getY(i));uv.needsUpdate=true;
  const face=side*.668,lo=.796,hi=.954,left=z-length/2+.018,right=z+length/2-.018;
  seam(g,[[face,lo,left],[face,hi,left],[face,hi,right],[face,lo,right],[face,lo,left]],thread,.0012);
  for(let zz=left+.02;zz<right-.01;zz+=.011)box(g,'Door top stitch',.0008,.0012,.0045,side*.6675,hi-.006,zz,thread,.0003);
 }return metreFabricUV(g);
}
export function rearSeatInserts(mats,{body='5door',fabric='canvas',colour='#a38b69'}={}){
 const g=new T.Group();g.name='RearSeatUpholstery';const cloth=owned(g,upholsteryMaterial(fabric,colour)),offset=body==='3door'?.17:0;
 for(const x of [-.29,.29]){
  const back=box(g,'Rear seat patterned back insert',.45,.285,.008,x,1.035,-.995+offset,cloth,.003);
  const cushion=box(g,'Rear seat patterned cushion insert',.45,.008,.29,x,.879,-.83+offset,cloth,.003);
  for(const mesh of [back,cushion]){const p=mesh.geometry.attributes.position,uv=mesh.geometry.attributes.uv;for(let i=0;i<p.count;i++)uv.setXY(i,p.getX(i),mesh===back?p.getY(i):p.getZ(i));uv.needsUpdate=true;}
 }return g;
}
export function touringInterior(mats,{camp=false,drawers=false}={}){
 const g=new T.Group();g.name='TouringInterior';g.userData.layout=TOURING_LAYOUT;
 const carpet=owned(g,upholsteryMaterial('tweed','#45484a')),linen=owned(g,upholsteryMaterial('canvas','#466278')),thread=owned(g,new T.MeshStandardMaterial({color:'#b9c1b3',roughness:1}));
 g.add(xlDrawerSystem(mats,{open:drawers}),halfMollyPockets(mats),rearDoorMolle(mats));
 // Maker's actual 705 mm extension plus 460 mm drawer: 1165 mm cargo deck.
 for(const x of [-.279,.279]){
  const panel=box(g,'Split carpeted rear platform',.552,.015,.705,x,.9415,-.8625,carpet,.004);panel.userData.publishedDimensions=[.555,.705,.015];
  for(const z of [-1.12,-.61])box(g,'Bolted platform support',.025,.235,.03,x,.817,z,mats.darkmetal,.003);
  box(g,'Platform aluminium edge',.545,.018,.009,x,.942,-.5075,mats.metal,.002);
 }
 // Folding rear seats are represented below the floor rather than leaving
 // upright seatbacks intersecting the deck. Two separate folded-back pads.
 for(const x of [-.29,.29])box(g,'Folded rear seat back',.56,.09,.41,x,.87,-.87,mats.seat,.025);
 // A secured compact utility box occupies the driver's side of the flat deck.
 const bag=box(g,'Strapped touring storage case',.37,.22,.42,-.30,1.067,-.86,mats.trim,.024);
 box(g,'Storage case lid',.38,.024,.43,-.30,1.185,-.86,mats.darkmetal,.008);
 for(const x of [-.43,-.17]){box(g,'Case restraint webbing',.022,.003,.46,x,1.20,-.86,mats.seat,.001);box(g,'Case restraint side',.022,.24,.003,x,1.075,-1.083,mats.seat,.001);box(g,'Case buckle',.032,.026,.008,x,1.12,-1.089,mats.metal,.002);}
 if(camp){
  // Original trimmer-built passenger extension. Not an EXPLORESETUPS part.
  box(g,'Custom passenger bed extension',.68,.018,.685,.279,.940,-.1675,carpet,.005);
  for(const x of [-.03,.58]){box(g,'Extension support leg',.022,.245,.022,x,.808,.13,mats.metal,.003);box(g,'Support rubber foot',.045,.012,.05,x,.680,.13,mats.rubber,.004);}
  box(g,'Single sleeping mat 183 x 65 x 7.5 cm',.65,.075,1.83,.28,.9865,-.745,linen,.029);
  seam(g,[[-.04,.976,-1.63],[.60,.976,-1.63],[.60,.976,.14],[-.04,.976,.14],[-.04,.976,-1.63]],thread,.0018);
  box(g,'Soft camp pillow',.40,.075,.25,.28,1.055,.005,linen,.035);
  const valve=new T.Mesh(new T.CylinderGeometry(.014,.014,.005,24),mats.trim);valve.name='Sleeping mat valve';valve.position.set(.56,.99,-1.65);valve.rotation.x=Math.PI/2;g.add(valve);
 }else{
  const roll=new T.Mesh(new T.CapsuleGeometry(.095,.48,6,24),linen);roll.name='Packed sleeping mat';roll.rotation.z=Math.PI/2;roll.position.set(.18,1.06,-1.40);roll.castShadow=roll.receiveShadow=true;g.add(roll);
  box(g,'Stowed passenger bed extension',.68,.018,.685,.279,.966,-.855,carpet,.005);
  for(const x of [-.04,.40]){const strap=new T.Mesh(new T.TorusGeometry(.097,.009,5,32),mats.seat);strap.name='Packed mattress strap';strap.rotation.y=Math.PI/2;strap.position.set(x,1.06,-1.40);g.add(strap);}
 }
 return metreFabricUV(g);
}
