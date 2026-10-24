import * as T from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';

export const GEAR_STOPS=Object.freeze({P:.35,R:.31,N:.27,D:.23,'2':.19,L:.15});
export const RANGE_STOPS=Object.freeze({'2H':.13,'4H':.085,'4L':.025});
export function instrumentAngle(value,max){return (-40+Math.min(1,Math.max(0,value/max))*260)*Math.PI/180;}
export function cabinPose(state){return {wheel:-(state.steer||0)*14,gearZ:GEAR_STOPS[state.gear]??GEAR_STOPS.N,rangeZ:RANGE_STOPS[state.range]??RANGE_STOPS['2H'],parking:state.parking?-.52:0,hdc:state.hdcActive?'ACTIVE':state.hdc?'READY':'OFF',tachometer:instrumentAngle(state.rpm||0,7000),speedometer:instrumentAngle(Math.abs(state.speed||0)*3.6,180)};}

// The GLB batches cabin surfaces by material. Separate only the authored wheel
// and levers, in decoded vehicle coordinates, without changing shared assets.
export function separateCabinControls(cabin,parent,body){
  const offset=body==='3door'?-.17:0,wheel=new T.Group();wheel.name='AnimatedSteeringWheel';wheel.position.set(-.38,1.16,.26+offset);parent.add(wheel);cabin.updateWorldMatrix(true,true);
  cabin.traverse(o=>{if(!o.isMesh)return;const original=o.geometry,src=original.index?original.toNonIndexed():original.clone(),geo=new T.BufferGeometry();
    for(const [name,a] of Object.entries(src.attributes)){const values=[];for(let i=0;i<a.count;i++)for(let j=0;j<a.itemSize;j++)values.push(a.getComponent(i,j));geo.setAttribute(name,new T.Float32BufferAttribute(values,a.itemSize));}src.dispose();geo.applyMatrix4(o.matrixWorld);
    const p=geo.attributes.position,keep=[],turn=[];
    for(let i=0;i<p.count;i+=3){const x=(p.getX(i)+p.getX(i+1)+p.getX(i+2))/3,y=(p.getY(i)+p.getY(i+1)+p.getY(i+2))/3,z=(p.getZ(i)+p.getZ(i+1)+p.getZ(i+2))/3-offset;
      const isWheel=Math.hypot(x+.38,y-1.16)<.182&&z>.218&&z<.282;
      const isLever=y>.865&&y<1.055&&((Math.abs(x)<.032&&Math.abs(z-.26)<.045)||(Math.abs(x+.07)<.032&&Math.abs(z-.15)<.045));
      const isNeedle=o.material.name==='RearLampRed'&&y>1.18&&y<1.27&&z>.29&&z<.32;
      (isWheel?turn:isLever||isNeedle?[]:keep).push(i,i+1,i+2);
    }
    function subset(indices){const g=new T.BufferGeometry();for(const [name,a]of Object.entries(geo.attributes)){const values=[];for(const i of indices)for(let j=0;j<a.itemSize;j++)values.push(a.getComponent(i,j));g.setAttribute(name,new T.Float32BufferAttribute(values,a.itemSize));}return g;}
    if(turn.length){
      // Baking a mirrored RHD parent removes its negative determinant. Restore
      // triangle winding as well as transforming normals, or the wheel is inside-out.
      if(o.matrixWorld.determinant()<0)for(let i=0;i<turn.length;i+=3)[turn[i+1],turn[i+2]]=[turn[i+2],turn[i+1]];
      const g=subset(turn);g.translate(.38,-1.16,-.26-offset);const m=new T.Mesh(g,o.material);m.castShadow=true;wheel.add(m);
    }
    o.geometry=subset(keep).applyMatrix4(o.matrixWorld.clone().invert());original.dispose();geo.dispose();
  });
  // Fixed column rake, with steering rotation around its own local axis.
  // A vertical wheel was read as a flattened oval from the centre-camera view.
  wheel.rotation.x=.27;
  return wheel;
}

