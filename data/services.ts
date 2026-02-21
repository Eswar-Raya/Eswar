import type { ServiceIconKey } from "@/lib/iconMap";

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
  filterCategory:
    | "Cloud & Infrastructure Strategy"
    | "Service/Product Innovation"
    | "AI Strategy & Governance"
    | "Process Innovation (BPR)";
};

export const competencyPoints: CompetencyPoint[] = [
  { id: "tpm", category: "TPM Delivery", score: 5.9, iconKey: "tpm" },
  { id: "cloud", category: "Cloud Migration", score: 5.7, iconKey: "cloudMigration" },
  { id: "linux", category: "Linux Modernization", score: 5.6, iconKey: "linuxModernization" },
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
    filterCategory: "Cloud & Infrastructure Strategy",
  },
  {
    id: "svc-tpm",
    slug: "technical-program-management",
    title: "Technical Program Management",
    iconKey: "tpm",
    value: "Cross-functional delivery leadership across infra, application, network, and security stakeholders.",
    filterCategory: "Process Innovation (BPR)",
  },
  {
    id: "svc-linux",
    slug: "linux-modernization",
    title: "Linux Migration & Modernization",
    iconKey: "linuxModernization",
    value: "Factory-style Linux transition execution using baseline checks, runbooks, and post-cutover stabilization.",
    filterCategory: "Cloud & Infrastructure Strategy",
  },
  {
    id: "svc-risk",
    slug: "stakeholder-risk-management",
    title: "Stakeholder & Risk Management",
    iconKey: "stakeholderRisk",
    value: "RAID governance, escalation routing, and decision cadence for complex enterprise delivery.",
    filterCategory: "Process Innovation (BPR)",
  },
  {
    id: "svc-dash",
    slug: "delivery-intelligence-dashboards",
    title: "Delivery Dashboards & Reporting",
    iconKey: "dashboards",
    value: "Program visibility using KPI and risk signal dashboards for leadership-level execution tracking.",
    filterCategory: "Service/Product Innovation",
  },
  {
    id: "svc-ai",
    slug: "ai-enabled-delivery-ops",
    title: "AI-Enabled Delivery Optimization",
    iconKey: "aiDelivery",
    value: "Human-in-the-loop AI workflows for planning, risk sensing, and reporting acceleration.",
    filterCategory: "AI Strategy & Governance",
  },
];
