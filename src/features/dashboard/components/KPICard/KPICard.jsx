import { memo } from "react";
import styles from "./KPICard.module.css";
import Card from "../../../../components/ui/Card/Card";
import SparklineChart from "../../../../components/ui/SparklineChart/SparklineChart";
import AnimatedCounter from "../../../../components/ui/AnimatedCounter";

function KPICard({ title, value, change, Icon, trend }) {
  // مپ کردن نام‌ها به کلیدهای استایل
  const colorMap = {
    revenue: "revenue",
    users: "users",
    projects: "projects",
    growth: "growth",
  };

  const variant = colorMap[title.toLowerCase()] || "projects"; // پیش‌فرض روی تم اصلی

  // تشخیص خودکار مثبت یا منفی بودن برای تغییر رنگ و آیکون
  const isNegative = change.toString().startsWith("-");
  const trendClass = isNegative ? styles.down : styles.up;
  const trendIcon = isNegative ? "↘" : "↗";
  const formattedChange = isNegative ? change.replace("-", "") : change;

  return (
    <Card className={styles.card}>
      {/* هاله نورانی پس‌زمینه کارت */}
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
          <span className={styles.trendIcon}>{trendIcon}</span>
          <span className={styles.changeValue}>{formattedChange}</span>
        </div>
        <span className={styles.compare}>vs last month</span>
      </div>
    </Card>
  );
}

export default memo(KPICard);
