import styles from "./GeneralSection.module.css";

import ProfileCard from "./ProfileCard/ProfileCard";
import PreferencesCard from "./PreferencesCard/PreferencesCard";
import WorkspaceCard from "./WorkspaceCard/WorkspaceCard";
import AvatarCard from "./AvatarCard/AvatarCard";

export default function GeneralSection() {
  return (
    <div className={styles.container}>
      <AvatarCard />
      <ProfileCard />
      <PreferencesCard />
      <WorkspaceCard />
    </div>
  );
}
