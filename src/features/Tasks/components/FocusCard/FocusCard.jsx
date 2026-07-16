import { useState, useEffect } from "react";
import { Brain, CircleCheckBig, Flame, Target, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
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
      staggerChildren: 0.15, // فاصله زمانی لود شدن هر آیتم (آبشاری)
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
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const hour = new Date().getHours();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (hour < 12) setGreeting("Good Morning");
    else if (hour < 18) setGreeting("Good Afternoon");
    else setGreeting("Good Evening");

    // انیمیشن شمارش عدد درصد
    const timer = setTimeout(() => setPercent(72), 300);
    return () => clearTimeout(timer);
  }, []);

  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const targetOffset = circumference - (72 / 100) * circumference;

  return (
    // تبدیل تگ section به motion.section به عنوان کانتینر اصلی
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

            {/* استفاده از motion.circle برای انیمیشن نرم SVG */}
            <motion.circle
              cx="60"
              cy="60"
              r={radius}
              className={styles.progress}
              filter="url(#glow)"
              style={{ strokeDasharray: circumference }}
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset: targetOffset }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
            />
          </svg>

          <div className={styles.percent}>
            <strong>{percent}%</strong>
            <span>Today</span>
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
