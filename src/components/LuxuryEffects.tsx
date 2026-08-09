"use client";

import { useEffect } from "react";

/** V1 luxury motion: scroll progress, reveal-on-scroll, soft magnetic buttons */
export function LuxuryEffects() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const bar = document.createElement("div");
    bar.className = "progress";
    bar.setAttribute("aria-hidden", "true");
    document.body.prepend(bar);

    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const p = max > 0 ? (h.scrollTop / max) * 100 : 0;
      bar.style.width = `${p}%`;
      document.documentElement.classList.toggle("is-scrolled", h.scrollTop > 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    let io: IntersectionObserver | null = null;
    const els = document.querySelectorAll(".reveal");
    if (!reduce && "IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              io?.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );
      els.forEach((el) => io?.observe(el));
    } else {
      els.forEach((el) => el.classList.add("in"));
    }

    const cleanups: Array<() => void> = [];
    if (!reduce) {
      document.querySelectorAll<HTMLElement>(".btn").forEach((btn) => {
        const move = (e: MouseEvent) => {
          const r = btn.getBoundingClientRect();
          const x = e.clientX - r.left - r.width / 2;
          const y = e.clientY - r.top - r.height / 2;
          btn.style.transform = `translate(${x * 0.08}px, ${y * 0.12}px)`;
        };
        const leave = () => {
          btn.style.transform = "";
        };
        btn.addEventListener("mousemove", move);
        btn.addEventListener("mouseleave", leave);
        cleanups.push(() => {
          btn.removeEventListener("mousemove", move);
          btn.removeEventListener("mouseleave", leave);
        });
      });
    }

    // Observe dynamically added .reveal nodes (client navigation)
    const mo = new MutationObserver(() => {
      document.querySelectorAll(".reveal:not(.in)").forEach((el) => {
        if (reduce) {
          el.classList.add("in");
        } else if (io) {
          io.observe(el);
        }
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      bar.remove();
      io?.disconnect();
      mo.disconnect();
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return null;
}
