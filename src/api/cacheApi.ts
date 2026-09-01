import { cacheUsers } from "../data/cacheData";
import type { CacheUser } from "../types/cache";

export const fetchCacheUsers = async (): Promise<CacheUser[]> => {
  console.log("API CALLED");

  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

  return cacheUsers;
};