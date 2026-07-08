import { FiMenu } from "react-icons/fi";
import { useSettingsMobileNavigation } from "../../context/SettingsMobileNavigationContext";
import styles from "./MobileSectionsButton.module.css";

export default function MobileSectionsButton() {
  const { openNavigation } = useSettingsMobileNavigation();

  return (
    <button className={styles.button} onClick={openNavigation} type="button">
      <FiMenu size={18} />
      <span>Sections</span>
    </button>
  );
}
