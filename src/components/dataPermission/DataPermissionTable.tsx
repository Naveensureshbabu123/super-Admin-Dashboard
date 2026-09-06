import type { DataPermission } from "../../types/management";

interface Props {
  data: DataPermission[];
}

function DataPermissionTable({ data }: Props) {
  return (
    <div className="overflow-x-auto border border-gray-200 bg-white">
      <table className="w-full min-w-[900px]">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-5 py-4 text-left text-sm font-semibold text-gray-700">
              Role
            </th>

            <th className="px-5 py-4 text-left text-sm font-semibold text-gray-700">
              Module
            </th>

            <th className="px-5 py-4 text-center text-sm font-semibold text-gray-700">
              Read
            </th>

            <th className="px-5 py-4 text-center text-sm font-semibold text-gray-700">
              Create
            </th>

            <th className="px-5 py-4 text-center text-sm font-semibold text-gray-700">
              Update
            </th>

            <th className="px-5 py-4 text-center text-sm font-semibold text-gray-700">
              Delete
            </th>

            <th className="px-5 py-4 text-center text-sm font-semibold text-gray-700">
              Export
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {data.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50">
              <td className="px-5 py-4 text-sm font-medium text-gray-800">
                {item.role}
              </td>

              <td className="px-5 py-4 text-sm text-gray-600">
                {item.module}
              </td>

              <td className="px-5 py-4 text-center">
                {item.read ? "✓" : "—"}
              </td>

              <td className="px-5 py-4 text-center">
                {item.create ? "✓" : "—"}
              </td>

              <td className="px-5 py-4 text-center">
                {item.update ? "✓" : "—"}
              </td>

              <td className="px-5 py-4 text-center">
                {item.delete ? "✓" : "—"}
              </td>

              <td className="px-5 py-4 text-center">
                {item.export ? "✓" : "—"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataPermissionTable;