import ConfigurationForm from "../components/configuration/ConfigurationForm";
import { usePlatformConfiguration } from "../hooks/usePlatformConfiguration";
import { useUpdatePlatformConfiguration } from "../hooks/useUpdatePlatformConfiguration";
import type { PlatformConfiguration as Configuration } from "../types/management";

function PlatformConfiguration() {
  const { data, isLoading, isError } =
    usePlatformConfiguration();

  const updateConfiguration =
    useUpdatePlatformConfiguration();

  if (isLoading) {
    return (
      <p className="text-gray-500">
        Loading configuration...
      </p>
    );
  }

  if (isError || !data) {
    return (
      <p className="text-red-500">
        Failed to load configuration.
      </p>
    );
  }

  function handleSave(updatedData: Configuration) {
    updateConfiguration.mutate(updatedData);
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Platform Configuration
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Manage global platform settings and system preferences
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div className="border border-gray-200 bg-white p-5">
          <p className="text-sm text-gray-500">
            Platform
          </p>

          <p className="mt-2 text-lg font-bold text-gray-800">
            {data.platformName}
          </p>
        </div>

        <div className="border border-gray-200 bg-white p-5">
          <p className="text-sm text-gray-500">
            Time Zone
          </p>

          <p className="mt-2 text-lg font-bold text-gray-800">
            {data.timezone}
          </p>
        </div>

        <div className="border border-gray-200 bg-white p-5">
          <p className="text-sm text-gray-500">
            Session Timeout
          </p>

          <p className="mt-2 text-lg font-bold text-gray-800">
            {data.sessionTimeout} minutes
          </p>
        </div>
      </div>

      <ConfigurationForm
        data={data}
        onSubmit={handleSave}
        isPending={updateConfiguration.isPending}
      />

      {updateConfiguration.isSuccess && (
        <p className="text-sm text-green-600">
          Platform configuration updated successfully.
        </p>
      )}
    </div>
  );
}

export default PlatformConfiguration;