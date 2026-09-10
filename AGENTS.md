# AGENTS.md — MV Studio

## Kontekst projektu

MV Studio to studio tworzące nowoczesne strony internetowe i doświadczenia cyfrowe. W pracy nad projektem priorytetem są:

- wysoka jakość wizualna,
- pełna responsywność,
- wydajność,
- dostępność.

Podstawowy stos technologiczny projektu to:

- Next.js,
- TypeScript,
- Tailwind CSS,
- GSAP,
- ScrollTrigger.

## Zasady pracy

1. Przed każdą dużą zmianą sprawdź istniejącą strukturę projektu, aktualne komponenty, style, konfigurację i zależności.
2. Zachowuj spójność z istniejącą architekturą, nazewnictwem i kierunkiem wizualnym projektu.
3. Nie używaj płatnych kreatorów, płatnych komponentów ani gotowych szablonów.
4. Nie dodawaj nowych bibliotek bez konkretnego uzasadnienia. Najpierw sprawdź, czy zadanie można wykonać za pomocą obecnego stosu i natywnych możliwości platformy.
5. Nie wymyślaj informacji o MV Studio, klientach, realizacjach, partnerach, wynikach, nagrodach ani danych kontaktowych. Jeśli brakuje treści, użyj wyraźnie oznaczonego placeholdera albo poproś użytkownika o dane.
6. Nie usuwaj plików ani nie nadpisuj danych bez wyraźnej potrzeby. Przed zmianą mogącą spowodować utratę danych upewnij się, że zakres i cel są jednoznaczne.
7. Dbaj o czytelny, typowany kod. Unikaj `any`, duplikacji i zbędnej złożoności.
8. Komponenty powinny być możliwie małe, wielokrotnego użytku i łatwe do utrzymania.

## Animacje, responsywność i dostępność

1. Każda animacja musi mieć przemyślaną wersję mobilną.
2. Każda animacja musi obsługiwać `prefers-reduced-motion` i ograniczać albo wyłączać ruch zgodnie z preferencją użytkownika.
3. Animacje GSAP i ScrollTrigger muszą być poprawnie inicjalizowane oraz czyszczone, aby nie powodowały wycieków pamięci, podwójnych instancji ani błędów po zmianie widoku.
4. Animacje nie mogą blokować dostępu do treści ani utrudniać nawigacji klawiaturą.
5. Interfejs sprawdzaj co najmniej na małych ekranach mobilnych, tabletach i ekranach desktopowych.
6. Stosuj semantyczny HTML, widoczny focus, odpowiednie etykiety oraz wystarczający kontrast.
7. Obrazy i multimedia optymalizuj pod kątem rozmiaru, formatu, ładowania i stabilności układu.

## Weryfikacja zmian

1. Każdą większą zmianę sprawdź lokalnie.
2. Przed commitem uruchom dostępne kontrole jakości, w szczególności lint, sprawdzanie typów, testy i build.
3. Przed commitem sprawdź konsolę przeglądarki, zachowanie interfejsu i responsywność.
4. Nie ignoruj ostrzeżeń, błędów hydratacji, błędów dostępności ani niepotrzebnych regresji wydajności.
5. Jeśli nie można uruchomić którejś kontroli, wyraźnie poinformuj użytkownika, czego nie udało się sprawdzić i dlaczego.

## Bezpieczeństwo i sekrety

1. Nigdy nie umieszczaj w repozytorium haseł, tokenów, kluczy API, danych logowania ani innych danych dostępowych.
2. Sekrety przechowuj wyłącznie w pliku `.env.local`.
3. Plik `.env.local` musi znajdować się w `.gitignore` i nie może zostać dodany do historii Git.
4. W dokumentacji i przykładowych plikach środowiskowych używaj tylko fikcyjnych, jednoznacznie oznaczonych wartości zastępczych.
5. Przed commitem sprawdź zmienione pliki pod kątem przypadkowo dodanych sekretów.

## Publikacja

Nie publikuj zmian na środowisku produkcyjnym i nie uruchamiaj wdrożenia produkcyjnego bez wyraźnego potwierdzenia użytkownika. Przygotowanie konfiguracji lub instrukcji wdrożenia nie jest zgodą na publikację.
