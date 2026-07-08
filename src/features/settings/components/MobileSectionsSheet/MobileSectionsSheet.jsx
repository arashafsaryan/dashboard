import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { settingsNavigation } from "../../data/settingsNavigation";
import { useSettingsMobileNavigation } from "../../context/SettingsMobileNavigationContext";
import styles from "./MobileSectionsSheet.module.css";

const backdropVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
};

const sheetVariants = {
  hidden: {
    y: "100%",
  },
  visible: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 240,
      damping: 24,
      mass: 0.8,
      staggerChildren: 0.05,
      delayChildren: 0.08,
    },
  },
  exit: {
    y: "100%",
    transition: {
      duration: 0.22,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.18,
    },
  },
};

export default function MobileSectionsSheet() {
  const { open, closeNavigation } = useSettingsMobileNavigation();

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const handleScroll = (id) => {
    const section = document.getElementById(id);

    if (!section) return;

    closeNavigation();

    setTimeout(() => {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 180);
  };

  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          className={styles.overlay}
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={closeNavigation}
        >
          <motion.div
            className={styles.sheet}
            variants={sheetVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              className={styles.handle}
              initial={{
                opacity: 0,
                scaleX: 0.5,
              }}
              animate={{
                opacity: 1,
                scaleX: 1,
              }}
              transition={{
                delay: 0.12,
                duration: 0.25,
              }}
            />

            <div className={styles.header}>
              <motion.h3
                initial={{
                  opacity: 0,
                  y: 6,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.12,
                }}
              >
                Sections
              </motion.h3>

              <motion.button
                type="button"
                className={styles.closeButton}
                onClick={closeNavigation}
                whileHover={{
                  rotate: 90,
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.92,
                }}
              >
                <X size={20} />
              </motion.button>
            </div>

            <motion.div
              className={styles.list}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              }}
            >
              {settingsNavigation.map((item) => (
                <motion.button
                  key={item.id}
                  type="button"
                  className={styles.item}
                  variants={itemVariants}
                  whileHover={{
                    x: 6,
                    transition: {
                      duration: 0.15,
                    },
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  onClick={() => handleScroll(item.id)}
                >
                  {item.label}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
