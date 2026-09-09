import AuditLogTable from "../components/audit/AuditLogTable";
import { useAuditLogs } from "../hooks/useAuditLogs";

function AuditLogs() {
  const { data, isLoading, isError } = useAuditLogs();

  if (isLoading) {
    return <p className="text-gray-500">Loading audit logs...</p>;
  }

  if (isError) {
    return <p className="text-red-500">Failed to load audit logs.</p>;
  }

  const logs = data ?? [];

  const successful = logs.filter(
    (log) => log.status === "Success"
  ).length;

  const failed = logs.filter(
    (log) => log.status === "Failed"
  ).length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Audit Logs
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Track administrative activities and platform changes
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="border border-gray-200 bg-white p-5">
          <p className="text-sm text-gray-500">Total Activities</p>
          <p className="mt-2 text-2xl font-bold text-gray-800">
            {logs.length}
          </p>
        </div>

        <div className="border border-gray-200 bg-white p-5">
          <p className="text-sm text-gray-500">Successful</p>
          <p className="mt-2 text-2xl font-bold text-green-600">
            {successful}
          </p>
        </div>

        <div className="border border-gray-200 bg-white p-5">
          <p className="text-sm text-gray-500">Failed</p>
          <p className="mt-2 text-2xl font-bold text-red-600">
            {failed}
          </p>
        </div>

        <div className="border border-gray-200 bg-white p-5">
          <p className="text-sm text-gray-500">Modules</p>
          <p className="mt-2 text-2xl font-bold text-gray-800">
            {new Set(logs.map((log) => log.module)).size}
          </p>
        </div>
      </div>

      <AuditLogTable logs={logs} />
    </div>
  );
}

export default AuditLogs;