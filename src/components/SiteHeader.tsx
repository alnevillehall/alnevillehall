"use client";

import Link from "next/link";
import { Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { portfolioData } from "@/lib/data";

const navLinks = [
  { href: "#about", label: "Story" },
  { href: "#services", label: "Skills" },
  { href: "#projects", label: "Quests" },
  { href: "#experience", label: "Campaign" },
  { href: "#skills", label: "Loadout" },
  { href: "#contact", label: "Co-op" }
];

export function SiteHeader() {
  const [boostMode, setBoostMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-power-mode");
    const enabled = saved === "boost";
    setBoostMode(enabled);
    document.body.classList.toggle("boost-mode", enabled);
  }, []);

  function toggleBoost() {
    setBoostMode((current) => {
      const next = !current;
      document.body.classList.toggle("boost-mode", next);
      localStorage.setItem("portfolio-power-mode", next ? "boost" : "classic");
      return next;
    });
  }

  return (
    <header className="site-header">
      <Link className="brand" href="#top" aria-label="Go to hero">
        <span className="brand-mark">ANH</span>
        <span className="brand-copy">
          <strong>{portfolioData.alias}</strong>
          <small>Systems Builder</small>
        </span>
      </Link>

      <nav className="nav-links" aria-label="Primary navigation">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <button
        className="icon-button"
        type="button"
        aria-label="Toggle power mode"
        aria-pressed={boostMode}
        onClick={toggleBoost}
      >
        <Zap aria-hidden="true" size={18} strokeWidth={2} />
      </button>
    </header>
  );
}
