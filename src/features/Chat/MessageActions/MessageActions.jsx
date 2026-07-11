import { Reply, Heart, MoreHorizontal } from "lucide-react";

import styles from "./MessageActions.module.css";
import MoreMenu from "./MoreMenu";
import { useState } from "react";

export default function MessageActions({
  onReply,
  onReaction,
  //   onMore,
  visible,
  message,
}) {
  const [open, setOpen] = useState(false);

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
        onClick={() => setOpen(!open)}
        title="More"
      >
        <MoreHorizontal size={16} />
      </button>
      <MoreMenu
        open={open}
        onCopy={() => {}}
        onEdit={() => {}}
        onPin={() => {}}
        onDelete={() => {}}
      />
    </div>
  );
}
