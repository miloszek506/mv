# MV Studio

MV Studio to projekt nowoczesnej strony internetowej studia tworzącego strony i doświadczenia cyfrowe. Aplikacja korzysta z Next.js, TypeScript, Tailwind CSS, GSAP i ScrollTrigger. Szczególny nacisk kładziemy na wygląd, responsywność, szybkość działania i dostępność.

Treści, dane kontaktowe, odnośniki oraz projekty koncepcyjne zostały przeniesione z publicznej strony `mvstudio.pl`. Projekty prezentowane w portfolio są wyraźnie oznaczone jako koncepcje, a nie realizacje dla rzeczywistych klientów.

## Gdzie znajdują się najważniejsze elementy

- `app/page.tsx` — strona główna z krótką prezentacją studia, usług, portfolio i procesu,
- `app/about/page.tsx` — podstrona O nas,
- `app/projects/page.tsx` — podstrona Portfolio z wyróżnionym projektem Avandis,
- `app/services/page.tsx` — podstrona Cennik,
- `app/contact/page.tsx` — podstrona Kontakt,
- `app/layout.tsx` — język strony, tytuł, opis i pozostałe metadane SEO,
- `app/globals.css` — kolory, typografia, układy responsywne i stany interakcji,
- `components/Header.tsx` — nagłówek i animowane menu pełnoekranowe,
- `components/ProjectsSection.tsx` — spokojny grid portfolio; na stronie głównej pokazuje cztery projekty bez linków,
- `components/ProjectCard.tsx` — wygląd pojedynczego projektu,
- `components/ContactForm.tsx` — formularz otwierający lokalną aplikację pocztową,
- `components/AnimationController.tsx` — animacje GSAP i ScrollTrigger,
- `components/CustomCursor.tsx` — animowany kursor dla urządzeń z precyzyjnym wskaźnikiem,
- `components/SiteFooter.tsx` — wspólna, rozbudowana stopka wszystkich podstron,
- `data/site-content.ts` — nawigacja, dane kontaktowe, pakiety, proces i FAQ,
- `data/projects.ts` — łatwa do edycji lista projektów,
- `public/projects/` — grafiki projektów,
- `public/images/` — zdjęcia zespołu wykorzystane z wcześniejszej strony MV Studio,
- `.env.example` — bezpieczny przykład zmiennych środowiskowych.

## Czego potrzebujesz

Przed rozpoczęciem zainstaluj:

