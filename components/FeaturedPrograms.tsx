import Link from "next/link";
import IconGlyph from "@/components/IconGlyph";
import type { ProjectItem } from "@/data/profile";

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
            <h3>{item.name}</h3>
            <p>{item.clientContext}</p>
            <ul>
              {item.highlights.slice(0, 2).map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <div className="chip-list">
              {item.tools.slice(0, 4).map((tool) => (
                <span key={tool} className="chip with-icon">
                  <IconGlyph name={tool} className="chip-icon" />
                  {tool}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
