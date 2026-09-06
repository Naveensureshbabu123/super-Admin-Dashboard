import { useQuery } from "@tanstack/react-query";
import { getPlatformConfiguration } from "../services/managementService";

export function usePlatformConfiguration() {
  return useQuery({
    queryKey: ["platformConfiguration"],
    queryFn: getPlatformConfiguration,
  });
}