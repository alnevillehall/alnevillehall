import { portfolioData } from "@/lib/data";
import { achievementIcons, getIcon } from "@/lib/icons";

export function ImpactSection() {
  return (
    <section className="section-wrap" id="impact" aria-labelledby="impact-title">
      <div className="section-heading">
        <p className="eyebrow">High Scores</p>
        <h2 id="impact-title">Impact unlocked</h2>
      </div>
      <div className="impact-grid">
        {portfolioData.businessImpact.map((item, index) => {
          const Icon = getIcon(achievementIcons[index % achievementIcons.length]);
          return (
            <article className="impact-card achievement-card" key={item.label}>
              <span className="achievement-icon">
                <Icon aria-hidden="true" size={18} strokeWidth={2} />
              </span>
              <p className="impact-metric">{item.metric}</p>
              <p className="impact-label">{item.label}</p>
              <p className="impact-detail">{item.detail}</p>
              <span className="achievement-tag">Achievement Unlocked</span>
            </article>
          );
        })}
      </div>
    </section>
  );
}
