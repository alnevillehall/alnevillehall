import { Clock, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { portfolioData } from "@/lib/data";

export function ContactSection() {
  const phoneHref = `tel:${portfolioData.phone.replace(/[^+\d]/g, "")}`;

  return (
    <section className="section-wrap contact-section panel-band" id="contact" aria-labelledby="contact-title">
      <div className="contact-copy">
        <p className="eyebrow">Co-op Mode</p>
        <h2 id="contact-title">Want to team up?</h2>
        <p>{portfolioData.contactText}</p>
        <div className="contact-details">
          <a href={`mailto:${portfolioData.email}`}>
            <Mail aria-hidden="true" size={18} strokeWidth={2} />
            {portfolioData.email}
          </a>
          <a href={phoneHref}>
            <Phone aria-hidden="true" size={18} strokeWidth={2} />
            {portfolioData.phone}
          </a>
          <span>
            <MapPin aria-hidden="true" size={18} strokeWidth={2} />
            {portfolioData.location}
          </span>
          <span>
            <Clock aria-hidden="true" size={18} strokeWidth={2} />
            {portfolioData.availability}
          </span>
        </div>
      </div>
      <div className="contact-actions">
        <a className="button primary" href={`mailto:${portfolioData.email}`}>
          <Mail aria-hidden="true" size={18} strokeWidth={2} />
          Send Message
        </a>
        <a
          className="button secondary"
          href={portfolioData.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin aria-hidden="true" size={18} strokeWidth={2} />
          LinkedIn
        </a>
        <a
          className="button secondary"
          href={portfolioData.links.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github aria-hidden="true" size={18} strokeWidth={2} />
          GitHub
        </a>
      </div>
    </section>
  );
}
