import SettingRow from "../../../../../../components/ui/SettingRow/SettingRow";
import Select from "../../../../../../components/ui/Select/Select";
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
        <Select
          value={preferences.language}
          options={[
            { value: "en", label: "English" },
            { value: "fa", label: "Persian" },
          ]}
          onChange={(e) =>
            updateField("preferences", "language", e.target.value)
          }
        />
      </SettingRow>
      <SettingRow
        title="Timezone"
        description="Used for scheduling and timestamps."
      >
        <Select
          value={preferences.timezone}
          options={[
            { value: "tehran", label: "Asia / Tehran" },
            { value: "utc", label: "UTC" },
            { value: "london", label: "Europe / London" },
            { value: "newyork", label: "America / New York" },
          ]}
          onChange={(e) =>
            updateField("preferences", "timezone", e.target.value)
          }
        />
      </SettingRow>
      <SettingRow
        title="Date Format"
        description="Preferred format for displaying dates."
      >
        <Select
          value={preferences.dateFormat}
          options={[
            {
              value: "dd-mm-yyyy",
              label: "DD/MM/YYYY",
            },
            {
              value: "mm-dd-yyyy",
              label: "MM/DD/YYYY",
            },
            {
              value: "yyyy-mm-dd",
              label: "YYYY/MM/DD",
            },
          ]}
          onChange={(e) =>
            updateField("preferences", "dateFormat", e.target.value)
          }
        />
      </SettingRow>
      <SettingRow
        title="Week Starts On"
        description="Choose the first day of your week."
      >
        <Select
          value={preferences.weekStart}
          options={[
            {
              value: "monday",
              label: "Monday",
            },
            {
              value: "sunday",
              label: "Sunday",
            },
          ]}
          onChange={(e) =>
            updateField("preferences", "weekStart", e.target.value)
          }
        />
      </SettingRow>
    </SettingsCard>
  );
}
