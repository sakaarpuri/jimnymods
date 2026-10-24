import data from '../../assets/terrain/himachal-manali-128.json' with {type:'json'};
// Real elevation outside Manali, Himachal. See assets/terrain/README.md.
// x=-1 is west; x=+1 east. z=-1 is north; z=+1 south. Inputs clamp
// to the sampled bounds (no repeating seams); non-finite inputs use centre.
export const HIMACHAL_ELEVATION=Object.freeze({size:data.size,min:data.min,max:data.max,range:data.max-data.min,widthMeters:8246,heightMeters:8246,credit:'Mapzen Terrain Tiles. SRTM terrain data courtesy of the U.S. Geological Survey.'});
export function himachalElevationMeters(x,z){
 const sample=v=>(Math.max(-1,Math.min(1,Number.isFinite(v)?v:0))+1)*.5*(data.size-1);
 const u=sample(x),v=sample(z),x0=Math.floor(u),z0=Math.floor(v),x1=Math.min(data.size-1,x0+1),z1=Math.min(data.size-1,z0+1),tx=u-x0,tz=v-z0;
 const a=data.heights[z0*data.size+x0]*(1-tx)+data.heights[z0*data.size+x1]*tx,b=data.heights[z1*data.size+x0]*(1-tx)+data.heights[z1*data.size+x1]*tx;
 return a*(1-tz)+b*tz;
}
export function himachalElevationNormalized(x,z){return (himachalElevationMeters(x,z)-data.min)/(data.max-data.min);}
