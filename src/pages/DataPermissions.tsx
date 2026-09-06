import DataPermissionTable from "../components/dataPermission/DataPermissionTable";
import { useDataPermissions } from "../hooks/useDataPermissions";

function DataPermissions() {
  const { data, isLoading, isError } =
    useDataPermissions();

  if (isLoading) {
    return (
      <p className="text-gray-500">
        Loading data permissions...
      </p>
    );
  }

  if (isError) {
    return (
      <p className="text-red-500">
        Failed to load data permissions.
      </p>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Data Permissions
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Control data access for different roles and modules
        </p>
      </div>

      <div className="border border-gray-200 bg-white p-5">
        <div className="grid grid-cols-2 gap-5 md:grid-cols-5">
          <div>
            <p className="text-sm text-gray-500">
              Roles
            </p>

            <p className="mt-1 text-2xl font-bold">
              {new Set(data?.map((item) => item.role)).size}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Modules
            </p>

            <p className="mt-1 text-2xl font-bold">
              {new Set(data?.map((item) => item.module)).size}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Read
            </p>

            <p className="mt-1 text-2xl font-bold">
              {data?.filter((item) => item.read).length}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Create
            </p>

            <p className="mt-1 text-2xl font-bold">
              {data?.filter((item) => item.create).length}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Export
            </p>

            <p className="mt-1 text-2xl font-bold">
              {data?.filter((item) => item.export).length}
            </p>
          </div>
        </div>
      </div>

      <DataPermissionTable data={data ?? []} />
    </div>
  );
}

export default DataPermissions;