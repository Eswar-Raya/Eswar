import type { LucideIcon } from "lucide-react";
import {
  Activity,
  BarChart3,
  Boxes,
  Brain,
  BriefcaseBusiness,
  Cable,
  Cloud,
  CloudCog,
  Code2,
  Database,
  FileCode2,
  GitBranch,
  GraduationCap,
  KanbanSquare,
  Network,
  Package,
  LineChart,
  RadioTower,
  School,
  Shield,
  ShieldCheck,
  Terminal,
  Wrench,
} from "lucide-react";

export const companyIconMap = {
  tata: Wrench,
  huawei: RadioTower,
  ericsson: Network,
  adecco: Terminal,
  dxc: CloudCog,
  savvy: Brain,
} satisfies Record<string, LucideIcon>;

export const educationIconMap = {
  stevens: GraduationCap,
  bachelors: School,
} satisfies Record<string, LucideIcon>;

export const experienceIconMap = {
  tata: Wrench,
  huawei: RadioTower,
  ericsson: Network,
  adecco: Terminal,
  dxc: CloudCog,
  stevens: GraduationCap,
  savvy: Brain,
} satisfies Record<string, LucideIcon>;

export const serviceIconMap = {
  cloudMigration: Cloud,
  tpm: KanbanSquare,
  linuxModernization: Terminal,
  stakeholderRisk: ShieldCheck,
  dashboards: BarChart3,
  aiDelivery: Brain,
} satisfies Record<string, LucideIcon>;

export const toolIconMap = {
  aws: Cloud,
  linux: Terminal,
  jira: KanbanSquare,
  python: Code2,
  vmware: Boxes,
  cloudendure: Activity,
  docker: Package,
  git: GitBranch,
  analytics: LineChart,
  security: Shield,
  sql: Database,
  powerbi: BarChart3,
  azure: Cloud,
  pmatt: BriefcaseBusiness,
  adept: FileCode2,
  confluence: FileCode2,
  universalDiscovery: Cable,
  serviceNow: BriefcaseBusiness,
  shell: Terminal,
  agile: KanbanSquare,
  ollama: Brain,
  llamaindex: FileCode2,
  chroma: Database,
  fastapi: FileCode2,
  prompting: Brain,
  ml: LineChart,
} satisfies Record<string, LucideIcon>;

export type CompanyIconKey = keyof typeof companyIconMap;
export type EducationIconKey = keyof typeof educationIconMap;
export type ExperienceIconKey = keyof typeof experienceIconMap;
export type ServiceIconKey = keyof typeof serviceIconMap;
export type ToolIconKey = keyof typeof toolIconMap;
