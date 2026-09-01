import { useNavigate } from "react-router-dom";
import TenantForm from "../components/tenant/TenantForm";
import { useCreateTenant } from "../hooks/useCreateTenant";
import type { Tenant } from "../types/tenant";

function CreateTenant() {
  const navigate = useNavigate();
  const createTenant = useCreateTenant();

  function handleCreate(tenant: Tenant) {
    createTenant.mutate(tenant, {
      onSuccess: () => {
        navigate("/tenants");
      },
    });
  }

  return (
    <div>
      <div className="mb-6">
        <button
          onClick={() => navigate("/tenants")}
          className="mb-4 text-sm text-blue-600 hover:text-blue-800"
        >
          ← Back to Tenants
        </button>

        <h1 className="text-2xl font-bold text-slate-800">
          Create New Tenant
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Add a new tenant to the platform
        </p>
      </div>

      <TenantForm
        onSubmit={handleCreate}
        buttonText={
          createTenant.isPending
            ? "Creating..."
            : "Create Tenant"
        }
      />
    </div>
  );
}

export default CreateTenant;