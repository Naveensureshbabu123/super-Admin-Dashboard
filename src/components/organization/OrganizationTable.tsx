import type { Organization } from "../../types/management";

type Props = {
  organizations: Organization[];
};

function OrganizationTable({ organizations }: Props) {
  return (
    <div className="overflow-x-auto border border-gray-200 bg-white shadow-sm">
      <table className="min-w-full text-left text-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-5 py-4 font-semibold text-gray-700">
              Organization
            </th>

            <th className="px-5 py-4 font-semibold text-gray-700">
              Code
            </th>

            <th className="px-5 py-4 font-semibold text-gray-700">
              Tenant
            </th>

            <th className="px-5 py-4 font-semibold text-gray-700">
              Users
            </th>

            <th className="px-5 py-4 font-semibold text-gray-700">
              Status
            </th>

            <th className="px-5 py-4 font-semibold text-gray-700">
              Created
            </th>
          </tr>
        </thead>

        <tbody>
          {organizations.map((organization) => (
            <tr
              key={organization.id}
              className="border-t border-gray-200 hover:bg-gray-50"
            >
              <td className="px-5 py-4 font-medium text-gray-800">
                {organization.name}
              </td>

              <td className="px-5 py-4 text-gray-600">
                {organization.code}
              </td>

              <td className="px-5 py-4 text-gray-600">
                {organization.tenant}
              </td>

              <td className="px-5 py-4 text-gray-600">
                {organization.users}
              </td>

              <td className="px-5 py-4">
                <span
                  className={`px-3 py-1 text-xs font-medium ${
                    organization.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {organization.status}
                </span>
              </td>

              <td className="px-5 py-4 text-gray-600">
                {organization.created}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrganizationTable;