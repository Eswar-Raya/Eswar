"use client";

import { motion, useReducedMotion } from "framer-motion";
import { easeSoft } from "@/lib/motion";

type TimelineNode = {
  id: string;
  period: string;
  company: string;
  label: string;
  sublabel: string;
  flagship?: boolean;
};

const timeline: TimelineNode[] = [
  {
    id: "tata",
    period: "2013\u20132016",
    company: "Tata Teleservices",
    label: "Linux & Telecom Foundation",
    sublabel: "Technical Engineer",
  },
  {
    id: "huawei",
    period: "2016\u20132017",
    company: "Huawei Technologies",
    label: "Telecom Foundation",
    sublabel: "Sr. Technical Engineer",
  },
  {
    id: "ericsson",
    period: "2017\u20132018",
    company: "Ericsson India",
    label: "Platform Engineering",
    sublabel: "Solution Integrator",
  },
  {
    id: "adecco",
    period: "2019\u20132020",
    company: "Adecco / HP",
    label: "Linux Migration",
    sublabel: "Sr. Linux Migration Engineer",
  },
  {
    id: "dxc",
    period: "2020\u20132023",
    company: "DXC Technology",
    label: "Enterprise Cloud Transformation",
    sublabel: "Technical Project Manager",
    flagship: true,
  },
  {
    id: "savvy",
    period: "2025",
    company: "Savvy Global",
    label: "AI Innovation",
    sublabel: "Technical Project Manager",
  },
  {
    id: "cdf",
    period: "2025\u2013Present",
    company: "Community Dreams Foundation",
    label: "Civic Tech",
    sublabel: "Volunteer TPM",
  },
];

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
        variants={containerVariant}
        initial={reduceMotion ? false : "hidden"}
        whileInView={reduceMotion ? undefined : "visible"}
        viewport={{ once: true, amount: 0.2 }}
      >
        <span className="career-timeline-connector" aria-hidden="true" />
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
