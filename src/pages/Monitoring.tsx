import MonitoringTable from "../components/monitoring/MonitoringTable";
import {
  useMonitoringServices,
  useSystemMonitoring,
} from "../hooks/useMonitoring";

function Monitoring() {
  const {
    data: services,
    isLoading: servicesLoading,
    isError: servicesError,
  } = useMonitoringServices();

  const {
    data: system,
    isLoading: systemLoading,
    isError: systemError,
  } = useSystemMonitoring();

  if (servicesLoading || systemLoading) {
    return <p className="text-gray-500">Loading monitoring data...</p>;
  }

  if (servicesError || systemError || !system) {
    return (
      <p className="text-red-500">
        Failed to load monitoring data.
      </p>
    );
  }

  const healthyServices =
    services?.filter((service) => service.status === "Healthy").length ?? 0;

  const warningServices =
    services?.filter((service) => service.status === "Warning").length ?? 0;

  const downServices =
    services?.filter((service) => service.status === "Down").length ?? 0;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Monitoring
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Monitor platform health, resources, and services
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="border border-gray-200 bg-white p-5">
          <p className="text-sm text-gray-500">Healthy Services</p>
          <p className="mt-2 text-2xl font-bold text-green-600">
            {healthyServices}
          </p>
        </div>

        <div className="border border-gray-200 bg-white p-5">
          <p className="text-sm text-gray-500">Warning Services</p>
          <p className="mt-2 text-2xl font-bold text-yellow-600">
            {warningServices}
          </p>
        </div>

        <div className="border border-gray-200 bg-white p-5">
          <p className="text-sm text-gray-500">Down Services</p>
          <p className="mt-2 text-2xl font-bold text-red-600">
            {downServices}
          </p>
        </div>

        <div className="border border-gray-200 bg-white p-5">
          <p className="text-sm text-gray-500">Storage Usage</p>
          <p className="mt-2 text-2xl font-bold text-gray-800">
            {system.storage}%
          </p>
        </div>
      </div>

      <div className="border border-gray-200 bg-white p-6">
        <h2 className="text-lg font-bold text-gray-800">
          Resource Usage
        </h2>

        <div className="mt-5 space-y-5">
          <div>
            <div className="mb-2 flex justify-between">
              <span className="text-sm text-gray-600">CPU Usage</span>
              <span className="text-sm font-semibold">
                {system.cpu}%
              </span>
            </div>

            <div className="h-3 bg-gray-100">
              <div
                className="h-3 bg-blue-500"
                style={{ width: `${system.cpu}%` }}
              />
            </div>
          </div>

          <div>
            <div className="mb-2 flex justify-between">
              <span className="text-sm text-gray-600">
                Memory Usage
              </span>
              <span className="text-sm font-semibold">
                {system.memory}%
              </span>
            </div>

            <div className="h-3 bg-gray-100">
              <div
                className="h-3 bg-purple-500"
                style={{ width: `${system.memory}%` }}
              />
            </div>
          </div>

          <div>
            <div className="mb-2 flex justify-between">
              <span className="text-sm text-gray-600">
                Storage Usage
              </span>
              <span className="text-sm font-semibold">
                {system.storage}%
              </span>
            </div>

            <div className="h-3 bg-gray-100">
              <div
                className="h-3 bg-orange-500"
                style={{ width: `${system.storage}%` }}
              />
            </div>
          </div>

          <div>
            <div className="mb-2 flex justify-between">
              <span className="text-sm text-gray-600">
                Network Usage
              </span>
              <span className="text-sm font-semibold">
                {system.network}%
              </span>
            </div>

            <div className="h-3 bg-gray-100">
              <div
                className="h-3 bg-green-500"
                style={{ width: `${system.network}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="border border-gray-200 bg-white p-6">
        <h2 className="text-lg font-bold text-gray-800">
          System Health
        </h2>

        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="border border-gray-200 p-4">
            <p className="text-sm text-gray-500">API Gateway</p>
            <p className="mt-2 font-semibold text-green-600">
              {system.apiGateway}
            </p>
          </div>

          <div className="border border-gray-200 p-4">
            <p className="text-sm text-gray-500">Database</p>
            <p className="mt-2 font-semibold text-green-600">
              {system.database}
            </p>
          </div>

          <div className="border border-gray-200 p-4">
            <p className="text-sm text-gray-500">Authentication</p>
            <p className="mt-2 font-semibold text-green-600">
              {system.authentication}
            </p>
          </div>

          <div className="border border-gray-200 p-4">
            <p className="text-sm text-gray-500">
              Notification Service
            </p>
            <p className="mt-2 font-semibold text-yellow-600">
              {system.notificationService}
            </p>
          </div>
        </div>
      </div>

      <MonitoringTable services={services ?? []} />
    </div>
  );
}

export default Monitoring;