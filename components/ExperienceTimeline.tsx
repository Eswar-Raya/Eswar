"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import IconGlyph from "@/components/IconGlyph";
import EntityLogo from "@/components/EntityLogo";
import type { ExperienceItem } from "@/data/experience";

type ExperienceTimelineProps = {
  items: ExperienceItem[];
};

export default function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  const timelineItems = useMemo(() => [...items].reverse(), [items]);
  const [activeSlug, setActiveSlug] = useState(timelineItems[0]?.slug ?? "");
  const reduceMotion = useReducedMotion();

  const activeItem = useMemo(
    () => timelineItems.find((item) => item.slug === activeSlug) ?? timelineItems[0],
    [activeSlug, timelineItems],
  );

  if (!activeItem) {
    return null;
  }

  return (
    <section className="visual-section">
      <div className="section-header">
        <h2>Career Timeline</h2>
        <p>Hover any company card for quick preview. Click a card to open the full role brief.</p>
      </div>

      <div className="experience-layout">
        <div className="experience-stack" aria-label="Experience timeline">
          {timelineItems.map((item) => {
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
                    <EntityLogo logoKey={item.logoKey} className="company-icon" />
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
                  {item.techIcons.map((tech) => (
                    <span key={tech} className="chip with-icon" title={tech}>
                      <IconGlyph name={tech} className="chip-icon" />
                      {tech}
                    </span>
                  ))}
                </div>

                <span className="detail-link">View role case study</span>
              </motion.article>
            );
          })}
        </div>

        <aside className="panel exp-preview" aria-live="polite">
          <div className="exp-preview-head">
            <EntityLogo logoKey={activeItem.logoKey} className="company-icon large" />
            <div>
              <h3>{activeItem.company}</h3>
              <p>{activeItem.title}</p>
              <span>{activeItem.dates}</span>
            </div>
          </div>

          <div className="preview-block">
            <h4>Quick Preview</h4>
            <ul>
              {activeItem.details.responsibilities.slice(0, 6).map((entry) => (
                <li key={entry}>{entry}</li>
              ))}
            </ul>
          </div>

          <div className="preview-block">
            <h4>Tools/Tech</h4>
            <div className="chip-list">
              {activeItem.techIcons.map((tool) => (
                <span key={tool} className="chip with-icon">
                  <IconGlyph name={tool} className="chip-icon" />
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="preview-block">
            <h4>Outcomes</h4>
            <ul>
              {activeItem.details.outcomes.slice(0, 3).map((entry) => (
                <li key={entry}>{entry}</li>
              ))}
            </ul>
          </div>

          <Link href={`/experience/${activeItem.slug}`} className="btn btn-primary" prefetch>
            Open Full Role Detail
          </Link>
        </aside>
      </div>
    </section>
  );
}
