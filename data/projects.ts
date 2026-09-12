import { avandisCaseStudy, benvenutiCaseStudy } from "@/data/case-studies";

export type Project = {
  id: string;
  name: string;
  category: string;
  year?: string;
  description: string;
  image?: string;
  previewVideo?: string;
  href?: string;
  caseStudySlug?: string;
  imageAlt: string;
  kind: "real" | "demo";
};

export const projects: Project[] = [
  {
    id: avandisCaseStudy.projectId,
    name: avandisCaseStudy.name,
    category: "Strona internetowa · WordPress",
    year: avandisCaseStudy.year,
    description: avandisCaseStudy.heroDescription,
    image: avandisCaseStudy.image,
    href: avandisCaseStudy.liveUrl,
    caseStudySlug: avandisCaseStudy.slug,
    imageAlt: avandisCaseStudy.imageAlt,
    kind: "real",
  },
  {
    id: benvenutiCaseStudy.projectId,
    name: benvenutiCaseStudy.name,
    category: "Strona dla pizzerii · Bielsko-Biała",
    description: benvenutiCaseStudy.heroDescription,
    href: benvenutiCaseStudy.liveUrl,
    caseStudySlug: benvenutiCaseStudy.slug,
    imageAlt: benvenutiCaseStudy.imageAlt,
    kind: "real",
  },
  {
    id: "03",
    name: "Restauracja Quaint",
    category: "Gastronomia · Concept",
    year: "2026",
    description:
      "Autorska koncepcja strony restauracji przygotowana przez MV Studio w celu prezentacji możliwości projektowych.",
    image: "/projects/restauracja-quaint.png",
    imageAlt: "Koncepcja strony internetowej Restauracji Quaint",
    kind: "demo",
  },
  {
    id: "04",
    name: "Fryzjer Nova",
    category: "Usługi · Concept",
    year: "2026",
    description:
      "Autorska koncepcja strony salonu fryzjerskiego przygotowana przez MV Studio jako projekt demonstracyjny.",
    image: "/projects/fryzjer-nova.png",
    imageAlt: "Koncepcja strony internetowej Fryzjer Nova",
    kind: "demo",
  },
  {
    id: "05",
    name: "MechanikBB",
    category: "Motoryzacja · Concept",
    year: "2026",
    description:
      "Autorska koncepcja strony warsztatu przygotowana przez MV Studio w celu pokazania kierunku wizualnego.",
    image: "/projects/mechanikbb.png",
    imageAlt: "Koncepcja strony internetowej MechanikBB",
    kind: "demo",
  },
  {
    id: "06",
    name: "Firma budowlana",
    category: "Budownictwo · Concept",
    year: "2026",
    description:
      "Autorska koncepcja strony firmy budowlanej przygotowana przez MV Studio jako projekt demonstracyjny.",
    image: "/projects/firma-budowlana.png",
    imageAlt: "Koncepcja strony internetowej firmy budowlanej",
    kind: "demo",
  },
];
