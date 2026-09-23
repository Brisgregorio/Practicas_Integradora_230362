// Adds main-branch publishing links to Archify's existing selectable passport.
// These are locally inspected sources, not Archify commit-verified evidence.
(() => {
  'use strict';
  const metadata = JSON.parse(document.getElementById('prototype-source-data').textContent);
  const idField = document.getElementById('focus-id');
  const section = document.createElement('section');
  section.id = 'prototype-source-details';
  section.setAttribute('aria-label', 'Educational prototype source details');
  document.getElementById('focus-evidence').after(section);
  function row(label, value) {
    const p = document.createElement('p');
    const strong = document.createElement('strong');
    strong.textContent = label + ': ';
    p.append(strong, document.createTextNode(value));
    return p;
  }
  function update() {
    const id = idField.textContent.trim();
    const node = metadata.nodes[id];
    section.replaceChildren();
    section.hidden = !node;
    if (!node) return;
    section.dataset.component = id;
    section.append(row('Component', node.name), row('Technology', node.technology),
      row('Responsibility', node.responsibility));
    for (const source of node.sources) {
      const group = document.createElement('div');
      group.className = 'prototype-source-entry';
      const code = document.createElement('code');
      code.textContent = source.path === '.' ? '. (repository root)' : source.path;
      const path = row('Real source path', '');
      path.append(code);
      const link = document.createElement('a');
      link.textContent = 'Open source code';
      link.href = source.url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.setAttribute('aria-label', 'Open source code: ' + source.path);
      group.append(path, link);
      section.append(group);
    }
    section.append(row('Scope', 'Educational prototype · main publishing targets. Remote availability is not verified.'));
  }
  new MutationObserver(update).observe(idField, {childList: true, subtree: true, characterData: true});
  update();
})();
