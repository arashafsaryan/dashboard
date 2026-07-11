import { SendHorizontal, X } from "lucide-react";

import styles from "./RecordingBar.module.css";
import useVoiceRecorder from "./useVoiceRecorder";

export default function RecordingBar({ seconds, onCancel, onSend }) {
  const level = useVoiceRecorder(true);

  return (
    <div className={styles.bar}>
      <button className={styles.cancel} onClick={onCancel}>
        <X size={18} />
      </button>

      <div className={styles.timer}>🔴 {seconds}s</div>

      <div className={styles.wave}>
        {Array.from({ length: 20 }).map((_, index) => (
          <span
            key={index}
            style={{
              height: `${8 + (level / 255) * (10 + index)}px`,
            }}
          />
        ))}
      </div>

      <button className={styles.send} onClick={onSend}>
        <SendHorizontal size={18} />
      </button>
    </div>
  );
}
