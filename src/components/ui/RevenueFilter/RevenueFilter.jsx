import { motion } from "framer-motion";
import styles from "./RevenueFilter.module.css";

const filters = ["7D", "30D", "6M", "1Y"];

export default function RevenueFilter({ active, onChange }) {
  return (
    <div className={styles.wrapper}>
      {filters.map((item) => (
        <button
          key={item}
          onClick={() => onChange(item)}
          className={styles.button}
        >
          {active === item && (
            <motion.div
              layoutId="activeRevenueFilter"
              className={styles.active}
              transition={{
                type: "spring",
                stiffness: 450,
                damping: 35,
              }}
            />
          )}

          <span className={active === item ? styles.activeText : ""}>
            {item}
          </span>
        </button>
      ))}
    </div>
  );
}
