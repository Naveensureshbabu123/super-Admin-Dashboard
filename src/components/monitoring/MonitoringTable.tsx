import type { MonitoringService } from "../../types/management";

interface Props {
  services: MonitoringService[];
}

function MonitoringTable({ services }: Props) {
  return (
    <div className="overflow-x-auto border border-gray-200 bg-white">
      <table className="w-full text-left text-sm">
        <thead className="border-b border-gray-200 bg-gray-50">
          <tr>
            <th className="px-5 py-4 font-semibold text-gray-700">
              Service
            </th>
            <th className="px-5 py-4 font-semibold text-gray-700">
              Status
            </th>
            <th className="px-5 py-4 font-semibold text-gray-700">
              Response Time
            </th>
            <th className="px-5 py-4 font-semibold text-gray-700">
              Uptime
            </th>
          </tr>
        </thead>

        <tbody>
          {services.map((service) => (
            <tr
              key={service.id}
              className="border-b border-gray-100 last:border-0 hover:bg-gray-50"
            >
              <td className="px-5 py-4 font-medium text-gray-800">
                {service.service}
              </td>

              <td className="px-5 py-4">
                <span
                  className={`inline-flex px-3 py-1 text-xs font-semibold ${
                    service.status === "Healthy"
                      ? "bg-green-100 text-green-700"
                      : service.status === "Warning"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {service.status}
                </span>
              </td>

              <td className="px-5 py-4 text-gray-600">
                {service.responseTime} ms
              </td>

              <td className="px-5 py-4 text-gray-600">
                {service.uptime}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MonitoringTable;