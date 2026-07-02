import Card from "../../../../components/ui/Card/Card";
import SectionHeader from "../../../../components/ui/SectionHeader/SectionHeader";
import InsightItem from "../InsightItem/InsightItem";
import styles from "./AIInsightsSection.module.css";
import { useAIInsights } from "../../../../hooks/useAIInsights";
import AIInsightsSkeleton from "./AIInsightsSkeleton";

export default function AIInsightsSection() {
  const { data: aiInsightsData = [], isLoading, error } = useAIInsights();
  if (isLoading) {
    return <AIInsightsSkeleton />;
  }
  if (error) {
    return (
      <Card>
        <SectionHeader
          title="AI Insights"
          subtitle="Failed to load AI Insights"
        />
      </Card>
    );
  }

  return (
    <Card>
      <SectionHeader
        title="AI Insights"
        subtitle="Personalized recommendations generated from your workspace activity"
      />

      <div className={styles.list}>
        {aiInsightsData.map((item) => (
          <InsightItem key={item.id} {...item} />
        ))}
      </div>
    </Card>
  );
}
