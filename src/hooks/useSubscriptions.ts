import { useQuery } from "@tanstack/react-query";
import { getSubscriptions } from "../services/managementService";

export function useSubscriptions() {
  return useQuery({
    queryKey: ["subscriptions"],
    queryFn: getSubscriptions,
  });
}