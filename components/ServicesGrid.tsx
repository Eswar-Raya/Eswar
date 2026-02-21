import Link from "next/link";
import IconBadge from "@/components/IconBadge";
import { serviceIconMap } from "@/lib/iconMap";
import type { ServiceItem } from "@/data/services";

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
            <IconBadge
              icon={serviceIconMap[item.iconKey]}
              label={item.title}
              tone="service"
              size="md"
              className="service-icon-badge"
            />
            <h3>{item.title}</h3>
            <p>{item.value}</p>
            <Link
              href={`/projects?category=${encodeURIComponent(item.filterCategory)}`}
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
