"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import IconGlyph from "@/components/IconGlyph";
import type { CompetencyItem } from "@/data/skills";

type SkillsChartProps = {
  items: CompetencyItem[];
};

type TooltipPayload = {
  payload?: CompetencyItem;
  value?: number;
};

function CompetencyTooltip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: TooltipPayload[];
}) {
  if (!active || !payload?.length || !payload[0]?.payload) {
    return null;
  }

  const row = payload[0].payload;
  const value = payload[0].value ?? row.score;

  return (
    <div className="chart-tooltip">
      <span className="tooltip-title">
        <IconGlyph name={row.icon} className="chip-icon" />
        {row.label}
      </span>
      <span>Capability Score: {Number(value).toFixed(1)} / 6</span>
    </div>
  );
}

export default function SkillsChart({ items }: SkillsChartProps) {
  return (
    <article className="panel graph-card">
      <div className="card-head">
        <h2>Competency Snapshot</h2>
        <p>Current capability profile</p>
      </div>

      <div className="skills-legend">
        {items.map((item) => (
          <span key={item.slug} className="chip with-icon">
            <IconGlyph name={item.icon} className="chip-icon" />
            {item.label}
          </span>
        ))}
      </div>

      <div className="chart-shell">
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={items} layout="vertical" margin={{ top: 8, right: 18, left: 6, bottom: 8 }}>
            <CartesianGrid stroke="rgba(173, 190, 218, 0.18)" strokeDasharray="4 4" />
            <XAxis
              type="number"
              domain={[0, 6]}
              ticks={[1, 2, 3, 4, 5, 6]}
              tick={{ fill: "#9fb2cf", fontSize: 11 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              dataKey="label"
              type="category"
              tick={{ fill: "#d7e1f4", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              width={162}
            />
            <Tooltip content={<CompetencyTooltip />} />
            <Bar dataKey="score" fill="#8fb3e2" radius={[8, 8, 8, 8]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </article>
  );
}
