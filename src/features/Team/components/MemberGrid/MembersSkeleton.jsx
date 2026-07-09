import Skeleton from "../../../../components/ui/Skeleton/Skeleton";

import styles from "./MembersSkeleton.module.css";

export default function MembersSkeleton() {
  return (
    <div className={styles.grid}>
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className={styles.card}>
          <Skeleton width={72} height={72} radius="50%" />

          <Skeleton width="60%" height={18} />

          <Skeleton width="75%" height={14} />

          <div className={styles.bottom}>
            <Skeleton width={70} height={28} radius={999} />

            <Skeleton width={60} height={16} />
          </div>
        </div>
      ))}
    </div>
  );
}
