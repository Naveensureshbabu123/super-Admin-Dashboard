import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { deactivateTenant } from "../services/tenantService";

export function useDeactivateTenant() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => deactivateTenant(id),

    onSuccess: (_, id) => {
      queryClient.invalidateQueries({
        queryKey: ["tenants"],
      });

      queryClient.invalidateQueries({
        queryKey: ["tenant", id],
      });
    },
  });
}