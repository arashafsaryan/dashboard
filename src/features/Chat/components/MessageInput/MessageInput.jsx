import { useEffect, useRef, useState } from "react";
import { SendHorizontal, Reply, X } from "lucide-react";

import styles from "./MessageInput.module.css";

import EmojiPickerButton from "./EmojiPickerButton";
import AttachmentButton from "./AttachmentButton";
import AttachmentPreview from "./AttachmentPreview";

import VoiceButton from "./VoiceRecorder/VoiceButton";
import RecordingBar from "./VoiceRecorder/RecordingBar";

export default function MessageInput({
  onSendMessage,
  conversationId,
  replyMessage,
  onCancelReply,
}) {
  const [message, setMessage] = useState("");
  const [attachment, setAttachment] = useState(null);

  const [isRecording, setIsRecording] = useState(false);
  const [seconds, setSeconds] = useState(0);

  const textareaRef = useRef(null);

  useEffect(() => {
    if (!conversationId) return;
    textareaRef.current?.focus();
  }, [conversationId]);

  useEffect(() => {
    if (!isRecording) return;

    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRecording]);

  const resizeTextarea = () => {
    if (!textareaRef.current) return;

    // تنظیم ارتفاع روی 0 قبل از محاسبه مجدد برای کوچک شدن صحیح هنگام پاک کردن متن
    textareaRef.current.style.height = "0px";
    textareaRef.current.style.height =
      Math.min(textareaRef.current.scrollHeight, 140) + "px";
  };

  const resetTextarea = () => {
    if (!textareaRef.current) return;
    textareaRef.current.style.height = "28px";
  };

  const sendMessage = () => {
    if (!message.trim()) return;
    onSendMessage(message.trim());
    setMessage("");
    resetTextarea();
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
    resizeTextarea();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      <AttachmentPreview
        file={attachment}
        onRemove={() => setAttachment(null)}
      />

      <div className={styles.wrapper}>
        {isRecording ? (
          <RecordingBar
            seconds={seconds}
            onCancel={() => {
              setIsRecording(false);
              setSeconds(0);
            }}
            onSend={() => {
              console.log("Voice Sent");
              setIsRecording(false);
              setSeconds(0);
            }}
          />
        ) : (
          <>
            {replyMessage && (
              <div className={styles.replySection}>
                <div className={styles.replyBox}>
                  <div className={styles.replyInfo}>
                    <div className={styles.replyIconWrapper}>
                      <Reply size={16} />
                    </div>
                    <div className={styles.replyContent}>
                      <strong>
                        {replyMessage.senderId === "me"
                          ? "You"
                          : replyMessage.sender}
                      </strong>
                      <p>{replyMessage.text}</p>
                    </div>
                  </div>
                  <button className={styles.replyClose} onClick={onCancelReply}>
                    <X size={18} />
                  </button>
                </div>
              </div>
            )}

            <div className={styles.inputRow}>
              <EmojiPickerButton
                onSelect={(emoji) => setMessage((prev) => prev + emoji)}
              />

              <AttachmentButton onSelect={(file) => setAttachment(file)} />

              <div className={styles.inputWrapper}>
                <textarea
                  ref={textareaRef}
                  rows={1}
                  value={message}
                  placeholder="Type a message..."
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                />

                {message.trim() ? (
                  <button className={styles.send} onClick={sendMessage}>
                    <SendHorizontal size={20} />
                  </button>
                ) : (
                  <VoiceButton
                    onClick={() => {
                      setIsRecording(true);
                      setSeconds(0);
                    }}
                  />
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
