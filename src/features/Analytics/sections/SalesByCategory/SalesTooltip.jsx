import styles from "./SalesTooltip.module.css";

export default function SalesTooltip({ active, payload }) {
  if (!active || !payload?.length) return null;

  const item = payload[0].payload;

  return (
    <div className={styles.tooltip}>
      <span className={styles.label}>{item.category}</span>

      <h4>${item.sales.toLocaleString()}</h4>

      <small>Highest selling category</small>
    </div>
  );
}
