import { useState } from "react";
import MessageActions from "../../MessageActions/MessageActions";
// import MessageContextMenu from "../../MessageContextMenu/MessageContextMenu";
import styles from "./MessageBubble.module.css";
import { Check, CheckCheck, Clock3 } from "lucide-react";

export default function MessageBubble({ message, onReply }) {
  const isMe = message.senderId === "me";
  const [showActions, setShowActions] = useState(false);

  return (
    <div className={`${styles.row} ${isMe ? styles.me : styles.other}`}>
      <div
        className={styles.bubble}
        onMouseEnter={() => setShowActions(true)}
        onMouseLeave={() => setShowActions(false)}
      >
        <MessageActions
          message={message}
          visible={showActions}
          onReply={onReply}
          onReaction={() => {}}
          onMore={() => {}}
        />
        {message.replyTo && (
          <div className={styles.replyPreview}>
            <strong>
              {message.replyTo.senderId === "me"
                ? "You"
                : message.replyTo.sender}
            </strong>

            <p>{message.replyTo.text}</p>
          </div>
        )}
        {message.type === "text" && (
          <p className={styles.text}>{message.text}</p>
        )}

        {message.type === "image" && (
          <img src={message.image} alt="" className={styles.image} />
        )}

        {message.type === "voice" && (
          <audio controls className={styles.audio}>
            <source src={message.voice} />
          </audio>
        )}

        {message.type === "file" && (
          <div className={styles.file}>📎 {message.fileName}</div>
        )}

        <div className={styles.footer}>
          <span>{message.time}</span>

          {isMe && (
            <span className={styles.status}>
              {message.status === "sending" && <Clock3 size={14} />}
              {message.status === "sent" && <Check size={15} />}
              {message.status === "delivered" && <CheckCheck size={15} />}
              {message.status === "seen" && (
                <CheckCheck size={15} className={styles.seen} />
              )}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
