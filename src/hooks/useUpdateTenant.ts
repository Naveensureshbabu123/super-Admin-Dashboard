import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { updateTenant } from "../services/tenantService";
import type { Tenant } from "../types/tenant";

export function useUpdateTenant() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: number;
      data: Tenant;
    }) => updateTenant(id, data),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["tenants"],
      });

      queryClient.invalidateQueries({
        queryKey: ["tenant", variables.id],
      });

      queryClient.invalidateQueries({
        queryKey: ["tenantStats", variables.id],
      });
    },
  });
}