import Card from "../../../../components/ui/Card/Card";
import SectionHeader from "../../../../components/ui/SectionHeader/SectionHeader";
import { useTeam } from "../../../../hooks/useTeam";
import TeamMember from "../TeamMember/TeamMember";
import styles from "./TeamSection.module.css";
import TeamSkeleton from "./TeamSkeleton";

export default function TeamSection() {
  const { data: members = [], isLoading, error } = useTeam();

  if (isLoading) {
    return <TeamSkeleton />;
  }
  if (error) {
    return (
      <Card>
        <SectionHeader
          title="Team Performance"
          subtitle="Monthly productivity overview"
          action={<span className={styles.updated}>Updated 2h ago</span>}
        />
      </Card>
    );
  }
  return (
    <Card>
      <SectionHeader
        title="Team Performance"
        subtitle="Monthly productivity overview"
      />

      <div className={styles.list}>
        {members.map((member) => (
          <TeamMember key={member.id} {...member} />
        ))}
      </div>
    </Card>
  );
}
