export type Project = {
  id: string;
  name: string;
  category: string;
  year?: string;
  description: string;
  image?: string;
  href?: string;
  imageAlt: string;
  kind: "real" | "demo";
};

export const projects: Project[] = [
  {
    id: "01",
    name: "Avandis",
    category: "Realizacja · Projekt dla klienta",
    year: "2026",
    description:
      "Projekt dla klienta przygotowany przez MV Studio. Pełną wersję można zobaczyć bezpośrednio pod adresem avandis.pl.",
    image: "/projects/avandis.png",
    href: "http://avandis.pl",
    imageAlt: "Widok strony internetowej Avandis",
    kind: "real",
  },
  {
    id: "02",
    name: "Benvenuti a Napoli",
    category: "Realizacja · Pizzeria w Bielsku-Białej",
    description: "Projekt strony dla pizzerii Benvenuti a Napoli w Bielsku-Białej.",
    imageAlt: "Benvenuti a Napoli — pizzeria w Bielsku-Białej",
    kind: "real",
  },
  {
    id: "03",
    name: "Restauracja Quaint",
    category: "Demo · Concept · Gastronomia",
    year: "2026",
    description:
      "Autorska koncepcja strony restauracji przygotowana przez MV Studio w celu prezentacji możliwości projektowych.",
    image: "/projects/restauracja-quaint.png",
    href: "http://restauracja.mvstudio.pl",
    imageAlt: "Koncepcja strony internetowej Restauracji Quaint",
    kind: "demo",
  },
  {
    id: "04",
    name: "Fryzjer Nova",
    category: "Demo · Concept · Usługi",
    year: "2026",
    description:
      "Autorska koncepcja strony salonu fryzjerskiego przygotowana przez MV Studio jako projekt demonstracyjny.",
    image: "/projects/fryzjer-nova.png",
    href: "http://fryzjer.mvstudio.pl",
    imageAlt: "Koncepcja strony internetowej Fryzjer Nova",
    kind: "demo",
  },
  {
    id: "05",
    name: "MechanikBB",
    category: "Demo · Concept · Motoryzacja",
    year: "2026",
    description:
      "Autorska koncepcja strony warsztatu przygotowana przez MV Studio w celu pokazania kierunku wizualnego.",
    image: "/projects/mechanikbb.png",
    href: "http://mechanik.mvstudio.pl",
    imageAlt: "Koncepcja strony internetowej MechanikBB",
    kind: "demo",
  },
  {
    id: "06",
    name: "Firma budowlana",
    category: "Demo · Concept · Budownictwo",
    year: "2026",
    description:
      "Autorska koncepcja strony firmy budowlanej przygotowana przez MV Studio jako projekt demonstracyjny.",
    image: "/projects/firma-budowlana.png",
    href: "http://firmabudowlana.mvstudio.pl",
    imageAlt: "Koncepcja strony internetowej firmy budowlanej",
    kind: "demo",
  },
];
