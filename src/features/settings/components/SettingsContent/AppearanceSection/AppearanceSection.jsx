import SettingsCard from "../../../../../components/ui/SettingsCard/SettingsCard";
import SettingRow from "../../../../../components/ui/SettingRow/SettingRow";
import Select from "../../../../../components/ui/Select/Select";
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
        <Select
          value={appearance.theme}
          onChange={(e) => updateField("appearance", "theme", e.target.value)}
          options={[
            {
              value: "light",
              label: "Light",
            },
            {
              value: "dark",
              label: "Dark",
            },
            {
              value: "system",
              label: "System",
            },
          ]}
        />
      </SettingRow>
      <SettingRow
        title="Interface Density"
        description="Adjust spacing throughout the application."
      >
        <Select
          value={appearance.density}
          onChange={(e) => updateField("appearance", "density", e.target.value)}
          options={[
            {
              value: "comfortable",
              label: "Comfortable",
            },
            {
              value: "default",
              label: "Default",
            },
            {
              value: "compact",
              label: "Compact",
            },
          ]}
        />
      </SettingRow>
      <SettingRow
        title="Sidebar Mode"
        description="Choose the default sidebar behavior."
      >
        <Select
          value={appearance.sidebarMode}
          onChange={(e) =>
            updateField("appearance", "sidebarMode", e.target.value)
          }
          options={[
            {
              value: "expanded",
              label: "Expanded",
            },
            {
              value: "collapsed",
              label: "Collapsed",
            },
            {
              value: "auto",
              label: "Auto",
            },
          ]}
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
