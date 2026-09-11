import type { Metadata } from "next";
import { FaqList } from "@/components/FaqList";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { ProjectsSection } from "@/components/ProjectsSection";

export const metadata: Metadata = {
  title: "Portfolio | Projekty stron internetowych",
  description: "Portfolio MV Studio: wyróżniony projekt Avandis oraz autorskie koncepcje stron internetowych.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <PageShell>
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
