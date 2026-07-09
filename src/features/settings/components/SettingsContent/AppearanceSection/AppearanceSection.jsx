import SettingsCard from "../../../../../components/ui/SettingsCard/SettingsCard";
import SettingRow from "../../../../../components/ui/SettingRow/SettingRow";
import FilterDropdown from "../../../../../components/ui/FilterDropdown/FilterDropdown";
import Switch from "../../../../../components/ui/Switch/Switch";

import { useSettings } from "../../../context/SettingsContext";

export default function AppearanceCard() {
  const { settings, updateField } = useSettings();

  const appearance = settings.appearance;

  return (
    <SettingsCard
      title="Appearance"
      description="Customize how your workspace looks and feels."
    >
      <SettingRow
        title="Theme"
        description="Choose your preferred application theme."
      >
        <FilterDropdown
          value={appearance.theme}
          onChange={(value) =>
            updateField("appearance", "theme", value.toLowerCase())
          }
          options={["Light", "Dark", "System"]}
        />
      </SettingRow>
      <SettingRow
        title="Interface Density"
        description="Adjust spacing throughout the application."
      >
        <FilterDropdown
          value={appearance.density}
          onChange={(value) =>
            updateField("appearance", "density", value.toLowerCase())
          }
          options={["Comfortable", "Default", "Compact"]}
        />
      </SettingRow>
      <SettingRow
        title="Sidebar Mode"
        description="Choose the default sidebar behavior."
      >
        <FilterDropdown
          value={appearance.sidebarMode}
          onChange={(value) =>
            updateField("appearance", "sidebarMode", value.toLowerCase())
          }
          options={["Expanded", "Collapsed", "Auto"]}
        />
      </SettingRow>
      <SettingRow
        title="Animations"
        description="Enable smooth interface animations."
      >
        <Switch
          checked={appearance.animations}
          onChange={(checked) =>
            updateField("appearance", "animations", checked)
          }
        />
      </SettingRow>
      <SettingRow
        title="Reduced Motion"
        description="Reduce interface motion for accessibility."
      >
        <Switch
          checked={appearance.reducedMotion}
          onChange={(checked) =>
            updateField("appearance", "reducedMotion", checked)
          }
        />
      </SettingRow>
    </SettingsCard>
  );
}
