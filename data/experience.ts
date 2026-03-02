import type { ExperienceIconKey, ToolIconKey } from "@/lib/iconMap";

export type ExperienceType = "employment" | "education_phase";

export type ToolRef = {
  key: ToolIconKey;
  label: string;
};

export type ExperienceItem = {
  id: string;
  slug:
  | "groundedai"
  | "savvy"
  | "stevens"
  | "dxc"
  | "adecco"
  | "ericsson"
  | "huawei"
  | "tata";
  label: string;
  iconKey: ExperienceIconKey;
  stageLabel: string;
  type: ExperienceType;
  title: string;
  startDate: string;
  endDate: string;
  periodLabel: string;
  timelineOrder: number;
  chartOrder: number;
  growthScore: number; // 1-7
  growthHighlight: string;
  note?: string;
  headlineBullets: string[];
  detailBullets: string[];
  projectsDuringPhase?: string[];
  tools: ToolRef[];
  scopeStakeholders: string[];
  programsClients: string[];
  outcomes: string[];
  challengesResolutions: string[];
};

export type GrowthChartPoint = {
  id: string;
  chartOrder: number;
  stageLabel: string;
  roleOrPhase: string;
  periodLabel: string;
  growthScore: number;
  growthHighlight: string;
};

export type CareerStoryBlock = {
  id: string;
  phase: string;
  period: string;
  headline: string;
  narrative: string;
};

const t = {
  jira: { key: "jira" as const, label: "Jira" },
  linux: { key: "linux" as const, label: "Linux" },
  python: { key: "python" as const, label: "Python" },
  vmware: { key: "vmware" as const, label: "VMware" },
  aws: { key: "aws" as const, label: "AWS" },
  cloudendure: { key: "cloudendure" as const, label: "CloudEndure" },
  serviceNow: { key: "serviceNow" as const, label: "ServiceNow" },
  pmatt: { key: "pmatt" as const, label: "PMATT" },
  adept: { key: "adept" as const, label: "ADEPT" },
  universalDiscovery: {
    key: "universalDiscovery" as const,
    label: "Universal Discovery",
  },
  powerbi: { key: "powerbi" as const, label: "Power BI" },
  shell: { key: "shell" as const, label: "Shell Scripting" },
  sql: { key: "sql" as const, label: "SQL" },
  git: { key: "git" as const, label: "Git" },
  confluence: { key: "confluence" as const, label: "Confluence" },
  azure: { key: "azure" as const, label: "Azure" },
  agile: { key: "agile" as const, label: "Agile/Scrum/SAFe" },
  ollama: { key: "ollama" as const, label: "Ollama" },
  llamaindex: { key: "llamaindex" as const, label: "LlamaIndex" },
  chroma: { key: "chroma" as const, label: "ChromaDB" },
  fastapi: { key: "fastapi" as const, label: "FastAPI" },
  prompting: { key: "prompting" as const, label: "Context Engineering" },
  ml: { key: "ml" as const, label: "Machine Learning" },
};

