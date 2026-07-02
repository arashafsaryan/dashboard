import SettingsCard from "../../../../../components/ui/SettingsCard/SettingsCard";
import SettingRow from "../../../../../components/ui/SettingRow/SettingRow";
import Button from "../../../../../components/ui/Button/Button";

export default function DangerZoneSection() {
  return (
    <SettingsCard
      title="Danger Zone"
      description="Permanent actions that cannot be undone."
    >
      <SettingRow
        title="Export Account Data"
        description="Download a complete copy of your account data."
      >
        <Button variant="secondary">Export Data</Button>
      </SettingRow>

      <SettingRow
        title="Delete Account"
        description="Permanently delete your account and all associated data."
      >
        <Button variant="danger">Delete Account</Button>
      </SettingRow>
    </SettingsCard>
  );
}
