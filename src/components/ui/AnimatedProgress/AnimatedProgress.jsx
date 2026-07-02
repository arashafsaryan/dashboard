import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import styles from "./AnimatedProgress.module.css";

export default function AnimatedProgress({ value, delay = 0, color }) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 1,
  });

  return (
    <div ref={ref} className={styles.progress}>
      <motion.div
        className={styles.fill}
        style={{
          background: color,
        }}
        initial={{ width: 0 }}
        animate={isInView ? { width: `${value}%` } : {}}
        transition={{
          type: "spring",
          stiffness: 90,
          damping: 18,
          mass: 0.8,
          delay,
        }}
      >
        <motion.div
          className={styles.shine}
          initial={{
            x: "-120%",
          }}
          animate={
            isInView
              ? {
                  x: "220%",
                }
              : {}
          }
          transition={{
            duration: 1.4,
            ease: "easeInOut",
            delay: delay + 0.15,
          }}
        />
      </motion.div>
    </div>
  );
}
