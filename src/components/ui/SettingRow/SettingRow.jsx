import styles from "./SettingRow.module.css";

export default function SettingRow({
  title,
  description,
  children,
}) {
  return (
    <div className={styles.row}>
      <div className={styles.content}>
        <h4>{title}</h4>

        {description && (
          <p>{description}</p>
        )}
      </div>

      <div className={styles.action}>
        {children}
      </div>
    </div>
  );
}