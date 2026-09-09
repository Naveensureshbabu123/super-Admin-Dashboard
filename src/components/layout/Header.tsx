import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useNotifications } from "../../hooks/useNotifications";

function Header() {
  const location = useLocation();
  const [showNotifications, setShowNotifications] = useState(false);

  const { data: notifications } = useNotifications();

  const title =
    location.pathname === "/tenants"
      ? "Tenant Management"
      : location.pathname.includes("/tenants/")
        ? "Tenant"
        : location.pathname === "/organizations"
          ? "Organization Management"
          : location.pathname === "/users"
            ? "User Management"
            : location.pathname === "/roles"
              ? "Role Management"
              : location.pathname === "/permissions"
                ? "Permission Management"
                : location.pathname === "/data-permissions"
                  ? "Data Permissions"
                  : location.pathname === "/platform-configuration"
                    ? "Platform Configuration"
                    : location.pathname === "/features"
                      ? "Feature Management"
                      : location.pathname === "/subscriptions"
                        ? "Subscription & License"
                        : location.pathname === "/audit-logs"
                          ? "Audit Logs"
                          : location.pathname === "/notifications"
                            ? "Notifications"
                            : location.pathname === "/monitoring"
                              ? "Monitoring"
                              : "Global Dashboard";

  const unreadCount =
    notifications?.filter(
      (notification) => notification.status === "Unread"
    ).length ?? 0;

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-6">
      <div>
        <h1 className="text-lg font-semibold text-slate-800">
          {title}
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <button
            type="button"
            onClick={() =>
              setShowNotifications(!showNotifications)
            }
            className="relative flex h-10 w-10 items-center justify-center text-slate-600 hover:bg-slate-100"
          >
            <span className="text-xl">🔔</span>

            {unreadCount > 0 && (
              <span className="absolute right-0 top-0 flex h-5 min-w-5 items-center justify-center bg-red-500 px-1 text-xs font-bold text-white">
                {unreadCount}
              </span>
            )}
          </button>

          {showNotifications && (
            <div className="absolute right-0 top-12 z-50 w-80 border border-slate-200 bg-white shadow-lg">
              <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
                <h2 className="font-semibold text-slate-800">
                  Notifications
                </h2>

                <span className="text-xs text-slate-500">
                  {unreadCount} unread
                </span>
              </div>

              <div className="max-h-80 overflow-y-auto">
                {notifications && notifications.length > 0 ? (
                  notifications.slice(0, 5).map((notification) => (
                    <div
                      key={notification.id}
                      className="border-b border-slate-100 px-4 py-3 hover:bg-slate-50"
                    >
                      <div className="flex gap-3">
                        {notification.status === "Unread" && (
                          <span className="mt-1.5 h-2 w-2 shrink-0 bg-blue-500" />
                        )}

                        <div>
                          <p className="text-sm font-semibold text-slate-800">
                            {notification.title}
                          </p>

                          <p className="mt-1 text-xs text-slate-500">
                            {notification.message}
                          </p>

                          <p className="mt-1 text-xs text-slate-400">
                            {notification.date}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="px-4 py-6 text-center text-sm text-slate-500">
                    No notifications
                  </p>
                )}
              </div>

              <div className="border-t border-slate-200 px-4 py-3">
                <Link
                  to="/notifications"
                  onClick={() => setShowNotifications(false)}
                  className="block text-center text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                  View all notifications
                </Link>
              </div>
            </div>
          )}
        </div>

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