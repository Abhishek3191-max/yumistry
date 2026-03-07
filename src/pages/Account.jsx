import { useNavigate } from 'react-router-dom';
import { User, Phone, Mail, MapPin, Package, Heart, Wallet, Settings, LogOut, ChevronRight, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';
import BottomNav from '../components/BottomNav';

const Account = () => {
  const navigate = useNavigate();
  
  // Get user data
  const userData = JSON.parse(localStorage.getItem('userData') || '{}');

  const handleLogout = () => {
    localStorage.removeItem('userData');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('cart');
    navigate('/login');
  };

  const menuItems = [
    { icon: Package, label: 'My Orders', path: '/orders', color: 'text-blue-600' },
    { icon: Heart, label: 'Wishlist', path: '/wishlist', color: 'text-red-500' },
    { icon: MapPin, label: 'Saved Addresses', path: '/addresses', color: 'text-green-600' },
    { icon: Wallet, label: 'Wallet', path: '/wallet', color: 'text-purple-600' },
    { icon: Settings, label: 'Settings', path: '/settings', color: 'text-gray-600' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0fdf4] via-white to-[#ecfccb] pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-fresh-green to-leaf p-6 pb-8">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
            <User size={40} className="text-leaf" />
          </div>
          <div className="flex-1 text-white">
            <h1 className="text-2xl font-black">{userData.name || 'Guest User'}</h1>
            <p className="text-sm opacity-90">{userData.phone || 'Not logged in'}</p>
          </div>
        </div>
      </div>

      <div className="px-4 -mt-4">
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl p-4 shadow-lg border border-fresh-green/10 mb-4"
        >
          <h3 className="font-black text-fresh-green mb-3">Profile Details</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
              <User size={18} className="text-fresh-green/60" />
              <div className="flex-1">
                <p className="text-xs text-fresh-green/60">Name</p>
                <p className="font-bold text-sm text-fresh-green">{userData.name || 'Not provided'}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
              <Phone size={18} className="text-fresh-green/60" />
              <div className="flex-1">
                <p className="text-xs text-fresh-green/60">Phone</p>
                <p className="font-bold text-sm text-fresh-green">{userData.phone || 'Not provided'}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
              <Mail size={18} className="text-fresh-green/60" />
              <div className="flex-1">
                <p className="text-xs text-fresh-green/60">Email</p>
                <p className="font-bold text-sm text-fresh-green">{userData.email || 'Not provided'}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Menu Items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-sm border border-fresh-green/10 mb-4 overflow-hidden"
        >
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => navigate(item.path)}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors border-b border-fresh-green/10 last:border-b-0"
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg bg-gray-50 ${item.color}`}>
                  <item.icon size={20} />
                </div>
                <span className="font-bold text-fresh-green">{item.label}</span>
              </div>
              <ChevronRight size={20} className="text-fresh-green/40" />
            </button>
          ))}
        </motion.div>

        {/* Yumistry Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-leaf/10 rounded-2xl p-4 border border-leaf/20 mb-4"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <Leaf className="text-leaf" size={20} fill="#84cc16" />
            <span className="font-black text-fresh-green">Yumistry</span>
          </div>
          <p className="text-xs text-center text-fresh-green/60 font-medium">
            Chemistry of Freshness
          </p>
        </motion.div>

        {/* Logout Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleLogout}
          className="w-full bg-white border-2 border-red-500 text-red-500 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-red-50 transition-all"
        >
          <LogOut size={20} />
          Logout
        </motion.button>
      </div>

      <BottomNav />
    </div>
  );
};

export default Account;
