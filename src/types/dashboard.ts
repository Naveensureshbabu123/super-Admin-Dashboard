export interface DashboardStats {
  totalTenants: number;
  activeTenants: number;
  inactiveTenants: number;
  totalUsers: number;
  activeLicenses: number;
}

export interface HealthData {
  api: string;
  database: string;
  server: string;
  storage: number;
  cpu: number;
  memory: number;
}

export interface Activity {
  id: number;
  text: string;
  time: string;
}

export interface GrowthData {
  month: string;
  tenants: number;
}