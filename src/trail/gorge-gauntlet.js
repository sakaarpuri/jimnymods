import {PRO_MISSIONS} from './pro-trials.js';
import {resolveTyreType} from '../tyre-types.js';
import {resolvePreviewParts} from '../lighting.js';

const smooth=x=>{x=Math.max(0,Math.min(1,x));return x*x*(3-2*x);};
export const GORGE_PATCH=Object.freeze({minX:121,maxX:166,minZ:-80,maxZ:-13,spacing:.5});
// The river bed is physically cut below the first existing elevated trial.
// Ramp landings and the western ground bypass remain untouched.
export function gorgeDepth(x,z){return 4.4*smooth((x-124)/5)*smooth((155-x)/5)*smooth((z+76)/7)*smooth((-17-z)/7);}
export const gorgeHeight=(base,x,z)=>base-gorgeDepth(x,z);
export function gorgeCoarseRelief(x,z){return x>121&&x<166&&z>-80&&z<-13?.22:0;}
export function gorgeHazard(state){return gorgeDepth(state.x,state.z)>1.8&&state.y<-.65?'Gorge pool: no driving access. A raised intake does not waterproof a vehicle. Recover to the dry staging area.':'';}
export function gorgeSolids(){
 const rocks=[];
 // Fractured vertical profiles use the same triangulated shell for rendering
 // and static contact, not a decorative scan over an invisible square wall.
 for(let i=0;i<7;i++){
  const z=-66+i*6.3,x=158.3+Math.sin(i*1.7)*.8,height=14.8+Math.sin(i*2.1)*1.4,vertices=[],indices=[];
  const ring=[[-1,-.63],[-.62,-1],[.61,-1],[1,-.58],[1,.57],[.6,1],[-.65,1],[-1,.58]];
  for(let level=0;level<5;level++)for(let j=0;j<8;j++){
   const [rx,rz]=ring[j],width=level===0?4.3:level===4?2.8:3.6+.35*Math.sin(i*1.3+level*2.4),y=height*(level/4)-height/2;
   const fracture=level===0?0:level===4?Math.sin(j*1.7+i*2.3)*1.45+Math.cos(j*2.8+i)*.5:Math.sin(j*1.7+i+level)*.62;
   vertices.push(rx*width+.35*Math.sin(level*2.1+i),y+fracture,rz*(4+.22*Math.sin(level+i)));
  }
  for(let level=0;level<4;level++)for(let j=0;j<8;j++){const a=level*8+j,b=level*8+(j+1)%8,c=a+8,d=b+8;indices.push(a,c,b,b,c,d);}
  for(let j=1;j<7;j++){indices.push(0,j,j+1,32,32+j+1,32+j);}
  rocks.push({id:`gorge-cliff-${i}`,type:'mesh',x,z,y:-4.4,height,yaw:0,vertices,indices});
 }
 return rocks;
}
export function prepareGorgePiers(solids){return solids.map(o=>{
 if(!o.id.startsWith('pro-pier-'))return o;
 const depth=gorgeDepth(o.x,o.z);return depth>0?{...o,y:o.y-depth-.15,height:o.height+depth+.15}:o;
});}
export function gauntletEquipment(build={},catalogue=[]){
 const parts=new Set(resolvePreviewParts(Array.isArray(build.parts)?build.parts:[],catalogue)),tyre=resolveTyreType(build.design||{},parts),intake=parts.has('snorkel');
 const missing=[];if(tyre==='highway')missing.push('All-terrain or mud-terrain tyres');if(!intake)missing.push('Raised intake / snorkel');
 return {ready:missing.length===0,tyre,intake,missing};
}
const chapterNames=['Gorge crossing','Ratchet climb','Surge & stop','High reverse pocket'];
const transfer=(x,z,chapter)=>({x,z,elevation:0,heightTolerance:.8,radius:4,depth:3,range:'4L',gear:'L',maxSpeed:15,chapter,link:true});
export const GAUNTLET_STAGES=PRO_MISSIONS.map((mission,i)=>({id:mission.id,name:chapterNames[i],spawn:{...mission.spawn},range:mission.mode,gear:i===2?'2':'L'}));
const links=[[],[[153,34],[168,20],[168,-96],[168,-115],[177,-119]],[[188,3],[194,-4],[194,-99],[199,-116],[212,-119]],[[223,8],[230,0],[230,-98],[234,-113],[247,-116]]];
const route=[];
for(let chapter=0;chapter<4;chapter++){
 // Links belong to the next stage, and its safe spawn is the recovery point.
 for(const [x,z]of links[chapter])route.push(transfer(x,z,chapter));
 for(const [i,p]of PRO_MISSIONS[chapter].routes.expert.entries())route.push({...p,chapter,momentumClimb:chapter===2&&i===2});
}
export const GORGE_GAUNTLET={id:'pro-gorge-gauntlet',name:'PRO / Gorge gauntlet',expertTrial:true,chained:true,equipmentRequired:true,spawn:{...PRO_MISSIONS[0].spawn},mode:'4L',speedLimit:26,skill:'Four connected chapters · exposed edges · equipment planning',summary:'A continuous four-chapter expedition: cross the unguarded gorge, climb offset steps, build momentum and stop at height, then reverse into the rooftop pocket. Follow ground links between stages. A fall restarts the current chapter (eight score points); completed chapters stay cleared. Requires saved-build all-terrain / mud-terrain tyres and a raised intake as fictional event preparation, not a real-world capability rating. The pool is always out of bounds, with or without a snorkel.',routes:Object.fromEntries(['learn','trail','expert'].map(k=>[k,route.map(p=>({...p}))]))};
export function gauntletRecovery(gates,index){const chapter=gates[Math.min(index,gates.length-1)]?.chapter??0;return {chapter,gate:Math.max(0,gates.findIndex(p=>p.chapter===chapter&&!p.link)),spawn:{...GAUNTLET_STAGES[chapter].spawn},name:chapterNames[chapter]};}
