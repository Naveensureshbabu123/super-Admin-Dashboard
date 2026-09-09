import { useQuery } from "@tanstack/react-query";
import { getAuditLogs } from "../services/managementService";

export function useAuditLogs() {
  return useQuery({
    queryKey: ["auditLogs"],
    queryFn: getAuditLogs,
  });
}