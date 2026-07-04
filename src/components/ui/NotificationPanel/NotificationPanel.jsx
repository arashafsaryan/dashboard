import styles from "./NotificationPanel.module.css";

import {
  FiBell,
  FiUserPlus,
  FiCreditCard,
  FiFolderPlus,
  FiServer,
  FiCheck,
} from "react-icons/fi";

const notifications = [
  {
    id: 1,
    title: "New user registered",
    description: "Emma joined your workspace.",
    time: "2 min ago",
    unread: true,
    icon: FiUserPlus,
  },
  {
    id: 2,
    title: "Payment received",
    description: "$420 payment has been confirmed.",
    time: "10 min ago",
    unread: true,
    icon: FiCreditCard,
  },
  {
    id: 3,
    title: "Project created",
    description: "Marketing Dashboard was created.",
    time: "1 hour ago",
    unread: false,
    icon: FiFolderPlus,
  },
  {
    id: 4,
    title: "Server updated",
    description: "Infrastructure deployment finished.",
    time: "3 hours ago",
    unread: false,
    icon: FiServer,
  },
];

export default function NotificationPanel() {
  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        <div>
          <h4>Notifications</h4>
          <span>4 unread notifications</span>
        </div>
        <button className={styles.readAll}>
          <FiCheck />
          Mark all
        </button>
      </div>
      <div className={styles.list}>
        {notifications.map((item) => {
          const Icon = item.icon;
          return (
            <button key={item.id} className={styles.item}>
              <div className={styles.icon}>
                <Icon />
              </div>
              <div className={styles.content}>
                <div className={styles.top}>
                  <h5>{item.title}</h5>
                  {item.unread && <span className={styles.unread}></span>}
                </div>
                <p>{item.description}</p>
                <span className={styles.time}>
                  <FiBell />
                  {item.time}
                </span>
              </div>
            </button>
          );
        })}
      </div>
      <div className={styles.footer}>
        <button>View all notifications →</button>
      </div>
    </div>
  );
}
