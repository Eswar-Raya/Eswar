export type GrowthPoint = {
  year: string;
  level: number;
  label: string;
};

export type ServiceItem = {
  title: string;
  icon: string;
  metric: string;
};

export type ExperienceItem = {
  company: string;
  years: string;
  role: string;
  highlights: string[];
  tech: string[];
};

export type ProjectItem = {
  title: string;
  problem: string;
  role: string;
  impact: string;
  tools: string[];
};

export const profile = {
  name: "Eswar Raviteja Rayavarapu",
  title: "Technical Project Manager - Cloud Infrastructure & AI-Enabled Delivery",
  location: "New Jersey, US",
  photo: "/Eswar.png",
};

export const growth: GrowthPoint[] = [
  { year: "2013", level: 2, label: "Ops Foundation" },
  { year: "2016", level: 3, label: "Automation" },
  { year: "2017", level: 4, label: "Platform Scale" },
  { year: "2019", level: 5, label: "Migration Lead" },
  { year: "2020", level: 7, label: "Enterprise Programs" },
  { year: "2025", level: 9, label: "AI Delivery PM" },
];

export const services: ServiceItem[] = [
  { title: "Cloud Migration Governance", icon: "cloud", metric: "20% cost optimization" },
  { title: "Infrastructure Program Delivery", icon: "infra", metric: "30% delay reduction" },
  { title: "Linux Migration Execution", icon: "server", metric: "Zero-downtime windows" },
  { title: "AI-Enabled Delivery Operations", icon: "ai", metric: "20% faster AI timeline" },
];

export const experiences: ExperienceItem[] = [
  {
    company: "Tata Teleservices",
    years: "June 2013 - Oct 2016",
    role: "Technical Operations Engineer",
    highlights: [
      "Improved reliability by 40% with scripted operations",
      "Reduced manual process load by 50%",
      "Standardized Linux runbooks and response flows",
    ],
    tech: ["linux", "script", "monitor"],
  },
  {
    company: "Huawei",
    years: "Oct 2016 - May 2017",
    role: "Platform Engineer",
    highlights: [
      "Strengthened SSL/TLS upgrade controls",
      "Improved production release quality",
      "Reduced incident exposure during deployments",
    ],
    tech: ["security", "linux", "release"],
  },
  {
    company: "Ericsson",
    years: "June 2017 - Nov 2018",
    role: "Platform Engineer",
    highlights: [
      "Scaled high-availability platform practices",
      "Improved hardening and patch cadence discipline",
      "Standardized release sequencing controls",
    ],
    tech: ["security", "ops", "release"],
  },
  {
    company: "Adecco",
    years: "May 2019 - Jan 2020",
    role: "Sr. Linux Migration Engineer",
    highlights: [
      "Delivered zero-downtime migration windows",
      "Executed VMware and Linux workload transitions",
      "Applied validation-first cutover governance",
    ],
    tech: ["vmware", "linux", "migration"],
  },
  {
    company: "DXC Technology",
    years: "Feb 2020 - Dec 2023",
    role: "Technical Project Manager",
    highlights: [
      "Managed enterprise programs up to $5M",
      "Delivered 20% cost savings and 30% delay reduction",
      "Led CloudEndure-driven Linux migration to AWS",
    ],
    tech: ["aws", "cloudendure", "powerbi", "jira"],
  },
  {
    company: "Savvy Global Technologies",
    years: "July 2025 - Nov 2025",
    role: "Project Manager",
    highlights: [
      "Drove AI/ML lifecycle governance",
      "Improved timeline speed by 20%",
      "Aligned technical and business delivery cadence",
    ],
    tech: ["ai", "python", "governance"],
  },
];

export const education = {
  degree: "MS in Information Systems",
  university: "Stevens Institute of Technology",
  years: "Jan 2024 - May 2025",
  outcomes: [
    "GPA: 3.9",
    "Strengthened cloud and data architecture depth",
    "Built stronger AI delivery management capability",
  ],
};

export const enterpriseProjects: ProjectItem[] = [
  {
    title: "Global Cloud Migration Program",
    problem: "Legacy on-prem infrastructure constrained scale and cost efficiency.",
    role: "Technical Project Manager",
    impact: "20% cost reduction with stronger migration governance.",
    tools: ["AWS", "CloudEndure", "Jira", "Power BI"],
  },
  {
    title: "Linux Workload Transition Factory",
    problem: "Inconsistent migration execution increased cutover risk.",
    role: "Migration Program Lead",
    impact: "Repeatable wave execution with reduced delivery delays.",
    tools: ["Linux", "VMware", "Runbooks", "Validation Gates"],
  },
  {
    title: "Executive Delivery Intelligence",
    problem: "Leadership lacked real-time program signal visibility.",
    role: "Program Reporting Owner",
    impact: "Decision velocity improved through KPI dashboards.",
    tools: ["Power BI", "SQL", "Portfolio Metrics"],
  },
];

export const innovationProjects: ProjectItem[] = [
  {
    title: "AI Delivery Control Layer",
    problem: "AI lifecycle activities were managed inconsistently across teams.",
    role: "AI Project Manager",
    impact: "20% faster delivery with structured lifecycle checkpoints.",
    tools: ["Python", "Model Evaluation", "Governance Workflow"],
  },
  {
    title: "Risk Signal Consolidation",
    problem: "Program risk indicators were fragmented across updates and logs.",
    role: "Delivery Strategy Lead",
    impact: "Earlier issue detection through consolidated signal tracking.",
    tools: ["Jira", "Status Notes", "Structured Reporting"],
  },
];

export const navCards = [
  { href: "/experience", title: "Experience", icon: "timeline" },
  { href: "/education", title: "Education", icon: "education" },
  { href: "/projects", title: "Projects", icon: "projects" },
];
