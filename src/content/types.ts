export type Lang = "vi" | "en";

export type SocialLink = {
  label: string;
  href: string;
  icon: "mail" | "phone" | "linkedin" | "github" | "facebook" | "instagram" | "x" | "globe";
};

export type Stat = {
  value: string;
  label: string;
};

export type Skill = {
  name: string;
  rating: number;
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location?: string;
  industry?: string;
  description: string;
  achievements: string[];
  stack?: string[];
  logo?: string;
  keyMetrics?: { value: string; label: string }[];
  scope?: string[];
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  cover?: string;
};

export type HeroBlock = {
  eyebrow: string;
  name: string;
  title: string;
  location: string;
  intro: string;
  primaryCta: string;
  secondaryCta: string;
  availability: string;
  portrait?: string;
};

export type EducationItem = {
  school: string;
  degree: string;
  period: string;
  detail?: string;
};

export type Content = {
  meta: {
    siteName: string;
    description: string;
  };
  nav: {
    about: string;
    experience: string;
    projects: string;
    skills: string;
    education: string;
    contact: string;
    cta: string;
  };
  hero: HeroBlock;
  stats: Stat[];
  about: {
    eyebrow: string;
    headline: string;
    paragraphs: string[];
    cta: string;
  };
  experience: {
    eyebrow: string;
    headline: string;
    items: ExperienceItem[];
  };
  projects: {
    eyebrow: string;
    headline: string;
    description: string;
    items: Project[];
    viewAll: string;
  };
  skills: {
    eyebrow: string;
    headline: string;
    description: string;
    items: Skill[];
    tools: string[];
  };
  contact: {
    eyebrow: string;
    headline: string;
    description: string;
    cta: string;
    downloadCv: string;
    email: string;
    phone: string;
    website: string;
    address: string;
  };
  footer: {
    tagline: string;
    sections: {
      title: string;
      links: { label: string; href: string }[];
    }[];
    social: SocialLink[];
    copyright: string;
  };
  education: {
    eyebrow: string;
    headline: string;
    items: EducationItem[];
  };
};
