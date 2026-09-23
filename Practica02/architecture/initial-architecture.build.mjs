// Usage: node initial-architecture.build.mjs <installed-archify-directory>
// Keep the stock Archify JSON schema valid; source metadata is an editable sidecar.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import assert from 'node:assert/strict';

const dir = path.dirname(fileURLToPath(import.meta.url));
const skill = path.resolve(process.argv[2] || process.env.ARCHIFY_SKILL || '');
const cli = path.join(skill, 'bin/archify.mjs');
assert.ok(fs.existsSync(cli), 'Pass the installed Archify directory');
const base = path.join(dir, 'initial-architecture');
const spec = JSON.parse(fs.readFileSync(base + '.json', 'utf8'));
const sources = JSON.parse(fs.readFileSync(base + '.sources.json', 'utf8'));
const repoRoot = path.resolve(dir, '../..');
assert.deepEqual(Object.keys(sources.nodes).sort(), spec.components.map(n => n.id).sort());
for (const node of Object.values(sources.nodes)) {
  for (const source of node.sources) {
    const resolved = path.resolve(repoRoot, source.path);
    assert.ok(resolved === repoRoot || resolved.startsWith(repoRoot + path.sep));
    assert.ok(fs.existsSync(resolved), source.path);
    const expected = source.path === '.' ? sources.repository :
      sources.repository + (fs.statSync(resolved).isDirectory() ? '/tree/' : '/blob/') + sources.branch + '/' + source.path;
    assert.equal(source.url, expected);
  }
}
function command(args) {
  return JSON.parse(execFileSync(process.execPath, [cli, ...args], {encoding: 'utf8'}));
}
function digest(file) {
  const bytes = fs.readFileSync(file);
  return {sha256: createHash('sha256').update(bytes).digest('hex'), bytes: bytes.length};
}
const staging = base + '.archify.html';
const candidate = base + '.candidate.html';
try {
  const validation = command(['validate', 'architecture', base + '.json', '--quality', 'showcase', '--json']);
  assert.ok(validation.ok);
  const delivery = command(['deliver', 'architecture', base + '.json', staging, '--quality', 'showcase', '--json']);
  assert.ok(delivery.ok);
  const data = JSON.stringify(sources).replace(/</g, '\\u003c');
  const extension = `<style id="prototype-source-style">
    #focus-chip { width: min(30rem, calc(100% - 2rem)); max-width: calc(100% - 2rem); max-height: calc(100% - 2rem); overflow-y: auto; }
    #prototype-source-details { border-top: 1px solid var(--backend-stroke); margin-top: 10px; padding-top: 8px; font-size: 12px; line-height: 1.5; }
    #prototype-source-details p { margin: 5px 0; overflow-wrap: anywhere; }
    #prototype-source-details code { font-size: 11px; overflow-wrap: anywhere; }
    .prototype-source-entry { margin: 9px 0; }
    .prototype-source-entry a { display: inline-block; padding: 6px 10px; border: 1px solid var(--frontend-stroke); border-radius: 5px; color: var(--frontend-stroke); font-weight: 700; text-decoration: underline; }
    .prototype-source-entry a:focus-visible { outline: 2px solid var(--frontend-stroke); outline-offset: 3px; }
    @media print { #prototype-source-details { display: none; } }
  </style>
  <script id="prototype-source-data" type="application/json">${data}</script>
  <script>${fs.readFileSync(base + '.viewer.js', 'utf8')}</script>`;
  let html = fs.readFileSync(staging, 'utf8');
  assert.equal(html.split('</body>').length, 2);
  html = html.replace('</body>', extension + '\n</body>');
  for (const node of Object.values(sources.nodes)) for (const source of node.sources) assert.ok(html.includes(source.url));
  fs.writeFileSync(candidate, html);
  const check = command(['check', candidate]);
  assert.ok(check.ok);
  fs.renameSync(candidate, base + '.html');
  const receipt = {
    diagram_type: 'architecture',
    output: 'initial-architecture.html',
    specification: digest(base + '.json'),
    sourceMetadata: digest(base + '.sources.json'),
    artifact: digest(base + '.html'),
    archifyBaseDelivery: delivery,
    finalArtifactCheck: check,
    componentsWithLinks: Object.keys(sources.nodes).length,
    distinctSourceUrls: new Set(Object.values(sources.nodes).flatMap(n => n.sources.map(s => s.url))).size,
    scope: 'Archify delivered the base. A reproducible source-passport extension was applied; the final extended HTML passed the Archify artifact checker. Browser evidence is separate.'
  };
  fs.writeFileSync(base + '.delivery.json', JSON.stringify(receipt, null, 2) + '\n');
  console.log(JSON.stringify({ok: true, artifact: receipt.artifact, componentsWithLinks: receipt.componentsWithLinks, distinctSourceUrls: receipt.distinctSourceUrls}));
} finally {
  for (const file of [staging, candidate]) if (fs.existsSync(file)) fs.unlinkSync(file);
}
