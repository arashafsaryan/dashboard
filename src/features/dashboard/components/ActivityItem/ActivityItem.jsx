import { Folder, CheckCircle2, Sparkles, UserPlus } from "lucide-react";
import { motion } from "framer-motion";
import styles from "./ActivityItem.module.css";

const activityConfig = {
  project: { icon: <Folder size={18} />, theme: "orange" },
  task: { icon: <CheckCircle2 size={18} />, theme: "green" },
  ai: { icon: <Sparkles size={18} />, theme: "purple" },
  invite: { icon: <UserPlus size={18} />, theme: "brown" },
};

export default function ActivityItem({ title, time, type = "task" }) {
  const { icon, theme } = activityConfig[type] || activityConfig.task;
  const themeClass = styles[theme];

  return (
    <motion.div
      className={`${styles.item} ${themeClass}`}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-10px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover="hover"
    >
      <motion.div
        className={styles.iconBox}
        variants={{ hover: { scale: 1.1, rotate: type === "ai" ? 15 : 0 } }}
      >
        {icon}
      </motion.div>

      <div className={styles.content}>
        <h4>{title}</h4>
        <span>• {time}</span>
      </div>
    </motion.div>
  );
}
