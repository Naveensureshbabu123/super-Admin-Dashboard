import { useQuery } from "@tanstack/react-query";
import { getNotifications } from "../services/managementService";

export function useNotifications() {
  return useQuery({
    queryKey: ["notifications"],
    queryFn: getNotifications,
  });
}