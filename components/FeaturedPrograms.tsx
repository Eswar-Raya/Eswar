import Link from "next/link";
import IconBadge from "@/components/IconBadge";
import { serviceIconMap, toolIconMap } from "@/lib/iconMap";
import type { ProjectItem } from "@/data/projects";

type FeaturedProgramsProps = {
  items: ProjectItem[];
};

export default function FeaturedPrograms({ items }: FeaturedProgramsProps) {
  return (
    <section className="visual-section">
      <div className="section-header section-header-row">
        <h2>Featured Programs</h2>
        <Link href="/projects" className="section-link">
          View All
        </Link>
      </div>
      <div className="featured-grid">
        {items.map((item) => (
          <Link key={item.slug} href={`/projects/${item.slug}`} prefetch className="panel featured-card">
            <span className="featured-category">{item.category}</span>
            <h3>{item.title}</h3>
            <p className="project-client-row">
              <IconBadge
                icon={serviceIconMap[item.iconKey]}
                label={item.clientProgram}
                tone="service"
                size="sm"
              />
              {item.clientProgram}
            </p>
            <ul>
              {item.bullets.slice(0, 2).map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <div className="chip-list">
              {item.tools.slice(0, 4).map((tool) => (
                <span key={tool.label} className="chip with-icon">
                  <IconBadge icon={toolIconMap[tool.key]} label={tool.label} tone="tool" size="sm" />
                  {tool.label}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
