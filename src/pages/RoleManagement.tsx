import { useRoles } from "../hooks/useRoles";
import RoleTable from "../components/role/RoleTable";

function RoleManagement() {
  const { data, isLoading, isError } = useRoles();

  if (isLoading) {
    return (
      <p className="text-gray-500">
        Loading roles...
      </p>
    );
  }

  if (isError) {
    return (
      <p className="text-red-500">
        Failed to load roles.
      </p>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Role Management
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Manage platform roles and permissions
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div className="border border-gray-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">
            Total Roles
          </p>

          <p className="mt-2 text-2xl font-bold text-gray-800">
            {data?.length || 0}
          </p>
        </div>

        <div className="border border-gray-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">
            Active Roles
          </p>

          <p className="mt-2 text-2xl font-bold text-green-600">
            {data?.filter(
              (role) => role.status === "Active"
            ).length || 0}
          </p>
        </div>

        <div className="border border-gray-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">
            Total Assigned Users
          </p>

          <p className="mt-2 text-2xl font-bold text-blue-600">
            {data?.reduce(
              (total, role) => total + role.users,
              0
            ) || 0}
          </p>
        </div>
      </div>

      <RoleTable roles={data || []} />
    </div>
  );
}

export default RoleManagement;