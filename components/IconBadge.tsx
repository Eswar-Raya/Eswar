import type { LucideIcon } from "lucide-react";

type IconBadgeProps = {
  icon: LucideIcon;
  label?: string;
  tone?: "company" | "education" | "service" | "tool";
  size?: "sm" | "md";
  className?: string;
};

export default function IconBadge({
  icon: Icon,
  label,
  tone = "tool",
  size = "sm",
  className,
}: IconBadgeProps) {
  return (
    <span
      className={["icon-badge", `icon-badge-${tone}`, `icon-badge-${size}`, className]
        .filter(Boolean)
        .join(" ")}
      aria-label={label}
      title={label}
    >
      <Icon aria-hidden="true" />
    </span>
  );
}
