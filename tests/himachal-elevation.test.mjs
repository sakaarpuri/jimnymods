import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {HIMACHAL_ELEVATION,himachalElevationMeters,himachalElevationNormalized} from '../src/trail/himachal-elevation.js';
const gridURL=new URL('../assets/terrain/himachal-manali-128.json',import.meta.url),grid=JSON.parse(readFileSync(gridURL)),provenance=JSON.parse(readFileSync(new URL('../assets/terrain/himachal-manali.provenance.json',import.meta.url)));
test('real Himachal grid is finite, geographically documented and source-checksummed',()=>{
 assert.equal(grid.heights.length,128*128);assert(grid.heights.every(Number.isFinite));
 assert.equal(Math.min(...grid.heights),2894);assert.equal(Math.max(...grid.heights),5279);
 assert.equal(HIMACHAL_ELEVATION.range,2385);assert.equal(provenance.sourceHeader,'srtm/N32E077.tif');
 const hash=b=>createHash('sha256').update(b).digest('hex');
 assert.equal(hash(readFileSync(gridURL)),provenance.gridSHA256);
 assert.equal(hash(readFileSync(new URL('../assets/terrain/himachal-manali-source.png',import.meta.url))),provenance.sourceSHA256);
 assert(provenance.approximateWidthMeters>8000&&provenance.approximateWidthMeters<8500);
});
test('bilinear sampling preserves source corners, clamps edges and normalizes without repeating',()=>{
 assert.equal(himachalElevationMeters(-1,-1),grid.heights[0]);assert.equal(himachalElevationMeters(1,1),grid.heights.at(-1));
 assert.equal(himachalElevationMeters(2,2),himachalElevationMeters(1,1));
 assert.equal(himachalElevationMeters(NaN,Infinity),himachalElevationMeters(0,0));
 const centre=(grid.heights[63*128+63]+grid.heights[63*128+64]+grid.heights[64*128+63]+grid.heights[64*128+64])/4;
 assert.equal(himachalElevationMeters(0,0),centre);
 for(let j=0;j<128;j++)for(let i=0;i<128;i++){const h=himachalElevationNormalized(i/127*2-1,j/127*2-1);assert(Number.isFinite(h)&&h>=0&&h<=1);}
});
