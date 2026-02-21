import type { ServiceIconKey } from "@/lib/iconMap";

export type GrowthPoint = {
  id: string;
  stageIndex: number;
  pointLabel: string;
  stage: string;
  role: string;
  dates: string;
  scopeScore: number;
  growthHighlight: string;
};

export type CompetencyPoint = {
  id: string;
  category:
    | "TPM Delivery"
    | "Cloud Migration"
    | "Linux Modernization"
    | "Stakeholder & Risk"
    | "AI Enablement";
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
    id: "stage-bachelors",
    stageIndex: 1,
    pointLabel: "Bachelor",
    stage: "Bachelor's Degree",
    role: "Electronics and Communication Engineering",
    dates: "Aug 2009 - May 2013",
    scopeScore: 1.0,
    growthHighlight: "Built core systems and analytical engineering foundation",
  },
  {
    id: "stage-tata",
    stageIndex: 2,
    pointLabel: "Tata",
    stage: "Tata",
    role: "Assistant Manager / Technical Engineer",
    dates: "June 2013 - Oct 2016",
    scopeScore: 2.0,
    growthHighlight: "Developed operational reliability and runbook discipline",
  },
  {
    id: "stage-huawei",
    stageIndex: 3,
    pointLabel: "Huawei",
    stage: "Huawei",
    role: "Sr. Technical Engineer",
    dates: "Oct 2016 - May 2017",
    scopeScore: 3.0,
    growthHighlight: "Strengthened release readiness and quality controls",
  },
  {
    id: "stage-ericsson",
    stageIndex: 4,
    pointLabel: "Ericsson",
    stage: "Ericsson",
    role: "Solution Integrator",
    dates: "June 2017 - Nov 2018",
    scopeScore: 4.0,
    growthHighlight: "Scaled dependency-led solution integration execution",
  },
  {
    id: "stage-adecco",
    stageIndex: 5,
    pointLabel: "Adecco",
    stage: "Adecco",
    role: "Sr. Linux Migration Engineer",
    dates: "May 2019 - Jan 2020",
    scopeScore: 5.0,
    growthHighlight: "Operationalized Linux migration and stabilization patterns",
  },
  {
    id: "stage-dxc",
    stageIndex: 6,
    pointLabel: "DXC",
    stage: "DXC Technology",
    role: "Sr. Analyst II – Cloud Engineering",
    dates: "Feb 2020 - Dec 2023",
    scopeScore: 6.8,
    growthHighlight:
      "Executed as Technical PM / Project Manager with discovery and migration specialist tracks",
  },
  {
    id: "stage-masters",
    stageIndex: 7,
    pointLabel: "Master's",
    stage: "Stevens Institute of Technology",
    role: "MS Information Systems",
    dates: "Jan 2024 - May 2025",
    scopeScore: 7.4,
    growthHighlight: "Expanded strategy, analytics, and AI-delivery capability",
  },
  {
    id: "stage-savvy",
    stageIndex: 8,
    pointLabel: "Savvy",
    stage: "Savvy Global Technologies",
    role: "AI Project Manager",
    dates: "July 2025 - Nov 2025",
    scopeScore: 8.0,
    growthHighlight: "Led AI delivery execution with structured governance controls",
  },
];

export const competencyPoints: CompetencyPoint[] = [
  { id: "tpm", category: "TPM Delivery", score: 5.9, iconKey: "tpm" },
  { id: "cloud", category: "Cloud Migration", score: 5.7, iconKey: "cloudMigration" },
  { id: "linux", category: "Linux Modernization", score: 5.6, iconKey: "linux" },
  { id: "risk", category: "Stakeholder & Risk", score: 5.6, iconKey: "stakeholderRisk" },
  { id: "ai", category: "AI Enablement", score: 5.1, iconKey: "aiDelivery" },
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
