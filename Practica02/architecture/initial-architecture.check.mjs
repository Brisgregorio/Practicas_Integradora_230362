// Real-browser checks; requires installed Archify and Chrome, no new packages.
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createHash } from 'node:crypto';
const dir = path.dirname(fileURLToPath(import.meta.url));
const skill = path.resolve(process.argv[2]);
const { findChrome } = await import(pathToFileURL(path.join(skill, 'bin/visual-check.mjs')));
const { desktopBrowser } = await import(pathToFileURL(path.join(skill, 'test/helpers/desktop-browser.mjs')));
const chrome = findChrome();
assert.ok(chrome, 'Chrome required');
const browser = desktopBrowser(chrome);
const base = path.join(dir, 'initial-architecture');
const source = JSON.parse(fs.readFileSync(base + '.sources.json', 'utf8'));
const observations = [];
try {
  const session = await browser.sessionPromise;
  const send = (method, params = {}) => browser.cdp.send(method, params, session);
  const run = async expression => {
    const result = await send('Runtime.evaluate', {expression, awaitPromise: true, returnByValue: true});
    assert.equal(result.exceptionDetails, undefined, JSON.stringify(result.exceptionDetails));
    return result.result?.value;
  };
  await send('Emulation.setDeviceMetricsOverride', {width: 1440, height: 900, deviceScaleFactor: 1, mobile: false});
  await send('Page.addScriptToEvaluateOnNewDocument', {source: "window.prototypeErrors=[];addEventListener('error',e=>prototypeErrors.push(e.message));addEventListener('unhandledrejection',e=>prototypeErrors.push(String(e.reason)));"});
  const loaded = browser.cdp.waitFor('Page.loadEventFired', session);
  await send('Page.navigate', {url: pathToFileURL(base + '.html').href + '?theme=light'});
  await loaded;
  await run('document.fonts.ready');
  const settle = () => run('new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)))');
  async function click(selector) {
    const point = await run(`(()=>{const e=document.querySelector(${JSON.stringify(selector)});const r=e.getBoundingClientRect();return {x:r.x+r.width/2,y:r.y+r.height/2}})()`);
    await send('Input.dispatchMouseEvent', {type:'mousePressed', ...point, button:'left', clickCount:1});
    await send('Input.dispatchMouseEvent', {type:'mouseReleased', ...point, button:'left', clickCount:1});
    await settle();
  }
  for (const [id, expected] of Object.entries(source.nodes)) {
    await run('Archify.focus.clear()');
    await settle();
    await click(`[data-node-id="${id}"]`);
    const observed = await run(`(()=>{
      const panel=document.getElementById('focus-chip');
      const section=document.getElementById('prototype-source-details');
      return {id:section.dataset.component,visible:!panel.hidden&&!section.hidden,
        text:section.innerText,links:[...section.querySelectorAll('a')].map(a=>({url:a.href,label:a.textContent,target:a.target,rel:a.rel})),
        selectable:document.querySelector('[data-node-id="${id}"]').getAttribute('tabindex')};
    })()`);
    assert.equal(observed.visible, true, id);
    assert.equal(observed.id, id);
    assert.equal(observed.selectable, '0');
    for (const field of ['name','technology','responsibility']) assert.ok(observed.text.includes(expected[field]), id + ':' + field);
    assert.deepEqual(observed.links.map(l=>l.url), expected.sources.map(s=>s.url));
    for (const s of expected.sources) assert.ok(observed.text.includes(s.path));
    for (const l of observed.links) {
      assert.equal(l.label, 'Open source code');
      assert.equal(l.target, '_blank');
      assert.ok(l.rel.includes('noopener'));
    }
    observations.push({id, passed:true, links:observed.links});
  }
  // Keyboard activation and Escape must retain the existing passport behavior.
  await run('Archify.focus.clear();document.querySelector("[data-node-id=identity]").focus()');
  await send('Input.dispatchKeyEvent', {type:'keyDown',key:'Enter',code:'Enter',windowsVirtualKeyCode:13,text:'\r'});
  await send('Input.dispatchKeyEvent', {type:'keyUp',key:'Enter',code:'Enter',windowsVirtualKeyCode:13});
  await settle();
  assert.equal(await run('!document.getElementById("focus-chip").hidden && document.getElementById("prototype-source-details").dataset.component === "identity"'), true);
  for (const theme of ['light', 'dark']) {
    await run(`if(document.documentElement.getAttribute('data-theme') !== '${theme}') document.getElementById('btn-theme').click()`);
    await run('Archify.focus.clear(); Archify.focus.set("identity"); new Promise(r=>setTimeout(r,500))');
    await settle();
    assert.equal(await run('!document.getElementById("focus-chip").hidden'), true);
    const capture = await send('Page.captureScreenshot', {format:'png', captureBeyondViewport:false});
    fs.writeFileSync(base + '.interaction.' + theme + '.png', Buffer.from(capture.data, 'base64'));
  }
  await send('Input.dispatchKeyEvent', {type:'keyDown',key:'Escape',code:'Escape',windowsVirtualKeyCode:27});
  await send('Input.dispatchKeyEvent', {type:'keyUp',key:'Escape',code:'Escape',windowsVirtualKeyCode:27});
  await settle();
  assert.equal(await run('document.getElementById("focus-chip").hidden'), true);
  assert.deepEqual(await run('prototypeErrors'), []);
  const bytes = fs.readFileSync(base + '.html');
  const receipt = {status:'pass',artifact:{sha256:createHash('sha256').update(bytes).digest('hex'),bytes:bytes.length},
    components:10,observations,keyboardActivation:true,escapeCloses:true,javascriptErrors:[],
    scope:'Physical mouse selection of all nodes and keyboard activation; exact URLs, visible details and new-tab attributes checked. Remote URLs were not fetched.'};
  fs.writeFileSync(base + '.interaction-check.json', JSON.stringify(receipt,null,2)+'\n');
  console.log(JSON.stringify({status:receipt.status,components:receipt.components,keyboardActivation:true,escapeCloses:true}));
} finally { await browser.close(); }
