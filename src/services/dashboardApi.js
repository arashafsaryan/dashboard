import { activityData } from "../features/dashboard/data/activityData";
import { aiInsightsData } from "../features/dashboard/data/aiInsightsData";
import { kpiData } from "../features/dashboard/data/kpiData";
import { ordersData } from "../features/dashboard/data/ordersData";
import { revenueData } from "../features/dashboard/data/revenueData";
import { teamData } from "../features/dashboard/data/teamData";

export async function getRecentOrders() {
  await new Promise((resolve) => setTimeout(resolve, 800));
  return ordersData;
}
export async function getRevenueData() {
  await new Promise((resolve) => setTimeout(resolve, 800));
  return revenueData;
}
export async function getDashboardStats() {
  await new Promise((resolve) => setTimeout(resolve, 800));
  return kpiData;
}
export async function getRecentActivity() {
  await new Promise((resolve) => setTimeout(resolve, 800));

  return activityData;
}

export async function getTeamMembers() {
  await new Promise((resolve) => setTimeout(resolve, 800));

  return teamData;
}
export async function getAIInsights() {
  await new Promise((resolve) => setTimeout(resolve, 800));

  return aiInsightsData;
}
