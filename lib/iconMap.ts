import type { LucideIcon } from "lucide-react";
import {
  Activity,
  BarChart3,
  Boxes,
  Brain,
  BriefcaseBusiness,
  Cable,
  Cloud,
  Code2,
  Database,
  FileCode2,
  GitBranch,
  GraduationCap,
  HardHat,
  KanbanSquare,
  Layers,
  Network,
  Package,
  RadioTower,
  School,
  ShieldCheck,
  Terminal,
  Wrench,
} from "lucide-react";

export const companyIconMap = {
  tata: Wrench,
  huawei: RadioTower,
  ericsson: Network,
  adecco: HardHat,
  dxc: Layers,
} satisfies Record<string, LucideIcon>;

export const educationIconMap = {
  masters: GraduationCap,
  bachelors: School,
} satisfies Record<string, LucideIcon>;

export const serviceIconMap = {
  cloudMigration: Cloud,
  tpm: KanbanSquare,
  linux: Terminal,
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
} satisfies Record<string, LucideIcon>;

export type CompanyIconKey = keyof typeof companyIconMap;
export type EducationIconKey = keyof typeof educationIconMap;
export type ServiceIconKey = keyof typeof serviceIconMap;
export type ToolIconKey = keyof typeof toolIconMap;
