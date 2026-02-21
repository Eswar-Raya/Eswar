import type { ExperienceIconKey, ToolIconKey } from "@/lib/iconMap";

export type ToolRef = {
  key: ToolIconKey;
  label: string;
};

export type ExperienceDetails = {
  overview: string;
  scopeStakeholders: string[];
  responsibilities: string[];
  tools: ToolRef[];
  programsClients: string[];
  outcomes: string[];
  challengesResolutions: string[];
};

export type ExperienceItem = {
  id: string;
  slug:
    | "bachelors"
    | "tata"
    | "huawei"
    | "ericsson"
    | "adecco"
    | "dxc"
    | "masters"
    | "savvy";
  company: string;
  iconKey: ExperienceIconKey;
  title: string;
  dates: string;
  note?: string;
  bullets: string[];
  tools: ToolRef[];
  details: ExperienceDetails;
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
};

export const experiences: ExperienceItem[] = [
  {
    id: "exp-bachelors",
    slug: "bachelors",
    company: "Aditya Engineering College / JNTUK",
    iconKey: "bachelors",
    title: "Bachelor's Degree — Electronics and Communication Engineering",
    dates: "Aug 2009 - May 2013",
    bullets: [
      "Built core systems engineering and analytical problem-solving foundation.",
      "Developed structured approach to troubleshooting and technical reasoning.",
      "Created the academic base for later infrastructure and program delivery work.",
    ],
    tools: [t.python, t.sql, t.git],
    details: {
      overview:
        "Established engineering fundamentals that later translated into structured technical execution and delivery discipline.",
      scopeStakeholders: [
        "Academic faculty and project mentors",
        "Cross-functional student project teams",
        "Lab and systems environments",
      ],
      responsibilities: [
        "Completed engineering coursework in electronics and communication systems",
        "Performed structured lab analysis and validation activities",
        "Delivered team-based technical assignments with defined milestones",
        "Applied analytical methods for diagnostics and root-cause thinking",
      ],
      tools: [t.python, t.sql, t.git],
      programsClients: ["Academic program"],
      outcomes: [
        "Built foundation in systems thinking and technical decomposition",
        "Strengthened analytical rigor used in later migration and PM roles",
      ],
      challengesResolutions: [
        "Balancing theory and application -> adopted problem-first, hands-on learning loops",
        "Complex technical topics -> used structured breakdown and iterative validation",
      ],
    },
  },
  {
    id: "exp-tata",
    slug: "tata",
    company: "Tata",
    iconKey: "tata",
    title: "Assistant Manager / Technical Engineer",
    dates: "June 2013 - Oct 2016",
    bullets: [
      "Stabilized daily technical operations for business-critical environments.",
      "Improved incident response quality through repeatable runbook execution.",
      "Reduced manual operational load through scripting and checklists.",
    ],
    tools: [t.linux, t.shell, t.serviceNow],
    details: {
      overview:
        "Built a technical operations base focused on reliability, support discipline, and execution consistency.",
      scopeStakeholders: [
        "Operations support teams",
        "Network and platform engineering teams",
        "Internal delivery and service leads",
      ],
      responsibilities: [
        "Executed production operations and service assurance routines",
        "Maintained Linux diagnostics and routine health checks",
        "Managed incident triage and escalation handoffs",
        "Standardized recurring runbooks and operating checklists",
        "Supported service continuity during maintenance events",
      ],
      tools: [t.linux, t.shell, t.serviceNow],
      programsClients: ["Client: confidential"],
      outcomes: [
        "Improved operational consistency across support cycles",
        "Reduced issue handling variability through standard operating patterns",
        "Improved turnaround for repeat incident classes",
      ],
      challengesResolutions: [
        "Inconsistent shift-level process execution -> standardized shared runbooks and handoff templates",
        "Repeated manual operations effort -> introduced scripts for frequent tasks",
      ],
    },
  },
  {
    id: "exp-huawei",
    slug: "huawei",
    company: "Huawei",
    iconKey: "huawei",
    title: "Sr. Technical Engineer",
    dates: "Oct 2016 - May 2017",
    bullets: [
      "Improved release readiness checks and deployment discipline.",
      "Strengthened engineering-operations coordination for production rollouts.",
      "Reduced avoidable deployment defects via validation checkpoints.",
    ],
    tools: [t.linux, t.jira, t.agile],
    details: {
      overview:
        "Supported platform reliability through release controls, environment validation, and coordinated technical execution.",
      scopeStakeholders: [
        "Platform engineering teams",
        "Operations and production support teams",
        "Release and change management stakeholders",
      ],
      responsibilities: [
        "Validated release dependencies before production windows",
        "Supported technical diagnostics across platform incidents",
        "Coordinated readiness checkpoints with operations",
        "Maintained deployment quality controls across environments",
        "Supported stabilization during release windows",
      ],
      tools: [t.linux, t.jira, t.agile],
      programsClients: ["Client: confidential"],
      outcomes: [
        "Improved release predictability and execution quality",
        "Lowered production risk through disciplined pre-release validation",
      ],
      challengesResolutions: [
        "Tight release windows -> enforced readiness evidence and freeze checkpoints",
        "Cross-team dependency gaps -> added explicit release ownership checkpoints",
      ],
    },
  },
  {
    id: "exp-ericsson",
    slug: "ericsson",
    company: "Ericsson",
    iconKey: "ericsson",
    title: "Solution Integrator",
    dates: "June 2017 - Nov 2018",
    bullets: [
      "Integrated multi-component platform solutions with dependency control.",
      "Improved first-pass readiness for integrated release outcomes.",
      "Reduced downstream rework by resolving dependencies earlier.",
    ],
    tools: [t.linux, t.jira, t.agile],
    details: {
      overview:
        "Delivered integration-focused execution with emphasis on compatibility, sequencing, and stabilization.",
      scopeStakeholders: [
        "Solution architecture and integration teams",
        "Testing and validation teams",
        "Operations and deployment stakeholders",
      ],
      responsibilities: [
        "Coordinated integration sequencing for dependent components",
        "Validated solution compatibility and release readiness",
        "Aligned integration, testing, and rollout checkpoints",
        "Supported go-live stabilization and defect triage",
        "Maintained integration documentation and evidence trails",
      ],
      tools: [t.linux, t.jira, t.agile],
      programsClients: ["Client: confidential"],
      outcomes: [
        "Improved first-pass release readiness for integrated solutions",
        "Reduced late-stage integration rework",
      ],
      challengesResolutions: [
        "Dependency complexity across components -> used dependency-first integration sequencing",
        "Late defect discovery risk -> tightened pre-release integration validation criteria",
      ],
    },
  },
  {
    id: "exp-adecco",
    slug: "adecco",
    company: "Adecco",
    iconKey: "adecco",
    title: "Sr. Linux Migration Engineer",
    dates: "May 2019 - Jan 2020",
    bullets: [
      "Executed Linux migration waves with controlled cutover governance.",
      "Improved migration repeatability using runbooks and validation gates.",
      "Reduced post-cutover defects via baseline checks and SOPs.",
    ],
    tools: [t.linux, t.vmware, t.shell],
    details: {
      overview:
        "Led Linux migration execution with focus on reliability, change control, and handover readiness.",
      scopeStakeholders: [
        "Infrastructure and platform operations teams",
        "Application owners and support leads",
        "Change and release governance stakeholders",
      ],
      responsibilities: [
        "Executed Linux workload migration waves",
        "Defined pre-cutover and post-cutover validation standards",
        "Maintained rollback readiness for high-risk change windows",
        "Standardized migration SOPs and checklists",
        "Monitored post-cutover stabilization and issue burn-down",
      ],
      tools: [t.linux, t.vmware, t.shell],
      programsClients: ["Client: confidential"],
      outcomes: [
        "Improved migration consistency across workload groups",
        "Shortened stabilization timeline after cutovers",
      ],
      challengesResolutions: [
        "Uneven documentation quality -> introduced standardized migration SOP templates",
        "Tight maintenance windows -> rehearsed cutover and rollback checklists",
      ],
    },
  },
  {
    id: "exp-dxc",
    slug: "dxc",
    company: "DXC Technology",
    iconKey: "dxc",
    title: "Sr. Analyst II – Cloud Engineering",
    dates: "Feb 2020 - Dec 2023",
    note:
      "Worked across Technical PM / Project Manager, Discovery Tool Engineer, Discovery Data Specialist, and Linux Migration Engineer responsibilities.",
    bullets: [
      "Primary execution role: Technical PM / Project Manager for migration programs and client workstreams.",
      "Managed discovery-to-wave planning and migration cutover governance in enterprise environments.",
      "Delivered Linux server migrations from on-prem to AWS using CloudEndure.",
      "Improved stakeholder visibility through RAID discipline and dashboard reporting.",
    ],
    tools: [
      t.aws,
      t.azure,
      t.cloudendure,
      t.linux,
      t.jira,
      t.pmatt,
      t.powerbi,
      t.python,
      t.vmware,
      t.universalDiscovery,
    ],
    details: {
      overview:
        "Led enterprise migration delivery under the Sr. Analyst II – Cloud Engineering title, with primary execution ownership as Technical PM / Project Manager across cloud and infrastructure programs.",
      scopeStakeholders: [
        "Client infrastructure, network, and security teams",
        "Application owners and service transition leads",
        "Program leadership, PMO, CAB, and operations stakeholders",
      ],
      responsibilities: [
        "Technical PM / Project Manager: owned planning cadence, milestone control, RAID governance, and executive updates",
        "Discovery Tool Engineer: ran discovery tooling operations and readiness assurance",
        "Discovery Data Specialist: normalized discovery outputs for dependency and wave planning",
        "Linux Migration Engineer: executed Linux migration planning, validation, and stabilization controls",
        "Used PMATT and Microsoft Project to maintain baseline schedule integrity",
        "Applied Agile/Scrum/SAFe for cross-functional execution alignment",
        "Prepared CAB-ready change packets, runbooks, and rollback criteria",
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
      programsClients: [
        "Client: AT&T (delivered via DXC environment)",
        "Client: Workforce Resilience (delivered via DXC environment)",
        "Client: Astro (delivered via DXC environment)",
        "Client: Downer (delivered via DXC environment)",
        "Client: DirecTV (delivered via DXC environment)",
      ],
      outcomes: [
        "Improved migration wave readiness accuracy through dependency-led planning",
        "Reduced cutover surprises by enforcing rollback-ready readiness evidence",
        "Improved schedule predictability across parallel workstreams",
        "Strengthened leadership signal quality through structured dashboard reporting",
      ],
      challengesResolutions: [
        "Discovery data inconsistency -> implemented normalization and confidence tagging",
        "Cross-team dependency drift -> enforced ownership and escalation checkpoints",
        "High-risk migration windows -> used rehearsal-led cutover and rollback controls",
        "Competing stakeholder priorities -> used decision logs and risk-based prioritization",
      ],
    },
  },
  {
    id: "exp-masters",
    slug: "masters",
    company: "Stevens Institute of Technology",
    iconKey: "masters",
    title: "Master's — MS Information Systems",
    dates: "Jan 2024 - May 2025",
    bullets: [
      "Strengthened project governance and data-driven decision frameworks.",
      "Expanded AI, analytics, and IT strategy depth for enterprise delivery.",
      "Connected academic methods to real TPM and migration leadership use cases.",
    ],
    tools: [t.python, t.sql, t.powerbi, t.agile],
    details: {
      overview:
        "Advanced education phase focused on project management, analytics, IT strategy, and AI-relevant delivery methods.",
      scopeStakeholders: [
        "Faculty mentors and program advisors",
        "Team-based course project stakeholders",
        "Applied research and capstone collaborators",
      ],
      responsibilities: [
        "Delivered structured project planning and governance assignments",
        "Applied analytics and machine learning methods in coursework",
        "Used Python for data workflows and technical assignments",
        "Mapped IT strategy and digital innovation frameworks to delivery execution",
      ],
      tools: [t.python, t.sql, t.powerbi, t.agile],
      programsClients: ["Graduate academic program"],
      outcomes: [
        "Improved strategic planning depth for enterprise TPM roles",
        "Strengthened AI-enabled delivery and analytics capability",
      ],
      challengesResolutions: [
        "Balancing academic rigor with practical delivery lens -> applied every module to real program scenarios",
        "Multiple concurrent tracks -> used milestone planning and structured prioritization",
      ],
    },
  },
  {
    id: "exp-savvy",
    slug: "savvy",
    company: "Savvy Global Technologies",
    iconKey: "savvy",
    title: "AI Project Manager",
    dates: "July 2025 - Nov 2025",
    bullets: [
      "Drove structured planning and execution for AI delivery initiatives.",
      "Introduced stakeholder-ready reporting and risk signal management.",
      "Applied human-in-the-loop controls to keep AI outputs auditable.",
    ],
    tools: [t.python, t.jira, t.powerbi, t.agile, t.git],
    details: {
      overview:
        "Led AI initiative execution with delivery governance, stakeholder alignment, and practical automation boundaries.",
      scopeStakeholders: [
        "Product and delivery leadership",
        "Engineering and data execution teams",
        "Program stakeholders and decision owners",
      ],
      responsibilities: [
        "Defined AI initiative milestones, dependencies, and reporting cadence",
        "Managed risk, issue, and escalation routing for delivery tracks",
        "Coordinated planning and progress reviews with business stakeholders",
        "Operationalized human-in-the-loop checks for AI-assisted outputs",
      ],
      tools: [t.python, t.jira, t.powerbi, t.agile, t.git],
      programsClients: ["Client: confidential"],
      outcomes: [
        "Improved execution visibility across AI workstreams",
        "Reduced reporting turnaround through structured delivery dashboards",
      ],
      challengesResolutions: [
        "Unclear AI scope boundaries -> introduced outcome-based milestones and acceptance criteria",
        "Signal quality variance in updates -> standardized reporting templates and review checkpoints",
      ],
    },
  },
];

export const careerStory: CareerStoryBlock[] = [
  {
    id: "story-bachelors",
    phase: "Academic Foundation",
    period: "2009 - 2013",
    headline: "Started with systems-first engineering discipline.",
    narrative:
      "Bachelor's training built analytical problem solving, technical decomposition, and execution structure.",
  },
  {
    id: "story-tata",
    phase: "Operations Grounding",
    period: "2013 - 2016",
    headline: "Built reliability through operational rigor.",
    narrative:
      "At Tata, I learned production discipline, repeatable runbooks, and incident-driven execution.",
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
    id: "story-ericsson",
    phase: "Integration Discipline",
    period: "2017 - 2018",
    headline: "Reduced rework through dependency-first integration.",
    narrative:
      "At Ericsson, I aligned integration sequencing, testing checkpoints, and rollout stabilization.",
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
    id: "story-dxc",
    phase: "Enterprise Program Leadership",
    period: "2020 - 2023",
    headline: "Shifted to Technical PM leadership at enterprise scale.",
    narrative:
      "At DXC, I executed as Technical PM / Project Manager while also covering discovery and migration specialist roles.",
  },
  {
    id: "story-masters",
    phase: "Strategic Expansion",
    period: "2024 - 2025",
    headline: "Strengthened TPM and AI strategy through graduate study.",
    narrative:
      "Master's work sharpened data-led planning, IT strategy, and AI-enabled decision frameworks.",
  },
  {
    id: "story-savvy",
    phase: "AI Delivery Execution",
    period: "2025",
    headline: "Applied AI governance in delivery operations.",
    narrative:
      "At Savvy Global Technologies, I focused on practical AI program execution with structured controls.",
  },
];
