"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { WorkItem } from "@/content/portfolioData";
import PreviewPanel from "@/components/PreviewPanel";
import { trackEvent } from "@/lib/analytics";

type CaseStudiesProps = {
  items: WorkItem[];
};

export default function CaseStudies({ items }: CaseStudiesProps) {
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
        section: "case_studies",
        slug: item.slug,
      });
    }
  };

  return (
    <section className="section-v2" id="programs">
      <div className="section-head">
        <p className="eyebrow">Enterprise Programs</p>
        <h2>Selected programs with measurable business outcomes</h2>
      </div>
      <div className="case-layout">
        <div className="case-grid">
          {items.map((item) => {
            const href = `/work/${item.slug}`;
            const selected = activeItem?.slug === item.slug;
            return (
              <motion.div
                key={item.slug}
                className={`case-card panel ${selected ? "is-active" : ""}`}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.16, ease: "easeOut" }}
              >
                <Link
                  href={href}
                  prefetch
                  className="case-link"
                  onMouseEnter={() => {
                    activatePreview(item);
                    router.prefetch(href);
                  }}
                  onFocus={() => activatePreview(item)}
                  onClick={() =>
                    trackEvent("open_case", {
                      section: "case_studies",
                      slug: item.slug,
                    })
                  }
                >
                  <p className="case-org">{item.org}</p>
                  <h3>{item.title}</h3>
                  <p className="case-summary">{item.summary}</p>
                </Link>
              </motion.div>
            );
          })}
        </div>
        <PreviewPanel item={activeItem} title="Program Preview" />
      </div>
    </section>
  );
}
