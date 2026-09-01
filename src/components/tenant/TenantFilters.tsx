interface Props {
  search: string;
  status: string;
  plan: string;
  onSearch: (value: string) => void;
  onStatus: (value: string) => void;
  onPlan: (value: string) => void;
}

function TenantFilters({
  search,
  status,
  plan,
  onSearch,
  onStatus,
  onPlan,
}: Props) {
  return (
    <div className="mb-6 grid grid-cols-1 gap-3 border border-slate-200 bg-white p-4 sm:grid-cols-2 lg:grid-cols-4">
      <input
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search name or code..."
        className="border border-slate-300 px-4 py-3 text-sm outline-none focus:border-blue-500"
      />

      <select
        value={status}
        onChange={(e) => onStatus(e.target.value)}
        className="border border-slate-300 px-4 py-3 text-sm outline-none focus:border-blue-500"
      >
        <option value="">All Status</option>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>

      <select
        value={plan}
        onChange={(e) => onPlan(e.target.value)}
        className="border border-slate-300 px-4 py-3 text-sm outline-none focus:border-blue-500"
      >
        <option value="">All Plans</option>
        <option value="Basic">Basic</option>
        <option value="Pro">Pro</option>
        <option value="Enterprise">Enterprise</option>
      </select>

      <div className="flex items-center px-2 text-sm text-slate-500">
        Search and filter tenants
      </div>
    </div>
  );
}

export default TenantFilters;