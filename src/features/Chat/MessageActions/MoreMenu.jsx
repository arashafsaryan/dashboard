import { Copy, Pencil, Pin, Trash2 } from "lucide-react";

import styles from "./MoreMenu.module.css";

export default function MoreMenu({ open, onCopy, onEdit, onPin, onDelete }) {
  if (!open) return null;

  return (
    <div className={styles.menu}>
      <button onClick={onCopy}>
        <Copy size={15} />
        Copy
      </button>

      <button onClick={onEdit}>
        <Pencil size={15} />
        Edit
      </button>

      <button onClick={onPin}>
        <Pin size={15} />
        Pin
      </button>

      <button className={styles.danger} onClick={onDelete}>
        <Trash2 size={15} />
        Delete
      </button>
    </div>
  );
}
