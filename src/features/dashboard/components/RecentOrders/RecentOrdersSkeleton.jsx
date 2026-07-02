// میباشد  RecentOrders  این کامپوننت یک اسکلت لودینگ برای کامپوننت

import Card from "../../../../components/ui/Card/Card";
import SectionHeader from "../../../../components/ui/SectionHeader/SectionHeader";
import Skeleton from "../../../../components/ui/Skeleton/Skeleton";

import styles from "./RecentOrders.module.css";

export default function RecentOrdersSkeleton() {
  return (
    <Card>
      <SectionHeader title="Recent Orders" subtitle="Loading orders..." />

      <div className={styles.skeletonTable}>
        {[...Array(6)].map((_, index) => (
          <div key={index} className={styles.skeletonRow}>
            <Skeleton height="20px" />
          </div>
        ))}
      </div>
    </Card>
  );
}
