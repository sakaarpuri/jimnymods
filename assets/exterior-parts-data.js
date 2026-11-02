/* Approved reference-guided additions. Dimensions not published by a maker are
   visual estimates; this registry is shared by catalogue, Garage and Drive. */
(function(root){
 const suzuki='https://www.suzuki.com.au/vehicles/4x4/jimny/accessories/';
 const maruti=(slug,sku)=>`https://www.marutisuzuki.com/genuine-accessories/${slug}/${sku.toLowerCase()}`;
 const rows=[
 ['msga_rugged_cladding','market_msga_cladding','Maruti Rugged Body Cladding',['5door'],'side','door-cladding',maruti('rugged-body-cladding-jimny','990J0M80T01-010'),'Maruti Suzuki','India','990J0M80T01-010'],
 ['suzuki_side_moulding','ext_suzuki_side_moulding','Suzuki Black Side Body Moulding',['3door'],'side','door-cladding',suzuki,'Suzuki','Australia','990E0-78R07'],
 ['suzuki_sill_3door','ext_suzuki_sill_3door','Suzuki Side Under Garnish · 3-door',['3door'],'side','sill-garnish',suzuki,'Suzuki','Australia','99112-78R10'],
 ['suzuki_sill_5door','ext_suzuki_sill_5door','Suzuki Side Under Garnish · 5-door',['5door'],'side','sill-garnish',suzuki,'Suzuki','Australia','99112-80T10'],
 ['msga_bumper_garnish','ext_msga_bumper_garnish','Maruti Front Bumper Garnish',['5door'],'front','bumper-accent',maruti('front-bumper-garnish-jimny','990J0M80T07-020'),'Maruti Suzuki','India','990J0M80T07-020'],
 ['msga_tread_skid','ext_msga_tread_skid','Maruti Front Skid Plate · Tread Metal',['5door'],'front','front-under-garnish',maruti('front-skid-plate-tread-metal-jimny','990J0M80T07-040'),'Maruti Suzuki','India','990J0M80T07-040'],
 ['msga_front_fender','ext_msga_front_fender','Maruti Front Fender Garnish · Tread Metal',['5door'],'front-quarter','front-fender',maruti('front-fender-garnish-tread-metal-jimny','990J0M80T13-030'),'Maruti Suzuki','India','990J0M80T13-030'],
 ['msga_rear_fender','ext_msga_rear_fender','Maruti Rear Fender Garnish · Tread Metal',['5door'],'rear-quarter','rear-fender',maruti('rear-fender-garnish-tread-metal-jimny','990J0M80T13-040'),'Maruti Suzuki','India','990J0M80T13-040'],
 ['suzuki_bumper_under','ext_suzuki_bumper_under','Suzuki Front Bumper Under Garnish',['3door','5door'],'front','front-under-garnish',suzuki,'Suzuki','Australia','99115-78R10'],
 ['jimnyworx_corners','ext_jimnyworx_corners','JimnyworX Front & Rear Corner Guards',['3door'],'front-quarter','corner-guards','https://www.jimnyworxsa.co.za/shop/jimny-accessories/front-and-rear-corner-guards/','JimnyworX SA','South Africa',null],
 ['wheel_wildboar','market_apio_wildboar_d','APIO WILDBOAR D',['3door','5door'],'wheel-detail','wheel-design','https://apio.jp/parts/7200-60.html','APIO','Japan',null,15,'dish',16],
 ['wheel_alap','ext_rays_alap','RAYS A-LAP-J',['3door','5door'],'wheel-detail','wheel-design','https://www.rayswheels.co.jp/products/brand/detail/148','RAYS','Japan',null,16,'spoke',10],
 ['wheel_rpt1','ext_enkei_rpt1','ENKEI ALLROAD RPT1',['3door','5door'],'wheel-detail','wheel-design','https://www.enkei.co.jp/product/wheels/ALLROAD/RPT1/','ENKEI','Japan',null,16,'paired',6],
 ['wheel_m9','ext_rays_m9','RAYS DAYTONA M9+',['3door','5door'],'wheel-detail','wheel-design','https://www.rayswheels.co.jp/products/brand/detail/175','RAYS','Japan',null,16,'mesh',9],
 ['wheel_dakar','market_7565731397857','EVO Corse DakarZero',['3door','5door'],'wheel-detail','wheel-design','https://ozjimny.com/products/evo-corse-dakarzero-15x7-matte-black-alloy-wheel-et0-5x139-7-cb-108-3','OZ Jimny','Australia',null,15,'rally',10],
 ['wheel_baja','market_8596313309409','American Racing Baja',['3door','5door'],'wheel-detail','wheel-design','https://ozjimny.com/products/american-racing-baja-satin-black-alloy-wheel-15x7-et-6-jimny-models-2018-current-xl-5-door-glx-lite-3-door','OZ Jimny','Australia',null,15,'round',8],
 ['wheel_dynamic_round','market_8566320136417','Dynamic Round Hole Steel',['5door'],'wheel-detail','wheel-design','https://ozjimny.com/products/dynamic-wheel-co-round-hole-black-steel-wheel-15x7-et-12-jimny-models-2023-current-xl-5-door','OZ Jimny','Australia',null,15,'steel-round',10],
 ['wheel_sunraysia','market_8566347104481','Dynamic Sunraysia Steel',['5door'],'wheel-detail','wheel-design','https://ozjimny.com/products/dynamic-wheel-co-sunraysia-black-steel-wheel-15x7-et-12-jimny-models-2023-current-xl-5-door','OZ Jimny','Australia',null,15,'sunraysia',8]
 ];
 const parts=Object.fromEntries(rows.map(([visual,id,name,bodyStyles,camera,family,url,seller,region,sku,diameter,style,count])=>[visual,{visual,id,name,bodyStyles,camera,family,url,seller,region,sku,diameter,style,count}]));
 root.JimnyExteriorParts=Object.freeze(parts);
 root.JimnyExteriorConflict=(a,b)=>{
  const x=parts[a],y=parts[b];
  if(x&&y)return x.family===y.family||(x.family==='corner-guards'&&/fender/.test(y.family))||(y.family==='corner-guards'&&/fender/.test(x.family));
  const ext=x||y,other=x?b:a;
  return !!ext&&((ext.family==='wheel-design'&&other==='suzuki_nomade_steelwheel')||(ext.family==='door-cladding'&&other==='cladding')||(['bumper-accent','front-under-garnish'].includes(ext.family)&&['bull','autostylenn_bumper_v1'].includes(other))||(ext.family==='sill-garnish'&&other==='sliders')||(/fender|corner/.test(ext.family)&&other==='flares'));
 };
 // Preserve existing IDs, saved builds, stock snapshots and source photographs.
 if(root.JIMNY_MARKET_PRODUCTS)for(const p of Object.values(parts)){
  const old=root.JIMNY_MARKET_PRODUCTS.find(m=>m.id===p.id);
  const note=p.diameter?'Reference-guided wheel face and nominal rim diameter. Tyre tread and custom finish are independent; verify exact offset, width, clearance and load rating.':'Reference-guided visible shape; hidden mounts and unpublished dimensions are illustrative.';
  const data={...p,category:p.diameter?'Wheels':'Body & cladding',previewKind:'reference-guided',referenceModel:true,note,fitment:`${p.bodyStyles.map(b=>b==='3door'?'3-door JB74':'5-door / XL').join(' and ')}. ${p.sku?'Reference part '+p.sku+'. ':''}${p.visual==='suzuki_bumper_under'?'The three-door reference is MY25 and earlier; the MY26 bumper uses a different garnish. ':''}Confirm exact chassis and variant with the seller.`};
  if(old)Object.assign(old,data);else root.JIMNY_MARKET_PRODUCTS.push({...data,countryCode:({India:'IN',Australia:'AU',Japan:'JP','South Africa':'ZA'})[p.region],checked:'2026-10-26',stockAtCheck:'unknown'});
 }
})(globalThis);
