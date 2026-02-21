import type { ServiceIconKey, ToolIconKey } from "@/lib/iconMap";

export type CompetencyPoint = {
  id: string;
  category:
    | "TPM Delivery"
    | "Cloud Migration"
    | "Linux Modernization"
    | "Stakeholder & Risk"
    | "AI Enablement"
    | "LLM / RAG Delivery"
    | "ML & Analytics";
  score: number;
  iconKey: ServiceIconKey;
};

export type AiMlSkill = {
  id: string;
  title: string;
  summary: string;
  toolKey: ToolIconKey;
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
  { id: "ai", category: "AI Enablement", score: 5.4, iconKey: "aiDelivery" },
  { id: "llm-rag", category: "LLM / RAG Delivery", score: 5.0, iconKey: "aiDelivery" },
  { id: "ml-analytics", category: "ML & Analytics", score: 5.2, iconKey: "dashboards" },
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

export const aiMlSkills: AiMlSkill[] = [
  {
    id: "aiml-rag",
    title: "RAG Workflow Design",
    summary:
      "Built local-first retrieval workflows using chunking, vector indexing, and source-grounded response patterns.",
    toolKey: "chroma",
  },
  {
    id: "aiml-llm-orchestration",
    title: "LLM Orchestration",
    summary:
      "Structured local model execution with Ollama and LlamaIndex for planning, synthesis, and controlled automation.",
    toolKey: "ollama",
  },
  {
    id: "aiml-prompt-governance",
    title: "Prompt & Output Governance",
    summary:
      "Applied human-in-the-loop validation, traceable prompts, and quality checkpoints for delivery-facing AI outputs.",
    toolKey: "prompting",
  },
  {
    id: "aiml-analytics",
    title: "ML-Driven Delivery Insights",
    summary:
      "Used analytics and ML coursework outcomes to identify delivery trends, risks, and execution bottlenecks.",
    toolKey: "ml",
  },
  {
    id: "aiml-python-fastapi",
    title: "Python + FastAPI Integration",
    summary:
      "Integrated Python automation and FastAPI services for local AI-enabled portfolio and reporting use cases.",
    toolKey: "fastapi",
  },
];
