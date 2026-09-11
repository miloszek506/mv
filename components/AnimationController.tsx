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
      const homePage = document.querySelector<HTMLElement>(".home-page");

      if (header && hero) {
        const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });

        if (homePage) {
          const titleWords = hero.querySelectorAll<HTMLElement>(".hero-title-word");
          const titleMasks = hero.querySelectorAll<HTMLElement>(".hero-title-mask");
          const heroOrbits = hero.querySelectorAll<HTMLElement>(".hero-orbit, .hero-signal");

          heroTimeline
            .from(header, { opacity: 0, y: -18, duration: 0.55, clearProps: "transform", immediateRender: false })
            .from(heroOrbits, { opacity: 0, scale: 0.72, duration: 1.1, stagger: 0.08 }, "-=0.25")
            .from(".hero-kicker", { opacity: 0, y: 18, duration: 0.45, immediateRender: false }, "-=0.72")
            .from(
              titleWords,
              {
                yPercent: isMobile ? 108 : 116,
                rotate: isMobile ? 3 : 5,
                duration: isMobile ? 0.75 : 1.05,
                stagger: 0.12,
                immediateRender: false,
              },
              "-=0.25",
            )
            .from(".hero-bottom", { opacity: 0, y: 28, duration: 0.65, immediateRender: false }, "-=0.55")
            .set(titleMasks, { overflow: "visible" });

          gsap.to(hero.querySelector(".hero-title"), {
            yPercent: isMobile ? -5 : -10,
            ease: "none",
            scrollTrigger: {
              trigger: hero,
              start: "top top",
              end: "bottom top",
              scrub: 0.7,
              invalidateOnRefresh: true,
            },
          });

          gsap.to(heroOrbits, {
            yPercent: isMobile ? -12 : -20,
            rotate: isMobile ? 8 : 14,
            ease: "none",
            stagger: 0.05,
            scrollTrigger: {
              trigger: hero,
              start: "top top",
              end: "bottom top",
              scrub: 0.9,
              invalidateOnRefresh: true,
            },
          });
        } else {
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
        .toArray<HTMLElement>(".service-row, .process-list li, .principles-list li, .website-package")
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

      const demoStage = document.querySelector<HTMLElement>("[data-demo-stage]");
      const demoViewport = document.querySelector<HTMLElement>("[data-demo-rail]");
      const demoRail = demoViewport?.querySelector<HTMLElement>(".demo-projects-rail");
      const demoProjectCards = gsap.utils.toArray<HTMLElement>("[data-demo-rail] .project-card");
      if (!demoStage && demoViewport && demoProjectCards.length > 0) {
        gsap.from(demoProjectCards, {
          opacity: 0,
          x: isMobile ? 0 : 70,
          y: isMobile ? 24 : 0,
          duration: isMobile ? 0.5 : 0.75,
          stagger: 0.09,
          ease: "power3.out",
          scrollTrigger: { trigger: demoViewport, start: "top 88%", once: true },
        });
      }

      if (!isMobile && demoStage && demoViewport && demoRail && demoProjectCards.length > 0) {
        const getTravelDistance = () => Math.max(0, demoRail.scrollWidth - demoViewport.clientWidth);
        const horizontalTrack = gsap.to(demoRail, {
          x: () => -getTravelDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: demoStage,
            start: "top top",
            end: () => `+=${Math.max(getTravelDistance() + window.innerHeight * 0.35, window.innerHeight)}`,
            pin: demoViewport,
            scrub: 0.8,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        demoProjectCards.forEach((card) => {
          const surface = card.querySelector<HTMLElement>(".project-card-surface");
          const image = card.querySelector<HTMLElement>(".project-image");
          if (!surface) return;

          gsap.fromTo(
            surface,
            { x: 36, scale: 0.92, opacity: 0.42 },
            {
              x: -18,
              scale: 1,
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                containerAnimation: horizontalTrack,
                start: "left 94%",
                end: "right 8%",
                scrub: true,
              },
            },
          );

          if (image) {
            gsap.fromTo(
              image,
              { xPercent: -5, scale: 1.08 },
              {
                xPercent: 5,
                scale: 1.03,
                ease: "none",
                scrollTrigger: {
                  trigger: card,
                  containerAnimation: horizontalTrack,
                  start: "left 100%",
                  end: "right 0%",
                  scrub: true,
                },
              },
            );
          }
        });
      }

      if (homePage) {
        homePage.querySelectorAll<HTMLElement>(".section-heading h2").forEach((heading) => {
          gsap.from(heading, {
            clipPath: "inset(0 0 100% 0)",
            y: isMobile ? 20 : 36,
            duration: isMobile ? 0.55 : 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: heading, start: "top 88%", once: true },
          });
        });

        const contactSection = homePage.querySelector<HTMLElement>(".contact-section");
        if (contactSection) {
          gsap.fromTo(
            contactSection,
            { clipPath: "inset(8% 0 0 0)" },
            {
              clipPath: "inset(0% 0 0 0)",
              ease: "none",
              scrollTrigger: { trigger: contactSection, start: "top 88%", end: "top 40%", scrub: 0.6 },
            },
          );
        }
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
