import type { Permission } from "../../types/management";

interface Props {
  permissions: Permission[];
}

function PermissionTable({ permissions }: Props) {
  return (
    <div className="overflow-x-auto border border-gray-200 bg-white">
      <table className="w-full min-w-[700px]">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
              Permission
            </th>

            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
              Module
            </th>

            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
              Description
            </th>

            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
              Status
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {permissions.map((permission) => (
            <tr key={permission.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 text-sm font-medium text-gray-800">
                {permission.name}
              </td>

              <td className="px-6 py-4 text-sm text-gray-600">
                {permission.module}
              </td>

              <td className="px-6 py-4 text-sm text-gray-600">
                {permission.description}
              </td>

              <td className="px-6 py-4">
                <span
                  className={`px-3 py-1 text-xs font-medium ${
                    permission.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {permission.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PermissionTable;