"use client";

import Link from "next/link";
import IconBadge from "@/components/IconBadge";
import ToolBadge from "@/components/ToolBadge";
import { serviceIconMap } from "@/lib/iconMap";
import type { ServiceItem } from "@/data/services";
import { motion, useReducedMotion } from "framer-motion";
import { cardVariant, staggerContainer } from "@/lib/motion";

type ServicesGridProps = {
  items: ServiceItem[];
  title?: string;
};

export default function ServicesGrid({
  items,
  title = "Capabilities",
}: ServicesGridProps) {
  const reduceMotion = useReducedMotion();

  const capabilityMeta: Record<string, string[]> = {
    "Infrastructure Transformation": ["Telecom + Enterprise", "Hybrid Environments"],
    "Cloud Migration Programs": ["Data Center to AWS", "Migration Waves"],
    "Linux Platform Modernization": ["RHEL / SLES / CentOS", "Rollback-Ready"],
    "Program Governance & Delivery Leadership": ["RAID Governance", "Executive Reporting"],
  };

  const capabilityTools: Record<
    string,
    { key: "aws" | "azure" | "linux" | "vmware" | "cloudendure" | "jira" | "powerbi"; label: string }[]
  > = {
    "Infrastructure Transformation": [
      { key: "linux", label: "Linux" },
      { key: "vmware", label: "VMware" },
      { key: "jira", label: "Jira" },
    ],
    "Cloud Migration Programs": [
      { key: "aws", label: "AWS" },
      { key: "azure", label: "Azure" },
      { key: "cloudendure", label: "CloudEndure" },
    ],
    "Linux Platform Modernization": [
      { key: "linux", label: "Linux" },
      { key: "vmware", label: "VMware" },
      { key: "jira", label: "Jira" },
    ],
    "Program Governance & Delivery Leadership": [
      { key: "jira", label: "Jira" },
      { key: "powerbi", label: "Power BI" },
      { key: "aws", label: "AWS" },
    ],
  };

  return (
    <section className="visual-section">
      <div className="section-header">
        <h2>{title}</h2>
      </div>
      <motion.div
        className="services-grid capability-grid"
        variants={staggerContainer}
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {items.map((item, index) => (
          <motion.article
            key={item.title}
            className={`panel service-card ${index % 2 ? "is-offset" : ""}`}
            variants={cardVariant}
            whileHover={
              reduceMotion
                ? undefined
                : {
                    y: -5,
                    borderColor: "rgba(147, 197, 253, 0.3)",
                    transition: { duration: 0.3, ease: "easeOut" },
                  }
            }
          >
            <div className="service-card-head">
              <IconBadge
                icon={serviceIconMap[item.iconKey]}
                label={item.title}
                tone="service"
                size="md"
                className="service-icon-badge"
              />
              <h3>{item.title}</h3>
            </div>
            <p>{item.value}</p>
            <div className="service-meta-row">
              {(capabilityMeta[item.title] ?? [item.filterCategory]).map((meta) => (
                <span key={meta}>{meta}</span>
              ))}
            </div>
            <div className="service-tool-row">
              {(capabilityTools[item.title] ?? []).map((tool) => (
                <ToolBadge key={tool.label} toolKey={tool.key} label={tool.label} size="sm" />
              ))}
            </div>
            <div className="service-strip" aria-hidden />
            <Link
              href={`/projects?category=${encodeURIComponent(item.filterCategory)}`}
              className="detail-link"
              prefetch
            >
              View related case studies
            </Link>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
