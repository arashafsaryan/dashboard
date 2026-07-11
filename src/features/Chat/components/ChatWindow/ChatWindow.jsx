import { useEffect, useRef } from "react";
import MessageBubble from "../MessageBubble/MessageBubble";
import styles from "./ChatWindow.module.css";

export default function ChatWindow({ messages, isLoading, onReply }) {
  const bottomRef = useRef(null);

  const windowRef = useRef(null);

  // const isNearBottom = () => {
  //   const container = windowRef.current;
  //   if (!container) return true;
  //   return (
  //     container.scrollHeight - container.scrollTop - container.clientHeight <
  //     120
  //   );
  // };
  useEffect(() => {
    const container = windowRef.current;

    if (!container) return;

    const distance =
      container.scrollHeight - container.scrollTop - container.clientHeight;

    if (distance < 150) {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);
  if (isLoading) {
    return <div className={styles.window}>{/* Skeleton */}</div>;
  }

  return (
    <div ref={windowRef} className={styles.window}>
      <div className={styles.spacer} />

      <div className={styles.messages}>
        {messages.map((message) => (
          <MessageBubble key={message.id} message={message} onReply={onReply} />
        ))}

        <div ref={bottomRef} />
      </div>
    </div>
  );
}
