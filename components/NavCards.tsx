import Link from "next/link";
import {
  BriefcaseBusiness,
  FileText,
  FolderKanban,
  GraduationCap,
  House,
  Mail,
} from "lucide-react";
import IconBadge from "@/components/IconBadge";
import type { LucideIcon } from "lucide-react";

type NavCard = {
  href: string;
  title: string;
  icon: string;
};

type NavCardsProps = {
  items: NavCard[];
};

const navIconMap: Record<string, LucideIcon> = {
  home: House,
  timeline: BriefcaseBusiness,
  education: GraduationCap,
  projects: FolderKanban,
  service: FileText,
  contact: Mail,
};

export default function NavCards({ items }: NavCardsProps) {
  return (
    <section className="visual-section">
      <div className="section-header">
        <h2>Navigate Portfolio</h2>
      </div>
      <div className="nav-card-grid">
        {items.map((item) => {
          const Icon = navIconMap[item.icon] ?? FileText;
          return (
            <Link key={item.href} href={item.href} className="panel nav-card" prefetch>
              <IconBadge icon={Icon} label={item.title} tone="service" size="sm" />
              <span>{item.title}</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
