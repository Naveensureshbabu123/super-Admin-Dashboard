import { useQuery } from "@tanstack/react-query";
import {
  getMonitoringServices,
  getSystemMonitoring,
} from "../services/managementService";

export function useMonitoringServices() {
  return useQuery({
    queryKey: ["monitoringServices"],
    queryFn: getMonitoringServices,
  });
}

export function useSystemMonitoring() {
  return useQuery({
    queryKey: ["systemMonitoring"],
    queryFn: getSystemMonitoring,
  });
}