"use client";

import { useEffect } from "react";

/** Gentle section fade-up as chapters enter — Kage editorial rhythm, restrained */
export function ScrollReveal() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      document.querySelectorAll(".reveal-in").forEach((el) => el.classList.add("is-in"));
      return;
    }

    const els = document.querySelectorAll(".reveal-in");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    els.forEach((el) => io.observe(el));

    const mo = new MutationObserver(() => {
      document.querySelectorAll(".reveal-in:not(.is-in)").forEach((el) => io.observe(el));
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
