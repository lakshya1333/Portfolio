"use client";

import { useState } from "react";
import Image from "next/image";
import { certs, education, stack } from "../data";

export default function About({ headingLevel = 2 }: { headingLevel?: 1 | 2 }) {
  const [all, setAll] = useState(false);
  const shown = all ? certs : certs.slice(0, 6);
  const H = headingLevel === 1 ? "h1" : "h2";

  return (
    <section className="sec sec-paper sec-about" id="about" aria-labelledby="about-h">
      <div className="about-grid">
        <figure className="about-photo">
          <Image src="/lakshya.jpg" alt="Lakshya Jain at Marine Drive, Mumbai" fill sizes="(max-width: 960px) 420px, 40vw" />
        </figure>

        <div className="about-text">
          <H id="about-h" className="sec-title">About</H>
          <p className="about-lede">
            I like the unglamorous parts of software: locks, queues, retries, audit logs. The pieces that decide
            whether a system survives its busiest hour.
          </p>
          <p className="about-p">
            Most of what I’ve shipped has run during college fests, where traffic arrives all at once and nobody
            gets a second try at the gate. Outside of that I write C against raw sockets, and spent summer 2026
            building agentic systems on Azure at Microsoft.
          </p>

          <dl className="facts">
            <div className="fact">
              <dt>Studying</dt>
              <dd>
                {education.degree}
                <br />
                {education.school}, graduating {education.grad}
              </dd>
            </div>
            {Object.entries(stack).map(([k, v]) => (
              <div className="fact" key={k}>
                <dt>{k}</dt>
                <dd>{v.join(", ")}</dd>
              </div>
            ))}
            <div className="fact">
              <dt>Coursework</dt>
              <dd>{education.coursework.join(", ")}</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="certs">
        <h3 className="certs-title">
          Certifications <span className="certs-count">{certs.length}</span>
        </h3>
        <ul className="cert-list">
          {shown.map((c) => (
            <li key={c.url}>
              <a href={c.url} target="_blank" rel="noopener noreferrer" className="cert">
                <span className="cert-name">{c.title}</span>
                <span className="cert-issuer">{c.issuer}</span>
                <span className="cert-date">{c.date}</span>
              </a>
            </li>
          ))}
        </ul>
        {certs.length > 6 && (
          <button className="btn btn-ink" onClick={() => setAll((a) => !a)} aria-expanded={all}>
            {all ? "Show fewer" : `Show all ${certs.length}`}
          </button>
        )}
      </div>
    </section>
  );
}
