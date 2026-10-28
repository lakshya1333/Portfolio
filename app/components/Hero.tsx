"use client";

import { useRef } from "react";
import Link from "next/link";
import Navbar from "./Navbar";
import PacketField from "./PacketField";
import HeroName from "./HeroName";
import { createPointer } from "./pointer";

export default function Hero() {
  const box = useRef<HTMLElement>(null);
  const pointer = useRef(createPointer());
  const counter = useRef<HTMLSpanElement>(null);

  const onMove = (e: React.PointerEvent) => {
    const r = box.current?.getBoundingClientRect();
    if (!r || e.pointerType === "touch") return;
    pointer.current.x = e.clientX - r.left;
    pointer.current.y = e.clientY - r.top;
    pointer.current.last = performance.now();
  };

  return (
    <section ref={box} className="hero" onPointerMove={onMove}>
      <PacketField pointer={pointer} counterRef={counter} />
      <Navbar />

      <div className="hero-body">
        <HeroName pointer={pointer} box={box} />
      </div>

      <div className="hero-foot">
        <div className="hero-intro" data-quiet>
          <p className="hero-lede">
            I build backends that hold up when a whole campus shows up at once.
          </p>
          <p className="hero-sub">
            Backend &amp; systems engineer, final year at MIT Manipal. Cloud &amp; AI intern at
            Microsoft, summer 2026.
          </p>
          <div className="hero-actions">
            <Link href="/projects" className="btn btn-solid">See the systems</Link>
            <Link href="/contact" className="btn btn-line">Get in touch</Link>
          </div>
        </div>

        <div className="hero-meter" data-quiet>
          <span className="meter-num" ref={counter}>000000</span>
          <span className="meter-label">
            requests routed since you arrived.{" "}
            <span className="only-pointer">Move your cursor to reroute them.</span>
            <span className="only-touch">The ring is load-balancing them live.</span>
          </span>
        </div>
      </div>
    </section>
  );
}
