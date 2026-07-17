import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, Calendar, Flag, Tag } from "lucide-react";
import { motion } from "framer-motion";
import styles from "./AddTaskModal.module.css";

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
};

export default function AddTaskModal({ onClose, onAdd }) {
  const [mounted, setMounted] = useState(false);
  
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    priority: "low",
    dueDate: "",
  });

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) return;
    
    onAdd({
      title: formData.title,
      category: formData.category || "General",
      priority: formData.priority,
      dueDate: formData.dueDate || "No date",
      status: "todo",
      tags: [],
    });
  };

  if (!mounted) return null;
  const modalContent = (
    <motion.div 
      className={styles.overlay}
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={onClose}
    >
      <div 
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.header}>
          <h3>Create New Task</h3>
          <button className={styles.closeBtn} onClick={onClose} type="button">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
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

          <div className={styles.inputGroup}>
            <label htmlFor="priority">
              <Flag size={14} /> Priority Level
            </label>
            <div className={styles.radioGroup}>
              <label className={`${styles.radioLabel} ${formData.priority === 'low' ? styles.activeLow : ''}`}>
                <input type="radio" name="priority" value="low" checked={formData.priority === 'low'} onChange={handleChange} />
                Low
              </label>
              <label className={`${styles.radioLabel} ${formData.priority === 'medium' ? styles.activeMedium : ''}`}>
                <input type="radio" name="priority" value="medium" checked={formData.priority === 'medium'} onChange={handleChange} />
                Medium
              </label>
              <label className={`${styles.radioLabel} ${formData.priority === 'high' ? styles.activeHigh : ''}`}>
                <input type="radio" name="priority" value="high" checked={formData.priority === 'high'} onChange={handleChange} />
                High
              </label>
            </div>
          </div>

          <div className={styles.footer}>
            <button type="button" className={styles.cancelBtn} onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className={styles.submitBtn}>
              Create Task
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );

  return createPortal(modalContent, document.body);
}