import Card from "../../../../components/ui/Card/Card";
import Skeleton from "../../../../components/ui/Skeleton/Skeleton";
import styles from "./AnalyticsSection.module.css";

export default function AnalyticsSkeleton() {
  return (
    <Card className={styles.analytics}>
      {" "}
      <div className={styles.skeletonHeader}>
        {" "}
        <div>
          {" "}
          <Skeleton width="180px" height="22px" />
          <div style={{ height: "8px" }} />{" "}
          <Skeleton width="220px" height="14px" />{" "}
        </div>
        <div className={styles.skeletonActions}>
          <Skeleton width="40px" height="32px" />
          <Skeleton width="40px" height="32px" />
          <Skeleton width="40px" height="32px" />
          <Skeleton width="40px" height="32px" />
        </div>
      </div>
      <div style={{ height: "20px" }} />
      <Skeleton height="320px" />
    </Card>
  );
}
