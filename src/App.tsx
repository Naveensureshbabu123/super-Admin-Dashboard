import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import Tenants from "./pages/Tenants";
import CreateTenant from "./pages/CreateTenant";
import TenantDetails from "./pages/TenantDetails";
import EditTenant from "./pages/EditTenant";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />

          <Route
            path="tenants"
            element={<Tenants />}
          />

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;