"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness, FileDown } from "lucide-react";
import CloudLifecycleDiagram from "@/components/CloudLifecycleDiagram";
import { staggerContainer, fadeUp, slideInRight } from "@/lib/motion";

type HomeHeroProps = {
  headline: string;
  roleLine: string;
  summary: string;
  resumeUrl: string;
  currentRole: { label: string; title: string; periodLabel: string; slug: string };
};

export default function HomeHero({
  headline,
  roleLine,
  summary,
  resumeUrl,
  currentRole,
}: HomeHeroProps) {
  const reduceMotion = useReducedMotion();

  const ctaHover = reduceMotion
    ? undefined
    : {
        y: -3,
        boxShadow: "0 22px 44px rgba(26, 108, 246, 0.35)",
        transition: { duration: 0.3, ease: "easeOut" as const },
      };
  const ctaTap = reduceMotion ? undefined : { scale: 0.97 };

  return (
    <motion.section
      className="home-hero panel"
    >
      <motion.div
        className="home-hero-copy"
        variants={staggerContainer}
        initial={reduceMotion ? false : "hidden"}
        animate="visible"
      >
        <motion.span
          className="home-hero-badge"
          variants={fadeUp}
        >
          <span className="pulse-dot" aria-hidden="true" />
          Cloud · Infrastructure · Delivery
        </motion.span>

        <motion.h1
          className="home-hero-title"
          variants={fadeUp}
        >
          {headline}
        </motion.h1>

        <motion.p className="home-hero-subline" variants={fadeUp}>
          {roleLine}
        </motion.p>

        <motion.p className="home-hero-summary" variants={fadeUp}>
          {summary}
        </motion.p>

        <motion.div className="hero-cta-row" variants={fadeUp}>
          <motion.div whileHover={ctaHover} whileTap={ctaTap}>
            <Link href="/experience" className="btn btn-primary hero-cta-btn">
              <BriefcaseBusiness className="hero-cta-icon" aria-hidden="true" />
              View Experience
            </Link>
          </motion.div>
          <motion.div whileHover={ctaHover} whileTap={ctaTap}>
            <a
              href={resumeUrl}
              className="btn btn-secondary hero-cta-btn"
              target="_blank"
              rel="noreferrer"
              download
            >
              <FileDown className="hero-cta-icon" aria-hidden="true" />
              Download Resume
            </a>
          </motion.div>
        </motion.div>
        <motion.div variants={fadeUp}>
          <Link href={`/experience/${currentRole.slug}`} className="hero-current-role">
            <span className="hero-current-label"><span className="pulse-dot" aria-hidden="true" /> Current role</span>
            <strong>{currentRole.label}</strong>
            <span>{currentRole.title} · {currentRole.periodLabel}</span>
            <ArrowUpRight size={20} aria-hidden="true" />
          </Link>
        </motion.div>
        <motion.div variants={fadeUp}>
          <Link href="/projects" className="section-link">Explore transformation programs <ArrowUpRight size={16} aria-hidden="true" /></Link>
        </motion.div>
      </motion.div>

      <motion.aside
        className="home-hero-aside"
        variants={slideInRight}
        initial={reduceMotion ? false : "hidden"}
        animate="visible"
      >
        <CloudLifecycleDiagram />
        <div className="hero-support-note">
          <p>
            Lifecycle orchestration from dependency discovery to production cutover and stabilization
            across enterprise environments.
          </p>
        </div>
      </motion.aside>
    </motion.section>
  );
}
