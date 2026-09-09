import {
  users,
  organizations,
  roles,
  permissions,
  dataPermissions,
  platformConfiguration,
  features,
  subscriptions,
  auditLogs,
  notifications,
  monitoringServices,
  systemMonitoring,
} from "../data/mockData";

import type { PlatformConfiguration } from "../types/management";

export function getUsers() {
  return Promise.resolve(users);
}

export function getOrganizations() {
  return Promise.resolve(organizations);
}

export function getRoles() {
  return Promise.resolve(roles);
}

export function getPermissions() {
  return Promise.resolve(permissions);
}

export function getDataPermissions() {
  return Promise.resolve(dataPermissions);
}

export function getPlatformConfiguration() {
  return Promise.resolve(platformConfiguration);
}
export function getFeatures() {
  return Promise.resolve(features);
}

export function getSubscriptions() {
  return Promise.resolve(subscriptions);
}
export function getAuditLogs() {
  return Promise.resolve(auditLogs);
}

export function getNotifications() {
  return Promise.resolve(notifications);
}

export function getMonitoringServices() {
  return Promise.resolve(monitoringServices);
}

export function getSystemMonitoring() {
  return Promise.resolve(systemMonitoring);
}

export async function updatePlatformConfiguration(
  data: PlatformConfiguration
): Promise<PlatformConfiguration> {
  Object.assign(platformConfiguration, data);

  return Promise.resolve(platformConfiguration);
}

export async function savePlatformConfiguration(
  data: PlatformConfiguration
): Promise<PlatformConfiguration> {
  return updatePlatformConfiguration(data);
}