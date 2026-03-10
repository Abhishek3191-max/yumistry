import React from 'react';
import { Home, Search, Tag, Package, User } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useDarkMode } from '../context/DarkModeContext';

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { darkMode } = useDarkMode();

  const navItems = [
    { icon: Home, label: 'Home', path: '/home' },
    { icon: Search, label: 'Search', path: '/search' },
    { icon: Tag, label: 'Offers', path: '/offers' },
    { icon: Package, label: 'Orders', path: '/orders' },
    { icon: User, label: 'Account', path: '/account' },
  ];

  return (
    <nav className={`fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[450px] backdrop-blur-lg border-t flex justify-around py-2 z-50 transition-colors ${
      darkMode 
        ? 'bg-gray-800/95 border-gray-700 shadow-[0_-2px_20px_rgba(0,0,0,0.3)]'
        : 'bg-white/95 border-fresh-green/10 shadow-[0_-2px_20px_rgba(132,204,22,0.08)]'
    }`}>
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        const Icon = item.icon;
        
        return (
          <motion.button
            key={item.label}
            onClick={() => navigate(item.path)}
            whileTap={{ scale: 0.9 }}
            className="flex flex-col items-center gap-1 py-2 px-3 rounded-xl transition-all relative"
          >
            {/* Active Indicator */}
            {isActive && (
              <motion.div
                layoutId="activeTab"
                className={`absolute inset-0 rounded-xl ${
                  darkMode ? 'bg-green-500/20' : 'bg-leaf/10'
                }`}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
            
            {/* Icon */}
            <div className="relative z-10">
              <Icon 
                size={22} 
                className={`transition-colors ${
                  isActive 
                    ? (darkMode ? 'text-green-400' : 'text-leaf')
                    : (darkMode ? 'text-gray-400' : 'text-fresh-green/40')
                }`}
                strokeWidth={isActive ? 2.5 : 2}
              />
            </div>
            
            {/* Label */}
            <span 
              className={`text-[10px] font-bold relative z-10 transition-colors ${
                isActive 
                  ? (darkMode ? 'text-green-400' : 'text-leaf')
                  : (darkMode ? 'text-gray-400' : 'text-fresh-green/50')
              }`}
            >
              {item.label}
            </span>
          </motion.button>
        );
      })}
    </nav>
  );
};

export default BottomNav;