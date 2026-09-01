import { users } from "../data/userData";
import type { User } from "../types/user";

export const fetchUsers = async (): Promise<User[]> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return users;
};

export const addUser = async (user: User): Promise<User> => {
  users.push(user);

  return user;
};

