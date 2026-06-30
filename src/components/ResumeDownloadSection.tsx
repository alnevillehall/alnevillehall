import Link from "next/link";
import { FileDown } from "lucide-react";
import { portfolioData } from "@/lib/data";

const blurbs = [
  "Full character sheet — experience, skills, education, and achievements.",
  "Build focused on business development, growth strategy, and revenue scaling.",
  "Build focused on systems analysis, automation, and internal tools."
];

export function ResumeDownloadSection() {
  return (
    <section className="section-wrap" id="resume" aria-labelledby="resume-title">
      <div className="section-heading">
        <p className="eyebrow">Save File</p>
        <h2 id="resume-title">Grab my character sheet</h2>
        <p>Printable resume pages — full profile, business development, or systems focus.</p>
      </div>
      <div className="resume-download-grid">
        {portfolioData.resumeDownloads.map((item, index) => (
          <article className="resume-download-card" key={item.label}>
            <h3>{item.label}</h3>
            <p>{blurbs[index] ?? blurbs[0]}</p>
            <Link className="button primary" href={item.href}>
              <FileDown aria-hidden="true" size={18} strokeWidth={2} />
              {item.label}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
