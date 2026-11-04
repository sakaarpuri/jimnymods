import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp, readFile, rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import vm from 'node:vm';
import {buildGallery} from '../scripts/build-gallery.mjs';

test('every Garage preset has a crawlable build page, matching body links, and only appears in its own style filters', async () => {
  const folder=await mkdtemp(join(tmpdir(),'jimny-gallery-'));
  try{
    await buildGallery(folder,'https://example.com');
    const context={window:{}};
    for(const file of ['look-packages','build-styles'])vm.runInNewContext(await readFile('assets/'+file+'.js','utf8'),context);
    const index=await readFile(join(folder,'builds/index.html'),'utf8');
    const sitemap=await readFile(join(folder,'builds/sitemap.xml'),'utf8');
    const tags=context.window.JIMNY_BUILD_STYLES;
    for(const build of context.window.JIMNY_LOOK_PACKAGES){
      const path='/builds/'+build.id+'/';
      const html=await readFile(join(folder,path,'index.html'),'utf8');
      assert.ok(index.includes('href="'+path+'"'));
      assert.ok(sitemap.includes('<loc>https://example.com'+path+'</loc>'));
      assert.ok(html.includes('href="/?look='+build.id+'#garage"'));
      assert.ok(html.includes('href="/?look='+build.id+'&amp;body=3door#garage"'));
      assert.ok(html.includes('property="og:image" content="https://example.com/assets/previews/preset-'+build.id+'.webp"'));
      for(const tag of new Set(Object.values(tags).flat())){
        const listing=await readFile(join(folder,'builds/styles',tag.toLowerCase(),'index.html'),'utf8');
        assert.equal(listing.includes('href="'+path+'"'),tags[build.id].includes(tag));
      }
    }
  } finally {await rm(folder,{recursive:true,force:true});}
});
