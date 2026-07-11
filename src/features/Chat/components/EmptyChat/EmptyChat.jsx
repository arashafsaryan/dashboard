import { MessageSquareDashed } from "lucide-react";
import styles from "./EmptyChat.module.css";

export default function EmptyChat() {
  return (
    <div className={styles.container}>
      {/* یک هاله نوری ملایم در پس‌زمینه برای عمق دادن به صفحه */}
      <div className={styles.ambientGlow} />
      
      <div className={styles.content}>
        <div className={styles.iconWrapper}>
          <div className={styles.iconCircle}>
            <MessageSquareDashed size={48} className={styles.icon} strokeWidth={1.5} />
          </div>
        </div>
        
        <h2>Welcome ARASH</h2>
        
        <p>Select a conversation to start chatting.</p>
        
        <div className={styles.pulseDots}>
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}