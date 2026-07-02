import styles from "./DashboardPage.module.css";
import KPISection from "./components/KPISection/KPISection";
import AnalyticsSection from "./components/AnalyticsSection/AnalyticsSection";
import ActivitySection from "./components/ActivitySection/ActivitySection";
import TeamSection from "./components/TeamSection/TeamSection";
import AIInsightsSection from "./components/AIInsightsSection/AIInsightsSection";
import RecentOrders from "./components/RecentOrders/RecentOrders";

export default function DashboardPage() {
  return (
    <div className={styles.dashboard}>
      <div className={styles.pageInfo}>
        <h1 className={styles.title}>Dashboard</h1>
        <p className={styles.subtitle}>
          Welcome back to your dashboard, Arash 👋
        </p>
      </div>
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
          {" "}
          <AIInsightsSection />{" "}
        </section>
      </section>
      <section className={styles.aiSection}>
        <RecentOrders />
      </section>
    </div>
  );
}
