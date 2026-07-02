import KPICard from "../KPICard/KPICard";
import styles from "./KPISection.module.css";
import { useDashboardStats } from "../../../../hooks/useDashboardStats";
import KPICardsSkeleton from "./KPICardsSkeleton";

export default function KPISection() {
  const {
    data: stats = [],
    isLoading,
    // error,
  } = useDashboardStats();

  if (isLoading) {
    return <KPICardsSkeleton />;
  }

  return (
    <div className={styles.grid}>
      {stats.map((item) => (
        <KPICard key={item.title} {...item} />
      ))}
    </div>
  );
}
