import type { ServiceIconKey, ToolIconKey } from "@/lib/iconMap";

export type ProjectCategory =
  | "Enterprise Migration Programs"
  | "Linux Modernization"
  | "AI/Automation";

export type ToolRef = {
  key: ToolIconKey;
  label: string;
};

export type ProjectDetails = {
  problem: string;
  approach: string[];
  contribution: string[];
  tools: ToolRef[];
  outcomes: string[];
  artifacts: string[];
};

export type ProjectItem = {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  iconKey: ServiceIconKey;
  clientProgram: string;
  role: string;
  bullets: string[];
  tools: ToolRef[];
  details: ProjectDetails;
};

const t = {
  aws: { key: "aws" as const, label: "AWS" },
  cloudendure: { key: "cloudendure" as const, label: "CloudEndure" },
  linux: { key: "linux" as const, label: "Linux" },
  jira: { key: "jira" as const, label: "Jira" },
  pmatt: { key: "pmatt" as const, label: "PMATT" },
  powerbi: { key: "powerbi" as const, label: "Power BI" },
  sql: { key: "sql" as const, label: "SQL" },
  python: { key: "python" as const, label: "Python" },
  vmware: { key: "vmware" as const, label: "VMware" },
  universalDiscovery: {
    key: "universalDiscovery" as const,
    label: "Universal Discovery",
  },
  serviceNow: { key: "serviceNow" as const, label: "ServiceNow" },
  agile: { key: "agile" as const, label: "Agile/Scrum/SAFe" },
  shell: { key: "shell" as const, label: "Shell" },
  git: { key: "git" as const, label: "Git" },
  docker: { key: "docker" as const, label: "Docker" },
};

