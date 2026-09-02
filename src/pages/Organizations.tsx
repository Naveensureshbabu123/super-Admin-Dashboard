function Organizations() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Organization Management
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Manage organizations across all tenants.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="border border-gray-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">
            Total Organizations
          </p>

          <p className="mt-2 text-3xl font-bold text-gray-800">
            86
          </p>
        </div>

        <div className="border border-gray-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">
            Active Organizations
          </p>

          <p className="mt-2 text-3xl font-bold text-green-600">
            78
          </p>
        </div>

        <div className="border border-gray-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">
            Inactive Organizations
          </p>

          <p className="mt-2 text-3xl font-bold text-red-600">
            8
          </p>
        </div>

        <div className="border border-gray-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">
            New This Month
          </p>

          <p className="mt-2 text-3xl font-bold text-blue-600">
            12
          </p>
        </div>
      </div>

      <div className="border border-gray-200 bg-white shadow-sm">
        <div className="border-b border-gray-200 p-5">
          <h2 className="text-lg font-semibold text-gray-800">
            Organizations
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-5 py-4 text-sm font-semibold text-gray-600">
                  Organization
                </th>

                <th className="px-5 py-4 text-sm font-semibold text-gray-600">
                  Tenant
                </th>

                <th className="px-5 py-4 text-sm font-semibold text-gray-600">
                  Users
                </th>

                <th className="px-5 py-4 text-sm font-semibold text-gray-600">
                  Status
                </th>

                <th className="px-5 py-4 text-sm font-semibold text-gray-600">
                  Created
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-5 py-4 text-sm font-medium text-gray-800">
                  Acme Technologies
                </td>

                <td className="px-5 py-4 text-sm text-gray-600">
                  Acme Corp
                </td>

                <td className="px-5 py-4 text-sm text-gray-600">
                  120
                </td>

                <td className="px-5 py-4">
                  <span className="bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                    Active
                  </span>
                </td>

                <td className="px-5 py-4 text-sm text-gray-600">
                  01 Aug 2026
                </td>
              </tr>

              <tr>
                <td className="px-5 py-4 text-sm font-medium text-gray-800">
                  TechNova Solutions
                </td>

                <td className="px-5 py-4 text-sm text-gray-600">
                  TechNova
                </td>

                <td className="px-5 py-4 text-sm text-gray-600">
                  85
                </td>

                <td className="px-5 py-4">
                  <span className="bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                    Active
                  </span>
                </td>

                <td className="px-5 py-4 text-sm text-gray-600">
                  05 Aug 2026
                </td>
              </tr>

              <tr>
                <td className="px-5 py-4 text-sm font-medium text-gray-800">
                  Alpha Business Group
                </td>

                <td className="px-5 py-4 text-sm text-gray-600">
                  Alpha Ltd
                </td>

                <td className="px-5 py-4 text-sm text-gray-600">
                  45
                </td>

                <td className="px-5 py-4">
                  <span className="bg-red-100 px-3 py-1 text-xs font-medium text-red-700">
                    Inactive
                  </span>
                </td>

                <td className="px-5 py-4 text-sm text-gray-600">
                  10 Aug 2026
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Organizations;