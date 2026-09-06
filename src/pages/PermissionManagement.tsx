import PermissionTable from "../components/permission/PermissionTable";
import { usePermissions } from "../hooks/usePermissions";

function PermissionManagement() {
  const { data, isLoading, isError } = usePermissions();

  if (isLoading) {
    return (
      <p className="text-gray-500">
        Loading permissions...
      </p>
    );
  }

  if (isError) {
    return (
      <p className="text-red-500">
        Failed to load permissions.
      </p>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Permission Management
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Manage permissions available across the platform
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div className="border border-gray-200 bg-white p-5">
          <p className="text-sm text-gray-500">
            Total Permissions
          </p>

          <p className="mt-2 text-2xl font-bold text-gray-800">
            {data?.length ?? 0}
          </p>
        </div>

        <div className="border border-gray-200 bg-white p-5">
          <p className="text-sm text-gray-500">
            Active Permissions
          </p>

          <p className="mt-2 text-2xl font-bold text-green-600">
            {
              data?.filter(
                (permission) =>
                  permission.status === "Active"
              ).length
            }
          </p>
        </div>

        <div className="border border-gray-200 bg-white p-5">
          <p className="text-sm text-gray-500">
            Inactive Permissions
          </p>

          <p className="mt-2 text-2xl font-bold text-red-600">
            {
              data?.filter(
                (permission) =>
                  permission.status === "Inactive"
              ).length
            }
          </p>
        </div>
      </div>

      <PermissionTable permissions={data ?? []} />
    </div>
  );
}

export default PermissionManagement;