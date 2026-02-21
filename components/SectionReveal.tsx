"use client";

import { motion, useReducedMotion } from "framer-motion";

type SectionRevealProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

export default function SectionReveal({
  id,
  className,
  children,
}: SectionRevealProps) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.section
      id={id}
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}
