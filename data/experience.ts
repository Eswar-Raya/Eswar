import type { LogoKey } from "@/data/logos";

export type ExperienceDetail = {
  overview: string;
  responsibilities: string[];
  toolsTech: string[];
  programsClients: string[];
  outcomes: string[];
  challengesResolutions: string[];
};

export type ExperienceItem = {
  slug: string;
  company: string;
  logoKey: LogoKey;
  title: string;
  dates: string;
  highlights: string[];
  techIcons: string[];
  details: ExperienceDetail;
};

export const experiences: ExperienceItem[] = [
  {
    slug: "tata",
    company: "Tata",
    logoKey: "tata",
    title: "Assistant Manager / Technical Engineer",
    dates: "June 2013 - Oct 2016",
    highlights: [
      "Stabilized daily technical operations for business-critical environments.",
      "Improved response quality by standardizing triage and handoff patterns.",
      "Reduced repeat manual effort through script-assisted operations.",
    ],
    techIcons: ["linux", "monitor", "script", "service"],
    details: {
      overview:
        "Built a strong operations foundation focused on service reliability, runbook discipline, and execution consistency.",
      responsibilities: [
        "Executed platform operations routines and production support activities",
        "Maintained Linux operations diagnostics and health checks",
        "Maintained incident triage and escalation handoffs across teams",
        "Standardized recurring operational procedures and documentation",
      ],
      toolsTech: ["Linux", "Monitoring tools", "Scripting", "Ticketing systems"],
      programsClients: ["Client (confidential)"],
      outcomes: [
        "Improved operational consistency across support cycles",
        "Reduced handling variability through standardized runbooks",
      ],
      challengesResolutions: [
        "Process inconsistency across shifts -> introduced shared SOP checklists and handoff templates",
        "High manual load in repetitive tasks -> automated repeated activities with scripts",
      ],
    },
  },
  {
    slug: "huawei",
    company: "Huawei",
    logoKey: "huawei",
    title: "Sr. Technical Engineer",
    dates: "Oct 2016 - May 2017",
    highlights: [
      "Improved release readiness checks and deployment control discipline.",
      "Strengthened coordination between engineering and operations groups.",
      "Reduced avoidable deployment defects via validation checkpoints.",
    ],
    techIcons: ["linux", "release", "security", "service"],
    details: {
      overview:
        "Supported platform reliability initiatives with structured release validation and operational control.",
      responsibilities: [
        "Validated release dependencies before production windows",
        "Supported diagnostics for platform and infrastructure incidents",
        "Coordinated readiness checkpoints with operations stakeholders",
        "Maintained quality checks for deployment and environment transitions",
      ],
      toolsTech: ["Linux", "Release workflows", "Security checks", "Incident systems"],
      programsClients: ["Client (confidential)"],
      outcomes: [
        "Improved release predictability and technical quality posture",
        "Lowered production risk through disciplined pre-release checks",
      ],
      challengesResolutions: [
        "Compressed release windows -> enforced readiness evidence before cutover",
        "Cross-team dependency gaps -> implemented explicit checkpoint ownership",
      ],
    },
  },
  {
    slug: "ericsson",
    company: "Ericsson",
    logoKey: "ericsson",
    title: "Solution Integrator",
    dates: "June 2017 - Nov 2018",
    highlights: [
      "Integrated platform components with dependency-aware sequencing.",
      "Improved first-pass release readiness for integrated solutions.",
      "Reduced downstream rework from late dependency discovery.",
    ],
    techIcons: ["integration", "linux", "release", "security"],
    details: {
      overview:
        "Delivered integration-led solution readiness with emphasis on dependency management and rollout stability.",
      responsibilities: [
        "Coordinated integration sequencing across platform components",
        "Validated compatibility and release-readiness criteria",
        "Aligned testing, integration, and rollout dependencies",
        "Supported stabilization and defect triage after go-live",
      ],
      toolsTech: ["Linux", "Integration workflows", "Release coordination", "Validation frameworks"],
      programsClients: ["Client (confidential)"],
      outcomes: [
        "Higher first-pass solution readiness during release cycles",
        "Reduced release friction from unresolved dependencies",
      ],
      challengesResolutions: [
        "Complex inter-component dependencies -> used dependency-first integration plans",
        "Late defect surfacing -> tightened pre-release integration gates",
      ],
    },
  },
  {
    slug: "adecco",
    company: "Adecco",
    logoKey: "adecco",
    title: "Sr. Linux Migration Engineer",
    dates: "May 2019 - Jan 2020",
    highlights: [
      "Executed Linux migration waves with controlled cutover governance.",
      "Improved migration repeatability via runbooks and validation gates.",
      "Reduced post-migration defects through standard baseline checks.",
    ],
    techIcons: ["linux", "vmware", "migration", "runbook"],
    details: {
      overview:
        "Led Linux migration execution with focus on reliability, change control, and rapid post-cutover stabilization.",
      responsibilities: [
        "Executed migration waves for Linux workloads",
        "Defined pre-cutover and post-cutover validation standards",
        "Maintained rollback readiness for high-risk migration windows",
        "Standardized migration SOPs for handover consistency",
      ],
      toolsTech: ["Linux", "VMware", "Migration runbooks", "Change controls"],
      programsClients: ["Client (confidential)"],
      outcomes: [
        "Improved migration consistency across multiple waves",
        "Shortened stabilization timeline after production cutovers",
      ],
      challengesResolutions: [
        "Limited documentation quality -> introduced migration SOP templates",
        "Tight change windows -> rehearsed cutover and rollback checklists",
      ],
    },
  },
  {
    slug: "dxc",
    company: "DXC Technology",
    logoKey: "dxc",
    title: "Sr. Analyst II – Cloud Engineering",
    dates: "Feb 2020 - Dec 2023",
    highlights: [
      "Primary execution role: Project Manager across migration programs and client workstreams.",
      "Handled parallel tracks across Linux Migration Engineer, Discovery Data Specialist, and Application Contexter responsibilities.",
      "Delivered on-prem to AWS Linux migration waves using CloudEndure.",
    ],
    techIcons: ["aws", "cloudendure", "linux", "jira", "powerbi", "governance"],
    details: {
      overview:
        "Led enterprise cloud migration delivery with Project Management as the primary function, while also executing discovery, contexting, and Linux migration workstreams in parallel.",
      responsibilities: [
        "Primary role: Project Manager for multi-track migration execution and governance",
        "Owned end-to-end wave lifecycle: discovery, plan, readiness, cutover, and stabilization",
        "Managed weekly program governance calls, RAID reviews, and stakeholder decision forums",
        "Used PMATT and Microsoft Project for schedule control, dependency tracking, and milestone planning",
        "Applied Agile Scrum methodology for delivery cadence, sprint planning, and cross-team follow-up",
        "Planned and governed migration waves end-to-end",
        "Translated discovery outputs into executable migration scope",
        "Worked as Discovery Data Specialist to reconcile and curate inventory quality",
        "Performed Application Contexter activities to map applications to infrastructure and owners",
        "Ran dependency mapping and readiness checkpoints across infra, app, network, and security teams",
        "Managed RAID controls, dependency ownership, and stakeholder cadence",
        "Prepared CAB-ready change packets, runbooks, and rollback criteria",
        "Executed Linux Migration Engineer responsibilities during cutover and stabilization windows",
        "Maintained weekly executive status, risk narratives, and burn-down tracking",
        "Mentored junior engineers on migration hygiene, validation evidence, and issue triage flow",
        "Tracked program signal dashboards for leadership visibility",
      ],
      toolsTech: [
        "Program Leadership: Cross-Functional Execution, Program Planning & Delivery, Risk Management, Stakeholder Alignment, Technical Decision-Making",
        "Delivery Methods: Agile, Scrum, SAFe",
        "Cloud: AWS (EC2, S3, IAM, VPC, CloudEndure, CloudWatch)",
        "Cloud: Azure (VMs, Storage, NSG)",
        "Infrastructure: VMware vSphere, High Availability (HA), Disaster Recovery (DR)",
        "Linux Platforms: RHEL, SLES, CentOS",
        "Networking & Systems: Network Planning, Load Balancing, Infrastructure Discovery, SDLC Optimization, Performance Monitoring, System Design",
        "Data & Reporting: Python, SQL, Power BI, Excel Macros, Shell Scripting",
        "Program Tooling: PMATT, ADEPT, Universal Discovery, Microsoft Project, JIRA, Confluence, Git, ServiceNow",
      ],
      programsClients: [
        "Client: AT&T (delivered via DXC environment)",
        "Client: Workforce Resilience (delivered via DXC environment)",
        "Client: Astro (delivered via DXC environment)",
        "Client: Downer (delivered via DXC environment)",
        "Client: DirecTV (delivered via DXC environment)",
        "Migration Discovery Program (Universal Discovery + manual reconciliation)",
      ],
      outcomes: [
        "Improved schedule predictability by running PM-driven governance across parallel workstreams",
        "Increased migration wave readiness accuracy through dependency-led planning",
        "Improved migration throughput using wave-based governance model",
        "Reduced execution friction through discovery normalization and readiness gates",
        "Increased leadership visibility through structured delivery dashboards",
        "Reduced cutover surprises by enforcing rollback-ready evidence before go-live",
        "Improved cross-team coordination by integrating PM planning with technical discovery and contexting outputs",
        "Strengthened personal capability in enterprise stakeholder orchestration and risk-led decisioning",
      ],
      challengesResolutions: [
        "Inconsistent discovery signal quality -> built normalization and confidence tagging routines",
        "Cross-team dependency drift -> applied explicit gate ownership and escalation paths",
        "High-risk cutover windows -> enforced rollback-ready cutover playbooks",
        "Conflicting stakeholder priorities -> used decision logs and risk-based prioritization in weekly governance",
        "Learning outcome: shifted from task tracking to system-level program control and measurable delivery outcomes",
      ],
    },
  },
  {
    slug: "masters",
    company: "Stevens Institute of Technology",
    logoKey: "stevens",
    title: "Masters: Stevens Institute of Technology (MS Information Systems)",
    dates: "Jan 2024 - May 2025",
    highlights: [
      "Deepened enterprise information systems and analytics capabilities.",
      "Strengthened strategic decision-making for technical delivery leadership.",
      "Applied academic frameworks to cloud and AI delivery scenarios.",
    ],
    techIcons: ["education", "analytics", "python", "strategy"],
    details: {
      overview:
        "Completed graduate training to strengthen strategy, data-driven decisioning, and program execution capability.",
      responsibilities: [
        "Delivered course projects in systems, analytics, and strategy tracks",
        "Executed team-based assignments with structured delivery controls",
        "Applied program management frameworks to technical scenarios",
        "Produced stakeholder-facing analysis and recommendation artifacts",
      ],
      toolsTech: ["Python", "Analytics methods", "Project management frameworks", "Data tooling"],
      programsClients: ["Academic Program: MS Information Systems"],
      outcomes: [
        "Strengthened TPM decision quality through analytics-backed reasoning",
        "Improved readiness for AI-enabled delivery leadership",
      ],
      challengesResolutions: [
        "Balancing broad and deep coursework -> prioritized enterprise-relevant domains",
        "Adapting theory to execution -> converted models into practical delivery artifacts",
      ],
    },
  },
  {
    slug: "savvy",
    company: "Savvy Global Technologies",
    logoKey: "savvy",
    title: "AI Project Manager",
    dates: "July 2025 - Nov 2025",
    highlights: [
      "Led AI initiative planning and governance with structured checkpoints.",
      "Improved reporting cadence using AI-assisted status and risk synthesis.",
      "Maintained human-in-the-loop controls for decision integrity.",
    ],
    techIcons: ["ai", "python", "ollama", "dashboard", "governance"],
    details: {
      overview:
        "Positioned AI as strategic enablement for delivery operations, not experimental output generation.",
      responsibilities: [
        "Owned end-to-end project planning as AI Project Manager for delivery initiatives",
        "Defined AI delivery operating model aligned to program governance standards",
        "Defined scope, milestones, and validation criteria for AI initiatives",
        "Maintained project plans, risk logs, and progress tracking for leadership reporting",
        "Ran stakeholder syncs to align product, engineering, and business decisions",
        "Designed planning, risk-sensing, and reporting workflows using local-first AI tooling",
        "Implemented review checkpoints for AI-assisted outputs",
        "Built reusable templates for status, RAID, decision notes, and stakeholder updates",
        "Aligned product, delivery, and leadership stakeholders",
        "Maintained auditable risk and status reporting frameworks",
        "Established boundaries for automation vs human decision ownership",
      ],
      toolsTech: [
        "Python",
        "Ollama (local LLM)",
        "Dashboards",
        "Governance checklists",
        "Jira",
        "Agile Scrum methodology",
      ],
      programsClients: [
        "Client (confidential)",
        "AI Project Manager initiatives (delivery acceleration + reporting automation)",
      ],
      outcomes: [
        "Improved planning clarity by converting ambiguous AI tasks into milestone-driven delivery tracks",
        "Faster delivery reporting cycles with consistent output quality",
        "Stronger confidence in AI-assisted operations through controlled review flow",
        "Improved cross-team alignment by surfacing risks earlier in delivery cadence",
        "Reduced manual PM reporting effort using standardized AI-assisted templates",
        "Strengthened practical learning on AI governance, quality checks, and traceability",
      ],
      challengesResolutions: [
        "Low trust in generated outputs -> introduced source-linked validation checks",
        "Ambiguous early scope -> enforced milestone-based governance and acceptance criteria",
        "Adoption resistance for AI workflow changes -> rolled out phased pilots with measured feedback loops",
        "Learning outcome: reframed AI from novelty to controlled strategic enablement for delivery teams",
      ],
    },
  },
];
