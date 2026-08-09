"use client";

import { useEffect, useRef } from "react";

type Mote = {
  x: number;
  y: number;
  fall: number;
  slip: number;
  spin: number;
  spinRate: number;
  roll: number;
  rollRate: number;
  scale: number;
  alpha: number;
  r: number;
  g: number;
  b: number;
};

/**
 * Kage/falling-leaves inspired atmosphere — soft marine motes (foam/salt light),
 * not confetti. Respects reduced motion + visibility.
 */
export function AmbientMotes() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let dpr = 1;
    let motes: Mote[] = [];
    let raf = 0;
    let last = 0;
    let alive = true;

    const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));

    function makeMote(seedY?: number): Mote {
      // Soft pearl → brass ramp (marine light, not candy red)
      const t = Math.random();
      const r = Math.round(196 + (238 - 196) * (1 - t));
      const g = Math.round(163 + (241 - 163) * (1 - t) * 0.85);
      const b = Math.round(90 + (244 - 90) * (1 - t) * 0.55);
      return {
        x: Math.random() * w,
        y: seedY ?? Math.random() * h,
        fall: 12 + Math.random() * 28,
        slip: 8 + Math.random() * 18,
        spin: Math.random() * Math.PI * 2,
        spinRate: 0.6 + Math.random() * 1.4,
        roll: Math.random() * Math.PI * 2,
        rollRate: 0.2 + Math.random() * 0.6,
        scale: 0.35 + Math.random() * 0.9,
        alpha: 0.12 + Math.random() * 0.28,
        r,
        g,
        b,
      };
    }

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas!.width = Math.floor(w * dpr);
      canvas!.height = Math.floor(h * dpr);
      canvas!.style.width = `${w}px`;
      canvas!.style.height = `${h}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const k = clamp(Math.sqrt((w * h) / (1440 * 900)), 0.5, 1.2);
      const n = Math.round(42 * k);
      motes = Array.from({ length: n }, () => makeMote());
    }

    function drawStill() {
      ctx!.clearRect(0, 0, w, h);
      for (const m of motes.slice(0, 12)) {
        ctx!.save();
        ctx!.globalAlpha = m.alpha * 0.7;
        ctx!.fillStyle = `rgb(${m.r},${m.g},${m.b})`;
        ctx!.beginPath();
        ctx!.ellipse(m.x, m.y, 3.2 * m.scale, 1.4 * m.scale, m.roll, 0, Math.PI * 2);
        ctx!.fill();
        ctx!.restore();
      }
    }

    function frame(now: number) {
      if (!alive) return;
      if (document.hidden) {
        last = now;
        raf = requestAnimationFrame(frame);
        return;
      }
      const dt = Math.min(1 / 30, (now - last) / 1000 || 0.016);
      last = now;
      ctx!.clearRect(0, 0, w, h);

      for (const m of motes) {
        m.spin += m.spinRate * dt;
        m.roll += m.rollRate * dt;
        // slip coupled to tumble (falling-leaves skill)
        m.x += Math.sin(m.spin) * m.slip * dt;
        m.y += m.fall * dt;

        if (m.y > h + 20) {
          m.y = -20;
          m.x = Math.random() * w;
        }
        if (m.x < -30) m.x = w + 20;
        if (m.x > w + 30) m.x = -20;

        const face = Math.cos(m.spin);
        const sx = Math.max(0.12, Math.abs(face));
        ctx!.save();
        ctx!.translate(m.x, m.y);
        ctx!.rotate(m.roll);
        ctx!.scale(sx, 1);
        ctx!.globalAlpha = m.alpha * (0.55 + 0.45 * sx);
        ctx!.fillStyle = `rgb(${m.r},${m.g},${m.b})`;
        ctx!.beginPath();
        ctx!.ellipse(0, 0, 4.5 * m.scale, 1.8 * m.scale, 0, 0, Math.PI * 2);
        ctx!.fill();
        ctx!.restore();
      }

      raf = requestAnimationFrame(frame);
    }

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(document.documentElement);

    if (reduce) {
      drawStill();
    } else {
      last = performance.now();
      raf = requestAnimationFrame(frame);
    }

    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[1] opacity-70"
    />
  );
}
