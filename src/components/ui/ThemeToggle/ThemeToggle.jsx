import { FiMoon, FiSun } from "react-icons/fi";

import { useTheme } from "../../../context/ThemeContext";

import styles from "./ThemeToggle.module.css";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button className={styles.button} onClick={toggleTheme}>
      {theme === "dark" ? <FiSun /> : <FiMoon />}
    </button>
  );
}
