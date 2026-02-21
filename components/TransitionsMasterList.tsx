"use client";

import type { Transition } from "@/content/siteData";
import TransitionList from "@/components/TransitionList";

type TransitionsMasterListProps = {
  transitions: Transition[];
  selectedId: string;
  onSelect: (id: string) => void;
};

export default function TransitionsMasterList({
  transitions,
  selectedId,
  onSelect,
}: TransitionsMasterListProps) {
  return (
    <div className="transitions-master">
      <TransitionList
        transitions={transitions}
        selectedId={selectedId}
        onSelect={onSelect}
      />
    </div>
  );
}
