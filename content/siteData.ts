// /content/siteData.ts
// Single source of truth for site content.
// Replace placeholders (~XX%, X/Y) with real numbers when ready.

export type Transition = {
  id: string;
  label: string;
  meta: {
    org: string;
    client?: string;
    roleType: string;
    period: string;
    domain: string;
    tools: string[];
  };
  brief: {
    context: string;
    constraints: string[];
    decision: string;
    execution: string[];
    outcome: string[];
    signals?: string[];
  };
};

export type ExecutionModelNode = {
  id: "observe" | "decide" | "execute" | "stabilize";
  title: string;
  inputs: string[];
  tools: string[];
  failureModes: string[];
};

export type AgentModule = {
  id: "planning" | "risk" | "documentation" | "signals";
  title: string;
  subtitle: string;
  input: string[];
  output: string[];
  humanBoundary: string[];
  notes?: string[];
};

export type SiteLabels = {
  nav: {
    work: string;
    model: string;
    agents: string;
    principles: string;
    contact: string;
  };
    work: {
      title: string;
      lead: string;
      openLabel: string;
      closeLabel: string;
      briefLabel: string;
      constraintsLabel: string;
      contextLabel: string;
      decisionLabel: string;
      executionLabel: string;
      outcomeLabel: string;
      modeStoryLabel: string;
      modeInspectLabel: string;
      toolsLabel: string;
      signalsLabel: string;
    };
  model: {
    title: string;
    lead: string;
    inputsLabel: string;
    toolsLabel: string;
    failureModesLabel: string;
  };
  agents: {
    title: string;
    lead: string;
    modeStable: string;
    modeExplore: string;
    learningNote: string;
    inputLabel: string;
    outputLabel: string;
    humanBoundaryLabel: string;
  };
  principles: {
    title: string;
    lead: string;
    dontTitle: string;
  };
  contact: {
    title: string;
    lead: string;
    emailLabel: string;
    linkedinLabel: string;
    resumeLabel: string;
  };
};

export type SiteData = {
  identity: {
    name: string;
    roleLine: string;
    locationLine?: string;
  };
  hero: {
    headline: string; // LOCKED copy
    subline: string; // LOCKED copy
  };
  labels: SiteLabels;
  transitions: Transition[];
  executionModel: {
    title: string;
    lead: string;
    nodes: ExecutionModelNode[];
  };
  agents: {
    title: string;
    lead: string;
    learningNote: string;
    modules: AgentModule[];
  };
  principles: {
    title: string;
    lead: string;
    rules: string[];
    dont: string[];
  };
  contact: {
    title: string;
    lead: string;
    email: string;
    linkedinUrl: string;
    resumeUrl: string;
  };
};

