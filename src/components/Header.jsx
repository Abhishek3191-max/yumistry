import { useNavigate } from 'react-router-dom';
import { ShoppingCart, User, Leaf, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useDarkMode } from '../context/DarkModeContext';

const Header = () => {
  const navigate = useNavigate();
  const { getTotalItems } = useCart();
  const { getTotalWishlistItems } = useWishlist();
  const { darkMode } = useDarkMode();

  return (
    <div className={`fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[450px] z-50 backdrop-blur-xl border-b transition-colors ${
      darkMode 
        ? 'bg-gray-800/90 border-gray-700' 
        : 'bg-white/90 border-[#7f1d1d]/10'
    }`}>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => navigate('/home')}
            className="flex items-center gap-2 hover:scale-105 transition-transform"
          >
            <Leaf className={darkMode ? 'text-green-400' : 'text-[#f52d05]'} size={26} fill={darkMode ? '#4ade80' : '#7f1d1d'} />
            <h1 className={`text-xl font-black tracking-tight ${
              darkMode ? 'text-white' : 'text-[#7f1d1d]'
            }`}>Yumistry</h1>
          </button>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => navigate('/cart')}
              className="relative hover:scale-110 transition-transform"
            >
              <ShoppingCart size={22} className={darkMode ? 'text-white' : 'text-[#7f1d1d]'} />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-linear-to-r from-[#7f1d1d] to-[#f52d05] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {getTotalItems()}
                </span>
              )}
            </button>
            <button
              onClick={() => navigate('/wishlist')}
              className="relative hover:scale-110 transition-transform"
            >
              <Heart size={22} className={darkMode ? 'text-white' : 'text-[#7f1d1d]'} />
              {getTotalWishlistItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-linear-to-r from-[#7f1d1d] to-[#f52d05] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {getTotalWishlistItems()}
                </span>
              )}
            </button>
            <button 
              onClick={() => navigate('/account')}
              className="hover:scale-110 transition-transform"
            >
              <User size={22} className={darkMode ? 'text-white' : 'text-[#7f1d1d]'} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
