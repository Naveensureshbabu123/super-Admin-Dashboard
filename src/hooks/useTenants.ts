import { useQuery } from "@tanstack/react-query";
import { getTenants } from "../services/tenantService";

export function useTenants() {
  return useQuery({
    queryKey: ["tenants"],
    queryFn: getTenants,
  });
}