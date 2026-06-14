/* SANTÉ MEDICA PETIT — MAGAZYN (blog) interactions */
(function () {
  'use strict';

  /* ---- Nav: solid + scroll shadow (blog has no tall dark hero) ---- */
  var nav = document.querySelector('.nav');
  if (nav) {
    nav.classList.add('solid');
    var onScroll = function () {
      if (window.scrollY > 12) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

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
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });

  /* ---- Category filter ---- */
  var pills = [].slice.call(document.querySelectorAll('.mag-pill[data-filter]'));
  var cards = [].slice.call(document.querySelectorAll('.post-card[data-cat]'));
  var feature = document.querySelector('.mag-feature-wrap');
  if (pills.length) {
    function applyCategory(cat, updateUrl) {
      var active = pills.find(function (p) { return p.getAttribute('data-filter') === cat; }) || pills[0];
      cat = active.getAttribute('data-filter');
      pills.forEach(function (p) { p.classList.toggle('on', p === active); });
      // featured shown only in "all" view
      if (feature) feature.classList.toggle('is-hidden', cat !== 'all');
      cards.forEach(function (card) {
        var match = cat === 'all' || (card.getAttribute('data-cat') || '').split(' ').indexOf(cat) > -1;
        card.classList.toggle('is-hidden', !match);
      });
      if (updateUrl && window.history && window.URLSearchParams) {
        var params = new URLSearchParams(window.location.search);
        if (cat === 'all') params.delete('cat');
        else params.set('cat', cat);
        var query = params.toString();
        history.replaceState(null, '', window.location.pathname + (query ? '?' + query : '') + window.location.hash);
      }
    }

    pills.forEach(function (pill) {
      pill.addEventListener('click', function () {
        applyCategory(pill.getAttribute('data-filter'), true);
      });
    });

    var initialCat = 'all';
    if (window.URLSearchParams) {
      initialCat = new URLSearchParams(window.location.search).get('cat') || 'all';
    }
    applyCategory(initialCat, false);
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
