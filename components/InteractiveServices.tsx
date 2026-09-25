"use client";

import Link from "next/link";
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowIcon } from "@/components/ArrowIcon";
import type { ServiceOffer } from "@/data/services";

type InteractiveServicesProps = {
  services: readonly ServiceOffer[];
};

function getServiceHref(slug: string) {
  if (slug === "wordpress") return "/services/#wordpress";
  if (slug === "woocommerce") return "/services/#woocommerce";
  if (slug === "nextjs-typescript" || slug === "animacje-interakcje") return "/services/#nextjs-typescript";
  return "/interaktywne-3d/";
}

export function InteractiveServices({ services }: InteractiveServicesProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex] ?? services[0];

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const root = rootRef.current;
    const visual = visualRef.current;
    if (!root || !visual) return;
    if (window.matchMedia("(max-width: 760px)").matches) return;

    const context = gsap.context(() => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduceMotion) return;

      gsap.from(visual, {
        opacity: 0,
        y: 32,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: visual,
          start: "top 84%",
          once: true,
        },
      });
    }, root);

    return () => context.revert();
  }, []);

  useLayoutEffect(() => {
    const visual = visualRef.current;
    if (!visual || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(max-width: 760px)").matches) return;

    const art = visual.querySelector<HTMLElement>(".service-visual-art");
    const context = gsap.context(() => {
      if (!art) return;
      gsap.fromTo(
        art,
        { opacity: 0.35, y: 12, rotateX: -4 },
        { opacity: 1, y: 0, rotateX: 0, duration: 0.48, ease: "power3.out" },
      );
    }, visual);

    return () => context.revert();
  }, [activeIndex]);

  if (!activeService) return null;

  return (
    <div className="services-experience" ref={rootRef}>
      <div className="services-list" role="list">
        {services.map((service, index) => {
          const isActive = activeIndex === index;
          const href = getServiceHref(service.slug);
          return (
            <Link
              className={`service-row${isActive ? " is-active" : ""}`}
              key={service.number}
              href={href}
              aria-label={`${service.title}: ${service.slug === "proste-3d" ? "zobacz demonstrację" : "zobacz ofertę"}`}
              aria-current={isActive ? "true" : undefined}
              onPointerEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
            >
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>
                {service.summary}
                {service.slug === "proste-3d" ? (
                  <>
                    <span className="service-demo-note">Proste interaktywne prezentacje produktu lub marki możemy przygotować z użyciem WebGL, Three.js i React Three Fiber. Zaawansowane konfiguratory 3D analizujemy i wyceniamy indywidualnie.</span>
                    <span className="service-demo-link text-link">Zobacz demonstrację 3D <ArrowIcon /></span>
                  </>
                ) : null}
              </p>
              <span className="service-arrow" aria-hidden="true"><ArrowIcon /></span>
            </Link>
          );
        })}
      </div>

      <div
        className="services-visual"
        ref={visualRef}
        aria-live="polite"
        aria-label={`Wizualizacja: ${activeService.title}`}
      >
        <div className="services-visual-top">
          <span>AKTYWNA MOŻLIWOŚĆ</span>
          <span>{activeService.number} / {String(services.length).padStart(2, "0")}</span>
        </div>
        <div className={`service-visual-art service-visual-art--${activeService.slug}`} aria-hidden="true">
          {activeService.slug === "wordpress" ? (
            <div className="service-art-modules"><span /><span /><span /><span /></div>
          ) : null}
          {activeService.slug === "woocommerce" ? (
            <div className="service-art-purchase"><span /><span /><span /><span /></div>
          ) : null}
          {activeService.slug === "nextjs-typescript" ? (
            <div className="service-art-components"><span /><span /><span /><span /><i /><i /></div>
          ) : null}
          {activeService.slug === "animacje-interakcje" ? (
            <div className="service-art-motion"><span /><span /><span /></div>
          ) : null}
          {activeService.slug === "proste-3d" ? (
            <div className="service-art-cube"><span /></div>
          ) : null}
        </div>
        <div className="services-visual-copy">
          <span>{activeService.eyebrow}</span>
          <strong>{activeService.title}</strong>
          <p>{activeService.bestFor}</p>
        </div>
      </div>
    </div>
  );
}
