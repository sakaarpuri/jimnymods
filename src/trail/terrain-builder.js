import * as T from 'three';

export const BUILDER_STORAGE_KEY='thatsuvmod.custom-terrain.v1';
export const ELEMENT_PRESETS=Object.freeze([
 {id:'ramp',name:'Inspection ramp',width:5,depth:18,height:1.2,description:'Broad smooth climb with a crest to inspect.'},
 {id:'offset-steps',name:'Himalayan stone steps',width:5,depth:22,height:.23,description:'Alternating wheel-height steps; crawl and watch wheel placement.'},
 {id:'hill',name:'Estate-track hill',width:8,depth:28,height:2,description:'Gentle climb and controlled descent on loose ground.'},
 {id:'rumble',name:'Dry stone causeway',width:5,depth:22,height:.12,description:'Low uneven ribs inspired by rural stone crossings.'},
 {id:'rock-garden',name:'Boulder line',width:12,depth:24,height:.65,description:'Choose a line between marked rocks; the centre lane stays open.'},
 {id:'slalom',name:'Precision slalom',width:12,depth:30,height:.6,description:'A cone lane for braking before turns.'}
].map(Object.freeze));
export const BUILDER_BOUNDS=Object.freeze({minX:-160,maxX:160,minZ:-64,maxZ:256});
const preset=id=>ELEMENT_PRESETS.find(p=>p.id===id),clamp=(n,a,b)=>Math.max(a,Math.min(b,n)),smooth=n=>{const v=clamp(n,0,1);return v*v*(3-2*v);};
export function createDefaultPlan(){return {version:1,name:'My trail yard',elements:[{id:'ramp-1',type:'ramp',x:-35,z:70,yaw:0},{id:'steps-1',type:'offset-steps',x:0,z:125,yaw:0},{id:'slalom-1',type:'slalom',x:45,z:185,yaw:0}]};}
export function validatePlan(input){
 const errors=[];if(!input||input.version!==1||!Array.isArray(input.elements))return {ok:false,errors:['This is not a supported terrain plan.'],plan:null};
 if(input.elements.length>24)errors.push('Use at most 24 elements.');
 const elements=[],ids=new Set();
 for(const [i,e]of input.elements.slice(0,25).entries()){
  const p=preset(e?.type);if(!p){errors.push(`Element ${i+1}: choose a listed obstacle.`);continue;}
  if(![e.x,e.z,e.yaw].every(Number.isFinite)){errors.push(`Element ${i+1}: position and rotation must be numbers.`);continue;}
  const id=String(e.id||`element-${i+1}`).replace(/[^a-zA-Z0-9_-]/g,'').slice(0,48);if(!id||ids.has(id)){errors.push('Each element needs a unique identifier.');continue;}ids.add(id);
  const yaw=Math.atan2(Math.sin(e.yaw),Math.cos(e.yaw)),rx=(Math.abs(Math.cos(yaw))*p.width+Math.abs(Math.sin(yaw))*p.depth)/2+3,rz=(Math.abs(Math.sin(yaw))*p.width+Math.abs(Math.cos(yaw))*p.depth)/2+3;
  if(e.x-rx<BUILDER_BOUNDS.minX+5||e.x+rx>BUILDER_BOUNDS.maxX-5||e.z-rz<20||e.z+rz>BUILDER_BOUNDS.maxZ-5)errors.push(`${p.name}: keep the complete element inside the yard and away from the start.`);
  if(elements.some(a=>{const q=preset(a.type);return Math.hypot(e.x-a.x,e.z-a.z)<Math.hypot(p.width,p.depth)/2+Math.hypot(q.width,q.depth)/2+3;}))errors.push(`${p.name}: leave room between elements to turn safely.`);
  elements.push({id,type:p.id,x:e.x,z:e.z,yaw});
 }
 return {ok:!errors.length,errors,plan:{version:1,name:String(input.name||'My trail yard').slice(0,48),elements}};
}
export function addElement(plan,type,x,z,yaw=0){const p=structuredClone(plan),used=new Set(p.elements.map(e=>e.id));let i=1;while(used.has(`${type}-${i}`))i++;p.elements.push({id:`${type}-${i}`,type,x,z,yaw});return validatePlan(p);}
export function removeElement(plan,id){return {...plan,elements:plan.elements.filter(e=>e.id!==id).map(e=>({...e}))};}
export function loadPlan(storage){try{const raw=(storage||globalThis.localStorage)?.getItem(BUILDER_STORAGE_KEY);if(raw&&raw.length<30000){const result=validatePlan(JSON.parse(raw));if(result.ok)return result.plan;}}catch{}return createDefaultPlan();}
export function savePlan(plan,storage){const result=validatePlan(plan);if(!result.ok)return result;try{(storage||globalThis.localStorage).setItem(BUILDER_STORAGE_KEY,JSON.stringify(result.plan));return {...result,saved:true};}catch{return {...result,saved:false,errors:['Your browser could not save this plan. You can still drive it or export the JSON.']};}}
export function importPlan(json){if(typeof json!=='string'||json.length>30000)return {ok:false,errors:['Use a terrain JSON file smaller than 30 KB.'],plan:null};try{return validatePlan(JSON.parse(json));}catch{return {ok:false,errors:['The terrain JSON could not be read.'],plan:null};}}
export function createCustomCourse(plan=createDefaultPlan()){
 const valid=validatePlan(plan);if(!valid.ok)throw new Error(valid.errors.join(' '));
 const points=[{x:0,z:18},{x:0,z:35,stop:true}];
 return {id:'custom',worldId:'custom',name:valid.plan.name,place:'Your closed practice yard',theme:'urban',size:320,length:180,width:10,surface:'loose',time:'Free practice',description:'Build and drive a course from tested terrain elements.',customPlan:valid.plan,lessons:['Place obstacles','Drive your layout','Revise and share your terrain JSON'],missions:[{id:'custom-test',name:'Drive your layout',summary:'Explore your layout freely. Pause to edit; changes rebuild the yard and return the car to the start.',routes:{learn:points,trail:points,expert:points}}]};
}
function local(element,x,z){const dx=x-element.x,dz=z-element.z,c=Math.cos(element.yaw),s=Math.sin(element.yaw);return {x:dx*c-dz*s,z:dx*s+dz*c};}
function global(element,x,z){const c=Math.cos(element.yaw),s=Math.sin(element.yaw);return {x:element.x+x*c+z*s,z:element.z-x*s+z*c};}
export function terrainElementHeight(element,x,z){
 const p=preset(element.type);if(!p)return 0;const q=local(element,x,z),edge=smooth((p.width/2-Math.abs(q.x))/.8);if(!edge||Math.abs(q.z)>=p.depth/2)return 0;
 if(['ramp','hill'].includes(p.id))return p.height*edge*smooth((p.depth/2-Math.abs(q.z))/(p.depth*.43));
 if(p.id==='offset-steps'){let h=0;for(let i=0;i<6;i++)h+=p.height*smooth((.62-Math.abs(q.x-(i%2?.72:-.72)))/.35)*smooth((1.25-Math.abs(q.z+8.75-i*3.5))/.8);return h;}
 if(p.id==='rumble'){let h=0;for(let i=0;i<7;i++)h+=p.height*edge*smooth((.95-Math.abs(q.z+9-i*3))/.65);return h;}
 return 0;
}
export function elementFootprint(element,margin=0){const p=preset(element.type),r=Math.hypot(p.width,p.depth)/2+margin;return {minX:element.x-r,maxX:element.x+r,minZ:element.z-r,maxZ:element.z+r};}
export function terrainElementProps(elements,height){
 const props=[];
 for(const e of elements){const p=preset(e.type);if(!p)continue;
  const add=(id,type,x,z,width,depth,h,color)=>{const q=global(e,x,z);props.push({id:`element-${e.id}-${id}`,type,x:q.x,z:q.z,y:height(q.x,q.z),width,depth,height:h,radius:width/2,yaw:e.yaw,color,elementId:e.id});};
  if(e.type==='rock-garden')for(let i=0;i<8;i++)add(`rock-${i}`,'rock',i%2?3.8:-3.8,-9+Math.floor(i/2)*6,1.2+(i%3)*.15,1.2,.4+(i%3)*.12,'#8d8575');
  else if(e.type==='slalom')for(let i=0;i<6;i++)add(`cone-${i}`,'cylinder',i%2?2.6:-2.6,-12+i*4.8,.36,.36,.6,'#d77536');
  for(const side of [-1,1])add(`entry-${side}`,'cylinder',side*(p.width/2+1),-p.depth/2-1,.22,.22,1.2,'#dcbb74');
 }
 return props;
}
export function createTerrainElements(world,parent){
 const root=new T.Group();root.name='TerrainBuilderElements';parent.add(root);
 const material=new T.MeshStandardMaterial({color:'#958b77',roughness:1});
 for(const e of world.terrainElements||[]){const p=preset(e.type);if(!p||['slalom','rock-garden'].includes(e.type))continue;
  const bounds=elementFootprint(e,.6),step=.3,nx=Math.ceil((bounds.maxX-bounds.minX)/step),nz=Math.ceil((bounds.maxZ-bounds.minZ)/step),positions=[],indices=[];
  for(let z=0;z<=nz;z++)for(let x=0;x<=nx;x++){const px=bounds.minX+x/nx*(bounds.maxX-bounds.minX),pz=bounds.minZ+z/nz*(bounds.maxZ-bounds.minZ);positions.push(px,world.height(px,pz)+.008,pz);}
  for(let z=0;z<nz;z++)for(let x=0;x<nx;x++){const a=z*(nx+1)+x;indices.push(a,a+nx+1,a+1,a+1,a+nx+1,a+nx+2);}
  const geometry=new T.BufferGeometry();geometry.setAttribute('position',new T.Float32BufferAttribute(positions,3));geometry.setIndex(indices);geometry.computeVertexNormals();const mesh=new T.Mesh(geometry,material);mesh.receiveShadow=true;mesh.userData.elementId=e.id;root.add(mesh);
 }
 const props=world.terrainProps?.filter(p=>p.type!=='rock')||[];
 if(props.length){const m=new T.InstancedMesh(new T.CylinderGeometry(.4,.5,1,10),new T.MeshStandardMaterial({color:'#ffffff',roughness:.9}),props.length),dummy=new T.Object3D();props.forEach((p,i)=>{dummy.position.set(p.x,p.y+p.height/2,p.z);dummy.scale.set(p.width,p.height,p.depth);dummy.updateMatrix();m.setMatrixAt(i,dummy.matrix);m.setColorAt(i,new T.Color(p.color));});m.castShadow=true;root.add(m);}
 return root;
}
