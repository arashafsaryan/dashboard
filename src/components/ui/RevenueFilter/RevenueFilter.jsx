import { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import styles from "./RevenueFilter.module.css";

const DEFAULT_OPTIONS = ["7D", "30D", "6M", "1Y"];

function RevenueFilter({ active, onChange, options = DEFAULT_OPTIONS }) {
  const prefersReducedMotion = useReducedMotion();
  const pillTransition = prefersReducedMotion
    ? { duration: 0 }
    : { type: "spring", stiffness: 450, damping: 35 };

  return (
    <div className={styles.wrapper} role="group" aria-label="Revenue period">
      {options.map((item) => {
        const isActive = active === item;
        return (
          <button
            key={item}
            type="button"
            onClick={() => onChange(item)}
            className={styles.button}
            aria-pressed={isActive}
          >
            {isActive && (
              <motion.div
                layoutId="activeRevenueFilter"
                className={styles.active}
                transition={pillTransition}
              />
            )}

            <span className={isActive ? styles.activeText : styles.text}>
              {item}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default memo(RevenueFilter);
