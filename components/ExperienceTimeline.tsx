"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import IconGlyph from "@/components/IconGlyph";
import type { ExperienceItem } from "@/data/profile";

type ExperienceTimelineProps = {
  items: ExperienceItem[];
};

export default function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  const [activeSlug, setActiveSlug] = useState(items[0]?.slug ?? "");
  const reduceMotion = useReducedMotion();

  const activeItem = useMemo(
    () => items.find((item) => item.slug === activeSlug) ?? items[0],
    [activeSlug, items],
  );

  if (!activeItem) {
    return null;
  }

  return (
    <section className="visual-section">
      <div className="section-header">
        <h2>Career Timeline</h2>
        <p>Vertical timeline with role progression, outcomes, and technical scope.</p>
      </div>

      <div className="experience-layout">
        <div className="experience-stack" aria-label="Experience timeline">
          {items.map((item) => {
            const isActive = item.slug === activeItem.slug;
            return (
              <motion.article
                key={item.slug}
                className={`panel exp-item ${isActive ? "is-active" : ""}`}
                onMouseEnter={() => setActiveSlug(item.slug)}
                initial={false}
                whileHover={reduceMotion ? undefined : { y: -2 }}
                transition={{ duration: 0.16, ease: "easeOut" }}
              >
                <Link
                  href={`/experience/${item.slug}`}
                  className="exp-trigger"
                  data-selected={isActive ? "true" : "false"}
                  onFocus={() => setActiveSlug(item.slug)}
                  prefetch
                >
                  <span className="exp-company-row">
                    <IconGlyph name={item.icon} className="company-icon" />
                    <strong>{item.company}</strong>
                  </span>
                  <span className="exp-role-line">{item.title}</span>
                  <span className="exp-date-line">{item.dates}</span>
                </Link>

                <ul className="exp-highlight-list">
                  {item.highlights.slice(0, 3).map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <div className="chip-list">
                  {item.tech.map((tech) => (
                    <span key={tech} className="chip with-icon" title={tech}>
                      <IconGlyph name={tech} className="chip-icon" />
                      {tech}
                    </span>
                  ))}
                </div>

                <span className="detail-link">Open details</span>
              </motion.article>
            );
          })}
        </div>

        <aside className="panel exp-preview" aria-live="polite">
          <div className="exp-preview-head">
            <IconGlyph name={activeItem.icon} className="company-icon large" />
            <div>
              <h3>{activeItem.company}</h3>
              <p>{activeItem.title}</p>
              <span>{activeItem.dates}</span>
            </div>
          </div>

          <div className="preview-block">
            <h4>More details</h4>
            <p>{activeItem.details.overview}</p>
          </div>

          <div className="preview-mini-grid">
            <div>
              <h5>Scope & Stakeholders</h5>
              <ul>
                {activeItem.details.scopeStakeholders.slice(0, 3).map((entry) => (
                  <li key={entry}>{entry}</li>
                ))}
              </ul>
            </div>
            <div>
              <h5>Key Deliverables</h5>
              <ul>
                {activeItem.details.deliverables.slice(0, 3).map((entry) => (
                  <li key={entry}>{entry}</li>
                ))}
              </ul>
            </div>
          </div>

          <Link href={`/experience/${activeItem.slug}`} className="btn btn-primary" prefetch>
            View Full Role Detail
          </Link>
        </aside>
      </div>
    </section>
  );
}
