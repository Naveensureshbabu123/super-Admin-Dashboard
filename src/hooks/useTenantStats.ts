import { useQuery } from "@tanstack/react-query";
import { getTenantStats } from "../services/tenantService";

export function useTenantStats(id: number) {
  return useQuery({
    queryKey: ["tenantStats", id],
    queryFn: () => getTenantStats(id),
    enabled: Number.isFinite(id) && id > 0,
  });
}