import type { EducationIconKey } from "@/lib/iconMap";

export type EducationItem = {
  id: string;
  slug: string;
  institution: string;
  iconKey: EducationIconKey;
  degree: string;
  field: string;
  dates: string;
  coursework: string[];
  supportText: string;
};

export const education: EducationItem[] = [
  {
    id: "edu-masters",
    slug: "stevens-msis",
    institution: "Stevens Institute of Technology",
    iconKey: "stevens",
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
    supportText:
      "This degree strengthened my ability to lead technical programs with data-backed planning, enterprise strategy alignment, and modernization discipline.",
  },
  {
    id: "edu-bachelors",
    slug: "aditya-ece",
    institution: "Aditya Engineering College, JNTUK",
    iconKey: "bachelors",
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
    supportText:
      "This foundation built core systems thinking that supports infrastructure decision-making and migration execution rigor.",
  },
];
