import { forwardRef, useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import styles from "./Input.module.css";

const Input = forwardRef(
  (
    {
      className = "",
      placeholder = "",
      type = "text",
      disabled = false,
      readOnly = false,
      autoComplete = "off",
      error = false,
      ...props
    },
    ref,
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === "password";

    return (
      <div className={styles.wrapper}>
        <input
          ref={ref}
          className={`${styles.input} ${
            error ? styles.error : ""
          } ${className}`}
          type={isPassword ? (showPassword ? "text" : "password") : type}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          autoComplete={autoComplete}
          {...props}
        />

        {isPassword && (
          <button
            type="button"
            tabIndex={-1}
            aria-label={showPassword ? "Hide password" : "Show password"}
            onMouseDown={(e) => e.preventDefault()}
            className={styles.eyeButton}
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
