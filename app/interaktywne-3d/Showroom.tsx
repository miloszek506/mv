"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./showroom.module.css";

const Scene = dynamic(() => import("./Scene"), { ssr: false });
export const variants = [
  { name: "Obsidian", color: "#282b29", roughness: 0.32, metalness: 0.75, label: "Czarny metal. Wyrazisty kontur." },
  { name: "Chalk", color: "#dedbd0", roughness: 0.8, metalness: 0.12, label: "Jasna ceramika. Miękkie refleksy." },
  { name: "Titanium", color: "#809197", roughness: 0.24, metalness: 0.85, label: "Chłodny tytan. Techniczna precyzja." },
] as const;
export type Motion = { rotation: number; tilt: number; x: number; y: number };

export function LampFallback({ color }: { color: string }) {
  return <svg className={styles.fallback} viewBox="0 0 500 600" aria-hidden="true">
    <ellipse cx="250" cy="540" rx="140" ry="18" fill="#000" opacity=".5" />
    <path d="M240 275h20v235h-20z" fill={color} stroke="#777" />
    <ellipse cx="250" cy="505" rx="95" ry="22" fill={color} stroke="#777" />
    <ellipse cx="250" cy="250" rx="124" ry="165" fill="none" stroke={color} strokeWidth="34" transform="rotate(-18 250 250)" />
    <ellipse cx="250" cy="250" rx="111" ry="152" fill="none" stroke="#82ff1f" strokeWidth="6" transform="rotate(-18 250 250)" />
  </svg>;
}

