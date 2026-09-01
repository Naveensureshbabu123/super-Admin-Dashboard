import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", tenants: 65 },
  { month: "Feb", tenants: 74 },
  { month: "Mar", tenants: 82 },
  { month: "Apr", tenants: 94 },
  { month: "May", tenants: 108 },
  { month: "Jun", tenants: 125 },
];

function Chart() {
  return (
    <div className="border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-800">
        Tenant Growth
      </h2>

      <p className="mt-1 text-sm text-gray-500">
        Tenant growth over the last six months
      </p>

      <div className="mt-5 h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="tenants"
              stroke="#2563eb"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Chart;