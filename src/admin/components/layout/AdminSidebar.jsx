import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard, Package, ShoppingBag, Users,
  Store, Tag, Settings, LogOut, Leaf, X
} from 'lucide-react';

const navItems = [
  { section: 'Main' },
  { icon: LayoutDashboard, label: 'Dashboard', path: '/admin' },
  { section: 'Catalogue' },
  { icon: Package, label: 'Products', path: '/admin/products' },
  { icon: Tag, label: 'Categories', path: '/admin/categories' },
  { section: 'Sales' },
  { icon: ShoppingBag, label: 'Orders', path: '/admin/orders' },
  { icon: Users, label: 'Customers', path: '/admin/customers' },
  { section: 'Business' },
  { icon: Store, label: 'Wholesale', path: '/admin/wholesale' },
  { section: 'System' },
  { icon: Settings, label: 'Settings', path: '/admin/settings' },
];

const AdminSidebar = ({ open, onClose }) => {
  return (
    <>
      {/* Overlay — click bahar karo toh close */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`h-full bg-white border-r border-gray-100 flex flex-col flex-shrink-0 transition-all duration-300 overflow-hidden z-50
          ${open ? 'w-64' : 'w-0'}`}
      >
        <div className="w-64 flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <Leaf size={22} className="text-[#f52d05]" fill="#7f1d1d" />
              <div>
                <h1 className="text-base font-black text-[#7f1d1d]">Yumistry</h1>
                <p className="text-[10px] text-gray-400 font-semibold -mt-0.5">Admin Panel</p>
              </div>
            </div>
            <button onClick={onClose} className="p-1 rounded-lg hover:bg-gray-100">
              <X size={18} className="text-gray-500" />
            </button>
          </div>

          {/* Nav */}
          <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-0.5">
            {navItems.map((item, i) => {
              if (item.section) {
                return (
                  <p key={i} className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-3 pt-4 pb-1">
                    {item.section}
                  </p>
                );
              }
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/admin'}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all whitespace-nowrap ${
                      isActive
                        ? 'bg-[#f52d05]/10 text-[#f52d05]'
                        : 'text-gray-500 hover:bg-gray-50 hover:text-gray-800'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                      {item.label}
                    </>
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Logout */}
          <div className="px-3 py-4 border-t border-gray-100">
            <button className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-red-500 hover:bg-red-50 w-full transition-all">
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default AdminSidebar;
