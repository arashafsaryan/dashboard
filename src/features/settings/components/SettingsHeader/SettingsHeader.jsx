import Button from "../../../../components/ui/Button/Button";
import styles from "./SettingsHeader.module.css";

export default function SettingsHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <div className={styles.topRow}>
          <h1>Settings</h1>
          <span className={styles.badge}>Auto Saved</span>
        </div>
        <p>
          Manage your account, security, notifications and application
          preferences from one place.
        </p>
      </div>
      <div className={styles.actions}>
        <Button disabled>Save Changes</Button>
      </div>
    </header>
  );
}
