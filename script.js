/* ============================================================
   Elliot Hong — Portfolio script
   - Theme toggle (dark/light) with localStorage persistence
   - Mobile menu toggle
   - Active-section highlighting on scroll
   - Smooth scroll handled via CSS (scroll-behavior: smooth)
   ============================================================ */

(() => {
  'use strict';

  /* ---------- THEME ---------- */
  const root = document.documentElement;
  const themeToggle = document.getElementById('theme-toggle');

  // Initial theme: stored choice, otherwise system preference, otherwise dark.
  const stored = localStorage.getItem('theme');
  if (stored === 'light') {
    root.classList.remove('dark');
  } else if (stored === 'dark') {
    root.classList.add('dark');
  } else {
    // No stored preference: keep dark default already on <html>
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      root.classList.remove('dark');
    }
  }

  themeToggle?.addEventListener('click', () => {
    const isDark = root.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });

  /* ---------- MOBILE MENU ---------- */
  const menuBtn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');

  menuBtn?.addEventListener('click', () => {
    menu?.classList.toggle('hidden');
  });

  // Close mobile menu when clicking a link
  menu?.querySelectorAll('a[data-nav]').forEach((a) => {
    a.addEventListener('click', () => menu.classList.add('hidden'));
  });

  /* ---------- ACTIVE SECTION HIGHLIGHT ---------- */
  const sections = ['home', 'projects', 'experience', 'skills', 'contact']
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  const navLinks = document.querySelectorAll('a[data-nav]');

  const setActive = (id) => {
    navLinks.forEach((link) => {
      const targetId = link.getAttribute('href')?.replace('#', '');
      if (targetId === id) link.classList.add('active');
      else link.classList.remove('active');
    });
  };

  if ('IntersectionObserver' in window && sections.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry most "in view" — largest intersection ratio that is intersecting.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      {
        // Trigger when section midline crosses viewport midline.
        rootMargin: '-40% 0px -55% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );
    sections.forEach((s) => observer.observe(s));
  }

  /* ---------- FOOTER YEAR ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
