export type Project = {
  id: string;
  name: string;
  category: string;
  year: string;
  description: string;
  image: string;
  href: string;
  imageAlt: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "01",
    name: "Avandis",
    category: "Projekt wyróżniony",
    year: "2026",
    description:
      "Projekt otwierający portfolio MV Studio. Pełną wersję można zobaczyć bezpośrednio pod adresem avandis.pl.",
    image: "/projects/avandis.png",
    href: "http://avandis.pl",
    imageAlt: "Widok strony internetowej Avandis",
    featured: true,
  },
  {
    id: "02",
    name: "Restauracja Quaint",
    category: "Concept · Gastronomia",
    year: "2026",
    description:
      "Autorska koncepcja strony restauracji przygotowana przez MV Studio w celu prezentacji możliwości projektowych.",
    image: "/projects/restauracja-quaint.png",
    href: "http://restauracja.mvstudio.pl",
    imageAlt: "Koncepcja strony internetowej Restauracji Quaint",
  },
  {
    id: "03",
    name: "Fryzjer Nova",
    category: "Concept · Usługi",
    year: "2026",
    description:
      "Autorska koncepcja strony salonu fryzjerskiego przygotowana przez MV Studio jako projekt demonstracyjny.",
    image: "/projects/fryzjer-nova.png",
    href: "http://fryzjer.mvstudio.pl",
    imageAlt: "Koncepcja strony internetowej Fryzjer Nova",
  },
  {
    id: "04",
    name: "MechanikBB",
    category: "Concept · Motoryzacja",
    year: "2026",
    description:
      "Autorska koncepcja strony warsztatu przygotowana przez MV Studio w celu pokazania kierunku wizualnego.",
    image: "/projects/mechanikbb.png",
    href: "http://mechanik.mvstudio.pl",
    imageAlt: "Koncepcja strony internetowej MechanikBB",
  },
  {
    id: "05",
    name: "Firma budowlana",
    category: "Concept · Budownictwo",
    year: "2026",
    description:
      "Autorska koncepcja strony firmy budowlanej przygotowana przez MV Studio jako projekt demonstracyjny.",
    image: "/projects/firma-budowlana.png",
    href: "http://firmabudowlana.mvstudio.pl",
    imageAlt: "Koncepcja strony internetowej firmy budowlanej",
  },
];
