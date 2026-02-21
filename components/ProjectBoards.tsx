"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import IconGlyph from "@/components/IconGlyph";
import EntityLogo from "@/components/EntityLogo";
import { projectCategories, type ProjectCategory, type ProjectItem } from "@/data/projects";

type ProjectBoardsProps = {
  items: ProjectItem[];
};

function getCategoryFromQuery(value: string | null): ProjectCategory | null {
  if (!value) {
    return null;
  }
  const normalized = value.toLowerCase().trim();
  if (normalized.includes("enterprise")) {
    return "Enterprise Migration";
  }
  if (normalized.includes("linux")) {
    return "Linux Modernization";
  }
  if (normalized.includes("ai")) {
    return "AI/Automation";
  }
  return null;
}

export default function ProjectBoards({ items }: ProjectBoardsProps) {
  const searchParams = useSearchParams();
  const reduceMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("Enterprise Migration");

  useEffect(() => {
    const fromQuery = getCategoryFromQuery(searchParams.get("category"));
    if (fromQuery) {
      setActiveCategory(fromQuery);
    }
  }, [searchParams]);

  const filteredProjects = useMemo(
    () => items.filter((item) => item.category === activeCategory),
    [activeCategory, items],
  );

  return (
    <section className="visual-section">
      <div className="section-header">
        <h2>Programs / Client Work / Initiatives</h2>
      </div>

      <div className="project-tab-row" role="tablist" aria-label="Project category filters">
        {projectCategories.map((category) => (
          <button
            key={category}
            type="button"
            className={`project-tab ${activeCategory === category ? "is-active" : ""}`}
            onClick={() => setActiveCategory(category)}
            role="tab"
            aria-selected={activeCategory === category}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="project-grid project-grid-wide">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.slug}
            className="panel project-card"
            whileHover={reduceMotion ? undefined : { y: -2 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
          >
            <Link href={`/projects/${project.slug}`} className="project-card-link" prefetch>
              <span className="project-client-row">
                <EntityLogo logoKey={project.logoKey} className="company-icon" />
                {project.clientProgram}
              </span>
              <h4>{project.title}</h4>
              <p className="project-role">My Role: {project.role}</p>
              <ul>
                {project.bullets.slice(0, 3).map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <div className="chip-list">
                {project.toolIcons.map((tool) => (
                  <span key={tool} className="chip with-icon" title={tool}>
                    <IconGlyph name={tool} className="chip-icon" />
                    {tool}
                  </span>
                ))}
              </div>
              <span className="project-hover-cta">View case study</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
