import type { LogoKey } from "@/data/logos";

export type ProjectCategory =
  | "Enterprise Migration"
  | "Linux Modernization"
  | "AI/Automation";

export type ProjectDetail = {
  problem: string;
  approach: string[];
  contribution: string[];
  tools: string[];
  outcomes: string[];
  artifacts: string[];
};

export type ProjectItem = {
  slug: string;
  title: string;
  category: ProjectCategory;
  logoKey: LogoKey;
  clientProgram: string;
  role: string;
  bullets: string[];
  toolIcons: string[];
  details: ProjectDetail;
};

export const projects: ProjectItem[] = [
  {
    slug: "att-enterprise-transition",
    title: "AT&T Infrastructure Transition Program",
    category: "Enterprise Migration",
    logoKey: "atandt",
    clientProgram: "Client: AT&T (delivered via DXC environment)",
    role: "Sr. Analyst II – Cloud Engineering",
    bullets: [
      "Coordinated multi-team transition sequencing and readiness governance.",
      "Improved dependency visibility across infrastructure and application workstreams.",
      "Standardized cutover governance for controlled transition windows.",
    ],
    toolIcons: ["jira", "service", "runbook", "dashboard"],
    details: {
      problem:
        "Large-scale infrastructure transitions had dependency risk, uneven readiness evidence, and schedule pressure.",
      approach: [
        "Structured migration moves into governed groups with readiness criteria.",
        "Ran coordinated cutover planning across infra, app, and operations teams.",
        "Tracked risk and blockers with clear owners and escalation workflow.",
      ],
      contribution: [
        "Owned transition governance cadence and readiness checkpoints.",
        "Coordinated stakeholder decision forums for cutover and stabilization.",
        "Maintained leadership signal visibility via structured reporting.",
      ],
      tools: ["Jira", "ServiceNow", "Runbooks", "Dashboard reporting"],
      outcomes: [
        "Improved predictability during migration windows",
        "Reduced cross-team execution ambiguity",
      ],
      artifacts: [
        "Transition wave board snapshot (placeholder)",
        "Cutover governance model diagram (placeholder)",
      ],
    },
  },
  {
    slug: "workforce-resilience-aws-program",
    title: "Workforce Resilience On-Prem -> AWS Program",
    category: "Enterprise Migration",
    logoKey: "workforce-resilience",
    clientProgram: "Client: Workforce Resilience (delivered via DXC environment)",
    role: "Sr. Analyst II – Cloud Engineering",
    bullets: [
      "Executed CloudEndure-led Linux server migrations to AWS.",
      "Translated discovery outputs into wave-based migration plans.",
      "Improved migration readiness with validation and rollback controls.",
    ],
    toolIcons: ["aws", "cloudendure", "linux", "discovery", "jira"],
    details: {
      problem:
        "Legacy on-prem workloads needed reliable migration into AWS without operational disruption.",
      approach: [
        "Mapped discovery outputs into executable migration scope and waves.",
        "Used CloudEndure for controlled Linux server migration execution.",
        "Implemented validation gates before and after each cutover window.",
      ],
      contribution: [
        "Led cross-team planning and migration execution governance.",
        "Owned dependency and readiness signal tracking for each wave.",
        "Managed escalation and stabilization communication with stakeholders.",
      ],
      tools: ["AWS", "CloudEndure", "Linux", "Universal Discovery", "Jira"],
      outcomes: [
        "Improved migration consistency across successive waves",
        "Reduced unplanned issue exposure through readiness controls",
      ],
      artifacts: [
        "Wave planning board (placeholder)",
        "Migration validation checklist (placeholder)",
      ],
    },
  },
  {
    slug: "astro-transition-program",
    title: "Astro Infrastructure Transition",
    category: "Enterprise Migration",
    logoKey: "astro",
    clientProgram: "Client: Astro (delivered via DXC environment)",
    role: "Sr. Analyst II – Cloud Engineering (Project Manager)",
    bullets: [
      "Managed migration planning cadence and cross-team dependency control.",
      "Aligned technical owners on cutover readiness and rollback criteria.",
      "Maintained project governance visibility through RAID and status tracking.",
    ],
    toolIcons: ["jira", "governance", "runbook", "dashboard"],
    details: {
      problem:
        "Program delivery required stronger schedule and dependency control across distributed stakeholders.",
      approach: [
        "Applied PM-driven governance with milestone and risk tracking.",
        "Integrated technical readiness evidence into cutover planning.",
        "Maintained regular stakeholder updates and escalation flow.",
      ],
      contribution: [
        "Led project management cadence and workstream alignment.",
        "Tracked risks, blockers, and dependencies in governance routines.",
        "Supported technical planning inputs for migration readiness.",
      ],
      tools: ["PMATT", "Microsoft Project", "Jira", "Runbooks", "Status dashboards"],
      outcomes: [
        "Improved execution clarity across migration workstreams",
        "Reduced dependency-related surprises before planned cutovers",
      ],
      artifacts: [
        "Program tracker snapshot (placeholder)",
        "RAID and milestone view (placeholder)",
      ],
    },
  },
  {
    slug: "downer-transition-program",
    title: "Downer Infrastructure Program",
    category: "Enterprise Migration",
    logoKey: "downer",
    clientProgram: "Client: Downer (delivered via DXC environment)",
    role: "Sr. Analyst II – Cloud Engineering (Project Manager)",
    bullets: [
      "Drove delivery schedule management and stakeholder governance.",
      "Coordinated discovery-to-cutover handoffs across technical teams.",
      "Improved reporting quality for leadership-level tracking.",
    ],
    toolIcons: ["jira", "discovery", "governance", "dashboard"],
    details: {
      problem:
        "Cross-functional delivery streams needed tighter planning controls and clearer ownership.",
      approach: [
        "Established consistent governance cadence for planning and execution.",
        "Mapped readiness inputs from discovery and technical workstreams.",
        "Tracked escalation paths for risks impacting timelines.",
      ],
      contribution: [
        "Owned PM execution framework for schedule and dependency governance.",
        "Facilitated coordination between technical teams and program leadership.",
        "Produced structured status outputs for decision support.",
      ],
      tools: ["PMATT", "Microsoft Project", "Jira", "Discovery data views"],
      outcomes: [
        "Improved governance maturity and delivery transparency",
        "More predictable execution against committed milestones",
      ],
      artifacts: [
        "Milestone plan snapshot (placeholder)",
        "Governance report template (placeholder)",
      ],
    },
  },
  {
    slug: "directv-transition-program",
    title: "DirecTV Migration Support Program",
    category: "Enterprise Migration",
    logoKey: "directv",
    clientProgram: "Client: DirecTV (delivered via DXC environment)",
    role: "Sr. Analyst II – Cloud Engineering (Project Manager)",
    bullets: [
      "Managed migration governance and readiness review cycles.",
      "Coordinated technical and business stakeholders for execution alignment.",
      "Strengthened issue and risk visibility through structured updates.",
    ],
    toolIcons: ["jira", "service", "runbook", "governance"],
    details: {
      problem:
        "Transition execution required stronger coordination between project governance and technical delivery teams.",
      approach: [
        "Applied PM governance model with scheduled risk and readiness reviews.",
        "Consolidated technical signals into program-level status tracking.",
        "Aligned execution decisions using change and dependency checkpoints.",
      ],
      contribution: [
        "Owned project management coordination for migration activities.",
        "Maintained risk/issue ownership with escalation follow-through.",
        "Supported technical teams with planning and communication structure.",
      ],
      tools: ["PMATT", "Microsoft Project", "Jira", "ServiceNow", "Runbooks"],
      outcomes: [
        "Improved stakeholder alignment during migration cycles",
        "Reduced ambiguity in execution readiness decisions",
      ],
      artifacts: [
        "Execution dashboard view (placeholder)",
        "Cutover communication checklist (placeholder)",
      ],
    },
  },
  {
    slug: "linux-modernization-factory",
    title: "Linux Migration & Modernization Factory",
    category: "Linux Modernization",
    logoKey: "confidential",
    clientProgram: "Client (confidential) - delivered across Adecco and DXC environments",
    role: "Sr. Linux Migration Engineer / Sr. Analyst II – Cloud Engineering",
    bullets: [
      "Built repeatable Linux migration playbooks and validation standards.",
      "Improved post-cutover stabilization with baseline checks and runbooks.",
      "Enabled cleaner operations handover through structured SOPs.",
    ],
    toolIcons: ["linux", "vmware", "migration", "runbook", "script"],
    details: {
      problem:
        "Heterogeneous Linux estates and non-standard execution patterns increased migration risk.",
      approach: [
        "Established migration checkpoints and technical validation baselines.",
        "Executed cutover with rollback-ready runbooks and SOP governance.",
        "Monitored stabilization signals and documented operational closure.",
      ],
      contribution: [
        "Defined and maintained migration SOP framework.",
        "Executed technical migration and defect triage workflows.",
        "Aligned support ownership through clear handover criteria.",
      ],
      tools: ["Linux", "VMware", "Shell scripting", "Migration runbooks"],
      outcomes: [
        "Improved migration reliability across mixed Linux workloads",
        "Reduced stabilization effort after cutover windows",
      ],
      artifacts: [
        "Linux migration checklist template (placeholder)",
        "Post-cutover validation output (placeholder)",
      ],
    },
  },
  {
    slug: "supplychainengine-ai-governance",
    title: "SupplyChainEngine AI Delivery Enablement",
    category: "AI/Automation",
    logoKey: "confidential",
    clientProgram: "Client (confidential) - AI initiative portfolio",
    role: "AI Project Manager",
    bullets: [
      "Implemented lifecycle checkpoints for AI initiative delivery.",
      "Improved progress and risk communication through structured reporting.",
      "Aligned AI execution priorities with operational constraints.",
    ],
    toolIcons: ["ai", "python", "dashboard", "governance"],
    details: {
      problem:
        "AI delivery lacked consistent governance, causing execution ambiguity and reporting gaps.",
      approach: [
        "Established milestone gates from planning through validation.",
        "Introduced recurring risk/status synthesis workflows.",
        "Maintained clear human approval boundaries for critical outputs.",
      ],
      contribution: [
        "Owned planning and governance of AI delivery track.",
        "Aligned cross-functional stakeholders on sequence and acceptance criteria.",
        "Maintained decision logs and risk controls across milestones.",
      ],
      tools: ["Python", "Dashboards", "Risk tracking", "Planning boards"],
      outcomes: [
        "Improved delivery clarity and milestone accountability",
        "Faster stakeholder update cycles with better consistency",
      ],
      artifacts: [
        "AI lifecycle governance diagram (placeholder)",
        "Risk/status dashboard screenshot (placeholder)",
      ],
    },
  },
  {
    slug: "local-llm-delivery-ops",
    title: "Local LLM Delivery Ops Assistant",
    category: "AI/Automation",
    logoKey: "confidential",
    clientProgram: "Client (confidential) - internal delivery operations",
    role: "AI Project Manager",
    bullets: [
      "Built local-first workflow for delivery status and risk synthesis.",
      "Reduced repetitive reporting workload using structured templates.",
      "Maintained review controls for output quality and trust.",
    ],
    toolIcons: ["ollama", "python", "ai", "dashboard", "governance"],
    details: {
      problem:
        "Manual reporting cycles consumed execution bandwidth and delayed early risk visibility.",
      approach: [
        "Built local LLM-assisted extraction and summary pipeline.",
        "Applied standardized templates for status, RAID, and actions.",
        "Added human review checkpoints before publishing outputs.",
      ],
      contribution: [
        "Defined workflow architecture and governance controls.",
        "Implemented summary logic with source-aware validation steps.",
        "Measured throughput and consistency gains in reporting cadence.",
      ],
      tools: ["Ollama", "Python", "Templates", "Dashboards"],
      outcomes: [
        "Improved reporting turnaround and consistency",
        "Increased trust via auditable human-in-the-loop flow",
      ],
      artifacts: [
        "Workflow diagram (placeholder)",
        "Weekly summary sample (placeholder)",
      ],
    },
  },
];

export const projectCategories: ProjectCategory[] = [
  "Enterprise Migration",
  "Linux Modernization",
  "AI/Automation",
];

export const featuredProjectSlugs = [
  "workforce-resilience-aws-program",
  "att-enterprise-transition",
  "supplychainengine-ai-governance",
];
