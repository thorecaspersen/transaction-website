(() => {
  const dlg = document.getElementById('lang-picker');
  if (!dlg) return;
  const root = document.documentElement;
  const cur = root.lang;
  const path = root.dataset.path || '/';
  const btn = document.querySelector('[aria-controls="lang-picker"]');
  const q = dlg.querySelector('input');
  const clear = dlg.querySelector('.lp-clear');
  const list = dlg.querySelector('.lp-list');
  const pin = dlg.querySelector('.lp-pin');
  const all = dlg.querySelector('.lp-all');
  const head = dlg.querySelector('.lp-h');
  const none = dlg.querySelector('.lp-none');
  const check = '<svg class="lp-check" viewBox="0 0 16 16" aria-hidden="true"><path d="M3.5 8.5l3 3 6-7"/></svg>';
  const fold = (s) => s.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase();
  const pinned = (l) => l.c === 'en' || l.c === 'da';
  let langs = null;
  let down = null;

  const load = () => (langs ||= fetch('/langs.json').then((r) => r.json()).catch(() => ((langs = null), [])));

  const row = (l) =>
    `<li data-k="${fold(`${l.n}|${l.e}|${l.c}`)}"><a class="lp-row" href="${(l.c === 'en' ? '' : `/${l.c}`) + path + location.hash}" hreflang="${l.c}" data-c="${l.c}"${l.c === cur ? ' aria-current="true"' : ''}>` +
    `<span class="lp-tx"><span class="lp-n" lang="${l.c}" dir="auto">${l.n}</span>${l.e === l.n ? '' : `<span class="lp-e" lang="en" dir="ltr">${l.e}</span>`}</span>${l.c === cur ? check : ''}</a></li>`;

  const filter = () => {
    const s = fold(q.value.trim());
    let hits = 0;
    for (const li of list.querySelectorAll('li')) {
      li.hidden = !li.dataset.k.includes(s);
      if (!li.hidden) hits++;
    }
    head.hidden = !!s || !all.children.length;
    none.hidden = hits > 0;
    clear.hidden = !q.value;
    list.scrollTop = 0;
  };

  btn.addEventListener('pointerdown', load);
  btn.addEventListener('click', async () => {
    const data = await load();
    pin.innerHTML = data.filter(pinned).map(row).join('');
    all.innerHTML = data
      .filter((l) => !pinned(l))
      .sort((a, b) => a.e.localeCompare(b.e, 'en'))
      .map(row)
      .join('');
    q.value = '';
    filter();
    dlg.showModal();
    if (matchMedia('(pointer: fine)').matches) q.focus();
  });

  q.addEventListener('input', filter);

  dlg.addEventListener('pointerdown', (e) => (down = e.target));
  dlg.addEventListener('click', (e) => {
    if (e.target === dlg) {
      if (down === dlg) dlg.close();
      return;
    }
    if (e.target.closest('.lp-x')) return dlg.close();
    if (e.target.closest('.lp-clear')) {
      q.value = '';
      filter();
      return q.focus();
    }
    const a = e.target.closest('[data-c]');
    if (!a) return;
    try {
      localStorage.setItem('lang', a.dataset.c);
    } catch {}
    if (a.dataset.c === cur) {
      e.preventDefault();
      dlg.close();
    }
  });

  dlg.addEventListener('keydown', (e) => {
    const enter = e.key === 'Enter' && e.target === q && q.value.trim();
    if (!enter && e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
    const rows = [...list.querySelectorAll('li:not([hidden]) > a')];
    if (enter) return rows[0]?.click();
    const i = rows.indexOf(document.activeElement);
    if (!rows.length || (i < 0 && e.key === 'ArrowUp')) return;
    e.preventDefault();
    (e.key === 'ArrowDown' ? rows[Math.min(i + 1, rows.length - 1)] : rows[i - 1] || q).focus();
  });
})();
