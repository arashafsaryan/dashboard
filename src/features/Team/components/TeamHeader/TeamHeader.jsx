import {  Users, Download } from "lucide-react";
import styles from "./TeamHeader.module.css";

export default function TeamHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.leftContent}>
        {/* بخش عنوان و توضیحات */}
        <div className={styles.titleSection}>
          <div className={styles.iconBox}>
            <Users size={22} className={styles.titleIcon} />
          </div>

          <div className={styles.textContent}>
            <div className={styles.titleRow}>
              <h1>Team Members</h1>
              <span className={styles.badge}>
                <span className={styles.badgeDot}></span>
                24 Active
              </span>
            </div>
            <p className={styles.description}>
              Manage your organization members, set roles, and collaborate more
              efficiently.
            </p>
          </div>
        </div>

        {/* بخش آواتارهای کاربران آنلاین (Micro-interaction بصری) */}
        <div className={styles.activeUsers}>
          <div className={styles.avatarGroup}>
            <img src="https://i.pravatar.cc/150?u=1" alt="User" />
            <img src="https://i.pravatar.cc/150?u=2" alt="User" />
            <img src="https://i.pravatar.cc/150?u=3" alt="User" />
            <img src="https://i.pravatar.cc/150?u=4" alt="User" />
            <div className={styles.avatarMore}>+8</div>
          </div>
          <span className={styles.activeText}>Online right now</span>
        </div>
      </div>

      {/* دکمه‌های عملیاتی */}
      <div className={styles.actions}>
        <button className={styles.secondaryBtn}>
          <Download size={16} />
          <span>Export CSV</span>
        </button>
      </div>
    </header>
  );
}
