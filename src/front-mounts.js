// Shared Garage/Drive attachment datum for the rebuilt bonnet and front face.
// Translate complete accessories: never warp round lamps or their normals.
export const FRONT_FACE_DROP=.105;
export const FRONT_FACE_SETBACK=.080;
export const STOCK_FASCIA_DROP=.060;
export const STOCK_HEADLAMP_Y=.977-STOCK_FASCIA_DROP;
export const BONNET_POSE_ANGLE=3.5*Math.PI/180;
export const BONNET_NOSE_SETBACK=.150;
const front=new Set(['bull','autostylenn_bumper_v1','winch','headlamps',
  'bonnetguard','lamp_round_spot','lamp_round_flood','lamp_fog','lamp_dual','lamp_compact_bar']);
// Five-door R33/34 uses a new front datum. Keep the existing SWB placement.
export function frontLampMount(body='5door'){
 return body==='3door'?{y:STOCK_HEADLAMP_Y,setback:FRONT_FACE_SETBACK}:{y:.955,setback:.130};
}
export function alignFrontAccessories(rig,body='3door'){
  for(const part of rig.children){
    if(part.userData.frontMountAligned)continue;
    const id=part.userData.finishTarget;
    let drop=id==='headlamps'?STOCK_FASCIA_DROP:front.has(id)?FRONT_FACE_DROP:['pods','lamp_cube'].includes(id)?.021:0;
    let setback=id==='bonnetguard'?BONNET_NOSE_SETBACK:id==='headlamps'?FRONT_FACE_SETBACK:['pods','lamp_cube'].includes(id)?.016:0;
    if(body==='5door'){
      if(id==='headlamps'){drop=.022;setback=.130;}
      else if(id==='bonnetguard'){drop=.008;setback=.005;}
      else if(front.has(id)){drop=.015;setback=.160;}
      // These garnish meshes fit the stock bumper, which moved 100 mm back.
      else if(['msga_bumper_garnish','msga_tread_skid','suzuki_bumper_under'].includes(id)){drop=.025;setback=.100;}
    }
    if(!drop&&!setback)continue;
    part.position.y-=drop;part.position.z-=setback;
    if(id==='bonnetguard'&&body==='3door'){
      const dy=part.position.y-1.135,dz=part.position.z-.69;
      const c=Math.cos(BONNET_POSE_ANGLE),s=Math.sin(BONNET_POSE_ANGLE);
      part.position.y=1.135+dy*c+dz*s;
      part.position.z=.69+dz*c-dy*s;
      part.rotation.x-=BONNET_POSE_ANGLE;
    }
    part.userData.frontMountAligned=true;
  }
}
