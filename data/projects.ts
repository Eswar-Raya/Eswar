import type { ServiceIconKey, ToolIconKey } from "@/lib/iconMap";

export type ProjectCategory =
  | "Cloud & Infrastructure Strategy"
  | "Service/Product Innovation"
  | "AI Strategy & Governance"
  | "Process Innovation (BPR)";

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
    | "cloud-migration-strategy"
    | "tryb4ufly"
    | "sllm-business"
    | "memoria"
    | "netflix-bpr";
  title: string;
  category: ProjectCategory;
  iconKey: ServiceIconKey;
  context: string;
  role: string;
  bullets: string[];
  tools: ToolRef[];
  details: ProjectDetails;
};

const t = {
  aws: { key: "aws" as const, label: "AWS" },
  azure: { key: "azure" as const, label: "Azure / GCP Evaluation" },
  security: { key: "security" as const, label: "Security / Compliance" },
  pmatt: { key: "pmatt" as const, label: "Project Planning" },
  analytics: { key: "analytics" as const, label: "Analytics Dashboards" },
  python: { key: "python" as const, label: "Python" },
  jira: { key: "jira" as const, label: "Jira" },
  docker: { key: "docker" as const, label: "Cloud/Platform Packaging" },
  git: { key: "git" as const, label: "Git" },
  cloudendure: { key: "cloudendure" as const, label: "Migration Simulation Controls" },
};

