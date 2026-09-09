import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import ProtectedRoute from "./components/auth/ProtectedRoute";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Tenants from "./pages/Tenants";
import CreateTenant from "./pages/CreateTenant";
import TenantDetails from "./pages/TenantDetails";
import EditTenant from "./pages/EditTenant";
import Organizations from "./pages/Organizations";
import UserManagement from "./pages/UserManagement";
import RoleManagement from "./pages/RoleManagement";
import PermissionManagement from "./pages/PermissionManagement";
import DataPermissions from "./pages/DataPermissions";
import PlatformConfiguration from "./pages/PlatformConfiguration";
import FeatureManagement from "./pages/FeatureManagement";
import SubscriptionManagement from "./pages/SubscriptionManagement";
import AuditLogs from "./pages/AuditLogs";
import Monitoring from "./pages/Monitoring";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Layout />}>

            <Route index element={<Dashboard />} />

            <Route path="tenants" element={<Tenants />} />

            <Route
              path="tenants/create"
              element={<CreateTenant />}
            />

            <Route
              path="tenants/:id"
              element={<TenantDetails />}
            />

            <Route
              path="tenants/:id/edit"
              element={<EditTenant />}
            />

            <Route
              path="organizations"
              element={<Organizations />}
            />

            <Route
              path="users"
              element={<UserManagement />}
            />

            <Route
              path="roles"
              element={<RoleManagement />}
            />

            <Route
              path="permissions"
              element={<PermissionManagement />}
            />

            <Route
              path="data-permissions"
              element={<DataPermissions />}
            />

            <Route
              path="platform-configuration"
              element={<PlatformConfiguration />}
            />

            <Route
              path="features"
              element={<FeatureManagement />}
            />

            <Route
              path="subscriptions"
              element={<SubscriptionManagement />}
            />

            <Route
              path="audit-logs"
              element={<AuditLogs />}
            />

            <Route
              path="monitoring"
              element={<Monitoring />}
            />

          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;