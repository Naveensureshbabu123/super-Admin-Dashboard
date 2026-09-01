import Card from "../components/dashboard/Card";
import PlatformHealth from "../components/dashboard/PlatformHealth";
import AnalyticsChart from "../components/dashboard/AnalyticsChart";
import RecentActivities from "../components/dashboard/RecentActivities";

function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Global Dashboard
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Monitor your entire platform from one place
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        <Card
          title="Total Tenants"
          value={125}
          description="All registered tenants"
        />

        <Card
          title="Active Tenants"
          value={112}
          description="Currently active"
        />

        <Card
          title="Inactive Tenants"
          value={13}
          description="Currently inactive"
        />

        <Card
          title="Total Users"
          value="5,240"
          description="Platform users"
        />

        <Card
          title="Active Licenses"
          value={98}
          description="Currently active"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <PlatformHealth />

        <AnalyticsChart />
      </div>

      <RecentActivities />
    </div>
  );
}

export default Dashboard;