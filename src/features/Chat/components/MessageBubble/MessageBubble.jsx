import { useState } from "react";
import MessageActions from "../../MessageActions/MessageActions";
import styles from "./MessageBubble.module.css";
import { Check, CheckCheck, Clock3 } from "lucide-react";

export default function MessageBubble({ message, onReply, conversation }) {
  const isMe = message.senderId === "me";
  const showHeader = message.isFirstOfGroup;
  const isFirst = message.isFirstOfGroup;
  const isLast = message.isLastOfGroup;
  const [showActions, setShowActions] = useState(false);

  return (
    <div
      className={`
        ${styles.row}
        ${isMe ? styles.me : styles.other}
        ${!isFirst ? styles.compact : ""}
      `}
    >
      {!isMe && (
        <div className={styles.avatarWrapper}>
          {isLast && (
            <img
              src={conversation.avatar}
              alt={conversation.name}
              className={styles.avatar}
            />
          )}
        </div>
      )}

      <div className={styles.content}>
        {!isMe && showHeader && (
          <div className={styles.header}>
            <span className={styles.sender}>{message.sender}</span>
          </div>
        )}

        <div
          className={`
            ${styles.bubble}
            ${isFirst ? styles.first : ""}
            ${isLast ? styles.last : ""}
            ${!isFirst && !isLast ? styles.middle : ""}
            ${isMe ? styles.meBubble : styles.otherBubble}
          `}
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
            <p className={styles.text}>
              {message.text}
              {/* این فاصله‌انداز مانع از روی هم افتادن متن و ساعت می‌شود */}
              <span className={styles.spacer}></span>
            </p>
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
                {message.status === "sending" && <Clock3 size={13} />}
                {message.status === "sent" && <Check size={14} />}
                {message.status === "delivered" && <CheckCheck size={14} />}
                {message.status === "seen" && (
                  <CheckCheck size={14} className={styles.seen} />
                )}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
