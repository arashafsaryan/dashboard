import styles from "./Analytics.module.css";

import AnalyticsHeader from "./sections/AnalyticsHeader/AnalyticsHeader";
import SalesByCategory from "./sections/SalesByCategory/SalesByCategory";

export default function Analytics() {
  return (
    <div className={styles.page}>
      <AnalyticsHeader />

      <SalesByCategory />
    </div>
  );
}
