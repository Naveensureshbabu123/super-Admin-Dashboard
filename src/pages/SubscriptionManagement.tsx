import Card from "../components/dashboard/Card";
import { useSubscriptions } from "../hooks/useSubscriptions";

function SubscriptionManagement() {
  const { data, isLoading, isError } = useSubscriptions();

  if (isLoading) {
    return (
      <p className="text-gray-500">
        Loading subscriptions...
      </p>
    );
  }

  if (isError) {
    return (
      <p className="text-red-500">
        Failed to load subscriptions.
      </p>
    );
  }

  const active =
    data?.filter(
      (subscription) =>
        subscription.status === "Active"
    ).length ?? 0;

  const expired =
    data?.filter(
      (subscription) =>
        subscription.status === "Expired"
    ).length ?? 0;

  const expiring =
    data?.filter(
      (subscription) =>
        subscription.status === "Expiring Soon"
    ).length ?? 0;

  const totalLicenses =
    data?.reduce(
      (total, subscription) =>
        total + subscription.licenses,
      0
    ) ?? 0;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Subscription & License
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Manage tenant subscriptions and licenses
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
        <Card
          title="Total Subscriptions"
          value={data?.length ?? 0}
          description="All subscriptions"
        />

        <Card
          title="Active"
          value={active}
          description="Currently active"
        />

        <Card
          title="Expiring Soon"
          value={expiring}
          description="Need attention"
        />

        <Card
          title="Expired"
          value={expired}
          description="Expired subscriptions"
        />

        <Card
          title="Total Licenses"
          value={totalLicenses}
          description="Total available licenses"
        />
      </div>

      <div className="overflow-x-auto border border-gray-200 bg-white">
        <table className="w-full min-w-[1100px] text-left">
          <thead className="border-b bg-gray-50">
            <tr>
              <th className="px-5 py-4 text-sm font-semibold">
                Tenant
              </th>

              <th className="px-5 py-4 text-sm font-semibold">
                Plan
              </th>

              <th className="px-5 py-4 text-sm font-semibold">
                Users
              </th>

              <th className="px-5 py-4 text-sm font-semibold">
                Licenses
              </th>

              <th className="px-5 py-4 text-sm font-semibold">
                Start Date
              </th>

              <th className="px-5 py-4 text-sm font-semibold">
                Expiry Date
              </th>

              <th className="px-5 py-4 text-sm font-semibold">
                Amount
              </th>

              <th className="px-5 py-4 text-sm font-semibold">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {data?.map((subscription) => (
              <tr
                key={subscription.id}
                className="border-b last:border-b-0 hover:bg-gray-50"
              >
                <td className="px-5 py-4 text-sm font-medium text-gray-800">
                  {subscription.tenant}
                </td>

                <td className="px-5 py-4 text-sm text-gray-600">
                  {subscription.plan}
                </td>

                <td className="px-5 py-4 text-sm text-gray-600">
                  {subscription.users}
                </td>

                <td className="px-5 py-4 text-sm text-gray-600">
                  {subscription.licenses}
                </td>

                <td className="px-5 py-4 text-sm text-gray-600">
                  {subscription.startDate}
                </td>

                <td className="px-5 py-4 text-sm text-gray-600">
                  {subscription.expiryDate}
                </td>

                <td className="px-5 py-4 text-sm text-gray-600">
                  ₹{subscription.amount.toLocaleString("en-IN")}
                </td>

                <td className="px-5 py-4">
                  <span
                    className={`px-3 py-1 text-xs font-medium ${
                      subscription.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : subscription.status === "Expiring Soon"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {subscription.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SubscriptionManagement;