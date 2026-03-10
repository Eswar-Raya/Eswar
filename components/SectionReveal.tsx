"use client";

import { motion, useReducedMotion } from "framer-motion";

type SectionRevealProps = {
  id?: string;
  className?: string;
  direction?: "up" | "left" | "right";
  delay?: number;
  amount?: number;
  once?: boolean;
  children: React.ReactNode;
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

  const initial = (() => {
    if (reduceMotion) return false;
    if (direction === "left") return { opacity: 0, x: -40 };
    if (direction === "right") return { opacity: 0, x: 40 };
    return { opacity: 0, y: 40 };
  })();

  const whileInView = (() => {
    if (reduceMotion) return { opacity: 1 };
    return { opacity: 1, x: 0, y: 0 };
  })();

  return (
    <motion.div
      id={id}
      className={className}
      initial={initial}
      whileInView={whileInView}
      viewport={{ once, amount }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
