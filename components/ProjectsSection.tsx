"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import Link from "next/link";

type ProjectsSectionProps = {
  full?: boolean;
};

export function ProjectsSection({ full = false }: ProjectsSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;

    if (!section || !viewport || !track) {
      return;
    }

    const media = gsap.matchMedia();

    media.add(
      {
        desktop: "(min-width: 901px)",
        motion: "(prefers-reduced-motion: no-preference)",
      },
      (context) => {
        if (!context.conditions?.desktop || !context.conditions.motion) {
          return;
        }

        section.classList.add("has-horizontal-motion");

        const distance = () =>
          Math.max(0, track.scrollWidth - viewport.clientWidth);

        gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: viewport,
            start: "top 14%",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        });

        return () => section.classList.remove("has-horizontal-motion");
      },
    );

    return () => media.revert();
  }, []);

  const featuredProject = projects.find((project) => project.featured) ?? projects[0];
  const demoProjects = projects.filter((project) => !project.featured);
  const visibleDemoProjects = full ? demoProjects : demoProjects.slice(0, 2);

  return (
    <section
      className={`projects-section${full ? " projects-section--full" : ""}`}
      id="projekty"
      aria-labelledby="projects-title"
      ref={sectionRef}
    >
      <div className="section-heading projects-heading">
        <div>
          <span className="eyebrow">{full ? "Portfolio" : "03 · Wybrane prace"}</span>
          <h2 id="projects-title">
            {full ? "Avandis na pierwszym planie." : "Pomysły zamienione"}
            <br />{full ? "Koncepcje tuż za nim." : "w kierunek wizualny."}
          </h2>
        </div>
        <p>
          Avandis otwiera portfolio jako projekt wyróżniony. Pozostałe pozycje
          są autorskimi koncepcjami MV Studio i nie są realizacjami wykonanymi
          dla rzeczywistych klientów.
        </p>
      </div>

      <div className="featured-project" data-reveal>
        <ProjectCard project={featuredProject} featured />
      </div>

      <div className="projects-viewport" ref={viewportRef}>
        <div className="projects-track" ref={trackRef}>
          {visibleDemoProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
      {!full ? (
        <Link className="section-cta text-link" href="/projects">
          Zobacz całe portfolio <span aria-hidden="true">↗</span>
        </Link>
      ) : null}
    </section>
  );
}
