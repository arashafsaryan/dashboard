import { SearchX } from "lucide-react";

import styles from "./EmptyMembers.module.css";

export default function EmptyMembers() {
  return (
    <div className={styles.empty}>
      <div className={styles.icon}>
        <SearchX size={34} />
      </div>

      <h3>No members found</h3>

      <p>Try another name or email address.</p>
    </div>
  );
}
