import { useEffect, useState } from "react";
import Card from "../../../../components/ui/Card/Card";
import SectionHeader from "../../../../components/ui/SectionHeader/SectionHeader";
import RevenueChart from "../RevenueChart/RevenueChart";
import styles from "./AnalyticsSection.module.css";
import { useRevenue } from "../../../../hooks/useRevenue";
import { revenueData } from "../../data/revenueData";
import AnalyticsSkeleton from "./AnalyticsSkeleton";
import RevenueFilter from "../../../../components/ui/Motion/RevenueFilter";

export default function AnalyticsSection() {
  const [range, setRange] = useState(() => {
    return localStorage.getItem("revenue-range") || "6M";
  });
  useEffect(() => {
    localStorage.setItem("revenue-range", range);
  }, [range]);
  const {
    data = revenueData,
    isPending,
    // error,
  } = useRevenue();
  const chartData = data?.[range] ?? [];

  if (isPending) {
    return <AnalyticsSkeleton />;
  }
  return (
    <Card className={styles.analytics}>
      <SectionHeader
        title="Revenue Analytics"
        subtitle="Revenue overview for the last 1 year"
        action={<RevenueFilter active={range} onChange={setRange} />}
      />
      <RevenueChart data={chartData} />
    </Card>
  );
}
