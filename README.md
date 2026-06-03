# Santé Medica Petit — strona internetowa

Butikowa klinika kobieca w Gdańsku. Statyczna strona (HTML/CSS/JS), gotowa do
publikacji na GitHub Pages lub dowolnym hostingu plików statycznych.

## Struktura

```
index.html                  — strona główna
blog.html                   — magazyn / lista artykułów (filtrowanie kategorii)
artykul.html                — szablon pojedynczego artykułu
badania-kliniczne.html      — badania kliniczne (dla pacjentek + dla sponsorów/CRO)
assets/
  styles.css                — style główne (paleta, typografia, sekcje)
  blog.css                  — style bloga (lista, karty, artykuł)
  badania.css               — style strony Badania kliniczne + sekcje FAQ na stronie głównej
  main.js                   — nawigacja, animacje, parallax, opinie, FAQ (strona główna)
  blog.js                   — nawigacja, filtrowanie, FAQ, formularze (podstrony)
  pricing.js                — dane i renderowanie cennika
  image-slot.js             — komponent zdjęć (drag & drop)
  fonts/                    — czcionki marki (De Lionist, Quasimoda)
  logos/                    — logotypy SVG
  decor/                    — dekoracje (arkada, ilustracje liniowe)
  photos/                   — zdjęcia (w tym katalog team/)
.nojekyll                   — wyłącza przetwarzanie Jekyll na GitHub Pages
```

> Nazwy plików są celowo w ASCII (bez spacji i polskich znaków) — to bezpieczniejsze
> dla adresów URL i działa identycznie na każdym hostingu.

## Publikacja na GitHub Pages

1. Utwórz nowe repozytorium na GitHub (np. `sante-medica-petit`).
2. Wgraj całą zawartość tego folderu do repozytorium:
   ```bash
   git init
   git add .
   git commit -m "Santé Medica Petit — website"
   git branch -M main
   git remote add origin https://github.com/UZYTKOWNIK/sante-medica-petit.git
   git push -u origin main
   ```
3. W repozytorium: **Settings → Pages**.
4. **Build and deployment** → **Source**: wybierz **Deploy from a branch**.
5. Branch: **main**, folder: **/ (root)**. Zapisz.
6. Po chwili strona będzie dostępna pod adresem
   `https://UZYTKOWNIK.github.io/sante-medica-petit/`.

## Edycja treści

- **Cennik** — edytuj tablicę `CENNIK` w `assets/pricing.js`.
- **Teksty / artykuły** — bezpośrednio w plikach `.html`.
- **Zdjęcia** — podmień pliki w `assets/photos/` (zachowaj nazwy) lub na żywej
  stronie przeciągnij nowe zdjęcie na wybrane miejsce.
- **Kolory / typografia** — zmienne na górze `assets/styles.css` (`:root`).

## Uwagi

- Mapa Google w sekcji Kontakt ładuje się z internetu — wymaga połączenia sieciowego.
- Formularze (rezerwacja, zgłoszenie do badania) są demonstracyjne — pokazują
  potwierdzenie po wysłaniu, ale nie wysyłają danych. Podłączenie do skrzynki/CRM
  to osobny krok (np. Formspree, własny endpoint).
