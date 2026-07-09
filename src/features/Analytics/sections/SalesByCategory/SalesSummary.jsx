import { Trophy, DollarSign, Boxes } from "lucide-react";

import styles from "./SalesSummary.module.css";

export default function SalesSummary({
  topCategory,
  topValue,
  growth,
  totalSales,
  categories,
}) {
  return (
    <aside className={styles.summary}>
      <div className={styles.item}>
        <div className={styles.icon}>
          <Trophy size={18} />
        </div>

        <div>
          <span className={styles.label}>Top Category</span>

          <h4>{topCategory}</h4>

          <small>
            {topValue} · {growth}
          </small>
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.icon}>
          <DollarSign size={18} />
        </div>

        <div>
          <span className={styles.label}>Total Sales</span>

          <h4>{totalSales}</h4>
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.icon}>
          <Boxes size={18} />
        </div>

        <div>
          <span className={styles.label}>Categories</span>

          <h4>{categories}</h4>
        </div>
      </div>
    </aside>
  );
}
