import Card from "../../../../components/ui/Card/Card";
import SectionHeader from "../../../../components/ui/SectionHeader/SectionHeader";
import Skeleton from "../../../../components/ui/Skeleton/Skeleton";

import styles from "./ActivitySection.module.css";

export default function ActivitySkeleton() {
return ( <Card> <SectionHeader
     title="Recent Activity"
     subtitle="Loading activity..."
   />
  <div className={styles.list}>
    {[...Array(5)].map((_, index) => (
      <div key={index} className={styles.item}>
        <Skeleton width="34px" height="34px" />
        <div className={styles.content}>
          <Skeleton width="75%" height="14px" />
          <div style={{ height: "6px" }} />
          <Skeleton width="60px" height="12px" />
        </div>
      </div>
    ))}
  </div>
</Card>
);
}
