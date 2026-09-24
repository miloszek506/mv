export type CaseStudy = {
  slug: string;
  projectId: string;
  name: string;
  category: string;
  year?: string;
  technology?: string;
  liveUrl: string;
  heroDescription: string;
  clientDescription: string;
  challenge: string;
  goal: string;
  solution: string;
  scope: readonly string[];
  structure: readonly string[];
  decisions: readonly string[];
  responsive: string;
  seo: string;
  motion: string;
  scopeHeading: string;
  structureHeading: string;
  liveHeading: string;
  liveDescription: string;
  image?: string;
  imageAlt: string;
};

export const avandisCaseStudy: CaseStudy = {
  slug: "avandis",
    projectId: "01",
    name: "Avandis",
  category: "Strona firmowa / nieruchomości",
    year: "2026",
  technology: "WordPress · Elementor",
  liveUrl: "https://avandis.pl/",
    heroDescription:
    "Nowoczesna strona internetowa dla marki działającej na rynku nieruchomości i inwestycji. Projekt łączy profesjonalny, biznesowy charakter z przejrzystą prezentacją portfolio nieruchomości.",
    clientDescription:
    "Avandis to firma działająca na rynku nieruchomości, koncentrująca się na zakupie, zarządzaniu i sprzedaży nieruchomości na własny rachunek.\n\nNaszym zadaniem było stworzenie nowej obecności marki w internecie, profesjonalnej, nowoczesnej i dopasowanej do charakteru działalności inwestycyjnej. Strona miała nie tylko przedstawiać firmę, ale przede wszystkim odpowiednio eksponować jej portfolio i poszczególne nieruchomości.",
    challenge:
    "Avandis potrzebował strony, która będzie budowała wiarygodny wizerunek marki oraz pozwoli w uporządkowany sposób prezentować realizowane inwestycje, nieruchomości i najważniejsze informacje o firmie.\n\nIstotne było połączenie biznesowego charakteru z nowoczesną, wizualną formą.",
    goal:
    "Stworzyć spójny serwis, w którym użytkownik już od pierwszego ekranu rozumie charakter Avandis, może poznać firmę, przejrzeć portfolio oraz przejść do szczegółowych prezentacji poszczególnych nieruchomości.\n\nProjekt miał być jednocześnie elegancki, prosty w obsłudze i w pełni responsywny.",
    solution:
    "Zaprojektowaliśmy i wdrożyliśmy stronę opartą na WordPressie i Elementorze, wykorzystując duże materiały wizualne, przejrzystą typografię, animacje oraz modułową strukturę sekcji.\n\nSzczególną uwagę poświęciliśmy portfolio nieruchomości oraz indywidualnym podstronom inwestycji, takim jak Avandis Towers, gdzie zdjęcia, materiały wideo i informacje o obiekcie tworzą kompletną prezentację nieruchomości.",
  scope: [
    "Architektura informacji i struktura serwisu",
    "Projekt UX/UI",
    "Projekt identyfikacji wizualnej strony",
    "Wdrożenie WordPress + Elementor",
    "Portfolio nieruchomości i podstrony inwestycji",
    "Responsywność desktop / tablet / mobile",
    "Animacje i elementy interaktywne",
    "Optymalizacja materiałów wizualnych",
    "Podstawowa konfiguracja technicznego SEO",
    "Testy i finalne wdrożenie",
  ],
  structure: [
    "Mocne otwarcie marki. Pierwszy ekran buduje profesjonalny charakter Avandis i od razu określa obszar działalności firmy.",
    "Portfolio jako kluczowy element serwisu. Nieruchomości otrzymały wyraźną przestrzeń wizualną, dzięki której użytkownik może szybko przejść do interesującego go projektu.",
    "Dedykowane prezentacje inwestycji. Wybrane nieruchomości posiadają rozbudowane podstrony łączące zdjęcia, materiały wideo i najważniejsze informacje.",
    "Prosta ścieżka kontaktu. Kontakt z firmą pozostaje łatwo dostępny niezależnie od miejsca, w którym użytkownik znajduje się w serwisie.",
  ],
  decisions: [
    "Projekt został przygotowany dla komputerów, tabletów i smartfonów. Układ sekcji, typografia, materiały wizualne i odstępy zmieniają się wraz z szerokością ekranu, zachowując charakter projektu również na urządzeniach mobilnych.",
    "Strona otrzymała uporządkowaną strukturę nagłówków, przyjazne adresy URL, podstawowe metadane oraz strukturę treści przygotowaną z myślą o dalszym rozwoju widoczności marki i poszczególnych nieruchomości w Google.",
    "Zastosowaliśmy subtelne animacje wejścia, przejścia i elementy ruchome, które wzmacniają premium charakter strony. Animacje pełnią funkcję wizualną, ale pozostają podporządkowane treści i nie utrudniają korzystania z serwisu.",
    ],
  responsive:
    "Projekt został przygotowany dla komputerów, tabletów i smartfonów. Układ sekcji, typografia, materiały wizualne i odstępy zmieniają się wraz z szerokością ekranu, zachowując charakter projektu również na urządzeniach mobilnych.",
  seo:
    "Strona otrzymała uporządkowaną strukturę nagłówków, przyjazne adresy URL, podstawowe metadane oraz strukturę treści przygotowaną z myślą o dalszym rozwoju widoczności marki i poszczególnych nieruchomości w Google.",
  motion:
    "Zastosowaliśmy subtelne animacje wejścia, przejścia i elementy ruchome, które wzmacniają premium charakter strony. Animacje pełnią funkcję wizualną, ale pozostają podporządkowane treści i nie utrudniają korzystania z serwisu.",
  scopeHeading: "Od koncepcji do działającej strony.",
  structureHeading: "Nieruchomości w centrum projektu.",
  liveHeading: "Zobacz Avandis online.",
  liveDescription: "",
    image: "/projects/avandis.png",
    imageAlt: "Widok strony internetowej Avandis",
};

