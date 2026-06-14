# Wdrożenie strony Santé Medica Petit

## Rekomendowany wariant

Strona jest przygotowana jako statyczna strona HTML/CSS/JS. Nie wymaga WordPressa.

Najprostsze wdrożenie z działającymi formularzami:

1. Założyć projekt w Netlify.
2. Wgrać cały folder strony albo podpiąć repozytorium.
3. Po pierwszym deployu wejść w Netlify → Forms i sprawdzić, czy są widoczne formularze:
   - `kontakt-wizyta`
   - `badania-kliniczne`
   - `international-patients`
4. W Netlify → Forms → Notifications dodać adres e-mail, na który mają przychodzić zgłoszenia.
5. Podpiąć domenę i włączyć HTTPS.

## Zabezpieczenia formularzy

Formularze mają przygotowane:

- metodę `POST`,
- obsługę Netlify Forms,
- ukryte pole antyspamowe `bot-field`,
- obowiązkową zgodę na kontakt,
- link do polityki prywatności,
- przekierowanie na stronę `dziekujemy.html`,
- komunikat, żeby nie przesyłać pełnej dokumentacji medycznej przez formularz.

Jeśli formularze będą narażone na spam, kolejnym krokiem jest dodanie Cloudflare Turnstile albo hCaptcha.

## Ważne

Formularze Netlify nie będą działać na GitHub Pages. Na GitHub Pages trzeba użyć zewnętrznej usługi typu Formspree/Basin/Getform albo własnego backendu.

## Pliki wdrożeniowe

- `_headers` — podstawowe nagłówki bezpieczeństwa dla Netlify.
- `dziekujemy.html` — strona po wysłaniu formularza.
- `polityka-prywatnosci.html` — polityka prywatności linkowana przy zgodach.
