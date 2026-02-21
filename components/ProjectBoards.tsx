"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import IconGlyph from "@/components/IconGlyph";
import type { ProjectCategory, ProjectItem } from "@/data/profile";

type ProjectBoardsProps = {
  items: ProjectItem[];
};

const categoryOrder: ProjectCategory[] = [
  "Enterprise Migration Programs",
  "Linux Migration & Modernization",
  "AI / Automation Initiatives",
];

export default function ProjectBoards({ items }: ProjectBoardsProps) {
  const [activeSlug, setActiveSlug] = useState(items[0]?.slug ?? "");
  const reduceMotion = useReducedMotion();

  const activeItem = useMemo(
    () => items.find((project) => project.slug === activeSlug) ?? items[0],
    [activeSlug, items],
  );

  const grouped = useMemo(() => {
    return categoryOrder.map((category) => ({
      category,
      items: items.filter((item) => item.category === category),
    }));
  }, [items]);

  if (!activeItem) {
    return null;
  }

  return (
    <section className="visual-section">
      <div className="section-header">
        <h2>Programs / Client Work / Initiatives</h2>
      </div>

      <div className="project-layout">
        <div className="project-sections">
          {grouped.map((group) => (
            <section key={group.category} className="visual-section">
              <div className="section-header">
                <h3>{group.category}</h3>
              </div>
              <div className="project-grid">
                {group.items.map((project) => {
                  const isActive = project.slug === activeItem.slug;
                  return (
                    <motion.article
                      key={project.slug}
                      className={`panel project-card ${isActive ? "is-active" : ""}`}
                      onMouseEnter={() => setActiveSlug(project.slug)}
                      whileHover={reduceMotion ? undefined : { y: -2 }}
                      transition={{ duration: 0.16, ease: "easeOut" }}
                    >
                      <Link
                        href={`/projects/${project.slug}`}
                        className="project-trigger"
                        data-selected={isActive ? "true" : "false"}
                        onFocus={() => setActiveSlug(project.slug)}
                        prefetch
                      >
                        <h4>{project.name}</h4>
                        <p className="project-context">{project.clientContext}</p>
                        <span className="project-role">{project.role}</span>
                      </Link>

                      <ul>
                        {project.highlights.map((highlight) => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>

                      <div className="chip-list">
                        {project.tools.map((tool) => (
                          <span key={tool} className="chip with-icon" title={tool}>
                            <IconGlyph name={tool} className="chip-icon" />
                            {tool}
                          </span>
                        ))}
                      </div>

                      <span className="detail-link">Open project</span>
                    </motion.article>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        <aside className="panel project-preview" aria-live="polite">
          <h3>{activeItem.name}</h3>
          <p>{activeItem.clientContext}</p>
          <span>{activeItem.role}</span>

          <div className="preview-block">
            <h4>Problem</h4>
            <p>{activeItem.details.problem}</p>
          </div>

          <div className="preview-block">
            <h4>Approach</h4>
            <ul>
              {activeItem.details.approach.slice(0, 3).map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </div>

          <Link href={`/projects/${activeItem.slug}`} className="btn btn-primary" prefetch>
            View Full Project Detail
          </Link>
        </aside>
      </div>
    </section>
  );
}
