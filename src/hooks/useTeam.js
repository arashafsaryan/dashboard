import { useQuery } from "@tanstack/react-query";
import { getTeamMembers } from "../services/dashboardApi";

export function useTeam() {
  return useQuery({
    queryKey: ["team"],
    queryFn: getTeamMembers,
  });
}