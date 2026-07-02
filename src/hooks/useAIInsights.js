import { useQuery } from "@tanstack/react-query";
import { getAIInsights } from "../services/dashboardApi";

export function useAIInsights() {
  return useQuery({
    queryKey: ["ai-insights"],
    queryFn: getAIInsights,
  });
}
