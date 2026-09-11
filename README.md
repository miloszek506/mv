# MV Studio

MV Studio to nowoczesne studio projektowania i tworzenia stron internetowych, skupione na budowaniu charakterystycznych, wydajnych i dopracowanych doświadczeń cyfrowych dla marek, firm oraz ambitnych projektów.

Strona łączy minimalistyczny język wizualny z wyrazistymi animacjami, przemyślanymi interakcjami i naciskiem na wygodę użytkowania na komputerach oraz urządzeniach mobilnych.

## Funkcje

- Nowoczesny, responsywny interfejs
- Spójna identyfikacja wizualna
- Animacje tworzone za pomocą GSAP
- Interakcje scrollowe z wykorzystaniem GSAP ScrollTrigger
- Płynne przejścia i mikrointerakcje
- Niestandardowy kursor
- Responsywna prezentacja portfolio
- Struktura przyjazna SEO
- Układ dostosowany do urządzeń mobilnych
- Zoptymalizowany eksport statyczny
- Osobna podstrona polityki prywatności
- Responsywna i intuicyjna nawigacja

## Technologie

- Next.js
- React
- TypeScript
- Tailwind CSS
- GSAP
- GSAP ScrollTrigger
- HTML5
- CSS3
- Git
- GitHub

## Podstrony

- `/` — Strona główna
- `/about` — O nas
- `/projects` — Projekty i portfolio
- `/services` — Usługi i oferta
- `/contact` — Kontakt
- `/polityka-prywatnosci` — Polityka prywatności

## Struktura projektu

```text
app/
├── about/
├── contact/
├── polityka-prywatnosci/
├── projects/
├── services/
└── page.tsx

components/    Reużywalne komponenty interfejsu
data/          Dane projektów i treści
public/        Obrazy, wideo, ikony i assety statyczne
```

## System wizualny

Identyfikacja wizualna MV Studio opiera się na minimalistycznym, ciemnym interfejsie z charakterystycznym limonkowym akcentem:

```text
#82FF1F
```

System wizualny wykorzystuje:

- Wyrazistą typografię
- Wysoki kontrast
- Minimalistyczną nawigację
- Płynne animacje
- Subtelne interakcje hover
- Przemyślane odstępy
- Responsywną kompozycję

## Uruchomienie projektu

Zainstaluj zależności:

```bash
npm install
```

Uruchom środowisko developerskie:

```bash
npm run dev
```

Strona będzie dostępna pod adresem:

```text
http://localhost:3000
```

## Build produkcyjny

Utwórz zoptymalizowaną wersję produkcyjną:

```bash
npm run build
```

Projekt korzysta z konfiguracji eksportu statycznego. Po poprawnym zakończeniu buildu gotowe pliki produkcyjne znajdują się w katalogu:

```text
out/
```

Zawartość tego katalogu można przesłać na standardowy hosting internetowy.

## Wdrożenie

W przypadku hostingu statycznego zawartość katalogu `out` należy przesłać do katalogu głównego wybranej domeny lub subdomeny.

Repozytorium zawiera kod źródłowy oraz konfigurację potrzebną do ponownego wygenerowania wersji produkcyjnej strony.

## Założenia projektu

Projekt został zbudowany w oparciu o:

- Czytelną i łatwą w utrzymaniu strukturę komponentów
- Reużywalne elementy interfejsu
- Spójne zachowanie na różnych rozdzielczościach
- Wydajne i przemyślane animacje
- Semantyczną strukturę stron
- Organizację treści przyjazną SEO
- Minimalną liczbę zależności
- Spójny język wizualny na wszystkich podstronach

## Licencja

Projekt oraz identyfikacja wizualna są własnością MV Studio.

© MV Studio. Wszelkie prawa zastrzeżone.
