"use client";

import { useEffect, useRef } from "react";

type Mote = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  max: number;
  size: number;
  phase: number;
};

/**
 * Kage/pointer-trail-emitter inspired cursor wisps.
 * Distance-based emission so flicks stay continuous.
 */
export function PointerTrail() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const coarse = window.matchMedia("(hover: none)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (coarse || reduce) {
      canvas.style.display = "none";
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const STEP = 14; // px between spawns
    const N = 160;
    const pool: Mote[] = Array.from({ length: N }, () => ({
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      life: 0,
      max: 1,
      size: 2,
      phase: 0,
    }));
    let pi = 0;
    let acc = 0;
    let w = 0;
    let h = 0;
    let dpr = 1;
    let raf = 0;
    let last = 0;
    let alive = true;

    const E = { x: 0, y: 0, lx: 0, ly: 0, ready: false };
    let idleT = 0;

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas!.width = Math.floor(w * dpr);
      canvas!.height = Math.floor(h * dpr);
      canvas!.style.width = `${w}px`;
      canvas!.style.height = `${h}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function spawn(x: number, y: number, ang: number) {
      const i = pi;
      pi = (pi + 1) % N;
      const m = pool[i];
      const scatter = 4 + Math.random() * 8;
      m.x = x + (Math.random() - 0.5) * scatter;
      m.y = y + (Math.random() - 0.5) * scatter;
      m.vx = Math.cos(ang + Math.PI) * 0.08 + (Math.random() - 0.5) * 0.22;
      m.vy = Math.sin(ang + Math.PI) * 0.08 + (Math.random() - 0.5) * 0.18 - 0.04;
      m.max = 0.9 + Math.random() * 1.1;
      m.life = m.max;
      m.size = 1.4 + Math.random() * 2.6;
      m.phase = Math.random() * Math.PI * 2;
    }

    function onMove(e: PointerEvent) {
      const px = e.clientX;
      const py = e.clientY;
      if (!E.ready) {
        E.x = E.lx = px;
        E.y = E.ly = py;
        E.ready = true;
        return;
      }
      // damp emitter toward pointer
      E.x += (px - E.x) * 0.35;
      E.y += (py - E.y) * 0.35;
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

      if (E.ready) {
        const dx = E.x - E.lx;
        const dy = E.y - E.ly;
        const moved = Math.hypot(dx, dy);
        const ang = Math.atan2(dy, dx) || 0;

        if (moved > 0.01) {
          acc += moved;
          let guard = 0;
          while (acc >= STEP && guard++ < 14) {
            acc -= STEP;
            const t = moved > 1e-6 ? Math.min(1, (guard * STEP) / moved) : 0;
            spawn(E.lx + dx * t, E.ly + dy * t, ang);
          }
          idleT = 0;
        } else {
          idleT += dt;
          if (idleT > 0.42) {
            idleT = 0;
            spawn(E.x, E.y, 0);
          }
        }
        E.lx = E.x;
        E.ly = E.y;
      }

      ctx!.clearRect(0, 0, w, h);
      for (const m of pool) {
        if (m.life <= 0) continue;
        m.life -= dt;
        const u = 1 - m.life / m.max;
        m.vx *= 1 - 0.5 * dt;
        m.vy *= 1 - 0.5 * dt;
        m.vx += Math.sin(now * 0.0013 + m.phase) * 0.012;
        m.vy += Math.cos(now * 0.0011 + m.phase * 1.7) * 0.01 - 0.018 * dt;
        m.x += m.vx * 60 * dt;
        m.y += m.vy * 60 * dt;

        const fade = u < 0.12 ? u / 0.12 : u > 0.22 ? (1 - u) / 0.78 : 1;
        const a = Math.max(0, fade) * 0.55;
        const s = m.size * (1 + 0.4 * u);
        ctx!.beginPath();
        ctx!.fillStyle = `rgba(196,163,90,${a})`;
        ctx!.arc(m.x, m.y, s, 0, Math.PI * 2);
        ctx!.fill();
        ctx!.beginPath();
        ctx!.fillStyle = `rgba(255,255,255,${a * 0.35})`;
        ctx!.arc(m.x, m.y, s * 0.45, 0, Math.PI * 2);
        ctx!.fill();
      }

      raf = requestAnimationFrame(frame);
    }

    resize();
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("resize", resize);
    last = performance.now();
    raf = requestAnimationFrame(frame);

    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[60]"
    />
  );
}
