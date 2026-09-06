import { useQuery } from "@tanstack/react-query";
import { getDataPermissions } from "../services/managementService";

export function useDataPermissions() {
  return useQuery({
    queryKey: ["dataPermissions"],
    queryFn: getDataPermissions,
  });
}