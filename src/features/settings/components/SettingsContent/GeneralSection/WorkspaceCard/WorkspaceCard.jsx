import SettingsCard from "../../../../../../components/ui/SettingsCard/SettingsCard";
import SettingRow from "../../../../../../components/ui/SettingRow/SettingRow";
import Select from "../../../../../../components/ui/Select/Select";
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
        <Select
          value={workspace.landingPage}
          options={[
            { value: "dashboard", label: "Dashboard" },
            { value: "analytics", label: "Analytics" },
            { value: "projects", label: "Projects" },
          ]}
          onChange={(e) =>
            updateField("workspace", "landingPage", e.target.value)
          }
        />
      </SettingRow>
      <SettingRow
        title="Dashboard View"
        description="Choose your preferred dashboard layout."
      >
        <Select
          value={workspace.dashboardView}
          options={[
            { value: "overview", label: "Overview" },
            { value: "compact", label: "Compact" },
            { value: "detailed", label: "Detailed" },
          ]}
          onChange={(e) =>
            updateField("workspace", "dashboardView", e.target.value)
          }
        />
      </SettingRow>
    </SettingsCard>
  );
}
