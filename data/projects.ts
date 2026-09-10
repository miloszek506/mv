export type Project = {
  id: string;
  name: string;
  category: string;
  year: string;
  description: string;
  image: string;
  href: string;
  imageAlt: string;
};

export const projects: Project[] = [
  {
    id: "01",
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
    id: "02",
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
    id: "03",
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
    id: "04",
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
