import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Tenant } from "../../types/tenant";
import TenantStatus from "./TenantStatus";
import { useActivateTenant } from "../../hooks/useActivateTenant";
import { useDeactivateTenant } from "../../hooks/useDeactivateTenant";

interface Props {
  tenants: Tenant[];
}

function TenantTable({ tenants }: Props) {
  const navigate = useNavigate();

  const activate = useActivateTenant();
  const deactivate = useDeactivateTenant();

  const [sortAsc, setSortAsc] = useState(true);

  const sortedTenants = [...tenants].sort((a, b) => {
    return sortAsc
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name);
  });

  function handleStatus(tenant: Tenant) {
    if (tenant.status === "Active") {
      deactivate.mutate(tenant.id);
    } else {
      activate.mutate(tenant.id);
    }
  }

  return (
    <div className="overflow-hidden border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px] text-left">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-5 py-4 text-xs font-semibold uppercase text-slate-500">
                Tenant
              </th>

              <th className="px-5 py-4 text-xs font-semibold uppercase text-slate-500">
                Code
              </th>

              <th className="px-5 py-4 text-xs font-semibold uppercase text-slate-500">
                Admin
              </th>

              <th className="px-5 py-4 text-xs font-semibold uppercase text-slate-500">
                Plan
              </th>

              <th className="px-5 py-4 text-xs font-semibold uppercase text-slate-500">
                Users
              </th>

              <th className="px-5 py-4 text-xs font-semibold uppercase text-slate-500">
                Status
              </th>

              <th className="px-5 py-4 text-xs font-semibold uppercase text-slate-500">
                Created
              </th>

              <th className="px-5 py-4 text-xs font-semibold uppercase text-slate-500">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {sortedTenants.map((tenant) => (
              <tr
                key={tenant.id}
                className="hover:bg-slate-50"
              >
                <td className="px-5 py-4 text-sm font-medium text-slate-800">
                  {tenant.name}
                </td>

                <td className="px-5 py-4 text-sm text-slate-600">
                  {tenant.code}
                </td>

                <td className="px-5 py-4 text-sm text-slate-600">
                  {tenant.admin}
                </td>

                <td className="px-5 py-4 text-sm text-slate-600">
                  {tenant.plan}
                </td>

                <td className="px-5 py-4 text-sm text-slate-600">
                  {tenant.users}
                </td>

                <td className="px-5 py-4">
                  <TenantStatus status={tenant.status} />
                </td>

                <td className="px-5 py-4 text-sm text-slate-600">
                  {tenant.created}
                </td>

                <td className="px-5 py-4">
                  <div className="flex gap-2">
                    <button
                      onClick={() =>
                        navigate(
                          `/tenants/${tenant.id}`
                        )
                      }
                      className="border border-blue-600 px-3 py-2 text-xs font-medium text-blue-600 hover:bg-blue-50"
                    >
                      View
                    </button>

                    <button
                      onClick={() =>
                        navigate(
                          `/tenants/${tenant.id}/edit`
                        )
                      }
                      className="border border-slate-300 px-3 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() =>
                        handleStatus(tenant)
                      }
                      className={`px-3 py-2 text-xs font-medium text-white ${
                        tenant.status === "Active"
                          ? "bg-red-600 hover:bg-red-700"
                          : "bg-green-600 hover:bg-green-700"
                      }`}
                    >
                      {tenant.status === "Active"
                        ? "Deactivate"
                        : "Activate"}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="border-t border-slate-200 p-4">
        <button
          onClick={() => setSortAsc(!sortAsc)}
          className="text-sm text-blue-600 hover:text-blue-800"
        >
          Sort by Name: {sortAsc ? "A-Z" : "Z-A"}
        </button>
      </div>
    </div>
  );
}

export default TenantTable;