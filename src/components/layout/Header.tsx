import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  const title =
    location.pathname === "/tenants"
      ? "Tenant Management"
      : location.pathname.includes("/tenants/")
        ? "Tenant"
        : "Global Dashboard";

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-6">
      <div>
        <h1 className="text-lg font-semibold text-slate-800">
          {title}
        </h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden text-right sm:block">
          <p className="text-sm font-medium text-slate-800">
            Super Administrator
          </p>
          <p className="text-xs text-slate-500">
            Admin
          </p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center bg-blue-600 text-sm font-bold text-white">
          SA
        </div>
      </div>
    </header>
  );
}

export default Header;