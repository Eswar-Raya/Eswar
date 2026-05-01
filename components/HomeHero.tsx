"use client";

import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BriefcaseBusiness, FileDown, Mail, Network } from "lucide-react";
import CloudLifecycleDiagram from "@/components/CloudLifecycleDiagram";
import { staggerContainer, fadeUp, slideInRight } from "@/lib/motion";

type HomeHeroProps = {
  headline: string;
  resumeUrl: string;
};

const heroSummary =
  "10+ years across telecom and enterprise environments leading infrastructure transformation programs \u2014 dependency discovery, migration wave planning, rollback strategy, and production cutover execution across AWS, Azure, and Linux estates. Delivered multi-wave migrations covering 1000+ servers with 40+ engineer cross-functional coordination and 15\u201320% cost optimization outcomes.";

export default function HomeHero({
  headline,
  resumeUrl,
}: HomeHeroProps) {
  const reduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement | null>(null);

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 300], [0, -40]);

  const headlinePrefix = headline.replace(/\s*Technical Project Manager$/i, "").trim();

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
      ref={heroRef}
      className="home-hero panel"
      style={reduceMotion ? undefined : { y: heroY }}
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
          Available for new programs
        </motion.span>

        <motion.h1
          className="home-hero-title"
          variants={fadeUp}
        >
          <span>{headlinePrefix || headline}</span>
          <span>Technical Project Manager</span>
        </motion.h1>

        <motion.p className="home-hero-summary" variants={fadeUp}>
          {heroSummary}
        </motion.p>

        <motion.div className="hero-cta-row" variants={fadeUp}>
          <motion.div whileHover={ctaHover} whileTap={ctaTap}>
            <Link href="/experience" className="btn btn-primary hero-cta-btn">
              <BriefcaseBusiness className="hero-cta-icon" aria-hidden="true" />
              View Experience
            </Link>
          </motion.div>
          <motion.div whileHover={ctaHover} whileTap={ctaTap}>
            <Link href="/projects" className="btn btn-primary hero-cta-btn">
              <Network className="hero-cta-icon" aria-hidden="true" />
              View Transformation Programs
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
          <motion.div whileHover={ctaHover} whileTap={ctaTap}>
            <Link href="/contact" className="btn btn-secondary hero-cta-btn">
              <Mail className="hero-cta-icon" aria-hidden="true" />
              Contact
            </Link>
          </motion.div>
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
