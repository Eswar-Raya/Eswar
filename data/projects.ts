import type { ServiceIconKey, ToolIconKey } from "@/lib/iconMap";

export type ProjectCategory =
  | "Infrastructure Transformation"
  | "Cloud Migration Programs"
  | "Applied AI Projects";

export type ToolRef = {
  key: ToolIconKey;
  label: string;
};

export type ProjectDetails = {
  problem: string;
  approach: string[];
  contribution: string[];
  deliverables: string[];
  tools: ToolRef[];
  outcomes: string[];
  artifacts: string[];
};

export type ProjectItem = {
  id: string;
  slug:
    | "enterprise-cloud-migration-program"
    | "data-center-migration-consolidation-program"
    | "hybrid-cloud-linux-modernization-program"
    | "rag-delivery-system"
    | "hybrid-forecasting-decision-support";
  title: string;
  category: ProjectCategory;
  iconKey: ServiceIconKey;
  context: string;
  role: string;
  scope: string;
  bullets: string[];
  tools: ToolRef[];
  details: ProjectDetails;
};

const t = {
  aws: { key: "aws" as const, label: "AWS" },
  azure: { key: "azure" as const, label: "Azure" },
  linux: { key: "linux" as const, label: "Linux (RHEL/SLES/CentOS)" },
  vmware: { key: "vmware" as const, label: "VMware vSphere Replication" },
  cloudendure: { key: "cloudendure" as const, label: "CloudEndure" },
  universalDiscovery: {
    key: "universalDiscovery" as const,
    label: "Universal Discovery",
  },
  powerbi: { key: "powerbi" as const, label: "Power BI" },
  jira: { key: "jira" as const, label: "Jira" },
  serviceNow: { key: "serviceNow" as const, label: "ServiceNow" },
  python: { key: "python" as const, label: "Python" },
  sql: { key: "sql" as const, label: "SQL" },
  langchain: { key: "langchain" as const, label: "LangChain" },
  chroma: { key: "chroma" as const, label: "ChromaDB" },
  ollama: { key: "ollama" as const, label: "Ollama" },
  prompting: { key: "prompting" as const, label: "Prompt Guardrails" },
  ml: { key: "ml" as const, label: "Model Validation" },
  analytics: { key: "analytics" as const, label: "Decision Dashboards" },
} satisfies Record<string, ToolRef>;

