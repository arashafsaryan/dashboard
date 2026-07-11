/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import { chatService } from "../services/chatService";

export function useMessages(conversationId) {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!conversationId) return;

    setIsLoading(true);

    const timer = setTimeout(async () => {
      const data = await chatService.getMessages(conversationId);

      setMessages(data);

      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [conversationId]);

  return {
    messages,
    setMessages,
    isLoading,
  };
}