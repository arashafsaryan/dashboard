import { useState } from "react";

import EmojiPicker from "emoji-picker-react";

import { Smile } from "lucide-react";

import styles from "./EmojiPickerButton.module.css";

export default function EmojiPickerButton({ onSelect }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.button}
        onClick={() => setOpen((prev) => !prev)}
      >
        <Smile size={20} />
      </button>

      {open && (
        <div className={styles.popup}>
          <EmojiPicker
            lazyLoadEmojis
            theme="auto"
            skinTonesDisabled
            previewConfig={{
              showPreview: false,
            }}
            onEmojiClick={(emoji) => {
              onSelect(emoji.emoji);

              setOpen(false);
            }}
          />
        </div>
      )}
    </div>
  );
}
