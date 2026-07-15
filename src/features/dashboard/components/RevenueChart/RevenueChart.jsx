import { memo, useMemo } from "react";
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

const cursor = {
  stroke: "#6366f1",
  strokeWidth: 1.5,
  strokeDasharray: "4 4",
};

// Locale-safe formatters, built once — never allocate inside render.
const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const compactFormatter = new Intl.NumberFormat("en-US", {
  notation: "compact",
  maximumFractionDigits: 1,
});

const CustomTooltip = memo(function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;

  return (
    <div className={styles.tooltip}>
      <p className={styles.tooltipLabel}>{label}</p>
      <strong className={styles.tooltipValue}>
        {currencyFormatter.format(payload[0].value)}
      </strong>
    </div>
  );
});

function RevenueChart({ data }) {
  const lastIndex = data.length - 1;

  const renderLiveDot = useMemo(() => {
    function LiveDot(props) {
      const { cx, cy, index } = props;
      if (index !== lastIndex || cx == null || cy == null) return null;
      return (
        <g>
          <circle cx={cx} cy={cy} r={4} className={styles.liveDotCore} />
          <circle cx={cx} cy={cy} r={4} className={styles.liveDotPulse} />
        </g>
      );
    }
    return LiveDot;
  }, [lastIndex]);

  const summaryLabel = useMemo(() => {
    if (!data.length) return "No revenue data available for this period.";
    const values = data.map((point) => point.revenue);
    const min = Math.min(...values);
    const max = Math.max(...values);
    return `Revenue trend from ${data[0].month} to ${data[lastIndex].month}, ranging from ${currencyFormatter.format(min)} to ${currencyFormatter.format(max)}.`;
  }, [data, lastIndex]);

  if (!data.length) {
    return (
      <div className={styles.empty} role="status">
        No revenue recorded for this period yet.
      </div>
    );
  }

  return (
    <div
      className={styles.chartWrapper}
      role="img"
      aria-label={summaryLabel}
      dir="ltr"
    >
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 12, right: 8, left: 0, bottom: 0 }}
        >
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
            tick={{ fill: "var(--muted)", fontSize: 12 }}
          />

          <YAxis
            width={48}
            axisLine={false}
            tickLine={false}
            tick={{ className: styles.axisTick }}
            tickFormatter={(v) => `$${compactFormatter.format(v)}`}
          />

          <Tooltip content={<CustomTooltip />} cursor={cursor} />

          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#6366f1"
            strokeWidth={3}
            fill="url(#revenueGradient)"
            dot={renderLiveDot}
            activeDot={{ r: 7, className: styles.activeDot }}
            animationDuration={600}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default memo(RevenueChart);
