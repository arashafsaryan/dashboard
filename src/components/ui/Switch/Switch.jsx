import styles from "./Switch.module.css";

export default function Switch({
  checked,
  onChange,
  disabled = false,
}) {
  return (
    <button
      type="button"
      className={`${styles.switch} ${
        checked ? styles.checked : ""
      }`}
      onClick={() => !disabled && onChange(!checked)}
      disabled={disabled}
      role="switch"
      aria-checked={checked}
    >
      <span className={styles.thumb} />
    </button>
  );
}