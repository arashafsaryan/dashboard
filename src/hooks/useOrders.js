import { useQuery } from "@tanstack/react-query";

import { getRecentOrders } from "../services/dashboardApi";

export function useOrders() {
  return useQuery({
    queryKey: ["orders"],
    queryFn: getRecentOrders,
  });
}
