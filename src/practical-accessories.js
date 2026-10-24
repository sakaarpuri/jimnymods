import * as T from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {upholsteryMaterial,metreFabricUV} from './interior-fabrics.js';
import '../assets/practical-accessories-data.js';

export const PRACTICAL_PARTS=globalThis.JimnyPracticalParts;
function mesh(g,geo,mat,name,x=0,y=0,z=0){const o=new T.Mesh(geo,mat);o.name=name;o.position.set(x,y,z);o.castShadow=o.receiveShadow=true;g.add(o);return o;}
function box(g,w,h,d,x,y,z,m,name,r=.003){return mesh(g,new RoundedBoxGeometry(w,h,d,2,Math.min(r,w/4,h/4,d/4)),m,name,x,y,z);}
function tube(g,points,r,m,name){const p=points.map(v=>new T.Vector3(...v)),path=new T.CurvePath();for(let i=1;i<p.length;i++)path.add(new T.LineCurve3(p[i-1],p[i]));return mesh(g,new T.TubeGeometry(path,points.length*3,r,6,false),m,name);}
function cyl(g,r,h,x,y,z,m,name,axis='y'){const o=mesh(g,new T.CylinderGeometry(r,r,h,24),m,name,x,y,z);if(axis==='x')o.rotation.z=Math.PI/2;if(axis==='z')o.rotation.x=Math.PI/2;return o;}
function owned(g,m){(g.userData.ownedMaterials??=[]).push(m);return m;}
function softPocketWall(g,x,y,z,side,mat){
 const geo=new T.PlaneGeometry(.23,.115,10,6),p=geo.attributes.position;
 for(let i=0;i<p.count;i++){const u=p.getX(i)/.23+.5,v=p.getY(i)/.115+.5;p.setXYZ(i,x+side*(.004*Math.sin(u*Math.PI)*Math.sin(v*Math.PI)+.0015*Math.sin(u*19)*v),y+(v-.5)*.115-.004*Math.sin(u*Math.PI)*v,z+(u-.5)*.23);}
 geo.computeVertexNormals();return mesh(g,geo,mat,'Soft canvas pocket front');
}
function ring(g,r,x,y,z,m,name){return mesh(g,new T.TorusGeometry(r,.0025,6,20),m,name,x,y,z);}
function tray(g,w,d,height,x,y,z,mats,name){box(g,w,.005,d,x,y,z,mats.trim,name+' base');box(g,w-.012,.002,d-.012,x,y+.0035,z,mats.rubber,name+' anti-slip liner');for(const s of [-1,1]){box(g,.005,height,d,x+s*(w/2-.0025),y+height/2,z,mats.trim,name+' side lip');box(g,w,height,.005,x,y+height/2,z+s*(d/2-.0025),mats.trim,name+' end lip');}}
function restraint(g,x,y,z,w,h,d,mats){for(const dx of [-w*.3,w*.3]){box(g,.020,.004,d+.018,x+dx,y+h/2+.004,z,mats.seat,'Restraint webbing');for(const side of [-1,1]){box(g,.020,h+.01,.003,x+dx,y,z+side*(d/2+.008),mats.seat,'Restraint vertical webbing');box(g,.030,.025,.008,x+dx,y+.025,z+side*(d/2+.011),mats.metal,'Restraint cam buckle');}}}
function carryCase(g,x,y,z,w,h,d,mats,{colour=null,name='Carry case'}={}){const mat=colour?owned(g,new T.MeshStandardMaterial({name:'CarryCaseShell',color:colour,roughness:.65})):mats.trim;box(g,w,h,d,x,y,z,mat,name,.012);box(g,w+.004,.018,d+.004,x,y+h/2-.014,z,mats.darkmetal,name+' lid perimeter',.004);for(const s of [-1,1])box(g,.033,.035,.012,x+s*w*.34,y+h*.28,z-d/2-.006,mats.darkmetal,name+' latch');tube(g,[[x-.055,y+h/2,z],[x-.05,y+h/2+.025,z],[x+.05,y+h/2+.025,z],[x+.055,y+h/2,z]],.008,mats.trim,name+' handle');}

