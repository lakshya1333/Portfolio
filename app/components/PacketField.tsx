"use client";

import { useEffect, useRef } from "react";
import { PointerState, resolvePointer } from "./pointer";

type Packet = {
  x: number;
  lane: number;
  y: number;
  v: number;
  len: number;
  hot: boolean;
  a: number;
};

const LANE_GAP = 13;
const RADIUS = 150;

export default function PacketField({
  pointer,
  counterRef,
}: {
  pointer: React.RefObject<PointerState>;
  counterRef: React.RefObject<HTMLSpanElement | null>;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let lanes: number[] = [];
    let packets: Packet[] = [];
    let routed = 0;
    let raf = 0;
    let visible = true;
    let last = performance.now();
    let bx = -9999;
    let quiet: DOMRect[] = [];
    const measureQuiet = () => {
      const c = canvas.getBoundingClientRect();
      quiet = Array.from(canvas.parentElement?.querySelectorAll<HTMLElement>("[data-quiet]") ?? []).map((el) => {
        const r = el.getBoundingClientRect();
        return new DOMRect(r.left - c.left - 24, r.top - c.top - 16, r.width + 48, r.height + 32);
      });
    };
    const inQuiet = (x: number, y: number) =>
      quiet.some((q) => x > q.left && x < q.right && y > q.top && y < q.bottom);
    let by = -9999;

    const spawn = (atStart: boolean): Packet => {
      const lane = Math.floor(Math.random() * lanes.length);
      const hot = Math.random() < 0.035;
      const v = 60 + Math.random() * 220 + (hot ? 160 : 0);
      return {
        x: atStart ? Math.random() * w : -40 - Math.random() * w * 0.4,
        lane,
        y: lanes[lane],
        v,
        len: 6 + Math.random() * (v / 6),
        hot,
        a: 0.25 + Math.random() * 0.6,
      };
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const r = canvas.getBoundingClientRect();
      w = r.width;
      h = r.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      lanes = [];
      for (let y = LANE_GAP; y < h - 4; y += LANE_GAP) lanes.push(y);
      const target = Math.round((w * h) / 2600);
      packets = Array.from({ length: Math.min(target, 900) }, () => spawn(true));
      measureQuiet();
    };

    const draw = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      const p = resolvePointer(pointer.current, w, h, now);
      // ease the balancer toward the pointer so it feels weighty
      if (bx < -9000) {
        bx = p.x;
        by = p.y;
      }
      bx += (p.x - bx) * Math.min(1, dt * 9);
      by += (p.y - by) * Math.min(1, dt * 9);

      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < packets.length; i++) {
        const k = packets[i];
        k.x += k.v * dt;
        const base = lanes[k.lane] ?? k.y;
        const dx = k.x - bx;
        const dy = base - by;
        const d = Math.hypot(dx, dy);
        let target = base;
        if (d < RADIUS) {
          const push = (RADIUS - d) * 0.9;
          target = base + (dy >= 0 ? push : -push);
        }
        k.y += (target - k.y) * Math.min(1, dt * 10);

        if (k.x - k.len > w) {
          routed++;
          packets[i] = spawn(false);
          continue;
        }
        if (inQuiet(k.x - k.len / 2, k.y)) continue;
        ctx.globalAlpha = k.hot ? 1 : k.a;
        ctx.fillStyle = k.hot ? "#FFD400" : "#FFFFFF";
        ctx.fillRect(k.x - k.len, k.y - 1, k.len, k.hot ? 2.5 : 1.5);
      }

      // the balancer itself
      ctx.globalAlpha = p.auto ? 0.35 : 0.6;
      ctx.strokeStyle = "#FFFFFF";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(bx, by, RADIUS * 0.55, 0, Math.PI * 2);
      ctx.stroke();
      ctx.globalAlpha = 1;
      ctx.fillStyle = "#FFD400";
      ctx.beginPath();
      ctx.arc(bx, by, 3.5, 0, Math.PI * 2);
      ctx.fill();

      if (counterRef.current) {
        counterRef.current.textContent = routed.toLocaleString("en-US").padStart(6, "0");
      }

      if (visible && !reduce) raf = requestAnimationFrame(draw);
    };

    resize();
    if (reduce) {
      draw(performance.now());
    } else {
      raf = requestAnimationFrame(draw);
    }

    const ro = new ResizeObserver(() => {
      resize();
      if (reduce) draw(performance.now());
    });
    ro.observe(canvas);
    // fonts settling can move the quiet zones
    document.fonts?.ready.then(measureQuiet);
    const late = window.setTimeout(measureQuiet, 1500);

    const io = new IntersectionObserver(([entry]) => {
      const was = visible;
      visible = entry.isIntersecting && !document.hidden;
      if (visible && !was && !reduce) {
        last = performance.now();
        raf = requestAnimationFrame(draw);
      }
    });
    io.observe(canvas);

    const onVis = () => {
      const was = visible;
      visible = !document.hidden;
      if (visible && !was && !reduce) {
        last = performance.now();
        raf = requestAnimationFrame(draw);
      }
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(late);
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [pointer, counterRef]);

  return <canvas ref={canvasRef} className="packets" aria-hidden="true" />;
}
