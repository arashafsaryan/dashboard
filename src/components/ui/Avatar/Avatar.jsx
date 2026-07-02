import styles from "./Avatar.module.css";

export default function Avatar({ name, size = "sm", progress }) {
  const initials = name
    ?.split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  const colorClass =
    progress >= 90
      ? styles.excellent
      : progress >= 75
        ? styles.good
        : progress >= 60
          ? styles.average
          : styles.low;

  return (
    <div
      className={`
        ${styles.avatar}
        ${styles[size]}
        ${colorClass}
      `}
    >
      <span>{initials}</span>

      <span className={styles.status}></span>
    </div>
  );
}
