import { useNavigate } from 'react-router-dom';
import { ShoppingCart, User, Leaf } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useDarkMode } from '../context/DarkModeContext';

const Header = () => {
  const navigate = useNavigate();
  const { getTotalItems } = useCart();
  const { darkMode } = useDarkMode();

  return (
    <div className={`backdrop-blur-xl border-b sticky top-0 z-10 transition-colors ${
      darkMode 
        ? 'bg-gray-800/90 border-gray-700' 
        : 'bg-white/90 border-[#f99e61]/10'
    }`}>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => navigate('/home')}
            className="flex items-center gap-2 hover:scale-105 transition-transform"
          >
            <Leaf className={darkMode ? 'text-green-400' : 'text-[#f52d05]'} size={26} fill={darkMode ? '#4ade80' : '#f99e61'} />
            <h1 className={`text-xl font-black tracking-tight ${
              darkMode ? 'text-white' : 'text-[#f99e61]'
            }`}>Yumistry</h1>
          </button>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => navigate('/cart')}
              className="relative hover:scale-110 transition-transform"
            >
              <ShoppingCart size={22} className={darkMode ? 'text-white' : 'text-[#f99e61]'} />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-gradient-to-r from-[#f99e61] to-[#f52d05] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {getTotalItems()}
                </span>
              )}
            </button>
            <button 
              onClick={() => navigate('/account')}
              className="hover:scale-110 transition-transform"
            >
              <User size={22} className={darkMode ? 'text-white' : 'text-[#f99e61]'} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
