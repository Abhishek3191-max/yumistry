import React from 'react';
import { Home, Search, ShoppingBag, Package, User, Heart } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'Home', path: '/home' },
    { icon: Search, label: 'Search', path: '/search' },
    { icon: Heart, label: 'Wishlist', path: '/wishlist' },
    { icon: Package, label: 'Orders', path: '/orders' },
    { icon: User, label: 'Account', path: '/account' },
  ];

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[450px] bg-white/95 backdrop-blur-lg border-t border-fresh-green/10 flex justify-around py-2 z-50 shadow-[0_-2px_20px_rgba(132,204,22,0.08)]">
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
                className="absolute inset-0 bg-leaf/10 rounded-xl"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
            
            {/* Icon */}
            <div className="relative z-10">
              <Icon 
                size={22} 
                className={`transition-colors ${
                  isActive ? 'text-leaf' : 'text-fresh-green/40'
                }`}
                strokeWidth={isActive ? 2.5 : 2}
              />
            </div>
            
            {/* Label */}
            <span 
              className={`text-[10px] font-bold relative z-10 transition-colors ${
                isActive ? 'text-leaf' : 'text-fresh-green/50'
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