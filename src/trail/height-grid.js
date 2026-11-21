// Terrain heights on a regular grid, computed once per world and shared by the
// rendered ground mesh and the physics heightfield, which sample identical points.
const caches=new WeakMap();
export function gridHeights(world,bounds,columns,rows){
  let cache=caches.get(world);
  // A world whose height function was replaced must not serve stale samples.
  if(!cache||cache.height!==world.height){cache={height:world.height,grids:new Map()};caches.set(world,cache);}
  const key=`${bounds.minX},${bounds.maxX},${bounds.minZ},${bounds.maxZ},${columns},${rows}`;let grid=cache.grids.get(key);
  if(!grid){
    grid=new Float64Array((columns+1)*(rows+1));const width=bounds.maxX-bounds.minX,depth=bounds.maxZ-bounds.minZ;
    for(let j=0;j<=rows;j++){const z=bounds.minZ+j/rows*depth;for(let i=0;i<=columns;i++)grid[j*(columns+1)+i]=world.height(bounds.minX+i/columns*width,z);}
    cache.grids.set(key,grid);
  }
  return grid;
}
