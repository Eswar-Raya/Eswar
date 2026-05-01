"use client";

import { ArrowDown, Search, ShieldCheck, SlidersHorizontal, Workflow } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { easeSoft } from "@/lib/motion";

const steps = [
  {
    id: "discover",
    title: "Discover Dependencies",
    note: "Universal Discovery + stakeholder workshops",
    icon: Search,
  },
  {
    id: "sequence",
    title: "Sequence Migration Waves",
    note: "Readiness evidence before commitments",
    icon: Workflow,
  },
  {
    id: "cutover",
    title: "Run Production Cutover",
    note: "Rollback criteria with named owners",
    icon: SlidersHorizontal,
  },
  {
    id: "stabilize",
    title: "Stabilize and Handover",
    note: "Post-cutover checks and operational handoff",
    icon: ShieldCheck,
  },
] as const;

export default function DeliveryFlowVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="delivery-flow-visual">
      <span className="delivery-flow-kicker">How execution moves</span>
      <div className="delivery-flow-grid">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isLast = index === steps.length - 1;
          return (
            <motion.div
              key={step.id}
              className="delivery-flow-row"
              initial={reduceMotion ? false : { opacity: 0, y: 14, filter: "blur(6px)" }}
              whileInView={
                reduceMotion
                  ? { opacity: 1 }
                  : { opacity: 1, y: 0, filter: "blur(0px)" }
              }
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: easeSoft }}
            >
              <div className="delivery-flow-rail" aria-hidden="true">
                <span className="delivery-flow-dot">
                  <Icon />
                </span>
                {!isLast ? <span className="delivery-flow-line" /> : null}
                {!isLast ? (
                  <span className="delivery-flow-arrow">
                    <ArrowDown />
                  </span>
                ) : null}
              </div>

              <article className="delivery-flow-step">
                <div className="delivery-flow-head">
                  <h4>{step.title}</h4>
                </div>
                <p>{step.note}</p>
              </article>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
