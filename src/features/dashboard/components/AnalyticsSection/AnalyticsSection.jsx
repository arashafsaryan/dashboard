import { useMemo } from "react";
import Card from "../../../../components/ui/Card/Card";
import SectionHeader from "../../../../components/ui/SectionHeader/SectionHeader";
import RevenueChart from "../RevenueChart/RevenueChart";
import styles from "./AnalyticsSection.module.css";
import { useRevenue } from "../../../../hooks/useRevenue";
import { useLocalStorage } from "../../../../hooks/useLocalStorage";
import { revenueData } from "../../data/revenueData";
import AnalyticsSkeleton from "./AnalyticsSkeleton";
import RevenueFilter from "../../../../components/ui/RevenueFilter/RevenueFilter";

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  notation: "compact",
  maximumFractionDigits: 1,
});

export default function AnalyticsSection() {
  const [range, setRange, hydrated] = useLocalStorage("revenue-range", "6M");
  const { data, isPending, isError } = useRevenue();

  const usingFallback = !isPending && (isError || !data);
  const chartData = useMemo(() => {
    const source = data ?? revenueData;
    return source?.[range] ?? [];
  }, [data, range]);

  const summary = useMemo(() => {
    if (!chartData.length) return null;
    const total = chartData.reduce((sum, point) => sum + point.revenue, 0);
    const first = chartData[0].revenue;
    const last = chartData[chartData.length - 1].revenue;
    const change = first === 0 ? 0 : ((last - first) / first) * 100;
    return { total, change };
  }, [chartData]);

  if (isPending || !hydrated) {
    return <AnalyticsSkeleton />;
  }

  return (
    <Card className={styles.analytics}>
      <SectionHeader
        title="Revenue Analytics"
        subtitle="Revenue overview for the last 1 year"
        action={
          <RevenueFilter
            active={range}
            onChange={setRange}
            options={["7D", "30D", "6M", "1Y"]}
          />
        }
      />

      {summary && (
        <div className={styles.summaryRow}>
          <span className={styles.total}>
            {currencyFormatter.format(summary.total)}
          </span>
          <span
            className={`${styles.trend} ${
              summary.change >= 0 ? styles.trendUp : styles.trendDown
            }`}
          >
            {summary.change >= 0 ? "▲" : "▼"}{" "}
            {Math.abs(summary.change).toFixed(1)}%
          </span>
          <span className={styles.trendLabel}>vs. start of period</span>
        </div>
      )}

      {usingFallback && (
        <p className={styles.errorNote} role="status">
          Showing sample data — live revenue feed is unavailable right now.
        </p>
      )}

      <RevenueChart data={chartData} />
    </Card>
  );
}
