import { roles } from "../data";

export default function Experience({ headingLevel = 2 }: { headingLevel?: 1 | 2 }) {
  const H = headingLevel === 1 ? "h1" : "h2";
  return (
    <section className="sec sec-ink" id="experience" aria-labelledby="exp-h">
      <div className="sec-head">
        <H id="exp-h" className="sec-title">Experience</H>
        <p className="sec-note">Internships, and three years of running the tech behind MIT Manipal’s biggest events.</p>
      </div>

      <ol className="timeline">
        {roles.map((r) => (
          <li key={r.org + r.role} className="tl-row">
            <p className="tl-date">
              <span>{r.start}</span>
              <span className="tl-dash" aria-hidden="true" />
              <span>{r.end}</span>
            </p>
            <div className="tl-body">
              <h3 className="tl-org">{r.org}</h3>
              <p className="tl-role">
                {r.role}
                <span className="tl-place">{r.place}</span>
              </p>
              {r.award && (
                <p className="tl-award">
                  <span className="led" aria-hidden="true" />
                  {r.award}
                </p>
              )}
              <ul className="tl-points">
                {r.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <p className="tl-skills">{r.skills.join(", ")}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
