import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import Link from "next/link";

type ProjectsSectionProps = {
  full?: boolean;
};

export function ProjectsSection({ full = false }: ProjectsSectionProps) {
  const visibleProjects = full ? projects : projects.slice(0, 4);

  return (
    <section
      className={`projects-section projects-section--grid${full ? " projects-section--full" : " projects-section--home"}`}
      id="projekty"
      aria-labelledby="projects-title"
    >
      <div className="section-heading projects-heading">
        <div>
          <span className="eyebrow">{full ? "Portfolio" : "03 · Wybrane prace"}</span>
          <h2 id="projects-title">
            {full ? "Realizacje i kierunki" : "Cztery wybrane"}
            <br />{full ? "projektowe." : "projekty."}
          </h2>
        </div>
        <p>
          Avandis otwiera portfolio, a Benvenuti a Napoli prezentuje projekt dla
          pizzerii w Bielsku-Białej. Pozycje oznaczone jako Concept są autorskimi
          koncepcjami MV Studio, a nie realizacjami dla rzeczywistych klientów.
        </p>
      </div>

      <div className="projects-grid" data-reveal>
        {visibleProjects.map((project) => (
          <ProjectCard key={project.id} project={project} featured={full && project.featured} interactive={full} />
        ))}
      </div>
      {!full ? (
        <Link className="section-cta text-link" href="/projects">
          Zobacz całe portfolio <span aria-hidden="true">↗</span>
        </Link>
      ) : null}
    </section>
  );
}
