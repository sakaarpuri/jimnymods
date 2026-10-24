// Read actual decoded stock geometry, not authoring constants or loose bounds
// of rotated mesh boxes. Reference dimensions are not a CAD-fit certificate.
import {readFile} from 'node:fs/promises';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {MeshoptDecoder} from 'three/addons/libs/meshopt_decoder.module.js';
import {Box3,Vector3} from 'three';
import {mouldedSpareCover,extractFactoryBadge} from '../src/refined-parts.js';

// Off-road geometry from vehicle vertices, the way manufacturers quote it: lines tangent
// to the tyres that just touch the lowest body point ahead of, behind and between the axles.
// Returns degrees. `lift` raises a point's height so the result can ignore soft parts.
function tangentAngle(dz,dy,r){
 // Solve dz*sin(a) - dy*cos(a) = r for the smallest positive a (dz, dy from tyre centre).
 const R=Math.hypot(dz,dy),phi=Math.atan2(-dy,dz);if(R<=r)return Infinity; // inside the tyre outline: arch liners, brakes
 return (Math.asin(r/R)-phi)*180/Math.PI;
}
export function offRoadGeometry(points,{frontZ,rearZ,centreY,radius}){
 let approach=90,departure=90,breakover=180,clearance=Infinity;
 for(const p of points){
  if(p.z>frontZ)approach=Math.min(approach,tangentAngle(p.z-frontZ,p.y-centreY,radius));
  else if(p.z<rearZ)departure=Math.min(departure,tangentAngle(rearZ-p.z,p.y-centreY,radius));
  else{clearance=Math.min(clearance,p.y);breakover=Math.min(breakover,tangentAngle(frontZ-p.z,p.y-centreY,radius)+tangentAngle(p.z-rearZ,p.y-centreY,radius));}
 }
 return {approach,departure,breakover,clearance};
}
export async function auditModel(body='lwb'){
 const bytes=await readFile(new URL(`../assets/models/jimny-${body}-blender.glb`,import.meta.url));
 const root=(await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync(bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength),'')).scene;
 root.updateMatrixWorld(true);
 const point=new Vector3(),wheels=Array.from({length:4},()=>new Box3()),bodyBelowBeltline=new Box3(),rearBumper=new Box3();
 root.getObjectByName('StockWheels').traverse(mesh=>{
  if(!mesh.isMesh||mesh.material.name!=='TyreRubber')return;
  const a=mesh.geometry.attributes.position;
  for(let i=0;i<a.count;i++){point.fromBufferAttribute(a,i).applyMatrix4(mesh.matrixWorld);wheels[(point.z>0?0:2)+(point.x>0?0:1)].expandByPoint(point);}
 });
 root.getObjectByName('BodyShell').traverse(mesh=>{
  if(!mesh.isMesh)return;const a=mesh.geometry.attributes.position;
  for(let i=0;i<a.count;i++){point.fromBufferAttribute(a,i).applyMatrix4(mesh.matrixWorld);if(point.y<1.07)bodyBelowBeltline.expandByPoint(point);if(point.z<-1.5&&point.y>.44&&point.y<.72)rearBumper.expandByPoint(point);}
 });
 const centres=wheels.map(b=>b.getCenter(new Vector3())),sizes=wheels.map(b=>b.getSize(new Vector3()));
 // Every stock body vertex except the road wheels: chassis, axles, bumpers, spare, body.
 const bodyPoints=[];
 for(const name of ['BodyShell','RoofShell','OEMGrille','StockBumper','StockHeadlamps','SpareWheel','Cabin'])root.getObjectByName(name).traverse(mesh=>{
  if(!mesh.isMesh)return;const a=mesh.geometry.attributes.position;
  for(let i=0;i<a.count;i++)bodyPoints.push(new Vector3().fromBufferAttribute(a,i).applyMatrix4(mesh.matrixWorld));
 });
 const frontZ=(centres[0].z+centres[1].z)/2,rearZ=(centres[2].z+centres[3].z)/2,centreY=centres.reduce((s,c)=>s+c.y,0)/4,radius=sizes.reduce((s,v)=>s+v.y,0)/8;
 const offRoad=offRoadGeometry(bodyPoints,{frontZ,rearZ,centreY,radius});
 const deg=n=>Math.round(n*10)/10;
 const stock=new Box3();for(const name of ['BodyShell','RoofShell','OEMGrille','StockBumper','StockWheels','SpareWheel','Cabin','StockHeadlamps'])stock.union(new Box3().setFromObject(root.getObjectByName(name),true));
 const roof=new Box3().setFromObject(root.getObjectByName('RoofShell'),true),lamps=new Box3().setFromObject(root.getObjectByName('StockHeadlamps'),true);
 const badge=extractFactoryBadge(root.getObjectByName('OEMGrille')),cover=mouldedSpareCover({trim:null,darkmetal:null,chrome:null},badge);if(body==='swb')cover.position.z+=.17;
 const coveredLength=stock.max.z-Math.min(stock.min.z,new Box3().setFromObject(cover,true).min.z);badge.dispose();cover.traverse(o=>o.geometry?.dispose());
 const mm=n=>Math.round(n*10000)/10;
 return {
  body,reference:{url:body==='lwb'?'https://www.globalsuzuki.com/globalnews/2023/0112.html':'https://www.suzuki.com.au/wp-content/uploads/2026/02/4047.pdf',trackReference:'https://www.suzuki.com.au/vehicles/4x4/jimny/specifications/',offRoadReference:body==='lwb'?'https://www.nexaexperience.com/content/dam/msil/nexa/in/en/assets/cars/jimny/documents/NEXA-Jimny-Brochure.pdf (page 10, Technical specifications)':'https://www.suzuki.com.au/wp-content/uploads/2026/02/4047.pdf (page 6, Specifications)',groundClearance:210,approachAngle:body==='lwb'?36:null,departureAngle:body==='lwb'?46:null,breakoverAngle:body==='lwb'?24:null,frontOverhang:null,rearOverhang:null,lengthReference:body==='lwb'?'https://www.suzukinajeebauto.com/static/media/Jimny-5-Doors.a789c8c95520c79adc1d.pdf':'https://www.suzuki.com.au/wp-content/uploads/2026/02/4047.pdf',wheelbase:body==='lwb'?2590:2250,widthExcludingMirrors:1645,roofHeight:1720,tyreDiameter:693,bumperToBumperLength:body==='lwb'?3820:3485,overallLengthWithFactorySpareCover:body==='lwb'?3985:3650,frontTrack:1395,rearTrack:1405},
  measured:{wheelbase:mm(((centres[0].z-centres[2].z)+(centres[1].z-centres[3].z))/2),frontTrack:mm(centres[0].x-centres[1].x),rearTrack:mm(centres[2].x-centres[3].x),tyreDiameter:mm(sizes.reduce((s,v)=>s+v.y,0)/4),widthBelowBeltline:mm(bodyBelowBeltline.max.x-bodyBelowBeltline.min.x),roofHeight:mm(roof.max.y),bumperToBumperLength:mm(new Box3().setFromObject(root.getObjectByName('StockBumper'),true).max.z-rearBumper.min.z),overallLengthWithoutOptionalSpareCover:mm(stock.max.z-stock.min.z),overallLengthWithOptionalSpareCover:mm(coveredLength),widthIncludingMirrors:mm(stock.max.x-stock.min.x),headlampHousingDiameter:mm(lamps.max.y-lamps.min.y),groundClearance:mm(offRoad.clearance),approachAngle:deg(offRoad.approach),departureAngle:deg(offRoad.departure),breakoverAngle:deg(offRoad.breakover),frontOverhang:mm(stock.max.z-frontZ),rearOverhangToBumper:mm(rearZ-rearBumper.min.z),rearOverhangToSpare:mm(rearZ-stock.min.z)},
  limits:['Length configurations differ: the overall reference includes the factory spare-wheel half cover; bare-spare bounds exclude it. Published regional bumper/cover variants differ by several millimetres.','Width below the beltline excludes mirrors but is not a manufacturer homologation measurement.','Photographs use perspective and different trims/markets. They support shape comparisons, not exact hidden dimensions.','A matching wheelbase does not certify the bonnet, panel, seat or dashboard surfaces.','Clearance and off-road angles use every stock body vertex and unladen tyre radius; published figures are unladen. Overhangs and the three-door angles are not published in the cited sources, so their reference is blank.']
 };
}
if(process.argv[1]?.endsWith('audit-model-proportions.mjs'))console.log(JSON.stringify(await auditModel(process.argv.includes('--three-door')?'swb':'lwb'),null,2));
