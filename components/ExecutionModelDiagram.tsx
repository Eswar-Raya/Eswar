"use client";

import { useMemo, useState } from "react";
import type { ExecutionModelNode } from "@/content/siteData";

type ExecutionModelDiagramProps = {
  nodes: ExecutionModelNode[];
  labels: {
    inputsLabel: string;
    toolsLabel: string;
    failureLabel: string;
  };
};

export default function ExecutionModelDiagram({
  nodes,
  labels,
}: ExecutionModelDiagramProps) {
  const [activeId, setActiveId] = useState(nodes[0]?.id ?? "");

  const ordered = useMemo(
    () => nodes.slice(0, 6), // safety cap
    [nodes],
  );

  const activeNode =
    ordered.find((node) => node.id === activeId) ?? ordered[0] ?? null;

  if (!activeNode) return null;

  return (
    <div className="exec-wrap">
      <div className="exec-steps" role="tablist" aria-label="Execution model">
        {ordered.map((node, index) => {
          const isActive = node.id === activeId;
          return (
            <button
              key={node.id}
              type="button"
              className={`exec-step ${isActive ? "active" : ""}`}
              onClick={() => setActiveId(node.id)}
              onMouseEnter={() => setActiveId(node.id)}
              role="tab"
              aria-selected={isActive}
            >
              <span className="exec-step-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="exec-step-title">{node.title}</span>
            </button>
          );
        })}
      </div>

      <div className="exec-panel" role="tabpanel">
        <div className="exec-columns">
          <div className="exec-col">
            <div className="exec-label">{labels.inputsLabel}</div>
            <ul>
              {activeNode.inputs.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="exec-col">
            <div className="exec-label">{labels.toolsLabel}</div>
            <ul>
              {activeNode.tools.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="exec-col">
            <div className="exec-label">{labels.failureLabel}</div>
            <ul>
              {activeNode.failureModes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
