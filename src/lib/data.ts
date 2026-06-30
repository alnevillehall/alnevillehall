import type { PortfolioData, ResumeFocus, ResumeFocusConfig } from "./types";

export const portfolioData: PortfolioData = {
  name: "Al Neville Hall",
  alias: "Player ANH",
  role: "Business Systems Analyst & Systems Automation Specialist",
  tagline: "I build business systems that reduce manual work and help companies scale.",
  positioning:
    "I help businesses replace manual processes with automated systems, dashboards, internal tools, and workflows that improve visibility, reduce inefficiency, and support scalable growth.",
  location: "Kingston, Jamaica",
  phone: "876-478-3893",
  email: "alnevillehall@gmail.com",
  availability: "Open to remote, hybrid, and on-site opportunities",
  avatar: "/assets/headshot.png",
  quest: "Building the operating layer for smarter, healthier, more scalable businesses.",
  summary:
    "Hi, I'm Al Neville Hall — a Business Systems Analyst and Systems Automation Specialist based in Kingston, Jamaica. I design and build internal tools, workflow automations, dashboards, and operational systems that help businesses reduce manual work, improve visibility, and scale more efficiently.",
  skillsIntro:
    "Core competencies spanning business analysis, systems development, automation, and growth strategy — applied across service, real estate, healthcare, and operations-heavy environments.",
  resumeIntro:
    "Professional experience designing operational systems, scaling business operations, and delivering automation and internal tools for clients and employers.",
  contactText:
    "I help businesses organize operations, automate workflows, improve reporting, and build systems that support growth. Whether you need an internal tool, a workflow audit, a dashboard, or a business systems partner, I'm open to opportunities and collaborations.",
  links: {
    github: "https://github.com/alnevillehall",
    linkedin: "https://www.linkedin.com/in/alnevillehall/"
  },
  seoKeywords:
    "Al Neville Hall, Business Systems Analyst Jamaica, Systems Automation Specialist Jamaica, Workflow Automation, Business Process Automation, Internal Tools Developer, Next.js Developer Jamaica, PostgreSQL Developer, Business Development Officer Jamaica, Growth Strategy, CRM Automation, Operational Dashboards, Service Management Systems, Business Systems Consultant, Automation Consultant Caribbean",
  stats: [
    { label: "Quests", value: "20+" },
    { label: "High Score", value: "JMD $8M+" },
    { label: "Mode", value: "Co-op Ready" }
  ],
  powerMeters: [
    { label: "Systems Analysis", value: 92 },
    { label: "Workflow Automation", value: 90 },
    { label: "Internal Tools", value: 88 }
  ],
  about: {
    paragraphs: [
      "I am a systems builder with a background in business development, marketing, operations, automation, and software development. My work sits at the intersection of business strategy and technology: I understand how companies operate, where inefficiencies appear, and how to turn those problems into practical systems.",
      "I have built and worked on systems for appliance service operations, real estate management, telemedicine workflows, marketing funnels, reporting, and customer engagement. My experience includes scaling a business to approximately JMD $8M+ monthly revenue, building automation workflows for small businesses, and developing internal systems using Next.js, React, Tailwind CSS, PostgreSQL, Airtable, Google Sheets, Zapier, Make, Microsoft Power Automate, QuickBooks, and HubSpot.",
      "My long-term mission is to build systems that improve human potential, healthspan, business resilience, and operational efficiency — starting with practical tools that help people and organizations make better decisions."
    ],
    highlights: [
      "Cadet Sergeant Instructor — leadership, instruction, and team coordination",
      "Internal appliance technical training — diagnostics, repair workflows, and customer service",
      "Purple Sash in Kung Fu — discipline, consistency, and long-term skill development"
    ]
  },
  services: [
    {
      title: "Business Systems Analysis",
      description:
        "I analyze business workflows, identify inefficiencies, document requirements, and design practical systems that improve operations.",
      icon: "search"
    },
    {
      title: "Workflow Automation",
      description:
        "I build automations that reduce repetitive manual work, improve follow-up, and connect business tools.",
      icon: "workflow"
    },
    {
      title: "Internal Tools Development",
      description:
        "I develop custom dashboards, portals, and operational systems using modern web technologies like Next.js, React, Tailwind CSS, and PostgreSQL.",
      icon: "layout-dashboard"
    },
    {
      title: "Reporting & Operational Visibility",
      description:
        "I create dashboards and tracking systems that help business owners monitor revenue, expenses, jobs, customers, inventory, and performance.",
      icon: "bar-chart-3"
    },
    {
      title: "Growth & Business Development Systems",
      description:
        "I help businesses improve client follow-up, lead tracking, marketing workflows, customer retention, and growth operations.",
      icon: "trending-up"
    }
  ],
  businessImpact: [
    {
      metric: "JMD $8M+",
      label: "Monthly Revenue Scaled",
      detail:
        "Helped scale NJAS Foods Ltd through product expansion, distribution growth, and operational improvement."
    },
    {
      metric: "20+",
      label: "Projects Delivered",
      detail:
        "Automation, web development, and digital systems projects for businesses and service-based clients."
    },
    {
      metric: "End-to-End",
      label: "Operational System Built",
      detail:
        "Full management system for appliance service — customers, jobs, inventory, invoices, and reporting."
    },
    {
      metric: "Multi-Industry",
      label: "Systems Experience",
      detail: "Appliance service, real estate, telemedicine, marketing, and small-business operations."
    }
  ],
  mission: {
    headline: "Mission & Vision",
    statement:
      "I am building toward a future where practical systems, automation, data, and health-focused tools help people live longer, stronger, and more organized lives.",
    focus:
      "I have a long-term interest in healthspan, longevity, telemedicine, wellness systems, and business infrastructure that supports better health outcomes. My practical entry point is building systems that help health-focused businesses track clients, manage follow-up, improve consistency, and deliver better service."
  },
  idealClients: [
    "Service-based businesses",
    "Appliance and technical service companies",
    "Real estate companies",
    "Healthcare and telemedicine startups",
    "Wellness and fitness businesses",
    "Operations-heavy SMBs",
    "Companies needing internal tools or workflow automation"
  ],
  skillCategories: [
    {
      name: "Business Analysis",
      icon: "clipboard-list",
      skills: [
        { name: "Requirements Gathering", level: 94 },
        { name: "Process Mapping", level: 92 },
        { name: "Workflow Analysis", level: 90 },
        { name: "System Documentation", level: 88 },
        { name: "Stakeholder Communication", level: 91 },
        { name: "SOP Development", level: 87 },
        { name: "UAT Support", level: 85 },
        { name: "Process Improvement", level: 90 }
      ]
    },
    {
      name: "Systems & Operations",
      icon: "settings",
      skills: [
        { name: "Internal Tools", level: 91 },
        { name: "Customer Records", level: 90 },
        { name: "Inventory Tracking", level: 88 },
        { name: "Service Management", level: 89 },
        { name: "Job Tracking", level: 90 },
        { name: "Dispatch Workflows", level: 86 },
        { name: "Reporting Dashboards", level: 92 },
        { name: "CRM Workflows", level: 87 }
      ]
    },
    {
      name: "Technology",
      icon: "code-2",
      skills: [
        { name: "Next.js", level: 88 },
        { name: "React", level: 86 },
        { name: "JavaScript", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "PostgreSQL", level: 84 },
        { name: "API Integrations", level: 86 },
        { name: "Git", level: 82 },
        { name: "GitHub", level: 84 }
      ]
    },
    {
      name: "Automation & Tools",
      icon: "zap",
      skills: [
        { name: "Zapier", level: 90 },
        { name: "Make", level: 88 },
        { name: "Power Automate", level: 85 },
        { name: "Airtable", level: 89 },
        { name: "Google Sheets", level: 91 },
        { name: "QuickBooks", level: 82 },
        { name: "HubSpot", level: 84 },
        { name: "Excel", level: 88 }
      ]
    },
    {
      name: "Business Strengths",
      icon: "briefcase",
      skills: [
        { name: "Growth Strategy", level: 90 },
        { name: "Business Development", level: 89 },
        { name: "Client Relationship Mgmt", level: 88 },
        { name: "Sales & Marketing Strategy", level: 87 },
        { name: "Revenue Growth", level: 91 },
        { name: "Market Analysis", level: 86 },
        { name: "Team Leadership", level: 85 },
        { name: "Problem Solving", level: 92 }
      ]
    }
  ],
  projects: [
    {
      title: "Delta Appliances Operational Management System",
      type: "Business Systems",
      status: "In Development",
      role: "Business Systems Analyst / Developer",
      description:
        "An end-to-end operational management system designed to centralize and automate appliance service operations — reducing dependence on scattered manual records and improving operational visibility.",
      features: [
        "Customer records & service history",
        "Appliance repair jobs & technician workflows",
        "Inventory tracking & parts management",
        "Invoices, payments & financial tracking",
        "Reporting dashboards & marketing follow-up"
      ],
      stack: ["Next.js", "PostgreSQL", "React", "Tailwind CSS"],
      accent: "#4dd8ff",
      url: "#"
    },
    {
      title: "Clarke & Waugh Ltd Real Estate Management System",
      type: "Real Estate",
      status: "Delivered",
      role: "Systems Analyst / Developer",
      description:
        "A real estate management system built to organize property records, client information, listings, tasks, communication, and business workflows.",
      features: [
        "Property & client records",
        "Listing management",
        "Task tracking & communication workflows",
        "Reporting structures",
        "Administrative workflow support"
      ],
      stack: ["Web Application", "Business Systems"],
      accent: "#C99A2E",
      url: "#"
    },
    {
      title: "Telemedicine Application",
      type: "Healthcare",
      status: "Delivered",
      role: "Front-End / Systems Developer",
      description:
        "A telemedicine application designed to support patient access, provider interaction, appointment workflows, and digital healthcare communication.",
      features: [
        "Patient onboarding",
        "Appointment management",
        "Consultation access",
        "Service coordination",
        "Accessible front-end user flows"
      ],
      stack: ["React", "Front-End", "Healthcare Workflows"],
      accent: "#0B1F4D",
      url: "#"
    }
  ],
  resume: {
    headline:
      "Business Systems Analyst and Systems Automation Specialist with hands-on experience designing and building operational systems, workflow automations, dashboards, and internal tools for service-based, real estate, healthcare, appliance, and small-business environments. Skilled in gathering requirements, mapping processes, improving workflows, and translating business needs into practical systems using Next.js, PostgreSQL, automation tools, and business software. Also brings business development experience from helping scale operations to JMD $8M+ monthly revenue through product expansion, marketing strategy, distribution growth, partnerships, and operational improvement.",
    experience: [
      {
        role: "Business Systems Analyst / Systems Automation Specialist",
        company: "Delta Appliances",
        location: "Kingston, Jamaica",
        dates: "Jan 2025 – Present",
        points: [
          "Designing and building a full operational management system to automate customer records, service jobs, appliance repair workflows, inventory tracking, invoices, technician activity, reporting, and marketing follow-up.",
          "Gather business requirements from daily operations and translate manual processes into structured workflows, dashboards, user flows, and data models.",
          "Build core system functionality using Next.js and PostgreSQL to centralize business information and reduce dependence on scattered manual records.",
          "Create workflows for tracking customers, appliances, repair status, parts, service requests, payments, inventory, invoices, and operational reports.",
          "Improve visibility into revenue, expenses, cash flow, job status, and business performance through reporting and financial tracking systems.",
          "Identify bottlenecks, duplicated work, and loss points, then design controls and automation flows to improve accountability."
        ]
      },
      {
        role: "Director of Growth & Strategy",
        company: "NJAS Foods Ltd",
        location: "Kingston, Jamaica",
        dates: "2018 – 2023",
        points: [
          "Scaled business operations to approximately JMD $8M+ in monthly revenue.",
          "Expanded the business into the health and wellness market.",
          "Developed and executed growth strategies to identify new customer segments, strengthen product positioning, and diversify revenue streams.",
          "Built distribution channels, partnerships, supplier relationships, and sales processes to support growth.",
          "Led marketing strategy, customer acquisition, retention, promotional planning, and brand positioning.",
          "Designed processes that improved efficiency, profitability, fulfillment, and team coordination."
        ]
      },
      {
        role: "Systems Automation & Front-End Developer",
        company: "Trexiti / Freelance",
        location: "Remote",
        dates: "2019 – Present",
        points: [
          "Delivered 20+ automation, web development, and digital systems projects.",
          "Built web applications, business websites, dashboards, landing pages, and internal tools.",
          "Worked directly with clients to gather requirements, define scope, map workflows, explain technical options, and deliver practical business solutions.",
          "Created systems for real estate management, appliance operations, telemedicine workflows, marketing funnels, reporting, and customer engagement.",
          "Used React, Next.js, Tailwind CSS, PostgreSQL, automation tools, and API integrations."
        ]
      }
    ],
    education: [
      {
        degree: "Associate Degree in Natural Sciences",
        school: "Institution — to be confirmed",
        dates: "Completed"
      },
      {
        degree:
          "Coursework toward Bachelor's Degree in Actuarial Science; additional studies in Marketing Management",
        school: "University of the West Indies, Mona Campus",
        dates: "2012 – 2016"
      },
      {
        degree: "Entrepreneurship Certificates",
        school: "Business ownership, growth, and commercial development training",
        dates: "Issuer and dates — to be confirmed"
      }
    ],
    achievements: [
      "Scaled NJAS Foods Ltd to approximately JMD $8M+ monthly revenue through growth strategy and operational improvement.",
      "Delivered 20+ automation, web development, and digital systems projects for diverse clients.",
      "Built end-to-end operational management system for appliance service operations.",
      "Developed real estate management and telemedicine workflow systems.",
      "Cadet Sergeant Instructor — leadership, instruction, and structured team training."
    ]
  },
  resumeDownloads: [
    { label: "Download Resume", href: "/resume" },
    { label: "Download Business Development Resume", href: "/resume?focus=bd" },
    { label: "Download Business Systems Resume", href: "/resume?focus=systems" }
  ]
};

