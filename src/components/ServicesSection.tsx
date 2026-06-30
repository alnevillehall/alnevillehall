import type { CSSProperties } from "react";
import { portfolioData } from "@/lib/data";
import { abilityAccents, getIcon } from "@/lib/icons";

export function ServicesSection() {
  return (
    <section className="section-wrap" id="services" aria-labelledby="services-title">
      <div className="section-heading">
        <p className="eyebrow">Ability Tree</p>
        <h2 id="services-title">What I bring to the party</h2>
        <p>{portfolioData.positioning}</p>
      </div>
      <div className="services-grid">
        {portfolioData.services.map((service, index) => {
          const Icon = getIcon(service.icon);
          return (
            <article
              key={service.title}
              className="service-card ability-card"
              style={{ "--card-accent": abilityAccents[index % abilityAccents.length] } as CSSProperties}
            >
              <span className="ability-slot">{String(index + 1).padStart(2, "0")}</span>
              <span className="service-icon">
                <Icon aria-hidden="true" size={20} strokeWidth={2} />
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