- [Node.js](https://nodejs.org/) w aktualnej wersji LTS,
- Git,
- edytor kodu, na przykład Visual Studio Code,
- konto GitHub, jeśli chcesz zapisywać projekt w zdalnym repozytorium.

W terminalu możesz sprawdzić instalację:

```bash
node --version
npm --version
git --version
```

## Instalowanie zależności

Otwórz terminal w głównym folderze projektu, czyli w katalogu zawierającym `package.json`, a następnie uruchom:

```bash
npm install
```

Polecenie pobierze wszystkie zależności zapisane w projekcie. Nie dodawaj nowych bibliotek bez uzasadnienia.

## Uruchamianie strony lokalnie

Uruchom serwer deweloperski:

```bash
npm run dev
```

Nie zamykaj terminala, dopóki pracujesz ze stroną. Po zapisaniu zmian w kodzie Next.js zwykle automatycznie odświeży widok.

## Otwieranie strony w przeglądarce

Po uruchomieniu serwera otwórz adres:

[http://localhost:3000](http://localhost:3000)

Jeśli port 3000 jest zajęty, terminal wyświetli inny adres, na przykład `http://localhost:3001`. Sprawdź stronę również na wąskim ekranie za pomocą narzędzi deweloperskich przeglądarki i upewnij się, że konsola nie zawiera błędów.

## Budowanie wersji produkcyjnej

Przed przygotowaniem wdrożenia sprawdź typy, lint i build:

```bash
npm run typecheck
npm run lint
npm run build
```

Jeśli build zakończy się powodzeniem, możesz lokalnie uruchomić jego wersję produkcyjną:

```bash
npm run start
```

Samo wykonanie buildu nie publikuje strony. Nie wdrażaj projektu na produkcję bez wyraźnego potwierdzenia właściciela projektu.

## Sekrety i zmienne środowiskowe

Hasła, tokeny, klucze API i dane dostępowe zapisuj wyłącznie w `.env.local`. Upewnij się, że `.gitignore` zawiera co najmniej:

```gitignore
.env.local
```

Nigdy nie dodawaj `.env.local` do Git ani GitHuba. Jeśli potrzebna jest lista wymaganych zmiennych, można przygotować `.env.example` zawierający wyłącznie nazwy i fikcyjne wartości zastępcze.

## Zapisywanie zmian w Git i GitHubie

Najpierw sprawdź, co zostało zmienione:

```bash
git status
git diff
```

Dodaj świadomie wybrane pliki i utwórz commit. Przed `git add .` upewnij się za pomocą `git status`, że lista nie zawiera `.env.local` ani innych prywatnych danych:

```bash
git add .
git commit -m "Krótki opis wykonanych zmian"
```

Jeśli repozytorium jest już połączone z GitHubem, wyślij bieżącą gałąź:

```bash
git push
```

Przy pierwszym wysyłaniu nowej gałęzi może być potrzebne:

```bash
git push -u origin NAZWA_GALEZI
```

Zastąp `NAZWA_GALEZI` rzeczywistą nazwą widoczną po wykonaniu `git branch --show-current`. Przed commitem sprawdź błędy, konsolę przeglądarki, responsywność oraz wynik lintowania, testów i buildu dostępnych w projekcie.

## Jak zgłaszać poprawki Codexowi

W poleceniu podaj możliwie konkretnie:

- co ma zostać zmienione,
- gdzie występuje problem,
- jaki ma być oczekiwany rezultat,
- na jakich urządzeniach lub szerokościach ekranu problem jest widoczny,
- czy Codex może tylko przygotować zmianę, czy również ją przetestować.

Przykład:

> Na stronie głównej popraw sekcję hero. Na telefonach przycisk wychodzi poza ekran. Zachowaj obecny wygląd desktopowy, dodaj obsługę `prefers-reduced-motion` i sprawdź lokalnie build oraz konsolę przeglądarki.

Do zgłoszenia warto dołączyć zrzut ekranu, dokładny komunikat błędu oraz kroki pozwalające go odtworzyć. Codex nie powinien wymyślać brakujących informacji o firmie, klientach, realizacjach ani danych kontaktowych.

## Hosting w IQhost

Hosting skonfigurujemy po ukończeniu strony i wybraniu konkretnej usługi IQhost zgodnej z wymaganiami aplikacji Next.js. Dane panelu, domeny, serwera, SSH, FTP/SFTP, bazy danych i DNS należy uzyskać bezpośrednio z konta klienta lub dokumentacji IQhost — nie zapisujemy ich w repozytorium.

Konfiguracji należy szukać później w:

- panelu klienta IQhost,
- ustawieniach wybranej usługi hostingowej lub serwera,
- sekcji domen i rekordów DNS,
- dokumentacji IQhost dotyczącej publikacji aplikacji Node.js/Next.js albo hostingu plików statycznych.

Sposób wdrożenia zależy od możliwości wykupionej usługi. Aplikacja korzystająca z renderowania serwerowego wymaga środowiska obsługującego Node.js. Jeżeli projekt zostanie przygotowany jako statyczny eksport, może zostać umieszczony na hostingu statycznym. Przed wdrożeniem trzeba potwierdzić wariant z właścicielem projektu i zweryfikować aktualne instrukcje IQhost.

Nie publikuj strony produkcyjnej bez wyraźnego potwierdzenia użytkownika.
