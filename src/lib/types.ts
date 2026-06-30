export type Stat = { label: string; value: string };
export type PowerMeter = { label: string; value: number };
export type Service = { title: string; description: string; icon: string };
export type BusinessImpact = { metric: string; label: string; detail: string };
export type Skill = { name: string; level: number };
export type SkillCategory = { name: string; icon: string; skills: Skill[] };
export type Project = {
  title: string;
  type: string;
  status: string;
  role: string;
  description: string;
  features: string[];
  stack: string[];
  accent: string;
  url: string;
};
export type Experience = {
  role: string;
  company: string;
  location?: string;
  dates: string;
  points: string[];
};
export type Education = { degree: string; school: string; dates: string };
export type ResumeDownload = { label: string; href: string };

export type PortfolioData = {
  name: string;
  alias: string;
  role: string;
  tagline: string;
  positioning: string;
  location: string;
  phone: string;
  email: string;
  availability: string;
  avatar: string;
  quest: string;
  summary: string;
  skillsIntro: string;
  resumeIntro: string;
  contactText: string;
  links: { github: string; linkedin: string };
  seoKeywords: string;
  stats: Stat[];
  powerMeters: PowerMeter[];
  about: { paragraphs: string[]; highlights: string[] };
  services: Service[];
  businessImpact: BusinessImpact[];
  mission: { headline: string; statement: string; focus: string };
  idealClients: string[];
  skillCategories: SkillCategory[];
  projects: Project[];
  resume: {
    headline: string;
    experience: Experience[];
    education: Education[];
    achievements: string[];
  };
  resumeDownloads: ResumeDownload[];
};

export type ResumeFocus = "bd" | "systems" | null;

export type ResumeFocusConfig = {
  titleSuffix: string;
  role: string;
  headline: string;
  experienceFilter: (item: Experience) => boolean;
  skillCategoryNames: string[] | null;
  achievementsFilter: (item: string) => boolean;
};
