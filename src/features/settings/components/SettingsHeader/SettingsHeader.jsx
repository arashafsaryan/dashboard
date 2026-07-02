import Button from "../../../../components/ui/Button/Button";

import styles from "./SettingsHeader.module.css";

export default function SettingsHeader() {
  return (
    <header className={styles.header}>
      <div>
        <h1>Settings</h1>

        <p>Manage your account and application preferences.</p>
      </div>

      <Button disabled>Save Changes</Button>
    </header>
  );
}
