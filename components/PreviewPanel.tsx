"use client";

import { motion } from "framer-motion";
import type { WorkItem } from "@/content/portfolioData";

type PreviewPanelProps = {
  item: WorkItem | null;
  title: string;
};

export default function PreviewPanel({ item, title }: PreviewPanelProps) {
  if (!item) return null;

  return (
    <motion.aside
      className="preview-panel panel"
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      aria-live="polite"
    >
      <p className="panel-kicker">{title}</p>
      <h3>{item.title}</h3>
      <div className="panel-rows">
        <p>
          <span>Organization</span>
          <strong>{item.org}</strong>
        </p>
        <p>
          <span>Role</span>
          <strong>{item.role}</strong>
        </p>
        <p>
          <span>Dates</span>
          <strong>{item.dates}</strong>
        </p>
      </div>
      <ul className="panel-impacts">
        {item.impacts.slice(0, 3).map((impact) => (
          <li key={impact}>{impact}</li>
        ))}
      </ul>
      <div className="panel-tags">
        {item.stack.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </motion.aside>
  );
}
