"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { navItems } from "@/data/site";
import { staggerContainer } from "@/lib/motion";

const linkVariant = {
  hidden: { opacity: 0, y: -8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export default function VisualNav() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  const isActive = (href: string) =>
    pathname === href || (href !== "/home" && pathname.startsWith(`${href}/`));

  return (
    <header className="top-nav" role="banner">
      <div className="top-nav-inner">
        <motion.div
          className="brand-wrap"
          whileHover={reduceMotion ? undefined : { scale: 1.04 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <Link href="/home" className="brand-mark" aria-label="Home">
            ER
          </Link>
          <div className="brand-copy">
            <span className="brand-title">Eswar Rayavarapu</span>
            <span className="brand-subtitle">
              Infrastructure & Cloud Transformation TPM
            </span>
          </div>
        </motion.div>

        <motion.nav
          aria-label="Primary"
          variants={staggerContainer}
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
        >
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <motion.span
                key={item.href}
                variants={linkVariant}
                className="top-nav-link-wrap"
              >
                <Link
                  href={item.href}
                  className={active ? "is-active" : undefined}
                >
                  {item.label}
                </Link>
              </motion.span>
            );
          })}
        </motion.nav>
      </div>
    </header>
  );
}
