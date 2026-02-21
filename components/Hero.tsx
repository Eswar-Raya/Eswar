"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type HeroProps = {
  name: string;
  headline: string;
  subline: string;
};

export default function Hero({ name, headline, subline }: HeroProps) {
  return (
    <section className="hero-v2" id="top">
      <motion.div
        className="hero-copy"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <p className="eyebrow">Enterprise Technology Portfolio</p>
        <h1>{headline}</h1>
        <p className="hero-subline">{subline}</p>
        <div className="hero-meta">
          <span>{name}</span>
          <span>New Jersey, US</span>
        </div>
      </motion.div>

      <motion.div
        className="hero-visual panel"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.32, ease: "easeOut" }}
      >
        <div className="hero-photo">
          <Image
            src="/Eswar.png"
            alt={`${name} portrait`}
            fill
            priority
            sizes="(max-width: 900px) 90vw, 420px"
          />
        </div>
      </motion.div>
    </section>
  );
}
