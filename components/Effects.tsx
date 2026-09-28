"use client";

import { useEffect } from "react";

/**
 * Page effects, all opt-in via data attributes and all no-ops when the
 * visitor prefers reduced motion:
 *   data-reveal  = fades and lifts into place the first time it enters view
 *   data-tilt    = drifts a few pixels toward the cursor (pointer devices only)
 */
export default function Effects() {
  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced) return;

    const root = document.documentElement;
    root.classList.add("fx");

    // ---- reveal on scroll -------------------------------------------------
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const delay = Number(el.dataset.revealDelay || 0);
          window.setTimeout(() => el.setAttribute("data-shown", "true"), delay);
          io.unobserve(el);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 }
    );

    targets.forEach((el) => {
      // Anything already on screen at load shows immediately, with no flash.
      if (el.getBoundingClientRect().top < window.innerHeight * 0.9) {
        el.setAttribute("data-shown", "true");
      } else {
        io.observe(el);
      }
    });

    // Safety net. Content must never be stuck invisible because an observer
    // didn't fire: in a headless browser, a background tab, a print view, or
    // anything else unexpected. After this, everything shows regardless.
    const failsafe = window.setTimeout(() => {
      targets.forEach((el) => el.setAttribute("data-shown", "true"));
      io.disconnect();
    }, 2200);

    // ---- cursor tilt ------------------------------------------------------
    const tilts = Array.from(
      document.querySelectorAll<HTMLElement>("[data-tilt]")
    );
    const fine = window.matchMedia("(pointer: fine)").matches;
    let frame = 0;

    const onMove = (e: PointerEvent) => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const cx = window.innerWidth / 2;
        const cy = window.innerHeight / 2;
        const dx = (e.clientX - cx) / cx;
        const dy = (e.clientY - cy) / cy;
        tilts.forEach((el) => {
          const amt = Number(el.dataset.tilt || 8);
          el.style.setProperty("--tx", `${(-dx * amt).toFixed(2)}px`);
          el.style.setProperty("--ty", `${(-dy * amt).toFixed(2)}px`);
          el.style.setProperty("--rx", `${(dy * amt * 0.09).toFixed(3)}deg`);
          el.style.setProperty("--ry", `${(-dx * amt * 0.09).toFixed(3)}deg`);
        });
      });
    };

    if (fine && tilts.length) {
      window.addEventListener("pointermove", onMove, { passive: true });
    }

    return () => {
      io.disconnect();
      window.clearTimeout(failsafe);
      window.removeEventListener("pointermove", onMove);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
