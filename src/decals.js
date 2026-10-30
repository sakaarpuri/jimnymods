import * as THREE from 'three';
import { DecalGeometry } from 'three/addons/geometries/DecalGeometry.js';

const materials=new Map();
export const DECAL_STYLES=Object.freeze(['heritage','safari','mountain','geo','topo','pinstripe','rally','checker','compass','pixel','contour','sunset','mesa','rocker','switchback','summit','circuit','kanji','tideline','dunes','waypoint','heritageblock']);
const supported=new Set(DECAL_STYLES);

function materialFor(id,paint,customInk){
  const c=new THREE.Color(paint),light=c.r*.2126+c.g*.7152+c.b*.0722<.18;
  const validInk=/^#[0-9a-f]{6}$/i.test(customInk||'')?customInk:null;
  const key=id+':'+light+':'+validInk;
  if(materials.has(key))return materials.get(key);
  const canvas=document.createElement('canvas');canvas.width=2048;canvas.height=512;
  const ctx=canvas.getContext('2d');
  const ink=validInk||(light?'#d8d1bb':'#26332f');
  if(id==='heritage'||id==='safari'){
    const colours=validInk?[validInk,validInk,validInk]:id==='heritage'?['#bd542b','#df994c','#f0d29a']:['#c8b786','#766b50','#394634'];
    colours.forEach((colour,i)=>{ctx.fillStyle=colour;ctx.fillRect(0,100+i*45,2048,38);});
  }else if(id==='mountain'){
    ctx.fillStyle=ink;ctx.beginPath();ctx.moveTo(0,430);
    [[0,350],[250,190],[420,300],[700,60],[950,280],[1190,140],[1490,330],[1720,210],[2048,350],[2048,430]].forEach(([x,y])=>ctx.lineTo(x,y));ctx.closePath();ctx.fill();
    ctx.fillStyle=light?'#26332f':'#d8d1bb';ctx.beginPath();ctx.moveTo(700,60);ctx.lineTo(628,174);ctx.lineTo(700,145);ctx.lineTo(758,182);ctx.closePath();ctx.fill();
  }else if(id==='geo'){
    ctx.fillStyle=ink;
    for(let i=0;i<5;i++){const x=80+i*180;ctx.beginPath();ctx.moveTo(x,420);ctx.lineTo(x+210,80);ctx.lineTo(x+315,80);ctx.lineTo(x+105,420);ctx.closePath();ctx.fill();}
    ctx.fillRect(1050,350,998,70);
  }else if(id==='pinstripe'||id==='rally'){
    ctx.fillStyle=ink;ctx.fillRect(0,id==='rally'?180:230,2048,id==='rally'?100:12);ctx.fillRect(0,id==='rally'?295:260,2048,8);
    if(id==='rally'){
      ctx.beginPath();ctx.arc(1260,245,165,0,Math.PI*2);ctx.fill();
      const panel=new THREE.Color(ink);ctx.fillStyle=panel.r*.2126+panel.g*.7152+panel.b*.0722<.18?'#e7e7dc':'#242a29';ctx.font='italic 900 238px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('19',1255,257);
    }
  }else if(id==='checker'){
    ctx.fillStyle=ink;for(let row=0;row<3;row++)for(let col=0;col<32;col++)if((col+row)%2===0)ctx.fillRect(col*64,180+row*64,64,64);
  }else if(id==='compass'){
    ctx.strokeStyle=ink;ctx.lineWidth=8;ctx.beginPath();ctx.arc(650,256,165,0,Math.PI*2);ctx.stroke();
    ctx.fillStyle=ink;for(let i=0;i<8;i++){const a=i*Math.PI/4;ctx.beginPath();ctx.moveTo(650+Math.cos(a)*180,256+Math.sin(a)*180);ctx.lineTo(650+Math.cos(a+.24)*55,256+Math.sin(a+.24)*55);ctx.lineTo(650,256);ctx.closePath();ctx.fill();}ctx.fillRect(900,250,1148,10);
  }else if(id==='pixel'){
    ctx.fillStyle=ink;for(let row=0;row<7;row++)for(let col=0;col<36;col++)if((col*17+row*13)%11<4)ctx.fillRect(col*57,70+row*55,55,53);
  }else if(id==='sunset'){
    const colours=validInk?[ink,ink,ink,ink]:['#b44b38','#d6793d','#e4ac55','#ead0a0'];colours.forEach((c,i)=>{ctx.fillStyle=c;ctx.beginPath();ctx.moveTo(0,150+i*45);ctx.lineTo(1150,150+i*45);ctx.lineTo(1500,60+i*45);ctx.lineTo(2048,60+i*45);ctx.lineTo(2048,91+i*45);ctx.lineTo(1500,91+i*45);ctx.lineTo(1150,181+i*45);ctx.lineTo(0,181+i*45);ctx.fill();});
  }else if(id==='contour'){
    ctx.strokeStyle=ink;ctx.lineWidth=9;for(let i=0;i<3;i++){ctx.beginPath();ctx.moveTo(0,350+i*30);ctx.lineTo(430,350+i*30);ctx.lineTo(670,130+i*30);ctx.lineTo(870,310+i*30);ctx.lineTo(1150,70+i*30);ctx.lineTo(1550,350+i*30);ctx.lineTo(2048,350+i*30);ctx.stroke();}
  }else if(id==='mesa'){
    const colours=validInk?[ink,ink,ink]:['#b94e35','#d79042','#e7c185'];colours.forEach((c,i)=>{ctx.fillStyle=c;ctx.beginPath();ctx.moveTo(0,155+i*50);ctx.lineTo(1050,155+i*50);ctx.lineTo(1370,85+i*50);ctx.lineTo(2048,85+i*50);ctx.lineTo(2048,120+i*50);ctx.lineTo(1370,120+i*50);ctx.lineTo(1050,190+i*50);ctx.lineTo(0,190+i*50);ctx.fill();});
  }else if(id==='rocker'){
    ctx.fillStyle=ink;ctx.fillRect(0,330,2048,36);ctx.fillRect(0,382,2048,10);for(let i=0;i<5;i++)ctx.fillRect(130+i*55,280,30,35);
  }else if(id==='switchback'){
    ctx.strokeStyle=ink;ctx.lineWidth=24;ctx.lineJoin='round';ctx.beginPath();ctx.moveTo(0,340);ctx.lineTo(620,340);ctx.lineTo(850,140);ctx.lineTo(1170,140);ctx.lineTo(1370,305);ctx.lineTo(2048,305);ctx.stroke();
  }else if(id==='summit'){
    ctx.fillStyle=ink;ctx.beginPath();[[0,390],[440,390],[720,125],[900,285],[1110,65],[1390,390],[2048,390],[2048,425],[0,425]].forEach(([x,y],i)=>i?ctx.lineTo(x,y):ctx.moveTo(x,y));ctx.closePath();ctx.fill();
  }else if(id==='circuit'){
    ctx.fillStyle=ink;ctx.fillRect(0,235,2048,48);for(let i=0;i<4;i++){ctx.beginPath();ctx.moveTo(300+i*150,110);ctx.lineTo(370+i*150,110);ctx.lineTo(210+i*150,400);ctx.lineTo(140+i*150,400);ctx.closePath();ctx.fill();}
  }else if(id==='kanji'){
    ctx.fillStyle=ink;for(let i=0;i<7;i++){ctx.beginPath();ctx.moveTo(160+i*210,130);ctx.lineTo(280+i*210,130);ctx.lineTo(210+i*210,370);ctx.lineTo(90+i*210,370);ctx.closePath();ctx.fill();}ctx.fillRect(1570,300,478,24);
  }else if(id==='tideline'){
    ctx.strokeStyle=ink;ctx.lineWidth=15;for(let i=0;i<3;i++){ctx.beginPath();for(let x=0;x<=2048;x+=16){const y=210+i*46+Math.sin(x/300+i*.3)*35;x?ctx.lineTo(x,y):ctx.moveTo(x,y);}ctx.stroke();}
  }else if(id==='dunes'){
    ctx.fillStyle=ink;ctx.beginPath();ctx.moveTo(0,380);ctx.quadraticCurveTo(430,160,850,300);ctx.quadraticCurveTo(1400,90,2048,275);ctx.lineTo(2048,325);ctx.quadraticCurveTo(1400,140,850,350);ctx.quadraticCurveTo(430,210,0,430);ctx.closePath();ctx.fill();
  }else if(id==='waypoint'){
    ctx.strokeStyle=ink;ctx.lineWidth=13;ctx.setLineDash([40,24]);ctx.beginPath();ctx.moveTo(0,310);ctx.bezierCurveTo(520,310,680,125,1120,200);ctx.bezierCurveTo(1450,255,1600,175,2048,175);ctx.stroke();ctx.setLineDash([]);ctx.fillStyle=ink;[420,1120,1750].forEach(x=>{ctx.beginPath();ctx.arc(x,x===420?290:x===1120?200:175,22,0,Math.PI*2);ctx.fill();});
  }else if(id==='heritageblock'){
    ctx.fillStyle=ink;ctx.fillRect(0,175,2048,90);ctx.clearRect(1250,175,35,90);ctx.clearRect(1320,175,35,90);ctx.fillRect(0,285,2048,15);
  }else{
    ctx.strokeStyle=ink;ctx.lineWidth=4;
    for(let row=-3;row<15;row++){
      ctx.beginPath();
      for(let x=0;x<=2048;x+=8){const y=80+row*29+Math.sin(x/180+row*.28)*46+Math.sin(x/78+row*.13)*12;x?ctx.lineTo(x,y):ctx.moveTo(x,y);}
      ctx.stroke();
    }
  }
  const map=new THREE.CanvasTexture(canvas);map.colorSpace=THREE.SRGBColorSpace;
  const material=new THREE.MeshStandardMaterial({name:'Vinyl '+id,map,transparent:true,alphaTest:.04,depthWrite:false,roughness:.48,metalness:0,polygonOffset:true,polygonOffsetFactor:-4});
  // Bound GPU memory when exploring arbitrary vinyl colours. Geometry using
  // the previous material is removed before a new design is projected.
  if(materials.size>=32){const oldest=materials.keys().next().value;const previous=materials.get(oldest);previous.map.dispose();previous.dispose();materials.delete(oldest);}
  materials.set(key,material);return material;
}

// Project onto actual painted surfaces. Door contours and wheel apertures are
// clipped by the body mesh, rather than drawing floating rectangular boards.
export function projectBodyDecals(bodyMeshes,parent,id,paint,ink){
  if(!supported.has(id))return 0;
  parent.updateWorldMatrix(true,false);
  const inverse=parent.matrixWorld.clone().invert(),material=materialFor(id,paint,ink);
  let count=0;
  for(const side of [-1,1])for(const body of bodyMeshes){
    body.updateWorldMatrix(true,false);
    const position=parent.localToWorld(new THREE.Vector3(side*.748,.91,-.27));
    const geometry=new DecalGeometry(body,position,new THREE.Euler(0,side*Math.PI/2,0),new THREE.Vector3(2.95,.62,.10));
    if(!geometry.attributes.position.count){geometry.dispose();continue;}
    geometry.applyMatrix4(inverse);
    const mesh=new THREE.Mesh(geometry,material);mesh.name='Body vinyl '+id;mesh.renderOrder=2;parent.add(mesh);count++;
  }
  return count;
}
