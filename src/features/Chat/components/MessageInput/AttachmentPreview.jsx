/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";

import { FileText, Image as ImageIcon, X } from "lucide-react";

import styles from "./AttachmentPreview.module.css";

export default function AttachmentPreview({ file, onRemove }) {
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (!file) return;

    if (!file.type.startsWith("image")) {
      setPreview(null);
      return;
    }

    const url = URL.createObjectURL(file);

    setPreview(url);

    return () => URL.revokeObjectURL(url);
  }, [file]);

  if (!file) return null;

  const isImage = file.type.startsWith("image");

  return (
    <div className={styles.preview}>
      <div className={styles.left}>
        {isImage ? (
          <img src={preview} alt="" className={styles.thumbnail} />
        ) : (
          <div className={styles.icon}>
            <FileText size={18} />
          </div>
        )}

        <div className={styles.info}>
          <span className={styles.name}>{file.name}</span>

          <span className={styles.size}>
            {(file.size / 1024).toFixed(1)} KB
          </span>
        </div>
      </div>

      <button className={styles.remove} onClick={onRemove}>
        <X size={16} />
      </button>
    </div>
  );
}
