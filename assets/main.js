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

  /* ---- Confetti / terrazzo motif (booking section) ---- */
  (function () {
    var layer = document.querySelector('.book .confetti');
    if (!layer) return;
    // weighted shape mix + brand-matched voucher palette
    var shapes = ['tri', 'tri', 'dot', 'dot', 'quad', 'shard', 'semi', 'sliver', 'rect'];
    var colors = ['#3C2926', '#3C2926', '#A8645F', '#C18B86', '#7E3437', '#CB7E5E', '#C99A95', '#A8645F'];
    var N = 58;
    var frag = document.createDocumentFragment();
    function r(min, max) { return min + Math.random() * (max - min); }
    for (var i = 0; i < N; i++) {
      var el = document.createElement('i');
      el.className = shapes[(Math.random() * shapes.length) | 0];
      var size = r(6, 26);
      var fy = r(7, 16) * (Math.random() < 0.5 ? -1 : 1);
      el.style.cssText =
        '--x:' + r(0, 100).toFixed(2) + '%;' +
        '--y:' + r(0, 100).toFixed(2) + '%;' +
        '--s:' + size.toFixed(1) + 'px;' +
        '--r:' + ((Math.random() * 360) | 0) + 'deg;' +
        '--rd:' + ((r(-9, 9)) | 0) + 'deg;' +
        '--fy:' + fy.toFixed(1) + 'px;' +
        '--d:' + r(7, 15).toFixed(1) + 's;' +
        '--df:' + r(0, 6).toFixed(1) + 's;' +
        '--ds:' + r(0, 0.9).toFixed(2) + 's;' +
        '--o:' + r(0.55, 0.95).toFixed(2) + ';' +
        '--c:' + colors[(Math.random() * colors.length) | 0] + ';';
      frag.appendChild(el);
    }
    layer.appendChild(frag);
  })();
})();
