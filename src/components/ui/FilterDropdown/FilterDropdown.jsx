import { useState, useRef, useEffect } from "react";
import { FiFilter, FiChevronDown } from "react-icons/fi";
import styles from "./FilterDropdown.module.css";

export default function FilterDropdown({ value, onChange, options }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  // بستن منو هنگام کلیک در بیرون آن
  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className={styles.wrapper} ref={ref}>
      <button className={styles.trigger} onClick={() => setIsOpen(!isOpen)}>
        <div className={styles.left}>
          <FiFilter className={styles.icon} />
          <span>{value}</span>
        </div>
        <FiChevronDown
          className={`${styles.chevron} ${isOpen ? styles.open : ""}`}
        />
      </button>

      {isOpen && (
        <div className={styles.menu}>
          {options.map((opt) => (
            <button
              key={opt}
              className={`${styles.option} ${value === opt ? styles.active : ""}`}
              onClick={() => {
                onChange(opt);
                setIsOpen(false);
              }}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
