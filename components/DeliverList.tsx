"use client";

import { motion, useReducedMotion } from "framer-motion";
import { easeSoft } from "@/lib/motion";

type DeliverListProps = {
  items: string[];
};

export default function DeliverList({ items }: DeliverListProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.ul
      className="deliver-list"
      initial={reduceMotion ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.12 } },
      }}
    >
      {items.map((item) => (
        <motion.li
          key={item}
          variants={{
            hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
            show: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: 0.55, ease: easeSoft },
            },
          }}
        >
          {item}
        </motion.li>
      ))}
    </motion.ul>
  );
}
