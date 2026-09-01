function RecentActivities() {
  const activities = [
    {
      title: "New tenant created",
      name: "Acme Corporation",
      time: "10 minutes ago",
    },
    {
      title: "Tenant activated",
      name: "TechNova",
      time: "30 minutes ago",
    },
    {
      title: "Tenant configuration updated",
      name: "Alpha Ltd",
      time: "1 hour ago",
    },
    {
      title: "License renewed",
      name: "Global Systems",
      time: "2 hours ago",
    },
    {
      title: "Tenant deactivated",
      name: "Demo Corporation",
      time: "3 hours ago",
    },
  ];

  return (
    <div className="border border-gray-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-800">
        Recent Activities
      </h2>

      <p className="mt-1 text-sm text-gray-500">
        Latest platform activities
      </p>

      <div className="mt-5 divide-y divide-gray-100">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="text-sm font-medium text-gray-800">
                {activity.title}
              </p>

              <p className="mt-1 text-sm text-gray-500">
                {activity.name}
              </p>
            </div>

            <span className="text-xs text-gray-400">
              {activity.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentActivities;