import { useState, useRef, useEffect } from "react";
import styles from "./Header.module.css";
import { FiMenu } from "react-icons/fi";
import { useSidebar } from "../../../context/SidebarContext";
import SearchBar from "./SearchBar";
import HeaderActions from "./HeaderActions";

export default function Header() {
  // eslint-disable-next-line no-unused-vars
  const [showNotifications, setShowNotifications] = useState(false);
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
      <div className={styles.left}>
        <button className={styles.menuBtn} onClick={toggleMobileSidebar}>
          <FiMenu />
        </button>
      </div>

      <div className={styles.center}>
        <SearchBar />
      </div>

      <div className={styles.right}>
        <HeaderActions />
      </div>
    </header>
  );
}
