"use client";

import { type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, slideInLeft, slideInRight } from "@/lib/motion";

type RevealSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
  amount?: number;
  id?: string;
};

export default function RevealSection({
  children,
  className,
  delay = 0,
  direction = "up",
  amount = 0.2,
  id,
}: RevealSectionProps) {
  const reduceMotion = useReducedMotion();

  const variants =
    direction === "left" ? slideInLeft : direction === "right" ? slideInRight : fadeUp;

  if (reduceMotion) {
    return (
      <div id={id} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      id={id}
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
