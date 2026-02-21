import type { Transition } from "@/content/siteData";

type TransitionItemProps = {
  transition: Transition;
  isSelected: boolean;
  onSelect: (id: string) => void;
};

export default function TransitionItem({
  transition,
  isSelected,
  onSelect,
}: TransitionItemProps) {
  const meta = [
    transition.meta.org,
    transition.meta.period,
    transition.meta.domain,
  ]
    .filter(Boolean)
    .join(" | ");

  return (
    <button
      type="button"
      className={`transition-row ${isSelected ? "selected" : ""}`}
      onClick={() => onSelect(transition.id)}
      onMouseEnter={() => onSelect(transition.id)}
      aria-pressed={isSelected}
    >
      <div className="transition-row-title">{transition.label}</div>
      <div className="transition-row-meta">{meta}</div>
    </button>
  );
}


