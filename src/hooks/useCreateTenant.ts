import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { createTenant } from "../services/tenantService";
import type { Tenant } from "../types/tenant";

export function useCreateTenant() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Tenant) => createTenant(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["tenants"],
      });
    },
  });
}