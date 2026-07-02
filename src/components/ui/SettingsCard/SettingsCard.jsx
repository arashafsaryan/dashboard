import Card from "../Card/Card";
import styles from "./SettingsCard.module.css";

export default function SettingsCard({
  title,
  description,
  children,
  className = "",
}) {
  return (
    <Card className={`${styles.card} ${className}`}>
      <div className={styles.header}>
        <div>
          <h3>{title}</h3>
          {description && <p>{description}</p>}
        </div>
      </div>

      <div className={styles.body}>{children}</div>
    </Card>
  );
}