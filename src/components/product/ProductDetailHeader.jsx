import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Share2, Heart, ShoppingCart } from 'lucide-react';
import { useDarkMode } from '../../context/DarkModeContext';
import { useCart } from '../../context/CartContext';

const ProductDetailHeader = ({ product, liked, setLiked }) => {
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: product.name, text: `Check out ${product.name} on Yumistry!`, url: window.location.href });
    }
  };

  return (
    <div className={`backdrop-blur-xl border-b sticky top-0 z-10 transition-colors ${
      darkMode ? 'bg-gray-800/90 border-gray-700' : 'bg-white/90 border-gray-100'
    }`}>
      <div className="relative flex items-center justify-between p-4">
        <button onClick={() => navigate(-1)} className={`p-2 rounded-lg transition-colors z-10 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
          <ArrowLeft size={22} className={darkMode ? 'text-white' : 'text-gray-800'} />
        </button>

        {/* Absolutely centered title */}
        <h1 className={`absolute left-1/2 -translate-x-1/2 text-[16px] font-black truncate max-w-40 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          {product.name}
        </h1>

        <div className="flex items-center  z-10">
          <button onClick={handleShare} className={`p-2 rounded-lg transition-colors ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
            <Share2 size={20} className={darkMode ? 'text-white' : 'text-gray-800'} />
          </button>
          <button onClick={() => navigate('/wishlist')} className={`p-2 rounded-lg transition-colors ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
            <Heart size={20} className={liked ? 'text-red-500 fill-red-500' : (darkMode ? 'text-white' : 'text-gray-800')} />
          </button>
          <button onClick={() => navigate('/cart')} className={`relative p-2 rounded-lg transition-colors ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
            <ShoppingCart size={20} className={darkMode ? 'text-white' : 'text-gray-800'} />
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#f52d05] text-white text-[9px] font-black rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailHeader;
