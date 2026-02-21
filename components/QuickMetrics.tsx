import type { MetricItem } from "@/data/site";

type QuickMetricsProps = {
  items: MetricItem[];
};

export default function QuickMetrics({ items }: QuickMetricsProps) {
  return (
    <section className="visual-section">
      <div className="section-header">
        <h2>Executive Snapshot</h2>
      </div>
      <div className="metric-grid">
        {items.map((item) => (
          <article key={item.label} className="panel metric-card">
            <span>{item.label}</span>
            <h3>{item.value}</h3>
            <p>{item.context}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
