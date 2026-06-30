"use client";

import Link from "next/link";
import { ArrowLeft, Github, Linkedin, Mail, MapPin, Phone, Printer } from "lucide-react";
import { getResumeFocusConfig, parseResumeFocus, portfolioData } from "@/lib/data";
import type { ResumeFocus } from "@/lib/types";

type ResumeViewProps = {
  focus: ResumeFocus;
};

export function ResumeView({ focus }: ResumeViewProps) {
  const config = getResumeFocusConfig(focus);
  const experience = portfolioData.resume.experience.filter(config.experienceFilter);
  const skillCategories = config.skillCategoryNames
    ? portfolioData.skillCategories.filter((category) =>
        config.skillCategoryNames!.includes(category.name)
      )
    : portfolioData.skillCategories;
  const achievements = portfolioData.resume.achievements.filter(config.achievementsFilter);
  const phoneHref = `tel:${portfolioData.phone.replace(/[^+\d]/g, "")}`;

  return (
    <main className="resume-page">
      <header className="resume-header">
        <div>
          <Link className="text-link back-link" href="/">
            <ArrowLeft aria-hidden="true" size={18} strokeWidth={2} />
            Portfolio
          </Link>
          <h1>{portfolioData.name}</h1>
          <p>{config.role}</p>
        </div>
        <div className="resume-contact">
          <a href={`mailto:${portfolioData.email}`}>
            <Mail aria-hidden="true" size={16} strokeWidth={2} />
            {portfolioData.email}
          </a>
          <a href={phoneHref}>
            <Phone aria-hidden="true" size={16} strokeWidth={2} />
            {portfolioData.phone}
          </a>
          <a href={portfolioData.links.linkedin} target="_blank" rel="noopener noreferrer">
            <Linkedin aria-hidden="true" size={16} strokeWidth={2} />
            LinkedIn
          </a>
          <a href={portfolioData.links.github} target="_blank" rel="noopener noreferrer">
            <Github aria-hidden="true" size={16} strokeWidth={2} />
            GitHub
          </a>
          <span>
            <MapPin aria-hidden="true" size={16} strokeWidth={2} />
            {portfolioData.location}
          </span>
        </div>
      </header>

      <section className="resume-paper-section">
        <h2>Profile</h2>
        <p>{config.headline}</p>
      </section>

      <section className="resume-paper-section">
        <h2>Experience</h2>
        {experience.map((item) => (
          <article className="resume-job" key={`${item.company}-${item.dates}`}>
            <div className="resume-job-head">
              <div>
                <h3>{item.role}</h3>
                <p>
                  {item.company}
                  {item.location ? ` — ${item.location}` : ""}
                </p>
              </div>
              <span>{item.dates}</span>
            </div>
            <ul>
              {item.points.map((point) => (
                <li key={point.slice(0, 48)}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="resume-paper-grid">
        <div className="resume-paper-section">
          <h2>Skills</h2>
          {skillCategories.map((category) => (
            <div className="resume-skill-group" key={category.name}>
              <h3>{category.name}</h3>
              <p>{category.skills.map((skill) => skill.name).join(", ")}</p>
            </div>
          ))}
        </div>
        <div className="resume-paper-section">
          <h2>Education</h2>
          {portfolioData.resume.education.map((item) => (
            <article className="resume-school" key={`${item.degree}-${item.school}`}>
              <h3>{item.degree}</h3>
              <p>{item.school}</p>
              <span>{item.dates}</span>
            </article>
          ))}
          <h2>Achievements</h2>
          <ul id="resume-achievements">
            {achievements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="resume-actions">
        <button className="button primary" type="button" onClick={() => window.print()}>
          <Printer aria-hidden="true" size={18} strokeWidth={2} />
          Print / Save as PDF
        </button>
      </footer>
    </main>
  );
}
