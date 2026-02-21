import type { Transition } from "@/content/siteData";
import TransitionItem from "@/components/TransitionItem";

type TransitionListProps = {
  transitions: Transition[];
  selectedId: string;
  onSelect: (id: string) => void;
};

export default function TransitionList({
  transitions,
  selectedId,
  onSelect,
}: TransitionListProps) {
  return (
    <div className="transition-list">
      {transitions.map((transition) => (
        <TransitionItem
          key={transition.id}
          transition={transition}
          isSelected={transition.id === selectedId}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}
