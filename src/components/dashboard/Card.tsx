type CardProps = {
  title: string;
  value: string | number;
  description?: string;
};

function Card({ title, value, description }: CardProps) {
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
          {title === "Total Tenants" && "🏢"}
          {title === "Active Tenants" && "✓"}
          {title === "Inactive Tenants" && "!"}
          {title === "Total Users" && "👥"}
          {title === "Active Licenses" && "📄"}
        </div>
      </div>
    </div>
  );
}

export default Card;