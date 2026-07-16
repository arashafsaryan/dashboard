import { motion } from "framer-motion";
import { SearchX } from "lucide-react";
import TaskCard from "../TaskCard/TaskCard";
import styles from "./TaskList.module.css";

// ==========================================
// تنظیمات انیمیشن‌های لیست
// ==========================================
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // لود شدن کارت‌ها با 100 میلی‌ثانیه تاخیر از یکدیگر
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

export default function TaskList({ tasks = [] }) {
  // هندل کردن زمانی که هیچ تسکی وجود ندارد (مثلا هنگام فیلتر/سرچ)
  if (!tasks || tasks.length === 0) {
    return (
      <motion.div
        className={styles.emptyState}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className={styles.emptyIconBox}>
          <SearchX size={32} strokeWidth={1.5} />
        </div>
        <h4>No tasks found</h4>
        <p>
          Try adjusting your search or filters to find what you're looking for.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      className={styles.gridContainer}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {tasks.map((task) => (
        // motion.div به عنوان یک Wrapper دور هر کارت قرار می‌گیرد تا انیمیشن را اعمال کند
        <motion.div key={task.id} variants={itemVariants} layout>
          <TaskCard task={task} />
        </motion.div>
      ))}
    </motion.div>
  );
}
