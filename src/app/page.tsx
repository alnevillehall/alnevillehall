import { AboutSection } from "@/components/AboutSection";
import { ArcadeCanvas } from "@/components/ArcadeCanvas";
import { ContactSection } from "@/components/ContactSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { HeroSection } from "@/components/HeroSection";
import { ImpactSection } from "@/components/ImpactSection";
import { MissionSection } from "@/components/MissionSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ResumeDownloadSection } from "@/components/ResumeDownloadSection";
import { ServicesSection } from "@/components/ServicesSection";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SkillsSection } from "@/components/SkillsSection";

export default function HomePage() {
  return (
    <>
      <ArcadeCanvas />
      <SiteHeader />
      <main id="top">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <ImpactSection />
        <MissionSection />
        <ResumeDownloadSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
