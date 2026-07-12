import { Copy, Pencil, Pin, Trash2 } from "lucide-react";
import { forwardRef } from "react";
import styles from "./MoreMenu.module.css";

const MoreMenu = forwardRef(
  ({ open, onCopy, onEdit, onPin, onDelete, position }, ref) => {
    if (!open) return null;

    return (
      <div
        ref={ref}
        className={styles.menu}
        style={{
          top: position.top,
          left: position.left,
        }}
      >
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
  },
);

export default MoreMenu;
