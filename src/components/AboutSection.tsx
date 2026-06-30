import { portfolioData } from "@/lib/data";

export function AboutSection() {
  const { about, idealClients } = portfolioData;

  return (
    <section className="section-wrap panel-band" id="about" aria-labelledby="about-title">
      <div className="section-heading">
        <p className="eyebrow">Character Backstory</p>
        <h2 id="about-title">Strategy meets systems</h2>
      </div>
      <div className="about-layout">
        <div className="about-copy">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
        <aside className="about-aside">
          <h3>Bonus Perks</h3>
          <ul className="highlight-list">
            {about.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="ideal-clients">
            <h3>Preferred Allies</h3>
            <ul className="tag-list">
              {idealClients.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
