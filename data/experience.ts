import type { ExperienceIconKey, ToolIconKey } from "@/lib/iconMap";

export type ExperienceType = "employment" | "education_phase";

export type ToolRef = {
  key: ToolIconKey;
  label: string;
};

export type FlagshipPanel = {
  scope: string[];
  environments: string[];
  team: string[];
  transformationType: string[];
  outcomes: string[];
};

export type ExperienceItem = {
  id: string;
  slug:
  | "community-dreams"
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
  growthScore: number; // 1-8
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
  flagshipPanel?: FlagshipPanel;
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
  linux: { key: "linux" as const, label: "Linux (RHEL/SLES/CentOS)" },
  python: { key: "python" as const, label: "Python" },
  vmware: { key: "vmware" as const, label: "VMware vSphere Replication" },
  aws: { key: "aws" as const, label: "AWS" },
  cloudendure: { key: "cloudendure" as const, label: "CloudEndure" },
  serviceNow: { key: "serviceNow" as const, label: "ServiceNow" },
  pmatt: { key: "pmatt" as const, label: "MS Project / Planning Controls" },
  universalDiscovery: {
    key: "universalDiscovery" as const,
    label: "Universal Discovery",
  },
  powerbi: { key: "powerbi" as const, label: "Power BI" },
  shell: { key: "shell" as const, label: "Shell Scripting" },
  sql: { key: "sql" as const, label: "SQL" },
  confluence: { key: "confluence" as const, label: "Confluence" },
  azure: { key: "azure" as const, label: "Azure" },
  agile: { key: "agile" as const, label: "Agile / Scrum" },
  carbonite: { key: "carbonite" as const, label: "Carbonite Double-Take" },
  langchain: { key: "langchain" as const, label: "LangChain" },
  chroma: { key: "chroma" as const, label: "ChromaDB" },
  ollama: { key: "ollama" as const, label: "Ollama" },
  ml: { key: "ml" as const, label: "Model Evaluation" },
} satisfies Record<string, ToolRef>;

