(() => {
  const tours = matchMedia('(prefers-reduced-motion: no-preference)').matches ? [...document.querySelectorAll('.tour')] : [];
  for (const tour of tours) {
    const track = tour.querySelector('.tour-track');
    const stick = tour.querySelector('.tour-stick');
    const view = tour.querySelector('.tour-view');
    const ph = tour.querySelector('.tour-phone');
    const caps = [...tour.querySelectorAll('.tcap')];
    const hots = [...ph.querySelectorAll('.ph-hot')];
    let at = 0;
    let queued = false;
    const place = () => {
      const f = caps[at].dataset.f.split(' ');
      const on = hots.filter((h) => f.includes(h.dataset.f));
      hots.forEach((h) => h.classList.toggle('is-on', on.includes(h)));
      caps.forEach((c, i) => c.classList.toggle('is-on', i === at));
      const top = ph.getBoundingClientRect().top;
      const boxes = on.map((h) => h.getBoundingClientRect());
      const mid = boxes.length ? (Math.min(...boxes.map((b) => b.top)) + Math.max(...boxes.map((b) => b.bottom))) / 2 - top : 0;
      const pad = 40;
      const max = Math.max(-pad, ph.offsetHeight - view.clientHeight + pad);
      ph.style.setProperty('--y', Math.min(max, Math.max(-pad, mid - view.clientHeight / 2)).toFixed(1));
    };
    const update = () => {
      queued = false;
      const r = track.getBoundingClientRect();
      const span = r.height - stick.offsetHeight;
      const p = span > 0 ? Math.min(1, Math.max(0, (parseFloat(getComputedStyle(stick).top) - r.top) / span)) : 0;
      const i = Math.min(caps.length - 1, Math.floor(p * caps.length));
      if (i !== at) {
        at = i;
        place();
      }
    };
    const queue = () => {
      if (!queued) {
        queued = true;
        requestAnimationFrame(update);
      }
    };
    ph.addEventListener('click', (e) => {
      const h = e.target.closest('.ph-hot');
      const i = h ? caps.findIndex((c) => c.dataset.f.split(' ').includes(h.dataset.f)) : -1;
      if (i < 0) return;
      const r = track.getBoundingClientRect();
      const span = r.height - stick.offsetHeight;
      scrollTo({ top: scrollY + r.top - parseFloat(getComputedStyle(stick).top) + ((i + 0.5) / caps.length) * span, behavior: 'smooth' });
    });
    addEventListener('scroll', queue, { passive: true });
    addEventListener('resize', () => {
      place();
      queue();
    });
    place();
    update();
  }

  const lb = document.querySelector('.lb');
  if (lb && lb.showModal) {
    const box = lb.querySelector('.lb-in');
    document.addEventListener('click', (e) => {
      const z = e.target.closest('.zoom');
      if (!z) return;
      box.replaceChildren(z.firstElementChild.cloneNode(true));
      lb.showModal();
    });
    lb.addEventListener('click', () => lb.close());
  }

  const typed = document.querySelectorAll('.kinds-lines');
  if (typed.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('is-in');
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.6 }
    );
    typed.forEach((el) => io.observe(el));
  } else {
    typed.forEach((el) => el.classList.add('is-in'));
  }

  const loops = document.querySelectorAll('[data-loop]');
  if (loops.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) e.target.classList.toggle('is-off', !e.isIntersecting);
    });
    loops.forEach((el) => io.observe(el));
  }

  const drops = [...document.querySelectorAll('.bar-menu, .bar-sub')];
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    for (const d of drops.filter((x) => x.open)) {
      d.open = false;
      d.querySelector('summary').focus();
    }
  });
  document.addEventListener('click', (e) => {
    for (const d of drops) if (d.open && (!d.contains(e.target) || e.target.closest('a'))) d.open = false;
  });
  matchMedia('(min-width: 1140px)').addEventListener('change', () => drops.forEach((d) => (d.open = false)));
})();
