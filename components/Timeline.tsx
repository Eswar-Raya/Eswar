"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { WorkItem } from "@/content/portfolioData";
import PreviewPanel from "@/components/PreviewPanel";
import { trackEvent } from "@/lib/analytics";

type TimelineProps = {
  items: WorkItem[];
};

export default function Timeline({ items }: TimelineProps) {
  const router = useRouter();
  const [activeSlug, setActiveSlug] = useState(items[0]?.slug ?? "");

  const activeItem = useMemo(
    () => items.find((item) => item.slug === activeSlug) ?? items[0] ?? null,
    [activeSlug, items],
  );

  const activatePreview = (item: WorkItem) => {
    if (item.slug !== activeSlug) {
      setActiveSlug(item.slug);
      trackEvent("hover_preview", {
        section: "timeline",
        slug: item.slug,
      });
    }
  };

  return (
    <section className="section-v2" id="timeline">
      <div className="section-head">
        <p className="eyebrow">Career Timeline</p>
        <h2>Structured progression across telecom, cloud, and AI delivery</h2>
      </div>

      <div className="timeline-track-wrap">
        <div className="timeline-track-line" aria-hidden="true" />
        <div className="timeline-track">
          {items.map((item, index) => {
            const href = `/work/${item.slug}`;
            const selected = activeItem?.slug === item.slug;

            return (
              <motion.div
                key={item.slug}
                className={`timeline-card panel ${selected ? "is-active" : ""}`}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.16, ease: "easeOut" }}
              >
                <Link
                  href={href}
                  prefetch
                  className="timeline-link"
                  onMouseEnter={() => {
                    activatePreview(item);
                    router.prefetch(href);
                  }}
                  onFocus={() => activatePreview(item)}
                  onClick={() =>
                    trackEvent("open_case", {
                      section: "timeline",
                      slug: item.slug,
                    })
                  }
                >
                  <span className="timeline-index">{String(index + 1).padStart(2, "0")}</span>
                  <p className="timeline-stage">{item.stage}</p>
                  <h3>{item.org}</h3>
                  <p className="timeline-dates">{item.dates}</p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>

      <PreviewPanel item={activeItem} title="Timeline Preview" />
    </section>
  );
}
