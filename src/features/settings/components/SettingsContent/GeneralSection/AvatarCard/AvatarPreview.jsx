import styles from "./AvatarPreview.module.css";
import { Camera } from "lucide-react";

export default function AvatarPreview({ image, name }) {
  return (
    <div className={styles.avatar}>
      {image ? (
        <img src={image} alt={name} className={styles.image} />
      ) : (
        <span className={styles.initial}>{name.charAt(0).toUpperCase()}</span>
      )}

      <div className={styles.overlay}>
        <Camera size={18} />
      </div>
    </div>
  );
}
