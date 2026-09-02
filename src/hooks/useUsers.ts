import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../services/managementService";

export function useUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });
}