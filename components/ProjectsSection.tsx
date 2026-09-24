import Link from "next/link";
import { ArrowIcon } from "@/components/ArrowIcon";
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
          Najpierw pokazujemy prawdziwe realizacje i ich proces. Dalej znajdują się
          wyraźnie oznaczone, nieklikalne koncepcje demonstracyjne prezentujące
          możliwe kierunki wizualne.
        </p>
      </div>

      <div className="real-projects-grid" data-real-projects>
        {realProjects.map((project) => (
          <ProjectCard key={project.id} project={project} interactive />
        ))}
      </div>

      <div className="lab-demo-panel" data-reveal>
        <div>
          <span className="eyebrow">DEMO TECHNOLOGICZNE</span>
          <h3>Interaktywne doświadczenia 3D</h3>
          <p>Przykładowa prezentacja pokazująca, jak możemy połączyć produkt, ruch, przestrzeń i interakcję w jednej stronie internetowej.</p>
        </div>
        <Link className="text-link lab-demo-panel-link" href="/interaktywne-3d">
          Zobacz demo 3D <ArrowIcon />
        </Link>
      </div>

      <div className={`demo-projects-stage${scrollDrivenDemo ? " demo-projects-stage--scroll-driven" : ""}`} data-demo-stage={scrollDrivenDemo || undefined}>
        <div className="demo-projects-heading" data-reveal>
          <span className="eyebrow">Projekty demonstracyjne</span>
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
          Zobacz całe portfolio <ArrowIcon />
        </Link>
      ) : null}
    </section>
  );
}
