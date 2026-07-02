import styles from "./Select.module.css";
import { FiChevronDown } from "react-icons/fi";

export default function Select({
  value,
  onChange,
  options,
  disabled = false,
  error = false,
}) {
  return (
    <div
      className={`${styles.wrapper} ${
        error ? styles.error : ""
      }`}
    >
      <select
        className={styles.select}
        value={value}
        onChange={onChange}
        disabled={disabled}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>

      <FiChevronDown className={styles.icon} />
    </div>
  );
}