"use client";

import { useLayoutEffect, useRef } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    const dot = dotRef.current;
    const precisePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!cursor || !ring || !dot || !precisePointer || reducedMotion) return;

    const pointer = { x: 0, y: 0 };
    const ringPosition = { x: 0, y: 0 };
    let frame = 0;
    let hasMoved = false;

    const place = (element: HTMLElement, x: number, y: number) => {
      element.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    const render = () => {
      ringPosition.x += (pointer.x - ringPosition.x) * 0.18;
      ringPosition.y += (pointer.y - ringPosition.y) * 0.18;
      place(ring, ringPosition.x, ringPosition.y);
      frame = window.requestAnimationFrame(render);
    };

    const deactivate = () => {
      cursor.classList.remove("is-visible", "is-interactive", "is-dark-theme");
      document.documentElement.classList.remove("has-custom-cursor");
      hasMoved = false;
      window.cancelAnimationFrame(frame);
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType && event.pointerType !== "mouse") {
        deactivate();
        return;
      }

      pointer.x = event.clientX;
      pointer.y = event.clientY;
      place(dot, pointer.x, pointer.y);

      const target = document.elementFromPoint(event.clientX, event.clientY);
      const themedSection = target?.closest<HTMLElement>("[data-cursor-theme]");
      cursor.classList.toggle("is-dark-theme", themedSection?.dataset.cursorTheme === "dark");

      if (!hasMoved) {
        hasMoved = true;
        ringPosition.x = pointer.x;
        ringPosition.y = pointer.y;
        place(ring, pointer.x, pointer.y);
        cursor.classList.add("is-visible");
        document.documentElement.classList.add("has-custom-cursor");
        frame = window.requestAnimationFrame(render);
      }
    };

    const handlePointerOver = (event: PointerEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      const interactive = target?.closest("a, button, input, textarea, summary");
      cursor.classList.toggle("is-interactive", Boolean(interactive));
    };

    const handlePointerLeave = () => deactivate();

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("pointerover", handlePointerOver, { passive: true });
    document.documentElement.addEventListener("mouseleave", handlePointerLeave);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      cursor.classList.remove("is-dark-theme");
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerover", handlePointerOver);
      document.documentElement.removeEventListener("mouseleave", handlePointerLeave);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="custom-cursor" aria-hidden="true" ref={cursorRef}>
      <div className="cursor-position" ref={ringRef}><span className="cursor-ring" /></div>
      <div className="cursor-position" ref={dotRef}><span className="cursor-dot" /></div>
    </div>
  );
}
