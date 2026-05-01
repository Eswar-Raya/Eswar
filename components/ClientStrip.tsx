"use client";

import { Fragment } from "react";
import { motion, useReducedMotion } from "framer-motion";

type ClientStripProps = {
  items: string[];
  title?: string;
};

const stripContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const stripItem = {
  hidden: { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function ClientStrip({
  items,
  title = "Top Clients",
}: ClientStripProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="client-strip-section" aria-label={title}>
      <span className="client-strip-title">{title}</span>
      <motion.div
        className="client-strip"
        variants={stripContainer}
        initial={reduceMotion ? false : "hidden"}
        whileInView={reduceMotion ? undefined : "visible"}
        viewport={{ once: true, amount: 0.2 }}
      >
        {items.map((item, i) => (
          <Fragment key={item}>
            <motion.span
              className="client-strip-name"
              variants={stripItem}
              whileHover={
                reduceMotion ? undefined : { color: "rgba(232, 237, 248, 0.85)" }
              }
            >
              {item}
            </motion.span>
            {i < items.length - 1 ? (
              <span className="client-strip-divider" aria-hidden="true" />
            ) : null}
          </Fragment>
        ))}
      </motion.div>
    </section>
  );
}
