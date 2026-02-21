export type NavItem = {
  href: string;
  label: string;
};

export type MetricItem = {
  label: string;
  value: string;
  context: string;
};

export type GrowthPoint = {
  year: string;
  level: number;
  label: string;
};

export type ServiceItem = {
  slug: string;
  title: string;
  icon: string;
  summary: string;
};

export type ExperienceDetail = {
  overview: string;
  scopeStakeholders: string[];
  responsibilities: string[];
  tools: string[];
  deliverables: string[];
  outcomes: string[];
  challenges: string[];
};

export type ExperienceItem = {
  slug: string;
  company: string;
  icon: string;
  title: string;
  dates: string;
  highlights: string[];
  tech: string[];
  details: ExperienceDetail;
};

export type EducationItem = {
  slug: string;
  school: string;
  icon: string;
  degree: string;
  field: string;
  dates: string;
  coursework: string[];
  outcomes: string[];
  whyThisMatters: string[];
};

export type ProjectCategory =
  | "Enterprise Migration Programs"
  | "Linux Migration & Modernization"
  | "AI / Automation Initiatives";

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
  category: ProjectCategory;
  name: string;
  clientContext: string;
  role: string;
  highlights: string[];
  tools: string[];
  details: ProjectDetail;
};

export const profile = {
  name: "Eswar Raviteja Rayavarapu",
  headline: "Technical Project Manager - Cloud Infrastructure & AI-Enabled Delivery",
  location: "United States",
  photo: "/Eswar.png",
  introTags: [
    "Cloud Migration Governance",
    "Infrastructure Program Delivery",
    "Linux Modernization",
    "AI-Enabled Delivery",
  ],
};

export const navItems: NavItem[] = [
  { href: "/home", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/education", label: "Education" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Skills/Services" },
  { href: "/contact", label: "Contact" },
];

export const metrics: MetricItem[] = [
  {
    label: "Experience",
    value: "10+ Years",
    context: "Infrastructure, cloud, and delivery leadership",
  },
  {
    label: "Enterprise Programs",
    value: "Multi-client",
    context: "Complex migration and transition portfolios",
  },
  {
    label: "Core Strength",
    value: "Cloud + Linux",
    context: "AWS migration governance and Linux modernization",
  },
  {
    label: "Delivery Mode",
    value: "AI-Enabled",
    context: "Human-in-the-loop execution and reporting workflows",
  },
];

export const careerGrowth: GrowthPoint[] = [
  { year: "2013", level: 2, label: "Core Ops" },
  { year: "2016", level: 3, label: "Technical Ownership" },
  { year: "2018", level: 4, label: "Solution Integration" },
  { year: "2020", level: 6, label: "Migration Leadership" },
  { year: "2023", level: 8, label: "Enterprise Programs" },
  { year: "2025", level: 9, label: "AI PM Delivery" },
];

export const services: ServiceItem[] = [
  {
    slug: "cloud-migration",
    title: "Cloud Migration Programs",
    icon: "cloud",
    summary: "Wave planning, readiness gates, and controlled enterprise cutovers.",
  },
  {
    slug: "tpm",
    title: "Technical Program Management",
    icon: "timeline",
    summary: "Cross-functional execution across infrastructure, application, and security teams.",
  },
  {
    slug: "linux-modernization",
    title: "Linux Migration & Modernization",
    icon: "linux",
    summary: "OS standardization, runbook governance, and post-migration stabilization.",
  },
  {
    slug: "stakeholder-management",
    title: "Stakeholder & Risk Management",
    icon: "governance",
    summary: "Structured decisions, RAID controls, and escalation clarity.",
  },
  {
    slug: "ai-delivery",
    title: "AI-Enabled Delivery Ops",
    icon: "ai",
    summary: "Automation for planning, risk sensing, and status synthesis under human oversight.",
  },
  {
    slug: "delivery-intelligence",
    title: "Delivery Intelligence Dashboards",
    icon: "powerbi",
    summary: "Leadership reporting for migration progress, risks, and throughput signals.",
  },
];

