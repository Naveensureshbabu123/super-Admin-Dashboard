import { useQuery } from "@tanstack/react-query";
import { getPermissions } from "../services/managementService";

export function usePermissions() {
  return useQuery({
    queryKey: ["permissions"],
    queryFn: getPermissions,
  });
}