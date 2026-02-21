export type StructuredBlock = {
  title: string;
  narrative: string;
  bullets: string[];
  tags?: string[];
};

export type StructuredSection = {
  title: string;
  intro: string;
  blocks: StructuredBlock[];
};

export const executivePositioning =
  "Technical Project Manager - Cloud Infrastructure & AI-Enabled Delivery";

export const aboutSections: StructuredSection[] = [
  {
    title: "Positioning",
    intro:
      "Portfolio focused on enterprise technology execution, not experimental design work.",
    blocks: [
      {
        title: "Delivery Mandate",
        narrative:
          "Lead cloud and infrastructure programs from planning through operational stabilization.",
        bullets: [
          "Program execution across migration, modernization, and service continuity",
          "Cross-functional governance with risk and dependency control",
          "Business-aligned reporting for executive stakeholders",
        ],
        tags: ["Cloud", "Infrastructure", "Program Governance"],
      },
      {
        title: "Operational Discipline",
        narrative:
          "Execution model prioritizes predictable outcomes, controlled cutovers, and measurable impact.",
        bullets: [
          "Decision gates before major release transitions",
          "Structured RAID management and escalation",
          "Post-cutover stabilization with ownership transfer",
        ],
        tags: ["RAID", "Cutover", "Stabilization"],
      },
      {
        title: "Enterprise Outcome Focus",
        narrative:
          "Engagements are measured by cost control, delivery velocity, and production reliability.",
        bullets: [
          "Cost optimization aligned to program objectives",
          "Timeline improvements through wave-based delivery",
          "Reduced operational friction through automation",
        ],
        tags: ["Cost", "Timeline", "Reliability"],
      },
    ],
  },
];

export const experienceSections: StructuredSection[] = [
  {
    title: "DXC Technology | Feb 2020 - Dec 2023",
    intro:
      "Enterprise program leadership with multi-team execution control across cloud migration and infrastructure transitions.",
    blocks: [
      {
        title: "Program Scope",
        narrative:
          "Directed enterprise cloud and infrastructure programs with budgets up to $5M.",
        bullets: [
          "Managed migration portfolio scope, sequencing, and delivery risk",
          "Coordinated global technical teams across infrastructure domains",
          "Maintained continuity expectations during critical transition windows",
        ],
        tags: ["$5M Programs", "Global Delivery", "Portfolio Control"],
      },
      {
        title: "Execution Governance",
        narrative:
          "Applied structured operating model for discovery, planning, cutover, and stabilization.",
        bullets: [
          "Wave planning using dependency-aware inventory signals",
          "CloudEndure for Linux workload migration from on-prem to AWS",
          "Executive reporting through KPI and variance dashboards",
        ],
        tags: ["CloudEndure", "AWS", "Power BI", "Governance"],
      },
      {
        title: "Business Impact",
        narrative:
          "Programs delivered measurable enterprise value in cost and schedule performance.",
        bullets: [
          "20% cost savings across migration programs",
          "30% reduction in delivery delays",
          "Higher decision quality through transparent reporting cadence",
        ],
        tags: ["20% Savings", "30% Delay Reduction", "Executive Visibility"],
      },
    ],
  },
  {
    title: "Foundational Roles",
    intro:
      "Prior roles built the technical operating depth that supports enterprise delivery leadership.",
    blocks: [
      {
        title: "Tata Teleservices | June 2013 - Oct 2016",
        narrative:
          "Established reliability baseline through Linux operations automation.",
        bullets: [
          "40% reliability improvement",
          "50% reduction in manual operational effort",
          "Runbook and scripting standardization",
        ],
      },
      {
        title: "Huawei | Oct 2016 - May 2017",
        narrative:
          "Stabilized platform delivery through security and release discipline.",
        bullets: [
          "SSL and TLS upgrade cycles on telecom systems",
          "Production deployment controls for release quality",
          "Reduced incident exposure during release windows",
        ],
      },
      {
        title: "Ericsson | June 2017 - Nov 2018",
        narrative:
          "Scaled operational rigor for high-availability platform environments.",
        bullets: [
          "Hardening and patch cadence governance",
          "Reliability-focused deployment sequencing",
          "Improved consistency across platform operations",
        ],
      },
      {
        title: "Adecco | May 2019 - Jan 2020",
        narrative:
          "Led Linux and VMware migrations with continuity-first execution.",
        bullets: [
          "Zero-downtime migration windows for targeted workloads",
          "Validation-driven cutover governance",
          "Production readiness and rollback controls",
        ],
      },
    ],
  },
];

