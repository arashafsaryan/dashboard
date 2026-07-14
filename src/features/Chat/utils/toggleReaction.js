export function toggleReaction(messages, messageId, emoji = "❤️") {
  return messages.map((message) => {
    if (message.id !== messageId) return message;

    const reactions = [...(message.reactions || [])];

    const reactionIndex = reactions.findIndex(
      (reaction) => reaction.emoji === emoji,
    );

    if (reactionIndex === -1) {
      reactions.push({
        emoji,
        users: ["me"],
      });
    } else {
      const users = [...reactions[reactionIndex].users];

      if (users.includes("me")) {
        reactions[reactionIndex].users = users.filter((user) => user !== "me");

        if (reactions[reactionIndex].users.length === 0) {
          reactions.splice(reactionIndex, 1);
        }
      } else {
        reactions[reactionIndex].users.push("me");
      }
    }

    return {
      ...message,
      reactions,
    };
  });
}
