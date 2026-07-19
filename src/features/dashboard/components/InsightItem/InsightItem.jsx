import { FiTrendingUp, FiDollarSign, FiAlertTriangle } from "react-icons/fi";
import { BsStars } from "react-icons/bs";
import { motion } from "framer-motion";
import styles from "./InsightItem.module.css";

const icons = {
  revenue: <FiDollarSign />,
  growth: <FiTrendingUp />,
  warning: <FiAlertTriangle />,
  ai: <BsStars />,
};

const badgeLabels = {
  revenue: "Finance",
  growth: "Growth",
  warning: "Alert",
  ai: "AI",
};

export default function InsightItem({ title, description, type = "ai" }) {
  const themeClass = styles[type] || styles.ai;

  return (
    <motion.div
      className={`${styles.item} ${themeClass}`}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover="hover"
    >
      <div className={styles.glowEdge}></div>

      <div className={styles.content}>
        <div className={styles.header}>
          <motion.div
            className={styles.iconBox}
            variants={{ hover: { scale: 1.05, rotate: -3 } }}
          >
            {icons[type]}
          </motion.div>

          <div className={styles.titleBox}>
            <h4>{title}</h4>
            <span className={styles.badge}>{badgeLabels[type]}</span>
          </div>
        </div>

        <p>{description}</p>
      </div>
    </motion.div>
  );
}
