import styles from "./UserDropdown.module.css";
import { menuSections, userData } from "./userMenuData";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";

export default function UserDropdown({ open, closeMenu }) {
  if (!open) return null;
  return (
    <div className={styles.dropdown}>
      <div className={styles.userCard}>
        <div className={styles.avatar}>
          {userData.initials}
          {userData.online && (
            <span className={styles.online}>
              <FiCheckCircle />
            </span>
          )}
        </div>
        <div className={styles.userInfo}>
          <h4>{userData.name}</h4>
          <span>{userData.role}</span>
          <div className={styles.workspace}>{userData.workspace}</div>
        </div>
      </div>
      <button className={styles.profileButton}>
        <span>View Profile</span>
        <FiArrowRight />
      </button>
      {menuSections.map((section, index) => (
        <div key={index} className={styles.section}>
          {section.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                className={`${styles.menuItem} ${
                  item.danger ? styles.danger : ""
                }`}
                onClick={closeMenu}
              >
                <div className={styles.left}>
                  <span className={styles.icon}>
                    <Icon />
                  </span>
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className={styles.badge}>{item.badge}</span>
                )}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}
