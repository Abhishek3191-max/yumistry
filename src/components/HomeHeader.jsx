import { ShoppingCart, User, Leaf, MapPin, ChevronDown, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useDarkMode } from '../context/DarkModeContext';

const HomeHeader = ({ selectedLocation, onLocationClick }) => {
  const navigate = useNavigate();
  const { getTotalItems } = useCart();
  const { getTotalWishlistItems } = useWishlist();
  const { darkMode } = useDarkMode();

  return (
    <div className={`backdrop-blur-xl  sticky top-0 transition-colors ${
      darkMode ? 'bg-gray-800/90 border-gray-700' : 'bg-white/90 border-[#7f1d1d]/10'
    }`}>
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <button onClick={() => navigate('/home')} className="flex items-center gap-2 hover:scale-105 transition-transform">
            <Leaf className="text-[#f52d05]" size={26} fill="#7f1d1d" />
            <h1 className="text-xl font-black tracking-tight text-[#7f1d1d]">Yumistry</h1>
          </button>
          <div className="flex items-center gap-3">
            <button onClick={() => navigate('/cart')} className="relative hover:scale-110 transition-transform">
              <ShoppingCart size={22} className="text-[#7f1d1d]" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-linear-to-r from-[#7f1d1d] to-[#f52d05] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {getTotalItems()}
                </span>
              )}
            </button>
            <button onClick={() => navigate('/wishlist')} className="relative hover:scale-110 transition-transform">
              <Heart size={22} className="text-[#7f1d1d]" />
              {getTotalWishlistItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-linear-to-r from-[#7f1d1d] to-[#f52d05] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {getTotalWishlistItems()}
                </span>
              )}
            </button>
            <button onClick={() => navigate('/account')} className="hover:scale-110 transition-transform">
              <User size={22} className="text-[#7f1d1d]" />
            </button>
          </div>
        </div>
        <button onClick={onLocationClick} className="flex items-center gap-2 text-sm hover:bg-[#7f1d1d]/5 px-2 py-1 rounded-lg transition-colors -ml-2">
          <MapPin size={16} className="text-[#f52d05]" />
          <span className="font-bold text-[#7f1d1d]">Delivery in 8 mins</span>
          <span className="text-[#7f1d1d]/60">{selectedLocation}</span>
          <ChevronDown size={16} className="text-[#7f1d1d]/60" />
        </button>
      </div>
    </div>
  );
};

export default HomeHeader;