export default function Showroom() {
  const root = useRef<HTMLElement>(null);
  const motion = useRef<Motion>({ rotation: 0, tilt: 0, x: 0, y: 0 });
  const [variant, setVariant] = useState(0);
  const [paused, setPaused] = useState(false);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from("[data-lab-intro]", { y: 32, opacity: 0, stagger: 0.13, duration: 1, ease: "power3.out" });
        gsap.utils.toArray<HTMLElement>("[data-lab-reveal]").forEach((element) => {
          gsap.from(element, { y: 36, opacity: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: element, start: "top 90%", once: true } });
        });
        gsap.to(motion.current, { rotation: Math.PI * 1.3, tilt: 0.18, ease: "none", scrollTrigger: { trigger: "[data-lab-story]", start: "top top", end: "bottom bottom", scrub: 1, invalidateOnRefresh: true } });
        const buttons = root.current?.querySelectorAll<HTMLElement>("[data-lab-button]");
        const cleanups: (() => void)[] = [];
        buttons?.forEach((button) => {
          const enter = () => gsap.to(button, { y: -3, duration: 0.2 });
          const leave = () => gsap.to(button, { y: 0, duration: 0.2 });
          button.addEventListener("pointerenter", enter);
          button.addEventListener("pointerleave", leave);
          cleanups.push(() => { button.removeEventListener("pointerenter", enter); button.removeEventListener("pointerleave", leave); gsap.killTweensOf(button); });
        });
        return () => cleanups.forEach((cleanup) => cleanup());
      });
      media.add("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)", () => {
        const surface = root.current;
        if (!surface) return;
        const x = gsap.quickTo(motion.current, "x", { duration: 0.8 });
        const y = gsap.quickTo(motion.current, "y", { duration: 0.8 });
        const move = (event: PointerEvent) => { x((event.clientX / window.innerWidth - 0.5) * 0.35); y((event.clientY / window.innerHeight - 0.5) * 0.2); };
        const reset = () => { x(0); y(0); };
        surface.addEventListener("pointermove", move);
        surface.addEventListener("pointerleave", reset);
        return () => { surface.removeEventListener("pointermove", move); surface.removeEventListener("pointerleave", reset); x.tween.kill(); y.tween.kill(); };
      });
    }, root);
    return () => { media.revert(); context.revert(); };
  }, []);

  return <main className={styles.lab} ref={root}>
    <header className={styles.header}><Link href="/" aria-label="MV Studio: strona główna"><Image className={styles.logo} src="/images/mv-studio-logo.svg" alt="Logo MV Studio" width={147} height={85} priority /><span className={styles.labMark}>LAB</span></Link><span>EXPERIMENT 001 / INTERACTIVE OBJECTS</span><a href="#variant">Konfigurator <span aria-hidden="true">↗</span></a></header>
    <div className={styles.story} data-lab-story>
      <div className={styles.visual}>
        <div className={styles.stage} role="img" aria-label={`Lampa ORBIT / 01: wariant ${variants[variant].name}. Pierścień światła na smukłej podstawie.`}>
          <span className={styles.stageIndex}>O-01</span>
          <LampFallback color={variants[variant].color} />
          <Scene variant={variant} motion={motion} paused={paused} />
          <div className={styles.stageLabel}><span>ORBIT / 01</span><span>LIGHT AS AN OBJECT</span></div>
        </div>
        <button className={styles.pause} onClick={() => setPaused(!paused)} aria-pressed={paused}>{paused ? "Wznów ruch obiektu" : "Zatrzymaj ruch obiektu"}</button>
      </div>
      <div className={styles.narrative}>
        <section className={styles.hero}>
          <p className={styles.demoNotice} data-lab-intro>DEMO TECHNOLOGICZNE · NIE JEST REALIZACJĄ KLIENTA</p>
          <p className={styles.eyebrow} data-lab-intro><i /> AURA OBJECTS · KONCEPCJA MV LAB</p>
          <h1 data-lab-intro>Światło.<br />W nowej<br /><em>orbicie.</em></h1>
          <p className={styles.description} data-lab-intro>ORBIT / 01. Rzeźbiarska forma, która zmienia sposób, w jaki patrzysz na światło. Jeden pierścień. Nieskończenie wiele perspektyw.</p>
          <a className={styles.button} href="#form" data-lab-intro data-lab-button>Poznaj produkt <span aria-hidden="true">↘</span></a>
          <div className={styles.heroFoot}><span>PROCEDURAL DESIGN</span><span>PRZEWIŃ, BY ODKRYĆ ↓</span></div>
        </section>
        <section className={styles.section} id="form">
          <p className={styles.eyebrow} data-lab-reveal>01 / IDEA</p>
          <h2 data-lab-reveal>Forma<br />i funkcja.</h2>
          {[
            ["01", "Mniej, ale lepiej.", "Pierścień, smukły trzon i spokojna podstawa. Każdy element ma swoje miejsce."],
            ["02", "Światło jako detal.", "Limonkowy akcent podkreśla geometrię. Obiekt buduje atmosferę także wtedy, gdy po prostu na niego patrzysz."],
            ["03", "Twoja perspektywa.", "Ruch kursora i przewijanie odsłaniają kolejne strony formy. Zatrzymaj animację, by przyjrzeć się detalom."],
          ].map(([number, title, copy]) => <article className={styles.card} key={number} data-lab-reveal><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}
        </section>
        <section className={styles.section} id="variant">
          <p className={styles.eyebrow} data-lab-reveal>02 / WYKOŃCZENIE</p>
          <h2 data-lab-reveal>Jedna forma.<br /><em>Twój charakter.</em></h2>
          <p className={styles.description}>Skonfiguruj wariant. Odkryj, jak materiał zmienia ten sam obiekt.</p>
          <div className={styles.variants} role="group" aria-label="Skonfiguruj wariant lampy">
            {variants.map((item, index) => <button key={item.name} aria-pressed={variant === index} onClick={() => setVariant(index)} data-lab-button><span className={styles.swatch} style={{ background: item.color }} /><span>{item.name}</span><span aria-hidden="true">{variant === index ? "●" : "○"}</span></button>)}
          </div>
          <p className={styles.selection} aria-live="polite"><strong>{variants[variant].name}</strong> / {variants[variant].label}</p>
          <p className={styles.note}>AURA OBJECTS to fikcyjna marka. ORBIT / 01 jest eksperymentem wizualnym, a nie produktem dostępnym w sprzedaży.</p>
        </section>
      </div>
    </div>
    <section className={styles.outro}>
      <p className={styles.eyebrow} data-lab-reveal>MV LAB / OD KONCEPCJI DO INTERAKCJI</p>
      <h2 data-lab-reveal>Twój produkt.<br /><em>Nowy wymiar.</em></h2>
      <div data-lab-reveal><p>Wyobraź sobie, co możemy pokazać w ten sposób dla Twojej marki.</p><Link className={styles.button} href="/contact/" data-lab-button>Rozpocznij projekt <span aria-hidden="true">↗</span></Link></div>
    </section>
    <footer className={styles.footer}><span>MV LAB © 2026</span><span>INTERACTIVE PRODUCT SHOWROOM</span><Link href="/">Powrót do MV Studio ↗</Link></footer>
  </main>;
}
