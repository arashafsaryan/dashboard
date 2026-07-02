import { FiTrendingUp, FiDollarSign, FiAlertTriangle } from "react-icons/fi";

import { BsStars } from "react-icons/bs";

import styles from "./InsightItem.module.css";

const icons = {
  revenue: <FiDollarSign />,
  growth: <FiTrendingUp />,
  warning: <FiAlertTriangle />,
  ai: <BsStars />,
};

export default function InsightItem({ title, description, type = "ai" }) {
  return (
    <div className={styles.item}>
      <div className={styles.leftBorder}></div>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.icon}>{icons[type]}</div>
          <div className={styles.titleBox}>
            <h4>{title}</h4>
            <span className={styles.badge}>AI</span>
          </div>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}
