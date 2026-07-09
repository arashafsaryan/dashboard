import { useEffect, useRef, useState } from "react";
import { MoreHorizontal } from "lucide-react";

import styles from "./DropdownMenu.module.css";

export default function DropdownMenu({ items = [], className = "" }) {
  const [open, setOpen] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (!ref.current?.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className={`${styles.wrapper} ${className}`}>
      {" "}
      <button className={styles.trigger} onClick={() => setOpen((p) => !p)}>
        <MoreHorizontal size={18} />
      </button>
      {open && (
        <div className={styles.menu}>
          {items.map((item) => (
            <button
              key={item.label}
              className={`${styles.item} ${item.danger ? styles.danger : ""}`}
              onClick={() => {
                item.onClick?.();
                setOpen(false);
              }}
            >
              {item.icon}

              <span>{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
