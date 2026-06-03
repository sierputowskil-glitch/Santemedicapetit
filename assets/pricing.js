/* SANTÉ MEDICA PETIT — pricing data + renderer
   Edit prices here. A value ending in a digit gets " zł" appended automatically.
   Use "od 700" for "from", or free text like "600 + koszt badania" / "wycena indywidualna". */
(function () {
  'use strict';

  var CENNIK = [
    {
      id: 'ginekologia', label: 'Ginekologia',
      items: [
        ['Konsultacja ginekologiczna', '300'],
        ['Konsultacja ginekologiczna z USG', '350'],
        ['Konsultacja ginekologiczna — dzieci', '300'],
        ['Konsultacja onkologiczna', '300'],
        ['Porada endokrynologiczna do konsultacji', '200'],
        ['Przedłużenie recepty dla pacjentki', '75'],
        ['Antykoncepcja awaryjna', '300'],
        ['Monitoring owulacji — kolejna wizyta', '150'],
        ['Konsultacja / diagnostyka niepłodności', '300'],
        ['E7 protein test do konsultacji', '100'],
        ['Szczepienie HPV — pojedyncza dawka', '600'],
        ['Założenie implantu antykoncepcyjnego', '1700'],
        ['Usunięcie implantu antykoncepcyjnego', '1000'],
        ['Założenie wkładki Kyleena', '1600'],
        ['Założenie wkładki Mirena', '1600'],
        ['Założenie wkładki niehormonalnej', '600'],
        ['Usunięcie wkładki domacicznej', '700'],
        ['Badanie kolposkopowe szyjki macicy', '600'],
        ['Pobranie wycinka z bad. histopat. (kolposkopia)', '250'],
        ['Pobranie wyskrobin z bad. histopat. (kolposkopia)', '250'],
        ['Badanie drożności jajowodów — HyCoSy', '1100'],
        ['Biopsja endometrium', '600 + koszt badania'],
        ['Barwienie immunohistochemiczne (1 odczyn)', '210'],
        ['Barwienie immunohistochemiczne (2 odczyny)', '420'],
        ['Chirurgiczne usuwanie zmian okolic intymnych', 'od 700']
      ]
    },
    {
      id: 'gin-regeneracyjna', label: 'Ginekologia regeneracyjna',
      items: [
        ['Konsultacja ginekologii regeneracyjnej', '300'],
        ['Osocze bogatopłytkowe Regeneris®', '1300'],
        ['Pakiet 3 zabiegów Regeneris®', '3500'],
        ['Rewitalizacja intymna — Cellular Matrix', '1500'],
        ['Tropokolagen / korekcja blizny (1 amp.)', '300'],
        ['Tropokolagen / korekcja blizny (2 amp.)', '550'],
        ['Tropokolagen / korekcja blizny (3 amp.)', '700'],
        ['Tropokolagen / korekcja blizny (4 amp.)', '900'],
        ['Regeneris® + tropokolagen', '1800'],
        ['Pakiet 3 zabiegów Regeneris® + tropokolagen', '4400'],
        ['Neauvia Intense Rose — wargi sromowe (1 ml)', '1200'],
        ['Neauvia Intense Rose — wargi sromowe (2 ml)', '1700'],
        ['Protokół NRose + pakiet 4 zabiegów SECTUM', '6000'],
        ['Radiofrekwencja intymna — SECTUM (1 zabieg)', '1300'],
        ['Laserowe leczenie nietrzymania moczu (1 zabieg)', '1200'],
        ['Laserowe leczenie nietrzymania moczu (pakiet 3)', '3000'],
        ['G! SHOT — powiększenie punktu G', '1500'],
        ['O! SHOT — uwrażliwienie łechtaczki', '1500'],
        ['Labioplastyka', 'od 6000'],
        ['Hoodoplastyka napletka łechtaczki', '2000'],
        ['Rejuvenation rose gel', '350'],
        ['Światłoterapia TriWings', '150'],
        ['Światłoterapia TriWings (pakiet 6)', '700'],
        ['Leczenie pochwicy toksyną botulinową (1 amp.)', '1200'],
        ['Laserowa rewitalizacja pochwy (1 zabieg)', '1200'],
        ['Laserowa rewitalizacja pochwy (pakiet 3)', '3000']
      ]
    },
    {
      id: 'poloznictwo', label: 'Położnictwo',
      items: [
        ['Konsultacja położnicza z USG', '400'],
        ['Konsultacja położnicza z USG — ciąża bliźniacza', '600'],
        ['Porada endokrynologiczna do konsultacji', '200'],
        ['Przedłużenie recepty — pacjentki prowadzące ciążę', '75'],
        ['Badanie USG 3D/4D (z nagraniem)', '430'],
        ['Konsultacja do badania USG prenatalnego', '200'],
        ['Konsultacja perinatalna', '500'],
        ['USG prenatalne I trymestr wg FMF', '500'],
        ['USG prenatalne I trymestr wg FMF — bliźniacza', '700'],
        ['USG prenatalne I trymestr z kalkulacją ryzyka', '600'],
        ['USG prenatalne I trymestr z kalkulacją — bliźniacza', '800'],
        ['USG prenatalne II trymestr', '500'],
        ['USG prenatalne II trymestr — bliźniacza', '650'],
        ['USG prenatalne III trymestr', '500'],
        ['USG prenatalne III trymestr — bliźniacza', '700'],
        ['USG doppler', '350'],
        ['USG doppler — ciąża bliźniacza', '450'],
        ['Nagranie 3D/4D na DVD', '50'],
        ['Test prenatalny Panorama', '2250'],
        ['Panorama + panel mikrodelecji', '2650'],
        ['Panorama + zespół DiGeorge’a', '2450'],
        ['Badanie Beta-HCG', '50']
      ]
    },
    {
      id: 'derm-kliniczna', label: 'Dermatologia kliniczna',
      items: [
        ['Konsultacja dermatologiczna', '300'],
        ['Konsultacja dermatologiczna — dzieci', '350'],
        ['Omówienie wyniku / kontynuacja leczenia', '150'],
        ['Badanie dermatoskopowe zmian skórnych', '450'],
        ['Laserowe usuwanie znamion — 1 zmiana', '450'],
        ['Każda następna zmiana', '100'],
        ['Biopsja zmiany z bad. histopatologicznym', 'od 500'],
        ['Chirurgiczne usuwanie zmian skórnych', 'od 600'],
        ['Krioterapia / wymrażanie kurzajek', '450'],
        ['Laserowe usuwanie kępek żółtych', '500'],
        ['Łyżeczkowanie zmian skórnych', '450']
      ]
    },
    {
      id: 'derm-estetyczna', label: 'Dermatologia estetyczna',
      items: [
        ['Konsultacja medycyny estetycznej', '300'],
        ['Laser CO₂ — twarz, szyja, dekolt, okolice oczu', '2000'],
        ['Laser CO₂ — twarz, szyja, dekolt', '1500'],
        ['Laser CO₂ — twarz', '1000'],
        ['Laser CO₂ — blizny', 'od 600'],
        ['Laser CO₂ — powieki', '1000'],
        ['Laser CO₂ — rozstępy', 'od 800'],
        ['Światłoterapia TriWings', '100'],
        ['Światłoterapia TriWings (pakiet 6)', '500'],
        ['Leczenie bruksizmu toksyną botulinową', '1000'],
        ['Leczenie nadpotliwości toksyną botulinową', '1800'],
        ['Toksyna botulinowa — 1 obszar', '600'],
        ['Toksyna botulinowa — 2 obszary', '1100'],
        ['Toksyna botulinowa — 3 obszary', '1400'],
        ['Tropokolagen (1 amp.)', '300'],
        ['Tropokolagen (4 amp.)', '900'],
        ['Mezoterapia mikroigłowa blizn i rozstępów', '300'],
        ['Mezoterapia mikroigłowa + osocze', '800'],
        ['Profhilo twarz + szyja', '2200'],
        ['Profhilo structura', '1800'],
        ['Profhilo structura (2 zabiegi)', '3000'],
        ['Rejuran blizny „S”', '1200'],
        ['Rejuran oczy „I”', '1200'],
        ['Rejuran twarz', '1400'],
        ['Rejuran twarz + oczy', '2400'],
        ['Terapia blizny', 'od 500'],
        ['Hialuronidaza — usta', '1200'],
        ['Hialuronidaza — powieki dolne', '500'],
        ['Podcinanie blizn', '1600']
      ]
    },
    {
      id: 'kosmetologia', label: 'Kosmetologia',
      items: [
        ['Konsultacja kosmetologiczna', '300'],
        ['Mezoterapia igłowa okolicy oka', '600'],
        ['Mezoterapia igłowa twarzy', '800'],
        ['Mezoterapia igłowa twarz + szyja', '900'],
        ['Dermapen — twarz', '800'],
        ['Dermapen — twarz + szyja', '1000'],
        ['Dermapen — twarz + szyja + dekolt', '1200'],
        ['Dermapen + peeling kwasowy', '1100'],
        ['Dermapen + osocze BCT', '1400'],
        ['Dermapen + osocze Matrix', '1600'],
        ['Peeling medyczny / chemiczny', '400'],
        ['Peeling Easy TCA Pain Control', '600'],
        ['Peeling PRX PLUS', '450'],
        ['Peeling PRX T33', '450'],
        ['TCA cross', '400'],
        ['Powiększenie / modelowanie ust (1 ml)', '1200'],
        ['Osocze bogatopłytkowe + składnik aktywny', '1200'],
        ['Osocze Regeneris Matrix — twarz', '1200'],
        ['Osocze Regeneris BCT — twarz', '900'],
        ['Radiofrekwencja twarzy (1 zabieg)', '800'],
        ['Radiofrekwencja twarzy (pakiet 4)', '2800'],
        ['Radiofrekwencja twarz + szyja (1 zabieg)', '1000'],
        ['Radiofrekwencja twarz + szyja (pakiet 4)', '3500'],
        ['Radiofrekwencja twarz + szyja + dekolt (1)', '1200'],
        ['Radiofrekwencja twarz + szyja + dekolt (pakiet 4)', '4200'],
        ['Radiofrekwencja ciało — 1 okolica', '800'],
        ['Radiofrekwencja ciało — 1 okolica (pakiet 4)', '2800'],
        ['Radiofrekwencja ciało — 2 okolice', '1200'],
        ['Radiofrekwencja ciało — 2 okolice (pakiet 4)', '4000'],
        ['Stymulator okolicy oka', '700'],
        ['Stymulator twarzy', '900'],
        ['PRO XN Acne rescue treatment', '500'],
        ['PRO XN Bright up no. 1', '600'],
        ['PRO XN Bright up no. 2', '600'],
        ['PRO XN zabieg I stopnia', '500'],
        ['PRO XN zabieg II stopnia', '550'],
        ['PRO XN zabieg III stopnia + dermapen', '900']
      ]
    },
    {
      id: 'trychologia', label: 'Trychologia',
      items: [
        ['Konsultacja trychologiczna', '300'],
        ['Konsultacja trychologiczna kontrolna', '150'],
        ['Profhilo', '1500'],
        ['Osocze bogatopłytkowe BCT — skóra głowy', '900'],
        ['Osocze BCT — skóra głowy (pakiet 3)', '2400'],
        ['Osocze BCT — skóra głowy (pakiet 4)', '3200'],
        ['Mezoterapia skóry głowy', '550'],
        ['Mezoterapia mikroigłowa skóry głowy', '600']
      ]
    },
    {
      id: 'badania', label: 'Badania laboratoryjne',
      items: [
        ['Cytologia klasyczna', '70'],
        ['Cytologia płynna LBC', '200'],
        ['HPV DNA — 5 typów', '280'],
        ['HPV DNA HR — 14 typów', '320'],
        ['HPV DNA — 18 typów (met. PCR)', '380'],
        ['HPV DNA — 28 typów (Real-time PCR)', '450'],
        ['HPV — 41 genotypów (hybrydyzacja)', '480'],
        ['Panel urogenitalny — 2 patogeny', '280'],
        ['Panel urogenitalny — 4 patogeny', '290'],
        ['Panel urogenitalny — 3 patogeny', '310'],
        ['Panel urogenitalny — 7 patogenów', '500'],
        ['Wymaz', '70'],
        ['Badanie histopatologiczne', 'od 150'],
        ['Chlamydia trachomatis DNA (PCR)', '200'],
        ['Chlamydia trachomatis IgA', '100'],
        ['Chlamydia trachomatis IgG', '100'],
        ['Chlamydia trachomatis IgM', '100']
      ]
    }
  ];

  function priceLabel(v) {
    return /[0-9]$/.test(v) ? v + ' zł' : v;
  }

  // Polish typography: bind single-letter words (a, i, o, u, w, z) to the next
  // word with a non-breaking space so they never end a line.
  function fixOrphans(t) {
    return t.replace(/(^|[\s(„«—-])([AaIiOoUuWwZz])\s+/g, '$1$2\u00A0');
  }

  function render() {
    var tabsEl = document.getElementById('pricingTabs');
    var panelsEl = document.getElementById('pricingPanels');
    if (!tabsEl || !panelsEl) return;

    CENNIK.forEach(function (cat, i) {
      var tab = document.createElement('button');
      tab.className = 'pricing__tab' + (i === 0 ? ' on' : '');
      tab.textContent = cat.label;
      tab.setAttribute('data-target', cat.id);
      tabsEl.appendChild(tab);

      var panel = document.createElement('div');
      panel.className = 'pricing__panel' + (i === 0 ? ' on' : '');
      panel.id = 'panel-' + cat.id;

      var grid = document.createElement('div');
      grid.className = 'pricing__grid';
      cat.items.forEach(function (it) {
        var row = document.createElement('div');
        row.className = 'price-row';
        row.innerHTML = '<span class="nm">' + fixOrphans(it[0]) + '</span>' +
          '<span class="dots"></span>' +
          '<span class="pr">' + fixOrphans(priceLabel(it[1])) + '</span>';
        grid.appendChild(row);
      });
      panel.appendChild(grid);
      panelsEl.appendChild(panel);
    });

    tabsEl.addEventListener('click', function (e) {
      var btn = e.target.closest('.pricing__tab');
      if (!btn) return;
      var target = btn.getAttribute('data-target');
      tabsEl.querySelectorAll('.pricing__tab').forEach(function (t) {
        t.classList.toggle('on', t === btn);
      });
      panelsEl.querySelectorAll('.pricing__panel').forEach(function (p) {
        p.classList.toggle('on', p.id === 'panel-' + target);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
})();
