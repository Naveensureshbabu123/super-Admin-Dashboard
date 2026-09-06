
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
  { month: "Feb", tenants: 72 },
  { month: "Mar", tenants: 80 },
  { month: "Apr", tenants: 91 },
  { month: "May", tenants: 103 },
  { month: "Jun", tenants: 112 },
  { month: "Jul", tenants: 118 },
  { month: "Aug", tenants: 125 },
];

function AnalyticsChart() {
  return (
    <div className="border border-gray-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-800">
        Tenant Growth
      </h2>

      <p className="mt-1 text-sm text-gray-500">
        Monthly tenant growth
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

export default AnalyticsChart;