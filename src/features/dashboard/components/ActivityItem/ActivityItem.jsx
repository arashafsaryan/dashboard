import { FiFolder, FiCheckCircle, FiUserPlus } from "react-icons/fi";

import { BsStars } from "react-icons/bs";

import styles from "./ActivityItem.module.css";

const icons = {
  project: <FiFolder />,
  task: <FiCheckCircle />,
  ai: <BsStars />,
  member: <FiUserPlus />,
};

export default function ActivityItem({ title, time, type }) {
  return (
    <div className={styles.item}>
      <div className={`${styles.icon} ${styles[type]}`}>{icons[type]}</div>{" "}
      <div>
        <p className={styles.title}>{title}</p>
        <span className={styles.time}>•{time}</span>
      </div>
    </div>
  );
}
