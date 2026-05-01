"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import IconBadge from "@/components/IconBadge";
import ToolBadge from "@/components/ToolBadge";
import { projectCategories, type ProjectCategory, type ProjectItem } from "@/data/projects";
import { serviceIconMap } from "@/lib/iconMap";
import { cardVariant, staggerContainer } from "@/lib/motion";

type ProjectBoardsProps = {
  items: ProjectItem[];
};

function getCategoryFromQuery(value: string | null): ProjectCategory | null {
  if (!value) {
    return null;
  }
  const normalized = value.toLowerCase().trim();
  if (normalized.includes("infrastructure") || normalized.includes("platform")) {
    return "Infrastructure Transformation";
  }
  if (normalized.includes("cloud") || normalized.includes("migration")) {
    return "Cloud Migration Programs";
  }
  if (normalized.includes("ai")) {
    return "Applied AI Projects";
  }
  return null;
}

export default function ProjectBoards({ items }: ProjectBoardsProps) {
  const searchParams = useSearchParams();
  const reduceMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | null>(null);
  const categoryFromQuery = getCategoryFromQuery(searchParams.get("category"));
  const selectedCategory = activeCategory ?? categoryFromQuery ?? "Infrastructure Transformation";

  const filteredProjects = useMemo(
    () => items.filter((item) => item.category === selectedCategory),
    [selectedCategory, items],
  );

  const cardHover = reduceMotion
    ? undefined
    : {
        y: -4,
        scale: 1.005,
        borderColor: "rgba(147, 197, 253, 0.3)",
        transition: { duration: 0.3, ease: "easeOut" as const },
      };

  return (
    <section className="visual-section">
      <div className="section-header">
        <h2>Program Case Studies</h2>
      </div>

      <div className="project-tab-row" role="tablist" aria-label="Project category filters">
        {projectCategories.map((category) => (
          <motion.button
            key={category}
            type="button"
            className={`project-tab ${selectedCategory === category ? "is-active" : ""}`}
            onClick={() => setActiveCategory(category)}
            role="tab"
            aria-selected={selectedCategory === category}
            whileHover={reduceMotion ? undefined : { scale: 1.04 }}
            whileTap={reduceMotion ? undefined : { scale: 0.97 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {category}
          </motion.button>
        ))}
      </div>

      <motion.div
        key={selectedCategory}
        className="project-grid project-grid-wide"
        variants={staggerContainer}
        initial={reduceMotion ? false : "hidden"}
        animate="visible"
      >
        {filteredProjects.map((project) => (
          <motion.article
            key={project.slug}
            className="panel project-card"
            variants={cardVariant}
            whileHover={cardHover}
          >
            <Link href={`/projects/${project.slug}`} className="project-card-link" prefetch>
              <span className="project-client-row">
                <IconBadge
                  icon={serviceIconMap[project.iconKey]}
                  label={project.context}
                  tone="service"
                  size="sm"
                />
                {project.context}
              </span>
              <h4>{project.title}</h4>
              <p className="project-role">My Role: {project.role}</p>
              <p className="project-scope">{project.scope}</p>
              <div className="project-mini-rows">
                <div className="project-mini-row">
                  <span>Responsibilities</span>
                  <ul>
                    {project.bullets.slice(0, 2).map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
                <div className="project-mini-row">
                  <span>Outcome</span>
                  <p>{project.details.outcomes[0]}</p>
                </div>
              </div>
              <div className="chip-list">
                {project.tools.map((tool) => (
                  <ToolBadge key={tool.label} toolKey={tool.key} label={tool.label} size="sm" />
                ))}
              </div>
              <span className="project-hover-cta">View case study</span>
            </Link>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
