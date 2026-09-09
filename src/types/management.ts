export type User = {
  id: number;
  name: string;
  email: string;
  tenant: string;
  role: string;
  status: "Active" | "Inactive";
  created: string;
};

export type Organization = {
  id: number;
  name: string;
  code: string;
  tenant: string;
  users: number;
  status: "Active" | "Inactive";
  created: string;
};

export type Role = {
  id: number;
  name: string;
  description: string;
  users: number;
  permissions: number;
  status: "Active" | "Inactive";
  created: string;
};
export interface Permission {
  id: number;
  name: string;
  module: string;
  description: string;
  status: "Active" | "Inactive";
}

export interface DataPermission {
  id: number;
  role: string;
  module: string;
  read: boolean;
  create: boolean;
  update: boolean;
  delete: boolean;
  export: boolean;
}

export interface PlatformConfiguration {
  platformName: string;
  supportEmail: string;
  country: string;
  timezone: string;
  maintenanceMode: boolean;
  sessionTimeout: number;
  emailNotifications: boolean;
}
export interface Feature {
  id: number;
  name: string;
  description: string;
  category: string;
  status: "Enabled" | "Disabled";
  tenants: number;
  updated: string;
}

export interface Subscription {
  id: number;
  tenant: string;
  plan: "Basic" | "Pro" | "Enterprise";
  status: "Active" | "Expired" | "Expiring Soon";
  users: number;
  licenses: number;
  startDate: string;
  expiryDate: string;
  amount: number;
}
export interface AuditLog {
  id: number;
  user: string;
  action: string;
  module: string;
  description: string;
  ipAddress: string;
  date: string;
  status: "Success" | "Failed";
}

export interface Notification {
  id: number;
  title: string;
  message: string;
  type: "Info" | "Warning" | "Alert" | "Success";
  recipient: string;
  status: "Read" | "Unread";
  date: string;
}

export interface MonitoringService {
  id: number;
  service: string;
  status: "Healthy" | "Warning" | "Down";
  responseTime: number;
  uptime: string;
}

export interface SystemMonitoring {
  cpu: number;
  memory: number;
  storage: number;
  network: number;
  apiGateway: string;
  database: string;
  authentication: string;
  notificationService: string;
}