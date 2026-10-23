export type NavItem = {
  href: string;
  label: string;
};

export type MetricItem = {
  label: string;
  value: string;
  context: string;
};

export type FlagshipHighlight = {
  title: string;
  summary: string;
  scope: string[];
  execution: string[];
  outcomes: string[];
};

export const profile = {
  name: "Eswar Raviteja Rayavarapu",
  headline: "Technical Project Manager",
  roleLine: "Business Analyst | Cloud & Infrastructure Transformation",
  subheadline:
    "From complex infrastructure to coordinated delivery.",
  supportingText:
    "11+ years leading cloud migration and infrastructure transformation across telecom and enterprise environments. I connect business requirements with engineering execution, from discovery and wave planning to production cutover and operational readiness.",
  location: "Jersey City, New Jersey",
  photo: "/Eswar.png",
  introTags: [
    "11+ Years Experience",
    "250+ Applications Migrated",
    "1000+ Servers",
    "AWS / Azure / Linux / VMware",
  ],
  proofPoints: [
    "Led migration of 250+ applications across 1000+ servers from on-premises to AWS.",
    "Coordinated approximately 40 cross-functional resources across global delivery teams.",
  ],
};

export const whatIDeliver: string[] = [
  "AWS and hybrid cloud migration programs",
  "Business requirements and roadmap alignment",
  "Infrastructure and application modernization",
  "Agile, Waterfall, and hybrid delivery governance",
  "Operational readiness and executive reporting",
];

export const flagshipDxc: FlagshipHighlight = {
  title: "DXC Technology (Feb 2020 - Dec 2023)",
  summary:
    "Led cloud migration programs for AT&T, ISOS (Workforce Resilience), DIRECTV, and Downer, connecting business priorities with global engineering delivery.",
  scope: [
    "250+ internally hosted applications across 1000+ servers",
    "On-premises to AWS migration using MGN (CloudEndure)",
    "Hybrid AWS, Azure, and on-premises infrastructure",
    "Approximately 40 resources across network, infrastructure, applications, and operations",
  ],
  execution: [
    "Dependency discovery and migration planning using Universal Discovery",
    "Readiness validation and rollback strategy before production moves",
    "Production cutover governance across global engineering teams",
    "RAID management and executive reporting through Power BI",
  ],
  outcomes: [
    "15–20% infrastructure cost optimization",
    "Approximately 30% reduction in delivery delays through proactive blocker escalation and stakeholder decisions",
    "Improved schedule predictability through RAID governance",
  ],
};

export const navItems: NavItem[] = [
  { href: "/home", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Programs" },
  { href: "/education", label: "Education" },
  { href: "/contact", label: "Contact" },
];

export const metrics: MetricItem[] = [
  {
    label: "Experience",
    value: "11+ Years",
    context: "Enterprise infrastructure and cloud transformation delivery",
  },
  {
    label: "Applications Migrated",
    value: "250+",
    context: "Internally hosted applications moved to AWS at DXC",
  },
  {
    label: "Server Scope",
    value: "1000+",
    context: "Servers across enterprise migration programs at DXC",
  },
  {
    label: "Reduction in Delivery Delays",
    value: "~30%",
    context: "Proactively escalated blockers and drove stakeholder decisions to improve delivery timelines.",
  },
  {
    label: "Cost Optimization",
    value: "15-20%",
    context: "Infrastructure optimization driven by migration sequencing",
  },
];

export const contact = {
  email: "eswar.rayavarapu23@gmail.com",
  linkedin: "https://www.linkedin.com/in/eswar-rayavarapu",
  resume: "/Eswar_Raviteja_Rayavarapu_Infrastructure_Cloud_Transformation_TPM.pdf",
};
