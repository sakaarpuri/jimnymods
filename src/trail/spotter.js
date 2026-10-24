import {centerAt} from './courses.js';
export const WHEEL_NAMES=['Front right','Front left','Rear right','Rear left'];
export const WHEEL_SHOTS=['front-wheel','front-wheel-left','rear-wheel','rear-wheel-left'];
// A live observation, never a diagnosis of a buried tyre or a pause in time.
export function automaticWheelPreview(s,problem,lowProgress=0){
  if(!s||lowProgress<=2.5||Math.abs(s.speed)>=.8||s.parking||s.handbrake||['P','N'].includes(s.gear)||(s.throttle||0)<=.18||s.finished)return null;
  const airborne=s.wheelContacts?.findIndex(contact=>contact===false);
  if(airborne>=0&&airborne<4)return airborne;
  // After an impact, look toward the direction of travel rather than always
  // showing a rear driven wheel. This is a clearance view, not a jam diagnosis.
  if(problem?.id==='contact')return s.gear==='R'?2:0;
  const candidates=s.range==='2H'?[2,3]:[0,1,2,3];
  if(candidates.includes(problem?.wheel))return problem.wheel;
  return candidates.reduce((best,i)=>(s.wheelHeights?.[i]??Infinity)<(s.wheelHeights?.[best]??Infinity)?i:best,candidates[0]);
}
export function diagnose(s,world,{lowProgress=0,contact=false}={}){
  const h=s.wheelHeights,spread=Math.max(...h)-Math.min(...h),lowest=h.indexOf(Math.min(...h));
  if(contact)return {id:'contact',title:'Contact or hard landing',shot:'front',wheel:null,evidence:'The rigid-body model recorded a sudden change in velocity. Inspect the ground and clearance; this is not a damage diagnosis.',advice:'Release the accelerator and check the space around the car. Stop fully before selecting Reverse. Recover is a game reset if you cannot continue.'};
  if(s.parking||['P','N'].includes(s.gear))return {id:'controls',title:'Check the controls first',shot:'side',wheel:null,evidence:s.parking?'The parking brake is on.':'The automatic selector is not in a driving gear.',advice:'Select a driving gear while stopped, then release the parking brake when ready. This is not a stuck-tyre diagnosis.'};
  if(s.physics==='rigid-body'&&s.wheelContacts?.some(c=>!c)){const wheel=s.wheelContacts.indexOf(false);return {id:'uneven',title:'A wheel has lost ground contact',shot:WHEEL_SHOTS[wheel],wheel,evidence:`${WHEEL_NAMES[wheel]} has no suspension-ray contact with the ground. This comes from the running physics model.`,advice:'Ease off and inspect the wheel and chassis clearance. Choose a more level line. This approximate model cannot identify a buried or wedged tyre.'};}
  if(lowProgress>2.5)return {id:'low-progress',title:'Little forward progress',shot:WHEEL_SHOTS[s.range==='2H'?2:lowest],wheel:s.range==='2H'?2:lowest,evidence:`The car made little progress under power for ${Math.floor(lowProgress)} seconds${s.slip>.18?', with simulated wheelspin':''}.`,advice:'Ease off. Inspect the ground and your line. On loose ground, choose the appropriate drive range before trying again. Stop before changing direction. The model cannot identify a wedged or buried individual tyre.'};
  if(s.slip>.18)return {id:'wheelspin',title:'Power is exceeding available grip',shot:s.range==='2H'?'rear-wheel':WHEEL_SHOTS[lowest],wheel:s.range==='2H'?2:lowest,evidence:`The drivetrain model reports ${Math.round(s.slip*100)}% excess traction demand. This is not a measured individual-wheel slip reading.`,advice:'Ease the accelerator. More power is not necessarily more progress. Inspect the surface and choose a steadier line; use the transfer range appropriate to the ground.'};
  if(spread>.14)return {id:'uneven',title:'Read the wheel contact heights',shot:WHEEL_SHOTS[lowest],wheel:lowest,evidence:`The four sampled ground heights differ by ${Math.round(spread*100)} cm. The highlighted wheel is at the lowest sampled point.`,advice:'Crawl with small steering inputs. Look at the next contact patch before adding power. These are terrain samples, not measured suspension loads or proof that a wheel is airborne.'};
  if(world.contains&&!world.contains(s.x,s.z,8))return {id:'off-line',title:'Practice-area edge',shot:'overview',wheel:null,evidence:'You are near the physical perimeter of this closed world.',advice:'Inspect the map and turn back into the practice area. Recover is available if you cannot move.'};
  return {id:'inspect',title:'Read the ground before moving',shot:'side',wheel:null,evidence:'No persistent traction problem is currently detected.',advice:'Compare the front, rear and overhead views. Check wheel placement, the next rise and the space around the car. Inspection pauses game time and scoring.'};
}
export class Spotter{
  constructor(){this.reset();}
  reset(){this.lowProgress=0;this.contactUntil=-1;this.lastAuto=-Infinity;this.problem=null;}
  contact(elapsed){this.contactUntil=elapsed+5;}
  update(s,input,world,dt=1/60){
    const trying=!s.parking&&!s.handbrake&&!['P','N'].includes(s.gear)&&(input.throttle||0)>.18&&(input.brake||0)<.1;
    this.lowProgress=trying&&Math.abs(s.speed)<.22?this.lowProgress+dt:Math.max(0,this.lowProgress-dt*2);
    this.problem=diagnose(s,world,{lowProgress:this.lowProgress,contact:s.elapsed<this.contactUntil});return this.problem;
  }
  shouldPause(s,enabled){if(!enabled||s.finished||Math.abs(s.speed)>1||s.elapsed-this.lastAuto<40||!['low-progress','contact'].includes(this.problem?.id))return false;this.lastAuto=s.elapsed;return true;}
}