export const projects: ProjectItem[] = [
  {
    id: "prj-att",
    slug: "att-enterprise-transition",
    title: "AT&T Infrastructure Transition Program",
    category: "Enterprise Migration Programs",
    iconKey: "tpm",
    clientProgram: "AT&T (delivered via DXC environment)",
    role: "Sr. Analyst II – Cloud Engineering (Project Manager)",
    bullets: [
      "Managed dependency-driven transition sequencing across technical workstreams.",
      "Improved readiness visibility through structured governance checkpoints.",
      "Standardized cutover and rollback readiness communication.",
    ],
    tools: [t.pmatt, t.jira, t.serviceNow, t.powerbi],
    details: {
      problem:
        "Large infrastructure transition dependencies increased execution risk and schedule instability.",
      approach: [
        "Established governance cadence with scope, risk, and readiness checkpoints.",
        "Aligned technical and business owners on cutover criteria and fallback controls.",
        "Maintained execution signal tracking with status and risk summaries.",
      ],
      contribution: [
        "Owned project-level governance and stakeholder cadence.",
        "Maintained dependency, risk, and milestone control.",
        "Coordinated decision-making and escalation pathways for blockers.",
      ],
      tools: [t.pmatt, t.jira, t.serviceNow, t.powerbi, t.agile],
      outcomes: [
        "Improved cutover readiness consistency",
        "Reduced unplanned dependency escalations",
        "Higher confidence in transition execution windows",
      ],
      artifacts: [
        "Transition dependency board (placeholder)",
        "Program status dashboard (placeholder)",
      ],
    },
  },
  {
    id: "prj-workforce",
    slug: "workforce-resilience-aws-program",
    title: "Workforce Resilience On-Prem to AWS Program",
    category: "Enterprise Migration Programs",
    iconKey: "cloudMigration",
    clientProgram: "Workforce Resilience (delivered via DXC environment)",
    role: "Sr. Analyst II – Cloud Engineering (Project Manager)",
    bullets: [
      "Planned and executed Linux server migration waves to AWS.",
      "Used discovery-to-wave planning to improve migration readiness.",
      "Applied controlled cutover and rollback governance with CloudEndure.",
    ],
    tools: [t.aws, t.cloudendure, t.linux, t.universalDiscovery, t.jira],
    details: {
      problem:
        "Legacy on-prem workloads required controlled migration to AWS with minimal operational impact.",
      approach: [
        "Mapped discovery outputs into executable migration wave plans.",
        "Applied CloudEndure for repeatable Linux server migration execution.",
        "Maintained pre/post-cutover validation and rollback criteria.",
      ],
      contribution: [
        "Led migration governance and stakeholder coordination.",
        "Managed readiness evidence, dependency tracking, and change control.",
        "Directed stabilization and issue burn-down after cutover.",
      ],
      tools: [t.aws, t.cloudendure, t.linux, t.universalDiscovery, t.jira, t.pmatt],
      outcomes: [
        "Improved migration wave readiness and execution consistency",
        "Reduced cutover risk through structured controls",
      ],
      artifacts: [
        "Wave plan board (placeholder)",
        "Cutover validation checklist (placeholder)",
      ],
    },
  },
  {
    id: "prj-linux-modernization",
    slug: "linux-modernization-factory",
    title: "Linux Migration & Modernization Factory",
    category: "Linux Modernization",
    iconKey: "linux",
    clientProgram: "Client: confidential",
    role: "Sr. Linux Migration Engineer / Sr. Analyst II – Cloud Engineering",
    bullets: [
      "Standardized Linux migration playbooks across mixed environments.",
      "Improved stabilization quality with baseline and validation checks.",
      "Reduced operational handover ambiguity with SOP discipline.",
    ],
    tools: [t.linux, t.vmware, t.shell, t.jira],
    details: {
      problem:
        "Non-standard Linux migration execution increased risk across cutovers and stabilization.",
      approach: [
        "Defined migration baselines and runbook-led execution checkpoints.",
        "Implemented rollback-ready controls for high-risk migration windows.",
        "Tracked post-cutover issue patterns for early stabilization.",
      ],
      contribution: [
        "Built repeatable runbook framework and migration SOPs.",
        "Executed migration activities and defect triage.",
        "Aligned handover readiness across support teams.",
      ],
      tools: [t.linux, t.vmware, t.shell, t.jira, t.serviceNow],
      outcomes: [
        "Improved migration reliability across Linux workload groups",
        "Shortened stabilization and handover cycles",
      ],
      artifacts: [
        "Linux migration SOP template (placeholder)",
        "Post-cutover stabilization log (placeholder)",
      ],
    },
  },
  {
    id: "prj-ai-governance",
    slug: "supplychainengine-ai-governance",
    title: "SupplyChainEngine AI Delivery Enablement",
    category: "AI/Automation",
    iconKey: "aiDelivery",
    clientProgram: "Client: confidential",
    role: "AI Project Manager",
    bullets: [
      "Implemented milestone-based governance for AI delivery tracks.",
      "Improved risk and progress signal quality through structured updates.",
      "Aligned AI activities with operational constraints and review controls.",
    ],
    tools: [t.python, t.jira, t.powerbi, t.agile],
    details: {
      problem:
        "AI initiative execution lacked consistent governance and stakeholder visibility.",
      approach: [
        "Defined lifecycle checkpoints for planning, validation, and release.",
        "Introduced recurring risk and status synthesis workflows.",
        "Maintained human-in-the-loop quality controls for key outputs.",
      ],
      contribution: [
        "Owned AI track planning and governance model.",
        "Aligned stakeholder priorities and execution cadence.",
        "Maintained decision logs and risk communication loops.",
      ],
      tools: [t.python, t.jira, t.powerbi, t.agile, t.git],
      outcomes: [
        "Improved delivery clarity for AI milestones",
        "Better stakeholder confidence through auditable execution flow",
      ],
      artifacts: [
        "AI governance flow diagram (placeholder)",
        "Risk and status report sample (placeholder)",
      ],
    },
  },
  {
    id: "prj-local-llm",
    slug: "local-llm-delivery-ops",
    title: "Local LLM Delivery Ops Assistant",
    category: "AI/Automation",
    iconKey: "aiDelivery",
    clientProgram: "Internal initiative",
    role: "AI Project Manager",
    bullets: [
      "Built local-first reporting assistant workflows for delivery operations.",
      "Reduced repetitive reporting work using template-based AI summaries.",
      "Maintained approval checkpoints for output quality and traceability.",
    ],
    tools: [t.python, t.docker, t.git, t.jira],
    details: {
      problem:
        "Manual status and risk reporting consumed bandwidth and delayed decision signals.",
      approach: [
        "Designed a local LLM pipeline for extracting and summarizing delivery notes.",
        "Applied structured templates for status, RAID, and action summaries.",
        "Added review checkpoints before any stakeholder distribution.",
      ],
      contribution: [
        "Defined technical architecture and governance boundaries.",
        "Implemented summary flow with validation controls.",
        "Measured turnaround improvements and output consistency gains.",
      ],
      tools: [t.python, t.docker, t.git, t.jira, t.sql],
      outcomes: [
        "Faster reporting cycle time",
        "Higher consistency in stakeholder-facing updates",
      ],
      artifacts: [
        "Workflow architecture diagram (placeholder)",
        "Weekly summary output sample (placeholder)",
      ],
    },
  },
];

export const projectCategories: ProjectCategory[] = [
  "Enterprise Migration Programs",
  "Linux Modernization",
  "AI/Automation",
];

export const featuredProjectSlugs = [
  "workforce-resilience-aws-program",
  "att-enterprise-transition",
  "supplychainengine-ai-governance",
];
