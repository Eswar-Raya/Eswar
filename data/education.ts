import type { LogoKey } from "@/data/logos";

export type EducationItem = {
  slug: string;
  institution: string;
  logoKey: LogoKey;
  degree: string;
  field: string;
  dates: string;
  coursework: string[];
  outcomes: string[];
  whyThisMatters: string[];
};

export const education: EducationItem[] = [
  {
    slug: "stevens-msis",
    institution: "Stevens Institute of Technology",
    logoKey: "stevens",
    degree: "Master's Degree",
    field: "MS Information Systems",
    dates: "Jan 2024 - May 2025",
    coursework: [
      "Project Management",
      "Data Analytics and Machine Learning",
      "IT Strategy",
      "Python",
      "Digital Innovation",
    ],
    outcomes: [
      "Improved ability to connect technology decisions with business outcomes",
      "Built stronger analytics discipline for execution planning",
      "Strengthened enterprise delivery frameworks for TPM leadership",
    ],
    whyThisMatters: [
      "Supports data-driven program controls for cloud migration planning.",
      "Improves communication and decision quality in multi-stakeholder delivery.",
      "Provides structured grounding for AI-enabled delivery operations.",
    ],
  },
  {
    slug: "aditya-ece",
    institution: "Aditya Engineering College, JNTUK",
    logoKey: "aditya",
    degree: "Bachelor's Degree",
    field: "Electronics and Communication Engineering",
    dates: "Aug 2009 - May 2013",
    coursework: [
      "Digital Electronics",
      "Communication Systems",
      "Signals and Systems",
      "Microprocessors",
      "Network Fundamentals",
    ],
    outcomes: [
      "Built foundational systems engineering and problem-solving capability",
      "Developed core technical reasoning used in infrastructure and migration roles",
    ],
    whyThisMatters: [
      "Provides engineering fundamentals behind platform and migration decisions.",
      "Strengthens technical depth for TPM execution in infrastructure programs.",
    ],
  },
];
