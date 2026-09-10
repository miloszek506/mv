"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  interactive?: boolean;
};

export function ProjectCard({ project, interactive = true }: ProjectCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const surfaceRef = useRef<HTMLDivElement>(null);
  const reflectionRef = useRef<HTMLSpanElement>(null);
  const isReal = project.kind === "real";

  useLayoutEffect(() => {
    const card = cardRef.current;
    const surface = surfaceRef.current;
    const reflection = reflectionRef.current;
    const canTilt = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!isReal || !card || !surface || !reflection || !canTilt || reducedMotion) return;

    const rotateX = gsap.quickTo(surface, "rotationX", { duration: 0.45, ease: "power3.out" });
    const rotateY = gsap.quickTo(surface, "rotationY", { duration: 0.45, ease: "power3.out" });
    const lightX = gsap.quickTo(reflection, "xPercent", { duration: 0.4, ease: "power2.out" });
    const lightY = gsap.quickTo(reflection, "yPercent", { duration: 0.4, ease: "power2.out" });

    gsap.set(surface, { transformPerspective: 1100, transformOrigin: "center" });

    const handleMove = (event: PointerEvent) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      rotateX(y * -7);
      rotateY(x * 9);
      lightX(x * 45);
      lightY(y * 35);
    };

    const handleLeave = () => {
      rotateX(0);
      rotateY(0);
      lightX(0);
      lightY(0);
    };

    card.addEventListener("pointermove", handleMove, { passive: true });
    card.addEventListener("pointerleave", handleLeave);

    return () => {
      card.removeEventListener("pointermove", handleMove);
      card.removeEventListener("pointerleave", handleLeave);
      gsap.killTweensOf([surface, reflection]);
    };
  }, [isReal]);

  const visual = (
    <>
      {project.image ? (
        <Image
          className="project-image"
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 760px) 92vw, (max-width: 1100px) 46vw, 48vw"
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
    <article className={`project-card project-card--${project.kind}`} ref={cardRef}>
      <div className="project-card-surface" ref={surfaceRef}>
        {interactive && project.href ? (
          <a className="project-image-link" href={project.href} target="_blank" rel="noreferrer" aria-label={`Otwórz projekt ${project.name} w nowej karcie`}>
            {visual}
          </a>
        ) : (
          <div className="project-image-link project-image-static">{visual}</div>
        )}
        {isReal ? <span className="project-reflection" ref={reflectionRef} aria-hidden="true" /> : null}
        <div className="project-meta">
          <span>{project.id}</span>
          <div>
            <p>{project.category}</p>
            <h3>{project.name}</h3>
          </div>
          <span>{project.year ?? "—"}</span>
        </div>
        <p className="project-description">{project.description}</p>
      </div>
    </article>
  );
}