export const programSections: StructuredSection[] = [
  {
    title: "Program Delivery Model",
    intro:
      "Enterprise programs are structured with governance, measurable checkpoints, and outcome ownership.",
    blocks: [
      {
        title: "Plan",
        narrative: "Define scope boundaries, dependencies, and non-negotiable constraints.",
        bullets: [
          "Dependency-mapped wave planning",
          "Program risk baseline and escalation path",
          "Stakeholder sign-off and sequencing approvals",
        ],
      },
      {
        title: "Execute",
        narrative:
          "Run controlled release and migration cycles with coordinated ownership.",
        bullets: [
          "Cross-team cutover management",
          "Operational readiness and rollback validation",
          "Change control and implementation evidence",
        ],
      },
      {
        title: "Stabilize",
        narrative:
          "Transition from delivery completion to operational confidence and handover.",
        bullets: [
          "Production monitoring and defect trend review",
          "Incident containment and closure governance",
          "Final ownership transfer to operations teams",
        ],
      },
    ],
  },
];

export const aiSections: StructuredSection[] = [
  {
    title: "AI as Strategic Enablement",
    intro:
      "AI delivery is positioned as a business acceleration capability under governance, not as an experimental side track.",
    blocks: [
      {
        title: "Business Alignment",
        narrative:
          "AI initiatives are scoped by operational outcomes, timeline targets, and stakeholder value.",
        bullets: [
          "Use-case qualification based on enterprise impact",
          "Milestone governance tied to business commitments",
          "Delivery framing through measurable KPI improvements",
        ],
        tags: ["Outcome-Driven", "Stakeholder Alignment", "KPIs"],
      },
      {
        title: "Lifecycle Control",
        narrative:
          "Project management controls are applied across data preparation, evaluation, and release readiness.",
        bullets: [
          "Defined checkpoints for preprocessing and model evaluation",
          "Cross-functional review cadence for quality gates",
          "Transparent progress reporting for executive decisions",
        ],
        tags: ["AI/ML Lifecycle", "Governance", "Quality Gates"],
      },
      {
        title: "Risk and Accountability",
        narrative:
          "Human accountability remains explicit for priority, risk, and release decisions.",
        bullets: [
          "Structured risk logs for model and data dependencies",
          "Decision ownership for go/no-go and production release",
          "Traceable documentation across delivery milestones",
        ],
        tags: ["Risk Management", "Decision Logs", "Auditability"],
      },
    ],
  },
];

export const leadershipSections: StructuredSection[] = [
  {
    title: "Leadership Framework",
    intro:
      "Leadership approach is built for enterprise delivery contexts with cross-functional execution complexity.",
    blocks: [
      {
        title: "Governance Leadership",
        narrative:
          "Create alignment by clarifying decision rights, accountability, and escalation paths.",
        bullets: [
          "Program steering cadence with clear ownership",
          "Structured stakeholder communication plan",
          "Issue response model with defined priority thresholds",
        ],
      },
      {
        title: "Execution Leadership",
        narrative:
          "Keep teams aligned to commitments while maintaining realistic delivery constraints.",
        bullets: [
          "Dependency-first planning and execution sequencing",
          "Focus on stable outcomes over headline velocity",
          "Rapid issue triage with action-owner clarity",
        ],
      },
      {
        title: "People and Culture",
        narrative:
          "Enable teams through clarity, consistency, and technical context in decision making.",
        bullets: [
          "Promote explicit decisions over ambiguous coordination",
          "Encourage operational learning from delivery retrospectives",
          "Build trust through predictable and transparent reporting",
        ],
      },
    ],
  },
];
