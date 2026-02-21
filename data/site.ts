export type NavItem = {
  href: string;
  label: string;
};

export type MetricItem = {
  label: string;
  value: string;
  context: string;
};

export const profile = {
  name: "Eswar Raviteja Rayavarapu",
  headline: "Technical Project Manager - Cloud Infrastructure & AI-Enabled Delivery",
  location: "United States",
  photo: "/Eswar.png",
  introTags: [
    "Cloud Migration Governance",
    "Infrastructure Programs",
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
    context: "Cloud, infrastructure, and transformation delivery leadership",
  },
  {
    label: "Core Program Type",
    value: "Migrations",
    context: "Enterprise modernization and transition programs",
  },
  {
    label: "Delivery Scope",
    value: "Cross-Functional",
    context: "Infra, app, network, security, and operations alignment",
  },
  {
    label: "Operating Model",
    value: "AI-Enabled",
    context: "Structured automation with human-in-the-loop accountability",
  },
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
  linkedin: "https://www.linkedin.com/in/eswar-ravi-teja-rayavarapu/",
  resume: "/Eswar_Raviteja_Rayavarapu_Technical_Project_Manager.pdf",
};
