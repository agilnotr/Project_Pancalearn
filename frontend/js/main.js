/* =========================================================
   PancaLearn — main.js
   Shared across every page: navbar, footer, theme, XP pill.
   Requires data.js and state.js to be loaded first.
   ========================================================= */

const NAV_LINKS = [
  { href: 'index.html', label: 'Home', match: 'index' },
  { href: 'pages/materi.html', label: 'Materi', match: 'materi' },
  { href: 'pages/studi-kasus.html', label: 'Studi Kasus', match: 'studi-kasus' },
  { href: 'pages/quiz.html', label: 'Quiz', match: 'quiz' },
  { href: 'pages/challenge.html', label: 'Challenge', match: 'challenge' },
  { href: 'pages/progress.html', label: 'Progress', match: 'progress' },
  { href: 'pages/pancai.html', label: 'PancaAI', match: 'pancai' },
];

// Sub-pages that should highlight another page's nav item.
const PAGE_ALIASES = { 'detail-materi': 'materi' };

// True when the current page lives in /pages/. Everything else (/, /index.html,
// /frontend/, /frontend/index.html, file:// ...) is treated as the home page, so
// the project works from Live Server, Express, or a plain folder URL.
function isInPagesFolder() {
  return /\/pages\/[^/]*$/.test(window.location.pathname);
}

// Relative prefix from the current page to the frontend root.
function getBasePath() {
  return isInPagesFolder() ? '../' : '';
}

function currentPageKey() {
  if (!isInPagesFolder()) return 'index';
  const match = window.location.pathname.match(/\/([a-z0-9-]+?)(?:\.html)?$/i);
  const key = match ? match[1].toLowerCase() : '';
  return PAGE_ALIASES[key] || key;
}

function renderNavbar() {
  const mount = document.getElementById('navbar-mount');
  if (!mount) return;
  const activeKey = currentPageKey();
  const state = PancaState.get();

  const base = getBasePath();
  const linksHtml = NAV_LINKS.map((l) => {
    const isActive = l.match === activeKey;
    return `<a href="${base}${l.href}" class="${isActive ? 'active' : ''}"${isActive ? ' aria-current="page"' : ''}>${l.label}</a>`;
  }).join('');

  mount.innerHTML = `
    <nav class="navbar" aria-label="Navigasi utama">
      <div class="navbar-inner">
        <a href="${base}index.html" class="navbar-logo" aria-label="PancaLearn — beranda"><span>Panca</span><span class="dot">Learn</span></a>
        <div class="navbar-links">${linksHtml}</div>
        <div class="navbar-actions">
          <div class="xp-pill" title="Total XP kamu">⚡ <span id="navbar-xp">${state.xp}</span> <span class="xp-label">XP</span></div>
          <button type="button" class="theme-toggle" id="theme-toggle" aria-label="Aktifkan mode gelap">🌙</button>
          <button type="button" class="menu-toggle" id="menu-toggle" aria-label="Buka menu" aria-expanded="false" aria-controls="mobile-menu">☰</button>
        </div>
      </div>
      <div class="mobile-menu" id="mobile-menu">${linksHtml}</div>
    </nav>
  `;

  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  function setMenuOpen(open) {
    mobileMenu.classList.toggle('open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Tutup menu' : 'Buka menu');
  }

  menuToggle.addEventListener('click', () => setMenuOpen(!mobileMenu.classList.contains('open')));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
      setMenuOpen(false);
      menuToggle.focus();
    }
  });
  document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
  updateThemeIcon();
}

// Skip link + main landmark target (keyboard users can jump past the navbar).
function initSkipLink() {
  const main = document.querySelector('main');
  if (!main || document.querySelector('.skip-link')) return;
  if (!main.id) main.id = 'main-content';
  main.setAttribute('tabindex', '-1');
  const link = document.createElement('a');
  link.className = 'skip-link';
  link.href = `#${main.id}`;
  link.textContent = 'Lewati ke konten utama';
  document.body.insertBefore(link, document.body.firstChild);
}

function renderFooter() {
  const mount = document.getElementById('footer-mount');
  if (!mount) return;

  const base = getBasePath();
  const navHtml = NAV_LINKS.map((l) => `<li><a href="${base}${l.href}">${l.label}</a></li>`).join('');
  const creditHtml = TEAM_DATA.map((t) => `<li>${t.role} — ${t.name}</li>`).join('');

  mount.innerHTML = `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div class="footer-brand">
          <div class="navbar-logo"><span>Panca</span><span class="dot">Learn</span></div>
          <p>Belajar Pancasila. Pahami Nilainya. Terapkan dalam Kehidupan.</p>
        </div>
        <div class="footer-col">
          <h2>Navigasi</h2>
          <ul>${navHtml}</ul>
        </div>
        <div class="footer-col">
          <h2>Informasi Project</h2>
          <ul>
            <li>Mata Kuliah: Pancasila</li>
            <li>Program Studi: Teknik Informatika</li>
            <li>Tahun: 2026</li>
          </ul>
        </div>
        <div class="footer-col">
          <h2>Credit — PancaLearn Team</h2>
          <ul>${creditHtml}</ul>
        </div>
      </div>
      <div class="footer-bottom container">
        <p>© 2026 PancaLearn. All rights reserved.</p>
        <p>Educational Project — Teknik Informatika</p>
        <p>Dibuat untuk memenuhi tugas mata kuliah Pancasila.</p>
      </div>
    </footer>
  `;
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  PancaState.setTheme(theme);
  updateThemeIcon();
}

function updateThemeIcon() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  const theme = document.documentElement.getAttribute('data-theme') || 'light';
  btn.textContent = theme === 'dark' ? '☀️' : '🌙';
  btn.setAttribute('aria-label', theme === 'dark' ? 'Aktifkan mode terang' : 'Aktifkan mode gelap');
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  applyTheme(current === 'dark' ? 'light' : 'dark');
}

function initTheme() {
  const state = PancaState.get();
  applyTheme(state.theme || 'light');
}

// ---------- Counter animation ----------
function animateCounters() {
  document.querySelectorAll('[data-counter]').forEach((el) => {
    const target = parseInt(el.getAttribute('data-counter'), 10) || 0;
    const duration = 1200;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min(1, (now - start) / duration);
      el.textContent = Math.floor(progress * target) + (el.getAttribute('data-suffix') || '');
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = target + (el.getAttribute('data-suffix') || '');
    }
    requestAnimationFrame(tick);
  });
}

// ---------- Scroll reveal ----------
function initReveal() {
  // Only handle elements not yet set up (initReveal can be called again after re-rendering).
  const items = [...document.querySelectorAll('.reveal-on-scroll')].filter((el) => !el.dataset.revealInit);
  if (!items.length) return;
  items.forEach((el) => { el.dataset.revealInit = '1'; });

  if (!('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('reveal'));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('reveal-pending');
          entry.target.classList.add('reveal');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  items.forEach((el) => {
    el.classList.add('reveal-pending');
    observer.observe(el);
  });
}

function refreshXpPill() {
  const el = document.getElementById('navbar-xp');
  if (el) el.textContent = PancaState.get().xp;
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initSkipLink();
  renderNavbar();
  renderFooter();
  initReveal();
});