export const projects: ProjectItem[] = [
  {
    id: "proj-cloud-migration-strategy",
    slug: "cloud-migration-strategy",
    title: "Cloud Migration Strategy for Data Centers",
    category: "Cloud & Infrastructure Strategy",
    iconKey: "cloudMigration",
    context: "Stevens Projects · Academic Initiative",
    role: "Strategy Lead / Technical PM (Academic Program)",
    bullets: [
      "Designed end-to-end migration strategy with phased roadmap and governance.",
      "Defined risk controls, change readiness, and KPI-driven success criteria.",
      "Built structured schedule and execution model to reduce migration disruption.",
    ],
    tools: [t.aws, t.azure, t.security, t.pmatt],
    details: {
      problem:
        "Organizations need a structured migration plan that reduces disruption while improving scalability, security, and cost-efficiency.",
      approach: [
        "Defined scope, stakeholders, mission, and success criteria for cloud migration.",
        "Built phased roadmap covering assessment, architecture, migration planning, execution, and post-migration operations.",
        "Developed a detailed WBS and schedule plan with risk management and change readiness.",
      ],
      contribution: [
        "Led strategy framing and transition sequencing model.",
        "Mapped governance controls, risk checkpoints, and communication cadence.",
        "Translated business objectives into execution-ready migration phases.",
      ],
      deliverables: [
        "Project scope + event/context artifacts",
        "Multi-tier WBS + schedule plan",
        "Risk management + communications plan",
      ],
      tools: [t.aws, t.azure, t.security, t.pmatt],
      outcomes: [
        "Migration plan optimized for scalability, security, cost-efficiency, and reduced disruption.",
      ],
      artifacts: [
        "Architecture and migration roadmap diagram (placeholder)",
        "WBS and execution planning deck (placeholder)",
      ],
    },
  },
  {
    id: "proj-tryb4ufly",
    slug: "tryb4ufly",
    title: "TryB4UFly (Airport-to-Flight Simulation Service)",
    category: "Service/Product Innovation",
    iconKey: "dashboards",
    context: "Stevens Projects · Academic Initiative",
    role: "Technical PM / Service Designer",
    bullets: [
      "Designed full service model for guided airport + flight simulation experience.",
      "Built blueprint across customer journey, operations, and technology systems.",
      "Defined scalable cloud + analytics architecture to support readiness scoring.",
    ],
    tools: [t.azure, t.analytics, t.cloudendure, t.aws],
    details: {
      problem:
        "First-time and anxious flyers struggle due to unfamiliar airport steps and fear triggers (e.g., turbulence) with no safe practice environment.",
      approach: [
        "Designed the full experience flow: booking -> simulation -> debrief -> follow-up.",
        "Built service blueprint across customer actions, frontstage, backstage ops, and technology systems.",
        "Defined scalable architecture for booking, simulation engine, analytics, and readiness scoring.",
      ],
      contribution: [
        "Owned service architecture and end-to-end flow definition.",
        "Structured operational dependencies for delivery and scale.",
        "Aligned digital touchpoints with measurable readiness outcomes.",
      ],
      deliverables: [
        "Service Blueprint",
        "Solution Sequence Diagram",
        "Structure Diagram",
        "Tech stack mapping (cloud + data/analytics)",
      ],
      tools: [t.azure, t.aws, t.analytics, t.cloudendure],
      outcomes: [
        "Improves readiness via feedback + confidence scoring and post-session tips.",
        "Reduces bottlenecks via guided simulation and structured follow-up.",
      ],
      artifacts: [
        "Service blueprint board (placeholder)",
        "Flow architecture mock (placeholder)",
      ],
    },
  },
  {
    id: "proj-sllm-business",
    slug: "sllm-business",
    title: "Small Language Learning Models (SLLMs) in Business",
    category: "AI Strategy & Governance",
    iconKey: "aiDelivery",
    context: "Stevens Projects · Academic Initiative",
    role: "AI Strategy Analyst",
    bullets: [
      "Created enterprise framework for adopting SLLMs in secure, task-focused workflows.",
      "Compared LLM vs SLLM tradeoffs for cost, scalability, and privacy.",
      "Mapped governance controls for responsible AI operations in business contexts.",
    ],
    tools: [t.security, t.analytics, t.python, t.git],
    details: {
      problem:
        "Businesses want AI automation but face cost, infrastructure, and privacy constraints with large-scale LLM deployments.",
      approach: [
        "Compared LLMs vs SLLMs for cost, scalability, and real-world suitability.",
        "Defined in-house privacy/security posture (data control, compliance alignment, access controls).",
        "Documented integration challenges and mitigation (monitoring, retraining, bias controls).",
      ],
      contribution: [
        "Owned strategy analysis and governance framing.",
        "Designed practical adoption sequence for enterprise rollouts.",
        "Translated AI risk concerns into control-oriented implementation guidance.",
      ],
      deliverables: [
        "Comparative analysis",
        "Security & compliance considerations",
        "Deployment architecture + data integration guidance",
      ],
      tools: [t.security, t.analytics, t.python, t.git],
      outcomes: [
        "Provides a practical adoption strategy for secure, task-focused AI inside enterprise workflows.",
      ],
      artifacts: [
        "SLLM governance canvas (placeholder)",
        "AI strategy presentation (placeholder)",
      ],
    },
  },
  {
    id: "proj-memoria",
    slug: "memoria",
    title: "MEMORIA (AI Memorial Platform)",
    category: "Service/Product Innovation",
    iconKey: "aiDelivery",
    context: "Stevens Projects · Academic Initiative",
    role: "Product Strategy + TPM (Academic Team)",
    bullets: [
      "Designed digital memorial platform with AI-generated eulogies and memorial pages.",
      "Defined scalable cloud architecture and integration model for services and donations.",
      "Outlined monetization model with inclusive remote participation capabilities.",
    ],
    tools: [t.aws, t.analytics, t.security, t.python],
    details: {
      problem:
        "Families face information overload, disconnected tools, limited personalization, and low accessibility for distant relatives during memorial planning.",
      approach: [
        "Designed invitation workflows, memory collection, memorial page creation, live-stream access, and anniversary reminders.",
        "Defined applied technologies: AI eulogy generation + content moderation + cloud scalability and secure storage.",
        "Outlined integrations and revenue streams (one-time fees, e-commerce, partnerships).",
      ],
      contribution: [
        "Led product strategy framing and service decomposition.",
        "Mapped scalable architecture and integration pathways.",
        "Connected user empathy goals with feasible delivery components.",
      ],
      deliverables: [
        "Solution narrative + scenarios",
        "Feature set + monetization model",
        "Architecture/diagrams placeholders (sequence/structure)",
      ],
      tools: [t.aws, t.analytics, t.security, t.python],
      outcomes: [
        "Centralizes planning, increases inclusion, and scales memorial experiences globally.",
      ],
      artifacts: [
        "Product concept deck (placeholder)",
        "Architecture and sequence diagrams (placeholder)",
      ],
    },
  },
  {
    id: "proj-netflix-bpr",
    slug: "netflix-bpr",
    title: "Netflix Recommendation Process Reengineering (BPR)",
    category: "Process Innovation (BPR)",
    iconKey: "tpm",
    context: "Stevens Projects · Academic Initiative",
    role: "Process Analyst / Change Strategy",
    bullets: [
      "Proposed process reengineering model to improve recommendation effectiveness.",
      "Applied data analysis, benchmarking, and expert evaluation to TO-BE design.",
      "Defined change strategy for measurable personalization and retention outcomes.",
    ],
    tools: [t.analytics, t.pmatt, t.jira, t.git],
    details: {
      problem:
        "Recommendation accuracy and content discovery drive engagement and retention; improvements must be systematic and measurable.",
      approach: [
        "Selected recommendation as a high-impact process aligned to strategic goals.",
        "Proposed improvement methods: data analysis, benchmarking, expert evaluation.",
        "Built TO-BE process design and change management approach to mitigate disruption.",
      ],
      contribution: [
        "Performed process analysis and target-state design mapping.",
        "Framed KPIs for recommendation quality and retention impact.",
        "Built stakeholder-aligned change approach for adoption.",
      ],
      deliverables: [
        "Reengineering proposal + heuristics",
        "TO-BE process design",
        "Change management analysis",
      ],
      tools: [t.analytics, t.pmatt, t.jira, t.git],
      outcomes: [
        "Target outcomes / expected impact: improved recommendation accuracy, personalization quality, user satisfaction, and retention impact.",
      ],
      artifacts: [
        "Process reengineering document (placeholder)",
        "TO-BE model diagram (placeholder)",
      ],
    },
  },
];

export const projectCategories: ProjectCategory[] = [
  "Cloud & Infrastructure Strategy",
  "Service/Product Innovation",
  "AI Strategy & Governance",
  "Process Innovation (BPR)",
];

export const featuredProjectSlugs: ProjectItem["slug"][] = [
  "cloud-migration-strategy",
  "tryb4ufly",
  "sllm-business",
];
