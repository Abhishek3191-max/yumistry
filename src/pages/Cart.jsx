import { useCart } from '../context/CartContext';
import { useDarkMode } from '../context/DarkModeContext';
import { ArrowLeft, Plus, Minus, Trash2, ShoppingBag, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

const Cart = () => {
  const { 
    cart, 
    addToCart, 
    removeFromCart, 
    deleteFromCart, 
    getTotalItems, 
    getSubtotal, 
    getTotalSavings, 
    getDeliveryFee, 
    getTotal 
  } = useCart();
  const { darkMode } = useDarkMode();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className={`min-h-screen pb-20 transition-colors ${
        darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-[#fff5f7] via-white to-[#ffe5ec]'
      }`}>
        {/* Header */}
        <div className={`backdrop-blur-xl border-b sticky top-0 z-10 transition-colors ${
          darkMode ? 'bg-gray-800/90 border-gray-700' : 'bg-white/90 border-[#7f1d1d]/10'
        }`}>
          <div className="flex items-center gap-3 p-4">
            <button onClick={() => navigate('/home')} className={`p-2 rounded-lg transition-colors ${
              darkMode ? 'hover:bg-gray-700' : 'hover:bg-[#7f1d1d]/10'
            }`}>
              <ArrowLeft size={22} className={darkMode ? 'text-white' : 'text-[#7f1d1d]'} />
            </button>
            <h1 className={`text-xl font-black ${
              darkMode ? 'text-white' : 'text-[#7f1d1d]'
            }`}>My Cart</h1>
          </div>
        </div>

        {/* Empty Cart */}
        <div className="flex flex-col items-center justify-center px-4 py-20">
          <div className={`rounded-full p-8 mb-6 ${
            darkMode ? 'bg-gray-800' : 'bg-[#7f1d1d]/10'
          }`}>
            <ShoppingBag size={64} className={darkMode ? 'text-gray-400' : 'text-[#7f1d1d]/40'} />
          </div>
          <h2 className={`text-2xl font-black mb-2 ${
            darkMode ? 'text-white' : 'text-[#7f1d1d]'
          }`}>Your cart is empty</h2>
          <p className={`text-center mb-6 ${
            darkMode ? 'text-gray-400' : 'text-[#7f1d1d]/60'
          }`}>Add items to get started</p>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/home')}
            className="bg-gradient-to-r from-[#7f1d1d] to-[#f52d05] text-white px-8 py-3 rounded-xl font-bold shadow-lg"
          >
            Start Shopping
          </motion.button>
        </div>
        <BottomNav />
      </div>
    );
  }

  return (
    <div className={`min-h-screen pb-32 transition-colors ${
      darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-[#fff5f7] via-white to-[#ffe5ec]'
    }`}>
      {/* Header */}
      <div className={`backdrop-blur-xl border-b sticky top-0 z-10 transition-colors ${
        darkMode ? 'bg-gray-800/90 border-gray-700' : 'bg-white/90 border-[#7f1d1d]/10'
      }`}>
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate('/home')} className={`p-2 rounded-lg transition-colors ${
              darkMode ? 'hover:bg-gray-700' : 'hover:bg-[#7f1d1d]/10'
            }`}>
              <ArrowLeft size={22} className={darkMode ? 'text-white' : 'text-[#7f1d1d]'} />
            </button>
            <div>
              <h1 className={`text-xl font-black ${
                darkMode ? 'text-white' : 'text-[#7f1d1d]'
              }`}>My Cart</h1>
              <p className={`text-xs font-medium ${
                darkMode ? 'text-gray-400' : 'text-[#7f1d1d]/60'
              }`}>{getTotalItems()} items</p>
            </div>
          </div>
          <Leaf className={darkMode ? 'text-green-400' : 'text-[#f52d05]'} size={24} fill={darkMode ? '#4ade80' : '#7f1d1d'} />
        </div>
      </div>

      {/* Cart Items */}
      <div className="p-4 space-y-3">
        {cart.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-white rounded-2xl p-4 shadow-sm border border-[#7f1d1d]/10"
          >
            <div className="flex gap-3">
              {/* Product Image */}
              <div className="w-20 h-20 bg-gray-50 rounded-xl overflow-hidden flex-shrink-0">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Product Details */}
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-sm text-[#7f1d1d] line-clamp-2 mb-1">
                  {item.name}
                </h3>
                <p className="text-xs text-[#7f1d1d]/50 font-semibold mb-2">
                  {item.weight}
                </p>

                <div className="flex items-center justify-between">
                  {/* Price */}
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-base text-[#7f1d1d]">₹{item.price}</span>
                    {item.originalPrice > item.price && (
                      <span className="text-xs text-gray-400 line-through">₹{item.originalPrice}</span>
                    )}
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => deleteFromCart(item.id)}
                      className="p-1.5 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 size={16} className="text-red-500" />
                    </button>
                    <div className="flex items-center bg-gradient-to-r from-[#7f1d1d] to-[#f52d05] rounded-lg">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-1.5 bg-white text-[#f52d05] rounded-l-lg hover:bg-[#7f1d1d]/10 transition-colors"
                      >
                        <Minus size={14} strokeWidth={3} />
                      </button>
                      <span className="px-3 text-white font-bold text-sm">{item.quantity}</span>
                      <button
                        onClick={() => addToCart(item)}
                        className="p-1.5 bg-white text-[#f52d05] rounded-r-lg hover:bg-[#7f1d1d]/10 transition-colors"
                      >
                        <Plus size={14} strokeWidth={3} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bill Details */}
      <div className="mx-4 mb-4 bg-white rounded-2xl p-4 shadow-sm border border-[#7f1d1d]/10">
        <h3 className="font-black text-[#7f1d1d] mb-3">Bill Details</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-[#7f1d1d]/60">Items total</span>
            <span className="font-bold text-[#7f1d1d]">₹{getSubtotal()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#7f1d1d]/60">Delivery fee</span>
            <span className="font-bold text-[#7f1d1d]">
              {getDeliveryFee() === 0 ? (
                <span className="text-[#f52d05]">FREE</span>
              ) : (
                `₹${getDeliveryFee()}`
              )}
            </span>
          </div>
          {getTotalSavings() > 0 && (
            <div className="flex justify-between text-[#f52d05]">
              <span>Your savings</span>
              <span className="font-bold">-₹{getTotalSavings()}</span>
            </div>
          )}
          <div className="border-t border-[#7f1d1d]/10 pt-2 mt-2">
            <div className="flex justify-between">
              <span className="font-black text-[#7f1d1d]">Grand Total</span>
              <span className="font-black text-lg text-[#7f1d1d]">₹{getTotal()}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Button */}
      <div className="fixed bottom-16 left-0 right-0 z-40 px-4">
        <div className="max-w-[450px] mx-auto">
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              console.log('Navigating to checkout');
              navigate('/checkout', { replace: false });
            }}
            className="w-full bg-gradient-to-r from-[#7f1d1d] to-[#f52d05] text-white py-4 rounded-xl font-black text-base shadow-2xl flex items-center justify-between px-6"
          >
            <span>{getTotalItems()} Items | ₹{getTotal()}</span>
            <span>Proceed to Checkout →</span>
          </motion.button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Cart;
