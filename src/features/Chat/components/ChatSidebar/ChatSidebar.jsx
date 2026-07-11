import { memo, useEffect, useRef } from "react";
import styles from "./ChatSidebar.module.css";
import { Search } from "lucide-react";

export default memo(function ChatSidebar({
  conversations,
  isLoading,
  selectedConversation,
  onSelectConversation,
}) {
  const listRef = useRef(null);
  useEffect(() => {
    if (!selectedConversation) return;

    const activeItem = listRef.current?.querySelector(`.${styles.active}`);

    activeItem?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }, [selectedConversation, conversations]);

  return (
    <aside className={styles.sidebar}>
      <div className={styles.header}>
        <h2>Messages</h2>

        <div className={styles.search}>
          <Search size={18} />

          <input placeholder="Search conversations..." type="text" />
        </div>
      </div>

      <div ref={listRef} className={styles.list}>
        {isLoading &&
          Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className={styles.skeleton} />
          ))}

        {!isLoading &&
          conversations.map((conversation) => (
            <button
              key={conversation.id}
              onClick={() => onSelectConversation(conversation.id)}
              className={`${styles.item} ${
                selectedConversation === conversation.id ? styles.active : ""
              }`}
            >
              <div className={styles.avatarWrapper}>
                <img
                  src={conversation.avatar}
                  alt={conversation.name}
                  className={styles.avatar}
                />

                {conversation.online && <span className={styles.online} />}
              </div>

              <div className={styles.info}>
                <div className={styles.top}>
                  <h4>{conversation.name}</h4>

                  <span>{conversation.lastTime}</span>
                </div>

                <div className={styles.bottom}>
                  <p>{conversation.lastMessage}</p>

                  {!!conversation.unread && (
                    <span className={styles.badge}>{conversation.unread}</span>
                  )}
                </div>
              </div>
            </button>
          ))}
      </div>
    </aside>
  );
});
