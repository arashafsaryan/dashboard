import { useEffect, useRef, useState } from "react";

import EmojiPicker from "emoji-picker-react";
import { Smile } from "lucide-react";

import styles from "./EmojiPickerButton.module.css";

export default function EmojiPickerButton({ onSelect }) {
  const [open, setOpen] = useState(false);

  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={wrapperRef} className={styles.wrapper}>
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
