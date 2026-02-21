"use client";

import { motion } from "framer-motion";
import type { Transition } from "@/content/siteData";

type TransitionPreviewProps = {
  transition: Transition;
  index: number;
  total: number;
  mode: "story" | "inspect";
  onModeChange: (mode: "story" | "inspect") => void;
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
  reduceMotion: boolean;
};

export default function TransitionPreview({
  transition,
  index,
  total,
  mode,
  onModeChange,
  labels,
  reduceMotion,
}: TransitionPreviewProps) {
  const meta = [
    transition.meta.org,
    transition.meta.roleType,
    transition.meta.period,
    transition.meta.domain,
  ]
    .filter(Boolean)
    .join(" | ");

  const motionProps = reduceMotion
    ? { initial: false, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -8 },
        transition: { duration: 0.3, ease: "easeOut" },
      };

  return (
    <motion.article
      className="transition-preview"
      aria-live="polite"
      {...motionProps}
    >
      <div className="preview-header">
        <div className="preview-index">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </div>
        <div className="preview-toggle" role="group" aria-label="Mode">
          <button
            type="button"
            className={mode === "story" ? "active" : undefined}
            onClick={() => onModeChange("story")}
            aria-pressed={mode === "story"}
          >
            {labels.modeStoryLabel}
          </button>
          <button
            type="button"
            className={mode === "inspect" ? "active" : undefined}
            onClick={() => onModeChange("inspect")}
            aria-pressed={mode === "inspect"}
          >
            {labels.modeInspectLabel}
          </button>
        </div>
      </div>

      <h3 className="preview-title">{transition.label}</h3>
      <div className="preview-meta">{meta}</div>

      {mode === "story" ? (
        <>
          <div className="preview-block">
            <div className="preview-label">{labels.contextLabel}</div>
            <div className="preview-text">{transition.brief.context}</div>
          </div>

          <div className="preview-block">
            <div className="preview-label">{labels.decisionLabel}</div>
            <div className="preview-decision">{transition.brief.decision}</div>
          </div>

          <div className="preview-block">
            <div className="preview-label">{labels.outcomeLabel}</div>
            <ul>
              {transition.brief.outcome.map((result) => (
                <li key={result}>{result}</li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <>
          <div className="preview-tools">
            <span className="preview-label">{labels.toolsLabel}</span>
            <div className="preview-tool-list">
              {transition.meta.tools.map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>
          </div>

          <div className="preview-block preview-inspect">
            <div className="preview-label">{labels.constraintsLabel}</div>
            <ul>
              {transition.brief.constraints.map((constraint) => (
                <li key={constraint}>{constraint}</li>
              ))}
            </ul>
            {transition.brief.signals?.length ? (
              <div className="preview-signals">
                <div className="preview-label">{labels.signalsLabel}</div>
                <div className="preview-text">
                  {transition.brief.signals.join(" | ")}
                </div>
              </div>
            ) : null}
          </div>

          <div className="preview-block">
            <div className="preview-label">{labels.executionLabel}</div>
            <ul>
              {transition.brief.execution.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </div>
        </>
      )}
    </motion.article>
  );
}
