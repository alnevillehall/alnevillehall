import Image from "next/image";
import Link from "next/link";
import { FileDown, Gamepad2, Mail } from "lucide-react";
import { portfolioData } from "@/lib/data";

export function HeroSection() {
  const { stats, powerMeters } = portfolioData;

  return (
    <section className="hero section-wrap" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">Press Start — Systems Builder</p>
        <h1 id="hero-title">
          <span className="title-prefix">Player</span>
          <span>{portfolioData.name}</span>
        </h1>
        <p className="hero-role">{portfolioData.role}</p>
        <p className="hero-summary">{portfolioData.summary}</p>

        <div className="hero-actions" aria-label="Hero actions">
          <a className="button primary" href="#projects">
            <Gamepad2 aria-hidden="true" size={18} strokeWidth={2} />
            View My Work
          </a>
          <a className="button secondary" href="#contact">
            <Mail aria-hidden="true" size={18} strokeWidth={2} />
            Contact Me
          </a>
          <Link className="button ghost" href="/resume">
            <FileDown aria-hidden="true" size={18} strokeWidth={2} />
            Download Resume
          </Link>
        </div>

        <dl className="stat-row" aria-label="Player stats">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt>{stat.label}</dt>
              <dd>{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <aside className="player-card" aria-label="Player profile">
        <div className="scanline" aria-hidden="true" />
        <div className="level-badge" aria-label="Player level 28">
          LVL 28
        </div>
        <div className="avatar-shell">
          <span className="frame-corner frame-tl" aria-hidden="true" />
          <span className="frame-corner frame-tr" aria-hidden="true" />
          <span className="frame-corner frame-bl" aria-hidden="true" />
          <span className="frame-corner frame-br" aria-hidden="true" />
          <Image
            src={portfolioData.avatar}
            alt={`${portfolioData.name} player portrait`}
            width={400}
            height={400}
            priority
          />
        </div>
        <div className="xp-bar" aria-label="Experience 88 percent">
          <span className="xp-fill" style={{ width: "88%" }} />
          <span className="xp-label">XP 88%</span>
        </div>
        <div className="player-meta">
          <p className="player-label">Current Quest</p>
          <h2>{portfolioData.quest}</h2>
          <p>{portfolioData.location}</p>
          <p className="availability">{portfolioData.availability}</p>
        </div>
        <div className="meter-stack" aria-label="Power meters">
          {powerMeters.map((meter) => (
            <div className="meter" key={meter.label}>
              <div className="meter-label">
                <span>{meter.label}</span>
                <span>{meter.value}</span>
              </div>
              <span className="meter-track" aria-hidden="true">
                <span style={{ width: `${meter.value}%` }} />
              </span>
            </div>
          ))}
        </div>
      </aside>
    </section>
  );
}
