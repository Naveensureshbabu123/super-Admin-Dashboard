import type { User } from "../../types/management";

type Props = {
  users: User[];
};

function UserTable({ users }: Props) {
  return (
    <div className="overflow-x-auto border border-gray-200 bg-white shadow-sm">
      <table className="min-w-full text-left text-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-5 py-4 font-semibold text-gray-700">
              User
            </th>

            <th className="px-5 py-4 font-semibold text-gray-700">
              Email
            </th>

            <th className="px-5 py-4 font-semibold text-gray-700">
              Tenant
            </th>

            <th className="px-5 py-4 font-semibold text-gray-700">
              Role
            </th>

            <th className="px-5 py-4 font-semibold text-gray-700">
              Status
            </th>

            <th className="px-5 py-4 font-semibold text-gray-700">
              Created
            </th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className="border-t border-gray-200 hover:bg-gray-50"
            >
              <td className="px-5 py-4 font-medium text-gray-800">
                {user.name}
              </td>

              <td className="px-5 py-4 text-gray-600">
                {user.email}
              </td>

              <td className="px-5 py-4 text-gray-600">
                {user.tenant}
              </td>

              <td className="px-5 py-4 text-gray-600">
                {user.role}
              </td>

              <td className="px-5 py-4">
                <span
                  className={`px-3 py-1 text-xs font-medium ${
                    user.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {user.status}
                </span>
              </td>

              <td className="px-5 py-4 text-gray-600">
                {user.created}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;