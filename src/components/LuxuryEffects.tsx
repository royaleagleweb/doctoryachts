"use client";

import { useEffect } from "react";

/** Minimal: scroll progress only. No magnetic buttons / heavy reveal choreography. */
export function LuxuryEffects() {
  useEffect(() => {
    const bar = document.createElement("div");
    bar.className = "progress";
    bar.setAttribute("aria-hidden", "true");
    document.body.prepend(bar);

    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      bar.style.width = `${max > 0 ? (h.scrollTop / max) * 100 : 0}%`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      bar.remove();
    };
  }, []);

  return null;
}
