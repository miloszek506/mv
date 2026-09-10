import Image from "next/image";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <article className={`project-card${featured ? " project-card--featured" : ""}`}>
      <a
        className="project-image-link"
        href={project.href}
        target="_blank"
        rel="noreferrer"
        aria-label={`Otwórz projekt ${project.name} w nowej karcie`}
      >
        <Image
          className="project-image"
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes={featured ? "(max-width: 760px) 100vw, 94vw" : "(max-width: 760px) 92vw, (max-width: 1100px) 72vw, 62vw"}
        />
        <span className="project-open" aria-hidden="true">
          Otwórz ↗
        </span>
      </a>
      <div className="project-meta">
        <span>{project.id}</span>
        <div>
          <p>{project.category}</p>
          <h3>{project.name}</h3>
        </div>
        <span>{project.year}</span>
      </div>
      <p className="project-description">{project.description}</p>
    </article>
  );
}