export const experiences: ExperienceItem[] = [
  {
    slug: "tata",
    company: "Tata",
    icon: "tata",
    title: "Assistant Manager / Technical Engineer",
    dates: "June 2013 - Oct 2016",
    highlights: [
      "Stabilized operational workflows for enterprise network and infrastructure workloads.",
      "Improved incident response quality through repeatable runbook execution.",
      "Increased delivery reliability by reducing manual intervention points.",
    ],
    tech: ["linux", "monitor", "script", "service"],
    details: {
      overview:
        "Built an early technical operations foundation focused on stability, response discipline, and execution quality.",
      scopeStakeholders: [
        "Operations command center and service assurance teams",
        "Network engineering and platform support groups",
        "Internal delivery managers",
      ],
      responsibilities: [
        "Executed and improved technical operations routines for critical services",
        "Maintained Linux-based operational tasks and diagnostics",
        "Drove operational documentation consistency for recurring activities",
      ],
      tools: ["Linux", "Monitoring tools", "Scripting", "Ticketing workflows"],
      deliverables: [
        "Standardized operating checklists",
        "Incident response runbooks",
        "Operational health reporting inputs",
      ],
      outcomes: [
        "Higher operational consistency across daily support cycles",
        "Reduced variability in issue triage and handoff quality",
      ],
      challenges: [
        "Challenge: Process variability across shifts. Action: Normalized runbooks and handoff templates.",
        "Challenge: Repeated manual tasks. Action: Introduced scripting to reduce repeat effort.",
      ],
    },
  },
  {
    slug: "huawei",
    company: "Huawei",
    icon: "huawei",
    title: "Sr. Technical Engineer",
    dates: "Oct 2016 - May 2017",
    highlights: [
      "Supported platform reliability through disciplined release readiness checks.",
      "Improved technical quality controls around deployment activities.",
      "Strengthened coordination between engineering and operations groups.",
    ],
    tech: ["linux", "release", "security", "service"],
    details: {
      overview:
        "Contributed as a senior engineer to platform reliability and controlled deployment execution.",
      scopeStakeholders: [
        "Platform engineering teams",
        "Operations and production support teams",
        "Release and environment owners",
      ],
      responsibilities: [
        "Validated release readiness and technical dependencies",
        "Supported infrastructure and platform issue diagnostics",
        "Coordinated delivery checkpoints with operations stakeholders",
      ],
      tools: ["Linux", "Release workflows", "Security checks", "Incident systems"],
      deliverables: [
        "Release validation checklist improvements",
        "Operational issue triage documentation",
        "Cross-team handoff notes",
      ],
      outcomes: [
        "More predictable release execution windows",
        "Lower exposure to avoidable deployment defects",
      ],
      challenges: [
        "Challenge: Tight release cycles. Action: Enforced readiness checkpoints before cutover.",
        "Challenge: Team dependency gaps. Action: Added explicit handoff confirmations.",
      ],
    },
  },
  {
    slug: "ericsson",
    company: "Ericsson",
    icon: "ericsson",
    title: "Solution Integrator",
    dates: "June 2017 - Nov 2018",
    highlights: [
      "Integrated platform components across enterprise environments.",
      "Improved end-to-end solution readiness before production release.",
      "Reduced delivery friction by tightening dependency sequencing.",
    ],
    tech: ["integration", "linux", "release", "security"],
    details: {
      overview:
        "Led integration-focused execution to ensure platform components performed reliably as complete solutions.",
      scopeStakeholders: [
        "Solution architects and integration teams",
        "Testing and validation teams",
        "Operations and deployment stakeholders",
      ],
      responsibilities: [
        "Coordinated integration sequencing across dependent components",
        "Validated technical compatibility and release readiness",
        "Supported stabilization during rollout windows",
      ],
      tools: ["Linux", "Integration workflows", "Release coordination", "Validation checklists"],
      deliverables: [
        "Integration readiness matrices",
        "Pre-release dependency validations",
        "Stabilization and issue triage logs",
      ],
      outcomes: [
        "Improved first-pass release readiness",
        "Reduced downstream rework from dependency mismatches",
      ],
      challenges: [
        "Challenge: Interdependent components. Action: Used dependency-first integration sequencing.",
        "Challenge: Late-stage defect discovery. Action: Tightened pre-release validation criteria.",
      ],
    },
  },
  {
    slug: "adecco",
    company: "Adecco",
    icon: "adecco",
    title: "Sr. Linux Migration Engineer",
    dates: "May 2019 - Jan 2020",
    highlights: [
      "Delivered Linux migration waves with strong cutover discipline.",
      "Improved migration repeatability using runbooks and validation gates.",
      "Reduced post-migration defects through standardized checks.",
    ],
    tech: ["linux", "vmware", "migration", "runbook"],
    details: {
      overview:
        "Executed Linux migration programs focused on reliability, controlled downtime windows, and clean handover.",
      scopeStakeholders: [
        "Infrastructure platform teams",
        "Application owners and support leads",
        "Change management and operations teams",
      ],
      responsibilities: [
        "Planned and executed Linux workload migrations",
        "Defined pre/post migration validation checkpoints",
        "Managed rollback readiness for high-risk cutovers",
      ],
      tools: ["Linux", "VMware", "Migration runbooks", "Change control systems"],
      deliverables: [
        "Migration wave plans",
        "Cutover and rollback checklists",
        "Post-migration validation reports",
      ],
      outcomes: [
        "Higher migration success consistency across waves",
        "Faster stabilization after cutovers",
      ],
      challenges: [
        "Challenge: Documentation gaps. Action: Standardized migration SOP templates.",
        "Challenge: Tight maintenance windows. Action: Rehearsed cutover and rollback sequences.",
      ],
    },
  },
  {
    slug: "dxc",
    company: "DXC Technology",
    icon: "dxc",
    title: "Sr. Analyst II – Cloud Engineering",
    dates: "Feb 2020 - Dec 2023",
    highlights: [
      "Led enterprise migration programs spanning discovery, planning, and AWS execution.",
      "Worked across Technical PM / Project Manager, Discovery Tool Engineer, Discovery Data Specialist, and Linux Migration Engineer responsibilities.",
      "Improved delivery governance with structured RAID controls, readiness gates, and reporting visibility.",
      "Delivered on-prem to AWS migration waves using CloudEndure for Linux server transitions.",
    ],
    tech: ["aws", "cloudendure", "linux", "jira", "powerbi", "discovery"],
    details: {
      overview:
        "Drove enterprise cloud and infrastructure programs end-to-end, combining technical execution depth with program governance rigor.",
      scopeStakeholders: [
        "Client infrastructure, network, and security teams",
        "Application owners and service transition managers",
        "Program leadership, PMO, and change advisory boards",
      ],
      responsibilities: [
        "Planned and governed migration waves from discovery through stabilization",
        "Owned discovery data quality and transformed outputs into executable plans",
        "Managed risk, dependencies, and stakeholder communication across workstreams",
        "Directed Linux migration execution and readiness criteria for cutovers",
      ],
      tools: [
        "AWS",
        "CloudEndure",
        "Linux",
        "Jira",
        "Power BI",
        "Universal Discovery",
        "ServiceNow",
      ],
      deliverables: [
        "Program-level migration wave plans",
        "Discovery inventory and dependency mapping outputs",
        "Executive RAID and status reporting dashboards",
        "Cutover runbooks and post-migration stabilization plans",
      ],
      outcomes: [
        "Improved migration throughput and predictability through repeatable governance",
        "Reduced delivery friction by consolidating discovery, planning, and execution signals",
      ],
      challenges: [
        "Challenge: Inconsistent discovery data quality. Action: Built normalization and confidence tagging workflows.",
        "Challenge: Multi-team change dependencies. Action: Introduced gate-based readiness and explicit ownership.",
        "Challenge: High-risk migration windows. Action: Applied controlled cutover/rollback protocols.",
      ],
    },
  },
  {
    slug: "masters",
    company: "Stevens Institute of Technology",
    icon: "stevens",
    title: "Masters (Stevens Institute of Technology)",
    dates: "Jan 2024 - May 2025",
    highlights: [
      "Deepened strategic grounding in information systems and enterprise technology delivery.",
      "Strengthened analytics and decision support capabilities for program leadership.",
      "Connected academic frameworks to real-world cloud and AI delivery patterns.",
    ],
    tech: ["education", "analytics", "python", "strategy"],
    details: {
      overview:
        "Completed graduate studies to strengthen technical management, analytics, and enterprise delivery decision-making.",
      scopeStakeholders: [
        "Faculty and academic advisors",
        "Cross-functional student teams",
        "Industry-focused project collaborators",
      ],
      responsibilities: [
        "Executed coursework spanning IT strategy, analytics, and systems management",
        "Applied structured problem solving to technical delivery scenarios",
        "Produced project artifacts with enterprise-focused framing",
      ],
      tools: ["Python", "Analytics frameworks", "Project management methods", "Data tools"],
      deliverables: [
        "Capstone and course project outputs",
        "Strategy and analysis presentations",
        "Applied technology management reports",
      ],
      outcomes: [
        "Elevated ability to align technical delivery with business outcomes",
        "Stronger foundation for AI-enabled program execution",
      ],
      challenges: [
        "Challenge: Balancing depth and breadth across subjects. Action: Prioritized enterprise-relevant applications.",
        "Challenge: Translating theory to execution. Action: Framed outputs around real delivery constraints.",
      ],
    },
  },
  {
    slug: "ai-initiatives",
    company: "Savvy Global Technologies",
    icon: "savvy",
    title: "AI Project Manager",
    dates: "July 2025 - Nov 2025",
    highlights: [
      "Led AI delivery initiatives with structured governance and business alignment.",
      "Built practical automation workflows for planning, risk sensing, and reporting acceleration.",
      "Positioned AI as delivery enablement with clear human-in-the-loop boundaries.",
    ],
    tech: ["ai", "python", "ollama", "dashboard", "governance"],
    details: {
      overview:
        "Directed AI-focused delivery initiatives where automation supported operational speed while preserving accountability.",
      scopeStakeholders: [
        "Product, engineering, and data stakeholders",
        "Business leadership and delivery governance groups",
        "Operations teams consuming AI-assisted outputs",
      ],
      responsibilities: [
        "Defined AI initiative scope, milestones, and validation criteria",
        "Implemented human-in-the-loop controls for generated outputs",
        "Aligned AI workflows to reporting and decision-making needs",
      ],
      tools: ["Python", "Local LLM stack (Ollama)", "Dashboards", "Governance checklists"],
      deliverables: [
        "AI workflow operating model",
        "Structured status and risk reporting outputs",
        "Implementation backlog and validation plans",
      ],
      outcomes: [
        "Faster reporting turnaround and better delivery signal visibility",
        "Improved stakeholder trust through auditable AI-assisted workflows",
      ],
      challenges: [
        "Challenge: Confidence in AI outputs. Action: Added review gates and traceable source checks.",
        "Challenge: Scope ambiguity in early AI initiatives. Action: Used milestone-based control with explicit acceptance criteria.",
      ],
    },
  },
];

