import { Routes, Route } from 'react-router-dom';
import AdminLayout from './components/layout/AdminLayout';
import AdminDashboard from './pages/AdminDashboard';
import AdminProducts from './pages/AdminProducts';
import AdminOrders from './pages/AdminOrders';
import AdminCustomers from './pages/AdminCustomers';
import AdminCategories from './pages/AdminCategories';
import AdminWholesale from './pages/AdminWholesale';
import AdminSettings from './pages/AdminSettings';

const AdminRoutes = () => (
  <AdminLayout>
    <Routes>
      <Route index element={<AdminDashboard />} />
      <Route path="products" element={<AdminProducts />} />
      <Route path="categories" element={<AdminCategories />} />
      <Route path="orders" element={<AdminOrders />} />
      <Route path="customers" element={<AdminCustomers />} />
      <Route path="wholesale" element={<AdminWholesale />} />
      <Route path="settings" element={<AdminSettings />} />
    </Routes>
  </AdminLayout>
);

export default AdminRoutes;
