// Educational, fixed-step approximation. See modeling/GAME_SOURCES.md.
// SI units. +Z forward, +X driver-left; positive steer/yaw turns left.
// No claim of OEM handling validation.
export const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
// A held brake can leave a few centimetres/second of solver drift on a slope.
// Treat that as stopped for control interlocks only; do not alter body velocity.
export const stoppedForShift=s=>Math.abs(s.speed)<=((s.parking||s.braking>.5)? .08:.03);
// Wheel force per unit of engine torque. Short game courses make the published engine feel
// sluggish, so 2H and 4H are tuned brisker; 4L keeps the original crawl-range value.
// Peak torque and gear ratios remain the published figures.
export const DRIVE_EFFICIENCY=Object.freeze({'2H':2,'4H':1.15,'4L':.82});
export const SPECS=Object.freeze({wheelRadius:.3465,track:1.405,finalDrive:4.3,gears:[2.875,1.568,1,.697],reverse:2.3,peakTorque:130});
// Highest gear the automatic may use. 4H and 4L stay in the lower two gears, so they top out
// below 2H while pulling harder at low speed.
export const maxAutoGear=s=>s.gear==='L'?1:s.gear==='2'?2:s.range==='2H'?4:2;
// Soft rev limiter on engine speed before the throttle bump: full force below 5850 rpm, none from 6100.
export const revLimit=rpm=>clamp((6100-rpm)/250,0,1);
export function createVehicle(body='5door'){
  return {body,wheelbase:body==='3door'?2.25:2.59,mass:body==='3door'?1190:1290,x:0,z:0,y:0,yaw:0,vx:0,vz:0,speed:0,steer:0,pitch:0,roll:0,heave:0,
    range:'2H',gear:'N',autoGear:1,parking:true,hdc:false,hdcActive:false,hdcSuspended:false,rpm:850,slip:0,brakeLSD:false,throttle:0,wheelHeights:[0,0,0,0],wheelContacts:[true,true,true,true],wheelRotations:[0,0,0,0],suspension:[.18,.18,.18,.18],loads:[.25,.25,.25,.25],distance:0,elapsed:0,penalty:0,recoveries:0,finished:false,hold:0,brakeHeat:0,handbrake:false,impact:0,physics:'approximation'};
}
export function shiftRange(s,next,surface='loose'){
  if(!['2H','4H','4L'].includes(next))return 'Unknown transfer position.';
  if(next===s.range)return '';
  if(next!=='2H'&&surface==='tarmac')return 'Dry tarmac: stay in 2H. Part-time 4WD can wind up the driveline.';
  if((s.range==='2H'&&next==='4L')||(s.range==='4L'&&next==='2H'))return 'Move through 4H first. The transfer lever has three separate positions.';
  if(Math.abs(s.steer)>.045)return 'Straighten the front wheels before shifting the transfer lever.';
  if(s.slip>.12)return 'Release the accelerator and let the wheels stop spinning before shifting.';
  if(next==='4L'||s.range==='4L'){
    if(!stoppedForShift(s))return 'Stop completely before changing between 4H and 4L.';
    if(s.gear!=='N')return 'Select N (Neutral) before changing low range in this automatic Jimny.';
  }else if(Math.abs(s.speed)*3.6>=100)return 'Reduce speed before changing high-range drive modes.';
  s.range=next;if(next==='2H'){s.hdc=false;s.hdcActive=false;}return '';
}
export function shiftGear(s,next){
  if(!['P','R','N','D','2','L'].includes(next))return 'Unknown selector position.';
  const opposite=(next==='R'&&s.speed>.03)||(['D','2','L'].includes(next)&&s.speed<-.03);
  if(!stoppedForShift(s)&&(next==='P'||opposite))return 'Stop completely before selecting Park or changing direction.';
  if(next==='L'&&Math.abs(s.speed)*3.6>25)return 'Slow below 25 km/h before selecting L in this practice game.';
  s.gear=next;if(['N','P'].includes(next))s.hdcActive=false;return '';
}
export function toggleHdc(s){
  if(s.hdc){s.hdc=false;s.hdcActive=false;return '';}
  if(s.range==='2H')return 'Hill descent control needs 4H or 4L.';
  if(['P','N'].includes(s.gear))return 'Select a forward or reverse gear for hill descent control; do not coast in Neutral.';
  if(Math.abs(s.speed)*3.6>=25)return 'Slow below 25 km/h before enabling hill descent control.';
  if(s.brakeHeat>.95)return 'Brakes need to cool. Stop in a safe place.';
  s.hdc=true;s.hdcSuspended=false;return '';
}
export function contacts(s,height){
  const c=Math.cos(s.yaw),n=Math.sin(s.yaw);
  return [[-.7025,s.wheelbase/2],[.7025,s.wheelbase/2],[-.7025,-s.wheelbase/2],[.7025,-s.wheelbase/2]].map(([x,z])=>height(s.x+x*c+z*n,s.z-x*n+z*c));
}
export function stepVehicle(s,input,world,dt=1/60){
  if(s.finished)return;
  dt=clamp(dt,0,1/30);const g=9.81,c=Math.cos(s.yaw),n=Math.sin(s.yaw),v=s.vx*n+s.vz*c;
  const lateral=s.vx*c-s.vz*n,speed=Math.abs(v),surface=world.surface(s.x,s.z),mu=surface==='tarmac'?.88:surface==='wet-tarmac'?.52:surface==='soft-sand'?.22:surface==='sand'?.40:.65;
  const h=contacts(s,world.height),front=(h[0]+h[1])/2,rear=(h[2]+h[3])/2,left=(h[0]+h[2])/2,right=(h[1]+h[3])/2;
  const slope=Math.atan2(front-rear,s.wheelbase),bank=Math.atan2(right-left,SPECS.track);
  s.wheelHeights=h;s.y+=(h.reduce((a,b)=>a+b,0)/4-s.y)*Math.min(1,dt*14);
  s.steer+=(clamp(input.steer||0,-1,1)*.48/(1+speed*.045)-s.steer)*Math.min(1,dt*5);
  const throttle=clamp(input.throttle||0,0,1),brake=clamp(input.brake||0,0,1),drive=!['N','P'].includes(s.gear),direction=s.gear==='R'?-1:1;
  s.throttle+=(throttle-s.throttle)*Math.min(1,dt*4);
  const low=s.range==='4L',transfer=1.32*(low?2.002:1);
  // Published automatic gear ratios; converter/shift logic and curve are approximations.
  const maxGear=maxAutoGear(s);
  const rpmAt=gear=>speed/SPECS.wheelRadius*60/(2*Math.PI)*SPECS.gears[gear-1]*SPECS.finalDrive*transfer;
  s.autoGear=clamp(s.autoGear,1,maxGear);
  if(rpmAt(s.autoGear)>3300+s.throttle*1400&&s.autoGear<maxGear)s.autoGear++;
  else if(rpmAt(s.autoGear)<1300&&s.autoGear>1)s.autoGear--;
  const ratio=(s.gear==='R'?SPECS.reverse:SPECS.gears[s.autoGear-1])*SPECS.finalDrive*transfer;
  s.rpm=clamp(Math.max(850,speed/SPECS.wheelRadius*60/(2*Math.PI)*ratio)+s.throttle*(speed<2?1300:350),850,6200);
  const torque=130*(.65+.35*Math.exp(-(((s.rpm-4000)/2400)**2)));
  let force=drive?direction*(s.throttle*torque*ratio*DRIVE_EFFICIENCY[s.range]/SPECS.wheelRadius+(speed<1.2?170:0)):0;
  force*=revLimit(speed/SPECS.wheelRadius*60/(2*Math.PI)*ratio);
  const staticRear=clamp(.48+Math.sin(slope)*.5,.2,.8),rough=Math.abs(h[0]-h[1]-h[2]+h[3]);
  s.brakeLSD=low&&rough>.13&&s.throttle>.1;
  const contactFactor=clamp(1-rough*(s.brakeLSD?.25:.8),.35,1);
  const capacity=mu*s.mass*g*Math.cos(slope)*(s.range==='2H'?staticRear:1)*contactFactor;
  s.slip=clamp((Math.abs(force)-capacity)/Math.max(capacity,1),0,1);
  force=clamp(force,-capacity,capacity);
  if(drive&&s.throttle<.04&&speed>.1)force-=Math.sign(v)*Math.min(speed*85*transfer,low?1500:650);
  force-=s.mass*g*Math.sin(slope);
  const rolling=s.mass*g*(surface==='soft-sand'?.095:surface==='sand'?.055:surface==='loose'?.022:.012);
  force-=Math.sign(v||force)*Math.min(Math.abs(force),rolling+.48*speed*speed);
  // Short hill-hold assistance. It is not a parking brake.
  if(brake>.5&&speed<.05&&drive&&slope*direction>.04)s.hold=2;
  else s.hold=Math.max(0,s.hold-dt);
  if(s.throttle>.12)s.hold=0;
  if(s.brakeHeat>.99)s.hdc=false;
  if(speed*3.6>=40)s.hdcSuspended=true;else if(speed*3.6<25)s.hdcSuspended=false;
  s.hdcActive=s.hdc&&!s.hdcSuspended&&drive&&s.range!=='2H'&&s.throttle<.03&&slope*v<-.02;
  const target=(low?5:10)/3.6;
  const hdcBrake=s.hdcActive&&speed>target?clamp((speed-target)*2+.15,0,1):0;
  s.brakeHeat=clamp(s.brakeHeat+hdcBrake*dt*.008-dt*.0015,0,1);
  s.handbrake=!!input.handbrake;
  const braking=(Math.max(brake,hdcBrake)*mu*s.mass*g)+(s.parking||s.gear==='P'||s.hold>0?mu*s.mass*g:0)+(s.handbrake?mu*s.mass*g*.48:0);
  let next=v+force/s.mass*dt;
  next=Math.sign(next)*Math.max(0,Math.abs(next)-braking/s.mass*dt);
  const lateralAccel=next*next*Math.tan(s.steer)/s.wheelbase;
  const yawRate=next*Math.tan(s.steer)/s.wheelbase* Math.min(1,mu*g/Math.max(Math.abs(lateralAccel),.001));
  s.yaw+=yawRate*dt;
  const sideGravity=-g*Math.sin(bank),newLateral=lateral+sideGravity*dt;
  const lat=Math.sign(newLateral)*Math.max(0,Math.abs(newLateral)-mu*g*dt*.85);
  const nc=Math.cos(s.yaw),ns=Math.sin(s.yaw);
  s.vx=next*ns+lat*nc;s.vz=next*nc-lat*ns;
  s.x+=s.vx*dt;s.z+=s.vz*dt;s.speed=next;
  // Chassis visual compliance, not an independent rigid-body suspension solver.
  const acceleration=(next-v)/Math.max(dt,.0001);
  s.pitch+=(-slope+clamp(acceleration*.012,-.045,.045)-s.pitch)*dt*7;
  s.roll+=(bank+clamp(lateralAccel*.012,-.08,.08)-s.roll)*dt*7;
  s.loads=[.25,.25,.25,.25].map((b,i)=>clamp(b+(i<2?-1:1)*acceleration*.012+(i%2?1:-1)*lateralAccel*.012,.03,.47));
  s.distance+=Math.hypot(s.vx,s.vz)*dt;s.elapsed+=dt;
  s.penalty+=dt*((s.slip>.2?1:0)+(Math.abs(bank)>.25?2:0)+(surface==='tarmac'&&s.range!=='2H'?3:0));
}
