export type TenantStatus = "Active" | "Inactive";

export type TenantPlan = "Basic" | "Pro" | "Enterprise";

export interface Tenant {
  id: number;
  name: string;
  code: string;
  admin: string;
  email: string;
  phone: string;
  plan: TenantPlan;
  country: string;
  timezone: string;
  status: TenantStatus;
  created: string;
  users: number;
  organizations: number;
  activeUsers: number;
  storage: number;
}

export interface TenantStats {
  users: number;
  organizations: number;
  activeUsers: number;
  storage: number;
}