export const projects: ProjectItem[] = [
  {
    id: "proj-enterprise-cloud-migration",
    slug: "enterprise-cloud-migration-program",
    title: "Enterprise Cloud Migration Program",
    category: "Cloud Migration Programs",
    iconKey: "cloudMigration",
    context: "DXC Technology | Feb 2020 - Dec 2023",
    role: "Technical Project Manager",
    scope:
      "Directed multi-wave migration delivery for 1000+ Linux servers across enterprise data center to AWS programs.",
    bullets: [
      "Led dependency discovery and migration wave planning using Universal Discovery outputs.",
      "Coordinated approximately 40 engineers across global infra, app, network, and operations teams.",
      "Governed readiness validation, rollback criteria, and production cutover execution.",
    ],
    tools: [
      t.aws,
      t.azure,
      t.linux,
      t.cloudendure,
      t.universalDiscovery,
      t.powerbi,
      t.jira,
      t.serviceNow,
    ],
    details: {
      problem:
        "Enterprise workloads needed migration from data center environments without disrupting business-critical operations.",
      approach: [
        "Structured migration lifecycle from discovery and dependency mapping through cutover and stabilization.",
        "Sequenced workloads into controlled waves based on readiness evidence and dependency risk.",
        "Used governance checkpoints to keep schedule, risk, and stakeholder alignment on track.",
      ],
      contribution: [
        "Directed program planning cadence, RAID governance, and executive reporting.",
        "Aligned global engineering teams on wave sequencing, cutover ownership, and escalation paths.",
        "Maintained delivery controls for validation, rollback strategy, and production readiness.",
      ],
      deliverables: [
        "Migration wave plan and dependency matrix",
        "Cutover runbooks with rollback criteria",
        "Executive dashboards for cost, schedule, and risk visibility",
      ],
      tools: [
        t.aws,
        t.azure,
        t.linux,
        t.cloudendure,
        t.universalDiscovery,
        t.powerbi,
        t.jira,
        t.serviceNow,
      ],
      outcomes: [
        "Delivered multi-wave enterprise migration execution across 1000+ Linux servers.",
        "Drove approximately 15-20% infrastructure cost optimization through migration sequencing.",
        "Improved schedule predictability through RAID governance and executive reporting.",
      ],
      artifacts: [
        "Wave governance framework",
        "Cutover readiness checklist",
        "Executive migration KPI dashboard",
      ],
    },
  },
  {
    id: "proj-data-center-consolidation",
    slug: "data-center-migration-consolidation-program",
    title: "Data Center Migration & Consolidation Program",
    category: "Infrastructure Transformation",
    iconKey: "tpm",
    context: "DXC Technology | Feb 2020 - Dec 2023",
    role: "Technical Project Manager",
    scope:
      "Executed data center to data center and data center to AWS transitions across greenfield and brownfield infrastructure environments.",
    bullets: [
      "Planned migration move groups, maintenance windows, and cross-team cutover communications.",
      "Executed readiness checks, rollback planning, and post-migration validation for production workloads.",
      "Managed delivery governance across engineering teams and change control stakeholders.",
    ],
    tools: [
      t.vmware,
      t.linux,
      t.cloudendure,
      t.jira,
      t.serviceNow,
      t.powerbi,
    ],
    details: {
      problem:
        "Programs required infrastructure consolidation with near-zero downtime expectations and strict production assurance.",
      approach: [
        "Separated workloads into greenfield and brownfield paths with distinct risk controls.",
        "Applied validation-first governance before each move window.",
        "Kept rollback strategy and owner accountability explicit at every cutover gate.",
      ],
      contribution: [
        "Owned planning and execution controls spanning dependency discovery, migration, and stabilization.",
        "Coordinated dependency handoffs across infrastructure and application stakeholders.",
        "Maintained change governance, RAID reporting, and stakeholder communications during transition windows.",
      ],
      deliverables: [
        "Migration readiness checklists",
        "Cutover and rollback execution plans",
        "Post-migration validation reports",
      ],
      tools: [
        t.vmware,
        t.linux,
        t.cloudendure,
        t.jira,
        t.serviceNow,
      ],
      outcomes: [
        "Delivered controlled migration execution across greenfield and brownfield environments.",
        "Maintained rollback-ready delivery posture across production cutover windows.",
        "Improved delivery predictability through structured governance and sequencing.",
      ],
      artifacts: [
        "Migration runbook templates",
        "Rollback decision matrix",
        "Stabilization sign-off checklist",
      ],
    },
  },
  {
    id: "proj-hybrid-cloud-linux-modernization",
    slug: "hybrid-cloud-linux-modernization-program",
    title: "Hybrid Cloud Infrastructure Modernization",
    category: "Infrastructure Transformation",
    iconKey: "linuxModernization",
    context: "DXC Technology | Feb 2020 - Dec 2023",
    role: "Technical Project Manager",
    scope:
      "Modernized Linux workload operations across hybrid cloud environments with repeatable governance, validation, and stabilization patterns.",
    bullets: [
      "Standardized Linux migration runbooks, validation gates, and post-cutover stabilization controls.",
      "Aligned platform modernization milestones with risk visibility, change governance, and operational ownership transfer.",
      "Connected infrastructure execution to cost optimization and service continuity outcomes.",
    ],
    tools: [t.linux, t.aws, t.azure, t.vmware, t.jira, t.serviceNow],
    details: {
      problem:
        "Linux platform estates required modernization without introducing instability or delivery drift.",
      approach: [
        "Established repeatable runbook patterns across migration waves and operating environments.",
        "Integrated governance signals (RAID, readiness checks, and cutover criteria) into execution cadence.",
        "Applied post-migration stabilization and ownership handover controls.",
      ],
      contribution: [
        "Led Linux modernization delivery planning and coordination across technical teams.",
        "Maintained migration lifecycle governance from discovery through stabilization.",
        "Ensured production readiness evidence before major platform transitions.",
      ],
      deliverables: [
        "Linux migration playbooks",
        "Readiness and rollback standards",
        "Post-cutover stabilization tracking",
      ],
      tools: [t.linux, t.aws, t.azure, t.vmware, t.jira, t.serviceNow],
      outcomes: [
        "Established repeatable Linux platform modernization patterns for migration waves.",
        "Improved production cutover reliability through validation and rollback controls.",
        "Strengthened operational handover readiness after migration activities.",
      ],
      artifacts: [
        "Linux readiness checklist",
        "Migration wave SOPs",
        "Operations handover pack",
      ],
    },
  },
  {
    id: "proj-rag-delivery",
    slug: "rag-delivery-system",
    title: "Retrieval-Augmented Generation (RAG) Delivery System",
    category: "Applied AI Projects",
    iconKey: "aiDelivery",
    context: "Applied AI Project | Secondary Capability",
    role: "Technical Project Manager",
    scope:
      "Built a locally hosted RAG workflow to support source-grounded responses and governance-minded delivery decisions.",
    bullets: [
      "Designed ingestion, chunking, embedding, indexing, and retrieval orchestration workflow.",
      "Implemented citation validation and refusal handling guardrails for grounded outputs.",
      "Connected model behavior reporting to stakeholder-facing decision support dashboards.",
    ],
    tools: [t.python, t.langchain, t.chroma, t.ollama, t.prompting],
    details: {
      problem:
        "Decision support use cases required reliable AI outputs with traceable source grounding and controlled risk.",
      approach: [
        "Built local-first retrieval architecture with explicit source linkage.",
        "Added prompt and output controls to reduce ungrounded responses.",
        "Integrated evaluation checkpoints before sharing outputs with stakeholders.",
      ],
      contribution: [
        "Defined solution architecture and implementation path.",
        "Established guardrails for accuracy and response behavior.",
        "Aligned AI workflow outputs to program reporting needs.",
      ],
      deliverables: [
        "Local RAG architecture",
        "Prompt/output validation guardrails",
        "Source-grounded response workflow",
      ],
      tools: [t.python, t.langchain, t.chroma, t.ollama, t.prompting],
      outcomes: [
        "Improved confidence in AI-assisted summaries through source-grounded output controls.",
        "Demonstrated governance-minded applied AI capability as a complement to infrastructure delivery leadership.",
      ],
      artifacts: [
        "RAG workflow design",
        "Validation checklist",
        "Evaluation summary dashboard",
      ],
    },
  },
  {
    id: "proj-hybrid-forecasting",
    slug: "hybrid-forecasting-decision-support",
    title: "Hybrid Forecasting & Decision Support Model",
    category: "Applied AI Projects",
    iconKey: "dashboards",
    context: "Applied AI Project | Secondary Capability",
    role: "Technical Project Manager",
    scope:
      "Developed a hybrid forecasting workflow combining time-series baselines with decision-support prioritization logic.",
    bullets: [
      "Structured data preparation, model evaluation, and quality checkpoint cadence.",
      "Built interpretable dashboard outputs for operational planning decisions.",
      "Introduced validation and review controls to keep assumptions explicit.",
    ],
    tools: [t.python, t.sql, t.ml, t.analytics, t.powerbi],
    details: {
      problem:
        "Operational planning needed interpretable forecasting outputs rather than opaque model-only predictions.",
      approach: [
        "Combined time-series forecasting with practical prioritization rules for decision support.",
        "Validated outputs against operational constraints and stakeholder expectations.",
        "Presented results in dashboard format for fast review and actionability.",
      ],
      contribution: [
        "Framed use case, success criteria, and delivery checkpoints.",
        "Aligned technical outputs to business review cadence.",
        "Ensured governance and traceability in model reporting.",
      ],
      deliverables: [
        "Hybrid forecasting workflow",
        "Model validation summary",
        "Decision-support dashboard",
      ],
      tools: [t.python, t.sql, t.ml, t.analytics, t.powerbi],
      outcomes: [
        "Delivered interpretable forecasting views for operational decision support.",
        "Showed practical AI/analytics application under governance constraints.",
      ],
      artifacts: [
        "Forecast evaluation report",
        "Decision-prioritization matrix",
        "Operational dashboard snapshots",
      ],
    },
  },
];

export const projectCategories: ProjectCategory[] = [
  "Infrastructure Transformation",
  "Cloud Migration Programs",
  "Applied AI Projects",
];

export const featuredProjectSlugs: ProjectItem["slug"][] = [
  "enterprise-cloud-migration-program",
  "data-center-migration-consolidation-program",
  "hybrid-cloud-linux-modernization-program",
];
