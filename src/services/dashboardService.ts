import {
  dashboardStats,
  healthData,
  growthData,
  activities,
} from "../data/mockData";

export async function getDashboardStats() {
  return dashboardStats;
}

export async function getHealthData() {
  return healthData;
}

export async function getGrowthData() {
  return growthData;
}

export async function getActivities() {
  return activities;
}