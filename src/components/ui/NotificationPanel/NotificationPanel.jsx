import styles from "./NotificationPanel.module.css";

const notifications = [
  {
    id: 1,
    title: "New user registered",
    time: "2 min ago",
    icon: "🔥",
  },

  {
    id: 2,
    title: "Payment received",
    time: "10 min ago",
    icon: "💰",
  },

  {
    id: 3,
    title: "New project created",
    time: "1 hour ago",
    icon: "🚀",
  },

  {
    id: 4,
    title: "Server updated",
    time: "3 hours ago",
    icon: "⚡",
  },
];

export default function NotificationPanel() {
  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        Notifications
      </div>

      {notifications.map((item) => (
        <div
          key={item.id}
          className={styles.item}
        >
          <span className={styles.icon}>
            {item.icon}
          </span>

          <div>
            <p>{item.title}</p>

            <span>{item.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
}