(() => {
  const data=window.JIMNY_DIRECTORY,$=id=>document.getElementById(id);
  const countryOptions=window.JIMNY_REGIONS.map(r=>`<option value="${r.code}">${escHtml(r.name)}</option>`).join('');
  for(const id of ['sourceCountry','shopCountry','clubCountry'])$(id).innerHTML='<option value="all">All countries</option>'+countryOptions;
  $('listingCountry').innerHTML=countryOptions;
  $('sourceCountry').value='all';
  function renderClubs(){
    const q=$('clubSearch').value.trim(),country=$('clubCountry').value;
    const clubs=window.JIMNY_CLUBS.filter(c=>(country==='all'||c.country===country)&&data.matches([c.name,c.area,c.kind,c.desc,data.countryName(c.country)].join(' '),q));
    clubs.sort((a,b)=>Number(b.country===window.jimnyRegion)-Number(a.country===window.jimnyRegion)||a.name.localeCompare(b.name));
    $('regionalClubs').innerHTML='<div class="regional-grid">'+clubs.map(c=>`<article class="shop"><div class="city">${escHtml(data.countryName(c.country))} · ${escHtml(c.area)}</div><h3>${escHtml(c.name)}</h3><span class="shoptag">${escHtml(c.kind)}</span><p>${escHtml(c.desc)}</p><a class="btn intl" href="${escHtml(c.url)}" target="_blank" rel="noopener noreferrer">Visit community <span aria-hidden="true">↗</span></a></article>`).join('')+'</div>';
    $('clubStatus').textContent=`${clubs.length} listed ${clubs.length===1?'community link':'community links'} · ${country==='all'?'All countries':data.countryName(country)}${q?' · “'+q+'”':''}`;
    $('clubNoResults').hidden=clubs.length>0;
  }
  window.refreshResourceDirectory=resetRegion=>{
    if(resetRegion){$('shopCountry').value=window.jimnyRegion;$('clubCountry').value=window.jimnyRegion;}
    renderClubs();filterShops();filterOnlineStores();
  };
  $('shopCountry').addEventListener('change',filterShops);
  $('sourceCountry').addEventListener('change',filterOnlineStores);
  $('clubCountry').addEventListener('change',renderClubs);
  $('clubSearch').addEventListener('input',renderClubs);
  document.addEventListener('click',e=>{
    if(e.target.closest('[data-reset-clubs]')){$('clubSearch').value='';$('clubCountry').value='all';renderClubs();}
    if(e.target.closest('[data-reset-fitters]')){$('shopCountry').value=window.jimnyRegion;filterShops();}
    if(e.target.closest('[data-reset-sources]')){$('sourceCountry').value='all';filterOnlineStores();}
    if(e.target.closest('[data-open-fitters],[data-open-source],[data-package-fitter],#findCityFitters')){$('shopCountry').value=window.jimnyRegion;filterShops();}
  });
  window.refreshResourceDirectory(true);

  const dialog=$('listingDialog'),form=$('listingForm'),status=$('listingStatus'),submit=$('listingSubmit');
  // Netlify removes data-netlify only after detecting the static form at deploy.
  // Fail closed on local/undetected builds: never pretend a saved file was sent.
  const live=!form.hasAttribute('data-netlify')&&!['localhost','127.0.0.1',''].includes(location.hostname);
  $('listingDeliveryNote').textContent=live?'Your request and contact email are sent to this site’s private review inbox via Netlify Forms. Only approved public details appear in the directory.':'Preview mode: online submissions are not enabled in this build. Save a request file for the site owner; nothing is sent or listed automatically.';
  submit.textContent=live?'Send for review':'Save request file';
  let trigger=null,busy=false;
  document.addEventListener('click',e=>{
    const invite=e.target.closest('[data-listing-invite]');if(!invite)return;
    trigger=invite;form.elements.kind.value=invite.dataset.listingInvite;
    $('listingCountry').value=window.jimnyRegion;status.textContent='';dialog.showModal();
  });
  dialog.querySelector('[data-close-listing]').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('close',()=>trigger?.focus({preventScroll:true}));
  function download(){
    if(!form.reportValidity())return;
    const payload=Object.fromEntries(new FormData(form));delete payload['company-fax'];delete payload['form-name'];
    const content=JSON.stringify({request:'jimnygami directory review',...payload},null,2);
    const url=URL.createObjectURL(new Blob([content],{type:'application/json'})),a=document.createElement('a');a.href=url;a.download='jimnygami-listing-request.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
    status.textContent='Request file saved. It has not been sent or published.';
  }
  form.querySelector('[data-download-listing]').addEventListener('click',download);
  form.addEventListener('submit',async e=>{
    e.preventDefault();if(busy||!form.reportValidity())return;
    if(!live){download();return;}
    busy=true;submit.disabled=true;status.textContent='Sending your request…';
    try{
      const response=await fetch('/',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams(new FormData(form)).toString()});
      if(!response.ok)throw new Error('Submission unavailable');
      status.textContent='Request received for review. This does not publish a listing automatically.';form.reset();
    }catch{status.textContent='Your request could not be confirmed. Please try again, or download a copy. No listing has been published.';}
    finally{busy=false;submit.disabled=false;}
  });
})();
