import Card from "../../../../components/ui/Card/Card";
import Skeleton from "../../../../components/ui/Skeleton/Skeleton";
import styles from "./KPISection.module.css";

export default function KPICardsSkeleton() {
  return (
    <div className={styles.grid}>
      {[...Array(4)].map((_, index) => (
        <Card key={index} className={styles.card}>
          <div className={styles.mb2}>
            <Skeleton width="90px" height="14px" />
            <Skeleton width="36px" height="36px" borderRadius="10px" />
          </div>
          <div className={styles.mb2}>
            <Skeleton width="120px" height="36px" />
            <Skeleton width="100%" height="48px" borderRadius="8px" />
          </div>
          <div className={styles.footer}>
            <Skeleton width="55px" height="14px" />
            <Skeleton width="90px" height="14px" />
          </div>
        </Card>
      ))}
    </div>
  );
}
