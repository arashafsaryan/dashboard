import styles from "./SearchBar.module.css";
import { useCommandPalette } from "../../../context/CommandPaletteContext";
import { FiSearch } from "react-icons/fi";

export default function SearchBar() {
  const { openPalette } = useCommandPalette();

  return (
    <div className={styles.wrapper}>
      <button className={styles.search} onClick={openPalette}>
        <div className={styles.left}>
          <FiSearch />
          <span>Search pages...</span>
        </div>
        <kbd>Ctrl + K</kbd>
      </button>
    </div>
  );
}