export const experiences: ExperienceItem[] = [
  {
    id: "exp-community-dreams",
    slug: "community-dreams",
    label: "Community Dreams Foundation",
    iconKey: "community",
    stageLabel: "CDF",
    type: "employment",
    title: "Technical Project Manager",
    startDate: "2025-12",
    endDate: "present",
    periodLabel: "Dec 2025 - Present",
    timelineOrder: 8,
    chartOrder: 8,
    growthScore: 7.8,
    growthHighlight:
      "Current leadership role driving RenewSight-AI delivery with architecture alignment, workflow governance, and stakeholder communication.",
    headlineBullets: [
      "Leading delivery of RenewSight-AI, an AI-powered predictive analytics and decision support platform.",
      "Defining system architecture across data pipelines, model workflows, and recommendation logic.",
      "Driving Agile delivery cadence from ideation through deployment readiness with cross-functional teams.",
      "Building reporting frameworks and dashboards to monitor effectiveness and business impact.",
    ],
    detailBullets: [
      "Translate stakeholder needs into AI/ML solution requirements, including evaluation metrics and scalability expectations.",
      "Coordinate engineering execution across model integration, data processing, and output validation strategies.",
      "Maintain delivery governance with milestone tracking, dependency management, and risk visibility.",
      "Build dashboards and reporting to communicate system performance, adoption, and decision impact.",
    ],
    tools: [t.jira, t.powerbi, t.confluence, t.agile, t.python, t.ml],
    scopeStakeholders: [
      "Foundation leadership",
      "Volunteer contributors",
      "Community program stakeholders",
    ],
    programsClients: ["RenewSight-AI (predictive analytics & decision support)"],
    outcomes: [
      "Established delivery cadence and execution controls for RenewSight-AI initiative lifecycle.",
      "Improved stakeholder visibility through structured reporting and dashboard-based updates.",
      "Defined architecture alignment across data, model, and recommendation workflows.",
    ],
    challengesResolutions: [
      "Distributed contributors and shifting requirements -> enforced milestone cadence, backlog clarity, and dependency tracking.",
      "AI workflow ambiguity -> introduced validation checkpoints and explicit evaluation criteria before sharing outputs.",
    ],
  },
  {
    id: "exp-savvy",
    slug: "savvy",
    label: "Savvy Global Technologies",
    iconKey: "savvy",
    stageLabel: "Savvy",
    type: "employment",
    title: "Technical Project Manager | AI Innovation Program",
    startDate: "2025-07",
    endDate: "2025-11",
    periodLabel: "Jul 2025 - Nov 2025",
    timelineOrder: 7,
    chartOrder: 7,
    growthScore: 7.2,
    growthHighlight:
      "Delivered AI innovation initiatives with engineering coordination, lifecycle controls, and executive reporting.",
    headlineBullets: [
      "Led cross-functional engineering teams delivering AI-driven automation and analytics initiatives.",
      "Coordinated ML lifecycle checkpoints from experimentation through deployment readiness.",
      "Improved delivery timelines by approximately 20% through dependency mitigation.",
      "Created executive dashboards translating outputs into operational insights.",
    ],
    detailBullets: [
      "Owned sprint sequencing, dependency tracking, and stakeholder communication cadence.",
      "Defined validation checkpoints across model development and release readiness.",
      "Maintained risk and issue visibility for technical and business stakeholders.",
      "Built structured executive reporting around progress, quality, and blockers.",
    ],
    tools: [t.python, t.sql, t.powerbi, t.jira, t.agile, t.ml],
    scopeStakeholders: [
      "Engineering and data teams",
      "Business stakeholders",
      "Program leadership and decision owners",
    ],
    programsClients: ["AI Innovation Program"],
    outcomes: [
      "Improved delivery timelines by approximately 20%.",
      "Improved cross-functional clarity through lifecycle checkpoints.",
      "Strengthened executive visibility with dashboard-based reporting.",
    ],
    challengesResolutions: [
      "Fast iteration with cross-team dependencies -> restructured sprint and review cadence.",
      "Signal-to-noise in reporting -> introduced milestone-based executive dashboarding.",
    ],
  },
  {
    id: "exp-stevens",
    slug: "stevens",
    label: "Stevens Institute of Technology",
    iconKey: "stevens",
    stageLabel: "Stevens",
    type: "education_phase",
    title: "MS Information Systems (Education Phase)",
    startDate: "2024-01",
    endDate: "2025-05",
    periodLabel: "Jan 2024 - May 2025",
    timelineOrder: 6,
    chartOrder: 6,
    growthScore: 6.1,
    growthHighlight:
      "Graduate phase used to strengthen project management, analytics, and systems strategy depth.",
    note: "Graduate education phase (not employer experience).",
    headlineBullets: [
      "Completed MS Information Systems with focus on project management and IT strategy.",
      "Built data and analytics workflows supporting structured delivery decisions.",
      "Linked coursework outputs to enterprise modernization and governance scenarios.",
    ],
    detailBullets: [
      "Applied project planning methods to delivery-focused technical assignments.",
      "Developed analytics workflows for trend interpretation and reporting.",
      "Strengthened strategy framing for enterprise technology transformation.",
    ],
    projectsDuringPhase: [
      "Project management models for scope, risk, and milestone governance.",
      "Analytics and ML coursework artifacts supporting delivery decision-making.",
      "Python and SQL workflows for reporting and operational insights.",
      "IT strategy casework aligned to enterprise modernization programs.",
    ],
    tools: [t.python, t.sql, t.powerbi, t.ml, t.agile, t.jira],
    scopeStakeholders: [
      "Faculty and advisors",
      "Academic project collaborators",
      "Cross-discipline coursework teams",
    ],
    programsClients: ["Graduate academic program"],
    outcomes: [
      "Strengthened infrastructure and transformation leadership toolkit.",
      "Improved data-backed communication and program planning rigor.",
    ],
    challengesResolutions: [
      "Parallel coursework commitments -> applied milestone-first planning discipline.",
      "Theory-to-practice gap -> reframed coursework into execution artifacts.",
    ],
  },
  {
    id: "exp-dxc",
    slug: "dxc",
    label: "DXC Technology",
    iconKey: "dxc",
    stageLabel: "DXC",
    type: "employment",
    title: "Technical Project Manager | Cloud & Infrastructure Programs",
    startDate: "2020-02",
    endDate: "2023-12",
    periodLabel: "Feb 2020 - Dec 2023",
    timelineOrder: 5,
    chartOrder: 5,
    growthScore: 5.6,
    growthHighlight:
      "Flagship role: directed enterprise infrastructure transformation and cloud migration programs across 1000+ Linux servers.",
    note:
      "Primary anchor role for infrastructure transformation, cloud migration, and migration lifecycle governance.",
    headlineBullets: [
      "Directed enterprise transformation programs involving 1000+ Linux servers.",
      "Led multi-wave data center to AWS and data center to data center migrations.",
      "Coordinated approximately 40 engineers across global teams and technical tracks.",
      "Drove approximately 15-20% infrastructure cost optimization through migration sequencing.",
    ],
    detailBullets: [
      "Owned dependency discovery, migration wave planning, and cutover governance.",
      "Managed readiness validation, rollback strategy, and production cutover execution.",
      "Implemented RAID governance and executive reporting for schedule and risk control.",
      "Delivered AWS migration execution using AWS Migration Hub, AWS MGN (CloudEndure), AWS DMS, DataSync, Snow Family, and MAP acceleration frameworks.",
      "Used Universal Discovery and CloudEndure to support migration planning and execution.",
      "Built Power BI dashboards for leadership visibility across cost, risk, and delivery health.",
    ],
    tools: [
      t.aws,
      t.azure,
      t.linux,
      t.vmware,
      t.cloudendure,
      t.universalDiscovery,
      t.powerbi,
      t.jira,
      t.serviceNow,
      t.pmatt,
      t.confluence,
      t.agile,
      t.python,
      t.sql,
    ],
    scopeStakeholders: [
      "Global infrastructure engineering teams",
      "Application, network, and security owners",
      "Program leadership, PMO, and executive stakeholders",
    ],
    programsClients: [
      "Enterprise cloud and infrastructure transformation portfolio (NDA constrained)",
    ],
    outcomes: [
      "Directed multi-wave migration execution across 1000+ Linux server environments.",
      "Delivered approximately 15-20% infrastructure cost optimization.",
      "Improved schedule predictability through RAID governance and execution checkpoints.",
      "Strengthened leadership visibility via Power BI executive reporting.",
    ],
    challengesResolutions: [
      "Complex dependency chains -> enforced discovery-led planning and owner-based tracking.",
      "Distributed global teams -> formalized escalation paths and cutover accountability.",
      "High-risk production windows -> maintained validation gates and explicit rollback readiness.",
    ],
    flagshipPanel: {
      scope: [
        "1000+ Linux servers in enterprise migration scope",
        "Multi-wave migration portfolio with parallel workstreams",
      ],
      environments: [
        "Data Center to AWS migration using AWS MGN (CloudEndure) + AWS Migration Hub",
        "Data transfer and cutover support using AWS DMS, DataSync, and Snow Family",
        "AWS MAP-aligned acceleration planning for modernization and migration waves",
        "Data Center to Data Center migrations",
        "Greenfield and brownfield infrastructure environments",
      ],
      team: [
        "Coordinated approximately 40 engineers across global teams",
        "Aligned infra, app, network, security, and operations owners",
      ],
      transformationType: [
        "Infrastructure transformation and cloud migration delivery",
        "Migration lifecycle governance from discovery to stabilization",
        "Dependency-driven planning with controlled production cutovers",
      ],
      outcomes: [
        "Approximately 15-20% infrastructure cost optimization",
        "Improved schedule predictability via RAID governance",
        "Executive visibility improved through Power BI reporting",
      ],
    },
  },
  {
    id: "exp-adecco",
    slug: "adecco",
    label: "Adecco Global",
    iconKey: "adecco",
    stageLabel: "Adecco",
    type: "employment",
    title: "Sr. Linux Migration Engineer | HPI Tattoo Beyond Migration",
    startDate: "2019-05",
    endDate: "2020-01",
    periodLabel: "May 2019 - Jan 2020",
    timelineOrder: 4,
    chartOrder: 4,
    growthScore: 4.5,
    growthHighlight:
      "Specialized in Linux migration execution with readiness validation, rollback planning, and post-migration testing.",
    headlineBullets: [
      "Executed enterprise Linux migrations using VMware vSphere Replication and Carbonite Double-Take.",
      "Conducted readiness checks and rollback planning before production move windows.",
      "Led post-migration validation to confirm service stability and handover readiness.",
    ],
    detailBullets: [
      "Planned workload-level migration sequencing and cutover operations.",
      "Used validation checklists to confirm readiness and reduce migration risk.",
      "Maintained rollback plans for high-impact workload transitions.",
      "Drove post-migration testing and stabilization tracking.",
    ],
    tools: [t.linux, t.vmware, t.carbonite, t.jira, t.serviceNow, t.shell],
    scopeStakeholders: [
      "Infrastructure platform teams",
      "Application support teams",
      "Change and release governance stakeholders",
    ],
    programsClients: ["HPI Tattoo Beyond Migration"],
    outcomes: [
      "Improved migration reliability for enterprise Linux workload transitions.",
      "Reduced cutover risk through validation-first execution controls.",
      "Strengthened post-migration confidence through structured testing.",
    ],
    challengesResolutions: [
      "Tight downtime windows -> rehearsed cutover and rollback paths ahead of execution.",
      "Mixed workload risk profiles -> standardized readiness criteria per migration wave.",
    ],
  },
  {
    id: "exp-ericsson",
    slug: "ericsson",
    label: "Ericsson India Global Services",
    iconKey: "ericsson",
    stageLabel: "Ericsson",
    type: "employment",
    title: "Solution Integrator | T-Mobile SDG Platform",
    startDate: "2017-06",
    endDate: "2018-11",
    periodLabel: "Jun 2017 - Nov 2018",
    timelineOrder: 3,
    chartOrder: 3,
    growthScore: 3.7,
    growthHighlight:
      "Managed telecom platform upgrades, SSL/TLS renewals, and controlled release execution.",
    headlineBullets: [
      "Managed telecom platform upgrades and patch rollout activities.",
      "Coordinated SSL/TLS renewal readiness and implementation sequencing.",
      "Partnered on UAT validation and risk-controlled production deployments.",
    ],
    detailBullets: [
      "Aligned integration and testing checkpoints before release windows.",
      "Coordinated release dependencies with engineering and operations stakeholders.",
      "Tracked deployment risk and stabilization signals during rollouts.",
      "Maintained delivery evidence for controlled production change execution.",
    ],
    tools: [t.linux, t.jira, t.agile, t.serviceNow],
    scopeStakeholders: [
      "Platform engineering teams",
      "UAT and validation stakeholders",
      "Operations and release management teams",
    ],
    programsClients: ["T-Mobile SDG Platform"],
    outcomes: [
      "Improved release discipline across platform upgrade cycles.",
      "Reduced deployment risk through structured validation and rollout controls.",
    ],
    challengesResolutions: [
      "High dependency releases -> enforced coordinated validation checkpoints.",
      "Production risk in upgrade cycles -> applied controlled deployment governance.",
    ],
  },
  {
    id: "exp-huawei",
    slug: "huawei",
    label: "Huawei Technologies India",
    iconKey: "huawei",
    stageLabel: "Huawei",
    type: "employment",
    title: "Sr. Technical Engineer | MTN SA Service Delivery Platform",
    startDate: "2016-10",
    endDate: "2017-05",
    periodLabel: "Oct 2016 - May 2017",
    timelineOrder: 2,
    chartOrder: 2,
    growthScore: 2.9,
    growthHighlight:
      "Delivered telecom service onboarding, deployment coordination, and platform performance validation.",
    headlineBullets: [
      "Led telecom service onboarding and deployment activities.",
      "Conducted performance validation and root cause analysis in production environments.",
      "Supported platform readiness and stabilization during service transitions.",
    ],
    detailBullets: [
      "Validated service onboarding prerequisites and technical dependencies.",
      "Coordinated deployment windows with operations stakeholders.",
      "Investigated incidents and supported root cause analysis workflows.",
      "Tracked service performance baselines after releases.",
    ],
    tools: [t.linux, t.jira, t.agile, t.serviceNow],
    scopeStakeholders: [
      "Service delivery engineering teams",
      "Operations and support teams",
      "Telecom platform stakeholders",
    ],
    programsClients: ["MTN SA Service Delivery Platform"],
    outcomes: [
      "Improved service onboarding reliability through structured deployment controls.",
      "Strengthened platform performance validation and issue diagnostics.",
    ],
    challengesResolutions: [
      "Production service variability -> tightened post-deployment validation discipline.",
      "Incident triage latency -> formalized root-cause collaboration workflow.",
    ],
  },
  {
    id: "exp-tata",
    slug: "tata",
    label: "Tata Teleservices Ltd",
    iconKey: "tata",
    stageLabel: "Tata",
    type: "employment",
    title: "Technical Engineer | Tata SDP, Device Management & DSTK Platform",
    startDate: "2013-06",
    endDate: "2016-10",
    periodLabel: "Jun 2013 - Oct 2016",
    timelineOrder: 1,
    chartOrder: 1,
    growthScore: 2.0,
    growthHighlight:
      "Built early technical foundation in Linux administration, monitoring, and shell-based operational automation.",
    headlineBullets: [
      "Administered Linux platforms supporting telecom service operations.",
      "Implemented SNMP and CACTI monitoring for operational visibility.",
      "Automated recurring operational activities using shell scripting.",
    ],
    detailBullets: [
      "Executed Linux platform administration and routine maintenance operations.",
      "Monitored service health through SNMP and CACTI instrumentation.",
      "Created shell scripts for repeatable operational tasks and checks.",
      "Supported incident triage and escalation during production events.",
    ],
    tools: [t.linux, t.shell, t.serviceNow],
    scopeStakeholders: [
      "Telecom operations teams",
      "Platform support engineers",
      "Internal service delivery stakeholders",
    ],
    programsClients: ["Tata SDP, Device Management & DSTK Platform"],
    outcomes: [
      "Improved monitoring visibility through SNMP and CACTI implementation.",
      "Reduced manual recurring effort by scripting repeat operations.",
      "Built foundational operational rigor used in later transformation roles.",
    ],
    challengesResolutions: [
      "Manual repetitive operations -> automated routine tasks with shell scripts.",
      "Monitoring signal gaps -> established SNMP and CACTI-based tracking patterns.",
    ],
  },
];

