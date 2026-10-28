"use client";

import { useEffect, useRef } from "react";
import { PointerState, resolvePointer } from "./pointer";

const LINES = ["LAKSHYA", "JAIN"];
const REST = 92; // resting width on Anybody's 50–150 wdth axis

export default function HeroName({
  pointer,
  box,
}: {
  pointer: React.RefObject<PointerState>;
  box: React.RefObject<HTMLElement | null>;
}) {
  const wrap = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const root = wrap.current;
    const hero = box.current;
    if (!root || !hero) return;
    const letters = Array.from(root.querySelectorAll<HTMLSpanElement>("[data-l]"));
    const current = letters.map(() => 50);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      letters.forEach((el) => (el.style.fontVariationSettings = `"wdth" ${REST}`));
      return;
    }

    let raf = 0;
    let last = performance.now();
    const start = last;

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      const hr = hero.getBoundingClientRect();
      const p = resolvePointer(pointer.current, hr.width, hr.height, now);
      const warm = Math.min(1, (now - start) / 900); // load-in: letters open from condensed

      // group letters by line so each line keeps roughly its total width
      const lineEls = Array.from(root.querySelectorAll<HTMLSpanElement>("[data-line]"));
      let idx = 0;
      lineEls.forEach((line) => {
        const ls = Array.from(line.querySelectorAll<HTMLSpanElement>("[data-l]"));
        const raw = ls.map((el) => {
          const r = el.getBoundingClientRect();
          const cx = r.left + r.width / 2 - hr.left;
          const cy = r.top + r.height / 2 - hr.top;
          const d = Math.hypot((cx - p.x) / (hr.width * 0.16), (cy - p.y) / (hr.height * 0.6));
          return Math.exp(-d * d);
        });
        const mean = raw.reduce((a, b) => a + b, 0) / raw.length;
        ls.forEach((el, i) => {
          const target = Math.max(50, Math.min(150, REST + (raw[i] - mean) * 120));
          const goal = 50 + (target - 50) * warm;
          const j = idx + i;
          current[j] += (goal - current[j]) * Math.min(1, dt * 7);
          el.style.fontVariationSettings = `"wdth" ${current[j].toFixed(1)}`;
        });
        idx += ls.length;
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [pointer, box]);

  let n = 0;
  return (
    <h1 ref={wrap} className="hero-name" aria-label="Lakshya Jain">
      {LINES.map((line) => (
        <span key={line} data-line className="hero-line" aria-hidden="true">
          {line.split("").map((ch, i) => (
            <span
              key={i}
              data-l
              className="hero-letter"
              style={{ animationDelay: `${120 + n++ * 55}ms` }}
            >
              {ch}
            </span>
          ))}
        </span>
      ))}
    </h1>
  );
}
