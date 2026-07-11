import { useEffect, useState } from "react";
import { chatService } from "../services/chatService";

export function useConversations() {
  const [conversations, setConversations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(async () => {
      const data = await chatService.getConversations();

      setConversations(data);

      setIsLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  return {
    conversations,
    setConversations,
    isLoading,
  };
}