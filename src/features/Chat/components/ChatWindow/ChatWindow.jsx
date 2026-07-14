import { useEffect, useRef } from "react";
import MessageBubble from "../MessageBubble/MessageBubble";
import styles from "./ChatWindow.module.css";

export default function ChatWindow({
  messages,
  isLoading,
  onReply,
  conversation,
  onReaction,
}) {
  const bottomRef = useRef(null);
  const windowRef = useRef(null);
  useEffect(() => {
    const container = windowRef.current;
    if (!container) return;

    const distance =
      container.scrollHeight - container.scrollTop - container.clientHeight;

    // اگر کاربر نزدیک به انتهای صفحه است یا پیام جدیدی آمده، نرم اسکرول می‌شود
    if (distance < 200) {
      bottomRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [messages]);

  if (isLoading) {
    return (
      <div className={styles.window}>
        <div className={styles.spacer} />
        <div className={styles.messages}>
          {/* نمایش حباب‌های اسکلتون برای شبیه‌سازی واقعی چت */}
          <div className={`${styles.skeleton} ${styles.left}`} />
          <div
            className={`${styles.skeleton} ${styles.left}`}
            style={{ width: "180px" }}
          />
          <div className={`${styles.skeleton} ${styles.right}`} />
          <div
            className={`${styles.skeleton} ${styles.left}`}
            style={{ width: "240px" }}
          />
          <div
            className={`${styles.skeleton} ${styles.right}`}
            style={{ width: "140px" }}
          />
        </div>
      </div>
    );
  }

  const groupedMessages = messages.map((message, index) => {
    const previous = messages[index - 1];

    return {
      ...message,

      isFirstOfGroup: !previous || previous.senderId !== message.senderId,

      isLastOfGroup:
        !messages[index + 1] ||
        messages[index + 1].senderId !== message.senderId,
    };
  });

  return (
    <div ref={windowRef} className={styles.window}>
      <div className={styles.spacer} />

      <div className={styles.messages}>
        {groupedMessages.map((message) => (
          <MessageBubble
            key={message.id}
            message={message}
            onReply={onReply}
            onReaction={onReaction}
            conversation={conversation}
          />
        ))}

        {/* لنگرگاه پایین صفحه برای اسکرول دقیق‌تر */}
        <div ref={bottomRef} className={styles.bottomAnchor} />
      </div>
    </div>
  );
}
