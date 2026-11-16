# BookShelf — zadanie rekrutacyjne

## Założenia

- Przyjmij, że aplikacja BookShelf działa pod `http://localhost:3000`.
- Nie jest to rzeczywista aplikacja chodzi o zrozumienie i refaktor kodu.
- Na stronie `/login` są pola `Email`, `Password` i przycisk `Sign in`.
- Po poprawnym logowaniu aplikacja przekierowuje użytkownika do `/books`.
- W katalogu jest książka **The Paper Lighthouse**, której autorką jest **Maya Reed**.
- Tytuł książki jest linkiem. Kliknięcie otwiera szczegóły w tej samej karcie.
- W szczegółach tytuł jest nagłówkiem, a autorka jest w elemencie
  z `data-testid="book-author"`.
- Z racji braku aplikacji testy nie będa się uruchamiać.


## Jak oddać rozwiązanie
- Sklonuj repozytorium startowe i wprowadź zmiany opisane w zadaniu.
- Zapisz rozwiązanie w jednym lub kilku commitach.
- Utwórz puste prywatne repozytorium na GitHubie i dodaj tam swoje rozwiązanie. Możesz dodać je jako drugi adres zdalny:

```bash
   git remote add submission https://github.com/TWOJ-LOGIN/TWOJE-REPO.git
   git push -u submission HEAD
```

- Zaproś użytkownika GitHub psi-1234 do repozytorium i prześlij link.

## Zadanie

1. Zrefaktoryzuj istniejący test. Przenieś asercję widoczności książki do testu,
   a locator linku zostaw w `BookCatalogPage`.
2. Dodaj test, który przejdzie z katalogu do szczegółów książki i sprawdzi jej
   tytuł oraz autorkę.
3. Dodaj `BookDetailsPage` i rozbuduj `BookCatalogPage` o przejście do szczegółów.
   Nowy test powinien działać również uruchomiony osobno.
4. Przejrzyj pliki projektu i wskaż, co jeszcze poprawiłbyś przed mergem.
