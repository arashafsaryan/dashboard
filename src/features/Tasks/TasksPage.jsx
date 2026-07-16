import { Plus } from "lucide-react";
import { motion } from "framer-motion";
import FocusCard from "./components/FocusCard/FocusCard";
import styles from "./TasksPage.module.css";

// تنظیمات انیمیشن ارکسترال کل صفحه
const pageVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 25,
      staggerChildren: 0.12, // لود آبشاری سکشن‌های مختلف صفحه
    },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

export default function TasksPage() {
  return (
    <motion.main
      className={styles.page}
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      {/* هدر صفحه به همراه کارت تمرکز */}
      <motion.header className={styles.header} variants={sectionVariants}>
        <FocusCard />
      </motion.header>

      {/* بخش ابزارها، فیلترها و سرچ */}
      <motion.section className={styles.toolbar} variants={sectionVariants}>
        <div className={styles.toolbarPlaceholder}>
          <span className={styles.pulseDot} />
          Search & Filters (Component Slot)
        </div>
      </motion.section>

      {/* لیست کارهای فعال */}
      <motion.section className={styles.content} variants={sectionVariants}>
        <div className={styles.sectionTitle}>
          <h3>Active Tasks</h3>
          <span className={styles.taskCount}>8 Tasks remaining</span>
        </div>
        <div className={styles.placeholderCard}>Task List (Component Slot)</div>
      </motion.section>

      {/* کارهای انجام شده */}
      <motion.section className={styles.completed} variants={sectionVariants}>
        <div className={styles.sectionTitle}>
          <h3>Recently Completed</h3>
        </div>
        <div className={styles.placeholderCardCompleted}>
          Completed (Component Slot)
        </div>
      </motion.section>

      {/* دکمه شناور پریمیوم و انیمیت شده */}
      <motion.button
        className={styles.fab}
        variants={sectionVariants}
        whileHover={{ scale: 1.08, y: -4 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Create new task"
      >
        <Plus size={24} strokeWidth={2.5} />
      </motion.button>
    </motion.main>
  );
}
