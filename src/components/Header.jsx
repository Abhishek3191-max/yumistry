import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, User, Leaf } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header = ({ title, showBack = false, showCart = true, showUser = true }) => {
  const navigate = useNavigate();
  const { getTotalItems } = useCart();

  return (
    <div className="bg-white/90 backdrop-blur-xl border-b border-fresh-green/10 sticky top-0 z-10">
      <div className="p-4">
        <div className="flex items-center justify-between">
          {/* Left Side */}
          <div className="flex items-center gap-3">
            {showBack && (
              <button
                onClick={() => navigate(-1)}
                className="p-2 hover:bg-fresh-green/10 rounded-lg transition-colors"
              >
                <ArrowLeft size={22} className="text-fresh-green" />
              </button>
            )}
            <div className="flex items-center gap-2">
              <Leaf className="text-leaf" size={26} fill="#84cc16" />
              <h1 className="text-xl font-black tracking-tight text-fresh-green">
                {title || 'Yumistry'}
              </h1>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {showCart && (
              <button
                onClick={() => navigate('/cart')}
                className="relative hover:scale-110 transition-transform"
              >
                <ShoppingCart size={22} className="text-fresh-green" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-leaf text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {getTotalItems()}
                  </span>
                )}
              </button>
            )}
            {showUser && (
              <button
                onClick={() => navigate('/account')}
                className="hover:scale-110 transition-transform"
              >
                <User size={22} className="text-fresh-green" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
