"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
type SectionNavProps = {
  items: Array<{ id: string; label: string }>;
};

export default function SectionNav({ items }: SectionNavProps) {
  const shouldReduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const reveal = () => {
      setVisible(true);
      if (timeoutId) clearTimeout(timeoutId);
    };

    timeoutId = setTimeout(reveal, 1500);

    const onScroll = () => {
      if (window.scrollY > 24) {
        reveal();
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (!items.length) return;

    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0.1 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [items]);

  if (!visible) return null;

  return (
    <motion.nav
      className="section-nav"
      aria-label="Section navigation"
      initial={shouldReduceMotion ? false : { opacity: 0, y: -8 }}
      animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {items.map((item, index) => {
        const isActive = activeId === item.id;
        const isLast = index === items.length - 1;
        const className = [
          "nav-item",
          isActive ? "active" : "",
          isLast ? "nav-cta" : "",
        ]
          .filter(Boolean)
          .join(" ");

        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={className}
            aria-current={isActive ? "page" : undefined}
          >
            {item.label}
          </a>
        );
      })}
    </motion.nav>
  );
}
