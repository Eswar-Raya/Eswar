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
  const timelineItems = useMemo(
    () => [...items].sort((a, b) => b.timelineOrder - a.timelineOrder),
    [items],
  );
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
  const activeIconTone = activeItem.type === "education_phase" ? "education" : "company";
  const activeIcon = experienceIconMap[activeItem.iconKey as keyof typeof experienceIconMap];

  return (
    <div className="experience-layout">
      <div className="experience-stack" role="listbox" aria-label="Experience timeline">
        {timelineItems.map((item) => {
          const isActive = item.slug === activeItem.slug;
          const iconTone = item.type === "education_phase" ? "education" : "company";
          const itemIcon = experienceIconMap[item.iconKey as keyof typeof experienceIconMap];
          const cardBullets =
            item.type === "education_phase" && item.projectsDuringPhase?.length
              ? item.projectsDuringPhase
              : item.headlineBullets;

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
                    icon={itemIcon}
                    label={item.label}
                    tone={iconTone}
                    size="md"
                  />
                  <strong>{item.label}</strong>
                </span>
                <span className="exp-role-line">{item.title}</span>
                <span className="exp-date-line">{item.periodLabel}</span>
                {item.type === "education_phase" ? (
                  <span className="phase-badge">Education Phase</span>
                ) : null}
              </Link>

              <ul className="exp-highlight-list">
                {cardBullets.slice(0, 5).map((point) => (
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
            icon={activeIcon}
            label={activeItem.label}
            tone={activeIconTone}
            size="md"
          />
          <div>
            <h3>{activeItem.label}</h3>
            <p>{activeItem.title}</p>
            <span>{activeItem.periodLabel}</span>
            {activeItem.type === "education_phase" ? (
              <span className="phase-badge">Education Phase</span>
            ) : null}
          </div>
        </div>

        <div className="preview-block">
          <h4>{activeItem.type === "education_phase" ? "Projects During Stevens" : "Quick Preview"}</h4>
          <ul>
            {(activeItem.type === "education_phase" && activeItem.projectsDuringPhase?.length
              ? activeItem.projectsDuringPhase
              : activeItem.detailBullets
            )
              .slice(0, 8)
              .map((entry) => (
                <li key={entry}>{entry}</li>
              ))}
          </ul>
        </div>

        <div className="preview-block">
          <h4>Tools/Tech</h4>
          <div className="chip-list">
            {activeItem.tools.map((tool) => (
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
            {activeItem.outcomes.slice(0, 3).map((entry) => (
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
