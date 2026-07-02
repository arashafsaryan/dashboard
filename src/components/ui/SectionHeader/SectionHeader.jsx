import styles from "./SectionHeader.module.css";

export default function SectionHeader({ title, subtitle, action }) {
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <div className={styles.badge}></div>
        <div>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
      </div>
      <div>{action}</div>
    </div>
  );
}
