import { useState, useEffect } from "react";
import { Brain, CircleCheckBig, Flame, Target, Sparkles } from "lucide-react";
// هوک‌های جدید را از framer-motion اضافه کردیم
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import styles from "./FocusCard.module.css";

// ==========================================
// تنظیمات انیمیشن‌های Framer Motion
// ==========================================
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

export default function FocusCard({ userName = "Arash" }) {
  const [greeting, setGreeting] = useState("Good Evening");

  // ۱. مقدار درصد هدف را در یک متغیر ذخیره می‌کنیم
  const targetPercent = 72;

  // ۲. استفاده از مقادیر متحرک Framer Motion به جای useState
  const count = useMotionValue(0);
  const roundedPercent = useTransform(count, Math.round);

  useEffect(() => {
    const hour = new Date().getHours();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (hour < 12) setGreeting("Good Morning");
    else if (hour < 18) setGreeting("Good Afternoon");
    else setGreeting("Good Evening");

    // ۳. انیمیشن شمارش عدد دقیقا هماهنگ با انیمیشن دایره
    const controls = animate(count, targetPercent, {
      duration: 1.5, // مدت زمان انیمیشن (برابر با دایره)
      ease: "easeOut", // نوع حرکت (برابر با دایره)
      delay: 0.4, // تاخیر شروع (برابر با دایره)
    });

    // پاکسازی انیمیشن در صورت unmount شدن کامپوننت
    return controls.stop;
  }, [count, targetPercent]);

  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const targetOffset = circumference - (targetPercent / 100) * circumference;

  return (
    <motion.section
      className={styles.card}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className={styles.ambientGlow} />

      {/* بخش چپ: اطلاعات */}
      <motion.div className={styles.left} variants={itemVariants}>
        <motion.span className={styles.badge} variants={itemVariants}>
          <Sparkles size={14} className={styles.sparkleIcon} />
          {greeting}, {userName} 👋
        </motion.span>

        <motion.h2 variants={itemVariants}>Stay focused.</motion.h2>
        <motion.p variants={itemVariants}>
          You have <strong>8 active tasks</strong> today.
        </motion.p>

        <motion.div className={styles.stats} variants={containerVariants}>
          <motion.div className={styles.stat} variants={itemVariants}>
            <div className={`${styles.iconBox} ${styles.blueBox}`}>
              <Target size={18} strokeWidth={2.5} />
            </div>
            <span>8 Active</span>
          </motion.div>

          <motion.div className={styles.stat} variants={itemVariants}>
            <div className={`${styles.iconBox} ${styles.orangeBox}`}>
              <Flame size={18} strokeWidth={2.5} />
            </div>
            <span>3 High Priority</span>
          </motion.div>

          <motion.div className={styles.stat} variants={itemVariants}>
            <div className={`${styles.iconBox} ${styles.greenBox}`}>
              <CircleCheckBig size={18} strokeWidth={2.5} />
            </div>
            <span>12 Completed</span>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* بخش وسط: نمودار */}
      <motion.div className={styles.center} variants={itemVariants}>
        <div className={styles.progressCircle}>
          <svg viewBox="0 0 120 120">
            <defs>
              <linearGradient
                id="progressGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="var(--primary)" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <circle cx="60" cy="60" r={radius} className={styles.track} />

            <motion.circle
              cx="60"
              cy="60"
              r={radius}
              className={styles.progress}
              filter="url(#glow)"
              style={{ strokeDasharray: circumference }}
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset: targetOffset }}
              // ۴. زمان‌بندی این بخش با شمارشگر متن تنظیم شده است
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
            />
          </svg>

          <div className={styles.percent}>
            <strong>
              <motion.span>{roundedPercent}</motion.span>%
            </strong>
            <span className={styles.percentLabel}>Today</span>
          </div>
        </div>
      </motion.div>

      {/* بخش راست: هوش مصنوعی */}
      <motion.div className={styles.right} variants={itemVariants}>
        <div className={styles.ai}>
          <div className={styles.aiHeader}>
            <div className={styles.aiIconWrapper}>
              <Brain size={18} />
            </div>
            <span>AI Insight</span>
          </div>

          <p className={styles.aiText}>
            You're operating at top efficiency today.
          </p>

          <div className={styles.tip}>
            <div className={styles.tipHighlight} />
            Finish <strong>Team Detail Page</strong> before 6 PM to maintain
            your streak.
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
