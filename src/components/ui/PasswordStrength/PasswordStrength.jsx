import { CheckCircle2, Circle } from "lucide-react";

import Badge from "../Badge/Badge";
import Progress from "../Progress/Progress";

import styles from "./PasswordStrength.module.css";

export default function PasswordStrength({ password = "" }) {
  const rules = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    number: /\d/.test(password),
    special: /[^A-Za-z0-9]/.test(password),
  };

  const score = Object.values(rules).filter(Boolean).length;

  const levels = [
    {
      label: "Very Weak",
      color: "#ef4444",
      variant: "danger",
    },
    {
      label: "Weak",
      color: "#f97316",
      variant: "warning",
    },
    {
      label: "Fair",
      color: "#eab308",
      variant: "warning",
    },
    {
      label: "Good",
      color: "#3b82f6",
      variant: "info",
    },
    {
      label: "Strong",
      color: "#22c55e",
      variant: "success",
    },
  ];

  const level = levels[score];

  const items = [
    {
      key: "length",
      label: "At least 8 characters",
    },
    {
      key: "uppercase",
      label: "One uppercase letter",
    },
    {
      key: "number",
      label: "One number",
    },
    {
      key: "special",
      label: "One special character",
    },
  ];

  return (
    <div className={styles.container}>
      <Progress value={score} max={4} color={level.color} />

      <Badge variant={level.variant}>{level.label}</Badge>

      <ul className={styles.rules}>
        {items.map((item) => {
          const valid = rules[item.key];

          return (
            <li
              key={item.key}
              className={valid ? styles.valid : styles.invalid}
            >
              {valid ? <CheckCircle2 size={16} /> : <Circle size={16} />}

              <span>{item.label}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
