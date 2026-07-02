import Button from "../../../../../../components/ui/Button/Button";
import SettingsCard from "../../../../../../components/ui/SettingsCard/SettingsCard";
import AvatarPreview from "./AvatarPreview";
import styles from "./AvatarCard.module.css";
import { useSettings } from "../../../../context/SettingsContext";

export default function AvatarCard() {
  const { settings } = useSettings();
  const profile = settings.profile;
  return (
    <SettingsCard
      title="Profile Photo"
      description="Upload a profile picture that will be visible across your workspace."
    >
      <div className={styles.container}>
        <AvatarPreview image={profile.avatar} name={profile.name} />
        <div className={styles.info}>
          <h4>{profile.name}</h4>
          <span>{profile.email}</span>
          <div className={styles.actions}>
            <Button>Upload Photo</Button>
            <Button variant="secondary">Remove</Button>
          </div>
          <p className={styles.hint}>PNG, JPG or WebP. Maximum size 5 MB.</p>
        </div>
      </div>
    </SettingsCard>
  );
}
