import RAPIER from '@dimforge/rapier3d-compat';
import { clamp, SPECS, DRIVE_EFFICIENCY, maxAutoGear, revLimit } from './physics.js';
import {elementFootprint} from './terrain-builder.js';
import {coarseBedRelief,articulationBedRelief} from './adventure-terrain.js';

// Real rigid-body contact/suspension, with approximate tyre and engine tuning.
// This is an educational vehicle, not measured/certified Suzuki simulation data.
let initialization;
const init = () => initialization ||= RAPIER.init();
const ORIGIN_HEIGHT = .72;
const rotate = (v, q) => {
  const tx = 2 * (q.y * v.z - q.z * v.y), ty = 2 * (q.z * v.x - q.x * v.z), tz = 2 * (q.x * v.y - q.y * v.x);
  return { x: v.x + q.w * tx + q.y * tz - q.z * ty, y: v.y + q.w * ty + q.z * tx - q.x * tz, z: v.z + q.w * tz + q.x * ty - q.y * tx };
};
const grip = surface => ({tarmac:.9,'wet-tarmac':.5,loose:.64,sand:.41,'soft-sand':.23}[surface] || .64);

export async function createRigidVehicle(terrain, state, options = {}) {
  await init();
  const simulation = new RAPIER.World({ x: 0, y: -9.81, z: 0 });
  simulation.timestep = 1 / 60;
  const bounds = terrain.bounds || {minX:-100,maxX:100,minZ:-100,maxZ:100};
  const sx = bounds.maxX - bounds.minX, sz = bounds.maxZ - bounds.minZ;
  const step = options.terrainStep || (terrain.course?.theme === 'urban' ? .8 : 2);
  const nx = Math.ceil(sx / step), nz = Math.ceil(sz / step), heights = new Float32Array((nx + 1) * (nz + 1));
  // Rapier heightfields use column-major (z rows, x columns) matrices.
  for (let x = 0; x <= nx; x++) for (let z = 0; z <= nz; z++) {const px=bounds.minX+x/nx*sx,pz=bounds.minZ+z/nz*sz;heights[x*(nz+1)+z]=terrain.height(px,pz)-(terrain.course?coarseBedRelief(terrain.course,px,pz):0)-(terrain.extraCoarseRelief?.(px,pz)||0);}
  simulation.createCollider(RAPIER.ColliderDesc.heightfield(nz, nx, heights, { x: sx, y: 1, z: sz }).setTranslation((bounds.minX + bounds.maxX) / 2, 0, (bounds.minZ + bounds.maxZ) / 2).setFriction(.75));
  if(terrain.himachalSection){
    const b=terrain.himachalSection.bounds,width=b.maxX-b.minX,depth=b.maxZ-b.minZ,spacing=terrain.himachalSection.groundSpacing;
    const n=Math.ceil(width/spacing),m=Math.ceil(depth/spacing),h=new Float32Array((n+1)*(m+1));
    for(let x=0;x<=n;x++)for(let z=0;z<=m;z++){const px=b.minX+x/n*width,pz=b.minZ+z/m*depth;h[x*(m+1)+z]=terrain.height(px,pz)-articulationBedRelief(terrain.course,px,pz)+.008;}
    simulation.createCollider(RAPIER.ColliderDesc.heightfield(m,n,h,{x:width,y:1,z:depth}).setTranslation((b.minX+b.maxX)/2,0,(b.minZ+b.maxZ)/2).setFriction(.8));
  }
  // Dedicated high-resolution ramp beds preserve sub-metre wheel articulation.
  for(const b of terrain.finePatches||[]){
    const width=b.maxX-b.minX,depth=b.maxZ-b.minZ,n=Math.ceil(width/b.spacing),m=Math.ceil(depth/b.spacing),h=new Float32Array((n+1)*(m+1));
    for(let x=0;x<=n;x++)for(let z=0;z<=m;z++)h[x*(m+1)+z]=terrain.height(b.minX+x/n*width,b.minZ+z/m*depth)+.008;
    simulation.createCollider(RAPIER.ColliderDesc.heightfield(m,n,h,{x:width,y:1,z:depth}).setTranslation((b.minX+b.maxX)/2,0,(b.minZ+b.maxZ)/2).setFriction(.75));
  }
  if (['mountain','urban'].includes(terrain.course?.theme)) {
    const urban=terrain.course.theme==='urban';
    const bx=urban?-74:56,bz=urban?82:108,width=18,depth=urban?35:73,n=60,m=Math.ceil(depth/.3),h=new Float32Array((n+1)*(m+1));
    for(let x=0;x<=n;x++)for(let z=0;z<=m;z++)h[x*(m+1)+z]=terrain.height(bx+x/n*width,bz+z/m*depth)+.008;
    simulation.createCollider(RAPIER.ColliderDesc.heightfield(m,n,h,{x:width,y:1,z:depth}).setTranslation(bx+width/2,0,bz+depth/2).setFriction(.8));
  }
  for(const element of terrain.terrainElements||[]){
    if(['slalom','rock-garden'].includes(element.type))continue;
    const b=elementFootprint(element,.6),width=b.maxX-b.minX,depth=b.maxZ-b.minZ,n=Math.ceil(width/.3),m=Math.ceil(depth/.3),h=new Float32Array((n+1)*(m+1));
    for(let x=0;x<=n;x++)for(let z=0;z<=m;z++)h[x*(m+1)+z]=terrain.height(b.minX+x/n*width,b.minZ+z/m*depth)+.008;
    simulation.createCollider(RAPIER.ColliderDesc.heightfield(m,n,h,{x:width,y:1,z:depth}).setTranslation((b.minX+b.maxX)/2,0,(b.minZ+b.maxZ)/2).setFriction(.8));
  }
  const fixed = new Map();
  for (const obstacle of [...(terrain.obstacles || []),...(terrain.companionObstacles || []),...(terrain.sceneryObstacles || [])]) {
    const desc = obstacle.type==='mesh'?RAPIER.ColliderDesc.trimesh(new Float32Array(obstacle.vertices),new Uint32Array(obstacle.indices)):obstacle.type==='cylinder'?RAPIER.ColliderDesc.cylinder(obstacle.height/2,obstacle.radius):obstacle.type === 'rock'
      ? RAPIER.ColliderDesc.roundCuboid(obstacle.radius * .72, obstacle.height * .45, obstacle.radius * .72, Math.min(.14,obstacle.radius*.2))
      : RAPIER.ColliderDesc.cuboid(obstacle.width / 2, obstacle.height / 2, obstacle.depth / 2);
    desc.setTranslation(obstacle.x, obstacle.y + obstacle.height / 2, obstacle.z).setRotation(obstacle.quaternion||{x:0,y:Math.sin((obstacle.yaw||0)/2),z:0,w:Math.cos((obstacle.yaw||0)/2)}).setFriction(.8).setRestitution(.03);
    fixed.set(simulation.createCollider(desc).handle, obstacle.id);
  }
  // Physical perimeter. No invisible teleport when leaving a recommended route.
  for (const [x,z,w,d] of [[bounds.minX-1,(bounds.minZ+bounds.maxZ)/2,1,sz/2+2],[bounds.maxX+1,(bounds.minZ+bounds.maxZ)/2,1,sz/2+2],[0,bounds.minZ-1,sx/2+2,1],[0,bounds.maxZ+1,sx/2+2,1]]) simulation.createCollider(RAPIER.ColliderDesc.cuboid(w,80,d).setTranslation(x,30,z));
  const chassis = simulation.createRigidBody(RAPIER.RigidBodyDesc.dynamic().setTranslation(state.x,terrain.height(state.x,state.z)+ORIGIN_HEIGHT+.08,state.z).setLinearDamping(.07).setAngularDamping(.65).setCcdEnabled(true).setAdditionalMassProperties(state.mass,{x:0,y:0,z:0},{x:1700,y:1900,z:600},{x:0,y:0,z:0,w:1}));
  const chassisColliders = [
    simulation.createCollider(RAPIER.ColliderDesc.cuboid(.70,.09,state.wheelbase/2+.35).setTranslation(0,-.38,0).setDensity(0).setFriction(.4),chassis),
    simulation.createCollider(RAPIER.ColliderDesc.roundCuboid(.70,.46,state.wheelbase/2+.31,.06).setTranslation(0,.37,0).setDensity(0).setFriction(.4),chassis)
  ];
  const vehicle = simulation.createVehicleController(chassis);
  vehicle.indexUpAxis = 1;
  vehicle.setIndexForwardAxis = 2;
  const anchors = [[-.7025,state.wheelbase/2],[.7025,state.wheelbase/2],[-.7025,-state.wheelbase/2],[.7025,-state.wheelbase/2]];
  for (const [x,z] of anchors) {
    vehicle.addWheel({x,y:-.13,z},{x:0,y:-1,z:0},{x:-1,y:0,z:0},.28,SPECS.wheelRadius);
    const i=vehicle.numWheels()-1;
    vehicle.setWheelSuspensionStiffness(i,38);
    vehicle.setWheelSuspensionCompression(i,4.2);
    vehicle.setWheelSuspensionRelaxation(i,5.1);
    vehicle.setWheelMaxSuspensionTravel(i,.18);
    vehicle.setWheelMaxSuspensionForce(i,state.mass*9.81*.85);
    vehicle.setWheelFrictionSlip(i,1.3);
    vehicle.setWheelSideFrictionStiffness(i,.8);
  }
  let disposed=false, previousVelocity={x:0,y:0,z:0};
  state.physics='rigid-body';

  function reset(next=state) {
    state=next;
    chassis.setTranslation({x:state.x,y:(terrain.supportHeight?.(state.x,state.z)??terrain.height(state.x,state.z))+ORIGIN_HEIGHT+.08,z:state.z},true);
    chassis.setRotation({x:0,y:Math.sin(state.yaw/2),z:0,w:Math.cos(state.yaw/2)},true);
    chassis.setLinvel({x:0,y:0,z:0},true);chassis.setAngvel({x:0,y:0,z:0},true);
    chassis.resetForces(true);chassis.resetTorques(true);
    state.vx=state.vz=state.speed=state.pitch=state.roll=0;state.physics='rigid-body';
    previousVelocity={x:0,y:0,z:0};
  }
  function stepVehicle(input={},dt=1/60) {
    if(disposed||state.finished)return state;
    dt=clamp(dt,1/240,1/30);simulation.timestep=dt;
    const s=state,q=chassis.rotation(),position=chassis.translation(),velocity=chassis.linvel(),forward=rotate({x:0,y:0,z:1},q),speed=velocity.x*forward.x+velocity.y*forward.y+velocity.z*forward.z,absSpeed=Math.abs(speed);
    s.steer+=(clamp(input.steer||0,-1,1)*.48/(1+absSpeed*.045)-s.steer)*Math.min(1,dt*5);
    s.throttle+=(clamp(input.throttle||0,0,1)-s.throttle)*Math.min(1,dt*4);
    s.handbrake=!!input.handbrake;
    const low=s.range==='4L',drive=!['N','P'].includes(s.gear),direction=s.gear==='R'?-1:1,transfer=1.32*(low?2.002:1),maxGear=maxAutoGear(s);
    const rpmAt=gear=>absSpeed/SPECS.wheelRadius*60/(2*Math.PI)*SPECS.gears[gear-1]*SPECS.finalDrive*transfer;
    s.autoGear=clamp(s.autoGear,1,maxGear);
    if(rpmAt(s.autoGear)>3300+s.throttle*1400&&s.autoGear<maxGear)s.autoGear++;
    else if(rpmAt(s.autoGear)<1300&&s.autoGear>1)s.autoGear--;
    const ratio=(s.gear==='R'?SPECS.reverse:SPECS.gears[s.autoGear-1])*SPECS.finalDrive*transfer;
    s.rpm=clamp(Math.max(850,absSpeed/SPECS.wheelRadius*60/(2*Math.PI)*ratio)+s.throttle*(absSpeed<2?1300:350),850,6200);
    const torque=SPECS.peakTorque*(.65+.35*Math.exp(-(((s.rpm-4000)/2400)**2)));
    const demanded=drive?direction*(s.throttle*torque*ratio*DRIVE_EFFICIENCY[s.range]/SPECS.wheelRadius+(absSpeed<1.2?170:0))*revLimit(absSpeed/SPECS.wheelRadius*60/(2*Math.PI)*ratio):0;
    const surface=terrain.surface(s.x,s.z),mu=grip(surface),slope=Math.asin(clamp(forward.y,-1,1)),brake=clamp(input.brake||0,0,1);
    if(brake>.5&&absSpeed<.05&&drive&&slope*direction>.04)s.hold=2;else s.hold=Math.max(0,s.hold-dt);
    if(s.throttle>.12)s.hold=0;
    if(s.brakeHeat>.99)s.hdc=false;
    if(absSpeed*3.6>=40)s.hdcSuspended=true;else if(absSpeed*3.6<25)s.hdcSuspended=false;
    s.hdcActive=s.hdc&&!s.hdcSuspended&&drive&&!['2H'].includes(s.range)&&s.throttle<.03&&slope*speed<-.02;
    const hdcBrake=s.hdcActive?clamp((absSpeed-(low?5:10)/3.6)*1.5,0,1):0;
    s.brakeHeat=clamp(s.brakeHeat+hdcBrake*dt*.008-dt*.0015,0,1);
    const count=s.range==='2H'?2:4,capacity=mu*s.mass*9.81*(count/4),spin=clamp((Math.abs(demanded)-capacity)/Math.max(capacity,1),0,1);
    s.slip+=(spin-s.slip)*Math.min(1,dt*6);
    const engineBrake=drive&&s.throttle<.04?Math.min(absSpeed*85*transfer,low?1500:650):0;
    for(let i=0;i<4;i++) {
      const location=vehicle.wheelContactPoint(i),localSurface=location?terrain.surface(location.x,location.z):surface,localGrip=grip(localSurface);
      vehicle.setWheelSteering(i,i<2?s.steer:0);
      const stopped=s.parking||s.gear==='P'||s.hold>0;
      // Rapier applies motor force OR braking impulse: residual throttle must not
      // defeat the brakes. H brakes the rear axle, not all four wheels.
      const cutDrive=stopped||brake>.01||hdcBrake>.01||(s.handbrake&&i>=2)||(s.throttle<.03&&absSpeed>1.2);
      vehicle.setWheelEngineForce(i,!cutDrive&&(s.range!=='2H'||i>=2)?clamp(demanded,-capacity,capacity)/count:0);
      vehicle.setWheelFrictionSlip(i,localGrip*2.1);
      vehicle.setWheelSideFrictionStiffness(i,s.handbrake&&i>=2?.34:.8);
      // Brake input is an impulse (N·s), not a force. Parking only locks grounded wheels.
      const wheelBrake=(Math.max(brake,hdcBrake)*s.mass*9.81*.3+(stopped?s.mass*9.81*.35:0)+(s.handbrake&&i>=2?s.mass*9.81*.25:0)+engineBrake/4)*dt;
      vehicle.setWheelBrake(i,wheelBrake);
    }
    // Coupled axle anti-roll response; contacts still come from four independent rays.
    chassis.resetForces(true);
    chassis.resetTorques(true);
    const resistance=absSpeed>.02?(surface==='soft-sand'?.095:surface==='sand'?.055:surface==='loose'?.022:.012)*s.mass*9.81+.48*absSpeed*absSpeed:0;
    if(resistance)chassis.addForce({x:-forward.x*Math.sign(speed)*resistance,y:0,z:-forward.z*Math.sign(speed)*resistance},true);
    for(const axle of [[0,1],[2,3]]){
      const [a,b]=axle,la=vehicle.wheelSuspensionLength(a)||.28,lb=vehicle.wheelSuspensionLength(b)||.28,force=clamp((la-lb)*2200,-850,850);
      for(const [i,direction] of [[a,-1],[b,1]])if(vehicle.wheelIsInContact(i)){const p=vehicle.wheelHardPoint(i);if(p)chassis.addForceAtPoint({x:0,y:force*direction,z:0},p,true);}
    }
    vehicle.updateVehicle(dt,undefined,undefined,c=>!chassisColliders.includes(c)&&c.parent()?.handle!==chassis.handle);
    simulation.step();
    const p=chassis.translation(),r=chassis.rotation(),v=chassis.linvel(),f=rotate({x:0,y:0,z:1},r),right=rotate({x:1,y:0,z:0},r),up=rotate({x:0,y:1,z:0},r);
    s.x=p.x;s.z=p.z;s.y=p.y-ORIGIN_HEIGHT;s.yaw=Math.atan2(f.x,f.z);s.pitch=-Math.asin(clamp(f.y,-1,1));s.roll=Math.atan2(right.y,up.y);s.quaternion={x:r.x,y:r.y,z:r.z,w:r.w};
    s.vx=v.x;s.vz=v.z;s.verticalSpeed=v.y;s.speed=v.x*f.x+v.y*f.y+v.z*f.z;
    const forces=[];s.wheelCenters=[];const down=rotate({x:0,y:-1,z:0},r);
    for(let i=0;i<4;i++){const contact=vehicle.wheelContactPoint(i),anchor=rotate({x:anchors[i][0],y:-.13,z:anchors[i][1]},r);s.wheelContacts[i]=!!vehicle.wheelIsInContact(i);s.wheelHeights[i]=contact?.y??terrain.height(s.x,s.z);s.suspension[i]=vehicle.wheelSuspensionLength(i)??.28;s.wheelRotations[i]=vehicle.wheelRotation(i)??0;forces.push(vehicle.wheelSuspensionForce(i)||0);s.wheelCenters.push({x:p.x+anchor.x+down.x*s.suspension[i],y:p.y+anchor.y+down.y*s.suspension[i],z:p.z+anchor.z+down.z*s.suspension[i]});}
    const total=forces.reduce((a,b)=>a+b,0);s.loads=forces.map(f=>total?f/total:0);s.brakeLSD=low&&s.slip>.1&&s.wheelContacts.some(c=>!c);
    s.impact=Math.max(0,Math.hypot(v.x-previousVelocity.x,v.y-previousVelocity.y,v.z-previousVelocity.z)-.25);previousVelocity={...v};
    s.distance+=Math.hypot(v.x,v.z)*dt;s.elapsed+=dt;s.penalty+=dt*((s.slip>.3?1:0)+(Math.abs(s.roll)>.32?2:0)+(surface==='tarmac'&&s.range!=='2H'?3:0));
    return s;
  }
  reset();
  return {step:stepVehicle,reset,dispose(){if(!disposed){disposed=true;simulation.free();}},snapshot(){return {engine:'Rapier',contacts:[...state.wheelContacts],suspension:[...state.suspension],terrainCells:nx*nz,colliders:simulation.colliders.len()};}};
}