export const experiences: ExperienceItem[] = [
  {
    id: "exp-groundedai",
    slug: "groundedai",
    label: "Community Dreams Foundation",
    iconKey: "savvy",
    stageLabel: "CDF",
    type: "employment",
    title: "Project Manager | GroundedAI",
    startDate: "2025-12",
    endDate: "present",
    periodLabel: "Dec 2025 - Present",
    timelineOrder: 8,
    chartOrder: 8,
    growthScore: 7.5,
    growthHighlight:
      "Delivered secure local-AI program outcomes using RAG, evaluation controls, and governance-first execution.",
    headlineBullets: [
      "Designed and delivered a production-grade local RAG assistant using Ollama and ChromaDB.",
      "Built modular AI pipelines from PDF ingestion through vector retrieval and grounded response delivery.",
      "Introduced strict evaluation controls including refusal logic, hallucination checks, and evidence tracking.",
      "Delivered stakeholder-facing dashboards for model quality, budgets, and KPI visibility.",
    ],
    detailBullets: [
      "Designed local RAG architecture for offline, source-grounded question answering.",
      "Implemented ingestion -> chunking -> embedding -> indexing -> orchestration workflow.",
      "Built hybrid forecasting approach combining ETS baseline modeling with LLM prioritization.",
      "Established accuracy validation and traceability controls for safer AI-assisted decisions.",
      "Drove full lifecycle execution from requirements and architecture through validation readiness.",
      "Created leadership-ready reporting for model behavior, delivery health, and risk indicators.",
    ],
    tools: [
      t.python,
      t.ollama,
      t.llamaindex,
      t.chroma,
      t.fastapi,
      t.prompting,
      t.powerbi,
      t.jira,
      t.agile,
      t.git,
    ],
    scopeStakeholders: [
      "Foundation leadership and decision stakeholders",
      "AI engineering and data contributors",
      "Operations and reporting consumers",
    ],
    programsClients: ["Program: GroundedAI (Community Dreams Foundation)"],
    outcomes: [
      "Reduced manual document review effort by approximately 60%.",
      "Improved decision precision by approximately 25% in budget-constrained restock prioritization.",
      "Improved governance traceability through citation-grounded response controls.",
    ],
    challengesResolutions: [
      "Need for secure offline AI execution -> designed local-first architecture with strict grounding controls.",
      "Risk of hallucinated responses -> enforced refusal logic, evidence checks, and validation gates.",
      "Cross-functional understanding gaps -> introduced dashboard-based KPI and model quality reporting.",
    ],
  },
  {
    id: "exp-savvy",
    slug: "savvy",
    label: "Savvy Global Technologies",
    iconKey: "savvy",
    stageLabel: "Savvy",
    type: "employment",
    title: "AI Project Manager",
    startDate: "2025-07",
    endDate: "2025-11",
    periodLabel: "July 2025 - Nov 2025",
    timelineOrder: 7,
    chartOrder: 7,
    growthScore: 7.0,
    growthHighlight: "Led AI delivery execution with structured governance controls.",
    headlineBullets: [
      "Drove planning and execution for AI delivery initiatives.",
      "Introduced stakeholder-ready reporting and risk signal management.",
      "Applied human-in-the-loop controls to keep AI outputs auditable.",
      "Operationalized local LLM workflows for delivery planning and status synthesis.",
    ],
    detailBullets: [
      "Defined AI initiative milestones, dependencies, and reporting cadence.",
      "Managed risk, issue, and escalation routing for delivery tracks.",
      "Coordinated planning and progress reviews with business stakeholders.",
      "Operationalized human-in-the-loop checks for AI-assisted outputs.",
      "Implemented RAG-style retrieval patterns for source-grounded delivery summaries.",
      "Established prompt and response quality controls for repeatable output accuracy.",
    ],
    tools: [
      t.python,
      t.ollama,
      t.llamaindex,
      t.chroma,
      t.fastapi,
      t.prompting,
      t.powerbi,
      t.jira,
      t.agile,
      t.git,
    ],
    scopeStakeholders: [
      "Product and delivery leadership",
      "Engineering and data execution teams",
      "Program stakeholders and decision owners",
    ],
    programsClients: ["Client: confidential"],
    outcomes: [
      "Improved execution visibility across AI workstreams.",
      "Reduced reporting turnaround through structured delivery dashboards.",
      "Improved traceability of AI-assisted outputs with review and source-check controls.",
    ],
    challengesResolutions: [
      "Unclear AI scope boundaries -> introduced outcome-based milestones and acceptance criteria.",
      "Signal quality variance -> standardized reporting templates and review checkpoints.",
    ],
  },
  {
    id: "exp-stevens",
    slug: "stevens",
    label: "Stevens Institute of Technology",
    iconKey: "stevens",
    stageLabel: "Stevens",
    type: "education_phase",
    title: "Stevens Institute of Technology — MS Information Systems (Education Phase)",
    startDate: "2024-01",
    endDate: "2025-05",
    periodLabel: "Jan 2024 - May 2025",
    timelineOrder: 6,
    chartOrder: 6,
    growthScore: 6.2,
    growthHighlight: "Expanded analytics, project strategy, and AI-delivery capability through projects.",
    note: "Graduate Program + Projects phase (not employer experience).",
    headlineBullets: [
      "Built project planning models tied to technical delivery outcomes.",
      "Executed analytics and ML coursework in applied scenarios.",
      "Developed Python-based data workflows for delivery decision support.",
      "Evaluated enterprise AI adoption patterns for governance and delivery fit.",
    ],
    detailBullets: [
      "Structured project planning and milestone control across course initiatives.",
      "Applied analytics and ML methods to practical problem scenarios.",
      "Delivered Python-backed analysis and reporting artifacts.",
      "Mapped IT strategy and digital innovation frameworks to enterprise execution use cases.",
      "Built AI strategy analysis across SLLM governance, privacy, and deployment controls.",
    ],
    projectsDuringPhase: [
      "Project governance framework mapping schedule, risk, and stakeholder checkpoints.",
      "Data analytics and ML assignment for operational trend interpretation.",
      "Python pipeline prototypes for structured reporting and analysis.",
      "IT strategy casework focused on enterprise transformation planning.",
      "Cross-course synthesis connecting TPM methods to AI-enabled delivery.",
      "SLLM strategy case defining AI governance controls for privacy-sensitive enterprise workflows.",
    ],
    tools: [
      t.python,
      t.ml,
      t.sql,
      t.powerbi,
      t.prompting,
      t.ollama,
      t.llamaindex,
      t.agile,
      t.jira,
    ],
    scopeStakeholders: [
      "Faculty mentors and academic advisors",
      "Team-based project collaborators",
      "Course stakeholders across analytics, strategy, and PM modules",
    ],
    programsClients: ["Graduate academic program"],
    outcomes: [
      "Improved portfolio readiness for TPM + AI-enabled delivery positioning.",
      "Strengthened data-backed planning and communication discipline.",
    ],
    challengesResolutions: [
      "Parallel academic tracks -> used structured milestone planning and prioritization cadences.",
      "Theory-to-practice gap -> framed coursework as execution artifacts and portfolio-ready outputs.",
    ],
  },
  {
    id: "exp-dxc",
    slug: "dxc",
    label: "DXC Technology",
    iconKey: "dxc",
    stageLabel: "DXC",
    type: "employment",
    title: "Sr. Analyst II – Cloud Engineering",
    startDate: "2020-02",
    endDate: "2023-12",
    periodLabel: "Feb 2020 - Dec 2023",
    timelineOrder: 5,
    chartOrder: 5,
    growthScore: 5.5,
    growthHighlight:
      "Executed as Technical PM/Project Manager while covering discovery and migration specialist roles.",
    note:
      "Worked across Technical PM / Project Manager, Discovery Tool Engineer, Discovery Data Specialist, and Linux Migration Engineer responsibilities.",
    headlineBullets: [
      "Primary role: Technical PM / Project Manager for migration programs.",
      "Managed discovery-to-wave planning and migration cutover governance.",
      "Delivered Linux server migrations from on-prem to AWS using CloudEndure.",
      "Improved stakeholder visibility through RAID and dashboard reporting.",
    ],
    detailBullets: [
      "Technical PM / Project Manager: owned planning cadence, milestone control, RAID governance, and executive updates.",
      "Discovery Tool Engineer: ran discovery tooling operations and readiness assurance.",
      "Discovery Data Specialist: normalized discovery outputs for dependency and wave planning.",
      "Linux Migration Engineer: executed Linux migration planning, validation, and stabilization controls.",
      "Used PMATT and Microsoft Project to maintain baseline schedule integrity.",
      "Applied Agile/Scrum/SAFe for cross-functional execution alignment.",
      "Prepared CAB-ready change packets, runbooks, and rollback criteria.",
    ],
    tools: [
      t.pmatt,
      t.adept,
      t.agile,
      t.aws,
      t.azure,
      t.vmware,
      t.linux,
      t.universalDiscovery,
      t.python,
      t.sql,
      t.powerbi,
      t.shell,
      t.jira,
      t.confluence,
      t.git,
      t.serviceNow,
      t.cloudendure,
    ],
    scopeStakeholders: [
      "Client infrastructure, network, and security teams",
      "Application owners and service transition leads",
      "Program leadership, PMO, CAB, and operations stakeholders",
    ],
    programsClients: [
      "Client: AT&T (delivered via DXC environment)",
      "Client: Workforce Resilience (delivered via DXC environment)",
      "Client: Astro (delivered via DXC environment)",
      "Client: Downer (delivered via DXC environment)",
      "Client: DirecTV (delivered via DXC environment)",
    ],
    outcomes: [
      "Improved migration wave readiness accuracy through dependency-led planning.",
      "Reduced cutover surprises by enforcing rollback-ready readiness evidence.",
      "Improved schedule predictability across parallel workstreams.",
      "Strengthened leadership signal quality through structured dashboard reporting.",
    ],
    challengesResolutions: [
      "Discovery data inconsistency -> implemented normalization and confidence tagging.",
      "Cross-team dependency drift -> enforced ownership and escalation checkpoints.",
      "High-risk migration windows -> used rehearsal-led cutover and rollback controls.",
      "Competing stakeholder priorities -> used decision logs and risk-based prioritization.",
    ],
  },
  {
    id: "exp-adecco",
    slug: "adecco",
    label: "Adecco",
    iconKey: "adecco",
    stageLabel: "Adecco",
    type: "employment",
    title: "Sr. Linux Migration Engineer",
    startDate: "2019-05",
    endDate: "2020-01",
    periodLabel: "May 2019 - Jan 2020",
    timelineOrder: 4,
    chartOrder: 4,
    growthScore: 4.4,
    growthHighlight: "Operationalized Linux migration with controlled cutover governance.",
    headlineBullets: [
      "Executed Linux migration waves with controlled cutover governance.",
      "Improved migration repeatability using runbooks and validation gates.",
      "Reduced post-cutover defects via baseline checks and SOPs.",
    ],
    detailBullets: [
      "Executed Linux workload migration waves.",
      "Defined pre-cutover and post-cutover validation standards.",
      "Maintained rollback readiness for high-risk change windows.",
      "Standardized migration SOPs and checklists.",
      "Monitored post-cutover stabilization and issue burn-down.",
    ],
    tools: [t.linux, t.vmware, t.shell],
    scopeStakeholders: [
      "Infrastructure and platform operations teams",
      "Application owners and support leads",
      "Change and release governance stakeholders",
    ],
    programsClients: ["Client: confidential"],
    outcomes: [
      "Improved migration consistency across workload groups.",
      "Shortened stabilization timeline after cutovers.",
    ],
    challengesResolutions: [
      "Uneven documentation quality -> introduced standardized migration SOP templates.",
      "Tight maintenance windows -> rehearsed cutover and rollback checklists.",
    ],
  },
  {
    id: "exp-ericsson",
    slug: "ericsson",
    label: "Ericsson",
    iconKey: "ericsson",
    stageLabel: "Ericsson",
    type: "employment",
    title: "Solution Integrator",
    startDate: "2017-06",
    endDate: "2018-11",
    periodLabel: "June 2017 - Nov 2018",
    timelineOrder: 3,
    chartOrder: 3,
    growthScore: 3.6,
    growthHighlight: "Scaled dependency-led solution integration execution.",
    headlineBullets: [
      "Integrated multi-component platform solutions with dependency control.",
      "Improved first-pass readiness for integrated release outcomes.",
      "Reduced downstream rework by resolving dependencies earlier.",
    ],
    detailBullets: [
      "Coordinated integration sequencing for dependent components.",
      "Validated solution compatibility and release readiness.",
      "Aligned integration, testing, and rollout checkpoints.",
      "Supported go-live stabilization and defect triage.",
      "Maintained integration documentation and evidence trails.",
    ],
    tools: [t.linux, t.jira, t.agile],
    scopeStakeholders: [
      "Solution architecture and integration teams",
      "Testing and validation teams",
      "Operations and deployment stakeholders",
    ],
    programsClients: ["Client: confidential"],
    outcomes: [
      "Improved first-pass release readiness for integrated solutions.",
      "Reduced late-stage integration rework.",
    ],
    challengesResolutions: [
      "Dependency complexity -> used dependency-first integration sequencing.",
      "Late defect discovery risk -> tightened pre-release integration validation criteria.",
    ],
  },
  {
    id: "exp-huawei",
    slug: "huawei",
    label: "Huawei",
    iconKey: "huawei",
    stageLabel: "Huawei",
    type: "employment",
    title: "Sr. Technical Engineer",
    startDate: "2016-10",
    endDate: "2017-05",
    periodLabel: "Oct 2016 - May 2017",
    timelineOrder: 2,
    chartOrder: 2,
    growthScore: 2.8,
    growthHighlight: "Strengthened release readiness and quality controls.",
    headlineBullets: [
      "Improved release readiness checks and deployment discipline.",
      "Strengthened engineering-operations coordination for production rollouts.",
      "Reduced avoidable deployment defects via validation checkpoints.",
    ],
    detailBullets: [
      "Validated release dependencies before production windows.",
      "Supported technical diagnostics across platform incidents.",
      "Coordinated readiness checkpoints with operations.",
      "Maintained deployment quality controls across environments.",
      "Supported stabilization during release windows.",
    ],
    tools: [t.linux, t.jira, t.agile],
    scopeStakeholders: [
      "Platform engineering teams",
      "Operations and production support teams",
      "Release and change management stakeholders",
    ],
    programsClients: ["Client: confidential"],
    outcomes: [
      "Improved release predictability and execution quality.",
      "Lowered production risk through disciplined pre-release validation.",
    ],
    challengesResolutions: [
      "Tight release windows -> enforced readiness evidence and freeze checkpoints.",
      "Cross-team dependency gaps -> added explicit release ownership checkpoints.",
    ],
  },
  {
    id: "exp-tata",
    slug: "tata",
    label: "Tata",
    iconKey: "tata",
    stageLabel: "Tata",
    type: "employment",
    title: "Assistant Manager / Technical Engineer",
    startDate: "2013-06",
    endDate: "2016-10",
    periodLabel: "June 2013 - Oct 2016",
    timelineOrder: 1,
    chartOrder: 1,
    growthScore: 2.0,
    growthHighlight: "Built operational reliability and runbook execution discipline.",
    headlineBullets: [
      "Stabilized daily technical operations for business-critical environments.",
      "Improved incident response quality through repeatable runbook execution.",
      "Reduced manual operational load through scripting and checklists.",
    ],
    detailBullets: [
      "Executed production operations and service assurance routines.",
      "Maintained Linux diagnostics and routine health checks.",
      "Managed incident triage and escalation handoffs.",
      "Standardized recurring runbooks and operating checklists.",
      "Supported service continuity during maintenance events.",
    ],
    tools: [t.linux, t.shell, t.serviceNow],
    scopeStakeholders: [
      "Operations support teams",
      "Network and platform engineering teams",
      "Internal delivery and service leads",
    ],
    programsClients: ["Client: confidential"],
    outcomes: [
      "Improved operational consistency across support cycles.",
      "Reduced issue handling variability through standard operating patterns.",
      "Improved turnaround for repeat incident classes.",
    ],
    challengesResolutions: [
      "Inconsistent shift-level process execution -> standardized runbooks and handoff templates.",
      "Repeated manual operations effort -> introduced scripts for frequent tasks.",
    ],
  },
];

