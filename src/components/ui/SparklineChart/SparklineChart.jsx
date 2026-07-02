import {
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

export default function SparklineChart({
  data,
}) {
  return (
    <ResponsiveContainer
      width="100%"
      height={60}
    >
      <AreaChart data={data}>
        <Area
          type="monotone"
          dataKey="value"
          stroke="#7c5cff"
          fill="#7c5cff22"
          strokeWidth={2}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}