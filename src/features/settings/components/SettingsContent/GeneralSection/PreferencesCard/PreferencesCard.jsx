import SettingRow from "../../../../../../components/ui/SettingRow/SettingRow";
import FilterDropdown from "../../../../../../components/ui/FilterDropdown/FilterDropdown";
import SettingsCard from "../../../../../../components/ui/SettingsCard/SettingsCard";

import { useSettings } from "../../../../context/SettingsContext";

export default function PreferencesCard() {
  const { settings, updateField } = useSettings();

  const preferences = settings.preferences;

  return (
    <SettingsCard
      title="Regional Preferences"
      description="Customize language, timezone and regional formatting."
    >
      <SettingRow
        title="Language"
        description="Choose your preferred language."
      >
        <FilterDropdown
          value={preferences.language}
          options={["English", "Persian"]}
          onChange={(value) =>
            updateField(
              "preferences",
              "language",
              value.toLowerCase() === "english" ? "en" : "fa"
            )
          }
        />
      </SettingRow>

      <SettingRow
        title="Timezone"
        description="Used for scheduling and timestamps."
      >
        <FilterDropdown
          value={preferences.timezone}
          options={[
            "Asia / Tehran",
            "UTC",
            "Europe / London",
            "America / New York",
          ]}
          onChange={(value) => {
            const map = {
              "Asia / Tehran": "tehran",
              UTC: "utc",
              "Europe / London": "london",
              "America / New York": "newyork",
            };

            updateField(
              "preferences",
              "timezone",
              map[value]
            );
          }}
        />
      </SettingRow>

      <SettingRow
        title="Date Format"
        description="Preferred format for displaying dates."
      >
        <FilterDropdown
          value={preferences.dateFormat}
          options={[
            "DD/MM/YYYY",
            "MM/DD/YYYY",
            "YYYY/MM/DD",
          ]}
          onChange={(value) => {
            const map = {
              "DD/MM/YYYY": "dd-mm-yyyy",
              "MM/DD/YYYY": "mm-dd-yyyy",
              "YYYY/MM/DD": "yyyy-mm-dd",
            };

            updateField(
              "preferences",
              "dateFormat",
              map[value]
            );
          }}
        />
      </SettingRow>

      <SettingRow
        title="Week Starts On"
        description="Choose the first day of your week."
      >
        <FilterDropdown
          value={preferences.weekStart}
          options={["Monday", "Sunday"]}
          onChange={(value) =>
            updateField(
              "preferences",
              "weekStart",
              value.toLowerCase()
            )
          }
        />
      </SettingRow>
    </SettingsCard>
  );
}