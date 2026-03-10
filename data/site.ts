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
  headline: "Infrastructure & Cloud Transformation Technical Project Manager",
  subheadline:
    "Enterprise cloud migration, data center transformation, and Linux platform modernization delivery.",
  supportingText:
    "10+ years across telecom and enterprise environments with dependency discovery, migration wave planning, rollback strategy, and production cutover execution.",
  location: "New Jersey, United States",
  photo: "/Eswar.png",
  introTags: [
    "10+ Years Experience",
    "1000+ Linux Servers",
    "40 Engineers Coordinated",
    "AWS / Azure / Linux / VMware",
  ],
  proofPoints: [
    "Led multi-wave data center to AWS migration delivery using CloudEndure.",
    "Coordinated approximately 40 engineers across global migration workstreams.",
  ],
};

export const whatIDeliver: string[] = [
  "Enterprise cloud migration execution",
  "Multi-wave infrastructure transformation",
  "Linux platform modernization",
  "Cross-functional delivery governance",
  "Executive-ready reporting",
];

export const flagshipDxc: FlagshipHighlight = {
  title: "DXC Technology (Feb 2020 - Dec 2023)",
  summary:
    "As Technical Project Manager, I directed enterprise cloud and infrastructure transformation programs across large Linux estates.",
  scope: [
    "1000+ Linux servers in migration scope",
    "Data Center to AWS migration using CloudEndure",
    "Data Center to Data Center migration execution",
    "Greenfield and brownfield infrastructure environments",
  ],
  execution: [
    "Dependency discovery and migration planning using Universal Discovery",
    "Readiness validation and rollback strategy before production moves",
    "Production cutover governance across global engineering teams",
    "RAID management and executive reporting through Power BI",
  ],
  outcomes: [
    "Approximately 40 engineers coordinated across global teams",
    "Approximately 15-20% infrastructure cost optimization",
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
    value: "10+ Years",
    context: "Enterprise infrastructure and cloud transformation delivery",
  },
  {
    label: "Linux Server Scope",
    value: "1000+",
    context: "Enterprise server environments managed in migration programs",
  },
  {
    label: "Team Coordination",
    value: "40 Engineers",
    context: "Global cross-functional delivery across infrastructure tracks",
  },
  {
    label: "Migration Execution",
    value: "Multi-Wave",
    context: "Data center to AWS and data center to data center transitions",
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
  resume: "/Eswar_Raviteja_Rayavarapu_Infrastructure_Cloud_Transformation_PM.pdf",
};
