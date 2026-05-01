"use client";

import IconBadge from "@/components/IconBadge";
import TechPill from "@/components/ui/TechPill";
import type { EducationItem } from "@/data/education";
import { educationIconMap } from "@/lib/iconMap";
import { motion, useReducedMotion } from "framer-motion";
import { cardVariant, staggerContainer } from "@/lib/motion";

type EducationPanelProps = {
  items: EducationItem[];
};

export default function EducationPanel({ items }: EducationPanelProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="visual-section">
      <motion.div
        className="education-grid"
        variants={staggerContainer}
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {items.map((item, index) => {
          const inProgress = item.dates.toLowerCase().includes("present");
          return (
            <motion.article
              key={item.slug}
              className={`panel education-card ${index % 2 === 0 ? "education-card-navy" : ""}`}
              variants={cardVariant}
            >
              <div className="education-head">
                <span className="education-school">
                  <IconBadge
                    icon={educationIconMap[item.iconKey]}
                    label={item.institution}
                    tone="education"
                    size="md"
                  />
                  {item.institution}
                </span>
                <span className="education-date">
                  {inProgress ? <span className="pulse-dot" aria-hidden="true" /> : null}
                  {item.dates}
                </span>
              </div>

              <h3>{item.degree}</h3>
              <p>{item.field}</p>

              <div className="education-subsection">
                <h4>Relevant Coursework</h4>
                <div className="chip-list">
                  {item.coursework.map((course, idx) => (
                    <TechPill key={course} delay={idx * 0.04}>
                      {course}
                    </TechPill>
                  ))}
                </div>
              </div>

              <div className="education-subsection">
                <h4>Why this matters</h4>
                <p>{item.supportText}</p>
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}
