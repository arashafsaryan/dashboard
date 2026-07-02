import styles from "./TeamMember.module.css";
import Avatar from "../../../../components/ui/Avatar/Avatar";
import AnimatedProgress from "../../../../components/ui/AnimatedProgress";
import AnimatedCounter from "../../../../components/ui/AnimatedCounter";

export default function TeamMember({ name, role, progress }) {
  let gradient;
  if (progress >= 90) {
    gradient = "linear-gradient(90deg,#22c55e,#16a34a)";
  } else if (progress >= 75) {
    gradient = "linear-gradient(90deg,#3b82f6,#2563eb)";
  } else if (progress >= 60) {
    gradient = "linear-gradient(90deg,#f59e0b,#d97706)";
  } else {
    gradient = "linear-gradient(90deg,#ef4444,#dc2626)";
  }
  return (
    <div className={styles.member}>
      <div className={styles.top}>
        <div className={styles.info}>
          <Avatar name={name} size="sm" progress={progress} />

          <div>
            <h4>{name}</h4>
            <span>{role}</span>
          </div>
        </div>
        <strong className={styles.score}>
          <AnimatedCounter value={`${progress}%`} />
        </strong>{" "}
      </div>

      <AnimatedProgress value={progress} delay={0.08} color={gradient} />
    </div>
  );
}
