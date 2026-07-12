/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from "react";
import { Calendar, Download, Sparkles } from "lucide-react";
import styles from "./DashboardPage.module.css";
import KPISection from "./components/KPISection/KPISection";
import AnalyticsSection from "./components/AnalyticsSection/AnalyticsSection";
import ActivitySection from "./components/ActivitySection/ActivitySection";
import TeamSection from "./components/TeamSection/TeamSection";
import AIInsightsSection from "./components/AIInsightsSection/AIInsightsSection";
import RecentOrders from "./components/RecentOrders/RecentOrders";

export default function DashboardPage() {
  // ساخت تاریخ داینامیک برای هدر
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const date = new Date();
    const options = {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    };
    setCurrentDate(date.toLocaleDateString("en-US", options));
  }, []);

  return (
    <div className={styles.dashboard}>
      <header className={styles.pageHeader}>
        <div className={styles.headerLeft}>
          <div className={styles.metaData}>
            <div className={styles.statusBadge}>
              <span className={styles.statusDot}></span>
              System Healthy
            </div>
            <div className={styles.dateBadge}>
              <Calendar size={14} />
              {currentDate || "Loading date..."}
            </div>
          </div>

          <h1 className={styles.title}>
            Good evening, <span className={styles.highlight}>Arash</span> 👋
          </h1>
          <p className={styles.subtitle}>
            Here is what's happening with your workspace today.
          </p>
        </div>

        <div className={styles.headerRight}>
          <button className={styles.secondaryBtn}>
            <Download size={16} />
            <span>Export Report</span>
          </button>

          <button className={styles.primaryBtn}>
            <Sparkles size={16} />
            <span>AI Summary</span>
          </button>
        </div>
      </header>

      {/* ==========================
          Dashboard Content
      ========================== */}
      <section className={styles.kpiSection}>
        <KPISection />
      </section>

      <section className={styles.analyticsSection}>
        <AnalyticsSection />
      </section>

      <section className={styles.bottomGrid}>
        <section className={styles.activitySection}>
          <ActivitySection />
        </section>

        <section className={styles.teamSection}>
          <TeamSection />
        </section>

        <section className={styles.aiSection}>
          <AIInsightsSection />
        </section>
      </section>

      <section className={styles.recentOrdersSection}>
        <RecentOrders />
      </section>
    </div>
  );
}
