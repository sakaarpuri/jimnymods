/* Supplier fitment and the body pictured are different facts. A shared listing
   photo is not proof that the image shows the shopper's selected body. */
(() => {
 const checked={
  market_6813435658407:{neutral:true}, // Isolated DAMD basket, no vehicle pictured.
  market_10339999318241:{bodies:['3door']},
  market_10339998204129:{bodies:['5door']},
  market_7636363641057:{bodies:['5door']},
  market_9654211346657:{bodies:['5door']},
  market_9526256959713:{unusable:true} // Pickup/roof-tent scene, not the listed Jimny bars.
 };
 function photoFor(part,body){
  const photo=window.JIMNY_PRODUCT_PHOTOS?.[part.id];if(!photo)return null;
  const evidence=checked[part.id];if(evidence?.unusable)return null;
  if(evidence?.neutral||photo.bodyNeutral)return photo;
  const bodies=evidence?.bodies||photo.bodyStyles;
  if(bodies)return bodies.includes(body)?photo:null;
  if(body==='3door')return part.bodyStyles?.length===1&&part.bodyStyles[0]==='3door'&&photo.kind!=='manufacturer-range-photo'?photo:null;
  return photo;
 }
 window.JimnyProductMedia={photoFor};
})();
