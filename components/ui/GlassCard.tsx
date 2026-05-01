"use client";

import { type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cardVariant } from "@/lib/motion";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "article" | "section";
  hover?: boolean;
};

export default function GlassCard({
  children,
  className,
  delay = 0,
  as = "article",
  hover = true,
}: GlassCardProps) {
  const reduceMotion = useReducedMotion();

  const Tag = motion[as] as typeof motion.div;

  return (
    <Tag
      className={`glass-card ${className ?? ""}`.trim()}
      variants={cardVariant}
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={{ once: true, margin: "-60px 0px" }}
      transition={{ delay }}
      whileHover={
        reduceMotion || !hover
          ? undefined
          : {
              y: -6,
              scale: 1.015,
              borderColor: "rgba(147, 197, 253, 0.3)",
              boxShadow:
                "0 24px 64px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.1)",
              transition: { duration: 0.3, ease: "easeOut" },
            }
      }
    >
      {children}
    </Tag>
  );
}
