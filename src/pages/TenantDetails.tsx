import { useNavigate, useParams } from "react-router-dom";
import TenantStatus from "../components/tenant/TenantStatus";
import { useTenant } from "../hooks/useTenant";
import { useTenantStats } from "../hooks/useTenantStats";
import { useActivateTenant } from "../hooks/useActivateTenant";
import { useDeactivateTenant } from "../hooks/useDeactivateTenant";

function TenantDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const tenantId = Number(id);

  const {
    data: tenant,
    isLoading,
    isError,
  } = useTenant(tenantId);

  const {
    data: stats,
  } = useTenantStats(tenantId);

  const activate = useActivateTenant();
  const deactivate = useDeactivateTenant();

  if (isLoading) {
    return (
      <p className="p-6 text-slate-500">
        Loading tenant...
      </p>
    );
  }

  if (isError || !tenant) {
    return (
      <p className="p-6 text-red-500">
        Tenant not found.
      </p>
    );
  }

  const currentTenant = tenant;

  function handleStatus() {
    if (currentTenant.status === "Active") {
      deactivate.mutate(currentTenant.id);
    } else {
      activate.mutate(currentTenant.id);
    }
  }

  return (
    <div>
      <button
        onClick={() => navigate("/tenants")}
        className="mb-5 text-sm text-blue-600 hover:text-blue-800"
      >
        ← Back to Tenants
      </button>

      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">
            {currentTenant.name}
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            {currentTenant.code}
          </p>
        </div>

        <TenantStatus status={currentTenant.status} />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-lg font-semibold text-slate-800">
            Tenant Information
          </h2>

          <div className="space-y-4">
            <div>
              <p className="text-xs text-slate-500">
                Admin
              </p>
              <p className="mt-1 text-sm font-medium">
                {currentTenant.admin}
              </p>
            </div>

            <div>
              <p className="text-xs text-slate-500">
                Email
              </p>
              <p className="mt-1 text-sm font-medium">
                {currentTenant.email}
              </p>
            </div>

            <div>
              <p className="text-xs text-slate-500">
                Phone
              </p>
              <p className="mt-1 text-sm font-medium">
                {currentTenant.phone}
              </p>
            </div>

            <div>
              <p className="text-xs text-slate-500">
                Created
              </p>
              <p className="mt-1 text-sm font-medium">
                {currentTenant.created}
              </p>
            </div>

            <div>
              <p className="text-xs text-slate-500">
                Plan
              </p>
              <p className="mt-1 text-sm font-medium">
                {currentTenant.plan}
              </p>
            </div>

            <div>
              <p className="text-xs text-slate-500">
                Country
              </p>
              <p className="mt-1 text-sm font-medium">
                {currentTenant.country}
              </p>
            </div>

            <div>
              <p className="text-xs text-slate-500">
                Time Zone
              </p>
              <p className="mt-1 text-sm font-medium">
                {currentTenant.timezone}
              </p>
            </div>
          </div>
        </div>

        <div className="border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-lg font-semibold text-slate-800">
            Statistics
          </h2>

          <div className="grid grid-cols-2 gap-5">
            <div>
              <p className="text-sm text-slate-500">
                Users
              </p>

              <p className="mt-1 text-2xl font-bold">
                {stats?.users ?? currentTenant.users}
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">
                Organizations
              </p>

              <p className="mt-1 text-2xl font-bold">
                {stats?.organizations ??
                  currentTenant.organizations}
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">
                Active Users
              </p>

              <p className="mt-1 text-2xl font-bold">
                {stats?.activeUsers ??
                  currentTenant.activeUsers}
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">
                Storage
              </p>

              <p className="mt-1 text-2xl font-bold">
                {stats?.storage ??
                  currentTenant.storage}
                %
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button
          onClick={() =>
            navigate(
              `/tenants/${currentTenant.id}/edit`
            )
          }
          className="bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700"
        >
          Edit Tenant
        </button>

        <button
          onClick={handleStatus}
          disabled={
            activate.isPending ||
            deactivate.isPending
          }
          className={`px-5 py-3 text-sm font-medium text-white ${
            currentTenant.status === "Active"
              ? "bg-red-600 hover:bg-red-700"
              : "bg-green-600 hover:bg-green-700"
          } disabled:opacity-50`}
        >
          {activate.isPending ||
          deactivate.isPending
            ? "Updating..."
            : currentTenant.status === "Active"
              ? "Deactivate"
              : "Activate"}
        </button>
      </div>
    </div>
  );
}

export default TenantDetails;