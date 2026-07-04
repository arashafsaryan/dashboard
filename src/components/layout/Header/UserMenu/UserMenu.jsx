import { useEffect, useRef, useState } from "react";
import styles from "./UserMenu.module.css";
import UserDropdown from "./UserDropdown";
import { userData } from "./userMenuData";

export default function UserMenu() {
  const [open, setOpen] = useState(false);

  const wrapperRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    function handleEscape(e) {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <button
        ref={triggerRef}
        className={`${styles.trigger} ${open ? styles.active : ""}`}
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className={styles.avatarWrapper}>
          <div className={styles.avatar}>{userData.initials}</div>
          {userData.online && <span className={styles.online}></span>}
        </div>
        <div className={styles.info}>
          <span className={styles.name}>{userData.name}</span>
          <span className={styles.role}>{userData.role}</span>
        </div>
        <svg
          className={`${styles.arrow} ${open ? styles.rotate : ""}`}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M7 10L12 15L17 10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <UserDropdown open={open} closeMenu={() => setOpen(false)} />
    </div>
  );
}
