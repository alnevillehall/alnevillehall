"use client";

import { useState } from "react";
import { portfolioData } from "@/lib/data";
import { getIcon } from "@/lib/icons";

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(portfolioData.skillCategories[0].name);
  const category =
    portfolioData.skillCategories.find((item) => item.name === activeCategory) ??
    portfolioData.skillCategories[0];

  return (
    <section className="section-wrap panel-band" id="skills" aria-labelledby="skills-title">
      <div className="section-heading">
        <p className="eyebrow">Inventory</p>
        <h2 id="skills-title">Skills loadout</h2>
        <p>{portfolioData.skillsIntro}</p>
      </div>
      <div className="tabs" role="tablist" aria-label="Skill categories">
        {portfolioData.skillCategories.map((item) => {
          const Icon = getIcon(item.icon);
          return (
            <button
              key={item.name}
              className={`tab-button ${item.name === activeCategory ? "active" : ""}`}
              type="button"
              role="tab"
              aria-selected={item.name === activeCategory}
              onClick={() => setActiveCategory(item.name)}
            >
              <Icon aria-hidden="true" size={18} strokeWidth={2} />
              {item.name}
            </button>
          );
        })}
      </div>
      <div className="skill-grid">
        {category.skills.map((skill) => (
          <article className="skill-card" key={skill.name}>
            <div>
              <h3>{skill.name}</h3>
              <p>{category.name}</p>
            </div>
            <div className="mini-meter" aria-label={`${skill.name} level ${skill.level}`}>
              <span style={{ width: `${skill.level}%` }} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
