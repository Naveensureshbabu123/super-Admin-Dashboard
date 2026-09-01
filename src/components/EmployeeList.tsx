import { useQuery } from "@tanstack/react-query";
import { fetchEmployees } from "../api/employeeApi";

function EmployeeList() {
  const {
    data: employees,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["employees"],
    queryFn: fetchEmployees,
  });

  if (isLoading) {
    return <h2>Loading employees...</h2>;
  }

  if (isError) {
    return <h2>Failed to load employees.</h2>;
  }

  return (
    <div>
      <h1>Employee List</h1>

      {employees?.map((employee) => (
        <div key={employee.employeeId}>
          <h2>{employee.name}</h2>

          <p>
            <strong>Employee ID:</strong>{" "}
            {employee.employeeId}
          </p>

          <p>
            <strong>Email:</strong>{" "}
            {employee.email}
          </p>

          <p>
            <strong>Department:</strong>{" "}
            {employee.department}
          </p>

          <p>
            <strong>Designation:</strong>{" "}
            {employee.designation}
          </p>

          <p>
            <strong>Status:</strong>{" "}
            {employee.status}
          </p>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default EmployeeList;