import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {slimlineRack,fittedVisors,mouldedSpareCover} from './refined-parts.js';
import {skinnyBackbone,skinnyJerryTray,nomadeFlatRack} from './catalogue-parts.js';
import {rearDoorMolle,halfMollyPockets,xlDrawerSystem} from './interior-storage.js';
import {doorInserts,touringInterior,rearSeatInserts} from './touring-interior.js';
import {markSurfaceMaterials} from './surface-finishes.js';
import {addPracticalAccessories} from './practical-accessories.js';
export function accessoryMaterials(){
  const standard=(color,roughness=.7,metalness=0)=>new THREE.MeshStandardMaterial({color,roughness,metalness});
  const m={trim:standard('#232a2a'),rubber:standard('#222526',.92),metal:standard('#adb4b0',.3,.8),darkmetal:standard('#25292b',.55,.4),white:standard('#fff7de',.2),red:standard('#b72d27'),orange:standard('#d88132'),seat:standard('#343a36',.94),accent:standard('#cb593a'),canvas:standard('#a39a79',1),chrome:standard('#e8eeed',.17,1),reflector:standard('#d4d9d7',.24,1),textured:standard('#30362f',.96),upholstery:standard('#a38b69',.86),ambient:standard('#386588'),glass:standard('#213c45',.12,.55)};
  // Viewer assigns this shared palette material to the authored tyre batches.
  // Preserve the semantic name used by wheel/tyre adapters after replacement.
  m.rubber.name='TyreRubber';
  m.lens=new THREE.MeshPhysicalMaterial({color:'#e0e7e7',metalness:.05,roughness:.08,clearcoat:1,transparent:true,opacity:.40,depthWrite:false});
  m.smoked=new THREE.MeshPhysicalMaterial({color:'#11191b',roughness:.18,clearcoat:.7,transparent:true,opacity:.85,depthWrite:false,side:THREE.DoubleSide});return m;
}
// Single geometry implementation shared by Garage and Drive.
export function accessoryBuilder({accessoryRig,mats,detailed,modelBody,colour,effectiveDesign,lampEmitters,buildGrille=()=>{},addDecals=()=>{},arch=null}){
  markSurfaceMaterials(mats,lampEmitters);
  const mesh=(geometry,material,parent,x=0,y=0,z=0)=>{const obj=new THREE.Mesh(geometry,material);obj.position.set(x,y,z);obj.castShadow=true;obj.receiveShadow=true;parent.add(obj);return obj;};
  const box=(parent,w,h,d,x,y,z,mat=mats.trim)=>mesh(Math.min(w,h,d)>.065?new RoundedBoxGeometry(w,h,d,2,Math.min(w,h,d)*.14):new THREE.BoxGeometry(w,h,d),mat,parent,x,y,z);
  const cylinder=(parent,rTop,rBottom,length,x,y,z,mat=mats.trim,axis='y',segments=24)=>{const obj=mesh(new THREE.CylinderGeometry(rTop,rBottom,length,segments),mat,parent,x,y,z);if(axis==='x')obj.rotation.z=Math.PI/2;if(axis==='z')obj.rotation.x=Math.PI/2;return obj;};
  const tube=(parent,points,r=.025,mat=mats.darkmetal)=>mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points.map(p=>new THREE.Vector3(...p)),false,'centripetal',.1),Math.max(12,points.length*3),r,8,false),mat,parent);
  const lineTube=(parent,points,r=.01,mat=mats.trim)=>{const vectors=points.map(p=>new THREE.Vector3(...p));const path=new THREE.CurvePath();for(let i=1;i<vectors.length;i++)path.add(new THREE.LineCurve3(vectors[i-1],vectors[i]));return mesh(new THREE.TubeGeometry(path,points.length*2,r,6,false),mat,parent);};
  function clear(group){while(group.children.length){const obj=group.children[0];obj.traverse(child=>{child.geometry?.dispose();if(child.isInstancedMesh)child.dispose();child.userData.ownedMaterials?.forEach(m=>m.dispose());if(child.userData.disposableMaterial){if(!child.material.userData.ownsTextures)child.material.map?.dispose();child.material.dispose();}});group.remove(obj);}}
  if(!arch)arch=(parent,x,z)=>{
    const side=x<0?-1:1,outer=[[-.49,.38],[-.49,.58],[-.45,.77],[-.36,.90],[-.22,.95],[0,.96],[.22,.95],[.36,.90],[.45,.77],[.49,.58],[.49,.38]],inner=[[-.40,.38],[-.39,.53],[-.35,.66],[-.28,.75],[-.18,.795],[0,.815],[.18,.795],[.28,.75],[.35,.66],[.39,.53],[.40,.38]];
    const curves=[outer,inner].map(points=>new THREE.CatmullRomCurve3(points.map(([depth,height])=>new THREE.Vector3(0,height,depth)))),positions=[],indices=[],segments=64;
    for(const [t,width] of [[0,.750],[.14,.815],[.30,.866],[.55,.896],[.80,.902],[1,.890]])for(let i=0;i<=segments;i++){const p=curves[0].getPoint(i/segments).lerp(curves[1].getPoint(i/segments),t);positions.push(side*width,p.y,z+p.z);}
    for(let row=0;row<5;row++)for(let i=0;i<segments;i++){const a=row*(segments+1)+i;indices.push(a,a+1,a+segments+2,a,a+segments+2,a+segments+1);}
    if(side<0)for(let i=0;i<indices.length;i+=3)[indices[i+1],indices[i+2]]=[indices[i+2],indices[i+1]];
    const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));geometry.setIndex(indices);geometry.computeVertexNormals();mesh(geometry,mats.trim,parent);
  };
  function roofRack(parent,basket=false){
    const group=new THREE.Group();parent.add(group);
    const front=.61,rear=-1.62;
    [-.72,.72].forEach(x=>box(group,.035,.055,2.25,x,1.82,-.50,mats.darkmetal));
    [front,rear].forEach(z=>box(group,1.46,.055,.035,0,1.82,z,mats.darkmetal));
    for(let z=-1.56;z<.62;z+=.14)box(group,1.43,.022,.072,0,1.825,z,mats.trim);
    [-.68,.68].forEach(x=>[-1.38,.38].forEach(z=>{box(group,.055,.095,.11,x,1.755,z,mats.darkmetal);box(group,.10,.02,.15,x,1.715,z,mats.rubber);cylinder(group,.012,.012,.06,x,1.77,z,mats.metal,'x',8);}));
    const fairing=box(group,1.38,.13,.018,0,1.77,.64,mats.trim);fairing.rotation.x=-.5;
    if(basket){[-.72,.72].forEach(x=>lineTube(group,[[x,1.83,front],[x,1.96,front-.12],[x,1.96,rear+.06],[x,1.83,rear]],.018));for(const z of [-1.55,.49])box(group,1.44,.025,.025,0,1.955,z,mats.darkmetal);}
    else for(const x of [-.72,.72])for(const z of [-1.5,-.8,-.1,.5])box(group,.018,.014,.045,x,1.86,z,mats.metal);
  }
  function buildAccessories(parts,design){
    clear(accessoryRig);let visiblePartIds=[];
    // A locally authored display, not a photograph or an external navigation service.
    if(detailed&&parts.has('headunit')){
      const wide=true;let material;
      if(wide){
        const screen=document.createElement('canvas');screen.width=384;screen.height=224;const ctx=screen.getContext('2d');ctx.fillStyle='#162a31';ctx.fillRect(0,0,384,224);ctx.fillStyle='#dce8d5';ctx.font='18px sans-serif';ctx.fillText('12:30',18,28);ctx.fillText('HOME',292,28);
        for(const [i,name] of ['Music','Phone','Maps'].entries()){ctx.fillStyle=['#305d68','#42694b','#615f47'][i];ctx.fillRect(16+i*122,55,108,128);ctx.fillStyle='#eef3df';ctx.font='20px sans-serif';ctx.fillText(name,26+i*122,145);ctx.beginPath();ctx.arc(70+i*122,96,16,0,Math.PI*2);ctx.strokeStyle='#dbe6d9';ctx.lineWidth=3;ctx.stroke();}
        const texture=new THREE.CanvasTexture(screen);texture.colorSpace=THREE.SRGBColorSpace;material=new THREE.MeshBasicMaterial({map:texture});
      }
      const display=mesh(new THREE.PlaneGeometry(wide?.232:.183,wide?.137:.103),material,accessoryRig,0,1.224,wide?.312:.333);display.rotation.y=Math.PI;display.userData.disposableMaterial=true;
      if(modelBody==='3door')display.position.z-=.17;
    }
    const show=(ids,fn)=>{const found=ids.filter(id=>parts.has(id));if(found.length){const before=new Set(accessoryRig.children);fn();for(const piece of accessoryRig.children)if(!before.has(piece))piece.userData.finishTarget=found[0];visiblePartIds.push(...found);}};
    buildGrille(accessoryRig,design.grille||'oem');addDecals(accessoryRig,design.decal||'none');
    if(design.finish==='raptor')[-1,1].forEach(side=>box(accessoryRig,.018,.16,modelBody==='3door'?1.43:1.77,side*(detailed?.751:.777),.65,-.08,mats.textured));
    const hasRack=['rack','msga_roofbasket','prad_roofrack','fr_slimline2','fr_slimline2_tall',...(modelBody==='3door'?[]:['suzuki_nomade_flatrack'])].some(id=>parts.has(id));
    // A roof accessory must never levitate when selected without a basket.
    if(!hasRack&&['rtt','awning','boards'].some(id=>parts.has(id))){for(const z of [-1.20,.25]){box(accessoryRig,1.5,.045,.07,0,1.79,z,mats.darkmetal);for(const side of [-1,1]){box(accessoryRig,.06,.10,.10,side*.70,1.73,z,mats.trim);box(accessoryRig,.09,.018,.13,side*.70,1.69,z,mats.rubber);}}}
    if(modelBody!=='3door'&&parts.has('suzuki_nomade_flatrack'))show(['suzuki_nomade_flatrack'],()=>accessoryRig.add(nomadeFlatRack(mats)));
    else if(parts.has('fr_slimline2')||parts.has('fr_slimline2_tall'))show(['fr_slimline2','fr_slimline2_tall'],()=>accessoryRig.add(slimlineRack(mats,parts.has('fr_slimline2_tall'))));
    else show(['rack','msga_roofbasket','prad_roofrack'],()=>roofRack(accessoryRig,parts.has('msga_roofbasket')));
    if(parts.has('skinnyjim_backbone')||parts.has('skinnyjim_jerry_tray')){
      const mount=skinnyBackbone(mats);mount.userData.finishTarget='skinnyjim_backbone';if(modelBody==='3door')mount.position.z+=.17;accessoryRig.add(mount);visiblePartIds.push('skinnyjim_backbone');
      show(['skinnyjim_jerry_tray'],()=>{const tray=skinnyJerryTray(mats);if(modelBody==='3door')tray.position.z+=.17;accessoryRig.add(tray);});
    }
    show(['snorkel','bimbra_snorkel'],()=>{const start=accessoryRig.children.length;tube(accessoryRig,[[-.79,1.04,1.24],[-.84,1.08,.82],[-.84,1.25,.66],[-.79,1.67,.59]],.041,mats.trim);const head=box(accessoryRig,.13,.095,.16,-.79,1.705,.62,mats.trim);head.rotation.x=.15;for(let x=-.832;x<-.74;x+=.025)box(accessoryRig,.008,.058,.008,x,1.71,.706,mats.darkmetal);box(accessoryRig,.018,.045,.07,-.78,1.5,.61,mats.darkmetal);if(modelBody==='3door')for(const piece of accessoryRig.children.slice(start))piece.position.z-=.17;});
    show(['bull','autostylenn_bumper_v1'],()=>{
      box(accessoryRig,1.38,.23,.025,0,.73,1.79,mats.trim);
      const hoop=parts.has('bull');
      const outline=hoop?[[-.85,.76],[-.72,.72],[.72,.72],[.85,.76],[.82,.57],[.47,.48],[-.47,.48],[-.82,.57]]:[[-.85,.72],[-.76,.76],[-.63,.70],[.63,.70],[.76,.76],[.85,.72],[.80,.57],[.56,.50],[-.56,.50],[-.80,.57]];
      const shape=new THREE.Shape(outline.map(([x,y])=>new THREE.Vector2(x,y)));
      if(hoop){const fairlead=new THREE.Path();fairlead.absellipse(0,.594,.185,.031,0,Math.PI*2,false);shape.holes.push(fairlead);}
      for(const side of [-1,1]){const fog=new THREE.Path();fog.absellipse(side*.61,.637,hoop?.049:.044,.044,0,Math.PI*2,false);shape.holes.push(fog);}
      mesh(new THREE.ExtrudeGeometry(shape,{depth:.19,bevelEnabled:true,bevelSize:.006,bevelThickness:.006,bevelSegments:2}),mats.darkmetal,accessoryRig,0,0,1.86);
      for(const x of [-.61,.61]){cylinder(accessoryRig,.038,.038,.008,x,.637,1.98,mats.reflector,'z');cylinder(accessoryRig,.034,.034,.009,x,.637,1.989,mats.lens,'z');}
      if(hoop){
        // Full-width rounded hoop, paired gussets and red D-shackles, matching
        // the depicted generic bull-bar style rather than the V1 low bumper.
        tube(accessoryRig,[[-.79,.72,1.99],[-.79,.96,1.99],[-.72,1.075,1.99],[-.60,1.083,1.99],[.60,1.083,1.99],[.72,1.075,1.99],[.79,.96,1.99],[.79,.72,1.99]],.026);
        for(const x of [-.43,.43]){
          tube(accessoryRig,[[x,.69,2.07],[x,.79,2.04],[x,1.083,1.99]],.018);
          box(accessoryRig,.035,.17,.12,x,.66,2.04,mats.darkmetal);
          const shackle=mesh(new THREE.TorusGeometry(.041,.010,8,24,Math.PI*1.65),mats.accent,accessoryRig,x,.52,2.08);shackle.rotation.z=.55;
          cylinder(accessoryRig,.013,.013,.09,x,.55,2.08,mats.accent,'x');
        }
        for(const x of [-.74,.74]){box(accessoryRig,.12,.043,.018,x,.65,2.058,mats.trim);for(let i=-2;i<=2;i++)cylinder(accessoryRig,.010,.010,.010,x+i*.021,.65,2.071,mats.reflector,'z',12);}
      }else{
        // Seller V1 reference has a flat folded face, raised outer wings and
        // a separate perforated winch tray, not a tubular crash guard.
        const tray=new THREE.Shape([[-.37,.72],[-.33,.91],[.33,.91],[.37,.72]].map(([x,y])=>new THREE.Vector2(x,y)));
        for(const x of [-.24,-.08,.08,.24]){const hole=new THREE.Path();hole.absellipse(x,.81,.046,.021,0,Math.PI*2,false);tray.holes.push(hole);}
        mesh(new THREE.ExtrudeGeometry(tray,{depth:.008,bevelEnabled:false}),mats.darkmetal,accessoryRig,0,0,1.86);
        box(accessoryRig,1.26,.026,.20,0,.701,1.96,mats.darkmetal);
      }
      for(const x of [-.77,-.42,0,.42,.77])cylinder(accessoryRig,.005,.005,.010,x,.574,2.061,mats.metal,'z',8);
    });
    show(['winch'],()=>{box(accessoryRig,.45,.12,.19,0,.72,2.13,mats.trim);cylinder(accessoryRig,.055,.055,.27,0,.74,2.21,mats.metal,'x');box(accessoryRig,.07,.09,.03,0,.69,2.25,mats.accent);});
    show(['sliders'],()=>[-1,1].forEach(side=>{tube(accessoryRig,[[side*.91,.45,-.95],[side*.97,.45,-.85],[side*.97,.45,.85],[side*.91,.45,.95]],.035);box(accessoryRig,.18,.035,1.80,side*.86,.46,0,mats.darkmetal);}));
    show(['flares'],()=>[-1,1].forEach(side=>[-1.295,1.295].forEach(z=>arch(accessoryRig,side===1?.82:-.97,z,true))));
    show(['ladder'],()=>{const start=accessoryRig.children.length;[-.65,-.35].forEach(x=>{tube(accessoryRig,[[x,.60,-1.99],[x,1.66,-1.99],[x,1.75,-1.80],[x,1.73,-1.66]],.02);box(accessoryRig,.065,.02,.10,x,1.72,-1.68,mats.rubber);box(accessoryRig,.065,.04,.16,x,.64,-1.91,mats.trim);});for(let y=.68;y<1.7;y+=.19)box(accessoryRig,.32,.025,.035,-.5,y,-1.99,mats.darkmetal);for(const piece of accessoryRig.children.slice(start))piece.position.z+=.078;});
    show(['led','lamp_bar20'],()=>{const y=hasRack?1.91:1.77,w=parts.has('lamp_bar20')?.51:1.02;box(accessoryRig,w,.065,.085,0,y,.68,mats.trim);for(let x=-w/2+.035;x<=w/2-.03;x+=.06){cylinder(accessoryRig,.023,.023,.008,x,y,.726,mats.reflector,'z',16);cylinder(accessoryRig,.009,.009,.01,x,y,.734,lampEmitters.bar,'z',12);}for(const x of [-w*.46,w*.46])box(accessoryRig,.014,.065,.06,x,y-.05,.68,mats.darkmetal);for(let z=.65;z<.70;z+=.012)box(accessoryRig,w-.03,.075,.004,0,y,z,mats.darkmetal);});
    show(['pods','lamp_cube'],()=>[-1,1].forEach(side=>lampHousing(side*.78,1.22,.92,parts.has('pods')?.062:.043,'combo',parts.has('pods'))));
    show(['lamp_round_spot','lamp_round_flood'],()=>[-1,1].forEach(side=>lampHousing(side*.28,.87,2.08,.089,parts.has('lamp_round_flood')?'flood':'spot',true)));
    show(['lamp_fog','lamp_dual'],()=>[-1,1].forEach(side=>lampHousing(side*.62,.62,2.01,.043,parts.has('lamp_dual')?'dual':'fog')));
    show(['lamp_compact_bar'],()=>{box(accessoryRig,.23,.073,.105,0,.76,2.07,mats.trim);for(const x of [-.081,-.027,.027,.081]){cylinder(accessoryRig,.023,.023,.012,x,.76,2.13,mats.reflector,'z');cylinder(accessoryRig,.009,.009,.015,x,.76,2.14,lampEmitters.driving,'z');}box(accessoryRig,.06,.05,.055,0,.70,2.07,mats.darkmetal);});
    show(['lamp_work'],()=>[-1,1].forEach(side=>{lampHousing(side*.58,1.79,-1.77,.026,'work',false,true);box(accessoryRig,.055,.065,.065,side*.58,1.725,-1.75,mats.darkmetal);}));
    show(['rtt'],()=>{const y=hasRack?1.95:1.91;box(accessoryRig,1.34,.18,2.1,0,y,-.42,mats.canvas);box(accessoryRig,1.39,.055,2.13,0,y+.105,-.42,mats.trim);box(accessoryRig,1.35,.028,2.10,0,y-.10,-.42,mats.darkmetal);for(const side of [-1,1])for(const z of [-1.1,.3])box(accessoryRig,.018,.10,.045,side*.68,y,z,mats.trim);});
    show(['awning'],()=>{const y=hasRack?1.92:1.78;cylinder(accessoryRig,.061,.061,2.25,.82,y,-.50,mats.canvas,'z');for(const z of [-1.35,.35])box(accessoryRig,.11,.03,.055,.78,y-.05,z,mats.darkmetal);});
    show(['boards'],()=>{const y=parts.has('rtt')?(hasRack?2.10:2.06):hasRack?1.88:1.83;[-.32,.32].forEach(x=>{box(accessoryRig,.24,.035,1.0,x,y,-.4,mats.accent);for(const z of [-.75,-.05]){box(accessoryRig,.11,.035,.04,x,y-.03,z,mats.trim);cylinder(accessoryRig,.012,.012,.04,x,y+.025,z,mats.metal,'y',8);}for(let z=-.8;z<0;z+=.10)for(const offset of [-.075,0,.075])cylinder(accessoryRig,.012,.014,.022,x+offset,y+.027,z,mats.accent,'y',6);});});
    show(['mudflaps'],()=>[-1,1].forEach(side=>[-1.295,1.295].forEach(axle=>{
      // +Z is forward. The former panel at axle-.285 intersected both the
      // 346.5 mm road and 368 mm AT tyre. Place a thin tapered flap behind
      // their swept envelope, with a slight rearward flex at the lower edge.
      const shape=new THREE.Shape();shape.moveTo(-.145,.51);shape.lineTo(.145,.51);shape.lineTo(.126,.19);shape.quadraticCurveTo(.12,.175,.105,.175);shape.lineTo(-.105,.175);shape.quadraticCurveTo(-.12,.175,-.126,.19);shape.closePath();
      const geometry=new THREE.ExtrudeGeometry(shape,{depth:.007,bevelEnabled:false,curveSegments:4}),p=geometry.attributes.position;
      for(let i=0;i<p.count;i++)p.setZ(i,p.getZ(i)-Math.max(0,.51-p.getY(i))*.11);
      geometry.computeVertexNormals();
      const flap=mesh(geometry,mats.rubber,accessoryRig,side*.75,0,axle-.405);flap.name='Mudflap rubber';
      box(accessoryRig,.25,.025,.012,side*.75,.50,axle-.402,mats.darkmetal);
      for(const dx of [-.095,.095])cylinder(accessoryRig,.007,.007,.012,side*.75+dx,.499,axle-.392,mats.metal,'z',8);
    })));
    show(['sparecover'],()=>accessoryRig.add(mouldedSpareCover(mats,detailed?.sBadgeGeometry)));
    show(['bonnetguard'],()=>{const points=[];for(let i=0;i<=24;i++){const x=-.69+i*1.38/24;points.push(new THREE.Vector3(x,1.17-.03*(Math.abs(x)/.69)**4,1.78-.035*(Math.abs(x)/.69)**4));}const path=new THREE.CatmullRomCurve3(points);const shape=new THREE.Shape();shape.moveTo(-.008,-.027);shape.lineTo(.008,-.027);shape.quadraticCurveTo(.016,.025,.010,.048);shape.lineTo(-.003,.048);shape.quadraticCurveTo(.003,.015,-.008,-.027);mesh(new THREE.ExtrudeGeometry(shape,{steps:48,bevelEnabled:false,extrudePath:path}),mats.trim,accessoryRig,0,0,0);});
    show(['spoiler'],()=>{const start=accessoryRig.children.length;const wing=box(accessoryRig,1.40,.045,.22,0,1.744,-1.76,mats.trim);wing.rotation.x=.08;for(const x of [-.60,.60])box(accessoryRig,.12,.065,.14,x,1.70,-1.72,mats.trim);for(const piece of accessoryRig.children.slice(start))piece.position.z+=.078;});
    show(['visors'],()=>accessoryRig.add(fittedVisors(mats.smoked)));
    show(['hingecovers'],()=>[-1,1].forEach(side=>[.63,-.32].forEach(z=>[.72,1.04].forEach(y=>box(accessoryRig,.035,.065,.10,side*(detailed?.780:.807),y,z,mats.metal)))));
    show(['cladding'],()=>[-1,1].forEach(side=>box(accessoryRig,.035,.15,1.77,side*(detailed?.759:.787),.65,-.08,mats.textured)));
    show(['skid'],()=>box(accessoryRig,1.22,.045,1.22,0,.38,.85,mats.metal));
    show(['headlamps'],()=>(detailed?[-.550,.550]:[-.6,.6]).forEach(x=>{
      const start=accessoryRig.children.length;
      // Match the complete revised fascia, including its shallow plan-view bow.
      const y=detailed?.917:.95,z=detailed?1.809+.020*(1-(x/.755)**2):1.889;
      cylinder(accessoryRig,.117,.117,.05,x,y,z-.035,mats.trim,'z',64);
      mesh(new THREE.TorusGeometry(.110,.005,12,64),mats.chrome,accessoryRig,x,y,z);
      mesh(new THREE.TorusGeometry(.099,.005,12,64),mats.white,accessoryRig,x,y,z+.008);
      for(const dy of [-.045,.036]){cylinder(accessoryRig,dy>0?.043:.030,dy>0?.043:.030,.014,x,y+dy,z+.005,mats.reflector,'z',40);const optic=mesh(new THREE.SphereGeometry(dy>0?.035:.023,32,20),mats.lens,accessoryRig,x,y+dy,z+.016);optic.scale.z=.38;}
      for(const side of [-1,1])for(const dy of [-.025,0,.025])box(accessoryRig,.022,.012,.008,x+side*.069,y+dy,z+.012,mats.reflector);
      const lampGroup=new THREE.Group();lampGroup.position.set(x,y,modelBody==='3door'?-.17:0);accessoryRig.add(lampGroup);
      for(const obj of accessoryRig.children.slice(start,-1)){obj.position.x-=x;obj.position.y-=y;lampGroup.add(obj);}lampGroup.scale.set(.9,.9,1);
    }));
    show(['dashcam'],()=>{box(accessoryRig,.10,.055,.055,-.25,1.55,.62,mats.trim);cylinder(accessoryRig,.017,.017,.012,-.25,1.55,.654,mats.lens,'z');box(accessoryRig,.03,.04,.018,-.25,1.594,.62,mats.trim);});
    show(['headunit'],()=>{box(accessoryRig,.26,.165,.028,0,1.225,.334,mats.trim);box(accessoryRig,.232,.137,.004,0,1.225,.318,mats.glass);for(const x of [-.10,.10])cylinder(accessoryRig,.008,.008,.007,x,1.152,.315,mats.chrome,'z');});
    show(['doortrim'],()=>accessoryRig.add(doorInserts(mats,{body:modelBody,fabric:design.seatFabric||'canvas',colour:'#'+mats.upholstery.color.getHexString()})));
    const touring=modelBody!=='3door'&&parts.has('touring');
    if(touring)show(['touring'],()=>accessoryRig.add(touringInterior(mats,{camp:design.touringMode==='camp'&&!design.drivingPreview,drawers:!!design.touringDrawers&&!design.drivingPreview})));
    if(!touring)show(['mod_reardoor_molle'],()=>accessoryRig.add(rearDoorMolle(mats,modelBody)));
    if(modelBody!=='3door'){
      if(!touring)show(['mod_halfmolly_5door'],()=>accessoryRig.add(halfMollyPockets(mats)));
      if(!touring)show(['exploresetups_drawer_5door'],()=>accessoryRig.add(xlDrawerSystem(mats)));
    }
    if(!touring&&!parts.has('mod_halfmolly_5door'))show(['molle'],()=>[-1,1].forEach(side=>{box(accessoryRig,.012,.30,.42,side*.710,1.40,-1.37,mats.trim);for(let z=-1.52;z<-1.20;z+=.08)for(let y=1.30;y<1.53;y+=.08)box(accessoryRig,.015,.025,.045,side*.722,y,z,mats.metal);}));
    if(!touring&&!parts.has('exploresetups_drawer_5door'))show(['drawer'],()=>{const y=detailed?.80:.98;box(accessoryRig,1.2,.22,.58,0,y,-1.34,mats.darkmetal);for(const x of [-.30,.30]){box(accessoryRig,.565,.17,.018,x,y,-1.638,mats.trim);box(accessoryRig,.12,.032,.025,x,y+.035,-1.655,mats.metal);}box(accessoryRig,1.19,.012,.57,0,y+.116,-1.34,mats.seat);});
    if(!touring)show(['shelf'],()=>{box(accessoryRig,1.3,.025,.58,0,1.18,-1.30,mats.trim);for(const x of [-.60,.60])box(accessoryRig,.025,.08,.56,x,1.21,-1.30,mats.trim);});
    show(['armrest'],()=>{box(accessoryRig,.20,.14,.35,0,.98,-.20,mats.seat);if(detailed)box(accessoryRig,.13,.12,.22,0,.88,-.20,mats.trim);});
    show(['mats'],()=>[-.36,.36].forEach(x=>{const y=detailed?.685:.71;box(accessoryRig,.36,.018,.48,x,y,.42,mats.trim);for(let z=.22;z<.64;z+=.04)box(accessoryRig,.31,.006,.012,x,y+.011,z,mats.darkmetal);}));
    // Actual seat contours are part of the base cabin. The renderer applies a
    // two-tone fabric palette; extra boxes used to obscure those contours.
    show(['seats'],()=>{if(!touring)accessoryRig.add(rearSeatInserts(mats,{body:modelBody,fabric:design.seatFabric||'canvas',colour:'#'+mats.upholstery.color.getHexString()}));});
    show(['steering'],()=>{mesh(new THREE.TorusGeometry(.123,.016,12,64),mats.upholstery,accessoryRig,-.38,1.16,.26);for(const side of [-1,1])box(accessoryRig,.065,.025,.032,-.38+side*.075,1.16,.25,mats.upholstery);});
    show(['ambient'],()=>{box(accessoryRig,1.22,.004,.008,0,1.13,.355,mats.ambient);for(const x of [-.37,.37])box(accessoryRig,.28,.004,.008,x,.82,.41,mats.ambient);});
    addPracticalAccessories({parts,body:modelBody,mats,rig:accessoryRig,show});
    visiblePartIds.push(...['tires','lift','autostylenn_big_suzuki_grille','autostylenn_cursive_grille','autostylenn_s_grille'].filter(id=>parts.has(id)));
    for(const piece of accessoryRig.children)if(!piece.userData.finishTarget&&!piece.userData.grilleBadge)piece.userData.finishTarget='hardware';
    return visiblePartIds;
  }
  function lampHousing(x,y,z,r,profile,round=false,rear=false){
    const group=new THREE.Group();group.position.set(x,y,z);if(rear)group.rotation.y=Math.PI;accessoryRig.add(group);
    if(round)cylinder(group,r,r*.96,.072,0,0,0,mats.trim,'z',48);else box(group,r*2,r*2,.075,0,0,0,mats.trim);
    // Fins, pivot bracket, fasteners, individual reflector cells and a separate clear lens.
    for(let dz=-.03;dz<.025;dz+=.012)box(group,r*1.7,r*1.8,.004,0,0,dz,mats.darkmetal);
    for(const side of [-1,1]){box(group,.009,r*.85,.04,side*(r+.007),-r*.6,-.005,mats.darkmetal);cylinder(group,.007,.007,.012,side*(r+.013),0,0,mats.chrome,'x',8);}
    box(group,r*2+.025,.008,.045,0,-r*1.04,0,mats.darkmetal);
    for(const dx of [-1,1])for(const dy of [-1,1]){cylinder(group,r*.36,r*.28,.012,dx*r*.40,dy*r*.40,.042,mats.reflector,'z',24);const optic=mesh(new THREE.SphereGeometry(r*.24,16,10),lampEmitters[profile],group,dx*r*.40,dy*r*.40,.052);optic.scale.z=.23;}
    if(round){const rim=mesh(new THREE.TorusGeometry(r*.91,.004,8,48),mats.darkmetal,group,0,0,.047);cylinder(group,r*.87,r*.87,.003,0,0,.059,mats.lens,'z',48);}else box(group,r*1.78,r*1.78,.003,0,0,.06,mats.lens);
  }
  return buildAccessories;
}

