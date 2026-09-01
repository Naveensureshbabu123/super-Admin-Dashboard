import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Tenant, TenantPlan } from "../../types/tenant";

interface Props {
  tenant?: Tenant;
  onSubmit: (tenant: Tenant) => void;
  buttonText: string;
}

function TenantForm({
  tenant,
  onSubmit,
  buttonText,
}: Props) {
  const navigate = useNavigate();

  const [form, setForm] = useState<Tenant>(
    tenant || {
      id: 0,
      name: "",
      code: "",
      admin: "",
      email: "",
      phone: "",
      plan: "Enterprise",
      country: "India",
      timezone: "Asia/Kolkata",
      status: "Active",
      created: new Date().toLocaleDateString(
        "en-GB",
        {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }
      ),
      users: 0,
      organizations: 0,
      activeUsers: 0,
      storage: 0,
    }
  );

  const [error, setError] = useState("");

  function updateField(
    field: keyof Tenant,
    value: string
  ) {
    setForm((previous) => ({
      ...previous,
      [field]:
        field === "plan"
          ? (value as TenantPlan)
          : field === "status"
            ? (value as "Active" | "Inactive")
            : value,
    }));
  }

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (!form.name.trim()) {
      setError("Tenant name is required");
      return;
    }

    if (!form.code.trim()) {
      setError("Tenant code is required");
      return;
    }

    if (!form.admin.trim()) {
      setError("Admin name is required");
      return;
    }

    if (!form.email.trim()) {
      setError("Admin email is required");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setError("Enter a valid email address");
      return;
    }

    if (!form.plan) {
      setError("Subscription is required");
      return;
    }

    setError("");
    onSubmit(form);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-slate-200 bg-white p-5 shadow-sm sm:p-7"
    >
      {error && (
        <div className="mb-5 border border-red-200 bg-red-50 p-3 text-sm text-red-600">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Tenant Name
          </label>

          <input
            value={form.name}
            onChange={(e) =>
              updateField("name", e.target.value)
            }
            className="w-full border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
            placeholder="Acme Corporation"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Tenant Code
          </label>

          <input
            value={form.code}
            onChange={(e) =>
              updateField(
                "code",
                e.target.value.toUpperCase()
              )
            }
            className="w-full border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
            placeholder="ACM001"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Admin Name
          </label>

          <input
            value={form.admin}
            onChange={(e) =>
              updateField("admin", e.target.value)
            }
            className="w-full border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
            placeholder="John Smith"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Admin Email
          </label>

          <input
            type="email"
            value={form.email}
            onChange={(e) =>
              updateField("email", e.target.value)
            }
            className="w-full border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Phone
          </label>

          <input
            value={form.phone}
            onChange={(e) =>
              updateField("phone", e.target.value)
            }
            className="w-full border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
            placeholder="+91 9876543210"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Subscription
          </label>

          <select
            value={form.plan}
            onChange={(e) =>
              updateField("plan", e.target.value)
            }
            className="w-full border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
          >
            <option value="Enterprise">
              Enterprise
            </option>
            <option value="Pro">Pro</option>
            <option value="Basic">Basic</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Country
          </label>

          <select
            value={form.country}
            onChange={(e) =>
              updateField("country", e.target.value)
            }
            className="w-full border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
          >
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="Singapore">
              Singapore
            </option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Time Zone
          </label>

          <select
            value={form.timezone}
            onChange={(e) =>
              updateField(
                "timezone",
                e.target.value
              )
            }
            className="w-full border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
          >
            <option value="Asia/Kolkata">
              Asia/Kolkata
            </option>
            <option value="America/New_York">
              America/New_York
            </option>
            <option value="Europe/London">
              Europe/London
            </option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Status
          </label>

          <select
            value={form.status}
            onChange={(e) =>
              updateField("status", e.target.value)
            }
            className="w-full border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
          >
            <option value="Active">Active</option>
            <option value="Inactive">
              Inactive
            </option>
          </select>
        </div>
      </div>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={() => navigate("/tenants")}
          className="border border-slate-300 px-6 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700"
        >
          {buttonText}
        </button>
      </div>
    </form>
  );
}

export default TenantForm;