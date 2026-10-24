import * as T from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {upholsteryMaterial,metreFabricUV} from './interior-fabrics.js';

// Original representative models from published dimensions and product photos.
// These are not manufacturer CAD, certified clearances or installation advice.
export const INTERIOR_STORAGE_PARTS=Object.freeze({
 mod_reardoor_molle:{sourceURL:'https://www.mod.equipment/products/molly',bodyStyles:['3door','5door'],panelWidth:.300,panelHeight:.2675,cutout:.025,requires:'Screws into rear-door plastic trim; check vehicle-specific installation.'},
 mod_halfmolly_5door:{sourceURL:'https://www.mod.equipment/products/half-molly-set-jimny-4-xl',bodyStyles:['5door'],panelWidth:.235,panelHeight:.200,requires:'Existing lower M6 points plus upper screws into plastic window trim.'},
 exploresetups_drawer_5door:{sourceURL:'https://exploresetups.com/products/jimny-xl-5-door-drawer-system',bodyStyles:['5door'],width:1.110,depth:.460,height:.250,requires:'Matching Jimny XL false floor, sold separately; no sleeping platform shown.'}
});
function add(g,geometry,material,name,position=[0,0,0]){const m=new T.Mesh(geometry,material);m.name=name;m.position.set(...position);m.castShadow=m.receiveShadow=true;g.add(m);return m;}
function box(g,w,h,d,x,y,z,mat,name,r=.002){return add(g,new RoundedBoxGeometry(w,h,d,2,Math.min(r,w/3,h/3,d/3)),mat,name,[x,y,z]);}
function path(x,y,w,h,r=.003){const p=new T.Path(),l=x-w/2,b=y-h/2;p.moveTo(l+r,b);p.lineTo(l+w-r,b);p.quadraticCurveTo(l+w,b,l+w,b+r);p.lineTo(l+w,b+h-r);p.quadraticCurveTo(l+w,b+h,l+w-r,b+h);p.lineTo(l+r,b+h);p.quadraticCurveTo(l,b+h,l,b+h-r);p.lineTo(l,b+r);p.quadraticCurveTo(l,b,l+r,b);return p;}
function panel(w,h,cols,rows){const shape=new T.Shape(path(0,0,w,h,.008).getPoints(8));for(let col=0;col<cols;col++)for(let row=0;row<rows;row++)shape.holes.push(path((col-(cols-1)/2)*.038,(row-(rows-1)/2)*.037,.025,.025));return new T.ExtrudeGeometry(shape,{depth:.002,bevelEnabled:true,bevelSize:.00045,bevelThickness:.00045,bevelSegments:1,curveSegments:3});}
function bolt(g,x,y,z,mat){const m=add(g,new T.CylinderGeometry(.0045,.0045,.003,6),mat,'Panel screw',[x,y,z]);m.rotation.x=Math.PI/2;return m;}
function group(id){const g=new T.Group();g.name=id;g.userData.cataloguePart={id,...INTERIOR_STORAGE_PARTS[id],previewKind:'representative',disclosure:'Original photo/dimension-guided approximation, not manufacturer CAD or certified fitment.'};return g;}
export function rearDoorMolle(mats,body='5door'){
 const g=group('mod_reardoor_molle'),rear=-1.669+(body==='3door'?.17:0);
 for(const x of [-.172,.172]){
  const p=add(g,panel(.300,.2675,7,6),mats.darkmetal,'Rear-door perforated panel',[x,.955,rear+.012]);p.userData.publishedSize=[.300,.2675];
  for(const dx of [-.1375,.1375])for(const dy of [-.114,.114]){box(g,.014,.014,.012,x+dx,.955+dy,rear+.005,mats.rubber,'Rear-door panel spacer');bolt(g,x+dx,.955+dy,rear+.017,mats.metal);}
 }return g;
}
export function halfMollyPockets(mats){
 const g=group('mod_halfmolly_5door');
 for(const side of [-1,1]){
  const pocket=new T.Group();pocket.position.set(side*.651,1.24,-1.36);pocket.rotation.y=side*Math.PI/2;g.add(pocket);
  const p=add(pocket,panel(.235,.200,5,4),mats.darkmetal,'Rear-window pocket panel');p.userData.publishedSize=[.235,.200];
  box(pocket,.235,.003,.042,0,-.098,.020,mats.darkmetal,'Folded pocket base');
  for(const x of [-.112,.112]){
   box(pocket,.012,.20,.042,x,0,.020,mats.darkmetal,'Pocket side return');
   bolt(pocket,x,.085,.006,mats.metal);
   const eye=add(pocket,new T.TorusGeometry(.009,.002,6,18),mats.metal,'Lower M6 lashing eye',[x,-.087,.012]);eye.rotation.x=.30;
  }
 }return g;
}
export function xlDrawerSystem(mats,{open=false}={}){
 const g=group('exploresetups_drawer_5door'),carpet=upholsteryMaterial('tweed','#373b3d');carpet.name='DrawerCharcoalCarpet';carpet.roughness=1;carpet.metalness=0;carpet.envMapIntensity=.15;
 // Short cargo-only assembly behind the upright rear seat, not a full-length
 // platform silently intersecting the passenger seats. The support floor is
 // represented separately because the actual drawer requires that product.
 const z=-1.445,bottom=.699,top=bottom+.250;
 box(g,1.11,.018,.46,0,bottom-.013,z,mats.trim,'Required false-floor mounting surface');
 const topPanel=box(g,.830,.015,.460,0,top-.0075,z,carpet,'Carpeted drawer top');topPanel.userData.disposableMaterial=true;
 for(const x of [-.4075,0,.4075])box(g,.015,.235,.460,x,bottom+.1175,z,carpet,'Drawer carcass partition');
 box(g,.830,.015,.460,0,bottom+.0075,z,carpet,'Drawer carcass base');
 box(g,.830,.235,.015,0,bottom+.1175,z+.2225,carpet,'Drawer rear carcass');
 for(const x of [-.2075,.2075]){
  box(g,.389,.214,.016,x,bottom+.122,z-.228-(open?.30:0),carpet,'Flush drawer front');
  const drawer=new T.Group();drawer.name='DrawerLatchAssembly';drawer.position.z=open?-.30:0;g.add(drawer);
  box(drawer,.071,.052,.004,x,bottom+.120,z-.239,mats.metal,'Recessed stainless latch surround',.006);
  box(drawer,.054,.036,.005,x,bottom+.120,z-.242,mats.trim,'Latch recess',.004);
  box(drawer,.035,.011,.006,x,bottom+.120,z-.247,mats.metal,'Folding latch pull',.003);
  const lock=add(drawer,new T.CylinderGeometry(.005,.005,.003,16),mats.metal,'Drawer key cylinder',[x+.022,bottom+.120,z-.245]);lock.rotation.x=Math.PI/2;
  if(open){box(g,.37,.012,.43,x,bottom+.025,z-.30,carpet,'Open drawer tray');for(const dx of [-.182,.182]){box(g,.012,.18,.43,x+dx,bottom+.115,z-.30,carpet,'Open drawer side');box(g,.008,.024,.35,x+dx,bottom+.08,z-.24,mats.metal,'Telescopic drawer slide');}box(g,.37,.18,.012,x,bottom+.115,z-.09,carpet,'Open drawer rear');}
 }
 for(const side of [-1,1]){
  // Separate side-wing covers, reveal lines and finger holes remain readable.
  const wingShape=new T.Shape(path(side*.485,0,.140,.460,.012).getPoints(6));const hole=new T.Path();hole.absarc(side*.485,-.09,.008,0,Math.PI*2);wingShape.holes.push(hole);
  const wing=add(g,new T.ExtrudeGeometry(wingShape,{depth:.015,bevelEnabled:false}),carpet,'Removable carpeted wing',[0,top-.015,z]);wing.rotation.x=-Math.PI/2;
  box(g,.140,.235,.015,side*.485,bottom+.1175,z-.2225,carpet,'Side wing fixed face');
  for(const zz of [z-.17,z+.17]){const ring=add(g,new T.TorusGeometry(.014,.003,8,24),mats.metal,'Cargo tie-down ring',[side*.36,top+.008,zz]);ring.rotation.x=Math.PI/2;}
 }
 box(g,.828,.018,.012,0,top-.006,z-.231,mats.metal,'Aluminium protective front edge');
 g.userData.publishedEnvelope=[1.110,.250,.460];return metreFabricUV(g);
}
