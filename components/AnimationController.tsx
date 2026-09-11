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
      const header = document.querySelector<HTMLElement>(".site-header");
      const hero = document.querySelector<HTMLElement>(".hero");

      if (header && hero) {
        const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });

        heroTimeline
          .from(header, { opacity: 0, y: -18, duration: 0.55, clearProps: "transform", immediateRender: false })
          .from(".hero-kicker", { opacity: 0, y: 18, duration: 0.45, immediateRender: false }, "-=0.25")
          .from(
            ".hero-title > span",
            {
              opacity: 0,
              yPercent: isMobile ? 28 : 42,
              duration: isMobile ? 0.65 : 0.9,
              stagger: 0.1,
              immediateRender: false,
            },
            "-=0.2",
          )
          .from(
            ".hero-bottom",
            { opacity: 0, y: 22, duration: 0.55, immediateRender: false },
            "-=0.4",
          );
      }

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
        .toArray<HTMLElement>(".service-row, .process-list li, .website-package")
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

      gsap.utils.toArray<HTMLElement>("[data-team-image]").forEach((image) => {
        gsap.from(image, {
          clipPath: "inset(0 0 100% 0)",
          duration: isMobile ? 0.65 : 0.9,
          ease: "power3.inOut",
          scrollTrigger: { trigger: image, start: "top 86%", once: true },
        });
      });

      const realProjects = document.querySelector<HTMLElement>("[data-real-projects]");
      const realProjectCards = gsap.utils.toArray<HTMLElement>("[data-real-projects] .project-card");
      if (realProjects && realProjectCards.length > 0) {
        gsap.from(realProjectCards, {
          opacity: 0,
          y: isMobile ? 24 : 54,
          rotateX: isMobile ? 0 : 5,
          duration: isMobile ? 0.55 : 0.85,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: realProjects, start: "top 84%", once: true },
        });
      }

      const demoRail = document.querySelector<HTMLElement>("[data-demo-rail]");
      const demoProjectCards = gsap.utils.toArray<HTMLElement>("[data-demo-rail] .project-card");
      if (demoRail && demoProjectCards.length > 0) {
        gsap.from(demoProjectCards, {
          opacity: 0,
          x: isMobile ? 0 : 70,
          y: isMobile ? 24 : 0,
          duration: isMobile ? 0.5 : 0.75,
          stagger: 0.09,
          ease: "power3.out",
          scrollTrigger: { trigger: demoRail, start: "top 88%", once: true },
        });
      }

      gsap.utils.toArray<HTMLElement>(".circle-link, .footer-cta, .pricing-cta").forEach((button) => {
        gsap.from(button, {
          opacity: 0,
          scale: isMobile ? 0.96 : 0.88,
          duration: 0.55,
          ease: "back.out(1.4)",
          scrollTrigger: { trigger: button, start: "top 94%", once: true },
        });
      });

      const footerLead = document.querySelector<HTMLElement>("[data-footer] .footer-lead");
      if (footerLead) {
        gsap.from(footerLead, {
          opacity: 0,
          y: isMobile ? 24 : 54,
          duration: isMobile ? 0.55 : 0.85,
          ease: "power3.out",
          scrollTrigger: { trigger: footerLead, start: "top 88%", once: true },
        });
      }

      if (!isMobile && hero) {
        const heroTitleSecond = hero.querySelector<HTMLElement>(".hero-title-second");
        if (heroTitleSecond) {
          gsap.to(heroTitleSecond, {
            xPercent: -4,
            ease: "none",
            scrollTrigger: {
              trigger: hero,
              start: "top top",
              end: "bottom top",
              scrub: 0.8,
            },
          });
        }

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
      } else if (!isMobile) {
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
