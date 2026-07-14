/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from "react";
import styles from "./ChatPage.module.css";

import ChatSidebar from "./components/ChatSidebar/ChatSidebar";
import ChatHeader from "./components/ChatHeader/ChatHeader";
import ChatWindow from "./components/ChatWindow/ChatWindow";
import MessageInput from "./components/MessageInput/MessageInput";
import EmptyChat from "./components/EmptyChat/EmptyChat";

import { useConversations } from "./hooks/useConversations";
import { useMessages } from "./hooks/useMessages";
import useMediaQuery from "../../hooks/useMediaQuery";

import { toggleReaction } from "./utils/toggleReaction";

export default function ChatPage() {
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [replyMessage, setReplyMessage] = useState(null);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [mobileView, setMobileView] = useState("list");

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
  useEffect(() => {
    if (!isMobile) {
      setMobileView("chat");
    } else {
      if (!selectedConversation) {
        setMobileView("list");
      }
    }
  }, [isMobile, selectedConversation]);

  const handleReaction = (messageId, emoji) => {
    setMessages((prev) => toggleReaction(prev, messageId, emoji));
  };

  return (
    <div className={styles.page}>
      {(!isMobile || mobileView === "list") && (
        <ChatSidebar
          conversations={conversations}
          isLoading={conversationsLoading}
          selectedConversation={selectedConversation}
          onSelectConversation={(id) => {
            setSelectedConversation(id);
            if (isMobile) {
              setMobileView("chat");
            }
          }}
        />
      )}

      {(!isMobile || mobileView === "chat") && (
        <section className={styles.chat}>
          {selectedConversation ? (
            <>
              <ChatHeader
                conversation={activeConversation}
                isMobile={isMobile}
                onBack={() => {
                  setMobileView("list");
                  setReplyMessage(null);
                }}
              />
              <ChatWindow
                messages={messages}
                onReply={setReplyMessage}
                onReaction={handleReaction}
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
            !isMobile && <EmptyChat />
          )}
        </section>
      )}
    </div>
  );
}
