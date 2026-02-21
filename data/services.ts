import type { ServiceIconKey } from "@/lib/iconMap";

export type GrowthPoint = {
  id: string;
  stage: string;
  year: number;
  scopeScore: number;
  company: string;
  role: string;
  skillGrowth: string;
};

export type CompetencyPoint = {
  id: string;
  category: "TPM Delivery" | "Cloud Migration" | "Linux" | "Stakeholders/Risk" | "Automation/AI";
  score: number;
  iconKey: ServiceIconKey;
};

export type ServiceItem = {
  id: string;
  slug: string;
  title: string;
  iconKey: ServiceIconKey;
  value: string;
  filterCategory: "Enterprise Migration Programs" | "Linux Modernization" | "AI/Automation";
};

export const growthPoints: GrowthPoint[] = [
  {
    id: "tata-2013",
    stage: "Tata",
    year: 2013,
    scopeScore: 1.2,
    company: "Tata",
    role: "Assistant Manager / Technical Engineer",
    skillGrowth: "Operational execution and reliability discipline",
  },
  {
    id: "huawei-2016",
    stage: "Huawei",
    year: 2016,
    scopeScore: 2.1,
    company: "Huawei",
    role: "Sr. Technical Engineer",
    skillGrowth: "Release readiness and production control",
  },
  {
    id: "ericsson-2017",
    stage: "Ericsson",
    year: 2017,
    scopeScore: 2.9,
    company: "Ericsson",
    role: "Solution Integrator",
    skillGrowth: "Integration sequencing and dependency governance",
  },
  {
    id: "adecco-2019",
    stage: "Adecco",
    year: 2019,
    scopeScore: 3.8,
    company: "Adecco",
    role: "Sr. Linux Migration Engineer",
    skillGrowth: "Migration runbook execution and stabilization",
  },
  {
    id: "dxc-2020",
    stage: "DXC",
    year: 2020,
    scopeScore: 5,
    company: "DXC Technology",
    role: "Sr. Analyst II – Cloud Engineering",
    skillGrowth: "Technical PM governance and enterprise wave delivery",
  },
  {
    id: "dxc-2023",
    stage: "DXC",
    year: 2023,
    scopeScore: 5.8,
    company: "DXC Technology",
    role: "Sr. Analyst II – Cloud Engineering",
    skillGrowth: "Cross-client migration program leadership",
  },
  {
    id: "masters-2024",
    stage: "Masters",
    year: 2024,
    scopeScore: 5.9,
    company: "Stevens Institute of Technology",
    role: "MS Information Systems",
    skillGrowth: "Advanced TPM, analytics, and AI delivery strategy",
  },
  {
    id: "savvy-2025",
    stage: "Savvy GT",
    year: 2025,
    scopeScore: 6,
    company: "Savvy Global Technologies",
    role: "AI Project Manager",
    skillGrowth: "AI-enabled delivery governance and execution leadership",
  },
];

export const competencyPoints: CompetencyPoint[] = [
  { id: "tpm", category: "TPM Delivery", score: 5.8, iconKey: "tpm" },
  { id: "cloud", category: "Cloud Migration", score: 5.6, iconKey: "cloudMigration" },
  { id: "linux", category: "Linux", score: 5.4, iconKey: "linux" },
  { id: "risk", category: "Stakeholders/Risk", score: 5.5, iconKey: "stakeholderRisk" },
  { id: "ai", category: "Automation/AI", score: 4.9, iconKey: "aiDelivery" },
];

export const services: ServiceItem[] = [
  {
    id: "svc-cloud",
    slug: "cloud-migration-programs",
    title: "Cloud Migration Programs",
    iconKey: "cloudMigration",
    value: "Enterprise wave planning with cutover governance, rollback readiness, and stabilization control.",
    filterCategory: "Enterprise Migration Programs",
  },
  {
    id: "svc-tpm",
    slug: "technical-program-management",
    title: "Technical Program Management",
    iconKey: "tpm",
    value: "Cross-functional delivery leadership across infra, application, network, and security stakeholders.",
    filterCategory: "Enterprise Migration Programs",
  },
  {
    id: "svc-linux",
    slug: "linux-modernization",
    title: "Linux Migration & Modernization",
    iconKey: "linux",
    value: "Factory-style Linux transition execution using baseline checks, runbooks, and post-cutover stabilization.",
    filterCategory: "Linux Modernization",
  },
  {
    id: "svc-risk",
    slug: "stakeholder-risk-management",
    title: "Stakeholder & Risk Management",
    iconKey: "stakeholderRisk",
    value: "RAID governance, escalation routing, and decision cadence for complex enterprise delivery.",
    filterCategory: "Enterprise Migration Programs",
  },
  {
    id: "svc-dash",
    slug: "delivery-intelligence-dashboards",
    title: "Delivery Intelligence Dashboards",
    iconKey: "dashboards",
    value: "Program visibility using KPI and risk signal dashboards for leadership-level execution tracking.",
    filterCategory: "Enterprise Migration Programs",
  },
  {
    id: "svc-ai",
    slug: "ai-enabled-delivery-ops",
    title: "AI-Enabled Delivery Ops",
    iconKey: "aiDelivery",
    value: "Human-in-the-loop AI workflows for planning, risk sensing, and reporting acceleration.",
    filterCategory: "AI/Automation",
  },
];
