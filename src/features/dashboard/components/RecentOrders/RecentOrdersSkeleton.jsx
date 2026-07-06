import Card from "../../../../components/ui/Card/Card";
import SectionHeader from "../../../../components/ui/SectionHeader/SectionHeader";
import Skeleton from "../../../../components/ui/Skeleton/Skeleton";
import styles from "./RecentOrders.module.css";

export default function RecentOrdersSkeleton() {
  return (
    <Card>
      <SectionHeader title="Recent Orders" subtitle="Loading orders..." />

      <div className={styles.skeletonTable}>
        {/* هدرهای اسکلت */}
        <div className={styles.skeletonHeader}>
          {[...Array(6)].map((_, i) => <Skeleton key={i} height="15px" />)}
        </div>

        {/* ردیف‌های اسکلت */}
        {[...Array(5)].map((_, index) => (
          <div key={index} className={styles.skeletonRow}>
            <Skeleton height="20px" width="80%" /> {/* ID */}
            <Skeleton height="32px" width="100%" /> {/* Customer */}
            <Skeleton height="24px" width="60%" />  {/* Status */}
            <Skeleton height="20px" width="50%" />  {/* Amount */}
            <Skeleton height="20px" width="70%" />  {/* Date */}
            <Skeleton height="20px" width="20px" /> {/* Actions */}
          </div>
        ))}
      </div>
    </Card>
  );
}