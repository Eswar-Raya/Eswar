"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import IconBadge from "@/components/IconBadge";
import { projectCategories, type ProjectCategory, type ProjectItem } from "@/data/projects";
import { serviceIconMap, toolIconMap } from "@/lib/iconMap";

type ProjectBoardsProps = {
  items: ProjectItem[];
};

function getCategoryFromQuery(value: string | null): ProjectCategory | null {
  if (!value) {
    return null;
  }
  const normalized = value.toLowerCase().trim();
  if (normalized.includes("cloud")) {
    return "Cloud & Infrastructure Strategy";
  }
  if (normalized.includes("service")) {
    return "Service/Product Innovation";
  }
  if (normalized.includes("ai")) {
    return "AI Strategy & Governance";
  }
  if (normalized.includes("process") || normalized.includes("bpr")) {
    return "Process Innovation (BPR)";
  }
  return null;
}

export default function ProjectBoards({ items }: ProjectBoardsProps) {
  const searchParams = useSearchParams();
  const reduceMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | null>(null);
  const categoryFromQuery = getCategoryFromQuery(searchParams.get("category"));
  const selectedCategory =
    activeCategory ?? categoryFromQuery ?? "Cloud & Infrastructure Strategy";

  const filteredProjects = useMemo(
    () => items.filter((item) => item.category === selectedCategory),
    [selectedCategory, items],
  );

  return (
    <section className="visual-section">
      <div className="section-header">
        <h2>Stevens Projects Portfolio</h2>
      </div>

      <div className="project-tab-row" role="tablist" aria-label="Project category filters">
        {projectCategories.map((category) => (
          <button
            key={category}
            type="button"
            className={`project-tab ${selectedCategory === category ? "is-active" : ""}`}
            onClick={() => setActiveCategory(category)}
            role="tab"
            aria-selected={selectedCategory === category}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="project-grid project-grid-wide">
        {filteredProjects.map((project) => (
          <motion.article
            key={project.slug}
            className="panel project-card"
            whileHover={reduceMotion ? undefined : { y: -2 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
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
              <ul>
                {project.bullets.slice(0, 3).map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <div className="chip-list">
                {project.tools.map((tool) => (
                  <span key={tool.label} className="chip with-icon" title={tool.label}>
                    <IconBadge icon={toolIconMap[tool.key]} label={tool.label} tone="tool" size="sm" />
                    {tool.label}
                  </span>
                ))}
              </div>
              <span className="project-hover-cta">View case study</span>
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
