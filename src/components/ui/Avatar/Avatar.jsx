import styles from "./Avatar.module.css";

export default function Avatar({
  name,
  image,
  size = "sm",
  progress,
}) {
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
      {image ? (
        <img
          src={image}
          alt={name}
          className={styles.image}
          onError={(e) => {
            e.currentTarget.style.display = "none";
            e.currentTarget.nextSibling.style.display = "flex";
          }}
        />
      ) : null}

      <span
        className={styles.initials}
        style={{
          display: image ? "none" : "flex",
        }}
      >
        {initials}
      </span>

      <span className={styles.status}></span>
    </div>
  );
}