export const education: EducationItem[] = [
  {
    slug: "stevens-msis",
    school: "Stevens Institute of Technology",
    icon: "stevens",
    degree: "Master's Degree",
    field: "MS Information Systems",
    dates: "Jan 2024 - May 2025",
    coursework: [
      "Data Management",
      "Project Management",
      "IT Strategy",
      "Business Analytics",
      "Python",
      "Information Security",
    ],
    outcomes: [
      "Built stronger enterprise technology strategy framing",
      "Applied analytics to delivery planning and decision support",
      "Reinforced structured program execution disciplines",
    ],
    whyThisMatters: [
      "Supports data-driven planning in technical program management.",
      "Improves ability to connect cloud execution with business outcomes.",
      "Strengthens leadership in AI-enabled delivery operating models.",
    ],
  },
  {
    slug: "bachelors-placeholder",
    school: "Bachelor's Institution (To be updated)",
    icon: "bachelors",
    degree: "Bachelor's Degree",
    field: "Field (To be updated)",
    dates: "Completion date (To be updated)",
    coursework: [
      "Systems Fundamentals",
      "Programming",
      "Networks",
      "Database Concepts",
      "Software Engineering",
    ],
    outcomes: [
      "Established core engineering and systems thinking foundation",
      "Prepared pathway into infrastructure and technical operations roles",
    ],
    whyThisMatters: [
      "Provides engineering fundamentals behind enterprise delivery decisions.",
      "Creates a technical base for migration and modernization programs.",
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    slug: "att-enterprise-migration-program",
    category: "Enterprise Migration Programs",
    name: "AT&T Infrastructure Transition Program",
    clientContext: "DXC / AT&T enterprise environment",
    role: "Sr. Analyst II – Cloud Engineering",
    highlights: [
      "Coordinated large-scale infrastructure transition planning and execution.",
      "Improved readiness visibility across dependent workstreams.",
      "Standardized cutover governance for predictable windows.",
    ],
    tools: ["jira", "service", "runbook", "dashboard"],
    details: {
      problem:
        "Complex multi-team transitions created risk across schedule, dependencies, and stabilization.",
      approach: [
        "Structured transitions into governed move groups with readiness gates.",
        "Aligned stakeholders through integrated cutover planning routines.",
        "Tracked risk and blockers through explicit ownership and cadence.",
      ],
      contribution: [
        "Owned transition planning governance and execution checkpoints.",
        "Facilitated stakeholder alignment across infra, app, and operations teams.",
        "Maintained delivery signal visibility through structured reporting.",
      ],
      tools: ["Jira", "ServiceNow", "Runbooks", "Dashboard reporting"],
      outcomes: [
        "Higher predictability during transition windows",
        "Reduced execution ambiguity across cross-functional teams",
      ],
      artifacts: [
        "Migration wave board snapshot (placeholder)",
        "Cutover governance model diagram (placeholder)",
      ],
    },
  },
  {
    slug: "workforce-resilience-aws-migration",
    category: "Enterprise Migration Programs",
    name: "Workforce Resilience On-Prem to AWS Program",
    clientContext: "DXC / Workforce Resilience program",
    role: "Sr. Analyst II – Cloud Engineering",
    highlights: [
      "Executed CloudEndure-led Linux server migrations from on-prem to AWS.",
      "Converted discovery outputs into wave-based migration plans.",
      "Improved operational readiness with validation and rollback protocols.",
    ],
    tools: ["aws", "cloudendure", "linux", "discovery"],
    details: {
      problem:
        "Legacy on-prem estate required controlled migration with minimal operational disruption.",
      approach: [
        "Used discovery-led scope validation to define migration waves.",
        "Applied CloudEndure for repeatable Linux server migration execution.",
        "Implemented pre/post cutover checks and stabilization controls.",
      ],
      contribution: [
        "Led migration planning and cross-team execution coordination.",
        "Owned discovery data readiness and dependency validation inputs.",
        "Maintained governance artifacts for change and stakeholder visibility.",
      ],
      tools: ["AWS", "CloudEndure", "Linux", "Universal Discovery", "Jira"],
      outcomes: [
        "Improved wave execution consistency and reduced surprise dependencies",
        "Strengthened post-migration stabilization through validation checklists",
      ],
      artifacts: [
        "Wave planning view (placeholder)",
        "Migration readiness checklist (placeholder)",
      ],
    },
  },
  {
    slug: "linux-migration-modernization-factory",
    category: "Linux Migration & Modernization",
    name: "Linux Migration Modernization Factory",
    clientContext: "Adecco and DXC delivery environments",
    role: "Sr. Linux Migration Engineer / Sr. Analyst II – Cloud Engineering",
    highlights: [
      "Created repeatable Linux migration playbooks and validation standards.",
      "Improved post-cutover stability through baseline checks and runbooks.",
      "Enabled cleaner handover to operations teams.",
    ],
    tools: ["linux", "vmware", "runbook", "migration"],
    details: {
      problem:
        "Heterogeneous Linux estates and inconsistent migration practices increased risk.",
      approach: [
        "Defined standard migration checkpoints and validation baselines.",
        "Used runbook-first execution with explicit rollback readiness.",
        "Tracked stabilization signals during post-cutover windows.",
      ],
      contribution: [
        "Built and governed migration SOPs across teams.",
        "Executed technical migration activities and issue triage.",
        "Aligned delivery artifacts for support ownership transitions.",
      ],
      tools: ["Linux", "VMware", "Shell scripting", "Runbooks"],
      outcomes: [
        "More reliable migration outcomes across diverse workloads",
        "Reduced stabilization effort through standardized checks",
      ],
      artifacts: [
        "Linux migration checklist template (placeholder)",
        "Post-migration validation report (placeholder)",
      ],
    },
  },
  {
    slug: "supplychainengine-ai-delivery",
    category: "AI / Automation Initiatives",
    name: "SupplyChainEngine Delivery Enablement",
    clientContext: "AI initiative program context",
    role: "AI Project Manager",
    highlights: [
      "Established milestone-based governance for AI feature delivery.",
      "Improved reporting quality with structured risk and progress signals.",
      "Aligned AI execution priorities with operational constraints.",
    ],
    tools: ["ai", "python", "dashboard", "governance"],
    details: {
      problem:
        "AI execution lacked consistent governance, making planning and stakeholder communication difficult.",
      approach: [
        "Implemented clear lifecycle checkpoints from planning to validation.",
        "Introduced structured reporting cadence for risks, dependencies, and outcomes.",
        "Maintained human approval boundaries for critical decisions.",
      ],
      contribution: [
        "Owned AI program planning and governance workflows.",
        "Coordinated engineering and business stakeholders on delivery priorities.",
        "Drove risk-based decision forums and update cadences.",
      ],
      tools: ["Python", "Delivery dashboards", "Risk registers", "Planning boards"],
      outcomes: [
        "Improved execution clarity for AI milestones",
        "Faster stakeholder communication cycles",
      ],
      artifacts: [
        "AI lifecycle framework diagram (placeholder)",
        "Milestone and risk dashboard screenshot (placeholder)",
      ],
    },
  },
  {
    slug: "local-llm-operations-assistant",
    category: "AI / Automation Initiatives",
    name: "Local LLM Operations Assistant (Ollama)",
    clientContext: "Internal productivity and delivery operations",
    role: "AI Project Manager",
    highlights: [
      "Designed local-first automation flow for status and risk synthesis.",
      "Reduced repetitive reporting effort with template-driven outputs.",
      "Kept human-in-the-loop checkpoints for quality control.",
    ],
    tools: ["ollama", "python", "ai", "dashboard"],
    details: {
      problem:
        "Manual weekly reporting consumed delivery bandwidth and delayed signal escalation.",
      approach: [
        "Built a local LLM-assisted pipeline for extracting delivery insights from notes.",
        "Applied templates for status, RAID, and action summaries.",
        "Enforced review and approval checkpoints before distribution.",
      ],
      contribution: [
        "Defined workflow architecture and governance boundaries.",
        "Implemented extraction and summarization logic with validation.",
        "Measured utility based on turnaround and consistency improvements.",
      ],
      tools: ["Ollama", "Python", "Prompt templates", "Dashboard outputs"],
      outcomes: [
        "Faster reporting cycles with better consistency",
        "Improved confidence through auditable source-linked summaries",
      ],
      artifacts: [
        "Workflow architecture diagram (placeholder)",
        "Weekly status template output sample (placeholder)",
      ],
    },
  },
];

export const featuredProjectSlugs = [
  "workforce-resilience-aws-migration",
  "att-enterprise-migration-program",
  "supplychainengine-ai-delivery",
];

export const homeNavCards = [
  { href: "/experience", title: "Experience", icon: "timeline" },
  { href: "/education", title: "Education", icon: "education" },
  { href: "/projects", title: "Projects", icon: "projects" },
  { href: "/services", title: "Skills/Services", icon: "service" },
  { href: "/contact", title: "Contact", icon: "contact" },
];

export const contact = {
  email: "eswar.rayavarapu23@gmail.com",
  linkedin: "https://www.linkedin.com/in/eswarrayavarapu/",
  resume: "/Eswar_Raviteja_Rayavarapu_Technical_Project_Manager.pdf",
};
