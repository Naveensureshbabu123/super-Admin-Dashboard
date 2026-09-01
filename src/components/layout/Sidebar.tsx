import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-64 bg-slate-950 text-white lg:block">
      <div className="flex h-16 items-center border-b border-slate-800 px-6">
        <div>
          <h1 className="text-lg font-bold">
            One Enterprise
          </h1>
          <p className="text-xs text-slate-400">
            Super Admin Portal
          </p>
        </div>
      </div>

      <nav className="p-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `mb-2 block px-4 py-3 text-sm ${
              isActive
                ? "bg-blue-600 text-white"
                : "text-slate-300 hover:bg-slate-800"
            }`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/tenants"
          className={({ isActive }) =>
            `block px-4 py-3 text-sm ${
              isActive
                ? "bg-blue-600 text-white"
                : "text-slate-300 hover:bg-slate-800"
            }`
          }
        >
          Tenant Management
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;