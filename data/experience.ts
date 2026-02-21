import type { CompanyIconKey, ToolIconKey } from "@/lib/iconMap";

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
  slug: "tata" | "huawei" | "ericsson" | "adecco" | "dxc";
  company: string;
  iconKey: CompanyIconKey;
  title: string;
  dates: string;
  note?: string;
  bullets: string[];
  tools: ToolRef[];
  details: ExperienceDetails;
};

const commonTools = {
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
    tools: [commonTools.linux, commonTools.shell, commonTools.serviceNow],
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
      tools: [commonTools.linux, commonTools.shell, commonTools.serviceNow],
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
    tools: [commonTools.linux, commonTools.jira, commonTools.agile],
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
      tools: [commonTools.linux, commonTools.jira, commonTools.agile],
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
    tools: [commonTools.linux, commonTools.jira, commonTools.agile],
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
      tools: [commonTools.linux, commonTools.jira, commonTools.agile],
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
    tools: [commonTools.linux, commonTools.vmware, commonTools.shell],
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
      tools: [commonTools.linux, commonTools.vmware, commonTools.shell],
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
      "Primary execution role: Project Manager for migration programs and client workstreams.",
      "Managed discovery-to-wave planning and migration cutover governance in enterprise environments.",
      "Delivered Linux server migrations from on-prem to AWS using CloudEndure.",
      "Improved stakeholder visibility through RAID discipline and dashboard reporting.",
    ],
    tools: [
      commonTools.aws,
      commonTools.azure,
      commonTools.cloudendure,
      commonTools.linux,
      commonTools.jira,
      commonTools.pmatt,
      commonTools.powerbi,
      commonTools.python,
      commonTools.vmware,
      commonTools.universalDiscovery,
    ],
    details: {
      overview:
        "Led enterprise migration delivery as a project manager while executing technical discovery, data specialization, application contexting, and Linux migration responsibilities.",
      scopeStakeholders: [
        "Client infrastructure, network, and security teams",
        "Application owners and service transition leads",
        "Program leadership, PMO, CAB, and operations stakeholders",
      ],
      responsibilities: [
        "Owned program planning and cross-functional execution cadence",
        "Ran weekly governance reviews across scope, risk, dependencies, and milestones",
        "Used PMATT and Microsoft Project to maintain baseline schedule and tracking discipline",
        "Applied Agile/Scrum/SAFe practices for delivery sequencing and stakeholder alignment",
        "Managed RAID governance and escalation pathways",
        "Directed discovery normalization and application context mapping for execution readiness",
        "Led Linux migration cutover planning and stabilization review cycles",
        "Prepared CAB-ready change packets, runbooks, and rollback criteria",
      ],
      tools: [
        commonTools.pmatt,
        commonTools.adept,
        commonTools.agile,
        commonTools.aws,
        commonTools.azure,
        commonTools.vmware,
        commonTools.linux,
        commonTools.universalDiscovery,
        commonTools.python,
        commonTools.sql,
        commonTools.powerbi,
        commonTools.shell,
        commonTools.jira,
        commonTools.confluence,
        commonTools.git,
        commonTools.serviceNow,
        commonTools.cloudendure,
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
];
