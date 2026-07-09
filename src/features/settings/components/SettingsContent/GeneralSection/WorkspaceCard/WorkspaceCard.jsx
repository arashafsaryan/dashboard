import SettingsCard from "../../../../../../components/ui/SettingsCard/SettingsCard";
import SettingRow from "../../../../../../components/ui/SettingRow/SettingRow";
import FilterDropdown from "../../../../../../components/ui/FilterDropdown/FilterDropdown";

import { useSettings } from "../../../../context/SettingsContext";

export default function WorkspaceCard() {
  const { settings, updateField } = useSettings();

  const workspace = settings.workspace;

  return (
    <SettingsCard
      title="Workspace"
      description="Customize your workspace defaults and startup experience."
    >
      <SettingRow
        title="Default Landing Page"
        description="Choose the page to open after signing in."
      >
        <FilterDropdown
          value={workspace.landingPage}
          options={["Dashboard", "Analytics", "Projects"]}
          onChange={(value) =>
            updateField("workspace", "landingPage", value.toLowerCase())
          }
        />
      </SettingRow>

      <SettingRow
        title="Dashboard View"
        description="Choose your preferred dashboard layout."
      >
        <FilterDropdown
          value={workspace.dashboardView}
          options={["Overview", "Compact", "Detailed"]}
          onChange={(value) =>
            updateField("workspace", "dashboardView", value.toLowerCase())
          }
        />
      </SettingRow>
    </SettingsCard>
  );
}
