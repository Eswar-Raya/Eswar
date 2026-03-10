"use client";

import { motion, useReducedMotion } from "framer-motion";

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
        show: { transition: { staggerChildren: 0.15 } },
      }}
    >
      {items.map((item) => (
        <motion.li
          key={item}
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {item}
        </motion.li>
      ))}
    </motion.ul>
  );
}
