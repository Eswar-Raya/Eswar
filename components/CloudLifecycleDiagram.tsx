"use client";

import { ArrowDown, Cloud, RefreshCw, Search, Server, Share2, ShieldCheck } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import ToolBadge from "@/components/ToolBadge";

const lifecycleStages = [
  {
    id: "on-prem",
    title: "On-Prem Data Center",
    subtitle: "Current-state workloads and constraints",
    icon: Server,
  },
  {
    id: "discovery",
    title: "Dependency Discovery",
    subtitle: "Inventory, ownership, and dependency mapping",
    icon: Search,
  },
  {
    id: "planning",
    title: "Migration Wave Planning",
    subtitle: "Readiness-first sequencing and rollback design",
    icon: Share2,
  },
  {
    id: "migration",
    title: "Cloud Migration (AWS / Azure)",
    subtitle: "Wave execution across target cloud environments",
    icon: Cloud,
  },
  {
    id: "cutover",
    title: "Production Cutover",
    subtitle: "Controlled move windows with validation",
    icon: RefreshCw,
  },
  {
    id: "stabilization",
    title: "Stabilization & Handover",
    subtitle: "Operational ownership and post-cutover assurance",
    icon: ShieldCheck,
  },
] as const;

const lifecycleTools = [
  { key: "aws", label: "AWS" },
  { key: "azure", label: "Azure" },
  { key: "linux", label: "Linux" },
  { key: "vmware", label: "VMware" },
  { key: "cloudendure", label: "CloudEndure" },
  { key: "powerbi", label: "Power BI" },
  { key: "jira", label: "Jira" },
] as const;

export default function CloudLifecycleDiagram() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="lifecycle-diagram" aria-label="Cloud transformation lifecycle">
      <span className="lifecycle-kicker">Cloud Transformation Lifecycle</span>

      <motion.div
        className="lifecycle-pipeline"
        initial={reduceMotion ? false : "hidden"}
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.12 } },
        }}
      >
        {lifecycleStages.map((stage, index) => {
          const Icon = stage.icon;
          const isLast = index === lifecycleStages.length - 1;

          return (
            <motion.article
              key={stage.id}
              className={`lifecycle-stage ${isLast ? "is-last" : ""}`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.48, ease: "easeOut" }}
            >
              <div className="lifecycle-flow-column" aria-hidden="true">
                <span className="lifecycle-stage-icon">
                  <Icon />
                </span>
                {!isLast ? (
                  <motion.span
                    className="lifecycle-connector"
                    variants={{
                      hidden: { opacity: 0, scaleY: 0 },
                      show: { opacity: 1, scaleY: 1 },
                    }}
                    transition={{ duration: 0.35, ease: "easeOut", delay: 0.08 }}
                  >
                    <i />
                    <ArrowDown />
                  </motion.span>
                ) : null}
              </div>
              <div className="lifecycle-stage-copy">
                <h4>{stage.title}</h4>
                <p>{stage.subtitle}</p>
              </div>
            </motion.article>
          );
        })}
      </motion.div>

      <motion.div
        className="lifecycle-tool-strip"
        initial={reduceMotion ? false : "hidden"}
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.05 } },
        }}
      >
        {lifecycleTools.map((tool) => (
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
    </section>
  );
}
