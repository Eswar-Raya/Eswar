"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import IconBadge from "@/components/IconBadge";
import type { ExperienceItem } from "@/data/experience";
import ToolBadge from "@/components/ToolBadge";
import { experienceIconMap } from "@/lib/iconMap";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { easeSoft } from "@/lib/motion";

type ExperienceTimelineProps = {
  items: ExperienceItem[];
};

export default function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  const reduceMotion = useReducedMotion();
  const timelineItems = useMemo(
    () => [...items].sort((a, b) => b.timelineOrder - a.timelineOrder),
    [items],
  );
  const defaultActive = useMemo(
    () => timelineItems.find((item) => item.slug === "dxc")?.slug ?? timelineItems[0]?.slug ?? "",
    [timelineItems],
  );
  const [activeSlug, setActiveSlug] = useState(defaultActive);

  const activeItem = useMemo(
    () => timelineItems.find((item) => item.slug === activeSlug) ?? timelineItems[0],
    [activeSlug, timelineItems],
  );

  if (!activeItem) {
    return null;
  }

  const activeIcon = experienceIconMap[activeItem.iconKey as keyof typeof experienceIconMap];

  return (
    <section className="experience-journey">
      <aside className="panel experience-rail" role="tablist" aria-label="Employer timeline">
        {timelineItems.map((item, index) => {
          const isActive = item.slug === activeItem.slug;
          const isFlagship = item.slug === "dxc";
          const itemIcon = experienceIconMap[item.iconKey as keyof typeof experienceIconMap];

          return (
            <motion.button
              key={item.slug}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`experience-rail-item ${isActive ? "is-active" : ""}`}
              onClick={() => setActiveSlug(item.slug)}
              initial={reduceMotion ? false : { opacity: 0, y: 16, filter: "blur(6px)" }}
              whileInView={
                reduceMotion
                  ? { opacity: 1 }
                  : { opacity: 1, y: 0, filter: "blur(0px)" }
              }
              viewport={{ once: true, amount: 0.45 }}
              whileHover={reduceMotion ? undefined : { y: -3 }}
              transition={{
                duration: 0.55,
                ease: easeSoft,
                delay: index * 0.06,
              }}
            >
              <span className="experience-rail-period">{item.periodLabel}</span>
              <span className="experience-rail-company">
                <IconBadge icon={itemIcon} label={item.label} tone="company" size="sm" />
                {item.label}
              </span>
              {isFlagship ? <span className="timeline-badge">Flagship role</span> : null}
              <span className="experience-rail-role">{item.title}</span>
            </motion.button>
          );
        })}
      </aside>

      <AnimatePresence mode="wait">
        <motion.article
          key={activeItem.slug}
          className="panel experience-focus panel-navy"
          initial={
            reduceMotion ? false : { opacity: 0, y: 24, filter: "blur(8px)" }
          }
          animate={
            reduceMotion
              ? { opacity: 1 }
              : { opacity: 1, y: 0, filter: "blur(0px)" }
          }
          exit={
            reduceMotion
              ? { opacity: 1 }
              : { opacity: 0, y: -12, filter: "blur(8px)" }
          }
          transition={{ duration: 0.55, ease: easeSoft }}
          style={{ overflow: "hidden" }}
        >
          <div className="experience-focus-head">
            <div className="experience-focus-title">
              <span className="detail-company">
                <IconBadge icon={activeIcon} label={activeItem.label} tone="company" size="md" />
                {activeItem.label}
              </span>
              <h3>{activeItem.title}</h3>
              <p>{activeItem.periodLabel}</p>
              {activeItem.slug === "dxc" ? (
                <span className="timeline-badge">Flagship role</span>
              ) : null}
            </div>
            <Link href={`/experience/${activeItem.slug}`} className="detail-link" prefetch>
              View full role case study
            </Link>
          </div>

          <div className="experience-focus-grid">
            <section className="focus-block">
              <h4>Responsibilities</h4>
              <ul>
                {activeItem.detailBullets.slice(0, 6).map((entry) => (
                  <li key={entry}>{entry}</li>
                ))}
              </ul>
            </section>

            <section className="focus-block">
              <h4>Outcomes</h4>
              <ul>
                {activeItem.outcomes.slice(0, 6).map((entry) => (
                  <li key={entry}>{entry}</li>
                ))}
              </ul>
            </section>

            <section className="focus-block">
              <h4>Tools</h4>
              <div className="chip-list">
                {activeItem.tools.slice(0, 10).map((tool) => (
                  <ToolBadge
                    key={tool.label}
                    toolKey={tool.key}
                    label={tool.label}
                    size="sm"
                    tone="dark"
                  />
                ))}
              </div>
            </section>
          </div>
        </motion.article>
      </AnimatePresence>
    </section>
  );
}
