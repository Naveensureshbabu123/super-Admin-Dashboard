import {
  users,
  organizations,
  roles,
} from "../data/mockData";

export function getUsers() {
  return Promise.resolve(users);
}

export function getOrganizations() {
  return Promise.resolve(organizations);
}

export function getRoles() {
  return Promise.resolve(roles);
}