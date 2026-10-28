"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { systems } from "../data";

export default function Systems({ headingLevel = 2 }: { headingLevel?: 1 | 2 }) {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();
  const H = headingLevel === 1 ? "h1" : "h2";

  return (
    <section className="sec sec-paper" id="systems" aria-labelledby="systems-h">
      <div className="sec-head">
        <H id="systems-h" className="sec-title">Systems that ran in production</H>
        <p className="sec-note">
          Each of these carried a live college fest with thousands of real users. Open one to see how it was built.
        </p>
      </div>

      <ol className="board">
        {systems.map((s, i) => {
          const isOpen = open === i;
          return (
            <li key={s.title} className={`board-row${isOpen ? " is-open" : ""}`}>
              <button
                className="board-hit"
                aria-expanded={isOpen}
                aria-controls={`sys-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span className="board-metric">{s.metric}</span>
                <span className="board-main">
                  <span className="board-title">{s.title}</span>
                  <span className="board-where">{s.where}</span>
                </span>
                <span className="board-label">{s.metricLabel}</span>
                <span className="board-plus" aria-hidden="true" />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`sys-${i}`}
                    className="board-detail"
                    initial={reduce ? false : { height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={reduce ? undefined : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
                  >
                    <div className="board-detail-in">
                      <p className="board-summary">{s.summary}</p>
                      <ul className="board-points">
                        {s.details.map((d) => (
                          <li key={d}>{d}</li>
                        ))}
                      </ul>
                      <p className="board-stack">
                        <span>Built with</span> {s.stack.join(", ")}
                      </p>
                      <a className="text-link" href={s.url} target="_blank" rel="noopener noreferrer">
                        Code on GitHub
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
