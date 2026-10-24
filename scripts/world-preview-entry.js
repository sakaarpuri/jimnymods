import {createTrailScene} from '../src/trail/scene.js';
import {createVehicle} from '../src/trail/physics.js';
import {createRigidVehicle} from '../src/trail/rigid-vehicle.js';
import {COURSES,makeWorld,makeGates} from '../src/trail/courses.js';
import {DefaultLoadingManager} from 'three';
const view=createTrailScene(document.getElementById('preview'));let engine;
window.worldPreviews={async render(id,options={}){
 const course=COURSES.find(c=>c.id===id),world=makeWorld(course,'driver');
 await view.loadVehicle('5door',{colour:id==='sand'?'#b5a080':id==='urban'?'#8d1c25':'#586a45',parts:[],design:{finish:'oem',grille:'oem',decal:'none'}});
 let resolveTextures;const textures=new Promise(resolve=>resolveTextures=resolve);let loading=false;DefaultLoadingManager.onStart=()=>loading=true;DefaultLoadingManager.onLoad=()=>resolveTextures();
 view.setWorld(world,makeGates(course,'driver',options.mission||(id==='mountain'?'cross-axle':id==='sand'?'crest':id==='school'?'lesson-controls':'slalom')));if(loading)await textures;
 const s=createVehicle('5door'),point=options.point||(id==='mountain'?[113,132]:id==='sand'?[-65,214]:[30,111]);s.x=point[0];s.z=point[1];s.y=world.supportHeight?.(s.x,s.z)??world.height(s.x,s.z);s.yaw=options.yaw??(id==='sand'?.6:0);
 engine?.dispose();engine=await createRigidVehicle(world,s);for(let i=0;i<150;i++)engine.step({},1/60);
 // Match the wide world-selection cards: terrain and physical obstacles lead,
 // with the smaller car establishing scale instead of filling every preview.
 view.beginCapture(options.width||1600,options.height||400);view.render(s,0,0,options.shot||'side');return {id,position:{x:s.x,y:s.y,z:s.z},physics:s.physics,triangles:view.info().triangles};
}};
