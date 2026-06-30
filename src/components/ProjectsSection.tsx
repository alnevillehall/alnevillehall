"use client";

import { useMemo, useState, type CSSProperties } from "react";
import { portfolioData } from "@/lib/data";

export function ProjectsSection() {
  const types = useMemo(
    () => ["All", ...new Set(portfolioData.projects.map((project) => project.type))],
    []
  );
  const [activeType, setActiveType] = useState("All");

  const projects =
    activeType === "All"
      ? portfolioData.projects
      : portfolioData.projects.filter((project) => project.type === activeType);

  return (
    <section className="section-wrap panel-band" id="projects" aria-labelledby="projects-title">
      <div className="section-heading split-heading">
        <div>
          <p className="eyebrow">Quest Log</p>
          <h2 id="projects-title">Featured builds</h2>
        </div>
        <div className="filter-bar" aria-label="Project filters">
          {types.map((type) => (
            <button
              key={type}
              className={`chip ${type === activeType ? "active" : ""}`}
              type="button"
              onClick={() => setActiveType(type)}
            >
              {type}
            </button>
          ))}
        </div>
      </div>
      <div className="project-grid">
        {projects.map((project, index) => (
          <article key={project.title} className="project-card" style={{ "--accent": project.accent } as CSSProperties}>
            <div className="project-art" aria-hidden="true">
              <span className={`orbital orbital-${(index % 3) + 1}`} />
              <span className="pixel pixel-a" />
              <span className="pixel pixel-b" />
              <div className="project-meta">
                <span>{project.type}</span>
                <span>{project.status}</span>
              </div>
            </div>
            <div className="project-copy">
              <h3>{project.title}</h3>
              <p className="project-role">{project.role}</p>
              <p>{project.description}</p>
              <ul className="feature-list">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <div className="stack-list">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
