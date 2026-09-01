import type { Tenant, TenantStats } from "../types/tenant";
import { tenants } from "../data/mockData";

let tenantData = [...tenants];

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getTenants(): Promise<Tenant[]> {
  await delay(400);
  return [...tenantData];
}

export async function getTenant(id: number): Promise<Tenant> {
  await delay(300);

  const tenant = tenantData.find((item) => item.id === id);

  if (!tenant) {
    throw new Error("Tenant not found");
  }

  return { ...tenant };
}

export async function getTenantStats(
  id: number
): Promise<TenantStats> {
  await delay(300);

  const tenant = tenantData.find((item) => item.id === id);

  if (!tenant) {
    throw new Error("Tenant not found");
  }

  return {
    users: tenant.users,
    organizations: tenant.organizations,
    activeUsers: tenant.activeUsers,
    storage: tenant.storage,
  };
}

export async function createTenant(
  data: Tenant
): Promise<Tenant> {
  await delay(400);

  const exists = tenantData.some(
    (tenant) =>
      tenant.code.toLowerCase() === data.code.toLowerCase()
  );

  if (exists) {
    throw new Error("Tenant code already exists");
  }

  const newTenant = {
    ...data,
    id: Date.now(),
  };

  tenantData.push(newTenant);

  return newTenant;
}

export async function updateTenant(
  id: number,
  data: Tenant
): Promise<Tenant> {
  await delay(400);

  const index = tenantData.findIndex(
    (tenant) => tenant.id === id
  );

  if (index === -1) {
    throw new Error("Tenant not found");
  }

  tenantData[index] = {
    ...data,
    id,
  };

  return tenantData[index];
}

export async function activateTenant(
  id: number
): Promise<Tenant> {
  await delay(300);

  const tenant = tenantData.find(
    (item) => item.id === id
  );

  if (!tenant) {
    throw new Error("Tenant not found");
  }

  tenant.status = "Active";

  return { ...tenant };
}

export async function deactivateTenant(
  id: number
): Promise<Tenant> {
  await delay(300);

  const tenant = tenantData.find(
    (item) => item.id === id
  );

  if (!tenant) {
    throw new Error("Tenant not found");
  }

  tenant.status = "Inactive";

  return { ...tenant };
}