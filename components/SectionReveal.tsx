"use client";

import { type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, slideInLeft, slideInRight } from "@/lib/motion";

type SectionRevealProps = {
  id?: string;
  className?: string;
  direction?: "up" | "left" | "right";
  delay?: number;
  amount?: number;
  once?: boolean;
  children: ReactNode;
};

export default function SectionReveal({
  id,
  className,
  direction = "up",
  delay = 0,
  amount = 0.2,
  once = true,
  children,
}: SectionRevealProps) {
  const reduceMotion = useReducedMotion();

  const variants =
    direction === "left" ? slideInLeft : direction === "right" ? slideInRight : fadeUp;

  return (
    <motion.div
      id={id}
      className={["section-reveal", className].filter(Boolean).join(" ")}
      variants={variants}
      initial="hidden"
      animate={reduceMotion ? "visible" : undefined}
      whileInView="visible"
      viewport={{ once, amount }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
