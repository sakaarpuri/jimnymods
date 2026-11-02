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
// The short body's rigid front and its cowl have different longitudinal datums.
export const SHORT_BODY_FRONT_OFFSET=.065770106;
export function frontLampMount(body='5door'){
 return {y:.955,setback:.130+(body==='3door'?SHORT_BODY_FRONT_OFFSET:0)};
}
export function alignFrontAccessories(rig,body='3door'){
  for(const part of rig.children){
    if(part.userData.frontMountAligned)continue;
    const id=part.userData.finishTarget;
    const pods=['pods','lamp_cube'].includes(id);
    const garnish=['msga_bumper_garnish','msga_tread_skid','suzuki_bumper_under'].includes(id);
    let drop=id==='headlamps'?.022:id==='bonnetguard'?.008:front.has(id)?.015:garnish?.025:pods?.021:0;
    let setback=id==='headlamps'?.130:id==='bonnetguard'?.005:front.has(id)?.160:garnish?.100:pods?.016:0;
    // Headlamp groups already include this offset during assembly.
    if(body==='3door'&&id!=='headlamps'&&(front.has(id)||garnish||pods))setback+=SHORT_BODY_FRONT_OFFSET;
    if(!drop&&!setback)continue;
    part.position.y-=drop;part.position.z-=setback;
    part.userData.frontMountAligned=true;
  }
}
