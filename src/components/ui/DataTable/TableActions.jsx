import { useEffect, useRef, useState } from "react";
import { FiMoreHorizontal, FiEye, FiEdit2, FiTrash2 } from "react-icons/fi";
import styles from "./TableActions.module.css";

export default function TableActions() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className={styles.wrapper} ref={ref}>
      <button
        className={styles.button}
        onClick={() => setOpen((prev) => !prev)}
      >
        <FiMoreHorizontal />
      </button>
      {open && (
        <div className={styles.menu}>
          <button>
            <FiEye />
            View
          </button>
          <button>
            <FiEdit2 />
            Edit
          </button>
          <button className={styles.delete}>
            <FiTrash2 />
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
