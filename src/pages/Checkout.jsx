import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Phone, User, Wallet, CreditCard, Leaf, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, getTotalItems, getSubtotal, getTotalSavings, getDeliveryFee, getTotal } = useCart();
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
    <div className="min-h-screen bg-gradient-to-br from-[#f0fdf4] via-white to-[#ecfccb] pb-32">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-xl border-b border-fresh-green/10 sticky top-0 z-10">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate('/cart')} className="p-2 hover:bg-fresh-green/10 rounded-lg transition-colors">
              <ArrowLeft size={22} className="text-fresh-green" />
            </button>
            <div>
              <h1 className="text-xl font-black text-fresh-green">Checkout</h1>
              <p className="text-xs text-fresh-green/60 font-medium">{getTotalItems()} items</p>
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
          className="bg-white rounded-2xl p-4 shadow-sm border border-fresh-green/10"
        >
          <div className="flex items-center gap-2 mb-3">
            <MapPin size={20} className="text-leaf" />
            <h3 className="font-black text-fresh-green">Delivery Address</h3>
          </div>
          <textarea
            value={deliveryAddress}
            onChange={(e) => setDeliveryAddress(e.target.value)}
            placeholder="Enter complete delivery address"
            rows="3"
            className="w-full p-3 rounded-xl bg-gray-50 border-2 border-fresh-green/10 outline-none focus:border-leaf transition-all placeholder:text-fresh-green/30 font-medium text-sm resize-none"
          />
        </motion.div>

        {/* Contact Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl p-4 shadow-sm border border-fresh-green/10"
        >
          <div className="flex items-center gap-2 mb-3">
            <User size={20} className="text-leaf" />
            <h3 className="font-black text-fresh-green">Contact Details</h3>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
              <User size={16} className="text-fresh-green/60" />
              <span className="font-medium text-fresh-green">{userData.name || 'Guest User'}</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
              <Phone size={16} className="text-fresh-green/60" />
              <span className="font-medium text-fresh-green">{userData.phone || 'Not provided'}</span>
            </div>
          </div>
        </motion.div>

        {/* Payment Method */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl p-4 shadow-sm border border-fresh-green/10"
        >
          <div className="flex items-center gap-2 mb-3">
            <Wallet size={20} className="text-leaf" />
            <h3 className="font-black text-fresh-green">Payment Method</h3>
          </div>
          <div className="space-y-2">
            {/* Cash on Delivery */}
            <button
              onClick={() => setPaymentMethod('cod')}
              className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                paymentMethod === 'cod'
                  ? 'border-leaf bg-leaf/5'
                  : 'border-fresh-green/10 hover:border-leaf/30'
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
                  <p className="font-bold text-sm text-fresh-green">Cash on Delivery</p>
                  <p className="text-xs text-fresh-green/60">Pay when you receive</p>
                </div>
              </div>
              <Wallet size={20} className="text-fresh-green/40" />
            </button>

            {/* Online Payment */}
            <button
              onClick={() => setPaymentMethod('online')}
              className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                paymentMethod === 'online'
                  ? 'border-leaf bg-leaf/5'
                  : 'border-fresh-green/10 hover:border-leaf/30'
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
                  <p className="font-bold text-sm text-fresh-green">Online Payment</p>
                  <p className="text-xs text-fresh-green/60">UPI, Cards, Wallets</p>
                </div>
              </div>
              <CreditCard size={20} className="text-fresh-green/40" />
            </button>
          </div>
        </motion.div>

        {/* Order Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl p-4 shadow-sm border border-fresh-green/10"
        >
          <h3 className="font-black text-fresh-green mb-3">Order Summary</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-fresh-green/60">Items ({getTotalItems()})</span>
              <span className="font-bold text-fresh-green">₹{getSubtotal()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-fresh-green/60">Delivery fee</span>
              <span className="font-bold text-fresh-green">
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
            <div className="border-t border-fresh-green/10 pt-2 mt-2">
              <div className="flex justify-between">
                <span className="font-black text-fresh-green">Total Amount</span>
                <span className="font-black text-lg text-fresh-green">₹{getTotal()}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Delivery Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-leaf/10 rounded-2xl p-4 border border-leaf/20"
        >
          <p className="text-sm font-bold text-fresh-green text-center">
            🚀 Delivery in 8-10 minutes
          </p>
        </motion.div>
      </div>

      {/* Place Order Button */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-fresh-green/10 p-4">
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
