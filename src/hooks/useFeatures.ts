import { useQuery } from "@tanstack/react-query";
import { getFeatures } from "../services/managementService";

export function useFeatures() {
  return useQuery({
    queryKey: ["features"],
    queryFn: getFeatures,
  });
}