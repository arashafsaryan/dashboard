import { memo } from "react";
import KPICard from "../KPICard/KPICard";
import styles from "./KPISection.module.css";
import { useDashboardStats } from "../../../../hooks/useDashboardStats";
import KPICardsSkeleton from "./KPICardsSkeleton";

function KPISection() {
  const { data: stats = [], isLoading } = useDashboardStats();

  if (isLoading) {
    return <KPICardsSkeleton />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {stats.map((item) => (
          <KPICard key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
}

export default memo(KPISection);
