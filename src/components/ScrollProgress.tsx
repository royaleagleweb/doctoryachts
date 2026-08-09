"use client";

import { useEffect, useState } from "react";

/** Thin gold scroll progress — Kage-style story meter, minimal */
export function ScrollProgress() {
  const [p, setP] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const onScroll = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setP(max > 0 ? (el.scrollTop / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 right-0 left-0 z-[70] h-[2px] bg-transparent"
      aria-hidden
    >
      <div
        className="h-full bg-gold transition-[width] duration-150 ease-out"
        style={{ width: `${p}%` }}
      />
    </div>
  );
}