// Each assembly uses neutral practical materials and original geometry. Small
// seams, hollow storage openings, latches and hardware are geometry, not photos.
export function practicalAccessory(id,mats,{body='5door',cargoTop=.700,cargoLeft=false}={}){
 const spec=PRACTICAL_PARTS[id];if(!spec||!spec.bodyStyles.includes(body))return null;
 const g=new T.Group();g.name=id;g.userData.finishTarget=id;g.userData.cataloguePart={...spec};
 const shift=body==='3door'?.17:0,cargoZ=-1.445+shift;
 if(id==='exea_cupholder'){
  const x=.57,y=1.165,z=.25-shift;
  box(g,.075,.018,.035,x,y+.065,z+.07,mats.trim,'Cupholder dash bracket');
  box(g,.018,.085,.035,x,y+.025,z+.07,mats.trim,'Cupholder offset arm');
  cyl(g,.047,.006,x,y-.045,z,mats.trim,'Cup cradle floor');
  const rim=mesh(g,new T.TorusGeometry(.049,.006,8,40),mats.trim,'Open bottle retaining ring',x,y+.010,z);rim.rotation.x=Math.PI/2;
  for(const a of [0,2.1,4.2]){box(g,.012,.058,.012,x+Math.cos(a)*.042,y-.017,z+Math.sin(a)*.042,mats.trim,'Bottle retaining finger');}
  tray(g,.085,.022,.026,x,y-.015,z-.064,mats,'Phone slot');
  for(const s of [-1,1])cyl(g,.003,.005,x+s*.025,y+.076,z+.07,mats.metal,'Holder fixing screw');
 }else if(id==='exea_phone_mount'){
  tray(g,.075,.035,.008,-.18,1.275,.44-shift,mats,'Phone mount foot');
  tube(g,[[-.18,1.28,.44-shift],[-.18,1.34,.37-shift]],.008,mats.darkmetal,'Phone ball-joint arm');
  mesh(g,new T.SphereGeometry(.014,12,8),mats.trim,'Adjustable ball joint',-.18,1.34,.37-shift);
  box(g,.061,.101,.012,-.18,1.36,.345-shift,mats.trim,'Phone cradle back',.007);
  for(const s of [-1,1]){box(g,.009,.035,.026,-.18+s*.034,1.36,.333-shift,mats.trim,'Adjustable clamp jaw');box(g,.003,.025,.020,-.18+s*.029,1.36,.333-shift,mats.rubber,'Soft jaw pad');}
  box(g,.050,.009,.030,-.18,1.306,.335-shift,mats.trim,'Phone support foot');
 }else if(id==='armoro_console_organizer'){
  const cloth=owned(g,upholsteryMaterial('canvas','#535747')),thread=owned(g,new T.MeshStandardMaterial({name:'WovenStitch',color:'#989a7e',roughness:1}));cloth.side=T.DoubleSide;
  for(const s of [-1,1]){const x=s*.104,z=.21-shift;
   box(g,.009,.13,.23,x,.846,z,cloth,'Console pocket backing');
   box(g,.058,.005,.23,x+s*.023,.785,z,cloth,'Console pocket floor');
   softPocketWall(g,x+s*.049,.843,z,s,cloth);
   for(const dz of [-.112,.112])box(g,.05,.12,.006,x+s*.022,.846,z+dz,cloth,'Canvas pocket gusset');
   tube(g,[[x+s*.05,.905,z-.115],[x+s*.05,.900,z],[x+s*.05,.905,z+.115]],.002,thread,'Bound pocket opening');
   for(let j=0;j<9;j++)tube(g,[[x+s*.054,.797,z-.09+j*.022],[x+s*.054,.866,z-.09+j*.022]],.0013,mats.seat,'Mesh sleeve vertical');
   for(let j=0;j<5;j++)tube(g,[[x+s*.055,.801+j*.014,z-.09],[x+s*.055,.801+j*.014,z+.09]],.0013,mats.seat,'Mesh sleeve horizontal');
  }
 }else if(id==='exea_utility_bars'){
  for(const s of [-1,1]){const x=s*.566,z=-.78+shift;
   tube(g,[[x,1.59,z-.305],[x,1.59,z+.305]],.009,mats.darkmetal,'Utility bar rail');
   for(const dz of [-.285,.285]){box(g,.035,.024,.035,x+s*.022,1.615,z+dz,mats.trim,'Offset rail foot');cyl(g,.004,.006,x+s*.022,1.630,z+dz,mats.metal,'Bar mounting screw');}
  }
 }else if(id==='exea_roof_net'){
  const z=-.78+shift,w=.99,d=.51,y=1.575;
  const sag=(x,zoff)=>y-.040*(1-(x/(w/2))**2)*(1-(zoff/(d/2))**2);
  for(let i=0;i<=20;i++){const x=-w/2+i*w/20;const p=[];for(let j=0;j<=8;j++){const dz=-d/2+j*d/8;p.push([x,sag(x,dz),z+dz]);}tube(g,p,.0017,mats.seat,'Overhead net warp');}
  for(let i=0;i<=11;i++){const dz=-d/2+i*d/11,p=[];for(let j=0;j<=10;j++){const x=-w/2+j*w/10;p.push([x,sag(x,dz),z+dz]);}tube(g,p,.0017,mats.seat,'Overhead net weft');}
  tube(g,[[-w/2,y,z-d/2],[w/2,y,z-d/2],[w/2,y,z+d/2],[-w/2,y,z+d/2],[-w/2,y,z-d/2]],.006,mats.seat,'Bound net perimeter');
  for(const s of [-1,1])for(const dz of [-d/2,d/2]){tube(g,[[s*w/2,y,z+dz],[s*.566,1.59,z+dz]],.004,mats.seat,'Adjustable corner strap');box(g,.022,.010,.018,s*.53,1.583,z+dz,mats.trim,'Net strap buckle');}
 }else if(id==='exea_switch_extensions'){
  for(const x of [-.095,.095]){const z=.282-shift;box(g,.029,.032,.019,x,.965,z,mats.trim,'Raised window rocker',.004);for(const dy of [-.008,0,.008])box(g,.020,.0015,.002,x,.965+dy,z-.010,mats.darkmetal,'Tactile switch ridge');}
 }else if(id==='maruti_at_mats'){
  for(const s of [-1,1]){const x=s*.365,z=.47;
   tray(g,.42,.36,.022,x,.696,z,mats,'All-weather footwell tray');
   for(let i=0;i<8;i++)box(g,.36,.003,.007,x,.703,z-.14+i*.038,mats.rubber,'Drainage channel');
   box(g,.15,.007,.12,x,.707,z-.06,mats.rubber,'Heel wear pad',.009);
   for(const dx of [-.15,.15])cyl(g,.010,.004,x+dx,.704,z-.15,mats.trim,'Mat retaining clip');
  }
 }else if(id==='armoro_seat_organizer'){
  const cloth=owned(g,upholsteryMaterial('canvas','#70705b')),thread=owned(g,new T.MeshStandardMaterial({name:'WovenStitch',color:'#ada98e',roughness:1}));
  const x=.365,z=-.225-shift;
  const backing=box(g,.365,.40,.012,x,1.09,z,cloth,'Canvas seat-back organiser',.010);backing.rotation.x=-.12;
  for(const dx of [-.14,.14]){box(g,.025,.19,.008,x+dx,1.35,z+.008,mats.seat,'Headrest securing strap');box(g,.035,.025,.012,x+dx,1.37,z-.003,mats.trim,'Strap buckle');}
  // Open-top bottle sleeves and a central soft pocket, facing the rear seats.
  for(const dx of [-.122,.122]){
   box(g,.102,.006,.065,x+dx,.973,z-.038,cloth,'Bottle pocket floor');
   box(g,.102,.16,.006,x+dx,1.05,z-.071,cloth,'Bottle pocket front');
   for(const side of [-1,1])box(g,.006,.16,.065,x+dx+side*.048,1.05,z-.038,cloth,'Bottle pocket gusset');
   tube(g,[[x+dx-.05,1.13,z-.006],[x+dx-.05,1.13,z-.074],[x+dx+.05,1.13,z-.074],[x+dx+.05,1.13,z-.006]],.0022,thread,'Bound open pocket lip');
  }
  box(g,.125,.13,.05,x,1.04,z-.05,cloth,'Central utility pouch');box(g,.12,.025,.006,x,1.108,z-.08,cloth,'Pouch flap');
  box(g,.30,.06,.045,x,.935,z-.035,cloth,'Tissue holder');box(g,.12,.008,.002,x,.944,z-.060,mats.trim,'Tissue slot');
  for(const dx of [-.175,.175])tube(g,[[x+dx,.90,z-.010],[x+dx,1.27,z-.010]],.0011,thread,'Canvas side seam');
 }else if(id==='jimsa_door_pockets'){
  for(const s of [-1,1]){const x=s*.641,z=body==='3door'?-.12:.06;tray(g,.082,.245,.052,x,.951,z,mats,'Door grip pocket');box(g,.010,.08,.014,s*.680,.99,z-.095,mats.darkmetal,'Door screw attachment');cyl(g,.004,.004,s*.672,1.02,z-.095,mats.metal,'Door attachment screw','x');}
 }else if(id==='jimsa_dash_tray'){
  // Above the actual instrument binnacle, never the passenger airbag panel.
  tray(g,.355,.145,.020,-.365,1.299,.415-shift,mats,'Instrument tray');
 }else if(id==='jimsa_console_tray'){
  // Small tray BEHIND the controls, not a box covering the transfer lever.
  tray(g,.135,.120,.023,0,.835,-.15-shift,mats,'Console insert');
  box(g,.004,.018,.105,-.025,.847,-.15-shift,mats.trim,'Console tray divider');
 }else if(id==='jimsa_cargo_pouch_5door'){
  const cloth=owned(g,upholsteryMaterial('canvas','#3c4140')),thread=owned(g,new T.MeshStandardMaterial({name:'WovenStitch',color:'#797c74',roughness:1}));
  box(g,1.10,.012,.37,0,1.075,-1.43,cloth,'Soft cargo cover',.006);
  box(g,.79,.065,.235,0,1.112,-1.46,cloth,'Cargo zipped pouch',.018);
  tube(g,[[-.365,1.147,-1.55],[.365,1.147,-1.55],[.365,1.147,-1.37],[-.365,1.147,-1.37]],.0018,thread,'Cargo pocket zip');box(g,.015,.004,.025,.35,1.15,-1.52,mats.metal,'Zip slider');
  for(const x of [-.57,.57])for(const z of [-1.60,-1.26]){box(g,.045,.004,.030,x,1.075,z,mats.seat,'Cargo securing tab');ring(g,.009,x,1.075,z,mats.metal,'Cargo attachment eye');}
 }else if(id==='jimsa_tiedowns'){
  for(const s of [-1,1]){const o=ring(g,.014,s*.647,1.16,-1.21,mats.metal,'Luggage attachment ring');o.rotation.y=Math.PI/2;cyl(g,.005,.018,s*.666,1.16,-1.21,mats.metal,'Attachment threaded stem','x');}
 }else if(id==='fr_wolfpack'){
  const y=cargoTop+.115;carryCase(g,-.20,y,cargoZ,.510,.230,.400,mats,{name:'Wolf Pack representative box'});
  for(const s of [-1,1])for(const z of [cargoZ-.18,cargoZ+.18])box(g,.025,.155,.013,-.20+s*.23,y,z,mats.darkmetal,'Moulded box stiffener');
  for(const z of [cargoZ-.09,cargoZ+.09])box(g,.44,.006,.018,-.20,y+.119,z,mats.trim,'Nesting lid rib');restraint(g,-.20,y,cargoZ,.510,.230,.400,mats);
 }else if(id==='fr_jerry_holder'){
  // Orientation is can-on-its-narrow-side, not a loose vertical can on a roof.
  const x=.35,z=-.45,y=1.865;
  box(g,.165,.005,.513,x,y,z,mats.darkmetal,'Jerry carrier base');
  for(const s of [-1,1])box(g,.005,.055,.513,x+s*.080,y+.027,z,mats.darkmetal,'Carrier folded side');
  tube(g,[[x-.085,y,z+.22],[x-.085,y+.370,z+.22],[x+.085,y+.370,z+.22],[x+.085,y,z+.22]],.007,mats.darkmetal,'Jerry carrier hold-down strap');
  box(g,.028,.028,.018,x+.093,y+.326,z+.22,mats.metal,'Stainless safety catch');
  for(const z2 of [z-.20,z+.20])for(const s of [-1,1])cyl(g,.005,.008,x+s*.059,y+.007,z2,mats.metal,'Carrier mounting bolt');
 }else if(id==='fr_fuelcan20'){
  const can=new T.Group();g.add(can);can.position.set(.37,2.047,-.68);can.rotation.set(Math.PI/2,Math.PI/2,0);
  // 350 x 165 x 460 overall laid on the narrower long side: three handles,
  // stamped X ribs, perimeter seam, bayonet cap and retaining pin.
  box(can,.350,.405,.165,0,.2025,-.020,mats.darkmetal,'Fuel can steel shell',.018);
  box(can,.354,.004,.169,0,.05,-.020,mats.darkmetal,'Fuel can base seam',.002);
  for(const s of [-1,1]){tube(can,[[-.125,.09,s*.080-.020],[.125,.33,s*.080-.020]],.003,mats.darkmetal,'Stamped reinforcement diagonal');tube(can,[[.125,.09,s*.080-.020],[-.125,.33,s*.080-.020]],.003,mats.darkmetal,'Stamped reinforcement diagonal');}
  for(const z of [-.071,-.020,.031])tube(can,[[-.05,.398,z],[-.03,.450,z],[.110,.450,z],[.13,.398,z]],.010,mats.darkmetal,'Triple carry handle');
  cyl(can,.034,.022,-.115,.419,-.020,mats.trim,'Fuel bayonet cap');tube(can,[[-.15,.430,-.02],[-.15,.441,.005],[-.12,.441,.005]],.002,mats.metal,'Cap locking pin');
 }else if(id==='fr_watercan20'){
  const x=.29,y=cargoTop+.2375,z=cargoZ+.08,white=owned(g,new T.MeshStandardMaterial({name:'WaterContainerPlastic',color:'#b9c0b3',roughness:.61}));
  box(g,.360,.415,.180,x,y-.030,z,white,'Water-only HDPE tank',.022);
  for(const dx of [-.14,.14])box(g,.012,.27,.012,x+dx,y-.02,z-.095,white,'Water tank reinforcing rib');
  tube(g,[[x-.07,y+.17,z],[x-.055,y+.220,z],[x+.075,y+.220,z],[x+.09,y+.17,z]],.014,white,'Water can carry handle');cyl(g,.039,.026,x-.105,y+.190,z,mats.trim,'Water fill cap');
  cyl(g,.017,.030,x,y-.15,z-.105,mats.trim,'Water tap body','z');box(g,.048,.010,.014,x,y-.127,z-.115,mats.trim,'Water tap lever');cyl(g,.009,.025,x,y-.18,z-.115,mats.trim,'Water spout');
  restraint(g,x,y-.030,z,.360,.415,.180,mats);
 }else if(id==='arb_airkit'){
  const x=cargoLeft?-.27:.28,y=cargoTop+.104,z=cargoZ+.04;carryCase(g,x,y,z,.440,.208,.238,mats,{name:'Portable compressor case'});restraint(g,x,y,z,.440,.208,.238,mats);
 }else if(id==='arb_repairkit'){
  const x=cargoLeft?-.18:.37,y=cargoTop+.035,z=cargoZ-.13;carryCase(g,x,y,z,.245,.07,.135,mats,{colour:'#b48135',name:'Tyre repair tool case'});restraint(g,x,y,z,.245,.07,.135,mats);
 }else if(id==='kap_fire'){
  const x=.365,y=.758,z=.37-shift;
  box(g,.33,.004,.065,x,y-.035,z,mats.darkmetal,'Passenger seat-rail bracket');for(const dx of [-.145,.145])cyl(g,.008,.009,x+dx,y-.03,z,mats.metal,'Seat-rail bracket fixing');
  cyl(g,.042,.225,x,y+.007,z,mats.red,'Optional 1 kg extinguisher','x');for(const dx of [-.065,.065]){const band=ring(g,.044,x+dx,y+.007,z,mats.metal,'Metal retaining cage');band.rotation.y=Math.PI/2;}
  cyl(g,.013,.035,x-.13,y+.007,z,mats.metal,'Extinguisher valve','x');box(g,.045,.010,.024,x-.125,y+.035,z,mats.trim,'Release handle');cyl(g,.011,.006,x-.124,y+.015,z-.021,mats.white,'Pressure indicator','z');
 }
 return metreFabricUV(g);
}

