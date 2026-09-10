"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function AnimationController() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const isMobile = window.matchMedia("(max-width: 760px)").matches;
    const context = gsap.context(() => {
      const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });

      heroTimeline
        .from(".site-header", { opacity: 0, y: -18, duration: 0.55 })
        .from(".hero-kicker", { opacity: 0, y: 18, duration: 0.45 }, "-=0.25")
        .from(
          ".hero-title > span",
          {
            opacity: 0,
            yPercent: isMobile ? 28 : 42,
            duration: isMobile ? 0.65 : 0.9,
            stagger: 0.1,
          },
          "-=0.2",
        )
        .from(
          ".hero-bottom",
          { opacity: 0, y: 22, duration: 0.55 },
          "-=0.4",
        );

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.from(element, {
          opacity: 0,
          y: isMobile ? 28 : 48,
          duration: isMobile ? 0.55 : 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 84%",
            once: true,
          },
        });
      });

      gsap.utils
        .toArray<HTMLElement>(".service-row, .process-list li")
        .forEach((element) => {
          gsap.from(element, {
            opacity: 0,
            y: isMobile ? 22 : 38,
            duration: isMobile ? 0.45 : 0.65,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 90%",
              once: true,
            },
          });
        });

      if (!isMobile) {
        gsap.to(".hero-title-second", {
          xPercent: -4,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 0.8,
          },
        });

        gsap.utils.toArray<HTMLElement>(".project-image").forEach((image) => {
          gsap.fromTo(
            image,
            { yPercent: -3 },
            {
              yPercent: 3,
              ease: "none",
              scrollTrigger: {
                trigger: image,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            },
          );
        });
      }
    }, document.body);

    ScrollTrigger.refresh();

    return () => context.revert();
  }, []);

  return null;
}
