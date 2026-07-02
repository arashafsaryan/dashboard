import Card from "../../../../components/ui/Card/Card";
import SectionHeader from "../../../../components/ui/SectionHeader/SectionHeader";
import Skeleton from "../../../../components/ui/Skeleton/Skeleton";

import styles from "./AIInsightsSection.module.css";

export default function AIInsightsSkeleton() {
  return (
    <Card>
      {" "}
      <SectionHeader
        title="AI Insights"
        subtitle="Loading AI recommendations..."
      />
      <div className={styles.list}>
        {[...Array(3)].map((_, index) => (
          <div key={index} className={styles.item}>
            <Skeleton width="120px" height="14px" />
            <div style={{ height: "4px" }} />
            <Skeleton width="100%" height="12px" />
            <Skeleton width="90%" height="12px" />
          </div>
        ))}
      </div>
    </Card>
  );
}
