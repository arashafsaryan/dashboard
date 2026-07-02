import styles from "./KPICard.module.css";
import Card from "../../../../components/ui/Card/Card";
import SparklineChart from "../../../../components/ui/SparklineChart/SparklineChart";
import AnimatedCounter from "../../../../components/ui/AnimatedCounter";

export default function KPICard({ title, value, change, Icon, trend }) {
  const colorMap = {
    revenue: "revenue",
    users: "users",
    projects: "projects",
    growth: "growth",
  };
  const variant = colorMap[title.toLowerCase()] || "default";

  return (
    <Card className={styles.card}>
      <div className={styles.top}>
        <span className={styles.title}>{title}</span>
        <div className={`${styles.icon} ${styles[variant]}`}>
          <Icon />
        </div>
      </div>
      <h2 className={styles.value}>
        <AnimatedCounter value={value} />
      </h2>{" "}
      <SparklineChart data={trend} />
      <div className={styles.footer}>
        <span className={styles.change}>
          <span>{change.startsWith("-") ? "↘" : "↗"}</span>
          {change}
        </span>
        <span className={styles.compare}>vs last month</span>
      </div>
    </Card>
  );
}
