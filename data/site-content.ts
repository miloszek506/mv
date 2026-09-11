export const navigation = [
  { href: "/about", label: "O nas" },
  { href: "/projects", label: "Portfolio" },
  { href: "/services", label: "Cennik" },
  { href: "/contact", label: "Kontakt" },
] as const;

export const contact = {
  email: "kontakt@mvstudio.pl",
  phones: ["+48 505 780 066", "+48 884 631 429"],
  phoneHrefs: ["tel:+48505780066", "tel:+48884631429"],
  city: "Bielsko-Biała",
  instagram: "http://instagram.com/mvstudio.pl",
  facebook: "https://www.facebook.com/profile.php?id=61591434677827",
  privacyPolicy: "/polityka-prywatnosci",
} as const;

export const services = [
  {
    number: "01",
    title: "Projekt i wdrożenie strony",
    description:
      "Od pierwszego układu po działającą stronę. Indywidualny projekt, responsywny wygląd i przejrzysta nawigacja.",
  },
  {
    number: "02",
    title: "Optymalizacja",
    description:
      "Szybkie ładowanie, podstawy widoczności w Google oraz funkcje dopasowane do potrzeb biznesu.",
  },
  {
    number: "03",
    title: "Hosting i wsparcie",
    description:
      "Pomoc przy konfiguracji domeny i hostingu, certyfikat SSL, kopie zapasowe, aktualizacje i wsparcie techniczne.",
  },
] as const;

export const processSteps = [
  {
    number: "01",
    timing: "Dzień 1",
    title: "Ustalenia",
    description:
      "Rozmawiamy o firmie, celach strony, potrzebnych funkcjach i materiałach.",
  },
  {
    number: "02",
    timing: "Dni 2–5",
    title: "Projekt i realizacja",
    description:
      "Przygotowujemy strukturę, kierunek wizualny i wdrażamy uzgodnione rozwiązania.",
  },
  {
    number: "03",
    timing: "Dni 6–7",
    title: "Publikacja i optymalizacja",
    description:
      "Sprawdzamy działanie strony, wprowadzamy ustalone poprawki i przygotowujemy ją do publikacji.",
  },
] as const;

export const websitePackages = [
  {
    name: "Start",
    price: "od 800 zł",
    summary: "Dla małych firm potrzebujących zwartej strony typu one-page.",
    features: [
      "Strona one-page do 10 sekcji",
      "Responsywny układ",
      "Formularz kontaktowy i mapa Google",
      "Podstawowa optymalizacja SEO",
    ],
  },
  {
    name: "Business",
    price: "od 1500 zł",
    summary: "Dla lokalnych firm, które potrzebują rozbudowanej prezentacji oferty.",
    features: [
      "Do 5 podstron",
      "Indywidualny projekt",
      "Formularze, opinie, galerie i Google Maps",
      "Podstawowa optymalizacja pod Google",
    ],
  },
  {
    name: "Premium",
    price: "od 2500 zł",
    summary: "Dla projektów z większą liczbą treści i funkcji.",
    features: [
      "8 lub więcej podstron",
      "Portfolio, blog lub inne rozbudowane sekcje",
      "Animacje, formularze albo rezerwacje",
      "Optymalizacja wydajności i rozszerzone SEO",
    ],
  },
] as const;

export const maintenancePackages = [
  {
    name: "Start",
    price: "49 zł",
    period: "/ miesiąc",
    summary: "Dla firm, które potrzebują bezpiecznego i stabilnego utrzymania strony.",
    featured: false,
    features: [
      "Hosting",
      "Certyfikat SSL",
      "Kopie zapasowe",
      "Aktualizacje WordPressa",
      "Aktualizacje wtyczek",
      "Podstawowe zabezpieczenia",
      "Monitoring działania strony",
      "Czas reakcji: 48–72 godziny",
    ],
  },
  {
    name: "Pro",
    price: "99 zł",
    period: "/ miesiąc",
    summary: "Dla firm, które chcą, aby MV Studio zajmowało się również bieżącą obsługą strony.",
    featured: true,
    features: [
      "Wszystko z pakietu START",
      "Drobne zmiany na stronie",
      "Zmiana tekstów i zdjęć",
      "Aktualizacja danych kontaktowych i oferty",
      "Do 30 minut prac miesięcznie",
      "Wsparcie techniczne",
      "Czas reakcji: 24–48 godzin",
    ],
  },
  {
    name: "Premium",
    price: "199 zł",
    period: "/ miesiąc",
    summary: "Dla firm, które chcą regularnie rozwijać i aktualizować swoją stronę.",
    featured: false,
    features: [
      "Wszystko z pakietu PRO",
      "Do 1 godziny prac miesięcznie",
      "Dodawanie nowych sekcji",
      "Rozbudowa podstron",
      "Większe zmiany w wyglądzie strony",
      "Priorytetowa obsługa",
      "Czas reakcji: do 24 godzin",
    ],
  },
] as const;

export const additionalMaintenanceWork = {
  price: "150 zł / godzinę",
  description:
    "Prace wykraczające poza zakres wybranego pakietu są wyceniane indywidualnie.",
  examples:
    "Dotyczy to między innymi większej rozbudowy strony, nowych podstron i niestandardowych wdrożeń.",
} as const;

export const frequentlyAskedQuestions = [
  {
    question: "Ile trwa wykonanie strony?",
    answer:
      "Zwykle kilka dni. Termin zależy od wielkości projektu i czasu przekazania potrzebnych materiałów.",
  },
  {
    question: "Czy strona będzie nastawiona na sprzedaż?",
    answer:
      "Projektujemy z myślą o konwersji, zaufaniu odbiorców i czytelnym przedstawieniu oferty.",
  },
  {
    question: "Czy pomagacie przygotować treści i materiały?",
    answer:
      "Możemy pomóc z tekstami, strukturą oferty, zdjęciami, grafikami oraz układem sekcji.",
  },
  {
    question: "Czy zajmujecie się domeną i hostingiem?",
    answer:
      "Możemy pomóc w konfiguracji domeny, hostingu i WordPressa oraz w instalacji strony.",
  },
  {
    question: "Czy strona będzie działać na telefonie?",
    answer:
      "Tak. Strony przygotowujemy z myślą o telefonach, tabletach i komputerach.",
  },
  {
    question: "Czy stronę można później rozbudować?",
    answer:
      "Tak. Możliwe jest dodanie między innymi sklepu, bloga, kolejnych podstron lub systemu rezerwacji.",
  },
] as const;