export const timelineExperiences = [...experiences].sort(
  (a, b) => b.timelineOrder - a.timelineOrder,
);

export const growthChartPoints: GrowthChartPoint[] = [...experiences]
  .sort((a, b) => a.chartOrder - b.chartOrder)
  .map((item) => ({
    id: item.id,
    chartOrder: item.chartOrder,
    stageLabel: item.stageLabel,
    roleOrPhase: item.title,
    periodLabel: item.periodLabel,
    growthScore: item.growthScore,
    growthHighlight: item.growthHighlight,
  }));

export const careerStory: CareerStoryBlock[] = [
  {
    id: "story-groundedai",
    phase: "Grounded AI Program Delivery",
    period: "Dec 2025 - Present",
    headline: "Built secure local-AI delivery patterns with measurable outcomes.",
    narrative:
      "At Community Dreams Foundation, I led GroundedAI execution using RAG pipelines, validation controls, and governance-first reporting.",
  },
  {
    id: "story-savvy",
    phase: "AI Delivery Execution",
    period: "2025",
    headline: "Applied AI governance in delivery operations.",
    narrative:
      "At Savvy Global Technologies, I focused on practical AI program execution with structured controls.",
  },
  {
    id: "story-stevens",
    phase: "Graduate Program Career Phase",
    period: "2024 - 2025",
    headline: "Strengthened TPM and analytics capability through projects.",
    narrative:
      "At Stevens, I treated the Master's phase as project-led execution training aligned to enterprise delivery.",
  },
  {
    id: "story-dxc",
    phase: "Enterprise Program Leadership",
    period: "2020 - 2023",
    headline: "Shifted to Technical PM leadership at enterprise scale.",
    narrative:
      "At DXC, I executed as Technical PM / Project Manager while also covering discovery and migration specialist roles.",
  },
  {
    id: "story-adecco",
    phase: "Migration Specialization",
    period: "2019 - 2020",
    headline: "Scaled Linux migration as a repeatable model.",
    narrative:
      "At Adecco, I enforced validation-led cutovers and stabilization governance for Linux transitions.",
  },
  {
    id: "story-ericsson",
    phase: "Integration Discipline",
    period: "2017 - 2018",
    headline: "Reduced rework through dependency-first integration.",
    narrative:
      "At Ericsson, I aligned integration sequencing, testing checkpoints, and rollout stabilization.",
  },
  {
    id: "story-huawei",
    phase: "Release Control",
    period: "2016 - 2017",
    headline: "Focused on readiness and quality in deployment windows.",
    narrative:
      "At Huawei, I improved release validation and coordination across engineering and operations.",
  },
  {
    id: "story-tata",
    phase: "Operations Grounding",
    period: "2013 - 2016",
    headline: "Built reliability through operational rigor.",
    narrative:
      "At Tata, I learned production discipline, repeatable runbooks, and incident-driven execution.",
  },
];
