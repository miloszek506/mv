"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export function ProjectsSection() {
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

  return (
    <section
      className="projects-section"
      id="projekty"
      aria-labelledby="projects-title"
      ref={sectionRef}
    >
      <div className="section-heading projects-heading">
        <div>
          <span className="eyebrow">03 · Wybrane prace</span>
          <h2 id="projects-title">
            Pomysły zamienione
            <br />w kierunek wizualny.
          </h2>
        </div>
        <p>
          Wszystkie prezentowane projekty są autorskimi koncepcjami MV Studio.
          Nie są realizacjami wykonanymi dla rzeczywistych klientów.
        </p>
      </div>

      <div className="projects-viewport" ref={viewportRef}>
        <div className="projects-track" ref={trackRef}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
