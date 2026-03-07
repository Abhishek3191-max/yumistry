import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Home, Package, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

const OrderSuccess = () => {
  const navigate = useNavigate();
  const { clearCart } = useCart();

  useEffect(() => {
    // Clear cart on order success
    clearCart();
  }, [clearCart]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0fdf4] via-white to-[#ecfccb] flex flex-col items-center justify-center p-4 relative overflow-hidden">
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
        className="relative z-10 bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white max-w-md w-full"
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
          <h1 className="text-3xl font-black text-fresh-green mb-2">Order Placed!</h1>
          <p className="text-fresh-green/60 font-medium mb-4">
            Your order has been successfully placed
          </p>
          
          {/* Order Details */}
          <div className="bg-leaf/10 rounded-2xl p-4 mb-4">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Leaf className="text-leaf" size={20} fill="#84cc16" />
              <span className="font-black text-fresh-green">Yumistry</span>
            </div>
            <p className="text-sm text-fresh-green/70 font-semibold">
              Delivery in 8-10 minutes
            </p>
          </div>

          {/* Delivery Info */}
          <div className="flex items-start gap-3 bg-white rounded-xl p-4 border border-fresh-green/10">
            <div className="bg-leaf/10 rounded-lg p-2">
              <Package size={20} className="text-leaf" />
            </div>
            <div className="text-left flex-1">
              <p className="text-sm font-bold text-fresh-green mb-1">Track your order</p>
              <p className="text-xs text-fresh-green/60">
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
            className="w-full bg-white border-2 border-leaf text-leaf py-4 rounded-xl font-bold text-base hover:bg-leaf/5 transition-all flex items-center justify-center gap-2"
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
          className="text-center text-xs text-fresh-green/50 font-medium mt-6"
        >
          Thank you for choosing Yumistry! 🎉
        </motion.p>
      </motion.div>
    </div>
  );
};

export default OrderSuccess;
