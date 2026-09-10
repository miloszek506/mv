"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ring = ringRef.current;
    const dot = dotRef.current;
    const precisePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!ring || !dot || !precisePointer || reducedMotion) return;

    document.documentElement.classList.add("has-custom-cursor");
    const moveRingX = gsap.quickTo(ring, "x", { duration: 0.22, ease: "power3.out" });
    const moveRingY = gsap.quickTo(ring, "y", { duration: 0.22, ease: "power3.out" });
    const moveDotX = gsap.quickTo(dot, "x", { duration: 0.08, ease: "power2.out" });
    const moveDotY = gsap.quickTo(dot, "y", { duration: 0.08, ease: "power2.out" });

    const handlePointerMove = (event: PointerEvent) => {
      moveRingX(event.clientX);
      moveRingY(event.clientY);
      moveDotX(event.clientX);
      moveDotY(event.clientY);
      gsap.to([ring, dot], { opacity: 1, duration: 0.15, overwrite: true });
    };

    const handlePointerOver = (event: PointerEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      const interactive = target?.closest("a, button, input, textarea, summary");
      gsap.to(ring, { scale: interactive ? 1.55 : 1, backgroundColor: interactive ? "rgba(130, 255, 31, 0.12)" : "transparent", duration: 0.22 });
    };

    const handlePointerLeave = () => gsap.to([ring, dot], { opacity: 0, duration: 0.15 });

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("pointerover", handlePointerOver, { passive: true });
    document.documentElement.addEventListener("mouseleave", handlePointerLeave);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerover", handlePointerOver);
      document.documentElement.removeEventListener("mouseleave", handlePointerLeave);
      gsap.killTweensOf([ring, dot]);
    };
  }, []);

  return (
    <div className="custom-cursor" aria-hidden="true">
      <div className="cursor-ring" ref={ringRef} />
      <div className="cursor-dot" ref={dotRef} />
    </div>
  );
}
