import { useState } from "react";
import type { PlatformConfiguration } from "../../types/management";

interface Props {
  data: PlatformConfiguration;
  onSubmit: (data: PlatformConfiguration) => void;
  isPending: boolean;
}

function ConfigurationForm({
  data,
  onSubmit,
  isPending,
}: Props) {
  const [formData, setFormData] = useState(data);

  function handleChange(
    field: keyof PlatformConfiguration,
    value: string | number | boolean
  ) {
    setFormData({
      ...formData,
      [field]: value,
    });
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    onSubmit(formData);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-gray-200 bg-white p-6"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Platform Name
          </label>

          <input
            value={formData.platformName}
            onChange={(event) =>
              handleChange("platformName", event.target.value)
            }
            className="w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Support Email
          </label>

          <input
            type="email"
            value={formData.supportEmail}
            onChange={(event) =>
              handleChange("supportEmail", event.target.value)
            }
            className="w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Country
          </label>

          <select
            value={formData.country}
            onChange={(event) =>
              handleChange("country", event.target.value)
            }
            className="w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-500"
          >
            <option value="India">India</option>
            <option value="United States">United States</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Australia">Australia</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Time Zone
          </label>

          <select
            value={formData.timezone}
            onChange={(event) =>
              handleChange("timezone", event.target.value)
            }
            className="w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-500"
          >
            <option value="Asia/Kolkata">Asia/Kolkata</option>
            <option value="UTC">UTC</option>
            <option value="America/New_York">
              America/New_York
            </option>
            <option value="Europe/London">
              Europe/London
            </option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Session Timeout
          </label>

          <input
            type="number"
            min="5"
            value={formData.sessionTimeout}
            onChange={(event) =>
              handleChange(
                "sessionTimeout",
                Number(event.target.value)
              )
            }
            className="w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-500"
          />
        </div>
      </div>

      <div className="mt-6 space-y-5 border-t border-gray-200 pt-6">
        <label className="flex items-center gap-3 text-sm text-gray-700">
          <input
            type="checkbox"
            checked={formData.maintenanceMode}
            onChange={(event) =>
              handleChange(
                "maintenanceMode",
                event.target.checked
              )
            }
            className="h-4 w-4"
          />

          Maintenance Mode
        </label>

        <label className="flex items-center gap-3 text-sm text-gray-700">
          <input
            type="checkbox"
            checked={formData.emailNotifications}
            onChange={(event) =>
              handleChange(
                "emailNotifications",
                event.target.checked
              )
            }
            className="h-4 w-4"
          />

          Email Notifications
        </label>
      </div>

      <div className="mt-6">
        <button
          type="submit"
          disabled={isPending}
          className="bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50"
        >
          {isPending ? "Saving..." : "Save Configuration"}
        </button>
      </div>
    </form>
  );
}

export default ConfigurationForm;