import type { CSSProperties } from "react";
import { logoMap, type LogoKey } from "@/data/logos";

type EntityLogoProps = {
  logoKey: LogoKey;
  className?: string;
};

export default function EntityLogo({ logoKey, className }: EntityLogoProps) {
  const logo = logoMap[logoKey];

  const isCollege = logo.kind === "college";
  const isProgram = logo.kind === "program";

  return (
    <span
      className={`entity-logo ${className ?? ""}`.trim()}
      style={
        {
          "--logo-accent": logo.accent,
          "--logo-surface": logo.surface,
        } as CSSProperties
      }
      aria-label={logo.name}
      title={logo.name}
    >
      <svg viewBox="0 0 24 24" className="entity-logo-glyph" aria-hidden="true">
        {isCollege ? (
          <>
            <path d="m3 9 9-5 9 5-9 5-9-5Z" />
            <path d="M7 11v4c0 2 2.2 3 5 3s5-1 5-3v-4" />
          </>
        ) : isProgram ? (
          <>
            <circle cx="12" cy="12" r="8" />
            <path d="m9 12 2 2 4-4" />
          </>
        ) : (
          <>
            <rect x="4" y="8" width="16" height="11" rx="1.6" />
            <path d="M9 8V6a3 3 0 0 1 6 0v2" />
            <path d="M7 13h10" />
          </>
        )}
      </svg>
    </span>
  );
}
