/* Page integration kept separate from the resource data for straightforward review. */
(() => {
  const select=document.getElementById('regionSelect');
  const wide=window.matchMedia('(min-width:900px)');
  function regionDisclosure(){document.querySelector('.market-context').open=wide.matches;}
  wide.addEventListener('change',regionDisclosure);regionDisclosure();
  const bodySelect=document.getElementById('bodySelect');
  window.refreshJimnyBodyUI=()=>{
    const short=bodyStyle==='3door';bodySelect.value=bodyStyle;document.body.dataset.body=bodyStyle;
    document.getElementById('bodyScopeNote').hidden=!short;
    let lampScope=document.getElementById('lampScope');if(!lampScope){lampScope=document.createElement('p');lampScope.id='lampScope';lampScope.className='editor-note';document.getElementById('lampChoices').before(lampScope);}lampScope.textContent=short?'3-door: these lamps are research shortlists only. Confirm JB74 mounting and wiring with the seller; they are not added to this 3D body.':'Tap a lamp picture to fit it; tap again to remove. Compatible pairs can be combined. Alternatives in the same mounting position replace one another.';
    document.querySelectorAll('img[src*="previews/"][src*="preset-"]').forEach(img=>{const id=img.src.split('preset-')[1],next=`assets/previews/${short?'swb/':''}preset-${id}`;if(img.getAttribute('src')!==next)img.src=next;});
    document.querySelectorAll('[data-part-preview]').forEach(b=>{
      const part=modById[b.dataset.partPreview],visualId=part?.visual||b.dataset.partPreview;
      const unsupported=short&&!['tires','skinnyjim_backbone','skinnyjim_jerry_tray'].includes(visualId);b.disabled=unsupported;
      if(b.classList.contains('lamp-thumbnail'))b.hidden=short;
      const image=b.querySelector('img');if(image){image.hidden=unsupported;if(!unsupported)image.src=`assets/previews/${short?'swb/':''}${b.classList.contains('lamp-thumbnail')?'lamp':'part'}-${b.dataset.partPreview}.webp`;}
      const label=b.querySelector('span');if(label)label.textContent=unsupported?'JB74 fitment to confirm':'Inspect in 3D';
    });
    document.querySelectorAll('[data-cabin-colour]').forEach(b=>b.disabled=short);
    document.querySelectorAll('.pkg .parts').forEach(p=>{if(!p.dataset.original)p.dataset.original=p.textContent;p.textContent=p.dataset.original+(short?' · Research list; only tyres are previewed in 3D.':'');});
    document.querySelectorAll('.model-fidelity').forEach(p=>{
      if(!p.dataset.original)p.dataset.original=p.textContent;
      p.textContent=short?'Research shortlist · Check JB74 compatibility per product. Tyres and the supported rear carrier system have representative previews; other catalogue parts may be research-only.':p.dataset.original;
    });
  };
  bodySelect.addEventListener('change',()=>{
    const target=bodySelect.value;
    if(target===bodyStyle)return;
    rememberUndo();
    try{localStorage.setItem('thatsuvmod-body-build-'+bodyStyle,JSON.stringify(currentPayload()));}catch{}
    const saved=readJSON('thatsuvmod-body-build-'+target,null);
    loadPayload(saved?{...saved,body:target}:{...currentPayload(),body:target,parts:[],name:target==='3door'?'My three-door Jimny':'My Jimny'});
    showToast(`${target==='3door'?'Three':'Five'}-door build opened. Your other build is kept on this device.`,'Undo',undoLastChange);
  });
  select.innerHTML=window.JIMNY_REGIONS.map(r=>`<option value="${r.code}">${r.name}</option>`).join('');
  function renderRegion(){
    select.value=window.jimnyRegion;
    const region=window.JIMNY_REGIONS.find(r=>r.code===select.value);
    document.getElementById('regionNote').textContent=region.note;
    document.getElementById('priceRegionNote').textContent='Dated supplier price snapshots apply only to the listed item and region. Confirm current prices; fitting labour requires a quote.';
    document.querySelectorAll('#goalBudget option').forEach(o=>{o.dataset.inrLabel??=o.textContent;o.textContent=select.value==='IN'?o.dataset.inrLabel:'Up to '+window.JimnyMoney.approx(+o.value);});
    document.querySelectorAll('[data-inr]').forEach(e=>{const [lo,hi]=e.dataset.inr.split(',').map(Number);e.textContent=fmt(lo)+' – '+fmt(hi);});
    try{update();}catch{}
    window.refreshResourceDirectory?.(true);
    populateLocalAreas();document.getElementById('shopSearch').value=homeCity.value;
    document.getElementById('shopType').value='all';filterShops();renderSourceQuick(getBuildStats());
  }
  select.addEventListener('change',()=>{
    window.jimnyRegion=select.value;
    try{localStorage.setItem('thatsuvmod-region',select.value);}catch{}
    renderRegion();applyPartFilters();document.getElementById('sourceSearch').value='';document.getElementById('sourceType').value='all';const source=window.jimnySourceRequest||{};renderOnlineStores(source.partId,source.contextLabel,source.packageId);
    showToast(`Resources now prioritise ${regionName()}. Your build is unchanged.`);
  });
  const layout=document.getElementById('layoutChoice');
  function setLayout(studio){document.body.classList.toggle('studio-layout',studio);layout.setAttribute('aria-pressed',String(studio));layout.textContent=studio?'Layout: Studio · switch to Guide':'Layout: Guide · try Studio';layout.title='Two desktop layouts: Field Guide for discovery, Studio for a larger car-first workbench. Your build stays the same.';requestAnimationFrame(()=>window.dispatchEvent(new Event('resize')));}
  layout.addEventListener('click',()=>{const on=!document.body.classList.contains('studio-layout');setLayout(on);try{localStorage.setItem('thatsuvmod-layout',on?'studio':'guide');}catch{}});
  try{setLayout(localStorage.getItem('thatsuvmod-layout')==='studio');}catch{}
  renderRegion();window.refreshJimnyBodyUI();
})();
