import test from 'node:test';
import assert from 'node:assert/strict';
import {Box3,Vector3} from 'three';
import {COURSES,makeWorld} from '../src/trail/courses.js';
import {DESERT_ART_BOUNDS,DESERT_FINE_PATCHES,desertHeightDelta,desertRutHeight,desertTrackCoordinates,desertCoarseRelief,desertSurfaceMask,desertObstaclePlan,desertGroundcoverPlan,desertShrubPlan,createDesertDressing} from '../src/trail/desert-art.js';
test('dune art remains local with smooth finite driveable shoulder transitions',()=>{
 for(const [x,z]of [[0,0],[-250,200],[50,240],[-80,340],[-80,130]])assert.equal(desertHeightDelta(x,z),0);
 let min=0,max=0,slope=0;
 for(let x=-178;x<8;x+=1.5)for(let z=138;z<292;z+=1.5){const h=desertHeightDelta(x,z);assert(Number.isFinite(h));min=Math.min(min,h);max=Math.max(max,h);slope=Math.max(slope,Math.hypot((desertHeightDelta(x+.1,z)-h)/.1,(desertHeightDelta(x,z+.1)-h)/.1));}
 assert(max>3&&max<4.1,'Shoulders should materially shape the dune silhouette');assert(min>-.9);assert(slope<.43,'No vertical decorative ledges on a driveable sand ridge');
 for(const z of [150,180,240,280]){assert(Math.abs(desertHeightDelta(DESERT_ART_BOUNDS.minX+.001,z))<.000001);assert(Math.abs(desertHeightDelta(DESERT_ART_BOUNDS.maxX-.001,z))<.000001);}
});
test('existing dune route has shallow paired physical ruts rather than painted arbitrary lines',()=>{
 const z=210,p=desertTrackCoordinates(-64,z),center=-64-p.lateral;
 assert(p.weight>.9);const left=desertRutHeight(center-.72,z),right=desertRutHeight(center+.72,z),middle=desertRutHeight(center,z);
 assert(left<-.025&&right<-.025);assert(left>-.08&&right>-.08);assert(middle>-.003);
 assert.equal(desertRutHeight(-10,210),0);assert.equal(desertTrackCoordinates(-65,150).weight,0);
 for(const x of [-150,-120,-90,-65,-20])for(const z of [140,175,210,245,290]){const m=desertSurfaceMask(x,z);for(const key of ['track','apron','local','weight'])assert(m[key]>=0&&m[key]<=1);}
});
test('dune artwork does not steepen the critical stock-vehicle crest approach',()=>{
 // All three mission approaches converge from their z=150 gate to (-65,220).
 // The first art pass added up to ~0.08 gradient here and stalled the actual
 // stock vehicle. Keep sculpted shoulders away from this existing climb.
 let maximumAddedGradient=0;
 for(const startX of [-55,-45,-35])for(let z=201;z<=219;z+=.2){
  const sample=zz=>{const x=startX+(-65-startX)*(zz-150)/70;return desertHeightDelta(x,zz)-desertRutHeight(x,zz);};
  maximumAddedGradient=Math.max(maximumAddedGradient,Math.abs((sample(z+.1)-sample(z-.1))/.2));
 }
 assert(maximumAddedGradient<.006,`Art added ${maximumAddedGradient} slope to the existing driving line`);
 // Visible off-line shoulders remain, rather than removing the whole pass.
 assert(desertHeightDelta(-28,233)>3);
});
test('fine patches are disjoint and coarse recess vanishes at every boundary',()=>{
 const [a,b]=DESERT_FINE_PATCHES;assert(a.maxX<b.minX);
 for(const p of DESERT_FINE_PATCHES){for(const z of [p.minZ,(p.minZ+p.maxZ)/2,p.maxZ]){assert.equal(desertCoarseRelief(p.minX,z),0);assert.equal(desertCoarseRelief(p.maxX,z),0);}assert(desertCoarseRelief((p.minX+p.maxX)/2,(p.minZ+p.maxZ)/2)>.27);}
 assert.equal(desertCoarseRelief(0,0),0);
});
test('sandstone islands retain actual route clearance and sit into the shared ground',()=>{
 const world=makeWorld(COURSES.find(c=>c.id==='sand'),'expert'),plan=desertObstaclePlan(world.height,world.routeDistance);
 assert(plan.length>=18&&plan.length<=51);assert.deepEqual(plan,desertObstaclePlan(world.height,world.routeDistance));
 for(const p of plan){assert.equal(p.type,'rock');assert(world.routeDistance(p.x,p.z)>=p.radius+3.8);assert(p.y<world.height(p.x,p.z));assert(p.height>.5&&p.height<1.3);}
 assert(world.bounds.maxX-world.bounds.minX>1300,'The wide free-roam world must remain intact');
});
test('groundcover is clustered, local, non-solid and geometry/disposal bounded',()=>{
 const height=(x,z)=>Math.sin(x*.01)+Math.cos(z*.02),world={course:{id:'sand'},height,routeDistance:(x,z)=>Math.abs(desertTrackCoordinates(x,z).lateral)||50,obstacles:[]};
 const plan=desertGroundcoverPlan(world);assert(plan.length>450&&plan.length<1100);assert.deepEqual(plan,desertGroundcoverPlan(world));
 for(const p of plan){assert.equal(p.y,height(p.x,p.z));assert(p.height<=.56);assert(world.routeDistance(p.x,p.z)>=2.5);}
 const shrubs=desertShrubPlan(world);assert(shrubs.length>20&&shrubs.length<=63);for(const p of shrubs){assert(world.routeDistance(p.x,p.z)>=3.2);assert(p.height<.95);}
 const g=createDesertDressing(world);assert.equal(g.userData.clumps,plan.length);assert(g.userData.triangles<100000,'Fine grass plus branching shrubs share a bounded local budget');assert.equal(g.userData.shrubs,shrubs.length);const m=g.children[0];assert(m.isInstancedMesh);assert.equal(m.count,plan.length);
 const size=new Box3().setFromObject(g).getSize(new Vector3());assert(size.x>70&&size.z>70);for(const v of m.geometry.attributes.position.array)assert(Number.isFinite(v));
 let disposed=0;const geometries=new Set(),materials=new Set();g.traverse(m=>{if(m.geometry)geometries.add(m.geometry);if(m.material)materials.add(m.material);});for(const resource of [...geometries,...materials]){resource.addEventListener('dispose',()=>disposed++);resource.dispose();}for(const m of g.children)m.dispose();assert.equal(disposed,3);
 assert.equal(createDesertDressing({...world,course:{id:'mountain'}}).children.length,0);assert.deepEqual(desertGroundcoverPlan({...world,course:{id:'school'}}),[]);
});
