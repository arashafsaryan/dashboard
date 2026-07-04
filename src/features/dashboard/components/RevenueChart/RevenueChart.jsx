import { memo } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import styles from "./RevenueChart.module.css";

const activeDot = {
  r: 7,
  className: styles.activeDot,
};

const cursor = {
  stroke: "#6366f1",
  strokeWidth: 1.5,
  strokeDasharray: "4 4",
};

const CustomTooltip = memo(function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;

  return (
    <div className={styles.tooltip}>
      <p className={styles.tooltipLabel}>{label}</p>

      <strong className={styles.tooltipValue}>
        ${payload[0].value.toLocaleString()}
      </strong>
    </div>
  );
});

function RevenueChart({ data }) {
  return (
    <div className={styles.chartWrapper}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6366f1" stopOpacity={0.35} />
              <stop offset="100%" stopColor="#6366f1" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid
            vertical={false}
            stroke="rgba(255,255,255,.05)"
            strokeDasharray="3 3"
          />

          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{
              fill: "var(--muted)",
              fontSize: 12,
            }}
          />

          <YAxis
            width={55}
            axisLine={false}
            tickLine={false}
            tick={{
              className: styles.axisTick,
            }}
            tickFormatter={(v) => `$${v / 1000}k`}
          />

          <Tooltip content={<CustomTooltip />} cursor={cursor} />

          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#6366f1"
            strokeWidth={3}
            fill="url(#revenueGradient)"
            activeDot={activeDot}
            animationDuration={600}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default memo(RevenueChart);
