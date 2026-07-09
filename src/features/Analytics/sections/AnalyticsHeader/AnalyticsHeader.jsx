import Button from "../../../../components/ui/Button/Button";
import styles from "./AnalyticsHeader.module.css";

export default function AnalyticsHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.dot}></span>
          Live Analytics
        </div>
        <h1>Analytics</h1>
        <p>
          Track revenue, customer behaviour and business performance in
          real-time.
        </p>
      </div>
      <div className={styles.actions}>
        <Button variant="secondary">Last 30 Days</Button>
        <Button variant="secondary">Compare</Button>
        <Button>Export</Button>
      </div>
    </header>
  );
}
