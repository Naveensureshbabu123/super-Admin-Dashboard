import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TenantTable from "../components/tenant/TenantTable";
import TenantFilters from "../components/tenant/TenantFilters";
import TenantPagination from "../components/tenant/TenantPagination";
import { useTenants } from "../hooks/useTenants";
import type { Tenant } from "../types/tenant";

function Tenants() {
  const navigate = useNavigate();

  const {
    data = [],
    isLoading,
    isError,
  } = useTenants();

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [plan, setPlan] = useState("");
  const [page, setPage] = useState(1);

  const pageSize = 10;

  if (isLoading) {
    return (
      <div className="p-6 text-slate-500">
        Loading tenants...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="p-6 text-red-500">
        Failed to load tenants.
      </div>
    );
  }

  const filteredTenants: Tenant[] = data.filter(
    (tenant) => {
      const searchValue = search.toLowerCase();

      const matchesSearch =
        tenant.name
          .toLowerCase()
          .includes(searchValue) ||
        tenant.code
          .toLowerCase()
          .includes(searchValue);

      const matchesStatus =
        status === "" ||
        tenant.status === status;

      const matchesPlan =
        plan === "" ||
        tenant.plan === plan;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesPlan
      );
    }
  );

  const totalPages = Math.max(
    1,
    Math.ceil(
      filteredTenants.length / pageSize
    )
  );

  const currentTenants = filteredTenants.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  function handleSearch(value: string) {
    setSearch(value);
    setPage(1);
  }

  function handleStatus(value: string) {
    setStatus(value);
    setPage(1);
  }

  function handlePlan(value: string) {
    setPlan(value);
    setPage(1);
  }

  return (
    <div>
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">
            Tenant Management
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            View and manage all platform tenants
          </p>
        </div>

        <button
          onClick={() =>
            navigate("/tenants/create")
          }
          className="bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700"
        >
          + Create Tenant
        </button>
      </div>

      <TenantFilters
        search={search}
        status={status}
        plan={plan}
        onSearch={handleSearch}
        onStatus={handleStatus}
        onPlan={handlePlan}
      />

      {currentTenants.length > 0 ? (
        <TenantTable tenants={currentTenants} />
      ) : (
        <div className="border border-slate-200 bg-white p-10 text-center">
          <p className="text-slate-500">
            No tenants found.
          </p>
        </div>
      )}

      <TenantPagination
        page={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </div>
  );
}

export default Tenants;