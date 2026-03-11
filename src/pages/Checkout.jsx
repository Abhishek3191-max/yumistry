import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Phone, User, Wallet, CreditCard, Leaf, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { useDarkMode } from '../context/DarkModeContext';

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, getTotalItems, getSubtotal, getTotalSavings, getDeliveryFee, getTotal } = useCart();
  const { darkMode } = useDarkMode();
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  // Get user data
  const userData = JSON.parse(localStorage.getItem('userData') || '{}');

  const handlePlaceOrder = () => {
    if (!deliveryAddress.trim()) {
      alert('Please enter delivery address');
      return;
    }

    setIsProcessing(true);
    
    // Navigate based on payment method
    setTimeout(() => {
      if (paymentMethod === 'online') {
        navigate('/payment-waiting');
      } else {
        navigate('/order-success');
      }
    }, 1000);
  };

  if (cart.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className={`min-h-screen pb-32 ${darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-[#f0fdf4] via-white to-[#ecfccb]'}`}>
      {/* Header */}
      <div className={`backdrop-blur-xl border-b sticky top-0 z-10 ${darkMode ? 'bg-gray-800/90 border-gray-700' : 'bg-white/90 border-fresh-green/10'}`}>
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate('/cart')} className={`p-2 rounded-lg transition-colors ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-fresh-green/10'}`}>
              <ArrowLeft size={22} className="text-fresh-green" />
            </button>
            <div>
              <h1 className={`text-xl font-black ${darkMode ? 'text-white' : 'text-fresh-green'}`}>Checkout</h1>
              <p className={`text-xs font-medium ${darkMode ? 'text-gray-400' : 'text-fresh-green/60'}`}>{getTotalItems()} items</p>
            </div>
          </div>
          <Leaf className="text-leaf" size={24} fill="#84cc16" />
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Delivery Address */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`rounded-2xl p-4 shadow-sm border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-fresh-green/10'}`}
        >
          <div className="flex items-center gap-2 mb-3">
            <MapPin size={20} className="text-leaf" />
            <h3 className={`font-black ${darkMode ? 'text-white' : 'text-fresh-green'}`}>Delivery Address</h3>
          </div>
          <textarea
            value={deliveryAddress}
            onChange={(e) => setDeliveryAddress(e.target.value)}
            placeholder="Enter complete delivery address"
            rows="3"
            className={`w-full p-3 rounded-xl border-2 outline-none focus:border-leaf transition-all font-medium text-sm resize-none ${darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder:text-gray-400' : 'bg-gray-50 border-fresh-green/10 placeholder:text-fresh-green/30'}`}
          />
        </motion.div>

        {/* Contact Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={`rounded-2xl p-4 shadow-sm border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-fresh-green/10'}`}
        >
          <div className="flex items-center gap-2 mb-3">
            <User size={20} className="text-leaf" />
            <h3 className={`font-black ${darkMode ? 'text-white' : 'text-fresh-green'}`}>Contact Details</h3>
          </div>
          <div className="space-y-2 text-sm">
            <div className={`flex items-center gap-3 p-3 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <User size={16} className={`${darkMode ? 'text-gray-400' : 'text-fresh-green/60'}`} />
              <span className={`font-medium ${darkMode ? 'text-white' : 'text-fresh-green'}`}>{userData.name || 'Guest User'}</span>
            </div>
            <div className={`flex items-center gap-3 p-3 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <Phone size={16} className={`${darkMode ? 'text-gray-400' : 'text-fresh-green/60'}`} />
              <span className={`font-medium ${darkMode ? 'text-white' : 'text-fresh-green'}`}>{userData.phone || 'Not provided'}</span>
            </div>
          </div>
        </motion.div>

        {/* Payment Method */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`rounded-2xl p-4 shadow-sm border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-fresh-green/10'}`}
        >
          <div className="flex items-center gap-2 mb-3">
            <Wallet size={20} className="text-leaf" />
            <h3 className={`font-black ${darkMode ? 'text-white' : 'text-fresh-green'}`}>Payment Method</h3>
          </div>
          <div className="space-y-2">
            {/* Cash on Delivery */}
            <button
              onClick={() => setPaymentMethod('cod')}
              className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                paymentMethod === 'cod'
                  ? 'border-leaf bg-leaf/5'
                  : darkMode ? 'border-gray-600 hover:border-leaf/30 bg-gray-700/50' : 'border-fresh-green/10 hover:border-leaf/30'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  paymentMethod === 'cod' ? 'border-leaf' : 'border-fresh-green/30'
                }`}>
                  {paymentMethod === 'cod' && (
                    <div className="w-3 h-3 rounded-full bg-leaf"></div>
                  )}
                </div>
                <div className="text-left">
                  <p className={`font-bold text-sm ${darkMode ? 'text-white' : 'text-fresh-green'}`}>Cash on Delivery</p>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-fresh-green/60'}`}>Pay when you receive</p>
                </div>
              </div>
              <Wallet size={20} className={`${darkMode ? 'text-gray-400' : 'text-fresh-green/40'}`} />
            </button>

            {/* Online Payment */}
            <button
              onClick={() => setPaymentMethod('online')}
              className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                paymentMethod === 'online'
                  ? 'border-leaf bg-leaf/5'
                  : darkMode ? 'border-gray-600 hover:border-leaf/30 bg-gray-700/50' : 'border-fresh-green/10 hover:border-leaf/30'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  paymentMethod === 'online' ? 'border-leaf' : 'border-fresh-green/30'
                }`}>
                  {paymentMethod === 'online' && (
                    <div className="w-3 h-3 rounded-full bg-leaf"></div>
                  )}
                </div>
                <div className="text-left">
                  <p className={`font-bold text-sm ${darkMode ? 'text-white' : 'text-fresh-green'}`}>Online Payment</p>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-fresh-green/60'}`}>UPI, Cards, Wallets</p>
                </div>
              </div>
              <CreditCard size={20} className={`${darkMode ? 'text-gray-400' : 'text-fresh-green/40'}`} />
            </button>
          </div>
        </motion.div>

        {/* Order Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className={`rounded-2xl p-4 shadow-sm border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-fresh-green/10'}`}
        >
          <h3 className={`font-black mb-3 ${darkMode ? 'text-white' : 'text-fresh-green'}`}>Order Summary</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className={`${darkMode ? 'text-gray-400' : 'text-fresh-green/60'}`}>Items ({getTotalItems()})</span>
              <span className={`font-bold ${darkMode ? 'text-white' : 'text-fresh-green'}`}>₹{getSubtotal()}</span>
            </div>
            <div className="flex justify-between">
              <span className={`${darkMode ? 'text-gray-400' : 'text-fresh-green/60'}`}>Delivery fee</span>
              <span className={`font-bold ${darkMode ? 'text-white' : 'text-fresh-green'}`}>
                {getDeliveryFee() === 0 ? (
                  <span className="text-leaf">FREE</span>
                ) : (
                  `₹${getDeliveryFee()}`
                )}
              </span>
            </div>
            {getTotalSavings() > 0 && (
              <div className="flex justify-between text-leaf">
                <span>Your savings</span>
                <span className="font-bold">-₹{getTotalSavings()}</span>
              </div>
            )}
            <div className={`border-t pt-2 mt-2 ${darkMode ? 'border-gray-600' : 'border-fresh-green/10'}`}>
              <div className="flex justify-between">
                <span className={`font-black ${darkMode ? 'text-white' : 'text-fresh-green'}`}>Total Amount</span>
                <span className={`font-black text-lg ${darkMode ? 'text-white' : 'text-fresh-green'}`}>₹{getTotal()}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Delivery Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className={`rounded-2xl p-4 border ${darkMode ? 'bg-leaf/20 border-leaf/30' : 'bg-leaf/10 border-leaf/20'}`}
        >
          <p className={`text-sm font-bold text-center ${darkMode ? 'text-white' : 'text-fresh-green'}`}>
            🚀 Delivery in 8-10 minutes
          </p>
        </motion.div>
      </div>

      {/* Place Order Button */}
      <div className={`fixed bottom-0 left-0 right-0 z-40 backdrop-blur-lg border-t p-4 ${darkMode ? 'bg-gray-800/95 border-gray-700' : 'bg-white/95 border-fresh-green/10'}`}>
        <div className="max-w-[450px] mx-auto">
          <motion.button
            whileTap={{ scale: isProcessing ? 1 : 0.97 }}
            onClick={handlePlaceOrder}
            disabled={isProcessing}
            className="w-full bg-gradient-to-r from-fresh-green to-leaf text-white py-4 rounded-xl font-black text-base shadow-2xl flex items-center justify-between px-6 disabled:opacity-70"
          >
            {isProcessing ? (
              <>
                <span>Processing...</span>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                />
              </>
            ) : (
              <>
                <span>₹{getTotal()} • Place Order</span>
                <ChevronRight size={20} />
              </>
            )}
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
