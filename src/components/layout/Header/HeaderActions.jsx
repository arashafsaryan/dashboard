/* eslint-disable react-hooks/refs */
import { useEffect, useRef, useState } from "react";
import styles from "./HeaderActions.module.css";
import ThemeToggle from "../../ui/ThemeToggle/ThemeToggle";
import NotificationPanel from "../../ui/NotificationPanel/NotificationPanel";
import UserMenu from "./UserMenu/UserMenu";
import { BsStars } from "react-icons/bs";
import { TfiBell } from "react-icons/tfi";
import {
  useFloating,
  offset,
  flip,
  shift,
  autoUpdate,
  FloatingPortal,
} from "@floating-ui/react";

export default function HeaderActions() {
  const [showNotifications, setShowNotifications] = useState(false);
  const notificationRef = useRef(null);
  const { refs, floatingStyles } = useFloating({
    open: showNotifications,
    whileElementsMounted: autoUpdate,
    placement: "bottom-end",
    middleware: [
      offset(12),
      flip(),
      shift({
        padding: 12,
      }),
    ],
  });
  useEffect(() => {
    function handleClick(e) {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(e.target)
      ) {
        setShowNotifications(false);
      }
    }
    function handleEscape(e) {
      if (e.key === "Escape") {
        setShowNotifications(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div className={styles.actions}>
      <div ref={notificationRef} className={styles.notification}>
        <button
          ref={refs.setReference}
          className={styles.iconButton}
          onClick={() => setShowNotifications((v) => !v)}
        >
          <TfiBell />
        </button>

        <span className={styles.badge}>4</span>

        {showNotifications && (
          <FloatingPortal>
            <div ref={refs.setFloating} style={floatingStyles}>
              <NotificationPanel />
            </div>
          </FloatingPortal>
        )}
      </div>
      <ThemeToggle />
      <button className={styles.iconButton}>
        <BsStars />
      </button>
      <UserMenu />
    </div>
  );
}
