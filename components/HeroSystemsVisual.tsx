"use client";

import { CloudUpload, SearchCheck, ShieldCheck, Workflow } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import ToolBadge from "@/components/ToolBadge";

const heroToolStrip = [
  { key: "aws", label: "AWS" },
  { key: "azure", label: "Azure" },
  { key: "linux", label: "Linux" },
  { key: "vmware", label: "VMware" },
  { key: "cloudendure", label: "CloudEndure" },
] as const;

const stages = [
  { id: "discover", title: "Discovery", subtitle: "Dependency mapping", icon: SearchCheck },
  { id: "plan", title: "Wave Planning", subtitle: "Readiness-first sequencing", icon: Workflow },
  { id: "cutover", title: "Cutover", subtitle: "Rollback-ready execution", icon: CloudUpload },
  { id: "stabilize", title: "Stabilize", subtitle: "Operations handover", icon: ShieldCheck },
] as const;

export default function HeroSystemsVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="hero-system-visual">
      <span className="hero-system-kicker">Migration Lifecycle Story</span>

      <div className="hero-system-grid">
        {stages.map((stage, index) => {
          const Icon = stage.icon;
          return (
            <motion.article
              key={stage.id}
              className="hero-system-card"
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.35, delay: index * 0.06, ease: "easeOut" }}
            >
              <span className="hero-system-icon" aria-hidden="true">
                <Icon />
              </span>
              <h4>{stage.title}</h4>
              <p>{stage.subtitle}</p>
            </motion.article>
          );
        })}
      </div>

      <motion.div
        className="hero-system-tools"
        initial={reduceMotion ? false : "hidden"}
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.05 } },
        }}
      >
        {heroToolStrip.map((tool) => (
          <motion.div
            key={tool.key}
            variants={{
              hidden: { opacity: 0, y: 8 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <ToolBadge toolKey={tool.key} label={tool.label} tone="dark" size="sm" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
