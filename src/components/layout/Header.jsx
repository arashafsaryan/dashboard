import { useState, useRef, useEffect } from "react";
import styles from "./Header.module.css";
import ThemeToggle from "../ui/ThemeToggle/ThemeToggle";
import NotificationPanel from "../ui/NotificationPanel/NotificationPanel";
import { FiMenu } from "react-icons/fi";
import { useSidebar } from "../../context/SidebarContext";
import { useCommandPalette } from "../../context/CommandPaletteContext";

export default function Header() {
  const [showNotifications, setShowNotifications] = useState(false);
  const { openPalette } = useCommandPalette();
  const notificationRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(e.target)
      ) {
        setShowNotifications(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const { toggleMobileSidebar } = useSidebar();

  return (
    <header className={styles.header}>
      {/* Left side */}
      <div className={styles.left}>
        <button className={styles.menuBtn} onClick={toggleMobileSidebar}>
          <FiMenu />
        </button>
      </div>
      {/* Center - Search */}
      <div className={styles.searchBox}>
        <div className={styles.searchInput} onClick={openPalette}>
          <span className={styles.searchIcon}>⌕</span>

          <span className={styles.placeholder}>Search pages...</span>

          <kbd>Ctrl + K</kbd>
        </div>
      </div>
      {/* Right side */}
      <div className={styles.right}>
        <div className={styles.notificationWrapper} ref={notificationRef}>
          <button
            className={styles.iconBtn}
            onClick={() => setShowNotifications(!showNotifications)}
          >
            🔔
          </button>
          <span className={styles.badge}>4</span>
        </div>
        <ThemeToggle />
        <button className={styles.iconBtn}>⚡</button>
        <div className={styles.user}>
          <div className={styles.avatar}>A</div>

          <div className={styles.userInfo}>
            <small>Admin</small>
          </div>
          <span className={styles.arrow}>▾</span>
        </div>
        {showNotifications && <NotificationPanel />}
      </div>
    </header>
  );
}
