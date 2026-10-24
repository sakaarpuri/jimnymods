import {makeLandmarkPlan,landmarkCollisionHulls} from './course-landmarks.js';
import {vegetationLayout,vegetationHash} from './vegetation-layout.js';
import {terrainElementHeight,terrainElementProps,elementFootprint} from './terrain-builder.js';
import {explorationPlan,riverHeight,riverCollisionPlan,riverHazard,discoveryCollisionPlan,riverApproachProtectionDistance} from './world-exploration.js';
import {adventureHeight,adventureLines,adventureMarkers,mountainStepHeight} from './adventure-terrain.js';
import {conceptObstacles} from './concept-setpieces.js';
import {HIMACHAL_SECTION,HIMACHAL_MISSIONS,sectionRiverHeight,sectionCollisionPlan,sectionSupportHeight,sectionHazard} from './himachal-section.js';
import {sectionShoulderRelief,sectionGeologyPlan} from './himachal-dressing.js';
import {MOUNTAIN_EXTENSION_MISSIONS,createMountainExtension} from './himachal-mountain.js';
import {sectionTerraceHeight} from './himachal-terraces.js';
import {quarryRampHeight} from './quarry-art.js';
import {desertHeightDelta,desertObstaclePlan,DESERT_FINE_PATCHES,desertCoarseRelief} from './desert-art.js';
import {PRO_MISSIONS,proTrialPlan,proSupportHeight,inProYard} from './pro-trials.js';
import {GORGE_GAUNTLET,GORGE_PATCH,gorgeHeight,gorgeHazard,gorgeSolids,prepareGorgePiers,gorgeCoarseRelief} from './gorge-gauntlet.js';
// Fictional closed environments inspired by India. Coordinates are metres.
// School uses the proving-ground setting, with its own lessons and obstacle yard.
export const COURSES = [
 {id:'school',worldId:'school',name:'4×4 training ground',place:'One closed practice area · four bite-size lessons',time:'2–5 min per lesson',theme:'urban',size:320,length:110,width:10,surface:'tarmac',description:'Start with the controls, then take on offset wheel steps, a training hill and a soft-sand lane. All in one place. Repeat any lesson at your pace.',lessons:['Start, stop and select the right range','Place your wheels over offset steps','Climb, inspect the crest and descend','Keep traction through soft sand']},
 {id:'mountain',worldId:'mountain',name:'Himachal highlands',place:'Himachal-inspired · fictional closed trail',time:'8–15 min',theme:'mountain',size:600,length:400,width:8,surface:'loose',description:'A 1.04 km-wide mountain basin with branching climbs, rock gardens, a guarded river bridge and side-trail discoveries.',lessons:['Choose a line before climbing','Use low range over offset rocks','Descend in gear']},
 {id:'sand',worldId:'sand',name:'Rajasthan dune survey',place:'Rajasthan-inspired · fictional closed area',time:'8–15 min',theme:'sand',size:800,length:580,width:12,surface:'sand',description:'A 1.39 km-wide desert with dune ridges, soft bowls, gravel shelves, survey camps and distant side-trail discoveries.',lessons:['Inspect blind crests','Find firmer sand','Use smooth throttle']},
 {id:'urban',worldId:'urban',name:'Precision proving ground',place:'India · closed training facility',time:'5–10 min',theme:'urban',size:320,length:180,width:10,surface:'tarmac',description:'A 554 m-wide closed facility with reverse parking, articulation ramps, wet braking, a slalom and outer practice yards.',lessons:['Keep 2H on dry tarmac','Reverse into a marked bay','Brake before steering']}
];
export const DIFFICULTIES={explorer:{name:'Learn',hint:true,gate:1,speed:22,obstacleScale:.72,route:'learn',assistance:1,stopTolerance:.05},driver:{name:'Trail',hint:true,gate:.8,speed:18,obstacleScale:1,route:'trail',assistance:.55,stopTolerance:.04},expert:{name:'Expert',hint:false,gate:.62,speed:15,obstacleScale:1.18,route:'expert',assistance:0,stopTolerance:.03}};
const route=points=>points.map(([x,z,extra={}])=>({x,z,...extra}));
export const MISSIONS={
 school:[
  {id:'lesson-controls',name:'Get moving',summary:'Start in 2H on tarmac. Stop in the box, then enter the gravel yard to select 4H. Stop, hold the brake and select N before choosing 4L at the finish.',skill:'Controls and transfer lever',routes:Object.fromEntries(['learn','trail','expert'].map(level=>[level,route([[0,18],[0,38,{stop:true}],[-28,50],[-55,65,{range:'4H'}],[-65,77,{stop:true,range:'4L'}]])]))},
  {id:'lesson-steps',name:'One wheel at a time',summary:'Prepare 4L on gravel before the offset wheel steps. Crawl across the alternating ramps; use the wheel camera to check your line.',skill:'Wheel placement',mode:'4L',routes:Object.fromEntries([['learn',-60],['trail',-65],['expert',-70]].map(([level,x])=>[level,route([[0,18],[-28,45],[x,70,{stop:true,range:'4L'}],[x,89],[x,106],[x,132]])]))},
  {id:'lesson-hill',name:'Up, over, down',summary:'Select 4L in the loose-surface yard, climb the training hill and stop at its broad crest. Descend in gear under 12 km/h; try hill-descent assistance with the accelerator released.',skill:'Climbing and controlled descent',mode:'4L',speedLimit:12,routes:Object.fromEntries(['learn','trail','expert'].map(level=>[level,route([[0,18],[-28,45],[-90,65],[-100,115,{stop:true,range:'4L'}],[-100,150],[-100,175,{stop:true}],[-100,197],[-100,225]])]))},
  {id:'lesson-sand',name:'Find your traction',summary:'Select 4H on gravel, then cross the short sand lane. Keep a steady, gentle throttle through its softer centre; ease off if the wheels spin.',skill:'Traction and smooth throttle',mode:'4H',routes:Object.fromEntries([['learn',-23],['trail',-18],['expert',-14]].map(([level,x])=>[level,route([[0,18],[-28,45],[-48,65,{range:'4H'}],[-48,99],[x,116],[x,145],[x,173],[-48,190,{stop:true}]])]))}
 ],
 mountain:[
  ...HIMACHAL_MISSIONS,
  {id:'lookout',name:'Lookout expedition',summary:'Choose a gentler western climb or a direct ascent; stop at the lookout.',skill:'Route planning',mode:'4H',routes:{learn:route([[0,18],[-28,65],[-72,120],[-60,185],[-10,245],[65,295],[105,335]]),trail:route([[0,18],[22,70],[55,115],[82,175],[65,245],[105,335]]),expert:route([[0,18],[32,62],[73,108],[100,158],[75,215],[105,335]])}},
  {id:'cross-axle',name:'Rock garden',summary:'Enter low range before alternating wheel steps. Let the suspension work.',skill:'Wheel placement',mode:'4L',routes:{learn:route([[0,18],[30,55],[60,90],[60,120],[60,151],[60,175],[72,200]]),trail:route([[0,18],[30,55],[60,90],[65,120],[65,151],[65,175],[72,200]]),expert:route([[0,18],[30,55],[60,90],[70,120],[70,151],[70,175],[72,200]])}},
  {id:'hairpin',name:'Three-point hairpin',summary:'Climb to the pocket, stop and reverse into the marked refuge before continuing.',skill:'Reversing on a trail',mode:'4L',routes:{learn:route([[0,18],[-40,75],[-85,135],[-125,185,{stop:true}],[-117,175,{reverse:true,stop:true}],[-90,196],[-45,230]]),trail:route([[0,18],[-40,75],[-95,135],[-132,185,{stop:true}],[-126,177,{reverse:true,stop:true}],[-105,203],[-45,230]]),expert:route([[0,18],[-40,75],[-105,135],[-138,185,{stop:true}],[-133,177,{reverse:true,stop:true}],[-113,204],[-45,230]])}},
  {id:'descent',name:'Controlled descent',summary:'Stop on the ridge to prepare, then descend in gear under 12 km/h.',skill:'Low-range braking',mode:'4L',speedLimit:12,routes:{learn:route([[0,18],[-28,65],[-72,120],[-60,185],[-10,245],[35,280,{stop:true}],[35,320],[25,375],[0,410]]),trail:route([[0,18],[25,75],[45,140],[35,220],[35,280,{stop:true}],[35,320],[25,375],[0,410]]),expert:route([[0,18],[30,75],[52,140],[40,220],[35,280,{stop:true}],[35,320],[25,375],[0,410]])}},
  ...MOUNTAIN_EXTENSION_MISSIONS
 ],
 sand:[
  {id:'survey',name:'Three-marker survey',summary:'Navigate between distant survey markers across open dunes, then return to camp.',skill:'Navigation',mode:'4H',routes:{learn:route([[0,20],[-45,100],[-120,200],[20,300],[155,250],[120,140],[0,45]]),trail:route([[0,20],[-85,140],[-150,245],[25,365],[200,280],[135,100],[0,45]]),expert:route([[0,20],[-135,180],[-230,300],[30,470],[260,330],[165,110],[0,45]])}},
  {id:'firm-line',name:'Read the sand',summary:'Pale bowls are softer. Choose the darker gravel shoulders to keep moving.',skill:'Surface choice',mode:'4H',routes:{learn:route([[0,20],[55,90],[110,170],[120,250],[90,315]]),trail:route([[0,20],[42,90],[103,160],[112,245],[90,315]]),expert:route([[0,20],[30,90],[99,150],[109,235],[90,315]])}},
  {id:'crest',name:'Dune crest inspection',summary:'Climb straight, stop before the crest to inspect, then take the marked descent.',skill:'Blind-crest judgement',mode:'4H',routes:{learn:route([[0,20],[-35,80],[-55,150],[-65,220,{stop:true}],[-65,245],[-35,300]]),trail:route([[0,20],[-25,80],[-45,150],[-65,220,{stop:true}],[-65,245],[-35,300]]),expert:route([[0,20],[-15,80],[-35,150],[-65,220,{stop:true}],[-65,245],[-35,300]])}},
  {id:'momentum',name:'Momentum loop',summary:'Link broad turns without bogging down. On Expert, follow the eastern shoulder before crossing below the soft bowl; cutting straight across its uphill face can lose traction.',skill:'Traction management',mode:'4H',routes:{learn:route([[0,20],[70,100],[100,220],[10,300],[-95,230],[-80,100],[0,45]]),trail:route([[0,20],[90,100],[155,240],[10,375],[-160,245],[-100,95],[0,45]]),expert:route([[0,20],[110,100],[210,270],[10,440],[-100,260],[-220,275],[-125,80],[0,45]])}}
 ],
 urban:[
  ...PRO_MISSIONS,
  GORGE_GAUNTLET,
  {id:'controls',name:'Cabin and control school',summary:'Set off in D, stop in the box, then enter the gravel yard to practise 4H and low range.',skill:'Controls',routes:{learn:route([[0,18],[0,38,{stop:true}],[-28,50],[-55,65,{range:'4H'}],[-65,90,{stop:true,range:'4L'}],[-65,120]]),trail:route([[0,18],[0,38,{stop:true}],[-28,50],[-55,65,{range:'4H'}],[-65,90,{stop:true,range:'4L'}],[-65,120]]),expert:route([[0,18],[0,38,{stop:true}],[-28,50],[-55,65,{range:'4H'}],[-65,90,{stop:true,range:'4L'}],[-65,120]])}},
  {id:'parking',name:'Reverse precision',summary:'Pull past the bay, stop, select R and reverse into the marked space.',skill:'Slow-speed positioning',routes:{learn:route([[0,18],[30,35],[48,44],[48,65,{stop:true}],[48,54,{reverse:true,stop:true}]]),trail:route([[0,18],[32,35],[58,48],[58,70,{stop:true}],[58,59,{reverse:true,stop:true}]]),expert:route([[0,18],[35,35],[68,51],[68,75,{stop:true}],[68,64,{reverse:true,stop:true}]])}},
  {id:'ramps',name:'Quarry articulation & crest',summary:'Place the wheels over offset ramps, then climb the seven-metre earth crest. Stop at the summit to inspect the far side and descend in low range.',skill:'Wheel placement and crest judgement',mode:'4L',speedLimit:12,routes:{learn:route([[0,18],[-28,45],[-55,65],[-60,90],[-60,110],[-60,128],[-65,143],[-65,160,{stop:true}],[-65,184],[-65,214]]),trail:route([[0,18],[-28,45],[-55,65],[-65,90],[-65,110],[-65,128],[-65,143],[-65,160,{stop:true}],[-65,184],[-65,214]]),expert:route([[0,18],[-28,45],[-55,65],[-70,90],[-70,110],[-70,128],[-65,143],[-65,160,{stop:true}],[-65,184],[-65,214]])}},
  {id:'slalom',name:'Brake and slalom',summary:'Accelerate on the straight, brake before the cones and finish fully stopped.',skill:'Braking and steering',routes:{learn:route([[0,20],[20,60],[25,90],[38,110],[25,130],[38,150],[30,180]]),trail:route([[0,20],[20,60],[24,90],[36,108],[24,126],[36,144],[30,180]]),expert:route([[0,20],[20,60],[24,90],[34,104],[24,118],[34,132],[24,146],[30,180]])}}
 ]
};
const clamp=(n,a,b)=>Math.max(a,Math.min(b,n));
const smooth=n=>{const t=clamp(n,0,1);return t*t*(3-2*t);};
const bell=(x,z,cx,cz,sx,sz)=>Math.exp(-(((x-cx)/sx)**2)-(((z-cz)/sz)**2));
function landNoise(x,z,scale){const px=x/scale,pz=z/scale,ix=Math.floor(px),iz=Math.floor(pz),tx=smooth(px-ix),tz=smooth(pz-iz);const a=vegetationHash(ix,iz)*(1-tx)+vegetationHash(ix+1,iz)*tx,b=vegetationHash(ix,iz+1)*(1-tx)+vegetationHash(ix+1,iz+1)*tx;return a*(1-tz)+b*tz;}
export function mountainShoulderRelief(x,z,distance){
 const mask=smooth((distance-6)/12);if(!mask)return 0;
 // Broad irregular erosion with nested smaller outcrops, not periodic ridges.
 const shape=landNoise(x+83,z-29,29)*.54+landNoise(x-37,z+67,11)*.32+landNoise(x+119,z+91,4.7)*.14;
 return mask*(shape*5.6-1.7);
}
function segmentDistance(x,z,a,b){const dx=b.x-a.x,dz=b.z-a.z,t=clamp(((x-a.x)*dx+(z-a.z)*dz)/Math.max(1e-6,dx*dx+dz*dz),0,1);return Math.hypot(x-a.x-t*dx,z-a.z-t*dz);}
export function getMissions(course){return course.missions||MISSIONS[course.worldId||course.theme]||MISSIONS.urban;}
export function getMission(course,id){return getMissions(course).find(m=>m.id===id)||getMissions(course)[0];}
export function centerAt(course,z){const t=Math.max(0,z-20);return course.theme==='urban'?5*Math.sin(t/36):course.theme==='sand'?14*Math.sin(t/80):12*Math.sin(t/65)*Math.min(t/40,1);}
export function courseFeatures(course){return course.id==='school'?[{x:-65,z:87,length:30,type:'ruts',name:'Offset wheel steps',height:.24},{x:-100,z:140,length:35,type:'climb',name:'Training hill'},{x:-100,z:180,length:40,type:'descent',name:'Controlled descent'},{x:-18,z:125,length:50,type:'soft',name:'Soft-sand lane'}]:course.theme==='mountain'?[{x:65,z:110,length:70,type:'ruts',name:'Offset rock garden',height:.26},{x:-132,z:185,length:20,type:'precision',name:'Hairpin pocket'},{x:35,z:280,length:105,type:'descent',name:'Ridge descent'}]:course.theme==='sand'?[{x:65,z:170,length:85,type:'soft',name:'Soft sand bowl'},{x:-65,z:220,length:40,type:'crest',name:'Blind dune crest'}]:[{x:-65,z:90,length:30,type:'ruts',name:'Offset wheel ramps',height:.24},{x:58,z:59,length:16,type:'precision',name:'Reverse parking bays'},{x:30,z:100,length:65,type:'precision',name:'Brake and slalom'}];}
export function makeWorld(course,difficulty='explorer'){
 const settings=DIFFICULTIES[difficulty]||DIFFICULTIES.explorer,baseSize=course.size||600,expanded=!['school','custom'].includes(course.id),size=baseSize*(expanded?Math.sqrt(3):1),centerZ=baseSize*.3,bounds={minX:-size/2,maxX:size/2,minZ:centerZ-size/2,maxZ:centerZ+size/2};
 const exploration=explorationPlan(course),terrainElements=course.customPlan?.elements||exploration.elements,adventure=adventureLines(course);
 const activeStoneLane=course.id==='mountain'?({learn:60,trail:65,expert:70}[settings.route]):null;
 if(activeStoneLane!==null)for(const line of adventure)if(line.id==='stone-line')line.points=line.points.map(([x,z])=>[activeStoneLane,z]);
 const routes=getMissions(course).flatMap(m=>Object.values(m.routes));
 const legacySegments=getMissions(course).filter(m=>!m.extension).flatMap(m=>Object.values(m.routes)).flatMap(points=>points.slice(1).map((p,i)=>[points[i],p]));
 const legacyRouteDistance=(x,z)=>{let nearest=Math.abs(x-centerAt(course,z));for(const[a,b]of legacySegments)nearest=Math.min(nearest,segmentDistance(x,z,a,b));return nearest;};
 const segments=[...routes,...adventure.map(line=>line.points.map(([x,z])=>({x,z})))].flatMap(points=>points.slice(1).map((p,i)=>[points[i],p]));
 const routeDistance=(x,z)=>{let nearest=Math.abs(x-centerAt(course,z));for(const [a,b]of segments)nearest=Math.min(nearest,segmentDistance(x,z,a,b));return nearest;};
 const facilitySegments=course.theme==='urban'?[...MISSIONS.school,...MISSIONS.urban].flatMap(m=>Object.values(m.routes)).flatMap(points=>points.slice(1).map((p,i)=>[points[i],p])):segments;
 const landmarkRouteDistance=(x,z)=>Math.min(routeDistance(x,z),...facilitySegments.map(([a,b])=>segmentDistance(x,z,a,b)));
 const activeSegments=getMissions(course).filter(m=>!m.extension).flatMap(m=>{const line=m.routes[settings.route];return line.slice(1).map((p,i)=>[line[i],p]);});
 const sectionTerraceClearance=(x,z)=>{
  if(course.id!=='mountain'||x<45||x>85||z<110||z>187)return Infinity;
  let nearest=Infinity;for(const[a,b]of activeSegments)nearest=Math.min(nearest,segmentDistance(x,z,a,b));return nearest;
 };
 const baseHeight=(x,z)=>{
  if(course.id==='custom')return 0;
  const fade=smooth((Math.hypot(x,z)-12)/30);
  if(course.theme==='urban'){
   if(course.id==='urban'&&inProYard(x,z))return 0;
   let h=quarryRampHeight(x,z,settings.obstacleScale);
   // A scaled-down ridge: smooth entry/exit, a broad crest, and loose ground.
   if(course.id==='school')h+=(3+settings.obstacleScale*.8)*smooth((24-Math.abs(x+100))/12)*smooth((40-Math.abs(z-175))/32);
   return h+adventureHeight(course,x,z,routeDistance(x,z));
  }
  if(course.theme==='sand')return fade*(4.8*Math.sin((z+x*.2)/37)+3.4*Math.sin((x-z*.12)/58)+7*bell(x,z,-65,225,90,38)+.035*Math.sin(z*2.6+x*.15)+.018*Math.sin(x*4.1)+adventureHeight(course,x,z,routeDistance(x,z)))+(course.id==='sand'?desertHeightDelta(x,z):0);
  const ridge=31*bell(x,z,35,250,160,120)+13*bell(x,z,-145,160,65,90),distant=38*bell(x,z,220,340,72,160)+30*bell(x,z,-240,330,85,180);
  const articulation=mountainStepHeight(x,z,settings.obstacleScale,activeStoneLane);
  return fade*(ridge+distant+(.055*Math.sin(z*2.3)*Math.sin(x*2)+.025*Math.sin(x*4+z*3))*.25+articulation+mountainShoulderRelief(x,z,routeDistance(x,z))+adventureHeight(course,x,z,routeDistance(x,z)));
 };
 const localHeight=(x,z)=>{const base=riverHeight(baseHeight(x,z),x,z,exploration.river)+terrainElements.reduce((sum,e)=>sum+terrainElementHeight(e,x,z),0);return course.id==='mountain'?sectionRiverHeight(base+sectionShoulderRelief(x,z,routeDistance(x,z))+sectionTerraceHeight(x,z,activeStoneLane,sectionTerraceClearance(x,z)),x,z):base;};
 // New landforms must not overwrite existing graded bridge approaches or
 // discovery obstacle beds. Keep the same smooth exclusion used for routes.
 const protectedTerrainDistance=(x,z)=>Math.min(legacyRouteDistance(x,z),riverApproachProtectionDistance(x,z,exploration.river),...terrainElements.map(e=>Math.max(0,Math.hypot(x-e.x,z-e.z)-15)));
 const mountainExtension=course.id==='mountain'?createMountainExtension(localHeight,protectedTerrainDistance):null;
 const height=mountainExtension?.height||(course.id==='urban'?((x,z)=>gorgeHeight(localHeight(x,z),x,z)):localHeight);
 const inElement=(x,z)=>terrainElements.some(e=>{const b=elementFootprint(e,2);return x>b.minX&&x<b.maxX&&z>b.minZ&&z<b.maxZ;});
 const surface=(x,z)=>course.id==='urban'&&inProYard(x,z)?'loose':mountainExtension?.surface(x,z)||(course.id==='custom'||inElement(x,z)?'loose':course.theme==='urban'?(course.id==='school'&&x>-32&&x<-2&&z>105&&z<182?(bell(x,z,-14,145,9,24)>.35?'soft-sand':'sand'):x < (course.id==='school'?-2:-24)&&z>38&&z<240?'loose':x>80&&z>70&&z<130?'wet-tarmac':'tarmac'):course.theme==='sand'?(bell(x,z,65,170,29,65)>.35||bell(x,z,-150,320,40,55)>.45?'soft-sand':x>105&&x<145&&z>110&&z<290?'loose':'sand'):'loose');
 const obstacles=[];
 if(course.theme==='mountain'){for(let i=0;i<38;i++){const angle=i*2.399,x=Math.sin(angle)*(85+i*3.1),z=110+Math.cos(angle)*(60+i*2.7);if(routeDistance(x,z)>5)obstacles.push({id:`boulder-${i}`,type:'rock',x,z,y:height(x,z),radius:.5+(i%4)*.33,height:.7+(i%3)*.45,yaw:i*.8});}obstacles.push({id:'hairpin-edge',type:'box',x:-145,z:190,y:height(-145,190),width:1.2,depth:13,height:1.1,yaw:.1});}
 else if(course.theme==='urban'&&course.id!=='custom'){for(let i=0;i<6;i++)obstacles.push({id:`barrier-${i}`,type:'box',x:92+i*5,z:45,y:0,width:3.6,depth:.65,height:.9,yaw:0});for(const [x,z]of [[48,50.5],[58,55.5],[68,60.5]])obstacles.push({id:`parking-stop-${x}`,type:'box',x,z,y:0,width:2.7,depth:.18,height:.13,yaw:0});}
 else if(course.theme==='sand')for(let i=0;i<14;i++){const x=155+Math.sin(i*2.4)*30,z=150+i*12;obstacles.push({id:`desert-rock-${i}`,type:'rock',x,z,y:height(x,z),radius:.35+i%3*.3,height:.45+i%2*.35,yaw:i});}
 if(course.id==='sand')for(let i=0;i<24;i++){
  const cluster=i<12?[-141,202]:[-130,252],a=i*2.4,x=cluster[0]+Math.cos(a)*(2+i%4),z=cluster[1]+Math.sin(a)*(3+i%5),radius=.35+vegetationHash(i,3181)*.55;
  if(routeDistance(x,z)<radius+4.5)continue;
  obstacles.push({id:`saddle-outcrop-${i}`,type:'rock',x,z,y:height(x,z)-.08,radius,height:radius*.9,yaw:a});
 }
 if(course.theme==='mountain')for(let i=0,added=0;i<600&&added<44;i++){
  const x=44+vegetationHash(i,301)*42,z=100+vegetationHash(i,509)*85,radius=.3+vegetationHash(i,701)*.5;
  if(routeDistance(x,z)<=5.5||obstacles.some(o=>Math.hypot(x-o.x,z-o.z)<radius+(o.radius||.8)+.7))continue;
  obstacles.push({id:`garden-shoulder-${added++}`,type:'rock',x,z,y:height(x,z)-.12,radius,height:.4+vegetationHash(i,907)*.7,yaw:vegetationHash(i,1103)*Math.PI*2});
 }
 if(course.id==='mountain'||course.id==='urban')for(let i=0;i<44;i++){
  const mountain=course.id==='mountain',side=i%2?1:-1,z=(mountain?105:137)+Math.floor(i/2)*(mountain?4.1:4.7),x=mountain?67+side*(22+vegetationHash(i,2101)*12):-65+side*(41+vegetationHash(i,2101)*18),radius=.8+vegetationHash(i,2309)*1.3;
  if(routeDistance(x,z)<radius+5||landmarkRouteDistance(x,z)<radius+4)continue;
  obstacles.push({id:`adventure-outcrop-${i}`,type:'rock',x,z,y:height(x,z)-.12,radius,height:radius*(.9+vegetationHash(i,2707)*.6),yaw:vegetationHash(i,2903)*6.28});
 }
 obstacles.push(...conceptObstacles(course,height,routeDistance));
 if(course.id==='sand')obstacles.push(...desertObstaclePlan(height,routeDistance));
 if(course.id==='mountain')for(let i=obstacles.length-1;i>=0;i--){const o=obstacles[i];if(Math.hypot(o.x-52,o.z-190)<(o.radius||1)+12||Math.hypot(o.x-47,o.z-133)<(o.radius||1)+8||Math.abs(o.z-130)<(o.radius||1)+5&&o.x>-14&&o.x<50)obstacles.splice(i,1);}
 // Parked original companion SUVs have non-driveable collision hulls.
 const companionObstacles=[{id:'camp-companion-west',type:'box',x:-10,z:-8,y:height(-10,-8)+.28,width:1.9,depth:4.2,height:1.65,yaw:.4},{id:'camp-companion-east',type:'box',x:10,z:-11,y:height(10,-11)+.28,width:1.9,depth:4.7,height:1.65,yaw:-.24}];
 const sceneryObstacles=[];
 if(course.theme==='urban')for(const x of [-100,-65,-30])sceneryObstacles.push({id:`service-building-${x}`,type:'box',x,z:-38,y:0,width:27,depth:18,height:6,yaw:0});
 const world={course,difficulty,settings,activeStoneLane,size,baseSize,areaMultiplier:expanded?3:1,bounds,routes,adventure,missions:getMissions(course),height,surface,routeDistance,landmarkRouteDistance,mountainExtension,obstacles,companionObstacles,sceneryObstacles,terrainElements,discoveries:exploration.discoveries,river:exploration.river,features:course.id==='custom'?[]:courseFeatures(course),spawn:{x:0,z:0,yaw:0},contains:(x,z,margin=0)=>x>bounds.minX+margin&&x<bounds.maxX-margin&&z>bounds.minZ+margin&&z<bounds.maxZ-margin};
 world.sectionTerraceClearance=sectionTerraceClearance;
 world.finePatches=course.id==='sand'?DESERT_FINE_PATCHES:course.id==='urban'?[GORGE_PATCH]:[];
 world.extraCoarseRelief=course.id==='sand'?desertCoarseRelief:course.id==='urban'?gorgeCoarseRelief:()=>0;
 world.landmarks=course.id==='custom'?[]:makeLandmarkPlan(world);sceneryObstacles.push(...landmarkCollisionHulls(world.landmarks));
 world.adventureMarkers=adventureMarkers(world);sceneryObstacles.push(...world.adventureMarkers);
 world.terrainProps=terrainElementProps(terrainElements,height);obstacles.push(...world.terrainProps.filter(p=>p.type==='rock'));sceneryObstacles.push(...world.terrainProps.filter(p=>p.type!=='rock'));
 world.riverProps=riverCollisionPlan(world);world.discoveryProps=discoveryCollisionPlan(world);sceneryObstacles.push(...world.riverProps,...world.discoveryProps);
 world.himachalSection=course.id==='mountain'?HIMACHAL_SECTION:null;world.sectionProps=world.himachalSection?sectionCollisionPlan(world):[];sceneryObstacles.push(...world.sectionProps);
 obstacles.push(...sectionGeologyPlan(world));
 world.recoveryReason=state=>(course.id==='urban'?gorgeHazard(state):'')||(world.himachalSection?sectionHazard(state):'')||riverHazard(world,state);
 world.proTrials=course.id==='urban'?prepareGorgePiers(proTrialPlan()):[];sceneryObstacles.push(...world.proTrials);
 world.gorgeSolids=course.id==='urban'?gorgeSolids():[];sceneryObstacles.push(...world.gorgeSolids);
 world.supportHeight=(x,z)=>proSupportHeight(world.proTrials,x,z)??(world.himachalSection?sectionSupportHeight(x,z):null)??(world.river&&Math.abs(x-world.river.bridgeX)<world.river.bridgeWidth/2&&Math.abs(z-world.river.bridgeZ)<world.river.bridgeLength/2?world.river.deckTop:height(x,z));
 for(const tree of vegetationLayout(world))sceneryObstacles.push({id:tree.id,type:'cylinder',x:tree.x,z:tree.z,y:tree.y,radius:tree.radius,height:tree.height,yaw:0});
 return world;
}
export function makeGates(course,difficulty='explorer',missionId){
 const settings=DIFFICULTIES[difficulty]||DIFFICULTIES.explorer;
 if(missionId){const mission=getMission(course,missionId),points=mission.routes[settings.route];return points.map((p,index)=>{
  // A broad navigation circle must not award a wheel-placement challenge to a
  // vehicle driving beside its ramps. Posts mark the whole-car clearance;
  // longitudinal tolerance still permits a natural rolling crossing.
  const precision=p.precision||(mission.id==='cross-axle'&&p.z>=120&&p.z<=175)||(['ramps','lesson-steps'].includes(mission.id)&&p.z>=89&&p.z<=110);
  return {...p,radius:p.radius??(precision?({explorer:1.6,driver:1.4,expert:1.25}[difficulty]||1.6):(p.reverse?2.8:4.6)*settings.gate),...(precision?{precision:true,heading:p.heading??0,depth:p.depth??2.5,range:p.range||'4L'}:{}),index,final:index===points.length-1,stop:!!p.stop||index===points.length-1,mission:mission.id};
 });}
 // Legacy route contract stays available for saved runs and regression tests.
 return Array.from({length:Math.ceil(course.length/24)},(_,i)=>{const z=Math.min((i+1)*24,course.length);return {x:centerAt(course,z),z,radius:course.width/2*settings.gate,index:i};});
}
export function gateReached(state,gate){
 if(!gate)return false;
 if(gate.elevation!==undefined&&(!Number.isFinite(state.y)||Math.abs(state.y-gate.elevation)>(gate.heightTolerance??.7)))return false;
 if(gate.precision){const yaw=gate.heading||0,dx=state.x-gate.x,dz=state.z-gate.z;return Math.abs(dx*Math.cos(yaw)-dz*Math.sin(yaw))<gate.radius-.82&&Math.abs(dx*Math.sin(yaw)+dz*Math.cos(yaw))<gate.depth;}
 return Math.hypot(state.x-gate.x,state.z-gate.z)<gate.radius;
}
export function gateHeading(gates,index){const previous=index?gates[index-1]:{x:0,z:0},gate=gates[index];return gate?.heading??(gate?Math.atan2(gate.x-previous.x,gate.z-previous.z):0);}
export function checkpointStatus(state,gate,difficulty='explorer'){
 if(!gateReached(state,gate))return {reached:false,reason:''};
 if(gate.elevation!==undefined&&(!state.wheelContacts||state.wheelContacts.filter(Boolean).length<2))return {reached:false,reason:'Settle the wheels onto the marked surface.'};
 if(gate.range&&state.range!==gate.range)return {reached:false,reason:`Select ${gate.range} here. Stop and select Neutral before changing low range.`};
 if(gate.reverse&&state.gear!=='R')return {reached:false,reason:'Enter this checkpoint in Reverse.'};
 if(gate.gear&&state.gear!==gate.gear)return {reached:false,reason:`Select ${gate.gear} for this challenge checkpoint.`};
 if(gate.headingTolerance!==undefined&&Math.abs(Math.atan2(Math.sin(state.yaw-gate.heading),Math.cos(state.yaw-gate.heading)))>gate.headingTolerance)return {reached:false,reason:'Align the car with the marked pocket.'};
 const kmh=Math.abs(state.speed)*3.6;
 if(gate.minSpeed!==undefined&&kmh<gate.minSpeed)return {reached:false,reason:`Timing gate: enter at ${gate.minSpeed}–${gate.maxSpeed} km/h. Back up on the approach to retry.`};
 if(gate.maxSpeed!==undefined&&kmh>gate.maxSpeed)return {reached:false,reason:`Reduce speed below ${gate.maxSpeed} km/h inside this checkpoint.`};
 if(gate.stop&&Math.abs(state.speed)>(DIFFICULTIES[difficulty]?.stopTolerance||.2))return {reached:false,reason:'Stop fully inside the marked area.'};
 return {reached:true,reason:''};
}
export function resultFor(state,course,difficulty,mission){const score=Math.max(0,Math.round(100-state.penalty*.32-state.recoveries*8));return {version:2,course:course.id,mission:mission||null,difficulty,score,medal:score>=90?'Clean line':score>=70?'Trail finisher':'Keep practising',seconds:Math.round(state.elapsed),recoveries:state.recoveries,date:new Date().toISOString()};}