export function addPracticalAccessories({parts,body,mats,rig,show}){
 const raised=parts.has('touring')?.96:parts.has('exploresetups_drawer_5door')?.955:parts.has('drawer')?.922:.700;
 const rack=body==='5door'&&parts.has('fr_slimline2');
 for(const [id,spec]of Object.entries(PRACTICAL_PARTS)){
  if(!spec.bodyStyles.includes(body))continue;
  if(spec.requires?.some(dep=>!parts.has(dep))||spec.incompatible?.some(dep=>parts.has(dep)))continue;
  if(['fr_jerry_holder','fr_fuelcan20'].includes(id)&&(!rack||parts.has('rtt')||parts.has('boards')))continue;
  if(id==='fr_fuelcan20'&&(!parts.has('fr_jerry_holder')||parts.has('fr_watercan20')))continue;
  if(id==='jimsa_cargo_pouch_5door'&&['touring','shelf','mod_halfmolly_5door','molle','fr_watercan20'].some(p=>parts.has(p)))continue;
  if(id==='fr_watercan20'&&['touring','drawer','exploresetups_drawer_5door','fr_wolfpack'].some(p=>parts.has(p)))continue;
  // The small repair case occupies the top of a selected compressor case.
  const cargoTop=id==='arb_repairkit'&&parts.has('arb_airkit')?raised+.208:raised;
  show([id],()=>{const model=practicalAccessory(id,mats,{body,cargoTop,cargoLeft:parts.has('fr_watercan20')});if(model)rig.add(model);});
 }
}