export const benvenutiCaseStudy: CaseStudy = {
  slug: "benvenuti-a-napoli",
  projectId: "02",
  name: "Benvenuti a Napoli",
  category: "Realizacja dla klienta",
  year: "2026",
  technology: "WordPress · Elementor",
  liveUrl: "https://benvenutianapoli.pl",
    heroDescription:
    "Strona internetowa dla autentycznej pizzerii neapolitańskiej w sercu Bielska-Białej, zaprojektowana tak, aby charakter lokalu, jego historia i kuchnia były wyczuwalne od pierwszego ekranu.",
    clientDescription:
      "Benvenuti a Napoli to pizzeria neapolitańska działająca w centrum Bielska-Białej. Marka opiera się na autentycznej włoskiej kuchni, neapolitańskich recepturach, starannie dobranych składnikach oraz atmosferze południa Włoch.\n\nNaszym zadaniem było przenieść ten charakter do świata cyfrowego i stworzyć stronę, która nie będzie jedynie wizytówką lokalu, ale pełnoprawnym rozszerzeniem marki Benvenuti a Napoli.",
    challenge:
      "Benvenuti a Napoli potrzebowało własnego miejsca w internecie, które pozwoli uporządkować najważniejsze informacje o restauracji i zaprezentować je w spójnej, atrakcyjnej wizualnie formie.\n\nKluczowe było połączenie rozbudowanego menu, historii lokalu, oferty Akademii Pizzy, galerii oraz kontaktu w jednym intuicyjnym doświadczeniu.",
    goal:
      "Stworzyć stronę, która już od pierwszego kontaktu kojarzy się z Neapolem i oddaje autentyczny charakter restauracji.\n\nProjekt miał jednocześnie ułatwiać użytkownikowi szybkie sprawdzenie menu, poznanie lokalu, znalezienie informacji o szkoleniach oraz przejście do kontaktu i lokalizacji restauracji.",
    solution:
      "Zaprojektowaliśmy kompletną, responsywną stronę opartą na WordPressie i Elementorze, wykorzystującą charakterystyczną identyfikację wizualną Benvenuti a Napoli.\n\nDuże fotografie, elegancka typografia, ciepłe odcienie beżu i charakterystyczny błękit Napoli tworzą spójny system wizualny, który łączy nowoczesny design z atmosferą włoskiej restauracji.",
    scope: [
      "Architektura i struktura treści",
      "Projekt UX/UI",
      "Interaktywne menu restauracji",
      "Responsywny układ",
      "Sekcja Akademii Pizzy",
      "Integracja kontaktu i Google Maps",
      "Podstawowa optymalizacja SEO",
      "Animacje i mikrointerakcje",
      "Wdrożenie WordPress + Elementor",
      "Testy i przygotowanie do publikacji",
    ],
    structure: [
      "Hero budujące klimat marki",
      "Historia i charakter Benvenuti a Napoli",
      "Rozbudowane, interaktywne menu",
      "Prezentacja Akademii Pizzy",
      "Galeria restauracji i kuchni",
      "Opinie gości",
      "Kontakt i lokalizacja",
    ],
    decisions: [
      "Struktura strony została zaprojektowana tak, aby użytkownik mógł zarówno poznawać historię i klimat restauracji, jak i szybko dotrzeć do konkretnych informacji.",
      "Jednym z najważniejszych elementów realizacji jest menu przeniesione bezpośrednio na stronę internetową. Podział na kategorie pozwala wygodnie przeglądać ofertę bez konieczności otwierania dodatkowych dokumentów.",
      "Całość została zaprojektowana w spójnym języku wizualnym, wykorzystującym fotografie jedzenia, przestrzeń, elegancką typografię oraz kolory inspirowane Neapolem.",
    ],
    responsive:
      "Projekt od początku został przygotowany z myślą o urządzeniach mobilnych. Menu, nawigacja, galerie, przyciski oraz najważniejsze informacje zostały dostosowane do obsługi dotykowej i mniejszych ekranów, dzięki czemu strona pozostaje wygodna zarówno na komputerze, jak i smartfonie.",
    seo:
      "Struktura strony została przygotowana z uwzględnieniem lokalnego charakteru działalności. Semantyczna hierarchia treści, odpowiednia struktura nagłówków oraz informacje związane z pizzą neapolitańską i Bielskiem-Białą pomagają wyszukiwarkom prawidłowo interpretować tematykę strony.",
    motion:
      "Subtelne animacje i mikrointerakcje podkreślają premium charakter projektu bez dominowania nad treścią. Przejścia pomiędzy elementami, reakcje przycisków oraz interakcje w menu zostały wykorzystane jako naturalne uzupełnienie doświadczenia użytkownika.",
    scopeHeading: "Od struktury do wdrożenia.",
    structureHeading: "Od pierwszego spojrzenia do wyboru pizzy.",
    liveHeading: "Poczuj kawałek Neapolu online.",
    liveDescription: "Zobacz kompletną realizację Benvenuti a Napoli i sprawdź, jak połączyliśmy włoski charakter marki z nowoczesnym doświadczeniem internetowym.",
  image: "/projects/benvenuti-a-napoli.jpg",
  imageAlt: "Benvenuti a Napoli: pizzeria w Bielsku-Białej",
};

export const caseStudies: CaseStudy[] = [avandisCaseStudy, benvenutiCaseStudy];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
