"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import IconBadge from "@/components/IconBadge";
import type { ExperienceItem } from "@/data/experience";
import { experienceIconMap, toolIconMap } from "@/lib/iconMap";

type ExperienceTimelineProps = {
  items: ExperienceItem[];
};

export default function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  const timelineItems = useMemo(() => [...items], [items]);
  const [activeSlug, setActiveSlug] = useState(timelineItems[0]?.slug ?? "");
  const [supportsHover, setSupportsHover] = useState(true);
  const [mobilePreviewOpen, setMobilePreviewOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const updateValue = () => {
      const canHover = mediaQuery.matches;
      setSupportsHover(canHover);
      setMobilePreviewOpen(canHover);
    };

    updateValue();
    mediaQuery.addEventListener("change", updateValue);

    return () => mediaQuery.removeEventListener("change", updateValue);
  }, []);

  const activeItem = useMemo(
    () => timelineItems.find((item) => item.slug === activeSlug) ?? timelineItems[0],
    [activeSlug, timelineItems],
  );

  if (!activeItem) {
    return null;
  }

  const isPreviewVisible = supportsHover || mobilePreviewOpen;
  const activeIconTone =
    activeItem.slug === "bachelors" || activeItem.slug === "masters"
      ? "education"
      : "company";

  return (
    <div className="experience-layout">
      <div className="experience-stack" role="listbox" aria-label="Experience timeline">
        {timelineItems.map((item) => {
          const isActive = item.slug === activeItem.slug;
          const iconTone =
            item.slug === "bachelors" || item.slug === "masters"
              ? "education"
              : "company";
          return (
            <motion.article
              key={item.slug}
              className={`panel exp-item ${isActive ? "is-active" : ""}`}
              onMouseEnter={() => {
                if (supportsHover) {
                  setActiveSlug(item.slug);
                }
              }}
              initial={false}
              whileHover={reduceMotion ? undefined : { y: -2 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
            >
              <Link
                href={`/experience/${item.slug}`}
                className="exp-trigger"
                role="option"
                aria-selected={isActive}
                onFocus={() => setActiveSlug(item.slug)}
                onClick={(event) => {
                  if (!supportsHover && !isActive) {
                    event.preventDefault();
                    setActiveSlug(item.slug);
                    setMobilePreviewOpen(true);
                    return;
                  }
                  setActiveSlug(item.slug);
                }}
                prefetch
              >
                <span className="exp-company-row">
                  <IconBadge
                    icon={experienceIconMap[item.iconKey]}
                    label={item.company}
                    tone={iconTone}
                    size="md"
                  />
                  <strong>{item.company}</strong>
                </span>
                <span className="exp-role-line">{item.title}</span>
                <span className="exp-date-line">{item.dates}</span>
              </Link>

              <ul className="exp-highlight-list">
                {item.bullets.slice(0, 4).map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <div className="chip-list">
                {item.tools.slice(0, 6).map((tool) => (
                  <span key={tool.label} className="chip with-icon" title={tool.label}>
                    <IconBadge icon={toolIconMap[tool.key]} label={tool.label} tone="tool" size="sm" />
                    {tool.label}
                  </span>
                ))}
              </div>

              <span className="detail-link">View role case study</span>
            </motion.article>
          );
        })}
      </div>

      <aside
        className={`panel exp-preview ${!isPreviewVisible ? "is-hidden-mobile" : ""}`}
        aria-live="polite"
      >
        <div className="exp-preview-head">
          <IconBadge
            icon={experienceIconMap[activeItem.iconKey]}
            label={activeItem.company}
            tone={activeIconTone}
            size="md"
          />
          <div>
            <h3>{activeItem.company}</h3>
            <p>{activeItem.title}</p>
            <span>{activeItem.dates}</span>
          </div>
        </div>

        <div className="preview-block">
          <h4>Quick Preview</h4>
          <ul>
            {activeItem.details.responsibilities.slice(0, 8).map((entry) => (
              <li key={entry}>{entry}</li>
            ))}
          </ul>
        </div>

        <div className="preview-block">
          <h4>Tools/Tech</h4>
          <div className="chip-list">
            {activeItem.details.tools.map((tool) => (
              <span key={tool.label} className="chip with-icon">
                <IconBadge icon={toolIconMap[tool.key]} label={tool.label} tone="tool" size="sm" />
                {tool.label}
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
          View Full Details
        </Link>
      </aside>
    </div>
  );
}
