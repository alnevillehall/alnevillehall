import { portfolioData } from "@/lib/data";

export function ExperienceSection() {
  return (
    <section className="section-wrap" id="experience" aria-labelledby="experience-title">
      <div className="section-heading">
        <p className="eyebrow">Campaign History</p>
        <h2 id="experience-title">Past missions & roles</h2>
        <p>{portfolioData.resumeIntro}</p>
      </div>
      <div className="timeline">
        {portfolioData.resume.experience.map((item) => (
          <article className="timeline-item" key={`${item.company}-${item.dates}`}>
            <span className="timeline-node" aria-hidden="true" />
            <p className="dates">{item.dates}</p>
            <h3>{item.role}</h3>
            <div className="company-line">
              <strong>{item.company}</strong>
              {item.location ? <span>{item.location}</span> : null}
            </div>
            <ul>
              {item.points.map((point) => (
                <li key={point.slice(0, 48)}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
