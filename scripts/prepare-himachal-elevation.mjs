// Explicit, one-tile offline import. Never fetch elevation during gameplay.
import {mkdir,writeFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import sharp from 'sharp';
const tile={z:12,x:2927,y:1660},size=128;
const url=`https://s3.amazonaws.com/elevation-tiles-prod/terrarium/${tile.z}/${tile.x}/${tile.y}.png`;
const response=await fetch(url,{signal:AbortSignal.timeout(20000)});
if(!response.ok)throw new Error(`Elevation download failed: ${response.status}`);
const png=Buffer.from(await response.arrayBuffer());
if(png.length>256000)throw new Error('Unexpected elevation download size');
const {data:rgb,info}=await sharp(png).removeAlpha().raw().toBuffer({resolveWithObject:true});
if(info.width!==256||info.height!==256||info.channels!==3)throw new Error('Unexpected Terrarium dimensions');
const raw=Array.from({length:256*256},(_,i)=>rgb[i*3]*256+rgb[i*3+1]+rgb[i*3+2]/256-32768);
if(raw.some(h=>!Number.isFinite(h)||h<0||h>9000))throw new Error('Invalid Himalayan elevation');
const heights=[];
for(let j=0;j<size;j++)for(let i=0;i<size;i++){
 const x=i/(size-1)*255,y=j/(size-1)*255,x0=Math.floor(x),y0=Math.floor(y),x1=Math.min(255,x0+1),y1=Math.min(255,y0+1),tx=x-x0,ty=y-y0;
 const a=raw[y0*256+x0]*(1-tx)+raw[y0*256+x1]*tx,b=raw[y1*256+x0]*(1-tx)+raw[y1*256+x1]*tx;
 heights.push(Math.round(a*(1-ty)+b*ty));
}
const n=2**tile.z,lon=x=>x/n*360-180,lat=y=>Math.atan(Math.sinh(Math.PI*(1-2*y/n)))*180/Math.PI;
const bounds={west:lon(tile.x+.5/256),east:lon(tile.x+255.5/256),north:lat(tile.y+.5/256),south:lat(tile.y+255.5/256)};
const centre={longitude:(bounds.east+bounds.west)/2,latitude:(bounds.north+bounds.south)/2};
const extentMeters=40075016.68557849/n*Math.cos(centre.latitude*Math.PI/180)*255/256;
const grid={size,min:Math.min(...heights),max:Math.max(...heights),heights};
const gridText=JSON.stringify(grid)+'\n',hash=bytes=>createHash('sha256').update(bytes).digest('hex');
const directory=new URL('../assets/terrain/',import.meta.url);await mkdir(directory,{recursive:true});
await writeFile(new URL('himachal-manali-128.json',directory),gridText);
await writeFile(new URL('himachal-manali-source.png',directory),png);
const provenance={name:'East Manali / Hamta, Himachal Pradesh, India',accessed:'2026-10-21',dataset:'Mapzen Terrain Tiles, Terrarium encoding',url,tile,sourceHeader:response.headers.get('x-amz-meta-x-imagery-sources'),sourceLastModified:response.headers.get('last-modified'),sourceBytes:png.length,sourceSHA256:hash(png),gridSHA256:hash(gridText),boundsPixelCentresWGS84:bounds,centre,approximateWidthMeters:extentMeters,approximateHeightMeters:extentMeters,rawRangeMeters:[Math.min(...raw),Math.max(...raw)],derivedRangeMeters:[grid.min,grid.max],size,processing:'Decoded RGB to elevation metres before bilinear resampling from256x256 to128x128; rounded to nearest metre. Row0=north, column0=west. No smoothing, synthetic peaks or visual height exaggeration baked into data.',license:'SRTM public-domain US government data; preserve USGS attribution and identify modifications. Dataset provider attribution documentation applies.',credit:'Mapzen Terrain Tiles. SRTM terrain data courtesy of the U.S. Geological Survey.',sources:['https://registry.opendata.aws/terrain-tiles/','https://github.com/tilezen/joerd/blob/master/docs/attribution.md','https://github.com/tilezen/joerd/blob/master/docs/data-sources.md','https://github.com/tilezen/joerd/blob/master/docs/formats.md','https://science.data.nasa.gov/about/license'],usage:'Distant visual scenery only. Not playable terrain, navigation, survey data or an exact recreation of the driving course.'};
await writeFile(new URL('himachal-manali.provenance.json',directory),JSON.stringify(provenance,null,2)+'\n');
console.log(JSON.stringify({...provenance,gridBytes:Buffer.byteLength(gridText)},null,2));
