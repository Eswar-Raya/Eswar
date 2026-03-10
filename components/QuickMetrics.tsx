"use client";

import type { MetricItem } from "@/data/site";
import type { LucideIcon } from "lucide-react";
import { Cloud, Coins, GitMerge, Server, Users } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

type QuickMetricsProps = {
  items: MetricItem[];
};

const iconByLabel: Record<string, LucideIcon> = {
  Experience: GitMerge,
  "Linux Server Scope": Server,
  "Team Coordination": Users,
  "Migration Execution": Cloud,
  "Cost Optimization": Coins,
};

export default function QuickMetrics({ items }: QuickMetricsProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="visual-section metrics-section">
      <motion.section
        className="panel metric-strip"
        initial={reduceMotion ? false : "hidden"}
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {items.map((item) => {
          const Icon = iconByLabel[item.label] ?? GitMerge;
          return (
            <motion.article
              key={item.label}
              className="metric-card"
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="metric-head">
                <Icon />
                <span>{item.label}</span>
              </div>
              <h3>{item.value}</h3>
              <p>{item.context}</p>
            </motion.article>
          );
        })}
      </motion.section>
    </section>
  );
}
