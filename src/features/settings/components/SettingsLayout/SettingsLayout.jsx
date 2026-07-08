import { SettingsProvider } from "../../context/SettingsContext";
import SettingsContent from "../SettingsContent/SettingsContent";
import SettingsHeader from "../SettingsHeader/SettingsHeader";
import SettingsNavigation from "../SettingsNavigation/SettingsNavigation";
import styles from "./SettingsLayout.module.css";
import FloatingSaveBar from "../FloatingSaveBar/FloatingSaveBar";
import { SettingsMobileNavigationProvider } from "../../context/SettingsMobileNavigationContext";
import MobileSectionsSheet from "../MobileSectionsSheet/MobileSectionsSheet";

export default function SettingsLayout() {
  return (
    <>
      <SettingsProvider>
        <SettingsMobileNavigationProvider>
          <SettingsHeader />
          <div className={styles.layout}>
            <aside>
              <SettingsNavigation />
            </aside>

            <section className={styles.content}>
              <SettingsContent />
            </section>
          </div>
          <MobileSectionsSheet />
          <FloatingSaveBar />
        </SettingsMobileNavigationProvider>
      </SettingsProvider>
    </>
  );
}
