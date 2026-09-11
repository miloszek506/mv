import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

type ProjectsSectionProps = {
  interactive?: boolean;
  scrollDrivenDemo?: boolean;
};

export function ProjectsSection({ interactive = false, scrollDrivenDemo = false }: ProjectsSectionProps) {
  const realProjects = projects.filter((project) => project.kind === "real");
  const demoProjects = projects.filter((project) => project.kind === "demo");

  return (
    <section
      className="projects-section projects-section--portfolio"
      id="projekty"
      aria-labelledby="projects-title"
    >
      <div className="section-heading projects-heading">
        <div>
          <span className="eyebrow">03 · Portfolio</span>
          <h2 id="projects-title">Realizacje i kierunki<br />projektowe.</h2>
        </div>
        <p>
          Avandis i Benvenuti a Napoli to projekty dla klientów. Pozycje oznaczone
          jako Demo · Concept są autorskimi koncepcjami MV Studio, a nie realizacjami
          dla rzeczywistych klientów.
        </p>
      </div>

      <div className="real-projects-grid" data-real-projects>
        {realProjects.map((project) => (
          <ProjectCard key={project.id} project={project} interactive={interactive} />
        ))}
      </div>

      <div className={`demo-projects-stage${scrollDrivenDemo ? " demo-projects-stage--scroll-driven" : ""}`} data-demo-stage={scrollDrivenDemo || undefined}>
        <div className="demo-projects-heading" data-reveal>
          <span className="eyebrow">Demo · Concept</span>
          <p>Autorskie kierunki pokazujące możliwości projektowe MV Studio.</p>
        </div>
        <div className="demo-projects-viewport" data-demo-rail aria-label="Projekty demonstracyjne">
          <div className="demo-projects-rail">
            {demoProjects.map((project) => (
              <ProjectCard key={project.id} project={project} interactive={interactive} />
            ))}
          </div>
        </div>
      </div>

      {!interactive ? (
        <Link className="section-cta text-link" href="/projects">
          Zobacz całe portfolio <span aria-hidden="true">↗</span>
        </Link>
      ) : null}
    </section>
  );
}
