import Button from "../../../../components/ui/Button/Button";

import styles from "./TeamHeader.module.css";

export default function TeamHeader() {
  return (
    <header className={styles.header}>
      <div>
        <h1>Team</h1>

        <p>
          Manage your organization members and collaborate more efficiently.
        </p>
      </div>

      <Button>Team</Button>
    </header>
  );
}
