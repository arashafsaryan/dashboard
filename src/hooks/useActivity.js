import { useQuery } from "@tanstack/react-query";
import { getRecentActivity } from "../services/dashboardApi";

export function useActivity() {
  return useQuery({
    queryKey: ["activity"],
    queryFn: getRecentActivity,
  });
}