export function getResumeFocusConfig(focus: ResumeFocus): ResumeFocusConfig {
  if (focus === "bd") {
    return {
      titleSuffix: " | Business Development",
      role: "Director of Growth & Strategy",
      headline:
        "Business development and growth strategy professional with experience scaling operations to JMD $8M+ monthly revenue through product expansion, marketing strategy, distribution growth, partnerships, and operational improvement.",
      experienceFilter: (item) => item.company === "NJAS Foods Ltd",
      skillCategoryNames: ["Business Strengths", "Automation & Tools"],
      achievementsFilter: (item) =>
        item.toLowerCase().includes("revenue") ||
        item.toLowerCase().includes("njas") ||
        item.toLowerCase().includes("leadership")
    };
  }

  if (focus === "systems") {
    return {
      titleSuffix: " | Business Systems",
      role: "Business Systems Analyst & Systems Automation Specialist",
      headline:
        "Business Systems Analyst and Systems Automation Specialist with hands-on experience designing operational systems, workflow automations, dashboards, and internal tools using Next.js, PostgreSQL, React, and automation platforms.",
      experienceFilter: (item) => item.company !== "NJAS Foods Ltd",
      skillCategoryNames: [
        "Business Analysis",
        "Systems & Operations",
        "Technology",
        "Automation & Tools"
      ],
      achievementsFilter: (item) => !item.toLowerCase().includes("njas foods")
    };
  }

  return {
    titleSuffix: "",
    role: portfolioData.role,
    headline: portfolioData.resume.headline,
    experienceFilter: () => true,
    skillCategoryNames: null,
    achievementsFilter: () => true
  };
}

export function parseResumeFocus(value?: string | null): ResumeFocus {
  if (value === "bd" || value === "systems") return value;
  return null;
}
