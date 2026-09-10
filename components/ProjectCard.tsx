import Image from "next/image";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
  interactive?: boolean;
};

export function ProjectCard({ project, featured = false, interactive = true }: ProjectCardProps) {
  const visual = (
    <>
      {project.image ? (
        <Image
          className="project-image"
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes={featured ? "(max-width: 760px) 100vw, 94vw" : "(max-width: 760px) 92vw, (max-width: 1100px) 46vw, 34vw"}
        />
      ) : (
        <span className="project-placeholder" role="img" aria-label={project.imageAlt}>
          <span>Benvenuti</span><span>a Napoli</span>
        </span>
      )}
      {interactive && project.href ? <span className="project-open" aria-hidden="true">Otwórz ↗</span> : null}
    </>
  );

  return (
    <article className={`project-card${featured ? " project-card--featured" : ""}`}>
      {interactive && project.href ? (
        <a className="project-image-link" href={project.href} target="_blank" rel="noreferrer" aria-label={`Otwórz projekt ${project.name} w nowej karcie`}>
          {visual}
        </a>
      ) : (
        <div className="project-image-link project-image-static">{visual}</div>
      )}
      <div className="project-meta">
        <span>{project.id}</span>
        <div>
          <p>{project.category}</p>
          <h3>{project.name}</h3>
        </div>
        <span>{project.year ?? "—"}</span>
      </div>
      <p className="project-description">{project.description}</p>
    </article>
  );
}
