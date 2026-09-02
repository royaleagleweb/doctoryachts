"use client";

import { useEffect, useRef } from "react";

/**
 * Homepage hero water: gold-hour caustics + a shallow Intracoastal waterline.
 * Canvas runs at a fraction of CSS size, pauses offscreen / hidden, and
 * draws a still frame when the visitor prefers reduced motion.
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
      const scale = cssW < 720 ? 0.22 : 0.28;
      w = Math.max(140, Math.floor(cssW * scale * dpr));
      h = Math.max(80, Math.floor(cssH * scale * dpr));
      canvas!.width = w;
      canvas!.height = h;
      buffer = ctx!.createImageData(w, h);
    }

    function field(x: number, y: number, t: number) {
      return (
        Math.sin(x * 0.046 + t * 0.58) * Math.cos(y * 0.038 - t * 0.36) +
        Math.sin((x * 0.72 + y) * 0.033 + t * 0.31) * 0.62 +
        Math.cos((x - y * 0.55) * 0.027 - t * 0.24) * 0.42
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
        const top = smooth(mobile ? 0.18 : 0.28, mobile ? 0.62 : 0.72, yn);
        if (top < 0.01) continue;

        for (let x = 0; x < w; x++) {
          const xn = x / w;
          const side = mobile ? 0.55 + 0.45 * smooth(0.02, 0.38, xn) : smooth(0.06, 0.48, xn);
          const mask = top * side;
          if (mask < 0.012) continue;

          const n = field(x, y, t);
          const nx = field(x + 1.4, y, t) - n;
          const ny = field(x, y + 1.4, t) - n;
          // Gold-hour light from the upper right — Fort Lauderdale late afternoon
          const lit = Math.max(0, -nx * 0.28 - ny * 0.92);
          const ridge = lit * lit;
          if (ridge < 0.012) continue;

          const warm = clamp(ridge * 1.15, 0, 1);
          const i = (y * w + x) * 4;
          data[i] = Math.round(168 + 54 * warm);
          data[i + 1] = Math.round(148 + 28 * warm);
          data[i + 2] = Math.round(78 + 42 * (1 - warm));
          data[i + 3] = Math.round(255 * ridge * mask * (mobile ? 0.34 : 0.42));
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
      const dt = now - last;
      if (dt < 1000 / 24) {
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
      <canvas ref={canvasRef} className="hero-water__caustics" />
      <div className="hero-water__sheen" />
      <div className="hero-water__horizon">
        <svg
          className="hero-water__wave hero-water__wave--a"
          viewBox="0 0 1200 72"
          preserveAspectRatio="none"
        >
          <path
            fill="rgba(12, 18, 32, 0.42)"
            d="M0 38C90 30 170 48 280 40C400 31 470 22 590 32C720 43 820 50 940 38C1040 28 1120 24 1200 30V72H0Z"
          />
        </svg>
        <svg
          className="hero-water__wave hero-water__wave--b"
          viewBox="0 0 1200 72"
          preserveAspectRatio="none"
        >
          <path
            fill="rgba(7, 11, 18, 0.78)"
            d="M0 44C130 36 220 52 340 46C470 39 560 28 690 36C820 44 910 54 1030 44C1110 38 1160 36 1200 40V72H0Z"
          />
        </svg>
        <svg
          className="hero-water__crest"
          viewBox="0 0 1200 72"
          preserveAspectRatio="none"
        >
          <path
            fill="none"
            stroke="rgba(201, 162, 74, 0.42)"
            strokeWidth="1.1"
            d="M0 44C130 36 220 52 340 46C470 39 560 28 690 36C820 44 910 54 1030 44C1110 38 1160 36 1200 40"
          />
        </svg>
      </div>
    </div>
  );
}
