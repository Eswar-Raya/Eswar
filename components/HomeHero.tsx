"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { BriefcaseBusiness, Building2, FileDown, Layers3, Mail, Network } from "lucide-react";
import CloudLifecycleDiagram from "@/components/CloudLifecycleDiagram";

type HomeHeroProps = {
  headline: string;
  subheadline: string;
  supportingText: string;
  credibilityItems: string[];
  resumeUrl: string;
};

export default function HomeHero({
  headline,
  subheadline,
  supportingText,
  credibilityItems,
  resumeUrl,
}: HomeHeroProps) {
  const reduceMotion = useReducedMotion();

  const headlinePrefix = headline.replace(/\s*Technical Project Manager$/i, "").trim();

  return (
    <section className="home-hero panel">
      <motion.div
        className="home-hero-copy"
        initial={reduceMotion ? false : "hidden"}
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.14 } },
        }}
      >
        <motion.span
          className="page-eyebrow"
          variants={{
            hidden: { opacity: 0, y: 24 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Infrastructure Leadership Portfolio
        </motion.span>
        <motion.h1
          className="home-hero-title"
          variants={{
            hidden: { opacity: 0, y: 30 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span>{headlinePrefix || headline}</span>
          <span>Technical Project Manager</span>
        </motion.h1>
        <motion.p
          className="home-hero-subline"
          variants={{
            hidden: { opacity: 0, y: 24 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {subheadline}
        </motion.p>
        <motion.p
          className="home-hero-proof"
          variants={{
            hidden: { opacity: 0, y: 22 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {supportingText}
        </motion.p>

        <motion.div
          className="hero-cta-row"
          variants={{
            hidden: { opacity: 0, y: 18 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Link href="/experience" className="btn btn-primary hero-cta-btn">
            <BriefcaseBusiness className="hero-cta-icon" aria-hidden="true" />
            View Experience
          </Link>
          <Link href="/projects" className="btn btn-primary hero-cta-btn">
            <Network className="hero-cta-icon" aria-hidden="true" />
            View Transformation Programs
          </Link>
          <Link
            href={resumeUrl}
            className="btn btn-secondary hero-cta-btn"
            target="_blank"
            rel="noreferrer"
          >
            <FileDown className="hero-cta-icon" aria-hidden="true" />
            Download Resume
          </Link>
          <Link href="/contact" className="btn btn-secondary hero-cta-btn">
            <Mail className="hero-cta-icon" aria-hidden="true" />
            Contact
          </Link>
        </motion.div>

        <motion.div
          className="hero-cred-tile"
          variants={{
            hidden: { opacity: 0, y: 18 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="hero-cred-title">Clients</span>
          <div className="hero-cred-strip">
            {credibilityItems.map((item) => (
              <span key={item} className="hero-cred-chip">
                {item.includes("Programs") ? (
                  <Layers3 className="hero-cred-icon" aria-hidden="true" />
                ) : (
                  <Building2 className="hero-cred-icon" aria-hidden="true" />
                )}
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.aside
        className="home-hero-aside"
        initial={reduceMotion ? false : { opacity: 0, x: 40 }}
        animate={reduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <CloudLifecycleDiagram />
        <div className="hero-support-note">
          <p>
            Lifecycle orchestration from dependency discovery to production cutover and stabilization
            across enterprise environments.
          </p>
        </div>
      </motion.aside>
    </section>
  );
}
