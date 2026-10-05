// Eagle Nation — site interactions. Every block null-checks so it is safe on any page.

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------------------------------------------------------------- Header state */
const header = document.querySelector('[data-header]');
if (header) {
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 24);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ---------------------------------------------------------------- Mobile menu */
const toggle = document.querySelector('[data-menu-toggle]');
const menu = document.querySelector('[data-mobile-menu]');
if (toggle && menu) {
  const setOpen = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
    // backdrop-filter makes the header a containing block for fixed children, which
    // would clip the full-screen menu to the header bar — drop it while open.
    header?.classList.toggle('menu-open', open);
    if (open) {
      menu.hidden = false;
      requestAnimationFrame(() => menu.classList.add('is-open'));
      header?.classList.add('is-scrolled');
    } else {
      menu.classList.remove('is-open');
      setTimeout(() => { if (toggle.getAttribute('aria-expanded') === 'false') menu.hidden = true; }, 350);
      if (window.scrollY <= 24) header?.classList.remove('is-scrolled');
    }
  };
  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  menu.addEventListener('click', (e) => { if (e.target.closest('a')) setOpen(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { setOpen(false); toggle.focus(); } });
  window.matchMedia('(min-width: 1060px)').addEventListener('change', (mq) => { if (mq.matches) setOpen(false); });
}

/* ---------------------------------------------------------------- Scroll reveal
   IntersectionObserver plus a sweep on scroll, so a fast scroll or anchor jump can
   never leave a section permanently invisible. */
const revealEls = Array.from(document.querySelectorAll('[data-reveal]'));
const reveal = (el) => el.classList.add('is-revealed');
if (reduceMotion || !('IntersectionObserver' in window)) {
  revealEls.forEach(reveal);
} else {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => { if (entry.isIntersecting) { reveal(entry.target); io.unobserve(entry.target); } });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  revealEls.forEach((el) => io.observe(el));
  const sweep = () => {
    const limit = window.innerHeight;
    revealEls.forEach((el) => { if (!el.classList.contains('is-revealed') && el.getBoundingClientRect().top < limit) reveal(el); });
  };
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { sweep(); ticking = false; });
  }, { passive: true });
  window.addEventListener('load', sweep);
  sweep();
}

/* ---------------------------------------------------------------- Count-ups
   The real number stays in the markup; it is only zeroed inside the animation. */
const counters = document.querySelectorAll('[data-count]');
if (counters.length && !reduceMotion && 'IntersectionObserver' in window) {
  const run = (el) => {
    const target = Number(el.dataset.count);
    const prefix = el.dataset.prefix || '';
    const dur = 1100;
    const start = performance.now();
    const step = (now) => {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = prefix + Math.round(target * eased);
      if (t < 1) requestAnimationFrame(step);
      else el.textContent = prefix + target;
    };
    requestAnimationFrame(step);
  };
  const cio = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { run(e.target); cio.unobserve(e.target); } });
  }, { threshold: 0.6 });
  counters.forEach((c) => cio.observe(c));
}

/* ---------------------------------------------------------------- Lightbox */
const lb = document.getElementById('lightbox');
const galleries = document.querySelectorAll('[data-gallery]');
if (lb && galleries.length) {
  const img = document.getElementById('lightbox-img');
  const count = document.getElementById('lightbox-count');
  const caption = document.getElementById('lightbox-caption');
  let items = [];
  let index = 0;
  let lastFocus = null;

  const show = (i) => {
    index = (i + items.length) % items.length;
    const it = items[index];
    img.src = it.dataset.full;
    img.alt = it.dataset.alt || '';
    caption.textContent = it.dataset.alt || '';
    count.textContent = `${index + 1} / ${items.length}`;
  };
  const open = (gallery, i) => {
    items = Array.from(gallery.querySelectorAll('.gallery__item'));
    lastFocus = document.activeElement;
    lb.hidden = false;
    show(i);
    requestAnimationFrame(() => lb.classList.add('is-open'));
    document.body.style.overflow = 'hidden';
    lb.querySelector('[data-lb="close"]').focus();
  };
  const close = () => {
    lb.classList.remove('is-open');
    document.body.style.overflow = '';
    setTimeout(() => { lb.hidden = true; }, 300);
    lastFocus?.focus();
  };

  galleries.forEach((g) => {
    g.addEventListener('click', (e) => {
      const btn = e.target.closest('.gallery__item');
      if (btn) open(g, Number(btn.dataset.index));
    });
  });
  lb.addEventListener('click', (e) => {
    const action = e.target.closest('[data-lb]')?.dataset.lb;
    if (action === 'close') close();
    else if (action === 'prev') show(index - 1);
    else if (action === 'next') show(index + 1);
    else if (e.target === lb) close();
  });
  document.addEventListener('keydown', (e) => {
    if (lb.hidden) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(index - 1);
    if (e.key === 'ArrowRight') show(index + 1);
    if (e.key === 'Tab') {
      const f = Array.from(lb.querySelectorAll('button'));
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  let touchX = null;
  lb.addEventListener('touchstart', (e) => { touchX = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', (e) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 50) show(index + (dx < 0 ? 1 : -1));
    touchX = null;
  });
}

/* ---------------------------------------------------------------- Product gallery */
document.querySelectorAll('[data-product-gallery]').forEach((pg) => {
  const main = pg.querySelector('[data-product-main]');
  const thumbs = pg.querySelectorAll('[data-product-thumb]');
  if (!main || !thumbs.length) return;
  thumbs.forEach((t) => {
    t.addEventListener('click', () => {
      main.src = t.dataset.src;
      main.alt = t.dataset.alt || '';
      thumbs.forEach((x) => x.setAttribute('aria-pressed', String(x === t)));
    });
  });
});

/* ---------------------------------------------------------------- Hero photo tilt (fine pointers only) */
const tilt = document.querySelector('[data-tilt]');
if (tilt && !reduceMotion && window.matchMedia('(pointer: fine)').matches) {
  const layers = tilt.querySelectorAll('[data-depth]');
  tilt.addEventListener('pointermove', (e) => {
    const r = tilt.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    layers.forEach((l) => {
      const d = Number(l.dataset.depth);
      l.style.transform = `translate3d(${x * d}px, ${y * d}px, 0)`;
    });
  });
  tilt.addEventListener('pointerleave', () => layers.forEach((l) => { l.style.transform = ''; }));
}

/* ---------------------------------------------------------------- Contact form
   No backend on a static host: the form is wired for Netlify Forms. If posting
   fails, fall back to opening the visitor's e-mail app with the message filled in. */
const form = document.querySelector('[data-contact-form]');
if (form) {
  const status = form.querySelector('[data-form-status]');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    status.textContent = 'Sending…';
    try {
      const res = await fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams(data).toString() });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      status.textContent = 'Thank you — your message has been sent.';
      status.dataset.state = 'ok';
    } catch {
      const name = `${data.get('first-name') || ''} ${data.get('last-name') || ''}`.trim();
      const body = `${data.get('message') || ''}\n\n${name}\n${data.get('email') || ''}\n${data.get('phone') || ''}`;
      window.location.href = `mailto:${form.dataset.email}?subject=${encodeURIComponent('Website enquiry')}&body=${encodeURIComponent(body)}`;
      status.textContent = 'Opening your e-mail app to send the message…';
      status.dataset.state = 'info';
    } finally {
      btn.disabled = false;
    }
  });
}
