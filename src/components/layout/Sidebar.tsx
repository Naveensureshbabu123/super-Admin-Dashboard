import { NavLink } from "react-router-dom";

type SidebarProps = {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
};

function Sidebar({
  collapsed,
  setCollapsed,
}: SidebarProps) {
  const menuItems = [
    {
      name: "Dashboard",
      path: "/",
    },
    {
      name: "Tenant Management",
      path: "/tenants",
    },
    {
      name: "Organization Management",
      path: "/organizations",
    },
    {
      name: "User Management",
      path: "/users",
    },
    {
      name: "Role Management",
      path: "/roles",
    },
    {
      name: "Permission Management",
      path: "/permissions",
    },
    {
      name: "Data Permissions",
      path: "/data-permissions",
    },
    {
      name: "Platform Configuration",
      path: "/platform-configuration",
    },
    {
      name: "Feature Management",
      path: "/features",
    },
    {
      name: "Subscription & License",
      path: "/subscriptions",
    },
    {
      name: "Audit Logs",
      path: "/audit-logs",
    },
    {
      name: "Monitoring",
      path: "/monitoring",
    },
  ];

  return (
    <aside
      className={`fixed left-0 top-0 z-40 hidden h-screen bg-slate-950 text-white transition-all duration-300 lg:block ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      <div
        className={`flex h-16 items-center border-b border-slate-800 ${
          collapsed
            ? "justify-center"
            : "justify-between px-6"
        }`}
      >
        {!collapsed && (
          <div>
            <h1 className="text-lg font-bold">
              One Enterprise
            </h1>

            <p className="text-xs text-slate-400">
              Super Admin Portal
            </p>
          </div>
        )}

        <button
          type="button"
          onClick={() => setCollapsed(!collapsed)}
          className="flex h-9 w-9 items-center justify-center bg-slate-800 text-white hover:bg-slate-700"
        >
          {collapsed ? "→" : "←"}
        </button>
      </div>

      <nav className="h-[calc(100vh-4rem)] overflow-y-auto p-4">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            title={collapsed ? item.name : ""}
            className={({ isActive }) =>
              `mb-2 block px-4 py-3 text-sm font-medium transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              } ${collapsed ? "text-center" : ""}`
            }
          >
            {collapsed ? item.name.charAt(0) : item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;