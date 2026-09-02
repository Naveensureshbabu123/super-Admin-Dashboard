import { useOrganizations } from "../hooks/useOrganizations";
import OrganizationTable from "../components/organization/OrganizationTable";

function OrganizationManagement() {
  const { data, isLoading, isError } =
    useOrganizations();

  if (isLoading) {
    return (
      <p className="text-gray-500">
        Loading organizations...
      </p>
    );
  }

  if (isError) {
    return (
      <p className="text-red-500">
        Failed to load organizations.
      </p>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Organization Management
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          View and manage all platform organizations
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div className="border border-gray-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">
            Total Organizations
          </p>

          <p className="mt-2 text-2xl font-bold text-gray-800">
            {data?.length || 0}
          </p>
        </div>

        <div className="border border-gray-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">
            Active Organizations
          </p>

          <p className="mt-2 text-2xl font-bold text-green-600">
            {data?.filter(
              (organization) =>
                organization.status === "Active"
            ).length || 0}
          </p>
        </div>

        <div className="border border-gray-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">
            Inactive Organizations
          </p>

          <p className="mt-2 text-2xl font-bold text-red-600">
            {data?.filter(
              (organization) =>
                organization.status === "Inactive"
            ).length || 0}
          </p>
        </div>
      </div>

      <OrganizationTable
        organizations={data || []}
      />
    </div>
  );
}

export default OrganizationManagement;