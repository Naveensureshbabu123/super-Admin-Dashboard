type CardProps = {
  title: string;
  value: string | number;
  description?: string;
};

function Card({ title, value, description }: CardProps) {
  let icon = "📊";

  if (title === "Total Tenants") {
    icon = "🏢";
  } else if (title === "Active Tenants") {
    icon = "✓";
  } else if (title === "Inactive Tenants") {
    icon = "!";
  } else if (title === "Total Users") {
    icon = "👥";
  } else if (title === "Active Licenses") {
    icon = "📄";
  } else if (title === "Total Features") {
    icon = "⚙";
  } else if (title === "Enabled Features") {
    icon = "✓";
  } else if (title === "Disabled Features") {
    icon = "!";
  } else if (title === "Feature Usage") {
    icon = "📊";
  } else if (title === "Total Subscriptions") {
    icon = "📄";
  } else if (title === "Active") {
    icon = "✓";
  } else if (title === "Expiring Soon") {
    icon = "!";
  } else if (title === "Expired") {
    icon = "!";
  } else if (title === "Total Licenses") {
    icon = "📄";
  }

  return (
    <div className="border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">
            {title}
          </p>

          <h2 className="mt-2 text-2xl font-bold text-gray-800">
            {value}
          </h2>

          {description && (
            <p className="mt-1 text-xs text-gray-500">
              {description}
            </p>
          )}
        </div>

        <div className="flex h-10 w-10 items-center justify-center bg-blue-50 text-blue-600">
          {icon}
        </div>
      </div>
    </div>
  );
}

export default Card;