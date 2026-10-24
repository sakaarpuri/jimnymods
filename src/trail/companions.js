import * as T from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
// Original parked support SUVs: reference-informed construction, no brand/model claim.
export function companionVehicle(long=false){
  const root=new T.Group();root.name=long?'Long-wheelbase support SUV':'Short-wheelbase support SUV';
  const material=(color,roughness=.65,metalness=0)=>new T.MeshStandardMaterial({color,roughness,metalness});
  const paint=material(long?'#b6a287':'#815345',.28,.08),trim=material('#262a2d',.8),glass=material('#26343b',.17,.25),rubber=material('#232426',.96),metal=material('#858a8d',.28,.8),lamp=material('#d7dedb',.16,.5),red=material('#8a251e',.25),black=material('#161b20',.9);
  const add=(geometry,mat,x=0,y=0,z=0)=>{const mesh=new T.Mesh(geometry,mat);mesh.position.set(x,y,z);mesh.castShadow=mesh.receiveShadow=true;root.add(mesh);return mesh;};
  const box=(w,h,d,x,y,z,mat=trim,r=.025)=>add(new RoundedBoxGeometry(w,h,d,2,Math.min(r,w/4,h/4,d/4)),mat,x,y,z);
  const tube=(points,r=.012,mat=trim)=>add(new T.TubeGeometry(new T.CatmullRomCurve3(points.map(p=>new T.Vector3(...p))),24,r,6,false),mat);
  const length=long?4.45:3.95,wb=long?2.7:2.35,front=length/2,back=-length/2;
  box(1.57,.15,length-.4,0,.46,0,black);box(1.74,.42,length-.08,0,.91,0,paint,.065);
  const hood=box(1.68,.115,1.05,0,1.17,front-.57,paint,.045);hood.rotation.x=.025;
  // Tapered upper body is hollow: separate glazing and pillars, not a solid cabin box.
  const roofFront=front-1.25,roofRear=back+.11,roofDepth=roofFront-roofRear;
  box(1.58,.08,roofDepth,0,1.88,(roofFront+roofRear)/2,paint,.035);
  for(const side of [-1,1]){
    const x=side*.80;
    tube([[x,1.16,front-.98],[side*.75,1.84,roofFront]],.035,paint);
    tube([[side*.80,1.13,back+.08],[side*.75,1.84,roofRear]],.04,paint);
    const window=box(.024,.62,roofDepth-.12,side*.779,1.51,(roofFront+roofRear)/2,glass,.015);window.rotation.z=-side*.045;
    for(const z of long?[.2,-.74]:[-.35])box(.055,.70,.065,side*.804,1.51,z,paint,.012);
    for(const z of long?[.68,-.32]:[.45]){
      box(.018,.04,.15,side*.893,1.045,z,trim,.008);
      const rear=z-(long?.72:1.08);tube([[side*.876,1.13,rear],[side*.876,.70,rear],[side*.876,.67,z+.33]],.004,black);
    }
    box(.17,.048,wb-.45,side*.91,.49,0,trim);
    const mirror=box(.21,.14,.12,side*.985,1.36,front-1.1,trim,.035);box(.18,.105,.009,mirror.position.x,mirror.position.y,mirror.position.z-.064,glass,.018);
    for(const z of [-wb/2,wb/2]){
      // Wheel openings mask the dark wheel-well volume, with moulded curved arches.
      const archPoints=[];for(let i=0;i<=24;i++){const a=i*Math.PI/24;archPoints.push([side*.905,.45+Math.sin(a)*.47,z+Math.cos(a)*.47]);}tube(archPoints,.065,trim);
      const profile=[[.22,-.13],[.34,-.14],[.41,-.095],[.423,-.05],[.423,.05],[.41,.095],[.34,.14],[.22,.13]].map(p=>new T.Vector2(...p));
      const tyre=add(new T.LatheGeometry(profile,48),rubber,side*.90,.423,z);tyre.rotation.z=Math.PI/2;
      const rim=add(new T.CylinderGeometry(.22,.22,.23,32),black,side*.90,.423,z);rim.rotation.z=Math.PI/2;
      for(let i=0;i<6;i++){const angle=i*Math.PI/3;const spoke=box(.025,.17,.032,side*1.042,.423+Math.cos(angle)*.105,z+Math.sin(angle)*.105,metal,.007);spoke.rotation.x=angle;}
      const hub=add(new T.CylinderGeometry(.055,.055,.025,24),metal,side*1.056,.423,z);hub.rotation.z=Math.PI/2;
      for(let i=0;i<40;i++){const a=i*Math.PI/20;const tread=box(.24,.009,.037,side*.90,.423+Math.cos(a)*.42,z+Math.sin(a)*.42,rubber,.002);tread.rotation.x=-a;}
    }
  }
  const wind=box(1.43,.64,.022,0,1.51,front-1.095,glass,.02);wind.rotation.x=-.35;
  box(1.43,.60,.022,0,1.51,back+.085,glass,.018);
  for(const x of [-.38,.38])tube([[x-.22,1.212,front-1.012],[x+.20,1.215,front-1.012]],.009,trim);
  box(1.85,.23,.26,0,.63,front+.015,trim,.045);box(1.85,.23,.23,0,.63,back-.03,trim,.045);
  box(.85,.30,.025,0,1.00,front+.045,black,.022);
  for(let i=-4;i<=4;i++)box(.055,.25,.018,i*.086,1.00,front+.065,metal,.009);
  for(const side of [-1,1]){
    const casing=add(new T.CylinderGeometry(.125,.125,.05,40),trim,side*.62,1.01,front+.055);casing.rotation.x=Math.PI/2;
    const optic=add(new T.CylinderGeometry(.104,.104,.012,40),lamp,side*.62,1.01,front+.086);optic.rotation.x=Math.PI/2;
    box(.13,.25,.035,side*.69,.94,back-.055,red,.02);box(.12,.06,.036,side*.69,.96,back-.074,lamp,.008);
  }
  box(.36,.11,.015,0,.65,front+.15,black,.005);
  const spare=add(new T.CylinderGeometry(.42,.42,.22,48),rubber,0,1.05,back-.19);spare.rotation.x=Math.PI/2;
  const cover=add(new T.CylinderGeometry(.27,.27,.015,48),trim,0,1.05,back-.31);cover.rotation.x=Math.PI/2;
  // Merge by surface to keep parked vehicles inexpensive on a phone.
  root.updateMatrixWorld(true);const groups=new Map();for(const child of root.children){const key=child.material;if(!groups.has(key))groups.set(key,[]);const geometry=child.geometry.index?child.geometry.toNonIndexed():child.geometry.clone();geometry.applyMatrix4(child.matrix);groups.get(key).push(geometry);child.geometry.dispose();}
  root.clear();for(const [mat,geometries] of groups){const geometry=mergeGeometries(geometries,false);geometries.forEach(g=>g.dispose());if(geometry)add(geometry,mat);}
  return root;
}
