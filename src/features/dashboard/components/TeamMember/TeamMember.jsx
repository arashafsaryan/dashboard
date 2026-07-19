import { motion } from "framer-motion";
import styles from "./TeamMember.module.css";
import Avatar from "../../../../components/ui/Avatar/Avatar";
import AnimatedProgress from "../../../../components/ui/AnimatedProgress";
import AnimatedCounter from "../../../../components/ui/AnimatedCounter";

export default function TeamMember({ name, role, progress, avatar }) {
  let themeClass;
  let gradient;

  // تنظیم تم و گرادیان بر اساس درصد
  if (progress >= 90) {
    themeClass = styles.green;
    gradient = "linear-gradient(90deg, #10b981, #059669)"; 
  } else if (progress >= 75) {
    themeClass = styles.blue;
    gradient = "linear-gradient(90deg, #3b82f6, #2563eb)";
  } else if (progress >= 60) {
    themeClass = styles.orange;
    gradient = "linear-gradient(90deg, #f59e0b, #d97706)";
  } else {
    themeClass = styles.red;
    gradient = "linear-gradient(90deg, #ef4444, #dc2626)";
  }

  return (
    <motion.div
      className={`${styles.item} ${themeClass}`}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover="hover"
    >
      <div className={styles.header}>
        <div className={styles.infoWrapper}>
          <Avatar name={name} size="sm" progress={progress} image={avatar} />
          <div className={styles.info}>
            <h4>{name}</h4>
            <p>{role}</p>
          </div>
        </div>

        <strong className={styles.scoreBox}>
          <AnimatedCounter value={`${progress}%`} />
        </strong>
      </div>

      <AnimatedProgress value={progress} delay={0.08} color={gradient} />
    </motion.div>
  );
}
