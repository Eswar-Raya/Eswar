import type { GrowthPoint } from "@/data/profile";

type CareerGrowthChartProps = {
  points: GrowthPoint[];
};

export default function CareerGrowthChart({ points }: CareerGrowthChartProps) {
  const width = 760;
  const height = 280;
  const padX = 56;
  const padY = 34;
  const maxLevel = 10;

  const mapped = points.map((point, index) => {
    const x =
      padX + (index * (width - padX * 2)) / Math.max(points.length - 1, 1);
    const y =
      height - padY - (point.level / maxLevel) * (height - padY * 2);
    return { ...point, x, y };
  });

  const path = mapped
    .map((point, index) =>
      `${index === 0 ? "M" : "L"}${point.x.toFixed(1)},${point.y.toFixed(1)}`,
    )
    .join(" ");

  return (
    <article className="panel graph-card">
      <div className="card-head">
        <h2>Career Growth</h2>
        <p>Years vs Responsibility</p>
      </div>
      <svg viewBox={`0 0 ${width} ${height}`} className="growth-chart" role="img" aria-label="Career growth chart">
        <line x1={padX} y1={height - padY} x2={width - padX} y2={height - padY} className="axis-line" />
        <line x1={padX} y1={padY} x2={padX} y2={height - padY} className="axis-line" />
        <path d={path} className="chart-line" />
        {mapped.map((point) => (
          <g key={`${point.year}-${point.label}`}>
            <circle cx={point.x} cy={point.y} r="5" className="chart-point" />
            <text x={point.x} y={height - 10} textAnchor="middle" className="chart-year">
              {point.year}
            </text>
            <text x={point.x} y={point.y - 12} textAnchor="middle" className="chart-label">
              {point.label}
            </text>
          </g>
        ))}
      </svg>
    </article>
  );
}
