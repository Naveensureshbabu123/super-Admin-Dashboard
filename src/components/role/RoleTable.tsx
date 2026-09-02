import type { Role } from "../../types/management";

type Props = {
  roles: Role[];
};

function RoleTable({ roles }: Props) {
  return (
    <div className="overflow-x-auto border border-gray-200 bg-white shadow-sm">
      <table className="min-w-full text-left text-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-5 py-4 font-semibold text-gray-700">
              Role
            </th>

            <th className="px-5 py-4 font-semibold text-gray-700">
              Description
            </th>

            <th className="px-5 py-4 font-semibold text-gray-700">
              Users
            </th>

            <th className="px-5 py-4 font-semibold text-gray-700">
              Permissions
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
          {roles.map((role) => (
            <tr
              key={role.id}
              className="border-t border-gray-200 hover:bg-gray-50"
            >
              <td className="px-5 py-4 font-medium text-gray-800">
                {role.name}
              </td>

              <td className="max-w-xs px-5 py-4 text-gray-600">
                {role.description}
              </td>

              <td className="px-5 py-4 text-gray-600">
                {role.users}
              </td>

              <td className="px-5 py-4 text-gray-600">
                {role.permissions}
              </td>

              <td className="px-5 py-4">
                <span
                  className={`px-3 py-1 text-xs font-medium ${
                    role.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {role.status}
                </span>
              </td>

              <td className="px-5 py-4 text-gray-600">
                {role.created}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RoleTable;