import styles from "./ChatHeader.module.css";
import { Phone, Video, Search } from "lucide-react";
import { ArrowLeft } from "lucide-react";

export default function ChatHeader({ conversation, isMobile, onBack }) {
  if (!conversation) return null;

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        {isMobile && (
          <button className={styles.backButton} onClick={onBack}>
            <ArrowLeft size={20} />
          </button>
        )}
        <div className={styles.avatarWrapper}>
          <img
            src={conversation.avatar}
            alt={conversation.name}
            className={styles.avatar}
          />

          {conversation.online && <span className={styles.online}></span>}
        </div>

        <div>
          <h3>{conversation.name}</h3>

          <span>{conversation.online ? "Online" : "Last visit recently"}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button>
          <Search size={18} />
        </button>
        <button>
          <Phone size={18} />
        </button>
        <button>
          <Video size={18} />
        </button>
      </div>
    </header>
  );
}
