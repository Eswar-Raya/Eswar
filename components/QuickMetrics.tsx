"use client";

import type { MetricItem } from "@/data/site";
import type { LucideIcon } from "lucide-react";
import { Cloud, Coins, GitMerge, Server, Users } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { cardVariant, staggerContainer } from "@/lib/motion";

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

type ParsedMetric =
  | { kind: "counter"; target: number; prefix: string; suffix: string }
  | { kind: "static"; value: string };

function parseMetricValue(raw: string): ParsedMetric {
  const trimmed = raw.trim();

  const rangeMatch = trimmed.match(/^(\d+)-(\d+)([\s\S]*)$/);
  if (rangeMatch) {
    const target = parseInt(rangeMatch[2], 10);
    if (!Number.isNaN(target)) {
      return {
        kind: "counter",
        target,
        prefix: `${rangeMatch[1]}-`,
        suffix: rangeMatch[3] ?? "",
      };
    }
  }

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
