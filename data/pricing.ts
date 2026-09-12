export type PricingPackage = {
  name: string;
  price: string;
  audience: string;
  features: readonly string[];
  featured?: boolean;
};

export const wordpressPricing: readonly PricingPackage[] = [
  {
    name: "WordPress One Page",
    price: "od 1 000 zł",
    audience: "Dla małych firm, które potrzebują zwartej i czytelnej prezentacji oferty.",
    features: [
      "Jedna strona przewijana",
      "Responsywność",
      "Podstawowe SEO",
      "Formularz kontaktowy",
      "Konfiguracja cookies",
      "Wdrożenie na hostingu",
    ],
  },
  {
    name: "WordPress do 5 podstron",
    price: "od 2 000 zł",
    audience: "Dla firm, które chcą rozdzielić ofertę na kilka najważniejszych podstron.",
    features: [
      "Do 5 podstron",
      "Responsywny układ",
      "Podstawowe SEO",
      "Formularz kontaktowy",
      "Konfiguracja cookies",
      "Wdrożenie strony",
    ],
  },
  {
    name: "WordPress powyżej 5 podstron",
    price: "od 3 000 zł",
    audience: "Dla firm z większą ofertą, rozbudowaną strukturą treści lub blogiem.",
    features: [
      "Większa liczba podstron",
      "Rozbudowana struktura oferty",
      "Podstawowe SEO",
      "Blog lub dodatkowe sekcje",
      "Responsywność",
      "Wdrożenie strony",
    ],
  },
] as const;

export const woocommercePricing: PricingPackage = {
  name: "WooCommerce",
  price: "od 4 000 zł",
  audience: "Dla marek, które potrzebują podstawowego sklepu internetowego opartego na WordPressie i WooCommerce.",
  features: [
    "Konfiguracja sklepu",
    "Produkty i kategorie",
    "Koszyk",
    "Podstawowa konfiguracja płatności",
    "Podstawowa konfiguracja dostawy",
    "Responsywność",
    "Podstawowe SEO",
    "Strony regulaminowe",
  ],
};

export const nextPricing: readonly PricingPackage[] = [
  {
    name: "Next.js One Page / landing page",
    price: "od 6 000 zł",
    audience: "Dla kampanii, produktu lub marki, która potrzebuje dedykowanego otwarcia.",
    features: [
      "Dedykowany projekt",
      "React, Next.js i TypeScript",
      "Responsywność",
      "Techniczne SEO",
      "Formularz kontaktowy",
      "Wdrożenie",
      "Wybrane animacje GSAP",
    ],
  },
  {
    name: "Next.js do 5 podstron",
    price: "od 7 500 zł",
    audience: "Dla firm, które chcą indywidualnego layoutu, szybkości i dopracowanych interakcji.",
    featured: true,
    features: [
      "Do 5 unikalnych podstron",
      "Indywidualny layout",
      "React, Next.js i TypeScript",
      "GSAP i ScrollTrigger",
      "Responsywność",
      "Techniczne SEO",
      "Optymalizacja szybkości",
      "Wdrożenie na hosting",
    ],
  },
  {
    name: "Next.js powyżej 5 podstron",
    price: "od 9 000–9 500 zł",
    audience: "Dla większych serwisów, portfolio i case studies z rozbudowanym doświadczeniem użytkownika.",
    features: [
      "Większa liczba podstron",
      "Bardziej rozbudowany projekt UX/UI",
      "Case studies lub portfolio",
      "Rozbudowane animacje GSAP",
      "Mikrointerakcje",
      "Techniczne SEO",
      "Optymalizacja wydajności",
      "Wdrożenie i konfiguracja analityki",
    ],
  },
] as const;

export const developmentRates = [
  { name: "Drobne poprawki", price: "50 zł", description: "Proste zmiany treści i drobne poprawki." },
  { name: "Standardowe zmiany", price: "100 zł", description: "Standardowe zmiany wizualne lub funkcjonalne." },
  { name: "Rozbudowa strony", price: "200 zł", description: "Większe zmiany i rozbudowa strony." },
] as const;

export const valuationFactors = [
  "Liczba podstron",
  "Ilość treści",
  "Liczba rund poprawek",
  "Zakres animacji",
  "Integracje",
  "Migracja starej strony",
  "Sklep lub system CMS",
  "Wymagania SEO",
  "Przygotowanie materiałów przez MV Studio lub klienta",
] as const;

export const basePriceExclusions = [
  "Integracje z hurtowniami i systemami ERP",
  "Zaawansowane płatności i automaty paczkowe",
  "Duża liczba produktów lub importy danych",
  "Niestandardowe funkcje wymagające osobnej analizy",
  "Zaawansowane konfiguratory 3D, WebGL i Three.js",
] as const;