export function createCabinControls(parent,wheel,body){
  const root=new T.Group();root.name='LiveCabinControls';root.position.z=body==='3door'?-.17:0;parent.add(root);
  const trim=new T.MeshStandardMaterial({color:'#222a2b',roughness:.62}),metal=new T.MeshStandardMaterial({color:'#7b8383',roughness:.28,metalness:.7});
  function box(w,h,d,x,y,z,m=trim){const mesh=new T.Mesh(new RoundedBoxGeometry(w,h,d,2,.008),m);mesh.position.set(x,y,z);mesh.castShadow=true;root.add(mesh);return mesh;}
  function lever(x,y,z,height){const group=new T.Group();group.position.set(x,y,z);root.add(group);const stem=new T.Mesh(new T.CylinderGeometry(.006,.008,height,20),metal);stem.position.y=height/2;group.add(stem);const knob=new T.Mesh(new RoundedBoxGeometry(.051,.043,.051,5,.015),trim);knob.position.y=height;knob.rotation.x=.12;group.add(knob);return group;}
  const recess=new T.MeshStandardMaterial({color:'#0a1012',roughness:.94});
  box(.14,.012,.29,.015,.863,.25);box(.018,.002,.235,.028,.871,.25,recess);
  box(.07,.012,.18,-.095,.865,.085);box(.012,.002,.14,-.095,.873,.085,recess);
  const gear=lever(.028,.874,GEAR_STOPS.N,.105),range=lever(-.095,.874,RANGE_STOPS['2H'],.073);
  const needles=[-.30,-.46].map(x=>{const pivot=new T.Group();pivot.position.set(x,1.223,.304);root.add(pivot);const needle=new T.Mesh(new T.BoxGeometry(.044,.0025,.0015),new T.MeshBasicMaterial({color:'#e87856'}));needle.position.x=.021;pivot.add(needle);return pivot;});
  const parking=new T.Group();parking.position.set(.105,.80,-.075);root.add(parking);const handle=new T.Mesh(new RoundedBoxGeometry(.027,.032,.16,2,.008),trim);handle.position.z=.065;parking.add(handle);
  const textures=[];
  function label(text,w,h,x,y,z,top=false){const canvas=document.createElement('canvas');canvas.width=512;canvas.height=256;const ctx=canvas.getContext('2d');ctx.fillStyle='#20292a';ctx.fillRect(0,0,512,256);ctx.fillStyle='#f1eee0';ctx.textAlign='center';ctx.textBaseline='middle';ctx.font=`600 ${text.length>1?160:210}px sans-serif`;ctx.fillText(text,256,128,480);const texture=new T.CanvasTexture(canvas);texture.colorSpace=T.SRGBColorSpace;texture.anisotropy=4;textures.push(texture);const plane=new T.Mesh(new T.PlaneGeometry(w,h),new T.MeshBasicMaterial({map:texture}));plane.position.set(x,y,z);plane.rotation.set(top?-Math.PI/2:0,top?0:Math.PI,top?Math.PI:0);root.add(plane);return {canvas,ctx,texture};}
  for(const [name,z]of Object.entries(GEAR_STOPS))label(name,.014,.012,-.017,.873,z,true);
  for(const [name,z]of Object.entries(RANGE_STOPS))label(name,.024,.012,-.127,.875,z,true);
  // Original representative UI artwork, not a photograph pasted on the dash.
  // Shared by garage and game, so the same cabin never changes level of detail.
  function panel(w,h,x,y,z,draw){
    const canvas=document.createElement('canvas');canvas.width=1024;canvas.height=576;
    const ctx=canvas.getContext('2d');draw(ctx,1024,576);
    const texture=new T.CanvasTexture(canvas);texture.colorSpace=T.SRGBColorSpace;texture.anisotropy=8;textures.push(texture);
    const material=new T.MeshBasicMaterial({map:texture,toneMapped:false});
    const mesh=new T.Mesh(new T.PlaneGeometry(w,h),material);mesh.position.set(x,y,z);mesh.rotation.y=Math.PI;root.add(mesh);
  }
  panel(.198,.1115,0,1.232,.340,(c,w,h)=>{
    c.fillStyle='#0c1115';c.fillRect(0,0,w,h);c.fillStyle='#d7dcd9';c.font='24px sans-serif';c.fillText('FM  •  09:41',34,43);c.textAlign='right';c.fillText('CONNECTED',w-34,43);c.textAlign='left';
    const cards=[['Audio','FM  91.1','#a86e36'],['Phone','Connect device','#447268'],['Navigation','Explore a new route','#405d75'],['Settings','Vehicle & display','#6c6252']];
    cards.forEach(([title,sub,colour],i)=>{const x=26+(i%2)*498,y=78+Math.floor(i/2)*235;c.strokeStyle=colour;c.lineWidth=3;c.strokeRect(x,y,474,211);c.fillStyle=colour;c.fillRect(x,y,8,211);c.fillStyle='#d9ddd9';c.font='34px sans-serif';c.fillText(title,x+28,y+64);c.fillStyle='#a5b0b1';c.font='25px sans-serif';c.fillText(sub,x+28,y+117);c.beginPath();c.arc(x+420,y+163,16,0,Math.PI*2);c.stroke();});
  });
  for(const [x,text]of [[-.083,'AUTO'],[0,'22.0'],[.083,'A/C']])panel(.031,.024,x,1.039,.275,(c,w,h)=>{
    c.fillStyle='#101315';c.fillRect(0,0,w,h);c.fillStyle='#bd7551';c.textAlign='center';c.textBaseline='middle';c.font=`500 ${text==='22.0'?235:180}px sans-serif`;c.fillText(text,w/2,h/2,w*.85);
  });
  for(const [x,text]of [[-.095,'12V'],[-.047,'USB'],[0,'↘'],[.047,'ESP'],[.095,'OFF']])panel(.021,.013,x,.965,.299,(c,w,h)=>{
    c.fillStyle='#171c1e';c.fillRect(0,0,w,h);c.fillStyle='#aeb6b3';c.font='190px sans-serif';c.textAlign='center';c.textBaseline='middle';c.fillText(text,w/2,h/2,w*.88);
  });
  // The real cluster uses a compact monochrome LCD between the two dials.
  // Driving instructions remain in the HUD, not on an invented giant display.
  const display=label('',.044,.047,-.38,1.216,.299),parkingLight=new T.Mesh(new T.SphereGeometry(.0035,8,6),new T.MeshBasicMaterial({color:'#dc6041'}));parkingLight.position.set(-.48,1.255,.305);root.add(parkingLight);
  const pedals=[[-.40,.073],[-.26,.045]].map(([x,w])=>{const pivot=new T.Group();pivot.name=x<-.3?'BrakePedal':'AcceleratorPedal';pivot.position.set(x,.80,.64);root.add(pivot);const pad=new T.Mesh(new RoundedBoxGeometry(w,.09,.018,2,.004),trim);pad.position.set(0,-.052,-.018);pivot.add(pad);for(let i=0;i<4;i++){const rib=new T.Mesh(new T.BoxGeometry(w*.82,.003,.003),metal);rib.position.set(0,-.08+i*.018,-.029);pivot.add(rib);}return pivot;});
  for(const [x,max,unit]of [[-.30,7,'x1000'],[-.46,180,'km/h']]){
    // One continuous face avoids separate bright rectangular number plaques.
    // Its sweep matches the animated needle, including the zero-speed stop.
    const canvas=document.createElement('canvas');canvas.width=canvas.height=512;
    const ctx=canvas.getContext('2d');ctx.fillStyle='#151a1c';ctx.beginPath();ctx.arc(256,256,256,0,Math.PI*2);ctx.fill();
    const steps=max===7?7:9,point=(t,r)=>{const a=instrumentAngle(t,1);return [256-Math.cos(a)*r,256-Math.sin(a)*r];};
    for(let i=0;i<=steps*5;i++){
      const major=i%5===0,t=i/(steps*5),a=point(t,major?207:219),b=point(t,235);
      ctx.strokeStyle=max===7&&t>5.8/7?'#b85c39':'#c8c4b8';ctx.lineWidth=major?4:2;ctx.beginPath();ctx.moveTo(...a);ctx.lineTo(...b);ctx.stroke();
      if(major){ctx.fillStyle='#cda37c';ctx.font='500 31px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(String(Math.round(t*max)),...point(t,170));}
    }
    ctx.fillStyle='#a7aca7';ctx.font='20px sans-serif';ctx.textAlign='center';ctx.fillText(unit,256,356);
    const texture=new T.CanvasTexture(canvas);texture.colorSpace=T.SRGBColorSpace;texture.anisotropy=4;textures.push(texture);
    const face=new T.Mesh(new T.CircleGeometry(.053,64),new T.MeshBasicMaterial({map:texture}));face.position.set(x,1.223,.306);face.rotation.y=Math.PI;root.add(face);
  }
  let last='';
  return {setVisible(value){root.visible=!!value;},update(state){const pose=cabinPose(state);wheel.rotation.z=pose.wheel;gear.position.z=pose.gearZ;range.position.z=pose.rangeZ;parking.rotation.x=pose.parking;parkingLight.visible=!!state.parking;needles[0].rotation.z=pose.tachometer;needles[1].rotation.z=pose.speedometer;
    pedals[0].rotation.x=-(state.braking||state.brakeInput||0)*.24;pedals[1].rotation.x=-(state.throttle||0)*.22;
    const message=`${state.gear} ${state.range}`,status=`${((state.distance||0)/1000).toFixed(1)} km`;
    if(message+status!==last){last=message+status;const {ctx,texture}=display;ctx.fillStyle='#a6b4a2';ctx.fillRect(0,0,512,256);ctx.fillStyle='#27312b';ctx.font='600 78px monospace';ctx.fillText(message,256,87,480);ctx.font='52px monospace';ctx.fillText(status,256,180,480);texture.needsUpdate=true;}
    return pose;
  },dispose(){
    root.removeFromParent();const geometries=new Set(),materials=new Set();root.traverse(o=>{if(o.geometry)geometries.add(o.geometry);if(o.material)materials.add(o.material);});
    geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());textures.forEach(t=>t.dispose());
  },snapshot(){return {steeringWheel:wheel.rotation.z,gearZ:gear.position.z,rangeZ:range.position.z,parking:parking.rotation.x,brakePedal:pedals[0].rotation.x,acceleratorPedal:pedals[1].rotation.x};}};
}
