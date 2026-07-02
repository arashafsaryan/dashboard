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

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;

  return (
    <div className={styles.tooltip}>
      <p className={styles.tooltipLabel}>{label}</p>

      <strong className={styles.tooltipValue}>
        ${payload[0].value.toLocaleString()}
      </strong>
    </div>
  );
}

export default function RevenueChart({ data }) {
  return (
    <div className={styles.chartWrapper}>
      <ResponsiveContainer width="100%" height={320}>
        <AreaChart data={data}>
          <defs>
            {" "}
            <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
              {" "}
              <stop offset="0%" stopColor="#6366f1" stopOpacity={0.35} />{" "}
              <stop offset="100%" stopColor="#6366f1" stopOpacity={0} />{" "}
            </linearGradient>{" "}
          </defs>{" "}
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#94a3b8", fontSize: 12 }}
          />
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
          <Tooltip
            content={<CustomTooltip />}
            cursor={{
              stroke: "#6366f1",
              strokeWidth: 1.5,
              strokeDasharray: "4 4",
            }}
          />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#6366f1"
            strokeWidth={3}
            fill="url(#revenueGradient)"
            animationDuration={1200}
            activeDot={{
              r: 7,
              className: styles.activeDot,
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
