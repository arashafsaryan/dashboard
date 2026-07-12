import { useState } from "react";

import styles from "./ChatPage.module.css";

import ChatSidebar from "./components/ChatSidebar/ChatSidebar";
import ChatHeader from "./components/ChatHeader/ChatHeader";
import ChatWindow from "./components/ChatWindow/ChatWindow";
import MessageInput from "./components/MessageInput/MessageInput";
import EmptyChat from "./components/EmptyChat/EmptyChat";

import { useConversations } from "./hooks/useConversations";
import { useMessages } from "./hooks/useMessages";

export default function ChatPage() {
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [replyMessage, setReplyMessage] = useState(null);

  const {
    conversations,
    setConversations,
    isLoading: conversationsLoading,
  } = useConversations();

  const {
    messages,
    setMessages,
    isLoading: messagesLoading,
  } = useMessages(selectedConversation);

  const activeConversation = conversations.find(
    (item) => item.id === selectedConversation,
  );

  return (
    <div className={styles.page}>
      <ChatSidebar
        conversations={conversations}
        isLoading={conversationsLoading}
        selectedConversation={selectedConversation}
        onSelectConversation={setSelectedConversation}
      />
      <section className={styles.chat}>
        {selectedConversation ? (
          <>
            <ChatHeader conversation={activeConversation} />
            <ChatWindow
              messages={messages}
              onReply={setReplyMessage}
              conversation={activeConversation}
              isLoading={messagesLoading}
            />
            <MessageInput
              conversationId={selectedConversation}
              replyMessage={replyMessage}
              onCancelReply={() => setReplyMessage(null)}
              onSendMessage={(text) => {
                const newMessage = {
                  id: Date.now(),
                  sender: "me",
                  senderId: "me",
                  type: "text",
                  text,
                  replyTo: replyMessage,
                  time: new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  }),
                  status: "sent",
                };

                setMessages((prev) => [...prev, newMessage]);
                setReplyMessage(null);
                setConversations((prev) => {
                  const updated = prev.map((item) =>
                    item.id === selectedConversation
                      ? {
                          ...item,
                          lastMessage: text,
                          lastTime: newMessage.time,
                        }
                      : item,
                  );

                  updated.sort((a, b) => {
                    if (a.id === selectedConversation) return -1;
                    if (b.id === selectedConversation) return 1;
                    return 0;
                  });

                  return updated;
                });
              }}
            />
          </>
        ) : (
          <EmptyChat />
        )}
      </section>
    </div>
  );
}
