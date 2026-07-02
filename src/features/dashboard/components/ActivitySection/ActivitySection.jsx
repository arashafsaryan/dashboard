import Card from "../../../../components/ui/Card/Card";
import SectionHeader from "../../../../components/ui/SectionHeader/SectionHeader";
import { useActivity } from "../../../../hooks/useActivity";
import ActivityItem from "../ActivityItem/ActivityItem";
import styles from "./ActivitySection.module.css";
import ActivitySkeleton from "./ActivitySkeleton";

export default function ActivitySection() {
  const { data: activities = [], isLoading, error } = useActivity();

  if (isLoading) {
    return <ActivitySkeleton />;
  }
  if (error) {
    return (
      <Card>
        <SectionHeader
          title="Recent Activity"
          subtitle="Failed to load activities"
        />
      </Card>
    );
  }
  return (
    <Card>
      <SectionHeader
        title="Recent Activity"
        subtitle="Latest actions across your workspace"
      />

      <div className={styles.list}>
        {activities.map((item) => (
          <ActivityItem key={item.id} {...item} />
        ))}
      </div>
    </Card>
  );
}
