import styles from "./Progress.module.css";

export default function Progress({
  value = 0,
  max = 100,
  color = "var(--primary)",
}) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div className={styles.track}>
      <div
        className={styles.fill}
        style={{
          width: `${percentage}%`,
          background: color,
        }}
      />
    </div>
  );
}
