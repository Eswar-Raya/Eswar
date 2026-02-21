import IconGlyph from "@/components/IconGlyph";
import Link from "next/link";
import type { ServiceItem } from "@/data/skills";

type ServicesGridProps = {
  items: ServiceItem[];
  title?: string;
};

export default function ServicesGrid({
  items,
  title = "Skills / Services",
}: ServicesGridProps) {
  return (
    <section className="visual-section">
      <div className="section-header">
        <h2>{title}</h2>
      </div>
      <div className="services-grid">
        {items.map((item) => (
          <article key={item.title} className="panel service-card">
            <IconGlyph name={item.icon} className="service-icon" />
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
            <Link
              href={`/projects?category=${encodeURIComponent(item.projectFilter)}`}
              className="detail-link"
              prefetch
            >
              See relevant programs
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
