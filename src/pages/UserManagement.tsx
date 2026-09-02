import { useUsers } from "../hooks/useUsers";
import UserTable from "../components/user/UserTable";

function UserManagement() {
  const { data, isLoading, isError } = useUsers();

  if (isLoading) {
    return (
      <p className="text-gray-500">
        Loading users...
      </p>
    );
  }

  if (isError) {
    return (
      <p className="text-red-500">
        Failed to load users.
      </p>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          User Management
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          View and manage all platform users
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div className="border border-gray-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">
            Total Users
          </p>

          <p className="mt-2 text-2xl font-bold text-gray-800">
            {data?.length || 0}
          </p>
        </div>

        <div className="border border-gray-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">
            Active Users
          </p>

          <p className="mt-2 text-2xl font-bold text-green-600">
            {data?.filter(
              (user) => user.status === "Active"
            ).length || 0}
          </p>
        </div>

        <div className="border border-gray-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">
            Inactive Users
          </p>

          <p className="mt-2 text-2xl font-bold text-red-600">
            {data?.filter(
              (user) => user.status === "Inactive"
            ).length || 0}
          </p>
        </div>
      </div>

      <UserTable users={data || []} />
    </div>
  );
}

export default UserManagement;