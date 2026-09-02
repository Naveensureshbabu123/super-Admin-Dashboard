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