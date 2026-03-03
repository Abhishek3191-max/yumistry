import React from 'react';
import { Home, Tag, ShoppingBag, Users, Search } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: <Home size={22} />, label: 'Home', path: '/home' },
    { icon: <Tag size={22} />, label: 'Offers', path: '/offers' },
    { icon: <ShoppingBag size={22} />, label: 'Orders', path: '/orders' },
    { icon: <Users size={22} />, label: 'Wholesale', path: '/wholesale' },
    { icon: <Search size={22} />, label: 'Search', path: '/search' },
  ];

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[450px] bg-white border-t border-sand flex justify-around py-3 z-50 shadow-[0_-5px_15px_rgba(0,0,0,0.05)]">
      {navItems.map((item) => (
        <button
          key={item.label}
          onClick={() => navigate(item.path)}
          className={`flex flex-col items-center gap-1 transition-colors ${
            location.pathname === item.path ? 'text-sage' : 'text-sand'
          }`}
        >
          {item.icon}
          <span className="text-[10px] font-bold uppercase tracking-wider">{item.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default BottomNav;