import { Mic } from "lucide-react";

import styles from "./VoiceButton.module.css";

export default function VoiceButton({ onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      <Mic size={20} />
    </button>
  );
}
