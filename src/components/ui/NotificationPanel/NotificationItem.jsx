import * as Icons from "react-icons/fi";
import styles from "./NotificationPanel.module.css";

export default function NotificationItem({
  title,
  description,
  time,
  unread,
  icon,
}) {
  const Icon = Icons[icon];

  const itemClass = unread
    ? `${styles.item} ${styles.itemUnread}`
    : styles.item;

  return (
    <button className={itemClass}>
      <div className={styles.iconWrap}>
        <Icon className={styles.icon} />
      </div>

      <div className={styles.content}>
        <div className={styles.row}>
          <h5>{title}</h5>
          {unread && <span className={styles.badge}></span>}
        </div>

        <p>{description}</p>

        <span className={styles.time}>
          <Icons.FiBell />
          {time}
        </span>
      </div>
    </button>
  );
}
