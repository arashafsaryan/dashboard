// import Card from "../../../../components/ui/Card/Card";
import GeneralSection from "./GeneralSection/GeneralSection";
import AccountSection from "./AccountSection/AccountSection";
import AppearanceSection from "./AppearanceSection/AppearanceSection";
import NotificationSection from "./NotificationSection/NotificationSection";
import SecuritySection from "./SecuritySection/SecuritySection";
import DangerSection from "./DangerZoneSection/DangerZoneSection";

import styles from "./SettingsContent.module.css";

export default function SettingsContent() {
  return (
    <div className={styles.content}>
      <section id="general" className={styles.section}>
        <GeneralSection />
      </section>

      <section id="account" className={styles.section}>
        <AccountSection />
      </section>

      <section id="appearance" className={styles.section}>
        <AppearanceSection />
      </section>
      <section id="notifications" className={styles.section}>
        <NotificationSection />
      </section>
      <section id="security" className={styles.section}>
        <SecuritySection />
      </section>
      <section id="danger" className={styles.section}>
        <DangerSection />
      </section>
    </div>
  );
}
