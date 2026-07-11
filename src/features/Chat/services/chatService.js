import { conversations } from "../data/conversations";
import { messages } from "../data/messages";

export const chatService = {
  getConversations() {
    return Promise.resolve(conversations);
  },

  getMessages(conversationId) {
    return Promise.resolve(messages[conversationId] || []);
  },
};
