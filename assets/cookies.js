/* SANTÉ MEDICA PETIT — cookie consent */
(function () {
  'use strict';

  var key = 'sante_cookie_consent';
  function hasConsent() {
    try {
      if (window.localStorage && window.localStorage.getItem(key) === 'accepted') return true;
    } catch (err) {}
    return document.cookie.indexOf(key + '=accepted') !== -1;
  }

  try {
    if (hasConsent()) return;
  } catch (err) {}

  function accept() {
    try {
      if (window.localStorage) window.localStorage.setItem(key, 'accepted');
    } catch (err) {}
    document.cookie = key + '=accepted; Max-Age=31536000; Path=/; SameSite=Lax';
    if (banner) banner.classList.remove('is-visible');
  }

  var banner = document.createElement('section');
  banner.className = 'cookie-consent';
  banner.setAttribute('aria-label', 'Informacja o plikach cookies');
  banner.innerHTML =
    '<p>Ta strona używa niezbędnych plików cookies, aby działać poprawnie i zapamiętać podstawowe ustawienia. Szczegóły znajdziesz w <a href="polityka-prywatnosci.html">polityce prywatności</a>.</p>' +
    '<div class="cookie-consent__actions">' +
      '<button class="btn btn-solid" type="button">Akceptuję</button>' +
      '<button class="cookie-consent__close" type="button" aria-label="Zamknij komunikat">×</button>' +
    '</div>';

  document.addEventListener('DOMContentLoaded', function () {
    document.body.appendChild(banner);
    banner.querySelector('.btn').addEventListener('click', accept);
    banner.querySelector('.cookie-consent__close').addEventListener('click', accept);
    window.setTimeout(function () { banner.classList.add('is-visible'); }, 450);
  });
})();
