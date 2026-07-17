import { useState } from "react";
import { X, Calendar, Flag, Tag } from "lucide-react";
import { motion } from "framer-motion";
import styles from "./AddTaskModal.module.css";

// تنظیمات انیمیشن برای پس‌زمینه تاریک (Backdrop)
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

// تنظیمات انیمیشن برای خود پنجره مودال
const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 25 },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: { duration: 0.2 },
  },
};

export default function AddTaskModal({ onClose, onAdd }) {
  // مدیریت استیت‌های فرم
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    priority: "low",
    dueDate: "",
  });

  // هندل کردن تغییرات اینپوت‌ها
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ارسال فرم
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) return; // جلوگیری از ثبت تسک خالی

    // ارسال دیتا به تابع والد (addTask)
    onAdd({
      title: formData.title,
      category: formData.category || "General",
      priority: formData.priority,
      dueDate: formData.dueDate || "No date",
      status: "todo", // به صورت پیش‌فرض تسک جدید در حالت To Do قرار می‌گیرد
      tags: [], // می‌توانید بعداً قابلیت اضافه کردن تگ را هم به فرم اضافه کنید
    });
  };

  return (
    <motion.div
      className={styles.backdrop}
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={onClose} // کلیک روی فضای خالی مودال را می‌بندد
    >
      <motion.div
        className={styles.modal}
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()} // جلوگیری از بسته شدن هنگام کلیک روی خود مودال
      >
        <div className={styles.header}>
          <h3>Create New Task</h3>
          <button className={styles.closeBtn} onClick={onClose} type="button">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          {/* فیلد عنوان تسک */}
          <div className={styles.inputGroup}>
            <label htmlFor="title">Task Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g., Redesign landing page header"
              className={styles.input}
              required
            />
          </div>

          <div className={styles.row}>
            {/* فیلد دسته‌بندی */}
            <div className={styles.inputGroup}>
              <label htmlFor="category">
                <Tag size={14} /> Category
              </label>
              <input
                type="text"
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                placeholder="e.g., Frontend"
                className={styles.input}
              />
            </div>

            {/* فیلد تاریخ */}
            <div className={styles.inputGroup}>
              <label htmlFor="dueDate">
                <Calendar size={14} /> Due Date
              </label>
              <input
                type="text"
                id="dueDate"
                name="dueDate"
                value={formData.dueDate}
                onChange={handleChange}
                placeholder="e.g., Today, Friday, etc."
                className={styles.input}
              />
            </div>
          </div>

          {/* فیلد انتخاب میزان اهمیت */}
          <div className={styles.inputGroup}>
            <label htmlFor="priority">
              <Flag size={14} /> Priority Level
            </label>
            <div className={styles.radioGroup}>
              <label
                className={`${styles.radioLabel} ${formData.priority === "low" ? styles.activeLow : ""}`}
              >
                <input
                  type="radio"
                  name="priority"
                  value="low"
                  checked={formData.priority === "low"}
                  onChange={handleChange}
                />
                Low
              </label>
              <label
                className={`${styles.radioLabel} ${formData.priority === "medium" ? styles.activeMedium : ""}`}
              >
                <input
                  type="radio"
                  name="priority"
                  value="medium"
                  checked={formData.priority === "medium"}
                  onChange={handleChange}
                />
                Medium
              </label>
              <label
                className={`${styles.radioLabel} ${formData.priority === "high" ? styles.activeHigh : ""}`}
              >
                <input
                  type="radio"
                  name="priority"
                  value="high"
                  checked={formData.priority === "high"}
                  onChange={handleChange}
                />
                High
              </label>
            </div>
          </div>

          {/* دکمه‌های اکشن */}
          <div className={styles.footer}>
            <button
              type="button"
              className={styles.cancelBtn}
              onClick={onClose}
            >
              Cancel
            </button>
            <button type="submit" className={styles.submitBtn}>
              Create Task
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}
