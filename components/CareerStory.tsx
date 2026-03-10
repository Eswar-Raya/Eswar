"use client";

import type { CareerStoryBlock } from "@/data/experience";
import { motion, useReducedMotion } from "framer-motion";

type CareerStoryProps = {
  items: CareerStoryBlock[];
};

export default function CareerStory({ items }: CareerStoryProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="panel experience-story-shell" aria-label="Career story">
      <div className="experience-story-head">
        <h2>Career Story</h2>
        <p>
          Progression from telecom operations to enterprise infrastructure transformation,
          cloud migration leadership, and governance-led delivery at scale.
        </p>
      </div>

      <motion.div
        className="story-grid"
        initial={reduceMotion ? false : "hidden"}
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.06 } },
        }}
      >
        {items.map((item, index) => (
          <motion.article
            key={item.id}
            className={`story-card ${index % 2 ? "is-offset" : ""}`}
            variants={{
              hidden: { opacity: 0, y: 14 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.38, ease: "easeOut" }}
          >
            <span className="story-period">{item.period}</span>
            <h3>{item.phase}</h3>
            <p className="story-headline">{item.headline}</p>
            <p className="story-narrative">{item.narrative}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
