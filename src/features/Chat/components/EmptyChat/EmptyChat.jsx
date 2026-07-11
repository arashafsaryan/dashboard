export default function EmptyChat() {
  return (
    <div
      style={{
        flex: 1,
        display: "grid",
        placeItems: "center",
        color: "var(--muted)",
      }}
    >
      Select a conversation to start chatting.
    </div>
  );
}