export const siteData: SiteData = {
  identity: {
    name: "Eswar Rayavarapu",
    roleLine: "Infrastructure & Cloud Transformation Technical Project Manager",
    locationLine: "New Jersey, US",
  },

  hero: {
    // LOCK THESE EXACTLY (per your decision)
    headline: "Infrastructure & Cloud Transformation Technical Project Manager",
    subline:
      "Enterprise cloud migration | Linux platform modernization | program governance and production cutover delivery",
  },

  labels: {
    nav: {
      work: "Work",
      model: "Model",
      agents: "Agents",
      principles: "Principles",
      contact: "Contact",
    },

    work: {
      title: "Active Transitions",
      lead: "A transformation map from telecom operations to enterprise cloud migration and infrastructure program leadership.",
      openLabel: "Technical brief",
      closeLabel: "Close",
      briefLabel: "Technical brief",
      constraintsLabel: "Constraints",
      contextLabel: "Context",
      decisionLabel: "Decision",
      executionLabel: "Execution",
      outcomeLabel: "Outcome",
      modeStoryLabel: "Story",
      modeInspectLabel: "Inspect",
      toolsLabel: "Tools",
      signalsLabel: "Signals watched",
    },

    model: {
      title: "Execution Model",
      lead: "Observe -> Decide -> Execute -> Stabilize keeps large programs predictable under change.",
      inputsLabel: "Inputs",
      toolsLabel: "Tools",
      failureModesLabel: "Failure modes watched",
    },

    agents: {
      title: "Where automation earns its place",
      lead: "Applied AI supports repeatable workflows; infrastructure scope, risk, and cutover decisions stay human-led.",
      modeStable: "Stable",
      modeExplore: "Explore",
      learningNote:
        "Applied AI workflows are used as secondary capability with auditability and human review at critical gates.",
      inputLabel: "Input",
      outputLabel: "Output",
      humanBoundaryLabel: "Human boundary",
    },

    principles: {
      title: "Precision rules I follow",
      lead: "Constraints first. Decisions logged. Outcomes validated.",
      dontTitle: "What I don't do",
    },

    contact: {
      title: "Contact",
      lead: "Constraints first. Decisions documented. Outcomes measured.",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
      resumeLabel: "Resume",
    },
  },

  transitions: [
    {
      id: "tata-automation-foundation",
      label: "Manual operations -> scripted reliability foundation",
      meta: {
        org: "Tata Teleservices",
        roleType: "Technical Operations Engineer",
        period: "Early Career",
        domain: "Reliability automation",
        tools: ["Shell Scripting", "Linux", "Monitoring", "Operations Runbooks"],
      },
      brief: {
        context:
          "Core operations depended on repetitive manual tasks, creating avoidable delays and service variance.",
        constraints: [
          "High volume recurring operational checks",
          "Limited tolerance for service disruption",
          "Need for reusable scripts across environments",
        ],
        signals: ["Incident frequency", "Manual handoff count"],
        decision:
          "Automate repetitive tasks using shell scripting and standard operational templates.",
        execution: [
          "Scripted recurring checks and restart procedures",
          "Standardized runbook steps for critical jobs",
          "Introduced repeatable operational validation before closure",
        ],
        outcome: [
          "Increased system reliability by 40%",
          "Reduced manual processes by 50%",
        ],
      },
    },
    {
      id: "huawei-ericsson-platform-engineering",
      label: "Platform hardening -> incident reduction at scale",
      meta: {
        org: "Huawei and Ericsson",
        roleType: "Platform Engineer",
        period: "2017-2019",
        domain: "High availability telecom platforms",
        tools: ["SSL/TLS", "Linux", "Release Management", "Production Deployments"],
      },
      brief: {
        context:
          "Production stability was affected by upgrade risk and uneven release quality.",
        constraints: [
          "Zero tolerance for prolonged platform outage",
          "Security upgrade dependencies across services",
          "Tight release schedules with shared environments",
        ],
        signals: ["Incident trend", "Failed deployment count"],
        decision:
          "Prioritize secure protocol upgrades and controlled production rollout sequencing.",
        execution: [
          "Led SSL/TLS upgrade cycles across critical services",
          "Introduced stricter production deployment controls",
          "Tracked service health and rollback readiness during releases",
        ],
        outcome: [
          "Reduced incidents by 25%",
          "Improved uptime and release quality across projects",
        ],
      },
    },
    {
      id: "adecco-zero-downtime-migration",
      label: "VMware + Linux migration -> zero downtime validation",
      meta: {
        org: "Adecco",
        roleType: "Sr. Linux Migration Engineer",
        period: "2019",
        domain: "Enterprise migration execution",
        tools: ["VMware", "Enterprise Linux", "Validation Checklists", "Runbooks"],
      },
      brief: {
        context:
          "Production workloads needed migration with no service interruption and full post-cutover confidence.",
        constraints: [
          "Downtime windows were near zero",
          "Workloads had strict validation requirements",
          "Cross-team coordination was required for each cutover",
        ],
        decision:
          "Use controlled migration waves with validation-first cutover governance.",
        execution: [
          "Prepared migration runbooks per workload group",
          "Executed cutovers with strict pre and post validation",
          "Verified production readiness and rollback conditions",
        ],
        outcome: [
          "Delivered zero-downtime transitions for targeted workloads",
          "Increased production migration reliability and confidence",
        ],
      },
    },
    {
      id: "dxc-enterprise-cloud-leadership",
      label: "Enterprise migration programs -> cost and schedule control",
      meta: {
        org: "DXC Technology",
        roleType: "Technical Project Manager",
        period: "Feb 2020 - Dec 2023",
        domain: "Enterprise cloud program delivery",
        tools: ["AWS", "CloudEndure", "Universal Discovery", "Power BI", "Jira"],
      },
      brief: {
        context:
          "Large migration programs required coordinated execution across global teams and strict business continuity.",
        constraints: [
          "Programs operated under budgets up to $5M",
          "Zero-downtime expectation for migration windows",
          "Decision latency across distributed stakeholders",
        ],
        signals: ["Budget variance", "Schedule slip trend", "Downtime exceptions"],
        decision:
          "Run portfolio delivery with wave governance, discovery-led planning, and KPI dashboards.",
        execution: [
          "Orchestrated migration waves with dependency-based sequencing",
          "Used CloudEndure for Linux workload migration to AWS",
          "Built executive Power BI reporting for cost, risk, and delivery health",
        ],
        outcome: [
          "Delivered 20% cost savings across migration programs",
          "Reduced delivery delays by 30%",
        ],
      },
    },
    {
      id: "savvy-ai-project-leadership",
      label: "Technical Project Manager controls -> AI innovation delivery acceleration",
      meta: {
        org: "Savvy Global Technologies",
        roleType: "Technical Project Manager",
        period: "Jul 2025 - Nov 2025",
        domain: "Applied AI program delivery (secondary capability)",
        tools: ["Python", "Data Preprocessing", "Model Evaluation", "Stakeholder Governance"],
      },
      brief: {
        context:
          "AI initiatives required tighter coordination between data preparation, model evaluation, and stakeholder sign-offs.",
        constraints: [
          "Rapid iteration cycles with quality expectations",
          "Cross-functional dependencies across data and business teams",
          "Need for transparent communication on model progress",
        ],
        signals: ["Cycle time", "Model evaluation turnaround"],
        decision:
          "Apply project controls directly to the AI/ML lifecycle with stage-level accountability.",
        execution: [
          "Aligned preprocessing, validation, and evaluation checkpoints",
          "Defined collaboration rhythm between technical and business teams",
          "Standardized progress reporting around model lifecycle milestones",
        ],
        outcome: [
          "Improved delivery timeline by 20%",
          "Strengthened stakeholder alignment in AI initiatives",
        ],
      },
    },
  ],

  executionModel: {
    title: "Execution Model",
    lead: "A loop I use to keep delivery predictable under constraints.",
    nodes: [
      {
        id: "observe",
        title: "Observe",
        inputs: [
          "Discovery inventories and dependency signals",
          "Operational constraints (change windows, CAB rules)",
          "Stakeholder objectives and non-negotiables",
          "Early risk indicators (scope drift, resource gaps)",
        ],
        tools: ["CMDB/Discovery tools", "Logs/monitoring", "Jira/ServiceNow", "Workshops"],
        failureModes: [
          "False confidence from incomplete inventories",
          "Hidden dependencies discovered too late",
          "Unowned risks and unclear decision makers",
        ],
      },
      {
        id: "decide",
        title: "Decide",
        inputs: [
          "Options with tradeoffs (time, risk, cost)",
          "Readiness evidence (tests, checklists, sign-offs)",
          "Rollback feasibility and blast-radius analysis",
        ],
        tools: ["Decision logs", "Runbooks", "Risk registers", "Architecture reviews"],
        failureModes: [
          "Decisions made without constraints surfaced",
          "\"Optimism scheduling\" without readiness evidence",
          "No explicit rollback or failure criteria",
        ],
      },
      {
        id: "execute",
        title: "Execute",
        inputs: [
          "Wave plan / move groups",
          "Cutover checklist + comms plan",
          "Owners on bridge and escalation path",
        ],
        tools: ["Cutover calls", "Runbooks", "Change tickets", "Automation scripts"],
        failureModes: [
          "Runbook drift between environments",
          "Unplanned changes during cutover",
          "Broken handoffs between infra/app/network teams",
        ],
      },
      {
        id: "stabilize",
        title: "Stabilize",
        inputs: [
          "Post-cutover monitoring signals",
          "Incident patterns and recurring issues",
          "Operational ownership confirmation",
        ],
        tools: ["Monitoring/alerts", "Postmortems", "SOP updates", "Knowledge base"],
        failureModes: [
          "Declaring success before stability is proven",
          "No closure on recurring issues",
          "Operations not ready to own the new state",
        ],
      },
    ],
  },

  agents: {
    title: "Where automation earns its place",
    lead: "Agents help compress repeatable work without hiding uncertainty.",
    learningNote:
      "Learning & iterating: these workflows are designed to be auditable and local-first where possible.",
    modules: [
      {
        id: "planning",
        title: "Planning Agent",
        subtitle: "Turn ambiguity into a structured plan",
        input: ["Goals and constraints", "Inventory snapshots", "Known risks/issues"],
        output: ["Draft plan outline", "Dependency questions list", "Proposed milestones"],
        humanBoundary: [
          "Humans approve scope and tradeoffs",
          "Humans validate feasibility with technical owners",
          "Humans own stakeholder alignment",
        ],
        notes: ["Best used for first draft + gap detection, not final commitments."],
      },
      {
        id: "risk",
        title: "Risk Sensing Agent",
        subtitle: "Surface drift early (scope, schedule, readiness)",
        input: ["Jira/ServiceNow updates", "Cutover readiness checklists", "Weekly notes"],
        output: ["Risk flags", "Missing-owner detection", "Escalation prompts"],
        humanBoundary: [
          "Humans assess impact and response options",
          "Humans decide escalation and mitigation",
          "Humans communicate risk posture",
        ],
        notes: ["Local-first summaries; avoid speculative claims."],
      },
      {
        id: "documentation",
        title: "Documentation Agent",
        subtitle: "Convert working notes into stakeholder-ready artifacts",
        input: ["Meeting notes", "Runbooks/checklists", "Decisions and action items"],
        output: ["Weekly status draft", "RAID updates", "Decision log entries"],
        humanBoundary: [
          "Humans verify accuracy and wording",
          "Humans add context and accountability",
          "Humans approve what is shared externally",
        ],
        notes: ["Use templated formats for consistency and auditability."],
      },
      {
        id: "signals",
        title: "Signal Extraction Agent",
        subtitle: "Extract patterns from logs/reports without overfitting",
        input: ["Operational logs (where available)", "Reports", "Trend snapshots"],
        output: ["Anomaly summaries", "Trend deltas", "Questions to validate"],
        humanBoundary: [
          "Humans interpret and confirm signals",
          "Humans decide if signal implies action",
          "Humans validate against source evidence",
        ],
        notes: ["Outputs should link back to sources; no hallucinated root causes."],
      },
    ],
  },

  principles: {
    title: "Precision rules I follow",
    lead: "Rules that keep delivery predictable when systems change.",
    rules: [
      "Stability before speed.",
      "Automate the repeatable; escalate the ambiguous.",
      "Decision logs over status theater.",
      "Reduce decision latency.",
      "Evidence gates before cutovers.",
    ],
    dont: [
      "I don't optimize before stabilizing.",
      "I don't automate decisions that require judgment.",
      "I don't scale ambiguity; scope gets explicit or it doesn't ship.",
    ],
  },

  contact: {
    title: "Contact",
    lead: "If your systems are changing, clarity matters.",
    email: "eswar.rayavarapu23@gmail.com",
    linkedinUrl: "https://www.linkedin.com/in/eswar-rayavarapu",
    resumeUrl: "/Eswar_Raviteja_Rayavarapu_Infrastructure_Cloud_Transformation_PM.pdf?v=2026-04-22",
  },
};

export default siteData;


