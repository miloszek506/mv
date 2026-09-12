import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList } from "@/components/FaqList";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { ProjectsSection } from "@/components/ProjectsSection";

export const metadata: Metadata = {
  title: "Portfolio i case studies stron internetowych",
  description: "Portfolio MV Studio: case studies Avandis i Benvenuti a Napoli oraz nieklikalne projekty demonstracyjne stron internetowych.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Portfolio i case studies | MV Studio",
    description: "Prawdziwe realizacje dla klientów oraz wyraźnie oznaczone koncepcje demonstracyjne MV Studio.",
    url: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <PageShell>
      <Breadcrumbs items={[{ label: "Strona główna", href: "/" }, { label: "Portfolio" }]} />
      <PageHero
        eyebrow="Portfolio · Wybrane prace"
        title={["Nasze", "projekty"]}
        description="Avandis i Benvenuti a Napoli to projekty dla klientów. Pozostałe pozycje są wyraźnie oznaczonymi koncepcjami demonstracyjnymi MV Studio."
        index="03"
        variant="projects"
        action={{ href: "/contact", label: "Wyceń projekt" }}
      />
      <ProjectsSection interactive scrollDrivenDemo />
      <FaqList />
    </PageShell>
  );
}
