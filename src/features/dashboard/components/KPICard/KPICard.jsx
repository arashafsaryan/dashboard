import { memo } from "react";
import styles from "./KPICard.module.css";
import Card from "../../../../components/ui/Card/Card";
import SparklineChart from "../../../../components/ui/SparklineChart/SparklineChart";
import AnimatedCounter from "../../../../components/ui/AnimatedCounter";
import { TrendingUp, TrendingDown } from "lucide-react";

function KPICard({ title, value, change, Icon, trend }) {
  const colorMap = {
    revenue: "revenue",
    users: "users",
    projects: "projects",
    growth: "growth",
  };

  const variant = colorMap[title.toLowerCase()] || "projects";

  const isNegative = change.toString().startsWith("-");
  const trendClass = isNegative ? styles.down : styles.up;
  const TrendIcon = isNegative ? TrendingDown : TrendingUp;
  const formattedChange = isNegative ? change.replace("-", "") : change;

  return (
    <Card className={styles.card}>
      <div className={`${styles.cardGlow} ${styles[variant + "Glow"]}`}></div>
      <div className={styles.top}>
        <span className={styles.title}>{title}</span>
        <div className={`${styles.iconWrapper} ${styles[variant]}`}>
          <Icon className={styles.iconSvg} />
        </div>
      </div>
      <div className={styles.middle}>
        <h2 className={styles.value}>
          <AnimatedCounter value={value} />
        </h2>
      </div>
      <div className={styles.chartWrapper}>
        <SparklineChart data={trend} />
      </div>
      <div className={styles.footer}>
        <div className={`${styles.changeBadge} ${trendClass}`}>
          <div className={`${styles.changeBadge} ${trendClass}`}>
            <span className={styles.trendBadge}>
              <TrendIcon size={14} strokeWidth={2.5} />
            </span>
            <span className={styles.changeValue}>{formattedChange}</span>
          </div>{" "}
        </div>
        <span className={styles.compare}>vs last month</span>
      </div>
    </Card>
  );
}

export default memo(KPICard);
