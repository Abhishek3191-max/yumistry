import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Home, Package, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { useDarkMode } from '../context/DarkModeContext';

const OrderSuccess = () => {
  const navigate = useNavigate();
  const { clearCart } = useCart();
  const { darkMode } = useDarkMode();

  useEffect(() => {
    // Clear cart on order success
    clearCart();
  }, [clearCart]);

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden ${darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-[#f0fdf4] via-white to-[#ecfccb]'}`}>
      {/* Background Blobs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-leaf/20 to-[#22c55e]/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-tl from-[#fef08a]/30 to-[#84cc16]/10 rounded-full blur-3xl"
      />

      {/* Success Card */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className={`relative z-10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border max-w-md w-full ${darkMode ? 'bg-gray-800/90 border-gray-700' : 'bg-white/90 border-white'}`}
      >
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="flex justify-center mb-6"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-leaf/20 rounded-full blur-xl"></div>
            <CheckCircle size={80} className="text-leaf relative z-10" strokeWidth={2} />
          </div>
        </motion.div>

        {/* Success Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center mb-8"
        >
          <h1 className={`text-3xl font-black mb-2 ${darkMode ? 'text-white' : 'text-fresh-green'}`}>Order Placed!</h1>
          <p className={`font-medium mb-4 ${darkMode ? 'text-gray-400' : 'text-fresh-green/60'}`}>
            Your order has been successfully placed
          </p>
          
          {/* Order Details */}
          <div className={`rounded-2xl p-4 mb-4 ${darkMode ? 'bg-leaf/30 border-leaf/40' : 'bg-leaf/10'}`}>
            <div className="flex items-center justify-center gap-2 mb-2">
              <Leaf className="text-leaf" size={20} fill="#84cc16" />
              <span className={`font-black ${darkMode ? 'text-white' : 'text-fresh-green'}`}>Yumistry</span>
            </div>
            <p className={`text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-fresh-green/70'}`}>
              Delivery in 8-10 minutes
            </p>
          </div>

          {/* Delivery Info */}
          <div className={`flex items-start gap-3 rounded-xl p-4 border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-fresh-green/10'}`}>
            <div className={`rounded-lg p-2 ${darkMode ? 'bg-leaf/30' : 'bg-leaf/10'}`}>
              <Package size={20} className="text-leaf" />
            </div>
            <div className="text-left flex-1">
              <p className={`text-sm font-bold mb-1 ${darkMode ? 'text-white' : 'text-fresh-green'}`}>Track your order</p>
              <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-fresh-green/60'}`}>
                You'll receive updates on your order status
              </p>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-3"
        >
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate('/orders')}
            className="w-full bg-gradient-to-r from-fresh-green to-leaf text-white py-4 rounded-xl font-bold text-base shadow-lg hover:shadow-xl transition-all"
          >
            View Order Details
          </motion.button>
          
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate('/home')}
            className={`w-full border-2 text-leaf py-4 rounded-xl font-bold text-base transition-all flex items-center justify-center gap-2 ${darkMode ? 'bg-gray-700 border-leaf hover:bg-leaf/10' : 'bg-white border-leaf hover:bg-leaf/5'}`}
          >
            <Home size={20} />
            Continue Shopping
          </motion.button>
        </motion.div>

        {/* Thank You Message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className={`text-center text-xs font-medium mt-6 ${darkMode ? 'text-gray-500' : 'text-fresh-green/50'}`}
        >
          Thank you for choosing Yumistry! 🎉
        </motion.p>
      </motion.div>
    </div>
  );
};

export default OrderSuccess;
