// Run against a local Next production server with a test clock after the last release.
// Optional CLI args: URL and absolute path to a Playwright package.
const { chromium } = require(process.argv[3] || 'playwright');
const assert = require('node:assert/strict');
const path = require('node:path');
const posts = require('../../src/lib/scheduled-blog-posts.json');
(async () => {
  const browser = await chromium.launch({channel:'chrome',headless:true});
  try {
    const page = await browser.newPage({ viewport:{width:1440,height:1000} });
    const errors=[];page.on('pageerror',e=>errors.push(e.message));
    const base = process.argv[2] || 'http://localhost:4182';
    for(const [i,post] of posts.entries()) {
      const response=await page.goto(base+'/blog/'+post.slug);
      assert.equal(response.status(),200);
      await page.locator('.editorial-article h1').waitFor();
      assert.equal(await page.locator('h1').count(),1);
      assert.equal(await page.locator('link[rel="canonical"]').getAttribute('href'),'https://www.go-massive.com/blog/'+post.slug);
      assert.equal(await page.locator('.brief').count(),0);
      await page.waitForTimeout(700);
      if(i===0){
        await page.locator('#acos').focus();await page.keyboard.press('End');
        await page.waitForFunction(()=>document.querySelector('#value-a').textContent==='−$8.00');
        assert.equal(await page.locator('#value-b').innerText(),'−$16.00');
        await page.keyboard.press('Home');assert.equal(await page.locator('#value-a').innerText(),'+$16.00');
        await page.locator('#reset-example').click();assert.equal(await page.locator('#value-a').innerText(),'+$6.00');
        await page.screenshot({path:path.join(__dirname,'production-desktop.png'),fullPage:false});
      }
      if(i===1){for(const item of await page.locator('.gate').all())await item.check();assert.equal(await page.locator('#gate-output').innerText(),'4 of 4 gates reviewed');}
      if(i===2){await page.locator('#symptom').selectOption('3');assert.equal(await page.locator('#diagnosis-title').innerText(),'Compare promise with delivery');}
      if(i===3){await page.locator('#shipping').uncheck();assert.equal(await page.locator('#median').innerText(),'Median item-only amount: $79');}
      if(i===4){await page.locator('#scenario').selectOption('1');assert.equal(await page.locator('#decision-title').innerText(),'Investigate before excluding');}
      await page.setViewportSize({width:390,height:844});
      assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth <= window.innerWidth),true,post.slug+' mobile overflow');
      if(i===0) await page.screenshot({path:path.join(__dirname,'production-mobile.png'),fullPage:true});
      await page.setViewportSize({width:1440,height:1000});
      console.log('PASS',post.slug);
    }
    assert.deepEqual(errors,[]);
  } finally {await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