export const timelineExperiences = experiences
  .filter((item) => item.type === "employment")
  .sort((a, b) => b.timelineOrder - a.timelineOrder);

export const educationPhaseExperience =
  experiences.find((item) => item.type === "education_phase") ?? null;

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
    id: "story-community-dreams",
    phase: "Volunteer Program Leadership",
    period: "Dec 2025 - Present",
    headline: "Continued execution leadership through nonprofit program coordination.",
    narrative:
      "At Community Dreams Foundation, I run planning cadence, milestone tracking, and stakeholder communication for community initiatives.",
  },
  {
    id: "story-savvy",
    phase: "Applied AI Delivery Management",
    period: "Jul 2025 - Nov 2025",
    headline: "Applied project controls to AI innovation initiatives.",
    narrative:
      "At Savvy Global Technologies, I coordinated ML lifecycle delivery and improved timelines by approximately 20%.",
  },
  {
    id: "story-stevens",
    phase: "Graduate Program Phase",
    period: "2024 - 2025",
    headline: "Strengthened strategy, analytics, and technical program depth.",
    narrative:
      "At Stevens Institute of Technology, I focused on execution-oriented coursework in project management, analytics, and IT strategy.",
  },
  {
    id: "story-dxc",
    phase: "Enterprise Infrastructure Transformation",
    period: "2020 - 2023",
    headline: "Led flagship cloud migration and infrastructure modernization programs.",
    narrative:
      "At DXC Technology, I directed multi-wave migration programs for 1000+ Linux servers with governance-led execution and cost optimization outcomes.",
  },
  {
    id: "story-adecco",
    phase: "Linux Migration Specialization",
    period: "2019 - 2020",
    headline: "Built migration execution discipline for enterprise Linux transitions.",
    narrative:
      "At Adecco Global, I executed validation-led migration waves with rollback planning and post-migration assurance.",
  },
  {
    id: "story-ericsson",
    phase: "Integration and Release Control",
    period: "2017 - 2018",
    headline: "Improved production release confidence in telecom environments.",
    narrative:
      "At Ericsson, I managed upgrades, SSL/TLS renewals, and UAT-driven controlled production deployments.",
  },
  {
    id: "story-huawei",
    phase: "Service Delivery Execution",
    period: "2016 - 2017",
    headline: "Strengthened service onboarding and deployment readiness.",
    narrative:
      "At Huawei, I drove service onboarding, performance validation, and root cause analysis support.",
  },
  {
    id: "story-tata",
    phase: "Operations Foundation",
    period: "2013 - 2016",
    headline: "Built core Linux operations and monitoring discipline.",
    narrative:
      "At Tata Teleservices, I handled Linux administration, SNMP/CACTI monitoring, and shell automation for telecom services.",
  },
];
