import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updatePlatformConfiguration } from "../services/managementService";
import type { PlatformConfiguration } from "../types/management";

export function useUpdatePlatformConfiguration() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: PlatformConfiguration) =>
      updatePlatformConfiguration(data),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["platformConfiguration"],
      });
    },
  });
}