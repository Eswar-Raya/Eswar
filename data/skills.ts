export type GrowthPoint = {
  year: string;
  score: number;
  company: string;
  role: string;
};

export type ServiceItem = {
  slug: string;
  title: string;
  icon: string;
  summary: string;
  projectFilter: "Enterprise Migration" | "Linux Modernization" | "AI/Automation";
};

export type CompetencyItem = {
  slug: string;
  label: string;
  score: number;
  icon: string;
};

export const careerGrowth: GrowthPoint[] = [
  {
    year: "2013",
    score: 1,
    company: "Tata",
    role: "Assistant Manager / Technical Engineer",
  },
  {
    year: "2016",
    score: 2,
    company: "Huawei",
    role: "Sr. Technical Engineer",
  },
  {
    year: "2017",
    score: 3,
    company: "Ericsson",
    role: "Solution Integrator",
  },
  {
    year: "2019",
    score: 4,
    company: "Adecco",
    role: "Sr. Linux Migration Engineer",
  },
  {
    year: "2020",
    score: 5,
    company: "DXC Technology",
    role: "Sr. Analyst II – Cloud Engineering",
  },
  {
    year: "2025",
    score: 6,
    company: "Savvy Global Technologies",
    role: "AI Project Manager",
  },
];

export const services: ServiceItem[] = [
  {
    slug: "cloud-migration-programs",
    title: "Cloud Migration Programs",
    icon: "cloud",
    summary: "Wave-based migration governance with readiness gates and rollback control.",
    projectFilter: "Enterprise Migration",
  },
  {
    slug: "technical-program-management",
    title: "Technical Program Management",
    icon: "timeline",
    summary: "Cross-team delivery execution with risk, dependency, and decision controls.",
    projectFilter: "Enterprise Migration",
  },
  {
    slug: "linux-modernization",
    title: "Linux Migration & Modernization",
    icon: "linux",
    summary: "Factory-style migration playbooks for Linux workloads and stabilization.",
    projectFilter: "Linux Modernization",
  },
  {
    slug: "stakeholder-risk",
    title: "Stakeholder & Risk Management",
    icon: "governance",
    summary: "Structured RAID management with escalation paths for enterprise programs.",
    projectFilter: "Enterprise Migration",
  },
  {
    slug: "delivery-intelligence",
    title: "Delivery Intelligence Dashboards",
    icon: "powerbi",
    summary: "Program signal dashboards for status, blockers, throughput, and risks.",
    projectFilter: "Enterprise Migration",
  },
  {
    slug: "ai-delivery-ops",
    title: "AI-Enabled Delivery Ops",
    icon: "ai",
    summary: "AI workflows for planning and reporting, governed by human review.",
    projectFilter: "AI/Automation",
  },
];

export const competencies: CompetencyItem[] = [
  { slug: "tpm", label: "Technical Program Mgmt", score: 5.8, icon: "timeline" },
  { slug: "cloud", label: "Cloud Delivery", score: 5.5, icon: "cloud" },
  { slug: "linux", label: "Linux Migration", score: 5.4, icon: "linux" },
  { slug: "stakeholders", label: "Stakeholder Alignment", score: 5.3, icon: "governance" },
  { slug: "delivery-ops", label: "Delivery Operations", score: 5.1, icon: "dashboard" },
  { slug: "ai-enablement", label: "AI Enablement", score: 4.7, icon: "ai" },
];
