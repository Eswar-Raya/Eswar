"use client";

import { type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { pillVariant } from "@/lib/motion";

type TechPillProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  active?: boolean;
};

export default function TechPill({
  children,
  className,
  delay = 0,
  active = false,
}: TechPillProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.span
      className={`tech-pill ${active ? "is-active" : ""} ${className ?? ""}`.trim()}
      variants={pillVariant}
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ delay }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              scale: 1.08,
              backgroundColor: "rgba(147, 197, 253, 0.12)",
              borderColor: "rgba(147, 197, 253, 0.38)",
              color: "#93c5fd",
              transition: { duration: 0.25, ease: "easeOut" },
            }
      }
    >
      {children}
    </motion.span>
  );
}
