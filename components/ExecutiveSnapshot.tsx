"use client";

import { motion } from "framer-motion";
import type { SnapshotMetric } from "@/content/portfolioData";

type ExecutiveSnapshotProps = {
  metrics: SnapshotMetric[];
};

export default function ExecutiveSnapshot({ metrics }: ExecutiveSnapshotProps) {
  return (
    <section className="section-v2" id="snapshot">
      <div className="section-head">
        <p className="eyebrow">Executive Snapshot</p>
        <h2>Delivery metrics aligned to enterprise outcomes</h2>
      </div>
      <div className="snapshot-grid">
        {metrics.map((metric) => (
          <motion.article
            key={metric.label}
            className="snapshot-card panel"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
          >
            <p className="snapshot-label">{metric.label}</p>
            <p className="snapshot-value">{metric.value}</p>
            <p className="snapshot-note">{metric.note}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
