import type { ProjectCategory } from "@/data/projects";
import type { ServiceIconKey, ToolIconKey } from "@/lib/iconMap";

export type CompetencyPoint = {
  id: string;
  category:
    | "Infrastructure Transformation"
    | "Cloud Migration Delivery"
    | "Linux Platform Modernization"
    | "Program Governance (RAID)"
    | "Global Engineering Coordination"
    | "Applied AI Delivery (Secondary)";
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
  filterCategory: ProjectCategory;
};

export type CapabilityGroup = {
  id: string;
  title:
    | "Cloud Platforms"
    | "Infrastructure"
    | "Migration & Discovery"
    | "Program Delivery"
    | "Data / AI";
  items: string[];
};

export const competencyPoints: CompetencyPoint[] = [
  {
    id: "infra-transformation",
    category: "Infrastructure Transformation",
    score: 6.0,
    iconKey: "tpm",
  },
  {
    id: "cloud-migration",
    category: "Cloud Migration Delivery",
    score: 5.9,
    iconKey: "cloudMigration",
  },
  {
    id: "linux-modernization",
    category: "Linux Platform Modernization",
    score: 5.8,
    iconKey: "linuxModernization",
  },
  {
    id: "raids",
    category: "Program Governance (RAID)",
    score: 5.8,
    iconKey: "stakeholderRisk",
  },
  {
    id: "global-coordination",
    category: "Global Engineering Coordination",
    score: 5.7,
    iconKey: "dashboards",
  },
  {
    id: "applied-ai",
    category: "Applied AI Delivery (Secondary)",
    score: 4.9,
    iconKey: "aiDelivery",
  },
];

export const services: ServiceItem[] = [
  {
    id: "svc-infra-transformation",
    slug: "infrastructure-transformation-programs",
    title: "Infrastructure Transformation",
    iconKey: "tpm",
    value:
      "Lead enterprise transformation initiatives across telecom and global enterprise environments.",
    filterCategory: "Infrastructure Transformation",
  },
  {
    id: "svc-cloud-migration",
    slug: "cloud-migration-programs",
    title: "Cloud Migration Programs",
    iconKey: "cloudMigration",
    value:
      "Deliver data center to AWS and data center to data center migration programs with multi-wave planning.",
    filterCategory: "Cloud Migration Programs",
  },
  {
    id: "svc-linux",
    slug: "linux-platform-modernization",
    title: "Linux Platform Modernization",
    iconKey: "linuxModernization",
    value:
      "Modernize Linux platforms with readiness validation, rollback strategy, and controlled production cutovers.",
    filterCategory: "Infrastructure Transformation",
  },
  {
    id: "svc-governance",
    slug: "program-governance-delivery-leadership",
    title: "Program Governance & Delivery Leadership",
    iconKey: "dashboards",
    value:
      "Run RAID governance, dependency tracking, cross-functional coordination, and executive-ready reporting.",
    filterCategory: "Cloud Migration Programs",
  },
];

export const capabilityGroups: CapabilityGroup[] = [
  {
    id: "cap-cloud",
    title: "Cloud Platforms",
    items: ["AWS", "Azure"],
  },
  {
    id: "cap-infra",
    title: "Infrastructure",
    items: [
      "Linux (RHEL, SLES, CentOS)",
      "VMware",
      "High Availability (HA)",
      "Disaster Recovery (DR)",
    ],
  },
  {
    id: "cap-migration",
    title: "Migration & Discovery",
    items: [
      "CloudEndure",
      "Universal Discovery",
      "VMware vSphere Replication",
      "Carbonite Double-Take",
      "Readiness Validation",
      "Rollback Strategy",
    ],
  },
  {
    id: "cap-program",
    title: "Program Delivery",
    items: [
      "RAID Governance",
      "Executive Reporting",
      "Stakeholder Management",
      "Cutover Planning",
      "Migration Wave Planning",
      "Global Delivery Coordination",
    ],
  },
  {
    id: "cap-ai",
    title: "Data / AI",
    items: [
      "Python",
      "SQL",
      "LangChain",
      "ChromaDB",
      "Ollama",
      "Model Validation & Evaluation Oversight",
    ],
  },
];

export const aiMlSkills: AiMlSkill[] = [
  {
    id: "aiml-rag",
    title: "RAG Delivery System",
    summary:
      "Designed a locally hosted RAG system using LangChain, ChromaDB, and Ollama with source-grounded response controls.",
    toolKey: "langchain",
  },
  {
    id: "aiml-forecasting",
    title: "Hybrid Forecasting / Decision Support",
    summary:
      "Built a hybrid forecasting workflow with interpretable outputs, operational prioritization logic, and dashboard reporting.",
    toolKey: "ml",
  },
  {
    id: "aiml-governance",
    title: "Prompt Guardrails and Validation",
    summary:
      "Applied refusal handling, citation checks, and review checkpoints to keep applied AI outputs auditable.",
    toolKey: "prompting",
  },
];
