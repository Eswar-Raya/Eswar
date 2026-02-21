"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/site";

export default function VisualNav() {
  const pathname = usePathname();

  return (
    <header className="top-nav panel">
      <div className="brand-wrap">
        <span className="brand-mark">ER</span>
        <div className="brand-copy">
          <span className="brand-title">Eswar Rayavarapu</span>
          <span className="brand-subtitle">Technical Project Manager</span>
        </div>
      </div>
      <nav aria-label="Primary">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={pathname === item.href ? "is-active" : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
