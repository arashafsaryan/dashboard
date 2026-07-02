import { motion, AnimatePresence } from "framer-motion";
import { useSettings } from "../../context/SettingsContext";

import styles from "./FloatingSaveBar.module.css";

export default function FloatingSaveBar() {
  const { isDirty, resetDirty } = useSettings();

  return (
    <AnimatePresence>
      {isDirty && (
        <motion.div
          className={styles.container}
          initial={{
            opacity: 0,
            y: 30,
            scale: 0.95,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: 30,
            scale: 0.95,
          }}
          transition={{
            duration: 0.22,
          }}
        >
          <div className={styles.left}>
            <div className={styles.dot} />

            <span>Unsaved changes</span>
          </div>

          <div className={styles.actions}>
            <button
              className={styles.cancel}
              onClick={resetDirty}
            >
              Cancel
            </button>

            <button
              className={styles.save}
              onClick={() => {
                // API later
                resetDirty();
              }}
            >
              Save Changes
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}