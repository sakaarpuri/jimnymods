import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,statSync} from 'node:fs';

const source=path=>readFileSync(new URL(`../${path}`,import.meta.url),'utf8');
const game=source('src/trail-game.js'),scene=source('src/trail/scene.js');

test('start stays disabled until the scene has prepared and remains guarded after failures',()=>{
 assert.match(game,/disabled=!sceneReady\|\|loading/);
 assert.match(game,/if\(!sceneReady\|\|loading\|\|!view\)return/);
 assert.match(game,/sceneReady=true;\$\('startButton'\)/);
});
test('only mountain courses request mountain trees and the existing world can be reused',()=>{
 assert.match(scene,/if\(course\.theme==='mountain'\)tasks\.push\(preloadVegetationAssets\(\),preloadAuthoredPines\(\)\)/);
 assert.match(game,/reuseWorld=course\.id===nextCourse\.id&&difficulty===nextDifficulty/);
 assert.match(scene,/if\(sameWorld&&gateKey===nextGateKey\)return/);
 assert.match(scene,/if\(!sameWorld\)\{dispose\(worldRoot\)/);
});
test('phone texture alternatives exist and are materially smaller',()=>{
 const files=['gravel','gravel-normal','forest','rocky-slope','bedrock-face','bedrock-height'];
 for(const file of files){const path=`assets/trail-textures/${file}.webp`,mobile=`assets/trail-textures/mobile/${file}.webp`;assert(statSync(new URL(`../${mobile}`,import.meta.url)).size<statSync(new URL(`../${path}`,import.meta.url)).size,file);}
 for(const file of ['pine-tree-b-atlas.webp','pine-tree-b-atlas-normal.webp'])assert(statSync(new URL(`../assets/vegetation/authored-pine/mobile/${file}`,import.meta.url)).size<statSync(new URL(`../assets/vegetation/authored-pine/${file}`,import.meta.url)).size,file);
});
