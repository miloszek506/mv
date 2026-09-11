"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { navigation } from "@/data/site-content";

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useLayoutEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const links = panel.querySelectorAll(".menu-link");

    if (isOpen) {
      document.body.classList.add("menu-open");
      gsap.set(panel, { visibility: "visible" });
      if (reducedMotion) {
        gsap.set(panel, { yPercent: 0, opacity: 1 });
        gsap.set(links, { y: 0, opacity: 1 });
      } else {
        const timeline = gsap.timeline();
        timeline
          .to(panel, { yPercent: 0, opacity: 1, duration: 0.55, ease: "power3.inOut" })
          .fromTo(links, { y: 36, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.06, duration: 0.45, ease: "power3.out" }, "-=0.18");
      }
      window.requestAnimationFrame(() => firstLinkRef.current?.focus());
    } else {
      document.body.classList.remove("menu-open");
      if (reducedMotion) {
        gsap.set(panel, { yPercent: -100, opacity: 0, visibility: "hidden" });
      } else {
        gsap.to(panel, {
          yPercent: -100,
          opacity: 0,
          duration: 0.45,
          ease: "power3.inOut",
          onComplete: () => gsap.set(panel, { visibility: "hidden" }),
        });
      }
    }

    return () => {
      gsap.killTweensOf([panel, links]);
      document.body.classList.remove("menu-open");
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        buttonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;
      const focusable = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'),
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <header className={`site-header${isOpen ? " is-menu-open" : ""}`}>
      <Link className="brand brand--logo" href="/" aria-label="MV Studio — strona główna">
        <Image className="brand-logo" src="/icon.png" alt="Logo MV Studio" width={192} height={192} priority />
      </Link>
      <button
        ref={buttonRef}
        className="menu-toggle"
        type="button"
        aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
        aria-expanded={isOpen}
        aria-controls="main-menu"
        onClick={() => setIsOpen((current) => !current)}
      >
        <span>{isOpen ? "Zamknij" : "Menu"}</span>
        <span className="menu-toggle-icon" aria-hidden="true"><i /><i /></span>
      </button>
      <div
        className="menu-panel"
        id="main-menu"
        ref={panelRef}
        aria-hidden={!isOpen}
      >
        <div className="menu-panel-inner">
          <span className="menu-eyebrow">Nawigacja</span>
          <nav className="menu-navigation" aria-label="Główna nawigacja">
            <Link
              className="menu-link"
              href="/"
              aria-current={pathname === "/" ? "page" : undefined}
              tabIndex={isOpen ? 0 : -1}
              ref={firstLinkRef}
              onClick={() => setIsOpen(false)}
            >
              <span>00</span>Home
            </Link>
            {navigation.map((item, index) => (
              <Link
                className="menu-link"
                href={item.href}
                key={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                tabIndex={isOpen ? 0 : -1}
                onClick={() => setIsOpen(false)}
              >
                <span>0{index + 1}</span>{item.label}
              </Link>
            ))}
          </nav>
          <div className="menu-panel-meta">
            <a href="mailto:kontakt@mvstudio.pl" tabIndex={isOpen ? 0 : -1}>kontakt@mvstudio.pl</a>
            <span>Bielsko-Biała</span>
          </div>
        </div>
      </div>
    </header>
  );
}
