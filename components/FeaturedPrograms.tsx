"use client";

import Link from "next/link";
import IconBadge from "@/components/IconBadge";
import ToolBadge from "@/components/ToolBadge";
import { serviceIconMap } from "@/lib/iconMap";
import type { ProjectItem } from "@/data/projects";
import { motion, useReducedMotion } from "framer-motion";
import { cardVariant, staggerContainer } from "@/lib/motion";

type FeaturedProgramsProps = {
  items: ProjectItem[];
  title?: string;
  description?: string;
  linkHref?: string;
  linkLabel?: string;
  variant?: "primary" | "secondary";
};

export default function FeaturedPrograms({
  items,
  title = "Selected Transformation Programs",
  description = "Flagship infrastructure and cloud programs delivered across enterprise environments.",
  linkHref = "/projects",
  linkLabel = "View Program Portfolio",
  variant = "primary",
}: FeaturedProgramsProps) {
  const reduceMotion = useReducedMotion();

  const cardHover = reduceMotion
    ? undefined
    : {
        y: -6,
        scale: 1.005,
        borderColor: "rgba(147, 197, 253, 0.3)",
        boxShadow:
          "0 24px 64px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.1)",
        transition: { duration: 0.3, ease: "easeOut" as const },
      };

  return (
    <section className="visual-section">
      <div className="section-header section-header-row">
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <Link href={linkHref} className="section-link">
          {linkLabel}
        </Link>
      </div>
      {variant === "primary" ? (
        <motion.div
          className="program-rows"
          variants={staggerContainer}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {items.map((item, index) => (
            <motion.article
              key={item.slug}
              className={`panel program-row ${index % 2 ? "is-reverse" : ""} ${
                index === 0 ? "is-featured" : ""
              }`}
              variants={cardVariant}
              whileHover={cardHover}
            >
              <div className="program-copy">
                <span className="featured-category">{item.category}</span>
                <h3>{item.title}</h3>

                <div className="featured-meta">
                  <div className="project-client-row">
                    <IconBadge
                      icon={serviceIconMap[item.iconKey]}
                      label={item.context}
                      tone="service"
                      size="sm"
                    />
                    {item.context}
                  </div>
                  <div className="featured-line">
                    <span>Role</span>
                    <p>{item.role}</p>
                  </div>
                  <div className="featured-line">
                    <span>Scope</span>
                    <p>{item.scope}</p>
                  </div>
                  <div className="featured-line">
                    <span>Responsibilities</span>
                    <ul>
                      {item.bullets.slice(0, 2).map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="featured-line">
                    <span>Outcome</span>
                    <p>{item.details.outcomes[0]}</p>
                  </div>
                </div>

                <Link href={`/projects/${item.slug}`} prefetch className="detail-link">
                  View case study
                </Link>
              </div>

              <div className="program-visual">
                <div className="program-insight-grid">
                  <article className="program-insight-card">
                    <span>Execution Focus</span>
                    <p>{item.details.approach[0]}</p>
                  </article>
                  <article className="program-insight-card">
                    <span>Primary Result</span>
                    <p>{item.details.outcomes[0]}</p>
                  </article>
                </div>
                <div className="program-tool-strip">
                  {item.tools.slice(0, 6).map((tool) => (
                    <ToolBadge key={tool.label} toolKey={tool.key} label={tool.label} size="sm" />
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      ) : (
        <motion.div
          className="featured-grid featured-grid-secondary"
          variants={staggerContainer}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {items.map((item) => (
            <motion.article
              key={item.slug}
              className="panel featured-card is-secondary"
              variants={cardVariant}
              whileHover={cardHover}
            >
              <span className="featured-category">{item.category}</span>
              <h3>{item.title}</h3>
              <div className="featured-line">
                <span>Role</span>
                <p>{item.role}</p>
              </div>
              <div className="featured-line">
                <span>Outcome</span>
                <p>{item.details.outcomes[0]}</p>
              </div>
              <div className="chip-list">
                {item.tools.slice(0, 4).map((tool) => (
                  <ToolBadge key={tool.label} toolKey={tool.key} label={tool.label} size="sm" />
                ))}
              </div>
              <Link href={`/projects/${item.slug}`} prefetch className="detail-link">
                View case study
              </Link>
            </motion.article>
          ))}
        </motion.div>
      )}
    </section>
  );
}
