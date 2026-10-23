"use client";

import { motion, useReducedMotion } from "framer-motion";
import { easeSoft } from "@/lib/motion";
import { timelineExperiences } from "@/data/experience";
import type { CSSProperties } from "react";

type TimelineNode = {
  id: string;
  period: string;
  company: string;
  label: string;
  sublabel: string;
  flagship?: boolean;
};

const phaseLabels: Record<string, string> = {
  tata: "Linux & Telecom Foundation",
  huawei: "Telecom Integration",
  ericsson: "Platform Engineering",
  adecco: "Linux Migration",
  dxc: "Enterprise Cloud Transformation",
  savvy: "AI Innovation",
  "community-dreams": "Predictive Analytics",
  aivanta: "Technology Delivery",
};

const timeline: TimelineNode[] = [...timelineExperiences].reverse().map((item) => ({
  id: item.slug,
  period: `${item.startDate.slice(0, 4)}–${item.endDate === "present" ? "Present" : item.endDate.slice(0, 4)}`,
  company: item.label,
  label: phaseLabels[item.slug] ?? "Technical Delivery",
  sublabel: item.title.split(" | ")[0],
  flagship: item.slug === "dxc",
}));

const nodeVariant = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: easeSoft },
  },
};

const containerVariant = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const flagshipPulse = {
  boxShadow: [
    "0 0 0 5px rgba(59,130,246,0.2)",
    "0 0 0 9px rgba(59,130,246,0.05)",
    "0 0 0 5px rgba(59,130,246,0.2)",
  ],
};

export default function CareerStory() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="panel career-timeline-shell" aria-label="Career timeline">
      <div className="career-timeline-head">
        <h2>Career Story</h2>
        <p>
          Progression from telecom operations to enterprise cloud transformation
          leadership and applied AI delivery.
        </p>
      </div>

      <motion.ol
        className="career-timeline"
        style={{ "--career-stages": timeline.length } as CSSProperties}
        variants={containerVariant}
        initial={reduceMotion ? false : "hidden"}
        whileInView={reduceMotion ? undefined : "visible"}
        viewport={{ once: true, amount: 0.2 }}
      >
        {timeline.map((node) => (
          <motion.li
            key={node.id}
            className={`career-node ${node.flagship ? "is-flagship" : ""}`}
            variants={nodeVariant}
          >
            <span className="career-node-period">{node.period}</span>
            {node.flagship ? (
              <motion.span
                className="career-node-circle"
                aria-hidden="true"
                animate={reduceMotion ? undefined : flagshipPulse}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />
            ) : (
              <span className="career-node-circle" aria-hidden="true" />
            )}
            <div className="career-node-card">
              <span className="career-node-company">{node.company}</span>
              <span className="career-node-label">{node.label}</span>
              <span className="career-node-sublabel">{node.sublabel}</span>
            </div>
          </motion.li>
        ))}
      </motion.ol>
    </section>
  );
}
