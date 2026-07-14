import { useEffect, useRef, useState } from "react";
import { Check, CheckCheck, Clock3 } from "lucide-react";

import useMediaQuery from "../../../../hooks/useMediaQuery";

import MessageActions from "../../MessageActions/MessageActions";

import styles from "./MessageBubble.module.css";

export default function MessageBubble({
  message,
  onReply,
  conversation,
  onReaction,
}) {
  const isMobile = useMediaQuery("(max-width:768px)");

  const bubbleRef = useRef(null);

  const [showActions, setShowActions] = useState(false);

  const isMe = message.senderId === "me";

  const isFirst = message.isFirstOfGroup;
  const isLast = message.isLastOfGroup;

  useEffect(() => {
    if (!isMobile) return;

    function handleOutsideClick(e) {
      if (bubbleRef.current && !bubbleRef.current.contains(e.target)) {
        setShowActions(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);

    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isMobile]);

  const handleBubbleClick = () => {
    if (isMobile) {
      setShowActions((prev) => !prev);
    }
  };
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
        {!isMe && isFirst && (
          <div className={styles.header}>
            <span className={styles.sender}>{message.sender}</span>
          </div>
        )}

        <div
          ref={bubbleRef}
          className={`
            ${styles.bubble}
            ${styles[isMe ? "meBubble" : "otherBubble"]}
            ${isFirst ? styles.first : ""}
            ${isLast ? styles.last : ""}
            ${!isFirst && !isLast ? styles.middle : ""}
          `}
          onClick={handleBubbleClick}
          onMouseEnter={() => {
            if (!isMobile) setShowActions(true);
          }}
          onMouseLeave={() => {
            if (!isMobile) setShowActions(false);
          }}
        >
          <MessageActions
            message={message}
            visible={showActions}
            onReply={onReply}
            onReaction={onReaction}
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
              <span className={styles.spacer} />
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
          {message.reactions?.map((reaction) => (
            <button
              key={reaction.emoji}
              className={styles.reaction}
              onClick={() => onReaction(message.id, reaction.emoji)}
            >
              <span>{reaction.emoji}</span>
              <span>{reaction.users.length}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
