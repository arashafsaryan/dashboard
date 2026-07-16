import { MoreHorizontal, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import styles from "./TaskCard.module.css";

export default function TaskCard({ task = {} }) {
  const {
    title = "Untitled Task",
    category = "General",
    priority = "low",
    progress = 0,
    dueDate = "No date",
    assignee = null,
    tags = [],
  } = task;

  const getPriorityStyle = (level) => {
    switch (level) {
      case "high":
        return styles.priorityHigh;
      case "medium":
        return styles.priorityMedium;
      case "low":
        return styles.priorityLow;
      default:
        return styles.priorityLow;
    }
  };

  return (
    <motion.article
      className={styles.card}
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      {/* هدر کارت: تگ‌ها و دکمه آپشن */}
      <div className={styles.header}>
        <div className={styles.badges}>
          {/* بج اول: میزان اهمیت (Priority) */}
          <span className={`${styles.badge} ${getPriorityStyle(priority)}`}>
            {priority.charAt(0).toUpperCase() + priority.slice(1)}
          </span>

          {/* بج دوم: دسته‌بندی اصلی (Category) */}
          <span className={`${styles.badge} ${styles.categoryBadge}`}>
            {category}
          </span>

          {/* مپ زدن ایمن روی تگ‌های فرعی با استفاده از Optional Chaining */}
          {tags?.map((tag, index) => (
            <span key={index} className={`${styles.badge} ${styles.tagBadge}`}>
              {tag}
            </span>
          ))}
        </div>

        <button className={styles.moreBtn} aria-label="More options">
          <MoreHorizontal size={18} />
        </button>
      </div>

      {/* بدنه اصلی کارت: عنوان تسک */}
      <div className={styles.body}>
        <h4 className={styles.title}>{title}</h4>
      </div>

      {/* فوتر کارت: تاریخ، شخص انجام‌دهنده و نوار پیشرفت درخشان */}
      <div className={styles.footer}>
        <div className={styles.metaData}>
          {assignee ? (
            <div className={styles.assignee}>
              <img
                src={assignee.avatar}
                alt={assignee.name}
                className={styles.avatar}
              />
              <span className={styles.assigneeName}>{assignee.name}</span>
            </div>
          ) : (
            <div className={styles.unassigned}>Unassigned</div>
          )}

          <div className={styles.date}>
            <Calendar size={14} />
            <span>{dueDate}</span>
          </div>
        </div>

        {/* نوار پیشرفت با افکت Glow (ترند ۲۰۲۶) */}
        <div className={styles.progressContainer}>
          <div className={styles.progressHeader}>
            <span className={styles.progressLabel}>Progress</span>
            <span className={styles.progressValue}>{progress}%</span>
          </div>
          <div className={styles.progressBar}>
            <motion.div
              className={styles.progressFill}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              style={{
                // اگر تسک ۱۰۰٪ بود رنگش سبز میشه، در غیر اینصورت بنفش
                background:
                  progress === 100 ? "var(--success)" : "var(--primary)",
                boxShadow:
                  progress === 100
                    ? "0 0 10px var(--success)"
                    : "0 0 10px color-mix(in srgb, var(--primary) 60%, transparent)",
              }}
            />
          </div>
        </div>
      </div>
    </motion.article>
  );
}
