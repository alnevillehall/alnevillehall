import { portfolioData } from "@/lib/data";

export function MissionSection() {
  return (
    <section className="section-wrap mission-section panel-band" id="mission" aria-labelledby="mission-title">
      <div className="mission-card">
        <p className="eyebrow">Main Quest</p>
        <h2 id="mission-title">Building for smarter, healthier operations</h2>
        <p className="mission-statement">{portfolioData.mission.statement}</p>
        <p className="mission-focus">{portfolioData.mission.focus}</p>
      </div>
    </section>
  );
}
