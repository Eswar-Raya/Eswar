"use client";

import { useMemo, useState } from "react";
import type { AgentModule } from "@/content/siteData";

type AgentModulesProps = {
  modules: AgentModule[];
  learningNote: string;
  labels: {
    modeStable: string;
    modeExplore: string;
    inputLabel: string;
    outputLabel: string;
    humanBoundaryLabel: string;
  };
};

type Mode = "stable" | "explore";

export default function AgentModules({
  modules,
  learningNote,
  labels,
}: AgentModulesProps) {
  const [mode, setMode] = useState<Mode>("stable");

  const orderedModules = useMemo(() => {
    if (mode === "stable") return modules;
    if (modules.length <= 1) return modules;
    return [...modules.slice(1), modules[0]];
  }, [mode, modules]);

  return (
    <div className="agent-grid">
      <div className="agent-panel">
        <div className="agent-toggle" role="group" aria-label="Mode">
          <button
            type="button"
            className={mode === "stable" ? "active" : undefined}
            onClick={() => setMode("stable")}
            onMouseEnter={() => setMode("stable")}
            aria-pressed={mode === "stable"}
          >
            {labels.modeStable}
          </button>
          <button
            type="button"
            className={mode === "explore" ? "active" : undefined}
            onClick={() => setMode("explore")}
            onMouseEnter={() => setMode("explore")}
            aria-pressed={mode === "explore"}
          >
            {labels.modeExplore}
          </button>
        </div>
        <div className="agent-note">{learningNote}</div>
      </div>

      <div className="agent-list">
        {orderedModules.map((module, index) => (
          <div key={module.id} className="agent-module">
            <div className="agent-index">{String(index + 1).padStart(2, "0")}</div>
            <div className="agent-body">
              <div className="agent-head">
                <h3>{module.title}</h3>
                <div className="agent-subtitle">{module.subtitle}</div>
              </div>
              <div className="agent-columns">
                <div>
                  <div className="agent-label">{labels.inputLabel}</div>
                  <ul>
                    {module.input.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="agent-label">{labels.outputLabel}</div>
                  <ul>
                    {module.output.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="agent-label">{labels.humanBoundaryLabel}</div>
                  <ul>
                    {module.humanBoundary.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              {module.notes ? (
                <div className="agent-notes">
                  <ul>
                    {module.notes.map((note) => (
                      <li key={note}>{note}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
