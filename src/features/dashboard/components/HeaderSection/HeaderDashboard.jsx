import { useEffect, useState } from "react";
import styles from "./HeaderDashboard.module.css";
import { Calendar, Download, Sparkles, Activity } from "lucide-react";

const HeaderDashboard = () => {
  const [currentDate, setCurrentDate] = useState("");
  const [greeting, setGreeting] = useState("Good evening");

  useEffect(() => {
    // تنظیم تاریخ
    const date = new Date();
    const options = {
      weekday: "long",
      month: "short", // تغییر به short برای ظاهر مدرن‌تر (مثلا: Oct 15, 2024)
      day: "numeric",
      year: "numeric",
    };
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrentDate(date.toLocaleDateString("en-US", options));

    // تنظیم داینامیک سلام بر اساس ساعت
    const hour = date.getHours();
    if (hour < 12) setGreeting("Good morning");
    else if (hour < 18) setGreeting("Good afternoon");
    else setGreeting("Good evening");
  }, []);

  return (
    <header className={styles.pageHeader}>
      <div className={styles.headerGlow}></div> {/* افکت نوری پس‌زمینه (ظریف) */}
      
      <div className={styles.headerLeft}>
        <div className={styles.metaData}>
          <div className={styles.statusBadge}>
            <Activity size={12} className={styles.statusIcon} />
            <span className={styles.statusDot}></span>
            All systems operational
          </div>
          <div className={styles.dateBadge}>
            <Calendar size={14} />
            {currentDate || "Loading..."}
          </div>
        </div>

        <h1 className={styles.title}>
          {greeting}, <span className={styles.highlight}>Arash</span>
          <span className={styles.wave}>👋</span>
        </h1>
        
        <p className={styles.subtitle}>
          Here's your workspace overview for today. Let's make it a productive one.
        </p>
      </div>

      <div className={styles.headerRight}>
        <button className={styles.secondaryBtn}>
          <Download size={16} />
          <span>Export</span>
        </button>
        <button className={styles.primaryBtn}>
          <Sparkles size={16} className={styles.sparkleIcon} />
          <span>Generate Insights</span>
        </button>
      </div>
    </header>
  );
};

export default HeaderDashboard;