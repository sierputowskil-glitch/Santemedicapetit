/* SANTÉ MEDICA PETIT — interactions */
(function () {
  'use strict';

  /* ---- Nav: solid background after hero ---- */
  var nav = document.querySelector('.nav');
  var hero = document.querySelector('.hero');
  function onScroll() {
    var threshold = hero ? hero.offsetHeight - 90 : 120;
    if (window.scrollY > threshold) nav.classList.add('solid');
    else nav.classList.remove('solid');
    // hero parallax
    if (heroMedia) {
      var y = Math.min(window.scrollY, window.innerHeight);
      heroMedia.style.transform = 'translateY(' + (y * 0.18) + 'px)';
    }
  }
  var heroMedia = document.querySelector('.hero__media');

  /* ---- Mobile menu ---- */
  var burger = document.querySelector('.nav__burger');
  var menu = document.querySelector('.mobile-menu');
  if (burger && menu) {
    burger.addEventListener('click', function () {
      menu.classList.toggle('open');
      document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        menu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ---- Scroll reveal ---- */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });

  /* ---- Subtle image parallax inside sections ---- */
  var paraEls = [].slice.call(document.querySelectorAll('[data-parallax]'));
  function parallax() {
    var vh = window.innerHeight;
    paraEls.forEach(function (el) {
      var r = el.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) return;
      var prog = (r.top + r.height / 2 - vh / 2) / vh; // -0.5..0.5
      var amt = parseFloat(el.getAttribute('data-parallax')) || 20;
      el.style.transform = 'translateY(' + (prog * -amt) + 'px)';
    });
  }

  function frame() {
    onScroll();
    parallax();
    ticking = false;
  }
  var ticking = false;
  window.addEventListener('scroll', function () {
    if (!ticking) { requestAnimationFrame(frame); ticking = true; }
  }, { passive: true });
  window.addEventListener('resize', frame);
  frame();

  /* ---- Testimonials rotator ---- */
  var slides = [].slice.call(document.querySelectorAll('.testi__slide'));
  var dots = [].slice.call(document.querySelectorAll('.testi__dots button'));
  var ti = 0, timer;
  function show(i) {
    slides.forEach(function (s, k) { s.classList.toggle('active', k === i); });
    dots.forEach(function (d, k) { d.classList.toggle('on', k === i); });
    ti = i;
  }
  function next() { show((ti + 1) % slides.length); }
  function start() { timer = setInterval(next, 6500); }
  if (slides.length) {
    dots.forEach(function (d, k) {
      d.addEventListener('click', function () { clearInterval(timer); show(k); start(); });
    });
    show(0); start();
  }

  /* ---- Booking form (demo) ---- */
  var form = document.querySelector('.form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('.btn');
      btn.textContent = 'Dziękujemy — wkrótce się odezwiemy';
      btn.style.pointerEvents = 'none';
    });
  }

  /* ---- FAQ accordion ---- */
  var faqItems = [].slice.call(document.querySelectorAll('.faq__item'));
  faqItems.forEach(function (item) {
    var q = item.querySelector('.faq__q');
    if (!q) return;
    q.addEventListener('click', function () {
      var isOpen = item.classList.contains('open');
      faqItems.forEach(function (i) { i.classList.remove('open'); });
      if (!isOpen) item.classList.add('open');
    });
  });
})();
