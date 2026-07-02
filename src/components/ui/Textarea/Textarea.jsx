import styles from "./Textarea.module.css";

export default function Textarea({
  value,
  onChange,
  placeholder = "",
  rows = 4,
  disabled = false,
  error = false,
}) {
  return (
    <textarea
      className={`${styles.textarea} ${
        error ? styles.error : ""
      }`}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      disabled={disabled}
    />
  );
}