import { useRef } from "react";

import { Paperclip } from "lucide-react";

import styles from "./AttachmentButton.module.css";

export default function AttachmentButton({ onSelect }) {
  const inputRef = useRef(null);

  const handleChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    onSelect(file);

    e.target.value = "";
  };

  return (
    <>
      <button
        className={styles.button}
        onClick={() => inputRef.current?.click()}
      >
        <Paperclip size={20} />
      </button>
      <input
        ref={inputRef}
        type="file"
        hidden
        accept="image/*,.pdf,.doc,.docx,.zip"
        onChange={handleChange}
      />
    </>
  );
}
