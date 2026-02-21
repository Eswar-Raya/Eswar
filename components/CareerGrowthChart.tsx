"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { GrowthPoint } from "@/data/services";

type CareerGrowthChartProps = {
  points: GrowthPoint[];
};

type TooltipPayload = {
  payload?: GrowthPoint;
};

function GrowthTooltip({ active, payload }: { active?: boolean; payload?: TooltipPayload[] }) {
  if (!active || !payload?.length || !payload[0]?.payload) {
    return null;
  }

  const point = payload[0].payload;

  return (
    <div className="chart-tooltip">
      <strong>{point.stage}</strong>
      <span>{point.year}</span>
      <span>{point.company}</span>
      <span>{point.role}</span>
      <span>{point.skillGrowth}</span>
      <span>Scope Score: {point.scopeScore.toFixed(1)} / 6</span>
    </div>
  );
}

export default function CareerGrowthChart({ points }: CareerGrowthChartProps) {
  return (
    <article className="panel graph-card">
      <div className="card-head">
        <h2>Career Growth</h2>
        <p>Year vs Responsibility/Scope</p>
      </div>
      <div className="chart-shell">
        <ResponsiveContainer width="100%" height={290}>
          <LineChart data={points} margin={{ top: 12, right: 24, left: 8, bottom: 12 }}>
            <CartesianGrid stroke="rgba(173, 190, 218, 0.18)" strokeDasharray="4 4" />
            <XAxis dataKey="year" tick={{ fill: "#9fb2cf", fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis
              domain={[1, 6]}
              ticks={[1, 2, 3, 4, 5, 6]}
              tick={{ fill: "#9fb2cf", fontSize: 11 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip content={<GrowthTooltip />} />
            <Line
              type="monotone"
              dataKey="scopeScore"
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
