import styles from "./NotificationPanel.module.css";
import {
  FiUserPlus,
  FiCreditCard,
  FiFolderPlus,
  FiServer,
  FiCheck,
} from "react-icons/fi";

// افزودن نوع رنگ (type) به داده‌ها برای جذابیت بصری
const notifications = [
  {
    id: 1,
    title: "New user registered",
    description: "Emma joined your workspace.",
    time: "2 min ago",
    unread: true,
    icon: FiUserPlus,
    type: "success", // رنگ سبز
  },
  {
    id: 2,
    title: "Payment received",
    description: "$420 payment has been confirmed.",
    time: "10 min ago",
    unread: true,
    icon: FiCreditCard,
    type: "info", // رنگ آبی/بنفش
  },
  {
    id: 3,
    title: "Project created",
    description: "Marketing Dashboard was created.",
    time: "1 hour ago",
    unread: false,
    icon: FiFolderPlus,
    type: "warning", // رنگ زرد/نارنجی
  },
  {
    id: 4,
    title: "Server updated",
    description: "Infrastructure deployment finished.",
    time: "3 hours ago",
    unread: false,
    icon: FiServer,
    type: "error", // رنگ قرمز
  },
];

export default function NotificationPanel() {
  return (
    <div className={styles.panel}>
      {/* هدر خلاقانه و تمیز */}
      <div className={styles.header}>
        <div>
          <h4>Notifications</h4>
          <span className={styles.badge}>2 New</span>
        </div>
        <button className={styles.readAll} aria-label="Mark all as read">
          <FiCheck />
          <span>Mark all</span>
        </button>
      </div>

      {/* لیست نوتیفیکیشن‌ها */}
      <div className={styles.list}>
        {notifications.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className={`${styles.item} ${item.unread ? styles.isUnread : ""}`}
            >
              {/* آیکون با استایل داینامیک بر اساس نوع نوتیفیکیشن */}
              <div className={`${styles.iconWrapper} ${styles[item.type]}`}>
                <Icon />
              </div>

              <div className={styles.content}>
                <div className={styles.topRow}>
                  <h5>{item.title}</h5>
                  <span className={styles.time}>{item.time}</span>
                </div>
                <p className={styles.description}>{item.description}</p>
              </div>

              {/* نقطه خوانده‌نشده به عنوان یک المان معلق ظریف */}
              {item.unread && <span className={styles.unreadDot}></span>}
            </div>
          );
        })}
      </div>

      {/* فوتر مینیمال */}
      <div className={styles.footer}>
        <button className={styles.viewAllBtn}>View all notifications</button>
      </div>
    </div>
  );
}
