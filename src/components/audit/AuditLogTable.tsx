import type { AuditLog } from "../../types/management";

interface Props {
  logs: AuditLog[];
}

function AuditLogTable({ logs }: Props) {
  return (
    <div className="overflow-x-auto border border-gray-200 bg-white">
      <table className="w-full text-left text-sm">
        <thead className="border-b border-gray-200 bg-gray-50">
          <tr>
            <th className="px-5 py-4 font-semibold text-gray-700">User</th>
            <th className="px-5 py-4 font-semibold text-gray-700">Action</th>
            <th className="px-5 py-4 font-semibold text-gray-700">Module</th>
            <th className="px-5 py-4 font-semibold text-gray-700">
              Description
            </th>
            <th className="px-5 py-4 font-semibold text-gray-700">
              IP Address
            </th>
            <th className="px-5 py-4 font-semibold text-gray-700">Date</th>
            <th className="px-5 py-4 font-semibold text-gray-700">Status</th>
          </tr>
        </thead>

        <tbody>
          {logs.map((log) => (
            <tr
              key={log.id}
              className="border-b border-gray-100 last:border-0 hover:bg-gray-50"
            >
              <td className="px-5 py-4 font-medium text-gray-800">
                {log.user}
              </td>

              <td className="px-5 py-4 text-gray-600">
                {log.action}
              </td>

              <td className="px-5 py-4 text-gray-600">
                {log.module}
              </td>

              <td className="px-5 py-4 text-gray-600">
                {log.description}
              </td>

              <td className="px-5 py-4 text-gray-600">
                {log.ipAddress}
              </td>

              <td className="whitespace-nowrap px-5 py-4 text-gray-600">
                {log.date}
              </td>

              <td className="px-5 py-4">
                <span
                  className={`inline-flex px-3 py-1 text-xs font-semibold ${
                    log.status === "Success"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {log.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AuditLogTable;