import { portfolioData } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <span>
        &copy; {new Date().getFullYear()} {portfolioData.name}
      </span>
      <span>Built like a tiny arcade cabinet.</span>
    </footer>
  );
}
