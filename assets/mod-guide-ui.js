// Small, local-only guide; no seller feed or analytics request on search.
(() => {
  const esc=value=>String(value??'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const normal=value=>String(value??'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
  const safeURL=value=>{try{const url=new URL(value);return url.protocol==='https:'?url.href:null;}catch{return null;}};
  function filterCategories(categories,query,products=[]){
    const byId=new Map(products.map(p=>[p.id,p]));
    const terms=normal(query).trim().split(/\s+/).filter(Boolean);
    return categories.filter(c=>{
      const linked=(c.productIds||[]).map(id=>byId.get(id)).filter(Boolean);
      const text=normal([c.title,...(c.variants||[]),c.coverage,c.gap,...(c.sources||[]).map(s=>s.label),...linked.flatMap(p=>[p.name,p.region,p.seller,p.category])].join(' '));
      return terms.every(term=>text.includes(term));
    });
  }
  function renderCategory(category,guide,products=[],open=false){
    const byId=new Map(products.map(p=>[p.id,p]));
    const linked=(category.productIds||[]).map(id=>byId.get(id)).filter(Boolean);
    const sources=(category.sources||[]).map(s=>({label:s.label,url:safeURL(s.url)})).filter(s=>s.url);
    const evidence=guide.levels?.[category.evidence]||'Source notes';
    return `<details class="mod-guide-category" data-guide-category="${esc(category.id)}" name="global-mod-categories"${open?' open':''}>
      <summary><span class="mod-guide-category-title">${esc(category.title)}</span><span class="mod-guide-evidence">${esc(evidence)}</span></summary>
      <div class="mod-guide-content"><h4>Variants to explore</h4><ul class="mod-guide-variants">${(category.variants||[]).map(v=>`<li>${esc(v)}</li>`).join('')}</ul>
      <p><strong>On this site:</strong> ${esc(category.coverage)}</p><p class="mod-guide-gap"><strong>Worth checking:</strong> ${esc(category.gap)}</p>
      ${linked.length?`<h4>Specific products and suppliers</h4><div class="mod-guide-products">${linked.map(p=>`<button type="button" class="text-button" data-source-part="${esc(p.id)}">${esc(p.name)}<span class="mod-guide-product-market">${esc(p.region)} · ${p.visual?'Representative preview':'Research listing'}</span></button>`).join('')}</div><p class="mod-guide-fitment-note">Supplier links open product information. Confirm your body style, exact fitment, stock and installed cost before buying.</p>`:''}
      <h4>Read the sources</h4><ul class="mod-guide-sources">${sources.map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.label)} <span class="mod-guide-external-note">(opens new tab)</span></a></li>`).join('')}</ul></div>
    </details>`;
  }
  function mount(container,{guide=window.JIMNY_GLOBAL_MOD_GUIDE,products=window.JIMNY_MARKET_PRODUCTS||[]}={}){
    if(!container)return()=>{};
    if(!Array.isArray(guide?.categories)||!guide.categories.length){container.textContent='The modification guide is unavailable in this build. Refresh the page, or use Parts to explore the catalogue.';return()=>{};}
    container.innerHTML=`<div class="mod-guide-heading"><h3>Explore modification ideas worldwide</h3><p>Find a direction, compare the variants, then check real products and resources.</p></div>
      <details class="mod-guide-method"><summary>How this guide is researched</summary><p>${esc(guide.methodology)}</p><p>Sources checked ${esc(guide.checked)}. This is not a fitment, safety or legal approval.</p></details>
      <div class="mod-guide-search"><label for="globalModGuideSearch">Search modification ideas</label><div class="mod-guide-search-row"><input id="globalModGuideSearch" type="search" maxlength="100" placeholder="Try retro, roof, India or cargo" autocomplete="off" aria-controls="globalModGuideResults" aria-describedby="globalModGuideStatus"><button type="button" class="text-button" data-guide-clear hidden>Clear search</button></div></div>
      <p id="globalModGuideStatus" class="mod-guide-status" role="status" aria-live="polite" aria-atomic="true"></p>
      <div id="globalModGuideResults" class="mod-guide-results"></div><button type="button" class="btn" data-guide-more></button>`;
    const search=container.querySelector('#globalModGuideSearch'),list=container.querySelector('#globalModGuideResults'),status=container.querySelector('#globalModGuideStatus'),more=container.querySelector('[data-guide-more]'),clear=container.querySelector('[data-guide-clear]');
    let expanded=false,openId=null;
    function render(){
      const query=search.value.trim(),matches=filterCategories(guide.categories,query,products);
      const shown=query||expanded?matches:matches.slice(0,6);
      status.textContent=query?`${matches.length} ${matches.length===1?'category':'categories'} match “${query}”.`:`Showing ${shown.length} of ${matches.length} categories. Open a category to explore.`;
      list.innerHTML=shown.length?shown.map(c=>renderCategory(c,guide,products,c.id===openId)).join(''):'<p class="mod-guide-empty">No matching modification ideas. Try a part type such as “rack” or “grille”, or clear your search.</p>';
      clear.hidden=!query;more.hidden=!!query||matches.length<=6;
      more.textContent=expanded?'Show fewer categories':`Browse all ${matches.length} categories`;
      more.setAttribute('aria-expanded',String(expanded));more.setAttribute('aria-controls','globalModGuideResults');
    }
    const onInput=()=>render();
    const onClear=()=>{search.value='';render();search.focus();};
    const onMore=()=>{expanded=!expanded;render();};
    const onToggle=event=>{
      const detail=event.target;
      if(!detail.matches?.('[data-guide-category]'))return;
      if(detail.open){openId=detail.dataset.guideCategory;for(const other of list.querySelectorAll('[data-guide-category]'))if(other!==detail)other.open=false;}
      else if(openId===detail.dataset.guideCategory)openId=null;
    };
    search.addEventListener('input',onInput);clear.addEventListener('click',onClear);more.addEventListener('click',onMore);list.addEventListener('toggle',onToggle,true);
    render();
    return()=>{search.removeEventListener('input',onInput);clear.removeEventListener('click',onClear);more.removeEventListener('click',onMore);list.removeEventListener('toggle',onToggle,true);};
  }
  window.JIMNY_MOD_GUIDE_UI={filterCategories,renderCategory,mount};
  if(typeof document!=='undefined'){
    document.addEventListener('click',event=>{
      if(!event.target.closest('[data-open-mod-guide]'))return;
      if(window.JimnyOwnerWorkspace){window.JimnyOwnerWorkspace.openPurpose();return;}setWorkbenchMode('parts');
      requestAnimationFrame(()=>requestAnimationFrame(()=>{
        const guide=document.getElementById('globalModGuide');guide?.scrollIntoView({block:'start',behavior:'instant'});
        document.getElementById('globalModGuideSearch')?.focus({preventScroll:true});
      }));
    });
    const start=()=>mount(document.getElementById('globalModGuide'));
    if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
  }
})();
