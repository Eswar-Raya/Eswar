export type WorkDetail = {
  context: string;
  challenges: string[];
  decision: string;
  execution: string[];
  outcomes: string[];
};

export type WorkItem = {
  slug: string;
  title: string;
  org: string;
  role: string;
  dates: string;
  stage: string;
  summary: string;
  impacts: string[];
  stack: string[];
  detail: WorkDetail;
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type SnapshotMetric = {
  label: string;
  value: string;
  note: string;
};

export const portfolioData = {
  nav: [
    { id: "timeline", label: "Timeline" },
    { id: "snapshot", label: "Snapshot" },
    { id: "skills", label: "Skills" },
    { id: "programs", label: "Enterprise Programs" },
    { id: "contact", label: "Contact" },
  ],
  hero: {
    name: "Eswar Raviteja Rayavarapu",
    headline: "AI Technical Project Manager | Cloud & Infra | AI Delivery",
    subline:
      "Driving cloud migrations, Linux transformation programs, and AI-assisted delivery with measurable outcomes.",
  },
  timeline: [
    {
      slug: "community-dreams-groundedai",
      title: "GroundedAI Program Delivery",
      org: "Community Dreams Foundation",
      role: "Project Manager",
      dates: "Dec 2025 - Present",
      stage: "GroundedAI",
      summary:
        "Delivered secure local-AI program execution using grounded RAG architecture and governance-first controls.",
      impacts: [
        "Reduced manual document review effort by approximately 60%",
        "Improved decision precision by approximately 25% in restock prioritization",
        "Strengthened AI governance with refusal logic and citation-backed traceability",
      ],
      stack: [
        "Python",
        "Ollama",
        "ChromaDB",
        "LlamaIndex",
        "RAG",
        "Streamlit",
        "AI Governance",
      ],
      detail: {
        context:
          "The program required secure offline AI capabilities with strict source-grounded responses and measurable business outcomes.",
        challenges: [
          "Need for local-first AI architecture due to security and privacy constraints",
          "High risk of hallucination without robust response controls",
          "Need to translate model outputs into decision-ready leadership reporting",
        ],
        decision:
          "Implement a modular local RAG pipeline with strict evaluation gates, refusal controls, and dashboarded outcome visibility.",
        execution: [
          "Built ingestion -> chunking -> embedding -> indexing -> orchestration workflow",
          "Implemented local Q&A assistant with citation-grounded response behavior",
          "Delivered hybrid forecasting workflow combining ETS and LLM prioritization",
          "Created dashboards for model quality, budget constraints, and KPI tracking",
        ],
        outcomes: [
          "Manual document review reduced by approximately 60%",
          "Decision precision improved by approximately 25%",
          "Governance confidence improved through traceable AI output controls",
        ],
      },
    },
    {
      slug: "tata-automation-foundation",
      title: "Technical Foundation",
      org: "Tata Teleservices",
      role: "Technical Operations Engineer",
      dates: "June 2013 - Oct 2016",
      stage: "Tata",
      summary: "Built reliability through scripting and operational automation.",
      impacts: [
        "Improved system reliability by 40%",
        "Reduced manual process load by 50%",
        "Standardized runbook driven production operations",
      ],
      stack: ["Linux", "Shell Scripting", "Monitoring", "Runbooks"],
      detail: {
        context:
          "Core operations depended on repetitive manual tasks that increased service variance.",
        challenges: [
          "High recurring operation volume",
          "Low tolerance for service instability",
          "Limited reusable process templates",
        ],
        decision:
          "Automate operational routines with shell scripting and standard controls.",
        execution: [
          "Scripted recurring checks and restart workflows",
          "Introduced standardized operating runbooks",
          "Applied pre and post validation for critical activities",
        ],
        outcomes: [
          "Reliability improved by 40%",
          "Manual operations reduced by 50%",
        ],
      },
    },
    {
      slug: "huawei-platform-engineering",
      title: "Platform Engineering",
      org: "Huawei",
      role: "Platform Engineer",
      dates: "Oct 2016 - May 2017",
      stage: "Huawei",
      summary: "Hardened telecom platform delivery and release quality.",
      impacts: [
        "Reduced release incidents through controlled deployment",
        "Improved production stability during upgrades",
        "Strengthened SSL and TLS rollout discipline",
      ],
      stack: ["Linux", "SSL/TLS", "Release Controls", "Production Deployments"],
      detail: {
        context:
          "Platform stability was impacted by upgrade risk and uneven production release quality.",
        challenges: [
          "Strict uptime expectations",
          "Security dependencies across platform services",
          "Shared environment release windows",
        ],
        decision:
          "Run controlled upgrade and deployment pipelines with rollback readiness.",
        execution: [
          "Coordinated secure protocol upgrades across services",
          "Introduced tighter production gate criteria",
          "Tracked health signals throughout deployment cycles",
        ],
        outcomes: [
          "Incident trend moved downward across releases",
          "Release quality improved with stronger controls",
        ],
      },
    },
    {
      slug: "ericsson-platform-engineering",
      title: "Scale Operations",
      org: "Ericsson",
      role: "Platform Engineer",
      dates: "June 2017 - Nov 2018",
      stage: "Ericsson",
      summary: "Extended high availability telecom platform practices at scale.",
      impacts: [
        "Supported large scale production reliability goals",
        "Reduced incident exposure during release windows",
        "Improved consistency of hardening and patch cadence",
      ],
      stack: ["Linux", "Security Hardening", "Deployment Automation", "Ops Governance"],
      detail: {
        context:
          "Telecom platforms required stricter operational discipline to maintain high availability.",
        challenges: [
          "Complex release dependency chains",
          "Security and uptime requirements in parallel",
          "Need for repeatable hardening routines",
        ],
        decision:
          "Apply repeatable hardening and deployment governance patterns across projects.",
        execution: [
          "Standardized platform hardening and validation checkpoints",
          "Aligned release sequencing with reliability criteria",
          "Strengthened production incident response playbooks",
        ],
        outcomes: [
          "Operational excellence improved across projects",
          "Incident frequency reduced through disciplined rollouts",
        ],
      },
    },
    {
      slug: "adecco-linux-migration",
      title: "Migration Expertise",
      org: "Adecco",
      role: "Sr. Linux Migration Engineer",
      dates: "May 2019 - Jan 2020",
      stage: "Adecco",
      summary: "Led zero downtime Linux and VMware migration transitions.",
      impacts: [
        "Executed zero downtime migration windows",
        "Validated production workload continuity",
        "Increased migration confidence across teams",
      ],
      stack: ["Enterprise Linux", "VMware", "Runbooks", "Validation Checklists"],
      detail: {
        context:
          "Production workloads needed migration with strict continuity and post cutover confidence.",
        challenges: [
          "Near zero downtime windows",
          "Strict workload validation requirements",
          "Multi team cutover dependencies",
        ],
        decision:
          "Execute migration waves with validation first controls and rollback paths.",
        execution: [
          "Prepared workload level migration runbooks",
          "Ran controlled cutovers with pre and post checks",
          "Verified production readiness and rollback conditions",
        ],
        outcomes: [
          "Delivered zero downtime transitions",
          "Improved migration reliability and stakeholder trust",
        ],
      },
    },
    {
      slug: "dxc-enterprise-cloud-leadership",
      title: "Enterprise Cloud Leadership",
      org: "DXC Technology",
      role: "Technical Project Manager",
      dates: "Feb 2020 - Dec 2023",
      stage: "DXC",
      summary:
        "Led enterprise cloud and infrastructure programs with budget, risk, and delivery control.",
      impacts: [
        "Managed programs with budgets up to $5M",
        "Delivered 20% cost savings",
        "Reduced delivery delays by 30%",
      ],
      stack: ["AWS", "CloudEndure", "Universal Discovery", "Power BI", "Jira"],
      detail: {
        context:
          "Large migration programs required coordinated execution across global teams and strict continuity.",
        challenges: [
          "Zero downtime business expectations",
          "High program complexity and dependency chains",
          "Distributed decision making across teams",
        ],
        decision:
          "Use wave governance, discovery led planning, and KPI based delivery steering.",
        execution: [
          "Orchestrated migration waves using dependency based sequencing",
          "Used CloudEndure for Linux server migration to AWS",
          "Delivered executive dashboards for cost, risk, and timeline control",
        ],
        outcomes: [
          "20% program cost savings",
          "30% reduction in delivery delays",
        ],
      },
    },
    {
      slug: "stevens-masters-information-systems",
      title: "Academic Advancement",
      org: "Stevens Institute of Technology",
      role: "MS in Information Systems",
      dates: "Jan 2024 - May 2025",
      stage: "Masters",
      summary: "Deepened systems and AI program leadership foundation.",
      impacts: [
        "Graduated with 3.9 GPA",
        "Strengthened technical depth for AI and cloud leadership",
        "Expanded data and system architecture perspective",
      ],
      stack: ["Information Systems", "Data Engineering", "Cloud Architecture", "Analytics"],
      detail: {
        context:
          "Graduate study focused on strengthening technical and analytical depth for leadership roles.",
        challenges: [
          "Balancing advanced coursework with professional growth",
          "Applying academic methods to practical delivery challenges",
          "Building cross domain technical fluency",
        ],
        decision:
          "Focus study path on systems, analytics, and architecture aligned to AI project delivery.",
        execution: [
          "Completed intensive coursework across information systems domains",
          "Applied structured analysis to operational and delivery problems",
          "Linked academic outputs to real world program scenarios",
        ],
        outcomes: [
          "Achieved 3.9 GPA",
          "Prepared for expanded AI and cloud leadership scope",
        ],
      },
    },
    {
      slug: "ai-project-leadership",
      title: "AI Project Leadership",
      org: "Savvy Global Technologies",
      role: "Project Manager",
      dates: "July 2025 - Nov 2025",
      stage: "AI PM",
      summary: "Led AI and ML lifecycle delivery with faster execution cadence.",
      impacts: [
        "Improved delivery timeline by 20%",
        "Tightened collaboration across data and business stakeholders",
        "Raised consistency of model lifecycle reporting",
      ],
      stack: ["Python", "Data Preprocessing", "Model Evaluation", "AI Governance"],
      detail: {
        context:
          "AI initiatives required stronger lifecycle controls from data preparation to model evaluation.",
        challenges: [
          "Rapid iteration with quality constraints",
          "Cross functional dependency management",
          "Need for transparent stakeholder communication",
        ],
        decision:
          "Apply structured project governance directly to the AI and ML lifecycle.",
        execution: [
          "Defined checkpoints for preprocessing, validation, and evaluation",
          "Aligned technical and business review cadence",
          "Standardized reporting around model lifecycle milestones",
        ],
        outcomes: [
          "Delivery speed improved by 20%",
          "Stakeholder confidence improved through clearer governance",
        ],
      },
    },
  ] as WorkItem[],
  snapshotMetrics: [
    {
      label: "Enterprise Program Budget",
      value: "$5M",
      note: "Managed cloud and infrastructure programs at DXC",
    },
    {
      label: "Program Cost Reduction",
      value: "20%",
      note: "Achieved through governance and migration wave control",
    },
    {
      label: "Delivery Delay Reduction",
      value: "30%",
      note: "Improved cross-team execution rhythm and visibility",
    },
    {
      label: "AI Project Timeline Gain",
      value: "20%",
      note: "Faster delivery in AI/ML lifecycle initiatives",
    },
  ] as SnapshotMetric[],
  skillGroups: [
    {
      label: "Cloud and Infra",
      items: ["AWS", "CloudEndure", "Linux", "VMware", "High Availability", "Migration Waves"],
    },
    {
      label: "Program Delivery",
      items: ["Agile Governance", "Risk Management", "Stakeholder Steering", "Cutover Management"],
    },
    {
      label: "Data and AI",
      items: ["Python", "SQL", "Power BI", "AI/ML Lifecycle", "Model Evaluation"],
    },
    {
      label: "Tooling",
      items: ["Jira", "ServiceNow", "Universal Discovery", "Runbooks", "Executive Dashboards"],
    },
  ] as SkillGroup[],
  caseStudySlugs: [
    "community-dreams-groundedai",
    "dxc-enterprise-cloud-leadership",
    "adecco-linux-migration",
    "ai-project-leadership",
    "tata-automation-foundation",
  ],
  contact: {
    line: "If your systems are changing, precision in delivery is the advantage.",
    email: "eswar.rayavarapu23@gmail.com",
    linkedin: "https://www.linkedin.com/in/eswarrayavarapu/",
    resume: "/Eswar_Raviteja_Rayavarapu_AI_TPM.pdf",
  },
};

export const workBySlug = Object.fromEntries(
  portfolioData.timeline.map((item) => [item.slug, item]),
) as Record<string, WorkItem>;

export const caseStudies = portfolioData.caseStudySlugs
  .map((slug) => workBySlug[slug])
  .filter(Boolean);

export function getWorkBySlug(slug: string): WorkItem | undefined {
  return workBySlug[slug];
}
