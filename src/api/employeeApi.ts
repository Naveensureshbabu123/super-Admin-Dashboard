import { employees } from "../data/employeeData";
import type { Employee } from "../types/employee";

export const fetchEmployees = async (): Promise<Employee[]> => {
  return employees;
};