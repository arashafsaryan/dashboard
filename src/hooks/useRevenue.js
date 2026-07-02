import { useQuery } from "@tanstack/react-query";
import { getRevenueData } from "../services/dashboardApi";

export function useRevenue() {
  return useQuery({
    queryKey: ["revenue"],
    queryFn: getRevenueData,
  });
}
