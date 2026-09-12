export type ServiceOffer = {
  number: string;
  slug: string;
  eyebrow: string;
  title: string;
  summary: string;
  bestFor: string;
  features: readonly string[];
};

export const serviceOffers: ServiceOffer[] = [
  {
    number: "01",
    slug: "wordpress",
    eyebrow: "Elastyczna baza dla firmy",
    title: "Strony WordPress",
    summary:
      "Projektujemy strony firmowe, usługowe i lokalne, które można wygodnie rozwijać oraz samodzielnie aktualizować. WordPress jest dobrym wyborem, gdy treści mają regularnie się zmieniać.",
    bestFor: "Dla firm, które chcą samodzielnie edytować treści i rozwijać stronę etapami.",
    features: [
      "Strony firmowe, usługowe i lokalne",
      "Wersje wielojęzyczne, blogi i rozbudowane sekcje treści",
      "Formularze i podstawowa optymalizacja SEO",
      "Migracje oraz redesign istniejących stron",
      "Szkolenie z obsługi, utrzymanie i aktualizacje",
    ],
  },
  {
    number: "02",
    slug: "woocommerce",
    eyebrow: "Sprzedaż online",
    title: "Sklepy WooCommerce",
    summary:
      "Tworzymy sklepy oparte na WooCommerce z przejrzystą ścieżką zakupu i layoutem dopasowanym do oferty. Zakres funkcji i integracji ustalamy indywidualnie dla konkretnego projektu.",
    bestFor: "Dla marek, które chcą rozpocząć lub uporządkować sprzedaż internetową.",
    features: [
      "Konfiguracja produktów i ich wariantów",
      "Koszyk, płatności i metody dostawy",
      "Integracje w zakresie ustalonym dla projektu",
      "Podstawowe SEO sklepu i przygotowanie layoutu",
      "Architektura gotowa do dalszej rozbudowy",
    ],
  },
  {
    number: "03",
    slug: "nextjs-typescript",
    eyebrow: "Indywidualne rozwiązania premium",
    title: "Next.js i TypeScript",
    summary:
      "Budujemy szybkie, komponentowe strony w React, Next.js i TypeScript, gdy projekt wymaga niestandardowej prezentacji, wysokiej wydajności albo dopracowanych interakcji.",
    bestFor: "Dla landing page’y, kampanii, produktów i marek wymagających indywidualnego doświadczenia.",
    features: [
      "Komponentowa architektura React i TypeScript",
      "Next.js z eksportem statycznym lub renderowaniem dobranym do projektu",
      "Wysoka wydajność i stabilny układ na każdym ekranie",
      "Niestandardowe interakcje i zaawansowane animacje",
      "Landing page’e, strony kampanii, produktów i prezentacje marek",
    ],
  },
  {
    number: "04",
    slug: "animacje-interakcje",
    eyebrow: "Ruch, który prowadzi użytkownika",
    title: "Animacje i interakcje",
    summary:
      "Projektujemy ruch jako część komunikacji: wskazuje ważne treści, porządkuje opowieść i prowadzi do kontaktu, nie utrudniając czytania ani obsługi strony.",
    bestFor: "Dla projektów, które mają wyróżniać ofertę i jasno pokazywać działanie produktu lub marki.",
    features: [
      "GSAP i ScrollTrigger",
      "Reveale tekstu, pinowanie sekcji i animacje zależne od scrolla",
      "Parallax, przejścia między sekcjami i interakcje hover",
      "Mikrointerakcje przycisków oraz kart",
      "Lżejsze warianty mobilne i obsługa ograniczenia ruchu",
    ],
  },
  {
    number: "05",
    slug: "proste-3d",
    eyebrow: "Opcjonalna warstwa interaktywna",
    title: "Proste elementy 3D",
    summary:
      "W wybranych projektach możemy przygotować prostą prezentację 3D produktu lub marki. To opcjonalny zakres, a nie oferta zaawansowanych konfiguratorów.",
    bestFor: "Dla produktów i marek, którym przestrzenna prezentacja realnie pomaga wyjaśnić ofertę.",
    features: [
      "WebGL, Three.js i React Three Fiber zależnie od potrzeb",
      "Proste modele w formatach .glb i .gltf",
      "Sterowanie ruchem przez GSAP i ScrollTrigger",
      "Zakres dobrany z uwzględnieniem wydajności urządzeń mobilnych",
    ],
  },
];

export const technologyChoices = [
  {
    title: "Kiedy WordPress?",
    description:
      "Gdy zespół chce wygodnie publikować i edytować treści, prowadzić blog, rozwijać rozbudowane sekcje albo zarządzać sklepem WooCommerce.",
  },
  {
    title: "Kiedy Next.js?",
    description:
      "Gdy priorytetem jest indywidualne doświadczenie, nietypowa interakcja, bardzo wysoka wydajność lub rozwiązanie projektowane pod konkretną kampanię czy produkt.",
  },
] as const;
