import { useQuery } from "@tanstack/react-query";
import { getTenant } from "../services/tenantService";

export function useTenant(id: number) {
  return useQuery({
    queryKey: ["tenant", id],
    queryFn: () => getTenant(id),
    enabled: Number.isFinite(id) && id > 0,
  });
}