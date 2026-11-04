/* One geographic map, initialized only when visible and resized with its panel. */
(() => {
 function create(container,points,onSelect){
  let map=null,tiles=null,markers=[],visible=false,destroyed=false,frame=0,size='',selected=0,failures=0;
  const status=container.parentElement.querySelector('.trip-map-status'),retry=container.parentElement.querySelector('[data-trip-map-retry]');
  const coords=points.map(([,lat,lon])=>[lat,lon]);
  function fit(){if(map)map.fitBounds(coords,{padding:[28,28],maxZoom:10,animate:false});}
  function select(index){
   selected=index;
   if(!map)return;
   markers.forEach((marker,i)=>marker.getElement()?.classList.toggle('is-selected',i===index));
   map.setView(coords[index],Math.max(map.getZoom(),9),{animate:false});markers[index].openPopup();
  }
  function initialize(){
   if(map||!visible||destroyed||!container.isConnected||!container.clientWidth||!container.clientHeight)return;
   if(!window.L){status.textContent='Map unavailable. Use the full-map link or the numbered itinerary.';return;}
   const L=window.L;
   map=L.map(container,{scrollWheelZoom:false,zoomAnimation:false,fadeAnimation:false});
   map.attributionControl.setPrefix(false);
   const missing='data:image/svg+xml,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256"><rect width="256" height="256" fill="#e8ece5"/><text x="128" y="128" text-anchor="middle" fill="#55605a" font-size="14">Map tile unavailable</text></svg>');
   tiles=L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{
    maxZoom:19,referrerPolicy:'strict-origin-when-cross-origin',errorTileUrl:missing,
    attribution:'&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap contributors</a>'
   });
   tiles.on('loading',()=>{status.textContent='Loading map…';});
   tiles.on('tileerror',event=>{event.tile.dataset.mapTileFailed='1';failures++;status.textContent='Some map tiles could not load. Retry or open the full map.';retry.hidden=false;});
   tiles.on('load',()=>{failures=container.querySelectorAll('[data-map-tile-failed]').length;if(!failures){status.textContent='Map ready · choose a numbered stop';retry.hidden=true;}});
   tiles.addTo(map);
   L.polyline(coords,{color:'#3c634a',weight:3,dashArray:'6 7',opacity:.9,interactive:false}).addTo(map);
   markers=points.map(([name,lat,lon],index)=>{
    const label=document.createElement('span');label.textContent=`${index+1}. ${name}`;
    const icon=L.divIcon({className:'trip-map-marker',html:String(index+1),iconSize:[30,30],iconAnchor:[15,15]});
    return L.marker([lat,lon],{icon,title:`${index+1}. ${name}`,alt:name,keyboard:true}).addTo(map).bindPopup(label).on('click',()=>onSelect(index));
   });
   fit();markers[0]?.getElement()?.classList.add('is-selected');if(selected)select(selected);
  }
  function resize(){
   if(destroyed)return;
   cancelAnimationFrame(frame);frame=requestAnimationFrame(()=>{
    const next=container.clientWidth+'x'+container.clientHeight;
    if(next===size)return;size=next;if(!container.clientWidth||!container.clientHeight)return;
    initialize();map?.invalidateSize({pan:false,debounceMoveend:true});
   });
  }
  const intersection=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(visible){initialize();resize();}});
  const observer=new ResizeObserver(resize);intersection.observe(container);observer.observe(container);
  retry.onclick=()=>{if(!tiles)return;failures=0;retry.hidden=true;status.textContent='Loading map…';map.invalidateSize({pan:false});tiles.redraw();};
  return {select,fit,destroy(){destroyed=true;intersection.disconnect();observer.disconnect();cancelAnimationFrame(frame);map?.remove();},snapshot:()=>({ready:!!map,selected,size:map?map.getSize():null,container:{width:container.clientWidth,height:container.clientHeight},markers:markers.length,failures})};
 }
 window.JimnyTripMap={create};
})();
