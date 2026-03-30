import { motion } from 'framer-motion';
import { Package, Heart, MapPin, Wallet, Settings, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useDarkMode } from '../../context/DarkModeContext';

const menuItems = [
  { icon: Package, label: 'My Orders', path: '/orders', color: 'text-blue-500', bg: 'bg-blue-50' },
  { icon: Heart, label: 'Wishlist', path: '/wishlist', color: 'text-red-500', bg: 'bg-red-50' },
  { icon: MapPin, label: 'Saved Addresses', path: '/addresses', color: 'text-green-600', bg: 'bg-green-50' },
  { icon: Wallet, label: 'Wallet', path: '/wallet', color: 'text-purple-600', bg: 'bg-purple-50' },
  { icon: Settings, label: 'Settings', path: '/settings', color: 'text-gray-600', bg: 'bg-gray-100' },
];

const AccountMenu = () => {
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className={`rounded-2xl shadow-sm border mb-4 overflow-hidden ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}
    >
      {menuItems.map((item, i) => (
        <button
          key={i}
          onClick={() => navigate(item.path)}
          className={`w-full flex items-center justify-between p-4 transition-colors border-b last:border-b-0 ${
            darkMode ? 'border-gray-700 hover:bg-gray-700' : 'border-gray-50 hover:bg-gray-50'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-xl ${darkMode ? 'bg-gray-700' : item.bg}`}>
              <item.icon size={18} className={item.color} />
            </div>
            <span className={`font-semibold text-sm ${darkMode ? 'text-white' : 'text-gray-800'}`}>{item.label}</span>
          </div>
          <ChevronRight size={18} className="text-gray-400" />
        </button>
      ))}
    </motion.div>
  );
};

export default AccountMenu;
