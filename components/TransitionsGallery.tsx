"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, useReducedMotion } from "framer-motion";
import type { Transition } from "@/content/siteData";
import TransitionsMasterList from "@/components/TransitionsMasterList";
import TransitionPreview from "@/components/TransitionPreview";

type TransitionsGalleryProps = {
  transitions: Transition[];
  labels: {
    openLabel: string;
    closeLabel: string;
    briefLabel: string;
    constraintsLabel: string;
    contextLabel: string;
    decisionLabel: string;
    executionLabel: string;
    outcomeLabel: string;
    modeStoryLabel: string;
    modeInspectLabel: string;
    toolsLabel: string;
    signalsLabel: string;
  };
};

type Mode = "story" | "inspect";

export default function TransitionsGallery({
  transitions,
  labels,
}: TransitionsGalleryProps) {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const [selectedId, setSelectedId] = useState(transitions[0]?.id ?? "");
  const [mode, setMode] = useState<Mode>("story");

  const selectedIndex = useMemo(
    () => transitions.findIndex((transition) => transition.id === selectedId),
    [selectedId, transitions],
  );

  const selectedTransition =
    transitions[selectedIndex] ?? transitions[0] ?? null;

  if (!selectedTransition) return null;

  return (
    <div className="transitions-gallery">
      <TransitionsMasterList
        transitions={transitions}
        selectedId={selectedTransition.id}
        onSelect={setSelectedId}
      />

      <AnimatePresence mode="wait">
        <TransitionPreview
          key={selectedTransition.id}
          transition={selectedTransition}
          index={Math.max(selectedIndex, 0)}
          total={transitions.length}
          mode={mode}
          onModeChange={setMode}
          labels={labels}
          reduceMotion={shouldReduceMotion}
        />
      </AnimatePresence>
    </div>
  );
}
