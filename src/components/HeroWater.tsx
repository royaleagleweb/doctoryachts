"use client";

import { useEffect, useRef } from "react";

/**
 * Homepage hero water: Intracoastal surface + gold-hour caustics.
 * Low-res canvas, pauses offscreen/hidden, still frame for reduced motion.
 */
export function HeroWater() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduceMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reduce = reduceMq.matches;
    let w = 0;
    let h = 0;
    let cssW = 0;
    let cssH = 0;
    let buffer: ImageData | null = null;
    let raf = 0;
    let last = 0;
    let alive = true;
    let visible = true;
    let t0 = performance.now();

    const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));
    const smooth = (e0: number, e1: number, x: number) => {
      const t = clamp((x - e0) / (e1 - e0), 0, 1);
      return t * t * (3 - 2 * t);
    };

    function resize() {
      const parent = canvas!.parentElement;
      cssW = parent?.clientWidth || window.innerWidth;
      cssH = parent?.clientHeight || 640;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const scale = cssW < 720 ? 0.26 : 0.34;
      w = Math.max(160, Math.floor(cssW * scale * dpr));
      h = Math.max(96, Math.floor(cssH * scale * dpr));
      canvas!.width = w;
      canvas!.height = h;
      buffer = ctx!.createImageData(w, h);
    }

    function field(x: number, y: number, t: number) {
      // Slightly quicker phase so gold-hour ridges drift within a short glance
      return (
        Math.sin(x * 0.052 + t * 0.95) * Math.cos(y * 0.041 - t * 0.58) +
        Math.sin((x * 0.7 + y) * 0.036 + t * 0.52) * 0.7 +
        Math.cos((x - y * 0.55) * 0.03 - t * 0.4) * 0.48 +
        Math.sin(x * 0.02 - y * 0.055 + t * 0.72) * 0.35
      );
    }

    function paint(now: number) {
      if (!buffer) return;
      const t = (now - t0) / 1000;
      const data = buffer.data;
      data.fill(0);
      const mobile = cssW < 720;

      for (let y = 0; y < h; y++) {
        const yn = y / h;
        // Keep text band clear; light gathers mid/lower + right (photo side)
        const top = smooth(mobile ? 0.28 : 0.36, mobile ? 0.7 : 0.78, yn);
        if (top < 0.015) continue;

        for (let x = 0; x < w; x++) {
          const xn = x / w;
          const side = mobile
            ? 0.4 + 0.6 * smooth(0.05, 0.55, xn)
            : smooth(0.18, 0.62, xn);
          const mask = top * side;
          if (mask < 0.02) continue;

          const n = field(x, y, t);
          const nx = field(x + 1.25, y, t) - n;
          const ny = field(x, y + 1.25, t) - n;
          // Gold-hour light from upper right
          const lit = Math.max(0, -nx * 0.32 - ny * 0.95);
          const ridge = Math.pow(lit, 1.85);
          if (ridge < 0.02) continue;

          const warm = clamp(ridge * 1.25, 0, 1);
          const i = (y * w + x) * 4;
          // Brass highlight with cool Intracoastal undertone
          data[i] = Math.round(150 + 70 * warm);
          data[i + 1] = Math.round(145 + 45 * warm);
          data[i + 2] = Math.round(95 + 55 * (1 - warm * 0.65));
          data[i + 3] = Math.round(255 * ridge * mask * (mobile ? 0.55 : 0.68));
        }
      }

      ctx!.putImageData(buffer, 0, 0);
    }

    function frame(now: number) {
      if (!alive) return;
      if (document.hidden || !visible) {
        last = now;
        raf = requestAnimationFrame(frame);
        return;
      }
      if (now - last < 1000 / 24) {
        raf = requestAnimationFrame(frame);
        return;
      }
      last = now;
      paint(now);
      raf = requestAnimationFrame(frame);
    }

    function start() {
      cancelAnimationFrame(raf);
      resize();
      t0 = performance.now();
      paint(t0);
      if (!reduce) {
        last = t0;
        raf = requestAnimationFrame(frame);
      }
    }

    start();

    const ro = new ResizeObserver(() => {
      resize();
      paint(reduce ? t0 : performance.now());
    });
    if (canvas.parentElement) ro.observe(canvas.parentElement);

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry?.isIntersecting ?? true;
      },
      { threshold: 0.05 },
    );
    io.observe(canvas);

    const onReduce = () => {
      reduce = reduceMq.matches;
      start();
    };
    reduceMq.addEventListener("change", onReduce);

    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      reduceMq.removeEventListener("change", onReduce);
    };
  }, []);

  return (
    <div className="hero-water" aria-hidden>
      <div className="hero-water__surface" />
      <canvas ref={canvasRef} className="hero-water__caustics" />
      <div className="hero-water__sheen" />
      <div className="hero-water__horizon">
        <svg
          className="hero-water__wave hero-water__wave--a"
          viewBox="0 0 1200 90"
          preserveAspectRatio="none"
        >
          <path
            fill="rgba(14, 42, 58, 0.55)"
            d="M0 42C110 30 200 54 320 44C450 33 540 22 670 36C800 50 900 58 1030 42C1120 32 1165 28 1200 34V90H0Z"
          />
        </svg>
        <svg
          className="hero-water__wave hero-water__wave--b"
          viewBox="0 0 1200 90"
          preserveAspectRatio="none"
        >
          <path
            fill="rgba(8, 22, 36, 0.88)"
            d="M0 52C140 40 240 62 370 52C510 41 600 30 740 42C880 54 980 64 1100 50C1155 43 1180 42 1200 46V90H0Z"
          />
        </svg>
        <svg
          className="hero-water__crest"
          viewBox="0 0 1200 90"
          preserveAspectRatio="none"
        >
          <path
            fill="none"
            stroke="rgba(212, 182, 106, 0.82)"
            strokeWidth="1.8"
            d="M0 52C140 40 240 62 370 52C510 41 600 30 740 42C880 54 980 64 1100 50C1155 43 1180 42 1200 46"
          />
          <path
            fill="none"
            stroke="rgba(246, 241, 232, 0.22)"
            strokeWidth="0.8"
            d="M0 54C140 42 240 64 370 54C510 43 600 32 740 44C880 56 980 66 1100 52C1155 45 1180 44 1200 48"
          />
        </svg>
      </div>
    </div>
  );
}
