"use client";

import { useState } from "react";
import { projects, Project } from "../data";

const filters: { id: "all" | Project["kind"]; label: string }[] = [
  { id: "all", label: "All" },
  { id: "systems", label: "Low-level & security" },
  { id: "web", label: "Web & real-time" },
  { id: "data", label: "Data" },
];

export default function MoreWork() {
  const [f, setF] = useState<(typeof filters)[number]["id"]>("all");
  const list = f === "all" ? projects : projects.filter((p) => p.kind === f);

  return (
    <section className="sec sec-paper sec-tight" id="more" aria-labelledby="more-h">
      <div className="sec-head">
        <h2 id="more-h" className="sec-title sec-title-sm">More things I’ve built</h2>
        <div className="seg" role="group" aria-label="Filter projects">
          {filters.map((x) => (
            <button
              key={x.id}
              className="seg-btn"
              aria-pressed={f === x.id}
              onClick={() => setF(x.id)}
            >
              {x.label}
            </button>
          ))}
        </div>
      </div>

      <ul className="work">
        {list.map((p) => (
          <li key={p.title} className="work-item">
            <a href={p.url} target="_blank" rel="noopener noreferrer" className="work-link">
              <h3 className="work-title">{p.title}</h3>
              <p className="work-line">{p.line}</p>
              <p className="work-stack">{p.stack.join(", ")}</p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
