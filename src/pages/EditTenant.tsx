import { useNavigate, useParams } from "react-router-dom";
import TenantForm from "../components/tenant/TenantForm";
import { useTenant } from "../hooks/useTenant";
import { useUpdateTenant } from "../hooks/useUpdateTenant";
import type { Tenant } from "../types/tenant";

function EditTenant() {
  const { id } = useParams();
  const navigate = useNavigate();

  const tenantId = Number(id);

  const {
    data: tenant,
    isLoading,
    isError,
  } = useTenant(tenantId);

  const updateTenant = useUpdateTenant();

  if (isLoading) {
    return (
      <p className="text-slate-500">
        Loading tenant...
      </p>
    );
  }

  if (isError || !tenant) {
    return (
      <p className="text-red-500">
        Tenant not found.
      </p>
    );
  }

  function handleUpdate(updatedTenant: Tenant) {
    updateTenant.mutate(
      {
        id: tenantId,
        data: updatedTenant,
      },
      {
        onSuccess: () => {
          navigate(`/tenants/${tenantId}`);
        },
      }
    );
  }

  return (
    <div>
      <div className="mb-6">
        <button
          onClick={() =>
            navigate(`/tenants/${tenantId}`)
          }
          className="mb-4 text-sm text-blue-600 hover:text-blue-800"
        >
          ← Back to Tenant
        </button>

        <h1 className="text-2xl font-bold text-slate-800">
          Edit Tenant
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Update tenant information
        </p>
      </div>

      <TenantForm
        tenant={tenant}
        onSubmit={handleUpdate}
        buttonText={
          updateTenant.isPending
            ? "Updating..."
            : "Update Tenant"
        }
      />
    </div>
  );
}

export default EditTenant;