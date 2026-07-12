import { useEffect, useRef, useState } from "react";
import { Reply, Heart, MoreHorizontal } from "lucide-react";
import styles from "./MessageActions.module.css";
import MoreMenu from "./MoreMenu";
import Portal from "./Portal";

export default function MessageActions({
  onReply,
  onReaction,
  //   onMore,
  visible,
  message,
}) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);
  const [menuPosition, setMenuPosition] = useState({
    top: 0,
    left: 0,
  });
  const menuRef = useRef(null);
  useEffect(() => {
    function handleClick(e) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !buttonRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);
  const handleMore = () => {
    const rect = buttonRef.current.getBoundingClientRect();
    setMenuPosition({
      top: rect.bottom + 8,
      left: rect.right - 180,
    });
    setOpen((prev) => !prev);
  };

  return (
    <div className={`${styles.actions} ${visible ? styles.visible : ""}`}>
      <button
        className={`${styles.action} ${styles.react}`}
        onClick={onReaction}
        title="React"
      >
        <Heart size={15} />
      </button>

      <button
        className={`${styles.action} ${styles.reply}`}
        onClick={() => onReply(message)}
        title="Reply"
      >
        <Reply size={15} />
      </button>

      <button
        className={`${styles.action} ${styles.more}`}
        onClick={handleMore}
        ref={buttonRef}
        title="More"
      >
        <MoreHorizontal size={16} />
      </button>
      {open && (
        <Portal>
          <MoreMenu
            open={open}
            onCopy={() => {}}
            onEdit={() => {}}
            onPin={() => {}}
            onDelete={() => {}}
            position={menuPosition}
            ref={menuRef}
          />
        </Portal>
      )}
    </div>
  );
}
