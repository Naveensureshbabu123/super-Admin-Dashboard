import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { activateTenant } from "../services/tenantService";

export function useActivateTenant() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => activateTenant(id),

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