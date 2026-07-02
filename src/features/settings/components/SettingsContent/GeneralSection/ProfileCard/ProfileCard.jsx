import Input from "../../../../../../components/ui/Input/Input";
import Textarea from "../../../../../../components/ui/Textarea/Textarea";
import SettingRow from "../../../../../../components/ui/SettingRow/SettingRow";
import SettingsCard from "../../../../../../components/ui/SettingsCard/SettingsCard";
import { useSettings } from "../../../../context/SettingsContext";
export default function ProfileCard() {
  const { settings, updateField } = useSettings();

  const profile = settings.profile;

  return (
    <SettingsCard
      title="Profile"
      description="Manage your public profile information."
    >
      <SettingRow title="Name" description="Your public display name.">
        <Input
          value={profile.name}
          onChange={(e) => updateField("profile", "name", e.target.value)}
        />
      </SettingRow>
      <SettingRow title="Email" description="Used for login and notifications.">
        <Input
          value={profile.email}
          onChange={(e) => updateField("profile", "email", e.target.value)}
        />
      </SettingRow>
      <SettingRow title="Username" description="Your unique username.">
        <Input
          value={profile.username}
          onChange={(e) => updateField("profile", "username", e.target.value)}
        />
      </SettingRow>
      <SettingRow
        title="Bio"
        description="Tell people a little about yourself."
      >
        <Textarea
          rows={4}
          value={profile.bio}
          onChange={(e) => updateField("profile", "bio", e.target.value)}
        />
      </SettingRow>
    </SettingsCard>
  );
}
