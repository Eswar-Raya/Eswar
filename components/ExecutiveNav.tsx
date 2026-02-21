"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/programs", label: "Programs" },
  { href: "/ai", label: "AI" },
  { href: "/leadership", label: "Leadership" },
];

export default function ExecutiveNav() {
  const pathname = usePathname();

  return (
    <header className="top-nav panel">
      <Link href="/about" className="brand-mark">
        ER
      </Link>
      <nav aria-label="Primary">
        {links.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={isActive ? "is-active" : undefined}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
