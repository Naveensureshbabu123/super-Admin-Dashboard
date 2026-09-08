import { useFeatures } from "../hooks/useFeatures";

function FeatureManagement() {
  const { data, isLoading, isError } = useFeatures();

  if (isLoading) {
    return (
      <p className="text-gray-500">
        Loading features...
      </p>
    );
  }

  if (isError) {
    return (
      <p className="text-red-500">
        Failed to load features.
      </p>
    );
  }

  const enabled =
    data?.filter(
      (feature) => feature.status === "Enabled"
    ).length ?? 0;

  const disabled =
    data?.filter(
      (feature) => feature.status === "Disabled"
    ).length ?? 0;

  const totalTenants =
    data?.reduce(
      (total, feature) => total + feature.tenants,
      0
    ) ?? 0;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Feature Management
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Manage platform features and availability
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div className="border border-gray-200 bg-white p-5">
          <p className="text-sm text-gray-500">
            Total Features
          </p>

          <p className="mt-2 text-2xl font-bold text-gray-800">
            {data?.length ?? 0}
          </p>
        </div>

        <div className="border border-gray-200 bg-white p-5">
          <p className="text-sm text-gray-500">
            Enabled Features
          </p>

          <p className="mt-2 text-2xl font-bold text-green-600">
            {enabled}
          </p>
        </div>

        <div className="border border-gray-200 bg-white p-5">
          <p className="text-sm text-gray-500">
            Feature Usage
          </p>

          <p className="mt-2 text-2xl font-bold text-blue-600">
            {totalTenants}
          </p>
        </div>
      </div>

      <div className="overflow-x-auto border border-gray-200 bg-white">
        <table className="w-full min-w-[900px] text-left">
          <thead className="border-b bg-gray-50">
            <tr>
              <th className="px-5 py-4 text-sm font-semibold">
                Feature
              </th>

              <th className="px-5 py-4 text-sm font-semibold">
                Description
              </th>

              <th className="px-5 py-4 text-sm font-semibold">
                Category
              </th>

              <th className="px-5 py-4 text-sm font-semibold">
                Tenants
              </th>

              <th className="px-5 py-4 text-sm font-semibold">
                Status
              </th>

              <th className="px-5 py-4 text-sm font-semibold">
                Updated
              </th>
            </tr>
          </thead>

          <tbody>
            {data?.map((feature) => (
              <tr
                key={feature.id}
                className="border-b last:border-b-0 hover:bg-gray-50"
              >
                <td className="px-5 py-4 text-sm font-medium text-gray-800">
                  {feature.name}
                </td>

                <td className="px-5 py-4 text-sm text-gray-600">
                  {feature.description}
                </td>

                <td className="px-5 py-4 text-sm text-gray-600">
                  {feature.category}
                </td>

                <td className="px-5 py-4 text-sm text-gray-600">
                  {feature.tenants}
                </td>

                <td className="px-5 py-4">
                  <span
                    className={`px-3 py-1 text-xs font-medium ${
                      feature.status === "Enabled"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {feature.status}
                  </span>
                </td>

                <td className="px-5 py-4 text-sm text-gray-600">
                  {feature.updated}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FeatureManagement;