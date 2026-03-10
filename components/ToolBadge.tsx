"use client";

import type { IconType } from "react-icons";
import { TbBrandAzure } from "react-icons/tb";
import type { SimpleIcon } from "simple-icons";
import {
  siAmazonwebservices,
  siConfluence,
  siDocker,
  siGit,
  siJira,
  siLangchain,
  siLinux,
  siOllama,
  siPostgresql,
  siPython,
  siVmware,
} from "simple-icons";
import type { ToolIconKey } from "@/lib/iconMap";
import { toolIconMap } from "@/lib/iconMap";

type ToolBadgeProps = {
  toolKey: ToolIconKey;
  label: string;
  tone?: "light" | "dark";
  size?: "sm" | "md";
  showLabel?: boolean;
  className?: string;
};

type ToolLogoConfig = {
  simpleIcon?: SimpleIcon;
  reactIcon?: IconType;
  customGlyph?: "powerbi" | "chroma";
  color?: string;
  alias?: string;
};

const toolLogoMap: Partial<Record<ToolIconKey, ToolLogoConfig>> = {
  aws: { simpleIcon: siAmazonwebservices },
  azure: { reactIcon: TbBrandAzure, color: "#008AD7" },
  linux: { simpleIcon: siLinux },
  vmware: { simpleIcon: siVmware },
  cloudendure: { simpleIcon: siAmazonwebservices, alias: "CE" },
  powerbi: { customGlyph: "powerbi", color: "#F2C811" },
  jira: { simpleIcon: siJira },
  python: { simpleIcon: siPython },
  langchain: { simpleIcon: siLangchain },
  chroma: { customGlyph: "chroma", color: "#6E56CF" },
  ollama: { simpleIcon: siOllama },
  sql: { simpleIcon: siPostgresql },
  confluence: { simpleIcon: siConfluence },
  git: { simpleIcon: siGit },
  docker: { simpleIcon: siDocker },
};

function getIconColor(config: ToolLogoConfig | undefined, tone: "light" | "dark") {
  if (config?.customGlyph === "powerbi") {
    return config.color ?? "#F2C811";
  }

  if (config?.customGlyph === "chroma") {
    return tone === "dark" ? "#D7E1F4" : config.color ?? "#6E56CF";
  }

  if (tone === "dark") {
    return "#D7E1F4";
  }

  if (config?.simpleIcon) {
    return `#${config.simpleIcon.hex}`;
  }

  return config?.color ?? "#2F55D4";
}

function PowerBiGlyph({ color }: { color: string }) {
  return (
    <svg className="tool-badge-svg" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="9.5" width="3.1" height="9.5" rx="1" fill={color} />
      <rect x="7.8" y="6.7" width="3.1" height="12.3" rx="1" fill={color} opacity={0.92} />
      <rect x="12.6" y="4.3" width="3.1" height="14.7" rx="1" fill={color} opacity={0.84} />
      <rect x="17.4" y="8.1" width="3.1" height="10.9" rx="1" fill={color} opacity={0.76} />
      <circle cx="18.9" cy="7.2" r="1.5" fill={color} />
    </svg>
  );
}

function ChromaGlyph({ color }: { color: string }) {
  return (
    <svg className="tool-badge-svg" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="7" cy="7" r="2.2" fill={color} />
      <circle cx="17" cy="7" r="2.2" fill={color} opacity={0.82} />
      <circle cx="12" cy="12" r="2.2" fill={color} opacity={0.94} />
      <circle cx="7" cy="17" r="2.2" fill={color} opacity={0.74} />
      <circle cx="17" cy="17" r="2.2" fill={color} opacity={0.74} />
      <path d="M9 8.9L11 11M13 11L15 8.9M9 15.1L11 13M13 13L15 15.1" stroke={color} strokeWidth="1.2" fill="none" />
    </svg>
  );
}

export default function ToolBadge({
  toolKey,
  label,
  tone = "light",
  size = "sm",
  showLabel = true,
  className,
}: ToolBadgeProps) {
  const config = toolLogoMap[toolKey];
  const FallbackIcon = toolIconMap[toolKey];
  const BrandIcon = config?.reactIcon;
  const iconColor = getIconColor(config, tone);
  const classes = ["tool-badge", `is-${tone}`, `is-${size}`, className].filter(Boolean).join(" ");

  return (
    <span className={classes} title={label} aria-label={label}>
      <span className="tool-badge-icon" aria-hidden="true">
        {config?.customGlyph === "powerbi" ? (
          <PowerBiGlyph color={iconColor} />
        ) : config?.customGlyph === "chroma" ? (
          <ChromaGlyph color={iconColor} />
        ) : config?.simpleIcon ? (
          <svg className="tool-badge-svg" viewBox="0 0 24 24" aria-hidden="true">
            <path d={config.simpleIcon.path} fill={iconColor} />
          </svg>
        ) : BrandIcon ? (
          <BrandIcon className="tool-badge-svg" color={iconColor} />
        ) : (
          <FallbackIcon className="tool-badge-fallback" />
        )}
        {config?.alias ? <span className="tool-badge-alias">{config.alias}</span> : null}
      </span>
      {showLabel ? <span className="tool-badge-label">{label}</span> : null}
    </span>
  );
}
