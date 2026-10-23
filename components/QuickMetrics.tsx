"use client";

import type { MetricItem } from "@/data/site";
import type { LucideIcon } from "lucide-react";
import { Boxes, Coins, GitMerge, Server, Timer } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { cardVariant, staggerContainer } from "@/lib/motion";

type QuickMetricsProps = {
  items: MetricItem[];
};

const iconByLabel: Record<string, LucideIcon> = {
  Experience: GitMerge,
  "Applications Migrated": Boxes,
  "Server Scope": Server,
  "Reduction in Delivery Delays": Timer,
  "Cost Optimization": Coins,
};

type ParsedMetric =
  | { kind: "counter"; target: number; prefix: string; suffix: string }
  | { kind: "static"; value: string };

function parseMetricValue(raw: string): ParsedMetric {
  const trimmed = raw.trim();

  // Ranges stay static so animation never displays an invalid range such as 15-0%.
  if (/^\d+[-–]\d+/.test(trimmed)) return { kind: "static", value: raw };

  const match = trimmed.match(/^(\d+)([\s\S]*)$/);
  if (match) {
    const num = parseInt(match[1], 10);
    if (!Number.isNaN(num)) {
      return {
        kind: "counter",
        target: num,
        prefix: "",
        suffix: match[2] ?? "",
      };
    }
  }

  return { kind: "static", value: raw };
}

function counterDurationForLabel(label: string): number {
  switch (label) {
    case "Experience":
      return 0.9;
    case "Linux Server Scope":
      return 1.1;
    case "Team Coordination":
      return 0.9;
    case "Cost Optimization":
      return 0.9;
    default:
      return 1.2;
  }
}

export default function QuickMetrics({ items }: QuickMetricsProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="visual-section metrics-section">
      <motion.section
        className="panel metric-strip"
        variants={staggerContainer}
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {items.map((item) => {
          const Icon = iconByLabel[item.label] ?? GitMerge;
          const parsed = parseMetricValue(item.value);
          return (
            <motion.article
              key={item.label}
              className="metric-card"
              variants={cardVariant}
            >
              <div className="metric-head">
                <Icon />
                <span>{item.label}</span>
              </div>
              <h3>
                {parsed.kind === "counter" ? (
                  <AnimatedCounter
                    target={parsed.target}
                    prefix={parsed.prefix}
                    suffix={parsed.suffix}
                    duration={counterDurationForLabel(item.label)}
                  />
                ) : (
                  parsed.value
                )}
              </h3>
              <p>{item.context}</p>
            </motion.article>
          );
        })}
      </motion.section>
    </section>
  );
}
