"use client";

import { useMemo } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { GrowthChartPoint } from "@/data/experience";

type CareerGrowthChartProps = {
  points: GrowthChartPoint[];
};

type TooltipPayload = {
  payload?: GrowthChartPoint;
};

function GrowthTooltip({ active, payload }: { active?: boolean; payload?: TooltipPayload[] }) {
  if (!active || !payload?.length || !payload[0]?.payload) {
    return null;
  }

  const point = payload[0].payload;

  return (
    <div className="chart-tooltip">
      <strong>{point.stageLabel}</strong>
      <span>{point.roleOrPhase}</span>
      <span>{point.periodLabel}</span>
      <span>{point.growthHighlight}</span>
      <span>Scope Score: {point.growthScore.toFixed(1)} / 8</span>
    </div>
  );
}

export default function CareerGrowthChart({ points }: CareerGrowthChartProps) {
  const orderedPoints = useMemo(
    () => [...points].sort((a, b) => a.chartOrder - b.chartOrder),
    [points],
  );

  return (
    <article className="panel graph-card">
      <div className="card-head">
        <h2>Career Growth</h2>
        <p>Stage Sequence vs Responsibility/Scope</p>
      </div>
      <div className="chart-shell">
        <ResponsiveContainer width="100%" height={290}>
          <LineChart data={orderedPoints} margin={{ top: 12, right: 24, left: 8, bottom: 12 }}>
            <CartesianGrid stroke="rgba(173, 190, 218, 0.18)" strokeDasharray="4 4" />
            <XAxis
              dataKey="stageLabel"
              tick={{ fill: "#9fb2cf", fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              label={{
                value: "Career Stages (Oldest -> Newest)",
                position: "insideBottom",
                offset: -4,
                fill: "#9fb2cf",
                fontSize: 11,
              }}
            />
            <YAxis
              domain={[1, 8]}
              ticks={[1, 2, 3, 4, 5, 6, 7, 8]}
              tick={{ fill: "#9fb2cf", fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              label={{
                value: "Responsibility / Scope Score",
                angle: -90,
                position: "insideLeft",
                offset: 4,
                fill: "#9fb2cf",
                fontSize: 11,
              }}
            />
            <Tooltip content={<GrowthTooltip />} />
            <Line
              type="monotone"
              dataKey="growthScore"
              stroke="#b8ceee"
              strokeWidth={2.8}
              dot={{ r: 4.2, stroke: "#4f76a6", strokeWidth: 1.2, fill: "#d9e8ff" }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </article>
  );
}
