import styles from "./Field.module.css";

export default function Field({
  label,
  required = false,
  error,
  helperText,
  children,
}) {
  return (
    <div className={styles.field}>
      {label && (
        <label className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      {children}
      {error ? (
        <p className={styles.error}>{error}</p>
      ) : helperText ? (
        <p className={styles.helper}>{helperText}</p>
      ) : null}
    </div>
  );
}
